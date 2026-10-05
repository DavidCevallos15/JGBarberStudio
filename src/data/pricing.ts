import type { PriceItem, SectionHeader } from '../types';
import { SERVICES } from './services';

export const PRICING_SECTION: SectionHeader = {
  label: 'Precios',
  title: ['Lista de', 'precios'],
  intro: 'Precios en dólares (USD).',
};

// Los precios salen de data/services.ts (una sola fuente).
// Para agregar algo que solo aparezca en esta lista, súmalo en EXTRA_PRICES.
const EXTRA_PRICES: PriceItem[] = [];

export const PRICING: PriceItem[] = [
  ...SERVICES.map((service) => ({
    id: service.id,
    name: service.name,
    note: service.description,
    price: service.price,
    durationMin: service.durationMin,
  })),
  ...EXTRA_PRICES,
];
