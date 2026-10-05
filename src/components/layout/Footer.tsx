import { MEDIA } from '../../config/media';
import { SITE } from '../../config/site';
import { ACTIVE_SOCIALS } from '../../config/social';
import { NAV_LINKS } from '../../data/navigation';
import { formatHours } from '../../lib/format';
import { SOCIAL_ICONS } from '../icons/BrandIcons';
import { Container } from '../ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[auto_1fr_auto] md:gap-16 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <img src={MEDIA.brand.logo} alt={SITE.fullName} width={160} height={160} loading="lazy" className="size-36 md:size-40" />
          <p className="max-w-xs text-sm text-muted">
            {SITE.address.street}, {SITE.address.city}, {SITE.address.region}
          </p>
        </div>

        <nav aria-label="Pie de página">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-display text-2xl uppercase leading-none hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-sm">
            {SITE.hours.map((h) => (
              <div key={h.code} className="contents">
                <dt className="text-muted">{h.day}</dt>
                <dd className="text-right tabular-nums">{formatHours(h)}</dd>
              </div>
            ))}
          </dl>
          <ul className="flex gap-3">
            {ACTIVE_SOCIALS.map(({ key, href, label }) => {
              const Icon = SOCIAL_ICONS[key];
              return (
                <li key={key}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-cream/20 transition-colors hover:border-accent hover:text-accent">
                    <Icon className="size-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-cream/10 pb-24 pt-6 text-xs text-muted sm:flex-row sm:justify-between sm:pb-6 sm:pr-24">
        <p>
          © {year} {SITE.name}. Todos los derechos reservados.
        </p>
        <p>{SITE.address.city}, Ecuador</p>
      </Container>
    </footer>
  );
}
