import { useState, type FormEvent } from 'react';
import { SITE } from '../../config/site';
import { RollButton } from '../../components/ui/RollButton';
import { SERVICES } from '../../data/services';
import { TEAM } from '../../data/team';
import { buildBookingMessage, buildWhatsAppUrl, type BookingRequest } from '../../lib/whatsapp';

const EMPTY: BookingRequest = { name: '', service: '', barber: '', date: '', time: '', note: '' };
const ANY_BARBER = 'Cualquiera disponible';

const field =
  'w-full border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-base text-cream placeholder:text-cream/40 focus:border-accent focus:outline-none focus:ring-0 [color-scheme:dark]';
const label = 'text-xs font-semibold uppercase tracking-[0.18em] text-muted';

function todayIso(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export function BookingForm() {
  const [form, setForm] = useState<BookingRequest>(EMPTY);
  const update = (key: keyof BookingRequest) => (value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildWhatsAppUrl(buildBookingMessage(form));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className={label}>Nombre</span>
        <input required autoComplete="name" value={form.name} onChange={(e) => update('name')(e.target.value)} placeholder="Tu nombre" className={field} />
      </label>

      <label className="flex flex-col gap-1">
        <span className={label}>Servicio</span>
        <select required value={form.service} onChange={(e) => update('service')(e.target.value)} className={field}>
          <option value="" disabled className="bg-ink">
            Elige un servicio
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name} className="bg-ink">
              {s.name}
            </option>
          ))}
        </select>
      </label>

      {TEAM.length > 0 && (
        <label className="flex flex-col gap-1">
          <span className={label}>Barbero</span>
          <select value={form.barber} onChange={(e) => update('barber')(e.target.value)} className={field}>
            <option value="" className="bg-ink">
              {ANY_BARBER}
            </option>
            {TEAM.map((m) => (
              <option key={m.name} value={m.name} className="bg-ink">
                {m.name}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="flex flex-col gap-1">
        <span className={label}>Fecha</span>
        <input required type="date" min={todayIso()} value={form.date} onChange={(e) => update('date')(e.target.value)} className={field} />
      </label>

      <label className="flex flex-col gap-1">
        <span className={label}>Hora</span>
        <input required type="time" step={900} value={form.time} onChange={(e) => update('time')(e.target.value)} className={field} />
      </label>

      <label className="flex flex-col gap-1 sm:col-span-2">
        <span className={label}>Nota (opcional)</span>
        <textarea rows={2} value={form.note} onChange={(e) => update('note')(e.target.value)} placeholder="Ej. fade bajo y barba" className={`${field} resize-none`} />
      </label>

      <div className="sm:col-span-2">
        <RollButton type="submit" className="w-full">
          {SITE.booking.submit}
        </RollButton>
      </div>
    </form>
  );
}
