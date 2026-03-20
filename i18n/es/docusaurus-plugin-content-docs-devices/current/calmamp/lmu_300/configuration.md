---
slug: /calmamp/lmu_300/configuration
id: lmu_300-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-300 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar CalmAmp LMU-300 con ajustes de servidor Plaspy y comandos SMS
keywords:
  - Configuración CalmAmp LMU 300
  - Configuración LMU 300
  - Configuración servidor CalmAmp LMU 300
  - Configuración Plaspy LMU 300
  - Configuración rastreador GPS LMU 300
  - Configuración SMS rastreador CalmAmp
  - Configuración seguimiento vehicular
  - Configuración plataforma GPS
  - Seguimiento de flotas CalmAmp LMU 300
  - Integración CalmAmp PULS
---

# CalmAmp - Configuración LMU-300

Esta página explica el contexto público de configuración para usar el rastreador CalmAmp LMU-300 con Plaspy. Describe los ajustes prácticos de servidor y los pasos comunes de instalación que permiten que el LMU-300 informe en Plaspy, y presenta los comandos públicos basados en SMS que se usan habitualmente para la configuración inicial.

Plaspy utiliza un endpoint y puerto compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos precisos del fabricante pueden variar según la versión del firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor. El LMU-300 admite opciones de configuración por SMS y aprovisionamiento OTA en los flujos del fabricante; los comandos que se muestran aquí son los comandos SMS publicados que se usan para establecer el APN y los valores de servidor al configurar el dispositivo para Plaspy.

## Resumen de la configuración

El objetivo de la configuración es preparar el LMU-300 para comunicarse de forma fiable con Plaspy, de modo que el equipo aparezca y reporte correctamente en su vista de flota. Normalmente la configuración establece los parámetros APN de la red, la dirección y el puerto del servidor Plaspy, y verifica que el dispositivo esté enviando datos después de un reinicio.

- Configure el APN del operador móvil y, si aplica, el usuario y la contraseña del APN para que el dispositivo pueda iniciar una sesión de datos GPRS.
- Configure la dirección del servidor Plaspy para que el LMU-300 envíe telemetría al endpoint de Plaspy.
- Establezca el puerto del servidor usado por Plaspy y elija el transporte (UDP o TCP) cuando el dispositivo lo requiera.
- Reinicie o reinicie el dispositivo para que los nuevos parámetros tomen efecto y luego valide que el equipo sea visible en Plaspy.
- Use el MID del dispositivo y los comandos de verificación para confirmar los ajustes tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte para UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos compatibles

Estos son los valores públicos de Plaspy que debe ingresar en el equipo o enviar por SMS para que el LMU-300 reporte a la plataforma Plaspy.

## Requisitos típicos antes de la configuración

- Un LMU-300 instalado y con alimentación, con una tarjeta SIM funcional y datos habilitados si va a usar GPRS.
- Acceso al número de teléfono del dispositivo para enviar los comandos SMS de configuración, o acceso a la herramienta de aprovisionamiento del proveedor como PULS si utilizará la configuración OTA.
- El MID del dispositivo (10 dígitos) tal como lo informa el equipo en respuesta al comando !R0, para poder incluir el ID cuando el dispositivo lo requiera.
- El APN del operador móvil y cualquier usuario o contraseña del APN requeridos por la SIM.
- Una forma de recibir las respuestas o mensajes de confirmación del dispositivo después de enviar comandos SMS.
- Acceso a la documentación oficial de CalmAmp y a las herramientas de configuración para su revisión de firmware y hardware.

## Cómo se conecta este rastreador a Plaspy

El LMU-300 se configura para enviar mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy, lo que permite la visibilidad del dispositivo y el monitoreo de eventos en la plataforma. Una vez configurado, el equipo establece una sesión de datos con el APN del operador y envía telemetría al endpoint Plaspy configurado.

