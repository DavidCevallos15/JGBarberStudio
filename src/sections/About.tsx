import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { MEDIA } from '../config/media';
import { SITE } from '../config/site';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { RollButton } from '../components/ui/RollButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { useScrollRotate } from '../hooks/useScrollRotate';
import { fadeUp, REVEAL, stagger, wordFromSide } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../lib/whatsapp';

export function About() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: manifestoRef, offset: ['start end', 'center center'] });
  const opacity = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.25, 1]);
  const rotate = useScrollRotate(tiltRef, 6, 5);
  const { about } = SITE;

  return (
    <section id="nosotros" aria-labelledby="about-title" className="overflow-x-clip border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container>
        <SectionLabel className="mb-10 justify-center">{about.label}</SectionLabel>

        <motion.div ref={manifestoRef} style={{ opacity }}>
          <motion.h2
            id="about-title"
            {...REVEAL}
            variants={stagger(0.12)}
            className="text-center font-display text-[clamp(3.5rem,13vw,11rem)] uppercase leading-[0.85] tracking-tight"
          >
            {about.manifesto.map((line, lineIndex) => (
              <motion.span key={line} variants={stagger(0.06)} className="flex flex-wrap justify-center gap-x-[0.2em]">
                {line.split(' ').map((word, wordIndex) => (
                  <motion.span
                    key={word}
                    variants={wordFromSide((lineIndex + wordIndex) % 2 === 0 ? -1 : 1)}
                    className={lineIndex === about.manifesto.length - 1 ? 'inline-block text-accent' : 'inline-block'}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </motion.h2>
        </motion.div>

        <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-12 md:gap-8">
          <motion.div {...REVEAL} variants={fadeUp} className="md:col-span-5">
            <MediaSlot src={MEDIA.about.main} alt="Interior de JG Barber Estudio" aspect="portrait" expectedPath="/media/about/main.jpg" />
          </motion.div>

          <motion.div {...REVEAL} variants={stagger(0.1)} className="flex flex-col gap-8 md:col-span-6 md:col-start-7">
            <motion.div ref={tiltRef} style={{ rotate }} variants={fadeUp} className="w-40 shadow-2xl shadow-ink/25 md:w-56">
              <MediaSlot src={MEDIA.about.secondary} alt="Detalle de herramientas de barbería" aspect="square" expectedPath="/media/about/secondary.jpg" className="bg-cream" />
            </motion.div>
            <motion.p variants={fadeUp} className="max-w-lg text-lg leading-relaxed text-ink/80 md:text-xl">
              {about.body}
            </motion.p>
            {isWhatsAppEnabled() && (
              <motion.div variants={fadeUp}>
                <RollButton href={buildWhatsAppUrl()} external variant="ink">
                  {about.cta}
                </RollButton>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
