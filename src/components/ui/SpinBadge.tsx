import { useId } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

interface SpinBadgeProps {
  /** Texto que gira; termina con " • " para que la vuelta cierre limpia */
  text: string;
  href?: string;
  label?: string;
  className?: string;
}

/** Badge circular con texto girando y flecha al centro */
export function SpinBadge({ text, href, label, className }: SpinBadgeProps) {
  const pathId = `spin-${useId().replace(/:/g, '')}`;
  const ring = text.repeat(Math.max(1, Math.round(40 / text.length)));

  const badge = (
    <span className={cn('relative grid size-32 place-items-center rounded-full bg-accent text-ink md:size-40', className)}>
      <svg viewBox="0 0 200 200" aria-hidden className="absolute inset-0 size-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id={pathId} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <text className="fill-current font-display text-[19px] uppercase" letterSpacing="2.5">
          <textPath href={`#${pathId}`} textLength="462" lengthAdjust="spacing">
            {ring}
          </textPath>
        </text>
      </svg>
      <ArrowUpRight aria-hidden className="relative size-9 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none" strokeWidth={1.75} />
    </span>
  );

  if (!href) return badge;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label ?? text} className="group inline-block rounded-full">
      {badge}
    </a>
  );
}
