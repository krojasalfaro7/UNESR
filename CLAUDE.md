# UNESR

Portal de GitHub Pages (`docs/`, publicado en `unesr.ubbedigital.com`) para llevar la carrera completa: un
sitio por lapso (materias, horario, notas, tareas y apuntes) y un portal con el historial. Ver `README.md`
para la estructura y cómo abrir un lapso nuevo.

## Convenciones

- Una sola rama: `develop` (Pages se publica desde `docs/`). Commit y push directo, sin PRs.
- Los datos públicos de un lapso se editan solo en `docs/<lapso>/data.js`; la lista de lapsos del portal, en
  `docs/lapsos.js`. Lo compartido (`docs/assets/app.js`, `style.css`, `privado.js`) sirve para todos los
  lapsos: no meter ahí nada de un lapso concreto.
- El sitio es estático (HTML + JS sin build). Validar sintaxis con `node --check` sobre `docs/assets/app.js`,
  `docs/<lapso>/data.js` y `docs/lapsos.js`.
- Antes de cada commit que toque JS/CSS, correr `scripts/version.sh`: agrega `?v=` a los CSS/JS de las
  páginas para que el navegador no use caché vieja (Pages cachea 10 min).
- Textos y commits en español; commits cortos en imperativo (estilo del historial).
- Las rutas viejas (`/contabilidad-i/`, `/economia-general/…`) son redirecciones a `/2026-2/`: no borrarlas.

## Datos sensibles

- El repo y la página son públicos. Esta carpeta tiene documentos personales (constancias, récords, carnets,
  cédula), por eso `.gitignore` es una **lista blanca**: solo se suben `docs/`, `scripts/`, la config y los
  `.md` de `Lapsos/`. No ampliar la lista blanca a PDFs/Office ni a `Carrera/` o `privado/`.
- `.githooks/pre-commit` (activo con `git config core.hooksPath .githooks`; hay que volver a correrlo en un
  clon nuevo) bloquea documentos, `privado/`, `Carrera/`, la cédula y teléfonos. Si bloquea, corregir el
  archivo; nunca `--no-verify`.
- No subir teléfonos, correos, notas, constancias ni datos personales. Lo sensible vive en Firestore
  (`privado/datos`) y solo se muestra con la sesión de Google del dueño abierta (`docs/assets/privado.js`,
  reglas en `firestore.rules`). Por materia (`materias.<slug>`): `evaluaciones`, `tareas`, `material`,
  `contactos`. Ojo: los slugs se comparten entre lapsos; si una materia se repite, usar un slug distinto.
- Archivos locales sensibles van en `privado/<lapso>/`.

## Apuntes

- Los apuntes de clase van en `Lapsos/<lapso>/<Materia>/Apuntes/AAAA-MM-DD Tema.md` y se registran en
  `apuntes` (y el plan en `temario`) de la materia en `docs/<lapso>/data.js`.
