import type { OpeningHours } from '../types/index.ts';

// ─── DATOS GENERALES DEL NEGOCIO ─────────────────────────────
// Datos ficticios de ejemplo (demo de portafolio): nombre, dirección y contacto son placeholders.
// Solo el horario del lunes está definido; el resto queda por confirmar.

const HOURS: readonly OpeningHours[] = [
  { day: 'Lunes', code: 'Mo', open: '09:00', close: '18:00' },
  { day: 'Martes', code: 'Tu', open: '', close: '' }, // TODO: confirmar horario
  { day: 'Miércoles', code: 'We', open: '', close: '' }, // TODO: confirmar horario
  { day: 'Jueves', code: 'Th', open: '', close: '' }, // TODO: confirmar horario
  { day: 'Viernes', code: 'Fr', open: '', close: '' }, // TODO: confirmar horario
  { day: 'Sábado', code: 'Sa', open: '', close: '' }, // TODO: confirmar horario
  { day: 'Domingo', code: 'Su', open: '', close: '' }, // TODO: confirmar horario (usa 'closed' si no abren)
];

export const SITE = {
  name: '[BARBER STUDIO]',
  fullName: '[BARBER STUDIO] / Barber Shop',
  description:
    '[BARBER STUDIO], barbería en Portoviejo (Manabí). Cortes, fades y perfilado de barba. Reserva tu turno por WhatsApp.',

  // Dominio final sin "/" al final (ej. 'https://tudominio.com').
  // Vacío = no se generan canonical, og:url ni og:image absolutos.
  url: '' as string, // TODO: dominio cuando se haga deploy en Vercel
  locale: 'es_EC',
  lang: 'es',

  address: {
    street: '[Dirección de ejemplo]',
    city: 'Portoviejo',
    region: 'Manabí',
    postalCode: '',
    country: 'EC',
    reference: '[Referencia]',
  },
  // Coordenadas aproximadas del centro de la ciudad (no corresponden a ningún local).
  geo: { lat: -1.0546, lng: -80.4545 },
  maps: {
    // Búsqueda genérica de la ciudad, sin apuntar a ningún negocio.
    url: 'https://www.google.com/maps/search/?api=1&query=Portoviejo%2C%20Manab%C3%AD',
  },
  rating: { value: 5, source: 'Google' },
  hours: HOURS,

  // ─── TEXTOS DE SECCIONES SIN ARCHIVO DE DATA PROPIO ──────────
  // TODO: confirmar slogan con el cliente (propuesta editable)
  hero: {
    titleLines: ['Cortes con', 'carácter'],
    subtitle:
      'Barbería de estudio en Portoviejo. Fades precisos, barbas definidas y el tiempo que tu corte necesita.',
    cta: 'Reservar turno',
    secondaryCta: 'Ver servicios',
    badge: 'Reserva ahora • [BARBER STUDIO] • ',
  },
  about: {
    label: 'Nuestra filosofía',
    manifesto: ['Cada corte', 'es oficio,', 'no trámite.'],
    body: 'En [BARBER STUDIO] te escuchamos antes de tomar la máquina. Trabajamos sin apuros, cuidando cada línea para que salgas con un corte que se adapte a tu estilo y a tu día a día.',
    cta: 'Reserva tu silla',
  },
  booking: {
    label: 'Reservas',
    title: ['Reserva', 'tu turno'],
    intro:
      'Completa los datos y te abrimos WhatsApp con el mensaje listo. La disponibilidad se confirma por chat.',
    submit: 'Enviar por WhatsApp',
    badge: 'Reserva ahora • [BARBER STUDIO] • ',
  },
  location: {
    label: 'Ubicación',
    title: ['Te esperamos', 'en Portoviejo'],
    directions: 'Cómo llegar',
  },
} as const;
