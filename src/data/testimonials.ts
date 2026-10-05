import type { SectionHeader, Testimonial } from '../types';

export const TESTIMONIALS_SECTION: SectionHeader = {
  label: 'Reseñas',
  title: ['Lo que', 'dicen'],
  intro: 'Opiniones de clientes en Google Maps.',
};

// TODO: copiar reseñas reales del perfil de Google Maps (autor, texto, estrellas).
// Mientras esté vacío, la sección muestra la calificación y un botón "Ver reseñas en Google Maps".
// Ejemplo:
// { author: 'Nombre A.', text: 'Texto de la reseña…', rating: 5, dateLabel: 'Hace 2 semanas' },
export const TESTIMONIALS: Testimonial[] = [];
