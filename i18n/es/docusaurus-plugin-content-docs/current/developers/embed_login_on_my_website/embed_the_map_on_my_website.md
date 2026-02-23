---
sidebar_position: 8
---
# Insertar el mapa en mi página web
Incrustar el mapa de Plaspy con la posición de tus dispositivos en tu página web facilita la visualización en tiempo real de las posiciones de los dispositivos para los visitantes. Esto permite a los usuarios ver las ubicaciones sin necesidad de acceder directamente a Plaspy, y puedes proteger esta visualización mediante un mecanismo de autenticación propio, independiente de los datos de acceso de Plaspy.

![](./1-insertar-mapa-en-pagina-web.mp4)

A continuación, se detallan los pasos para incrustar el mapa en tu página web, mostrando información actual de los dispositivos seleccionados de un grupo.

## Instrucciones para incrustar el mapa

### Paso a Paso

Para incrustar el mapa en tu página web, sigue estos pasos:

1. **Habilitar el acceso a la API de tu cuenta:** Sigue las instrucciones para habilitar la API en tu cuenta de Plaspy. Esto incluye generar una API Key.
2. **Habilitar el acceso del dispositivo por medio de la API:** Configura los dispositivos que deseas mostrar en el mapa para que puedan ser accesibles mediante la API.
3. **Crear un grupo con los dispositivos que deseas mostrar:** En Plaspy, crea un grupo e incluye en él todos los dispositivos que quieres visualizar en el mapa.
4. **Buscar el Identificador del grupo:** Edita el grupo creado y copia el identificador del grupo \(ID del grupo\), necesario para configurar la API.
5. **Incrustar el código HTML del mapa en tu página web:** Utiliza el siguiente código HTML, reemplazando ```mi_id_grupo``` con el identificador del grupo que copiaste en el paso anterior:

&lt;div id="map\_canvas" style="width:100%;height:400px"&gt;Cargando...&lt;/div&gt;  
&lt;script type="text/javascript"&gt;plaspy\_api\_group\_key="**mi\_id\_grupo**";&lt;/script&gt;  
&lt;script type="text/javascript" src="https://app.plaspy.com/api/loadMapG.js"&gt;&lt;/script&gt;

##   
Consideraciones Finales

- **Personalización:** Asegúrate de que el mapa esté bien integrado en el diseño de tu página web, ajustando el tamaño y el estilo según sea necesario.
- **Seguridad:** Verifica que tu sitio web esté configurado para manejar de manera segura la comunicación con la API de Plaspy.
- **Experiencia del Usuario:** Proporciona información clara y accesible para que tus usuarios comprendan que están viendo datos en tiempo real de los dispositivos a través de tu sitio.

Incrustar el mapa de Plaspy en tu página web es una manera efectiva de proporcionar a los visitantes acceso a las posiciones en tiempo real de tus dispositivos. Siguiendo los pasos mencionados, puedes integrar fácilmente el mapa utilizando la API de Plaspy, facilitando así la visualización y mejorando la experiencia del usuario en tu sitio.
