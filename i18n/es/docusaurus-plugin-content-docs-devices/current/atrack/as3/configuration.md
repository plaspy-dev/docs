---
slug: /atrack/as3/configuration
id: as3-configuration
sidebar_label: Configuration
title: ATrack - AS3 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el ATrack AS3 con Plaspy, incluyendo ajustes de servidor, opciones de transporte y comandos de ejemplo
keywords:
  - Configuración ATrack AS3
  - Instalación ATrack AS3
  - Rastreador GPS AS3
  - Configuración Plaspy
  - Configuración servidor AS3
  - Configuración GPRS AS3
  - Plataforma seguimiento AS3
  - seguimiento vehicular AS3
  - Configuración protocolo AS3
  - localizador de activos AS3
---

# ATrack - Configuración AS3

Esta página documenta el contexto público de configuración para usar el rastreador ATrack AS3 con Plaspy. Resume los ajustes de servidor de Plaspy que deberá emplear, los prerrequisitos típicos para la puesta en marcha y los pasos prácticos y comandos de ejemplo que aparecen en contenidos públicos de configuración del AS3. Use esta guía para preparar su dispositivo para reportar a Plaspy y validar la conectividad antes de desplegar el rastreador en producción.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Los ejemplos en esta página incluyen comandos públicos del ATrack AS3 cuando están disponibles; siempre confirme la sintaxis y el comportamiento específicos del dispositivo contra la documentación oficial del fabricante.

## Resumen de configuración

Este proceso prepara el AS3 para enviar datos de ubicación y eventos a la plataforma Plaspy usando el punto final y puerto comunes de Plaspy. Los ejemplos públicos de scripts de configuración del AS3 muestran cómo habilitar el envío de eventos, fijar intervalos de rastreo, definir el formato de mensaje y apuntar el rastreador al servidor de Plaspy para comunicaciones GPRS.

- Configure el dispositivo para reportar al punto final y puerto del servidor Plaspy para que la plataforma reciba telemetría.
- Habilite el reporte de eventos ACC o entradas y la lógica de alarma requerida para que los eventos aparezcan en Plaspy.
- Establezca el intervalo periódico de rastreo para controlar con qué frecuencia se envían actualizaciones de posición a Plaspy.
- Configure el formato de mensaje (por ejemplo, el modo binario del AS3) para que coincida con lo que Plaspy espera para la detección de protocolo.
- Valide el APN/GPRS y la conectividad de red para que el dispositivo pueda establecer una sesión de datos con el servidor de Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (device may be configured with either)  
- Plaspy automatically detects the tracker protocol and uses the same port for all devices

## Requisitos típicos antes de la configuración

- Un ATrack AS3 alimentado y accesible con una SIM válida y un plan de datos activo para redes GPRS/HSPA/CDMA si va a usar datos móviles.
- Acceso al método de configuración del fabricante para el AS3 (herramienta serial, USB/adapter, comandos SMS o la utilidad de configuración del proveedor).
- Conocimiento del APN correcto, usuario APN y contraseña APN para la tarjeta SIM; en los comandos de ejemplo se usan marcadores de posición.
- Confirmación de que el firmware soporta la sintaxis AT mostrada en los ejemplos y si el dispositivo requiere nombres de dominio o direcciones IP crudas para la configuración del servidor.
- Una cuenta en Plaspy o acceso a la plataforma para verificar que el dispositivo aparece y reporta una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El AS3 envía datos de posición y eventos al punto final y puerto del servidor Plaspy para que los dispositivos sean visibles y rastreables en la plataforma. Plaspy recibe la telemetría e identifica automáticamente el protocolo del dispositivo para interpretar correctamente los mensajes.

