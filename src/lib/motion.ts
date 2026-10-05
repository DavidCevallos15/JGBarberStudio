import type { Transition, Variants } from 'motion/react';

// ─── TOKENS DE MOVIMIENTO ────────────────────────────────────
// Las secciones usan solo estos variants: no definen easing ni duraciones a mano.
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_STANDARD: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const DURATION = { fast: 0.3, base: 0.7, slow: 1 } as const;

/** Props para reveals: whileInView una sola vez al 30% visible */
export const REVEAL = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
} as const;

const enter = (duration: number = DURATION.base): Transition => ({ duration, ease: EASE_OUT });

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: enter() },
};

/** Para bloques grandes (reserva): sube 60px */
export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: enter(DURATION.slow) },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: enter() },
};

/** Entra desde un lado: x negativo = izquierda, positivo = derecha */
export const slideIn = (x: number): Variants => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: enter() },
});

/** Contenedor que escalona a sus hijos */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Palabra del hero: sube 40px */
export const wordUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: enter(DURATION.slow) },
};

/** Palabra que se junta desde un costado (±28px) mientras sube */
export const wordFromSide = (side: -1 | 1): Variants => ({
  hidden: { opacity: 0, x: 28 * side, y: 24 },
  visible: { opacity: 1, x: 0, y: 0, transition: enter(DURATION.slow) },
});

/** Transición del RollButton y hovers cortos */
export const ROLL_TRANSITION: Transition = { duration: DURATION.fast, ease: EASE_STANDARD };
