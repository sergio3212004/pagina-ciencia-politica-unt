import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { site } from '@/profile';
import OrganigramaFlow from '../../components/personas/OrganigramaFlow';

export default function Organigrama() {
  return (
    <div className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle title="Estructura **Organizacional**" center subtitle={`Organigrama oficial 2021 de la Facultad de Derecho y Ciencias Políticas, que muestra la ubicación del ${site.denominacion} dentro de la estructura universitaria.`} />

        <div className="mt-12">
          <OrganigramaFlow />
        </div>
      </div>
    </div>
  );
}
