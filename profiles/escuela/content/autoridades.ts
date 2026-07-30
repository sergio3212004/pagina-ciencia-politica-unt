import enaCarnero from "../assets/docentes/ENA_CARNERO.webp";
import marielaGutierrez from "../assets/docentes/MARIELA_GUTIERREZ.webp";

// `fotoPosicion` permite ajustar el encuadre de cada retrato sin modificar los
// componentes (p. ej. "center 35%"). Si se omite, se usa "center 25%".
export const director = {
  nombre: "Dra. Ena Carnero",
  cargo: "Directora de Escuela",
  correo: "",
  bio: "Directora de la Escuela Profesional de Ciencia Política y Gobernabilidad.",
  foto: enaCarnero,
  fotoPosicion: "center 25%",
};

export const administrativos = [
  {
    nombre: "Mariela Beatriz Gutiérrez González",
    cargo: "Secretaria de Escuela",
    correo: "",
    foto: marielaGutierrez,
    fotoPosicion: "center 25%",
  },
];

// Cambia estos valores a `true` cuando la Escuela cuente nuevamente con estas
// instancias. Los datos se conservan debajo para poder editarlos y reactivarlos.
export const mostrarCoordinaciones = false;
export const mostrarDireccionDepartamento = false;

export const coordinadores = [
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) Académico",
    correo: "coordinacion.academica@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Investigación",
    correo: "coordinacion.investigacion@universidad.edu.pe"
  },
  {
    nombre: "Nombre del Coordinador(a)",
    cargo: "Coordinador(a) de Prácticas Preprofesionales",
    correo: "coordinacion.practicas@universidad.edu.pe"
  }
];

// Organigrama oficial de la Facultad de Derecho y Ciencias Políticas — UNT 2021.
// Se conserva como árbol editable: cada elemento de `hijos` genera una línea
// directa hacia la unidad de la cual depende.
export const organigrama = {
  nombre: "Asamblea Universitaria",
  tipo: "gobierno",
  hijos: [
    { nombre: "Comisión Permanente de Fiscalización", tipo: "control" },
    { nombre: "Tribunal de Honor Universitario", tipo: "control" },
    { nombre: "Comité Electoral Universitario", tipo: "control" },
    {
      nombre: "Consejo Universitario",
      tipo: "gobierno",
      hijos: [
        { nombre: "Defensoría Universitaria", tipo: "control" },
        {
          nombre: "Rectorado",
          tipo: "gobierno",
          hijos: [
            { nombre: "Órgano de Control Institucional", tipo: "control" },
            {
              nombre: "Vicerrectorado Académico",
              tipo: "universidad",
              hijos: [
                { nombre: "Comisión Permanente Académica", tipo: "control" },
                { nombre: "Filiales Desconcentradas", tipo: "universidad" },
              ],
            },
            {
              nombre: "Vicerrectorado de Investigación",
              tipo: "universidad",
              hijos: [
                { nombre: "Comisión Permanente de Investigación", tipo: "control" },
              ],
            },
            {
              nombre: "Facultad de Derecho y Ciencias Políticas",
              tipo: "facultad",
              hijos: [
                {
                  nombre: "Consejo de Facultad",
                  tipo: "facultad",
                  hijos: [
                    {
                      nombre: "Decanato",
                      tipo: "facultad",
                      hijos: [
                        { nombre: "Secretaría de Decanato", tipo: "administrativo" },
                        {
                          nombre: "Administración",
                          tipo: "administrativo",
                          hijos: [
                            { nombre: "Mesa de Partes / Técnico Administrativo II", tipo: "administrativo" },
                            { nombre: "Unidad de Biblioteca", tipo: "administrativo" },
                            { nombre: "Oficina de Cómputo", tipo: "administrativo" },
                            { nombre: "Conserjería", tipo: "administrativo" },
                            { nombre: "Mantenimiento", tipo: "administrativo" },
                          ],
                        },
                        { nombre: "Departamento Académico de Derecho", tipo: "academico" },
                        {
                          nombre: "Escuela Profesional de Derecho",
                          tipo: "escuela",
                          hijos: [
                            {
                              nombre: "Secretaría de Registro Técnico",
                              tipo: "administrativo",
                              hijos: [{ nombre: "Técnico Administrativo II", tipo: "administrativo" }],
                            },
                          ],
                        },
                        { nombre: "Departamento Académico de Ciencias Políticas y Gobernabilidad", tipo: "academico" },
                        {
                          nombre: "Escuela Profesional de Ciencia Política y Gobernabilidad",
                          tipo: "escuela",
                          hijos: [
                            {
                              nombre: "Secretaría de Registro Técnico",
                              tipo: "administrativo",
                              hijos: [{ nombre: "Técnico Administrativo II", tipo: "administrativo" }],
                            },
                          ],
                        },
                        { nombre: "Unidad de Segunda Especialidad", tipo: "unidad" },
                        { nombre: "Unidad de Investigación", tipo: "unidad" },
                        { nombre: "Instituto de Investigación Jurídico-Políticas", tipo: "investigacion" },
                        { nombre: "Centro de Extensión y Proyección Jurídico y Político (CEPEJUP)", tipo: "extension" },
                        { nombre: "Unidad de Posgrado", tipo: "unidad" },
                        {
                          nombre: "Unidad de Calidad",
                          tipo: "calidad",
                          hijos: [
                            {
                              nombre: "Especialista Administrativo I",
                              tipo: "administrativo",
                              hijos: [
                                {
                                  nombre: "Especialista Administrativo I",
                                  tipo: "administrativo",
                                  hijos: [{ nombre: "Especialista Administrativo I", tipo: "administrativo" }],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
