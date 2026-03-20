---
slug: /tk_star/tk910/configuration
id: tk910-configuration
sidebar_label: Configuration
title: TK-Star - TK910 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TK-Star TK910 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de configuración
keywords:
  - Configuración TK Star TK910
  - Configuración TK910 Plaspy
  - Configuración rastreador GPS TK Star
  - Configuración servidor TK910
  - Configuración software rastreo TK910
  - Configuración plataforma GPS TK910
  - Configuración rastreador Plaspy
  - Configuración seguimiento vehicular TK910
  - Comandos SMS rastreador GPS
  - Seguimiento de flotas TK910
---

# TK-Star - Configuración del TK910

Esta página describe el contexto público de configuración necesario para conectar un rastreador TK-Star TK910 a la plataforma Plaspy. Resume los ajustes del servidor de Plaspy que debe aplicar, enumera los requisitos habituales y muestra los comandos SMS de uso público que muchos equipos TK910 aceptan para preparar el dispositivo para el envío de datos por GPRS a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo envía datos al endpoint de Plaspy. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; trate los comandos y el flujo que se muestran aquí como una guía pública práctica y no como instrucciones exhaustivas del fabricante.

## Resumen de la configuración

Este proceso prepara el TK910 para comunicarse con Plaspy vía GPRS, de modo que la ubicación, las alarmas y las rutas históricas queden visibles en la plataforma. Los pasos indicados se basan en secuencias de comandos SMS divulgadas públicamente para el TK910 y en los ajustes compartidos de servidor de Plaspy.

- Configure el equipo para que reporte al servidor de Plaspy d.plaspy.com o a la IP numérica equivalente del servidor Plaspy.
- Verifique que el rastreador tenga conectividad GPRS activa y que el APN del operador esté establecido.
- Ajuste el intervalo de envío y el modo de transporte para que los reportes de ubicación lleguen a Plaspy de forma fiable.
- Valide la comunicación en Plaspy para confirmar que el protocolo fue detectado y que se están recibiendo datos.
- Opcionalmente, realice una restauración de fábrica antes de la primera configuración cuando la instalación lo requiera.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como endpoint principal de Plaspy para el reporte de dispositivos.
- IP del servidor 54.85.159.138 como endpoint numérico usado en algunos comandos de dispositivo.
- Puerto 8888 utilizado por Plaspy para todos los dispositivos soportados.
- Soporte de transporte UDP o TCP según el firmware del rastreador y la opción de configuración.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al servidor usando el puerto compartido.

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional con datos móviles habilitados y saldo o cuota suficiente para el uso de GPRS.
- Acceso al método de instalación admitido por el TK910, como configuración por SMS o la herramienta oficial de configuración.
- Conocimiento del APN del operador y, si es necesario, del usuario y la contraseña del APN para la SIM.
- Alimentación y una instalación vehicular estable para evitar interrupciones durante la configuración.
- Acceso a la contraseña por defecto del dispositivo cuando sea necesaria para comandos SMS; en ejemplos públicos del TK910 la contraseña por defecto es 123456.

## Cómo se conecta este rastreador a Plaspy

El TK910 se configura para enviar datos de ubicación y eventos por GPRS al endpoint y puerto del servidor Plaspy, de modo que el backend de Plaspy pueda ingerir y procesar la información para monitorización en tiempo real y reproducción histórica.

