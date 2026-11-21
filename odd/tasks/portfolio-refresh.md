# Portfolio Refresh — content, editorial redesign, platform

Rebuild `miguelordev.com` (served by Netlify from this repo) around the current
professional profile: AI Engineer at Illumia, full stack on Node.js + TypeScript.
Replace React 18 + Vite 4 + Bootstrap-CDN with Vite 8 + React 19 + TypeScript + Tailwind 4.

## Specs

**S1 — Sitio vivo.** El sitio online es `https://miguelordev.com/` (Netlify, sirve este
mismo repo construido). "mi portafolio si existe online es https://miguelordev.com/".
La URL `miguel-angel-orjuela-riano.netlify.app` que figura en `src/db/information.js` está
muerta (404) y debe desaparecer.

**S2 — Rol actual.** AI Engineer en Illumia desde el 27 de mayo de 2026, modalidad híbrida.
Responsabilidad: "Desarrollo el analisis de encuestas y audios para metricas usando
herramientas de IA para el analisis de cada uno de ellos". Stack del rol: "claude code con
node js, postgress aws, bedrock".

**S3 — Christus finalizado.** "ya termine en christus" y "finalizo un dia antes de que
entrara a Illumia" → fin 26/05/2026. Deja de ser la entrada "Actual".

**S4 — Periferia fue freelance.** "periferia fue freelance". Lleva marca Freelance.
"los tiempos estan bien, en una trabaje como freelance" → las fechas existentes en
`src/db/information.js` se conservan tal cual.

**S5 — Narrativa y stack.** "mi stack es full stack con node js typescript". Python queda
fuera del stack principal: "dejalo fuera y pon el mio". El stack que se proyecta es
Node.js + TypeScript, no PHP/Laravel ni Python/FastAPI.

**S6 — Proyectos diferidos.** "los proyectos miremoslos despues ya que aun no los he pulido
lo demasiado como para presumir en mi portafolio". La sección de proyectos NO se publica en
este refresh. `peopleTalk` tampoco: "el de peopletTalk tocaria subirlo luego y hacer mejoras,
anotalo en engram como pendientes y no lo coloquemos aun".

**S7 — CV descargable.** "no se si este la opcion de descargar pdf, toca agregarla". El
navbar debe ofrecer descarga de CV en PDF.

**S8 — CV como pipeline Markdown→PDF.** "estoy pensando en crear otras cv que pases el
filtro asas y que sean un md que pueda transformar a pdf para una facil edicion". Fuente
única Markdown, render a PDF con Chromium headless. Aceptado como pipeline dentro de este
repo, no como proyecto aparte. El CV actual vive en Google Drive (flowcv, generado
2026-01-13) y está desactualizado.

**S9 — Diseño.** "rediseno con minial editorial". Referencia aportada:
`~/Downloads/DESIGN.md` + `~/Downloads/code.html` + `~/Downloads/screen.png`
("Warm Architectural Intelligence": papel cálido, terracota, bordes de 1px, jerarquía
editorial). "este es un mockup, no tiene que ser tal cual pero si la idea".

**S10 — Decisiones de plataforma.** Bilingüe ES/EN: "bilingue". Migración de stack:
"si" (a Vite 8 + React 19 + TypeScript + Tailwind 4). Estado en el hero: "en activo"
(no "disponible para proyectos").

**S11 — Datos del CV real (Drive).** El PDF del Drive es la fuente más precisa para el
historial: Christus 05/2023–Present, Talent 07/2022–05/2023, MetaBiblioteca 09/2020–07/2022,
Qoopa 02/2019–09/2020, Universidad Libre 01/2016–04/2022, Inglés B2, email
miguel.orjuela45@gmail.com, tel +57 3108630877, Bogotá.

**S12 — Errores conocidos a corregir.** Logos de empresa inexistentes en `public/`;
`integrants` duplicado en dos proyectos de `information.js`; Mes de Christus usa `lbl-may`
que no existe en `translations.js`; botón "Ver detalles" hardcodeado en español en
`CardTimeLine.jsx`; favicon `/vite.svg` inexistente; credenciales EmailJS inline.

