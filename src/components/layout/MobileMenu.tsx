import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ACTIVE_SOCIALS } from '../../config/social';
import { NAV_LINKS } from '../../data/navigation';
import { fadeUp, stagger } from '../../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../../lib/whatsapp';
import { SOCIAL_ICONS } from '../icons/BrandIcons';
import { RollButton } from '../ui/RollButton';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-4 pb-8 pt-4 text-cream sm:px-6 xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-end">
            <button ref={closeRef} type="button" onClick={onClose} aria-label="Cerrar menú" className="grid size-11 place-items-center">
              <X aria-hidden className="size-7" />
            </button>
          </div>

          <motion.ul className="mt-6 flex flex-col gap-1" variants={stagger(0.06, 0.1)} initial="hidden" animate="visible">
            {NAV_LINKS.map((link) => (
              <motion.li key={link.href} variants={fadeUp}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-cream/10 py-3 font-display text-5xl uppercase leading-none transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-auto flex flex-col gap-6">
            {isWhatsAppEnabled() && (
              <RollButton href={buildWhatsAppUrl()} external className="w-full">
                Reservar por WhatsApp
              </RollButton>
            )}
            <ul className="flex gap-4">
              {ACTIVE_SOCIALS.map(({ key, href, label }) => {
                const Icon = SOCIAL_ICONS[key];
                return (
                  <li key={key}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-cream/20 hover:border-accent hover:text-accent">
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
