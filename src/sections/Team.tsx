import { motion } from 'motion/react';
import { InstagramIcon } from '../components/icons/BrandIcons';
import { Container } from '../components/ui/Container';
import { MediaSlot } from '../components/ui/MediaSlot';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TEAM, TEAM_SECTION } from '../data/team';
import { fadeUp, REVEAL, stagger } from '../lib/motion';

export function Team() {
  if (TEAM.length === 0) return null;

  return (
    <section id="equipo" aria-labelledby="team-title" className="border-t border-line bg-cream py-24 text-ink md:py-36">
      <Container>
        <SectionHeading id="team-title" header={TEAM_SECTION} />

        <motion.ul {...REVEAL} variants={stagger(0.1)} className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <motion.li key={member.name} variants={fadeUp} className="group flex flex-col gap-4">
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none">
                  <MediaSlot {...member.photo} aspect="portrait" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-4xl uppercase leading-none">{member.name}</h3>
                  <p className="mt-1 text-sm text-ink/70">{member.role}</p>
                </div>
                {member.instagram !== '' && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram de ${member.name}`} className="grid size-11 place-items-center rounded-full border border-ink/20 hover:border-accent hover:text-accent">
                    <InstagramIcon className="size-5" />
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
