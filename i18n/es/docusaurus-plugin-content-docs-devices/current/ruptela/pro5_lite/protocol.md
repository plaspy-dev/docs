---
slug: /ruptela/pro5_lite/protocol
id: pro5_lite-protocol
sidebar_label: Protocol
title: Ruptela - Pro5 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para Ruptela Pro5 Lite y cómo el equipo comunica con Plaspy para seguimiento seguro en tiempo real
keywords:
  - protocolo Ruptela Pro5 Lite
  - protocolo GPS Ruptela Pro5 Lite
  - compatibilidad Ruptela Pro5 Lite Plaspy
  - protocolo de comunicación Ruptela Pro5 Lite
  - protocolo de rastreo Ruptela Pro5 Lite
  - protocolo telemático Pro5 Lite
  - integración rastreador GPS Plaspy
  - rastreo de flotas Pro5 Lite
  - telemática vehicular Pro5 Lite
  - rastreadores compatibles con Plaspy
---

# Ruptela - Pro5 Lite: Protocolo

Esta página resume el contexto público del protocolo para utilizar el tracker Ruptela Pro5 Lite con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos prácticos y no sensibles, para que administradores de flotas e integradores comprendan los requisitos de conexión, las opciones de transporte y el papel del protocolo de reporte dentro de una implementación con Plaspy.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página pretende ofrecer una visión operativa más que una especificación completa del protocolo.

## Descripción general del protocolo

El protocolo de comunicación del Pro5 Lite es el medio por el cual se entregan a la plataforma Plaspy las posiciones GNSS, la telemetría CAN, eventos de sensores y el estado del dispositivo. A grandes rasgos, el protocolo gestiona la identificación, el establecimiento de sesión, la entrega de telemetría y las medidas de seguridad opcionales para que Plaspy pueda presentar datos y eventos de vehículos útiles a los operarios.

- Permite que el tracker reporte posición GNSS, eventos de acelerómetro y telemetría de bus CAN a Plaspy para monitoreo en tiempo real y almacenamiento histórico.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos.
- Soporta opciones de transporte seguro presentes en el equipo, como TLS 1.2 cuando está disponible, para proteger los datos en tránsito.
- Provee el mecanismo para que el dispositivo envíe notificaciones de eventos como manipulación, interferencia o cambios en entradas que activan alertas y automatizaciones.
- Actúa como puente entre la telemetría a bordo (GNSS, CAN, sensores BLE, entradas/salidas digitales) y los paneles e informes de Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos y usa el contenido de las sesiones para identificar automáticamente el protocolo del tracker. En configuraciones normales, el equipo se dirige al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor Plaspy para reporting de dispositivos es d.plaspy.com que resuelve a la dirección pública usada para la ingesta.
- La IP del servidor Plaspy es 54.85.159.138 y es accesible como destino alternativo cuando no se usa DNS o este no está disponible.
- La plataforma escucha en un único puerto para dispositivos, y Plaspy utiliza el mismo puerto para todos los trackers soportados.
- Plaspy escucha en el puerto 8888 para conexiones de dispositivos y emplea detección automática para determinar el protocolo del tracker.
- Cuando un Pro5 Lite se configura para reportar a Plaspy, normalmente requiere apuntar el equipo a d.plaspy.com o a la IP antes indicada y usar el protocolo de transporte acordado.

## Contexto de transporte y conexión

Las opciones de conexión en el Pro5 Lite determinan cómo el tracker envía datos a Plaspy. El equipo soporta transportes de uso común y puede configurarse para reportar al endpoint de Plaspy según las necesidades operativas y la disponibilidad de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- Apuntar el tracker a d.plaspy.com es la opción recomendada basada en DNS; 54.85.159.138 es la IP del servidor equivalente cuando no se prefiere DNS.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes desde el lado de la plataforma.
- La selección del transporte puede afectar características de entrega como retransmisiones y persistencia de sesión, por lo que debe elegirse UDP o TCP según el perfil de conectividad.
- Los equipos que soportan TLS 1.2 pueden usar canales de transporte seguros para proteger la telemetría entre el tracker y el endpoint de ingesta de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden introducir o eliminar campos de telemetría y capacidades específicas; confirme la versión de firmware del Pro5 Lite al validar el comportamiento.
- Las variantes de hardware y los modelos LTE regionales pueden afectar los transportes disponibles y el comportamiento de radio, por lo que conviene anotar el SKU del equipo para comprobaciones de compatibilidad.
- Las opciones de configuración del fabricante, como la selección de transporte (UDP vs TCP) y la habilitación de transporte seguro, deben ajustarse para coincidir con las expectativas de conexión de Plaspy.
- Funciones como BLE, CAN y accesorios pueden estar presentes o ausentes dependiendo de la variante del modelo y el aprovisionamiento; mapee esas capacidades con los requisitos de Plaspy antes de desplegar en masa.
- Confirme que el aprovisionamiento del dispositivo apunte a d.plaspy.com o a 54.85.159.138 usando el puerto 8888 para asegurar la detección automática y la entrega correcta de mensajes.
- Valide siempre la compatibilidad contra la documentación más reciente del fabricante al planificar actualizaciones de firmware o despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una incorporación fluida, una ingesta precisa de telemetría y una operación fiable a largo plazo al usar dispositivos Pro5 Lite con Plaspy. Conocer cómo reporta el tracker, qué transportes puede usar y cómo Plaspy detecta los mensajes entrantes reduce el tiempo de resolución de problemas y facilita una configuración correcta.

- Agiliza el aprovisionamiento inicial al asegurar que los equipos apunten al endpoint y puerto correctos de Plaspy.
- Reduce el tiempo de inactividad al clarificar si los problemas son de transporte, configuración o firmware durante la resolución de incidencias.
- Ayuda a mapear capacidades del dispositivo como métricas CAN y sensores BLE a las funciones y paneles de Plaspy.
- Apoya la planificación de seguridad al confirmar si el transporte seguro como TLS 1.2 está habilitado y es necesario.
- Facilita la planificación del ciclo de vida al subrayar la necesidad de probar actualizaciones de firmware contra la ingesta de Plaspy antes de un despliegue masivo.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela Pro5 Lite con Plaspy ofrece a los operadores de flota un tracker compacto y capaz junto con una plataforma que ingiere e interpreta automáticamente la telemetría del dispositivo. La combinación soporta seguimiento en tiempo real, diagnósticos basados en CAN, datos de accesorios BLE y alertas dirigidas por eventos que aportan valor en eficiencia de flota, seguridad y protección de activos.

Si desea saber más sobre cómo Plaspy trabaja con trackers compatibles y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y variantes regionales consulte la documentación del fabricante en https://ruptela.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
