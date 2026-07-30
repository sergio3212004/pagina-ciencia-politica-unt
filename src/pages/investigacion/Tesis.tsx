import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';

const plantillas = [
  {
    titulo: 'Proyecto de tesis',
    descripcion:
      'Estructura para la elaboración del proyecto de tesis en las modalidades de investigación cuantitativa y cualitativa.',
    archivo: 'F1_Proyecto_de_Tesis_Estructura.docx',
  },
  {
    titulo: 'Tesis',
    descripcion:
      'Estructura para la presentación del informe de tesis en las modalidades de investigación cuantitativa y cualitativa.',
    archivo: 'F2_Tesis_Estructura.docx',
  },
];

export default function Tesis() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Proyectos de investigación y **tesis**"
          subtitle="Descarga las plantillas oficiales para preparar tu proyecto y el informe final de tesis."
          center
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-7 md:grid-cols-2">
          {plantillas.map((plantilla, idx) => (
            <motion.article
              key={plantilla.archivo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                <FileText className="h-7 w-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-display font-black text-primary">
                {plantilla.titulo}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {plantilla.descripcion}
              </p>
              <a
                href={`${baseUrl}${plantilla.archivo}`}
                download
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-black text-primary transition-colors hover:bg-gold-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar plantilla
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
