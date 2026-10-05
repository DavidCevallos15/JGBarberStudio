import type { BeforeAfterPair, SectionHeader } from '../types';

export const BEFORE_AFTER_SECTION: SectionHeader = {
  label: 'Antes y después',
  title: ['La', 'diferencia'],
  intro: 'Clientes reales, resultados reales.',
};

// Sube cada par a /public/media/before-after/ y pega las rutas en src.
export const BEFORE_AFTER: BeforeAfterPair[] = [
  {
    id: 'par-1',
    label: 'Fade + barba',
    before: { src: '', alt: 'Antes: corte y barba sin definir', type: 'image', expectedPath: '/media/before-after/01-antes.jpg' },
    after: { src: '', alt: 'Después: fade y barba perfilada', type: 'image', expectedPath: '/media/before-after/01-despues.jpg' },
  },
  {
    id: 'par-2',
    label: 'Corte clásico',
    before: { src: '', alt: 'Antes: cabello largo sin forma', type: 'image', expectedPath: '/media/before-after/02-antes.jpg' },
    after: { src: '', alt: 'Después: corte clásico terminado', type: 'image', expectedPath: '/media/before-after/02-despues.jpg' },
  },
  {
    id: 'par-3',
    label: 'Perfilado de barba',
    before: { src: '', alt: 'Antes: barba crecida', type: 'image', expectedPath: '/media/before-after/03-antes.jpg' },
    after: { src: '', alt: 'Después: barba perfilada a navaja', type: 'image', expectedPath: '/media/before-after/03-despues.jpg' },
  },
];
