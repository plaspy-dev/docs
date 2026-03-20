---
slug: /cantrack/tk103/configuration
id: tk103-configuration
sidebar_label: Configuration
title: CanTrack - TK103 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador CanTrack TK103 con Plaspy usando ajustes de servidor compartido y comandos SMS
keywords:
  - Configuración CanTrack TK103
  - Instalación CanTrack TK103
  - Configuración servidor CanTrack TK103
  - Configuración TK103 Plaspy
  - Configuración rastreador GPS TK103
  - Instalación GPS CanTrack
  - Configuración rastreador Plaspy
  - Comandos SMS rastreador GPS
  - Configuración seguimiento vehicular
  - Instalación rastreador de flota
---

# CanTrack - Configuración del TK103

Esta página documenta el contexto público de configuración para usar el CanTrack TK103 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en los comandos SMS más comunes publicados para este modelo, de modo que pueda preparar el dispositivo para comunicarse con Plaspy y aparecer en la plataforma. El contenido se basa en instrucciones de configuración disponibles públicamente y en los ajustes públicos de servidor de Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El TK103 normalmente se configura por SMS o GPRS; esta guía explica el flujo típico y los comandos SMS publicados para el TK103, recordándole que verifique los detalles específicos del equipo en la documentación de CanTrack.

## Resumen de la configuración

Este proceso prepara un TK103 para enviar datos de ubicación y estado a Plaspy y para ser visible en la plataforma. El enfoque principal es establecer el identificador del dispositivo, el APN del operador, el endpoint del servidor GPRS y los intervalos de reporte para que el rastreador se conecte de forma confiable a Plaspy.

- Configurar el APN del operador y las credenciales APN opcionales para permitir datos GPRS.
- Establecer el identificador del dispositivo (a menudo derivado del IMEI) para que Plaspy reconozca la unidad.
- Apuntar el rastreador al endpoint y puerto del servidor de Plaspy para entregar los datos.
- Definir el intervalo de reporte y el modo de datos para que el rastreador envíe actualizaciones con la frecuencia deseada.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy tras la configuración.

## Ajustes públicos del servidor de Plaspy

Al configurar el TK103 para Plaspy, utilice los siguientes ajustes de servidor públicos:

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de comenzar

- Un TK103 con batería cargada y con capacidad de configuración por SMS o GPRS accesible.
- Una tarjeta SIM activa con datos y SMS habilitados y cobertura celular en la ubicación del dispositivo.
- Conocer el IMEI del equipo (a menudo impreso en el dispositivo o el empaque).
- La contraseña por defecto del dispositivo si se requiere para la configuración (en ejemplos publicados se usa 123456).
- Acceso a un teléfono con capacidad de enviar SMS o a la herramienta de configuración del fabricante para emitir comandos.
- Confirmación del APN del operador y, si aplica, usuario y contraseña del APN para la SIM.

## Cómo se conecta este rastreador a Plaspy

El TK103 se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos de Plaspy para que Plaspy pueda procesar y mostrar la telemetría del dispositivo. Plaspy recibe las conexiones entrantes y detecta automáticamente el protocolo del rastreador para interpretar correctamente los mensajes.

- El equipo usa GPRS para abrir una conexión al endpoint y puerto del servidor de Plaspy.
- Los informes de datos y posición se envían a 54.85.159.138 en el puerto 8888 (o al dominio d.plaspy.com si el dispositivo acepta nombres de host).
- El rastreador puede utilizar UDP o TCP según la configuración del equipo y el comportamiento de la red del operador.
- Plaspy detecta automáticamente el protocolo del rastreador y asigna el dispositivo a la visibilidad de su cuenta.
- Una vez que el reporte está activo, Plaspy muestra ubicación, estado y eventos para monitoreo y análisis.

## Flujo de configuración común

1. Acceda al método oficial de configuración del CanTrack TK103 (normalmente comandos SMS o herramienta del proveedor) y confirme la contraseña por defecto del equipo si es necesario.
2. Ingrese la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en la opción de servidor del dispositivo.
3. Establezca el puerto en 8888, tenga en cuenta que Plaspy utiliza el mismo puerto en todos los dispositivos.
4. Seleccione UDP o TCP si el rastreador le solicita elegir el tipo de transporte.
5. Configure el APN del operador y las credenciales APN opcionales para que el GPRS funcione.
6. Aplique o guarde la configuración y reinicie o cambie el dispositivo al modo GPRS/web si es necesario.
7. Valide que el dispositivo está reportando a Plaspy revisando la lista de dispositivos y la telemetría en Plaspy después de que el rastreador haya establecido la conexión.

## Comandos de ejemplo para la configuración

El TK103 suele configurarse enviando mensajes SMS al equipo. Los siguientes comandos son ejemplos públicos. La contraseña utilizada en estos ejemplos es la por defecto 123456; reemplácela si la contraseña de su equipo es diferente.

- Restaurar configuración de fábrica (reinicio opcional inicial)
```text
begin123456
```

- Establecer el APN del operador (reemplazar {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

- Establecer usuario y contraseña del APN (opcional; reemplace los marcadores si aplica)
```text
user {{apnu}} {{apnp}}
```
Explicación: {{apnu}} es el marcador para el usuario del APN y {{apnp}} para la contraseña del APN. Omita este comando si el APN no requiere credenciales.

- Establecer el ID del dispositivo usando los últimos 11 dígitos del IMEI
```text
numberXXXXXXXXXXX
```
Explicación: Reemplace las 11 X por el identificador formado con los últimos 11 dígitos del IMEI. El TK103 requiere el identificador en este formato específico.

- Configurar el servidor GPRS a Plaspy por IP y puerto
```text
ip54.85.159.138port8888
```
Explicación: Este comando establece la dirección del servidor y el puerto en Plaspy usando la IP pública y el puerto. Si su firmware acepta un nombre de host en lugar de la IP, puede usar d.plaspy.com donde esté soportado.

- Establecer el intervalo de actualización a 120 segundos
```text
at120sum0
```

- Cambiar el dispositivo al modo GPRS/web para comenzar a reportar
```text
web123456
```

Envíe los comandos en el orden mostrado cuando el orden sea importante (por ejemplo, configure el APN antes de cambiar al modo web/GPRS). Reemplace la contraseña por defecto 123456 en los comandos si la contraseña de su equipo ha sido modificada.

## Notas sobre la configuración

- Diferencias de firmware: la sintaxis de los comandos y los parámetros soportados pueden variar según la versión de firmware y la revisión de hardware; siga la sintaxis exacta que acepte su unidad.
- Configuración por SMS: el TK103 suele soportar configuración vía SMS; registre los comandos que envíe y las respuestas del rastreador.
- TCP versus UDP: elija UDP o TCP según la confiabilidad de la red y las opciones de transporte del dispositivo; Plaspy soporta ambos y detecta el protocolo automáticamente.
- Use el IMEI con cuidado: al derivar el ID del dispositivo desde el IMEI, verifique el orden de los dígitos para evitar problemas de registro.
- Documentación del fabricante: siempre contraste los comandos y procedimientos con la documentación de CanTrack para el TK103 para obtener la guía más actualizada y específica del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack TK103 con Plaspy ofrece a las organizaciones una forma sencilla de recopilar datos de ubicación y eventos de equipos que admiten configuración por SMS y GPRS. Apuntar el TK103 al servidor y puerto compartidos de Plaspy simplifica la integración y aprovecha la detección automática de protocolos de Plaspy para que los dispositivos aparezcan en la plataforma con mínima selección manual de protocolo.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device-specific setup details, command syntax, and firmware behavior with CanTrack at https://www.cantrackgps.com/ .
