import { motion } from 'motion/react';
import { SITE } from '../config/site';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { SpinBadge } from '../components/ui/SpinBadge';
import { formatHours } from '../lib/format';
import { fadeUpLarge, REVEAL } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../lib/whatsapp';
import { BookingForm } from './Booking/BookingForm';

export function Booking() {
  // La reserva se envía por WhatsApp: sin WhatsApp no hay sección.
  if (!isWhatsAppEnabled()) return null;
  const { booking, hours } = SITE;

  return (
    <section id="reservar" aria-labelledby="booking-title" className="border-t border-cream/10 bg-ink py-24 text-cream md:py-36">
      <Container>
        <motion.div {...REVEAL} variants={fadeUpLarge} className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-10 lg:col-span-5">
            <SectionHeading id="booking-title" compact header={{ label: booking.label, title: booking.title, intro: booking.intro }} />
            <dl className="grid max-w-xs grid-cols-[auto_auto] gap-x-6 gap-y-1 text-sm">
              {hours.map((h) => (
                <div key={h.code} className="contents">
                  <dt className="text-muted">{h.day}</dt>
                  <dd className="text-right tabular-nums">{formatHours(h)}</dd>
                </div>
              ))}
            </dl>
            <div className="hidden lg:block">
              <SpinBadge text={booking.badge} href={buildWhatsAppUrl()} label="Abrir WhatsApp" />
            </div>
          </div>

          <div className="border border-cream/15 p-6 sm:p-10 lg:col-span-7">
            <BookingForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
