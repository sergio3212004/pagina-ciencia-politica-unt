import conacipPoster from '../assets/avisos/CONACIP_VIII.jpeg';

// Avisos institucionales de la barra superior (banner). Edita o vacía la lista.
// Si dejas el arreglo vacío ([]), el banner no se muestra.
//   - texto:  el aviso (pequeña descripción del aviso)
//   - link:   enlace a la convocatoria (/noticias?id=1)
//   - externo: true si el link es una URL externa (abre en pestaña nueva)
//   - imagen: imagen asociada al aviso
export interface Aviso {
  id: number;
  texto: string;
  link: string;
  externo: boolean;
  imagen?: string;
}

export const avisos: Aviso[] = [
  {
    id: 1,
    texto: "Convocatoria VIII CONACIP Trujillo 2026: «Gobernanza Global y Resistencias Locales: Tensiones y Desafíos en la Era Digital» (23 al 27 de noviembre).",
    link: "/noticias?id=1",
    externo: false,
    imagen: conacipPoster,
  },
];
