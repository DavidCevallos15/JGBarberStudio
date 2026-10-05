import { useEffect, useLayoutEffect, useState, type RefObject } from 'react';
import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';

const DESKTOP_QUERY = '(min-width: 1024px)';

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return isDesktop;
}

/**
 * Sección sticky donde el scroll vertical mueve un track en X.
 * Solo en desktop y sin reduced motion; si no, `active` es false y el
 * componente debe mostrar un layout normal.
 */
export function useHorizontalScroll(
  sectionRef: RefObject<HTMLElement>,
  trackRef: RefObject<HTMLElement>,
): { x: MotionValue<number>; distance: number; active: boolean } {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const active = isDesktop && !reduce;

  const [distance, setDistance] = useState(0);
  const distanceMv = useMotionValue(0);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !active) return;
    const measure = () => {
      const next = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(next);
      distanceMv.set(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [trackRef, active, distanceMv]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform([scrollYProgress, distanceMv], ([progress, dist]) =>
    active ? -(progress as number) * (dist as number) : 0,
  );

  return { x, distance, active };
}
