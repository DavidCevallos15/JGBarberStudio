import { SITE } from './site.ts';

// Link vacío = el ícono no se renderiza en ningún lado.
export type SocialKey = 'instagram' | 'tiktok' | 'facebook' | 'googleMaps';

export const SOCIAL: Readonly<Record<SocialKey, string>> = {
  instagram: 'https://www.instagram.com/jg_barberestudio/',
  tiktok: '', // TODO: link de TikTok si existe
  facebook: 'https://www.facebook.com/profile.php?id=61587892845054',
  googleMaps: SITE.maps.url,
};

export const SOCIAL_LABELS: Record<SocialKey, string> = {
  instagram: 'Instagram',
  tiktok: 'TikTok',
  facebook: 'Facebook',
  googleMaps: 'Google Maps',
};

export const INSTAGRAM_HANDLE = '@jg_barberestudio';

/** Redes con link, en el orden en que se muestran */
export const ACTIVE_SOCIALS = (Object.keys(SOCIAL) as SocialKey[])
  .filter((key) => SOCIAL[key] !== '')
  .map((key) => ({ key, href: SOCIAL[key], label: SOCIAL_LABELS[key] }));
