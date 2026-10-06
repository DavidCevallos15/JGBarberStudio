import { SITE } from './site.ts';

// Link vacío = el ícono no se renderiza en ningún lado.
export type SocialKey = 'instagram' | 'tiktok' | 'facebook' | 'googleMaps';

export const SOCIAL: Readonly<Record<SocialKey, string>> = {
  instagram: 'https://www.instagram.com/barberstudio.demo/',
  tiktok: '', // TODO: link de TikTok si existe
  facebook: '', // sin link: el ícono no se muestra
  googleMaps: SITE.maps.url,
};

export const SOCIAL_LABELS: Record<SocialKey, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  googleMaps: 'Google Maps',
};

export const INSTAGRAM_HANDLE = '@barberstudio.demo';

/** Redes con link, en el orden en que se muestran */
export const ACTIVE_SOCIALS = (Object.keys(SOCIAL) as SocialKey[])
  .filter((key) => SOCIAL[key] !== '')
  .map((key) => ({ key, href: SOCIAL[key], label: SOCIAL_LABELS[key] }));
