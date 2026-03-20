---
slug: /istartek/vt100/configuration
id: vt100-configuration
sidebar_label: Configuration
title: iStartek - VT100 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar iStartek VT100 en Plaspy con ajustes de servidor, comandos SMS y flujo de trabajo para integración de flotas
keywords:
  - configuración iStartek VT100
  - instalación iStartek VT100
  - configuración VT100 Plaspy
  - configuración rastreador Plaspy
  - configuración rastreador GPS
  - configuración seguimiento vehicular
  - configuración servidor VT100
  - comandos SMS VT100
  - configuración seguimiento de flotas
  - integración VT100
---

# iStartek - Configuración del VT100

Esta página documenta el contexto público de configuración para usar el iStartek VT100 con la plataforma Plaspy. Resume los ajustes de servidor de Plaspy que debe aplicar, describe el flujo de trabajo típico de instalación y presenta los comandos SMS públicos del VT100 para configurar servidor y APN. Use esta guía para preparar un VT100 y que sea visible en Plaspy, manteniendo las prácticas de su instalador y las indicaciones del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker, por lo que puede apuntar el VT100 a un endpoint de Plaspy y esperar que la plataforma acepte los datos del equipo. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; verifique los detalles en la documentación oficial de iStartek cuando sea necesario.

## Resumen de configuración

Configurar el VT100 para Plaspy prepara el dispositivo para enviar datos GNSS y de estado de forma fiable a la plataforma. El VT100 permite configuración por SMS y por GPRS, lo que facilita a los instaladores establecer APN, endpoint de servidor, transporte e intervalos de reporte antes o después de la instalación física.

- Apunte el VT100 al endpoint del servidor Plaspy para que se suban posiciones y eventos.  
- Configure el APN del operador para permitir sesiones de datos GPRS que reporten a Plaspy.  
- Seleccione el transporte (UDP o TCP) y el puerto compartido de Plaspy para que los datos lleguen a la plataforma.  
- Ajuste los intervalos de reporte y verifique la conectividad para que los dispositivos aparezcan en los paneles de Plaspy.  
- Use comandos SMS o herramientas del proveedor para validar y actualizar parámetros antes del despliegue final.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888 (Plaspy usa el mismo puerto para todos los dispositivos soportados)  
- transport support for UDP or TCP (el VT100 puede configurarse usando UDP o TCP en el puerto 8888)  
- automatic protocol detection in Plaspy so the platform determines the tracker protocol after the device connects

## Requisitos habituales antes de la configuración

- Un dispositivo VT100 con alimentación y una SIM activa que soporte datos GPRS y gestión por SMS.  
- Acceso al método de configuración que utiliza iStartek para el VT100 (comandos SMS o software del proveedor).  
- El APN del operador móvil, usuario y contraseña si su SIM los requiere; tenga listos los marcadores [apn], [apnu] y [apnp].  
- Una cuenta de Plaspy o una flota objetivo configurada para aceptar el dispositivo una vez que reporte al servidor Plaspy.  
- Conocimientos básicos para enviar comandos SMS al número de la SIM del IMEI del equipo o acceso a la herramienta de instalador proporcionada por iStartek.  

## Cómo se conecta este tracker a Plaspy

El VT100 envía coordenadas GNSS y eventos del dispositivo a través de la red celular al endpoint y puerto del servidor Plaspy. Una vez que el VT100 está configurado para apuntar a d.plaspy.com o a la IP de Plaspy y tiene el transporte y APN correctos, el equipo iniciará sesiones GPRS para subir posiciones y eventos a Plaspy.

- Los datos se envían al endpoint compartido de Plaspy usando el puerto 8888.  
- El tracker puede configurarse para usar UDP o TCP como transporte hacia el servidor Plaspy.  
- Plaspy detecta automáticamente el protocolo del tracker después de que el dispositivo se conecta al servidor.  
- Eventos y telemetría como ubicación, movimiento y estado se reenvían a Plaspy para mapas en tiempo real, alertas e informes.  
- Es necesario un APN correcto y registro en la red para que el VT100 establezca una sesión de datos con el servidor Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de iStartek para el VT100 (gestión por SMS o herramienta del proveedor).  
2. Configure el APN del equipo usando los valores del operador (use [apn] y opcionalmente [apnu] y [apnp]).  
3. Ingrese el servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.  
4. Establezca el puerto 8888 y elija UDP o TCP si el VT100 requiere seleccionar el transporte.  
5. Aplique o guarde la configuración en el dispositivo y, si es necesario, reinicie el equipo para activar los ajustes.  
6. Valide que el dispositivo reporte a Plaspy confirmando que aparece en su cuenta de Plaspy o usando el comando de consulta PARAM.  
7. Ajuste el intervalo de reporte y otros parámetros según las necesidades de la flota.

## Comandos de ejemplo para la configuración

El VT100 soporta configuración mediante comandos SMS. A continuación están los comandos SMS públicos para este modelo. Envíe cada comando como un SMS separado al número de la SIM del dispositivo. Preserve los marcadores como [apn], [apnu] y [apnp] cuando se requieran.

Optional factory reset (use only when needed or during initial setup):
```
FACTORY#
```

Set the time zone to UTC offset 0:
```
GMT,E,0#
```

Set the operator APN. Replace [apn] with the carrier APN. If your operator requires APN username and password, include [apnu] and [apnp] in order:
```
APN,[apn]# 
```
Or with username and password:
```
APN,[apn],[apnu],[apnp]#
```
(Explanation: [apn] is the network APN string. [apnu] and [apnp] are optional APN username and password fields.)

Set the GPRS server to Plaspy by domain (recommended) or by IP. Both options use port 8888:
```
SERVER,1,d.plaspy.com,8888#
```
Or set by IP:
```
SERVER,0,54.85.159.138,8888#
```
Note: The first parameter selects server slot or mode per VT100 SMS command convention.

Set the periodic upload interval to every 60 seconds:
```
TIMER,60#
```

Check current parameter settings:
```
PARAM#
```

Siga las indicaciones de iStartek sobre tiempos y formato de los comandos SMS. Algunas versiones de firmware pueden requerir comandos en un orden específico o una confirmación de respuesta por parte del dispositivo.

## Notas de configuración

- El VT100 soporta configuración por SMS como se muestra, pero algunos instaladores prefieren la herramienta de configuración del proveedor cuando está disponible. Use el método que soporte su firmware.  
- Las versiones de firmware y las variantes regionales de hardware pueden alterar el comportamiento de los comandos o los parámetros disponibles; verifique la sintaxis si el dispositivo no responde como se espera.  
- Al seleccionar el transporte, UDP se usa comúnmente por su menor sobrecarga para telemetría, mientras que TCP puede preferirse cuando se desea entrega garantizada; el VT100 puede permitir elegir cualquiera en el puerto 8888.  
- Use el dominio d.plaspy.com cuando sea posible; usar la IP de Plaspy es una alternativa pero el dominio se prefiere para futuros cambios de servidor.  
- Después de aplicar los ajustes, valide la conectividad con PARAM# y confirme que el dispositivo aparece en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el VT100 para reportar a Plaspy brinda a los equipos operativos visibilidad en tiempo real de la ubicación de los vehículos, su estado y las alertas de eventos usando un único endpoint compartido. Con el VT100 apuntando a Plaspy y un APN correctamente configurado, las organizaciones pueden integrar flujos de ubicación y notificaciones de eventos en paneles, flujos de geocercas e informes de flota para mejorar la asignación de recursos y la seguridad.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific configuration steps, firmware notes, and manufacturer details, verify information on the official iStartek site at https://istartek.com/ as methods and firmware behavior may change over time.
