---
slug: /concox/vl808/configuration
id: vl808-configuration
sidebar_label: Configuration
title: Concox - VL808 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Concox VL808 y apuntarlo a los servidores de Plaspy para rastreo de flotas fiable
keywords:
  - Configuración Concox VL808
  - Instalación Concox VL808
  - Configuración servidor VL808
  - Configuración VL808 Plaspy
  - Configuración rastreador Concox
  - Configuración rastreador GPS vehicular
  - Configuración seguimiento de flotas
  - Rastreador GNSS Plaspy
  - Configuración rastreador LTE
  - Comandos SMS VL808
---

# Concox - Configuración del VL808

Esta página documenta el contexto público de configuración para usar el Concox VL808 con Plaspy. Explica los ajustes compartidos del servidor Plaspy y presenta los comandos SMS públicos y los flujos de trabajo prácticos provistos por el fabricante que normalmente se usan para apuntar el VL808 a Plaspy y así permitir el rastreo en tiempo real y la ingestión de telemetría.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VL808 admite configuración por SMS y GPRS; los comandos que siguen reflejan los ajustes públicos de uso común para conectar el dispositivo a Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el VL808 para que se comunique de manera fiable con Plaspy y así los posicionamientos GNSS, la telemetría y los eventos aparezcan en la plataforma. Esto incluye configurar el APN celular, apuntar el servidor GPRS a Plaspy, elegir el protocolo de transporte si es necesario y verificar los reportes.

- Configure el APN del dispositivo y habilite los datos móviles para que el VL808 pueda enviar posición y telemetría a Plaspy.
- Apunte el rastreador al endpoint compartido de Plaspy y confirme que el transporte y el puerto estén establecidos.
- Establezca un intervalo de reporte razonable que equilibre visibilidad en tiempo real y consumo de datos.
- Active el modo GPRS y guarde los ajustes para que el dispositivo pueda transmitir de forma autónoma.
- Valide la configuración con el comando de verificación del dispositivo y confirme que la unidad aparezca en Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol  
- All devices in Plaspy use the same port for data collection

## Requisitos previos

- Una unidad VL808 con alimentación instalada o en banco de pruebas con acceso a su interfaz de configuración.
- Una SIM celular activa con datos habilitados y el APN correcto del operador.
- Capacidad para enviar y recibir SMS al rastreador si va a usar comandos SMS para la configuración.
- Acceso al método de configuración oficial del fabricante o al software de referencia.
- Anotar el IMEI y la identificación del dispositivo para poder confirmar la unidad correcta en Plaspy después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El VL808 se configura para reportar posiciones GNSS, telemetría y datos de eventos al endpoint y puerto compartidos de Plaspy. Configurar el rastreador convierte la unidad en una fuente de datos direccionable dentro de Plaspy, permitiendo que mapas, alertas e informes reflejen el estado en vivo.

- El rastreador envía paquetes de datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según los ajustes del dispositivo y la preferencia del instalador.
- Plaspy examina los paquetes entrantes y detecta automáticamente el protocolo usado por el rastreador.
- Las subidas regulares de posición y los reportes de eventos permiten a Plaspy mantener visibilidad en tiempo real y un historial.
- La verificación de la conexión exitosa se realiza comprobando el dispositivo en Plaspy y usando el comando de verificación del equipo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial del fabricante o al software, o prepárese para enviar comandos SMS según lo soporte el VL808.
2. Configure el APN del dispositivo con el valor de su operador para permitir datos GPRS.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 y establezca el puerto en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte para el reporte GPRS.
5. Aplique o guarde la configuración y habilite el modo GPRS para que el dispositivo comience a transmitir datos.
6. Reinicie o ciclo de energía el dispositivo si el fabricante lo requiere para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy comprobando la unidad en la plataforma Plaspy y emitiendo el comando de verificación del dispositivo.

## Comandos de configuración de ejemplo

El VL808 puede configurarse mediante el envío de comandos SMS. Los siguientes comandos SMS públicos son provistos por el fabricante y conservan los marcadores de posición cuando procede. Mantenga el orden al realizar una configuración inicial.

- Optional initial factory reset (use only when needed)
```text
FACTORY#
```

- Set the time zone to UTC+0
```text
GMT,E,0#
```

- Set the operator APN
Note: replace [apn] with your operator APN. If your APN requires username and password, include [apnu] and [apnp] respectively.
```text
APN,[apn]{{apnu ? ',' + [apnu] : ''}}{{apnp ? ',' + [apnp] : ''}}#
```
(Manufacturer shorthand: APN,[apn],[apnu],[apnp]# — include the optional fields as needed)

- Set the GPRS server using domain on Plaspy
```text
SERVER,1,d.plaspy.com,8888,0#
```

- Or set the GPRS server using Plaspy IP
```text
SERVER,0,54.85.159.138,8888,0#
```

- Set the upload interval to every 60 seconds
```text
TIMER,60#
```
- Alternative timer format
```text
TIMER,60,60#
```

- Enable GPRS mode
```text
GPRSON,1#
```

- Verify current GPRS and server settings
```text
GPRSSET#
```

Note on placeholders: [apn] is the mobile network APN string provided by your SIM operator. [apnu] and [apnp] are optional APN username and password fields sometimes required by certain operators.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis y el comportamiento de los comandos; confirme siempre los comandos con la documentación del fabricante para su unidad.
- La configuración por SMS está soportada en el VL808 como se muestra, pero también pueden utilizarse herramientas de PC o software OEM según la preferencia del instalador.
- Elija UDP o TCP según las condiciones de red y los requisitos del instalador; Plaspy aceptará cualquiera en el puerto 8888 y detectará automáticamente el protocolo.
- Use el comando de verificación GPRSSET# para confirmar que el dispositivo ha guardado el servidor GPRS y los ajustes de APN.
- Al usar el comando SERVER puede especificar tanto el dominio d.plaspy.com como la IP 54.85.159.138, ambos en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Configurar el Concox VL808 para que reporte a Plaspy ofrece una forma directa de integrar GNSS y telemetría robustos de nivel vehicular en una plataforma centralizada de visibilidad de flotas. Para organizaciones que requieren actualizaciones de posición constantes, eventos de acelerómetro y monitoreo de estados de entradas/salidas, apuntar el VL808 a Plaspy asegura que los datos fluyan hacia mapas en vivo, alertas e informes utilizados para supervisión operativa.

To learn more about Plaspy and how it supports devices like the VL808 visit https://www.plaspy.com. For the latest device specific command syntax, firmware notes, and installation instructions verify details with the manufacturer at https://www.iconcox.com/ as device configuration methods and firmware behavior can change over time.
