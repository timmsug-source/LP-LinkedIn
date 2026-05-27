import type { Metadata } from 'next';
import './naturheilpraxis-brenscheidt.css';

export const metadata: Metadata = {
  title: 'Naturheilpraxis Brenscheidt – Leichlingen & Witzhelden',
  description: 'Ganzheitliche Naturheilkunde: Augenakupunktur bei AMD, Hypnosetherapie, Wirbelsäulentherapie und Dunkelfeld-Diagnostik in Leichlingen und Witzhelden.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
