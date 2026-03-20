---
slug: /suntech/st4345/configuration
id: st4345-configuration
sidebar_label: Configuration
title: Suntech - ST4345 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para Suntech ST4345. Conexión a Plaspy y ejemplos prácticos de servidor y comandos SMS
keywords:
  - Configuración Suntech ST4345
  - Instalación Suntech ST4345
  - Integración ST4345 Plaspy
  - Configuración servidor tracker Suntech
  - Configuración GPS ST4345
  - Configuración de dispositivo Plaspy
  - Seguimiento vehicular ST4345
  - Comandos SMS ST4345
  - Ajustes APN ST4345
  - Tracker reportando a Plaspy
---

# Suntech - Configuración ST4345

Esta página documenta la información pública necesaria para usar el rastreador Suntech ST4345 con Plaspy. Aquí encontrará los detalles del servidor compartido de Plaspy al que debe apuntar el dispositivo, las plantillas de comandos SMS que publica el fabricante y pasos prácticos para preparar el equipo para que envíe ubicación y telemetría a Plaspy. Utilice este documento como guía operativa junto con el manual del fabricante.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El modelo ST4345 incluye plantillas de comandos por SMS que se usan comúnmente para configurar APN, servidor GPRS e intervalos de reporte; siga esas plantillas y confirme los detalles con la documentación oficial de Suntech.

## Resumen de la configuración

El proceso de configuración prepara un ST4345 para comunicarse de forma fiable con Plaspy y para aparecer como un dispositivo activo en su cuenta. Las acciones típicas incluyen establecer el APN del operador, configurar el servidor GPRS hacia Plaspy, seleccionar el transporte cuando sea necesario y verificar el comportamiento de los reportes.

- Configure los parámetros de red y el APN para que el dispositivo pueda enviar datos por la red celular.
- Establezca el endpoint del servidor GPRS apuntando a Plaspy para que el rastreador entregue mensajes de posición y eventos.
- Ajuste los intervalos de reporte y el comportamiento según sus necesidades de monitoreo y su plan de datos.
- Verifique la conectividad y la identidad del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro correcto.
- Guarde y, si es necesario, reinicie el rastreador para que los nuevos ajustes de servidor y reporte entren en vigor.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- Puerto 8888  
- Transporte: UDP o TCP en el puerto 8888  
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse

Estos son los valores públicos de Plaspy que debe usar al apuntar un ST4345 (o cualquier rastreador compatible) hacia la plataforma. Plaspy utiliza el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente.

## Requisitos típicos antes de la configuración

- Una unidad ST4345 con alimentación y una tarjeta SIM operativa con datos y SMS habilitados según se requiera.
- El número IMEI del dispositivo disponible (necesario para calcular el ID de dispositivo usado en los comandos SMS).
- Configuración APN del operador móvil, incluyendo nombre de APN y, si aplica, usuario y contraseña.
- Acceso al método de configuración del fabricante que vaya a usar (SMS, herramienta web o servidor de mantenimiento) y las instrucciones oficiales de Suntech.
- Un teléfono móvil capaz de enviar SMS al dispositivo si va a configurar por SMS.
- Una cuenta básica de Plaspy configurada para confirmar que el dispositivo aparece y reporta después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El ST4345 envía mensajes de posición GNSS y eventos al endpoint y puerto del servidor configurado, que para Plaspy es la dirección compartida indicada arriba. Una vez apuntado a Plaspy, los mensajes son ingeridos y correlacionados con la identidad del dispositivo para que la unidad sea visible en la plataforma de Plaspy para seguimiento en vivo e histórico.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- La telemetría del dispositivo y las actualizaciones periódicas de posición se envían por TCP o UDP según la selección de transporte.
- Plaspy recibe esos mensajes y detecta automáticamente el protocolo del rastreador para parsear datos de ubicación y eventos.
- Eventos como cambios de ignición, alertas y mensajes de estado se encaminan a Plaspy para mapeo, alertas e informes.
- Tras una configuración exitosa, el dispositivo aparece en Plaspy para monitoreo, diagnóstico y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de Suntech que planea usar (comandos SMS, servidor de mantenimiento del proveedor o herramienta de configuración) y confirme que el dispositivo es accesible.
2. Determine el ID de dispositivo a partir del IMEI (ver Comandos de ejemplo) y reúna las credenciales APN para la SIM.
3. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP 54.85.159.138 en los ajustes GPRS/servidor.
4. Configure el puerto del servidor en 8888 y seleccione UDP o TCP si la configuración del equipo requiere elegir transporte.
5. Aplique o guarde la configuración en el dispositivo usando el método del proveedor (envío de SMS, empuje de configuración con la herramienta o actualización vía servidor de mantenimiento).
6. Reinicie el dispositivo si las instrucciones del proveedor lo requieren para que los nuevos ajustes tengan efecto.
7. Valide que el dispositivo reporta a Plaspy y es visible en su cuenta; verifique los mensajes entrantes y el estado del equipo.

