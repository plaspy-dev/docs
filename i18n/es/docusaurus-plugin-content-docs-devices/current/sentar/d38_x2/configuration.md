---
slug: /sentar/d38_x2/configuration
id: d38_x2-configuration
sidebar_label: Configuration
title: Sentar - D38-X2 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Sentar D38-X2 con Plaspy usando ajustes de servidor y comandos SMS
keywords:
  - Configuración Sentar D38-X2
  - Configurar Sentar D38-X2
  - D38-X2 Plaspy
  - Configurar rastreador GPS Sentar
  - Configuración rastreador GPS para niños
  - Configuración servidor Plaspy
  - Comandos SMS D38-X2
  - Ajustes APN Sentar
  - Configuración reloj GPS
  - Rastreador infantil Plaspy
---

# Sentar - Configuración D38-X2

Esta página presenta el contexto público de configuración para usar el smartwatch rastreador Sentar D38-X2 con Plaspy. Resume los ajustes prácticos de servidor, los comandos SMS comunes que aparecen en la documentación pública del dispositivo y los pasos generales necesarios para apuntar el D38-X2 a Plaspy, de modo que el dispositivo reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos desde el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El D38-X2 admite configuración por SMS según la documentación pública, y esta página toma esos comandos públicos como ejemplo de cómo aplicar los ajustes de servidor de Plaspy.

## Resumen de configuración

El objetivo al configurar el D38-X2 para Plaspy es garantizar que el rastreador pueda alcanzar el endpoint del servidor Plaspy y subir periódicamente ubicación y estado del dispositivo, de modo que los cuidadores puedan monitorearlo desde el panel de Plaspy. La configuración normalmente implica establecer el APN de la red móvil, especificar el servidor de Plaspy, seleccionar el método de transporte si es necesario y verificar que el dispositivo esté reportando correctamente.

- Configure el APN del dispositivo para que tenga acceso a datos móviles y pueda subir via GPRS.  
- Establezca el servidor GPRS o dominio del servidor del dispositivo para que apunte a Plaspy y así se entregue la información de ubicación.  
- Elija UDP o TCP como método de transporte si el rastreador requiere seleccionar uno.  
- Defina un intervalo de subida para que el dispositivo envíe actualizaciones de ubicación regulares a Plaspy.  
- Verifique los ajustes y confirme que el rastreador sea visible y esté reportando en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported by the device and Plaspy accepts either on the configured port  
- Plaspy behavior: Plaspy automatically detects the tracker protocol; all devices in Plaspy use the same port for server connections

Estos valores son los ajustes públicos de Plaspy que debe usar al configurar el D38-X2 para que informe a la plataforma Plaspy.

## Requisitos previos

- Un dispositivo D38-X2 con batería cargada y encendido, listo para configurar.  
- Una tarjeta SIM activa con datos móviles habilitados y capacidad SMS si va a usar comandos SMS.  
- Los ajustes APN del operador móvil (puede requerirse MCC y MNC).  
- Acceso a la interfaz de comandos SMS del dispositivo o a la herramienta oficial de configuración de Sentar.  
- Conocimiento de la contraseña del dispositivo (la documentación pública muestra la contraseña por defecto 123456).  
- Acceso a la documentación del fabricante o soporte del proveedor para pasos específicos según firmware.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el D38-X2 envía posiciones y actualizaciones de estado del dispositivo al endpoint y puerto compartidos de Plaspy. El dispositivo usa el canal de datos móviles (GPRS) para abrir una conexión con Plaspy y sube telemetría según el intervalo de subida y el transporte configurados.

