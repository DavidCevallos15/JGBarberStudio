import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '../config/media';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SERVICES, SERVICES_SECTION } from '../data/services';
import { useScrollRotate } from '../hooks/useScrollRotate';
import { formatDuration, formatPrice, pad2 } from '../lib/format';
import { fadeUp, REVEAL, stagger } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled, serviceMessage } from '../lib/whatsapp';

export function Services() {
  const photoARef = useRef<HTMLDivElement>(null);
  const photoBRef = useRef<HTMLDivElement>(null);
  const rotateA = useScrollRotate(photoARef, -7, 9);
  const rotateB = useScrollRotate(photoBRef, 6, -9);
  const bookable = isWhatsAppEnabled();

  return (
    <section id="servicios" aria-labelledby="services-title" className="relative overflow-x-clip border-t border-cream/10 bg-ink py-24 text-cream md:py-36 xl:pb-60">
      <Container>
        <SectionHeading id="services-title" header={SERVICES_SECTION} />

        <div className="relative mt-16 md:mt-24">
          {/* Fotos inclinadas flotando sobre la lista (desktop) */}
          <motion.div ref={photoARef} style={{ rotate: rotateA }} className="pointer-events-none absolute -top-56 right-[8%] z-10 hidden w-52 shadow-2xl shadow-black/60 xl:block">
            <MediaSlot src={MEDIA.services.tiltedA} alt="Corte en proceso" aspect="portrait" expectedPath="/media/services/tilted-a.jpg" className="bg-ink" />
          </motion.div>
          <motion.div ref={photoBRef} style={{ rotate: rotateB }} className="pointer-events-none absolute -bottom-40 right-[34%] z-10 hidden w-44 shadow-2xl shadow-black/60 xl:block">
            <MediaSlot src={MEDIA.services.tiltedB} alt="Perfilado de barba a navaja" aspect="portrait" expectedPath="/media/services/tilted-b.jpg" className="bg-ink" />
          </motion.div>

          <motion.ol {...REVEAL} variants={stagger(0.08)} className="border-t border-cream/15">
            {SERVICES.map((service, index) => {
              const row = (
                <>
                  <span className="font-display text-3xl leading-none text-accent transition-colors duration-300 group-hover:text-ink md:text-5xl">
                    {pad2(index + 1)}.
                  </span>
                  <span className="flex flex-col gap-2">
                    <span className="font-display text-4xl uppercase leading-[0.9] md:text-7xl">{service.name}</span>
                    <span className="max-w-md text-sm opacity-70 md:text-base">{service.description}</span>
                  </span>
                  <span className="flex items-center gap-4 justify-self-end">
                    <span className="hidden text-right font-display text-2xl leading-none sm:block md:text-3xl">
                      {formatPrice(service.price)}
                      {service.durationMin !== null && (
                        <span className="block font-sans text-xs opacity-70">{formatDuration(service.durationMin)}</span>
                      )}
                    </span>
                    {bookable && (
                      <ArrowUpRight aria-hidden className="size-8 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:size-10 motion-reduce:transition-none" />
                    )}
                  </span>
                </>
              );
              const rowClass =
                'group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 border-b border-cream/15 px-2 py-6 transition-colors duration-300 hover:bg-accent hover:text-ink md:grid-cols-[7rem_1fr_auto] md:px-4 md:py-8';

              return (
                <motion.li key={service.id} variants={fadeUp}>
                  {bookable ? (
                    <a href={buildWhatsAppUrl(serviceMessage(service.name))} target="_blank" rel="noopener noreferrer" className={rowClass} aria-label={`Reservar ${service.name} por WhatsApp`}>
                      {row}
                    </a>
                  ) : (
                    <div className={rowClass}>{row}</div>
                  )}
                </motion.li>
              );
            })}
          </motion.ol>

          {/* En mobile las fotos van debajo, en par */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:max-w-lg xl:hidden">
            <div className="-rotate-3 shadow-xl shadow-black/50">
              <MediaSlot src={MEDIA.services.tiltedA} alt="Corte en proceso" aspect="portrait" expectedPath="/media/services/tilted-a.jpg" />
            </div>
            <div className="mt-8 rotate-3 shadow-xl shadow-black/50">
              <MediaSlot src={MEDIA.services.tiltedB} alt="Perfilado de barba a navaja" aspect="portrait" expectedPath="/media/services/tilted-b.jpg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
