import { Scissors } from 'lucide-react';
import { cn } from '../../lib/cn';

interface SectionLabelProps {
  children: string;
  className?: string;
}

/** Etiqueta pequeña con tijera que va arriba de cada título */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p className={cn('flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]', className)}>
      <Scissors aria-hidden className="size-4 -rotate-90 text-accent" strokeWidth={1.75} />
      {children}
    </p>
  );
}
