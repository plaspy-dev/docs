---
slug: /telic/picotrack_4g/configuration
id: picotrack_4g-configuration
sidebar_label: Configuration
title: Telic - Picotrack 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Telic Picotrack 4G con ajustes de servidor Plaspy y comandos SMS de ejemplo
keywords:
  - Configuración Telic Picotrack 4G
  - Instalación Picotrack 4G para Plaspy
  - Configuración rastreador GPS Telic
  - Configuración servidor Picotrack
  - Configuración de rastreador Plaspy
  - Comandos SMS Picotrack 4G
  - Configuración LTE M
  - Configuración plataforma GPS Picotrack
  - Rastreo vehicular Picotrack
  - Rastreo de flotas Picotrack
---

# Telic - Configuración Picotrack 4G

Esta página aborda la configuración pública necesaria para utilizar el Telic Picotrack 4G con Plaspy. Reúne los valores de servidor de Plaspy que debe apuntar el dispositivo y extrae los comandos SMS públicos que Telic suele publicar. El objetivo es práctico: dejar el dispositivo listo para comunicarse con Plaspy y que sea visible en la plataforma para rastreo en tiempo real e informes históricos.

Plaspy utiliza un endpoint y puerto compartidos para los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo, aunque los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El Picotrack 4G es compatible con LTE Cat M1, y la configuración pública que se muestra a continuación usa comandos SMS y parámetros GPRS para definir el APN y la información del servidor antes de habilitar el modo GPRS.

## Resumen de la configuración

El proceso prepara al Picotrack 4G para enviar telemetría y actualizaciones de ubicación a Plaspy y para ser reconocido por la plataforma. El flujo público que se muestra refleja la configuración típica basada en SMS y el endpoint de Plaspy que el dispositivo debe usar.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que el Picotrack 4G pueda establecer una sesión de datos.
- Apunte el dispositivo al endpoint de ingestión de Plaspy (IP o dominio) y configure el puerto común para que Plaspy reciba los mensajes.
- Seleccione el modo de transporte (UDP o TCP) que requiera el dispositivo y habilite el reporte GPRS para comenzar las actualizaciones en vivo.
- Valide que el dispositivo reporte a Plaspy comprobando el estado del equipo y utilizando el comando de verificación provisto.
- Opcionalmente, realice un reinicio de fábrica o ajuste de zona horaria durante la provisión inicial.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como el nombre canónico de ingestión cuando su dispositivo soporte nombres de dominio.
- IP del servidor 54.85.159.138 como el endpoint numérico soportado para configuración directa.
- Puerto 8888 que Plaspy usa para todos los dispositivos soportados.
- Soporte de transporte por UDP o TCP según las opciones de configuración del rastreador; el Picotrack 4G puede configurarse para usar cualquiera de los dos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo comienza a enviar datos al endpoint compartido.

## Requisitos típicos antes de la configuración

- Un dispositivo con batería cargada o una instalación con alimentación, y acceso físico al rastreador si la provisión se realiza por SMS.
- Una SIM celular válida con plan de datos y la información de APN correcta para el operador móvil.
- Capacidad para enviar comandos SMS al dispositivo desde un teléfono de administración o una herramienta de provisión, o acceso al software de configuración de Telic si está disponible.
- Conocer la contraseña por defecto del equipo para que acepte comandos SMS; el ejemplo público usa la contraseña por defecto 123456.
- Acceso a la documentación oficial de Telic y notas de versión para confirmar comandos y diferencias de firmware.
- Un destino para validar la conexión, por ejemplo una cuenta en Plaspy donde pueda confirmar la conectividad del dispositivo tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo con el endpoint y puerto de Plaspy, el Picotrack 4G abre una sesión de datos celular y envía mensajes de ubicación y telemetría al endpoint compartido de ingestión de Plaspy. Plaspy procesa estos mensajes, identifica automáticamente el protocolo del dispositivo y expone los datos mediante mapas de rastreo, alertas e informes.

