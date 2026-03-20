---
slug: /cantrack/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: CanTrack - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el CanTrack TK102 con Plaspy, incluyendo ajustes de transporte y guía de compatibilidad
keywords:
  - CanTrack TK102
  - protocolo CanTrack TK102
  - rastreador GPS TK102
  - protocolo CanTrack
  - compatibilidad TK102 Plaspy
  - protocolo de rastreo GPS
  - rastreo vehicular TK102
  - comunicación rastreador GPS
  - protocolo GPS GPRS
  - rastreador gestión de flotas
---

# CanTrack - Protocolo TK102

Esta página ofrece información pública sobre el protocolo para usar el CanTrack TK102 con Plaspy. Explica cómo el dispositivo suele enviar datos de ubicación y estado a un servidor en internet y qué implica esto al integrar el TK102 con Plaspy para seguimiento y monitoreo en tiempo real. La información se centra en el contexto de conexión y el protocolo que es seguro publicar y útil para la configuración y resolución de problemas.

Plaspy utiliza un conjunto compartido de ajustes de conexión para los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo del TK102 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante para comportamientos específicos del dispositivo y notas de firmware antes de desplegarlo.

## Resumen del protocolo

El protocolo de comunicación del TK102 define cómo el rastreador envía posición, alarmas e información de estado a través de la red móvil hacia un servidor en internet. Para la integración con Plaspy, el rol del protocolo se limita a permitir que el dispositivo se identifique y entregue telemetría utilizable que Plaspy pueda interpretar y mostrar.

- Permite que el dispositivo reporte posición GPS y eventos de movimiento a un servidor para seguimiento en tiempo real
- Transmite notificaciones de alarma y estado que Plaspy puede convertir en alertas y entradas de historial
- Incluye identificadores de dispositivo para que Plaspy asocie los registros entrantes con el rastreador correcto
- Admite múltiples opciones de transporte según la configuración del equipo y las condiciones de la red
- Permite comportamientos de respaldo como SMS o almacenamiento local cuando GPRS no está disponible

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos del TK102 en un endpoint común y determina automáticamente el protocolo del rastreador que está usando el dispositivo entrante. En la mayoría de los despliegues no será necesario seleccionar un protocolo dentro de Plaspy si el TK102 está configurado para reportar al endpoint de Plaspy con los ajustes de transporte correctos.

- Plaspy escucha en un único puerto de plataforma para todos los rastreadores soportados y detecta automáticamente el protocolo entrante
- El dominio del servidor de Plaspy es d.plaspy.com y la IP de la plataforma es 54.85.159.138 para direccionamiento directo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding
- Si el dispositivo está configurado para reportar al endpoint de Plaspy usando ajustes estándar, normalmente no es necesaria la selección manual del protocolo
- Verifique la configuración de reporte del dispositivo y la conectividad de la red móvil si la detección automática no parece funcionar

## Transporte y conexión

El TK102 puede entregar datos de ubicación y alarma mediante la red de datos móviles o canales de respaldo según su configuración. Para el uso con Plaspy, el contexto clave de transporte es la dirección y el puerto a los que el dispositivo reporta y si utiliza UDP o TCP.

- Los dispositivos se pueden configurar para usar UDP o TCP en el puerto 8888 al reportar a Plaspy
- El dominio del servidor Plaspy a usar es d.plaspy.com o la IP directa 54.85.159.138
- Plaspy utiliza el puerto 8888 como puerto compartido de reporte para todos los dispositivos en la plataforma
- Elija UDP o TCP según las capacidades del dispositivo y la fiabilidad de la red en su despliegue
- Asegúrese de que el APN y los ajustes GPRS del rastreador estén correctos para que el dispositivo pueda alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- El comportamiento del TK102 puede diferir entre versiones de firmware y revisiones de hardware incluso con el mismo nombre de modelo
- Los ajustes por defecto del fabricante pueden apuntar el rastreador a un servidor de terceros; actualice la dirección de reporte a Plaspy si es necesario
- La selección del transporte importa: algunas versiones de firmware prefieren UDP mientras que otras ofrecen soporte confiable para TCP
- Algunas unidades TK102 recurren a SMS o almacenamiento local en tarjeta TF cuando GPRS no está disponible; el reporte al servidor requiere datos móviles activos
- Confirme que las alarmas y funciones opcionales como geocercas o vigilancia por voz estén soportadas por el firmware que está usando
- Siempre valide la compatibilidad contra la documentación del fabricante y las notas de las versiones de firmware

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del TK102 ayuda a asegurar una configuración exitosa, telemetría precisa y menos falsos positivos al usar Plaspy. Conocer el contexto de conexión agiliza la resolución de problemas y favorece la confiabilidad a largo plazo del despliegue de rastreo.

- Ayuda a verificar que el dispositivo envíe datos al endpoint y puerto correctos de Plaspy
- Aclara por qué un dispositivo puede reportar vía SMS o almacenamiento local en lugar de GPRS en determinadas condiciones
- Orienta la selección de transporte y la configuración del APN para una conectividad estable con el servidor
- Asiste en la resolución de problemas por actualizaciones faltantes, posiciones incorrectas o fallas en la entrega de alarmas
- Permite una mejor planificación para despliegues con múltiples versiones de firmware

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK102 con Plaspy ofrece una forma práctica de centralizar datos de ubicación, alarmas y estado de rastreadores personales y vehiculares en una vista operativa única. La plataforma de Plaspy acepta reportes del TK102 cuando el dispositivo está configurado para apuntar al endpoint y puerto de Plaspy, lo que facilita agregar dispositivos TK102 a sus flujos de monitoreo e informes.

Para saber más sobre cómo Plaspy funciona con dispositivos como el TK102 visite https://www.plaspy.com. Por favor verifique los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y las notas de implementación en el sitio del fabricante en https://www.cantrackgps.com/ ya que las características y el firmware pueden cambiar con el tiempo.
