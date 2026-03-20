---
slug: /eelink/gpt12_l/configuration
id: gpt12_l-configuration
sidebar_label: Configuration
title: EElink - GPT12‑L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador EElink GPT12 L a Plaspy usando servidor compartido y comandos SMS
keywords:
  - Configuración EElink GPT12 L
  - Configuración GPT12 L
  - GPT12 L Plaspy
  - Configuración rastreador EElink
  - Configuración rastreador GPS
  - Configuración seguimiento vehicular
  - Configuración servidor Plaspy
  - Configuración rastreador de activos
  - Integración plataforma GPS
  - Configuración SMS rastreador
---

# EElink - Configuración GPT12‑L

Esta página recoge la información pública necesaria para usar el rastreador EElink GPT12‑L con Plaspy. Aquí encontrará los ajustes de servidor prácticos y los comandos SMS publicados para este modelo, de modo que pueda apuntar el dispositivo a Plaspy y validar la conectividad. Use esta guía para preparar el rastreador e integrarlo en los paneles y reportes de Plaspy.

Plaspy recibe los mensajes de los dispositivos mediante un endpoint de ingestión compartido y detecta automáticamente los protocolos compatibles. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; considere estos comandos públicos como un punto de partida práctico y confirme los detalles con la documentación de EElink cuando sea necesario.

## Resumen de la configuración

Este proceso prepara el GPT12‑L para enviar posiciones GNSS y mensajes de eventos a Plaspy usando los ajustes estándar de servidor. El objetivo es configurar el APN y los parámetros del servidor, verificar el transporte y confirmar que el dispositivo reporta correctamente a la plataforma.

- Configure el APN del operador para que el rastreador establezca conectividad GPRS o de datos móviles.
- Apunte el dispositivo a los endpoints del servidor Plaspy usando el puerto compartido.
- Seleccione y verifique el transporte (UDP o TCP) si el equipo lo requiere.
- Aplique las configuraciones mediante SMS o la herramienta del fabricante y valide que el dispositivo reporta a Plaspy.
- Confirme el reporte revisando los parámetros del dispositivo y visualizando el rastreador en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de comenzar

- Una unidad GPT12‑L con batería cargada y alimentación básica conectada
- Una SIM celular válida provisionada para datos y capaz de recibir SMS si va a configurar por SMS
- Acceso al flujo de comandos SMS de EElink o a la herramienta oficial de configuración de EElink
- Cobertura de red en la ubicación del dispositivo y los parámetros APN correctos proporcionados por el operador móvil
- Un teléfono o consola capaz de enviar SMS al dispositivo si usa el método SMS
- Acceso a la cuenta o la plataforma Plaspy para confirmar que el dispositivo aparece tras la configuración

## Cómo se conecta este rastreador a Plaspy

El GPT12‑L envía posiciones GNSS, mensajes de eventos y telemetría a Plaspy reportando al endpoint y puerto compartidos. Una vez que el dispositivo apunta a Plaspy, la plataforma ingestará los mensajes y mostrará posiciones en vivo, alertas e historial según el comportamiento de reporte configurado.

- El rastreador debe configurarse para reportar a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Los mensajes pueden enviarse por UDP o TCP según la configuración del equipo y las preferencias de red.
- Plaspy detecta automáticamente el protocolo del rastreador e ingestará mensajes de posición y eventos.
- Los intervalos de reporte y los disparadores de eventos determinan la frecuencia de actualizaciones y la generación de alertas.
- Tras la configuración, Plaspy ofrece monitoreo operativo y rutas históricas para análisis.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de EElink para su modelo, ya sea la app del fabricante, la herramienta web o la interfaz de comandos SMS.
2. Verifique que la SIM esté activa y configure el APN del operador usando el comando APN o la herramienta del fabricante.
3. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Si el dispositivo lo requiere, seleccione UDP o TCP como transporte y guarde la selección.
5. Aplique o guarde la configuración en el rastreador y envíe los comandos de activación necesarios.
6. Reinicie o interrumpa la alimentación del dispositivo si el fabricante lo indica para aplicar los ajustes de red.
7. Valide que el dispositivo reporta a Plaspy comprobando la lista de rastreadores y los datos en vivo en la plataforma Plaspy y usando la comprobación de parámetros PARAM.

## Comandos de configuración de ejemplo

El GPT12‑L admite configuración vía SMS. Los siguientes comandos son los publicados públicamente y se usan comúnmente en el orden indicado. Envíe cada comando como un mensaje SMS separado al número del dispositivo. Considere cualquier comando de reseteo como opcional al configurar inicialmente.

- Reseteo de fábrica opcional (usar sólo si es necesario restaurar valores por defecto)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Configurar el APN del operador
```text
APN,[apn]{{# if apnu or apnp }} ,[apnu],[apnp]{{/ if }}#
```
Nota: [apn] es el Access Point Name de su operador móvil. [apnu] y [apnp] son marcadores opcionales para usuario y contraseña del APN cuando el operador los requiere. Mantenga estos marcadores y reemplácelos con las credenciales de su operador si son necesarias.

- Configurar el servidor GPRS por dominio (forma legible)
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS por dirección IP
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer intervalo de actualización periódica a 60 segundos
```text
TIMER,60#
```

- Comprobar los parámetros actuales
```text
PARAM#
```

Envíe los comandos en el orden mostrado al realizar una configuración inicial. Use el comando SERVER para apuntar el dispositivo a Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138, ambos en el puerto 8888. El dispositivo puede aceptar UDP o TCP en ese mismo puerto según el firmware.

## Notas sobre la configuración

- La configuración por SMS es comúnmente soportada; confirme con EElink si su versión de firmware acepta comandos SMS y si la sintaxis difiere según el firmware.
- Algunos instaladores prefieren usar la herramienta web o la app del fabricante en lugar de SMS; cualquiera de los métodos debe establecer el APN y el servidor Plaspy con los mismos valores.
- Elija UDP o TCP según las recomendaciones de su red y del firmware; Plaspy soporta ambos transportes en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador cuando llegan los mensajes.
- Las revisiones de firmware y las variantes regionales del dispositivo pueden cambiar los comandos o la sintaxis soportada. Verifique los comandos exactos frente a la documentación actual de EElink.

## Por qué usar Plaspy con esta configuración

Configurar el GPT12‑L para reportar a Plaspy ofrece una vía práctica para obtener seguimiento de posiciones en vivo, alertas de eventos y rutas históricas con poco mantenimiento continuo. Los ajustes de servidor compartido y la detección automática de protocolo simplifican despliegues con múltiples equipos, permitiendo a los equipos operativos consolidar la ingestión y la visibilidad en flotas mixtas.

Para más información sobre Plaspy visite https://www.plaspy.com y consulte la documentación más reciente de EElink en https://www.eelink.com.cn/ para confirmar comandos específicos del fabricante y comportamientos de firmware.
