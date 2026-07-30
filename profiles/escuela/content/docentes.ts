// Plana docente. Cada docente:
//   - grado: el cargo/grado académico (Doctor, Magíster, Ingeniero…)
//   - departamento: el departamento académico al que pertenece (para filtrar/categorizar)
//   - cursoPrincipal: el curso/área principal que aparece en el FRENTE de la card
//   - especialidades: lista que aparece al voltear la card (reverso). Agrega 2-3 por docente.
//   - foto: ruta de la foto o null (muestra silueta placeholder)
//   - fotoPosicion: encuadre CSS opcional (p. ej. "center 35%"). Si se omite,
//     la tarjeta usa "center 25%"; ajusta este dato para subir o bajar cada foto.
import melissaDiaz from "../assets/docentes/MELISSA_DIAZ.webp";
import rafaelAldave from "../assets/docentes/RAFAEL_ALDAVE.webp";
import lalyMachado from "../assets/docentes/LALY_MACHADO.webp";
import eduardoRomero from "../assets/docentes/EDUARDO_ROMERO.webp";
import carlosTrujillo from "../assets/docentes/CARLOS_TRUJILLO.webp";
import luisRios from "../assets/docentes/LUIS_RIOS.webp";
import santiagoLopez from "../assets/docentes/SANTIAGO_LOPEZ.webp";
import julissaBazan from "../assets/docentes/JULISSA_BAZAN.webp";

const docentesBase = [
  {
    nombre: "Dra. Melissa Fiorella Diaz Cabrera",
    grado: "Doctora",
    cursoPrincipal: "Calidad y Gestión Universitaria",
    especialidades: [
      "Derecho constitucional",
      "Derecho civil empresarial",
    ],
    foto: melissaDiaz,
  },
  {
    nombre: "Dra. Laly Ruth Machado Larriviere",
    grado: "Doctora",
    cursoPrincipal: "Teoría Política",
    especialidades: [
      "Gestión pública y gobernabilidad",
      "Administración de la educación",
      "Educación secundaria en ciencias sociales",
    ],
    foto: lalyMachado,
  },
  {
    nombre: "Mg. Eduardo Romero La Torre",
    grado: "Magíster",
    cursoPrincipal: "Políticas Públicas",
    especialidades: [
      "Derecho constitucional",
      "Derecho administrativo",
    ],
    foto: eduardoRomero,
  },
  {
    nombre: "Mg. Santiago Manuel Lopez Valverde",
    grado: "Magíster",
    cursoPrincipal: "Relaciones Internacionales",
    especialidades: [
      "Derecho tributario",
      "Antropología social",
    ],
    foto: santiagoLopez,
  },
  {
    nombre: "Mg. Luis Enrique Rios Alba",
    grado: "Magíster",
    cursoPrincipal: "Administración Pública",
    especialidades: [
      "Derecho constitucional",
      "Derecho administrativo",
    ],
    foto: luisRios,
  },
  {
    nombre: "Mg. Rafael Fernando Aldave Herrera",
    grado: "Magíster",
    cursoPrincipal: "Gobierno y Participación Ciudadana",
    especialidades: [
      "Gestión pública",
      "Políticas públicas",
    ],
    foto: rafaelAldave,
  },
  {
    nombre: "Mg. Carlos Cesar Trujillo Vega",
    grado: "Magíster",
    cursoPrincipal: "Análisis Político",
    especialidades: [
      "Derecho constitucional",
      "Derecho administrativo",
    ],
    foto: carlosTrujillo,
  },
  {
    nombre: "Mg. Julisa Bazan Cayetano",
    grado: "Magíster",
    cursoPrincipal: "Manejo y Resolución de Conflictos",
    especialidades: [
      "Gobernanza global",
      "Derechos humanos",
      "Gobernabilidad y cultura de paz",
    ],
    foto: julissaBazan,
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
