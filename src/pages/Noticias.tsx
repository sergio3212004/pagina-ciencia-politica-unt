import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import PageHero from '../components/layout/PageHero';
import { Card } from '../components/ui/Card';
import { Modal } from '../components/ui/Modal';
import { noticias, Noticia } from '@profile/content/noticias';
import { site } from '@/profile';
import NoticiasVacio from '../components/noticias/NoticiasVacio';
import { Newspaper, Calendar, ArrowRight, MapPin, Tag, Building2, ExternalLink } from 'lucide-react';

export default function Noticias() {
  const [searchParams, setSearchParams] = useSearchParams();
  const noticiaIdParam = searchParams.get('id');
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

  useEffect(() => {
    if (noticiaIdParam) {
      const found = noticias.find((n) => String(n.id) === noticiaIdParam);
      if (found) {
        setSelectedNoticia(found);
      }
    }
  }, [noticiaIdParam]);

  const handleOpen = (noticia: Noticia) => {
    setSelectedNoticia(noticia);
    setSearchParams({ id: String(noticia.id) });
  };

  const handleClose = () => {
    setSelectedNoticia(null);
    setSearchParams({});
  };

  return (
    <PageWrapper>
      <PageHero
        title="Noticias y Actualidad"
        subtitle={`Eventos, convocatorias y logros del ${site.programa.nombre}.`}
        icon={Newspaper}
        breadcrumbs={[{ label: 'Noticias' }]}
      />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          {noticias.length > 0 ? (
            <div className={`grid grid-cols-1 ${noticias.length === 1 ? 'max-w-xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-7`}>
              {noticias.map((noticia, idx) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <button
                    type="button"
                    onClick={() => handleOpen(noticia)}
                    className="block w-full text-left h-full group focus:outline-none focus:ring-2 focus:ring-gold rounded-xl"
                  >
                    <Card className="h-full flex flex-col p-0 overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Franja superior */}
                      <div className="h-1.5 bg-primary w-full" />
                      {/* Imagen */}
                      <div className="h-52 w-full overflow-hidden shrink-0 bg-slate-100">
                        <img
                          src={noticia.imagen}
                          alt={noticia.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
                            {noticia.categoria}
                          </span>
                          <span className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                            <Calendar className="w-3.5 h-3.5" />
                            {noticia.fechaFormateada}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                          {noticia.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {noticia.resumen}
                        </p>
                        <span className="mt-auto inline-flex items-center gap-1 text-gold text-sm font-bold group-hover:gap-2 transition-[gap]">
                          Leer más <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Card>
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <NoticiasVacio />
          )}
        </div>
      </section>

      {/* Modal de Detalle de Convocatoria / Noticia */}
      {selectedNoticia && (
        <Modal
          isOpen={Boolean(selectedNoticia)}
          onClose={handleClose}
          title={selectedNoticia.titulo}
          maxWidth="max-w-3xl"
        >
          <div className="space-y-6 text-gray-700">
            {/* Encabezado o Banner Secundario si existe */}
            {selectedNoticia.imagenSecundaria && (
              <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <img
                  src={selectedNoticia.imagenSecundaria}
                  alt="Encabezado del evento"
                  className="w-full h-auto object-contain max-h-48 mx-auto"
                />
              </div>
            )}

            {/* Metadatos principales */}
            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
              <span className={`font-bold px-3 py-1 rounded-full ${selectedNoticia.categoriaColor}`}>
                {selectedNoticia.categoria}
              </span>
              <span className="flex items-center gap-1.5 text-gray-500">
                <Calendar className="w-4 h-4 text-primary" />
                Publicado: {selectedNoticia.fechaFormateada}
              </span>
              {selectedNoticia.fechaEvento && (
                <span className="flex items-center gap-1.5 text-primary font-semibold">
                  <Tag className="w-4 h-4 text-gold" />
                  Fecha del evento: {selectedNoticia.fechaEvento}
                </span>
              )}
              {selectedNoticia.lugar && (
                <span className="flex items-center gap-1.5 text-gray-600">
                  <MapPin className="w-4 h-4 text-red-500" />
                  {selectedNoticia.lugar}
                </span>
              )}
            </div>

            {/* Eje temático */}
            {selectedNoticia.ejeTematico && (
              <div className="p-4 bg-amber-50 border-l-4 border-gold rounded-r-lg">
                <p className="text-xs font-bold text-yellow-900 uppercase tracking-wider mb-1">
                  Eje Temático Central
                </p>
                <p className="text-sm font-semibold text-primary">
                  «{selectedNoticia.ejeTematico}»
                </p>
              </div>
            )}

            {/* Descripción completa */}
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedNoticia.descripcionCompleta || selectedNoticia.resumen}
            </div>

            {/* Afiche / Imagen principal */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Afiche Oficial de la Convocatoria
              </p>
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md bg-white flex justify-center p-2">
                <img
                  src={selectedNoticia.imagen}
                  alt={selectedNoticia.titulo}
                  className="max-h-[500px] w-auto object-contain rounded-lg"
                />
              </div>
              <div className="text-right">
                <a
                  href={selectedNoticia.imagen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Abrir afiche en tamaño completo
                </a>
              </div>
            </div>

            {/* Instituciones convocantes */}
            {selectedNoticia.instituciones && selectedNoticia.instituciones.length > 0 && (
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-primary" />
                  Red de Universidades Convocantes
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                  {selectedNoticia.instituciones.map((inst, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{inst}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal>
      )}
    </PageWrapper>
  );
}
