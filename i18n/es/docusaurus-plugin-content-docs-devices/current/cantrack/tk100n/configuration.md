---
slug: /cantrack/tk100n/configuration
id: tk100n-configuration
sidebar_label: Configuration
title: CanTrack - TK100N Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar el CanTrack TK100N con Plaspy, incluye ajustes de servidor y pasos para reportes de ubicación y eventos
keywords:
  - Configuración CanTrack TK100N
  - Instalación CanTrack TK100N
  - CanTrack TK100N Plaspy
  - Configuración servidor TK100N
  - Configuración TK100N GT06N
  - Configuración rastreador GPS
  - Configuración rastreo vehicular
  - Configuración servidor Plaspy
  - Configuración rastreo de flotas
  - Configuración GPRS TK100N
---

# CanTrack - TK100N Configuración

Esta página describe el contexto público de configuración para usar el CanTrack TK100N con Plaspy. Explica los ajustes de servidor prácticos y el flujo de trabajo necesarios para que el TK100N reporte ubicación, estado de ACC y eventos de alarma a la plataforma Plaspy. Las indicaciones se centran en el endpoint compartido de Plaspy y las acciones típicas del lado del fabricante para apuntar un dispositivo compatible con GT06N, como el TK100N, hacia la plataforma para seguimiento en vivo y control remoto.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que la mayoría de los equipos compatibles con GT06N pueden incorporarse sin entradas de servidor específicas por protocolo. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la herramienta del proveedor empleada para configurar el TK100N; por ello las instrucciones a continuación son una guía pública y práctica, no un sustituto del manual del dispositivo.

## Resumen de la configuración

Configurar el TK100N para Plaspy prepara el dispositivo para enviar datos de posición y eventos al servidor de Plaspy, valida la conectividad por red móvil y habilita la visibilidad en el panel de Plaspy. El TK100N es compatible con GT06N y soporta reporte por GPRS/TCP IP con respaldo por SMS, lo que se alinea con el análisis automatizado de protocolos y el manejo unificado de servidores de Plaspy.

- Apunte el servidor del dispositivo a Plaspy usando el dominio o la IP proporcionada y el puerto compartido para que los paquetes lleguen al endpoint correcto.
- Configure la opción de transporte del dispositivo a UDP o TCP si la herramienta de configuración del TK100N solicita seleccionar un modo de transporte.
- Verifique el APN y la conectividad de datos móviles para que el rastreador alcance Plaspy mediante GPRS.
- Valide el reporte comprobando que los mensajes de posición y alarma son visibles en Plaspy después de arrancar el dispositivo.
- Mantenga el firmware y los comandos de configuración acordes con la documentación del fabricante para evitar comportamientos inesperados.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador en conexiones entrantes

Plaspy usa el mismo puerto para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador, por lo que sólo necesita apuntar el TK100N al endpoint y puerto de Plaspy.

## Requisitos típicos antes de la configuración

- Un TK100N alimentado y correctamente conectado al arnés del vehículo y accesible para configuración.
- Una tarjeta SIM 2G activa con datos habilitados y el APN correcto configurado para reporte por GPRS.
- Acceso al método de configuración oficial de CanTrack o al software suministrado por el proveedor/instalador para ajustar servidor, puerto, transporte y opciones de protocolo.
- Una cuenta Plaspy o una instancia de seguimiento lista para recibir reportes del dispositivo y mostrar la telemetría.
- Herramientas básicas para pruebas, como una fuente de alimentación temporal, un número telefónico capaz de recibir SMS para comandos de respaldo o un cable de configuración si el dispositivo lo requiere.
- Conocimiento del IMEI o identificador único del dispositivo para poder emparejarlo en Plaspy una vez que reporte.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el TK100N envía actualizaciones de ubicación y paquetes de eventos al endpoint de Plaspy usando su formato de mensajes compatible con GT06N a través de datos móviles. Plaspy recibe esos paquetes en el puerto compartido y procesa automáticamente el protocolo para que la telemetría del dispositivo sea visible en la plataforma.

- El rastreador reporta al endpoint y puerto compartidos de Plaspy usando el transporte configurado.
- Mensajes de posición y eventos como ACC encendido/apagado, SOS, vibración y pérdida de alimentación se reenvían a Plaspy para alertas y registro.
- El dispositivo puede usar SMS como respaldo para configuración o alarmas críticas cuando GPRS no esté disponible.
- Plaspy analiza mensajes formateados en GT06N y mapea la telemetría al panel y a las herramientas de reporte.
- Comandos remotos emitidos desde Plaspy o un servidor configurado pueden usarse para control de relé o solicitudes de estado si el dispositivo y la normativa local lo permiten.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de CanTrack o al software proporcionado por el fabricante o proveedor.
2. Busque la opción de servidor e ingrese el dominio d.plaspy.com o la IP del servidor 54.85.159.138.
3. Ajuste el puerto a 8888, que es el que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar uno.
5. Seleccione el protocolo GT06N en el dispositivo si existe una opción de protocolo y el firmware no lo detecta automáticamente.
6. Guarde o aplique la configuración y reinicie el dispositivo si la herramienta o el firmware exige un reinicio para que los cambios tengan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que los mensajes de posición y eventos aparecen en su instancia de Plaspy.

## Ejemplos de comandos de configuración

La sintaxis exacta de los comandos para el TK100N depende del firmware del fabricante y de la interfaz de configuración que utilice. Los dispositivos CanTrack suelen soportar comandos SMS y por serie/USB para configurar servidor y APN, pero estos comandos varían según la versión de firmware.

Dado que los comandos del fabricante pueden cambiar y existen múltiples herramientas de proveedor, consulte el manual del CanTrack TK100N o a su suministrador para obtener los comandos SMS o de la herramienta de configuración precisos para establecer servidor, puerto, APN y protocolo. Al usar comandos SMS, normalmente suministrará el dominio o la IP y el puerto de Plaspy junto con las credenciales del APN cuando sean necesarias.

## Notas de configuración

- Las diferencias de firmware y las variantes regionales de hardware pueden cambiar las opciones de configuración disponibles y la sintaxis de comandos; confirme siempre los comandos con la documentación del dispositivo.
- Si su herramienta de configuración permite TCP y UDP, pruebe ambos modos de transporte si la conectividad es intermitente; Plaspy acepta cualquiera de los dos en el puerto 8888.
- El respaldo por SMS es útil para resolución remota cuando GPRS no está disponible, pero suele ser más lento y puede no incluir telemetría completa.
- Asegúrese de ingresar correctamente los ajustes APN de su operador móvil cuando el dispositivo requiera APN; los marcadores de posición como {{apn}} {{apnu}} o {{apnp}} pueden aparecer en herramientas y deben reemplazarse por los valores del operador.
- Mantenga un registro del IMEI del dispositivo y de la configuración aplicada para la gestión a largo plazo de la flota y la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack TK100N con Plaspy ofrece una vía práctica para seguimiento vehicular fiable, alertas de eventos y control remoto para operaciones de flota y seguridad. La compatibilidad GT06N del TK100N y su reporte por GPRS/TCP IP funcionan bien con el análisis automático de protocolos y el manejo unificado de servidores de Plaspy, lo que permite una incorporación rápida y una ingestión consistente de telemetría para monitoreo, reportes e intervenciones.

Para saber más sobre Plaspy y los flujos de trabajo soportados visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información más reciente en la web oficial de CanTrack https://www.cantrackgps.com/ antes de desplegar o modificar ajustes del dispositivo.
