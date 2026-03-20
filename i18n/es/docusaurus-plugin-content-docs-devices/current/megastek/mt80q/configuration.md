---
slug: /megastek/mt80q/configuration
id: mt80q-configuration
sidebar_label: Configuration
title: Megastek - MT80Q Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica de configuración pública para el rastreador Megastek MT80Q y su compatibilidad con Plaspy
keywords:
  - Configuración Megastek MT80Q
  - Configuración MT80Q
  - Integración MT80Q Plaspy
  - Configuración servidor MT80Q
  - Configuración rastreador GPS MT80Q
  - Configuración rastreador Plaspy
  - Configuración reloj rastreo personal
  - Configuración rastreador GPRS
  - Configuración rastreador GPS wearable
  - APN y configuración servidor MT80Q
---

# Megastek - Configuración del MT80Q

Esta página describe el contexto público de configuración para usar el reloj rastreador personal Megastek MT80Q con Plaspy. Explica los ajustes de servidor compartidos que requiere Plaspy, los pasos típicos de preparación para un rastreador GPRS de mano o wearable, y los comandos SMS públicos que suelen emplearse para apuntar un MT80Q a un servidor de rastreo remoto.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El MT80Q admite configuración por SMS y reporte vía GPRS; a continuación encontrará los ajustes de servidor de Plaspy, un flujo de trabajo práctico y los comandos SMS que aparecen en el ejemplo público de configuración del dispositivo.

## Resumen de configuración

El proceso de configuración prepara el MT80Q para comunicarse con Plaspy a través de la conexión GPRS del dispositivo o por SMS para la puesta en marcha. En la práctica, esto implica establecer el APN del equipo, configurar el endpoint y puerto del servidor, activar el reporte por GPRS y verificar que el equipo envíe mensajes de posición y evento que Plaspy pueda procesar.

- Configure el APN y credenciales del MT80Q para que se conecte a la red de datos móviles.
- Indique el endpoint del servidor hacia Plaspy para que el dispositivo reporte posiciones y eventos a la plataforma.
- Active el modo GPRS y establezca un intervalo de subida adecuado para equilibrar inmediatez y duración de batería.
- Valide la conectividad y visualice el equipo en Plaspy para confirmar reportes y alertas.
- Use la configuración por SMS cuando el dispositivo lo soporte, especialmente para la puesta en marcha o cuando el acceso en campo sea limitado.

## Ajustes de servidor de Plaspy

- Dominio del servidor d.plaspy.com para configuración basada en DNS cuando el dispositivo acepta nombres de host.
- IP del servidor 54.85.159.138 como endpoint alternativo directo para dispositivos que requieren una dirección IP.
- Puerto 8888 que es el único puerto que Plaspy utiliza para todos los dispositivos soportados.
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar un protocolo más allá de elegir UDP o TCP si el dispositivo requiere seleccionar el transporte.

## Requisitos previos habituales

- Un MT80Q con batería cargada y una SIM funcional que tenga datos GPRS activados y capacidad de envío de SMS para configuración.
- El IMEI del dispositivo y la contraseña de administrador si la configuración por SMS la requiere (el ejemplo público usa la contraseña por defecto 000000).
- Acceso a la lista de comandos SMS del fabricante o a la herramienta oficial de configuración de Megastek para enviar los comandos correctos.
- Cobertura básica en una red GSM GPRS para que el rastreador pueda conectarse y reportar a Plaspy.
- Un método para recibir confirmaciones del dispositivo, como respuestas SMS o la observación de reportes de posición en Plaspy.

## Cómo se conecta este rastreador a Plaspy

El MT80Q transmite datos de ubicación y eventos al endpoint del servidor Plaspy a través de la conexión GPRS una vez que se configuran el APN y los ajustes de servidor. Plaspy procesa esos mensajes y los presenta como actualizaciones de ubicación en tiempo real, recorridos históricos y notificaciones de eventos.

