---
slug: /oigo_telematics/ar_2gm/configuration
id: ar_2gm-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-2GM Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Oigo Telematics AR-2GM compatible con Plaspy y pasos prácticos de instalación
keywords:
  - Oigo Telematics AR-2GM
  - AR-2GM configuración
  - AR-2GM configuración Plaspy
  - AR-2GM configuración servidor
  - Oigo AR-2GM instalación de rastreo
  - configuración de dispositivos Plaspy
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - rastreador para gestión de flotas
  - configuración serie AR
---

# Oigo Telematics - Configuración del AR-2GM

Esta página describe el contexto público de configuración para utilizar el rastreador Oigo Telematics AR-2GM con Plaspy. Se enfoca en los ajustes prácticos y los comandos de ejemplo de acceso público que preparan al AR-2GM para enviar datos de ubicación y eventos a Plaspy. Cuando hay ejemplos de comandos AT proporcionados por el fabricante, se incluyen como referencia para técnicos e integradores.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el dispositivo del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y la herramienta de configuración del proveedor que utilice. La secuencia de comandos AT incluida en esta guía debe considerarse material de referencia público que puede requerir adaptación para su dispositivo y firmware específicos.

## Resumen de configuración

El objetivo de la configuración es preparar el AR-2GM para una comunicación confiable con Plaspy y validar que el dispositivo reporte correctamente en la plataforma. El AR-2GM es un rastreador GSM discreto pensado para instalaciones en vehículos; la lista pública de comandos que sigue muestra cómo se suelen ajustar los parámetros para la conectividad al servidor y el comportamiento de reporte.

- Apuntar el dispositivo al endpoint compartido de Plaspy para que el rastreador envíe telemetría a Plaspy.
- Configurar el APN y los parámetros de la red del SIM instalado para asegurar conectividad móvil.
- Seleccionar y ajustar el tipo de transporte si el firmware del equipo lo requiere, y definir el puerto de Plaspy.
- Ajustar los intervalos de latido y reporte para que el dispositivo envíe posiciones y eventos con la frecuencia esperada.
- Aplicar y guardar los ajustes, y luego validar que el rastreador aparezca y reporte en Plaspy.
- Utilizar los ejemplos de comandos AT como punto de partida y adaptarlos cuando las herramientas o el firmware del fabricante requieran una sintaxis distinta.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- soporte de transporte UDP o TCP
- detección automática de protocolo en Plaspy

Nota: Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar UDP o TCP según corresponda.

## Requisitos habituales antes de la instalación

- Un AR-2GM con alimentación instalado en el vehículo o conectado a una fuente de alimentación de banco para configuración y pruebas.
- Una tarjeta SIM GSM funcional con datos habilitados y el APN correcto para su operador móvil.
- Acceso al método de configuración oficial de Oigo Telematics o a software del fabricante, o una interfaz serial/SMS que admita comandos AT.
- El IMEI del dispositivo o el identificador único para registrar y validar el rastreador en Plaspy.
- Una cuenta en Plaspy o acceso organizacional para confirmar que el dispositivo es visible después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El AR-2GM se configura para enviar actualizaciones de ubicación e informes de eventos al endpoint del servidor Plaspy, de modo que el dispositivo sea visible en la plataforma Plaspy. Plaspy recibe la telemetría en el endpoint compartido y pone los datos a disposición para monitoreo, alertas e informes.

- El rastreador se apunta a Plaspy usando el dominio del servidor o la IP y el puerto compartido.
- El dispositivo envía reportes periódicos y mensajes disparados por eventos a Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el dispositivo puede usar UDP o TCP.
- Los ajustes de heartbeat y keepalive mantienen la sesión del dispositivo y su disponibilidad en Plaspy.
- Informes de eventos como movimiento o activación de geocercas se reenvían a Plaspy para alertas e historial.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de Oigo Telematics para el AR-2GM (herramienta del fabricante, consola serial o configuración por SMS según soporte).
2. Introduzca la dirección del servidor Plaspy ya sea como dominio de servidor d.plaspy.com o como IP 54.85.159.138 en los ajustes del dispositivo.
3. Configure el puerto del servidor en 8888.
4. Elija UDP o TCP si su firmware requiere selección explícita del transporte.
5. Configure el APN y cualquier parámetro de SIM o red que su operador móvil requiera.
6. Aplique o guarde la configuración y reinicie el dispositivo si el procedimiento exige un reinicio.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta u organización en Plaspy.

Si utiliza la secuencia de comandos AT de ejemplo mostrada a continuación, ejecute esos comandos en el orden proporcionado o impórtelos mediante la herramienta del fabricante cuando el orden sea importante.

## Comandos de configuración de ejemplo

