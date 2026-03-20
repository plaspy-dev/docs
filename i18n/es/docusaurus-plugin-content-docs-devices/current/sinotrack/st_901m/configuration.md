---
slug: /sinotrack/st_901m/configuration
id: st_901m-configuration
sidebar_label: Configuration
title: SinoTrack - ST-901M Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del SinoTrack ST-901M para Plaspy mediante SMS y ajustes de servidor GPRS
keywords:
  - Configuración SinoTrack ST-901M
  - Instalación SinoTrack ST-901M
  - Configuración servidor ST-901M
  - Configuración GPS ST-901M
  - Configuración tracker Plaspy
  - Configuración rastreo de vehículos
  - Comandos SMS para rastreador GPS
  - Configuración servidor GPRS
  - Configuración seguimiento de flotas
  - Integración SinoTrack Plaspy
---

# SinoTrack - Configuración del ST-901M

Esta página documenta el contexto público de configuración para usar el SinoTrack ST-901M con Plaspy. Resume los pasos prácticos y los comandos SMS públicos que se usan para apuntar un ST-901M al endpoint de Plaspy, además de ofrecer orientación sobre prerrequisitos y verificación. Utilice esta guía para preparar el equipo para su integración con Plaspy y para entender cómo el dispositivo envía la telemetría que Plaspy puede procesar.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y las herramientas del proveedor. El ST-901M admite configuración por SMS y reporte por GPRS, por lo que los comandos y el flujo a continuación reflejan los comandos SMS públicos comúnmente usados para configurarlo con Plaspy.

## Resumen de la configuración

El objetivo del proceso de configuración es que el ST-901M reenvíe sus reportes GPRS al servidor de Plaspy, verificar que el dispositivo tenga conectividad celular válida y confirmar que Plaspy reciba los mensajes de ubicación y eventos. En el ST-901M esto se suele realizar mediante comandos SMS que definen el APN, el servidor GPRS, los intervalos de reporte y el modo GPRS.

- Configure el APN y el servidor GPRS para que el rastreador pueda establecer una sesión de datos con el operador móvil y con Plaspy.
- Apunte el dispositivo al endpoint del servidor Plaspy para que los datos de ubicación y eventos se reenvíen en tiempo real.
- Valide la conectividad y la telemetría usando el comando de verificación RCONF y comprobando el dispositivo en Plaspy.
- Ajuste los intervalos de reporte apropiados para los estados en movimiento y detenido, equilibrando la oportunidad de la información y el consumo de datos.
- Aproveche las entradas de ignición y alarmas del dispositivo para habilitar el envío de eventos que Plaspy mostrará para monitoreo y alertas.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto en la plataforma

## Requisitos típicos antes de la configuración

- Una tarjeta SIM funcional con un plan de datos activo y los datos APN correctos de su operador móvil.
- Acceso al rastreador para realizar la configuración por SMS o acceso a la herramienta del proveedor que emite los mismos comandos.
- Alimentación y una instalación fija apropiada para uso en vehículo para que el dispositivo pueda registrarse en la red.
- El IMEI del dispositivo y acceso a cualquier credencial de instalador o administrador que el proveedor requiera para enviar comandos SMS de configuración.
- Confirmación de los valores APN, APN usuario y APN contraseña de su operador para completar los marcadores [apn], [apnu] y [apnp].
- Acceso a la documentación oficial de SinoTrack o al soporte del proveedor para instrucciones específicas de firmware si el comportamiento difiere de esta guía.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el ST-901M usa el APN configurado para establecer una conexión de datos GPRS y reenvía mensajes de posición GNSS y eventos al endpoint y puerto del servidor Plaspy. Plaspy recibe esos mensajes y detecta automáticamente el protocolo del rastreador, de modo que los dispositivos aparecen en la plataforma sin necesidad de cambiar puertos por dispositivo.

- El rastreador envía coordenadas GNSS y telemetría con marcas de tiempo al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- GPRS es el transporte principal y SMS actúa como canal de fallback o de configuración.
- Eventos del dispositivo como encendido/apagado de ignición, alarmas de exceso de velocidad y alertas de números autorizados se envían a Plaspy como mensajes de evento.
- Plaspy muestra actualizaciones de posición en vivo e historial de eventos para monitoreo operativo e informes.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que se utiliza el mismo puerto para todos los dispositivos compatibles.

## Flujo de configuración típico

