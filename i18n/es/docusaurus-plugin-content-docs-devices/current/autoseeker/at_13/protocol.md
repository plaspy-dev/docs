---
slug: /autoseeker/at_13/protocol
id: at_13-protocol
sidebar_label: Protocol
title: Autoseeker - AT-13 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Autoseeker AT-13 y cómo se comunica con Plaspy para rastreo vehicular
keywords:
  - protocolo Autoseeker AT-13
  - protocolo GPS Autoseeker AT-13
  - compatibilidad Autoseeker AT-13 Plaspy
  - protocolo rastreador GPS Autoseeker
  - protocolo seguimiento AT-13
  - rastreo vehicular Autoseeker
  - protocolo rastreador Plaspy
  - comunicación rastreador GPS
  - rastreador magnético AT-13
  - monitoreo remoto AT-13
---

# Autoseeker - Protocolo AT-13

Esta página ofrece una visión pública sobre el contexto de comunicación del Autoseeker AT-13 cuando se integra con Plaspy. Resume cómo el dispositivo informa ubicación y estado en términos generales y explica qué esperar al configurar el AT-13 para enviar datos a la plataforma Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo en el AT-13 puede variar según la versión de firmware, la revisión del hardware y la configuración del fabricante; por ello esta página se centra en el contexto público y no sensible que facilita la configuración y la resolución de problemas.

## Descripción general del protocolo

El AT-13 emplea un protocolo de reporte para transmitir la posición GPS, el estado del equipo y telemetría, de modo que un servidor como Plaspy pueda interpretar y presentar la información. El contexto público del protocolo se centra en cómo el rastreador establece transporte hacia el servidor, se identifica y envía reportes periódicos y por eventos sin exponer detalles de implementación.

- Permite que el rastreador envíe ubicación, marca de tiempo y datos básicos de estado que Plaspy puede mostrar y registrar
- Proporciona identificadores y campos que posibilitan que la plataforma asocie los mensajes con un dispositivo específico
- Soporta reportes periódicos y activadores por eventos para que las actualizaciones de posición y alertas lleguen a Plaspy
- Permite consultas remotas y comprobaciones de estado cuando el dispositivo y el fabricante lo soportan
- Funciona como puente entre el rastreador físico y las herramientas de análisis y visualización de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos y usa esa información para determinar automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita seleccionar un protocolo manualmente. Si el AT-13 está configurado correctamente para reportar al endpoint de Plaspy, la plataforma reconocerá el flujo de datos entrante y lo asociará al registro del dispositivo.

- Plaspy escucha tráfico de rastreadores en el endpoint común d.plaspy.com y en la IP 54.85.159.138
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración
- El puerto común de Plaspy es 8888 y el dispositivo puede configurarse para usar UDP o TCP hacia ese puerto
- Cuando el AT-13 reporta al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador
- Normalmente usted solo necesita apuntar el dispositivo a d.plaspy.com o 54.85.159.138 y usar el puerto 8888

## Contexto de transporte y conexión

El AT-13 puede configurarse para usar opciones de transporte de red que dependan del firmware y del entorno donde se desplegará. La elección del transporte afecta la confiabilidad, la latencia y los requisitos de firewall, por lo que es importante alinear la configuración del dispositivo con los ajustes del servidor Plaspy.

- Los dispositivos pueden enviarse por UDP o TCP al puerto 8888 según el soporte y la configuración del equipo
- Plaspy acepta conexiones en d.plaspy.com y en la dirección numérica 54.85.159.138, por lo que puede usarse nombre de host o IP
- Todos los dispositivos que usan Plaspy comparten el mismo puerto de escucha, lo que facilita las reglas NAT y de firewall para flotas
- Elija UDP cuando prefiera menor sobrecarga y comportamiento de conexión más simple; elija TCP cuando necesite entrega ordenada y mayor fiabilidad de conexión, si el rastreador lo soporta
- Asegúrese de permitir el tráfico saliente del dispositivo hacia el puerto 8888 en la red donde opere el AT-13

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y software en el AT-13 pueden cambiar la frecuencia de mensajes, los campos disponibles y los modos de transporte soportados
- Variantes de hardware o lotes de producción pueden introducir diferencias en el comportamiento que afecten la compatibilidad
- Opciones de configuración del fabricante, como intervalo de reporte, modos de sueño y disparadores de alarma, influirán en cómo y cuándo se envían datos a Plaspy
- La selección de transporte entre UDP y TCP debe coincidir con la capacidad del dispositivo y la configuración elegida en el rastreador
- Valide la compatibilidad consultando la documentación y las notas de la versión del fabricante antes de un despliegue masivo
- En caso de duda, pruebe un solo dispositivo para verificar que reporte correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888

## Por qué es importante entender el protocolo

Conocer el contexto público del protocolo ayuda a asegurar que el AT-13 se configure correctamente, reduce el tiempo de puesta en marcha y mejora la fiabilidad cuando se usa con Plaspy. Entender cómo se comunica el rastreador permite una resolución de problemas más rápida y un mejor funcionamiento a largo plazo para monitoreo y gestión de flotas.

- Facilita la configuración inicial para que el rastreador apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Ayuda a diagnosticar problemas de conectividad confirmando el tipo de transporte y el endpoint del servidor
- Aclara cómo el firmware y las opciones de configuración afectan el comportamiento de reportes y la vida útil de la batería
- Permite planificar de forma más adecuada las reglas de red y firewall al desplegar múltiples dispositivos
- Habilita pasos de resolución de problemas específicos para reportes faltantes, comportamiento de sueño del dispositivo o intervalos de reporte inesperados

## Por qué usar Plaspy con este protocolo

El Autoseeker AT-13 es adecuado para monitoreo discreto de vehículos gracias a su formato magnético compacto y su larga autonomía en espera. Al combinarlo con Plaspy, las organizaciones obtienen una plataforma centralizada que reconoce automáticamente el flujo de reporte del AT-13 e integra sus datos en seguimiento, alertas y reproducción histórica. Esta combinación resulta útil para operadores de flotas, propietarios de vehículos y organizaciones que requieren visibilidad confiable de la ubicación y el estado de sus unidades.

Para obtener más información sobre el uso de Plaspy con rastreadores compatibles y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles más recientes específicos de dispositivos y firmware, instrucciones de configuración y avisos del fabricante, consulte la documentación de Autoseeker en https://autoseekergps.com/ que puede contener las últimas actualizaciones sobre el comportamiento y las opciones del dispositivo.