- El equipo se ajusta con la dirección del servidor Plaspy ya sea como el dominio d.plaspy.com o como la IP numérica 54.85.159.138.
- Los reportes se envían a Plaspy en el puerto 8888 para que la plataforma reciba telemetría y mensajes de eventos.
- El rastreador usa UDP o TCP según la configuración del dispositivo; Plaspy soporta ambos.
- Plaspy detecta automáticamente el protocolo y analiza los mensajes entrantes del rastreador, por lo que no es necesario seleccionar un protocolo por dispositivo en la plataforma.
- Una vez que comienzan los envíos, las ubicaciones y las alarmas se muestran en el panel de Plaspy para visibilidad, alertas y almacenamiento de recorridos históricos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración del fabricante o al software del TK910, o prepárese para enviar comandos SMS desde un teléfono autorizado para la configuración del dispositivo.
2. Introduzca d.plaspy.com o 54.85.159.138 como dirección del servidor en la configuración del equipo o usando el comando SMS de servidor.
3. Configure el puerto en 8888 en la configuración del rastreador.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el modo de transporte.
5. Aplique o guarde la configuración en el equipo y espere la confirmación de que los ajustes fueron aceptados.
6. Reinicie el dispositivo si lo requiere el equipo o las instrucciones del instalador.
7. Valide que el dispositivo reporte a Plaspy y que la plataforma detecte el protocolo del rastreador y comience a mostrar datos de ubicación y eventos.

## Comandos de configuración de ejemplo

El TK910 suele aceptar comandos de configuración vía SMS. Los comandos de ejemplo que siguen están en el mismo orden que muchas guías públicas del TK910. La contraseña por defecto mostrada en la documentación pública es 123456. Reemplace los marcadores y valores donde se indique antes de enviar.

- Comando opcional de restauración inicial de fábrica
```text
begin123456
```
- Establecer el APN del operador usando su APN
```text
apn123456 [apn]
```
- Establecer el usuario APN si su operador lo solicita
```text
apnuser123456 [apnu]
```
- Establecer la contraseña del APN si su operador la solicita
```text
apnpasswd123456 [apnp]
```
- Establecer el servidor GPRS a la IP y puerto de Plaspy
```text
adminip123456 54.85.159.138 8888
```
Nota: el ejemplo público usa la IP del servidor Plaspy. Algunos dispositivos aceptan un nombre de dominio en lugar de una IP. Si el firmware del rastreador admite dominio, puede usar d.plaspy.com en lugar de la IP numérica cuando sea aplicable.
- Establecer el intervalo de subida de ubicación a 60 segundos
```text
upload123456 60
```
- Cambiar el dispositivo al modo de reporte por GPRS
```text
gprs123456
```

Explicación de los marcadores
- [apn] representa la cadena APN del operador necesaria para GPRS.
- [apnu] representa el usuario del APN cuando lo requiere el operador móvil.
- [apnp] representa la contraseña del APN cuando la requiere el operador móvil.

Si su instalación requiere un intervalo de subida distinto, cambie el valor numérico en el comando upload en consecuencia. El comando de restauración begin123456 suele ser opcional y solo debe emplearse cuando se realiza un reseteo de fábrica como parte de la configuración inicial.

## Notas de configuración

- Las diferencias de firmware pueden requerir sintaxis de comando ligeramente distinta o soportar comandos adicionales. Consulte la documentación de TK-Star para orientación específica por firmware.
- La configuración por SMS es un método público común para el TK910, pero algunos instaladores usan herramientas del fabricante o interfaces de configuración por cable cuando están disponibles.
- Elija UDP o TCP según el soporte del equipo y la fiabilidad de la red. Plaspy acepta ambos y detecta automáticamente el protocolo del rastreador en el puerto 8888.
- La plataforma Plaspy usa el mismo puerto para todos los dispositivos, por lo que aplicar el puerto 8888 es necesario para la compatibilidad con la ingesta de Plaspy.
- Si usa el comando adminip con una IP numérica, asegúrese de que la IP sea 54.85.159.138 o use d.plaspy.com cuando el dispositivo lo soporte.

## Por qué usar Plaspy con esta configuración

Usar el TK910 con Plaspy ofrece visibilidad consolidada de ubicaciones, alarmas y rutas históricas que los gestores de flotas y propietarios de vehículos necesitan para la monitorización en tiempo real y la respuesta ante incidentes. Los ajustes compartidos del servidor Plaspy y la detección automática de protocolo simplifican la incorporación de múltiples equipos al reducir la configuración por dispositivo en la plataforma.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration details and the latest firmware guidance with the manufacturer at https://www.tk-star.com/. Manufacturer specifications and setup methods can change over time so confirm the current instructions on the official TK Star site.
