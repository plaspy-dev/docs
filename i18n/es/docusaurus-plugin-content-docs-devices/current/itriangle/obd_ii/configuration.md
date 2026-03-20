---
slug: /itriangle/obd_ii/configuration
id: obd_ii-configuration
sidebar_label: Configuration
title: iTriangle - OBD II Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador iTriangle OBD II con Plaspy, incluyendo servidor y pasos prácticos
keywords:
  - configuración iTriangle OBD II
  - instalación iTriangle OBD II
  - configuración servidor iTriangle OBD II
  - configuración rastreador Plaspy
  - configuración rastreador GPS OBD II
  - configuración rastreador vehicular
  - configuración seguimiento de flotas
  - configuración telemetría OBD II
  - configuración GNSS OBD
  - configuración CAN bus OBD
---

# iTriangle - Configuración OBD II

Esta página describe el contexto público de configuración para usar el rastreador iTriangle OBD II con Plaspy. Aquí se explican los detalles prácticos del servidor y del flujo de trabajo necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador entregue ubicación GNSS en tiempo real, telemetría OBD/CAN y eventos de sensores a su entorno de flota en Plaspy. La información se centra en el endpoint público de Plaspy y en los pasos comunes que emplean instaladores y administradores para habilitar el reporte de este dispositivo OBD II plug-and-play.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos que use en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor disponibles (SMS, herramienta TCP/IP, configuración por Bluetooth o la app del fabricante). Considere esta página como una guía práctica centrada en los valores públicos de Plaspy y en el flujo de configuración más habitual.

## Resumen de la configuración

Este proceso de configuración permite que el rastreador OBD II informe a Plaspy para que la ubicación, la telemetría OBD/CAN y los eventos sean visibles en la plataforma. El objetivo es actualizar el endpoint y el transporte de reporte del dispositivo, confirmar la conectividad de red y validar los mensajes entrantes en Plaspy.

- Configure el endpoint de reporte del dispositivo al servidor de Plaspy y confirme el protocolo de transporte si es necesario.
- Asegúrese de que el dispositivo tenga conectividad celular y de que la SIM tenga la provisión necesaria para enviar datos.
- Verifique que el rastreador envíe posiciones GNSS y telemetría OBD/CAN a Plaspy tras la configuración.
- Guarde y aplique los ajustes en el dispositivo y realice un reinicio si el firmware o el equipo lo requieren.
- Confirme que el dispositivo aparece y reporta correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Use el dominio del servidor Plaspy d.plaspy.com al configurar el endpoint de reporte del rastreador.
- La dirección IP del servidor Plaspy es 54.85.159.138 si su configuración requiere una entrada por IP.
- Todos los dispositivos Plaspy usan el mismo número de puerto 8888 para el reporte.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint compartido del servidor.

## Requisitos habituales antes de la configuración

- Acceso al método o software de configuración del fabricante iTriangle, como comandos SMS, herramientas TCP/IP o aprovisionamiento por Bluetooth cuando estén soportados.
- Un puerto OBD-II del vehículo con alimentación y que el dispositivo esté correctamente conectado para obtener energía y acceso al bus CAN.
- Conectividad celular activa en el dispositivo y la provisión de SIM necesaria si el rastreador requiere una SIM para enviar datos.
- Conocimiento de si el firmware del dispositivo exige seleccionar TCP o UDP durante la configuración.
- Un plan para validar el reporte en Plaspy tras la configuración, incluyendo acceso a la cuenta para visualizar el dispositivo.
- Si el firmware lo requiere, la herramienta de instalador o acceso por Bluetooth para cambiar servidor y puerto.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el iTriangle OBD II envía posiciones GNSS, telemetría OBD/CAN y notificaciones de eventos a Plaspy para que los operadores de flota puedan monitorear los activos en tiempo real. El dispositivo se apunta al endpoint y puerto compartidos de Plaspy para que los mensajes entrantes lleguen a la plataforma y se usen en mapas, diagnósticos y alertas.

- El rastreador reporta datos de ubicación GNSS al endpoint del servidor Plaspy d.plaspy.com en el puerto 8888.
- La telemetría OBD-II y CAN, como DTCs, RPM y estado del motor, se reenvían a Plaspy para diagnóstico e informes.
- Eventos del dispositivo, como alertas de manipulación, pérdida de alimentación y eventos del acelerómetro, se envían a Plaspy para alertas y flujos de trabajo.
- Los datos de sensores BLE emparejados con el dispositivo se transmiten junto con la telemetría cuando el firmware lo permite.
- Plaspy detecta automáticamente el protocolo entrante del rastreador y asigna el flujo a la sección de parsing correcta para su visualización en la plataforma.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de iTriangle o al software para el rastreador OBD II (comandos SMS, herramienta Bluetooth o herramienta TCP/IP según lo provea el fabricante).
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en el campo servidor/host del dispositivo.
3. Establezca el puerto de reporte en 8888 según lo requiere Plaspy.
4. Si el dispositivo solicita selección de transporte, elija UDP o TCP según su despliegue y el soporte del firmware.
5. Aplique o guarde la configuración en la herramienta del dispositivo o mediante comando SMS y confirme que el dispositivo aceptó los ajustes.
6. Reinicie el rastreador si el firmware exige un reboot para aplicar los cambios de red.
7. Verifique en Plaspy que el dispositivo esté reportando y que las posiciones GNSS y la telemetría OBD/CAN aparezcan como se espera.

## Ejemplos de comandos de configuración

Los comandos exactos para configurar el iTriangle OBD II dependen de la versión de firmware del fabricante y del canal de configuración que use (SMS, Bluetooth o la herramienta TCP/IP). Dado que el firmware y las herramientas del proveedor varían, no se incluyen comandos públicos universales aquí. Consulte la guía oficial de iTriangle o la herramienta del proveedor para aplicar los ajustes del servidor Plaspy d.plaspy.com o 54.85.159.138 y el puerto 8888, y siga las instrucciones de la herramienta para seleccionar UDP o TCP.

## Notas de configuración

- Las variaciones de firmware pueden requerir diferente sintaxis de comandos o pasos de aprovisionamiento; confirme siempre el conjunto de comandos correcto para su versión de firmware.
- Buenas prácticas de instalador: prefiera realizar una configuración inicial fuera del vehículo y una verificación en vivo una vez que el vehículo esté en funcionamiento para confirmar el reporte celular.
- TCP versus UDP: elija según el soporte del firmware del dispositivo y sus necesidades operativas; Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo entrante para su parseo.
- Consulte la documentación de iTriangle para plantillas de comandos SMS o Bluetooth si va a configurar dispositivos de forma remota o en lote.

## Por qué usar Plaspy con esta configuración

Usar el iTriangle OBD II con Plaspy ofrece una vía directa para combinar una instalación OBD-II plug-and-play con visibilidad en la nube para la flota. Las organizaciones obtienen ubicación en tiempo real, diagnóstico vehicular y monitoreo de eventos en una sola plataforma, lo que simplifica los flujos de mantenimiento, la monitorización antirrobo y los informes operativos.

To learn more about Plaspy and supported integrations visit https://www.plaspy.com. For the most current device specific configuration methods, firmware behavior, and manufacturer details verify information with iTriangle at https://www.itriangle.net/ as vendor instructions and firmware can change over time.
