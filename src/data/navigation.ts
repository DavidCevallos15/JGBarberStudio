import { isSectionEnabled } from '../config/sections';
import type { NavLink } from '../types';

const ALL_LINKS: NavLink[] = [
  { label: 'Servicios', href: '#servicios', section: 'services' },
  { label: 'Nosotros', href: '#nosotros', section: 'about' },
  { label: 'Galería', href: '#galeria', section: 'gallery' },
  { label: 'Precios', href: '#precios', section: 'pricing' },
  { label: 'FAQ', href: '#faq', section: 'faq' },
  { label: 'Ubicación', href: '#ubicacion', section: 'location' },
];

/** Solo los links cuya sección está activa en config/sections.ts */
export const NAV_LINKS: NavLink[] = ALL_LINKS.filter((link) => isSectionEnabled(link.section));
