---
slug: /oigo_telematics/ar_2cx/configuration
id: ar_2cx-configuration
sidebar_label: Configuration
title: Oigo Telematics - AR-2CX Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Oigo Telematics AR-2CX con ajustes de servidor Plaspy y comandos AT de ejemplo
keywords:
  - Configuración Oigo Telematics AR-2CX
  - Configurar AR-2CX Plaspy
  - Configuración servidor AR-2CX
  - Configuración rastreador GPS Oigo AR-2CX
  - Guía configuración serie AR
  - Configuración rastreador Plaspy
  - Configurar rastreador vehicular AR-2CX
  - Rastreo de flotas AR-2CX configuración
  - Guía comandos AT AR-2CX
  - Integración Oigo Telematics AR-2CX
---

# Oigo Telematics — Configuración del AR-2CX

Esta página documenta el contexto público de configuración para usar el Oigo Telematics AR-2CX con Plaspy. Reúne los ajustes de servidor compartidos de Plaspy y un conjunto representativo de comandos AT públicamente disponibles que se usan habitualmente para apuntar dispositivos de la serie AR a un servidor remoto. Utilice esta guía para comprender la información de servidor necesaria y los pasos prácticos típicos para lograr que el AR-2CX reporte a Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación y las herramientas de configuración del proveedor. El AR-2CX admite reporte de eventos y una instalación discreta en vehículos según describe Oigo Telematics; cuando está disponible, esta página incluye comandos AT de ejemplo tomados de contenido de configuración público para ilustrar el proceso de configurar el rastreador para comunicarse con Plaspy.

## Resumen de la configuración

El objetivo de configurar el AR-2CX para Plaspy es preparar el dispositivo para establecer un enlace de datos fiable con la plataforma, asegurar que reporte los eventos requeridos y confirmar su visibilidad en la interfaz de Plaspy. Los comandos AT de ejemplo que se muestran a continuación indican cómo puede configurarse el dispositivo para usar Plaspy como punto de reporte y ajustar parámetros comunes de envío.

- Apuntar el dispositivo al endpoint y puerto del servidor Plaspy para que los datos se enruten a su cuenta.
- Configurar el APN y los parámetros de conectividad necesarios para el reporte por datos celulares.
- Ajustar intervalos de reporte y umbrales de eventos para coincidir con las necesidades operativas y el uso de datos.
- Validar la conectividad y confirmar que el dispositivo aparece en Plaspy una vez aplicada la configuración.
- Opcionalmente aplicar ajustes de energía y reposo para adaptar la configuración a requisitos de batería o a la instalación en vehículo.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos previos habituales

- Una unidad AR-2CX con alimentación y accesible, y un instalador o técnico capaz de ejecutar comandos de configuración o usar el software del fabricante.
- Una SIM activa con datos móviles y los ajustes de APN correctos para la red del dispositivo si se utiliza conexión celular; los comandos de ejemplo incluyen un marcador de posición para el APN.
- Acceso a los métodos oficiales de configuración de Oigo Telematics, como la consola del proveedor, interfaz USB o serie, o herramientas de SMS/AT donde estén soportadas.
- Una cuenta en Plaspy y la información básica de registro del dispositivo para verificar que el rastreador aparezca en la plataforma tras la configuración.
- Cobertura de red estable y un entorno de prueba para validar que el equipo está reportando al endpoint de Plaspy.

## Cómo se conecta este rastreador a Plaspy

El AR-2CX se configura para enviar datos de ubicación y eventos al endpoint y puerto compartidos del servidor Plaspy, de modo que Plaspy pueda recibir la telemetría y mostrar el dispositivo en la plataforma. La detección automática de protocolo de Plaspy permite aceptar datos del rastreador sin que el usuario tenga que seleccionar manualmente el protocolo en la mayoría de los casos.

