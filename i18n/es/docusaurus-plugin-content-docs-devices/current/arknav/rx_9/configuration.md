---
slug: /arknav/rx_9/configuration
id: rx_9-configuration
sidebar_label: Configuration
title: ArkNav - RX-9 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador ArkNav RX-9 con Plaspy usando ajustes de servidor compartido y pasos prácticos
keywords:
  - Configuración ArkNav RX-9
  - Instalación ArkNav RX-9
  - Compatibilidad RX-9 Plaspy
  - Configuración servidor Plaspy
  - Guía configuración rastreador GPS
  - Configuración rastreador vehicular
  - Seguimiento de flota RX-9
  - Configuración telemetría RX-9
  - Guía integración Plaspy
  - Configuración plataforma GPS
---

# ArkNav - Configuración RX-9

Esta página documenta el contexto público de configuración para usar el rastreador ArkNav RX-9 con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica el flujo de trabajo típico de puesta en marcha y destaca los pasos prácticos que instaladores y técnicos siguen para preparar un RX-9 para el envío de posiciones en tiempo real y la ingestión de telemetría por Plaspy. Use este contenido como referencia para integrar unidades RX-9 en un despliegue de Plaspy y consulte la documentación de ArkNav para detalles específicos del dispositivo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y las herramientas del proveedor. La guía siguiente se centra en el endpoint público de Plaspy y el puerto que usan todos los dispositivos compatibles y ofrece un flujo de configuración práctico para lograr que un RX-9 reporte a Plaspy de forma confiable.

## Resumen de la configuración

Configurar el RX-9 para Plaspy significa preparar el equipo para que envíe sus posiciones GPS y telemetría al endpoint de ingestión de Plaspy y validar que los mensajes llegan y son reconocidos por la plataforma. El objetivo es asegurarse de que el rastreador use los ajustes correctos de servidor, transporte y perfil de reporte para que la unidad aparezca y se actualice correctamente en Plaspy.

- Ingresar el endpoint compartido de Plaspy en el RX-9 para que los mensajes GPRS se reenvíen a Plaspy.
- Seleccionar la opción de transporte requerida y el puerto uniforme de Plaspy para que los mensajes sean aceptados.
- Establecer intervalos de reporte, latidos (heartbeats) y cualquier filtro de eventos necesario para sus flujos de trabajo de flota.
- Aplicar y guardar la configuración usando las herramientas de ArkNav o los métodos de configuración soportados.
- Validar la conectividad y confirmar que el RX-9 se registra y reporta a Plaspy para obtener visibilidad en tiempo real.

## Ajustes del servidor Plaspy

Use los siguientes ajustes del servidor Plaspy al configurar el RX-9. Estos valores son públicos y aplican a todos los dispositivos que se conectan a Plaspy.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte usando UDP o TCP en el puerto 8888 según la herramienta de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Asegúrese de que el RX-9 tenga una SIM activa con datos habilitados y los ajustes APN correctos para conectividad GPRS.
- Confirme que el dispositivo tenga batería suficiente o alimentación del vehículo y que esté instalado o alimentado en banco para la configuración inicial.
- Obtenga acceso al método de configuración de ArkNav requerido para su unidad, como la herramienta web del proveedor, el software de configuración o la interfaz de comandos/SMS compatible documentada por ArkNav.
- Defina el perfil de reporte previsto para el vehículo, incluyendo intervalo de latido, reporte por movimiento y umbrales de eventos.
- Anote el IMEI del dispositivo o el identificador único para poder emparejar la unidad física con los registros en Plaspy una vez que comience a reportar.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el RX-9 envía posiciones GPS, telemetría de sensores y mensajes de eventos al endpoint y puerto de ingestión compartido de Plaspy. Plaspy ingiere esos mensajes y los mapea al registro de dispositivo correspondiente para que posiciones y telemetría aparezcan en la plataforma casi en tiempo real.

- El RX-9 se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138
- Todos los mensajes se envían al puerto 8888, que Plaspy utiliza para cada dispositivo compatible
- El transporte puede ser UDP o TCP según la configuración del equipo; elija el transporte que soporte el dispositivo y configúrelo para usar el puerto 8888
- Plaspy detecta y analiza automáticamente el protocolo del rastreador, por lo que los mensajes se enrutan e interpretan sin diferencias de servidor específicas por dispositivo
- Una vez en reporte, el dispositivo envía latidos regulares y reportes de eventos para mantener la visibilidad en Plaspy

## Flujo típico de configuración

1. Acceda al método oficial de configuración de ArkNav para el RX-9, como la utilidad de configuración del proveedor o la interfaz de comandos documentada.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo indique la herramienta del fabricante.
3. Establezca el puerto de destino en 8888, que Plaspy usa para todos los dispositivos.
4. Seleccione UDP o TCP en el dispositivo si la interfaz de configuración solicita elegir el transporte.
5. Configure los intervalos de reporte, parámetros de heartbeat y cualquier umbral de eventos requerido por sus políticas operativas.
6. Aplique o guarde la configuración y realice cualquier reinicio o paso de reconexión que el dispositivo requiera.
7. Valide que el dispositivo reporta a Plaspy revisando el IMEI o el identificador en su cuenta Plaspy y confirmando mensajes recientes de ubicación y telemetría.

## Ejemplo de comandos de configuración

El RX-9 puede configurarse usando las herramientas proporcionadas por ArkNav o el conjunto de comandos del fabricante según el firmware y el canal de distribución. Los comandos y la sintaxis exacta varían por firmware y modelo regional, por lo que siga la documentación de ArkNav o la utilidad de configuración suministrada para instrucciones precisas. Si utiliza una interfaz de comandos de texto provista por ArkNav, ingrese el dominio o la IP del servidor, establezca el puerto 8888, elija UDP o TCP si es necesario, luego guarde y reinicie el dispositivo.

Nota: Debido a que la sintaxis de comandos del fabricante difiere entre versiones de firmware y herramientas, esta página no proporciona una cadena de comando universal. Consulte la documentación de ArkNav o la guía de configuración de su distribuidor para el conjunto de comandos exacto de su unidad.

## Notas de configuración

- Las diferencias de firmware pueden cambiar las opciones de configuración disponibles y los pasos exactos para establecer el servidor y el transporte. Verifique siempre la versión de firmware antes de aplicar instrucciones.
- Elegir UDP o TCP afecta las garantías de entrega de mensajes y el comportamiento en la red. Seleccione el transporte que soporte el dispositivo y pruebe la conectividad con Plaspy.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y realiza detección automática de protocolos, por lo que los ajustes a nivel de servidor son consistentes entre instalaciones.
- Use el IMEI del dispositivo o el ID único para confirmar que la unidad correcta aparece en Plaspy tras la configuración inicial.
- Para mantenimiento remoto, aproveche las capacidades OTA de ArkNav para configuración y actualización de firmware cuando estén disponibles y así mantener las unidades RX-9 desplegadas al día.

## Por qué usar Plaspy con esta configuración

Conectar unidades ArkNav RX-9 a Plaspy ofrece una forma consistente y práctica de capturar posiciones en tiempo real, telemetría del vehículo y alertas basadas en eventos a lo largo de una flota. Los ajustes de servidor compartidos de Plaspy simplifican los despliegues porque todos los dispositivos usan el mismo puerto de destino y Plaspy detecta automáticamente el protocolo del rastreador, reduciendo las diferencias de configuración por dispositivo.

Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para obtener detalles actualizados específicos del dispositivo, notas de firmware y la documentación oficial de ArkNav, verifique la información vigente en https://www.arknavgps.com.tw/
