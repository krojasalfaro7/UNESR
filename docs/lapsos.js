// Lapsos que muestra el portal (docs/index.html). El más reciente primero.
// url: página del lapso en este sitio (null = sin página); materias: { nombre, codigo?, url? }
const LAPSOS = [
  { id: "2026-2", estado: "en curso", nucleo: "Los Teques", url: "2026-2/",
    materias: [{ nombre: "Contabilidad I", codigo: "32041", url: "2026-2/contabilidad-i/" },
               { nombre: "Economía General", codigo: "32061", url: "2026-2/economia-general/" }] },
  { id: "2025-3", estado: "intensivo", url: null,
    materias: [{ nombre: "Introducción a la Administración", url: "2025-3/introduccion-administracion/", nota: "presentación de la unidad VII (equipo 7)" },
               { nombre: "Legislación Mercantil", codigo: "32054" }] },
  { id: "2025-2", nucleo: "Caricuao", url: null,
    materias: [{ nombre: "Economía General", codigo: "32061" }, { nombre: "Mercadeo" }, { nombre: "Presupuesto" }] },
  { id: "2025-1", url: null, materias: [{ nombre: "Estadística II" }, { nombre: "Finanzas e Impuestos" }] },
  { id: "2024-2", url: null, materias: [{ nombre: "Estadística I" }, { nombre: "Modelos Administrativos" }] },
  { id: "2024-1", nucleo: "Caricuao", url: null,
    materias: [{ nombre: "Iniciación Universitaria", codigo: "31011" },
               { nombre: "Métodos y Técnicas de Estudios", codigo: "31021" },
               { nombre: "Terminología en Estadística e Investigación", codigo: "31022" }] },
];
