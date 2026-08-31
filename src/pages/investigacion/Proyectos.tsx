import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { ExternalLink, Database, BookOpen, Search, ArrowUpRight } from 'lucide-react';

const REPOSITORIO_URL = 'https://repositorio.unitru.edu.pe/communities/55c597dd-0e48-4da0-b3b3-d10c071151dc/search';

export default function Proyectos() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Proyectos de **Investigación**"
          center
          subtitle="Consulta los proyectos de investigación, tesis y producción académica de la Escuela en el Repositorio Institucional de la Universidad Nacional de Trujillo."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-gray-100 bg-gradient-to-br from-primary via-primary to-primary/95 p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
          >
            {/* Decoración de fondo */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-gold/10 pointer-events-none blur-2xl" />
            <div className="absolute -left-12 -top-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none blur-xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-black uppercase tracking-wider mb-4 border border-gold/30">
                  <Database className="w-3.5 h-3.5" />
                  Repositorio Institucional UNT
                </span>
                
                <h3 className="text-2xl md:text-3xl font-display font-black leading-tight text-white mb-3">
                  Catálogo Oficial de Proyectos y Tesis
                </h3>
                
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                  Accede al listado completo, actualizado e indexado de los proyectos de investigación, tesis de pregrado y posgrado, y trabajos académicos vinculados a Ciencia Política y Gobernabilidad.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/70">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-gold" />
                    Acceso abierto
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="flex items-center gap-1.5">
                    <Search className="w-4 h-4 text-gold" />
                    Búsqueda por autor, año y línea
                  </span>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <a
                  href={REPOSITORIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-3 bg-gold hover:bg-gold-deep text-primary font-black px-7 py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-gold/30 hover:scale-105 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <span>Ver Repositorio</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <span className="sr-only">(abre en una pestaña nueva)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}