---
slug: /arknav/r_9w/configuration
id: r_9w-configuration
sidebar_label: Configuration
title: ArkNav - R-9W Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del ArkNav R-9W para conectarlo a Plaspy con servidor compartido y detección automática de protocolo
keywords:
  - Configuración ArkNav R-9W
  - Instalación ArkNav R-9W
  - Integración R-9W con Plaspy
  - Configuración rastreador ArkNav
  - Configuración rastreador GPS R-9W
  - Configuración dispositivo Plaspy
  - Ajustes de servidor R-9W
  - Rastreo vehicular R-9W
  - Configuración rastreo de flotas
  - Configuración plataforma GPS ArkNav
---

# ArkNav - Configuración R-9W

Esta página ofrece el contexto público de configuración para utilizar el ArkNav R-9W Waterproof Vehicle GPS Tracker con la plataforma Plaspy. Resume los ajustes prácticos del servidor y el flujo de trabajo que deberá seguir para apuntar el R-9W a Plaspy, explica qué verificar antes de la integración y resalta las partes del equipo que son más relevantes para la conectividad con la plataforma. El R-9W cuenta con certificación IP67 y funciones orientadas a flotas, como batería de respaldo, detección de movimiento, detección de alimentación externa, actualizaciones OTA y soporte FTP con ACK, lo que lo hace apropiado para seguimiento en tiempo real e ingestión de telemetría.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un puerto único por dispositivo. Los pasos exactos para aplicar estos parámetros en el R-9W dependen del método de configuración de ArkNav y de la revisión de firmware o hardware del equipo, así que siga las herramientas del fabricante o las instrucciones de firmware para los nombres de menú exactos o los formatos de comandos SMS/OTA.

## Resumen de la configuración

Configurar el R-9W para Plaspy prepara la unidad para enviar ubicación, telemetría y eventos al endpoint compartido de Plaspy y valida que la plataforma reciba y muestre el dispositivo. El proceso se enfoca en el endpoint del servidor, la selección del transporte y la validación básica para que el rastreador sea visible en Plaspy.

- Apunte el servidor del dispositivo al servidor de Plaspy para que posiciones y telemetría lleguen a la plataforma.
- Seleccione el método de transporte si el equipo requiere elegir entre UDP o TCP, según el comportamiento de la red y el firmware.
- Configure el puerto del dispositivo al puerto compartido de Plaspy para que el endpoint del equipo coincida con la ingestión de Plaspy.
- Verifique la conectividad del dispositivo y la entrega de telemetría para que la unidad aparezca y se actualice correctamente en Plaspy.
- Opcionalmente confirme los ajustes FTP y ACK si planea usar OTA o características basadas en archivos para mayor fiabilidad.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el R-9W. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detectará el protocolo del rastreador automáticamente.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on device configuration
- Plaspy automatically detects the tracker protocol so no protocol selection on the platform side is required

## Requisitos típicos antes de configurar

- Energice el dispositivo y asegúrese de que el R-9W tenga una conexión de alimentación estable en el vehículo o la batería de respaldo cargada.
- Confirme que el rastreador responda y sea accesible mediante el método o la herramienta oficial de configuración de ArkNav.
- Verifique una conexión de datos GSM válida y una SIM activa con un plan de datos apropiado para la telemetría.
- Tenga acceso a su cuenta de Plaspy o al entorno de la plataforma donde validará la visibilidad del dispositivo.
- Disponga del IMEI del dispositivo o su identificador único para registro y solución de problemas con Plaspy.
- Revise la documentación de ArkNav por si existen pasos específicos de firmware o comportamientos conocidos.

## Cómo se conecta este rastreador a Plaspy

