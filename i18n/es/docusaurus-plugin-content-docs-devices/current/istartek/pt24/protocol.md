---
slug: /istartek/pt24/protocol
id: pt24-protocol
sidebar_label: Protocol
title: iStartek - PT24 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del iStartek PT24 y su comunicación con la plataforma cloud de Plaspy
keywords:
  - protocolo iStartek PT24
  - protocolo GPS PT24
  - protocolo del rastreador PT24
  - compatibilidad PT24 Plaspy
  - protocolo de comunicación PT24
  - protocolo rastreador GPS iStartek
  - protocolo de seguimiento PT24
  - compatibilidad de dispositivos Plaspy
  - protocolo rastreador Plaspy
  - protocolo telemetría PT24
---

# iStartek - Protocolo PT24

Esta página describe el contexto público del protocolo para usar el rastreador solar iStartek PT24 con Plaspy. Se centra en cómo el PT24 se comunica con los servicios en la nube de Plaspy en términos generales y no sensibles, y explica el papel del protocolo de reporte del dispositivo para una integración y operación correctas.

Plaspy acepta conexiones hacia un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta correctamente. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento mantiene la discusión del protocolo en un nivel alto y resalta las configuraciones de conexión que Plaspy expone para uso público.

## Resumen del protocolo

El PT24 utiliza un protocolo de reporte del dispositivo para enviar ubicación, eventos y telemetría de sensores a un servidor remoto. Ese protocolo es el mecanismo por el cual el rastreador se identifica ante la nube, transmite datos posicionales y alertas, y habilita servicios posteriores como mapas y notificaciones.

- El protocolo define cómo el PT24 envía actualizaciones de posición, eventos de sensores y señales de alarma al servidor.
- Se incluyen datos de identificación e identidad del dispositivo para que Plaspy pueda atribuir los mensajes entrantes al activo correcto.
- La telemetría como manipulación, extracción de SIM, SOS, eventos del sensor G y lecturas del sensor de luz viaja por el mismo canal de reporte para soportar alertas.
- El comportamiento de reporte (intervalos, modos de bajo consumo y disparadores de eventos) interactúa con el protocolo para equilibrar consumo de energía y necesidades de reporte.
- Plaspy recibe estos reportes y los convierte en ubicación en tiempo real, reproducción histórica y funcionalidades de alerta para los usuarios.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de servidor compartido que acepta reportes entrantes de rastreadores y determina el manejo adecuado para cada dispositivo. Cuando un PT24 configurado correctamente apunta al endpoint de Plaspy, la plataforma detectará y procesará automáticamente el protocolo del dispositivo.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la dirección IP del servidor de Plaspy 54.85.159.138.
- Plaspy escucha en el puerto 8888 y usa ese mismo puerto para todos los dispositivos compatibles.
- La plataforma detecta automáticamente el protocolo del rastreador cuando llegan datos al endpoint compartido, por lo que normalmente no es necesario seleccionar manualmente el protocolo en Plaspy.
- La identificación correcta del dispositivo (IMEI o ID de dispositivo) y la configuración correspondiente en el lado del equipo aseguran que la plataforma Plaspy asigne los mensajes correctamente.
- Si un dispositivo no está siendo detectado, verifique la configuración de red, la selección del transporte saliente y la configuración de reporte del firmware en el rastreador.

## Transporte y contexto de conexión

El PT24 soporta métodos estándar de enlace celular y puede configurarse para usar distintas capas de transporte según el firmware y ajustes. Plaspy expone un objetivo de conexión sencillo para que los dispositivos puedan enviar telemetría de forma confiable desde campo.

- El dispositivo puede configurarse para usar transporte UDP o TCP para conectarse a Plaspy.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 tanto para UDP como para TCP; este es el mismo puerto usado por todos los dispositivos soportados por Plaspy.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o directamente a la IP del servidor 54.85.159.138 si no hay DNS disponible.
- La elección del transporte (UDP vs TCP) afecta la fiabilidad y el comportamiento de retransmisión a nivel de red, pero no cambia el rol de alto nivel del protocolo del dispositivo.
- Asegúrese de que el APN y la configuración celular del rastreador permitan conexiones salientes al puerto 8888 y que cualquier firewall del operador permita el transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir, cambiar o eliminar características del protocolo; siempre verifique la versión de firmware del rastreador al validar su comportamiento.
- Las revisiones de hardware y los conjuntos de sensores opcionales pueden afectar qué campos de telemetría están presentes en los reportes.
- Las opciones de configuración por parte del fabricante pueden cambiar nombres de comandos o banderas de eventos; consulte la documentación de iStartek para detalles específicos de firmware.
- La selección del transporte entre UDP y TCP puede configurarse en el dispositivo y debe corresponder con los compromisos entre fiabilidad y consumo de energía previstos.
- Plaspy utiliza el mismo puerto de escucha para todos los dispositivos y detecta automáticamente los protocolos entrantes, pero se requiere la configuración correcta en el dispositivo para la detección.
- Valide la compatibilidad probando un dispositivo en un entorno controlado antes de desplegarlo a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y predecir el comportamiento a largo plazo al usar dispositivos PT24 con Plaspy. Tener una familiaridad básica con cómo se reporta la telemetría y cómo la plataforma la recibe reduce errores de configuración y facilita que los equipos interpreten el estado del dispositivo.

- Acelera la configuración inicial al clarificar qué servidor y ajustes de transporte aplicar en el dispositivo.
- La resolución de problemas de conectividad, reportes faltantes o datos mal atribuidos es más sencilla cuando sabe dónde revisar la configuración de reporte del dispositivo.
- Las decisiones sobre gestión de energía y frecuencia de reporte se basan en cómo el protocolo transporta datos eventuales frente a datos periódicos.
- Conocer las diferencias de firmware y hardware evita sorpresas al desplegar dispositivos a gran escala.
- Permite expectativas más precisas sobre alertas, geocercas y eventos impulsados por sensores en la plataforma en la nube.

## Por qué usar Plaspy con este protocolo

Combinar el PT24 con Plaspy brinda a las organizaciones una vía práctica para convertir telemetría de larga duración y apta para campo en información operativa. Plaspy ingiere la ubicación del PT24, eventos de manipulación, SOS y eventos de sensores, y los expone en paneles, reglas de geocercas y flujos de trabajo de alerta útiles para el bienestar animal, la protección de activos y operaciones remotas.

El enfoque de endpoint compartido de Plaspy mantiene la configuración del dispositivo sencilla: apunte los PT24 a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 con UDP o TCP según lo soportado. Plaspy detecta automáticamente el protocolo del rastreador y aplica el manejo apropiado para que usted pueda concentrarse en reglas, notificaciones y analítica en lugar de en la selección de protocolo por dispositivo.

Learn more about Plaspy on the main website https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific protocol information and firmware notes at the manufacturer site https://istartek.com/.
