import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BEFORE_AFTER, BEFORE_AFTER_SECTION } from '../data/beforeAfter';
import { REVEAL, scaleIn, stagger } from '../lib/motion';

const TAG = 'absolute top-3 z-10 px-2.5 py-1 font-display text-base uppercase leading-none tracking-wide';

export function BeforeAfter() {
  return (
    <section id="antes-despues" aria-labelledby="before-after-title" className="border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container>
        <SectionHeading id="before-after-title" header={BEFORE_AFTER_SECTION} />

        <motion.ul {...REVEAL} variants={stagger(0.12)} className="mt-16 grid gap-10 md:mt-20 md:grid-cols-2 xl:grid-cols-3">
          {BEFORE_AFTER.map((pair) => (
            <motion.li key={pair.id} variants={scaleIn} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-1">
                <div className="relative">
                  <span className={`${TAG} left-3 bg-ink text-cream`}>Antes</span>
                  <MediaSlot {...pair.before} aspect="portrait" />
                </div>
                <div className="relative">
                  <span className={`${TAG} right-3 bg-accent text-ink`}>Después</span>
                  <MediaSlot {...pair.after} aspect="portrait" />
                </div>
              </div>
              <p className="font-display text-3xl uppercase leading-none">{pair.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
