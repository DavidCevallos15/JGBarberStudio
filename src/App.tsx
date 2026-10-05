import type { ComponentType } from 'react';
import { MotionConfig } from 'motion/react';
import { SECTIONS } from './config/sections';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { About } from './sections/About';
import { BeforeAfter } from './sections/BeforeAfter';
import { Booking } from './sections/Booking';
import { Faq } from './sections/Faq';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Location } from './sections/Location';
import { Pricing } from './sections/Pricing';
import { Services } from './sections/Services';
import { ServicesMarquee } from './sections/ServicesMarquee';
import { Team } from './sections/Team';
import { Testimonials } from './sections/Testimonials';
import type { SectionId } from './types';

const SECTION_COMPONENTS: Record<SectionId, ComponentType> = {
  hero: Hero,
  servicesMarquee: ServicesMarquee,
  about: About,
  services: Services,
  beforeAfter: BeforeAfter,
  gallery: Gallery,
  team: Team,
  pricing: Pricing,
  testimonials: Testimonials,
  faq: Faq,
  booking: Booking,
  location: Location,
};

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-ink">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        {SECTIONS.filter((s) => s.enabled).map(({ id }) => {
          const Section = SECTION_COMPONENTS[id];
          return <Section key={id} />;
        })}
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}
