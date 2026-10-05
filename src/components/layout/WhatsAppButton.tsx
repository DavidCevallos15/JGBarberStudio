import { buildWhatsAppUrl, isWhatsAppEnabled } from '../../lib/whatsapp';
import { WhatsAppIcon } from '../icons/BrandIcons';

/** Botón flotante global de WhatsApp (reemplaza al chatbot) */
export function WhatsAppButton() {
  if (!isWhatsAppEnabled()) return null;

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-4 right-4 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-ink/30 transition-transform hover:scale-105 sm:bottom-6 sm:right-6 motion-reduce:transition-none"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring motion-reduce:hidden" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  );
}