- El rastreador se configura para reportar a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.  
- El dispositivo puede usar UDP o TCP para entregar datos, según las opciones del equipo y las condiciones de red.  
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que el servidor acepta la transmisión y decodifica los mensajes.  
- Los intervalos de subida regulares permiten una visibilidad casi en tiempo real de la ubicación y el estado básico del dispositivo en Plaspy.  
- Cuidadores y administradores pueden monitorear la conectividad y recibir alertas a través de la plataforma Plaspy una vez que el reporte esté validado.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante para el D38-X2 (comandos SMS, herramienta del proveedor o app de configuración de Sentar) según lo descrito en la documentación del dispositivo.  
2. Use la contraseña del dispositivo (por defecto, documentada públicamente como 123456) para autenticar los comandos de configuración.  
3. Introduzca el endpoint del servidor de Plaspy ya sea como dominio d.plaspy.com o como la dirección IP 54.85.159.138 en los ajustes de servidor del dispositivo.  
4. Establezca el puerto en 8888 en la configuración de servidor del dispositivo y seleccione UDP o TCP si el equipo requiere indicar el transporte explícitamente.  
5. Configure el APN y los ajustes del operador para que el rastreador tenga acceso a datos móviles (use el MCC y MNC correspondientes cuando sea necesario).  
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante recomiendan un reinicio.  
7. Valide el reporte comprobando la conectividad del dispositivo y verificando que el rastreador aparezca y se actualice en Plaspy.

Si usa el método por SMS que aparece en la documentación pública de Sentar, aplique los comandos en el orden correcto y luego confirme el estado con el comando de verificación.

## Ejemplos de comandos de configuración

Los siguientes comandos se toman de ejemplos de configuración públicos del Sentar D38-X2 y se muestran aquí en el orden en que aparecen en ese material. Tenga en cuenta que la contraseña por defecto documentada públicamente es 123456. Los comandos se envían por SMS al rastreador cuando la configuración por SMS está soportada.

- Optional initial factory reset (use only if needed):
```text
pw,123456,factory#
```

- Set the time zone to UTC 0:
```text
pw,123456,lz,0,0#
```

- Check MCC and MNC (IMSI) to confirm operator codes:
```text
pw,123456,imsi#
```

- Set the operator APN where {{apn}} is the APN name, {{apnu}} is the APN user, {{apnp}} is the APN password, and xxxyy represents MCC and MNC concatenated:
```text
pw,123456,{{apn}},{{apnu}},{{apnp}},xxxyy#
```
Explanation: keep the placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with the operator values required by your SIM. The "xxxyy" placeholder represents MCC and MNC as required by the device.

- Set the GPRS server to the Plaspy IP and port (public example):
```text
pw,123456.ip,54.85.159.138,8888#
```

- Set the upload interval to 300 seconds:
```text
pw123456,upload,300#
```

- Check current settings (verification):
```text
pw,123456,ts#
```

Note: Preserve the command formatting and placeholders exactly as required by the device. Some SMS command examples in public documentation include punctuation variations; follow the Sentar documentation for the exact syntax required by your firmware.

## Notas sobre la configuración

- La configuración por SMS está documentada públicamente para este modelo; use comandos SMS solo cuando el fabricante lo recomiende y cuando tenga la contraseña correcta del dispositivo.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las opciones disponibles; confirme los formatos exactos de comandos con la documentación de Sentar.  
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador, por lo que debe especificar el puerto 8888 al configurar el servidor.  
- Elija UDP o TCP según las opciones del dispositivo y la fiabilidad de la red; TCP puede ofrecer confirmación de entrega, mientras que UDP puede reducir la sobrecarga dependiendo del firmware del equipo.  
- Proteja la contraseña del dispositivo y cambie las credenciales por defecto si el fabricante permite un cambio seguro para evitar reconfiguraciones no autorizadas.

## Por qué usar Plaspy con esta configuración

Configurar el Sentar D38-X2 para reportar a Plaspy ofrece a los cuidadores visibilidad centralizada y en tiempo real de la ubicación y el estado del dispositivo a través de una única plataforma de monitoreo. Usar los ajustes de servidor compartidos de Plaspy simplifica la configuración entre dispositivos y facilita incluir el D38-X2 junto con otros rastreadores compatibles para una supervisión consolidada.

To learn more about Plaspy and how it integrates with devices like the D38-X2 visit https://www.plaspy.com. For the most current device specific configuration commands, firmware notes, and official instructions verify the manufacturer documentation at http://www.sentarsmart.com/ because manufacturer specifications and setup methods can change over time.
