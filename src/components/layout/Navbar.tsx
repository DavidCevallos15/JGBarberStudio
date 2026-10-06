import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import { SITE } from '../../config/site';
import { NAV_LINKS } from '../../data/navigation';
import { cn } from '../../lib/cn';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../../lib/whatsapp';
import { RollButton } from '../ui/RollButton';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setSolid(y > 48));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 text-cream transition-colors duration-300',
        solid ? 'border-b border-cream/10 bg-ink/95 backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 md:h-20 lg:px-10">
        <a href="#hero" className="flex items-center gap-3" aria-label={`${SITE.name}, ir al inicio`}>
          <span aria-hidden className="grid size-10 shrink-0 place-items-center rounded-full bg-ink font-display text-xl uppercase leading-none tracking-wide ring-1 ring-cream/20">
            BS
          </span>
          <span className="hidden whitespace-nowrap font-display min-[400px]:inline text-2xl uppercase leading-none tracking-wide">{SITE.name}</span>
        </a>

        <ul className="hidden items-center gap-8 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium uppercase tracking-[0.14em] text-cream/80 transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {isWhatsAppEnabled() && (
            <div className="hidden sm:block">
              <RollButton href={buildWhatsAppUrl()} external className="px-5 py-3 text-lg">
                Reservar
              </RollButton>
            </div>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center xl:hidden"
          >
            <Menu aria-hidden className="size-7" />
          </button>
        </div>
      </nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
