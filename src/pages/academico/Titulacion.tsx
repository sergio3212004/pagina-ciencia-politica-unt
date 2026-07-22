import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { tramites } from '@profile/content/academico';
import { GraduationCap, Award, Download, Check, ExternalLink, Mail } from 'lucide-react';
import colacionPortada from '@profile/assets/egresados/colacion-portada.webp';
import colacionRequisitos from '@profile/assets/egresados/colacion-requisitos.webp';
import colacionRepositorio from '@profile/assets/egresados/colacion-repositorio.webp';

const pasosColacion = [
  {
    numero: '01',
    titulo: 'Registrar la solicitud',
    descripcion: 'Registra tu solicitud de carpeta de titulación en la web de la Unidad de Registros Académicos y adjunta los documentos solicitados.',
    requisitos: [
      'Copia simple del DNI, nítida y vigente.',
      'Recibo de pago por derecho para optar el título (S/ 250.00).',
      'Constancia de originalidad de Turnitin, expedida por la presidencia del Comité de Ética de la Facultad.',
      'Fotografía reciente tamaño pasaporte, a color, con fondo blanco y el logo de la UNT.',
      'Grado de bachiller escaneado y nítido.',
    ],
  },
  {
    numero: '02',
    titulo: 'Solicitar la constancia de repositorio',
    descripcion: 'Solicita la constancia de repositorio a la Biblioteca y adjunta los requisitos indicados en el drive informativo de la Escuela.',
    requisitos: [],
  },
  {
    numero: '03',
    titulo: 'Presentar los documentos finales',
    descripcion: 'Envía la documentación final al correo politica@unitru.edu.pe.',
    requisitos: [
      'Acta de sustentación en formato PDF.',
      'Versión final de la tesis en formato PDF.',
      'Constancia URL de repositorio.',
    ],
  },
];

const imagenesColacion = [
  { src: colacionPortada, alt: 'Portada de los pasos para completar la carpeta de título para colaciones' },
  { src: colacionRequisitos, alt: 'Paso 1: registro de solicitud y requisitos para la carpeta de título' },
  { src: colacionRepositorio, alt: 'Pasos 2 y 3: constancia de repositorio y presentación de documentos finales' },
];

export default function Titulacion() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Grados y **Títulos**"
          subtitle="Requisitos y modalidades para obtener tu grado de bachiller y título profesional."
          center
        />

        <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
          {tramites.map((tramite, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.4 }}
              className="group"
            >
              <div className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-[0_8px_32px_rgba(230,173,9,0.1)] transition duration-300 overflow-hidden">
                {/* Cabecera azul */}
                <div className="bg-primary p-7 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '18px 18px' }}
                  />
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold/20 border border-gold/30 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ boxShadow: '0 0 20px rgba(230,173,9,0.15)' }}>
                      {idx === 0
                        ? <GraduationCap className="w-7 h-7 text-gold" />
                        : <Award className="w-7 h-7 text-gold" />
                      }
                    </div>
                    <div>
                      <div className="w-6 h-0.5 bg-gold rounded-full mb-2" />
                      <h3 className="text-xl font-display font-black text-white leading-tight">
                        {tramite.titulo}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Cuerpo */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {tramite.descripcion}
                  </p>

                  {/* Requisitos */}
                  <div className="bg-gray-50 rounded-2xl p-5 flex-1">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-600 mb-4">
                      Requisitos Principales
                    </h4>
                    <ul className="space-y-3">
                      {tramite.requisitos.map((req, ridx) => (
                        <li key={ridx} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-gold" />
                          </span>
                          <span className="leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href={tramite.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold hover:bg-gold-deep text-primary font-black rounded-xl transition-colors text-sm group-hover:shadow-[0_4px_20px_rgba(230,173,9,0.4)]"
                  >
                    <Download className="w-4 h-4" />
                    Descargar Requisitos
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section id="colacion" className="max-w-6xl mx-auto mt-20 scroll-mt-32">
          <SectionTitle
            title="Carpeta de título para **colaciones**"
            subtitle="Guía para egresados que completarán el trámite de su carpeta de título."
            center
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {pasosColacion.map((paso) => (
              <article key={paso.numero} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-xl bg-primary px-3 text-sm font-black text-gold">
                  {paso.numero}
                </span>
                <h3 className="mt-4 text-lg font-display font-black text-primary">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{paso.descripcion}</p>
                {paso.requisitos.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {paso.requisitos.map((requisito) => (
                      <li key={requisito} className="flex items-start gap-3 text-sm text-gray-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                        <span>{requisito}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://tramites-urac.unitru.edu.pe/message"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-black text-primary transition-colors hover:bg-gold-deep"
            >
              Registrar solicitud <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="mailto:politica@unitru.edu.pe"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/15 px-6 py-3.5 text-sm font-black text-primary transition-colors hover:bg-primary/5"
            >
              politica@unitru.edu.pe <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {imagenesColacion.map((imagen) => (
              <a
                key={imagen.src}
                href={imagen.src}
                target="_blank"
                rel="noopener noreferrer"
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-transform hover:-translate-y-1"
                aria-label={`${imagen.alt}. Abrir imagen completa`}
              >
                <img src={imagen.src} alt={imagen.alt} loading="lazy" className="h-auto w-full" />
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
