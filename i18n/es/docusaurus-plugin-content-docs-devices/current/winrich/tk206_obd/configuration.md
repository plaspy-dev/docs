---
slug: /winrich/tk206_obd/configuration
id: tk206_obd-configuration
sidebar_label: Configuration
title: Winrich - TK206 OBD Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Winrich TK206 OBD con ajustes de servidor Plaspy y comandos SMS prácticos
keywords:
  - Configuración Winrich TK206 OBD
  - Configuración Winrich TK206
  - Configuración TK206 OBD Plaspy
  - Configuración rastreador GPS Winrich
  - Configuración rastreador OBD II para vehículo
  - Configuración servidor rastreador GPS
  - Configuración Plaspy para rastreador
  - Configuración seguimiento de flotas
  - Configuración plataforma OBD GPS
  - Configuración rastreador GPRS
---

# Winrich - TK206 OBD Configuración

Esta página recopila la información pública necesaria para usar el rastreador Winrich TK206 OBD con Plaspy. Incluye los pasos prácticos y los valores de servidor públicos necesarios para apuntar el dispositivo al backend de Plaspy y que la ubicación y la telemetría OBD se envíen a la plataforma.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK206 OBD admite configuración por SMS y conectividad GPRS para el reporte, por lo que esta guía se centra en aplicar los valores del servidor de Plaspy y en los comandos SMS comunes que figuran en la documentación del fabricante.

## Resumen de configuración

Configurar el TK206 OBD para Plaspy prepara el dispositivo para comunicarse con el backend de Plaspy a través de la red GSM GPRS y reportar datos GPS y OBD para su visualización en la plataforma. La parte más importante es asegurarse de que el rastreador tenga el APN y los valores de servidor correctos para poder establecer una sesión GPRS y enviar datos al endpoint y puerto compartidos de Plaspy.

- Apuntar el dispositivo a los ajustes de servidor de Plaspy para que la telemetría llegue a la plataforma.
- Configurar el APN y los parámetros GPRS para que el rastreador pueda conectarse mediante datos móviles.
- Validar la conectividad y verificar que el dispositivo reporte al endpoint del servidor Plaspy.
- Ajustar el intervalo de reporte y las opciones operativas según sus necesidades de monitoreo.
- Usar comandos SMS o el método oficial de configuración de Winrich para aplicar los ajustes.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos del servidor Plaspy al configurar el TK206 OBD:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática de protocolo en Plaspy

Plaspy usa el mismo puerto para todos los dispositivos compatibles y detectará automáticamente el protocolo del rastreador una vez que el dispositivo se conecte al endpoint del servidor.

## Requisitos típicos antes de la configuración

- Un TK206 OBD alimentado e insertado en el puerto OBDII del vehículo o alimentado según las indicaciones de Winrich.
- Una tarjeta SIM activa con un plan de datos que soporte GPRS y SMS para la configuración.
- Datos del APN del operador (nombre APN y, opcionalmente, usuario y contraseña).
- Un teléfono capaz de enviar comandos SMS o acceso a la herramienta de configuración del fabricante.
- Visibilidad al cielo adecuada o condiciones LBS aceptables para el reporte por GPS o localización por red.
- Acceso a la documentación oficial de Winrich para instrucciones específicas por modelo y notas sobre firmware.

## Cómo se conecta este rastreador a Plaspy

El TK206 OBD se configura para usar GPRS y así conectarse a Plaspy y enviar periódicamente telemetría y datos OBD a la plataforma. Una vez que el APN y los valores de servidor son correctos, el rastreador establece una sesión de datos y envía la ubicación y los diagnósticos del vehículo al endpoint y puerto compartidos de Plaspy para su procesamiento y visualización.

- El rastreador reporta posición y parámetros OBD al endpoint del servidor Plaspy.
- Los datos se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo puede usar UDP o TCP según la configuración del equipo y las condiciones de red.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando el rastreador se conecta al puerto compartido.
- Los eventos y las alarmas configuradas en el rastreador se reenvían a Plaspy para su visibilidad y monitoreo en la plataforma.

