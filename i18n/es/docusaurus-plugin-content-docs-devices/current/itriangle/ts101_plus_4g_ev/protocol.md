---
slug: /itriangle/ts101_plus_4g_ev/protocol
id: ts101_plus_4g_ev-protocol
sidebar_label: Protocol
title: iTriangle - TS101 PLUS 4G EV Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador iTriangle TS101 PLUS 4G EV con Plaspy para rastreo GPS y telemetría
keywords:
  - protocolo iTriangle TS101 PLUS 4G EV
  - protocolo rastreador GPS iTriangle
  - compatibilidad TS101 PLUS 4G EV con Plaspy
  - protocolo seguimiento flotas EV
  - protocolo rastreo TS101 4G
  - comunicación rastreador GPS Plaspy
  - protocolo telemetría vehicular
  - integración telemática CAN bus
  - protocolo rastreador multi GNSS
  - protocolo rastreador LTE Cat1
---

# iTriangle - Protocolo TS101 PLUS 4G EV

Esta página describe el contexto público del protocolo para utilizar el rastreador iTriangle TS101 PLUS 4G EV con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy mediante los ajustes de conexión publicados y en qué considerar al integrar el rastreador en una implementación telemática. El contenido es de alto nivel y evita detalles privados de firmware o del fabricante, manteniéndose útil para instaladores y administradores de flotas.

El TS101 PLUS 4G EV es un rastreador LTE Cat 1 diseñado para vehículos eléctricos que ofrece posicionamiento multi GNSS, telemetría vía CAN bus, datos de movimiento y eventos, soporte para sensores BLE y gestión OTA. Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique siempre la documentación del fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación del TS101 PLUS 4G EV regula cómo el rastreador informa ubicación, telemetría del vehículo y eventos a un endpoint en la nube para que Plaspy pueda ingerir y mostrar esa información. Define cómo el dispositivo se identifica, cómo se estructuran y transmiten los indicadores de telemetría y eventos, y cómo la nube confirma o responde a comandos y actualizaciones de configuración importantes.

- Permite transmitir posiciones GNSS, eventos de sensores de movimiento y telemetría CAN bus desde el dispositivo hacia Plaspy.
- Transporta identidad y estado del dispositivo para que Plaspy asocie los mensajes con el rastreador y el registro de vehículo correspondientes.
- Admite reportes basados en eventos como frenadas bruscas, manipulación, pánico, cambios de ignición y otras alertas.
- Permite coordinar configuraciones OTA y actualizaciones de firmware con la plataforma en la nube cuando el dispositivo lo soporta.
- Facilita la entrega confiable sobre sesiones celulares para que Plaspy muestre datos en tiempo real e históricos para la gestión de flotas.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir telemetría de muchos modelos de rastreadores distintos y detectar automáticamente el protocolo que usa cada dispositivo cuando se conecta al endpoint compartido. En la mayoría de los casos, un TS101 PLUS 4G EV correctamente configurado comenzará a reportar a Plaspy sin que usted tenga que seleccionar manualmente un protocolo dentro de la plataforma.

- Plaspy acepta conexiones en un único puerto compartido para todos los dispositivos soportados y usa detección automática cuando llegan los mensajes.
- La plataforma examina los mensajes entrantes en el endpoint compartido para asociar los datos con el dispositivo y el formato correctos.
- Usualmente, usted solo necesita asegurarse de que el dispositivo esté configurado para reportar al endpoint y puerto de Plaspy para que ocurra la detección automática.
- Plaspy soporta los métodos de transporte más comunes para que un rastreador use la opción más adecuada según su red o firmware.
- Si surge un comportamiento inusual, consulte los registros del dispositivo y la guía del fabricante para confirmar que el rastreador apunta al endpoint correcto de Plaspy.

## Contexto de transporte y conexión

El TS101 PLUS 4G EV puede configurarse para enviar datos por la red usando UDP o TCP según el firmware del dispositivo y las decisiones de despliegue. Plaspy publica un único endpoint y una IP alcanzables que los dispositivos pueden apuntar; el rastreador debe configurarse para reportar a ese endpoint usando el transporte y puerto soportados.

- El dominio del servidor Plaspy es d.plaspy.com y puede usarse como host de reporte del dispositivo.
- La IP del servidor Plaspy es 54.85.159.138 y puede utilizarse en entornos donde se prefiera una dirección numérica.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Elija UDP o TCP según la confiabilidad de la red, reglas de firewall y capacidades del firmware del dispositivo.
- Asegúrese de que el APN celular y las configuraciones de eSIM embebida en el rastreador estén correctas para que la unidad pueda establecer sesiones salientes hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en la temporización de mensajes, campos de telemetría disponibles o características opcionales; compare las notas de versión del firmware al solucionar problemas.
- Las revisiones de hardware o SKUs regionales pueden afectar las constelaciones GNSS disponibles, las bandas soportadas o las asignaciones de interfaz para CAN y puertos seriales.
- Las opciones de configuración del fabricante pueden cambiar si el dispositivo usa UDP o TCP, reportes periódicos versus por evento y el comportamiento de ahorro de energía.
- Los mensajes de CAN bus y las señales personalizadas del vehículo pueden requerir mapeo o traducción dentro de Plaspy para mostrarse correctamente en los paneles.
- Algunas funciones, como el reporte de sensores BLE o diagnósticos avanzados, dependen tanto del soporte de firmware como del mapeo del esquema de datos de Plaspy.
- Valide cualquier flujo de trabajo personalizado contra la documentación oficial del fabricante antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el rastreador ayuda a garantizar una configuración exitosa, un flujo de datos confiable y una resolución eficiente de problemas al integrar el TS101 PLUS 4G EV con Plaspy. Conocer las opciones de transporte, los tipos de telemetría que se reportarán y el impacto de las revisiones de firmware y hardware reduce tiempos de despliegue y mejora la fiabilidad operativa.

- Acelera la configuración inicial asegurando que los dispositivos apunten al endpoint y puerto correctos de Plaspy.
- Ayuda a aislar problemas a nivel de transporte como puertos bloqueados o DNS incorrecto.
- Clarifica las expectativas sobre qué campos de telemetría y eventos estarán disponibles en Plaspy.
- Facilita la planificación de actualizaciones OTA y la gestión de configuración a través de la flota.
- Permite ajustar intervalos de reporte y perfiles de energía para cumplir con limitaciones de batería y del vehículo.
- Mejora los flujos de trabajo de resolución de problemas al acotar el alcance a causas relacionadas con firmware, transporte o configuración.

## Por qué usar Plaspy con este protocolo

Combinar el TS101 PLUS 4G EV con Plaspy ofrece a operadores de flotas e integradores OEM una vía práctica para recopilar ubicación de alta resolución, diagnósticos CAN bus y telemetría basada en eventos para flotas de vehículos eléctricos. El hardware del rastreador está diseñado para entornos EV y Plaspy aporta paneles centralizados, alertas e informes que convierten esas señales en información útil para operaciones, seguridad y mantenimiento.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el TS101 PLUS 4G EV y las capacidades generales de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos del dispositivo, información de firmware y revisiones de hardware consulte al fabricante en https://www.itriangle.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
