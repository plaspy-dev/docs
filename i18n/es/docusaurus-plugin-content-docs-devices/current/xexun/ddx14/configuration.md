---
slug: /xexun/ddx14/configuration
id: ddx14-configuration
sidebar_label: Configuration
title: Xexun - DDX14 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador de tobillo Xexun DDX14 a Plaspy mediante ajustes de servidor estándar y comandos SMS
keywords:
  - Configuración Xexun DDX14
  - Configuración DDX14 Plaspy
  - Configuración servidor Xexun DDX14
  - Configuración rastreador GPS DDX14
  - Configuración dispositivo Plaspy
  - Configuración GPS pulsera tobillo
  - Configuración rastreador GPS a prueba de manipulación
  - Comandos SMS DDX14
  - Configuración APN rastreador GPS
  - Integración DDX14 Plaspy
---

# Xexun - Configuración del DDX14

Esta página describe el contexto público de configuración para usar el rastreador de tobillo Xexun DDX14 con Plaspy. Se concentra en los ajustes de servidor y de red que Plaspy requiere, los comandos SMS publicados para el DDX14 y el flujo práctico que puede seguir para poner el dispositivo en línea en la plataforma Plaspy.

Plaspy utiliza un único endpoint y puerto de servidor compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que esta guía combina los comandos SMS publicados del DDX14 con los ajustes de servidor de Plaspy para mostrar un camino práctico de puesta en marcha.

## Resumen de la configuración

El proceso prepara el DDX14 para comunicarse de forma fiable con Plaspy y para reportar ubicación, alertas de manipulación y telemetría. Mediante los comandos SMS publicados, usted configura los datos APN de la red, apunta el dispositivo al servidor de Plaspy y ajusta los intervalos de reporte para que el rastreador aparezca y se actualice en la plataforma Plaspy.

- Configure el APN y el modo GPRS del dispositivo para que el rastreador use datos móviles y alcance Plaspy.
- Apunte el rastreador al endpoint del servidor Plaspy y establezca el puerto requerido.
- Ajuste el intervalo de reporte y otros parámetros de telemetría según sus necesidades de monitoreo.
- Valide la conectividad para que el dispositivo informe correctamente a Plaspy y genere alertas.
- Opcionalmente, restaure la configuración de fábrica como paso inicial cuando el instalador lo requiera.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol so no manual protocol mapping is required

## Requisitos habituales antes de la configuración

- Una tarjeta SIM activa con un plan de datos y el APN correcto del operador móvil.  
- El dispositivo con alimentación y dentro de cobertura celular para la configuración inicial y las pruebas.  
- Acceso a un teléfono o herramienta SMS capaz de enviar comandos de configuración al DDX14.  
- La contraseña del dispositivo DDX14 (el valor predeterminado publicado en estos comandos es 123456).  
- Documentación del fabricante o instrucciones del instalador para detalles específicos del modelo y notas de firmware.  

## Cómo se conecta este rastreador a Plaspy

El DDX14 envía paquetes de ubicación y alarma a través de redes celulares al endpoint y puerto compartidos del servidor Plaspy. Cuando se configura con los ajustes de servidor de Plaspy, la conexión GPRS del dispositivo se utiliza para transmitir ubicación en tiempo real, alarmas por manipulación y datos almacenados en modo offline una vez que se recupera la conectividad.

- El rastreador apunta al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) y al puerto 8888.  
- Los datos se envían por redes celulares usando GPRS/datos paquetizados al servidor y puerto configurados.  
- Plaspy identifica automáticamente el protocolo DDX14 a partir de los paquetes entrantes, por lo que la plataforma interpreta la telemetría y las alarmas sin necesidad de registrar protocolos por dispositivo.  
- Los eventos de manipulación y alarmas que reporte el DDX14 son ingeridos por Plaspy para alertas, historial y flujos de trabajo de casos.  
- Las rutas y datos almacenados sin conexión se retransmiten a Plaspy cuando se restaura la conectividad de red.

## Flujo típico de configuración

