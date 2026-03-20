---
slug: /sentar/mini/protocol
id: mini-protocol
sidebar_label: Protocol
title: Sentar - Mini Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del Sentar Mini para compatibilidad con Plaspy, con notas de conexión e integración
keywords:
  - protocolo Sentar Mini
  - Sentar Mini GPS
  - Sentar Mini Plaspy
  - seguimiento Sentar Mini
  - protocolo de comunicación Sentar Mini
  - compatibilidad dispositivos Plaspy
  - protocolo rastreador GPS
  - protocolo mini rastreador GPS
  - integración rastreador Sentar
  - telemetría Sentar Mini
---

# Sentar - Protocolo Mini

Esta página describe el contexto público del protocolo para usar el rastreador GPS Sentar Mini 4G con Plaspy. Se centra en cómo el dispositivo transmite telemetría y datos de ubicación a Plaspy en términos generales y no sensibles, y ofrece consideraciones prácticas de integración que ayudan a administradores y técnicos a incorporar y operar el dispositivo de forma fiable.

El Sentar Mini es un rastreador compacto multimodo (GPS, AGPS, LBS, WiFi) con soporte celular global y protección IPX7 que reporta ubicación y estado del dispositivo a Plaspy. Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para detalles específicos del firmware cuando sea necesario.

## Visión general del protocolo

El protocolo de comunicación del dispositivo define cómo el Mini empaqueta y envía fijaciones de ubicación, telemetría de estado e información diagnóstica a un servidor remoto para que Plaspy pueda procesar y mostrar datos de seguimiento útiles. Esta descripción pública explica el papel del protocolo sin exponer detalles privados de implementación.

- Permite transmisiones periódicas y por eventos de ubicación y telemetría del dispositivo a Plaspy para monitoreo en tiempo real e histórico.
- Incluye identificación básica del dispositivo y estado para que Plaspy asocie los mensajes entrantes con el rastreador y la cuenta correcta.
- Transporte de datos de posicionamiento desde múltiples fuentes (GPS, AGPS, WiFi, LBS) para que Plaspy seleccione y muestre la mejor fijación disponible.
- Transmisión del nivel de batería, indicadores de señal y conectividad que Plaspy usa para alertas y reportes de salud del dispositivo.
- Soporta tanto flujos continuos de ubicación como mensajes de chequeo ocasionales según la configuración del equipo y el caso de uso.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un punto unificado de ingestión y detecta automáticamente el protocolo del rastreador, por lo que en la mayoría de los casos un administrador no necesita seleccionar manualmente el protocolo dentro de la plataforma si el dispositivo está configurado para reportar correctamente a Plaspy.

- Plaspy escucha en un endpoint y puerto unificados para todos los rastreadores soportados y ejecuta detección de protocolo en las conexiones entrantes.
- Si el Mini está configurado para reportar al endpoint de Plaspy, la plataforma identificará los mensajes del dispositivo y los asociará automáticamente con el registro del dispositivo vinculado.
- Es importante configurar correctamente los identificadores del dispositivo en el rastreador para que Plaspy pueda emparejar los mensajes con la cuenta correcta.
- En despliegues típicos los usuarios no necesitan escoger un protocolo dentro de Plaspy una vez que el dispositivo apunte al endpoint de Plaspy.
- Cuando surjan problemas, revisar la configuración del dispositivo y la documentación del fabricante es el primer paso recomendado.

## Transporte y contexto de conexión

El Mini puede enviar telemetría a Plaspy a través de la red celular usando métodos de transporte comunes. Estos detalles de conexión son los ajustes públicos que normalmente configurará en el dispositivo para que informe a Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para opciones de configuración directa.
- El puerto usado por Plaspy para conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del soporte del equipo y de la configuración elegida.
- Elija el transporte compatible con el firmware de su Mini y evite mezclar tipos de transporte para el mismo dispositivo para reducir errores de configuración.
- Confirme el APN y los ajustes celulares en el rastreador para que pueda alcanzar d.plaspy.com o 54.85.159.138 desde la red.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos disponibles y los comandos de configuración; siempre verifique la versión de firmware del rastreador al validar compatibilidad.
- Las revisiones de hardware o variantes de SKU pueden alterar las bandas soportadas o los modos de posicionamiento disponibles e influir en el comportamiento reportado a Plaspy.
- Los procesos de configuración del fabricante y los ajustes por defecto pueden variar entre lotes; asegure que el dispositivo esté configurado para reportar al dominio o IP de Plaspy.
- La selección de transporte (UDP versus TCP) puede impactar las características de entrega; elija el transporte que coincida con las capacidades del firmware del dispositivo.
- La detección automática de protocolo de Plaspy reduce la necesidad de selección manual, pero aún se requieren campos correctos de identificación del dispositivo.
- Para despliegues avanzados o atípicos, consulte la documentación de Sentar para confirmar si se requieren comandos o ajustes específicos del dispositivo.

## Por qué es importante entender el protocolo

Un conocimiento práctico del protocolo de comunicación del Mini ayuda a asegurar una incorporación confiable, resolución de problemas y estabilidad a largo plazo cuando los dispositivos reportan a Plaspy. Conocer el comportamiento general del protocolo reduce conjeturas y acelera la resolución cuando los equipos no aparecen como se espera.

- Ayuda a verificar que el dispositivo apunta al endpoint y al transporte correctos para que los datos lleguen a Plaspy.
- Orienta los pasos de solución cuando faltan actualizaciones de ubicación o campos de telemetría están incompletos.
- Permite a los administradores anticipar cómo las revisiones de firmware o hardware pueden cambiar el comportamiento y qué validar después de las actualizaciones.
- Facilita configurar intervalos de reporte y disparadores de eventos que sean coherentes con el caso de uso y la expectativa de duración de batería.
- Mejora la colaboración con el fabricante al permitir preguntas enfocadas sobre comportamientos específicos de firmware o campos de mensaje.

## Por qué usar Plaspy con este protocolo

Usar el Sentar Mini con Plaspy ofrece a organizaciones y familias una vía sencilla para obtener visibilidad continua de ubicación y monitoreo de salud del dispositivo sin la gestión compleja de puertos por dispositivo. El endpoint de ingestión de Plaspy y la detección automática de protocolo simplifican la incorporación, de modo que el posicionamiento multimodo y la telemetría del Mini puedan emplearse rápidamente para alertas, geocercas y reproducción histórica.

Si desea saber más sobre cómo Plaspy funciona con rastreadores personales y para pequeños activos, visite https://www.plaspy.com para detalles de la plataforma y opciones de despliegue. Para la información más actualizada sobre el protocolo específica de dispositivo y firmware, verifique los detalles en el sitio del fabricante http://www.sentarsmart.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
