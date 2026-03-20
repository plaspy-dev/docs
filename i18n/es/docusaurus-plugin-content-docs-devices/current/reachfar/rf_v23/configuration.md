---
slug: /reachfar/rf_v23/configuration
id: rf_v23-configuration
sidebar_label: Configuration
title: Reachfar - RF-V23 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Reachfar RF V23 con Plaspy, incluyendo ajustes de servidor, flujo de instalación y verificación para un rastreo confiable
keywords:
  - Configuración Reachfar RF V23
  - Configuración inicial Reachfar RF V23
  - Configuración RF V23 Plaspy
  - Configuración rastreador Reachfar
  - Guía GPS RF V23
  - Configuración servidor Reachfar
  - Rastreo de flotas RF V23
  - Configuración tracker Plaspy
  - Configuración software de rastreo Reachfar
  - Integración RF V23 en plataforma
---

# Reachfar - Configuración RF-V23

Esta página explica el contexto público de configuración para usar el tracker Reachfar RF-V23 con Plaspy. Resume los ajustes de servidor compartidos a los que deberá apuntar el dispositivo, describe los pasos preparatorios más comunes y detalla el flujo práctico para que el RF-V23 reporte ubicación y telemetría a la plataforma Plaspy. El contenido está orientado a integradores de flota e instaladores técnicos y es independiente del fabricante en lo esencial.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el lado del fabricante y los nombres de las herramientas pueden variar según la versión de firmware, la revisión hardware, el tipo de instalación y las utilidades del proveedor. Siga los pasos a continuación para apuntar el RF-V23 a Plaspy y consulte la documentación de Reachfar para comandos o detalles de interfaz específicos del dispositivo.

## Visión general de la configuración

El proceso de configuración prepara el RF-V23 para enviar su GNSS, WiFi y telemetría de dispositivo a Plaspy, de modo que la unidad aparezca en la plataforma para monitorización en tiempo real y reproducción histórica. A grandes rasgos, la instalación consiste en apuntar el tracker al endpoint de Plaspy, asegurar conectividad celular y alimentación, y verificar que Plaspy reciba los reportes.

- Configure el dispositivo para usar el endpoint de servidor de Plaspy y así enrutar ubicación y telemetría hacia la plataforma.
- Asegúrese de la conectividad celular y de cualquier APN o activación de SIM requerida para el uplink.
- Seleccione y confirme el modo de transporte si el equipo requiere elegir entre UDP y TCP.
- Guarde y aplique la configuración, y reinicie el dispositivo si es necesario para activar los cambios.
- Valide que el RF-V23 sea visible y esté reportando correctamente en Plaspy usando las herramientas de la plataforma.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto, por lo que deberá configurar el puerto 8888 al ajustar el RF-V23.

## Requisitos típicos antes de la configuración

- El RF-V23 debe estar encendido y contar con batería suficiente o alimentación externa para las actividades de configuración.
- SIM activa con plan de datos y APN correcto para la región si el tracker usará redes móviles.
- Acceso al método de configuración Reachfar que soporte su unidad, ya sea la aplicación del fabricante, la herramienta web o comandos SMS.
- Registro claro del identificador del dispositivo que usará Plaspy durante el registro, como el IMEI o el device ID provisto por el tracker.
- Cuenta en Plaspy o instrucciones de onboarding para que el dispositivo pueda registrarse y validarse en la plataforma.
- Conexión de red funcional para comprobar la conectividad del dispositivo hacia el endpoint de Plaspy.

## Cómo se conecta este tracker a Plaspy

Al configurarlo para Plaspy, el RF-V23 envía su posición y telemetría al endpoint y puerto compartidos de Plaspy para que la plataforma ingiera ubicación, actualizaciones de estado y alertas casi en tiempo real. El endpoint de servidor de Plaspy y la detección automática de protocolo simplifican la integración entre dispositivos compatibles.

- El tracker apunta a d.plaspy.com o directamente a 54.85.159.138 usando el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el puerto 8888 según la capacidad del equipo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que el servidor acepta el formato del dispositivo sin necesidad de seleccionar el protocolo en la plataforma.
- Una vez reportando, el dispositivo entrega actualizaciones de ubicación, indicadores de estado y notificaciones de eventos a Plaspy para mapeo, alertas y reproducción histórica.
- La visibilidad en Plaspy permite que las notificaciones de geocerca, el historial de rutas y los paneles de monitoreo incluyan datos del RF-V23.

## Flujo de configuración común

1. Encienda el RF-V23 y verifique que tenga una SIM activa con datos habilitados si usará uplink celular.
2. Acceda al método oficial de configuración Reachfar para el RF-V23, como la app del fabricante, la interfaz web o la interfaz de comandos por SMS.
3. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP de servidor 54.85.159.138 en el campo de host del servidor.
4. Establezca el puerto del servidor en 8888. Recuerde que todos los dispositivos en Plaspy utilizan el mismo puerto.
5. Seleccione UDP o TCP como transporte si el dispositivo requiere que se elija el modo.
6. Aplique o guarde la configuración y realice el reinicio del dispositivo que sea necesario para activar los nuevos ajustes de servidor.
7. Valide que el dispositivo reporta a Plaspy revisando la actividad del equipo en la plataforma y confirmando la recepción de telemetría.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis para el RF-V23 dependen de la versión de firmware de Reachfar y del método de configuración que esté utilizando. Los dispositivos Reachfar suelen soportar configuración a través de la app del fabricante, interfaz web o comandos SMS, pero dichos comandos varían según la revisión del equipo. Consulte el manual de usuario o la guía de configuración Reachfar RF-V23 para obtener ejemplos de comandos o plantillas SMS precisas cuando sean necesarios.

Si utiliza comandos SMS o una interfaz de terminal proporcionada por Reachfar, remítase a la documentación oficial para el formato correcto de los comandos y los marcadores de posición.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la interfaz de configuración o la sintaxis de los comandos SMS. Siempre verifique las notas de la versión de firmware del RF-V23 antes de aplicar ajustes.
- TCP y UDP están ambos soportados en el puerto 8888. UDP se usa comúnmente por su menor overhead en uplink, mientras que TCP puede elegirse cuando se requiere entrega más confiable.
- La configuración por SMS suele estar soportada en muchos dispositivos Reachfar. Si usa SMS, confirme las plantillas exactas en la guía oficial de Reachfar.
- Dado que Plaspy emplea el mismo puerto para todos los dispositivos y detecta automáticamente el protocolo del tracker, no necesita un puerto diferente por dispositivo, pero sí debe asegurarse de que el host del servidor y los ajustes de transporte sean correctos en el tracker.
- Buenas prácticas de instalación como probar en un área de cielo abierto, verificar la configuración APN de la SIM y confirmar el estado de alimentación del dispositivo pueden ahorrar tiempo durante la puesta en marcha.

## Por qué usar Plaspy con esta configuración

Usar el RF-V23 con Plaspy ofrece a las organizaciones una solución práctica para recopilar datos de ubicación y telemetría a largo plazo desde activos exteriores resistentes. La combinación de la durabilidad del hardware RF-V23 y el endpoint compartido de Plaspy simplifica el onboarding de flotas y permite a los equipos monitorear activos, recibir alertas oportunas y revisar rutas históricas desde una única plataforma.

Learn more about Plaspy on https://www.plaspy.com and verify device specific setup details with the manufacturer at https://www.reachfargps.com/ since firmware behavior and configuration methods can change over time.
