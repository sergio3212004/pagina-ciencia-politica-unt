import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';
import DireccionEscuela from '../autoridades/Direccion';
import { mostrarDireccionDepartamento } from '@profile/content/autoridades';

/**
 * Página agrupada "Dirección". El navbar muestra "Director de escuela" y "Director
 * de departamento" por separado; ambos llevan aquí (#escuela / #departamento).
 */
export default function Direccion() {
  return (
    <>
      <AnchoredSection id="escuela">
        <DireccionEscuela />
      </AnchoredSection>
      {mostrarDireccionDepartamento && (
        <AnchoredSection id="departamento">
          <EnConstruccion titulo="Director de **departamento**" bg="bg-gray-50" />
        </AnchoredSection>
      )}
    </>
  );
}
