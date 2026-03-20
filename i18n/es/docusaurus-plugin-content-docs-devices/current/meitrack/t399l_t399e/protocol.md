---
slug: /meitrack/t399l_t399e/protocol
id: t399l_t399e-protocol
sidebar_label: Protocol
title: Meitrack - T399L/T399E Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo para Meitrack T399L/T399E y su compatibilidad y conexión con Plaspy
keywords:
  - protocolo Meitrack T399L T399E
  - protocolo GPS Meitrack
  - protocolo de rastreo T399L T399E
  - compatibilidad dispositivo Plaspy
  - integración Meitrack Plaspy
  - comunicación rastreador vehicular
  - protocolo rastreo de flotas
  - integración telemetría GNSS
  - T399L OTA FOTA
  - telemetría CAN RS232 RS485
---

# Meitrack - Protocolo T399L/T399E

Esta página explica el contexto público del protocolo para usar los rastreadores vehiculares Meitrack T399L y T399E con Plaspy. El foco está en cómo el dispositivo transmite telemetría útil y eventos a Plaspy, más que en los detalles binarios de los paquetes. La serie T399 es un rastreador robusto con clasificación IP67, diseñado para flotas, logística y vehículos comerciales; aquí se detalla la relación de comunicación entre ese hardware y la plataforma Plaspy.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento mantiene la discusión en un nivel público y práctico, destacando las opciones de conexión y las implicaciones operativas para los despliegues con T399. El modelo T399L también soporta actualizaciones OTA/FOTA, lo que puede modificar el comportamiento del protocolo con el tiempo.

## Visión general del protocolo

El protocolo del T399L/T399E es el mecanismo que transporta las posiciones GNSS, la telemetría del vehículo, las entradas de periféricos y las notificaciones de eventos desde el rastreador hacia Plaspy. En términos prácticos define cómo el dispositivo se identifica, cómo se reportan la posición y los datos de sensores, y cómo se envían eventos (como alarmas o entradas del conductor) al servidor para su procesamiento y visualización.

- Transmite posición GNSS, velocidad, rumbo y hora para seguimiento en tiempo real en Plaspy.
- Envía telemetría del vehículo como parámetros CAN, lecturas de sensores de combustible y estados de E/S.
- Reporta notificaciones de eventos por conducción brusca, colisiones, activaciones de geocerca y otras alarmas.
- Permite la identificación y metadatos básicos del dispositivo para que Plaspy asocie la información al activo correcto de la flota.
- Soporta telemetría de periféricos y sensores como sensores Bluetooth, RFID y entradas externas para que datos ambientales y de acceso lleguen a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint común y determina automáticamente el manejador de protocolo apropiado para los rastreadores soportados. Para la mayoría de usuarios esto significa que no es necesario seleccionar manualmente el protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El nombre de host del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 para entornos que requieren un endpoint numérico.
- Plaspy escucha en el puerto 8888, el mismo puerto utilizado por todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según capacidades del equipo y condiciones de red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente dirigido al endpoint y puerto de la plataforma.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el rastreador envía sus mensajes de protocolo a Plaspy, pero no modifican el propósito general del protocolo. La serie T399 soporta conectividad celular de varias generaciones y selección flexible de transporte, lo que facilita su funcionamiento en entornos con distintas limitaciones de red.

- El dispositivo puede configurarse para usar UDP en el puerto 8888 para reportes de baja sobrecarga.
- El dispositivo puede configurarse para usar TCP en el puerto 8888 para reportes orientados a sesión y mayor fiabilidad.
- Los dispositivos pueden apuntar al nombre de host d.plaspy.com o directamente a la IP 54.85.159.138 cuando el DNS esté restringido.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888, lo que simplifica la configuración del servidor y las reglas de firewall.
- La selección de transporte puede verse influenciada por la red del operador, políticas de firewall y opciones del firmware del equipo.

## Notas sobre compatibilidad del protocolo

- Las diferencias entre versiones de firmware pueden modificar los campos de telemetría disponibles, el nombre de eventos y funciones opcionales.
- Revisión de hardware o variantes regionales del modelo pueden exponer interfaces de periféricos o soporte de sensores distintos.
- Las configuraciones por defecto del fabricante (por ejemplo transporte predeterminado o intervalo de reporte) pueden variar y deben verificarse antes del despliegue.
- Elegir UDP o TCP afecta las características de entrega pero no cambia los tipos de datos de alto nivel que el rastreador reporta.
- Valide la compatibilidad y la disponibilidad de funciones con la documentación específica del dispositivo proporcionada por Meitrack para su modelo y firmware exactos.
- Plaspy acepta reportes en el endpoint y puerto compartidos y detecta el protocolo automáticamente cuando el dispositivo está correctamente configurado para reportar a Plaspy.

## Por qué es importante entender el protocolo

Comprender cómo el rastreador se comunica con Plaspy ayuda a asegurar una configuración correcta, agilizar la resolución de problemas y garantizar un funcionamiento predecible a largo plazo de los sistemas de flota. Saber cómo se entregan los reportes, qué transporte se usa y cómo el firmware influye en la salida de datos ahorra tiempo durante el despliegue y al investigar anomalías.

- Garantiza la configuración adecuada del dispositivo para que la posición, la telemetría y los eventos lleguen a Plaspy de forma fiable.
- Facilita acotar pasos de diagnóstico cuando faltan datos o son inconsistentes, por ejemplo transporte, red o ajustes del dispositivo.
- Orienta las expectativas sobre disponibilidad de funciones al planear integraciones que dependan de CAN, sensores de combustible o periféricos Bluetooth.
- Ayuda en la planificación de mantenimiento, dado que las actualizaciones OTA/FOTA y cambios de firmware pueden alterar el comportamiento de reporte con el tiempo.
- Simplifica la configuración de firewall y de red al centralizar en el único endpoint y puerto de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Meitrack T399L o T399E con Plaspy ofrece a los operadores de flota una vía práctica para obtener visibilidad en tiempo real, flujos de trabajo basados en telemetría y supervisión operativa. La combinación de hardware robusto, conectividad celular multi generación y amplio soporte de periféricos alimenta a la plataforma Plaspy con la posición y los datos de sensores necesarios para seguimiento en vivo, alertas de seguridad, análisis de combustible y protección de activos. El modelo de endpoint compartido de Plaspy y la detección automática del protocolo permiten concentrarse en desplegar los dispositivos en lugar de en configuraciones manuales de protocolo.

Learn more about how Plaspy handles device communications and fleet management at https://www.plaspy.com. For the most current firmware specific protocol details, transport options and device implementation notes verify the official Meitrack documentation at https://www.meitrack.com/ as manufacturer behavior can change with firmware and model revisions.
