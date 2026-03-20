---
slug: /eelink/gpt50/configuration
id: gpt50-configuration
sidebar_label: Configuration
title: EElink - GPT50 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT50 con Plaspy mediante SMS y ajustes de servidor compartido
keywords:
  - configuración EElink GPT50
  - configuración GPT50
  - configuración GPT50 Plaspy
  - configuración servidor GPT50
  - configuración rastreador EElink
  - configuración SMS GPT50
  - configuración GPS Plaspy
  - seguimiento activos GPT50
  - seguimiento vehículos GPT50
  - configuración plataforma GPS EElink
---

# EElink - Configuración del GPT50

Esta página describe el contexto público de configuración para usar el rastreador EElink GPT50 con Plaspy. Explica los ajustes de servidor compartido que Plaspy requiere, los prerrequisitos habituales que debe verificar antes de la configuración y los comandos prácticos por SMS incluidos en la documentación pública del GPT50 que preparan el dispositivo para comunicarse con Plaspy.

Plaspy utiliza ajustes de servidor compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía se centra en los pasos públicos y prácticos y en los comandos SMS provistos para el GPT50, recomendando que confirme detalles específicos de firmware con el fabricante.

## Resumen de la configuración

Configurar el GPT50 para Plaspy prepara el rastreador para reportar posiciones GNSS y telemetría del dispositivo a la plataforma Plaspy usando el endpoint y puerto compartido de Plaspy. Para el GPT50, los comandos públicos muestran un flujo basado en SMS para ajustar la zona horaria, el APN, el servidor GPRS, el intervalo de reporte y una opción de restablecimiento de fábrica o verificación de parámetros.

- Configure el APN del dispositivo para que pueda establecer datos celulares y conectividad GPRS con Plaspy.
- Apunte el rastreador al servidor de Plaspy mediante nombre de host o IP y asigne el puerto compartido de Plaspy.
- Elija el modo de transporte si el dispositivo requiere seleccionar entre UDP o TCP y guarde la configuración.
- Configure el intervalo de reporte o temporizador para controlar la frecuencia con la que el rastreador envía actualizaciones.
- Valide los ajustes con el comando de verificación de parámetros del dispositivo y confirme la visibilidad en Plaspy.
- Use un restablecimiento de fábrica solo cuando sea necesario o durante la preparación inicial del dispositivo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com para configuraciones basadas en hostname
- IP del servidor 54.85.159.138 para configuraciones por dirección numérica
- Puerto 8888 como el puerto de datos compartido usado por Plaspy
- Soporte de transporte para UDP o TCP según lo requiera el rastreador
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el servidor aceptará el protocolo del dispositivo
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que siempre se usará el puerto 8888 para dispositivos compatibles

## Requisitos habituales antes de la configuración

- Un dispositivo GPT50 con alimentación suficiente de batería o alimentación externa para la configuración
- Una SIM celular válida con datos y SMS habilitados y los ajustes APN correctos proporcionados por su operador móvil
- Acceso al método de configuración del fabricante del GPT50, como comandos SMS o herramientas oficiales de configuración
- Conocimiento del APN del operador y cualquier nombre de usuario o contraseña APN opcional que su operador requiera
- Cobertura de red en el área de despliegue objetivo para permitir que el dispositivo se conecte a GPRS o datos celulares
- Acceso a la cuenta o plataforma Plaspy para confirmar el reporte del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El GPT50 se configura para reportar posiciones y datos de telemetría al endpoint y puerto compartido de Plaspy, de modo que Plaspy reciba actualizaciones de ubicación y estado del dispositivo para monitoreo e informes. La detección automática de protocolo de Plaspy facilita la recepción de datos del rastreador una vez que el host o IP y el puerto correctos estén configurados en el dispositivo.

