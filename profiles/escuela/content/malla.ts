import type { Edge } from 'reactflow';

// Plan de estudios vigente de Ciencia Política y Gobernabilidad.
// Fuente: plan de estudios actualmente publicado por la Escuela.

export type AreaType = 'general' | 'especifico' | 'especialidad';

export interface CourseData {
  id: string;
  name: string;
  type: AreaType;
  credits: number;
  hoursT: number;
  hoursP: number;
  cycle: string;
  isElective: boolean;
  description: string;
}

type CourseInput = Omit<CourseData, 'description'> & { description?: string };

const course = (data: CourseInput): CourseData => ({
  ...data,
  description: data.description ??
    `Asignatura ${data.isElective ? 'electiva' : 'obligatoria'} del área de ${
      data.type === 'general'
        ? 'Estudios Generales'
        : data.type === 'especifico'
          ? 'Estudios Específicos'
          : 'Estudios de Especialidad'
    } del Programa de Ciencia Política y Gobernabilidad.`,
});

export const CURRICULUM_DATA: CourseData[] = [
  // CICLO I · 22 créditos
  course({ id: 'CP-101', name: 'Desarrollo del Pensamiento Matemático', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-102', name: 'Comunicación y Argumentación', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-103', name: 'Desarrollo Personal y Social', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-104', name: 'Economía Política', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-105', name: 'Historia del Pensamiento Político', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-106', name: 'Derecho Constitucional', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo I', isElective: false }),
  course({ id: 'CP-107', name: 'Actividad Extracurricular: Liderazgo y Trabajo en Equipo', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo I', isElective: false }),

  // CICLO II · 22 créditos
  course({ id: 'CP-201', name: 'Lectura y Producción de Textos Académicos', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-202', name: 'Gestión de los Aprendizajes', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-203', name: 'Análisis Crítico de la Realidad', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-204', name: 'Actividad Extracurricular: Introducción al Uso de TIC', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-205', name: 'Introducción a la Ciencia Política', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-206', name: 'Historia de la Política Peruana', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo II', isElective: false }),
  course({ id: 'CP-207', name: 'Derechos Humanos', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo II', isElective: false }),

  // CICLO III · 22 créditos
  course({ id: 'CP-301', name: 'Introducción a la Investigación Científica', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-302', name: 'Desarrollo Sostenible', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-303', name: 'Teoría del Estado', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-304', name: 'Filosofía Política', type: 'especifico', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-305', name: 'Teoría del Poder Político', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-306', name: 'Integración y Sistema Internacional', type: 'especifico', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo III', isElective: false }),
  course({ id: 'CP-307', name: 'Actividad Extracurricular: Talleres de Deporte I', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo III', isElective: true, description: 'Elección entre fútbol, básquet, vóley, atletismo o ajedrez.' }),

  // CICLO IV · 22 créditos
  course({ id: 'CP-401', name: 'Lógica y Desarrollo del Conocimiento Científico', type: 'general', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP-402', name: 'Cultura Política y Problemática de la Realidad Nacional', type: 'general', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP-403', name: 'Estadística Aplicada a la Ciencia Política', type: 'especialidad', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP-404', name: 'Teoría de la Democracia', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP-405', name: 'Derecho Administrativo', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IV', isElective: false }),
  course({ id: 'CP-406', name: 'Electivo de Especialidad I', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo IV', isElective: true, description: 'Elección entre Política Criminal–Anticorrupción, Sociedad Civil y Participación, Asuntos Políticos Internacionales o Gobierno y Gobernabilidad.' }),
  course({ id: 'CP-407', name: 'Actividad Extracurricular: Talleres de Deporte II', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo IV', isElective: true, description: 'Elección entre fútbol, básquet, vóley, atletismo o ajedrez.' }),

  // CICLO V · 22 créditos
  course({ id: 'CP-501', name: 'Identidad Cultural Regional y Nacional', type: 'general', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP-502', name: 'Economía y Emprendedurismo', type: 'general', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP-503', name: 'Políticas Públicas', type: 'especialidad', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP-504', name: 'Derecho Parlamentario', type: 'especifico', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP-505', name: 'Descentralización del Estado', type: 'especifico', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo V', isElective: false }),
  course({ id: 'CP-506', name: 'Electivo de Especialidad II', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo V', isElective: true, description: 'Elección entre Políticas Ambientales y Desarrollo Sostenible, Grupos de Poder en el Perú y América Latina, Geopolítica y Gobernanza Global o Gestión y Estrategias de Solución de Conflictos Sociales.' }),
  course({ id: 'CP-507', name: 'Actividad Extracurricular: Talleres de Arte I', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo V', isElective: true, description: 'Elección entre danzas típicas regionales, danzas peruanas y latinoamericanas o danzas modernas.' }),

  // CICLO VI · 22 créditos
  course({ id: 'CP-601', name: 'Ética y Derechos Humanos', type: 'general', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP-602', name: 'Contrataciones con el Estado', type: 'especifico', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP-603', name: 'Diseño y Metodología de Investigación Política I', type: 'especialidad', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP-604', name: 'Sistema Electoral Peruano', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP-605', name: 'Análisis de Coyuntura Política', type: 'especialidad', credits: 5, hoursT: 4, hoursP: 2, cycle: 'Ciclo VI', isElective: false }),
  course({ id: 'CP-606', name: 'Electivo de Especialidad III', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VI', isElective: true, description: 'Elección entre Política de Prevención de la Violencia y Seguridad, Regímenes Políticos, Derecho Internacional Público o Conflictos Armados.' }),
  course({ id: 'CP-607', name: 'Actividad Extracurricular: Talleres de Arte II', type: 'general', credits: 0, hoursT: 0, hoursP: 2, cycle: 'Ciclo VI', isElective: true, description: 'Elección entre apreciación musical, canto, ejecución instrumental, teatro, artes plásticas, creación literaria u oratoria.' }),

  // CICLO VII · 22 créditos
  course({ id: 'CP-701', name: 'Política Exterior, Relaciones y Negociaciones Internacionales', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP-702', name: 'Diseño y Metodología de Investigación Política II', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP-703', name: 'Sistema de Administración y Modernización del Estado', type: 'especifico', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP-704', name: 'Partidos Políticos', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP-705', name: 'Teoría de las Decisiones y Estrategia Política', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VII', isElective: false }),
  course({ id: 'CP-706', name: 'Electivo de Especialidad IV', type: 'especialidad', credits: 3, hoursT: 2, hoursP: 2, cycle: 'Ciclo VII', isElective: true, description: 'Elección entre Gestión Pública, Psicología Política, Cooperación Internacional o Conflictos Ambientales y Culturales en el Perú.' }),

  // CICLO VIII · 22 créditos
  course({ id: 'CP-801', name: 'Conflictos Sociales', type: 'especifico', credits: 2, hoursT: 1, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP-802', name: 'Marketing Político', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP-803', name: 'Métodos Estadísticos para la Ciencia Política', type: 'especialidad', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP-804', name: 'Comunicación Política', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP-805', name: 'Elaboración de Proyectos Sociales', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),
  course({ id: 'CP-806', name: 'Práctica Preprofesional I', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo VIII', isElective: false }),

  // CICLO IX · 22 créditos
  course({ id: 'CP-901', name: 'Política Comparada', type: 'especifico', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP-902', name: 'Seminario de Tesis I', type: 'especifico', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP-903', name: 'Práctica Preprofesional II', type: 'especifico', credits: 6, hoursT: 3, hoursP: 6, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP-904', name: 'Opinión Pública', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IX', isElective: false }),
  course({ id: 'CP-905', name: 'Movimientos Sociales', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo IX', isElective: false }),

  // CICLO X · 22 créditos
  course({ id: 'CP-1001', name: 'Seminario de Tesis II', type: 'especifico', credits: 4, hoursT: 2, hoursP: 4, cycle: 'Ciclo X', isElective: false }),
  course({ id: 'CP-1002', name: 'Práctica Preprofesional III', type: 'especifico', credits: 5, hoursT: 2, hoursP: 6, cycle: 'Ciclo X', isElective: false, description: 'Asignatura denominada Práctica Preprofesional III en la malla curricular oficial; requiere haber aprobado Práctica Preprofesional II.' }),
  course({ id: 'CP-1003', name: 'Gobiernos Locales y Regionales', type: 'especifico', credits: 5, hoursT: 3, hoursP: 4, cycle: 'Ciclo X', isElective: false }),
  course({ id: 'CP-1004', name: 'Ética Profesional y Política', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo X', isElective: false }),
  course({ id: 'CP-1005', name: 'Poder Judicial y Judicialización de la Política', type: 'especialidad', credits: 4, hoursT: 3, hoursP: 2, cycle: 'Ciclo X', isElective: false }),
];

const prerequisite = (source: string, target: string, index: number): Edge => ({
  id: `prerequisite-${index}`,
  source,
  target,
  type: 'smoothstep',
  style: { stroke: '#2563eb', strokeWidth: 2 },
});

// Prerrequisitos consignados en la columna "Requisitos" del plan de estudios.
export const PREREQUISITES_EDGES: Edge[] = [
  ['CP-106', 'CP-207'],
  ['CP-205', 'CP-303'],
  ['CP-206', 'CP-305'],
  ['CP-207', 'CP-306'],
  ['CP-305', 'CP-404'],
  ['CP-403', 'CP-503'],
  ['CP-404', 'CP-504'],
  ['CP-405', 'CP-505'],
  ['CP-405', 'CP-602'],
  ['CP-505', 'CP-604'],
  ['CP-603', 'CP-702'],
  ['CP-405', 'CP-703'],
  ['CP-604', 'CP-704'],
  ['CP-705', 'CP-801'],
  ['CP-704', 'CP-802'],
  ['CP-702', 'CP-803'],
  ['CP-704', 'CP-804'],
  ['CP-803', 'CP-902'],
  ['CP-806', 'CP-903'],
  ['CP-804', 'CP-904'],
  ['CP-902', 'CP-1001'],
  ['CP-903', 'CP-1002'],
  ['CP-505', 'CP-1003'],
].map(([source, target], index) => prerequisite(source, target, index + 1));

export const CYCLE_COLUMNS: Record<string, number> = {
  'Ciclo I': 0,
  'Ciclo II': 320,
  'Ciclo III': 640,
  'Ciclo IV': 960,
  'Ciclo V': 1280,
  'Ciclo VI': 1600,
  'Ciclo VII': 1920,
  'Ciclo VIII': 2240,
  'Ciclo IX': 2560,
  'Ciclo X': 2880,
};
