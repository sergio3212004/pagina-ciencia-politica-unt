import React from 'react';
import { FileText, Download, ExternalLink, Building2, CreditCard, Layers } from 'lucide-react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { tupaInfo } from '@profile/content/tupa';

export default function DocumentoOficial() {
  return (
    <div className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Documento Oficial del **TUPA**"
          subtitle="Texto Único de Procedimientos Administrativos de la Universidad Nacional de Trujillo."
          center
        />

        {/* Ficha institucional sobria y botones de acción */}
        <div className="max-w-5xl mx-auto mb-10 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-gold flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-display font-bold text-primary">
                  Texto Único de Procedimientos Administrativos (TUPA)
                </h3>
                <p className="text-sm text-gray-600 mt-0.5">
                  Aprobado por {tupaInfo.normaAprobacion} y modificatorias.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Documento técnico de gestión institucional · 325 páginas oficiales · Formato PDF ({tupaInfo.tamanoArchivo})
                </p>
              </div>
            </div>

            {/* Acciones principales de descarga */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={tupaInfo.archivoPdf}
                download="03_TUPA_vigente_UNT_PDF_2021.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-primary font-bold px-5 py-2.5 rounded-xl shadow-xs transition-colors text-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                Descargar Documento (PDF)
              </a>
              <a
                href={tupaInfo.archivoPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-sm w-full sm:w-auto"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir en pestaña nueva
              </a>
            </div>
          </div>

          {/* Resumen de estructura para guía al estudiante */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 text-xs text-gray-600">
            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
              <strong className="block font-display font-bold text-gray-800 text-sm mb-1">
                1. Procedimientos
              </strong>
              <p className="leading-relaxed">
                Regula convalidaciones, reserva y retiro de matrícula, reanudación de estudios, grados académicos y titulación.
              </p>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
              <strong className="block font-display font-bold text-gray-800 text-sm mb-1">
                2. Servicios Exclusivos
              </strong>
              <p className="leading-relaxed">
                Expedición de certificados de estudios, carnés universitarios, constancias de notas, egreso y biblioteca.
              </p>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
              <strong className="block font-display font-bold text-gray-800 text-sm mb-1">
                3. Formularios
              </strong>
              <p className="leading-relaxed">
                Modelos oficiales: Formato Único de Trámite (FUT F-001), Solicitud de Práctica Dirigida (EXT-001) y formatos de ley.
              </p>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200">
              <strong className="block font-display font-bold text-gray-800 text-sm mb-1">
                4. Canales y Pagos
              </strong>
              <p className="leading-relaxed">
                Mesa de Partes de Facultad y pagos en ventanilla Interbank (Cód. {tupaInfo.cuentaBancaria.codigoServicio}) o Caja UNT.
              </p>
            </div>
          </div>
        </div>

        {/* Visor de PDF Embebido Oficial con barra de descarga integrada */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-300 overflow-hidden mb-12">
          <div className="bg-primary px-5 py-3.5 text-white flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold" />
              <span className="font-display font-bold text-sm">
                Visor del Documento Oficial (TUPA UNT)
              </span>
            </div>
            <a
              href={tupaInfo.archivoPdf}
              download="03_TUPA_vigente_UNT_PDF_2021.pdf"
              className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Descargar copia PDF ({tupaInfo.tamanoArchivo})
            </a>
          </div>

          <div className="h-[750px] md:h-[900px] w-full bg-gray-100">
            <iframe
              src={`${tupaInfo.archivoPdf}#toolbar=1&navpanes=1`}
              title="Documento Oficial TUPA UNT"
              className="w-full h-full border-0"
            />
          </div>

          <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              Si tu navegador no visualiza el PDF de forma nativa, puedes descargarlo directamente en tu dispositivo.
            </span>
            <a
              href={tupaInfo.archivoPdf}
              download="03_TUPA_vigente_UNT_PDF_2021.pdf"
              className="font-bold text-primary hover:text-gold transition-colors inline-flex items-center gap-1 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              Descargar archivo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
