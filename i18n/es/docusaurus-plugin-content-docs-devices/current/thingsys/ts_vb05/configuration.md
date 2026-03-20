---
slug: /thingsys/ts_vb05/configuration
id: ts_vb05-configuration
sidebar_label: Configuration
title: ThingSys - TS-VB05 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador ThingSys TS-VB05 con los servidores Plaspy y pasos comunes de instalación
keywords:
  - ThingSys TS-VB05 configuración
  - TS-VB05 instalación
  - ThingSys rastreador GPS configuración
  - TS-VB05 configuración Plaspy
  - configuración servidor rastreador GPS
  - configuración rastreador OBDII
  - configuración rastreo de vehículos
  - configuración seguimiento de flotas
  - TS-VB05 configuración SMS
  - integración rastreador Plaspy
---

# ThingSys - TS-VB05 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador OBDII ThingSys TS-VB05 con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y el flujo de configuración necesarios para conectar el equipo a Plaspy, de modo que las ubicaciones y la telemetría OBD aparezcan en su cuenta de Plaspy. La guía a continuación se basa en la descripción del dispositivo y en los comandos SMS públicos que algunos equipos TS-VB05 aceptan.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando existen comandos públicos del TS-VB05 se presentan aquí; siempre confirme los detalles con la documentación y las notas de firmware más recientes de ThingSys.

## Resumen de la configuración

Configurar un TS-VB05 para Plaspy prepara el equipo para enviar posiciones y telemetría OBD al endpoint de ingestión de Plaspy, de modo que la unidad quede visible y genere reportes en la plataforma. La configuración típica asegura que el dispositivo tenga conectividad celular adecuada, el APN correcto y el endpoint y puerto del servidor Plaspy configurados.

- Prepare los ajustes de red del dispositivo para que pueda alcanzar el endpoint de Plaspy
- Configure el APN del operador, credenciales de APN si son necesarias, y verifique la conectividad celular
- Configure el rastreador para que reporte a Plaspy usando el endpoint y puerto compartidos
- Valide la conectividad y el envío de telemetría para que el dispositivo aparezca en los paneles de Plaspy
- Opcionalmente realice un restablecimiento de fábrica como paso inicial cuando el flujo de instalación lo requiera

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Soporte de transporte por UDP o TCP en el puerto 8888 según la capacidad del dispositivo  
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto se usa para todos los dispositivos compatibles

## Requisitos habituales antes de la configuración

- Un TS-VB05 con alimentación, instalado en el puerto OBDII del vehículo o alimentado según la guía del fabricante
- Una SIM celular activa con plan de datos y capacidad de SMS si va a usar configuración por SMS
- Nombre de APN y credenciales del operador móvil para conectividad GPRS/3G/4G
- Acceso al método de configuración del fabricante para la unidad instalada, como comandos SMS o software del proveedor
- La contraseña predeterminada del dispositivo cuando sea necesaria para comandos (la predeterminada pública aparece en la sección de comandos)
- Una cuenta de Plaspy y el proceso de aprovisionamiento de dispositivos que requiera su flota o administrador de servicio

## Cómo se conecta este rastreador a Plaspy

Cuando se configura hacia el endpoint de Plaspy, el TS-VB05 envía actualizaciones de posición y telemetría OBD por la red celular al servidor y puerto compartidos de Plaspy, de modo que Plaspy pueda mostrar ubicación, viajes y telemetría. La plataforma Plaspy ingiere los mensajes y reconoce automáticamente el protocolo que usa el dispositivo.

- El rastreador reporta datos de GPS y posicionamiento híbrido al endpoint y puerto de Plaspy
- La telemetría OBD y los diagnósticos del vehículo se transmiten junto con los mensajes posicionales para el análisis en Plaspy
- Alertas y mensajes de eventos (por ejemplo manipulación o batería baja) se envían al mismo endpoint de Plaspy
- Plaspy utiliza la dirección y el puerto compartidos para que múltiples modelos de dispositivos usen el mismo endpoint de ingestión
- Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes entrantes al dispositivo correspondiente en la plataforma

## Flujo de configuración típico

