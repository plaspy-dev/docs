# Evaluación de Docusaurus y la ayuda de Plaspy

Revisión local del 30 de septiembre de 2026. Docusaurus 3.9.2, Node.js 24.13.1,
Windows, 32 GiB de RAM y 16 procesadores lógicos disponibles.

## Recomendación

Los objetivos confirmados son mejorar el SEO, facilitar la publicación y separar
la ayuda de la aplicación. Para cumplir los tres, recomiendo recuperar el editor
y los datos existentes de Plaspy y publicarlos mediante un sitio público ligero
con despliegue propio, plantillas reutilizables y caché. Ese sitio puede mantener
`docs.plaspy.com` y las rutas actuales, generar HTML desde el servidor y actualizar
contenido sin recompilar todo el catálogo. Hay que diseñar su acceso al contenido
o a una copia publicada para que no dependa de que la aplicación web esté disponible.

Mi evaluación es que mantener toda esta publicación en Docusaurus añade más coste
operativo que valor para ese flujo editorial. Reactivar la ayuda antigua dentro
del mismo servidor sería una recuperación rápida, pero no cumpliría completamente
el objetivo de independencia. La recomendación requiere una publicación separada,
no solamente deshacer la redirección de `HelpController.Index`.

Docusaurus sí puede ser útil para una documentación técnica pequeña, mantenida
directamente en Git y con necesidad de versiones por lanzamiento. Las 103 páginas
de documentación por idioma compilan rápido; el catálogo concentra el problema.
Mantenerlo solamente para esa documentación es una alternativa, con el coste de
seguir administrando dos sistemas.

Las cuatro compilaciones ya funcionan correctamente. Por tanto, esta recomendación
se basa en el ajuste de la herramienta al contenido y al flujo de trabajo, no en
una imposibilidad técnica de compilar. Añadir particiones puede bajar el pico de
memoria de cada compilación, pero mantiene el trabajo de generar miles de páginas
y no reduce por sí mismo el tamaño publicado.

## Resultado de las compilaciones

| Parte | Tiempo | Pico de RAM del proceso | Resultado |
| --- | ---: | ---: | --- |
| docs-en | 20,9 s | 1,15 GiB | Correcto |
| docs-es | 18,6 s | 1,02 GiB | Correcto |
| devices-en | 9 min 49 s | 7,13 GiB | Correcto |
| devices-es | 10 min 1 s | 7,25 GiB | Correcto |

La suma de las cuatro compilaciones es de unos 20 min 29 s, más el ensamblado.
El comando local las ejecuta secuencialmente para liberar la memoria entre partes.
GitHub Actions está configurado para ejecutarlas en trabajos independientes.
No se ha ejecutado ni medido el flujo remoto en esta revisión.

Los picos son memoria residente máxima de todo el proceso, incluyendo los hilos
de trabajo y las bibliotecas nativas. Cada compilación usa un límite de 6 GiB para
el heap principal de Node, dos trabajadores para generar páginas y concurrencia
de dos páginas por trabajador. La caché de producción de Webpack está desactivada;
se conservó la caché existente de MDX. No es una medición desde una instalación
completamente limpia ni una comparación de velocidad de navegación con ASP.NET.

La publicación final contiene:

- 14.388 archivos HTML y 14.384 entradas únicas en el sitemap combinado.
- Las 7.190 rutas originales de documentación y dispositivos, y sus equivalentes
  españoles, conservadas.
- 19.429 destinos internos distintos comprobados desde los HTML; ninguno falta.
- 1.509 imágenes generadas cuyo contenido coincide con el hash de su nombre.
- Ningún archivo HTML, JavaScript, CSS o imagen comprobado está vacío.
- Diez pruebas de ensamblado, integridad, colisiones y límites de tamaño aprobadas.

También se comprobó en el navegador CAREU / UCAN / Features, en ambos idiomas:
la página termina de hidratarse, el menú completo aparece y los controles funcionan.
La navegación del catálogo español a la documentación española funciona.

## Por qué ocupa tanto

Hay 109 marcas y 1.744 modelos. El exportador crea cuatro documentos por modelo:
resumen, configuración, características y protocolo. Con las páginas de marca y
el índice, eso produce 7.086 documentos por idioma: 14.172 documentos de catálogo.
La ayuda general añade 103 documentos por idioma.