- El dispositivo apunta a d.plaspy.com o directamente a 54.85.159.138 como endpoint del servidor.
- Los datos se envían por el puerto 8888, que es el puerto único que Plaspy usa para todos los dispositivos soportados.
- El transporte puede ser UDP o TCP, según el soporte del dispositivo y la preferencia del instalador.
- Plaspy identifica automáticamente el protocolo del rastreador y procesa los reportes entrantes.
- Una vez conectado, el rastreador enviará eventos y actualizaciones posicionales a Plaspy para monitoreo y alertas.

## Flujo de trabajo típico de configuración

1. Acceda al método o software oficial de configuración de Oigo Telematics para el AR-2CX (por ejemplo, una consola de comandos AT, configuración por SMS o la herramienta del proveedor).
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 como servidor del dispositivo.
3. Configure el puerto del dispositivo a 8888, que es el puerto compartido que Plaspy utiliza para todos los equipos.
4. Seleccione UDP o TCP como transporte si el firmware requiere especificar el tipo de transporte.
5. Configure el APN y los parámetros de conectividad del dispositivo si utiliza datos celulares, y aplique o guarde la configuración.
6. Reinicie o haga un ciclo de alimentación del dispositivo si el firmware o el equipo lo requiere para aplicar los nuevos ajustes.
7. Valide que el rastreador reporte a Plaspy comprobando la visibilidad del dispositivo y los reportes recientes en su cuenta de Plaspy.

## Comandos de configuración de ejemplo

Los siguientes comandos AT de muestra se tomaron de contenido de configuración público de la serie AR y se muestran en el orden original cuando el orden puede ser importante. Estos comandos ilustran cómo se puede apuntar un AR-2CX a Plaspy y afinar sus reportes. Mantenga marcadores de posición como {{apn}} tal como se muestran y reemplácelos con el APN de su red al configurar el dispositivo.

- Conjunto completo de comandos de ejemplo

```text
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

Notas sobre los comandos anteriores:
- AT+XAPN incluye el marcador de posición {{apn}}. Reemplace {{apn}} con la cadena APN de su proveedor celular.
- AT+XIP establece la IP y el puerto del servidor Plaspy a 54.85.159.138 y 8888. También puede configurar el servidor a d.plaspy.com cuando el dispositivo soporta nombres de dominio.
- AT+XRST=1 y AT+XRST=2 son comandos de reinicio presentes al final del ejemplo. Trate los comandos de reinicio como pasos opcionales de reinicio inicial o final cuando el dispositivo o firmware lo requiera.

## Notas sobre la configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos AT disponibles y los parámetros esperados. Confirme siempre los comandos respecto a la versión de firmware del dispositivo que está utilizando.
- Cuando el dispositivo ofrece elección entre UDP y TCP, evalúe la fiabilidad de la red y el uso de datos; ambos transportes son compatibles con Plaspy en el puerto 8888.
- El marcador de posición del APN en los comandos de ejemplo debe reemplazarse por una cadena APN válida para su SIM y región.
- Dependiendo del firmware y las preferencias del instalador, pueden usarse herramientas del fabricante, aprovisionamiento por SMS o consolas directas por serie/USB.
- Mantenga un registro de las configuraciones originales antes de aplicar cambios masivos y pruebe la conectividad después de cada cambio significativo.

## Por qué usar Plaspy con esta configuración

Configurar el AR-2CX para que reporte a Plaspy brinda a los equipos de flotas y recuperación visibilidad centralizada de eventos y datos de ubicación. Al apuntar el dispositivo a Plaspy usando los ajustes y el puerto compartidos, las organizaciones pueden consolidar los reportes, aprovechar la detección automática de protocolos de Plaspy y gestionar alertas y monitoreo en flotas mixtas sin variar el servidor por dispositivo.

To learn more about Plaspy and how the platform handles device connectivity and fleet visibility visit https://www.plaspy.com. For the most current device specific commands, firmware details, and installation guidance confirm configuration methods and file updates on the manufacturer site https://www.oigotelematics.com/ as device procedures and firmware behavior can change over time.
