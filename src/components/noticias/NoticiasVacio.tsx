import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { site } from '@/profile';

/**
 * Estado vacío de "Noticias y Actualidad": se muestra cuando el perfil no tiene
 * noticias publicadas todavía. Mantiene el tono institucional (azul + dorado)
 * y avisa al visitante de que el espacio está en etapa de implementación.
 *
 * Se renderiza dentro de la propia sección (Inicio y página de noticias), por
 * lo que no incluye envoltorio de sección ni título para no duplicarlos.
 */
export default function NoticiasVacio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl flex flex-col items-center text-center rounded-2xl border border-dashed border-primary/20 bg-white/70 px-6 py-14 md:py-16"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/15 border border-gold/25 mb-5">
        <Newspaper className="w-8 h-8 text-gold" />
      </div>
      <span className="inline-block mb-3 text-xs font-black uppercase tracking-[0.18em] text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
        Próximamente
      </span>
      <h3 className="font-display text-2xl md:text-3xl font-black text-primary leading-tight mb-3">
        Aún no hay <span className="text-gold">noticias</span> publicadas
      </h3>
      <p className="text-gray-600 font-body text-base leading-relaxed max-w-lg">
        Este espacio está en construcción. En breve difundiremos aquí los eventos,
        convocatorias y comunicados del {site.denominacion}.
      </p>
    </motion.div>
  );
}