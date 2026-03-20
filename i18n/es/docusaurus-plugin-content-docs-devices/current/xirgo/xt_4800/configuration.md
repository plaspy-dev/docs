---
slug: /xirgo/xt_4800/configuration
id: xt_4800-configuration
sidebar_label: Configuration
title: Xirgo - XT-4800 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Xirgo XT-4800 para conectar a Plaspy con ajustes de servidor, comandos SMS y pasos de instalación
keywords:
  - Configuración Xirgo XT 4800
  - Configuración XT 4800 Plaspy
  - Configuración servidor rastreador Xirgo
  - Configuración rastreador GPS XT 4800
  - Guía configuración servidor Plaspy
  - Configuración rastreador activos XT 4800
  - Configuración SMS XT 4800
  - Configuración plataforma rastreo vehicular
  - Configuración rastreador con aprovechamiento energético
  - Guía de conectividad XT 4800
---

# Xirgo - Configuración XT-4800

Esta página reúne la información pública de configuración para usar el rastreador Xirgo XT-4800 con la plataforma Plaspy. Incluye los ajustes de servidor de Plaspy que debe aplicar en el equipo, pasos prácticos de instalación y ejemplos de comandos SMS de uso público para este modelo.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del vendedor. El XT-4800 permite configuración por SMS y GPRS; los ejemplos de SMS a continuación muestran una secuencia de comandos de fabricante comúnmente utilizada para registrar el dispositivo en Plaspy.

## Resumen de la configuración

El objetivo de esta configuración es preparar el XT-4800 para que envíe con fiabilidad datos de ubicación y estado a la plataforma Plaspy. Esto incluye configurar el APN del operador (cuando sea necesario), apuntar el dispositivo al endpoint de servidor de Plaspy, seleccionar el tipo de transporte si es requerido y validar la conectividad en el sistema Plaspy.

- Configure el APN y los parámetros GPRS del equipo para que el rastreador pueda acceder a redes de datos móviles.
- Establezca el servidor GPRS del equipo apuntando a Plaspy para que la telemetría llegue al endpoint y puerto correctos.
- Seleccione el transporte adecuado (UDP o TCP) si la configuración del dispositivo exige una selección manual.
- Guarde y aplique los ajustes, luego reinicie o reinitialice el dispositivo si el firmware lo requiere.
- Verifique que el equipo aparezca y reporte correctamente en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son el endpoint público de Plaspy y el puerto compartido utilizado por todos los dispositivos en la plataforma. Use el dominio o la IP según lo permita el método de configuración de su dispositivo.

## Requisitos típicos antes de la instalación

- Un XT-4800 con alimentación y accesible que pueda recibir SMS o ser configurado mediante la herramienta oficial del fabricante.
- Una tarjeta SIM activa con plan de datos y un APN correcto configurado para conectividad GPRS.
- Acceso por SMS al número del dispositivo cuando utilice comandos SMS para la configuración.
- Acceso a las instrucciones o al software de configuración del fabricante para la versión de firmware de su equipo.
- Un método para observar el estado del dispositivo (LED, registros o SMS de respuesta del fabricante) y confirmar que la configuración se aplicó.

## Cómo se conecta este rastreador a Plaspy

El XT-4800 se configura para reportar ubicación y estado del equipo al endpoint y puerto compartidos de Plaspy. Una vez que el dispositivo apunte al servidor Plaspy y tenga datos móviles operativos, Plaspy detectará y gestionará automáticamente el protocolo del dispositivo, por lo que no es necesario seleccionar manualmente un manejador de protocolo en la plataforma.

- El rastreador inicia una conexión GPRS usando el APN configurado y luego se conecta a d.plaspy.com o 54.85.159.138.
- Los datos se transmiten al puerto 8888 del servidor Plaspy utilizando UDP o TCP según lo configure el dispositivo.
- Tras la conexión, el dispositivo envía reportes periódicos de ubicación y estado que Plaspy procesa y analiza.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los mensajes del dispositivo se interpretan sin configuración adicional en la plataforma.
- La visibilidad en la plataforma y el reporte de eventos dependen de tener el servidor, puerto y ajustes de red correctos en el dispositivo.

