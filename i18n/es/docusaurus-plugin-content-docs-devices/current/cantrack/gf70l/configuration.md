---
slug: /cantrack/gf70l/configuration
id: gf70l-configuration
sidebar_label: Configuration
title: CanTrack - GF70L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para apuntar un CanTrack GF70L a los servidores de Plaspy y habilitar su monitoreo en la plataforma
keywords:
  - Configuración CanTrack GF70L
  - Instalación CanTrack GF70L
  - CanTrack GF70L Plaspy
  - Configuración rastreador GF70L
  - Configuración rastreador GPS CanTrack
  - Configuración servidor Plaspy
  - Instalación rastreador de activos GPS
  - Configuración plataforma GF70L
  - seguimiento vehicular GF70L
  - Configuración rastreador solar GF70L
---

# CanTrack - Configuración GF70L

Esta página documenta el contexto público de configuración para usar el rastreador CanTrack GF70L con Plaspy. Resume los ajustes del servidor Plaspy que debe aplicar en el dispositivo o en la herramienta de configuración del proveedor, explica el flujo típico de trabajo y destaca notas prácticas que le ayudarán a confirmar que el rastreador aparece en Plaspy. Utilice esta guía junto con el manual del dispositivo para los pasos detallados específicos de la interfaz del usuario.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el equipo comienza a enviar datos. Los pasos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que siga la documentación del GF70L al aplicar estos ajustes compartidos de Plaspy.

## Resumen de la configuración

El objetivo de la configuración es apuntar su GF70L a Plaspy para que el dispositivo reporte ubicación y estado a la plataforma y aparezca en su cuenta de Plaspy. Esto implica actualizar el endpoint y el puerto del servidor en el rastreador usando la herramienta oficial de CanTrack o el método de configuración soportado, y luego verificar que el dispositivo reporte correctamente.

- Configure el GF70L para enviar datos al endpoint del servidor de Plaspy.
- Seleccione la opción de transporte apropiada (UDP o TCP) si el dispositivo lo requiere.
- Confirme que el dispositivo tenga energía y esté alcanzable durante la configuración.
- Guarde y aplique los ajustes en la herramienta del fabricante y reinicie el dispositivo si es necesario.
- Valide que el rastreador aparezca y reporte eventos en Plaspy.

## Ajustes del servidor de Plaspy

- El dominio del servidor d.plaspy.com debe ingresarse como host de destino.
- La IP del servidor 54.85.159.138 es el endpoint numérico que puede usarse donde se requiera una dirección IP.
- El puerto 8888 es el que Plaspy usa para todos los dispositivos soportados y debe configurarse en el rastreador.
- El transporte soportado puede ser UDP o TCP; configure el que el dispositivo requiera.
- Plaspy detecta automáticamente el protocolo del rastreador después de que el dispositivo empiece a enviar datos al servidor.

## Requisitos previos habituales

- El GF70L debe estar cargado y encendido para aceptar la configuración y transmitir estado.
- Acceso al método oficial de configuración del CanTrack GF70L, como la herramienta web del proveedor, la aplicación móvil o la interfaz SMS/por software que facilite el fabricante.
- Conocimiento de los ajustes del servidor Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Un método de conectividad de red habilitado en el dispositivo y verificado mediante el procedimiento de prueba del fabricante.
- Una ubicación de instalación operativa para el rastreador que garantice antenas y paneles solares correctamente orientados durante la validación.
- Acceso a la cuenta de Plaspy o a los detalles de aprovisionamiento para confirmar la visibilidad del dispositivo una vez que empiece a reportar.

## Cómo se conecta este rastreador a Plaspy

Cuando el GF70L se configura con los ajustes de Plaspy, envía sus actualizaciones periódicas, alertas y mensajes de estado al endpoint y puerto del servidor configurados en el dispositivo. Plaspy recibe estos mensajes y muestra la ubicación del dispositivo, el historial de eventos y las alarmas en la plataforma.

- El rastreador envía mensajes al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138 por el puerto 8888.
- El equipo puede configurarse para usar UDP o TCP como mecanismo de transporte de esos mensajes.
- Plaspy detecta automáticamente el protocolo y procesa los datos entrantes para atribuir el dispositivo.
- Eventos reportados como movimiento, batería baja, transiciones de geocerca y alarmas por vibración se reflejan en la plataforma.
- Tras la configuración, el dispositivo queda visible para monitoreo operativo y reproducción de historial en Plaspy.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración del CanTrack GF70L proporcionado por el fabricante.
2. En la pantalla de configuración del dispositivo, ingrese el host del servidor Plaspy como d.plaspy.com o, de manera alternativa, la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, teniendo en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Elija la opción de transporte UDP o TCP si el dispositivo solicita seleccionar uno.
5. Aplique o guarde la configuración en la herramienta del fabricante.
6. Reinicie el GF70L si el dispositivo requiere un reboot para activar los nuevos ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del equipo y la telemetría reciente en la plataforma Plaspy.

## Ejemplo de comandos de configuración

Este archivo de configuración modelo no incluye cadenas de comandos específicas del dispositivo. La sintaxis exacta de los comandos y los pasos de configuración varían según el firmware de CanTrack y la interfaz de configuración del fabricante. Use la herramienta oficial de CanTrack o las instrucciones del manual del GF70L para establecer el host del servidor en d.plaspy.com (o 54.85.159.138) y el puerto 8888, y seleccione UDP o TCP según lo requiera el dispositivo.

Si utiliza una interfaz de línea de comandos o SMS proporcionada por el fabricante, siga la documentación del GF70L para conocer el formato exacto de los comandos y los marcadores de posición que esa metodología requiera.

## Notas sobre la configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar dónde y cómo se ingresan los ajustes del servidor; consulte el manual del GF70L para la sintaxis exacta de la interfaz o los comandos.
- La selección entre TCP y UDP puede afectar el comportamiento de entrega; elija el transporte que el dispositivo soporte y pruebe la confiabilidad del reporte.
- La carga solar y el estado de la batería pueden influir en los intervalos de reporte durante las pruebas iniciales; asegúrese de que la unidad tenga energía adecuada.
- Las prácticas de instalación y la orientación del montaje pueden afectar la recepción de señal y deben validarse durante el primer ciclo de reportes.
- Confirme siempre el identificador final del dispositivo y las marcas de tiempo de los reportes en Plaspy para asegurar el mapeo correcto a su cuenta.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack GF70L con Plaspy ofrece una vía de configuración simple basada en servidores compartidos para que la telemetría de activos y los datos de eventos aparezcan en una sola plataforma para monitoreo y análisis histórico. Apuntar el GF70L a Plaspy con los mismos valores de servidor y puerto reduce la complejidad al incorporar dispositivos de múltiples fabricantes.

To learn more about Plaspy and how it can support your fleet and asset tracking needs visit https://www.plaspy.com. For the latest device specific configuration steps, firmware notes, and installation guidance consult the manufacturer at https://www.cantrackgps.com/ since setup methods and firmware behavior can change over time.
