import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { convenios, type Convenio } from '@profile/content/investigacion';
import { Search, Globe, Building2, Share2, Calendar, FileText, UserCheck } from 'lucide-react';

export default function Convenios() {
  const [selectedAmbito, setSelectedAmbito] = useState<'todos' | 'nacional' | 'internacional' | 'red'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = useMemo(() => {
    const list = convenios as Convenio[];
    return {
      total: list.length,
      nacionales: list.filter((c) => c.ambito === 'nacional').length,
      internacionales: list.filter((c) => c.ambito === 'internacional').length,
      redes: list.filter((c) => c.ambito === 'red').length,
    };
  }, []);

  const filteredConvenios = useMemo(() => {
    const list = convenios as Convenio[];
    return list.filter((item) => {
      const matchesAmbito = selectedAmbito === 'todos' || item.ambito === selectedAmbito;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !term ||
        item.institucion.toLowerCase().includes(term) ||
        item.descripcion.toLowerCase().includes(term) ||
        (item.pais && item.pais.toLowerCase().includes(term)) ||
        (item.tipo && item.tipo.toLowerCase().includes(term)) ||
        (item.coordinador && item.coordinador.toLowerCase().includes(term)) ||
        (item.categoria && item.categoria.toLowerCase().includes(term));
      return matchesAmbito && matchesSearch;
    });
  }, [selectedAmbito, searchTerm]);

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Convenios **Institucionales**"
          center
          subtitle="Alianzas estratégicas nacionales e internacionales que potencian la formación académica, la investigación y la movilidad de Ciencia Política y Gobernabilidad."
        />

        {/* Filtros y Buscador */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 shadow-sm">
            {/* Pestañas de Ámbito */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                onClick={() => setSelectedAmbito('todos')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedAmbito === 'todos'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Todos ({stats.total})
              </button>
              <button
                onClick={() => setSelectedAmbito('internacional')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedAmbito === 'internacional'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                Internacionales ({stats.internacionales})
              </button>
              <button
                onClick={() => setSelectedAmbito('nacional')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedAmbito === 'nacional'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                Nacionales ({stats.nacionales})
              </button>
              <button
                onClick={() => setSelectedAmbito('red')}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedAmbito === 'red'
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                Redes ({stats.redes})
              </button>
            </div>

            {/* Buscador */}
            <div className="relative min-w-[240px] md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar convenio, país, entidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Grid de Convenios */}
        <div className="max-w-6xl mx-auto mt-10">
          {filteredConvenios.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500 font-medium text-sm">
                No se encontraron convenios que coincidan con la búsqueda.
              </p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredConvenios.map((convenio, idx) => (
                  <motion.div
                    key={`${convenio.institucion}-${idx}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <Card className="h-full p-6 flex flex-col hover:shadow-lg transition-shadow border-gray-100">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <Badge
                          variant={
                            convenio.ambito === 'internacional'
                              ? 'info'
                              : convenio.ambito === 'red'
                              ? 'gold'
                              : 'secondary'
                          }
                          className="w-fit text-[11px]"
                        >
                          {convenio.tipo}
                        </Badge>
                        {convenio.pais && (
                          <span className="text-[11px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                            <Globe className="w-3 h-3 text-gold" />
                            {convenio.pais}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-display font-bold text-primary mb-2 leading-snug">
                        {convenio.institucion}
                      </h3>

                      <p className="text-gray-600 font-body text-xs sm:text-sm mb-5 flex-grow leading-relaxed">
                        {convenio.descripcion}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600 font-body mt-auto">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>
                            <strong className="text-gray-800">Vigencia:</strong> {convenio.vigencia}
                          </span>
                        </div>

                        {convenio.resolucion && (
                          <div className="flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5 text-gold shrink-0" />
                            <span>
                              <strong className="text-gray-800">Resolución:</strong> {convenio.resolucion}
                            </span>
                          </div>
                        )}

                        {convenio.coordinador && (
                          <div className="flex items-start gap-2">
                            <UserCheck className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-gray-800">Coordinación:</strong> {convenio.coordinador}
                            </span>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

