import React from 'react';
import { CalendarDays, FileCheck2, Users } from 'lucide-react';
import AnchoredSection from '../../components/layout/AnchoredSection';

interface Integrante {
  nombre: string;
  rol?: string;
}

interface Comite {
  id: string;
  titulo: string;
  descripcion: string;
  resolucion: string;
  fecha: string;
  integrantes: Integrante[];
}

const COMITES: Comite[] = [
  {
    id: 'calidad',
    titulo: 'Comité de Calidad',
    descripcion: 'Fortalece la calidad académica y la mejora continua del programa, con miras a sus procesos de acreditación.',
    resolucion: 'Resolución de Decanato N.° 215-2026',
    fecha: '8 de julio de 2026',
    integrantes: [
      { nombre: 'Ena Rocío Carnero Arroyo', rol: 'Directora de Escuela' },
      { nombre: 'Melissa Fiorella Díaz Cabrera', rol: 'Presidenta' },
      { nombre: 'Eduardo Romero La Torre', rol: 'Secretario' },
      { nombre: 'Rafael Fernando Aldave Herrera' },
      { nombre: 'Laly Ruth Machado Larriviere' },
      { nombre: 'Luis Enrique Ríos Alba' },
      { nombre: 'Santiago Manuel López Valverde' },
      { nombre: 'Lorena Geraldine Otiniano Delgado', rol: 'Estudiante' },
      { nombre: 'Paulo César Solano Gavelan', rol: 'Grupo de interés' },
      { nombre: 'Naomi Lisbeth Cerquin Quispe', rol: 'Grupo de interés' },
      { nombre: 'Cynthia Castillo Requejo', rol: 'Egresada' },
      { nombre: 'Mariela Beatriz Gutiérrez González', rol: 'Personal administrativo' },
    ],
  },
  {
    id: 'curriculo',
    titulo: 'Comité Técnico de Currículo 2026 – COTECU',
    descripcion: 'Apoya la gestión, el diseño, la evaluación y la actualización curricular del programa.',
    resolucion: 'Resolución de Decanato N.° 213-2026',
    fecha: '8 de julio de 2026',
    integrantes: [
      { nombre: 'Ena Rocío Carnero Arroyo', rol: 'Directora de Escuela – Presidenta' },
      { nombre: 'Melissa Fiorella Díaz Cabrera' },
      { nombre: 'Laly Ruth Machado Larriviere' },
      { nombre: 'Rafael Fernando Aldave Herrera' },
      { nombre: 'Eduardo Romero La Torre' },
      { nombre: 'Santiago Manuel López Valverde' },
      { nombre: 'Cynthia Castillo Requejo', rol: 'Egresada' },
      { nombre: 'Lorena Geraldine Otiniano Delgado', rol: 'Estudiante' },
      { nombre: 'Mariela Beatriz Gutiérrez González', rol: 'Apoyo administrativo' },
    ],
  },
  {
    id: 'tutoria',
    titulo: 'Comité Técnico de Tutoría y Consejería',
    descripcion: 'Comité especial de apoyo a la gestión académica del programa.',
    resolucion: 'Resolución de Decanato N.° 259-2025',
    fecha: '4 de septiembre de 2025',
    integrantes: [
      { nombre: 'Laly Ruth Machado Larriviere', rol: 'Presidenta' },
      { nombre: 'Melissa Fiorella Díaz Cabrera' },
      { nombre: 'Eduardo Romero La Torre' },
    ],
  },
  {
    id: 'competencias',
    titulo: 'Comité Técnico de Gestión de Competencias',
    descripcion: 'Comité especial para la gestión y mejora de las competencias del programa.',
    resolucion: 'Resolución de Decanato N.° 259-2025',
    fecha: '4 de septiembre de 2025',
    integrantes: [
      { nombre: 'Luis Enrique Ríos Alba', rol: 'Presidente' },
      { nombre: 'Laly Ruth Machado Larriviere' },
      { nombre: 'Melissa Fiorella Díaz Cabrera' },
    ],
  },
  {
    id: 'investigacion',
    titulo: 'Comité Técnico de Investigación',
    descripcion: 'Comité especial que articula las actividades de investigación del programa.',
    resolucion: 'Resolución de Decanato N.° 259-2025',
    fecha: '4 de septiembre de 2025',
    integrantes: [
      { nombre: 'Rafael Fernando Aldave Herrera', rol: 'Presidente' },
      { nombre: 'Santiago Manuel López Valverde' },
      { nombre: 'Melissa Fiorella Díaz Cabrera' },
      { nombre: 'Eduardo Romero La Torre' },
    ],
  },
  {
    id: 'egresado',
    titulo: 'Comité Técnico de Seguimiento del Egresado',
    descripcion: 'Comité especial encargado del seguimiento a los egresados del programa.',
    resolucion: 'Resolución de Decanato N.° 259-2025',
    fecha: '4 de septiembre de 2025',
    integrantes: [
      { nombre: 'Luis Enrique Ríos Alba', rol: 'Presidente' },
      { nombre: 'Santiago Manuel López Valverde' },
      { nombre: 'Carlos César Trujillo Vega' },
    ],
  },
  {
    id: 'responsabilidad',
    titulo: 'Comité de Responsabilidad Social Universitaria',
    descripcion: 'Comité especial que articula las acciones de responsabilidad social universitaria del programa.',
    resolucion: 'Resolución de Decanato N.° 259-2025',
    fecha: '4 de septiembre de 2025',
    integrantes: [
      { nombre: 'Laly Ruth Machado Larriviere', rol: 'Presidenta' },
      { nombre: 'Carlos César Trujillo Vega' },
      { nombre: 'Eduardo Romero La Torres' },
    ],
  },
];

function ComiteSection({ comite, alterno }: { comite: Comite; alterno: boolean }) {
  return (
    <AnchoredSection id={comite.id} className={alterno ? 'bg-gray-50' : 'bg-white'}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">{comite.titulo}</h2>
            <p className="mt-4 leading-relaxed text-gray-600">{comite.descripcion}</p>
            <div className="mt-6 space-y-3 border-t border-gray-200 pt-5 text-sm">
              <div className="flex items-start gap-3 text-gray-700">
                <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-medium">{comite.resolucion}</span>
              </div>
              <div className="flex items-start gap-3 text-gray-600">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span>{comite.fecha}</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 bg-primary px-5 py-4 sm:px-6">
              <h3 className="font-semibold text-white">Integrantes</h3>
              <p className="mt-0.5 text-sm text-white/75">{comite.integrantes.length} miembros</p>
            </div>
            <ul className="divide-y divide-gray-100" aria-label={`Integrantes del ${comite.titulo}`}>
              {comite.integrantes.map((integrante) => (
                <li key={`${integrante.nombre}-${integrante.rol ?? 'integrante'}`} className="flex flex-col gap-1 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
                  <span className="font-medium text-gray-800">{integrante.nombre}</span>
                  {integrante.rol && (
                    <span className="w-fit shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-yellow-900">
                      {integrante.rol}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnchoredSection>
  );
}

export default function Comites() {
  return (
    <>
      {COMITES.map((comite, index) => (
        <ComiteSection key={comite.id} comite={comite} alterno={index % 2 === 1} />
      ))}
    </>
  );
}
