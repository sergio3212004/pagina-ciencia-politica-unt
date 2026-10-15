import conacipPoster from '../assets/avisos/CONACIP_VIII.jpeg';

// Noticias y eventos institucionales — sección "Noticias y Actualidad".
export interface Noticia {
  id: number;
  categoria: string;
  categoriaColor: string;
  titulo: string;
  resumen: string;
  descripcionCompleta?: string;
  fecha: string;
  fechaFormateada: string;
  link: string;
  imagen: string;
  imagenSecundaria?: string;
  fechaEvento?: string;
  lugar?: string;
  ejeTematico?: string;
  instituciones?: string[];
}

export const noticias: Noticia[] = [
  {
    id: 1,
    categoria: "Convocatoria",
    categoriaColor: "bg-gold/20 text-yellow-900 border border-gold/30",
    titulo: "Convocatoria Oficial: VIII Congreso Nacional de Ciencia Política (CONACIP Trujillo 2026)",
    resumen: "La Escuela Profesional de Ciencia Política y Gobernabilidad de la UNT convoca al VIII CONACIP Trujillo 2026 bajo el lema «Gobernanza Global y Resistencias Locales: Tensiones y Desafíos en la Era Digital». Se llevará a cabo del 23 al 27 de noviembre de 2026.",
    descripcionCompleta: "La Universidad Nacional de Trujillo, a través de su Escuela Profesional de Ciencia Política y Gobernabilidad, convoca oficialmente al VIII Congreso Nacional de Ciencia Política (CONACIP Trujillo 2026). Este magno evento congregará a destacados académicos, investigadores, politólogos y estudiantes de todo el país del 23 al 27 de noviembre de 2026 en la histórica ciudad de Trujillo.\n\nEl congreso constituirá un espacio plural para el debate científico, la presentación de ponencias, mesas de trabajo y conferencias magistrales en torno a las dinámicas del poder, la gobernanza contemporánea y los retos que impone la era digital.",
    fecha: "2026-10-15",
    fechaFormateada: "15 Oct 2026",
    link: "/noticias?id=1",
    imagen: conacipPoster,
    fechaEvento: "Del 23 al 27 de noviembre de 2026",
    lugar: "Trujillo, La Libertad — Universidad Nacional de Trujillo",
    ejeTematico: "Gobernanza Global y Resistencias Locales: Tensiones y Desafíos en la Era Digital",
    instituciones: [
      "Universidad Nacional de Trujillo (UNT) — Sede Anfitriona",
      "Red Universitaria Nacional de Escuelas de Ciencia Política",
      "Universidad Nacional Mayor de San Marcos (UNMSM)",
      "Universidad Nacional Federico Villarreal (UNFV)",
      "Universidad Peruana de Ciencias Aplicadas (UPC)",
      "Universidad Católica de Santa María (UCSM)",
      "Universidad Nacional Micaela Bastidas de Apurímac (UNAMBA)",
      "Universidad Nacional Pedro Ruiz Gallo (UNPRG)"
    ]
  }
];