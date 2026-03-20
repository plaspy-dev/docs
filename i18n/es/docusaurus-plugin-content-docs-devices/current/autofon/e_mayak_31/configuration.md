---
slug: /autofon/e_mayak_31/configuration
id: e_mayak_31-configuration
sidebar_label: Configuration
title: AutoFon - E-Mayak 3.1 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar AutoFon E-Mayak 3.1 con Plaspy usando ajustes de servidor compartidos e integración por SMS
keywords:
  - Configuración AutoFon E-Mayak 3.1
  - Configuración AutoFon E-Mayak
  - AutoFon E-Mayak Plaspy
  - Configuración rastreador GPS E-Mayak 3.1
  - Configuración servidor Plaspy
  - Integración rastreador con Plaspy
  - Configurar rastreador GPS por SMS
  - Configuración seguimiento de vehículos
  - Seguimiento de activos E-Mayak
  - Integración SMS rastreador GPS
---

# AutoFon - E-Mayak 3.1 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador AutoFon E-Mayak 3.1 con Plaspy. Se centra en pasos prácticos y en los ajustes de servidor compartidos necesarios para integrar el E-Mayak 3.1 en los flujos de trabajo de Plaspy. El E-Mayak 3.1 es un rastreador con prioridad SMS pensado para operación autónoma prolongada; utiliza mensajes SMS para reportar posición y telemetría que pueden reenviarse a Plaspy para visualización e informes.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos realizados en el equipo del fabricante pueden variar según la revisión de firmware, la versión de hardware, el tipo de instalación o las herramientas del proveedor. Esta página explica los valores públicos del servidor de Plaspy y enfoques prácticos para la integración del E-Mayak 3.1 basada en SMS, a la vez que recomienda verificar los comandos y el comportamiento específico del dispositivo con la documentación del fabricante.

## Resumen de la configuración

El objetivo de la configuración para el E-Mayak 3.1 es preparar el rastreador y cualquier herramienta intermedia de puerta de enlace SMS o reenvío para que los mensajes SMS del dispositivo sean recibidos por Plaspy y se muestren en la plataforma. Debido a que este modelo reporta principalmente por SMS en lugar de telemetría GPRS continua, la integración normalmente emplea reenvío manual, una puerta de enlace SMS o un pequeño servicio que publique el contenido SMS en Plaspy.

- Configure el dispositivo y la puerta de enlace SMS para reenviar mensajes de posición y telemetría a Plaspy.
- Verifique que el dispositivo pueda enviar los SMS necesarios y que la SIM tenga habilitado el envío de SMS.
- Asegúrese de que los mensajes reenviados lleguen al endpoint de Plaspy para su análisis y mapeo.
- Confirme que se reciben mensajes de latido y telemetría para que el dispositivo aparezca como activo en Plaspy.
- Pruebe un flujo de solicitud de ubicación bajo demanda o recuperación para verificar la visibilidad de extremo a extremo en la plataforma.

## Ajustes del servidor Plaspy

Use estos datos públicos de conexión de Plaspy al configurar su puerta de enlace o dispositivos con capacidad IP. Plaspy usa el mismo puerto para todos los dispositivos soportados y la detección de protocolo es automática en la plataforma.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Tenga en cuenta que el E-Mayak 3.1 prioriza SMS. Cuando los mensajes SMS se reenvían a Plaspy mediante una puerta de enlace o servicio de relé, ese servicio debe usar el dominio o la IP y el puerto indicados arriba para entregar los datos al endpoint de ingestión de Plaspy.

## Requisitos típicos antes de la configuración

- Un AutoFon E-Mayak 3.1 alimentado con baterías instaladas y el dispositivo respondiendo a comandos SMS.
- Una tarjeta SIM en el dispositivo con envío de SMS habilitado y saldo suficiente para comandos e informes.
- Acceso al método oficial de configuración de AutoFon para el E-Mayak 3.1, por ejemplo la interfaz de comandos SMS y el PIN del dispositivo si es necesario.
- Un plan sobre cómo llegarán los SMS a Plaspy, por ejemplo una puerta de enlace SMS a HTTP o un proceso de reenvío manual.
- Cobertura de la red GSM en el lugar de instalación suficiente para enviar y recibir SMS.
- El número del propietario y el PIN de configuración para permitir cambios en los ajustes del dispositivo y parámetros de reenvío.

## Cómo se conecta este rastreador a Plaspy

