---
slug: /reachfar/rf_v13/protocol
id: rf_v13-protocol
sidebar_label: Protocol
title: Reachfar - RF-V13 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Reachfar RF-V13 que explica cómo reporta alarmas y ubicación a Plaspy y cómo configurar la conexión
keywords:
  - Protocolo Reachfar RF V13
  - Protocolo GPS Reachfar RF V13
  - Protocolo Reachfar RF V13 para Plaspy
  - Protocolo de comunicación RF V13
  - Protocolo de rastreo RF V13
  - Protocolo de alarma puerta ventana Reachfar
  - Reporte GPRS RF V13
  - Integración de alarmas SMS RF V13
  - Integración de seguridad perimetral Reachfar
  - Compatibilidad de dispositivos Plaspy
---

# Reachfar - Protocolo RF-V13

Esta página describe el contexto público del protocolo para usar el Reachfar RF-V13 con Plaspy. Se centra en cómo el RF-V13 reporta alarmas, telemetría básica y ubicación a una plataforma remota, y qué esperar al integrar el equipo con Plaspy. La información está pensada para usuarios técnicos e integradores que necesitan una comprensión clara de los modos de reporte del dispositivo y de cómo Plaspy consume esos reportes.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del tracker cuando el equipo está correctamente configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo en el RF-V13 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para formatos de comando específicos o comportamientos dependientes del firmware consulte la documentación de Reachfar antes de tomar decisiones de despliegue.

## Resumen del protocolo

El RF-V13 utiliza métodos celulares para entregar información de alarma y ubicación desde su sensor magnético y subsistemas de posicionamiento a un servicio remoto. En la práctica, el tracker puede enviar notificaciones de eventos, ubicación aproximada mediante LBS y posiciones GPS cuando están disponibles, además de información básica de salud del dispositivo que Plaspy registra y presenta a los usuarios. El RF-V13 está diseñado para casos de uso de seguridad perimetral, por lo que la cadencia de reportes y el contenido de la carga se optimizan para eventos de alarma más que para telemetría continua de flota.

- Permite la entrega de eventos de alarma desde el sensor magnético de puertas o ventanas a Plaspy para alertas y registro.
- Envía información de posicionamiento LBS y GPS cuando está disponible para contextualizar alarmas y monitoreo de activos.
- Transmite estado de batería y conectividad para que Plaspy pueda hacer seguimiento del estado del dispositivo a lo largo del tiempo.
- Soporta tanto reporte GPRS TCP/IP como alertas SMS formateadas como métodos de transporte alternativos hacia la plataforma remota.
- Ofrece verificación de voz bidireccional separada del reporte de datos, útil para la confirmación de alarmas por parte de operadores.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un endpoint y puerto compartidos e incluye detección automática de protocolo para identificar mensajes procedentes de una amplia variedad de dispositivos. Cuando un RF-V13 está configurado para enviar sus reportes al endpoint de Plaspy, la plataforma reconocerá el formato entrante y procesará alarmas y actualizaciones de ubicación sin que, en la mayoría de los casos, el usuario tenga que seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un endpoint y puerto uniforme, por lo que los mismos ajustes de conexión aplican a todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del tracker a partir de los reportes entrantes y dirige los datos a los parsers adecuados.
- Normalmente el usuario solo necesita confirmar que el dispositivo está configurado para reportar al endpoint de Plaspy para que la detección automática funcione.
- Una configuración correcta en el RF-V13 garantiza que los eventos y datos de ubicación lleguen en un formato que Plaspy pueda ingerir y mostrar.

## Transporte y configuración de conexión

El RF-V13 puede reportar a un servicio remoto usando sus capacidades de datos celulares o mediante SMS. Para integrarlo con Plaspy, el dispositivo puede apuntar al endpoint de Plaspy usando reporte GPRS TCP/IP estándar o enviar mensajes SMS formateados que Plaspy ingiere. Plaspy publica un único endpoint de servidor y puerto para el reporte de dispositivos y acepta los protocolos de transporte comunes soportados por trackers celulares.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto de escucha compartido de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El RF-V13 puede usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del equipo.
- El reporte por SMS es una alternativa cuando GPRS no se utiliza o no está disponible en una implementación.
- Asegúrese de que el transporte elegido en el RF-V13 coincida con la configuración esperada por el endpoint remoto.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware entre unidades RF-V13 pueden cambiar el contenido exacto de los reportes y los comandos de configuración disponibles.
- Las revisiones de hardware y las versiones de firmware regionales pueden afectar si el dispositivo usa solo LBS, posición GPS en tiempo real o ambas para el reporte de ubicación.
- Seleccionar TCP frente a UDP en el dispositivo puede alterar el comportamiento de entrega; elija el transporte compatible con su despliegue y confirme la configuración en Plaspy.
- Los formatos de reporte por SMS pueden variar según el firmware o las plantillas del fabricante; confirme la plantilla SMS si planea utilizar ingestión por SMS.
- Verifique APN y ajustes GPRS en el RF-V13 para que las sesiones de datos puedan alcanzar el endpoint de Plaspy de forma confiable.
- Valide la compatibilidad con la documentación de Reachfar para la revisión de firmware exacta antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el RF-V13 ayuda a garantizar que las alarmas y los datos de ubicación lleguen a Plaspy de forma precisa y consistente. Tener claridad sobre las opciones de transporte, los tipos de reporte esperados y las capacidades del dispositivo reduce el tiempo de configuración y facilita la resolución de problemas cuando faltan eventos o la ubicación muestra imprecisiones inesperadas.

- Asegura la selección correcta del transporte para que los reportes lleguen a Plaspy sin bloqueos o enrutamientos erróneos.
- Ayuda a interpretar diferencias de precisión entre LBS y GPS y a establecer expectativas realistas.
- Facilita la configuración del APN y de los intervalos de reporte para equilibrar la vida útil de la batería y la oportunidad de las alertas.
- Apoya en los pasos de solución cuando las alarmas no aparecen en Plaspy o llegan en un formato incorrecto.
- Orienta sobre decisiones relacionadas con actualizaciones de firmware y reemplazos de hardware basadas en el comportamiento del protocolo.

## Por qué usar Plaspy con este protocolo

Integrar el RF-V13 con Plaspy proporciona a las organizaciones centralización de alertas e historial de eventos para dispositivos de seguridad perimetral. El RF-V13 es compacto y está diseñado específicamente para detección de intrusiones en puertas y ventanas; cuando reporta alarmas y posicionamiento a Plaspy vía GPRS TCP/IP o SMS, la plataforma ofrece marcas de tiempo, georreferenciación y flujos de notificación para que los equipos puedan responder con rapidez.

Si desea obtener más información sobre Plaspy y cómo puede trabajar con el RF-V13, por favor visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo y las notas de firmware con Reachfar en https://www.reachfargps.com/.
