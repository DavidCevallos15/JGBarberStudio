import { useId, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { MEDIA } from '../config/media';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { RollButton } from '../components/ui/RollButton';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQ, FAQ_SECTION } from '../data/faq';
import { useScrollZoom } from '../hooks/useScrollZoom';
import { cn } from '../lib/cn';
import { fadeUp, REVEAL, stagger } from '../lib/motion';
import { buildWhatsAppUrl, isWhatsAppEnabled } from '../lib/whatsapp';

export function Faq() {
  const imageRef = useRef<HTMLDivElement>(null);
  const scale = useScrollZoom(imageRef);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId().replace(/:/g, '');

  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-12 lg:col-span-5">
          <SectionHeading id="faq-title" compact header={FAQ_SECTION} />
          <div ref={imageRef} className="hidden lg:block">
            <motion.div style={{ scale }} className="origin-bottom-left">
              <MediaSlot src={MEDIA.faq.side} alt="Barbero preparando la estación de trabajo" aspect="portrait" expectedPath="/media/about/faq-side.jpg" />
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <motion.ul {...REVEAL} variants={stagger(0.08)} className="border-t border-ink/15">
            {FAQ.map((item, index) => {
              const open = openIndex === index;
              const buttonId = `${baseId}-q${index}`;
              const panelId = `${baseId}-a${index}`;
              return (
                <motion.li key={item.question} variants={fadeUp} className="border-b border-ink/15">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : index)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-2xl uppercase leading-none transition-colors hover:text-accent md:text-4xl"
                    >
                      {item.question}
                      <span aria-hidden className={cn('grid size-9 shrink-0 place-items-center border border-current transition-transform duration-300 motion-reduce:transition-none', open && 'rotate-45 bg-ink text-cream')}>
                        <Plus className="size-5" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="max-w-2xl pb-8 text-base leading-relaxed text-ink/80 md:text-lg">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              );
            })}
          </motion.ul>

          {isWhatsAppEnabled() && (
            <div className="mt-12 flex flex-col items-start gap-5">
              <p className="font-display text-4xl uppercase leading-none">¿Otra pregunta?</p>
              <RollButton href={buildWhatsAppUrl('Hola, tengo una consulta.')} external variant="ink">
                Pregúntanos por WhatsApp
              </RollButton>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
