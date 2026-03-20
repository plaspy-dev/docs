---
slug: /queclink/gb100mg/configuration
id: gb100mg-configuration
sidebar_label: Configuration
title: QuecLink - GB100MG Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del QuecLink GB100MG con ajustes de servidor Plaspy y ejemplos de comandos SMS
keywords:
  - Configuración QuecLink GB100MG
  - Instalación QuecLink GB100MG
  - Configuración servidor GB100MG
  - Integración GB100MG Plaspy
  - Comandos SMS GB100MG
  - Configuración rastreador GPS GB100MG
  - Configuración telemetría GB100MG
  - Ajustes TCP UDP GB100MG
  - Telemática de flotas GB100MG
  - Seguro basado en uso GB100MG
---

# QuecLink - GB100MG: Configuración

Esta página ofrece contexto público de configuración para usar el rastreador QuecLink GB100MG con Plaspy. Resume los ajustes prácticos del servidor, los prerequisitos habituales y los comandos SMS de configuración que se usan públicamente para apuntar el dispositivo a Plaspy para el reporte de ubicación y telemetría. Utilice esta guía junto con la documentación oficial de QuecLink y las herramientas de su proveedor al realizar una instalación.

Plaspy recibe datos de los rastreadores compatibles usando ajustes de servidor compartidos y detección automática de protocolo entre dispositivos. Los pasos exactos en el lado del fabricante para el GB100MG pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GB100MG admite configuración por SMS en campo; los ejemplos de SMS a continuación emplean la contraseña predeterminada del dispositivo queclink, como se muestra en ejemplos públicos de configuración de QuecLink.

## Resumen de la configuración

Este proceso prepara un GB100MG para comunicarse con la nube de Plaspy para que la ubicación, la telemetría de choques y los eventos se entreguen de forma fiable. El objetivo es configurar los parámetros de red del dispositivo, el intervalo de reporte y el endpoint del servidor para que el rastreador aparezca y reporte correctamente en Plaspy.

- Apuntar el rastreador al endpoint y puerto del servidor Plaspy para que los datos fluyan hacia la plataforma.
- Confirmar la selección de transporte (UDP o TCP) y asegurarse de que el dispositivo use el puerto compartido que emplea Plaspy.
- Aplicar ajustes básicos del dispositivo como zona horaria, APN e intervalo de reporte según las necesidades de su despliegue.
- Validar la conectividad desde el dispositivo hacia Plaspy y confirmar que los mensajes son visibles en la plataforma Plaspy.
- Usar SMS o la herramienta de configuración del fabricante, según lo permita el dispositivo, para realizar cambios en campo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888 — Plaspy usa el mismo puerto para todos los dispositivos soportados  
- Transporte soportado UDP o TCP — el GB100MG puede configurarse para usar cualquiera de los dos en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la instalación

- Una SIM celular válida y activa configurada para datos y SMS según lo requiera su operador y despliegue.
- Acceso al dispositivo para poder enviar comandos SMS o usar las herramientas de configuración de QuecLink que utilice su instalador.
- El dispositivo debe estar alimentado y en un estado listo para aceptar comandos de configuración.
- La contraseña predeterminada del dispositivo puede ser necesaria para enviar comandos SMS de configuración; en los ejemplos públicos se muestra queclink.
- APN y credenciales del operador para la SIM si el rastreador utilizará datos por paquete para el reporte.
- Confirmación de la versión de firmware y la documentación del fabricante para asegurarse de que los comandos son compatibles con ese firmware.

## Cómo este rastreador se conecta a Plaspy

El GB100MG reporta posición, eventos y telemetría al endpoint de Plaspy usando conectividad celular. Cuando se configura con el servidor y puerto de Plaspy, los mensajes del dispositivo se enrutan a Plaspy y se decodifican mediante detección automática de protocolo para que los datos aparezcan en los paneles y reglas de la plataforma.

- El dispositivo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138 en el puerto 8888.
- El transporte se selecciona como UDP o TCP según la preferencia del instalador y las condiciones de la red; Plaspy acepta ambos en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para su visualización y procesamiento por reglas.
- El rastreador envía reportes programados y mensajes de evento para que Plaspy muestre ubicación en tiempo real y alertas de eventos.
- Se puede usar SMS para configurar el dispositivo cuando no hay datos por paquete disponibles, utilizando los comandos SMS de ejemplo más abajo.

## Flujo común de configuración

