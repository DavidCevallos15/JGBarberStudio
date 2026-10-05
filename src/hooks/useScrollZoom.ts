import type { RefObject } from 'react';
import { useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

/**
 * Escala que crece de `from` a 1 mientras el elemento entra hasta el centro del viewport.
 * Con reduced motion queda en 1.
 */
export function useScrollZoom(ref: RefObject<HTMLElement>, from = 0.1): MotionValue<number> {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  return useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [from, 1]);
}
