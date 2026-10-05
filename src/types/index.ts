export type SectionId =
  | 'hero'
  | 'servicesMarquee'
  | 'about'
  | 'services'
  | 'beforeAfter'
  | 'gallery'
  | 'team'
  | 'pricing'
  | 'testimonials'
  | 'faq'
  | 'booking'
  | 'location';

export type MediaType = 'image' | 'video';
export type Aspect = 'video' | 'square' | 'portrait' | 'wide';

export interface MediaItem {
  src: string;
  alt: string;
  type: MediaType;
  /** Ruta sugerida que se muestra en el placeholder mientras src esté vacío */
  expectedPath: string;
  poster?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  /** USD. null = "Consultar" */
  price: number | null;
  /** Minutos. null = no se muestra */
  durationMin: number | null;
}

export interface PriceItem {
  id: string;
  name: string;
  note: string;
  price: number | null;
  durationMin: number | null;
}

export interface TeamMember {
  name: string;
  role: string;
  photo: MediaItem;
  instagram: string;
}

export interface Testimonial {
  author: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  dateLabel: string;
}

export interface BeforeAfterPair {
  id: string;
  label: string;
  before: MediaItem;
  after: MediaItem;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: `#${string}`;
  section: SectionId;
}

export interface OpeningHours {
  day: string;
  /** Código schema.org: Mo, Tu, We, Th, Fr, Sa, Su */
  code: 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';
  /** 'HH:mm'. Vacío = por confirmar. 'closed' = cerrado */
  open: string;
  close: string;
}

export interface SectionHeader {
  label: string;
  title: readonly string[];
  intro: string;
}
