import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Ancho máximo y márgenes laterales (16px en mobile) */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10', className)}>{children}</div>;
}
