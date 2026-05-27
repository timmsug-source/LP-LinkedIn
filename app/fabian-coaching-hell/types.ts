export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatarUrl: string;
  rating: number;
  highlightText: string;
  fullText: string;
  category: 'selbststaendig' | 'fuehrungskraft' | 'unternehmer';
  stats?: {
    weightLost: string;
    duration: string;
  };
}

export interface PainPoint {
  id: string;
  title: string;
  iconName: string;
  shortText: string;
  longText: string;
  realLifeExample: string;
}

export interface Obstacle {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  problemText: string;
  solutionText: string;
}

export interface GoldRule {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
