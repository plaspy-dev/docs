---
slug: /lk_gps/lk210_2g/configuration
id: lk210_2g-configuration
sidebar_label: Configuration
title: LK-GPS - LK210-2G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK-GPS LK210-2G con ajustes de servidor Plaspy y pasos prácticos para la integración
keywords:
  - lk gps lk210 2g configuración
  - configuración lk210 2g plaspy
  - configuración servidor lk gps
  - configuración rastreo lk210 2g
  - configuración dispositivo plaspy
  - guía rastreador gps lk210 2g
  - rastreo vehicular lk gps
  - configuración plataforma gps plaspy
  - configuración sms lk210 2g
  - guía integración lk gps
---

# LK-GPS - Configuración del LK210-2G

Esta página documenta el contexto público de configuración para usar el LK-GPS LK210-2G con Plaspy. Se centra en la información práctica de servidor y flujo de trabajo que usted necesita para apuntar el rastreador a Plaspy, de modo que el dispositivo reporte posición, eventos de vibración, notificaciones de geocerca y estado de batería en los paneles de Plaspy. Los detalles sobre la instalación física, el cableado preciso o menús específicos de firmware los proporciona el fabricante y no se reproducen aquí.

Plaspy utiliza ajustes de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, lo que simplifica la configuración del lado del servidor. Los pasos de configuración en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor, por lo que esta guía ofrece los valores públicos comunes y un flujo de trabajo práctico mientras usted verifica los pasos específicos según la documentación de LK GPS.

## Resumen de la configuración

Este proceso prepara el LK210-2G para comunicarse de forma fiable con Plaspy, asegurando que los mensajes de ubicación y eventos lleguen a la plataforma centralizada. El objetivo es configurar el rastreador para enviar telemetría al endpoint de Plaspy y validar que el dispositivo aparezca y reporte correctamente en la plataforma.

- Configure el rastreador para que apunte al endpoint del servidor Plaspy y así los mensajes de posición y eventos se enruten a su cuenta.
- Elija la opción de transporte correcta si el dispositivo requiere seleccionar UDP o TCP.
- Establezca el puerto del dispositivo en el puerto estándar de Plaspy para que el servicio acepte los mensajes.
- Valide la conectividad y los reportes en Plaspy y confirme que la telemetría como alertas por vibración, eventos de geocerca y estado de batería sea visible.
- Use la herramienta de configuración del fabricante o comandos SMS como método principal para aplicar los ajustes y guardarlos en el dispositivo.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el dispositivo en la interfaz del fabricante o al ingresar parámetros por SMS o en una herramienta web:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según la opción del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos habituales antes de la configuración

- Acceso al método de configuración del LK210-2G soportado por el fabricante, como la app del proveedor, la herramienta web o comandos SMS.
- Una tarjeta SIM activa y cobertura de red móvil 2G adecuada en el área donde operará el dispositivo para reportes en tiempo real.
- Fuente de alimentación de batería cargada o alimentación vehicular; el dispositivo debe estar encendido y reportando.
- Tener a mano el IMEI o identificador del dispositivo para verificación en Plaspy si su flujo de trabajo lo requiere.
- Una cuenta en Plaspy o acceso a una instancia administrada por Plaspy para confirmar que el dispositivo aparece y reporta después de la configuración.
- Conocimientos básicos sobre TCP vs UDP si el dispositivo solicita seleccionar el modo de transporte.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el LK210-2G envía sus mensajes de posición y eventos a un único endpoint y puerto de Plaspy para que la plataforma pueda ingerir y mostrar la telemetría en tiempo real. Plaspy acepta los mensajes entrantes en el puerto compartido y determina automáticamente el protocolo correcto del rastreador para su interpretación.

- El rastreador reporta actualizaciones de posición GPS a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La telemetría como detección de vibración, alertas de geocerca y estado de batería se transmite a Plaspy junto con los mensajes de ubicación.
- Puede seleccionar transporte UDP o TCP durante la configuración cuando el dispositivo requiera esa elección.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo para que los mensajes se analicen correctamente.
- Tras la configuración, el dispositivo se vuelve visible en Plaspy, donde usted puede monitorear la ubicación en vivo, alarmas y rutas históricas.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del LK-GPS, como la app del fabricante, la herramienta web de configuración o la interfaz por SMS documentada por LK GPS.
2. Ingrese el endpoint del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 según lo que soporte la herramienta del dispositivo.
3. Establezca el puerto del dispositivo en 8888, que es el puerto estándar de Plaspy utilizado por todos los equipos.
4. Elija UDP o TCP como transporte si el dispositivo solicita selección de transporte.
5. Aplique o guarde la configuración en el rastreador usando la herramienta del fabricante o enviando el comando SMS requerido.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando que aparece en la interfaz y confirmando la recepción de actualizaciones de posición y eventos.

## Ejemplos de comandos de configuración

No se proporcionaron comandos SMS públicos ni comandos de configuración en crudo para este modelo en el material suministrado. La sintaxis exacta y los formatos SMS difieren según el firmware del fabricante y las variantes regionales. Use la referencia de comandos oficial de LK-GPS o la utilidad de configuración del proveedor para aplicar los valores que se muestran a continuación:

- Servidor: d.plaspy.com o 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP

Si su dispositivo utiliza comandos SMS, siga la sintaxis del fabricante exactamente y sustituya los marcadores de posición que el proveedor requiera. Consulte el manual de comandos de LK-GPS para las plantillas SMS exactas para establecer servidor y puerto.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar nombres de menús, sintaxis SMS y rutas de configuración. Verifique comandos y menús contra el manual de LK-GPS correspondiente a su versión de firmware.
- Si su dispositivo solicita selección de transporte, elija UDP o TCP según su red local y las pruebas realizadas. Plaspy acepta ambos transportes en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, lo que reduce la necesidad de seleccionar un protocolo en el lado del servidor.
- Al usar configuración basada en SMS, asegúrese de que el dispositivo tenga una SIM activa con saldo o permiso de datos suficiente para los mensajes de configuración.
- Siempre guarde o aplique la configuración y reinicie el dispositivo cuando las indicaciones del fabricante lo requieran para asegurar que los ajustes entren en vigor.

## Por qué usar Plaspy con esta configuración

Usar el LK210-2G con Plaspy ofrece a gestores de flotas y propietarios de vehículos acceso centralizado a ubicación, alertas por vibración, eventos de geocerca y reportes de batería. Los ajustes de servidor compartidos de Plaspy simplifican la puesta en marcha entre distintos dispositivos y permiten a los equipos de operaciones estandarizar el comportamiento y la supervisión sin gestionar múltiples endpoints de servidor.

Para conocer más sobre Plaspy y cómo soporta integraciones de dispositivos como el LK210-2G visite https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, comportamiento de firmware y comandos del fabricante, consulte a LK GPS en https://www.lk-gps.com ya que la documentación del fabricante puede cambiar con el tiempo.
