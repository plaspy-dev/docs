---
slug: /cantrack/gf30/configuration
id: gf30-configuration
sidebar_label: Configuration
title: CanTrack - GF30 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador CanTrack GF30 con ajustes de servidor Plaspy y flujo práctico de instalación
keywords:
  - Configuración del CanTrack GF30
  - Instalación CanTrack GF30
  - Configuración de servidor GF30
  - Configuración GF30 Plaspy
  - Configuración rastreador GPS GF30
  - Rastreador CanTrack Plaspy
  - Rastreador de activos vehiculares GF30
  - Guía de instalación GF30
  - Configuración telemetría GF30
  - Configuración de dispositivo Plaspy
---

# CanTrack - Configuración del GF30

Esta página describe el contexto público de configuración para usar el rastreador magnético CanTrack GF30 con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, los requisitos habituales a verificar antes de la instalación y una guía práctica para que el GF30 envíe ubicaciones y eventos a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor comunes para los rastreadores compatibles y detecta automáticamente el protocolo cuando un dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del GF30, la revisión de hardware, el tipo de instalación y las herramientas de configuración del proveedor, por lo que use los procedimientos siguientes como guía práctica y consulte la documentación del fabricante para detalles específicos del dispositivo.

## Resumen de configuración

Preparar un GF30 para Plaspy implica apuntar el dispositivo al endpoint de Plaspy, asegurar conectividad celular y alimentación fiables, y validar que el dispositivo reporte correctamente en la plataforma. El objetivo es que el rastreador aparezca en los paneles de Plaspy para monitoreo en tiempo real, alertas y seguimiento histórico.

- Configure el GF30 para enviar su telemetría al endpoint y puerto del servidor Plaspy.
- Verifique la SIM, el registro en la red y la alimentación del dispositivo antes de finalizar la configuración.
- Elija la opción de transporte correcta (UDP o TCP) si el firmware del rastreador lo solicita.
- Aplique y guarde los cambios de configuración, y reinicie el rastreador si el dispositivo requiere reboot.
- Valide la conectividad y que las posiciones y eventos de alarma se muestren en Plaspy.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de servidor al configurar el GF30 para que reporte a Plaspy. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support: UDP or TCP (the GF30 may be configured using either UDP or TCP on port 8888)
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un GF30 con batería cargada y las conexiones de alimentación necesarias.
- Una tarjeta SIM activa instalada y registrada en las bandas GSM soportadas por el GF30.
- Acceso al método o software oficial de configuración CanTrack para el GF30 (comandos SMS, herramienta web o app del proveedor, según el dispositivo).
- Una cuenta Plaspy o la información de aprovisionamiento correspondiente para poder verificar el dispositivo en la plataforma.
- Ubicación con cobertura celular para permitir el registro y el envío de telemetría.
- Familiaridad básica para elegir entre transporte UDP o TCP si la interfaz de configuración lo solicita.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el GF30 envía actualizaciones periódicas de ubicación y reportes de eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe esas conexiones y mapea los datos entrantes en la plataforma, donde pueden mostrarse en mapas, activar alertas y almacenarse como recorridos históricos.

- El GF30 se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- El rastreador puede usar UDP o TCP como transporte en el puerto 8888 según el firmware o la elección del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador para que los dispositivos se conecten sin necesidad de seleccionar el protocolo manualmente en la plataforma.
- Las actualizaciones de posición, alarmas de geocerca y vibración, alertas de batería baja y otros eventos se reenvían a Plaspy para su visualización en el panel.
- Si se pierde la conectividad celular, el GF30 puede retener datos localmente y reenviar los registros almacenados tras la reconexión.

## Flujo de configuración habitual

1. Acceda al método o software oficial de configuración del CanTrack GF30 proporcionado por el fabricante o el proveedor.
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888.
4. Seleccione UDP o TCP como transporte si la interfaz del GF30 solicita elegir el tipo de transporte.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie el GF30 si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que el GF30 aparece en su panel de Plaspy y envía actualizaciones de ubicación o eventos.

## Ejemplos de comandos de configuración

El GF30 puede configurarse usando herramientas del proveedor, comandos SMS o una app de configuración según el firmware y el proveedor. Los comandos exactos y su sintaxis varían según la versión de firmware y la herramienta del vendedor. Dado que los comandos de configuración los suministra el fabricante, confirme las cadenas SMS o los comandos de la herramienta en el manual del CanTrack GF30.

Si utiliza SMS para configurar, el enfoque general es enviar la cadena de comando desde un número registrado al GF30 y luego revisar los mensajes de respuesta del dispositivo. Reemplace cualquier valor de ejemplo provisto por el fabricante con los ajustes reales al enviar los comandos.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los comandos o la ubicación de los ajustes en una herramienta de configuración; siempre consulte el manual del GF30 para su versión de firmware.
- Si selecciona TCP o UDP en el dispositivo, recuerde que Plaspy soporta ambos transportes en el puerto 8888; elija el transporte más adecuado para su red y el comportamiento del firmware.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo cuando el rastreador se conecte, por lo que no necesita un puerto único por dispositivo.
- Si el GF30 soporta configuración por SMS, esto resulta útil en instalaciones remotas donde no está disponible la app de configuración, pero los formatos de comando SMS son específicos del proveedor.
- Valide mediante telemetría en vivo y pruebas de eventos después de la configuración para asegurar que tanto las actualizaciones de ubicación como las alarmas lleguen a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el GF30 con Plaspy ofrece un camino sencillo para integrar el seguimiento encubierto de activos, alertas y telemetría en una sola plataforma para monitoreo y respuesta operativa. Las organizaciones que rastrean remolques, contenedores u otros activos se benefician de actualizaciones continuas de posición, alertas de eventos y recorridos almacenados que facilitan la recuperación, la seguridad y la supervisión de flotas.

Para obtener más información sobre Plaspy y cómo puede integrar dispositivos GF30 en flujos de trabajo de flotas y activos, visite https://www.plaspy.com. Para los pasos de configuración más actuales, detalles de firmware y la referencia de comandos del GF30, consulte la documentación del fabricante en https://www.cantrackgps.com/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
