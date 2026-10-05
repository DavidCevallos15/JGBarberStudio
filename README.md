# JG Barber Estudio: landing

Landing de una sola página para **JG Barber Estudio / Barber Shop** (Parque El Mamey, Portoviejo).
React 18 + Vite + TypeScript + Tailwind CSS v4 + Motion. Sin backend: las reservas se envían por WhatsApp.

## Comandos (Windows / PowerShell o bash)

```bash
npm install        # primera vez
npm run dev        # servidor local → http://localhost:5173
npm run build      # typecheck + build de producción en /dist
npm run preview    # sirve /dist para probar el build
```

## ¿Qué quiero cambiar? → ¿Qué archivo edito?

| Quiero cambiar… | Archivo | Detalle |
|---|---|---|
| Colores de la marca | `src/styles/globals.css` | Bloque `@theme`: `--color-ink`, `--color-cream`, `--color-accent`, `--color-muted`, `--color-line` |
| Tipografías | `index.html` + `src/styles/globals.css` | Link de Google Fonts y `--font-display` / `--font-sans` |
| Título, subtítulo y botones del hero | `src/config/site.ts` → `hero` | `titleLines` son las 2 líneas del título |
| Texto de "Nosotros" | `src/config/site.ts` → `about` | `manifesto` = líneas grandes |
| Número de WhatsApp o mensaje por defecto | `src/config/contact.ts` → `WHATSAPP` | Formato `593XXXXXXXXX`, sin `+` ni espacios |
| Ocultar todos los botones de WhatsApp | `src/config/contact.ts` | `enabled: false` (también oculta la sección Reserva) |
| Teléfono de llamadas | `src/config/contact.ts` → `PHONE` | |
| Dirección, mapa y coordenadas | `src/config/site.ts` → `address`, `geo`, `maps` | |
| Horario | `src/config/site.ts` → `HOURS` | `''` = "Por confirmar", `'closed'` = "Cerrado" |
| Instagram, TikTok, Facebook, Google Maps | `src/config/social.ts` | Si un link queda vacío, su ícono no aparece |
| Dominio (SEO, canonical, OG) | `src/config/site.ts` → `url` | Ej. `'https://jgbarberestudio.com'` sin `/` final |
| Imagen al compartir (OG) | `src/config/media.ts` → `brand.ogImage` | 1200×630, requiere `url` |
| Video o poster del hero | `src/config/media.ts` → `hero` | Sube a `public/media/hero/` |
| Fotos de Nosotros, Servicios, FAQ y fachada | `src/config/media.ts` | |
| Agregar una foto a la galería | `src/data/gallery.ts` | Copia una línea y cambia `src`, `alt` y `expectedPath` |
| Pares antes/después | `src/data/beforeAfter.ts` | |
| Agregar o editar un servicio o precio | `src/data/services.ts` | Precios y Marquee salen de aquí. `price: null` = "Consultar" |
| Un precio que no es servicio | `src/data/pricing.ts` → `EXTRA_PRICES` | |
| Equipo de barberos | `src/data/team.ts` + activar `team` en `src/config/sections.ts` | Con equipo, la reserva muestra "Barbero" |
| Reseñas | `src/data/testimonials.ts` | Vacío = se muestra la calificación y el botón a Google Maps |
| Preguntas frecuentes | `src/data/faq.ts` | |
| Textos de encabezado de cada sección | El `*_SECTION` de cada archivo en `src/data/` | Reserva y Ubicación están en `src/config/site.ts` |
| Links del menú | `src/data/navigation.ts` | Se ocultan solos si la sección está apagada |
| Ocultar o reordenar secciones | `src/config/sections.ts` | `enabled: false` o mover la línea |
| Velocidad y easing de animaciones | `src/lib/motion.ts` | Las secciones no definen tiempos propios |
| Meta tags y JSON-LD (`HairSalon`) | Automático desde `src/config/*` | Ver plugin `seo` en `vite.config.ts` |

## Media: cómo llenar los recuadros "Falta: …"

1. Sube el archivo a la carpeta que indica el recuadro (ej. `public/media/gallery/01.jpg`).
2. Pega la ruta **sin** `public` en el archivo de config o data (ej. `src: '/media/gallery/01.jpg'`).
3. Recomendado: JPG/WebP de máx. 1600 px de lado; el video del hero en MP4 (H.264), sin audio, de menos de 6 MB.

## Estructura

```
public/media/        imágenes y videos (brand, hero, about, services, before-after, gallery, team, testimonials, location)
src/config/          site, contact (WhatsApp), social, media (rutas), sections (on/off y orden)
src/data/            contenido: servicios, precios, galería, equipo, reseñas, FAQ, navegación
src/types/           interfaces compartidas
src/lib/             whatsapp (único armador de links), motion (variants), format, cn
src/hooks/           efectos de scroll: rotate, horizontal, zoom, parallax
src/components/      ui/ (MediaSlot, RollButton, SpinBadge…), layout/ (Navbar, Footer, WhatsAppButton), icons/
src/sections/        una sección = un archivo
```

## Accesibilidad y movimiento

- Con `prefers-reduced-motion` se apagan el parallax, el scroll horizontal, las rotaciones, el marquee y el video del hero (queda el poster).
- Un solo `h1`, foco visible en color de acento, acordeón con `aria-expanded` y "Saltar al contenido".

## Deploy (cuando se decida)

En Vercel: importa el repo, framework **Vite**, build `npm run build` y salida `dist`. Luego completa `url` en `src/config/site.ts`.
