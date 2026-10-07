import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, Filter, ChevronLeft, ChevronRight, FileSearch, FileText, Info } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import TupaCard from '../../components/tupa/TupaCard';
import { tupaItems, tupaCategorias } from '@profile/content/tupa';
import clsx from 'clsx';

const ITEMS_PER_PAGE = 12;

export default function Procedimientos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [tipoFilter, setTipoFilter] = useState<'Todos' | 'Procedimiento Administrativo' | 'Servicio en Exclusividad'>('Todos');
  const [costoFilter, setCostoFilter] = useState<'Todos' | 'Gratuito' | 'Pago'>('Todos');
  const [currentPage, setCurrentPage] = useState(1);

  const listTopRef = useRef<HTMLDivElement>(null);

  // Filtrado y búsqueda
  const filteredItems = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();

    return tupaItems.filter((item) => {
      if (q) {
        const matchTitle = item.titulo.toLowerCase().includes(q);
        const matchCode = item.codigo.toLowerCase().includes(q);
        const matchDesc = item.descripcion.toLowerCase().includes(q);
        const matchReqs = item.requisitos.toLowerCase().includes(q);
        const matchCat = item.categoria.toLowerCase().includes(q);
        if (!matchTitle && !matchCode && !matchDesc && !matchReqs && !matchCat) {
          return false;
        }
      }

      if (selectedCategory !== 'Todos' && item.categoria !== selectedCategory) {
        return false;
      }

      if (tipoFilter !== 'Todos' && item.tipo !== tipoFilter) {
        return false;
      }

      if (costoFilter === 'Gratuito') {
        const isGratis =
          item.costoCorto.toLowerCase().includes('gratuito') ||
          item.pago?.toLowerCase().includes('gratuito');
        if (!isGratis) return false;
      } else if (costoFilter === 'Pago') {
        const isGratis =
          item.costoCorto.toLowerCase().includes('gratuito') ||
          item.pago?.toLowerCase().includes('gratuito');
        if (isGratis) return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory, tipoFilter, costoFilter]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, tipoFilter, costoFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('Todos');
    setTipoFilter('Todos');
    setCostoFilter('Todos');
  };

  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Procedimientos **Administrativos**"
          subtitle="Guía informativa de requisitos, plazos y tasas para la tramitación de expedientes en la UNT."
          center
        />

        {/* Cuadro institucional sobrio de orientación al estudiante */}
        <div className="max-w-4xl mx-auto mb-10 flex items-start gap-4 rounded-2xl border border-gold/25 bg-white p-5 md:p-6 shadow-sm">
          <div className="shrink-0 rounded-xl bg-primary p-3 text-gold">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display font-bold text-primary text-base">
              Orientación para Trámites Académicos y Administrativos
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              El Texto Único de Procedimientos Administrativos (TUPA) compendia los requisitos, derechos de tramitación y plazos oficiales aplicables a estudiantes, egresados y personal docente. Las solicitudes se canalizan mediante el <strong>Formato Único de Trámite (FUT)</strong> ante la Mesa de Partes de la Facultad de Derecho y Ciencias Políticas o Mesa de Partes General de la UNT.
            </p>
          </div>
        </div>

        {/* Panel de Búsqueda y Filtros */}
        <div ref={listTopRef} className="max-w-5xl mx-auto scroll-mt-28 mb-8">
          <div className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-gray-200">
            {/* Buscador */}
            <div className="relative mb-5">
              <label htmlFor="tupa-search" className="sr-only">
                Buscar procedimiento o trámite
              </label>
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="tupa-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, código SUT (ej. PA5200A691) o palabra clave (bachiller, convalidación, carné)..."
                className="w-full pl-11 pr-10 py-3 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  aria-label="Limpiar búsqueda"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categorías */}
            <div className="mb-5">
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-gold" />
                Áreas y Categorías
              </span>
              <div className="flex flex-wrap gap-1.5">
                {tupaCategorias.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={clsx(
                        'px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors',
                        isSelected
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      )}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tipo y Costo */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium">Tipo:</span>
                  <div className="inline-flex rounded-lg bg-gray-100 p-0.5 border border-gray-200">
                    {(['Todos', 'Procedimiento Administrativo', 'Servicio en Exclusividad'] as const).map((tipo) => (
                      <button
                        key={tipo}
                        type="button"
                        onClick={() => setTipoFilter(tipo)}
                        className={clsx(
                          'px-2.5 py-1 rounded text-xs font-medium transition-colors',
                          tipoFilter === tipo
                            ? 'bg-white text-primary shadow-xs font-semibold'
                            : 'text-gray-600 hover:text-gray-900'
                        )}
                      >
                        {tipo === 'Procedimiento Administrativo' ? 'Procedimientos' : tipo === 'Servicio en Exclusividad' ? 'Servicios' : 'Todos'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-500 font-medium">Derecho:</span>
                  <div className="inline-flex rounded-lg bg-gray-100 p-0.5 border border-gray-200">
                    {(['Todos', 'Gratuito', 'Pago'] as const).map((costo) => (
                      <button
                        key={costo}
                        type="button"
                        onClick={() => setCostoFilter(costo)}
                        className={clsx(
                          'px-2.5 py-1 rounded text-xs font-medium transition-colors',
                          costoFilter === costo
                            ? 'bg-white text-primary shadow-xs font-semibold'
                            : 'text-gray-600 hover:text-gray-900'
                        )}
                      >
                        {costo === 'Pago' ? 'Con Tasa' : costo}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {(searchTerm || selectedCategory !== 'Todos' || tipoFilter !== 'Todos' || costoFilter !== 'Todos') && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs font-semibold text-primary hover:text-gold transition-colors underline"
                >
                  Restablecer filtros
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Indicador de resultados */}
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 mb-4 px-1">
          <p className="text-xs text-gray-500 font-medium">
            Mostrando <span className="font-semibold text-gray-800">{filteredItems.length}</span> procedimientos
            {selectedCategory !== 'Todos' && ` en "${selectedCategory}"`}
          </p>
          {totalPages > 1 && (
            <span className="text-xs text-gray-500">
              Página {currentPage} de {totalPages}
            </span>
          )}
        </div>

        {/* Listado */}
        <div className="max-w-5xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="space-y-3.5 mb-10">
              {paginatedItems.map((item) => (
                <TupaCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm mb-10">
              <FileSearch className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <h4 className="text-base font-display font-bold text-gray-800 mb-1">
                No se encontraron procedimientos que coincidan
              </h4>
              <p className="text-gray-500 text-xs max-w-sm mx-auto mb-4">
                Prueba con otros términos de búsqueda o restablece los filtros.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 bg-primary text-white font-medium px-4 py-2 rounded-lg text-xs hover:bg-primary-dark transition-colors"
              >
                Restablecer búsqueda
              </button>
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4 pb-10">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Página anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, idx) => idx + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                  .map((page, idx, arr) => {
                    const prev = arr[idx - 1];
                    const hasGap = prev && page - prev > 1;
                    return (
                      <React.Fragment key={page}>
                        {hasGap && <span className="px-1 text-gray-400 text-xs">...</span>}
                        <button
                          type="button"
                          onClick={() => handlePageChange(page)}
                          className={clsx(
                            'w-8 h-8 rounded-lg text-xs font-semibold transition-colors',
                            currentPage === page
                              ? 'bg-primary text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                          )}
                        >
                          {page}
                        </button>
                      </React.Fragment>
                    );
                  })}
              </div>

              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className="p-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Página siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
