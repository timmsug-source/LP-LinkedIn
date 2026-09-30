export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  avatarUrl?: string;
  tagline?: string;
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Barrier {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CoreBelief {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
