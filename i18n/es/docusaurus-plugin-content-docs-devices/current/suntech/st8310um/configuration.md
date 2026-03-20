---
slug: /suntech/st8310um/configuration
id: st8310um-configuration
sidebar_label: Configuration
title: Suntech - ST8310UM Configuration
sidebar_class_name: menu_item_tracker
description: Configurar Suntech ST8310UM para usar con Plaspy mediante ajustes públicos de servidor y comandos SMS
keywords:
  - configuración Suntech ST8310UM
  - instalación Suntech ST8310UM
  - configuración de servidor Suntech ST8310UM
  - Suntech ST8310UM Plaspy
  - configuración rastreador GPS ST8310UM
  - guía de instalación ST8310UM
  - configuración rastreador Plaspy
  - ajustes servidor rastreador GPS
  - configuración seguimiento de vehículos
  - configuración rastreador de activos
---

# Suntech - Configuración ST8310UM

Esta página documenta el contexto público de configuración necesario para conectar el rastreador Suntech ST8310UM a la plataforma Plaspy. Se concentra en los ajustes prácticos y en las plantillas de comandos SMS publicadas para el ST8310UM, y explica cómo preparar el dispositivo para que Plaspy reciba telemetría y actualizaciones de ubicación.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando estén disponibles, en esta página se incluyen las plantillas públicas de comandos SMS usadas para la configuración inicial y la verificación, de modo que usted pueda aplicar los ajustes del servidor Plaspy al ST8310UM.

## Resumen de la configuración

El objetivo al configurar el ST8310UM para Plaspy es dirigir el dispositivo al endpoint del servidor de Plaspy, asegurar un transporte de datos funcional y verificar que el dispositivo informe ubicaciones y estados a la plataforma. En instalaciones con ST8310UM esto se realiza comúnmente mediante la interfaz de comandos SMS del equipo, usando la identificación del dispositivo derivada del IMEI.

- Configure los parámetros de red del dispositivo, incluyendo el APN del operador y la entrada del servidor GPRS, para que el rastreador pueda abrir una sesión de datos hacia Plaspy.
- Ajuste el intervalo de actualización o reporte del dispositivo para que Plaspy reciba información de ubicación y estado en tiempo oportuno.
- Apunte el rastreador al endpoint del servidor Plaspy y establezca el puerto compartido de Plaspy para que el dispositivo transmita la telemetría a la plataforma.
- Valide la identidad del dispositivo usando el ID del ST8310UM derivado del IMEI y pruebe la configuración con el comando de verificación.
- Confirme que el dispositivo aparezca en Plaspy y que los reportes de ubicación y eventos sean visibles en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como endpoint lógico para la telemetría de los rastreadores
- IP del servidor 54.85.159.138 para configuración basada en IP directa cuando sea necesario
- Puerto 8888 que Plaspy usa para todos los dispositivos compatibles
- Soporte de transporte UDP o TCP según los requisitos del dispositivo y las condiciones de red
- Detección automática de protocolo en Plaspy para que la plataforma identifique y analice los mensajes del rastreador sin requerir una selección manual del protocolo

## Requisitos típicos antes de la configuración

- Una tarjeta SIM provisionada para datos y SMS, ya que las plantillas de configuración del ST8310UM usan comandos SMS y datos celulares para la telemetría.
- El dispositivo debe estar con alimentación y, si es posible, tener una fijación GNSS válida para la verificación tras la configuración.
- Acceso al método oficial de configuración del fabricante o a herramientas como las plantillas de comandos SMS de Suntech.
- El APN, el usuario del APN y la contraseña del APN del operador celular para permitir sesiones de datos GPRS o LTE.
- Un método para leer el IMEI del dispositivo y calcular el ID del rastreador usado en los comandos y en Plaspy.
- Conocimientos básicos para enviar comandos SMS al dispositivo o acceso a la herramienta del proveedor que envía SMS de configuración.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el ST8310UM abre una conexión hacia el endpoint compartido del servidor Plaspy y envía mensajes periódicos de ubicación y estado a la plataforma. Plaspy ingiere esos mensajes y los convierte en posiciones en tiempo real, eventos e historial en su cuenta Plaspy.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El dispositivo usa transporte TCP o UDP para transmitir la telemetría según su selección y el comportamiento de la red.
- Plaspy detecta automáticamente el protocolo del rastreador y procesa los mensajes entrantes para que los dispositivos aparezcan en la plataforma sin mapeo manual de protocolos.
- Las fijaciones de ubicación, los disparadores de eventos y los reportes periódicos enviados por el ST8310UM se vuelven visibles en los paneles y mapas de Plaspy.
- Una configuración exitosa permite alertas basadas en eventos y monitoreo operativo para flotas y procesos de recuperación.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración de Suntech, como la interfaz de comandos SMS o la herramienta de configuración del proveedor documentada por Suntech.
2. Determine el ID del dispositivo a partir del IMEI según lo requieran las plantillas de comandos del ST8310UM (ver ejemplo más abajo).
3. Ingrese el servidor de Plaspy como d.plaspy.com o la IP directa 54.85.159.138 en los ajustes del dispositivo.
4. Establezca el puerto en 8888, que es el utilizado por Plaspy para todos los dispositivos.
5. Elija UDP o TCP como transporte si el dispositivo requiere seleccionar transporte; Plaspy acepta cualquiera de los dos y detecta el protocolo automáticamente.
6. Aplique o guarde la configuración y reinicie el dispositivo si éste requiere un reinicio para que los ajustes entren en vigor.
7. Valide que el rastreador reporte a Plaspy comprobando los mensajes entrantes en la plataforma y usando el comando de verificación por SMS.

