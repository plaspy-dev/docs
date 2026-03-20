---
slug: /cantrack/g200ny/protocol
id: g200ny-protocol
sidebar_label: Protocol
title: CanTrack - G200NY Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del CanTrack G200NY y cómo comunica ubicación y telemetría con Plaspy
keywords:
  - Protocolo CanTrack G200NY
  - Protocolo GPS CanTrack G200NY
  - Protocolo CanTrack G200NY para Plaspy
  - Protocolo de comunicación CanTrack G200NY
  - Protocolo de rastreo CanTrack G200NY
  - Compatibilidad G200NY con Plaspy
  - Protocolo de rastreador GPS para ganado
  - Integración de dispositivos Plaspy
  - Protocolo de telemetría G200NY
  - Protocolo de rastreador GPS CanTrack
---

# CanTrack - Protocolo G200NY

Esta página describe el contexto público del protocolo para usar el CanTrack G200NY con Plaspy. Resume cómo el G200NY comunica ubicación y telemetría a Plaspy en términos generales, qué puntos de conexión se requieren y qué debe considerarse al integrar el dispositivo para el rastreo de ganado y la gestión remota del rebaño. Los detalles técnicos aquí se centran en el contexto de comunicación útil públicamente, más que en los elementos internos del equipo.

Plaspy acepta reportes de dispositivos en un punto de conexión compartido y detecta automáticamente el protocolo del rastreador. Los dispositivos compatibles con Plaspy, incluido el G200NY, pueden apuntar al servidor de Plaspy en d.plaspy.com o a la IP 54.85.159.138 usando el puerto 8888. El G200NY admite reportes por red celular 4G con retroceso a 2G y utiliza GNSS más posicionamiento asistido para ofrecer actualizaciones de ubicación fiables, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Descripción general del protocolo

El protocolo que utiliza el G200NY define cómo el rastreador formatea y envía telemetría como coordenadas GNSS, posicionamiento asistido, eventos de movimiento y estado, y alertas SOS a un servidor remoto. En el contexto de Plaspy, la función del protocolo es asegurar que el rastreador pueda identificarse, entregar datos de ubicación y eventos significativos, y recibir configuraciones remotas básicas y señales de actualización OTA cuando estén disponibles.

- Permite la transmisión periódica y por eventos de coordenadas GNSS y datos de ubicación asistida a la plataforma.
- Proporciona información de identidad y estado para que Plaspy asocie los reportes entrantes con el registro de dispositivo correcto.
- Transporta marcadores de eventos como activaciones de geocerca, alertas SOS, detección de movimiento y estado de batería para alertas y registros históricos.
- Soporta configuración remota y señalización de actualizaciones OTA cuando el fabricante y el firmware permiten la gestión remota.
- Opera sobre transportes de red estándar para que el rastreador alcance Plaspy en el punto compartido sin configuración de puertos por dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto comunes y utiliza su cadena de detección para reconocer automáticamente el protocolo del rastreador. En la práctica, esto significa que un G200NY configurado correctamente y apuntando a Plaspy generalmente será reconocido sin necesidad de seleccionar el protocolo manualmente dentro de la plataforma.

- Apunte el dispositivo a d.plaspy.com o a 54.85.159.138 y use el puerto 8888 para reportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, por lo que no se requiere una configuración de puerto por dispositivo en el lado del servidor.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los reportes al endpoint compartido.
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para enviar datos al endpoint de Plaspy.
- Asegúrese de que el dispositivo use el transporte y el perfil de reporte correctos para ayudar a Plaspy a identificar y mapear los datos entrantes al dispositivo.

## Transporte y contexto de conexión

El contexto de conexión cubre el transporte de red y el direccionamiento que el G200NY usa para alcanzar Plaspy. El G200NY puede usar datos celulares para entregar telemetría y puede configurarse para emplear transporte UDP o TCP según el soporte y la configuración del dispositivo. La elección correcta de transporte y destino es fundamental para una integración exitosa.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware y los ajustes.
- El rastreador puede apuntar al dominio de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy acepta reportes en el mismo puerto para todos los dispositivos, por lo que en el dispositivo solo es necesario establecer el puerto de reporte en 8888.
- Elija UDP para reportes más sencillos y con menor sobrecarga cuando esté soportado, o TCP cuando se requiera entrega fiable y manejo de sesión y el dispositivo lo soporte.
- Verifique APN, límite de datos de la SIM y expectativas de cobertura celular para despliegues remotos de ganado, a fin de mantener conectividad confiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos disponibles y las opciones de transporte; verifique la versión de firmware del dispositivo al validar su comportamiento.
- Las revisiones de hardware o las variantes regionales pueden alterar las bandas soportadas y el comportamiento de retroceso, lo que puede afectar indirectamente la consistencia de los reportes.
- Las herramientas de configuración del fabricante o los servicios de aprovisionamiento pueden exponer distintas opciones para la selección de transporte como UDP o TCP.
- Las actualizaciones OTA de firmware pueden agregar o modificar funciones del protocolo, por lo que debe confirmar el comportamiento tras una actualización en una prueba controlada antes de desplegar a gran escala.
- Para operación fiable, valide que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte (UDP o TCP) coincida con la configuración del dispositivo.
- Pruebe una muestra pequeña de unidades en condiciones representativas de campo antes de un despliegue masivo para confirmar la compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo el G200NY se comunica con Plaspy ayuda a garantizar un rastreo confiable, facilita la resolución de problemas y respalda la gestión a largo plazo de los dispositivos. Tener claro el comportamiento de transporte, los endpoints del servidor y cómo Plaspy detecta los protocolos reduce el tiempo de integración y las sorpresas operativas.

- Acelera la configuración inicial al asegurar que los dispositivos apunten al endpoint y puerto correctos de Plaspy.
- Agiliza la resolución de problemas de conexión al acotar factores como transporte, APN y alcance del servidor.
- Ayuda a balancear la frecuencia de reportes y la duración de la batería al seleccionar modos de transmisión apropiados en coordinación con las opciones de Plaspy.
- Facilita la planificación de actualizaciones OTA y configuración remota al conocer qué funciones del firmware afectan los reportes.
- Mejora la fiabilidad del despliegue en entornos remotos de ganado al anticipar cobertura y comportamiento de retroceso.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G200NY con Plaspy ofrece a los operadores de ranchos e investigadores de campo una forma práctica de recolectar datos GNSS y telemetría de larga duración desde rastreadores robustos. Plaspy agrega fuentes de ubicación en tiempo real e históricas, alertas de eventos y estado de dispositivos para que los equipos puedan monitorear el movimiento del rebaño, responder a eventos SOS y gestionar dispositivos a escala sin visitas frecuentes al campo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el G200NY visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente sobre el protocolo y el firmware del dispositivo en el sitio del fabricante https://www.cantrackgps.com/ antes de planificar despliegues a gran escala o críticos.
