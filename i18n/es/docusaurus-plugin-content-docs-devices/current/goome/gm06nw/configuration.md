---
slug: /goome/gm06nw/configuration
id: gm06nw-configuration
sidebar_label: Configuration
title: Goome - GM06NW Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Goome GM06NW y conectarlo a Plaspy con ajustes de servidor y ejemplos de SMS
keywords:
  - Configuración Goome GM06NW
  - Configuración GM06NW
  - Configurar GM06NW en Plaspy
  - Configuración servidor GM06NW
  - Configuración rastreador GPS Goome
  - Comandos SMS Goome GM06NW
  - Configuración dispositivo Plaspy
  - Configuración rastreo vehicular
  - Rastreo de flotas Goome
  - Ajustes servidor rastreador GPS
---

# Goome - Configuración GM06NW

Esta página recopila la información pública de configuración para usar el rastreador Goome GM06NW con Plaspy. Aquí encontrará los ajustes de servidor prácticos, comandos SMS y orientación sobre el flujo de trabajo necesarios para preparar el dispositivo y que reporte a Plaspy, además de referencias a la documentación del fabricante para detalles específicos del equipo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que considere los comandos y ejemplos a continuación como orientación práctica pública y no como un manual exhaustivo del dispositivo.

## Visión general de la configuración

El Goome GM06NW es un rastreador GPS con conectividad GSM y varias funciones orientadas a vehículos. El proceso de configuración prepara el equipo para enviar datos de ubicación y estado a Plaspy estableciendo parámetros de red, el servidor de reporte y los intervalos de envío.

- Configure el APN del dispositivo para que pueda usar la red móvil para datos GPRS.  
- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos de posición y eventos lleguen a la plataforma.  
- Elija transporte UDP o TCP y confirme que el dispositivo use el puerto 8888, el puerto compartido de Plaspy.  
- Establezca intervalos de actualización y alarmas para que el rastreador reporte con la cadencia requerida.  
- Verifique la configuración y el estado del dispositivo con los comandos SMS incorporados.  
- Confirme que el dispositivo aparezca y reporte correctamente en Plaspy después de la configuración.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support: UDP or TCP (device may be configured for either)  
- Plaspy automatically detects the tracker protocol

Estos valores son los ajustes públicos del endpoint de Plaspy que el GM06NW debe usar para enviar datos a la plataforma Plaspy.

## Requisitos típicos antes de la instalación

- Una SIM GSM válida con datos habilitados y las credenciales APN correctas del operador móvil.  
- Capacidad para enviar SMS al dispositivo para configurar mediante mensajes, si va a usar comandos SMS.  
- Fuente de alimentación conectada al rastreador y el equipo en modo operativo normal.  
- Acceso a las instrucciones oficiales de Goome o a las herramientas del instalador como referencia.  
- Una cuenta de Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta.  
- Conocimientos básicos sobre si su dispositivo acepta nombres de dominio o requiere una dirección IP para el ajuste del servidor.

## Cómo se conecta este rastreador a Plaspy

El GM06NW se configura para reportar ubicación y estado al endpoint y puerto compartidos de Plaspy. Una vez que el acceso a la red y los ajustes de servidor están correctos, el dispositivo sube periódicamente datos GPS y eventos para que Plaspy muestre ubicaciones, alarmas e historial.

