// ─── WHATSAPP ────────────────────────────────────────────────
// enabled: false oculta el botón flotante y todos los CTA de WhatsApp
// phone: formato internacional, sin "+", sin espacios (ej. '5939XXXXXXXX')
// Número ficticio de ejemplo (demo de portafolio).
interface WhatsAppConfig {
  readonly enabled: boolean;
  readonly phone: string;
  readonly defaultMessage: string;
}

export const WHATSAPP: WhatsAppConfig = {
  enabled: true,
  phone: '593990000000', // placeholder: [+593 99 000 0000]
  defaultMessage: 'Hola, quiero reservar un turno en [BARBER STUDIO].',
};

// Teléfono para llamadas (se muestra en Ubicación y en el JSON-LD)
export const PHONE: { readonly display: string; readonly tel: string } = {
  display: '[+593 99 000 0000]',
  tel: '+593990000000',
};