- El rastreador envía posición GNSS y telemetría del dispositivo al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El dispositivo emplea datos celulares con un APN configurado para establecer una conexión GPRS o IP con Plaspy
- Plaspy ingiere y muestra actualizaciones en tiempo real para visibilidad operativa e historial
- Los intervalos de reporte configurados en el dispositivo controlan la frecuencia con la que Plaspy recibe actualizaciones
- Eventos y alertas reportados por el dispositivo se reenvían a Plaspy para el procesamiento de reglas de plataforma y notificaciones

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el GPT50, por ejemplo el flujo de comandos SMS documentado o la herramienta del proveedor.
2. Ingrese d.plaspy.com como el nombre de host del servidor o ingrese 54.85.159.138 como la IP del servidor en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo requiere seleccionar el transporte, elija UDP o TCP según corresponda para su instalación.
5. Configure el APN del operador y cualquier nombre de usuario o contraseña APN opcional que requiera el operador.
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware del rastreador lo exige.
7. Valide que el dispositivo reporte a Plaspy comprobando parámetros o confirmando que aparece una posición en vivo en la plataforma Plaspy.

## Comandos de configuración de ejemplo

Los comandos públicos del GPT50 pueden aplicarse vía SMS. Conserve los marcadores de posición y envíe cada comando como un SMS independiente al número del dispositivo. Los comandos se muestran en el orden público provisto por el fabricante.

1. Restablecimiento de fábrica opcional si necesita devolver el dispositivo a valores predeterminados
```text
FACTORY#
```

2. Configurar la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Establecer el APN del operador
```text
APN,{{apn}}{{apnu_and_apnp}}#
```
Nota sobre el comando APN: el marcador de posición {{apn}} debe reemplazarse por el APN de su operador. Si su operador requiere nombre de usuario y contraseña para el APN, el comando puede incluir {{apnu}} y {{apnp}} como campos adicionales separados por comas. El formato público original del comando era APN,{{apn}},{{apnu}},{{apnp}}# donde el usuario y la contraseña son opcionales según los requisitos del operador.

4. Establecer el servidor GPRS por nombre de host usando el host compartido de Plaspy y el puerto
```text
SERVER,1,d.plaspy.com,8888#
```

Alternativamente establecer el servidor GPRS por IP numérica usando la IP compartida de Plaspy y el puerto
```text
SERVER,0,54.85.159.138,8888#
```

5. Configurar el intervalo de actualización a 60 segundos
```text
TIMER,60#
```

6. Verificar los parámetros actuales
```text
PARAM#
```

Siga las indicaciones del fabricante sobre las reglas de formato SMS, como no incluir espacios extras y mantener los caracteres de cierre requeridos. Envíe los comandos uno por uno y espere cualquier mensaje de confirmación del dispositivo antes de enviar el siguiente comando.

## Notas de configuración

- La configuración basada en SMS aparece en el contenido público del GPT50, pero el fabricante puede proporcionar también herramientas o utilidades de configuración por serial/USB dependiendo del firmware y del proveedor.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de comandos disponibles o los parámetros requeridos, por lo que confirme los comandos en el sitio del fabricante.
- Elija UDP o TCP según los requisitos de la instalación, pero recuerde que Plaspy acepta ambos transportes y detecta el protocolo automáticamente.
- Use los marcadores de APN exactamente como su operador los requiera e incluya los campos de usuario y contraseña solo si son necesarios.
- Si realiza un restablecimiento de fábrica, hágalo como un paso inicial únicamente cuando sea necesario para una configuración limpia.

## Por qué usar Plaspy con esta configuración

Usar el EElink GPT50 con Plaspy permite a las organizaciones con rastreadores de larga vida útil enviar posiciones GNSS regulares y telemetría a una plataforma única y consolidada. Configurar el rastreador para que apunte a Plaspy utilizando los ajustes de servidor compartido simplifica el aprovisionamiento de flotas y asegura la ingestión consistente de datos de ubicación y del dispositivo para monitoreo, alertas de geovallas e informes históricos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest GPT50 device specific setup, firmware behavior, and command syntax on the official manufacturer site https://www.eelink.com.cn/ so you have the most current information for your deployment.
