import type { FaqItem, SectionHeader } from '../types';

export const FAQ_SECTION: SectionHeader = {
  label: 'Preguntas frecuentes',
  title: ['Antes de', 'venir'],
  intro: '¿Te quedó otra duda? Escríbenos por WhatsApp.',
};

// Preguntas genéricas: TODO: revisar respuestas con el cliente.
export const FAQ: FaqItem[] = [
  {
    question: '¿Necesito reservar turno?',
    answer:
      'Recomendamos reservar para asegurar tu horario. Puedes hacerlo desde el formulario de esta página o escribiéndonos por WhatsApp. Si hay disponibilidad, también atendemos sin cita.',
  },
  {
    question: '¿Cuánto dura un servicio?',
    answer:
      'Depende del servicio y del tipo de corte. Un corte suele tomar entre 30 y 45 minutos, y corte con barba un poco más. Te confirmamos el tiempo al reservar.',
  },
  {
    question: '¿Puedo llevar una foto de referencia?',
    answer:
      'Sí, y te lo recomendamos. Una foto nos ayuda a entender exactamente lo que buscas y a adaptarlo a tu tipo de cabello.',
  },
  {
    question: '¿Qué pasa si llego tarde o no puedo ir?',
    answer:
      'Avísanos por WhatsApp lo antes posible para mover tu turno. Si llegas tarde, intentaremos atenderte sin afectar al siguiente cliente.',
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Consúltanos por WhatsApp los métodos de pago disponibles antes de tu visita.',
  },
  {
    question: '¿Dónde están ubicados?',
    answer:
      'Estamos en el Parque Ecológico El Mamey, en Portoviejo. Más abajo tienes el mapa y el botón "Cómo llegar".',
  },
];
