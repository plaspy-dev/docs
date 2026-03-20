---
slug: /teltonika/fmm130/configuration
id: fmm130-configuration
sidebar_label: Configuration
title: Teltonika - FMM130 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMM130 y usarlo con Plaspy mediante ajustes de servidor compartido
keywords:
  - Configuración Teltonika FMM130
  - Instalación Teltonika FMM130 Plaspy
  - Configuración rastreador GPS FMM130
  - Configuración servidor Plaspy
  - Guía configuración FMM130
  - Configuración dispositivo Teltonika
  - Ajustes servidor rastreador GPS
  - Configuración seguimiento vehicular
  - Instalación rastreador gestión de flotas
  - Integración plataforma de tracking
---

# Teltonika - Configuración del FMM130

Esta página documenta el contexto público de configuración para utilizar el Teltonika FMM130 con Plaspy. Se centra en los ajustes prácticos de servidor y en comandos de ejemplo necesarios para apuntar el dispositivo a Plaspy, de modo que el rastreador pueda reportar posición y telemetría a la plataforma.

Plaspy emplea valores de servidor compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante para aplicar estos valores pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración de Teltonika que utilice. Use esta guía junto con la documentación oficial de Teltonika para seguir los procedimientos más actuales.

## Resumen de configuración

Configurar el FMM130 para Plaspy prepara el dispositivo para enviar posición y telemetría al endpoint centralizado de Plaspy. El proceso se centra en definir el APN de la red (si su SIM lo requiere), la dirección del servidor de Plaspy y el puerto, de modo que el dispositivo pueda abrir una sesión de datos y reenviar sus mensajes.

- Definir el APN y credenciales del dispositivo para que tenga conectividad móvil en la red elegida
- Configurar el servidor de destino apuntando a Plaspy con los valores de servidor compartidos
- Seleccionar el protocolo de transporte si el dispositivo requiere elegir entre UDP o TCP
- Aplicar y guardar la configuración, y reiniciar o re-inicializar el dispositivo si es necesario
- Validar que el dispositivo aparece y reporta en Plaspy tras la configuración

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos previos antes de la configuración

- Alimentar el FMM130 con una fuente de energía estable del vehículo o externa y confirmar que el dispositivo está operativo
- Una tarjeta SIM compatible con un plan de datos activo y los datos APN correctos
- Acceso al método o software oficial de configuración de Teltonika correspondiente a su dispositivo y firmware
- Conocimientos básicos de la interfaz de configuración del dispositivo, como comandos SMS o las herramientas de Teltonika
- Acceso a la cuenta de Plaspy para confirmar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El FMM130 se configura para enviar su ubicación y telemetría a Plaspy apuntando al endpoint compartido y al puerto de Plaspy. Plaspy ingiere los mensajes entrantes del dispositivo y los asocia a su cuenta para que usted pueda ver ubicación en tiempo real, notificaciones de eventos y datos históricos.

- El dispositivo envía fijaciones GNSS y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los mensajes del rastreador se transmiten por UDP o TCP según el transporte seleccionado
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes sin necesidad de cambiar el puerto por dispositivo
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para seguimiento en vivo e informes
- Los mensajes de estado y eventos del dispositivo se enrutan a Plaspy para alertas y diagnóstico

## Flujo de trabajo habitual de configuración

1. Acceda al método oficial de configuración de Teltonika, como comandos SMS o el software de configuración de Teltonika adecuado para su firmware FMM130
2. Introduzca la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138
3. Establezca el puerto de destino en 8888
4. Seleccione UDP o TCP si el dispositivo requiere especificar el transporte
5. Proporcione los datos del APN y cualquier credencial de SIM necesaria para que el dispositivo establezca la conexión de datos
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware o el dispositivo lo requieren
7. Valide que el FMM130 reporta a Plaspy confirmando que el dispositivo aparece y envía actualizaciones en la plataforma Plaspy

## Ejemplo de comandos de configuración

El FMM130 puede configurarse usando un formato de comando por lotes para parámetros. El siguiente ejemplo es un comando público al estilo Teltonika que establece los parámetros de APN y el servidor y puerto de Plaspy. Reemplace los marcadores con los valores de APN de su operador según sea necesario.

- Ejemplo de comando batch setparam

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores:
- {{apn}} es el nombre del APN de la red móvil requerido por su SIM
- {{apnu}} es el usuario del APN si su operador lo solicita
- {{apnp}} es la contraseña del APN si su operador lo solicita
- 2004 en este comando apunta el dispositivo a d.plaspy.com y 2005 establece el puerto 8888
- 2006 se incluye en el ejemplo como una bandera de parámetro del dispositivo; verifique el significado exacto según su firmware en la documentación de Teltonika
- Este comando puede aplicarse vía SMS o mediante utilidades de configuración de Teltonika según su instalación y firmware

## Notas de configuración

- Las variaciones de firmware y las revisiones del dispositivo pueden cambiar los códigos de parámetro y los formatos de comando soportados; siempre verifique los índices de parámetros para su firmware
- Los dispositivos Teltonika suelen soportar comandos batch por SMS y la configuración vía herramientas del proveedor; elija el método que se ajuste a su flujo de instalación
- Cuando se requiera elegir transporte, seleccione UDP o TCP según su entorno de red y confirme la configuración en Plaspy
- Los valores del servidor de Plaspy mostrados son ajustes compartidos públicos usados para múltiples dispositivos; Plaspy detectará automáticamente el protocolo en el puerto 8888
- Si un ajuste no parece aplicarse, reinicie el dispositivo o utilice las herramientas de Teltonika para enviar la configuración y revisar los registros de estado

## Por qué usar Plaspy con esta configuración

Usar el Teltonika FMM130 con Plaspy ofrece a las organizaciones visibilidad centralizada de ubicación y telemetría en flotas y activos. Apuntar el dispositivo a Plaspy mediante los ajustes de servidor compartidos descritos aquí permite la ingestión consistente de fijaciones GNSS, datos CAN y sensores, de modo que los equipos puedan monitorear operaciones, aplicar geocercas y revisar reportes históricos desde una única plataforma.

Aprenda más sobre Plaspy y cómo funciona con dispositivos como el FMM130 en https://www.plaspy.com. Para pasos de configuración específicos del dispositivo, comportamiento de firmware y las definiciones de parámetros más recientes consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para verificar la guía del fabricante vigente.