## Tasks

| ID | Task | Specs | Route | Commit |
| --- | --- | --- | --- | --- |
| T1 | Scaffold Vite 8 + React 19 + TS + Tailwind 4; borrar Bootstrap CDN | S10 | inline | — |
| T2 | Design tokens desde DESIGN.md; tipografía 3 familias; iconos lucide | S9 | inline | — |
| T3 | Modelo de contenido tipado; timeline real (Illumia, Christus, Periferia freelance) | S2,S3,S4,S11 | inline | — |
| T4 | Shell: Header sticky + Hero editorial + estado "En activo" | S2,S10 | inline | — |
| T5 | Secciones: Sobre mí/Stack, Experiencia, Formación, Contacto | S5,S11 | inline | — |
| T6 | i18n ES/EN tipado, sin claves huérfanas | S10,S12 | inline | — |
| T7 | Pipeline CV Markdown→PDF + botón de descarga en navbar | S7,S8 | inline | — |
| T8 | Reemplazar foto 400x400 por retrato cuadrado de alta resolución | S9 | user asset | — |
| T9 | Meta/OG/JSON-LD, favicon propio, deploy Netlify | S1 | inline | — |
| T10 | Proyectos: reincorporar cuando estén pulidos | S6 | deferred | — |

## Log

**L1** (original): "este repo es mi portafolio que ya esta desactualizado, no se si tengas
acceso a mi github pero la idea es tambien actualizar todo lo de mi portafolio, tanto en
diseño como tecnologias y experiencia con lo que tengo actualmente, primero revisa el codigo
y luego dime que necesaitas que te pase para que podamos iniciar"

**L2**: "mi portafolio si existe online es https://miguelordev.com/; respondiendo las
preguntas ai engineer, 27 de mayo de 2026, Desarrollo el analisis de encuestas y audios para
metricas usando herramientas de IA para el analisis de cada uno de ellos; claude code con
node js, postgress aws, bedrock, es hibrido, ya termine en christus. 2. los tiempos estan
bien, en una trabaje como freelance. 3. mi stack es full stack con node js typescript. 4. si.
5. puede que este desactualizado, de hecho estoy pensando en crear otras cv que pases el
filtro asas y que sean un md que pueda transformar a pdf para una facil edicion, que opinas?
seria un proyecto adicional que agregar. 6. rediseno con minial editorial, ya luego te paso
un ejemplo"

**L3**: "1. finalizo un dia antes de que entrara a Illumia. 2. periferia fue freelance.
3. el de peopletTalk tocaria subirlo luego y hacer mejoras, anotalo en engram como pendientes
y no lo coloquemos aun, 4. este es un mockup, no tiene que ser tal cual pero si la idea,
@../../../Downloads/screen.png @../../../Downloads/DESIGN.md @../../../Downloads/code.html.
revisalo y me dices que tal"

**L4**: "si; bilingue; en activo; dejalo fuera y pon el mio; los proyectos miremoslos despues
ya que aun no los he pulido lo demasiado como para presumir en mi portafolio, y no se si este
la opcion de descargar pdf, toca agregarla"

**L5** (hallazgo, sin decisión del usuario aún): El PDF del CV en Google Drive
(`1gUN55FMOp_lWE8fZkD3NI56RHNGbxb0l`, generado 2026-01-13 con flowcv) contradice el repo en
varios puntos: dice **Inglés B2** (el repo dice B1), **Talent hasta 05/2023** (el repo dice
02/2023), **MetaBiblioteca 09/2020–07/2022** (el repo dice 08/2021–06/2022), y ubica los
módulos cooperativos (créditos, nómina, intereses CDAT) en **Qoopa**, no en Ethos. También
omite Laika, Clickonplans y Periferia. Pendiente de que el usuario confirme cuál es correcto
antes de escribir el timeline definitivo.
