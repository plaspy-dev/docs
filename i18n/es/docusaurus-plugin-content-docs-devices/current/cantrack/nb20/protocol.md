---
slug: /cantrack/nb20/protocol
id: nb20-protocol
sidebar_label: Protocol
title: CanTrack - NB20 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el rastreador CanTrack NB20 con Plaspy y sus ajustes de conexión en tiempo real
keywords:
  - Protocolo CanTrack NB20
  - Protocolo GPS CanTrack NB20
  - Compatibilidad CanTrack NB20 con Plaspy
  - Protocolo rastreador GPS NB20
  - Protocolo de comunicación NB20
  - Protocolo del rastreador CanTrack
  - Dispositivos compatibles con Plaspy
  - Protocolo rastreador de mascotas
  - Protocolo de rastreo GPS CanTrack
  - Detalles de conectividad NB20
---

# CanTrack - Protocolo NB20

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador CanTrack NB20 con la plataforma Plaspy. Explica cómo el dispositivo se comunica con Plaspy y qué ajustes de conexión suelen emplearse para entregar ubicaciones en tiempo real, telemetría y alertas a la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente los protocolos de los rastreadores, pero el comportamiento exacto en el equipo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El NB20 es un rastreador para mascotas que combina GNSS (GPS), Bluetooth LE y posicionamiento por Wi‑Fi con conexión celular mediante Nano SIM o eSIM; la orientación aquí describe cómo ese enlace celular normalmente interactúa con Plaspy sin exponer detalles privados del protocolo.

## Visión general del protocolo

El protocolo de comunicación del NB20 regula cómo el rastreador envía identificación, ubicación, estado y alertas a un servidor remoto para que Plaspy pueda mostrar mapas en vivo, generar notificaciones y registrar el historial. Esta página se enfoca en el papel del protocolo para permitir reportes confiables e integración con la plataforma, más que en formatos de paquete internos o encapsulados propietarios.

- Permite que el NB20 envíe actualizaciones periódicas de ubicación y estado a Plaspy para seguimiento en tiempo real y registro histórico
- Transporta la identificación y el estado del dispositivo para que Plaspy asocie los datos entrantes con el rastreador correcto
- Envía notificaciones de eventos como rupturas de geocerca, alertas de batería baja y activaciones de seguimiento urgente a Plaspy
- Soporta el uso de múltiples transportes y ajustes de conexión para que el rastreador se adapte a las condiciones de la red
- Facilita que Plaspy reciba posiciones híbridas que combinan GNSS, Bluetooth y Wi‑Fi para cobertura en interiores y exteriores

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones en un endpoint y puerto compartidos para todos los dispositivos soportados y determina automáticamente el protocolo del rastreador que usa un equipo conectado. En la mayoría de los casos, cuando el NB20 está configurado para reportar al endpoint de Plaspy, usted no necesita seleccionar manualmente el protocolo en la interfaz de Plaspy.

- Plaspy escucha en un único puerto de la plataforma para que todos los dispositivos usen el mismo destino al reportar
- El dominio del servidor Plaspy es d.plaspy.com, que resuelve al endpoint público del servidor
- La IP del servidor Plaspy es 54.85.159.138 y el puerto configurado de la plataforma es 8888
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que normalmente no es necesaria la selección manual
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para la detección automática

## Transporte y contexto de conexión

El transporte de conexión es una opción de configuración en el NB20 que determina cómo el dispositivo abre sockets hacia el servidor. El NB20 soporta enlaces celulares y puede configurarse para usar UDP o TCP según la fiabilidad de la red, las opciones de firmware y la preferencia del usuario.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Las unidades NB20 pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP 54.85.159.138
- Plaspy usa el mismo puerto, 8888, para todos los rastreadores soportados para simplificar la configuración del dispositivo
- La elección del transporte puede afectar características de entrega como retransmisiones y latencia percibida
- Asegúrese de que la SIM o eSIM del dispositivo y la configuración de datos/APN estén correctamente ajustadas para que el rastreador pueda establecer un enlace con el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las diferencias de versión de firmware pueden cambiar qué funciones o tipos de mensajes un dispositivo envía a Plaspy
- Las revisiones de hardware y las variantes regionales pueden alterar las bandas celulares disponibles o el comportamiento de posicionamiento
- Las opciones de configuración por parte del fabricante, como el transporte predeterminado o ajustes del operador, pueden influir en la conectividad con Plaspy
- Elegir UDP frente a TCP en el dispositivo puede afectar la fiabilidad y el consumo de batería
- Verifique la configuración de SIM o eSIM y los ajustes APN al desplegar dispositivos NB20 con Plaspy
- Consulte la documentación de CanTrack para notas específicas de firmware del dispositivo que podrían impactar el comportamiento del protocolo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del NB20 a nivel de plataforma ayuda a asegurar una configuración fluida, operación confiable y una resolución de problemas eficiente cuando use Plaspy. Aunque Plaspy detecta protocolos automáticamente, familiarizarse con cómo el dispositivo reporta y qué opciones de conexión utiliza reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa.

- Simplifica la configuración inicial asegurando que el dispositivo apunte al endpoint y puerto correctos de Plaspy
- Ayuda a diagnosticar problemas de conectividad relacionados con la selección de transporte, APN o restricciones del operador
- Aclara por qué ciertos eventos como alertas de geocerca o seguimientos urgentes aparecen en Plaspy
- Facilita la planificación de compromisos entre intervalos de reporte y duración de batería para alargar la vida útil del dispositivo
- Apoya flujos de trabajo coordinados de actualización de firmware y mantenimiento usando capacidades Bluetooth y OTA del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el NB20 con Plaspy ofrece a propietarios y administradores de mascotas visibilidad continua mediante una plataforma diseñada para ingerir datos de posicionamiento híbrido y entregar alertas, reproducción de historial y mapas en vivo. La forma compacta y resistente al agua del NB20, junto con su posicionamiento multi tecnología, lo hacen apto para montaje en collar, mientras Plaspy se encarga de la agregación en servidor y la presentación de la información de ubicación y eventos.

Para conocer más sobre Plaspy y cómo funciona con dispositivos compatibles visite https://www.plaspy.com. Para obtener los detalles más actuales sobre protocolos específicos del dispositivo, comportamiento de firmware y recomendaciones del fabricante, verifique la información en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que las implementaciones y las funciones de firmware pueden cambiar con el tiempo.
