import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import {
  duracionCarrera,
  gradoAcademico,
  perfilIngresante,
  tituloProfesional,
} from '@profile/content/academico';
import { site } from '@/profile';
import { Check } from 'lucide-react';

export default function PerfilIngresante() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <SectionTitle
            title="Perfil del Ingresante"
            center
            subtitle={`Competencias del ingresante del ${site.programa.nombre}.`}
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Programa de estudios', value: site.programa.nombreCorto },
              { label: 'Grado académico', value: gradoAcademico },
              { label: 'Título profesional', value: tituloProfesional },
              { label: 'Duración de la carrera', value: duracionCarrera },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">{item.label}</p>
                <p className="mt-1 text-sm font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 md:p-8 rounded-xl shadow-md border-t-4 border-t-primary">
            <ul className="space-y-4">
              {perfilIngresante.map((comp, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="bg-gold/15 text-gold rounded-full p-1 flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="text-gray-700 font-body text-sm leading-relaxed">
                      <span className="font-bold text-primary">{comp.area}: </span>
                      {comp.descripcion}
                    </p>
                    <p className="mt-1.5 text-gray-500 font-body text-sm leading-relaxed">
                      <span className="font-semibold text-gray-600">Justificación de pertinencia: </span>
                      {comp.justificacion}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
