// Plana docente. Cada docente:
//   - grado: el cargo/grado académico (Doctor, Magíster, Ingeniero…)
//   - departamento: el departamento académico al que pertenece (para filtrar/categorizar)
//   - cursoPrincipal: el curso/área principal que aparece en el FRENTE de la card
//   - especialidades: lista que aparece al voltear la card (reverso). Agrega 2-3 por docente.
//   - foto: ruta de la foto o null (muestra silueta placeholder)
import melissaDiaz from "../assets/docentes/MELISSA_DIAZ.webp";
import rafaelAldave from "../assets/docentes/RAFAEL_ALDAVE.webp";
import lalyMachado from "../assets/docentes/LALY_MACHADO.webp";
import eduardoRomero from "../assets/docentes/EDUARDO_ROMERO.webp";
import carlosTrujillo from "../assets/docentes/CARLOS_TRUJILLO.webp";
import luisRios from "../assets/docentes/LUIS_RIOS.webp";
import santiagoLopez from "../assets/docentes/SANTIAGO_LOPEZ.webp";

const docentesBase = [
  {
    nombre: "Dra. Melissa Fiorella Diaz Cabrera",
    grado: "Doctora",
    cursoPrincipal: "Calidad y Gestión Universitaria",
    especialidades: [
      "Aseguramiento de la calidad",
      "Gestión educativa",
      "Evaluación institucional",
    ],
    foto: melissaDiaz,
  },
  {
    nombre: "Dra. Laly Ruth Machado Larriviere",
    grado: "Doctora",
    cursoPrincipal: "Teoría Política",
    especialidades: [
      "Pensamiento político",
      "Instituciones políticas",
      "Democracia contemporánea",
    ],
    foto: lalyMachado,
  },
  {
    nombre: "Mg. Eduardo Romero La Torre",
    grado: "Magíster",
    cursoPrincipal: "Políticas Públicas",
    especialidades: [
      "Diseño de políticas públicas",
      "Gestión estatal",
      "Análisis de programas públicos",
    ],
    foto: eduardoRomero,
  },
  {
    nombre: "Mg. Santiago Manuel Lopez Valverde",
    grado: "Magíster",
    cursoPrincipal: "Relaciones Internacionales",
    especialidades: [
      "Política internacional",
      "Integración regional",
      "Geopolítica",
    ],
    foto: santiagoLopez,
  },
  {
    nombre: "Mg. Luis Enrique Rios Alba",
    grado: "Magíster",
    cursoPrincipal: "Administración Pública",
    especialidades: [
      "Modernización del Estado",
      "Gestión pública",
      "Desarrollo territorial",
    ],
    foto: luisRios,
  },
  {
    nombre: "Mg. Rafael Fernando Aldave Herrera",
    grado: "Magíster",
    cursoPrincipal: "Gobierno y Participación Ciudadana",
    especialidades: [
      "Participación ciudadana",
      "Gobierno local",
      "Descentralización",
    ],
    foto: rafaelAldave,
  },
  {
    nombre: "Mg. Carlos Cesar Trujillo Vega",
    grado: "Magíster",
    cursoPrincipal: "Análisis Político",
    especialidades: [
      "Sistemas políticos",
      "Opinión pública",
      "Comportamiento electoral",
    ],
    foto: carlosTrujillo,
  },
  {
    nombre: "Mg. Julisa Bazan Cayetano",
    grado: "Magíster",
    cursoPrincipal: "Manejo y Resolución de Conflictos",
    especialidades: [
      "Gestión de conflictos",
      "Negociación",
      "Gobernanza territorial",
    ],
    foto: null,
  },
];

// Campos incorporados por la plantilla actualizada. Se centralizan aquí para
// conservar la información real de la Escuela y habilitar sus nuevos filtros.
export const docentes = docentesBase.map((docente) => ({
  ...docente,
  departamento: "Ciencia Política y Gobernabilidad",
  investigador: false,
  categoriaInvestigacion: null,
  condicion: null,
}));
