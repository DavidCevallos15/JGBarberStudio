import type { OpeningHours } from '../types';

/** '09:00' → '9:00' · '18:30' → '18:30' */
function shortTime(time: string): string {
  return time.replace(/^0/, '');
}

export function formatHours(hours: OpeningHours): string {
  if (hours.open === 'closed') return 'Cerrado';
  if (!hours.open || !hours.close) return 'Por confirmar';
  return `${shortTime(hours.open)} – ${shortTime(hours.close)}`;
}

export function formatPrice(price: number | null): string {
  if (price === null) return 'Consultar';
  return `$${Number.isInteger(price) ? price : price.toFixed(2)}`;
}

export function formatDuration(minutes: number | null): string {
  if (minutes === null) return '';
  return `${minutes} min`;
}

/** '01', '02'… */
export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}
