---
slug: /noran/nr100/protocol
id: nr100-protocol
sidebar_label: Protocol
title: Noran - NR100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Noran NR100 y guía de integración con Plaspy para seguimiento de flotas en tiempo real
keywords:
  - protocolo Noran NR100
  - protocolo GPS Noran NR100
  - Noran NR100 Plaspy
  - protocolo de seguimiento NR100
  - protocolo rastreador GPS Noran
  - protocolo de comunicación NR100
  - compatibilidad rastreador Plaspy
  - protocolo OBD II GPS
  - protocolo seguimiento de flotas
  - protocolo rastreo de vehículos
---

# Noran - Protocolo NR100

Esta página documenta el contexto público del protocolo para usar el rastreador OBD Noran NR100 con la plataforma Plaspy. Se centra en cómo el NR100 transmite telemetría y eventos a Plaspy, las configuraciones de conexión más habituales y consideraciones prácticas para la integración. El contenido está pensado para usuarios técnicos, administradores de flota e integradores que requieren orientación clara y no sensible sobre la comunicación y compatibilidad del dispositivo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones soportadas pueden variar según la versión de firmware del NR100, la revisión de hardware y la implementación del fabricante. Para listas de comandos específicas del dispositivo, detalles de parámetros y notas de firmware, consulte la documentación oficial de Noran.

## Visión general del protocolo

El protocolo de reporte del NR100 define cómo el rastreador envía posición, telemetría OBD y alertas de eventos a un servidor remoto. En términos prácticos, el protocolo transporta la identidad del dispositivo y telemetría con marca temporal para que Plaspy pueda correlacionar ubicación, estado de encendido y datos de sensores con los registros del vehículo y las reglas de alerta.

- Entrega actualizaciones de ubicación usando GPS y datos auxiliares de LBS para que Plaspy trace posiciones y construya el historial de viajes.
- Envía notificaciones de eventos como exceso de velocidad, corte de alimentación y activación de geocercas para su procesamiento inmediato por los flujos de trabajo de Plaspy.
- Transporta telemetría OBD II cuando está disponible, permitiendo a Plaspy usar datos de encendido y del vehículo en reportes de combustible y motor.
- Comunica la identidad y el estado del dispositivo para que Plaspy mantenga el estado del equipo y registros históricos.
- Permite intervalos de reporte configurables para equilibrar la frecuencia de actualizaciones con el uso de datos y consideraciones de batería.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido y está diseñado para identificar automáticamente el protocolo del rastreador cuando un equipo correctamente configurado comienza a reportar. Eso reduce la necesidad de seleccionar manualmente el protocolo dentro de la plataforma en la mayoría de despliegues estándar del NR100.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para opciones de configuración directa.
- El puerto de transporte común para Plaspy es el 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Cuando un NR100 se configura para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy recibirá los reportes y aplicará la detección automática del protocolo.
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está enviando datos al endpoint de Plaspy y utiliza un transporte soportado.
- Si un dispositivo no parece conectarse, verifique la configuración del servidor del equipo, el APN y que la red permita conexiones salientes hacia el endpoint y puerto de Plaspy.

## Transporte y contexto de conexión

El NR100 soporta reporte por Internet y modos de respaldo por SMS. Para el reporte por Internet hacia Plaspy, el dispositivo puede usar UDP o TCP en el puerto compartido de Plaspy según el soporte del equipo y la configuración elegida.

- Los dispositivos pueden configurarse para reportar por UDP o TCP en el puerto 8888 según las opciones del equipo y las condiciones de la red.
- El NR100 puede apuntarse al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el ruteo en el servidor.
- El reporte por Internet se usa comúnmente para actualizaciones de posición en tiempo real, mientras que SMS puede servir como canal alterno si está configurado.
- Asegúrese de que el APN y la configuración de datos móviles estén correctos en el dispositivo para que el NR100 pueda establecer una conexión saliente con Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden afectar los mensajes disponibles, los eventos soportados y los comandos de configuración. Confirme la versión de firmware del NR100 al solucionar problemas.
- Las revisiones de hardware y accesorios opcionales como relés o sensores externos pueden cambiar qué campos de telemetría se reportan a Plaspy.
- La selección de transporte (UDP vs TCP) puede variar según la configuración del dispositivo; elija el transporte compatible con el firmware del equipo y su red.
- El reporte por SMS es compatible con el NR100 como alternativa al reporte por Internet; los comportamientos y formatos de mensaje por SMS pueden diferir del reporte IP.
- Algunas funciones remotas, como monitor de audio o diagnósticos remotos, pueden requerir configuración adicional o permisos y comportarse de manera diferente entre versiones de firmware.
- Valide siempre la compatibilidad y el soporte de funciones contra la documentación oficial de Noran y pruebe un equipo de extremo a extremo antes de desplegar a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo el NR100 se comunica con Plaspy ayuda a asegurar una configuración confiable, telemetría precisa y un comportamiento de alertas predecible en toda la flota. Familiarizarse con el contexto del protocolo agiliza la resolución de problemas y facilita el mantenimiento a largo plazo.

- Reduce el tiempo de puesta en marcha al garantizar desde el inicio la dirección del servidor, el transporte y los ajustes de APN correctos.
- Ayuda a diagnosticar datos faltantes o lagunas en eventos al acotar problemas a transporte, firmware o configuración.
- Asegura que la telemetría OBD y las señales del vehículo estén mapeadas correctamente para que reportes de Plaspy como encendido o consumo de combustible sean precisos.
- Facilita alertas predecibles al confirmar que el dispositivo reporta exceso de velocidad, geocercas y cortes de energía según lo esperado.
- Sirve de guía para planificar actualizaciones de firmware y renovaciones de hardware mediante la comprensión de cómo los cambios pueden afectar el reporte de datos.

## Por qué usar Plaspy con este protocolo

Usar el Noran NR100 con Plaspy ofrece visibilidad centralizada para flotas que requieren despliegue rápido, telemetría basada en OBD y alertas robustas. El diseño plug and play del NR100 junto con la detección automática de protocolos y el endpoint unificado de Plaspy simplifican la instalación en vehículo y la configuración inicial, permitiendo monitoreo en tiempo real y análisis históricos.

Para saber más sobre el uso de Plaspy con dispositivos como el NR100 visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica de protocolo y firmware del dispositivo con la documentación del fabricante en http://www.norantracker.com/ antes de desplegar a gran escala.
