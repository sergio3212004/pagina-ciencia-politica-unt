import type { BrandingConfig } from "@/profile-types";

// Recursos gráficos de ESTA escuela, dentro del propio perfil
// (`profiles/escuela/assets/`). El branding gestiona las
// referencias por rol; no existe un assets.ts global.
import logoUniversidad from "../assets/logo-universidad.png";
import logoEscuela from "../assets/logo-escuela.webp";
import logoBolsa from "../assets/logo-bolsa-trabajo.png";
import libroReclamaciones from "../assets/libro-reclamaciones.svg";
import generalFacultad from "../assets/hero/general-facultad.webp";
import estudiantesCampus from "../assets/hero/estudiantes-campus.webp";
import generalJardin from "../assets/hero/general-jardin.webp";
import estudiantesAula from "../assets/hero/estudiantes-aula.webp";
import generalCampus from "../assets/hero/general-campus.webp";
import estudiantesClase from "../assets/hero/estudiantes-clase.webp";

export const branding: BrandingConfig = {
  logos: {
    universidad: logoUniversidad,
    escuela: logoEscuela,
    bolsaTrabajo: logoBolsa,
    libroReclamaciones,
  },
  heroImages: [
    generalFacultad,
    estudiantesCampus,
    generalJardin,
    estudiantesAula,
    generalCampus,
    estudiantesClase,
  ],
  alt: {
    universidad: "Universidad Nacional de Trujillo",
    escuela: "Ciencia Política y Gobernabilidad",
    bolsaTrabajo: "Bolsa de trabajo",
  },
};
