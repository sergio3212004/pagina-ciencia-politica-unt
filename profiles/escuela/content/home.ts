import { BookOpen, Users, FlaskConical, GraduationCap, Handshake, UserCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Contenido de la página de Inicio (accesos rápidos + ambientes destacados).

export interface AccesoRapido {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  link: string;
}

export const accesosRapidos: AccesoRapido[] = [
  { titulo: 'Perfiles Académicos', descripcion: 'Perfil de ingreso y de egreso del programa.', icono: UserCheck, link: '/academico/perfiles' },
  { titulo: 'Plan de Estudios', descripcion: 'Malla curricular actualizada por ciclos.', icono: BookOpen, link: '/academico/malla-curricular' },
  { titulo: 'Plana Docente', descripcion: 'Profesores e investigadores comprometidos.', icono: Users, link: '/organizacion/docentes' },
  { titulo: 'Investigación', descripcion: 'Líneas, proyectos y publicaciones activas.', icono: FlaskConical, link: '/investigacion/proyectos' },
  { titulo: 'Grados y Títulos', descripcion: 'Pasos y requisitos para tu titulación.', icono: GraduationCap, link: '/academico/titulacion' },
  { titulo: 'Convenios', descripcion: 'Alianzas con instituciones y empresas aliadas.', icono: Handshake, link: '/academico/convenios' },
];

import auditorioMixan from '../assets/ambientes/AUDITORIO_MIXAM_MAS.webp';
import auditorioCamara from '../assets/ambientes/AUDITORIO_CAMARA_GESELL.webp';
import laboratorioComputoImg from '../assets/ambientes/LABORATORIO_DE_COMPUTO.webp';

export interface Ambiente {
  badge: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  link?: string;
}

export const ambientes: Ambiente[] = [
  {
    badge: 'Auditorio',
    titulo: 'Auditorio Florencio Mixán Mass',
    descripcion:
      'Importante recinto académico dentro de la Facultad de Derecho y Ciencia Política, destinado a conferencias magistrales, ponencias y ceremonias.',
    imagen: auditorioMixan,
    alt: 'Auditorio Florencio Mixán Mass',
    link: '/academico/ambientes#auditorios',
  },
  {
    badge: 'Auditorio',
    titulo: 'Auditorio Cámara Gesell',
    descripcion:
      'Espacio para conferencias, foros y talleres prácticos que permite a los estudiantes observar simulaciones de audiencias y actividades formativas.',
    imagen: auditorioCamara,
    alt: 'Auditorio Cámara Gesell',
    link: '/academico/ambientes#auditorios',
  },
  {
    badge: 'Laboratorio de Cómputo',
    titulo: 'Laboratorio de Cómputo',
    descripcion:
      'Espacio equipado para análisis de datos, investigación, procesamiento de información y desarrollo de competencias digitales y profesionales.',
    imagen: laboratorioComputoImg,
    alt: 'Laboratorio de Cómputo',
    link: '/academico/ambientes#laboratorio',
  },
];
