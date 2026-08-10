// Contenido del panel lateral de Admisión (FloatingAdmissions).
// Las modalidades se muestran como tarjetas (en el orden de la lista).

export interface ModalidadAdmision {
  titulo: string;
  dirigidoA: string;
  vacantes: string;
  descripcion: string;
}

export interface InfoUtilItem {
  titulo: string;
  detalle: string;
}

export const modalidadesAdmision: ModalidadAdmision[] = [
  {
    titulo: 'Examen Ordinario',
    dirigidoA: 'Egresados y egresadas de educación secundaria.',
    vacantes: '11 vacantes',
    descripcion: 'Examen general de admisión a la Universidad Nacional de Trujillo. Proceso ordinario de ingreso para el periodo 2027-I.',
  },
  {
    titulo: 'CEPUNT-I',
    dirigidoA: 'Postulantes que aprueban el ciclo del Centro Preuniversitario de la UNT (Ciclo I).',
    vacantes: '8 vacantes',
    descripcion: 'Ingreso a través del Centro Preuniversitario de la Universidad Nacional de Trujillo para el periodo 2027-I.',
  },
  {
    titulo: 'Personas con Discapacidad',
    dirigidoA: 'Postulantes con discapacidad que cumplen los requisitos establecidos por la Ley N.º 29973.',
    vacantes: '1 vacante',
    descripcion: 'Modalidad de inclusión para personas con discapacidad, conforme a la normativa de admisión vigente para el periodo 2027-I.',
  },
  {
    titulo: 'Quinto de Secundaria',
    dirigidoA: 'Estudiantes que cursan el quinto año de educación secundaria.',
    vacantes: '3 vacantes',
    descripcion: 'Examen de admisión dirigido a estudiantes de quinto de secundaria para el ingreso anticipado en el periodo 2027-I.',
  },
  {
    titulo: 'Premios de Excelencia',
    dirigidoA: 'Estudiantes egresados de educación secundaria con primeros o segundos puestos.',
    vacantes: '2 vacantes',
    descripcion: 'Ingreso para egresados destacados de educación secundaria, según los méritos académicos establecidos en la normativa para el periodo 2027-I.',
  },
];

export const infoUtilAdmision: InfoUtilItem[] = [
  { titulo: 'Requisitos', detalle: 'Documentos que debe presentar el postulante.' },
  { titulo: 'Fechas', detalle: 'Periodos o meses en que se realizan los exámenes de admisión.' },
];

// Botón inferior: portal oficial de admisión de la universidad.
export const portalAdmision = {
  label: 'Portal de Admisión',
  url: '#',
};
