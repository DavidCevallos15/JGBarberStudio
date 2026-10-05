import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';

type Variant = 'accent' | 'cream' | 'ink' | 'outline';

const VARIANT_CLASS: Record<Variant, string> = {
  accent: 'bg-accent text-ink hover:bg-cream',
  cream: 'bg-cream text-ink hover:bg-accent',
  ink: 'bg-ink text-cream hover:bg-accent hover:text-ink',
  outline: 'border border-current/40 hover:border-accent hover:text-accent',
};

interface BaseProps {
  children: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: never;
  external?: never;
  type: 'button' | 'submit';
}

/** Botón con texto que rueda: en hover el texto sube y entra una copia desde abajo */
export function RollButton(props: LinkProps | ButtonProps) {
  const { children, variant = 'accent', arrow = true, className } = props;

  const classes = cn(
    'group inline-flex items-center justify-between gap-4 px-6 py-4 font-display text-xl uppercase leading-none tracking-wide',
    'transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
    VARIANT_CLASS[variant],
    className,
  );

  const roll = 'block transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none';
  const content = (
    <>
      <span className="relative block overflow-hidden">
        <span className={cn(roll, 'group-hover:-translate-y-full')}>{children}</span>
        <span aria-hidden className={cn(roll, 'absolute inset-0 translate-y-full group-hover:translate-y-0')}>
          {children}
        </span>
      </span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-5 shrink-0 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
        />
      )}
    </>
  );

  if (props.href !== undefined) {
    return (
      <a
        href={props.href}
        className={classes}
        {...(props.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={props.type} className={classes}>
      {content}
    </button>
  );
}
