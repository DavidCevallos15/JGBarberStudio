import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE } from '../config/site';
import { SOCIAL } from '../config/social';
import { GoogleIcon } from '../components/icons/BrandIcons';
import { Container } from '../components/ui/Container';
import { Marquee } from '../components/ui/Marquee';
import { RollButton } from '../components/ui/RollButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '../data/testimonials';
import { cn } from '../lib/cn';
import { fadeUp, REVEAL, stagger } from '../lib/motion';

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span role="img" aria-label={`${value} de 5 estrellas`} className={cn('flex gap-1 text-accent', className)}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} aria-hidden className={cn('size-full', i >= value && 'opacity-25')} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

export function Testimonials() {
  const rating = SITE.rating.value.toFixed(1).replace('.', ',');

  return (
    <section id="testimonios" aria-labelledby="testimonials-title" className="overflow-hidden border-t border-cream/10 bg-ink py-24 text-cream md:py-36">
      <Container className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <SectionHeading id="testimonials-title" header={TESTIMONIALS_SECTION} />
        <motion.div {...REVEAL} variants={stagger(0.1)} className="flex flex-col items-start gap-3 md:items-end">
          <motion.p variants={fadeUp} className="font-display text-[clamp(5rem,14vw,10rem)] leading-[0.8]">
            {rating}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Stars value={Math.round(SITE.rating.value)} className="h-6 [&>svg]:w-6" />
          </motion.div>
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm text-muted">
            <GoogleIcon className="size-4" /> Calificación en {SITE.rating.source}
          </motion.p>
        </motion.div>
      </Container>

      {TESTIMONIALS.length > 0 && (
        <Marquee duration={70} pauseOnHover className="mt-16 md:mt-20">
          {TESTIMONIALS.map((t) => (
            <figure key={`${t.author}-${t.dateLabel}`} className="mx-3 flex w-[20rem] shrink-0 flex-col gap-5 border border-cream/15 p-6 md:w-[26rem] md:p-8">
              <Stars value={t.rating} className="h-4 [&>svg]:w-4" />
              <blockquote className="text-base leading-relaxed text-cream/90 md:text-lg">“{t.text}”</blockquote>
              <figcaption className="mt-auto flex items-baseline justify-between gap-4">
                <span className="font-display text-2xl uppercase leading-none">{t.author}</span>
                <span className="text-xs text-muted">{t.dateLabel}</span>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      )}

      {SOCIAL.googleMaps !== '' && (
        <Container className="mt-14">
          <RollButton href={SOCIAL.googleMaps} external variant="outline">
            Ver reseñas en Google Maps
          </RollButton>
        </Container>
      )}
    </section>
  );
}
