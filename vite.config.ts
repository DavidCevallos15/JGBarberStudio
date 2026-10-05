import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { PHONE } from './src/config/contact.ts';
import { MEDIA } from './src/config/media.ts';
import { SITE } from './src/config/site.ts';
import { SOCIAL } from './src/config/social.ts';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Convierte una ruta /media/... en URL absoluta si hay dominio */
const absolute = (path: string) => (SITE.url && path ? `${SITE.url}${path}` : '');

function buildJsonLd() {
  const hours = SITE.hours.filter((h) => h.open && h.open !== 'closed' && h.close);
  const sameAs = Object.values(SOCIAL).filter(Boolean);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: SITE.name,
    description: SITE.description,
    ...(SITE.url && { url: SITE.url }),
    ...(absolute(MEDIA.brand.logo) && { image: absolute(MEDIA.brand.logo), logo: absolute(MEDIA.brand.logo) }),
    ...(PHONE.tel && { telephone: PHONE.tel }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: SITE.maps.url,
    ...(hours.length > 0 && {
      openingHoursSpecification: hours.map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${{ Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' }[h.code]}`,
        opens: h.open,
        closes: h.close,
      })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** Inyecta las meta SEO en <!--seo--> usando los archivos de config */
function seo(): Plugin {
  return {
    name: 'jg-seo',
    transformIndexHtml(html) {
      const title = `${SITE.name} | Barbería en ${SITE.address.city}`;
      const ogImage = absolute(MEDIA.brand.ogImage);
      const tags = [
        `<title>${escapeHtml(title)}</title>`,
        `<meta name="description" content="${escapeHtml(SITE.description)}" />`,
        SITE.url && `<link rel="canonical" href="${SITE.url}/" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:locale" content="${SITE.locale}" />`,
        `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        `<meta property="og:description" content="${escapeHtml(SITE.description)}" />`,
        SITE.url && `<meta property="og:url" content="${SITE.url}/" />`,
        ogImage && `<meta property="og:image" content="${ogImage}" />`,
        `<meta name="twitter:card" content="${ogImage ? 'summary_large_image' : 'summary'}" />`,
        `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(SITE.description)}" />`,
        ogImage && `<meta name="twitter:image" content="${ogImage}" />`,
        `<script type="application/ld+json">${buildJsonLd()}</script>`,
      ];
      return html.replace('<!--seo-->', tags.filter(Boolean).join('\n    '));
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
});
