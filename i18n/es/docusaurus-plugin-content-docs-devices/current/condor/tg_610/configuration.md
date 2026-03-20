---
slug: /condor/tg_610/configuration
id: tg_610-configuration
sidebar_label: Configuration
title: Condor - TG-610 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Condor TG-610 para integrarlo con Plaspy, incluyendo ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Condor TG-610
  - Instalación Condor TG-610
  - TG-610 Plaspy
  - Configuración rastreador Condor
  - Configuración rastreador GPS
  - Configuración dispositivo Plaspy
  - Configuración rastreador motocicleta
  - Configuración GPRS rastreador
  - Configuración servidor TG-610
  - Configuración seguimiento vehículo
---

# Condor - TG-610 Configuración

Esta página describe el contexto público de configuración para usar el rastreador GPS Condor TG-610 con Plaspy. Consolida los ajustes del servidor Plaspy que usted debe aplicar, detalla los requisitos habituales y ofrece ejemplos de comandos SMS usados por el TG-610 cuando esos comandos están publicados por el fabricante.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TG-610 soporta reporte por GPRS y ofrece comandos de configuración por SMS en su flujo público que reproducimos aquí para facilitar la integración con Plaspy.

## Resumen de configuración

Este proceso prepara el TG-610 para enviar datos de ubicación y estado a Plaspy a través de la red celular. El objetivo es apuntar el rastreador al endpoint compartido de Plaspy, confirmar el transporte y la conectividad, y validar que el dispositivo aparezca en su cuenta de Plaspy.

- Configure el rastreador para que use Plaspy como endpoint del servidor GPRS y así entregue la telemetría a la plataforma.
- Establezca el APN y el modo GPRS del dispositivo para que la SIM proporcione conectividad de datos.
- Seleccione transporte UDP o TCP y use el puerto 8888 que Plaspy emplea para todos los dispositivos compatibles.
- Valide los ajustes y confirme que el dispositivo reporte datos en tiempo real a Plaspy y aparezca en la plataforma.
- Aplique las configuraciones por SMS o mediante la herramienta oficial de Condor según lo provea el fabricante.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

Estos valores son el endpoint público de Plaspy y deben aplicarse en el rastreador o mediante el método de configuración de Condor para asegurar que el TG-610 reporte a Plaspy.

## Requisitos habituales antes de la configuración

- Una unidad TG-610 instalada y alimentada, con una tarjeta SIM funcional con capacidad de datos GPRS.
- Tener el IMEI del dispositivo disponible para identificación y para usar como alias.
- Acceso al método de configuración del Condor TG-610, ya sea por comandos SMS o mediante la herramienta del fabricante.
- Conocer el APN del operador móvil y cualquier usuario o contraseña APN necesario (en los comandos aparecen marcadores de posición).
- Una forma de enviar SMS al número del dispositivo o de conectar con la herramienta del fabricante para aplicar servidor y APN.
- Una cuenta y proyecto en Plaspy listos para recibir y verificar los reportes del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El TG-610 envía ubicación y eventos de entradas/salidas por la red GPRS celular al endpoint y puerto del servidor Plaspy. Una vez configurado con los ajustes del servidor Plaspy, el rastreador establecerá una sesión GPRS y transmitirá telemetría al endpoint compartido donde Plaspy ingiere e interpreta los datos.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com (o a su IP 54.85.159.138) en el puerto 8888.
- El transporte puede ser UDP o TCP según la selección del dispositivo; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Las actualizaciones de ubicación y eventos de estado se envían a Plaspy para que el dispositivo sea visible en la plataforma.
- El reporte de eventos como pánico o entradas de inmovilizador se reenvía a Plaspy para alertas y flujos de trabajo.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Condor para el TG-610 (SMS o la herramienta de Condor) según lo documentado por el fabricante.
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 en la configuración del servidor del dispositivo.
3. Establezca el puerto del servidor a 8888. Tenga en cuenta que Plaspy usa el mismo puerto en todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar transporte y guarde esa opción.
5. Configure el APN del dispositivo, el modo GPRS y cualquier autenticación requerida mediante los comandos SMS o la herramienta.
6. Aplique o guarde la configuración y reinicie el dispositivo si las instrucciones del fabricante lo requieren.
7. Valide la conectividad verificando que el dispositivo aparezca y reporte correctamente en Plaspy.

