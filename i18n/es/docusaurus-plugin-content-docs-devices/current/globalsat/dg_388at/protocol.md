---
slug: /globalsat/dg_388at/protocol
id: dg_388at-protocol
sidebar_label: Protocol
title: GlobalSat - DG-388AT Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del GlobalSat DG-388AT y cómo integrar sus exportes GPX y transferencias BLE con Plaspy
keywords:
  - GlobalSat DG-388AT
  - protocolo DG-388AT
  - protocolo registrador GPS GlobalSat
  - exportación GPX DG-388AT
  - registrador GPS BLE
  - compatibilidad Plaspy
  - historial de rutas GPS
  - protocolo de seguimiento DG-388AT
  - integración GlobalSat Plaspy
  - importación de datos GPS Plaspy
---

# GlobalSat - Protocolo DG-388AT

Esta página ofrece un contexto público del protocolo para integrar el GlobalSat DG-388AT con Plaspy. Explica cómo los flujos de trabajo de registro de datos del DG-388AT y su exportación mediante Bluetooth Low Energy se relacionan con la ingestión en Plaspy y qué esperar durante la integración, sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y puede detectar automáticamente el protocolo del rastreador cuando los dispositivos se conectan directamente a Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esto debe tomarse como una guía general más que como una referencia de firmware del dispositivo.

## Resumen del protocolo

El DG-388AT es, ante todo, un registrador de datos GPS autónomo que exporta recorridos grabados en formatos comunes para su importación en plataformas como Plaspy. Su contexto de comunicación se centra en la recuperación por BLE y la exportación GPX en lugar de telemetría celular continua hacia un endpoint en la nube.

- Para el DG-388AT la ruta de integración principal es la exportación GPX mediante la app ez-Connect o la utilidad de PC suministrada, y posteriormente la importación en Plaspy para mapeo y análisis.
- El dispositivo registra fecha y hora, velocidad, altitud y coordenadas GPS para crear un historial de ruta detallado que Plaspy puede consumir como telemetría histórica.
- Los archivos exportados pueden incluir POI y marcadores de waypoint que preservan información contextual al importarlos en Plaspy.
- Las responsabilidades del protocolo incluyen captura de datos duradera en el dispositivo, marcas de tiempo de metadatos fiables y formatos de exportación que preserven la fidelidad de la ruta para la ingestión en Plaspy.
- Aunque el DG-388AT utiliza BLE para la transferencia, Plaspy también acepta dispositivos que reportan directamente a un endpoint de Plaspy usando el mismo puerto compartido y puede recibir datos por distintos métodos de transporte.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar telemetría de muchos tipos de rastreadores y minimizar la configuración manual cuando es posible. Para los dispositivos que se conectan directamente a los endpoints de Plaspy, la plataforma identifica automáticamente el protocolo entrante, por lo que normalmente usted no necesita seleccionar un ajuste de protocolo dentro de la plataforma.

- Plaspy recibe informes de dispositivos en el endpoint compartido d.plaspy.com que se resuelve en 54.85.159.138 para conexiones de red.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, que es el 8888, lo que simplifica la configuración entre modelos.
- Los dispositivos que soportan reporte directo pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del equipo y los requisitos de la red.
- Debido a la detección automática de protocolo de Plaspy, un dispositivo correctamente configurado que apunte al endpoint de Plaspy normalmente será gestionado sin selección manual de protocolo.
- Para el DG-388AT el flujo de trabajo más común es la recuperación por BLE y la importación de GPX; Plaspy acepta cargas GPX e integra esas pistas junto con dispositivos que reportan en vivo.

## Contexto de transporte y conexión

Las elecciones de transporte y conexión dependen de las capacidades del dispositivo y del flujo de trabajo previsto. El DG-388AT se concentra en la transferencia local por BLE y la exportación de archivos, pero el endpoint en la nube de Plaspy también está preparado para recibir conexiones directas desde rastreadores en red.

- El DG-388AT utiliza Bluetooth Low Energy para emparejamiento y transferencia de archivos a un teléfono inteligente, tablet o laptop con BLE para su exportación.
- El endpoint de red de Plaspy es d.plaspy.com y se resuelve en la IP pública 54.85.159.138 para dispositivos configurados para enviar datos directamente.
- Cuando un dispositivo reporta directamente a Plaspy, puede usar UDP o TCP en el puerto 8888; este es el puerto estándar que Plaspy utiliza para todos los dispositivos soportados.
- Todos los dispositivos en Plaspy utilizan el mismo puerto (8888), lo que agiliza la configuración de rastreadores que se conectan por redes celulares o IP.
- En la práctica, el flujo de exportación por BLE del DG-388AT entrega archivos GPX a un dispositivo móvil que luego los sube a Plaspy a través de Internet, separando la recuperación local del dispositivo del transporte de red hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar qué metadatos se registran o cómo se formatean las exportaciones; confirme siempre el comportamiento del firmware de la unidad exacta que posee.
- Las revisiones de hardware o las variantes regionales pueden alterar funciones soportadas como la capacidad de waypoints o el comportamiento de sensores.
- El flujo de exportación por BLE y GPX depende de las versiones de la app ez-Connect o de la utilidad de PC; las incompatibilidades pueden afectar la estructura del archivo de exportación o los metadatos.
- Si usted también usa rastreadores de reporte directo en la misma cuenta de Plaspy, asegúrese de comprender las diferencias de transporte entre importaciones basadas en archivos y dispositivos de reporte en vivo.
- La selección de transporte (UDP vs TCP) es importante para los dispositivos que se conectan directamente; elija el transporte que soporte el dispositivo y la red.
- Valide las exportaciones GPX abriéndolas en una herramienta de mapeo antes de importarlas a Plaspy para confirmar que las marcas de tiempo, coordenadas y marcadores POI están presentes.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el DG-388AT y cómo Plaspy ingiere esos datos reduce la fricción en la configuración, acelera la resolución de problemas y ayuda a mantener telemetría histórica confiable.

- Confirma que la línea de tiempo y la metadata de zona horaria en los archivos exportados coinciden con lo esperado en su cuenta de Plaspy.
- Le ayuda a elegir flujos de exportación y carga adecuados cuando combina datos de registradores BLE con rastreadores en vivo.
- Facilita el diagnóstico de waypoints faltantes o marcas de tiempo desincronizadas revisando el firmware y la configuración de exportación de la app.
- Asegura que los metadatos de POI y waypoint se preserven durante la exportación GPX para que Plaspy reciba marcadores contextuales útiles.
- Orienta decisiones sobre colocación del dispositivo, intervalos de registro y modos de ahorro de energía para maximizar el historial de rutas utilizable para los análisis de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el DG-388AT con Plaspy es una opción práctica cuando su prioridad es obtener datos históricos de rutas detallados más que un seguimiento continuo en tiempo real. La alta capacidad de waypoints del registrador y su larga duración de batería lo hacen adecuado para la recolección por lotes de viajes que luego pueden importarse a Plaspy para mapeo, generación de informes y análisis comparativos entre activos.

Plaspy puede combinar importaciones GPX del DG-388AT con telemetría en vivo de otros rastreadores para ofrecer una vista unificada del movimiento de activos y de las rutas históricas. Para obtener más información sobre Plaspy y cómo funciona con exportes GPX y otros tipos de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la documentación específica del dispositivo y las actualizaciones de firmware en https://www.globalsat.com.tw/.
