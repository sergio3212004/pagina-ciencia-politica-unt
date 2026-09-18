import React from 'react';
import { BookOpen, Download, ExternalLink, FileText, Library } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { convocatoriaRevista, revistas } from '@profile/content/investigacion';

export default function Revistas() {
  const baseUrl = import.meta.env.BASE_URL;
  const convocatoriaUrl = `${baseUrl}${convocatoriaRevista.archivo}`;

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

        {/* ── Convocatoria ── */}
        <div className="mt-16 md:mt-24">
          <SectionTitle
            title="Convocatoria para **publicación**"
            badge="Convocatoria abierta"
            center
            subtitle="Revisa las bases y envía tu artículo científico para la primera edición de la revista."
          />

          <article className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[1fr_300px]">
            {/* Vista previa del documento */}
            <div className="bg-gray-100 p-4 md:p-6">
              <iframe
                src={convocatoriaUrl}
                title={`Vista previa del documento: ${convocatoriaRevista.nombre}`}
                className="h-full min-h-[460px] w-full rounded-lg border border-gray-200 bg-white"
              />
            </div>

            {/* Acciones */}
            <div className="flex flex-col justify-center gap-6 border-t border-gray-100 p-6 md:p-8 lg:border-l lg:border-t-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-gold-deep">
                  {convocatoriaRevista.edicion}
                </p>
                <h3 className="mt-2 font-display text-xl font-black text-primary">
                  {convocatoriaRevista.nombre}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {convocatoriaRevista.descripcion}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={convocatoriaUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-black text-primary transition-colors hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Descargar bases
                </a>
                <a
                  href={convocatoriaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Ver en el navegador
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
