// ─── WHATSAPP ────────────────────────────────────────────────
// enabled: false oculta el botón flotante y todos los CTA de WhatsApp
// phone: formato internacional, sin "+", sin espacios (ej. '5939XXXXXXXX')
// Número tomado del perfil público de Google Maps (098 258 4290).
interface WhatsAppConfig {
  readonly enabled: boolean;
  readonly phone: string;
  readonly defaultMessage: string;
}

export const WHATSAPP: WhatsAppConfig = {
  enabled: true,
  phone: '593982584290', // TODO: confirmar que este número tiene WhatsApp
  defaultMessage: 'Hola, quiero reservar un turno en JG Barber Estudio.',
};

// Teléfono para llamadas (se muestra en Ubicación y en el JSON-LD)
export const PHONE: { readonly display: string; readonly tel: string } = {
  display: '098 258 4290',
  tel: '+593982584290',
};
