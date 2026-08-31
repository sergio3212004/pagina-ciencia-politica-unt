import React, { useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import { site, siteName } from '@/profile';
import { GraduationCap, ExternalLink } from 'lucide-react';

const ADMISION_GUIA_URL = 'https://www.admisionunt.info/carreraDetalle/39';

export default function GuiaPostulante() {
  useEffect(() => {
    document.title = `Guía del postulante | Admisión | ${siteName}`;
    // Redirección directa al portal oficial de admisión de la carrera
    window.location.href = ADMISION_GUIA_URL;
  }, []);

  return (
    <PageWrapper>
      <PageHero
        title="Guía del postulante"
        subtitle={`Todo lo que necesitas saber para postular al ${site.programa.nombre}.`}
        icon={GraduationCap}
        breadcrumbs={[{ label: 'Admisión' }, { label: 'Guía del postulante' }]}
      />
      <div className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
            <GraduationCap className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-xl font-display font-bold text-primary mb-2">
              Redirigiendo a la Guía del Postulante...
            </h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              La información actualizada de admisión, vacantes y requisitos se encuentra en el Sistema Oficial de Admisión de la UNT.
            </p>
            <a
              href={ADMISION_GUIA_URL}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md"
            >
              Ir a Admisión UNT <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
