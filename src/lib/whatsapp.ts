import { WHATSAPP } from '../config/contact';
import { SITE } from '../config/site';

/** true si el botón y los CTA de WhatsApp deben mostrarse */
export function isWhatsAppEnabled(): boolean {
  return WHATSAPP.enabled && WHATSAPP.phone !== '';
}

/** Única fuente del link de WhatsApp en todo el sitio */
export function buildWhatsAppUrl(message: string = WHATSAPP.defaultMessage): string {
  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(serviceName: string): string {
  return `Hola, quiero reservar un turno para: ${serviceName}.`;
}

export interface BookingRequest {
  name: string;
  service: string;
  barber: string;
  date: string; // 'YYYY-MM-DD'
  time: string; // 'HH:mm'
  note: string;
}

function formatDate(isoDate: string): string {
  if (!isoDate) return '';
  const date = new Date(`${isoDate}T00:00:00`);
  return date.toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' });
}

/** Arma el mensaje de reserva que se envía por WhatsApp */
export function buildBookingMessage(request: BookingRequest): string {
  const details = [
    `• Nombre: ${request.name}`,
    `• Servicio: ${request.service}`,
    request.barber && `• Barbero: ${request.barber}`,
    request.date && `• Fecha: ${formatDate(request.date)}`,
    request.time && `• Hora: ${request.time}`,
    request.note && `• Nota: ${request.note}`,
  ].filter(Boolean);
  return `Hola, quiero reservar un turno en ${SITE.name}.\n\n${details.join('\n')}`;
}
