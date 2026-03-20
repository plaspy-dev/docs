---
slug: /eelink/gpt48x/protocol
id: gpt48x-protocol
sidebar_label: Protocol
title: EElink - GPT48‑X Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar EElink GPT48‑X con Plaspy, abarcando conectividad, opciones de transporte y compatibilidad
keywords:
  - protocolo EElink GPT48‑X
  - protocolo GPS EElink GPT48‑X
  - protocolo de comunicación EElink GPT48‑X
  - protocolo de rastreador EElink
  - compatibilidad GPT48‑X Plaspy
  - protocolo rastreador GPS Plaspy
  - protocolo EELINK
  - rastreo de activos GPT48‑X
  - GPT48‑X larga autonomía
  - GPT48‑X LTE Cat M NB‑IoT
---

# EElink - Protocolo GPT48‑X

Esta página resume el contexto público del protocolo para usar el rastreador EElink GPT48‑X con Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué ajustes de conexión son recomendables para Plaspy y qué consideraciones a nivel de protocolo afectan la integración y operación. Está dirigida a usuarios técnicos que necesitan una visión clara de cómo Plaspy recibe los datos del GPT48‑X.

El GPT48‑X es un rastreador GPS de larga espera diseñado para el seguimiento durable de activos, con conectividad LTE Cat‑M y NB‑IoT, posicionamiento multi‑GNSS y una carcasa robusta IP67. Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Valide siempre los detalles específicos del dispositivo con EElink antes de planificar un despliegue.

## Visión general del protocolo

La implementación del protocolo EELINK en el GPT48‑X dota al dispositivo de un formato estandarizado para reportar ubicaciones GNSS, estado del equipo y notificaciones de eventos a un backend como Plaspy. El protocolo define cómo el rastreador presenta telemetría e información de eventos para que el servidor receptor pueda interpretar y mostrar datos de estado y ubicación sin requerir un parseo manual adicional por parte del usuario.

- Permite que el rastreador envíe posiciones GNSS y telemetría para la ingestión por Plaspy
- Comunica identidad y estado del dispositivo para que Plaspy asocie los mensajes con el activo correcto
- Transporta indicadores de eventos y alarmas como manipulación, activación por vibración y reportes de emergencia para disparar alertas
- Soporta configuración remota y control de firmware OTA vía plataforma o SMS cuando está implementado
- Proporciona un flujo de datos consistente que Plaspy puede mapear a elementos del panel, reglas de geocercas e informes históricos

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo de rastreador usado por dispositivos compatibles como el GPT48‑X. En la mayoría de los casos, un rastreador correctamente configurado que reporte al endpoint de Plaspy será identificado automáticamente, por lo que usted no necesita seleccionar manualmente un protocolo dentro de Plaspy.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El endpoint de Plaspy escucha en el puerto 8888 para conexiones de rastreadores soportados
- Los dispositivos pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos
- Con el dispositivo apuntando al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador

## Transporte y contexto de conexión

La elección del transporte y la correcta configuración del endpoint son esenciales para un reporte confiable. El GPT48‑X soporta enlaces celulares de baja potencia y puede configurarse para enviar datos por UDP o TCP según las necesidades del despliegue y las opciones de firmware. Apuntar correctamente el dispositivo al endpoint de Plaspy garantiza que la telemetría llegue a la plataforma para su parseo y visualización.

- El reporte del dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador y el soporte de la red
- Los dispositivos pueden apuntar al host de reporte Plaspy d.plaspy.com o directamente a 54.85.159.138
- Usar el endpoint canónico y el puerto de Plaspy evita cambios de puerto por dispositivo, ya que todos usan el mismo puerto
- Elija el transporte según la fiabilidad de la red y las consideraciones de consumo de batería para enlaces LTE Cat‑M o NB‑IoT
- Confirme la compatibilidad del operador y de la red regional para LTE Cat‑M y NB‑IoT antes de despliegues a gran escala

## Notas sobre compatibilidad del protocolo

- El protocolo EELINK es la familia de protocolos públicos referenciada para la compatibilidad del GPT48‑X con Plaspy según la descripción proporcionada
- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y las opciones de configuración; consulte las notas de firmware al solucionar problemas
- Las revisiones de hardware o SKU regionales pueden alterar las bandas celulares soportadas y el comportamiento de los intervalos de reporte
- La selección del modo de transporte (UDP vs TCP) puede afectar la fiabilidad de entrega y el consumo de batería; elija el modo que se alinee con su cobertura y objetivos de autonomía
- Las opciones de configuración remota, como ajustes desde la plataforma, configuración por app móvil o control por SMS, varían según firmware y la configuración del proveedor
- Valide cualquier integración adicional de sensores, opciones de E/S o interfaces de inmovilizador con el fabricante antes de asumir disponibilidad

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GPT48‑X ayuda a asegurar una configuración correcta, operación confiable y resolución eficaz de problemas al integrar dispositivos en Plaspy. Entender el comportamiento a nivel de protocolo reduce la incertidumbre durante el despliegue y permite afinar la frecuencia de reportes para equilibrar capacidad de respuesta y duración de batería.

- Facilita la incorporación más rápida porque puede apuntar los dispositivos al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad que provienen de la elección del transporte o de la configuración del endpoint
- Permite configurar modos de reporte para optimizar la batería sin sacrificar el reporte de emergencias críticas
- Asegura que campos de evento como manipulación, vibración y banderas de emergencia se interpreten correctamente en las reglas de Plaspy
- Prepara a los equipos de operaciones para diferencias de firmware y hardware que afectan la fiabilidad a largo plazo

## Por qué usar Plaspy con este protocolo

Integrar el GPT48‑X con Plaspy ofrece a las organizaciones una forma práctica de monitorear activos de largo plazo con bajo mantenimiento. Plaspy ingiere posiciones multi‑GNSS, telemetría y señales de eventos del rastreador y las presenta mediante alertas, geocercas e informes históricos adecuados para flotas, contenedores y gestión de activos.

Dado que Plaspy usa un endpoint y puerto compartidos y detecta automáticamente los protocolos de rastreadores soportados, los equipos pueden desplegar dispositivos GPT48‑X a escala con menos ajustes por unidad que administrar. Para más detalles sobre las funcionalidades de Plaspy y las capacidades de la plataforma, consulte https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más actual del protocolo y firmware del fabricante en https://www.eelink.com.cn/.
