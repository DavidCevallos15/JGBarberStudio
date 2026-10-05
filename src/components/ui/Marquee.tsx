import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MarqueeProps {
  children: ReactNode;
  /** Segundos que tarda una vuelta completa */
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Cinta infinita en CSS. El contenido se duplica y se desplaza -50%.
 * Con reduced motion queda quieta y se puede scrollear a mano.
 */
export function Marquee({ children, duration = 40, pauseOnHover = false, className }: MarqueeProps) {
  return (
    <div className={cn('group flex overflow-hidden motion-reduce:overflow-x-auto', className)}>
      <div
        className={cn(
          'flex w-max shrink-0 animate-marquee motion-reduce:animate-none',
          pauseOnHover && 'group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]',
        )}
        style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
