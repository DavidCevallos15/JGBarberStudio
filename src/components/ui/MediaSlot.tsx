import { ImageIcon, Video } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import type { Aspect, MediaType } from '../../types';
import { cn } from '../../lib/cn';

const ASPECT_CLASS: Record<Aspect, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
  wide: 'aspect-[21/9]',
};

interface MediaSlotProps {
  src: string;
  alt: string;
  type?: MediaType;
  poster?: string;
  aspect?: Aspect;
  /** Ocupa todo el contenedor padre (position: absolute) en vez de usar aspect ratio */
  fill?: boolean;
  /** Carga inmediata (solo para lo que está arriba del todo) */
  priority?: boolean;
  className?: string;
  /** Ruta sugerida que se muestra cuando falta el archivo */
  expectedPath: string;
}

/**
 * Contenedor de imagen o video. Si `src` está vacío muestra un placeholder
 * con la ruta donde va el archivo, para llenar la media una por una.
 */
export function MediaSlot({
  src,
  alt,
  type = 'image',
  poster,
  aspect = 'portrait',
  fill = false,
  priority = false,
  className,
  expectedPath,
}: MediaSlotProps) {
  const reduce = useReducedMotion();
  const box = cn('overflow-hidden', fill ? 'absolute inset-0' : cn('relative w-full', ASPECT_CLASS[aspect]), className);

  if (src === '') {
    const Icon = type === 'video' ? Video : ImageIcon;
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          box,
          'flex flex-col items-center justify-center gap-2 border border-dashed border-current/30 bg-current/5 p-4 text-center text-current/60',
        )}
      >
        <Icon aria-hidden className="size-6" strokeWidth={1.5} />
        <span className="text-xs font-medium tracking-wide">Falta: {expectedPath}</span>
      </div>
    );
  }

  const media = 'size-full object-cover';

  if (type === 'video') {
    // Con reduced motion el video no corre: queda el poster.
    if (reduce && poster) {
      return (
        <div className={box}>
          <img src={poster} alt={alt} className={media} decoding="async" />
        </div>
      );
    }
    return (
      <div className={box}>
        <video
          className={media}
          src={src}
          poster={poster}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className={box}>
      <img
        src={src}
        alt={alt}
        className={media}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}
