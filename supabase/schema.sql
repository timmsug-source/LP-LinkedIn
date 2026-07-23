-- ============================================================
-- Platform Hub Schema (ts-hub Supabase project)
-- Run in: Supabase SQL Editor → ts-hub project
--
-- Reflects the live DB incl. the fixes found during testing:
--   • is_admin() helper to avoid RLS infinite recursion on profiles
--   • explicit GRANTs to the `authenticated` role (project was created
--     with "Automatically expose new tables" OFF, so grants are manual)
-- ============================================================

-- ── Admin helper ─────────────────────────────────────────────
-- SECURITY DEFINER (owned by postgres → BYPASSRLS) so reading the role
-- inside a profiles policy does NOT recurse. Used by every admin policy.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

revoke execute on function public.is_admin() from anon, public;
grant execute on function public.is_admin() to authenticated;


-- ── profiles ────────────────────────────────────────────────
create table public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  role        text not null default 'client' check (role in ('admin', 'client')),
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- NOTE: admin_all must use is_admin() (NOT a subquery on profiles) — a
-- profiles-policy that selects from profiles causes "infinite recursion".
create policy "admin_all" on public.profiles
  for all using (public.is_admin());

create policy "own_profile" on public.profiles
  for select using (id = auth.uid());

create policy "own_profile_update" on public.profiles
  for update using (id = auth.uid());

-- Auto-create profile on sign-up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer
set search_path = '' as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

revoke execute on function public.handle_new_user() from anon, authenticated, public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();


-- ── sites ────────────────────────────────────────────────────
create table public.sites (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  client_name  text not null,
  domain       text,
  owner_id     uuid references public.profiles(id) on delete set null,
  created_at   timestamptz not null default now()
);

alter table public.sites enable row level security;

create policy "admin_all" on public.sites
  for all using (public.is_admin());

create policy "client_own" on public.sites
  for select using (owner_id = auth.uid());


-- ── content_blocks ───────────────────────────────────────────
create table public.content_blocks (
  id          uuid primary key default gen_random_uuid(),
  site_id     uuid not null references public.sites(id) on delete cascade,
  module      text not null default 'Allgemein',  -- Gruppierung nach Website-Sektion (Hero, Kontakt …)
  key         text not null,
  label       text,
  value       text not null default '',
  type        text not null default 'text' check (type in ('text', 'textarea', 'html', 'image')),
  sort_order  int not null default 0,
  updated_at  timestamptz not null default now(),
  unique (site_id, key)
);

alter table public.content_blocks enable row level security;

create policy "admin_all" on public.content_blocks
  for all using (public.is_admin());

create policy "client_own_site" on public.content_blocks
  for all using (
    site_id in (select id from public.sites where owner_id = auth.uid())
  );


-- ── blog_posts ───────────────────────────────────────────────
create table public.blog_posts (
  id           uuid primary key default gen_random_uuid(),
  site_id      uuid not null references public.sites(id) on delete cascade,
  title        text not null,
  slug         text not null,
  content      text not null default '',
  published    boolean not null default false,
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  unique (site_id, slug)
);

alter table public.blog_posts enable row level security;

create policy "admin_all" on public.blog_posts
  for all using (public.is_admin());

create policy "client_own_site" on public.blog_posts
  for all using (
    site_id in (select id from public.sites where owner_id = auth.uid())
  );


