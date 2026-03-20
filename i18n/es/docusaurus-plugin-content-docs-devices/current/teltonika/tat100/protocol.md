---
slug: /teltonika/tat100/protocol
id: tat100-protocol
sidebar_label: Protocol
title: Teltonika - TAT100 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el Teltonika TAT100 con Plaspy y guía de conexión
keywords:
  - protocolo Teltonika TAT100
  - protocolo GPS TAT100
  - Teltonika TAT100 Plaspy
  - protocolo de comunicación TAT100
  - protocolo de rastreo TAT100
  - protocolo rastreador de activos Teltonika
  - compatibilidad de dispositivos Plaspy
  - comunicación de rastreador GPS
  - rastreador de activos alimentado por batería
  - rastreador de activos IP68
---

# Teltonika - Protocolo TAT100

Esta página presenta el contexto público del protocolo para usar el Teltonika TAT100 con Plaspy. Explica cómo el dispositivo informa ubicación y telemetría a Plaspy y qué considerar al configurar el rastreador para enviar datos a la plataforma. El contenido está dirigido a gestores de flota, integradores y usuarios técnicos que necesiten comprender el flujo de comunicación sin entrar en detalles de implementación.

El TAT100 es un rastreador de activos compacto, alimentado por batería, diseñado para despliegues de larga duración y entornos exigentes. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que le recomendamos verificar el firmware del equipo y la documentación de Teltonika antes de planificar despliegues.

## Resumen del protocolo

El protocolo del dispositivo define cómo el TAT100 codifica y envía actualizaciones de posición, telemetría y estado del equipo para que Plaspy pueda ingerir y mostrar la información. Para el TAT100 esto implica informes periódicos de posición GNSS y telemetría básica adecuada para rastreo de activos con bajo consumo. El protocolo permite identificación, reportes temporizados y mensajes basados en eventos que Plaspy utiliza para generar vistas en el mapa, alertas e historial.

- Establece cómo el rastreador se identifica ante el servidor para que Plaspy asocie los datos entrantes con el registro de dispositivo correcto.
- Controla cuándo y cómo se reportan posición y telemetría para equilibrar la frecuencia de actualizaciones con la duración de la batería.
- Transmite eventos de movimiento y actualizaciones de estado del equipo que Plaspy traduce en alertas y paneles de telemetría.
- Proporciona la estructura que permite a Plaspy analizar los informes entrantes sin necesidad de seleccionar manualmente el protocolo cuando el dispositivo está apuntando al endpoint de Plaspy.
- Soporta escenarios de cambio de configuración y distintos modos de reporte que pueden afectar la frecuencia con la que Plaspy recibe actualizaciones.

## Cómo Plaspy detecta el protocolo

Plaspy opera un endpoint de red compartido para conexiones de dispositivos y detecta automáticamente el protocolo del rastreador a partir de los informes entrantes. En la mayoría de los casos no necesita informar a Plaspy qué protocolo usa su rastreador, siempre que el dispositivo esté configurado para enviar informes a la dirección y puerto del servidor Plaspy.

- Plaspy utiliza un endpoint de servidor común para que los dispositivos reporten a una sola dirección y puerto para la ingestión.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuraciones con IP directa.
- El puerto usado por todos los dispositivos en Plaspy es 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP para conectarse al endpoint de Plaspy en el puerto 8888 según las capacidades y preferencias del dispositivo.
- Cuando un dispositivo correctamente configurado envía datos al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador para su procesamiento.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el TAT100 alcanza el endpoint de ingestión de Plaspy a través de la red celular. El dispositivo emplea datos celulares estándar para entregar los informes, y la selección del transporte suele ser una opción de configuración en el rastreador o gestionada por herramientas de aprovisionamiento. Esta sección se centra en los hechos públicos de conexión relevantes para enviar datos a Plaspy.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 en la configuración.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para entregar los informes a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento en flotas mixtas y distintos tipos de activos.
- La elección del transporte puede influir en características de entrega como retransmisiones y overhead, por lo que conviene elegir el modo soportado y recomendado para su SKU.
- Asegúrese de que el APN del dispositivo y el plan de la SIM permitan conexiones salientes al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y los conjuntos de funciones pueden cambiar la forma en que el dispositivo reporta datos y qué campos de telemetría están disponibles.
- Las revisiones de hardware o diferentes SKUs pueden exponer opciones de configuración distintas, como provisionamiento por micro USB o variantes de batería.
- Ajustes del lado del fabricante y opciones de configuración remota pueden ocasionar pequeñas diferencias de protocolo entre unidades.
- La elección del transporte, UDP versus TCP, puede afectar la entrega de mensajes pero no altera la semántica de los datos a nivel superior.
- Valide siempre con un equipo de muestra informando al endpoint de Plaspy antes de implementar a gran escala.
- Consulte la documentación de Teltonika para comportamientos específicos por SKU y notas de versión de firmware que puedan afectar el reporte.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación del TAT100 ayuda a asegurar una configuración exitosa, reportes confiables y un uso eficiente de la batería al integrarlo con Plaspy. Familiarizarse con el contexto del protocolo reduce el tiempo de resolución de problemas y facilita decisiones informadas sobre tasas de reporte y selección de transporte.

- Permite configurar correctamente el dispositivo para que los informes lleguen a Plaspy de forma consistente y se asocien con el activo correspondiente.
- Ayuda a elegir intervalos de reporte y disparadores de eventos que equilibren visibilidad y duración de batería.
- Facilita el diagnóstico de problemas de conectividad confirmando que el dispositivo apunta al endpoint y puerto correctos de Plaspy.
- Aclara qué campos de telemetría esperar en Plaspy y dónde buscar datos faltantes o inesperados.
- Apoya la planificación para flotas mixtas donde distintos dispositivos o SKUs pueden comportarse de manera ligeramente diferente.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika TAT100 con Plaspy ofrece una solución práctica para monitoreo a largo plazo de activos, rastreo de contenedores y respaldo de seguimiento en operaciones de flota. El hardware del dispositivo y sus opciones de reporte configurable lo hacen adecuado para escenarios que requieren bajo mantenimiento y actualizaciones de ubicación fiables, mientras que Plaspy se encarga de la ingestión, el mapeo, las alertas y la reproducción histórica para convertir los informes en información operativa.

Para conocer más sobre cómo Plaspy funciona con rastreadores compatibles y revisar opciones de despliegue, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente sobre el protocolo y el firmware específicos del fabricante en https://www.teltonika-gps.com/.
