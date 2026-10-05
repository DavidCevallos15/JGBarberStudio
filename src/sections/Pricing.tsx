import { motion } from 'motion/react';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PRICING, PRICING_SECTION } from '../data/pricing';
import { formatDuration, formatPrice } from '../lib/format';
import { REVEAL, slideIn } from '../lib/motion';

const fromLeft = slideIn(-80);
const fromRight = slideIn(80);

export function Pricing() {
  return (
    <section id="precios" aria-labelledby="pricing-title" className="overflow-x-clip border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container className="grid gap-16 lg:grid-cols-12">
        <SectionHeading id="pricing-title" compact header={PRICING_SECTION} className="lg:col-span-5 lg:self-start lg:sticky lg:top-28" />

        <ul className="flex flex-col lg:col-span-7">
          {PRICING.map((item) => (
            <motion.li key={item.id} {...REVEAL} className="flex flex-col gap-1 border-b border-line py-6 md:py-8">
              <div className="flex items-end gap-4">
                <motion.h3 variants={fromLeft} className="font-display text-3xl uppercase leading-none md:text-5xl">
                  {item.name}
                </motion.h3>
                <span aria-hidden className="mb-1.5 flex-1 border-b-2 border-dotted border-ink/30" />
                <motion.p variants={fromRight} className="font-display text-3xl leading-none text-ink md:text-5xl">
                  {formatPrice(item.price)}
                </motion.p>
              </div>
              <motion.p variants={fromLeft} className="text-sm text-ink/70">
                {item.note}
                {item.durationMin !== null && <span className="ml-2 font-semibold">· {formatDuration(item.durationMin)}</span>}
              </motion.p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
