import type { SectionHeader, Service } from '../types';

export const SERVICES_SECTION: SectionHeader = {
  label: 'Nuestros servicios',
  title: ['Lo que', 'hacemos'],
  intro: 'Toca un servicio para reservarlo directo por WhatsApp.',
};

// TODO: confirmar lista real de servicios, precios (USD) y duración (min).
// price: null muestra "Consultar". durationMin: null oculta la duración.
export const SERVICES: Service[] = [
  {
    id: 'corte-clasico',
    name: 'Corte clásico',
    description: 'Tijera y máquina, con terminación limpia y a tu medida.',
    price: null,
    durationMin: null,
  },
  {
    id: 'fade',
    name: 'Fade / Degradado',
    description: 'Low, mid o high fade con transiciones precisas.',
    price: null,
    durationMin: null,
  },
  {
    id: 'barba',
    name: 'Perfilado de barba',
    description: 'Forma, contorno y navaja para una barba definida.',
    price: null,
    durationMin: null,
  },
  {
    id: 'corte-barba',
    name: 'Corte + barba',
    description: 'El servicio completo en una sola visita.',
    price: null,
    durationMin: null,
  },
  {
    id: 'disenos',
    name: 'Diseños y líneas',
    description: 'Detalles a navaja para darle firma a tu corte.',
    price: null,
    durationMin: null,
  },
  {
    id: 'cejas',
    name: 'Perfilado de cejas',
    description: 'Limpieza y forma natural con navaja.',
    price: null,
    durationMin: null,
  },
];
