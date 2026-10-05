import type { RefObject } from 'react';
import { useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

/**
 * Rotación ligada al scroll mientras el elemento cruza el viewport.
 * base: inclinación en reposo (grados). swing: cuánto gira hacia cada lado.
 * Con reduced motion queda fija en `base`.
 */
export function useScrollRotate(
  ref: RefObject<HTMLElement>,
  base = 0,
  swing = 8,
): MotionValue<number> {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  return useTransform(scrollYProgress, [0, 1], reduce ? [base, base] : [base - swing, base + swing]);
}
