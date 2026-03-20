---
slug: /topten/tk218/configuration
id: tk218-configuration
sidebar_label: Configuration
title: TopTen - TK218 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del TopTen TK218 para reportar a Plaspy con ajustes de servidor y comandos SMS prácticos
keywords:
  - Configuración TopTen TK218
  - Configuración inicial TopTen TK218
  - Configuración TK218 Plaspy
  - Rastreador GPS TopTen TK218
  - Configuración servidor TK218
  - Guía configuración tracker TopTen
  - Configuración SMS TK218
  - Configuración plataforma GPS TK218
  - Rastreo vehicular TK218
  - Configuración rastreador Plaspy
---

# TopTen - Configuración TK218

Esta página documenta el contexto público de configuración para usar el TopTen TK218 con Plaspy. Resume los ajustes de servidor que debe establecer para apuntar el rastreador a Plaspy, explica los comandos SMS públicos disponibles para el TK218 y describe el flujo habitual para registrar y validar el dispositivo en Plaspy. Use esta guía junto con la documentación del fabricante para detalles específicos del equipo.

Plaspy utiliza parámetros de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK218 soporta métodos de configuración por SMS y GPRS y funciona con Plaspy cuando su endpoint de reporte y el APN están configurados con los valores de plataforma que se muestran a continuación.

## Resumen de la configuración

Configurar un TK218 para Plaspy implica preparar el rastreador para comunicarse de forma fiable con el servidor de Plaspy, asegurar que la identidad del dispositivo sea reconocida por la plataforma y validar que la telemetría llegue a su cuenta de Plaspy. El flujo público de configuración para muchos dispositivos TK218 se realiza mediante comandos SMS o la herramienta de configuración del fabricante y utiliza un endpoint y puerto compartidos de Plaspy.

- Configure el APN de red del dispositivo y el servidor GPRS con la dirección o IP del servidor Plaspy para que los reportes lleguen a la plataforma.
- Confirme el identificador del rastreador derivado del IMEI para que Plaspy pueda asociar los datos recibidos con el dispositivo.
- Seleccione UDP o TCP en el dispositivo si es necesario, usando el enfoque de puerto único de Plaspy.
- Valide la conectividad comprobando que el rastreador reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Tenga en cuenta las diferencias de firmware y parámetros del fabricante y consulte la documentación de TopTen cuando sea necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos

## Requisitos típicos antes de la instalación

- Un TK218 encendido y correctamente conectado a la interfaz OBD II del vehículo o a la fuente de alimentación adecuada.
- Una tarjeta SIM funcionando con datos GPRS habilitados y la información de APN correcta.
- Acceso al método de configuración por SMS de TopTen o a la herramienta oficial de configuración del fabricante.
- Conocer el IMEI del dispositivo para poder derivar el identificador del rastreador que usa Plaspy.
- Una forma de recibir y enviar SMS al dispositivo si la configuración se realiza por SMS.
- Tiempo para verificar que el dispositivo reporta al servidor Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El TK218 se configura para reportar al endpoint y puerto compartidos de Plaspy, de modo que Plaspy pueda recibir mensajes de posición y estado del dispositivo. Una vez que el dispositivo apunta al endpoint de Plaspy y el APN es correcto, la plataforma detectará el protocolo automáticamente y mostrará el dispositivo en la interfaz de Plaspy.

