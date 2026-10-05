import type { RefObject } from 'react';
import { useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

/**
 * Desplazamiento vertical leve (en %) mientras el elemento sale por arriba.
 * Pensado para el fondo del hero. Con reduced motion queda en 0.
 */
export function useParallax(ref: RefObject<HTMLElement>, distance = 18): MotionValue<string> {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  return useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['0%', `${distance}%`]);
}