- El dispositivo se configura para reportar al endpoint y puerto compartidos de Plaspy.
- Posición y telemetría se envían por subidas GPRS a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los mensajes entrantes se analizan sin necesidad de seleccionar un protocolo adicional en la plataforma.
- Informes de eventos como SOS, alarma por caída y alertas por manipulación se reenvían a Plaspy para notificación inmediata.
- Plaspy almacena los registros de recorrido históricos del MT80Q para recuperación de rutas y generación de reportes.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Megastek, como los comandos SMS del equipo o cualquier herramienta o documento proporcionado por el proveedor.
2. Ingrese el servidor Plaspy como d.plaspy.com o 54.85.159.138 en el campo de configuración de servidor del dispositivo, según si el equipo acepta un nombre de host o requiere una IP.
3. Configure el puerto del dispositivo en 8888, que es el puerto que Plaspy usa para todos los equipos.
4. Elija UDP o TCP para el transporte si el dispositivo requiere seleccionar el tipo de transporte.
5. Configure el APN del dispositivo y las credenciales APN necesarias para la SIM usando el método del fabricante.
6. Aplique o guarde la configuración y reinicie el MT80Q si el dispositivo o las instrucciones del proveedor lo requieren.
7. Valide que el equipo reporte a Plaspy comprobando mensajes de conexión inicial, actualizaciones de posición o alertas de eventos en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El ejemplo público de configuración del MT80Q proporciona comandos SMS como un método simple para configurar el rastreador. Estos comandos usan la contraseña de administrador del dispositivo que en el ejemplo es la contraseña de fábrica 000000. Reemplace los marcadores de posición según se indica antes de enviar los SMS al número del dispositivo.

1) Establecer el ID del dispositivo
- Propósito: Registrar o fijar el identificador del equipo en el rastreador.
- Reemplace el marcador IMEI con los últimos 15 dígitos del IMEI de su dispositivo.
```
M000000,22,{{IMEI_LAST_15_DIGITS}}
```
(El formulario original de la plantilla en el ejemplo público se mostró como una expresión web. Reemplace con los dígitos reales del IMEI para uso por SMS.)

2) Establecer el APN del operador
- Propósito: Configurar el APN del operador móvil y el usuario y contraseña opcionales.
- Reemplace {{apn}} {{apnu}} y {{apnp}} con el APN de su SIM y las credenciales de acceso si son necesarias.
```
M000000,23,{{apn}}
```
o si se requieren usuario y contraseña:
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

3) Establecer el intervalo de actualización a 60 segundos
- Propósito: Configurar la frecuencia con la que el dispositivo sube posiciones al servidor.
```
M000000,25,60
```

4) Configurar el servidor GPRS hacia Plaspy según el ejemplo público
- Propósito: Apuntar el rastreador a Plaspy usando la IP y puerto proporcionados. Este ejemplo muestra la ranura de servidor y la IP de Plaspy con puerto.
```
M000000,24,56 54.85.159.138,8888
```
Nota: Si el dispositivo soporta nombres de host, puede usar d.plaspy.com en lugar de la IP al configurar el servidor por nombre de host.

5) Activar el modo GPRS
- Propósito: Activar el modo de reporte por datos GPRS para que el dispositivo envíe datos de posición.
```
M000000,21,2
```

Notas importantes sobre los marcadores de posición y la contraseña:
- {{apn}} es el APN de su operador móvil. {{apnu}} y {{apnp}} son los campos opcionales de usuario y contraseña del APN cuando su operador los requiere.
- {{IMEI_LAST_15_DIGITS}} significa los últimos 15 dígitos del IMEI del dispositivo; sustitúyalos por el IMEI real para el comando.
- El ejemplo público utiliza la contraseña de administrador por defecto 000000 en el prefijo del comando SMS. Si su contraseña fue modificada, use la contraseña actual.

## Notas de configuración

- La configuración por SMS está soportada según el ejemplo público del MT80Q y resulta útil cuando el acceso en campo es más sencillo que usar un cable o una herramienta de configuración.
- Las versiones de firmware y las herramientas del proveedor pueden cambiar el formato de los comandos o los parámetros disponibles; confirme siempre la sintaxis exacta del SMS con la documentación de Megastek para su versión de firmware.
- Elija UDP o TCP según el soporte del dispositivo y las consideraciones de la red; recuerde que Plaspy acepta ambos transportes y detecta automáticamente el protocolo.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, por lo que el puerto del servidor en el rastreador debe establecerse en 8888 para alcanzar la plataforma.
- Si el dispositivo soporta nombres de host, d.plaspy.com puede usarse en lugar de la IP 54.85.159.138 para permitir resolución DNS y facilitar migraciones de servidor futuras sin cambiar las configuraciones del equipo.

## Por qué usar Plaspy con esta configuración

Usar el Megastek MT80Q con Plaspy ofrece visibilidad directa para seguridad personal y monitoreo de activos. Con reportes GPRS y detección automática del APN, el MT80Q puede ponerse en línea rápidamente y empezar a enviar ubicación, alertas SOS, eventos de detección de caídas y recorridos históricos a Plaspy para monitoreo, alertas e informes.

Para obtener más información sobre Plaspy y cómo procesa reportes de rastreadores compatibles como el MT80Q visite https://www.plaspy.com. Para métodos de configuración específicos más actuales, comportamiento de firmware y detalles del fabricante, verifique la información más reciente en el sitio de Megastek https://www.megastek.com/.
