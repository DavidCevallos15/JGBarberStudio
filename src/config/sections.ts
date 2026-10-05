import type { SectionId } from '../types';

// ─── SECCIONES ───────────────────────────────────────────────
// El orden del array es el orden en la página. enabled: false la oculta
// (y también su link en el menú).
export const SECTIONS: readonly { id: SectionId; enabled: boolean }[] = [
  { id: 'hero', enabled: true },
  { id: 'servicesMarquee', enabled: true },
  { id: 'about', enabled: true },
  { id: 'services', enabled: true },
  { id: 'beforeAfter', enabled: true },
  { id: 'gallery', enabled: true },
  { id: 'team', enabled: false }, // TODO: activar cuando haya datos del equipo en data/team.ts
  { id: 'pricing', enabled: true },
  { id: 'testimonials', enabled: true },
  { id: 'faq', enabled: true },
  { id: 'booking', enabled: true },
  { id: 'location', enabled: true },
];

export function isSectionEnabled(id: SectionId): boolean {
  return SECTIONS.some((section) => section.id === id && section.enabled);
}
