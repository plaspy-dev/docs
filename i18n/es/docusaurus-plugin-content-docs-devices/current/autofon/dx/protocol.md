---
slug: /autofon/dx/protocol
id: dx-protocol
sidebar_label: Protocol
title: AutoFon - DX Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del AutoFon DX Маяк y cómo se comunica con Plaspy para reportes de ubicación y monitoreo confiable
keywords:
  - protocolo AutoFon DX Маяк
  - protocolo GPS AutoFon DX Mayak
  - protocolo AutoFon DX Plaspy
  - protocolo de comunicación AutoFon DX
  - protocolo de rastreo AutoFon DX
  - protocolo de rastreador GPS AutoFon
  - compatibilidad DX Mayak Plaspy
  - protocolo rastreador vehicular AutoFon
  - rastreador GLONASS GPS AutoFon
  - protocolo GPRS GPS
---

# AutoFon - DX Маяк: Protocolo

Esta página describe el contexto público del protocolo para integrar el rastreador GPS AutoFon DX Маяк con Plaspy. Se centra en cómo el dispositivo se comunica con un servidor de monitoreo y qué aspectos de esa comunicación son relevantes al vincular el rastreador con Plaspy para el reporte de ubicación, notificaciones de eventos y supervisión remota.

El AutoFon DX Маяк es un rastreador compacto GLONASS/GPS con reporte por GPRS 2G y SMS, acelerómetro, funciones BLE y modos de alimentación múltiples. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante. Cuando sea pertinente, revise la documentación del fabricante para confirmar comportamientos específicos del firmware.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de convenciones de mensajería que el AutoFon DX Маяк utiliza para identificarse y enviar telemetría y eventos a una plataforma de monitoreo. Para la integración con Plaspy, la función pública del protocolo es transmitir de forma fiable coordenadas, eventos de movimiento e información de estado para que Plaspy pueda presentar datos de ubicación y alertas accionables.

- El protocolo transmite datos de posición desde el receptor GLONASS/GPS y estimaciones por torre celular cuando no hay satélites disponibles.
- Reporta información de eventos y estado como disparos del acelerómetro, nivel de batería, intensidad de señal y modo del dispositivo.
- Soporta entrega por redes 2G mediante GPRS hacia un servidor de monitoreo o por SMS a números configurados.
- La configuración del dispositivo y las respuestas a comandos pueden enviarse de forma remota por la misma ruta de transporte cuando el firmware del dispositivo lo permite.
- El comportamiento del protocolo y los campos de los mensajes disponibles pueden cambiar entre versiones de firmware y revisiones de hardware, por lo que las implementaciones deben validarse contra la documentación del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint público compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta. Normalmente, los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido.
- Una configuración de reporte correcta en el lado del dispositivo (host objetivo y transporte) suele ser suficiente para que Plaspy reconozca el dispositivo.
- Si un dispositivo no parece detectarse, verifique los parámetros de reporte del dispositivo, la versión de firmware y la conectividad de red.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el rastreador alcanza Plaspy más que la estructura interna de los mensajes. El AutoFon DX Маяк puede enviar reportes por GPRS 2G o por SMS; cuando utiliza GPRS normalmente apunta a la dirección y puerto del servidor de monitoreo proporcionados por la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al endpoint de Plaspy por dominio d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y la provisión de dispositivos.
- El reporte por GPRS es la vía común para telemetría continua; el SMS sigue disponible para alertas y cuando no hay conectividad de datos.
- La fiabilidad de la red, la configuración del APN y el comportamiento del operador de la SIM influyen en si TCP o UDP es preferible para un despliegue dado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, quitar o cambiar campos de mensajes y comportamientos; siempre verifique el nivel de firmware del dispositivo al diagnosticar compatibilidad.
- Las revisiones de hardware o distintas series de producto pueden introducir comportamientos variantes incluso bajo el mismo nombre de modelo.
- Algunas funciones documentadas por el fabricante (por ejemplo, presencia BLE o determinación de dirección) están fuera del protocolo de reporte principal y pueden usar canales o aplicaciones separadas.
- La elección del transporte (TCP vs UDP) debe coincidir con lo que el firmware del dispositivo soporta y con lo que está configurado en el equipo.
- El reporte por SMS no utiliza el endpoint GPRS de Plaspy y resulta útil como respaldo para alertas críticas.
- Valide la configuración y las capacidades del dispositivo contra la documentación oficial de AutoFon antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador ayuda a garantizar la entrega fiable de actualizaciones de posición, la interpretación correcta de los eventos y una gestión eficiente de la energía en campo. Un entendimiento práctico reduce el tiempo de resolución de problemas y facilita ajustar la configuración del dispositivo a las necesidades operativas.

- Le ayuda a elegir el transporte apropiado (GPRS vs SMS, TCP vs UDP) para equilibrar confiabilidad y duración de batería.
- Aclara qué campos de telemetría esperar en la plataforma y cómo se representarán los disparos del acelerómetro.
- Facilita el diagnóstico de problemas de conectividad relacionados con APN, SIM o alcance del servidor.
- Orienta las decisiones sobre intervalos de reporte, modos de sueño intermitente vs conexión continua y cómo esas elecciones afectan la autonomía.
- Apoya la planificación de actualizaciones de firmware y revisiones de hardware que puedan alterar el comportamiento del dispositivo a lo largo del tiempo.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el AutoFon DX Маяк proporciona un punto de monitoreo centralizado para ubicación, eventos de movimiento y estado del dispositivo en una flota mixta de rastreadores. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación y reducen la necesidad de selección manual de protocolos.

Plaspy ofrece visibilidad consolidada y alertas para activos rastreados con dispositivos AutoFon, lo cual es valioso para operadores de flotas, protección de activos y aplicaciones de seguridad personal. Para obtener más información sobre la integración de dispositivos como el AutoFon DX Маяк con Plaspy visite https://www.plaspy.com. Por favor verifique los detalles de protocolo específicos del dispositivo, el comportamiento del firmware y la implementación del fabricante en el sitio oficial de AutoFon https://www.autofon.ru/ ya que estos elementos pueden cambiar con el tiempo.