## Flujo de trabajo de configuración habitual

1. Acceda al método de configuración oficial de Xirgo para su modelo XT-4800 y versión de firmware (aplicación del fabricante, interfaz SMS o herramienta de configuración).
2. Ingrese el servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo permita la interfaz del dispositivo.
3. Configure el puerto del servidor en 8888 conforme a los requisitos de Plaspy.
4. Seleccione el tipo de transporte UDP o TCP si el dispositivo exige una elección manual.
5. Configure el APN y las credenciales del operador si es necesario para que el rastreador establezca una sesión de datos GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si las instrucciones del fabricante especifican un reinicio o reinitialización.
7. Valide que el XT-4800 esté reportando a Plaspy comprobando que el dispositivo aparece y envía datos en la plataforma.

## Ejemplos de comandos de configuración

El XT-4800 puede configurarse mediante mensajes SMS. Los comandos SMS públicos que siguen se ofrecen en el formato de ejemplo del fabricante. Envíe estos textos SMS al número del dispositivo en el orden mostrado.

- Establecer el APN del operador (reemplace los marcadores según corresponda):
```text
+XT:1002,[apnu],[apnp],[apn]
```
Explicación de los marcadores:
- [apn] es el nombre del APN proporcionado por su operador móvil.
- [apnu] es el nombre de usuario del APN cuando el operador lo requiera; use un valor vacío si no es necesario.
- [apnp] es la contraseña del APN cuando el operador lo requiera; use un valor vacío si no es necesario.

- Establecer el servidor GPRS para Plaspy (configura puerto e IP del servidor en el equipo):
```text
+XT:1001,8888,54.85.159.138,4,0,0
```
Notas:
- Este comando fija los parámetros del servidor GPRS para que el dispositivo apunte a Plaspy en el puerto 8888 y la IP 54.85.159.138. Los parámetros restantes son específicos del equipo y forman parte de la cadena pública de comandos del fabricante.
- Mantenga el orden de los comandos al enviarlos por SMS. Si su firmware requiere el dominio en lugar de la IP, utilice la herramienta del fabricante para ingresar d.plaspy.com donde sea compatible.

Si su equipo o firmware utiliza una interfaz de configuración diferente (por ejemplo, una herramienta web o utilidad USB), siga los mismos pasos anteriores usando el mismo dominio o IP del servidor y el puerto 8888, y elija UDP o TCP según corresponda.

## Notas de configuración

- El XT-4800 soporta configuración vía SMS como se mostró anteriormente; verifique el SMS de respuesta del dispositivo o los registros para confirmar que los comandos fueron aceptados.
- Las versiones de firmware y las variantes regionales del equipo pueden aceptar formatos de comandos SMS ligeramente distintos o requerir orden de parámetros diferente. Confirme siempre la sintaxis exacta para su firmware.
- Si debe elegir entre UDP y TCP, seleccione el transporte adecuado para su implementación; Plaspy escucha ambos y detectará el protocolo del rastreador automáticamente.
- Mantenga los marcadores del APN cuando redacte mensajes SMS y reemplácelos por los valores del operador antes de enviar.
- Si el fabricante ofrece una herramienta de configuración, esa herramienta puede presentar los mismos ajustes (dominio o IP del servidor y puerto 8888) en una interfaz gráfica en lugar de vía SMS.

## Por qué usar Plaspy con esta configuración

Configurar el XT-4800 para reportar a Plaspy brinda a las organizaciones una forma sencilla de monitorear activos remotos donde la autonomía de batería y la resistencia ambiental son importantes. Usar los ajustes compartidos de servidor Plaspy y los comandos SMS de ejemplo ayuda a establecer un flujo de datos fiable desde el rastreador hacia la plataforma para seguimiento de ubicación, salud y operación.

Learn more about Plaspy and platform capabilities at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details verify current information on the Xirgo website https://xirgo.com/ which may provide updates or additional commands for your XT-4800.
