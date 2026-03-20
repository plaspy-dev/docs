---
slug: /cantrack/tk100b/configuration
id: tk100b-configuration
sidebar_label: Configuration
title: CanTrack - TK100B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CanTrack TK100B con los ajustes del servidor Plaspy y pasos prácticos de integración
keywords:
  - Configuración CanTrack TK100B
  - Configuración TK100B
  - Configuración CanTrack
  - Configuración rastreador Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Ajustes servidor TK100B
  - Configuración seguimiento de flotas
  - Integración plataforma GPS
  - Compatibilidad CanTrack Plaspy
---

# CanTrack - Configuración del TK100B

Esta página documenta el contexto público de configuración para usar el CanTrack TK100B Accurate Pro con Plaspy. Se enfoca en los detalles prácticos de servidor y puesta a punto necesarios para apuntar un TK100B hacia Plaspy, de modo que el dispositivo entregue ubicación y telemetría en tiempo real a través de GSM GPRS usando TCP IP. Use esta guía para comprender los ajustes compartidos de Plaspy y los pasos típicos que siguen instaladores y administradores para integrar el rastreador en la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la configuración en el dispositivo suele limitarse a la dirección del servidor, puerto, selección de transporte y cualquier APN requerido por la SIM instalada. Los pasos exactos en el equipo del fabricante y las interfaces pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Siempre contraste esta guía pública con la documentación oficial de CanTrack y con la herramienta de configuración del equipo que tenga a mano.

## Resumen de la configuración

El objetivo de este proceso es preparar el TK100B para que se comunique de forma fiable con Plaspy, validar la conectividad y habilitar la visibilidad y el control dentro de la plataforma. Una vez configurado, el rastreador reportará ubicación, estado de encendido y accesorios, eventos SOS y soportará comandos remotos como corte o restauración de motor vía relé según el conjunto de funciones de CanTrack.

- Configure los parámetros de red del equipo para que pueda alcanzar el endpoint del servidor Plaspy.
- Verifique APN y la conectividad de la SIM para que el TK100B pueda enviar telemetría TCP IP sobre GSM GPRS.
- Apunte el rastreador hacia Plaspy usando la dirección de servidor compartida y el puerto unificado que usa Plaspy.
- Valide que el dispositivo aparezca en Plaspy y envíe actualizaciones periódicas de posición y reportes de eventos.
- Confirme que los controles antirrobo y el reporte SOS sean visibles en la plataforma y funcionen según lo esperado.

## Ajustes del servidor Plaspy

Al configurar dispositivos TK100B para Plaspy, use los siguientes ajustes públicos exactamente como se muestran. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador al conectarse.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos previos típicos antes de la puesta en marcha

- El dispositivo está instalado y alimentado según las directrices de CanTrack y dentro del rango de voltaje soportado por el vehículo.
- SIM celular activa con un plan de datos habilitado para uso GPRS TCP IP y APN configurado si el operador móvil lo requiere.
- Acceso al método de configuración oficial de CanTrack para el TK100B, como la herramienta del fabricante, comandos SMS o interfaz cableada según la unidad.
- Tener anotado el IMEI o identificador único del equipo para el registro y búsqueda en Plaspy.
- Conocimientos básicos sobre si el dispositivo debe usar TCP o UDP para la telemetría saliente, aunque Plaspy detectará el protocolo automáticamente una vez conectado.
- Personal técnico calificado disponible para revisar el cableado de detección de encendido, control de relé y conexiones de accesorios si se requieren esas funciones.

## Cómo se conecta este rastreador a Plaspy

El TK100B transmite datos de ubicación y telemetría a Plaspy sobre GSM GPRS usando TCP IP o UDP según la configuración. La unidad se configura para reportar al endpoint compartido y al puerto de Plaspy, de modo que las conexiones entrantes se encaminan a la plataforma donde se parsean y se muestran en paneles, alertas y flujos de comandos remotos.

- El rastreador se configura con los ajustes de servidor Plaspy d.plaspy.com o 54.85.159.138 y puerto 8888.
- El dispositivo envía actualizaciones periódicas de posición y reportes de eventos vía TCP IP o UDP sobre GPRS.
- Plaspy ingiere la telemetría y expone seguimiento en tiempo real, reproducción de historial y alertas.
- Eventos SOS, geocercas, encendido y acciones de relé reportadas por el dispositivo se reenvían a Plaspy para notificaciones y flujos de control remoto.
- Plaspy detecta automáticamente el protocolo del dispositivo al conectarse, por lo que no se requiere registro manual del protocolo en la plataforma.

## Flujo común de configuración

1. Acceda al método o software oficial de configuración de CanTrack para el TK100B según lo provea el vendedor o la documentación del instalador.
2. Si la herramienta del dispositivo lo requiere, ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del servidor en 8888, que es el puerto que Plaspy utiliza para todos los dispositivos soportados.
4. Seleccione el tipo de transporte UDP o TCP si la interfaz de configuración solicita elegir un transporte.
5. Configure el APN y los ajustes de red relacionados con la SIM en el dispositivo si su operador móvil los exige.
6. Aplique o guarde la configuración y reinicie el equipo si la herramienta indica que es necesario un reboot.
7. Valide que el TK100B reporte a Plaspy comprobando que el dispositivo aparece en la plataforma y envía telemetría y actualizaciones iniciales de posición.

## Ejemplo de comandos de configuración

Los comandos exactos y el método para enviarlos varían según la herramienta del fabricante y el firmware. El TK100B suele configurarse usando el software de CanTrack, cadenas de comandos por SMS o una interfaz de configuración cableada según la unidad y el firmware instalado. Debido a que los comandos son específicos del proveedor y pueden cambiar con el firmware, consulte la documentación de CanTrack o su proveedor local para la sintaxis precisa y el orden recomendado.

Si utiliza configuración por SMS como referencia para otros modelos de CanTrack, esos proveedores normalmente publican plantillas SMS para ajustar servidor y puerto. Para el TK100B consulte la lista oficial de comandos de CanTrack proporcionada con su dispositivo o disponible en los recursos técnicos de CanTrack.

## Notas sobre la configuración

- Las versiones de firmware y las variantes regionales pueden cambiar el conjunto de comandos disponibles y la interfaz de configuración; siempre revise las notas de la versión del firmware al solucionar problemas.
- La elección entre TCP y UDP puede afectar el comportamiento de entrega en redes pobres; Plaspy soporta ambos y detectará automáticamente el protocolo que use el dispositivo.
- Asegúrese de que la SIM tenga datos móviles activos y que el APN sea el correcto; la ausencia o configuración incorrecta del APN es la causa más común de fallas en las conexiones TCP IP.
- Registre el IMEI del dispositivo y mapeelo en Plaspy después de que el dispositivo se conecte con éxito para poder identificar y gestionar el activo.
- Para funciones como corte de motor por relé o voz bidireccional, verifique el cableado y los permisos durante la instalación y confirme que los eventos se registran en Plaspy tras la configuración.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack TK100B con Plaspy brinda a las organizaciones una vía práctica hacia la visibilidad centralizada de vehículos, alertas de eventos confiables y flujos de control remoto. La telemetría del TK100B sobre encendido, SOS, geocercas y señales de accesorios se integra en Plaspy para soportar monitoreo operativo, respuesta a incidentes y tareas de control de flota que mejoran la seguridad y la eficiencia.

Para conocer más sobre Plaspy y cómo gestiona las integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, notas de firmware y referencias oficiales de comandos consulte al fabricante en https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