1. Acceda al método oficial de configuración de ThingSys para su unidad TS-VB05, ya sea mediante comandos SMS o con la herramienta de configuración del proveedor suministrada por el fabricante.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 según lo que acepte el dispositivo.
3. Configure el puerto del dispositivo en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione el transporte UDP o TCP si el dispositivo requiere elegir uno; use el transporte que corresponda a su red y a la capacidad del firmware.
5. Introduzca el APN del operador y las credenciales de APN si son necesarias (use los valores de su operador o los marcadores de posición).
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si el equipo lo requiere o después de un restablecimiento de fábrica.
7. Valide que el dispositivo reporte a Plaspy revisando la actividad del equipo en la plataforma Plaspy y usando cualquier comando de verificación que proporcione el TS-VB05.

## Ejemplos de comandos de configuración

El TS-VB05 puede configurarse mediante comandos SMS. Los ejemplos públicos a continuación reflejan la sintaxis SMS publicada para algunas unidades. La contraseña predeterminada de muestra del dispositivo es 123456 y esa contraseña se usa en los prefijos de SMS de ejemplo mostrados. Trate el comando de restablecimiento de fábrica como opcional o solo cuando se requiera una configuración inicial limpia.

1. Restablecimiento de fábrica (paso inicial opcional)
```text
FORMAT
```
Nota: Esto restablece la configuración del dispositivo a los valores de fábrica. Úselo solo si es necesario.

2. Configurar el APN del operador
```text
apn123456 {{apn}}
```
- {{apn}} es un marcador de posición para el nombre del APN del operador móvil. Reemplace con la cadena de APN de su operador.

3. Configurar el usuario del APN
```text
apnuser123456 {{apnu}}
```
- {{apnu}} es un marcador de posición para el usuario del APN si el operador lo requiere. Déjelo en blanco o omítalo si no es necesario.

4. Configurar la contraseña del APN
```text
apnpasswd123456 {{apnp}}
```
- {{apnp}} es un marcador de posición para la contraseña del APN si el operador la solicita.

5. Configurar el servidor GPRS y el puerto (el ejemplo usa la IP y el puerto de Plaspy)
```text
ip54.85.159.138 8888
```
- Este comando configura el dispositivo para reportar a la IP de Plaspy en el puerto 8888. Alternativamente, introduzca d.plaspy.com si el dispositivo acepta un nombre de dominio en lugar de una IP.

Comando de verificación para consultar la configuración actual
```text
CXZT
```
- Use CXZT para consultar y verificar la configuración actual del dispositivo cuando el firmware lo soporte.

Importante: Los comandos SMS de ejemplo arriba incluyen el prefijo con la contraseña predeterminada del dispositivo 123456. No elimine los prefijos de contraseña requeridos si el dispositivo los aplica. Conserve los marcadores de posición como {{apn}}, {{apnu}} y {{apnp}} y reemplácelos con los valores proporcionados por su operador móvil.

## Notas de configuración

- Las variantes de firmware y regionales pueden aceptar formatos de comando SMS ligeramente diferentes o prefijos distintos; siempre verifique la sintaxis en su equipo.
- Algunas unidades aceptan la configuración del servidor solo por IP, mientras que otras aceptan un nombre de dominio; use el método que soporte su firmware y prefiera d.plaspy.com cuando sea posible.
- Use UDP o TCP según la opción del dispositivo y consideraciones de fiabilidad de la red; Plaspy admite ambos transportes y detecta el protocolo automáticamente.
- La configuración por SMS se usa comúnmente para la puesta en marcha inicial, pero puede haber herramientas del fabricante o configuración por USB para aprovisionamiento masivo.
- La contraseña predeterminada 123456 aparece en ejemplos públicos; cambie las contraseñas del dispositivo si su flujo de instalación exige credenciales más seguras.

## Por qué usar Plaspy con esta configuración

Conectar el TS-VB05 a Plaspy permite a flotas y propietarios centralizar en una sola plataforma la ubicación en tiempo real, la telemetría OBD y las alertas de eventos. Al ingerir los mensajes de los dispositivos en el servidor y puerto compartidos, los administradores obtienen visibilidad del estado del vehículo, el comportamiento del conductor y el historial de viajes sin necesidad de cambios por dispositivo en el servidor.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific instructions, firmware details, and manufacturer guidance verify current setup information on the ThingSys website at https://www.thingsys.com/ since manufacturer specifications and setup methods can change over time.
