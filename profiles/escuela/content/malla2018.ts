import type { Edge } from 'reactflow';
import type { CourseData } from './malla';

type CourseInput = Omit<CourseData, 'description'> & { description?: string };

const course = (data: CourseInput): CourseData => ({
  ...data,
  description: data.description ??
    `Asignatura ${data.isElective ? 'electiva' : 'obligatoria'} del Currículo 2018 de Ciencia Política y Gobernabilidad.`,
});

export const CURRICULUM_2018_DATA: CourseData[] = [
  course({ id: 'CP18-01', name: 'Desarrollo Personal', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-02', name: 'Desarrollo del Pensamiento Lógico Matemático', type: 'general', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-03', name: 'Gestión de los Aprendizajes y Estrategias de Estudio', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-04', name: 'Lectura Crítica y Redacción de Textos Académicos', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-05', name: 'Antropología General', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-06', name: 'Introducción a la Ciencia Política', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP18-07', name: 'Taller Electivo I', type: 'general', credits: 2, hoursT: 0, hoursP: 4, cycle: 'Ciclo I', isElective: true, description: 'El estudiante elige uno: Técnicas de Comunicación Eficaz, Taller de Música, Taller de Liderazgo y Trabajo en Equipo, Taller de Teatro o Taller de Deporte.' }),

  course({ id: 'CP18-12', name: 'Sociedad, Cultura y Ecología', type: 'general', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-13', name: 'Cultura Investigativa y Pensamiento Crítico', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-14', name: 'Ética, Convivencia Humana y Ciudadanía', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-15', name: 'Identidad Cultural Regional, Nacional e Internacional', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-16', name: 'Fundamentos de Filosofía', type: 'general', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-17', name: 'Regionalismo e Integración', type: 'especialidad', credits: 3, hoursT: 3, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP18-18', name: 'Taller Electivo II', type: 'general', credits: 2, hoursT: 0, hoursP: 4, cycle: 'Ciclo II', isElective: true, description: 'El estudiante elige uno: Taller de Manejo de TIC, Taller de Danzas Folclóricas, Taller de Deporte o Taller de Música.' }),

  course({ id: 'CP18-22', name: 'Economía General', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP18-23', name: 'Teoría del Poder Político', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP18-24', name: 'Estadística para el Análisis Político I', type: 'especifico', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP18-25', name: 'Derecho Constitucional I', type: 'especifico', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP18-26', name: 'Ecología Política', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP18-27', name: 'Teoría del Estado', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false }),

  course({ id: 'CP18-28', name: 'Derechos Humanos y Derecho Humanitario', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP18-29', name: 'Economía Política Internacional', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP18-30', name: 'Geopolítica y Gobernanza Global', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP18-31', name: 'Derecho Constitucional II', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP18-32', name: 'Reforma del Estado y Descentralización', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP18-33', name: 'Estado y Política en el Perú', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),

  course({ id: 'CP18-34', name: 'Administración Pública y Gestión', type: 'especifico', credits: 3, hoursT: 3, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP18-35', name: 'Relaciones Internacionales', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP18-36', name: 'Teoría Política Clásica Medieval', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP18-37', name: 'Diseño y Metodología de la Investigación Política I', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP18-38', name: 'Derecho Administrativo', type: 'especifico', credits: 4, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP18-39', name: 'Estadística para el Análisis Político II', type: 'especifico', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo V', isElective: false }),

  course({ id: 'CP18-40', name: 'Planificación y Presupuesto Público', type: 'especifico', credits: 3, hoursT: 1, hoursP: 4, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP18-41', name: 'Teoría Política Moderna', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP18-42', name: 'Diseño y Metodología de la Investigación Política II', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP18-43', name: 'Política Comparada', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP18-44', name: 'Políticas Públicas e Integración Regional', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP18-45', name: 'Manejo y Resolución de Conflictos Sociales', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),

  course({ id: 'CP18-46', name: 'Derecho Parlamentario', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP18-47', name: 'Teoría Política Contemporánea', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP18-48', name: 'Partidos y Sistemas de Partidos', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP18-49', name: 'Sistema Electoral Peruano', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP18-50', name: 'Servicios Públicos y Reguladores', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP18-51', name: 'Delitos contra la Administración Pública', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),

  course({ id: 'CP18-52', name: 'Procesos Políticos', type: 'especialidad', credits: 3, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP18-53', name: 'Teoría de la Democracia', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP18-54', name: 'Teoría de las Decisiones y Estrategia Política', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP18-55', name: 'Ética Profesional y Política', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP18-56', name: 'Política Comercial y Negociaciones Internacionales (UE–Perú)', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP18-57', name: 'Derecho Internacional y Derecho de Integración', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),

  course({ id: 'CP18-58', name: 'Seminario de Tesis I', type: 'especifico', credits: 4, hoursT: 1, hoursP: 6, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP18-59', name: 'Práctica Profesional I', type: 'especifico', credits: 15, hoursT: 7, hoursP: 16, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP18-60', name: 'Comunicación Política I', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IX', isElective: false }),

  course({ id: 'CP18-61', name: 'Trabajo de Investigación', type: 'especifico', credits: 4, hoursT: 1, hoursP: 6, cycle: 'Ciclo X', isElective: false }),
  course({ id: 'CP18-62', name: 'Práctica Profesional II', type: 'especifico', credits: 16, hoursT: 8, hoursP: 16, cycle: 'Ciclo X', isElective: false }),
  course({ id: 'CP18-63', name: 'Comunicación Política II', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo X', isElective: false }),
];

const prerequisite = (source: string, target: string, index: number): Edge => ({
  id: `prerequisite-2018-${index}`,
  source,
  target,
  type: 'smoothstep',
  style: { stroke: '#2563eb', strokeWidth: 2 },
});

// Únicamente los prerrequisitos expresamente consignados en las tablas oficiales.
export const PREREQUISITES_2018_EDGES: Edge[] = [
  ['CP18-25', 'CP18-28'],
  ['CP18-25', 'CP18-31'],
  ['CP18-31', 'CP18-41'],
  ['CP18-37', 'CP18-42'],
  ['CP18-33', 'CP18-43'],
  ['CP18-41', 'CP18-47'],
  ['CP18-33', 'CP18-49'],
  ['CP18-60', 'CP18-63'],
].map(([source, target], index) => prerequisite(source, target, index + 1));
