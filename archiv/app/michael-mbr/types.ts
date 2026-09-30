export type ActivePage = 'startseite' | 'leistungen' | 'ueber-uns' | 'kontakt';

export interface Sector {
  id: string;
  title: string;
  titleDe: string;
  description: string;
  details: string;
  standards: string[];
  features: string[];
  iconName: string;
  imageUrl: string;
}

export interface MaterialSpec {
  dinCode: string;
  nameDe: string;
  nameEn: string;
  category: string;
  properties: string[];
  applications: string[];
}

export interface ManufacturingProcess {
  id: string;
  title: string;
  description: string;
  details: string;
  type: 'guss' | 'schmied' | 'rohre';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactState {
  name: string;
  email: string;
  company: string;
  phone: string;
  sector: string;
  material: string;
  message: string;
  termsAccepted: boolean;
}

export interface DownloadDocument {
  id: string;
  titleDe: string;
  titleEn: string;
  type: 'purchasing' | 'delivery' | 'general';
  fileSize: string;
}
