---
slug: /eelink/gpt09/configuration
id: gpt09-configuration
sidebar_label: Configuration
title: EElink - GPT09 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador EElink GPT09 con los ajustes de servidor Plaspy y comandos SMS
keywords:
  - configuración EElink GPT09
  - instalación GPT09
  - EElink GPT09 Plaspy
  - configuración rastreador GPS
  - comandos SMS para rastreador
  - ajustes servidor Plaspy
  - configuración GPRS
  - integración protocolo EELINK
  - configuración seguimiento vehicular
  - guía instalación GPT09
---

# EElink - Configuración del GPT09

Esta página reúne la información pública necesaria para usar el rastreador EElink GPT09 con Plaspy. Contiene los datos prácticos y relevantes para dirigir un equipo GPT09 al servidor Plaspy, además de los comandos SMS públicos disponibles para este modelo cuando aplican.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que utilice esta guía junto con la documentación oficial de EElink y las notas de firmware de su equipo.

## Visión general de la configuración

El objetivo es preparar un GPT09 para que reporte ubicación y eventos a la plataforma Plaspy y validar que el dispositivo sea visible en el sistema. Los comandos públicos que se muestran a continuación son el método SMS común usado por muchas unidades GPT09 para ajustar zona horaria, APN, servidor y el intervalo de reporte.

- Configurar el APN del equipo para que use datos móviles y reporte por GPRS
- Apuntar el dispositivo al servidor Plaspy usando el dominio o IP proporcionados y el puerto compartido de Plaspy
- Establecer un intervalo de reporte acorde con sus necesidades de monitoreo y la estrategia de batería
- Opcional: restablecimiento de fábrica o ajuste de zona horaria para marcar tiempos consistentes
- Verificar la configuración y confirmar que el dispositivo reporte a Plaspy

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad GPT09 cargada y funcional con acceso a su interfaz de configuración por SMS
- Una tarjeta SIM activa con plan de datos y las credenciales APN correctas
- Capacidad para enviar SMS desde un teléfono o herramienta de gestión para remitir los comandos de configuración
- Conocimiento de la versión de firmware del dispositivo y de la documentación del fabricante para comportamientos específicos
- Una cuenta registrada en Plaspy para ver y validar el dispositivo una vez que comience a reportar
- Capacidad para reiniciar o cortar la alimentación del rastreador después de aplicar los ajustes

## Cómo se conecta este rastreador a Plaspy

Cuando está correctamente configurado, el GPT09 usa su conexión GPRS para enviar datos de ubicación y estado al endpoint y puerto del servidor Plaspy. El dominio o la IP del servidor y el puerto son los valores primarios necesarios para direccionar el equipo a Plaspy.

- El rastreador reporta al endpoint compartido de Plaspy d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Seleccione transporte UDP o TCP según lo requiera el firmware del dispositivo; Plaspy admite ambos y detectará el protocolo automáticamente
- La frecuencia de reporte se controla mediante el temporizador del dispositivo; actualizaciones frecuentes deben balancearse frente a la autonomía de la batería
- Los modos de seguimiento de emergencia o en tiempo real pueden cambiar el dispositivo a reportes más frecuentes para monitoreo inmediato
- Una vez en reporte, los mensajes de ubicación y eventos del dispositivo serán visibles en Plaspy para monitoreo operativo y análisis

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración EElink para su GPT09, típicamente por comandos SMS o la herramienta del fabricante, y confirme los datos del firmware.
2. Asegúrese de que el equipo tenga una SIM funcionando e ingrese el APN del operador para la conectividad de datos móviles.
3. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.
4. Establezca el puerto del servidor en 8888 y seleccione UDP o TCP si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración en el equipo y envíe los comandos de confirmación que el fabricante requiera.
6. Reinicie o haga un ciclo de energía del rastreador si el fabricante o el firmware lo requieren para activar los ajustes.
7. Valide que el dispositivo reporte a Plaspy y sea visible en su cuenta Plaspy, ajustando el temporizador o los modos de reporte según sea necesario.

## Comandos de ejemplo para la configuración

El GPT09 puede configurarse por SMS usando los comandos públicos documentados. Envíe estos comandos como mensajes SMS simples al número del dispositivo en el orden indicado para la configuración inicial. El comando de restauración de fábrica es opcional y solo debe usarse si desea borrar la configuración previa.

1. Restauración de fábrica opcional para limpiar ajustes previos
```text
FACTORY#
```

2. Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

3. Establecer el APN del operador
```text
APN,[apn]{{#if apnu}},[apnu]{{/if}}{{#if apnp}},[apnp]{{/if}}#
```
- Explicación de los marcadores
  - [apn] es el nombre del APN de la red móvil para la SIM
  - [apnu] es un nombre de usuario APN opcional si su operador lo requiere
  - [apnp] es una contraseña APN opcional si su operador la exige

4. Configurar el servidor GPRS usando el dominio Plaspy
```text
SERVER,1,d.plaspy.com,8888#
```

5. Alternativamente configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888#
```

6. Establecer el intervalo de actualización a 60 segundos
```text
TIMER,60#
```

7. Consultar parámetros actuales
```text
PARAM#
```

Envíe cada comando como un SMS separado y espere la respuesta de confirmación del dispositivo cuando esté disponible. Si su equipo no responde, verifique la conectividad de la SIM y que el acceso a SMS funcione correctamente.

## Notas de configuración

- La configuración por SMS está soportada en el GPT09 y es el método público mostrado en la documentación del fabricante para muchas unidades
- Las revisiones de firmware y las versiones para regiones específicas pueden cambiar la sintaxis de los comandos o las opciones disponibles, así que verifique las notas de su firmware
- Elija UDP o TCP según la recomendación del firmware del rastreador y las condiciones de red; Plaspy acepta ambos y detectará el protocolo de forma automática
- Mantenga las credenciales APN correctas y verifique la conectividad de datos antes de configurar el servidor; un APN incorrecto impide el reporte por GPRS
- El soporte de actualizaciones OTA puede modificar el comportamiento tras una actualización, por lo que debe revalidar la configuración después de actualizaciones importantes de firmware

## Por qué usar Plaspy con esta configuración

Usar Plaspy con el EElink GPT09 ofrece un camino sencillo hacia la visibilidad operativa. Con la información del servidor Plaspy configurada en d.plaspy.com o 54.85.159.138 y el puerto estándar 8888, un GPT09 correctamente configurado puede enviar datos de ubicación y eventos a Plaspy para monitoreo, alertas y análisis histórico.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration, firmware behavior, and the latest manufacturer details on the official EElink site https://www.eelink.com.cn/. Manufacturer specifications and setup methods can change over time so consult the official documentation to confirm the latest commands and procedures.
