---
slug: /cantrack/3000mah/configuration
id: 3000mah-configuration
sidebar_label: Configuration
title: CanTrack - 3000mAh Configuration
sidebar_class_name: menu_item_tracker
description: Ajustes públicos y configuración de servidor para integrar el rastreador CanTrack 3000mAh con la plataforma Plaspy
keywords:
  - Configuración CanTrack 3000mAh
  - Instalación CanTrack 3000mAh
  - Configuración de rastreador Plaspy
  - Rastreador de activos GF40
  - Ajustes de servidor para rastreador GPS
  - Configuración de rastreador magnético
  - Configuración APN e IP del rastreador
  - Configuración de plataforma de seguimiento de flotas
  - Configuración de telemetría GPS
  - Configuración de monitoreo de activos
---

# CanTrack - Configuración 3000 mAh

Esta página documenta el contexto público de configuración para usar el rastreador magnético CanTrack GF40 3000mAh con Plaspy. Se enfoca en los pasos prácticos y centrados en la plataforma que usted debe seguir para apuntar el dispositivo a Plaspy y validar que envía ubicación y estado correctamente. El contenido abajo usa la descripción del dispositivo como base y detalla los ajustes compartidos de Plaspy necesarios para la integración.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Para comandos específicos del dispositivo y opciones avanzadas consulte la documentación oficial de CanTrack indicada al final de esta página.

## Resumen de configuración

Configurar el GF40 3000mAh para Plaspy prepara el rastreador para transmitir datos de posición y estado a un endpoint centralizado de la plataforma. El objetivo es establecer los parámetros de red del dispositivo para que se conecte de forma fiable y luego verificar que los reportes lleguen a Plaspy para monitoreo, alertas y registro.

- Apuntar el rastreador al servidor de Plaspy y usar el puerto compartido que emplean todos los dispositivos.
- Configurar el tipo de transporte (UDP o TCP) si el firmware del dispositivo lo requiere.
- Verificar que el APN y los datos de la SIM estén correctos para que el rastreador abra una sesión de datos GPRS o LTE.
- Validar que el rastreador informe ubicación, batería y eventos de alarma a Plaspy tras la configuración.
- Utilizar la configuración por SMS o la herramienta del fabricante según el manual del dispositivo para cambiar IP o dominio y los ajustes de transporte.

## Ajustes del servidor de Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar el rastreador. Plaspy requiere el mismo puerto para todos los dispositivos y detectará automáticamente el protocolo del rastreador cuando lleguen datos.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP when the device requires a transport selection
- Automatic protocol detection in Plaspy so the platform identifies the device protocol once it connects

## Requisitos típicos antes de la configuración

- Batería del rastreador cargada y listo para encenderse para la configuración y las pruebas.
- Una tarjeta SIM activa con datos habilitados y el APN configurado en el dispositivo.
- Acceso al método oficial de configuración de CanTrack, por ejemplo el conjunto de comandos por SMS o el software del fabricante.
- Identificador del dispositivo o número de serie disponible para resolución de problemas y mapeo en la plataforma.
- Cobertura celular básica en la ubicación de instalación para permitir sesiones de datos hacia Plaspy.
- Si usa configuración por SMS, asegúrese de conocer la contraseña SMS por defecto que el dispositivo requiere para comandos remotos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para reportar a Plaspy, el GF40 abrirá una conexión de datos al endpoint compartido de Plaspy y enviará paquetes de ubicación y estado según su modo de reporte (tiempo real, por intervalo o por reloj). Plaspy recibe esos paquetes en el puerto común y los procesa como trayectos de vehículo o activo, alertas y telemetría.

- El rastreador se apunta al dominio o IP del servidor de Plaspy y usa el puerto 8888 para todo el tráfico del dispositivo.
- Configure el transporte del dispositivo como UDP o TCP si es necesario; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Las actualizaciones de posición, el estado de batería y las notificaciones de alarma se envían desde el rastreador a Plaspy para visibilidad y generación de alertas.
- Después del primer reporte exitoso Plaspy reconocerá el protocolo del dispositivo y comenzará el procesamiento habitual para las funciones de la plataforma.
- Se pueden usar ajustes remotos por SMS y configuraciones desde la plataforma para afinar intervalos de reporte y umbrales de alarma antes de un despliegue masivo.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CanTrack o al software descrito por el fabricante, por ejemplo el conjunto de comandos por SMS o la herramienta del proveedor.
2. Introduzca la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 en el campo IP o servidor del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde los cambios de configuración usando el software del dispositivo o enviando los comandos SMS correspondientes.
6. Reinicie el dispositivo si el procedimiento del fabricante lo requiere para aplicar los cambios de red y servidor.
7. Valide que el dispositivo esté reportando a Plaspy observando las ubicaciones y estados entrantes en la plataforma y confirmando que el dispositivo se vuelve visible en el procesamiento de la plataforma.
8. Ajuste el intervalo de reporte y las configuraciones de alarma según sea necesario para equilibrar la duración de la batería y los requisitos de seguimiento.

## Comandos de configuración de ejemplo

El CanTrack GF40 soporta configuración vía conjunto de comandos SMS y herramientas del fabricante, pero los comandos exactos varían según el firmware y las compilaciones regionales. Debido a que los comandos son específicos del fabricante y no están incluidos en el modelConfiguration público de esta página, siga el manual del dispositivo para la sintaxis SMS precisa o use la utilidad oficial de CanTrack. Los flujos típicos incluyen comandos para ajustar APN, dominio o IP del servidor, puerto 8888, tipo de transporte y para consultar el estado del dispositivo.

Si utiliza marcadores de posición en los SMS, los siguientes suelen aparecer en la documentación del fabricante:
- {{apn}} para el nombre del APN celular
- {{apnu}} para el nombre de usuario del APN si se requiere
- {{apnp}} para la contraseña del APN si se requiere

Consulte el manual de CanTrack para los formatos exactos de comando y ejemplos de líneas SMS al realizar cambios.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los SMS y los nombres de los menús de configuración. Confirme siempre el conjunto de comandos con la versión de firmware del dispositivo.
- Elegir TCP o UDP puede afectar las características de entrega de mensajes y el consumo de batería según cómo el dispositivo gestione las sesiones. Pruebe ambos transportes si tiene dudas.
- El GF40 admite configuración por SMS, por lo que a menudo puede configurar la IP o dominio del servidor y el puerto de forma remota sin conexión física.
- La documentación del dispositivo indica que la contraseña SMS por defecto es 123456 para la aceptación de comandos; considere cambiar las contraseñas según la guía del fabricante.
- Plaspy utiliza un único puerto común para todos los dispositivos y su plataforma detectará el protocolo automáticamente cuando el dispositivo se conecte.

## Por qué usar Plaspy con esta configuración

Usar el GF40 3000mAh con Plaspy permite visibilidad centralizada para el seguimiento de activos de larga duración. La batería recargable del dispositivo, sus modos de reporte múltiples y el control remoto por SMS permiten a los instaladores ajustar la cadencia de reportes y las alarmas según el ciclo de uso del activo, mientras Plaspy consolida el historial de ubicaciones, eventos de geocerca y alertas de batería para los equipos de operaciones y seguridad.

Learn more about Plaspy on the main website https://www.plaspy.com and verify any device specific configuration details, firmware behavior, and manufacturer commands at the official CanTrack support site https://www.cantrackgps.com/. Manufacturer specifications and setup methods can change over time so confirm the latest instructions on the CanTrack site before final deployment.