## Ejemplos de comandos de configuración

El Condor TG-610 publica comandos de configuración por SMS. El dispositivo usa la contraseña por defecto 0000 en estos ejemplos. Envíe estos comandos por SMS al número del TG-610 en el orden mostrado para configurar APN, alias, zona horaria, servidor Plaspy, intervalo de reporte y modo GPRS. Conserve los marcadores de posición cuando correspondan.

- Establecer el APN del operador. Si su operador requiere usuario o contraseña APN, incluya los marcadores opcionales {{apnu}} y {{apnp}}.
```text
APN,0000,{{apn}}
```
Formato extendido opcional con usuario y contraseña:
```text
APN,0000,{{apn}},{{apnu}},{{apnp}}
```

- Establecer un identificador de 5 dígitos para usar como alias. Use los últimos 5 dígitos del IMEI como alias. Reemplace <LAST5> por los cinco dígitos reales.
```text
ALIAS,0000,<LAST5>#
```

- Establecer la zona horaria a UTC 0
```text
GMT,0000,-0#
```

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto y seleccionar transporte. El ejemplo usa la bandera de transporte UDP U y reporte activo A según el formato público del comando.
```text
SERVIDOR,0000,54.85.159.138,8888,U,A#
```
Puede reemplazar la IP por el dominio si el dispositivo acepta nombres de dominio:
```text
SERVIDOR,0000,d.plaspy.com,8888,U,A#
```

- Establecer el intervalo de actualización por ejemplo cada 1 minuto (el dispositivo usa la codificación de intervalo del fabricante; aquí M,6 es el ejemplo público).
```text
INTERVALO,0000,M,6#
```

- Habilitar modo GPRS
```text
GPRS,0000,A#
```

- Para comprobar o verificar los ajustes de conexión, envíe el comando de verificación:
```text
CONEXION,0000#
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador móvil necesaria para la conectividad de datos.
- {{apnu}} y {{apnp}} son marcadores opcionales para usuario y contraseña del APN; inclúyalos solo si su operador los requiere.
- <LAST5> debe reemplazarse por los últimos cinco dígitos del IMEI del dispositivo según lo indica el fabricante.

## Notas de configuración

- El Condor TG-610 soporta configuración por SMS como se muestra en los comandos públicos; la sintaxis exacta y los caracteres sufijos requeridos pueden variar según la versión de firmware.
- Si el dispositivo acepta un nombre de dominio para el servidor, puede usar d.plaspy.com; de lo contrario utilice 54.85.159.138 como IP. Ambos métodos apuntan al servicio Plaspy en el puerto 8888.
- Seleccione UDP o TCP según las opciones del dispositivo. Plaspy soporta ambos y detecta automáticamente el protocolo correcto una vez que los datos llegan al servidor.
- Los comandos y la contraseña por defecto 0000 están documentados públicamente; confirme los valores por defecto actuales con la documentación de Condor antes de su uso.
- Las revisiones de firmware, variantes regionales o herramientas del proveedor pueden cambiar el formato exacto de los comandos o las opciones disponibles.

## Por qué usar Plaspy con esta configuración

Usar el Condor TG-610 con Plaspy ofrece a organizaciones y propietarios un camino sencillo hacia el rastreo centralizado y la monitorización de eventos para motocicletas y vehículos pequeños. Con el TG-610 configurado para reportar a Plaspy, la ubicación en tiempo real, alertas de pánico y eventos de inmovilizador se vuelven visibles en los paneles de Plaspy, facilitando la supervisión operativa y una respuesta más rápida ante incidentes.

Learn more about Plaspy and how it handles device integration and fleet workflows at https://www.plaspy.com. For the latest device specific setup details, firmware updates, and manufacturer instructions verify current information at the Condor official website https://condorskyseeker.com/. Manufacturer specifications and configuration methods can change over time so confirm device behavior with Condor documentation.
