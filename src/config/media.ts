// ─── MEDIA ───────────────────────────────────────────────────
// Sube el archivo a /public/media/... y pega la ruta aquí (ej. '/media/hero/hero-bg.mp4').
// Mientras una ruta esté vacía, en pantalla aparece un recuadro "Falta: <ruta>".
// Las colecciones (galería, antes/después, equipo) tienen su src en src/data/.
export const MEDIA = {
  brand: {
    logo: '', // sin imagen: el logo es un wordmark en texto (ver Footer)
    mark: '', // sin imagen: el monograma es texto (ver Navbar)
    ogImage: '', // TODO: /media/brand/og-image.jpg (1200×630)
  },
  hero: {
    video: '', // TODO: /media/hero/hero-bg.mp4 (loop, sin audio, < 6 MB)
    poster: '', // TODO: /media/hero/hero-poster.jpg (primer frame del video)
  },
  about: {
    main: '', // TODO: /media/about/main.jpg (vertical 4:5)
    secondary: '', // TODO: /media/about/secondary.jpg (cuadrada)
  },
  services: {
    tiltedA: '', // TODO: /media/services/tilted-a.jpg (vertical 4:5)
    tiltedB: '', // TODO: /media/services/tilted-b.jpg (vertical 4:5)
  },
  faq: {
    side: '', // TODO: /media/about/faq-side.jpg (vertical 4:5)
  },
  location: {
    storefront: '', // TODO: /media/location/storefront.jpg (fachada, 16:9)
  },
} as const;