- El rastreador usa GPRS a través de la red del operador móvil con las credenciales APN configuradas.  
- Envía paquetes de posición y eventos al endpoint del servidor Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- El transporte puede configurarse en UDP o TCP según las opciones del equipo y la preferencia del instalador.  
- Plaspy detecta automáticamente el protocolo del dispositivo y acepta paquetes en el puerto compartido.  
- Tras una configuración exitosa, el dispositivo queda visible en Plaspy para monitoreo en tiempo real y reproducción de historial.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Goome para su modelo GM06NW, normalmente mediante comandos SMS o la herramienta de configuración del fabricante.  
2. Introduzca el servidor de Plaspy especificando el dominio d.plaspy.com o la IP 54.85.159.138 según lo que acepte su dispositivo.  
3. Establezca el puerto del servidor en 8888. Plaspy utiliza el mismo puerto para todos los dispositivos soportados.  
4. Seleccione el modo de transporte UDP o TCP si el dispositivo requiere una elección de transporte.  
5. Aplique o guarde la configuración en el equipo usando el método del fabricante. Para configuraciones por SMS esto implica enviar los comandos SMS correspondientes.  
6. Reinicie el dispositivo si las instrucciones del fabricante lo requieren o después de aplicar cambios de red/servidor.  
7. Valide que el dispositivo reporte a Plaspy comprobando el estado en la plataforma Plaspy y usando cualquier comando SMS de verificación disponible.

## Ejemplos de comandos de configuración

El Goome GM06NW acepta comandos SMS para la configuración. Los siguientes comandos son ejemplos públicos y conservan los marcadores de posición cuando corresponde. Envíe estos SMS desde un número autorizado según las instrucciones del dispositivo.

1. Restablecimiento opcional de fábrica para instalaciones iniciales o cuando lo indique el instalador. Use esto solo cuando sea necesario.
```text
FACTORY#
```

2. Configure el APN del operador. Reemplace [apn] con el APN de su operador. Si su operador requiere nombre de usuario y contraseña del APN incluya [apnu] y [apnp] como se muestra. Los campos de usuario y contraseña son opcionales según el operador.
```text
APN,[apn],[apnu],[apnp]#
```
Si no se requiere usuario ni contraseña, use:
```text
APN,[apn]#
```

3. Configure el servidor GPRS con la dirección IP y el puerto de Plaspy tal como se muestra en la guía pública. Este ejemplo usa la IP y el puerto publicados por Plaspy.
```text
GPRSSET,54.85.159.138,8888#
```
Si el firmware del rastreador acepta un nombre de dominio en lugar de una IP, puede sustituir por el dominio del servidor:
```text
GPRSSET,d.plaspy.com,8888#
```

4. Configure el intervalo de actualización de ubicación a 60 segundos como ejemplo.
```text
TIMER,60#
```

Comandos de verificación incluidos en las instrucciones públicas del dispositivo:

- Para comprobar la configuración actual del servidor y GPRS:
```text
GPRSSET#
```

- Para verificar el estado del dispositivo:
```text
STATUS#
```

Mantenga el orden de comandos cuando realice una configuración inicial: restablecimiento de fábrica opcional, configurar APN, establecer el servidor GPRS de Plaspy, ajustar el temporizador y finalmente verificar ajustes y estado.

## Notas de configuración

- La configuración por SMS está soportada por los comandos públicos del GM06NW mostrados arriba. Asegúrese de enviar SMS desde un número autorizado si el dispositivo aplica bloqueo por número.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de comandos o las funciones soportadas. Confirme siempre con la documentación de Goome para la revisión concreta de su dispositivo.  
- Elija UDP o TCP según la preferencia del instalador y la fiabilidad de la red; Plaspy acepta ambos y detecta el protocolo automáticamente.  
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, mantenga ese puerto consistente en la configuración del equipo.  
- Verifique el APN y los ajustes del operador antes de configurar el servidor; un APN incorrecto impedirá la conectividad GPRS.

## Por qué usar Plaspy con esta configuración

Configurar el GM06NW para reportar a Plaspy le brinda visibilidad centralizada y control operativo sobre vehículos y dispositivos. Con los comandos públicos y los ajustes de servidor indicados puede asegurar que el rastreador se conecte a la plataforma Plaspy para monitoreo en vivo, alertas por eventos y reproducción histórica.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and installation guidance verify the manufacturer documentation at http://www.goomegpstracker.com as device behavior and setup methods may change over time.
