import type { SiteConfig } from "@/profile-types";

/**
 * Identidad del programa de estudios. Editar este archivo (y `branding.ts`) cubre
 * la mayor parte de la re-tematización para un programa nuevo.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu programa.
 */
export const site: SiteConfig = {
  programa: {
    nombre: "Programa de Estudios de Ciencia Política y Gobernabilidad",
    nombreCorto: "Ciencia Política y Gobernabilidad",
  },
  universidad: {
    nombre: "Universidad Nacional de Trujillo",
    siglas: "UNT",
    url: "www.unitru.edu.pe",
    // Dominio para acotar el buscador del navbar (site:dominio). Déjalo vacío
    // para una búsqueda general en Google.
    dominio: "",
  },
  facultad: "Facultad de Derecho",

  // Denominación del tipo de unidad académica. Se usa en subtítulos genéricos.
  denominacion: "Programa de Estudios",

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: "Ciencia", linea2: "Política" },

  tagline: "Formando líderes para una sociedad democrática y sostenible.",

  hero: {
    eyebrow: "Programa de Estudios de",
    titulo: { linea1: "Ciencia", linea2: "Política" },
    descripcion:
      "La Escuela Profesional de Ciencia Política forma profesionales con sólida preparación humanística, científica y ética, capaces de comprender, investigar y analizar los fenómenos políticos con pensamiento crítico, ejercer un liderazgo responsable y contribuir al fortalecimiento de la democracia, la gobernanza y el desarrollo sostenible de la región y del país.",
    ctas: {
      primary: {
        label: "Ver Plan de Estudios",
        to: "/academico/malla-curricular",
      },
      secondary: { label: "Perfiles académicos", to: "/academico/perfiles" },
    },
  },

  // Sello de acreditación (badge del hero). Si tu programa no está acreditado,
  // pon `mostrarSello: false` y ajusta `estado`.
  acreditacion: {
    entidad: "Entidad Acreditadora",
    estado: "acreditada",
    texto: "Acreditada por la Entidad",
    mostrarSello: true,
  },

  // Cifras destacadas de la franja del hero. Reemplaza números y etiquetas.
  cifras: [
    {
      numero: "100%",
      etiqueta: "Cumplimiento de sílabos",
      sub: "Semestre 2025-II",
    },
    {
      numero: "100%",
      etiqueta: "Docentes a tiempo completo",
      sub: "Semestre 2025-II",
    },
    {
      numero: "25%",
      etiqueta: "Docentes con grado de doctor",
      sub: "Semestre 2025-II",
    },
  ],

  decana: {
    nombre: "Dr. Segundo Miguel Rodríguez Alban",
    cargo: "Decano de la Facultad de Derecho y Ciencias Políticas",
    mensaje: "",
    video: { youtubeId: "", start: 0 },
  },

  enlaces: {
    libroReclamaciones: "https://reclamos.servicios.gob.pe/?institution_id=247",
    bolsaTrabajo: "#",
  },

  enlacesInstitucionales: [
    { label: "Enlace institucional 1", url: "#" },
    { label: "Enlace institucional 2", url: "#" },
    { label: "Enlace institucional 3", url: "#" },
  ],
};
