---
slug: /sinotrack/st_905/protocol
id: st_905-protocol
sidebar_label: Protocol
title: SinoTrack - ST-905 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST-905 y cómo se comunica con Plaspy para seguimiento en tiempo real confiable
keywords:
  - SinoTrack ST-905
  - protocolo ST-905
  - protocolo GPS ST-905
  - protocolo SinoTrack
  - protocolo de rastreo ST-905
  - protocolo de rastreador GPS Plaspy
  - compatibilidad SinoTrack Plaspy
  - rastreo de vehículos ST-905
  - rastreador GPS magnético ST-905
  - reportes GPRS ST-905
---

# SinoTrack - Protocolo ST-905

Esta página describe el contexto público del protocolo para usar el rastreador GPS SinoTrack ST-905 con Plaspy. Explica cómo el dispositivo envía posición y estado a Plaspy y señala las consideraciones de red y configuración relevantes para una integración exitosa. El contenido está dirigido a administradores de flotas, integradores y evaluadores técnicos, y ofrece información de alto nivel y segura sobre el protocolo.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y puede detectar automáticamente el protocolo del rastreador cuando el dispositivo apunta a la plataforma. El comportamiento exacto de los reportes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, los pasos de configuración por SMS y el conjunto de funciones del dispositivo deben verificarse con el equipo que tenga a la mano.

## Resumen del protocolo

El ST-905 utiliza reportes GPRS sobre GSM para enviar coordenadas GPS y metadatos de estado a un servidor configurado. El rastreador puede configurarse por SMS para reenviar su telemetría a Plaspy, permitiendo ubicación en tiempo real, historial y alertas en la plataforma. El propósito del protocolo es transmitir de forma fiable la información posicional y de estado básico desde el dispositivo hacia Plaspy sin exponer detalles internos del equipo.

- Permite al ST-905 enviar actualizaciones de ubicación, estado de batería y telemetría básica a un servidor remoto.
- Hace que el dispositivo se identifique ante la plataforma receptora para que Plaspy asocie los reportes con el activo correcto.
- Proporciona un canal de reporte predecible que Plaspy consume para seguimiento en vivo, geocercas y alertas.
- Soporta intervalos de reporte y modos de energía configurables para equilibrar frecuencia de actualizaciones y duración de batería.
- Funciona con configuración por SMS para que los instaladores apunten el rastreador a un endpoint de Plaspy sin herramientas especializadas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe telemetría entrante en un endpoint común de ingestión y usa esa conexión compartida para determinar el manejo adecuado de muchos modelos de rastreadores. En la práctica, cuando el ST-905 está configurado para reportar a Plaspy, la plataforma reconocerá y procesará los reportes del dispositivo sin requerir selección manual de protocolo en la mayoría de los casos.

- Plaspy escucha en un solo puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Para ingestión en Plaspy use d.plaspy.com o la IP del servidor 54.85.159.138 como destino configurado.
- El dispositivo debe apuntar al endpoint de Plaspy para que los reportes entrantes se asocien con la cuenta y el activo correctos.
- Normalmente se configura el ST-905 vía SMS para establecer el APN y la dirección de la plataforma; una vez activo el reporte, Plaspy se encarga de la detección.
- Si un dispositivo no aparece en línea, verifique la configuración por SMS, los ajustes de APN y la cobertura de la red móvil antes de modificar parámetros en la plataforma.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el ST-905 llega a Plaspy a través de la red móvil. El rastreador utiliza GSM/GPRS para transmitir su telemetría y puede enviar reportes por UDP o TCP según la configuración del dispositivo y el soporte de firmware. Use la dirección y el puerto del servidor de Plaspy al configurar el equipo.

- El ST-905 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar telemetría a Plaspy.
- El endpoint público de ingestión de Plaspy es accesible en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el puerto 8888 es el estándar de ingestión entre los rastreadores soportados.
- Configure el APN y la IP de reporte del rastreador vía SMS para que los paquetes GPRS se enruten hacia Plaspy.
- Elija TCP o UDP según los modos soportados por el dispositivo y consideraciones de red, por ejemplo el comportamiento del proveedor de la SIM.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué reportes o campos de estado incluye el ST-905; siempre compruebe la versión de firmware del equipo.
- Las revisiones de hardware o variantes regionales pueden exponer comandos de configuración o funciones soportadas ligeramente distintas.
- La selección de transporte (UDP vs TCP) es configurable en el dispositivo y puede afectar el comportamiento de entrega en ciertos entornos de red.
- Los ajustes de fábrica del fabricante pueden apuntar al servidor de SinoTrack; cambie la IP/APN por SMS para enrutar los reportes a Plaspy.
- Confirme la disponibilidad de redes 2G en su región de despliegue, ya que el ST-905 usa conectividad GSM/GPRS.
- Valide la compatibilidad con la documentación del fabricante para comandos específicos del dispositivo y comportamiento detallado.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST-905 con Plaspy reduce el tiempo de puesta en marcha y mejora la confiabilidad operativa. Conocer el protocolo y el contexto de transporte facilita la resolución de problemas, la optimización de la batería y garantiza que la telemetría llegue según lo esperado.

- Ayuda a los instaladores a configurar correctamente el APN, la dirección del servidor y el intervalo de reporte vía SMS.
- Facilita el diagnóstico de comportamientos en línea/fuera de línea y problemas relacionados con la red.
- Permite decisiones informadas sobre TCP frente a UDP según su red y proveedor de SIM.
- Permite seleccionar intervalos de reporte adecuados para equilibrar precisión y duración de batería.
- Asegura la asociación correcta de los reportes del dispositivo con activos en Plaspy para alertas e historial fiables.

## Por qué usar Plaspy con este protocolo

Combinar el SinoTrack ST-905 con Plaspy ofrece una vía práctica para obtener visibilidad de activos en tiempo real, alertas y reproducción histórica. La larga duración de batería del ST-905 y su carcasa magnética discreta lo hacen adecuado para instalaciones encubiertas, mientras que Plaspy provee telemetría centralizada, geocercas y herramientas de reporte para gestionar activos rastreados a escala.

Si desea saber más sobre cómo Plaspy puede integrarse con el ST-905 y otros dispositivos, visite https://www.plaspy.com. Para detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y comandos de configuración por SMS, verifique la información actual con el fabricante en https://www.sinotrackgps.com/. El soporte de protocolo y el comportamiento de firmware pueden cambiar con el tiempo, por lo que siempre confirme los detalles con la documentación oficial del fabricante.
