import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { User, Mail } from 'lucide-react';

interface Autoridad {
  cargo: string;
  nombre: string;
  bio?: string;
  correo?: string;
  foto?: string | null;
  fotoPosicion?: string;
}

interface AutoridadCardProps {
  autoridad: Autoridad;
  principal?: boolean;
}

export default function AutoridadCard({ autoridad, principal = false }: AutoridadCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} className="h-full">
      <Card className={`h-full p-8 flex flex-col items-center text-center ${principal ? 'border-2 border-primary/50 shadow-lg' : ''}`}>
        <div className="mb-6 flex h-52 w-52 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary bg-primary/10 text-primary">
          {autoridad.foto ? (
            <img
              src={autoridad.foto}
              alt={`Fotografía de ${autoridad.nombre}`}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: autoridad.fotoPosicion ?? 'center 25%' }}
            />
          ) : (
            <User className="h-28 w-28 opacity-70" />
          )}
        </div>
        
        <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2">{autoridad.cargo}</span>
        <h3 className={`${principal ? 'text-2xl' : 'text-xl'} font-display font-bold text-primary mb-3`}>{autoridad.nombre}</h3>
        {autoridad.bio && <p className="text-gray-600 font-body text-sm mb-4 leading-relaxed max-w-md">{autoridad.bio}</p>}
        
        {autoridad.correo && (
          <a href={`mailto:${autoridad.correo}`} className="text-gray-500 hover:text-primary text-sm mt-auto inline-flex items-center gap-2 transition-colors">
            <Mail className="w-4 h-4" /> {autoridad.correo}
          </a>
        )}
      </Card>
    </motion.div>
  );
}
