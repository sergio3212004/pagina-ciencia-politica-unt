import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface AmbienteDetalle {
  titulo: string;
  items: string[];
}

interface Ambiente {
  nombre: string;
  tipo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  detalles?: AmbienteDetalle[];
}

interface AmbienteCardProps {
  ambiente: Ambiente;
}

/**
 * Tarjeta de ambiente con imagen RECTANGULAR (4:3) arriba y la información del
 * ambiente debajo (introducción + bloques de detalles con viñetas). Sigue el
 * estilo de las tarjetas del sitio (Card + Badge, hover con elevación y zoom
 * sutil de la imagen).
 */
export default function AmbienteCard({ ambiente }: AmbienteCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} className="h-full group">
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-gray-100">
          <img
            src={ambiente.imagen}
            alt={ambiente.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <Badge variant="secondary" className="w-fit mb-3">{ambiente.tipo}</Badge>
          <h3 className="font-display text-xl font-bold text-primary leading-snug mb-3">
            {ambiente.nombre}
          </h3>
          <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
            {ambiente.descripcion}
          </p>

          {ambiente.detalles?.map((detalle) => (
            <div key={detalle.titulo} className="mb-5 last:mb-0">
              <h4 className="mb-2 text-xs font-black uppercase tracking-[0.15em] text-gold">
                {detalle.titulo}
              </h4>
              <ul className="space-y-2">
                {detalle.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm leading-relaxed text-gray-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
