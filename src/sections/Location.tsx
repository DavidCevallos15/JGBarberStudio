import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { PHONE } from '../config/contact';
import { MEDIA } from '../config/media';
import { SITE } from '../config/site';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { RollButton } from '../components/ui/RollButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { formatHours } from '../lib/format';
import { fadeUp, REVEAL, stagger } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../lib/whatsapp';

export function Location() {
  const { address, maps, hours, location } = SITE;

  return (
    <section id="ubicacion" aria-labelledby="location-title" className="border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <motion.div {...REVEAL} variants={stagger(0.1)} className="flex flex-col gap-10 lg:col-span-5">
          <SectionHeading id="location-title" compact header={{ label: location.label, title: location.title, intro: '' }} />

          <motion.address variants={fadeUp} className="flex flex-col gap-5 not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>
                {address.street}
                <br />
                {address.reference}, {address.city} {address.postalCode}
              </span>
            </p>
            {PHONE.display !== '' && (
              <p className="flex gap-3">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
                <a href={`tel:${PHONE.tel}`} className="underline-offset-4 hover:underline">
                  {PHONE.display}
                </a>
              </p>
            )}
            <div className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
              <dl className="grid flex-1 grid-cols-[auto_auto] gap-x-6 gap-y-1 text-sm sm:max-w-xs">
                {hours.map((h) => (
                  <div key={h.code} className="contents">
                    <dt className="text-ink/70">{h.day}</dt>
                    <dd className="text-right tabular-nums">{formatHours(h)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.address>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <RollButton href={maps.url} external variant="ink">
              {location.directions}
            </RollButton>
            {isWhatsAppEnabled() && (
              <RollButton href={buildWhatsAppUrl()} external variant="outline">
                WhatsApp
              </RollButton>
            )}
          </motion.div>
        </motion.div>

        <motion.div {...REVEAL} variants={stagger(0.12)} className="flex flex-col gap-4 lg:col-span-7">
          <motion.div variants={fadeUp} className="relative aspect-[4/3] overflow-hidden border border-line bg-ink/5 lg:aspect-[16/11]">
            <iframe
              title={`Mapa de ${SITE.name}`}
              src={maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[60%] contrast-[1.05]"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <MediaSlot src={MEDIA.location.storefront} alt={`Fachada de ${SITE.name}`} aspect="wide" expectedPath="/media/location/storefront.jpg" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