- El dispositivo se configura para enviar datos GPRS al IP o dominio del servidor Plaspy y puerto 8888.
- Los reportes periódicos de posición se envían según el intervalo de rastreo configurado para que Plaspy pueda mostrar movimiento e historial.
- Se pueden habilitar eventos de entrada y movimiento, como ACC encendido/apagado, para que estos eventos se reenvíen a Plaspy y disparen alertas o automatizaciones.
- El formato de mensaje binario o específico del protocolo se configura en el dispositivo, y Plaspy detecta el protocolo automáticamente para parsear los datos entrantes.
- La conectividad y el reporte del dispositivo se validan comprobando que la telemetría llega al punto final de Plaspy y aparece en la plataforma.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software para el ATrack AS3 (consola serial, herramienta de configuración o interfaz de comandos SMS) según lo documentado por ATrack.
2. Ingrese el destino del servidor Plaspy (use d.plaspy.com o la IP 54.85.159.138 según lo soporte su dispositivo y su preferencia).
3. Establezca el puerto del servidor en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Elija UDP o TCP en la configuración del dispositivo si requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y, si el equipo lo solicita, reinicie el rastreador para activar los nuevos ajustes.
6. Valide que el dispositivo reporte a Plaspy verificando el estado con el comando de verificación del dispositivo y confirmando que el equipo aparece en Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos públicos del AS3 aparecen en contenidos de ejemplo de ATrack. Se muestran en orden y conservan los marcadores de posición usados para la configuración del APN. Mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} y reemplácelos por su APN, usuario y contraseña del operador según corresponda.

- Habilitar reporte de evento de entrada ACC y acciones relacionadas
```text
AT$INPT=0,7
AT$REPT=101,1,"%IN0","1",0,1
AT$REPT=102,1,"%IN0","0",0,1
AT$RACT=1,3,2
```

- Establecer intervalo de rastreo a 60 segundos
```text
AT$TRAC=1,60,,,,,2
```

- Fijar formato de mensaje binario
```text
AT$FORM=1,@P,0,""
```

- Configurar GPRS, APN y servidor con la IP y puerto de Plaspy
```text
AT$GPRS=1,"{{apn}}","{{apnu}}","{{apnp}}","54.85.159.138",8888,1,3,30,0,0
```
Nota: {{apn}} es el APN de la red móvil, {{apnu}} es el usuario APN y {{apnp}} es la contraseña APN. Reemplace estos marcadores de posición con los valores de su proveedor. Plaspy también publica el dominio d.plaspy.com; si su firmware acepta nombres de dominio puede optar por usar d.plaspy.com en lugar de la IP tras confirmarlo con la documentación de ATrack.

- Comprobar estado del dispositivo
```text
AT$INFO=?
```

## Notas de configuración

- Las diferencias de firmware entre versiones del AS3 pueden cambiar la sintaxis de los comandos AT y los parámetros soportados; siempre verifique los comandos contra las notas de la versión de firmware específica.
- Elija UDP o TCP según la instalación y el comportamiento de la red; ambos transportes son soportados para la comunicación con Plaspy, pero las características de fiabilidad pueden variar según la red.
- Mantenga los marcadores de APN intactos en los comandos de ejemplo y complételos con los valores del operador antes de aplicar la configuración.
- Si su dispositivo soporta configuración vía SMS, los comandos pueden enviarse por SMS en lugar de usar una herramienta de configuración; consulte la guía de ATrack para el formato SMS y límites de longitud.
- Los cambios en el formato binario o del protocolo pueden afectar cómo Plaspy interpreta los mensajes; dado que Plaspy detecta el protocolo automáticamente, asegúrese de que el formato seleccionado en el dispositivo sea coherente con los protocolos habitualmente soportados.

## Por qué usar Plaspy con esta configuración

Usar el ATrack AS3 con Plaspy permite a las organizaciones centralizar el reporte de ubicación y eventos de dispositivos AS3 en una única plataforma para visibilidad y control operativo. Con el punto final y puerto de Plaspy configurados, el AS3 puede enviar actualizaciones periódicas de posición y eventos de entrada para que flotas, remolques o activos móviles sean monitoreados y gestionados de forma consistente en los distintos despliegues.

To learn more about Plaspy visit https://www.plaspy.com and for the most current ATrack device details check the official manufacturer site https://www.atrack.com.tw/. Manufacturer specifications, firmware behavior, and configuration methods can change over time so verify the latest device-specific instructions on the official ATrack resources.
