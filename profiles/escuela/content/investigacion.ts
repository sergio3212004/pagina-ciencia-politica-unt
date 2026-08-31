import dialogosPoliticosImage from '../assets/revistas/dialogos-politicos.webp';

export const lineasInvestigacion = [
  {
    nombre: "Políticas Públicas y Gestión Pública",
  },
  {
    nombre: "Democracia y Partidos Políticos",
  },
  {
    nombre: "Política Comparada y Relaciones Internacionales",
  },
  {
    nombre: "Gobernabilidad y Manejo de Conflictos",
  },
];

export const resolucionLineasInvestigacion = {
  numero: "Resolución Directoral de Escuela de Ciencia Política y Gobernabilidad N.º 022-2022",
  fecha: "8 de junio de 2022",
  categoria: "Líneas de investigación emergentes",
};

export const proyectos = [
  {
    titulo: "Título del proyecto de investigación 1",
    estado: "En ejecución",
    año: "2023-2024",
    descripcion: "Descripción breve del primer proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  },
  {
    titulo: "Título del proyecto de investigación 2",
    estado: "Finalizado",
    año: "2022-2023",
    descripcion: "Descripción breve del segundo proyecto de investigación del programa.",
    investigadores: ["Nombre del Investigador 1", "Nombre del Investigador 2"]
  }
];

export const publicaciones = [
  {
    titulo: "Título de la publicación 1",
    autores: "Apellido, N., & Apellido, N.",
    año: 2023,
    revista: "Nombre de la revista",
    url: "#"
  }
];

export const revistas = [
  {
    nombre: "Diálogos Políticos",
    tipo: "Revista científica",
    edicion: "Vol. 01, N.º 1",
    tema: "Democracia en tiempos de elecciones y fragmentación partidaria",
    descripcion:
      "Revista científica de la Escuela Profesional de Ciencia Política y Gobernabilidad de la Universidad Nacional de Trujillo.",
    imagen: dialogosPoliticosImage,
    imagenAlt:
      "Afiche de presentación de la revista científica Diálogos Políticos de la Universidad Nacional de Trujillo",
  },
];

export interface Convenio {
  institucion: string;
  tipo: string;
  descripcion: string;
  vigencia: string;
  resolucion?: string;
  coordinador?: string;
  pais?: string;
  ambito?: 'nacional' | 'internacional' | 'red';
  categoria?: string;
}

export const convenios: Convenio[] = [
  // ─── Convenios Nacionales Vinculados al Sector Público ───
  {
    institucion: "Programa Nacional de Centros Juveniles (PRONACEJ)",
    tipo: "Sector Público",
    descripcion: "Convenio de apoyo y cooperación interinstitucional.",
    vigencia: "15/12/2025 – 15/12/2029",
    resolucion: "Res. C.U. N° 214-2026/UNT",
    coordinador: "Decano de la Facultad de Derecho y Ciencias Políticas",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Sector Público",
  },
  {
    institucion: "Ministerio Público - Fiscalía de la Nación",
    tipo: "Sector Público",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "31/07/2023 – 31/07/2028",
    resolucion: "Res. C.U. N° 0328-2023/UNT",
    coordinador: "Director de la Unidad de Postgrado de Derecho y Ciencias Políticas",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Sector Público",
  },
  {
    institucion: "Tribunal Constitucional del Perú",
    tipo: "Sector Público",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "19/07/2023 – 19/07/2027",
    resolucion: "Res. C.U. N° 0303-2023/UNT",
    coordinador: "Decano de la Facultad de Derecho y Ciencias Políticas",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Sector Público",
  },
  {
    institucion: "Jurado Nacional de Elecciones (JNE)",
    tipo: "Sector Público",
    descripcion: "Convenio de cooperación interinstitucional.",
    vigencia: "18/05/2022 – 17/05/2026",
    resolucion: "Res. C.U. N° 0165-2022/UNT",
    coordinador: "Decano de la Facultad de Derecho y Ciencias Políticas",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Sector Público",
  },

  // ─── Universidades con Convenios Específicos de Movilidad Académica Nacional ───
  {
    institucion: "Universidad Nacional Toribio Rodríguez de Mendoza de Amazonas",
    tipo: "Movilidad Académica",
    descripcion: "Convenio específico de movilidad, intercambio y pasantía de docentes y estudiantes.",
    vigencia: "14/04/2025 – 14/04/2029",
    resolucion: "Res. C.U. N° 248-2025-UNT",
    coordinador: "Decano de la Facultad de Derecho y Ciencias Políticas",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Movilidad Nacional",
  },
  {
    institucion: "Universidad Ricardo Palma",
    tipo: "Movilidad Académica",
    descripcion: "Convenio específico de intercambio de estudiantes de pregrado.",
    vigencia: "18/08/2021 – 18/08/2026",
    coordinador: "Director de Relaciones Nacionales e Internacionales",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Movilidad Nacional",
  },

  // ─── Redes de Cooperación para Movilidad Académica ───
  {
    institucion: "Red Peruana de Universidades (RPU)",
    tipo: "Red Interuniversitaria",
    descripcion: "Convenio marco de organización y fines entre la RPU y la UNT para intercambio estudiantil con universidades miembros.",
    vigencia: "01/08/2025 – 01/08/2030",
    pais: "Perú",
    ambito: "red",
    categoria: "Redes Universitarias",
  },
  {
    institucion: "Red Peruana de Universidades Nacionales para la Internacionalización (RUNAI)",
    tipo: "Red Interuniversitaria",
    descripcion: "Memorándum de entendimiento para la conformación de la RUNAI y cooperación interuniversitaria.",
    vigencia: "Indefinida (Desde 14/08/2019)",
    pais: "Perú",
    ambito: "red",
    categoria: "Redes Universitarias",
  },

  // ─── Convenios Internacionales Directamente Vinculados o Enfocados en Derecho y Ciencias Políticas ───
  {
    institucion: "Universidad de Rusia de la Amistad de los Pueblos Patrice Lumumba",
    tipo: "Ciencias y Educación",
    descripcion: "Acuerdo de colaboración en materia de ciencias y educación.",
    vigencia: "15/01/2026 – 15/01/2031",
    resolucion: "Res. C.U. N° 040-2026/UNT",
    coordinador: "Dra. Ena Carnero Arroyo (Docente Fac. Derecho y Ciencias Políticas)",
    pais: "Rusia",
    ambito: "internacional",
    categoria: "Internacional - Especializado",
  },
  {
    institucion: "UNIALFA / FADISP (Facultad Autónoma de Direito)",
    tipo: "Técnico-Científico",
    descripcion: "Acuerdo de cooperación técnica, jurídica, científica y pedagógica.",
    vigencia: "20/06/2025 – 20/06/2030",
    resolucion: "Res. C.U. N° 0393-2025/UNT",
    coordinador: "Dra. Ena Rocío Carnero Arroyo (Docente Depto. de Derecho)",
    pais: "Brasil",
    ambito: "internacional",
    categoria: "Internacional - Especializado",
  },
  {
    institucion: "Agencia Ejecutiva Europea de Educación y Cultura (EACEA) - Proyecto DEMOS",
    tipo: "Proyecto Internacional",
    descripcion: "Proyecto DEMOS: Ataques a la Democracia y Populismos - Nuevo programa académico para el fortalecimiento de instituciones en América Latina.",
    vigencia: "01/02/2024 – 31/01/2027",
    resolucion: "Res. C.U. N° 364-2024/UNT",
    coordinador: "Dra. Ena Carnero Arroyo (Docente Depto. de Derecho)",
    pais: "España / Unión Europea",
    ambito: "internacional",
    categoria: "Internacional - Proyectos",
  },
  {
    institucion: "Agencia Ejecutiva Europea de Educación y Cultura (EACEA) - Proyecto Bridge Watch",
    tipo: "Proyecto Internacional",
    descripcion: "Proyecto Bridge Watch: Valores y Democracia en la Unión Europea y América Latina.",
    vigencia: "04/12/2023 – 03/12/2026",
    resolucion: "Res. C.U. N° 290-2024/UNT",
    coordinador: "Dra. Ena Carnero Arroyo (Docente Depto. de Derecho)",
    pais: "España / Unión Europea",
    ambito: "internacional",
    categoria: "Internacional - Proyectos",
  },
  {
    institucion: "Universidad de Bolonia",
    tipo: "Proyecto Internacional",
    descripcion: "Proyecto REMOVE: Repensando la Migración desde la Frontera de Venezuela - Nuevo programa académico en movilidad humana y convivencia.",
    vigencia: "04/11/2021 – 04/11/2024 (En trámite de renovación)",
    resolucion: "Res. C.U. N° 0338-2021/UNT",
    coordinador: "Dra. Ena Carnero Arroyo (Docente Depto. de Derecho)",
    pais: "Italia",
    ambito: "internacional",
    categoria: "Internacional - Proyectos",
  },

  // ─── Convenios Generales y de Movilidad Estudiantil Internacional Aplicables ───
  {
    institucion: "Universidad Complutense de Madrid",
    tipo: "Cooperación Académica",
    descripcion: "Convenio de cooperación académica, científica y cultural con oferta en Ciencia Política y de la Administración.",
    vigencia: "14/01/2025 – 14/01/2029",
    pais: "España",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad de Granada",
    tipo: "Movilidad Estudiantil",
    descripcion: "Convenio de colaboración y movilidad estudiantil (ERASMUS+). Cuenta con Facultad de Ciencias Políticas y Sociología.",
    vigencia: "20/06/2022 – 20/06/2026 / 10/06/2024 – 10/06/2027",
    pais: "España",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universitat de València",
    tipo: "Cooperación Académica",
    descripcion: "Convenio de cooperación académica, científica y cultural.",
    vigencia: "14/01/2025 – 14/01/2029",
    pais: "España",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad de Chile",
    tipo: "Movilidad Académica",
    descripcion: "Memorando de entendimiento para movilidad académica con la carrera de Ciencia Política en su Facultad de Gobierno.",
    vigencia: "06/08/2025 – 06/08/2030",
    pais: "Chile",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad Autónoma Metropolitana (UAM)",
    tipo: "Movilidad Estudiantil",
    descripcion: "Convenio específico de cooperación para la movilidad del alumno.",
    vigencia: "08/01/2024 – 08/01/2028",
    pais: "México",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad Nacional Autónoma de México (UNAM)",
    tipo: "Colaboración General",
    descripcion: "Convenio general de colaboración académica e investigación.",
    vigencia: "31/07/2025 – 31/07/2035",
    pais: "México",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad de Guadalajara",
    tipo: "Colaboración Académica",
    descripcion: "Convenio general de colaboración académica e intercambio.",
    vigencia: "08/04/2024 – 08/04/2029",
    pais: "México",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Benemérita Universidad Autónoma de Puebla (BUAP)",
    tipo: "Cooperación Internacional",
    descripcion: "Convenio de cooperación internacional para intercambio y desarrollo académico.",
    vigencia: "24/10/2025 – 24/10/2035",
    pais: "México",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },
  {
    institucion: "Universidad de la República (Udelar)",
    tipo: "Cooperación Marco",
    descripcion: "Convenio marco de cooperación con la Licenciatura en Ciencia Política en su Facultad de Ciencias Sociales.",
    vigencia: "16/05/2023 – 16/05/2028",
    pais: "Uruguay",
    ambito: "internacional",
    categoria: "Movilidad Internacional",
  },

  // ─── Otras Universidades Nacionales con Convenio Marco Vigente ───
  {
    institucion: "Universidad Nacional Mayor de San Marcos (UNMSM)",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación académica para programas afines.",
    vigencia: "Hasta 28/03/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional del Pacífico",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional y académica.",
    vigencia: "Hasta 07/11/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Federico Villarreal",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 17/10/2026",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Católica de Santa María",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "Hasta 03/10/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Hermilio Valdizán (UNHEVAL)",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "Hasta 14/10/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional de Cajamarca",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación académica.",
    vigencia: "Hasta 19/07/2028",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Micaela Bastidas de Apurímac",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 18/05/2028",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Autónoma de Ica",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 19/07/2028",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional José María Arguedas",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "Hasta 03/06/2029",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional de Cañete",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 28/10/2029",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Daniel Alcides Carrión",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 14/08/2029",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Ciro Alegría",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación institucional.",
    vigencia: "Hasta 22/07/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional Amazónica de Madre de Dios",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "Hasta 09/03/2027",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
  {
    institucion: "Universidad Nacional de Frontera",
    tipo: "Convenio Marco",
    descripcion: "Convenio marco de cooperación interinstitucional.",
    vigencia: "Hasta 07/12/2026",
    pais: "Perú",
    ambito: "nacional",
    categoria: "Convenios Marco Nacionales",
  },
];
