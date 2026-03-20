---
slug: /teltonika/fmb001/protocol
id: fmb001-protocol
sidebar_label: Protocol
title: Teltonika - FMB001 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Teltonika FMB001 y cómo comunica datos con Plaspy
keywords:
  - protocolo Teltonika FMB001
  - protocolo GPS Teltonika FMB001
  - comunicación Teltonika FMB001
  - compatibilidad FMB001 Plaspy
  - protocolo rastreador GPS
  - protocolo rastreador OBD II
  - integración Bluetooth LE
  - protocolo seguimiento vehicular
  - rastreador gestión de flotas
  - integración Teltonika Plaspy
---

# Teltonika - Protocolo FMB001

En esta página se describe el contexto público del protocolo para usar el Teltonika FMB001 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel más que en detalles de implementación. El FMB001 es un rastreador en formato OBD II que ofrece posicionamiento GNSS además de telemetría OBD real como odómetro, nivel de combustible, kilometraje y RPM del motor, y puede reenviar datos de sensores Bluetooth LE para temperatura, humedad, detección magnética y movimiento.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Configure los equipos compatibles para que reporten al endpoint de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138 en el puerto 8888. El FMB001 puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y el entorno de red. El comportamiento exacto del protocolo puede variar según la revisión de firmware, la variante de hardware y la implementación del fabricante, por lo que conviene verificar los detalles del dispositivo cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación establece las reglas que usa el FMB001 para enviar telemetría y datos de sensores a un servidor remoto como Plaspy. En términos públicos, el protocolo define cómo el dispositivo transmite la ubicación, lecturas OBD y actualizaciones de sensores Bluetooth LE para que Plaspy las procese en seguimiento en tiempo real e informes históricos.

- Permite la entrega de posición GNSS y telemetría OBD del FMB001 a Plaspy para seguimiento en vivo y análisis
- Transporta datos de sensores Bluetooth LE recogidos por el dispositivo para que eventos ambientales y de movimiento estén disponibles en Plaspy
- Proporciona el contexto de datos necesario para que Plaspy asocie identificadores del vehículo, datos de viaje y métricas de telemetría con el activo correcto
- Admite el envío de reportes periódicos y actualizaciones por eventos según la configuración del dispositivo y el comportamiento del firmware
- Funciona junto con las herramientas de gestión de dispositivos Teltonika, como FOTA WEB y Teltonika Configurator, para flujos de firmware y configuración

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos las conexiones entrantes de rastreadores y detecta automáticamente el protocolo de reporte utilizado por los dispositivos compatibles. Esto reduce la configuración manual dentro de la plataforma cuando un rastreador apunta correctamente al endpoint de Plaspy.

- Configure el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según lo soporte el rastreador y la red
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el despliegue y la configuración de firewalls
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma identifica automáticamente el protocolo del dispositivo, por lo que por lo general no es necesario seleccionar el protocolo manualmente en Plaspy
- Tras un reporte exitoso, Plaspy asocia la telemetría entrante con el activo registrado para seguimiento e historial

## Contexto de transporte y conexión

El contexto de transporte y conexión describe cómo el FMB001 llega al servidor Plaspy a través de la red. A alto nivel, el rastreador debe poder establecer conexiones salientes al endpoint de Plaspy usando el transporte que soporte el equipo y permita la red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la política de la red local
- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, lo que simplifica las reglas de red y firewall para flotas
- Elija el tipo de transporte que coincida con la configuración del dispositivo y las restricciones del operador o firewall
- Verifique que la red del vehículo o del operador permita tráfico saliente al endpoint y puerto de Plaspy para asegurar un reporte confiable

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría están disponibles o cómo se reportan ciertos parámetros OBD
- Las variantes de hardware y los códigos de pedido regionales pueden afectar bandas celulares y el soporte de accesorios como sensores BLE
- El estado de fin de vida (EOL) de un modelo puede influir en actualizaciones de firmware y compatibilidad a largo plazo; consulte los avisos del fabricante
- La elección de transporte UDP versus TCP puede estar limitada por el operador o el firmware del dispositivo y debe seleccionarse en consecuencia
- Herramientas de configuración del fabricante, como Teltonika Configurator y FOTA WEB, interactúan con la configuración del dispositivo y pueden cambiar el comportamiento de reporte
- Siempre valide la compatibilidad del dispositivo con la documentación más reciente de Teltonika y los requisitos de su despliegue en Plaspy

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración correcta, una ingestión de telemetría fiable y una resolución efectiva de problemas cuando se usa el FMB001 con Plaspy. Saber qué datos puede y no puede enviar el rastreador permite ajustar expectativas y diseñar flujos operativos adecuados.

- Asegura que usted configure el dispositivo para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte preferido
- Ayuda a confirmar qué campos OBD y BLE estarán disponibles en Plaspy para análisis y alertas
- Facilita el diagnóstico de problemas de conectividad relacionados con transporte, bloqueo de puertos o restricciones del operador
- Aclara cómo cambios de firmware o configuración pueden afectar la frecuencia de reporte y la disponibilidad de datos
- Apoya la planificación del ciclo de vida del dispositivo, incluidas actualizaciones de firmware y reemplazos para modelos EOL

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMB001 con Plaspy ofrece a las organizaciones una vía directa para combinar ubicación GNSS del vehículo, telemetría OBD autenticada e inputs de sensores Bluetooth LE en una única vista operativa. El formato OBD plug and play acelera los despliegues y la telemetría del dispositivo puede alimentar cronogramas de mantenimiento, monitoreo de combustible y alertas de movimiento en Plaspy.

Para saber más sobre cómo Plaspy funciona con dispositivos como el FMB001, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, verifique la información con Teltonika en https://www.teltonika-gps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
