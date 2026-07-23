export interface Therapy {
  id: string;
  title: string;
  category: "eyes" | "psyche" | "body" | "diagnostics";
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  symptoms?: string[];
  methods?: string[];
  faqs?: { question: string; answer: string }[];
  imagePrompt: string;
}

export interface Booking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  therapyId: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  status: "pending" | "confirmed";
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  text: string;
  rating: number;
}