El contenido de cada ruta se convierte en HTML estático y también en código de
React/MDX para navegar en el navegador. Se repite parte de la estructura de página
en muchos HTML. Los fragmentos de JavaScript se reparten entre las rutas; cada
visitante carga los que necesita para las páginas que abre.

| Contenido publicado | Tamaño aproximado |
| --- | ---: |
| HTML | 412,7 MB |
| JavaScript | 201,5 MB |
| Imágenes, animaciones e iconos | 369,6 MB |
| CSS, fuentes, sitemaps y otros archivos | 5,3 MB |
| Total | **989,1 MB** |

Aquí MB significa un millón de bytes. El tamaño exacto es 989.143.307 bytes.
El límite comprobado por el ensamblador es 1.000.000.000 bytes: quedan unos
10,9 MB de margen. [GitHub Pages limita el sitio publicado a 1 GB](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
Más particiones pueden incluso añadir archivos de arranque y temas repetidos.

Las imágenes ya se comparten entre las cuatro partes y la navegación estática de
dispositivos incluye solamente la rama activa. Estas optimizaciones están incluidas
en las cifras. Los GIF publicados suman aproximadamente 117,7 MB; algunos GIF de
la ayuda pesan entre 5 y 12 MiB. El conjunto de Markdown fuente de ayuda y catálogo,
en ambos idiomas, ronda los 96 MB. La diferencia hasta los 989 MB corresponde a
medios y a la salida generada, no solamente a texto.

En el disco local apareció otro problema distinto:

| Directorio | Tamaño |
| --- | ---: |
| node_modules/.cache/webpack | 20,38 GiB |
| node_modules/.cache/rspack | 4,69 GiB |
| node_modules/.cache, total | **25,07 GiB** |
| Dependencias instaladas fuera de esa caché | aproximadamente 249 MB |

Son cachés acumuladas de compilaciones y desarrollo, incluyendo configuraciones
anteriores. Se pueden eliminar y regenerar; no son contenido necesario para
publicar. No se eliminaron durante esta revisión. El repositorio también contiene
medios duplicados entre las carpetas de idioma y unos 0,72 GiB de historial Git.
Las cifras locales son una fotografía tomada durante la última compilación.

## Qué aporta Docusaurus en este proyecto

| Aspecto | Docusaurus actual | Ayuda existente de Plaspy |
| --- | --- | --- |
| Publicación | Exportar Markdown, compilar y desplegar | Guardar contenido e invalidar caché |
| Edición | Markdown/Git; los artículos generales proceden de Plaspy | Editor, cambios, deshacer, revisión y permisos existentes |
| Idiomas | Inglés y español, rutas y navegación separadas | Contenido por idioma y selección de idioma existentes |
| Búsqueda | Integración configurada con Algolia y Ask AI | MySQL FULLTEXT por idioma y tipo, hasta 20 resultados; chat integrado para usuarios autenticados |
| HTML para buscadores | Generado en cada compilación, con metadatos y sitemap | Razor genera HTML en el servidor; el layout ya incluye canonical y hreflang |
| Personalización por cliente | Adaptaciones propias sobre el tema | Layout y nombres de aplicación integrados con Plaspy |
| Disponibilidad | Lectura independiente del servidor y base de datos de Plaspy | Depende del servicio de Plaspy y su infraestructura de datos/caché |
| Versiones documentales | La herramienta las soporta; no se usan actualmente | Requeriría ampliación si se necesitan versiones completas por lanzamiento |
| Coste del catálogo | Miles de módulos y páginas por publicación | Plantillas comunes y datos por artículo/modelo; requiere dimensionar el servicio y la caché |

Las ventajas reales de Docusaurus son el alojamiento estático independiente,
el tema de documentación, la navegación React y el trabajo directo en Git/MDX.
[Su documentación describe estas funciones](https://docusaurus.io/docs/3.9.2).
En este proyecto, idiomas, edición, permisos, búsqueda y HTML servido ya existían
en Plaspy. Además, la exportación añade una segunda etapa de publicación.

Evaluación contra los tres objetivos:

- **SEO:** Docusaurus facilita metadatos, sitemap y HTML rastreable. La ayuda de
  Plaspy ya genera HTML y tiene canonical/hreflang; una publicación separada puede
  completar esos elementos. Ninguna de las dos garantiza mejores posiciones por
  el nombre del framework. La decisión final de SEO requiere datos de tráfico.
- **Publicación sencilla:** el flujo actual requiere generar/exportar Markdown,
  compilar y desplegar. Para contenidos que ya se editan en Plaspy, una actualización
  de datos con invalidación de caché elimina ese paso de compilación de contenido.
- **Independencia:** la publicación estática de Docusaurus sí aporta una ventaja
  clara. Volver a servir la ayuda dentro de la aplicación la reduce. Un sitio
  público separado debe conservarla, con su propio despliegue y disponibilidad
  del contenido publicado.

Un frontend dinámico independiente cambia el coste de compilación por el de servir
peticiones, mantener una caché y operar ese servicio. La extracción del código y
las pruebas de carga requieren trabajo; no se ha implementado ni medido ese sitio
en esta revisión. Una plantilla pública ligera evitaría cargar jQuery, Angular y
los recursos generales que actualmente usa `_LayoutPage.cshtml`.

Docusaurus ofrece facilidades de SEO, pero cambiar de generador no demuestra por
sí mismo mejor posicionamiento. Una auditoría posterior comparó el tráfico de
Analytics de las rutas antiguas y nuevas; el informe y sus exportaciones se
conservaron fuera del repositorio por contener datos privados. Esa comparación
no demostró una mejora sostenida que justifique la expansión del catálogo.
Todavía falta contrastar Search Console, conversiones, relevancia de búsquedas
y tiempos de respuesta, y controlar los cambios de medición antes de atribuir
el resultado al framework. Los HTML generados por Razor también pueden ser
rastreables y tener metadatos adecuados.

## Qué hay que conservar si se vuelve a Plaspy

La ayuda anterior sigue implementada. `HelpController.Index` redirige actualmente
a Docusaurus, y la llamada a `GetHelp` sigue presente como comentario. El catálogo
dinámico permanece en `DevicesController.Trackers`.

Reactivar la vista anterior requiere revisar también las rutas y el contenido:

1. Inventariar las diferencias entre los Markdown actuales y la base de datos.
   Los documentos nuevos de características y protocolo se generan con IA y se
   escriben a archivos; ese exportador no los guarda de vuelta como artículos.
   No debe asumirse que reaparecerán simplemente reactivando la vista anterior.
2. Conservar el contenido útil y resolver los componentes MDX, catálogos, imágenes
   y enlaces en plantillas o contenido compatibles con Plaspy.
3. Mantener las URL públicas `/docs/`, `/devices/`, `/es/docs/` y `/es/devices/`,
   o preparar un mapa explícito de redirecciones. Ajustar también los enlaces
   construidos por `PVersion.GetHelpUrl` y los dominios personalizados.
4. Revisar canonical, hreflang, sitemap, páginas inexistentes, búsqueda y caché.
   Usar una plantilla pública ligera para evitar cargar todos los recursos de la
   aplicación en cada página de ayuda.
5. Validar ayuda, catálogo, español/inglés y personalización antes de sustituir
   la publicación pública. No se cambiaron rutas ni servicios de producción.

## Evidencia de código

- [HelpController: lectura, edición y búsqueda](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Controllers/HelpController.cs>)
- [Ayuda Razor: edición, índice y contenido](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Views/Help/Index.cshtml>)
- [Template: lectura de contenido y caché](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy.Comun/Template.cs>)
- [Catálogo dinámico](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Controllers/DevicesController.cs>)
- [Exportador: cuatro páginas por modelo y traducción](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Controllers/Admin/AdminScraperTrackersController.Markdown.cs>)
- [URLs públicas de ayuda](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Code/PVersion.cs>)
- [Canonical y hreflang existentes](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/src/plaspy.core/Plaspy/Views/Shared/Hreflang.cshtml>)
- [Configuración de compilación corregida](<C:/Users/fredy/OneDrive - SOFTWARE DEVELOPERS GROUP LTDA/Desktop/plaspy/docs/sites/shared.config.js>)

La auditoría inicial encontró 406 fragmentos JavaScript vacíos producidos por
Rspack pese a terminar con código cero. CAREU / UCAN / Features fallaba con
`ChunkLoadError`. Se pasó a Webpack con SWC, se limitó la generación de páginas y
se añadieron verificaciones que rechazan archivos vacíos antes del ensamblado.
Las cifras finales corresponden a esa configuración corregida.
