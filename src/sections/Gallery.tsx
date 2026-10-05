import { useRef } from 'react';
import { motion } from 'motion/react';
import { INSTAGRAM_HANDLE, SOCIAL } from '../config/social';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { RollButton } from '../components/ui/RollButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GALLERY, GALLERY_SECTION } from '../data/gallery';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';
import { cn } from '../lib/cn';
import { fadeUp, REVEAL, stagger } from '../lib/motion';

// Alturas y desfases que se repiten para el ritmo asimétrico del track
const CARD_SHAPES = [
  'w-[22rem] mt-0',
  'w-[18rem] mt-24',
  'w-[26rem] mt-10',
  'w-[20rem] mt-32',
] as const;

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { x, distance, active } = useHorizontalScroll(sectionRef, trackRef);

  const instagramCta = SOCIAL.instagram !== '' && (
    <RollButton href={SOCIAL.instagram} external variant="outline">
      {`Más en ${INSTAGRAM_HANDLE}`}
    </RollButton>
  );

  return (
    <section
      ref={sectionRef}
      id="galeria"
      aria-labelledby="gallery-title"
      className="relative border-t border-cream/10 bg-ink text-cream"
      style={active ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      {active ? (
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div ref={trackRef} style={{ x }} className="flex items-start gap-8 pl-10 pr-24">
            <div className="flex w-[30rem] shrink-0 flex-col gap-8 self-center">
              <SectionHeading id="gallery-title" header={GALLERY_SECTION} />
              {instagramCta && <div>{instagramCta}</div>}
            </div>
            {GALLERY.map((item, index) => (
              <div key={item.expectedPath} className={cn('shrink-0', CARD_SHAPES[index % CARD_SHAPES.length])}>
                <MediaSlot {...item} aspect={index % 3 === 1 ? 'square' : 'portrait'} />
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <Container className="py-24 md:py-36">
          <SectionHeading id="gallery-title" header={GALLERY_SECTION} />
          <motion.ul {...REVEAL} variants={stagger(0.06)} className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {GALLERY.map((item, index) => (
              <motion.li key={item.expectedPath} variants={fadeUp} className={cn(index % 2 === 1 && 'translate-y-8')}>
                <MediaSlot {...item} aspect="portrait" />
              </motion.li>
            ))}
          </motion.ul>
          {instagramCta && <div className="mt-20">{instagramCta}</div>}
        </Container>
      )}
    </section>
  );
}
