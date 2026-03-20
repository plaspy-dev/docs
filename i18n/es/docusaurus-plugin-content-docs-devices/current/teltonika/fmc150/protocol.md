---
slug: /teltonika/fmc150/protocol
id: fmc150-protocol
sidebar_label: Protocol
title: Teltonika - FMC150 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Teltonika FMC150 con Plaspy mediante ajustes de conexión compartidos y detección automática
keywords:
  - Protocolo Teltonika FMC150
  - Protocolo GPS FMC150
  - Teltonika FMC150 Plaspy
  - Protocolo de comunicación FMC150
  - Protocolo rastreador GPS vehicular
  - Telemetría CAN FMC150
  - Compatibilidad dispositivo Plaspy
  - Rastreo de flotas FMC150
  - Telemetría EV FMC150
  - Protocolo rastreador Teltonika
---

# Teltonika - Protocolo FMC150

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC150 con Plaspy. Explica cómo el dispositivo envía en términos generales la telemetría y los datos del bus CAN derivados del vehículo a Plaspy, y qué debe verificar al configurar una implementación. El contenido se centra en el contexto de protocolo público y no sensible, más que en formatos internos de paquetes o detalles de firmware.

El FMC150 es un rastreador compatible con Plaspy que transmite posición GPS y telemetría CAN detallada a Plaspy para monitoreo de flotas, mantenimiento preventivo y flujos de trabajo anti robo. Plaspy utiliza un endpoint y ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware del FMC150, la revisión de hardware, la opción regional del módulo y la implementación del fabricante, por lo que siempre valide el comportamiento del dispositivo con la documentación de Teltonika cuando sea necesario.

## Descripción general del protocolo

El rol del protocolo del FMC150 en una implementación con Plaspy es establecer un canal de transporte confiable, identificar el dispositivo y entregar telemetría estructurada que Plaspy pueda mapear en paneles y alertas. Esto se logra mediante el envío por parte del rastreador de mensajes periódicos y basados en eventos que contienen ubicación GNSS además de parámetros derivados del bus CAN, datos de sensores accesorios y campos de estado.

- Permite la entrega continua de ubicación GPS y valores de parámetros CAN desde el rastreador hacia Plaspy.
- Proporciona identificación del dispositivo y metadatos de estado para que Plaspy asocie los mensajes con el registro de activo correcto.
- Transporta diagnósticos derivados del CAN como información de motor, batería, carga y métricas específicas de vehículos eléctricos cuando están configurados.
- Soporta telemetría de accesorios provenientes de beacons Bluetooth y sensores para reportes de proximidad y condiciones ambientales.
- Permite reportes de eventos para alarmas, activaciones de geocercas y cambios de movimiento o entradas que Plaspy puede usar para generar alertas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes de dispositivos en un endpoint compartido y usa detección automática para identificar el protocolo del rastreador, por lo que usted normalmente no necesita seleccionar un protocolo manualmente en Plaspy. La configuración correcta del dispositivo para apuntar a Plaspy es el requisito principal para que la detección e ingestión funcionen.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta.
- El FMC150 puede configurarse para reportar directamente al endpoint de Plaspy de modo que los mensajes se ingieran y se asignen a la cuenta de flota.
- Si un dispositivo está configurado correctamente, usted generalmente no necesita elegir un protocolo dentro de Plaspy para la ingestión básica de mensajes.
- La detección cubre tanto reportes periódicos de posición como telemetría CAN impulsada por eventos, de modo que Plaspy puede presentar los datos en paneles y alertas.

## Contexto de transporte y conexión

El FMC150 soporta transportes celulares comunes y puede apuntar a Plaspy usando nombre de dominio o dirección IP. La elección del transporte y el comportamiento de red del dispositivo se controlan mediante la configuración del dispositivo y el firmware instalado, por lo que confirme los ajustes de su FMC150 antes del despliegue.

- Los dispositivos pueden configurarse para enviar datos por UDP o TCP en el puerto 8888 según el soporte del dispositivo y los ajustes elegidos.
- Plaspy acepta conexiones en el puerto 8888; este es el mismo puerto usado por todos los dispositivos soportados por Plaspy.
- Los rastreadores pueden resolver y reportar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- La confiabilidad de la red, la configuración del APN y las variantes regionales del módulo (4G LTE Cat 1 con retroceso a 2G) afectan el rendimiento del transporte y deben validarse en campo.
- Si cambia el modo de transporte (UDP vs TCP) en el dispositivo, confirme la conectividad con el endpoint de Plaspy y que los mensajes estén llegando a su cuenta de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar qué parámetros CAN y campos de telemetría están disponibles desde el FMC150.
- Las variantes regionales del módulo celular y las bandas de red pueden afectar el comportamiento de conectividad; valide el APN y los ajustes de red para cada SKU.
- Las herramientas de configuración del fabricante, como Teltonika configurator y los servicios FOTA, pueden modificar los valores predeterminados del dispositivo y deben consultarse para el aprovisionamiento.
- La selección del transporte (UDP o TCP) es configurable en el dispositivo; elija el modo que mejor se ajuste a sus requisitos de red y confiabilidad.
- Al integrar conjuntos avanzados de parámetros CAN o paquetes específicos para vehículos eléctricos, confirme que el firmware del dispositivo expone los parámetros deseados.
- Siempre valide al menos un dispositivo de prueba de extremo a extremo con Plaspy antes de un despliegue masivo para confirmar el mapeo de telemetría y el comportamiento.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el FMC150 ayuda a garantizar una configuración confiable, una resolución de problemas eficiente y una operación consistente a largo plazo dentro de Plaspy. Conocer el contexto de conexión y qué reporta el rastreador reduce errores de configuración y acelera la resolución de problemas de conectividad o mapeo de datos.

- Ayuda a verificar la accesibilidad del dispositivo al endpoint del servidor Plaspy y a resolver problemas de red más rápidamente.
- Permite la selección y configuración correcta del modo de transporte (UDP o TCP) y de los ajustes APN para la conectividad celular.
- Facilita la resolución cuando los campos de telemetría esperados en Plaspy no aparecen debido a diferencias de firmware o paquetes de parámetros.
- Apoya la planificación para flotas mixtas y despliegues EV al aclarar qué parámetros CAN se entregan.
- Mejora las prácticas de seguridad y operación al confirmar que los dispositivos apuntan al endpoint de Plaspy previsto.

## Por qué usar Plaspy con este protocolo

Combinar el Teltonika FMC150 con Plaspy ofrece a las organizaciones una vía práctica para unificar rastreo GPS, diagnósticos del bus CAN y datos de sensores accesorios en una sola plataforma telemática. El procesamiento CAN incorporado del FMC150 y su soporte para paquetes de parámetros EV lo hacen especialmente útil cuando se requiere telemetría vehicular detallada junto con el rastreo de ubicación.

El modelo de endpoint compartido de Plaspy simplifica el aprovisionamiento de la flota al usar un único host y puerto para todos los dispositivos y detectar automáticamente el protocolo del rastreador, de modo que usted pueda centrarse en los flujos de trabajo en lugar de en la selección manual de protocolos. To learn more about Plaspy, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.teltonika-gps.com/.
