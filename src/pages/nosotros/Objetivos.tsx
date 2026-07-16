import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { objetivosAcademicos, objetivosInstitucionales } from '@profile/content/academico';
import CurriculumVersionSwitch from '../../components/academico/CurriculumVersionSwitch';
import EnConstruccion from '../../components/layout/EnConstruccion';

/**
 * Objetivos propios de la Escuela Profesional de Ciencia Política y Gobernabilidad,
 * tomados de su currículo vigente.
 */
export default function Objetivos() {
  const [version, setVersion] = useState('Vigente');

  return (
    <>
      <div className="bg-white pt-10">
        <div className="container mx-auto flex justify-center px-4 md:px-8">
          <CurriculumVersionSwitch value={version} versions={['Vigente', '2027']} onChange={setVersion} />
        </div>
      </div>
      {version === '2027' ? (
        <EnConstruccion titulo="Objetivos **2027**" descripcion="Los objetivos del plan 2027 estarán disponibles próximamente." />
      ) : (
      <>
      <AnchoredSection id="institucionales" className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              badge="Escuela profesional"
              title="Objetivos **Institucionales**"
              subtitle="Propósitos que orientan la formación, la investigación y el compromiso social de la Escuela de Ciencia Política y Gobernabilidad."
              center
            />
            <div className="grid gap-5 md:grid-cols-3">
              {objetivosInstitucionales.map((objetivo, index) => (
                <motion.article
                  key={objetivo.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="h-full rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <Building2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-primary">
                    {objetivo.titulo}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-gray-600">
                    {objetivo.descripcion}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>

      <AnchoredSection id="academicos" className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              badge="Currículo de estudios"
              title="Objetivos **Académicos**"
              subtitle="Resultados profesionales que la formación académica busca consolidar en sus egresados."
              center
            />
            <div className="grid gap-4">
              {objetivosAcademicos.map((objetivo, index) => (
                <motion.article
                  key={objetivo.codigo}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:gap-6 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-black uppercase tracking-[0.16em] text-gold">
                      {objetivo.codigo}
                    </p>
                    <p className="font-body leading-relaxed text-gray-700">
                      {objetivo.descripcion}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </AnchoredSection>
      </>
      )}
    </>
  );
}