- El dispositivo se configura para enviar datos de posición y eventos a 54.85.159.138 o al dominio de servidor configurado para Plaspy.
- Todos los dispositivos reportan al puerto 8888 en el endpoint de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita especificar detalles de protocolo en la plataforma.
- El identificador de rastreador que usa Plaspy corresponde a los últimos 14 dígitos del IMEI tal como los reporta el dispositivo (ver salida PAR del fabricante).
- Tras la configuración, el dispositivo será visible en Plaspy una vez que envíe un reporte válido al endpoint compartido.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de TopTen o al software del fabricante y confirme que puede enviar parámetros por SMS o usar la herramienta del proveedor.
2. Lea el IMEI del dispositivo usando el método del fabricante (salida PAR o diagnósticos) y obtenga el ID del rastreador a partir de los últimos 14 dígitos del IMEI.
3. Introduzca el endpoint del servidor Plaspy configurando en el dispositivo ya sea el dominio d.plaspy.com o la IP 54.85.159.138.
4. Establezca el puerto en 8888 en el rastreador y, si es necesario, elija el protocolo de transporte UDP o TCP.
5. Configure el APN y las credenciales APN que requiera la SIM usando el comando SMS del fabricante o la herramienta.
6. Aplique o guarde la configuración y reinicie o haga un ciclo de energía del dispositivo si las instrucciones del fabricante lo exigen.
7. Valide que el dispositivo reporta a Plaspy revisando los mensajes entrantes y confirmando que el equipo aparece en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

El TopTen TK218 admite configuración mediante SMS. Los siguientes comandos SMS públicos son provistos por el fabricante para su uso con Plaspy. Preserve y reemplace los marcadores donde corresponda.

- Comando opcional de restauración de fábrica inicial. Use solo si necesita restablecer el dispositivo a valores de fábrica antes de establecer servidor y APN.
```text
111111CLR
```

- Comando público para configurar APN y servidor GPRS a la IP y puerto de Plaspy. Preserve los marcadores {{apn}}, {{apnu}} y {{apnp}} al reemplazarlos por los valores de su operador.
```text
111111WWW:IPN:54.85.159.138;COM:8888;APN:{{apn}},{{apnu}},{{apnp}};RPT:60;SLP:60;RUN:2;
```
Explicación de los marcadores
- {{apn}} es el nombre del APN del proveedor de la tarjeta SIM.
- {{apnu}} es el usuario del APN cuando el operador lo solicita.
- {{apnp}} es la contraseña del APN cuando el operador lo solicita.

- Comando público de verificación para consultar los ajustes actuales del servidor en el TK218:
```text
111111WWW:
```

Nota: El ejemplo del comando WWW anterior configura el dispositivo para reportar a la IP de Plaspy 54.85.159.138. Algunas versiones de firmware aceptan un nombre de dominio en lugar de una IP cruda. Cuando esté soportado, puede configurar d.plaspy.com en lugar de la IP según el firmware del dispositivo y el comportamiento de la herramienta del fabricante. Consulte la documentación de TopTen para la sintaxis de comandos específica del dispositivo.

## Notas de configuración

- La configuración por SMS está soportada en el TK218 y se usa comúnmente para establecer APN y parámetros de servidor en campo.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis exacta de los comandos o los nombres de parámetros. Confirme la sintaxis exacta con la documentación de TopTen.
- Elija UDP o TCP según las opciones de configuración del dispositivo; Plaspy acepta ambos en el puerto 8888 y detecta el protocolo automáticamente.
- Use la salida PAR del IMEI para derivar el identificador del rastreador para Plaspy. El identificador corresponde a los últimos 14 dígitos del IMEI tal como lo reporta el dispositivo.
- Verifique siempre las credenciales APN con su operador móvil y pruebe la conectividad después de realizar cambios.

## Por qué usar Plaspy con esta configuración

Apuntar el TopTen TK218 a Plaspy usando el endpoint y puerto compartidos de la plataforma ofrece una forma fiable de centralizar los datos de ubicación y eventos de los dispositivos TK218. Esta configuración permite a las organizaciones monitorear el movimiento de vehículos, recibir alertas y ver los reportes de los equipos en una única plataforma, mientras Plaspy detecta automáticamente el protocolo del rastreador.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific configuration methods and firmware behavior with the manufacturer at http://www.t10.cn. Device setup methods and firmware parameters can change over time so always cross check with official manufacturer documentation before wide deployment.
