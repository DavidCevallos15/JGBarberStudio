import { motion } from 'motion/react';
import type { SectionHeader } from '../../types';
import { cn } from '../../lib/cn';
import { fadeUp, REVEAL, stagger } from '../../lib/motion';
import { SectionLabel } from './SectionLabel';

interface SectionHeadingProps {
  header: SectionHeader;
  /** id para aria-labelledby de la sección */
  id: string;
  align?: 'left' | 'center';
  /** Título más chico para columnas angostas */
  compact?: boolean;
  className?: string;
}

/** Etiqueta con tijera + título gigante en 2 líneas + intro */
export function SectionHeading({ header, id, align = 'left', compact = false, className }: SectionHeadingProps) {
  return (
    <motion.div
      {...REVEAL}
      variants={stagger(0.1)}
      className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}
    >
      <motion.div variants={fadeUp}>
        <SectionLabel>{header.label}</SectionLabel>
      </motion.div>
      <motion.h2 id={id} variants={fadeUp} className={cn(
          'font-display uppercase leading-[0.85] tracking-tight',
          compact ? 'text-[clamp(3.25rem,6.5vw,6.5rem)]' : 'text-[clamp(3.5rem,11vw,9rem)]',
        )}>
        {header.title.map((line, i) => (
          <span key={line} className={cn('block', i === 1 && 'text-accent')}>
            {line}
          </span>
        ))}
      </motion.h2>
      {header.intro && (
        <motion.p variants={fadeUp} className="max-w-md text-base opacity-75 md:text-lg">
          {header.intro}
        </motion.p>
      )}
    </motion.div>
  );
}