1. Acceda al método oficial de configuración SinoTrack, normalmente comandos SMS o la herramienta del proveedor, y confirme el IMEI del dispositivo y el comportamiento del firmware actual.
2. Ingrese el endpoint del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según el formato de comando que acepte el dispositivo.
3. Establezca el puerto del servidor a 8888 como puerto GPRS del dispositivo.
4. Seleccione UDP o TCP si el equipo requiere elegir el transporte durante la configuración.
5. Envíe los comandos SMS necesarios para configurar el APN, la IP o dominio del servidor y los intervalos de reporte, y luego aplique o guarde la configuración.
6. Reinicie o vuelva a arrancar el dispositivo si el fabricante lo exige para aplicar los ajustes de red.
7. Valide que el dispositivo reporte a Plaspy usando el comando de verificación RCONF y confirmando que el equipo sea visible en la plataforma.

## Ejemplos de comandos de configuración

El ST-901M puede configurarse mediante comandos SMS. Los siguientes comandos públicos se proporcionan en el contenido de configuración del fabricante y normalmente se envían como mensajes SMS independientes al número del dispositivo. Conserve los marcadores al reemplazarlos por los valores de su operador.

- Restauración de fábrica inicial opcional
  ```
  RESET
  ```
  Nota: Use RESET solo cuando quiera restaurar los valores de fábrica o si se lo indican durante la provisión inicial.

- Establecer la zona horaria a UTC 0
  ```
  8960000E00
  ```

- Configurar el APN del operador móvil
  ```
  8030000 [apn] [apnu] [apnp]
  ```
  Donde:
  - [apn] es la cadena APN del operador
  - [apnu] es el nombre de usuario APN si el operador lo requiere (dejar vacío si no se usa)
  - [apnp] es la contraseña APN si el operador lo requiere (dejar vacío si no se usa)

- Configurar el servidor GPRS hacia Plaspy usando la IP del servidor y el puerto
  ```
  8040000 54.85.159.138 8888
  ```
  Este comando apunta el rastreador a Plaspy. Puede usar d.plaspy.com en lugar de la IP si su dispositivo acepta nombres de dominio.

- Establecer el intervalo de reporte en movimiento
  ```
  8050000 60
  ```
  (Ejemplo establece un intervalo de actualización de 60 segundos mientras se mueve)

- Establecer el intervalo de reporte detenido
  ```
  8090000 60
  ```
  (Ejemplo establece un intervalo de actualización de 60 segundos mientras está detenido)

- Cambiar el dispositivo a modo GPRS
  ```
  7100000
  ```

- Verificar la configuración actual
  ```
  RCONF
  ```
  El comando RCONF devuelve la configuración del dispositivo incluyendo el ID que Plaspy usa para identificar el equipo.

## Notas de configuración

- El conjunto de comandos SMS y la sintaxis exacta pueden variar según la versión de firmware y la herramienta del proveedor, por lo que verifique los comandos con la documentación del dispositivo antes de desplegar a gran escala.
- Use los marcadores [apn], [apnu] y [apnp] para insertar los valores de su operador; deje usuario o contraseña en blanco si el operador no los requiere.
- El dispositivo admite configurar el servidor por IP o por dominio. Si su firmware acepta dominios, puede usar d.plaspy.com en lugar de la IP.
- Elija UDP o TCP según la preferencia del instalador o la compatibilidad del firmware; Plaspy acepta cualquiera de los dos en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- La configuración por SMS es útil cuando el dispositivo está instalado en campo y no hay acceso inmediato a una consola, pero asegúrese de que la SIM tenga capacidad de SMS y señal suficiente.

## Por qué usar Plaspy con esta configuración

Usar el SinoTrack ST-901M con Plaspy ofrece a administradores de flotas y propietarios de vehículos una vía sencilla para incorporar posiciones GPS en vivo y telemetría de eventos en una plataforma única de monitoreo. La configuración basada en comandos SMS del ST-901M y su reporte por GPRS permiten apuntar los dispositivos al endpoint y puerto compartidos de Plaspy para que comiencen a reportar con una configuración mínima intermedia.

Learn more about Plaspy on the main website https://www.plaspy.com and verify the latest device specific setup details, firmware notes, and official instructions on the manufacturer's site https://www.sinotrackgps.com/ . Manufacturer specifications and configuration methods can change over time so confirm the latest guidance before large scale deployments.
