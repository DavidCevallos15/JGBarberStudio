import type { OpeningHours } from '../types/index.ts';

// ─── DATOS GENERALES DEL NEGOCIO ─────────────────────────────
// Fuente de dirección, teléfono y horario: perfil público de Google Maps (05-10-2026).
// Google mostró solo el horario del lunes; el resto queda por confirmar.

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
  name: 'JG Barber Estudio',
  fullName: 'JG Barber Estudio / Barber Shop',
  description:
    'JG Barber Estudio, barbería en Portoviejo (Manabí). Cortes, fades y perfilado de barba. Reserva tu turno por WhatsApp.',

  // Dominio final sin "/" al final (ej. 'https://jgbarberestudio.com').
  // Vacío = no se generan canonical, og:url ni og:image absolutos.
  url: '' as string, // TODO: dominio cuando se haga deploy en Vercel
  locale: 'es_EC',
  lang: 'es',

  address: {
    street: 'Parque Ecológico El Mamey',
    city: 'Portoviejo',
    region: 'Manabí',
    postalCode: '130105',
    country: 'EC',
    reference: 'Dentro del Parque Mamey',
  },
  geo: { lat: -1.063504, lng: -80.4543797 },
  maps: {
    url: 'https://maps.app.goo.gl/9NH6s78j3QNGWQkB9',
    embedUrl: 'https://maps.google.com/maps?q=-1.063504,-80.4543797&z=17&output=embed',
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
    badge: 'Reserva ahora • JG Barber Estudio • ',
  },
  about: {
    label: 'Nuestra filosofía',
    manifesto: ['Cada corte', 'es oficio,', 'no trámite.'],
    body: 'En JG Barber Estudio te escuchamos antes de tomar la máquina. Trabajamos sin apuros, cuidando cada línea para que salgas con un corte que se adapte a tu estilo y a tu día a día.',
    cta: 'Reserva tu silla',
  },
  booking: {
    label: 'Reservas',
    title: ['Reserva', 'tu turno'],
    intro:
      'Completa los datos y te abrimos WhatsApp con el mensaje listo. La disponibilidad se confirma por chat.',
    submit: 'Enviar por WhatsApp',
    badge: 'Reserva ahora • JG Barber Estudio • ',
  },
  location: {
    label: 'Ubicación',
    title: ['Te esperamos', 'en El Mamey'],
    directions: 'Cómo llegar',
  },
} as const;
