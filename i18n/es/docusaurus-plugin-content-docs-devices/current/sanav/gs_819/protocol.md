---
slug: /sanav/gs_819/protocol
id: gs_819-protocol
sidebar_label: Protocol
title: Sanav - GS-819 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Sanav GS-819 con Plaspy usando ajustes compartidos de servidor y detección automática
keywords:
  - protocolo Sanav GS-819
  - protocolo GPS Sanav GS-819
  - Sanav GS-819 con Plaspy
  - protocolo de rastreo GS-819
  - protocolo rastreador vehicular Sanav
  - conectividad GS-819
  - configuración GS-819
  - compatibilidad de dispositivos Plaspy
  - rastreador GPS Plaspy
  - protocolo de rastreo vehicular
---

# Sanav - Protocolo GS-819

Esta página describe el contexto público del protocolo para usar el rastreador vehicular Sanav GS-819 con Plaspy. Explica cómo el dispositivo puede reportar posición, estado e información de entradas/salidas al servicio de Plaspy empleando transportes de red estándar y la configuración compartida de conexión de Plaspy. Los detalles aquí se centran en la comunicación de alto nivel y consideraciones prácticas de compatibilidad, no en formatos propietarios de bajo nivel.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de conexión y consideraciones prácticas para despliegues con GS-819.

## Resumen del protocolo

El GS-819 envía actualizaciones de posición y estado a través de redes celulares y puede usar varios canales de reporte para transmitir datos de GPS, entradas/salidas y movimiento a un servidor remoto. El protocolo de comunicación determina cómo se formatean los mensajes, cómo se identifica el dispositivo ante el servidor y qué campos de telemetría se entregan a una plataforma como Plaspy.

- Permite al GS-819 transmitir coordenadas GPS, marcas de tiempo y estado de movimiento a Plaspy para mapeo e historial.
- Transporta el estado de entradas/salidas, incluyendo detección ACC encendido/apagado y valores de entradas digitales o analógicas relevantes para la supervisión vehicular.
- Proporciona un mecanismo para que el rastreador se identifique y Plaspy pueda asociar los datos entrantes con el activo o registro de dispositivo correcto.
- Permite comportamientos de reporte configurables, como actualizaciones periódicas por tiempo o distancia y reportes por eventos de movimiento o entradas.
- Admite múltiples opciones de transporte para que el rastreador use el canal más fiable disponible en campo al enviar telemetría.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un endpoint unificado y un puerto al que los dispositivos reportan, y detecta automáticamente el protocolo del rastreador cuando llega la telemetría. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para enviar sus datos a la dirección y puerto del servidor de Plaspy.

- Los dispositivos deben configurarse para reportar a la dirección de servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138.
- Todos los dispositivos que usan Plaspy emplean el mismo puerto, 8888, lo que simplifica la configuración entre modelos.
- Plaspy soporta tanto UDP como TCP en el puerto 8888, por lo que los rastreadores pueden usar el transporte que su firmware admita.
- Cuando un GS-819 correctamente configurado reporta a Plaspy, la plataforma asocia automáticamente los datos entrantes con el tipo de dispositivo compatible.
- La selección manual de protocolo dentro de Plaspy generalmente no es necesaria cuando el dispositivo envía datos al endpoint de Plaspy y utiliza un transporte soportado.

## Contexto de transporte y conexión

El contexto de conexión se refiere a cómo el GS-819 alcanza el servicio de Plaspy más que al formato interno de los mensajes. El GS-819 soporta reporte celular sobre 3G y GPRS y puede también usar SMS para algunas tareas de gestión; el transporte de red y la dirección del servidor determinan dónde se entrega la telemetría.

- El GS-819 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y los ajustes elegidos.
- Señale al dispositivo el dominio de Plaspy d.plaspy.com o la dirección IP 54.85.159.138 para que la telemetría llegue al servicio de Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce la complejidad de configuración al desplegar múltiples modelos de rastreadores.
- Elija el tipo de transporte que coincida con las capacidades del firmware del dispositivo y con su entorno de red para obtener la mejor fiabilidad.
- Asegúrese de que cualquier firewall intermedio o la configuración del operador permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar comandos disponibles, intervalos de reporte y campos opcionales que devuelve el rastreador.
- Revisiones de hardware o distintos lotes de producción pueden introducir pequeñas variaciones en las funciones soportadas o en los ajustes por defecto.
- Variaciones en el lado del fabricante, como modos de configuración o comportamientos COTA, pueden afectar cómo un dispositivo se registra en un servidor.
- El GS-819 soporta reportes vía 3G, GPRS y SMS, que pueden utilizarse de forma distinta según las limitaciones de los operadores regionales.
- La selección de transporte entre UDP y TCP puede influir en la fiabilidad y debe coincidir con la configuración del rastreador.
- Siempre valide los detalles de compatibilidad con la documentación actual del fabricante para su revisión específica de firmware y hardware.
- Cuando sea posible, pruebe un dispositivo de muestra en su red y con Plaspy antes de un despliegue amplio para confirmar el comportamiento.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración correcta, reportes confiables y una resolución de problemas efectiva al operar dispositivos GS-819 con Plaspy. Conocer cómo reporta el dispositivo y qué campos se esperan facilita la integración y reduce el tiempo para resolver incidencias.

- Confirma que la telemetría llega al endpoint y puerto de Plaspy esperado, de modo que los datos del dispositivo sean visibles en la plataforma.
- Ayuda a diagnosticar problemas de conectividad cuando los dispositivos no aparecen en Plaspy por restricciones de transporte, DNS o del operador.
- Orienta las decisiones de configuración, como usar UDP o TCP y parámetros de reporte por tiempo o distancia.
- Apoya la planificación de actualizaciones de firmware o reemplazos de equipos al aclarar qué comportamientos dependen del dispositivo.
- Mejora las expectativas sobre las entradas, salidas y reportes disponibles al integrar sensores o relés con el rastreador.

## Por qué usar Plaspy con este protocolo

Usar el Sanav GS-819 con Plaspy ofrece a las organizaciones una forma práctica de centralizar el rastreo de vehículos, la supervisión de estado y el historial de reportes, apoyándose en una plataforma que acepta telemetría de muchos tipos de rastreadores. La buena sensibilidad GPS del GS-819, sus múltiples opciones de entradas/salidas, la detección ACC y su conectividad flexible lo hacen adecuado para flotas, activos y escenarios de monitoreo vehicular donde se necesita información fiable de posición y estado.

Si desea saber más sobre cómo Plaspy gestiona las integraciones de dispositivos o explorar las funciones de la plataforma, visite https://www.plaspy.com. Para los detalles de protocolo más recientes y específicos del dispositivo, notas de firmware y opciones de configuración del GS-819, consulte la documentación del fabricante en http://es.sanav.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
