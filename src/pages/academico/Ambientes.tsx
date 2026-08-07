import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import AmbienteCard from '../../components/academico/AmbienteCard';
import { auditorios, laboratorioComputo } from '@profile/content/ambientes';

export default function Ambientes() {
  return (
    <>
      <AnchoredSection id="auditorios" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              badge="Infraestructura"
              title="Auditorios"
              subtitle="Espacios para eventos académicos, conferencias y actividades de la comunidad universitaria."
              center
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {auditorios.map((auditorio) => (
                <AmbienteCard key={auditorio.nombre} ambiente={auditorio} />
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>

      <AnchoredSection id="laboratorio" className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              badge="Infraestructura"
              title="Laboratorio de **Cómputo**"
              subtitle="Ambiente equipado con computadoras para prácticas y desarrollo de competencias digitales."
              center
            />
            <div className="grid grid-cols-1 gap-8 mt-12">
              {laboratorioComputo.map((ambiente) => (
                <AmbienteCard key={ambiente.nombre} ambiente={ambiente} />
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>
    </>
  );
}
