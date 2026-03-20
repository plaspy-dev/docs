---
slug: /teltonika/fmc001/configuration
id: fmc001-configuration
sidebar_label: Configuration
title: Teltonika - FMC001 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Teltonika FMC001 con ajustes de servidor Plaspy y comandos de ejemplo para integrar el dispositivo
keywords:
  - configuración Teltonika FMC001
  - instalación Teltonika FMC001
  - configuración de servidor FMC001
  - integración con Plaspy
  - guía de configuración de rastreador GPS
  - configuración de software de rastreo FMC001
  - configuración de tracker OBD Teltonika
  - configuración de plataforma de seguimiento de flotas
  - configuración de servidor para dispositivo GPS
  - Teltonika FMC001 con Plaspy
---

# Teltonika - FMC001 Configuración

Esta página reúne la información pública de configuración necesaria para conectar un rastreador Teltonika FMC001 a la plataforma Plaspy. Incluye los ajustes públicos del servidor Plaspy que usted necesita, explica qué preparar antes de la integración y muestra un comando de ejemplo que muchos dispositivos Teltonika aceptan para establecer el APN y los parámetros del servidor.

Plaspy utiliza ajustes compartidos de servidor para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos para aplicar estas configuraciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración Teltonika que utilice, por lo que debe seguir las herramientas del fabricante y verificar diferencias antes del despliegue.

## Resumen de la configuración

El objetivo de esta configuración es dejar el FMC001 listo para que envíe de manera confiable la ubicación, datos OBD II y eventos de sensores a la plataforma Plaspy. Usar el endpoint y puerto públicos de Plaspy garantiza que el rastreador envíe telemetría al mismo servicio de recolección que usan otros dispositivos compatibles.

- Configure las credenciales APN y el endpoint del servidor para que el rastreador pueda abrir conexión con Plaspy
- Seleccione el tipo de transporte (UDP o TCP) si el dispositivo requiere elegir transporte
- Asegúrese de que el dispositivo informe al endpoint y puerto compartidos de Plaspy usados para todos los equipos
- Valide la conectividad y confirme que el dispositivo aparece en la monitorización y en las transmisiones de telemetría de Plaspy
- Use las herramientas de Teltonika o comandos SMS cuando estén soportados para aplicar los ajustes

## Ajustes públicos del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos compatibles)  
- Soporte de transporte UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse

## Requisitos típicos antes de la configuración

- Un FMC001 instalado y con alimentación, con acceso al puerto OBD del vehículo según requiera el modelo
- Una SIM celular válida con plan de datos activo y las credenciales APN correctas para su operador móvil
- Acceso al método de configuración Teltonika que vaya a utilizar, como Teltonika Configurator, la app FMBT o comandos SMS
- Tener a mano el APN, el nombre de usuario APN y la contraseña APN provistos por su operador para ingresarlos en el dispositivo
- Decidir si usará transporte UDP o TCP para la conexión del dispositivo
- Poder reiniciar el dispositivo tras aplicar la configuración para asegurar que los cambios entren en vigor

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el FMC001 abre una conexión de red hacia el endpoint del servidor Plaspy y envía telemetría por el transporte seleccionado. Plaspy usa detección automática de protocolo y un único puerto para que los dispositivos se registren de forma consistente en la plataforma.

- El rastreador se configura para reportar al endpoint compartido d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888  
- Los datos se transmiten por UDP o TCP según la selección de transporte del dispositivo  
- Se reenvían a Plaspy la ubicación, parámetros OBD II, acelerómetro y eventos de sensores BLE para visibilidad y monitoreo  
- Plaspy detecta automáticamente el protocolo del dispositivo durante la comunicación inicial, por lo que no se requiere seleccionar protocolo adicional en Plaspy  
- Una vez que informe correctamente, los dispositivos aparecen en Plaspy para visibilidad de la flota, alertas de eventos e inspección de telemetría

## Flujo común de configuración

1. Acceda al método oficial de configuración Teltonika que vaya a usar, como Teltonika Configurator, la app FMBT o los comandos SMS.  
2. Ingrese el endpoint del servidor Plaspy como d.plaspy.com o, si es necesario, la IP del servidor 54.85.159.138.  
3. Configure el puerto del dispositivo en 8888 (Plaspy usa este mismo puerto para todos los dispositivos compatibles).  
4. Elija el tipo de transporte UDP o TCP si el rastreador requiere selección explícita.  
5. Ingrese las credenciales APN (APN, nombre de usuario APN, contraseña APN) que solicite su operador móvil.  
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware lo requieren.  
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador es visible en la plataforma y que llega la telemetría.

## Comandos de configuración de ejemplo

El FMC001 se puede configurar mediante un SMS estilo Teltonika o un comando por lotes para establecer el APN y los parámetros del servidor. Conserve los marcadores de posición y reemplácelos por los valores de su operador.

- Comando de ejemplo para establecer credenciales APN y el endpoint y puerto de Plaspy

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- Explicación de los marcadores y parámetros
  - [apn] = el nombre del APN de su operador móvil  
  - [apnu] = el usuario APN si su operador lo requiere (deje en blanco si no se usa)  
  - [apnp] = la contraseña APN si su operador lo requiere (deje en blanco si no se usa)  
  - 2004 configura el dominio del servidor a d.plaspy.com que apunta a Plaspy  
  - 2005 configura el puerto a 8888 usado por Plaspy para todos los dispositivos  
  - 2006:1 en este ejemplo es un parámetro de dispositivo que aparece en conjuntos de comandos Teltonika; siga la documentación de Teltonika o su configurador para el significado exacto según su firmware

Si aplica el comando por SMS, envíelo desde un número autorizado según la configuración de seguridad del dispositivo. Si utiliza Teltonika Configurator o FMBT, los mismos valores deben introducirse en los campos de servidor y APN allí.

## Notas de configuración

- Diferentes versiones de firmware y revisiones de hardware del FMC001 pueden exponer IDs de parámetros o pantallas de configuración ligeramente distintas; siempre consulte el Teltonika Configurator y las notas de la versión para su firmware.  
- Elija UDP o TCP según sus necesidades operativas; ambos transportes están soportados por Plaspy en el puerto 8888.  
- El ejemplo proporcionado usa el dominio d.plaspy.com; puede usar la IP 54.85.159.138 si su entorno lo requiere, aunque el uso del dominio se recomienda para facilitar cambios futuros de servidor.  
- La configuración por comandos SMS es una opción común en dispositivos Teltonika; asegúrese de tener habilitado el control por SMS y de enviar comandos desde un número autorizado.  
- Plaspy detecta automáticamente el protocolo del rastreador cuando este se conecta a d.plaspy.com en el puerto 8888, por lo que no es necesario seleccionar protocolo adicional en la plataforma.

## Por qué usar Plaspy con esta configuración

Usar el FMC001 con Plaspy ofrece a las flotas y a los administradores de vehículos una vía sencilla para recopilar en una sola plataforma datos GPS, OBD II, acelerómetro y sensores Bluetooth. Los ajustes de servidor compartidos y la detección automática de protocolo reducen la carga de configuración en la plataforma, permitiendo consolidar rápidamente dispositivos de diferentes modelos.

Learn more about Plaspy at https://www.plaspy.com and refer to the manufacturer for the latest device specific details at https://www.teltonika-gps.com/ to verify firmware behavior and exact configuration steps.
