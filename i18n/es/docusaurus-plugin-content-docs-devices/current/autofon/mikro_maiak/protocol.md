---
slug: /autofon/mikro_maiak/protocol
id: mikro_maiak-protocol
sidebar_label: Protocol
title: AutoFon - Микро-Маяк + Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para AutoFon Микро‑Маяк + e integración con Plaspy para seguimiento en tiempo real
keywords:
  - Protocolo AutoFon Микро‑Маяк +
  - Protocolo AutoFon Micro Beacon Plus
  - Compatibilidad rastreador GPS AutoFon con Plaspy
  - Protocolo de comunicación Микро‑Маяк +
  - Protocolo de reporte de rastreador GPS
  - Integración de dispositivos Plaspy
  - Rastreo de vehículos AutoFon
  - Protocolo para seguimiento de flotas
  - Protocolo para rastreadores antirrobo
  - Configuración de conexión del protocolo del rastreador
---

# AutoFon - Микро-Маяк + Protocolo

Esta página resume el contexto público y no sensible del protocolo para usar el AutoFon Микро‑Маяк + (Micro‑Beacon Plus) con la plataforma Plaspy. Explica cómo este rastreador GPS compacto se comunica con los servidores de Plaspy, qué revisar durante la puesta en marcha y cómo el comportamiento del protocolo puede afectar la recepción de reportes, las alertas y la telemetría histórica en Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página se centra en orientaciones prácticas y de alto nivel, no en detalles internos de firmware o formatos de paquete.

## Visión general del protocolo

El protocolo de comunicación del Микро‑Маяк + define cómo el dispositivo se identifica, transmite coordenadas GNSS y telemetría, y reporta eventos como movimiento, manipulación, nivel de batería y temperatura a un servidor de monitoreo. Cuando se configura para reportar a Plaspy, el protocolo actúa como puente entre los sensores a bordo y los servicios en tiempo real e históricos de Plaspy.

- Permite envíos periódicos y por eventos de ubicación y telemetría desde el dispositivo hacia el servidor de monitoreo.
- Incluye información de identificación y estado para que Plaspy pueda asociar los reportes entrantes con el registro de dispositivo correcto.
- Soporta comportamiento de búfer y reenvío que ayuda a conservar el historial durante cortes temporales de red.
- Traduce eventos del dispositivo (movimiento, manipulación, batería, temperatura) en telemetría interpretable por los paneles y alertas de Plaspy.
- Opera sobre canales celulares estándar para que el rastreador se integre con el monitoreo centralizado sin túneles propietarios.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de dispositivos en un único endpoint compartido y reconoce automáticamente el formato de reporte del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente en dispositivos correctamente configurados. En la práctica, esto reduce la configuración por dispositivo dentro de Plaspy y agiliza la integración de modelos comunes como el Микро‑Маяк +.

- Plaspy usa un endpoint de servidor y puerto compartido para reportes entrantes y detecta automáticamente el protocolo del rastreador.
- Basta con apuntar el dispositivo al endpoint de Plaspy para que la plataforma identifique el protocolo de forma automática.
- Generalmente no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al servidor de Plaspy.
- Es importante que el reporte incluya la identidad correcta del dispositivo (IMEI u otro identificador) para que Plaspy pueda mapear los datos entrantes al activo correspondiente.
- Si los reportes fallan, lo primero es verificar la configuración del servidor en el dispositivo y la conectividad de red.

## Transporte y contexto de conexión

El Микро‑Маяк + transmite datos sobre GSM/GPRS y puede configurarse para enviar reportes mediante UDP o TCP según el soporte del dispositivo y las opciones de configuración. Para la integración con Plaspy, el dispositivo debe apuntar al endpoint y puerto que se indican a continuación; estos son los ajustes públicos que Plaspy proporciona para el reporte de dispositivos.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración entre modelos.
- Elija UDP o TCP en el rastreador según la capacidad del dispositivo y las consideraciones de red; cualquiera de los dos protocolos puede alcanzar el endpoint de Plaspy.
- Verifique el APN, la provisión de la SIM y la conectividad GPRS general en el dispositivo antes de esperar reportes consistentes.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de envío, los campos de telemetría disponibles y los transportes soportados; verifique el comportamiento del firmware del equipo exacto que tiene.
- Las revisiones de hardware y las funciones opcionales (por ejemplo modos de batería extendida o comportamiento de radios a 868 MHz) pueden alterar qué telemetría se reporta y cuándo.
- Los presets de servidor del fabricante pueden apuntar por defecto a la infraestructura de AutoFon; actualice la configuración del servidor para apuntar a d.plaspy.com o 54.85.159.138 si es necesario.
- La elección de transporte (UDP vs TCP) puede afectar la latencia y la fiabilidad; use el que mejor se adapte a su perfil de conectividad y al soporte del dispositivo.
- El comportamiento de almacenamiento en búfer y caja negra se gestiona en el dispositivo y afecta cómo los paquetes históricos se reenvían a Plaspy después de interrupciones.
- Siempre valide los campos de identidad del dispositivo incluidos en los reportes para que Plaspy pueda emparejar automáticamente los datos entrantes con el activo correcto.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación a un nivel general ayuda a garantizar una puesta en marcha confiable, una resolución de problemas eficiente y un comportamiento predecible en Plaspy. Comprender cómo reporta el rastreador y qué influye en la fiabilidad de los reportes reduce el tiempo de inactividad y mejora la supervisión operativa.

- Acelera la configuración al aclarar qué ajustes de servidor y transporte necesita el dispositivo para alcanzar Plaspy.
- Ayuda a interpretar correctamente la telemetría y las alertas dentro de los paneles de Plaspy.
- Orienta los pasos de solución de problemas cuando los reportes dejan de llegar o la telemetría parece incompleta.
- Informa decisiones sobre selección de transporte, intervalos de reporte y compensaciones entre batería y modo de espera.
- Proporciona contexto para gestionar actualizaciones de firmware y verificar cambios de comportamiento tras una actualización.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Микро‑Маяк + con Plaspy ofrece una forma práctica de centralizar el seguimiento en tiempo real, las alertas de eventos y la reproducción histórica para activos pequeños y unidades de flota. La huella compacta del dispositivo, su larga autonomía en espera, la posición GNSS y el reporte por GSM se combinan con la detección de dispositivos y el endpoint unificado de Plaspy para crear una ruta de integración sencilla para visibilidad y procesos de recuperación.

Para obtener más información sobre Plaspy y cómo gestiona el reporte de dispositivos y la administración de flotas, visite https://www.plaspy.com. Para el protocolo más reciente y específico del dispositivo, el comportamiento de firmware y detalles de implementación del AutoFon Микро‑Маяк + consulte la documentación oficial del fabricante en https://www.autofon.ru/ para verificación y actualizaciones.
