---
slug: /teltonika/fmb010/configuration
id: fmb010-configuration
sidebar_label: Configuration
title: Teltonika - FMB010 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Teltonika FMB010 con Plaspy usando valores de servidor compartido y ejemplos
keywords:
  - Configuración Teltonika FMB010
  - Instalación Teltonika FMB010
  - Configuración FMB010 Plaspy
  - Configuración Teltonika Plaspy
  - Ajustes de servidor FMB010
  - Configuración de rastreador GPS
  - Configuración de rastreador OBD II
  - Configuración de rastreo de flotas
  - Integración plataforma GPS
  - Configuración de rastreo de vehículos
---

# Teltonika - FMB010 Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMB010 con Plaspy. Se centra en los valores de servidor compartido que Plaspy requiere, en la guía práctica que puede aplicar con los métodos estándar de configuración de Teltonika y en un ejemplo de comando público para apuntar el dispositivo a los servidores de Plaspy. El FMB010 es un rastreador compacto plug-and-play para OBD-II con batería interna de respaldo y soporte BLE; aquí explicamos cómo preparar el dispositivo para comunicarse con Plaspy usando los valores públicos de servidor.

Plaspy utiliza valores de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware y las herramientas del proveedor. Este documento se centra en los valores públicos de Plaspy y en un flujo de trabajo práctico a seguir; siempre verifique los comandos específicos del dispositivo y el mapeo de parámetros con la documentación de Teltonika o sus herramientas de instalación si necesita descripciones detalladas.

## Visión general de la configuración

Configurar el FMB010 para Plaspy consiste principalmente en apuntar el dispositivo al endpoint y puerto compartido de Plaspy, asegurarse de que la conectividad celular y los parámetros APN sean correctos, y validar que el dispositivo aparezca en la plataforma Plaspy. El proceso público mostrado aquí usa el mismo servidor y puerto que Plaspy aplica a todos los dispositivos admitidos y se apoya en la detección automática de protocolos de Plaspy.

- Apunte el rastreador al dominio o IP del servidor compartido de Plaspy para que la telemetría se enrute a la plataforma.
- Configure un APN válido y cualquier valor de autenticación de la SIM necesario para que el dispositivo alcance el servidor de Plaspy.
- Seleccione transporte UDP o TCP en el puerto 8888 si el dispositivo exige una selección explícita de transporte.
- Aplique y guarde la configuración y, si la herramienta del fabricante lo requiere, reinicie o haga un reboot del dispositivo.
- Valide la conectividad confirmando que el dispositivo esté reportando en Plaspy y sea visible en el panel.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: support for UDP or TCP on port 8888 (choose the transport the device requires)
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Confirme que el FMB010 esté alimentado y conectado correctamente vía OBD-II o el cable de alimentación recomendado para la instalación.
- Asegúrese de que haya una tarjeta SIM funcional con un plan de datos activo y los valores APN correctos instalados en el dispositivo.
- Tenga acceso al método oficial de configuración de Teltonika para su unidad (comandos SMS, Teltonika Configurator u otras herramientas del proveedor).
- Conozca los marcadores de posición o credenciales APN que su operador móvil requiere (reemplazará {{apn}}, {{apnu}}, {{apnp}} según corresponda).
- Disponga de una forma de recibir logs del dispositivo o verificar el reporte en Plaspy para validar la conexión exitosa.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el FMB010 envía ubicación y telemetría al endpoint y puerto compartido de Plaspy para que la plataforma pueda mostrar posición en tiempo real, eventos y telemetría básica. La detección automática del protocolo por parte de la plataforma simplifica la integración, ya que no es necesario seleccionar un protocolo específico en Plaspy; solo se requieren los valores de servidor y transporte del lado del dispositivo.

- El dispositivo se configura para reportar a d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Las actualizaciones de ubicación y los reportes de eventos se transmiten por el transporte elegido (UDP o TCP) hacia Plaspy.
- Plaspy recibe la telemetría e interpreta el protocolo automáticamente para que sea visible en el panel.
- Los reportes de eventos y alarmas del rastreador se convierten en elementos accionables para alertas e informes en Plaspy.
- La visibilidad en Plaspy permite reproducción histórica, seguimiento en tiempo real e informes telemáticos básicos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración Teltonika para su unidad FMB010 (SMS, Teltonika Configurator u otra herramienta del proveedor).
2. Ingrese la dirección del servidor de Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.
3. Configure el puerto del dispositivo a 8888 (Plaspy usa el mismo puerto para todos los dispositivos compatibles).
4. Elija UDP o TCP si el dispositivo requiere selección de transporte y la interfaz de configuración ofrece esa opción.
5. Proporcione los parámetros APN y las credenciales de la SIM necesarias para la conectividad de datos celulares (reemplace los marcadores como {{apn}}, {{apnu}}, {{apnp}}).
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante solicita un reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy revisando que aparezca y que envíe telemetría en el panel de Plaspy.

## Comandos de configuración de ejemplo

El ejemplo público de configuración de Teltonika que se muestra a continuación es un comando consolidado de parámetros que establece los valores APN y el servidor. Este comando se suele enviar por SMS o a través de una interfaz de configuración del proveedor según el firmware del dispositivo y el flujo de trabajo del instalador. Mantenga los marcadores de posición y reemplácelos con los valores APN de su operador antes de enviar.

- Description: Set APN credentials and point the tracker to Plaspy using the shared server domain and port.

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

Notas sobre el comando y los marcadores:
- {{apn}} es el nombre del APN de la red móvil requerido por su operador.
- {{apnu}} es el nombre de usuario del APN si su operador lo solicita; déjelo en blanco o elimínelo si no aplica.
- {{apnp}} es la contraseña del APN si se requiere; déjela en blanco si no aplica.
- El comando configura el servidor a d.plaspy.com y el puerto a 8888 tal como lo exige Plaspy.
- Los números de parámetro corresponden a parámetros de dispositivos Teltonika; consulte la documentación de Teltonika o su herramienta de configuración para confirmar los significados y si el comando debe enviarse por SMS o mediante una utilidad de configuración.

## Notas de configuración

- Las versiones de firmware de Teltonika y las herramientas de configuración pueden mapear los números de parámetro de forma distinta; siempre verifique el mapeo de parámetros para su revisión exacta de firmware antes de aplicar comandos.
- El comando de ejemplo es utilizable por SMS o por herramientas de proveedor según las opciones de configuración del dispositivo; confirme el método de entrega compatible con su unidad FMB010.
- Elija UDP o TCP según la interfaz de configuración del dispositivo; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y realiza detección automática de protocolo, por lo que los ajustes correctos de servidor y puerto en el dispositivo son los requisitos principales.
- Mantenga el firmware del dispositivo y las herramientas de configuración de Teltonika actualizados para la mejor compatibilidad y soporte de funciones.

## Por qué usar Plaspy con esta configuración

Usar el FMB010 con Plaspy proporciona una vía de baja fricción hacia ubicación de vehículos en tiempo real, alertas de eventos y telemática esencial para monitoreo de flotas y activos. La forma OBD-II del FMB010 y su batería de respaldo facilitan implementaciones rápidas y reportes continuos, mientras que apuntar el dispositivo a los ajustes de servidor compartidos de Plaspy garantiza una ingestión consistente de telemetría en los paneles de Plaspy.

Learn more about Plaspy and how it can work with Teltonika devices at https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and parameter definitions, verify details on the manufacturer website https://www.teltonika-gps.com/ before applying configuration changes.
