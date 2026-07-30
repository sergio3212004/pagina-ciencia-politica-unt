import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import Proyectos from './Proyectos';
import Tesis from './Tesis';

/**
 * Página agrupada "Proyectos". El navbar muestra "Proyectos de investigación" y
 * "Proyectos y tesis" por separado; ambos llevan aquí (#investigacion / #tesis).
 */
export default function ProyectosGrupo() {
  return (
    <>
      <AnchoredSection id="investigacion">
        <Proyectos />
      </AnchoredSection>
      <AnchoredSection id="tesis">
        <Tesis />
      </AnchoredSection>
    </>
  );
}
