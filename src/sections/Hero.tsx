import { useRef } from 'react';
import { motion } from 'motion/react';
import { MEDIA } from '../config/media';
import { SITE } from '../config/site';
import { MediaSlot } from '../components/ui/MediaSlot';
import { RollButton } from '../components/ui/RollButton';
import { SpinBadge } from '../components/ui/SpinBadge';
import { Container } from '../components/ui/Container';
import { useParallax } from '../hooks/useParallax';
import { cn } from '../lib/cn';
import { fadeUp, stagger, wordUp } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../lib/whatsapp';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const y = useParallax(ref);
  const { hero, address, rating } = SITE;

  return (
    <section ref={ref} id="hero" aria-labelledby="hero-title" className="relative isolate flex min-h-[640px] h-svh items-end overflow-hidden bg-ink text-cream">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <MediaSlot
          fill
          priority
          type="video"
          src={MEDIA.hero.video}
          poster={MEDIA.hero.poster}
          alt={`Barbero trabajando en ${SITE.name}`}
          expectedPath="/media/hero/hero-bg.mp4"
          className="text-cream"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <Container className="pb-12 pt-28 md:pb-16">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-cream/80"
        >
          {address.city} · {address.region} · ★ {rating.value.toFixed(1).replace('.', ',')} en {rating.source}
        </motion.p>

        <motion.h1
          id="hero-title"
          initial="hidden"
          animate="visible"
          variants={stagger(0.09, 0.15)}
          className="font-display text-[clamp(4.5rem,17vw,15rem)] uppercase leading-[0.82] tracking-tight"
        >
          {hero.titleLines.map((line, lineIndex) => (
            <span key={line} className={cn('flex flex-wrap gap-x-[0.18em]', lineIndex === 1 && 'text-accent')}>
              {line.split(' ').map((word) => (
                <span key={word} className="-mt-[0.16em] inline-block overflow-hidden pb-[0.04em] pt-[0.16em]">
                  <motion.span variants={wordUp} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          ))}
        </motion.h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.div initial="hidden" animate="visible" variants={stagger(0.1, 0.6)} className="flex max-w-xl flex-col gap-6">
            <motion.p variants={fadeUp} className="text-base text-cream/85 md:text-lg">
              {hero.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {isWhatsAppEnabled() && (
                <RollButton href={buildWhatsAppUrl()} external>
                  {hero.cta}
                </RollButton>
              )}
              <RollButton href="#servicios" variant="outline" arrow={false}>
                {hero.secondaryCta}
              </RollButton>
            </motion.div>
          </motion.div>

          {isWhatsAppEnabled() && (
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hidden self-end md:block">
              <SpinBadge text={hero.badge} href={buildWhatsAppUrl()} label="Reservar turno por WhatsApp" />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
