---
slug: /galileosky/10/protocol
id: 10-protocol
sidebar_label: Protocol
title: GalileoSky - 10 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GalileoSky 10 con Plaspy, con guía de conexión y compatibilidad
keywords:
  - protocolo GalileoSky 10
  - protocolo GPS GalileoSky 10
  - comunicación GalileoSky 10
  - protocolo de rastreo GalileoSky 10
  - GalileoSky 10 Plaspy
  - protocolo rastreador GalileoSky
  - rastreo vehicular GalileoSky
  - GalileoSky CAN bus J1939
  - compatibilidad protocolo rastreador
  - gestión de flotas GalileoSky
---

# GalileoSky - Protocolo 10

Esta página ofrece contexto público del protocolo para usar el rastreador GalileoSky 10 con Plaspy. Resume, en términos generales y no sensibles, cómo se comunica el dispositivo y destaca los aspectos relevantes para la integración: posicionamiento GNSS (GPS/GLONASS), entradas de sensor flexibles incluida lectura de señales analógicas de bajo nivel, y captura de datos en doble bus CAN con decodificación de parámetros J1939.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. Plaspy escucha en el endpoint público y el puerto usados por todos los dispositivos; el comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante en el equipo.

## Resumen del protocolo

El protocolo es el conjunto de reglas y flujos de mensajes que utiliza el GalileoSky 10 para enviar telemetría, identificación y datos de sensores a un servidor como Plaspy. En la práctica, el rastreador recopila ubicación GNSS, entradas de sensores y parámetros del bus CAN, y transmite esa información a Plaspy para que sea parseada, almacenada y presentada.

- Transporta datos de posición y tiempo desde el equipo al servidor para mapeo y seguimiento
- Envía entradas de sensores y señales digitales usadas para monitoreo y control
- Transmite parámetros derivados del bus CAN cuando el dispositivo lee datos del vehículo, como valores J1939
- Permite que el rastreador se identifique para que Plaspy asocie el flujo entrante con un registro de activo
- Proporciona un formato transportable para que Plaspy ingiera y traduzca la telemetría a los campos utilizables de la plataforma

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en el endpoint compartido y determina automáticamente el protocolo del rastreador a partir de ese tráfico, de modo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente. Los dispositivos configurados para reportar a Plaspy serán emparejados con el parser y el registro de activo correctos cuando sus datos lleguen a la plataforma.

- Plaspy escucha los reportes de los equipos en el endpoint compartido d.plaspy.com y en su IP pública 54.85.159.138
- Todos los dispositivos usan el mismo puerto de plataforma, lo que simplifica la configuración entre modelos
- Plaspy detecta automáticamente el protocolo cuando llega telemetría válida al endpoint
- Normalmente el usuario configura el equipo para reportar al endpoint de Plaspy y no necesita elegir un protocolo dentro de la plataforma
- Si un dispositivo usa firmware no estándar o ajustes de reporte inusuales, puede ser necesario realizar configuraciones o pruebas adicionales

## Transporte y contexto de conexión

Los detalles de conexión explican cómo el GalileoSky 10 llega al endpoint de Plaspy, más que la estructura interna de los mensajes. El dispositivo puede usar UDP o TCP en el puerto común de Plaspy según su firmware y configuración. Conocer el transporte y el destino es importante para la configuración de firewalls y el aprovisionamiento de los equipos.

- Los dispositivos pueden estar configurados para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- El transporte soportado puede ser UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Plaspy utiliza el mismo puerto para todos los dispositivos, por lo que la configuración del puerto es consistente entre modelos
- Seleccione UDP o TCP en el equipo conforme a las recomendaciones del firmware y las condiciones de red
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan conexiones salientes al endpoint de Plaspy en el puerto compartido

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, intervalos de reporte y funciones opcionales disponibles para Plaspy
- Las revisiones de hardware y las expansiones opcionales pueden añadir o modificar entradas de sensor y el comportamiento del bus CAN
- El dispositivo puede leer dos buses CAN y decodificar muchos parámetros J1939, pero el mapeo de CAN a los campos de la plataforma depende del firmware y la configuración
- Seleccionar UDP o TCP en el equipo afecta el comportamiento del transporte y debe corresponder con lo que el dispositivo espera
- Configure siempre el rastreador para que reporte al endpoint y puerto compartidos de Plaspy para permitir la detección automática
- Verifique la compatibilidad y las funciones soportadas según la documentación oficial del fabricante y la versión de firmware de su equipo

## Por qué es importante comprender el protocolo

Tener un entendimiento claro y práctico del protocolo del dispositivo ayuda a garantizar una configuración fluida, un mapeo de datos preciso y una operación confiable del rastreador con Plaspy. Esto enfoca los esfuerzos de resolución de problemas y reduce el tiempo de integración al alinear la configuración del equipo con las expectativas de la plataforma.

- Acelera la puesta en marcha al confirmar que el equipo reporta al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte o bloqueos de red
- Facilita el mapeo de sensores y parámetros CAN a los campos que usted necesita en Plaspy
- Reduce la incertidumbre cuando actualizaciones de firmware cambian la telemetría disponible o el timing de mensajes
- Apoya el mantenimiento a largo plazo al aclarar qué funciones dependen del dispositivo y cuáles son gestionadas por Plaspy

## Por qué usar Plaspy con este protocolo

Usar el GalileoSky 10 con Plaspy brinda a las organizaciones una forma unificada de ingerir posición GNSS, telemetría de sensores y parámetros derivados del bus CAN en una sola plataforma de gestión de flotas. La detección automática de protocolos y el endpoint compartido de Plaspy simplifican el despliegue, de modo que los vehículos y activos pueden comenzar a reportar con mínima configuración en la plataforma una vez que el equipo apunte al servidor de Plaspy.

Para conocer más sobre cómo Plaspy trabaja con una amplia variedad de rastreadores y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y orientación sobre la implementación del fabricante, verifique la información en el sitio oficial de GalileoSky en https://galileosky.com/. El soporte de protocolo y el comportamiento del firmware pueden evolucionar con el tiempo, por lo que consultar la documentación del fabricante ayuda a asegurar una integración precisa y actualizada.
