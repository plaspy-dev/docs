---
slug: /xirgo/xt_4500/configuration
id: xt_4500-configuration
sidebar_label: Configuration
title: Xirgo - XT-4500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Xirgo XT-4500 y apuntarlo a Plaspy con ajustes de servidor compartidos y comandos SMS
keywords:
  - configuración Xirgo XT-4500
  - configuración XT-4500
  - Xirgo configuración Plaspy
  - configuración rastreador GPS XT-4500
  - configuración servidor Xirgo
  - comandos SMS XT-4500
  - configuración rastreador Plaspy
  - configuración tracker GPS Plaspy
  - ajustes APN XT-4500
  - seguimiento activos XT-4500
---

# Xirgo - Configuración del XT-4500

Esta página documenta el contexto público de configuración para utilizar el Xirgo XT-4500 con Plaspy. Resume los ajustes prácticos de servidor y los pasos habituales para apuntar el dispositivo al backend de Plaspy, de modo que el tracker pueda reportar ubicación y estado. Cuando están disponibles, se incluyen ejemplos de comandos SMS presentes en la documentación pública del fabricante para el XT-4500.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, pero los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, las prácticas del instalador y las herramientas del proveedor. El XT-4500 admite comandos de configuración por SMS en ejemplos públicos; en esta página se muestra cómo esos comandos se usan para configurar el APN y el servidor GPRS que Plaspy requiere.

## Resumen de la configuración

Preparar un XT-4500 para integrarlo con Plaspy se centra en configurar sus parámetros de red y verificar que el equipo pueda alcanzar el endpoint y puerto del servidor de Plaspy. El flujo público de configuración suele implicar ajustar el APN del operador móvil, registrar la configuración del servidor GPRS y confirmar que el dispositivo reporte al endpoint de Plaspy.

- Configure el APN del operador para que el XT-4500 pueda abrir una sesión de datos y enviar reportes.
- Establezca la dirección y el puerto del servidor GPRS para apuntar el dispositivo a Plaspy para entrega de telemetría.
- Elija el modo de transporte soportado por el dispositivo (UDP o TCP) y asegúrese de que coincida con la red y la preferencia del instalador.
- Guarde y aplique los ajustes, luego valide la conectividad para que el dispositivo aparezca en Plaspy.
- Use SMS o las herramientas del fabricante, cuando estén disponibles, para enviar comandos de configuración si se requiere acceso en campo.

## Ajustes de servidor Plaspy

Configure el XT-4500 para que reporte al endpoint compartido de Plaspy usando los siguientes ajustes públicos:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP
- Plaspy detecta automáticamente el protocolo del tracker

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados en la plataforma. Use el puerto 8888 al configurar los ajustes del servidor del dispositivo.

## Requisitos típicos antes de la configuración

- Un XT-4500 con alimentación y alcance adecuado que pueda recibir comandos SMS o ser configurado mediante la herramienta oficial del fabricante.
- Una tarjeta SIM válida con datos móviles habilitados y los valores APN correctos del operador.
- Acceso a los parámetros APN del operador y cualquier dato de autenticación que requiera la SIM.
- Acceso administrativo al número SMS del dispositivo o a la consola de configuración que use su instalador.
- Conocimiento de si utilizará UDP o TCP para el transporte cuando el dispositivo requiera una selección explícita.

## Cómo se conecta este tracker a Plaspy

El XT-4500 se configura para enviar sus datos de ubicación y estado al endpoint y puerto del servidor de Plaspy para que la plataforma pueda mostrar la unidad y sus eventos. Una vez que el dispositivo tiene el APN y la configuración GPRS correctos, abre una conexión al backend de Plaspy y comienza a reportar según el comportamiento de reporte de su firmware.

- El dispositivo se apunta a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- El tracker usa transporte UDP o TCP según la selección durante la configuración.
- Plaspy recibe la telemetría del tracker y detecta automáticamente el protocolo específico del equipo.
- Una vez que comienzan los reportes, el dispositivo se vuelve visible en Plaspy para monitoreo y generación de eventos.
- La validación periódica de los reportes confirma que el APN y la configuración del servidor son correctos.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de Xirgo provisto por el vendedor o instalador. Para equipos en campo, frecuentemente se trata de configuración vía SMS.
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 en los ajustes del servidor del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Seleccione UDP o TCP si el dispositivo requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y confirme que los ajustes fueron aceptados.
6. Reinicie el dispositivo si el firmware requiere reboot para aplicar cambios de red.
7. Valide que el dispositivo reporte a Plaspy y aparezca en la plataforma.

## Comandos de configuración de ejemplo

La documentación pública de configuración del XT-4500 incluye comandos SMS para ajustar el APN del operador y configurar el servidor GPRS. Envíe estos comandos como mensajes SMS individuales al número del dispositivo según las instrucciones de Xirgo. Mantenga los marcadores de posición tal como están hasta sustituirlos por los valores de su operador.

- Configure el APN del operador. Reemplace los marcadores con los valores de su operador. Los marcadores son:
  - [apnu] para el nombre de usuario APN si se requiere
  - [apnp] para la contraseña APN si se requiere
  - [apn] para el nombre del APN del operador

```
+XT:1002,[apnu],[apnp],[apn]
```

- Configure el servidor GPRS hacia Plaspy. Este comando establece el servidor IP o dominio y el puerto que el dispositivo usará para conectarse a Plaspy. El ejemplo usa el puerto 8888 y la IP pública de Plaspy.

```
+XT:1001,8888,54.85.159.138,4,0,0
```

Notas sobre estos comandos:
- Envíe primero el comando de APN para asegurarse de que el dispositivo pueda establecer una sesión GPRS cuando se configure el servidor.
- Mantenga los marcadores de posición intactos hasta sustituirlos por los valores específicos de su operador.
- El segundo comando incluye parámetros posteriores a la IP y puerto que forman parte de la sintaxis del comando del dispositivo. Use el formato exacto mostrado al seguir la documentación pública del XT-4500.

## Observaciones de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos o los parámetros disponibles; siempre verifique con la documentación actual de Xirgo.
- El XT-4500 admite configuración por SMS en ejemplos públicos, lo cual es útil para instalaciones remotas o en campo sin conectividad directa a herramientas.
- Elija UDP o TCP según las características de la red y la preferencia del instalador; ambos transportes son compatibles con Plaspy y con el dispositivo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos en la plataforma y detecta automáticamente el protocolo del tracker, por lo que debe usar el puerto 8888 al configurar el servidor.
- Si un cambio de configuración no parece surtir efecto, confirme que el SMS se entregó correctamente y que el dispositivo fue reiniciado si el firmware lo requiere.

## Por qué usar Plaspy con esta configuración

Usar el XT-4500 con Plaspy ofrece una vía sencilla para integrar el seguimiento de activos de bajo consumo en una plataforma de monitoreo centralizada. Con los comandos SMS públicos y los ajustes de servidor compartidos de Plaspy, los instaladores pueden configurar unidades XT-4500 remotas para que reporten de forma confiable al mismo backend utilizado por otros dispositivos compatibles, simplificando la vista general de flota o activos y las notificaciones.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, notas de firmware y orientación del fabricante, por favor verifique los detalles con Xirgo en https://xirgo.com/ ya que las especificaciones y procedimientos de instalación del fabricante pueden cambiar con el tiempo.
