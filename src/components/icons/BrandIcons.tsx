import type { ReactNode } from 'react';
import type { SocialKey } from '../../config/social';

interface IconProps {
  className?: string;
}

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3.6 20.4l1.2-4.1a8.6 8.6 0 1 1 3.1 3z" />
      <path d="M9.2 8.3c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c-.1.1-.2.3-.1.5.6 1.1 1.5 2 2.6 2.6.2.1.4 0 .5-.1l.6-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.6-.5.8-.6.4-1.3.5-2 .4-2.9-.6-5.3-3-5.9-5.9-.1-.7 0-1.4.3-1.9z" />
    </Svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </Svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14.5 3c.4 2.5 2.1 4.2 5 4.5v3c-1.9 0-3.6-.6-5-1.6v6.4a5.3 5.3 0 1 1-5.3-5.3v3.1a2.2 2.2 0 1 0 2.2 2.2V3z" />
    </Svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M15.5 3H13a4.5 4.5 0 0 0-4.5 4.5V10H6v3.5h2.5V21h3.8v-7.5H15l.5-3.5h-3.2V7.8c0-.5.4-.9.9-.9h2.3z" />
    </Svg>
  );
}

export function GoogleIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20.6 10.3H12v3.5h4.9a5 5 0 0 1-4.9 3.5 5.3 5.3 0 1 1 3.4-9.4l2.5-2.5A8.8 8.8 0 1 0 20.8 12c0-.6-.1-1.1-.2-1.7z" />
    </Svg>
  );
}

export const SOCIAL_ICONS: Record<SocialKey, (props: IconProps) => ReactNode> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  facebook: FacebookIcon,
  googleMaps: GoogleIcon,
};
