---
slug: /globalsat/dg_388/protocol
id: dg_388-protocol
sidebar_label: Protocol
title: GlobalSat - DG-388 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para GlobalSat DG-388 y su compatibilidad con Plaspy
keywords:
  - protocolo GlobalSat DG 388
  - protocolo GPS GlobalSat DG 388
  - protocolo de rastreo DG 388
  - compatibilidad DG 388 Plaspy
  - protocolo registrador GPS GlobalSat
  - telemetría DG 388
  - rastreo vehicular DG 388
  - protocolo GPS Plaspy
  - protocolo registrador de datos GPS
  - importación de rutas DG 388
---

# GlobalSat - Protocolo DG-388

Esta página describe el contexto público del protocolo para usar el GlobalSat DG-388 con Plaspy. Se enfoca en cómo el DG-388 puede aportar telemetría e historial de rutas a los flujos de trabajo de Plaspy y explica el contexto de red y transferencia de archivos relevante para una integración exitosa sin exponer detalles privados de implementación.

El DG-388 es principalmente un registrador de datos GNSS independiente que graba fecha, hora, velocidad, altitud y coordenadas para su posterior exportación. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que considere la descripción del DG-388 aquí como un contexto general de protocolo más que como una especificación específica de firmware.

## Resumen del protocolo

El protocolo de un rastreador GPS describe cómo el dispositivo se identifica, cómo se empaqueta la telemetría y cómo se entrega esa información a un servicio como Plaspy. Para el DG-388, optimizado para registro offline y posterior exportación, las consideraciones relevantes incluyen tanto los formatos de exportación usados por la herramienta de PC del fabricante como las convenciones generales de reporte en red que usan los rastreadores en tiempo real cuando aplica.

- Define cómo el dispositivo transmite ubicación, hora, velocidad, altitud y marcadores de eventos para que Plaspy pueda reconstruir rutas y telemetría.
- Permite la identificación del dispositivo y la agrupación de sesiones para que las pistas importadas se asocien con el activo o usuario correcto en Plaspy.
- Soporta metadatos de eventos e intervalos, como eventos de movimiento o modo de registro, para que Plaspy pueda filtrar y analizar trayectos eficazmente.
- Para dispositivos de reporte en tiempo real, el protocolo determina el comportamiento de transporte y la cadencia de mensajes que Plaspy espera recibir.
- Para registradores de datos como el DG-388, el formato de archivo de exportación y el mapeo de metadatos son la superficie práctica del protocolo para la importación histórica en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar telemetría de muchos dispositivos y detectar automáticamente el protocolo del rastreador cuando un equipo se conecta al endpoint de la plataforma. En la mayoría de los casos, un dispositivo correctamente configurado que reporte a Plaspy no requiere selección manual de protocolo en la plataforma.

- El endpoint del servidor Plaspy es accesible en d.plaspy.com y en la IP pública 54.85.159.138 para el reporte de dispositivos.
- Plaspy acepta conexiones en un puerto compartido único para los rastreadores soportados, lo que simplifica la configuración del equipo.
- El puerto compartido utilizado por Plaspy es el 8888 y todos los dispositivos en Plaspy usan ese mismo puerto.
- Los dispositivos pueden enviar datos a Plaspy por UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Cuando llega un mensaje compatible al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y enruta los datos al parser y flujo de almacenamiento adecuados.
- En la práctica, si un dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y usa un transporte soportado, normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

## Contexto de transporte y conexión

El contexto de transporte explica cómo un dispositivo llega a Plaspy a través de la red y cómo se intercambian archivos cuando los equipos están offline. Aunque el DG-388 es principalmente un dispositivo de exportación por USB, entender las opciones de transporte comunes ayuda al compararlo con rastreadores en vivo o al integrar flujos de trabajo híbridos.

- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888.
- Plaspy acepta telemetría en d.plaspy.com y en la dirección IP equivalente 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, lo que simplifica las reglas de firewall y router para despliegues.
- Para el DG-388 específicamente, el flujo típico es el registro local y la exportación mediante la herramienta de PC en lugar del reporte continuo por red.
- Al convertir pistas exportadas para la importación en Plaspy, asegúrese de que los archivos exportados incluyan los campos de telemetría estándar que Plaspy espera, como marcas de tiempo y coordenadas.
- Si se usa un dispositivo con capacidad de reporte en vivo junto con un DG-388, apunte ese dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y seleccione UDP o TCP según la documentación del equipo.

## Notas sobre compatibilidad del protocolo

- El DG-388 es principalmente un registrador de datos GNSS con exportación a PC, no un rastreador celular en tiempo real; la compatibilidad para importación histórica depende de los formatos de archivo de exportación soportados por la herramienta de PC de GlobalSat.
- Revisiones de firmware y lotes de hardware pueden modificar los modos de registro disponibles, los campos de metadatos o el comportamiento de exportación; confirme la versión de firmware del dispositivo al resolver problemas de importación.
- Las configuraciones del fabricante o utilidades opcionales de configuración pueden cambiar cómo se registran los marcadores de eventos o los disparadores de movimiento en los datos exportados.
- La selección de transporte (UDP vs TCP) solo importa para dispositivos de reporte en vivo; el DG-388 usa exportación de archivos para flujos de trabajo offline.
- Al combinar importaciones históricas del DG-388 con telemetría en vivo de otros dispositivos en Plaspy, asegúrese de que los formatos de marca de tiempo y las zonas horarias coincidan para una reconstrucción precisa de rutas.
- Siempre valide los archivos de exportación contra los requisitos de importación de Plaspy y la documentación actual de GlobalSat.

## Por qué es importante entender el protocolo

Comprender cómo un rastreador se comunica con Plaspy ayuda a asegurar importaciones confiables, la correcta atribución de pistas a activos y una resolución de problemas eficiente cuando la telemetría falta o está malformada. Incluso para registradores offline como el DG-388, familiarizarse con la superficie del protocolo y el comportamiento de exportación agiliza la integración y el análisis.

- Ayuda a confirmar que los archivos de pista exportados contienen los campos requeridos, como marcas de tiempo y coordenadas, para la ingestión en Plaspy.
- Facilita el diagnóstico de desajustes causados por cambios de firmware, formatos de marca de tiempo o metadatos de eventos faltantes.
- Asegura que los dispositivos de reporte en red estén configurados para usar d.plaspy.com o 54.85.159.138 y el puerto 8888 con el transporte correcto.
- Reduce errores de configuración al alinear los ajustes de exportación del dispositivo con las expectativas de importación de Plaspy.
- Mejora la confiabilidad a largo plazo documentando versiones de firmware, flujos de exportación y cualquier procesamiento posterior usado antes de la carga a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat DG-388 junto con Plaspy es una opción práctica cuando se requiere datos históricos de rutas precisos sin conectividad celular continua. El DG-388 ofrece registro GNSS de alta resolución y modos de intervalo flexibles que facilitan la recolección de trayectos de larga duración y luego la exportación de esas sesiones para análisis, archivo e informes dentro de Plaspy.

Plaspy agrega valor al ingerir pistas exportadas o telemetría en vivo y presentar historial de rutas, líneas de tiempo e informes analíticos que complementan la supervisión operativa. Para saber más sobre cómo Plaspy maneja los protocolos de dispositivos y la ingestión de telemetría, visite https://www.plaspy.com. Para el comportamiento específico más actual del protocolo del dispositivo, notas de firmware y detalles de la herramienta de exportación, verifique la información en el sitio del fabricante https://www.globalsat.com.tw/.
