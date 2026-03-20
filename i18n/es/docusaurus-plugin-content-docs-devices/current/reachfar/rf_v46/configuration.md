---
slug: /reachfar/rf_v46/configuration
id: rf_v46-configuration
sidebar_label: Configuration
title: Reachfar - RF-V46 Configuration
sidebar_class_name: menu_item_tracker
description: Guía de configuración del wearable Reachfar RF-V46 para Plaspy, con ajustes de servidor, flujo de instalación y notas de integración
keywords:
  - Configuración Reachfar RF V46
  - Configuración RF V46 Plaspy
  - Configuración servidor tracker Reachfar
  - Configuración plataforma GPS RF V46
  - Configuración wearable Reachfar
  - Guía de configuración de dispositivos Plaspy
  - Configuración software de seguimiento RF V46
  - Integración tracker personal Reachfar
  - Pasos de aprovisionamiento RF V46
  - Guía de ajustes de servidor Plaspy
---

# Reachfar - RF-V46 Configuración

Esta página describe el contexto público de configuración para usar el reloj localizador Reachfar RF-V46 (wearable 4G GPS con videollamada) con Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, explica el flujo práctico de instalación y señala qué verificar antes de integrar el dispositivo para que pueda reportar ubicación y telemetría biométrica básica a Plaspy.

Plaspy utiliza un endpoint y puerto de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor que usted emplee. Use las indicaciones aquí junto con las instrucciones del RF-V46 y los recursos del fabricante para comandos y comportamiento específicos del firmware.

## Resumen de la configuración

El objetivo al configurar un RF-V46 para Plaspy es apuntar el dispositivo al endpoint de ingestión de Plaspy, confirmar el transporte y la conectividad, y verificar que la ubicación y la telemetría biométrica aparezcan en la plataforma. Este proceso prepara el reloj para monitoreo continuo y alertas para cuidadores a través de Plaspy.

- Proveer al RF-V46 la información del servidor Plaspy para que envíe GPS y telemetría.
- Seleccionar el modo de transporte correcto (UDP o TCP) y el puerto compartido de Plaspy.
- Guardar y aplicar los ajustes del fabricante y reiniciar el dispositivo si es necesario.
- Validar la reportabilidad del dispositivo y su visibilidad en los paneles y registros de Plaspy.
- Confirmar que la telemetría como frecuencia cardiaca y presión arterial se entreguen junto con las actualizaciones de posición.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el RF-V46. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888 (usado por Plaspy para todos los rastreadores compatibles)
- Soporte de transporte: el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los mensajes entrantes

## Requisitos típicos antes de la configuración

- Un RF-V46 con batería cargada y conectividad celular funcional en una red 4G compatible, y una SIM activa si el dispositivo la requiere.
- Acceso al método o software de configuración del fabricante (comandos SMS, herramienta web o app del proveedor suministrada por Reachfar).
- Cuenta Plaspy y cualquier instrucción de aprovisionamiento que su organización requiera para registrar el dispositivo en la plataforma.
- Señal celular estable en la ubicación de instalación para permitir la verificación inmediata.
- Conocimiento de la versión de firmware del dispositivo y de las herramientas del proveedor para asegurar compatibilidad con los pasos de configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el RF-V46 envía pings periódicos de ubicación y telemetría biométrica seleccionada a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy recibe esos mensajes entrantes y los asigna al protocolo correspondiente de forma automática.

- El dispositivo informa actualizaciones de posición GPS al endpoint de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- La frecuencia cardiaca y la presión arterial se transmiten junto con los datos de ubicación cuando están habilitadas y soportadas por el firmware del reloj.
- El RF-V46 puede ofrecer asimismo funciones de voz bidireccional y llamadas de video opcionales de forma independiente al canal de telemetría de Plaspy.
- Plaspy ingiere los datos para visualización en tiempo real, alertas de eventos y registro histórico de rutas una vez que el dispositivo envía correctamente al servidor y puerto compartidos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del Reachfar RF-V46 o al software proporcionado por el fabricante o distribuidor.
2. Ingrese la dirección del servidor como d.plaspy.com o la IP 54.85.159.138 en la configuración del dispositivo según sea necesario.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija el método de transporte UDP o TCP si el dispositivo requiere seleccionar el tipo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los ajustes fueron aceptados.
6. Reinicie el RF-V46 si la documentación del fabricante indica que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del dispositivo y los mensajes entrantes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El RF-V46 puede configurarse usando herramientas del proveedor, comandos SMS o una interfaz web, dependiendo del firmware y del distribuidor. Los comandos exactos y su formato dependen de la documentación Reachfar y del firmware. Dado que los métodos varían según la herramienta y el firmware, siga la guía oficial de Reachfar o las instrucciones de su proveedor para realizar la configuración por comandos o el aprovisionamiento por SMS.

Si dispone de un conjunto público de comandos SMS o TCP según la documentación de Reachfar, ejecute esos comandos en el orden recomendado por el fabricante. Mantenga los marcadores de posición como {{apn}} o {{apnu}} si aparecen en los comandos y reemplácelos con los valores APN de su operador SIM cuando el fabricante se lo indique.

## Notas de configuración

- Las diferencias de firmware importan: la sintaxis de los comandos y los campos disponibles pueden cambiar entre versiones de firmware, así que confirme la versión del RF-V46 antes de aplicar comandos.
- La selección de transporte (UDP vs TCP) se realiza en el dispositivo; Plaspy soporta ambos en el puerto 8888 y detectará automáticamente el protocolo utilizado.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica los ajustes de servidor en flotas mixtas de rastreadores.
- Use los recursos del fabricante para cualquier configuración basada en SMS o utilidades propietarias en lugar de confiar en instrucciones de terceros.
- Verifique la cobertura celular y el aprovisionamiento de la SIM antes de esperar que el dispositivo aparezca en Plaspy durante la validación.

## Por qué usar Plaspy con esta configuración

Conectar el RF-V46 a Plaspy centraliza la ubicación y la telemetría biométrica para que cuidadores y organizaciones obtengan visibilidad continua y alertas operativas. En escenarios de cuidado de adultos mayores, protección infantil y monitoreo personal, combinar el GPS del wearable y los datos básicos de salud con la plataforma Plaspy ofrece un único lugar para seguimiento en vivo, notificaciones de eventos y revisión histórica.

Para saber más sobre cómo Plaspy soporta integraciones de dispositivos y flujos de seguimiento de flotas o personales, visite https://www.plaspy.com. Para los detalles más actuales sobre configuración específica del dispositivo, actualizaciones de firmware e instrucciones del fabricante para el RF-V46, verifique la información en el sitio de Reachfar https://www.reachfargps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