1. Consulte el método oficial de configuración del fabricante o la documentación de instalador para el DDX14 (los comandos SMS son el método publicado para este modelo).  
2. Configure el APN del dispositivo usando la cadena APN del operador para que pueda usar datos móviles.  
3. Ingrese el servidor Plaspy usando d.plaspy.com (si el dispositivo acepta nombres de dominio) o 54.85.159.138 y establezca el puerto 8888.  
4. Seleccione UDP o TCP si el dispositivo requiere que se elija un protocolo de transporte. Plaspy acepta ambos en el puerto 8888.  
5. Aplique o guarde la configuración en el dispositivo mediante los comandos SMS publicados o la herramienta del fabricante.  
6. Reinicie o corte la alimentación del dispositivo si el flujo del fabricante lo exige para aplicar los cambios.  
7. Valide que el dispositivo informe a Plaspy revisando la lista de dispositivos y la telemetría en la plataforma Plaspy y confirmando actualizaciones de ubicación y alarmas.

## Ejemplos de comandos de configuración

El DDX14 admite configuración por SMS. Los siguientes comandos son los comandos SMS públicos publicados en el orden que presenta la documentación del dispositivo. La contraseña predeterminada mostrada en estos ejemplos es 123456. Envíe cada línea como un SMS al número del dispositivo. Preserve los marcadores de posición cuando los reemplace por los datos de su operador.

- Optional initial factory reset (use only if you need to restore defaults; this may erase custom settings):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your SIM operator APN):
```text
apn123456 {{apn}}
```

- Set the APN username if required by your operator (replace {{apnu}} with APN username). Use only if your operator requires a username:
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required by your operator (replace {{apnp}} with APN password). Use only if your operator requires a password:
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server IP and port to Plaspy. This example uses the Plaspy server IP and port published by Plaspy:
```text
adminip123456 54.85.159.138 8888
```

- Set the GPRS mode (use the device's published command to enable data reporting):
```text
gprsmode123456
```

- Set the reporting interval to 60 seconds (example command as published):
```text
t060s***n123456
```

Notas sobre marcadores de posición y valores predeterminados
- {{apn}}, {{apnu}} y {{apnp}} son marcadores de posición para el APN del operador móvil, el nombre de usuario APN y la contraseña APN. Reemplácelos por los valores proporcionados por su operador celular.  
- La contraseña numérica 123456 en estos ejemplos es la contraseña predeterminada publicada del dispositivo. Si su despliegue usa una contraseña distinta, sustitúyala en consecuencia.  
- Si el dispositivo acepta un nombre de dominio en lugar de una IP para el servidor, puede apuntarlo a d.plaspy.com donde esté soportado. Si no, use la dirección IP 54.85.159.138 como se muestra arriba.

## Notas de configuración

- Las versiones de firmware del fabricante o las variantes de hardware regionales pueden cambiar los comandos disponibles o la sintaxis; siempre verifique los comandos con el manual del dispositivo o las notas de la versión.  
- La configuración por SMS es el método publicado para el DDX14; los flujos de instalador que utilizan herramientas USB o software propietario pueden ofrecer opciones alternativas.  
- Cuando el dispositivo requiera seleccionar un transporte, elija UDP o TCP según su red y política; Plaspy acepta ambos en el puerto 8888 y detectará el protocolo automáticamente.  
- Utilice la contraseña predeterminada publicada solo para la configuración inicial y cámbiela si su política operativa exige credenciales diferentes.  
- Confirme las credenciales APN con el proveedor de la SIM antes de configurar el dispositivo para asegurar la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Usar el DDX14 con Plaspy ofrece visibilidad centralizada de la ubicación, manipulación y telemetría de proximidad de un rastreador de tobillo diseñado para este fin. Para supervisión, salud o monitoreo en industrias especiales, Plaspy ingiere la telemetría del DDX14 para presentar seguimiento en tiempo real, enrutamiento de alarmas, reproducción histórica y reglas configurables de geocerca o políticas en una única vista operativa.

To learn more about Plaspy and supported device integration options visit https://www.plaspy.com. Device specific configuration commands, firmware behavior, and manufacturer procedures can change over time so verify the latest setup documentation and firmware details with the manufacturer at https://www.xexun.com/