## Ejemplos de comandos de configuración

La configuración pública del ST8310UM utiliza comandos SMS. El ID del dispositivo para estos comandos corresponde a los últimos seis dígitos del IMEI excluyendo el dígito final del IMEI. Por ejemplo, si el IMEI es 123456789012345, el ID del dispositivo sería 901234 siguiendo el patrón de ejemplo proporcionado en la plantilla del fabricante. Los comandos se envían como SMS al número del dispositivo.

1) Configure el APN del operador y el servidor GPRS apuntando a Plaspy. Reemplace {{device_id}} con el ID calculado y conserve los marcadores de APN [apn], [apnu], [apnp]:

```text
SA200NTW;{{device_id}};02;{GPRS mode flag};[apn];[apnu];[apnp];54.85.159.138;8888;;;;
```

Notas:
- La plantilla del fabricante utiliza un campo para indicar si hay usuario o contraseña de APN; en muchas configuraciones establezca ese indicador a 1 si proporciona [apnu] o [apnp], de lo contrario póngalo en 0.
- [apn] es el APN del operador. [apnu] es el usuario del APN y [apnp] es la contraseña del APN. Mantenga estos marcadores y reemplácelos con los valores proporcionados por su operador SIM.

2) Ajuste el intervalo de reporte a 60 segundos usando el formato de comando del fabricante:

```text
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Compruebe los ajustes del dispositivo o solicite un reporte predefinido para verificar la configuración:

```text
SA200CMD;{{device_id}};02;PresetA
```

Envíe cada comando como un mensaje SMS al número del dispositivo. Use el ejemplo de mapeo de IMEI del fabricante para calcular {{device_id}} antes de enviar.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar el formato de los comandos o el orden de los parámetros. Confirme la sintaxis exacta de los SMS con la documentación de Suntech para su versión de firmware.
- El ST8310UM soporta configuración vía SMS según la plantilla pública mostrada arriba. Si prefiere las herramientas de configuración ofrecidas por Suntech o su proveedor, siga esas herramientas asegurándose de ingresar los valores del servidor y puerto de Plaspy como se indica.
- Al elegir TCP frente a UDP considere las condiciones de la red y el comportamiento GPRS del operador. Plaspy acepta cualquiera de los dos transportes y detecta automáticamente el protocolo del rastreador.
- El puerto de Plaspy 8888 es compartido por todos los dispositivos en Plaspy y debe usarse exactamente como se muestra al configurar la entrada del servidor del dispositivo.
- Verifique siempre los marcadores de APN, usuario y contraseña ([apn], [apnu], [apnp]) con su proveedor celular para asegurar que se puedan establecer sesiones de datos.

## Por qué usar Plaspy con esta configuración

Usar el ST8310UM con Plaspy ofrece un camino sencillo hacia el seguimiento centralizado, alertas e informes operativos para flotas y activos. Los ajustes compartidos del servidor Plaspy simplifican la incorporación de dispositivos, de modo que, una vez que el equipo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888, podrá comenzar a reportar y aparecer en los paneles de la plataforma.

Para obtener más información sobre Plaspy y cómo administrar dispositivos a escala visite https://www.plaspy.com. Verifique siempre los métodos de configuración específicos más recientes, el comportamiento del firmware y las instrucciones del fabricante en el sitio oficial de Suntech http://www.suntechint.com/ ya que los detalles del proveedor pueden cambiar con el tiempo.
