---
slug: /supermate/d26_h/protocol
id: d26_h-protocol
sidebar_label: Protocol
title: Supermate - D26-H Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para integrar el Supermate D26-H con Plaspy usando la configuración compartida
keywords:
  - Protocolo Supermate D26-H
  - Protocolo GPS Supermate D26-H
  - Protocolo Supermate D26-H para Plaspy
  - Protocolo de comunicación Supermate D26-H
  - Protocolo de rastreo Supermate D26-H
  - Protocolo de localizador GPS Supermate
  - Compatibilidad de dispositivos Plaspy
  - rastreo de flotas Supermate
  - rastreo vehicular D26-H
  - rastreo de activos Supermate
---

# Supermate — Protocolo D26-H

Esta página ofrece una visión general pública del protocolo para usar el rastreador GPS Supermate D26-H con la plataforma Plaspy. Se centra en el contexto de comunicación y en las consideraciones de integración necesarias para conectar el D26-H a Plaspy sin exponer detalles internos de firmware ni parsers privados. El D26-H es un rastreador compacto y ligero pensado para aplicaciones personales, comerciales e industriales; este documento explica cómo su comportamiento de reporte se mapea a la configuración de conexión compartida de Plaspy.

Plaspy utiliza una única configuración de endpoint compartido para los rastreadores compatibles y detecta automáticamente el protocolo cuando los dispositivos informan a la plataforma. El comportamiento real en tiempo de ejecución y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel de protocolo útil para la configuración y solución de problemas, recomendando verificar siempre con la documentación oficial del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación define cómo el D26-H se identifica, envía actualizaciones de ubicación y estado, y reporta eventos que Plaspy consume para seguimiento y alertas. El protocolo es el puente entre los datos originados por el dispositivo y los servicios de Plaspy, permitiendo interpretar la ubicación, eventos de geocerca y señales de emergencia.

- Permite que el rastreador envíe actualizaciones de ubicación e información de estado en un formato que Plaspy pueda interpretar
- Transmite detalles de identificación para que Plaspy asocie los datos entrantes con el dispositivo correcto
- Envía tipos de eventos como movimiento, cruces de geocerca y activaciones de SOS para generar alertas en la plataforma
- Incluye comportamiento a nivel de transporte que determina si los mensajes usan UDP o TCP para llegar a Plaspy
- Soporta reportes periódicos y basados en eventos según lo implemente el firmware del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint de servidor compartido y emplea lógica de detección para asignar los datos entrantes a un protocolo de rastreador compatible. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el D26-H está configurado para reportar al endpoint de Plaspy con la configuración estándar de conexión.

- Plaspy escucha en un único puerto de la plataforma para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Cuando el D26-H reporta al endpoint de Plaspy, la plataforma inspecciona los mensajes entrantes para identificar el tipo de dispositivo y el patrón de mensajes
- La configuración correcta del dispositivo para apuntar a Plaspy suele ser suficiente para la detección y el mapeo automáticos
- La selección manual de protocolo en Plaspy rara vez es necesaria cuando el rastreador informa correctamente al endpoint compartido
- Si surgen problemas de detección, revise primero la configuración de reportes del dispositivo y la versión de firmware como pasos iniciales de solución

## Transporte y contexto de conexión

La configuración a nivel de transporte determina cómo el D26-H se conecta a Plaspy. El rastreador puede estar configurado para usar UDP o TCP según las opciones del dispositivo y el firmware. Plaspy proporciona un endpoint consistente para que los dispositivos que soportan cualquiera de los dos transportes puedan reportar a la misma dirección y puerto de la plataforma.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy para reportes de dispositivos es 8888
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración
- Apuntar el D26-H a d.plaspy.com o a 54.85.159.138 en el puerto 8888 dirigirá el tráfico hacia Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el intervalo de mensajes y los campos disponibles, por lo que siempre verifique la versión de firmware del D26-H al validar el comportamiento
- Las revisiones de hardware o las variantes regionales pueden implementar pequeñas diferencias en el contenido de los mensajes o en los transportes soportados
- Algunas funciones del dispositivo, como SOS, geocerca o modos de suspensión, requieren configuraciones específicas que pueden afectar la cadencia de reportes
- La selección de transporte entre UDP y TCP puede influir en las garantías de entrega y debe coincidir con la configuración del dispositivo
- Valide la compatibilidad confirmando que el dispositivo está configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Consulte siempre las notas de la versión del fabricante para cambios específicos de firmware que afecten el comportamiento del protocolo

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del D26-H ayuda a asegurar una configuración confiable, una solución de problemas eficaz y una operación predecible a largo plazo con Plaspy. Saber qué ajustes controlan el transporte, la cadencia de reportes y la generación de eventos reduce tiempos de inactividad y mejora la calidad de los datos de rastreo.

- Acelera la configuración inicial al asegurar que el dispositivo apunte al endpoint y al puerto correctos de Plaspy
- Facilita la resolución de problemas cuando faltan reportes o estos son inesperados al acotar la investigación al transporte o a cambios de firmware
- Ayuda a anticipar cómo las actualizaciones de firmware podrían modificar el comportamiento de los mensajes o la disponibilidad de funciones
- Orienta la decisión entre usar UDP o TCP según el soporte del dispositivo y las condiciones de la red
- Permite interpretar con precisión eventos como SOS, alertas de geocerca e informes de movimiento dentro de Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Supermate D26-H con Plaspy ofrece una forma sencilla de integrar el dispositivo en flujos de trabajo de monitoreo de flotas o activos. La forma compacta y el conjunto de funciones del D26-H encajan bien con el modelo de reporte agnóstico de dispositivos de Plaspy, por lo que las organizaciones pueden obtener visibilidad de ubicación, eventos y estado sin un trabajo de integración intenso.

Si desea conocer más sobre cómo funciona el D26-H con Plaspy y ver las funciones de la plataforma, visite https://www.plaspy.com. Para obtener detalles específicos del protocolo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Supermate http://www.gps-summit.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
