import React from 'react';
import { BookOpen, Library } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { revistas } from '@profile/content/investigacion';

export default function Revistas() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Revistas **Científicas**"
          center
          subtitle="Producción editorial de la Escuela Profesional de Ciencia Política y Gobernabilidad."
        />

        <div className="mx-auto mt-12 max-w-5xl space-y-8">
          {revistas.map((revista) => (
            <article
              key={revista.nombre}
              className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:grid-cols-[minmax(260px,380px)_1fr]"
            >
              <div className="bg-gray-100">
                <img
                  src={revista.imagen}
                  alt={revista.imagenAlt}
                  width={1054}
                  height={1492}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-center p-6 md:p-9">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <Library className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">
                  {revista.tipo} · {revista.edicion}
                </p>
                <h2 className="mt-2 font-display text-3xl font-black text-primary">
                  {revista.nombre}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {revista.descripcion}
                </p>

                <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <BookOpen className="h-4 w-4" aria-hidden="true" /> Tema de la edición
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-gray-700">
                    {revista.tema}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
