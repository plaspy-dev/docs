---
slug: /haicom/hi_604/configuration
id: hi_604-configuration
sidebar_label: Configuration
title: Haicom - HI-604 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Haicom HI-604 y conectarlo a Plaspy con ajustes de servidor compartido y comandos SMS de ejemplo
keywords:
  - Configuración Haicom HI-604
  - Instalación Haicom HI-604
  - Configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración de servidor HI-604
  - Configuración de seguimiento de vehículos
  - Configuración de rastreador GPRS
  - Comandos SMS de configuración
  - Conexión del rastreador a Plaspy
  - Plataforma de rastreo de activos
---

# Haicom - Configuración del HI-604

Esta página describe el contexto público de configuración para usar el rastreador Haicom HI-604 con Plaspy. Se centra en los ajustes prácticos del servidor, el flujo de trabajo y ejemplos de comandos SMS que se usan habitualmente para apuntar el dispositivo a Plaspy y permitir que reporte ubicación y estado a la plataforma.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión del firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El HI-604 admite métodos de configuración por GPRS y por SMS; los ejemplos aquí muestran los comandos SMS públicos que suelen emplearse para configurar el reporte por GPRS.

## Resumen de la configuración

El proceso de configuración prepara el HI-604 para comunicarse con Plaspy y así poder ver actualizaciones de posición en tiempo real y eventos del dispositivo en la plataforma. Normalmente incluye establecer el APN del operador, configurar el servidor y puerto de reporte GPRS, y seleccionar el modo de transporte que usará el equipo para enviar datos.

- Configure el APN del operador para que el equipo pueda abrir una sesión GPRS para transmisión de datos.
- Establezca la dirección y el puerto del servidor GPRS para apuntar el HI-604 a Plaspy.
- Seleccione UDP o TCP si el equipo requiere una elección explícita del canal de transporte.
- Defina los intervalos de reporte para que el rastreador envíe actualizaciones con la frecuencia deseada.
- Valide la conectividad y confirme que el dispositivo aparece en Plaspy tras la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Nota: Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Una unidad Haicom HI-604 alimentada y operativa con una SIM activa que permita GPRS.
- Acceso al método de configuración que soporte la unidad, como comandos SMS o la herramienta del fabricante.
- El APN del operador y, si aplica, usuario y contraseña del APN para la tarjeta SIM.
- Conocimientos básicos para enviar comandos SMS desde un número que el dispositivo acepte.
- Posibilidad de reiniciar o apagar y encender el dispositivo después de aplicar la configuración.
- Acceso a las credenciales de la cuenta Plaspy o acceso a la plataforma para confirmar que el rastreador es visible tras la configuración.

## Cómo se conecta este tracker a Plaspy

Cuando está configurado para reporte por GPRS, el HI-604 envía sus mensajes de ubicación y estado al endpoint y puerto compartidos de Plaspy. Plaspy recibe el flujo de datos entrante, detecta automáticamente el protocolo del rastreador y convierte los mensajes del dispositivo para mostrarlos en la plataforma en tiempo real.

- El rastreador abre una sesión de datos GPRS usando el APN y credenciales configuradas.
- Los paquetes GPRS del dispositivo se envían al servidor Plaspy en d.plaspy.com o 54.85.159.138.
- Los datos se transmiten usando el puerto 8888 y pueden emplear UDP o TCP según la configuración del dispositivo.
- Plaspy identifica automáticamente el protocolo del rastreador y comienza a procesar los mensajes sin necesidad de seleccionar manualmente el protocolo en la plataforma.
- Una vez establecido el reporte, el rastreador aparece en el mapa de Plaspy y en las listas de eventos para monitoreo y alertas.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Haicom, como la interfaz de comandos SMS o la herramienta de configuración proporcionada por el fabricante.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy usado por todos los dispositivos.
4. Seleccione UDP o TCP en el equipo si requiere una selección de transporte para el reporte.
5. Aplique o guarde la configuración en el dispositivo y envíe los comandos SMS necesarios para confirmar los ajustes.
6. Reinicie o realice un ciclo de energía del rastreador si el firmware del equipo lo requiere para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la lista de dispositivos y el mapa en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El HI-604 se configura comúnmente enviando comandos SMS desde un teléfono al dispositivo. Los siguientes comandos SMS públicos se muestran como ejemplos. Estos comandos usan la contraseña por defecto 0000. Conserve y reemplace los marcadores donde corresponda.

- Configurar el APN del operador
  - Comando (enviar por SMS)
  ```text
  #0000,200,{{apn}},{{apnu}},{{apnp}}
  ```
  - Explicación: reemplace {{apn}} con el APN de su operador móvil. {{apnu}} es el usuario del APN si se requiere y {{apnp}} es la contraseña del APN si se requiere. Si no hay usuario o contraseña deje esos marcadores vacíos o según lo requiera la sintaxis del comando del equipo.

- Establecer el servidor GPRS a Plaspy
  - Comando (enviar por SMS)
  ```text
  #0000,210,54.85.159.138,8888,8888,8888,0
  ```
  - Explicación: este comando establece el servidor de reporte GPRS en la IP del servidor Plaspy 54.85.159.138 y configura el puerto 8888. El formato del comando según el fabricante incluye campos adicionales de puerto como se muestra.

- Establecer el intervalo de reporte a 60 segundos
  - Comando (enviar por SMS)
  ```text
  #0000,250,0,60,0,0,0,0,0,0
  ```
  - Explicación: este ejemplo fija el intervalo de actualización del dispositivo en 60 segundos como una configuración de muestra para reporte frecuente.

Notas sobre estos comandos de ejemplo:
- La contraseña por defecto del dispositivo mostrada en los ejemplos es 0000. Use esa contraseña solo si el rastreador está en valores de fábrica o según lo documente Haicom.
- Estos comandos se envían como mensajes SMS al HI-604 y son ejemplos públicos tomados de la documentación del fabricante.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de los comandos o las funciones disponibles. Verifique siempre los comandos con las notas de firmware del dispositivo.
- El HI-604 admite configuración por SMS según la documentación pública; esto es una opción práctica cuando no están disponibles las herramientas de configuración remota.
- Seleccione UDP o TCP en función de las necesidades de la instalación y del comportamiento de la red; Plaspy acepta cualquiera de los dos y detectará automáticamente el protocolo.
- Dado que Plaspy usa el mismo puerto 8888 para todos los dispositivos, asegúrese de que el puerto configurado en el equipo coincida con 8888 para simplificar la integración.
- Si los comandos incluyen marcadores como {{apn}}, consérvelos y sustituya únicamente los valores requeridos por su operador móvil.

## Por qué usar Plaspy con esta configuración

Usar el Haicom HI-604 con Plaspy ofrece una forma sencilla de convertir el flujo de datos del rastreador en visibilidad operativa. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolos reducen los pasos necesarios en la plataforma, permitiendo que los instaladores se concentren en configurar el rastreador en el equipo y en validar la conectividad.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. Device specific configuration methods, firmware behavior, and manufacturer details can change over time so verify the latest setup information on the Haicom website at http://www.haicom.com.tw/ before deploying devices in production.