-- ── projects (Freelancer module) ─────────────────────────────
create table public.projects (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  client_name  text,
  status       text not null default 'active' check (status in ('active', 'paused', 'done')),
  notes        text,
  total_hours  numeric not null default 0,   -- kept in sync by trigger below
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table public.projects enable row level security;

-- Only admin accesses projects
create policy "admin_all" on public.projects
  for all using (public.is_admin());


-- ── time_entries ─────────────────────────────────────────────
create table public.time_entries (
  id                uuid primary key default gen_random_uuid(),
  project_id        uuid not null references public.projects(id) on delete cascade,
  description       text,
  started_at        timestamptz not null default now(),
  stopped_at        timestamptz,
  duration_minutes  int,
  created_at        timestamptz not null default now()
);

alter table public.time_entries enable row level security;

create policy "admin_all" on public.time_entries
  for all using (public.is_admin());

-- Keep projects.total_hours in sync automatically.
-- (Postgres forbids a subquery in a generated column, hence a trigger.)
create or replace function public.recalc_project_hours()
returns trigger language plpgsql security definer
set search_path = '' as $$
declare
  pid uuid := coalesce(new.project_id, old.project_id);
begin
  update public.projects
  set total_hours = coalesce(
    (select sum(duration_minutes) from public.time_entries where project_id = pid), 0
  ) / 60.0
  where id = pid;
  return null;
end;
$$;

revoke execute on function public.recalc_project_hours() from anon, authenticated, public;

create trigger time_entries_recalc
  after insert or update or delete on public.time_entries
  for each row execute function public.recalc_project_hours();


-- ── invoices (Status-Tracking; admin only) ───────────────────
create table public.invoices (
  id          uuid primary key default gen_random_uuid(),
  project_id  uuid not null references public.projects(id) on delete cascade,
  number      text,
  amount      numeric,
  issued_on   date,
  due_on      date,
  status      text not null default 'offen' check (status in ('offen', 'bezahlt', 'ueberfaellig')),
  note        text,
  created_at  timestamptz not null default now()
);

alter table public.invoices enable row level security;

create policy "admin_all" on public.invoices
  for all using (public.is_admin());


-- ── site_comments (Kommunikation Admin <-> Kunde, pro Website) ─
-- Liegt bewusst an der Website (nicht am internen Projekt), damit der Kunde
-- den Thread in seinem CMS sieht und beantworten kann. author_name/-role sind
-- denormalisiert, weil ein Kunde die profiles-Zeile des Admins per RLS nicht
-- lesen darf (own_profile).
create table public.site_comments (
  id           uuid primary key default gen_random_uuid(),
  site_id      uuid not null references public.sites(id) on delete cascade,
  author_id    uuid references public.profiles(id) on delete set null,
  author_name  text not null default 'Unbekannt',
  author_role  text not null default 'client' check (author_role in ('admin', 'client')),
  body         text not null,
  created_at   timestamptz not null default now()
);

alter table public.site_comments enable row level security;

create policy "admin_all" on public.site_comments
  for all using (public.is_admin());

create policy "client_read_own_site" on public.site_comments
  for select using (
    site_id in (select id from public.sites where owner_id = auth.uid())
  );

create policy "client_insert_own_site" on public.site_comments
  for insert with check (
    author_id = auth.uid()
    and site_id in (select id from public.sites where owner_id = auth.uid())
  );

create policy "delete_own" on public.site_comments
  for delete using (author_id = auth.uid());


-- ── GRANTs for API roles ─────────────────────────────────────
-- Required because the project was created with "Automatically expose new
-- tables" OFF. RLS still gates WHICH rows; these grants gate table access.
grant usage on schema public to anon, authenticated, service_role;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to authenticated;

-- service_role (used by server actions via the service key) needs full access.
grant all privileges on all tables in schema public to service_role;
grant all privileges on all sequences in schema public to service_role;
grant all privileges on all functions in schema public to service_role;

-- Cover future tables/sequences too
alter default privileges in schema public
  grant select, insert, update, delete on tables to authenticated;
alter default privileges in schema public
  grant usage, select on sequences to authenticated;
alter default privileges in schema public
  grant all on tables to service_role;
alter default privileges in schema public
  grant all on sequences to service_role;
alter default privileges in schema public
  grant all on functions to service_role;


-- ── Storage: site-media bucket ───────────────────────────────
insert into storage.buckets (id, name, public)
values ('site-media', 'site-media', true)
on conflict (id) do nothing;

create policy "admin_upload" on storage.objects
  for insert with check (bucket_id = 'site-media' and public.is_admin());

create policy "client_upload_own" on storage.objects
  for insert with check (
    bucket_id = 'site-media'
    and split_part(name, '/', 1) in (
      select id::text from public.sites where owner_id = auth.uid()
    )
  );

-- Public object URLs work because the bucket is public.
-- SELECT (= LISTING) is scoped so clients can only list their own folder.
create policy "site_media_list_admin" on storage.objects
  for select using (bucket_id = 'site-media' and public.is_admin());

create policy "site_media_list_own" on storage.objects
  for select using (
    bucket_id = 'site-media'
    and split_part(name, '/', 1) in (
      select id::text from public.sites where owner_id = auth.uid()
    )
  );

create policy "admin_delete" on storage.objects
  for delete using (bucket_id = 'site-media' and public.is_admin());
