import { BriefcaseBusiness } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { administrativos } from '@profile/content/autoridades';

export default function Administrativos() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Personal **Administrativo**"
          subtitle="Personal que brinda soporte a la gestión de la Escuela Profesional de Ciencia Política y Gobernabilidad."
          center
        />

        <div className="mx-auto mt-10 grid max-w-3xl gap-6">
          {administrativos.map((persona) => (
            <article key={persona.nombre} className="flex flex-col items-center gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-7 text-center shadow-sm sm:flex-row sm:text-left">
              <div className="flex h-52 w-52 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary bg-primary/10 text-primary">
                {persona.foto ? (
                  <img
                    src={persona.foto}
                    alt={`Fotografía de ${persona.nombre}`}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: persona.fotoPosicion ?? 'center 25%' }}
                    loading="lazy"
                  />
                ) : (
                  <BriefcaseBusiness className="h-9 w-9" aria-hidden="true" />
                )}
              </div>
              <div>
                <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-gold">{persona.cargo}</p>
                <h3 className="font-display text-2xl font-bold text-primary">{persona.nombre}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
