import type { SectionHeader, TeamMember } from '../types';

export const TEAM_SECTION: SectionHeader = {
  label: 'El equipo',
  title: ['Manos que', 'saben'],
  intro: 'Los barberos detrás de cada corte.',
};

// TODO: completar el equipo y activar la sección en config/sections.ts.
// Si TEAM está vacío, la sección no se muestra y el formulario de reserva oculta el campo "Barbero".
// Ejemplo:
// {
//   name: 'Nombre',
//   role: 'Especialista en fades',
//   photo: { src: '', alt: 'Retrato de Nombre', type: 'image', expectedPath: '/media/team/nombre.jpg' },
//   instagram: '',
// },
export const TEAM: TeamMember[] = [];
