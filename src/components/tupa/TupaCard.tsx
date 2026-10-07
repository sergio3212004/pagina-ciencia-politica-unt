import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  Coins,
  ChevronDown,
  Building2,
  FileCheck2,
  Copy,
  Check,
  CreditCard,
  FileText,
} from 'lucide-react';
import type { TupaItem } from '@profile/content/tupa';
import clsx from 'clsx';

interface TupaCardProps {
  item: TupaItem;
  defaultExpanded?: boolean;
}

export default function TupaCard({ item, defaultExpanded = false }: TupaCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!item.codigo) return;
    navigator.clipboard.writeText(item.codigo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isGratuito =
    item.costoCorto.toLowerCase().includes('gratuito') ||
    item.pago?.toLowerCase().includes('gratuito');

  const reqLines = item.requisitos
    ? item.requisitos
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
    : [];

  return (
    <article
      className={clsx(
        'group bg-white rounded-2xl border transition-all duration-200 overflow-hidden',
        isExpanded
          ? 'border-gold/40 shadow-sm ring-1 ring-gold/20'
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
      )}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-5 md:p-6 cursor-pointer select-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap items-center gap-2">
            {item.codigo && (
              <button
                type="button"
                onClick={handleCopyCode}
                title="Copiar código del procedimiento"
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors"
              >
                <span>{item.codigo}</span>
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3 text-gray-400" />
                )}
              </button>
            )}

            <span className="text-xs text-gray-500 font-medium">
              {item.categoria}
            </span>

            <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              {item.tipo === 'Procedimiento Administrativo' ? 'Procedimiento' : 'Servicio'}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-primary ml-auto">
            <span>{isExpanded ? 'Ocultar detalles' : 'Ver requisitos'}</span>
            <ChevronDown
              className={clsx(
                'w-4 h-4 transition-transform duration-200',
                isExpanded ? 'rotate-180' : ''
              )}
            />
          </div>
        </div>

        <h3 className="text-base md:text-lg font-display font-bold text-primary leading-snug mb-3">
          {item.titulo}
        </h3>

        {item.descripcion && (
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4">
            {item.descripcion}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Coins className="w-4 h-4 text-gold" />
            <span className="text-gray-500">Derecho:</span>
            <span className={clsx('font-semibold', isGratuito ? 'text-emerald-700' : 'text-gray-900')}>
              {item.costoCorto || 'Según tasa'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="text-gray-500">Plazo:</span>
            <span className="font-medium text-gray-800">{item.plazoCorto}</span>
          </div>

          {item.unidadAprueba && (
            <div className="hidden sm:flex items-center gap-1.5 text-gray-500">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span>{item.unidadAprueba}</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="border-t border-gray-100 bg-gray-50/60"
          >
            <div className="p-5 md:p-6 space-y-5 text-sm">
              {item.descripcion && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-gold" />
                    Descripción
                  </h4>
                  <p className="text-gray-700 leading-relaxed bg-white p-3.5 rounded-xl border border-gray-200">
                    {item.descripcion}
                  </p>
                </div>
              )}

              {reqLines.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-primary" />
                    Requisitos Exigidos
                  </h4>
                  <div className="bg-white rounded-xl border border-gray-200 p-4 divide-y divide-gray-100">
                    {reqLines.map((req, idx) => {
                      const isNota = req.toLowerCase().startsWith('nota') || req.toLowerCase().startsWith('1.- en caso');
                      return (
                        <div
                          key={idx}
                          className={clsx(
                            'py-2 first:pt-0 last:pb-0 text-sm leading-relaxed',
                            isNota
                              ? 'text-amber-900 bg-amber-50/70 p-2.5 rounded-lg my-1 border border-amber-200/60'
                              : 'text-gray-700'
                          )}
                        >
                          {req}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-gold" />
                    Derecho de Tramitación
                  </h5>
                  <p className="font-semibold text-gray-900 mb-1">
                    {item.pago || (isGratuito ? 'Trámite Gratuito' : 'Según tasa')}
                  </p>
                  {item.modalidad && (
                    <div className="mt-2 pt-2 border-t border-gray-100 text-xs text-gray-600 whitespace-pre-line leading-relaxed">
                      {item.modalidad}
                    </div>
                  )}
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-primary" />
                    Plazo y Calificación
                  </h5>
                  <div className="text-xs space-y-2">
                    <div>
                      <span className="text-gray-500 block">Plazo de atención:</span>
                      <strong className="text-gray-900 text-sm">
                        {item.plazo || item.plazoCorto}
                      </strong>
                    </div>
                    {item.calificacion && (
                      <div className="pt-2 border-t border-gray-100">
                        <span className="text-gray-500 block mb-0.5">Calificación:</span>
                        <p className="text-gray-700 leading-snug">
                          {item.calificacion}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {item.unidadPresenta && (
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <span className="text-gray-500 block font-semibold mb-1">
                      Presentación de expediente:
                    </span>
                    <p className="text-gray-800 leading-relaxed">
                      {item.unidadPresenta}
                    </p>
                  </div>
                )}
                {item.unidadAprueba && (
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200">
                    <span className="text-gray-500 block font-semibold mb-1">
                      Autoridad que resuelve:
                    </span>
                    <p className="text-gray-800 font-medium">
                      {item.unidadAprueba}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-between">
                <span>
                  Formulario:{' '}
                  <strong className="text-gray-700">
                    {item.formularios ? item.formularios.split('\n')[0] : 'Formato Único de Trámite (FUT)'}
                  </strong>
                </span>
                <span className="text-gray-400">TUPA UNT</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