- El dispositivo se configura para enviar a d.plaspy.com o al endpoint numérico 54.85.159.138 para que los mensajes lleguen a Plaspy.
- Los mensajes se envían al puerto 8888 que Plaspy utiliza de forma universal para los rastreadores soportados.
- El rastreador usa UDP o TCP según la configuración elegida y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de los mensajes entrantes y decodifica la telemetría para su visualización.
- Una vez activo el reporte, Plaspy ofrece visibilidad de actualizaciones de ubicación, latidos y eventos enviados por el dispositivo.

## Flujo de configuración común

1. Acceda al método de configuración oficial del fabricante, como la provisión por SMS o las herramientas de Telic, y confirme que el dispositivo acepta comandos.
2. Ingrese el servidor de Plaspy como d.plaspy.com o como la dirección numérica 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto 8888 como el puerto de destino usado por Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y soporta ambas opciones.
5. Configure el APN y, si aplica, las credenciales del APN para la SIM para que el dispositivo pueda establecer conexión de datos GPRS.
6. Aplique o guarde la configuración y, si es necesario, reinicie o reinitialice el dispositivo para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación y comprobando el estado del equipo en Plaspy.

## Comandos de configuración de ejemplo

El Picotrack 4G puede configurarse mediante comandos SMS. Los siguientes comandos públicos aparecen en los ejemplos del fabricante. La contraseña por defecto del dispositivo utilizada en estos ejemplos es 123456. Reemplace los marcadores con los valores de su operador donde se indique.

- Reinicio de fábrica inicial opcional (usar solo si necesita un inicio limpio):
```
begin123456
```

- Establecer la zona horaria del dispositivo a UTC 0:
```
time zone123456 0
```

- Configurar el APN del operador (reemplace [apn] por el APN de su operador):
```
apn123456 [apn]
```

- Configurar usuario y contraseña del APN si su operador los requiere (reemplace [apnu] y [apnp] con las credenciales):
```
up123456 [apnu] [apnp]
```

- Establecer el servidor GPRS al endpoint numérico de Plaspy y el puerto (Plaspy también acepta d.plaspy.com si el dispositivo soporta dominios):
```
adminip123456 54.85.159.138 8888
```

- Cambiar el dispositivo al modo de reporte GPRS. Use los parámetros explícitos o el comando corto según el firmware:
```
gprs123456,1,1
```
o
```
gprs123456
```

- Verificar la configuración actual en el dispositivo:
```
check123456
```

Notas sobre marcadores: [apn] es el valor APN de su operador móvil, [apnu] es un nombre de usuario opcional del APN y [apnp] es una contraseña opcional del APN. Mantenga la contraseña del dispositivo (123456 en los ejemplos) en privado y cámbiela según las indicaciones de Telic si es necesario.

## Observaciones de configuración

- La provisión por SMS se muestra en los comandos públicos; algunas implementaciones usan el software de configuración de Telic o herramientas de campo. Use el método recomendado para su firmware y variante de hardware.
- Las versiones de firmware y las variantes de hardware, como las versiones PAIP o UKSP, pueden modificar los comandos disponibles o la sintaxis exacta. Verifique los comandos frente al firmware de su dispositivo.
- Elija UDP o TCP según la confiabilidad de la red y el soporte del dispositivo. Plaspy acepta cualquiera de los dos transportes en el puerto 8888.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo desde los mensajes entrantes.
- Mantenga un registro de las contraseñas de los equipos y cambie los valores por defecto cuando corresponda, siguiendo las instrucciones de Telic.

## Por qué usar Plaspy con esta configuración

Configurar el Picotrack 4G para reportar a Plaspy proporciona a las organizaciones visibilidad consolidada de ubicación y telemetría en flotas y activos remotos. La combinación de la eficiencia LTE Cat M1 del Picotrack 4G y el endpoint unificado de ingestión de Plaspy simplifica la provisión y reduce la carga de configuración por dispositivo al apoyarse en un servidor y puerto compartidos.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior on the manufacturer's website https://www.telic.de. Manufacturer specifications and setup steps can change over time so always confirm current procedures with Telic documentation before mass deployment.