1. Acceda al método oficial de configuración de QuecLink para el GB100MG, ya sea comandos SMS o la herramienta de configuración del proveedor recomendada por su instalador.  
2. Introduzca el dominio del servidor Plaspy d.plaspy.com o la IP del servidor 54.85.159.138 en los ajustes de servidor del dispositivo.  
3. Configure el puerto del dispositivo en 8888 (todos los dispositivos en Plaspy usan el mismo puerto).  
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para las comunicaciones con el servidor.  
5. Configure el APN y otros ajustes del operador para que el dispositivo pueda establecer datos por paquete, o confirme la capacidad de SMS para la configuración remota.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.  
7. Valide que el dispositivo reporte a Plaspy y que los mensajes sean visibles en la plataforma; confirme la zona horaria correcta, el intervalo de reporte y las notificaciones de eventos.

## Ejemplos de comandos de configuración

El GB100MG puede configurarse por SMS usando comandos de estilo AT públicos. Los comandos de ejemplo que siguen respetan el formato mostrado en ejemplos públicos. Estos comandos usan la contraseña del dispositivo queclink como contraseña predeterminada en los ejemplos. Conserve los marcadores de posición al enviar los comandos.

- Paso inicial opcional para restaurar los valores de fábrica (usar solo cuando sea necesario en la puesta en marcha):
```text
AT+GTRTO=queclink,4,,,,,,FFFF$
```

- Ajustar la zona horaria a UTC 0:
```text
AT+GTTMA=queclink,+,0,0,0,,,,,,FFFF$
```

- Configurar el APN del operador (reemplace los marcadores de posición con los valores de su operador):
```text
AT+GTBSI=queclink,{{apn}},{{apnu}},{{apnp}},,,,,FFFF$
```
Nota: {{apn}} es el nombre del punto de acceso, {{apnu}} es el usuario del APN si se requiere, y {{apnp}} es la contraseña del APN si se requiere. Mantenga los marcadores de posición intactos y sustitúyalos por las credenciales de su operador.

- Configurar el servidor GPRS y los endpoints de Plaspy. Este ejemplo apunta el dispositivo a Plaspy por dominio e IP en el puerto 8888:
```text
AT+GTSRI=queclink,4,,1,d.plaspy.com,8888,54.85.159.138,8888,,0,0,0,,,,FFFF$
```
Este comando incluye tanto el dominio como la IP para redundancia y usa el puerto 8888, el puerto compartido que Plaspy utiliza para todos los dispositivos.

- Establecer el intervalo de reporte a 60 segundos:
```text
AT+GTFRI=queclink,1,1,0,0,,,60,60,60,60,7F,40,0,,,FFFF$
```

- Activar notificación del botón SOS en la entrada 2:
```text
AT+GTSOS=queclink,2,2,,0,0,0,0,0,0,,,FFFF$
```

Envíe cada comando SMS al dispositivo desde un número autorizado o a través del canal de gestión configurado. Confirme la aplicación exitosa verificando las respuestas del dispositivo y la visibilidad en la plataforma Plaspy.

## Notas de configuración

- La configuración por SMS es compatible y se usa habitualmente para ajustes en campo; emplee la contraseña predeterminada queclink a menos que su dispositivo tenga otra configurada.
- Las versiones de firmware y las revisiones de hardware pueden cambiar los comandos disponibles y el formato de parámetros; siempre verifique la sintaxis de los comandos según la documentación del firmware del dispositivo.
- Elija UDP o TCP según la fiabilidad de la red y los requisitos de entrega; ambos transportes son aceptados por Plaspy en el puerto 8888.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos y realiza detección automática de protocolo, los elementos importantes son el endpoint del servidor correcto, el puerto y la selección de transporte donde sea necesario.
- Mantenga una copia de la configuración original o registre las respuestas SMS exitosas para poder revertir o auditar los cambios si es necesario.

## Por qué usar Plaspy con esta configuración

Usar el QuecLink GB100MG con Plaspy ofrece una vía práctica para capturar ubicación en tiempo real, alertas de eventos y telemetría de alta resolución para operaciones de flota y telemática para seguros. Al apuntar el dispositivo a Plaspy con los ajustes de servidor compartidos, flotas y aseguradoras pueden aprovechar paneles en vivo, alertas y reglas para monitorear vehículos, detectar incidentes y analizar el comportamiento del conductor.

Para conocer más sobre Plaspy y las integraciones de dispositivos compatibles visite https://www.plaspy.com. Los comandos de configuración específicos del dispositivo, el comportamiento del firmware y las recomendaciones del fabricante pueden cambiar con el tiempo, por lo que confirme los detalles de instalación y la sintaxis de los comandos más recientes con la documentación de QuecLink en https://www.queclink.com/.
