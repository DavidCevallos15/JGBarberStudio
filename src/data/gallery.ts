import type { MediaItem, SectionHeader } from '../types';

export const GALLERY_SECTION: SectionHeader = {
  label: 'Galería',
  title: ['Trabajo', 'reciente'],
  intro: 'Algunos cortes salidos de la silla. Hay más en nuestro Instagram.',
};

// Sube las fotos (sácalas de Instagram) a /public/media/gallery/ y pega la ruta en src.
// Para agregar una foto, copia una línea y cambia src, alt y expectedPath.
export const GALLERY: MediaItem[] = [
  { src: '', alt: 'Fade clásico', type: 'image', expectedPath: '/media/gallery/01.jpg' },
  { src: '', alt: 'Perfilado de barba', type: 'image', expectedPath: '/media/gallery/02.jpg' },
  { src: '', alt: 'Corte texturizado', type: 'image', expectedPath: '/media/gallery/03.jpg' },
  { src: '', alt: 'Diseño a navaja', type: 'image', expectedPath: '/media/gallery/04.jpg' },
  { src: '', alt: 'Interior del estudio', type: 'image', expectedPath: '/media/gallery/05.jpg' },
  { src: '', alt: 'Corte y barba', type: 'image', expectedPath: '/media/gallery/06.jpg' },
  { src: '', alt: 'Detalle de terminación', type: 'image', expectedPath: '/media/gallery/07.jpg' },
  { src: '', alt: 'Cliente satisfecho', type: 'image', expectedPath: '/media/gallery/08.jpg' },
];