## Comandos de configuración de ejemplo

El modelo ST4345 incluye plantillas de comandos SMS para la configuración de red y reporte. El ID de dispositivo en estas plantillas son los seis dígitos inmediatamente antes del último dígito final del IMEI (los últimos 6 dígitos del IMEI excluyendo el dígito verificador final). Para un IMEI de 15 dígitos, son los 6 dígitos en las posiciones 9 a 14. Ejemplo: IMEI 123456789012345 -> device ID 901234.

1) Configurar APN del operador y servidor GPRS (reemplazar {{device_id}}, {{apn}}, {{apnu}} y {{apnp}} según corresponda). Establezca la bandera de autenticación a 1 si suministra {{apnu}} o {{apnp}}, de lo contrario use 0.

```
SA200NTW;{{device_id}};02;{auth_flag};{{apn}};{{apnu}};{{apnp}};54.85.159.138;8888;;;;
```

- {{device_id}} — ID de dispositivo de seis dígitos derivado del IMEI como se describió arriba.  
- {auth_flag} — 1 si se proporciona usuario o contraseña del APN, de lo contrario 0.  
- {{apn}} — nombre del APN del operador.  
- {{apnu}} — usuario del APN si es necesario.  
- {{apnp}} — contraseña del APN si es necesaria.

2) Ajustar el intervalo de reporte a 60 segundos (en esta plantilla reporte, latido y movimiento están en 60):

```
SA200RPT;{{device_id}};02;60;60;60;3;0;0;0;0;0
```

3) Consultar o solicitar la configuración actual preestablecida del dispositivo:

```
SA200CMD;{{device_id}};02;PresetA
```

Notas sobre el envío de comandos:
- Estos comandos se suelen enviar por SMS al número del dispositivo desde un teléfono autorizado. Siga las instrucciones de Suntech respecto a las restricciones del remitente SMS y la autorización de comandos.
- Mantenga los valores de marcador de posición y reemplácelos por los valores específicos del operador y del dispositivo antes de enviar.
- Se recomienda aplicar primero los ajustes de red (APN/servidor GPRS) antes de cambiar los intervalos de reporte para que el dispositivo pueda registrarse y comenzar a enviar datos inmediatamente a Plaspy.

## Notas de configuración

- El ST4345 admite la configuración por SMS como muestran las plantillas del proveedor; herramientas alternativas del fabricante o servidores de mantenimiento pueden ofrecer las mismas opciones vía GUI o actualización remota.
- Elija TCP o UDP según la preferencia del instalador o las condiciones de red; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.
- Verifique la versión de firmware y las variantes (ST4345R, ST4345LB, ST4345LC) porque la sintaxis de comandos o las funciones disponibles pueden cambiar entre revisiones de firmware y hardware.
- Asegúrese de que las credenciales APN sean correctas y de que la SIM tenga un plan de datos activo; use el valor {auth_flag} para indicar si se requiere autenticación APN.
- Confirme el {{device_id}} calculado a partir del IMEI antes de enviar los comandos; un ID incorrecto puede impedir que el dispositivo acepte la configuración o que sea emparejado en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el ST4345 con Plaspy brinda a las organizaciones visibilidad centralizada de ubicación, eventos de movimiento y estado de los dispositivos en flotas y activos. Apuntar el dispositivo al endpoint compartido de Plaspy y aplicar un intervalo de reporte apropiado ayuda a garantizar actualizaciones de posición oportunas, reporte de eventos y una ingesta fiable de telemetría en los paneles y alertas de Plaspy.

Learn more about Plaspy on our website https://www.plaspy.com. For device specific instructions, firmware details and the latest command references verify current information on the manufacturer's site http://www.suntechint.com/ because manufacturer setup methods and firmware behavior can change over time.
