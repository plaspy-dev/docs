---
slug: /ruptela/trace5_trailer_tracker/configuration
id: trace5_trailer_tracker-configuration
sidebar_label: Configuration
title: Ruptela - Trace5 Trailer Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Configurar un Ruptela Trace5 Trailer Tracker para enviar ubicación a Plaspy con ajustes de servidor compartido y guía práctica
keywords:
  - Configuración Ruptela Trace5 Trailer Tracker
  - Configuración servidor Ruptela Trace5
  - Configuración Trace5 Trailer Tracker para Plaspy
  - Configuración de software de seguimiento Trace5 Trailer Tracker
  - Integración tracker Ruptela con Plaspy
  - Configuración plataforma GPS Trace5
  - Guía de configuración trailer tracker
  - Configuración seguimiento de flotas Trace5
  - Configuración Trace5 LTE NB IoT GSM
  - Ajustes de servidor para tracker Plaspy
---

# Ruptela - Configuración del Trace5 Trailer Tracker

Esta página describe el contexto público de configuración para usar el Ruptela Trace5 Trailer Tracker con la plataforma Plaspy. Se enfoca en los ajustes prácticos del servidor, el flujo de trabajo y los pasos de validación necesarios para apuntar un Trace5 Trailer Tracker a Plaspy y así recibir telemetría y ubicación en la plataforma.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como referencia práctica para los ajustes comunes al integrar un Trace5 Trailer Tracker con Plaspy y consulte la documentación de Ruptela para detalles específicos del dispositivo.

## Resumen de la configuración

Esta configuración prepara el Trace5 Trailer Tracker para enviar datos de ubicación GNSS y eventos del dispositivo a Plaspy usando el endpoint y el puerto compartidos de Plaspy. El proceso alinea el destino de red y los ajustes de transporte del tracker, verifica la conectividad celular y el estado de la batería, y confirma que el dispositivo sea visible dentro de Plaspy.

- Apuntar el dispositivo al dominio o IP del servidor Plaspy para que la telemetría llegue a la plataforma
- Seleccionar el protocolo de transporte (UDP o TCP) si el dispositivo requiere elegir
- Establecer el puerto del servidor al puerto compartido que usa Plaspy
- Validar la conectividad celular y que el tracker envíe datos al servidor
- Confirmar que el dispositivo aparezca y se actualice en Plaspy después de la configuración

## Ajustes del servidor Plaspy

Use estos ajustes públicos del servidor Plaspy al configurar el Trace5 Trailer Tracker:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP; the device may be configured to use either transport on port 8888
- Plaspy automatically detects the tracker protocol so all devices can use the same port

Plaspy usa el mismo puerto para todos los dispositivos compatibles y la plataforma intentará detectar automáticamente el protocolo que utiliza el tracker.

## Requisitos típicos antes de la configuración

- Batería del equipo cargada o alimentación externa conectada para que el tracker esté encendido durante la configuración
- Conexión celular válida y SIM activa si va a usar redes móviles para la transferencia de datos
- Acceso a las herramientas oficiales de configuración de Ruptela o al software de gestión necesario para cambiar servidor y transporte
- Conocimiento de la versión de firmware del dispositivo y de las notas de la versión que puedan afectar el comportamiento de configuración
- Acceso básico a la cuenta de Plaspy o detalles de onboarding para confirmar la visibilidad del dispositivo tras la configuración
- Acceso físico al tracker para reinicios o verificación de ubicación si fuese necesario

## Cómo se conecta este tracker a Plaspy

Cuando se configura para Plaspy, el Trace5 Trailer Tracker envía datos de ubicación GNSS y eventos del dispositivo a través de redes celulares al endpoint y puerto de Plaspy. Plaspy recibe y decodifica el protocolo del tracker automáticamente para que la plataforma muestre la posición, el estado y los eventos reportados.

- El tracker envía mensajes de ubicación y estado al endpoint compartido del servidor Plaspy
- El transporte se establece usando UDP o TCP hacia el puerto 8888 según lo configurado en el dispositivo
- Plaspy realiza detección automática del protocolo y decodifica los mensajes del tracker para mostrarlos en la plataforma
- Una conexión exitosa hace que el dispositivo sea visible en Plaspy para seguimiento y monitoreo de eventos
- La validación se realiza confirmando que las actualizaciones recientes de ubicación aparecen en la interfaz de Plaspy

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración de Ruptela o al software para el Trace5 Trailer Tracker.
2. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en el campo de servidor/host del dispositivo.
3. Configure el puerto del servidor en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y guarde la elección.
5. Aplique o guarde la configuración en el dispositivo usando la herramienta del fabricante.
6. Reinicie el dispositivo si el firmware o la herramienta de configuración lo requiere.
7. Valide que el dispositivo reporte a Plaspy confirmando que aparecen actualizaciones recientes en Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos de configuración o las cadenas SMS dependen de las herramientas de Ruptela, el firmware y el método de configuración que utilice. Plaspy requiere que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte esté configurado en UDP o TCP si es seleccionable. Use la utilidad de configuración de Ruptela, la interfaz web o los comandos SMS documentados para el Trace5 Trailer Tracker para aplicar esos valores. Consulte la documentación de Ruptela para la sintaxis de comandos precisa según el firmware de su dispositivo.

## Notas sobre la configuración

- Las variaciones de firmware pueden cambiar la forma en que se ingresan servidor, puerto y transporte; siempre revise las notas de la versión del dispositivo.
- Elegir UDP frente a TCP puede afectar cómo se comportan los acuses de recibo y las retransmisiones; seleccione el transporte según sus necesidades operativas.
- El Trace5 Trailer Tracker admite opciones de conectividad celular como LTE Cat M1, NB-IoT y GSM según lo provea el dispositivo; asegúrese de que su SIM y la cobertura de la red coincidan con las capacidades del equipo.
- El dispositivo soporta cifrado TLS v1.2 para las conexiones aplicables; consulte la documentación de Ruptela para detalles de configuración TLS.
- Factores ambientales e de instalación, como la colocación en una caja IP67 y el estado de la batería, pueden afectar la frecuencia de reporte a largo plazo y la disponibilidad del dispositivo.

## Por qué usar Plaspy con esta configuración

Configurar el Ruptela Trace5 Trailer Tracker para reportar a Plaspy proporciona a las organizaciones una forma directa de centralizar los datos de ubicación y eventos de remolques. Usar los ajustes de servidor compartidos de Plaspy simplifica el despliegue en flotas, porque se usa el mismo puerto y endpoint para todos los dispositivos compatibles y la plataforma se encarga de la detección del protocolo.

Si desea conocer más sobre Plaspy y cómo la plataforma puede gestionar datos de trackers para visibilidad de flota y operaciones, visite https://www.plaspy.com. Para detalles específicos de configuración de dispositivos, comportamiento de firmware y los comandos de configuración más recientes, consulte la documentación oficial del fabricante en https://ruptela.com/ para confirmar las instrucciones actuales y las funciones compatibles.
