---
slug: /teltonika/fmb930/configuration
id: fmb930-configuration
sidebar_label: Configuration
title: Teltonika - FMB930 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Teltonika FMB930 para Plaspy con ajustes de servidor comandos de ejemplo y flujo de instalación práctico
keywords:
  - Configuración Teltonika FMB930
  - Configuración FMB930 Plaspy
  - Configuración de rastreador Teltonika
  - Ajustes servidor Plaspy
  - Instalación rastreador GPS FMB930
  - Telemetría BLE FMB930
  - Comandos configuración FMB930
  - Rastreo de flotas Plaspy
  - Guía configuración Teltonika
  - Configuración software de rastreo
---

# Teltonika - FMB930: Configuración

Esta página describe el contexto público de configuración para usar el Teltonika FMB930 con Plaspy. Consolida los ajustes de servidor de Plaspy que debe indicar al dispositivo, explica el flujo práctico de instalación y ofrece un comando de ejemplo para aplicar parámetros básicos en el rastreador. El contenido está dirigido a instaladores técnicos y operadores de flotas que preparan dispositivos FMB930 para integrarse con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos concretos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere lo aquí descrito como un punto de partida práctico y verifique el comportamiento del dispositivo con la documentación de Teltonika cuando sea necesario.

## Resumen de configuración

El objetivo al configurar el FMB930 para Plaspy es asegurar que el rastreador pueda alcanzar el endpoint de ingestión de Plaspy, autenticarse en la red móvil si hace falta y enviar con fiabilidad GNSS y telemetría BLE. El proceso normalmente incluye configurar valores de APN, apuntar el dispositivo al servidor de Plaspy, seleccionar el tipo de transporte y validar que el equipo está reportando.

- Configure el APN del dispositivo y, si aplica, el usuario y la contraseña del APN para que el rastreador tenga acceso a datos móviles.
- Apunte el dispositivo a los valores del servidor de Plaspy para que los datos se entreguen a Plaspy para su procesamiento.
- Seleccione el protocolo de transporte en el dispositivo si así lo requiere (UDP o TCP) y guarde la configuración.
- Valide la conectividad y que el dispositivo aparezca en Plaspy con ubicación y telemetría BLE.
- Use el comando de ejemplo provisto como SMS desplegable o como entrada en la herramienta de configuración para aplicar parámetros clave rápidamente.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP; el dispositivo puede configurarse en UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que Plaspy utiliza el mismo puerto 8888 para todos los dispositivos compatibles

## Requisitos típicos antes de la instalación

- Un FMB930 con batería cargada y alimentación conectada, con el cableado de instalación necesario y acceso al dispositivo.
- Una SIM GSM 2G activa y cobertura en las bandas soportadas por el FMB930.
- Datos del APN del operador móvil listos para completar en el dispositivo: APN, usuario del APN y contraseña del APN.
- Acceso al método oficial de configuración Teltonika o a la herramienta del proveedor para el FMB930 (comando SMS, herramienta de configuración o gestión remota como FOTA WEB).
- Una cuenta en Plaspy y conocimientos para verificar la aparición del dispositivo y su telemetría dentro de Plaspy tras el aprovisionamiento.
- Herramientas básicas para validar conectividad como la capacidad de enviar SMS, acceso a consola serial o la utilidad de configuración proporcionada por el fabricante.

## Cómo conecta este rastreador con Plaspy

Una vez configurado, el FMB930 utiliza su enlace celular para enviar posiciones GNSS y telemetría de sensores BLE al endpoint y puerto compartidos de Plaspy. Plaspy recibe los datos, detecta automáticamente el protocolo del dispositivo y lo hace visible para seguimiento en tiempo real, alertas e informes.

- El rastreador se configura para reportar al endpoint compartido de Plaspy en d.plaspy.com (o 54.85.159.138) en el puerto 8888.
- Las comunicaciones usan el enlace celular del dispositivo para transmitir actualizaciones de ubicación GNSS y telemetría basada en BLE a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario preseleccionar un tipo de protocolo dentro de Plaspy.
- El uso de UDP o TCP en el puerto 8888 depende de la selección de transporte en el dispositivo; configure el rastreador para usar el transporte deseado.
- Una vez que el dispositivo reporta, genera actualizaciones de posición en vivo, notificaciones de eventos y telemetría que Plaspy procesa para visibilidad y alertas.

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración Teltonika o al software para el FMB930 (comando SMS, herramienta de Teltonika o FOTA WEB).
2. Ingrese la dirección del servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888, notando que Plaspy usa el mismo puerto para todos los dispositivos compatibles.
4. Elija UDP o TCP en el dispositivo si la configuración requiere seleccionar un transporte.
5. Ingrese los valores de APN, usuario del APN y contraseña del APN usando la interfaz de configuración del dispositivo.
6. Aplique o guarde la configuración y, si el dispositivo lo requiere, reinícielo para cargar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta Plaspy con ubicación y telemetría.

## Ejemplo de comandos de configuración

Para configurar los parámetros básicos en su dispositivo Teltonika, ingrese el siguiente comando. Este ejemplo se suele enviar por SMS o introducir mediante la interfaz de configuración del fabricante. Mantenga los marcadores de posición y reemplace por los datos del APN de su operador.

- Comando setparam de ejemplo para fijar APN y parámetros de servidor

```text
setparam 2001:{{apn}};2002:{{apnu}};2003:{{apnp}};2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de marcadores de posición y valores
  - {{apn}} — reemplace con el APN de su operador móvil
  - {{apnu}} — reemplace con el usuario del APN si el operador lo exige; deje vacío si no aplica
  - {{apnp}} — reemplace con la contraseña del APN si el operador la exige; deje vacío si no aplica
  - 2004 establece el dominio del servidor a d.plaspy.com
  - 2005 establece el puerto del servidor en 8888
  - 2006 es un parámetro del dispositivo incluido en el ejemplo; confirme su significado exacto para su firmware mediante la documentación de Teltonika antes de cambiarlo

Si utiliza la herramienta de gestión de dispositivos (por ejemplo FOTA WEB) puede aplicar parámetros equivalentes allí en lugar de enviar comandos SMS.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los IDs de parámetros y los formatos de comando; siempre confirme las correspondencias de parámetros con el manual del Teltonika FMB930 para su versión de firmware.
- La selección TCP versus UDP se realiza en el dispositivo; Plaspy acepta ambos transportes en el puerto 8888 y detectará el protocolo automáticamente.
- Mantenga los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} intactos en plantillas y reemplace con los valores específicos del operador durante el despliegue.
- El comando provisto es un ejemplo público común; para flotas grandes use herramientas remotas de Teltonika como FOTA WEB para aprovisionamiento y actualizaciones masivas.
- Después de aplicar la configuración, valide la visibilidad del dispositivo y la telemetría en Plaspy para confirmar la conexión exitosa.

## Por qué usar Plaspy con esta configuración

Utilizar el Teltonika FMB930 con Plaspy ofrece a los operadores de flotas un rastreo de bajo consumo con capacidades BLE pensado para vehículos ligeros, junto con un endpoint y puerto consistentes que simplifican el aprovisionamiento. La combinación facilita la entrega de ubicación en tiempo real, telemetría de sensores BLE y opciones de gestión remota de dispositivos, reduciendo las diferencias de configuración entre equipos gracias a la detección automática de protocolos de Plaspy.

To learn more about Plaspy and supported workflows visit https://www.plaspy.com. For the most current device-specific configuration methods, firmware behavior, and parameter definitions verify details on the official Teltonika site https://www.teltonika-gps.com/