La secuencia pública de comandos AT del AR-2GM que aparece a continuación se ofrece como ejemplo extraído de contenido público del fabricante. Estos comandos AT se aplican habitualmente mediante la herramienta de configuración del fabricante, la interfaz serial o por SMS, según su equipo. Mantenga el orden cuando el orden de comandos sea importante.

Puntos clave:
- AT+XAPN incluye un marcador de posición {{apn}}. Reemplace {{apn}} por el APN de su operador móvil.
- AT+XIP especifica la IP y el puerto del servidor Plaspy.
- Los comandos finales AT+XRST son reinicios del dispositivo; considérelos opcionales o parte de la configuración inicial cuando corresponda.

- Secuencia de comandos AT de ejemplo

```
AT+XRFD
AT+XAPN=1"{{apn}}"
AT+XIP="54.85.159.138",8888
AT+XBUB=1
AT+XBUBE=3,30
AT+XCSW=600
AT+XDDI=1000
AT+XDHC=170,3
AT+XDMES=7,90
AT+XDMSD=50
AT+XDMSS=7,10
AT+XDMT=1
AT+XDRI=3600,300
AT+XDTS=0
AT+XDTT=0
AT+XGPL=3,60
AT+XGPLP=4,10
AT+XGPLT=300
AT+XHB=0
AT+XHBB=600
AT+XIA=1,300
AT+XIGM=2,5
AT+XIGN=3
AT+XIOD=A,1
AT+XIOD=B,0
AT+XIOD=C,1
AT+XIOD=D,0
AT+XIOE=A,0
AT+XIOE=B,0
AT+XIOE=C,2
AT+XIOE=D,0
AT+XIPC=1
AT+XKA=2,60
AT+XPRP=2
AT+XPST=1,900
AT+XPUP=1
AT+XPWL=11.7,30
AT+XPWLE=3
AT+XPWM=0,0,1,1
AT+XPWS=12.3,3600
AT+XPWSE=3
AT+XRLYE=3
AT+XRPA=0
AT+XRPF=1,1
AT+XRPM=0000FFFF
AT+XRPQ=3000
AT+XRPSF=126
AT+XRSTE=1
AT+XRSTP=2,14500
AT+XSMSD=""
AT+XSMSS=""
AT+XSPD=3,110,15
AT+XTA=1,30
AT+XVO=0
AT+XVTO=0
AT+XVTOE=5000
AT+XRST=1
AT+XRST=2
```

Marcadores de posición y notas:
- {{apn}} es un marcador de posición para la cadena APN de la red móvil requerida por la SIM instalada. Reemplácelo por el APN de su operador.
- El comando AT+XIP anterior apunta el dispositivo a Plaspy usando la IP pública y el puerto. Puede usar el dominio d.plaspy.com en herramientas del fabricante que acepten un dominio en lugar de una IP.
- Los comandos AT+XRST son operaciones de reinicio del dispositivo mostradas en la secuencia; utilícelas como parte de la configuración inicial o cuando el fabricante recomiende un reinicio para aplicar ajustes.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar nombres de comandos AT, formatos de parámetros o funciones soportadas. Verifique los comandos en el firmware de su dispositivo antes de aplicarlos.
- Seleccione UDP o TCP según su instalación y el soporte del firmware. Plaspy acepta ambos y detecta el protocolo automáticamente, pero el comportamiento en el dispositivo puede variar.
- Asegúrese de verificar el APN de la SIM, el plan de datos y el registro en la red antes de intentar registrar el dispositivo en Plaspy.
- Algunos pasos de configuración pueden realizarse por SMS o mediante una herramienta de escritorio del fabricante, dependiendo del firmware del AR-2GM y del kit de instalación proporcionado por Oigo Telematics.
- Mantenga una copia de seguridad de los ajustes actuales del dispositivo y un registro de los comandos que aplique para poder revertir cambios si es necesario.

## Por qué usar Plaspy con esta configuración

Configurar el AR-2GM para reportar a Plaspy ofrece una forma sencilla de incorporar rastreo discreto de vehículos a un flujo de trabajo de visibilidad y monitoreo de flotas. Con el AR-2GM apuntando al servidor Plaspy, las organizaciones obtienen acceso a seguimiento centralizado, alertas basadas en eventos y supervisión operativa necesaria para la gestión de flotas y procesos de recuperación.

Para obtener más información sobre Plaspy y cómo se integra esta configuración con la plataforma visite https://www.plaspy.com. Para detalles específicos de configuración por dispositivo, notas de firmware e instrucciones del fabricante verifique la documentación oficial de Oigo Telematics en https://www.oigotelematics.com/ ya que las especificaciones y métodos de configuración del fabricante pueden cambiar con el tiempo.
