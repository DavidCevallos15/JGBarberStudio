import { Marquee } from '../components/ui/Marquee';
import { SERVICES } from '../data/services';

export function ServicesMarquee() {
  return (
    <div aria-label="Servicios" className="border-y border-ink bg-accent py-5 text-ink md:py-7">
      <Marquee duration={35}>
        {SERVICES.map((service) => (
          <span key={service.id} className="flex items-center whitespace-nowrap font-display text-4xl uppercase leading-none md:text-6xl">
            <span className="px-6 md:px-10">{service.name}</span>
            <span aria-hidden className="text-2xl md:text-4xl">
              ✶
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
