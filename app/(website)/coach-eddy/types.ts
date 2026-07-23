export interface CoachingPillar {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
}

export interface EBook {
  id: string;
  title: string;
  subtitle: string;
  originalPrice: number;
  promoPrice: number;
  coverImage: string;
  features: string[];
  cookingTime?: string;
  pages?: number;
}

export interface CartItem {
  product: EBook;
  quantity: number;
}

export interface BookingSlot {
  date: string;
  time: string;
}

export interface Appointment {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  mainGoal: string;
  notes?: string;
}

export interface VisceralFatInput {
  gender: 'male' | 'female';
  waistCm: number;
  stressLevel: number;
  activityLevel: 'low' | 'medium' | 'high';
}

export interface Testimonial {
  id: string;
  type: 'whatsapp' | 'transformation';
  title: string;
  category?: string;
  message?: string;
  sender?: string;
  dateStr?: string;
  metric?: string;
  imageBefore?: string;
  imageAfter?: string;
}