El R-9W envía posiciones, telemetría y notificaciones de eventos al endpoint y puerto del servidor Plaspy para que la plataforma pueda ingestarlos en mapas, alertas e informes. Con soporte FTP y ACK, el dispositivo también puede utilizar transferencia de archivos y mecanismos de reconocimiento por servidor para mejorar la fiabilidad de entrega.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com o 54.85.159.138.
- Todos los dispositivos envían sus datos al puerto 8888 en Plaspy y la plataforma gestiona la detección automática del protocolo.
- Actualizaciones de ubicación, eventos de movimiento y pérdida de alimentación se transmiten a Plaspy para monitoreo en tiempo real y alertas.
- El FTP con soporte ACK en el R-9W puede utilizarse para configuración OTA o entrega fiable de payloads cuando se configure según la guía de ArkNav.
- Plaspy procesa los mensajes entrantes y presenta la telemetría y el estado del dispositivo en vistas de flota y reproducción histórica.

## Flujo de trabajo recomendado para la configuración

Siga un orden práctico al configurar el R-9W para trabajar con Plaspy. Los nombres de menú y pasos exactos dependen de las herramientas y del firmware de ArkNav:

1. Acceda al método oficial de configuración de ArkNav o al software documentado por el fabricante, o use la configuración OTA de ArkNav si está disponible.
2. Introduzca la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy utilizado por todos los equipos.
4. Seleccione el transporte UDP o TCP si el firmware del R-9W exige una elección; escoja el que sea compatible con su red y con las recomendaciones de ArkNav.
5. Aplique o guarde la configuración usando la herramienta de ArkNav o el mecanismo OTA provisto por el fabricante.
6. Reinicie el dispositivo si el firmware requiere reboot para aplicar cambios de red o servidor.
7. Valide que el R-9W reporte a Plaspy comprobando la conectividad del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El ArkNav R-9W soporta configuración OTA y configuración mediante el software del fabricante. La sintaxis exacta de los comandos y la disponibilidad de comandos SMS o remotos varían según el firmware y las herramientas del proveedor, por lo que debe usar las utilidades suministradas por ArkNav o las instrucciones de firmware para los formatos correctos. Plaspy requiere que el equipo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el transporte esté en UDP o TCP si es seleccionable.

Si dispone de ejemplos de comandos ArkNav proporcionados por su proveedor o firmware que hacen referencia a servidor, puerto y transporte, aplíquelos en el orden que recomiende el fabricante y luego valide en Plaspy. Debido a que los formatos de comando difieren entre versiones de firmware, consulte la documentación de ArkNav o a su proveedor para las cadenas de comando precisas.

## Notas de configuración

- Las diferencias de firmware importan: los nombres de menú, los formatos de comando y las opciones de transporte pueden cambiar entre revisiones de firmware. Confirme los pasos exactos para su versión.
- TCP frente a UDP puede afectar el comportamiento bajo distintas condiciones de red. Elija el transporte que se alinee con las recomendaciones de ArkNav y la fiabilidad de su red celular.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la configuración del equipo debe apuntar a ese puerto.
- Utilice el IMEI o identificador del dispositivo al registrar o resolver problemas de visibilidad en Plaspy.
- Consulte los recursos técnicos de ArkNav cuando planee habilitar actualizaciones FTP OTA o mecanismos ACK para asegurar interacciones fiables con el servidor.

## Por qué usar Plaspy con esta configuración

Conectar el ArkNav R-9W a Plaspy ofrece a los operadores de flotas una vía sencilla para ingerir en tiempo real ubicación y telemetría desde un rastreador robusto con protección IP67 diseñado para entornos exigentes. La batería de respaldo del R-9W, la detección de movimiento y la detección de pérdida de alimentación externa, combinadas con la visibilidad de Plaspy, permiten alertas por robo, monitoreo operativo e informes basados en telemetría para toda la flota.

Para obtener más información sobre cómo Plaspy facilita la visibilidad de flotas y la incorporación de dispositivos visite https://www.plaspy.com. Para la configuración más reciente específica del dispositivo, comportamiento de firmware y documentación del fabricante, verifique los detalles en el sitio de ArkNav https://www.arknavgps.com.tw/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