Dado que el E-Mayak 3.1 reporta principalmente por SMS, la integración con Plaspy suele encaminar el contenido SMS hacia Plaspy en lugar de que el rastreador abra una sesión IP persistente. En las configuraciones integradas, una puerta de enlace SMS o un servicio de reenvío publica el contenido SMS parseado al endpoint y puerto del servidor Plaspy.

- El dispositivo envía coordenadas GPS y telemetría por SMS siguiendo los formatos de mensaje del fabricante.
- Los SMS pueden ser reenviados por una puerta de enlace o servicio a Plaspy usando d.plaspy.com o 54.85.159.138 y el puerto 8888.
- Mensajes de latido y estado por SMS se usan para rastrear la salud del dispositivo en los paneles de Plaspy.
- SMS de seguridad y telemetría, como alertas de batería o eventos relacionados con el PIN, son parseados por Plaspy cuando se reenvían.
- Si interviene un intermediario con capacidad IP, se puede elegir UDP o TCP en el puerto 8888 para entregar los mensajes parseados a Plaspy; la plataforma detectará automáticamente el protocolo.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de AutoFon o a la interfaz de comandos SMS del E-Mayak 3.1 usando el PIN y los comandos documentados por el fabricante.
2. Configure dónde se reenviarán o cómo se recopilarán los mensajes SMS para la ingestión en Plaspy. Introduzca d.plaspy.com o 54.85.159.138 como destino en su puerta de enlace SMS o herramienta de reenvío.
3. Establezca el puerto de destino en 8888 en la configuración de la puerta de enlace o del relé y seleccione UDP o TCP si la herramienta requiere elegir un transporte.
4. Aplique o guarde la configuración en la puerta de enlace, el servicio de relé o la herramienta de configuración del dispositivo.
5. Reinicie la puerta de enlace, el servicio de relé o el dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
6. Envíe una ubicación de prueba o solicite una posición bajo demanda desde el E-Mayak 3.1 y verifique que el mensaje llegue y sea parseado por Plaspy.
7. Confirme que el dispositivo aparece como activo en Plaspy y que se registran telemetrías como batería y mensajes de latido.

## Ejemplos de comandos de configuración

El E-Mayak 3.1 se configura principalmente mediante comandos SMS usando la sintaxis oficial de AutoFon y un PIN de configuración. Los comandos SMS exactos y las secuencias varían según el firmware y los proporciona AutoFon en su documentación de producto. Dado que los comandos del fabricante no se incluyen aquí, consulte el manual de usuario de AutoFon para los comandos SMS precisos para cambiar objetivos de reporte, números de propietario o ajustes protegidos por PIN.

Si emplea una puerta de enlace SMS a API para reenviar mensajes a Plaspy, configure la puerta de enlace para POSTear o reenviar el SMS parseado al endpoint de Plaspy en d.plaspy.com puerto 8888 usando UDP o TCP según la capacidad de su puerta de enlace. Plaspy detectará automáticamente el protocolo del rastreador al recibir los datos.

## Notas de configuración

- El E-Mayak 3.1 prioriza SMS y no ofrece telemetría GPRS continua. La integración con Plaspy normalmente utiliza un enfoque de reenvío de SMS o entrada manual.
- El firmware y los formatos de mensaje pueden variar entre lotes de producción o por herramientas de proveedores. Verifique la sintaxis de comandos SMS y las funciones disponibles contra la documentación oficial de AutoFon.
- Al configurar una puerta de enlace para reenviar mensajes a Plaspy, elija UDP o TCP en el puerto 8888 según las capacidades de su puerta de enlace. Plaspy usa el mismo puerto para todos los dispositivos y maneja la detección del protocolo automáticamente.
- Mantenga seguro el PIN del dispositivo y la información del número del propietario. Los comandos protegidos por PIN forman parte del modelo de seguridad del dispositivo.
- Revise el saldo de la SIM y la capacidad de envío de SMS antes de la validación final para evitar mensajes perdidos durante las pruebas.

## Por qué usar Plaspy con esta configuración

Usar el AutoFon E-Mayak 3.1 con Plaspy ofrece una solución práctica para escenarios de rastreo de larga duración y bajo mantenimiento donde la vida de batería y la discreción son prioritarias. Para activos y situaciones que admiten verificaciones de ubicación bajo demanda y telemetría basada en SMS, reenviar los mensajes del E-Mayak 3.1 a Plaspy permite mapeo, registro y supervisión operativa básica sin conexiones de datos continuas.

Learn more about Plaspy and how it can ingest SMS based device messages at https://www.plaspy.com. For the most current device specific commands, firmware details, and configuration procedures for the E-Mayak 3.1 please verify the latest information on the manufacturer site https://www.autofon.ru/.
