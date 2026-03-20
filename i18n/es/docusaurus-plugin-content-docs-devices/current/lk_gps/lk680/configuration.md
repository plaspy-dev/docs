---
slug: /lk_gps/lk680/configuration
id: lk680-configuration
sidebar_label: Configuration
title: LK-GPS - LK680 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador LK680 con Plaspy, ajustes del servidor y pasos prácticos de configuración
keywords:
  - Configuración LK-GPS LK680
  - Configuración LK680
  - LK-GPS LK680 Plaspy
  - Configuración de servidor LK680
  - Configuración rastreador GPS LK680
  - Configuración de dispositivo Plaspy
  - Configuración rastreador GPS para e-bike
  - Configuración rastreador micromovilidad
  - Seguimiento de flotas LK680
  - Configuración rastreador GPS Plaspy
---

# LK-GPS - Configuración del LK680

Esta página describe el contexto público de configuración para usar el rastreador LK-GPS LK680 con Plaspy. Se enfoca en los ajustes prácticos del servidor y los pasos típicos necesarios para apuntar el dispositivo a Plaspy, de modo que pueda enviar posición, eventos de movimiento y telemetría de batería a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que utilice esta guía junto con las herramientas y la documentación oficiales de LK-GPS.

## Resumen de la configuración

El objetivo de esta configuración es preparar el LK680 para comunicarse de forma fiable con Plaspy y así poder monitorear bicicletas eléctricas o vehículos livianos en tiempo real. Normalmente, la configuración consiste en ingresar el endpoint y puerto del servidor Plaspy, seleccionar el tipo de transporte si es necesario y verificar la conectividad del dispositivo tras guardar los ajustes.

- Configure el LK680 para que reporte su posición GNSS y los eventos del dispositivo al endpoint del servidor de Plaspy.
- Ajuste el transporte y el puerto del dispositivo para que los paquetes de subida lleguen al servicio de ingestión de Plaspy.
- Valide la conectividad celular y la frecuencia de reporte para equilibrar la capacidad de respuesta con la duración de la batería.
- Confirme que el dispositivo aparece en Plaspy y que los eventos de movimiento, geocerca y batería son visibles.
- Use las herramientas del fabricante para guardar los ajustes y, si es necesario, reinicie el rastreador para que los cambios surtan efecto.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos al configurar el LK680 para Plaspy:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP — the device may be configured using UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

Aplique estos valores exactamente en la interfaz de configuración de LK-GPS o en la herramienta de comandos/SMS para que el rastreador informe al endpoint de ingestión de Plaspy.

## Requisitos típicos antes de la configuración

- Un LK680 con batería cargada o con alimentación y acceso a su interfaz de configuración o canal de comandos/SMS según lo provea LK-GPS.
- Una SIM celular activa con un plan de datos compatible con redes 2G o 4G según lo exija el dispositivo y su región.
- Acceso al método de configuración oficial de LK-GPS, como la herramienta web del proveedor, la app móvil, comandos SMS o la herramienta USB/serial, según el kit del dispositivo.
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo aparece y envía datos correctamente.
- Conocimiento de los ajustes APN requeridos por el operador de la SIM para que el rastreador pueda establecer la conexión de datos móviles.
- Nota sobre firmware: confirme la versión de firmware del dispositivo y la guía del proveedor antes de cambiar ajustes.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el LK680 envía su posición GNSS, eventos de movimiento y vibración, y el estado de la batería al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos entrantes, detecta automáticamente el protocolo enviado por el rastreador y presenta la telemetría en el panel y el sistema de notificaciones de Plaspy.

- El rastreador se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Los datos pueden enviarse mediante UDP o TCP según la configuración del dispositivo y el entorno de red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se utiliza el mismo puerto en los dispositivos compatibles.
- Los reportes incluyen actualizaciones de posición, alertas de movimiento y notificaciones de nivel de batería para visibilidad en Plaspy.
- Una integración exitosa habilita ubicación en tiempo real, alertas de geocerca y registro de eventos en la plataforma Plaspy.

## Flujo de trabajo común de configuración

1. Acceda al método o software de configuración oficial de LK-GPS provisto por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP del servidor 54.85.159.138 como destino.
3. Establezca el puerto de destino en 8888 para los reportes de subida.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte; seleccione el transporte acorde con la fiabilidad de su red y las recomendaciones del dispositivo.
5. Guarde o aplique la configuración usando la herramienta del fabricante o el canal de comandos.
6. Reinicie el LK680 si la herramienta de configuración o el firmware requiere un reinicio para aplicar los cambios.
7. Valide que el dispositivo informe a Plaspy confirmando que el rastreador es visible en su cuenta de Plaspy y que llegan datos de posición y eventos.

## Ejemplos de comandos de configuración

El LK680 puede configurarse usando las herramientas del fabricante LK-GPS, comandos SMS o una app de configuración del dispositivo. Los comandos exactos y la sintaxis varían según el firmware y la herramienta del proveedor. Dado que los comandos del fabricante son específicos del kit de dispositivo y la versión de firmware, consulte la documentación oficial de LK-GPS o la guía de configuración suministrada por su proveedor para el conjunto preciso de comandos que apunten el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.

Si tiene ejemplos de comandos LK-GPS de la documentación de su dispositivo, aplíquelos aquí reemplazando los valores de destino y puerto por los ajustes de Plaspy y siguiendo el orden de comandos requerido. Para la configuración del APN, conserve los marcadores de posición como {{apn}} en sus comandos y sustitúyalos por los valores del APN del operador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos o la disposición del menú de configuración; verifique siempre la documentación de LK-GPS para su versión de firmware.
- Elija UDP para menor sobrecarga y por ser común en implementaciones de rastreadores, o TCP cuando necesite entrega fiable y control de sesión; Plaspy acepta ambos en el mismo puerto.
- Asegúrese de que el APN de la SIM y los datos móviles estén configurados para que el rastreador pueda conectarse a internet antes de probar envíos a Plaspy.
- Si usa configuración vía SMS, confirme que el dispositivo acepta la sintaxis de comandos remotos y que su operador soporta la entrega de SMS al rastreador.
- Recuerde que Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y gestiona la detección de protocolo de forma automática al recibir los datos.

## Por qué usar Plaspy con esta configuración

Configurar el LK680 para que reporte a Plaspy proporciona visibilidad práctica para flotas de e-bikes y micromovilidad. Las actualizaciones de ubicación en tiempo real, alertas de movimiento y notificaciones de batería alimentan Plaspy para que los operadores puedan monitorear activos, gestionar reglas de geocerca y recibir alertas oportunas por posibles robos o necesidades de servicio.

To learn more about Plaspy and platform features, visit https://www.plaspy.com. For the latest LK-GPS device-specific configuration details, firmware notes, and command references, verify current information at the manufacturer's site https://www.lk-gps.com.
