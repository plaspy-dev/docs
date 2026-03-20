---
slug: /autoseeker/at_2/protocol
id: at_2-protocol
sidebar_label: Protocol
title: Autoseeker - AT-2 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Autoseeker AT-2 con Plaspy para rastreo en tiempo real y reporte de alarmas
keywords:
  - protocolo Autoseeker AT-2
  - protocolo GPS Autoseeker AT-2
  - protocolo Autoseeker AT-2 Plaspy
  - protocolo de rastreo AT-2
  - protocolo de rastreador GPS Autoseeker
  - comunicación Autoseeker AT-2
  - integración AT-2 Plaspy
  - rastreadores compatibles con Plaspy
  - rastreo vehicular Autoseeker
  - protocolo GPS para seguridad personal
---

# Autoseeker - Protocolo AT-2

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Autoseeker AT-2 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy, qué esperar de la configuración de conexión y cómo el comportamiento del protocolo influye en el reporte confiable y en las alarmas. El objetivo es ayudar a usuarios técnicos e integradores a comprender el papel de la comunicación cuando el AT-2 está emparejado con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto de los mensajes y las capacidades pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles finales deben verificarse contra el firmware del dispositivo y la documentación de Autoseeker.

## Resumen del protocolo

El AT-2 transmite posición, estado y eventos de alarma desde el dispositivo hacia un servidor remoto para que Plaspy pueda mostrar ubicación en tiempo real, generar alertas y registrar telemetría. El contexto público del protocolo describe cómo el rastreador se identifica ante un backend, envía actualizaciones periódicas o por eventos y remite condiciones de alarma para su gestión oportuna.

- Permite cargas regulares de ubicación y telemetría para que Plaspy presente seguimiento en vivo y historial.
- Transmite condiciones de alarma como SOS, manipulación, movimiento, exceso de velocidad y batería baja para alertas en la plataforma.
- Incluye información de estado que Plaspy utiliza para monitoreo de batería y reporte de salud del dispositivo.
- Soporta flujos de configuración remota cuando el dispositivo y la plataforma intercambian ajustes.
- Proporciona la ruta de comunicación base que permite a Plaspy mapear identificadores del dispositivo a los activos en la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de muchos rastreadores compatibles en un endpoint común y determinar automáticamente el protocolo según los datos entrantes y el comportamiento del dispositivo. En integraciones habituales, no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy recibe mensajes de dispositivos en un endpoint compartido y aplica detección automática del protocolo.
- Cuando un AT-2 reporta al endpoint de Plaspy, la plataforma empata el identificador del dispositivo y los patrones de mensaje para habilitar el parseo y la visualización.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección automática tenga éxito.
- La detección automática reduce pasos de configuración manual y facilita la incorporación de flotas mixtas con distintos modelos de rastreadores.
- Si ocurren problemas de conexión o reporte, revisar los ajustes de reporte del dispositivo y las versiones de firmware es un buen primer paso.

## Transporte y contexto de conexión

El AT-2 utiliza redes celulares para alcanzar un servidor remoto y puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y la configuración del operador. Plaspy acepta conexiones de rastreadores en un puerto y endpoint compartidos, de modo que los dispositivos pueden apuntar al servidor de Plaspy por nombre de dominio o por dirección IP cuando sea necesario.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy publicada para la configuración de dispositivos es 54.85.159.138.
- El puerto utilizado por Plaspy para comunicación con dispositivos es 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades y preferencias del rastreador.
- Apuntar un AT-2 a d.plaspy.com o a la IP proporcionada es la forma estándar de encauzar el tráfico de ubicación y alarmas hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- El AT-2 es reportado como compatible con Plaspy como un rastreador capaz de entregar ubicación, alarmas y telemetría a la plataforma.
- Las revisiones de firmware pueden añadir o cambiar tipos de mensajes y comportamientos; siempre verifique el nivel de firmware del dispositivo al solucionar problemas de compatibilidad.
- Revisiones de hardware y variantes regionales celulares pueden afectar bandas disponibles o comportamiento de conmutación, lo que podría influir en la fiabilidad del reporte.
- La selección de transporte (UDP frente a TCP) puede configurarse en muchos dispositivos y afectar las características de entrega bajo distintas redes.
- Las funciones de servidor del fabricante u opciones de firmware OEM a veces modifican los endpoints de reporte por defecto o la frecuencia de mensajes.
- Valide la configuración y el comportamiento del dispositivo contra la documentación de Autoseeker para el firmware y la revisión específicos del AT-2 antes de un despliegue a gran escala.

## Por qué es relevante comprender el protocolo

Tener una comprensión básica de cómo se comunica el AT-2 ayuda a garantizar una incorporación confiable, una resolución de problemas más rápida y una operación constante a largo plazo cuando se integra con Plaspy. Saber qué ajustes controlan el endpoint, el transporte y el comportamiento de reporte reduce tiempos de inactividad y mejora la precisión de las alertas para casos de uso de seguridad y monitoreo de activos.

- Acelera la incorporación de dispositivos al confirmar el endpoint y los ajustes de transporte correctos.
- Ayuda a diagnosticar problemas comunes como actualizaciones faltantes, omisión de alarmas o reportes intermitentes.
- Permite configurar apropiadamente intervalos de reporte y modos de energía para ajustarlos a las necesidades operativas.
- Asegura que el enrutamiento de alarmas y eventos SOS sea visible en Plaspy y para los respondedores en tiempo oportuno.
- Informa los programas de mantenimiento relacionados con actualizaciones de firmware o consideraciones sobre la vida útil de la batería.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-2 junto con Plaspy ofrece una solución práctica para seguridad personal y monitoreo ligero de activos. La combinación del AT-2 de posicionamiento GPS y Beidou, voz bidireccional, SOS y larga autonomía en espera se integra con Plaspy para brindar a cuidadores, equipos de seguridad y gestores de activos pequeños una fuente de datos fiable para seguimiento en vivo, alertas y gestión remota básica.

Para saber más sobre el uso de Plaspy con rastreadores compatibles visite https://www.plaspy.com. Para los detalles más actuales sobre protocolo específico de dispositivo, notas de firmware y guía del fabricante para el AT-2, verifique con Autoseeker en https://autoseekergps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