## Flujo típico de configuración

1. Acceda al método o software oficial de configuración de Winrich, o prepárese para enviar comandos SMS según lo documentado por Winrich.
2. Ingrese el servidor de Plaspy por dominio o IP, usando d.plaspy.com o 54.85.159.138 como dirección del servidor.
3. Establezca el puerto en 8888, el puerto global de Plaspy usado para todos los dispositivos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el protocolo de transporte.
5. Proporcione el APN del operador y las credenciales necesarias, luego guarde o aplique la configuración.
6. Reinicie el dispositivo si el fabricante lo requiere o después de aplicar los ajustes.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado del equipo o usando los comandos de verificación del dispositivo.

## Ejemplo de comandos de configuración

El TK206 OBD admite configuración por SMS. A continuación se muestran los comandos SMS públicos proporcionados por el fabricante presentados en orden. Si utiliza SMS para la configuración, envíe cada comando desde un número autorizado según lo requiera el dispositivo.

- Restauración de fábrica (paso inicial opcional)
```text
940#
```
- Ajustar la zona horaria a UTC-0
```text
801#W0#
```
- Establecer el APN del operador (reemplace los marcadores por los valores de su operador)
```text
802#[apn]#[apnu]#[apnp]#
```
Nota: [apn] es el nombre del APN, [apnu] es el usuario del APN si se requiere y [apnp] es la contraseña del APN si se requiere. Si su operador no requiere usuario o contraseña, deje esos marcadores vacíos según lo permita el formato SMS del dispositivo.

- Configurar el servidor GPRS al backend de Plaspy (IP del servidor y puerto)
```text
803#54.85.159.138#8888#
```
También puede usar el dominio en lugar de la IP si el dispositivo acepta nombres de dominio, pero el ejemplo público oficial usa la IP del servidor Plaspy y el puerto global.

- Establecer el intervalo de actualización a 60 segundos
```text
730#60#
```
- Consultar la configuración actual
```text
886#
```
- Consultar el estado del dispositivo
```text
902#
```

Envíe estos comandos en el orden que resulte apropiado para su instalación. El comando de restauración de fábrica es opcional y solo debe usarse si necesita devolver el dispositivo a la configuración predeterminada antes de aplicar la nueva configuración.

## Notas de configuración

- Este modelo admite configuración por SMS; use la sintaxis oficial de comandos SMS exactamente y asegúrese de enviar los comandos desde un número autorizado si el equipo así lo requiere.
- Conserve los marcadores del APN al preparar los comandos y reemplácelos por los valores correctos del operador antes de enviar.
- Elija UDP o TCP según su entorno de red; Plaspy acepta ambos transportes en el puerto 8888.
- Las revisiones de firmware y las variantes de hardware pueden cambiar la sintaxis o el comportamiento de los comandos; verifique la sintaxis con la documentación de su dispositivo si un comando no responde como se espera.
- Confirme que la tarjeta SIM soporte datos y que el dispositivo tenga señal suficiente para establecer una sesión GPRS antes de esperar reportes en vivo.

## Por qué usar Plaspy con esta configuración

Usar el Winrich TK206 OBD con Plaspy ofrece una forma sencilla de centralizar la ubicación del vehículo y los reportes de diagnóstico OBD para operaciones de flota o monitoreo de vehículos individuales. Apuntar el rastreador al endpoint y puerto compartidos de Plaspy permite que la plataforma detecte automáticamente el protocolo del dispositivo y comience a ingerir telemetría para mapeo, alertas y supervisión operativa.

Para conocer más sobre Plaspy y sus funciones visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, comportamiento del firmware e instrucciones del fabricante, verifique la información en el sitio de Winrich http://www.winrichgroup.com/en/ ya que los modelos y los procedimientos de configuración pueden cambiar con el tiempo.
