import auditorioMixan from "../assets/ambientes/AUDITORIO_MIXAM_MAS.webp";
import auditorioCamara from "../assets/ambientes/AUDITORIO_CAMARA_GESELL.webp";
import laboratorioComputoImg from "../assets/ambientes/LABORATORIO_DE_COMPUTO.webp";

/**
 * Contenido de la sección "Ambientes" (Académico › Recursos).
 *
 * La Escuela no cuenta con laboratorios especializados como tales: su
 * infraestructura son auditorios y un laboratorio de cómputo. Cada ambiente
 * lleva una imagen RECTANGULAR (recomendado 4:3) desde `assets/ambientes/`.
 */

export interface Ambiente {
  nombre: string;
  tipo: string;
  descripcion: string;
  imagen: string;
  alt: string;
  detalles?: AmbienteDetalle[];
}

export interface AmbienteDetalle {
  titulo: string;
  items: string[];
}

export const auditorios: Ambiente[] = [
  {
    nombre: "Auditorio Florencio Mixán Mass",
    tipo: "Auditorio",
    descripcion:
      "El Auditorio Florencio Mixán Mass es un importante recinto académico ubicado dentro de la Facultad de Derecho y Ciencias Políticas de la Universidad Nacional de Trujillo (UNT).",
    imagen: auditorioMixan,
    alt: "Auditorio Florencio Mixán Mass",
    detalles: [
      {
        titulo: "Ubicación y Accesos",
        items: [
          "Campus Universitario: Ciudad Universitaria de la UNT, Trujillo, Perú.",
          "Paradas cercanas: Las estaciones de autobús más próximas están en la Avenida Juan Pablo II (paradas 212 y 215), situadas a unos 2 minutos a pie del campus.",
        ],
      },
      {
        titulo: "Características y Uso",
        items: [
          "Eventos Académicos: Conferencias magistrales, debates políticos y ponencias de investigación estudiantil.",
          "Ceremonias Oficiales: Presentaciones de proyectos de mejora institucional y premiaciones de concursos universitarios.",
          "Capacitaciones: Talleres macrorregionales en alianza con entidades del Estado.",
        ],
      },
    ],
  },
  {
    nombre: "Auditorio Cámara Gesell",
    tipo: "Auditorio",
    descripcion:
      "El Auditorio de la Cámara Gesell de la Universidad Nacional de Trujillo se ubica dentro de la Facultad de Derecho y Ciencias Políticas, en la Ciudad Universitaria (Av. Juan Pablo II).",
    imagen: auditorioCamara,
    alt: "Auditorio Cámara Gesell",
    detalles: [
      {
        titulo: "Detalles de Ubicación y Acceso",
        items: [
          "Punto de Referencia: Se encuentra en el pabellón de la Facultad de Derecho de la UNT. Está muy cerca del emblemático Auditorio \"Florencio Mixán Máss\".",
          "Ingreso Recomendado: El acceso más directo es por las puertas de la Av. Juan Pablo II en Trujillo.",
        ],
      },
      {
        titulo: "Sobre la Infraestructura",
        items: [
          "Uso Académico: Funciona como un auditorio para conferencias, foros y talleres prácticos. Permite a los estudiantes observar simulaciones de audiencias o interrogatorios reales.",
        ],
      },
    ],
  },
];

export const laboratorioComputo: Ambiente[] = [
  {
    nombre: "Laboratorio de Cómputo",
    tipo: "Laboratorio de cómputo",
    descripcion:
      "El Laboratorio de Cómputo constituye un espacio de apoyo a la formación académica de los estudiantes de la Escuela Profesional de Ciencia Política y Gobernabilidad. En este ambiente los alumnos desarrollan investigaciones, procesan información, elaboran proyectos, realizan análisis de datos y acceden a plataformas y recursos digitales que fortalecen sus investigativas y profesionales.",
    imagen: laboratorioComputoImg,
    alt: "Laboratorio de Cómputo",
  },
];
