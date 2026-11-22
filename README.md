# UNESR

Portal de la carrera (todos los lapsos): https://unesr.ubbedigital.com

## Lapso actual: 2026-2

Semestre 2026-2 · Universidad Nacional Experimental Simón Rodríguez (Núcleo Los Teques) · Administración mención Informática.

Página del lapso: https://unesr.ubbedigital.com/2026-2/

Lapso académico (calendario oficial): 28/09/2026 al 13/02/2027. Las constancias indican 27/09/2026 al 12/02/2027; se usan las fechas del calendario.

SGA: https://sga.unesr.edu.ve/#/

## Materias

| Código | Materia | Sección | Horas | Docente | Carpeta |
|--------|---------|---------|-------|---------|---------|
| 32041 | Contabilidad I | 10301 | 2 | Bueno Otamendi, Amilcar Jose de Jesus | [Contabilidad I](Lapsos/2026-2/Contabilidad%20I) |
| 32061 | Economía General | 10201 | 2 | Meza Palma, Sergio Roldan | [Economia General](Lapsos/2026-2/Economia%20General) |

## Horario

| Día | Hora | Materia | Aula | Ambiente |
|-----|------|---------|------|----------|
| Jueves | 05:00 - 06:20 pm | Economía General | ARMFCG215 | Ambiente 21 |
| Sábado | 08:40 - 10:00 am | Contabilidad I | ARMFCG208 | Ambiente 10 |

Escala de notas: 1 a 5, mínimo aprobatorio 4. Cada materia tiene 3 unidades de crédito.

## Estructura

La carpeta `Estudios/Universidades/UNESR` completa es el repo, pero **solo se suben** el sitio, los scripts
y los `.md` de `Lapsos/` (`.gitignore` de lista blanca). PDFs, Office, constancias, récords y carnets
quedan en el disco (viajan con `~/Personal`); `.githooks/pre-commit` bloquea documentos, `privado/`,
`Carrera/` y cédulas o teléfonos aunque se agreguen con `git add -f`.

- `docs/`: sitio de GitHub Pages (`unesr.ubbedigital.com`).
  - `index.html` + `lapsos.js`: portal con el lapso actual y el historial de lapsos.
  - `assets/`: `app.js`, `style.css`, `privado.js`, compartidos por todos los lapsos.
  - `<lapso>/`: sitio de un lapso. `index.html` (resumen, avance, materias, horario), `data.js` (datos del
    lapso: es lo único que hay que editar) y una carpeta por materia (`<slug>/index.html`, guías dentro).
  - `2025-3/introduccion-administracion/`: presentación del intensivo (antes en el repo `pages`).
  - `contabilidad-i/`, `economia-general/`: redirecciones a `2026-2/` (links viejos).
- `Lapsos/<lapso>/<Materia>/`: archivos de cada materia (README con temario, `Apuntes/` en Markdown; los PDF
  y demás no se suben). `Lapsos/2026-2/CALENDARIO.md`: calendario académico (los hitos de la página están
  en `HITOS` de `docs/2026-2/data.js`).
- `Carrera/` (no se sube): plan de estudios, reglamento, aranceles, carnets, récord académico, acreditación.
- `privado/<lapso>/` (no se sube): constancias, contactos, `datos.json` del perfil.

## Lapso nuevo

1. Copiar `docs/2026-2/` a `docs/<lapso>/`, reescribir su `data.js` (`SITIO`, `HITOS`, `MATERIAS`, `CLASES`;
   `REPO` apunta a `Lapsos/<lapso>/`) y dejar solo las carpetas de sus materias (`data-materia` = `slug`).
2. Crear `Lapsos/<lapso>/<Materia>/` con su README.
3. En `docs/lapsos.js`: el nuevo con `estado: "en curso"` y quitarle el estado al anterior.
4. `scripts/version.sh`, commit y push.

Materia nueva dentro de un lapso: añadirla en `MATERIAS` de `docs/<lapso>/data.js` y copiar una carpeta de
materia cambiando `data-materia` por el nuevo `slug`.