- El dispositivo se ajusta para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy recibe la telemetría del dispositivo en el puerto 8888 para todos los dispositivos compatibles.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que no necesita seleccionar un protocolo en el servidor.
- El rastreador usará el transporte seleccionado (UDP o TCP) si el dispositivo requiere una elección explícita.
- Tras la configuración y el reinicio, el rastreador debería comenzar a enviar reportes periódicos y mensajes de evento a Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de CalmAmp para su unidad, como comandos SMS o la herramienta de aprovisionamiento del proveedor PULS, según su despliegue y firmware.  
2. Obtenga el MID del dispositivo enviando el comando !R0 y registre el ID de 10 dígitos si el equipo requiere un ID para comandos SMS.  
3. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en la configuración del equipo.  
4. Configure el puerto del servidor a 8888 en la configuración del dispositivo.  
5. Elija UDP o TCP si el firmware del LMU-300 requiere seleccionar un protocolo de transporte.  
6. Aplique o guarde la configuración y realice un reinicio del dispositivo si es necesario.  
7. Valide que el equipo reporte a Plaspy y sea visible en la plataforma; verifique la telemetría o los mensajes de estado esperados.

## Ejemplos de comandos de configuración

Los comandos SMS públicos del LMU-300 para la configuración básica son los publicados por CalmAmp. Envíe estos comandos por SMS al dispositivo. El equipo espera que el ID sea el MID de 10 dígitos informado por el comando !R0 cuando se requiera un ID.

- Obtener el MID del dispositivo
```text
!R0
```
- Configurar el APN del operador
```text
!RP,2306,0,{{apn}}
```
- Configurar el usuario del APN del operador (si aplica)
```text
!RP,2314,0,{{apnu}}
```
- Configurar la contraseña del APN del operador (si aplica)
```text
!RP,2315,0,{{apnp}}
```
- Establecer el servidor GPRS a Plaspy por IP
```text
!RP,2319,0,54.85.159.138
```
- Establecer el puerto del servidor a 8888
```text
!RP,769,0,8888
```
- Reiniciar el rastreador para aplicar los ajustes
```text
!R3,70,0
```
- Comprobar la configuración actual
```text
!RO
```

Notas sobre marcadores y uso:
- {{apn}} es un marcador para la cadena APN de su operador móvil.
- {{apnu}} y {{apnp}} son marcadores para el usuario y la contraseña del APN si su operador los requiere.
- Mantenga el orden anterior: primero configure el APN, luego el servidor y puerto, y finalmente reinicie.
- Si el dispositivo requiere incluir el MID de 10 dígitos como prefijo de ID en los comandos SMS, inclúyalo según las especificaciones del equipo tras obtenerlo con !R0.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar el formato exacto de los comandos o los IDs disponibles; confirme siempre con la documentación actual de CalmAmp para su unidad.
- El LMU-300 admite flujos de configuración por SMS como los mostrados, y también puede soportar aprovisionamiento OTA mediante CalmAmp PULS para actualizaciones a gran escala o remotas.
- Elija el transporte UDP o TCP de acuerdo con las opciones del firmware del LMU-300 y su entorno de red; Plaspy acepta cualquiera de los dos en el puerto 8888.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto 8888 y Plaspy detectará el protocolo del rastreador automáticamente.
- Tenga a mano las credenciales del APN y el MID del dispositivo durante la configuración para reducir el tiempo de puesta en marcha.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-300 para Plaspy ofrece un camino sencillo hacia la visibilidad de la flota y el monitoreo basado en eventos. Las opciones de configuración flexibles del LMU-300, junto con la detección automática de protocolos de Plaspy, facilitan poner los dispositivos en línea rápidamente y aseguran que los datos lleguen a un único endpoint compartido para su procesamiento y visualización.

To learn more about Plaspy and how to onboard devices for fleet tracking visit https://www.plaspy.com. Please verify the latest device specific setup steps, firmware behavior, and manufacturer guidance at CalmAmp support http://www.calamp.com/ as vendor documentation and commands can change over time.
