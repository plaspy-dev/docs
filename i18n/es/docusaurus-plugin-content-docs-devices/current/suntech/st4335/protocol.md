---
slug: /suntech/st4335/protocol
id: st4335-protocol
sidebar_label: Protocol
title: Suntech - ST4335 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público del Suntech ST4335 y cómo comunica con Plaspy para rastreo de flotas y telemetría
keywords:
  - protocolo Suntech ST4335
  - rastreador GPS Suntech ST4335
  - compatibilidad Suntech ST4335
  - integración Suntech Plaspy
  - telemetría ST4335
  - conectividad ST4335
  - rastreo de flotas Suntech ST4335
  - despliegues a largo plazo ST4335
  - rastreo de vehículos Suntech
  - protocolo de Suntech
---

# Suntech - Protocolo ST4335

Esta página documenta el contexto público del protocolo para usar el rastreador Suntech ST4335 con Plaspy. Aquí se explica cómo el dispositivo se comunica con Plaspy para reportes de posición en tiempo real, detección de movimiento y telemetría, y se ofrece orientación práctica para configurar la conectividad sin exponer detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según el firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se enfoca en el contexto de conexión y compatibilidad que facilita la integración y la resolución de problemas.

## Visión general del protocolo

El protocolo de comunicación del ST4335 define cómo el rastreador se identifica y transmite información GNSS, estados de sensores y E/S a un servidor remoto como Plaspy. En la práctica, este protocolo permite a Plaspy recibir actualizaciones de ubicación oportunas, eventos de movimiento y telemetría auxiliar que se usan para mapas, alertas e informes.

- Permite al rastreador enviar posición GNSS, eventos del acelerómetro y estados de E/S a un servidor backend.
- Transporta reportes periódicos o activados por eventos que se utilizan para mapas en vivo y registros históricos en Plaspy.
- Admite modos de telemetría condicionales o de bajo consumo que equilibran la duración de batería y la frecuencia de actualización.
- Proporciona los elementos de datos necesarios para que Plaspy interprete alertas de geocercas, detección virtual de ignición y telemetría de sensores.
- Actúa como puente entre los sensores del dispositivo y los paneles de Plaspy sin requerir middleware personalizado cuando se configura correctamente.

## Cómo Plaspy detecta el protocolo

Plaspy acepta telemetría entrante en un único endpoint y puerto compartido para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando este reporta a dicho endpoint. Esto simplifica la configuración porque, por lo general, usted no necesita seleccionar un protocolo dentro de Plaspy cuando el dispositivo apunta al servidor de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha las conexiones de dispositivos en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que se recibe telemetría válida del dispositivo en el endpoint.
- Cuando un dispositivo está configurado correctamente para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar manualmente un protocolo en la plataforma.
- Si un dispositivo no es detectado automáticamente, verifique la configuración de reporte del dispositivo, la selección de transporte y la documentación del fabricante para comportamientos específicos del firmware.

## Contexto de transporte y conexión

El ST4335 soporta enlaces de datos TCP y UDP estándar y puede configurarse para usar uno u otro transporte según el firmware del dispositivo y las necesidades del despliegue. Para la integración con Plaspy, los detalles importantes de conexión son el endpoint compartido de Plaspy y el puerto único usado por todos los dispositivos.

- El dispositivo puede configurarse para reportar vía UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al servidor Plaspy por nombre de dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los rastreadores compatibles, por lo que no se requieren cambios de puerto por dispositivo en el servidor.
- La elección del transporte puede afectar el comportamiento de entrega bajo ciertas condiciones de red; seleccione el transporte que corresponda con su despliegue y las recomendaciones de firmware.
- Asegúrese de que el APN y la conectividad celular estén configurados correctamente para LTE Cat M1, NB-IoT o fallback 2G, de modo que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- El ST4335 es compatible con Plaspy cuando está configurado para enviar telemetría al endpoint de Plaspy, pero la temporización exacta de los mensajes y los modos de reporte soportados dependen del firmware del dispositivo.
- Las revisiones de hardware o las variantes específicas de mercado del ST4335 pueden modificar las bandas disponibles, el comportamiento de E/S o características opcionales como Bluetooth.
- La selección de transporte entre TCP y UDP es configurable en el dispositivo y debe coincidir con lo que el firmware soporta para un reporte fiable.
- El reporte condicional, los modos de bajo consumo y la detección virtual de ignición pueden comportarse de forma distinta según la versión de firmware y deben validarse durante el despliegue.
- Los pasos de configuración del fabricante, como APN, dirección del servidor y intervalos de reporte, deben configurarse en el rastreador para garantizar que los datos lleguen a Plaspy.
- Siempre valide la compatibilidad y la disponibilidad de funciones contra la documentación actual del fabricante y las notas de la versión del firmware del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y garantizar la estabilidad a largo plazo de los servicios de rastreo en Plaspy. Saber cómo reporta el dispositivo, qué transporte utiliza y qué elementos de datos incluye reduce la fricción de integración y mejora los resultados operativos.

- Acelera la configuración inicial al dejar claro qué servidor, transporte y puerto debe usar el dispositivo.
- Facilita la resolución de problemas de conectividad al acotar el alcance a transporte, APN o alcance del servidor.
- Apoya la optimización de la vida útil de la batería al alinear los modos de reporte y el reporte condicional con los requisitos operativos.
- Permite la interpretación correcta de telemetría como ignición virtual, eventos del acelerómetro y entradas de sensores en Plaspy.
- Reduce el riesgo en los despliegues cuando se conocen y consideran las diferencias de firmware o variantes de dispositivo.

## Por qué usar Plaspy con este protocolo

Combinado con Plaspy, el ST4335 ofrece visibilidad robusta para flotas y activos que operan en entornos exigentes. La conectividad celular multinetwork del rastreador, el posicionamiento GNSS y las E/S configurables, junto con los mapas en vivo, alertas e informes de Plaspy, brindan supervisión operativa práctica para gerentes de flota y equipos de telemetría.

Plaspy simplifica la incorporación de dispositivos al usar un único endpoint y puerto para todos los rastreadores compatibles y detectar automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Para conocer más sobre Plaspy y cómo admite integraciones de dispositivos, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la guía del fabricante en el sitio oficial de Suntech http://www.suntechint.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
