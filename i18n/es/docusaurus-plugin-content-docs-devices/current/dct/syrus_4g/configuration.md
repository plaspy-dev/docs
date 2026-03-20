---
slug: /dct/syrus_4g/configuration
id: syrus_4g-configuration
sidebar_label: Configuration
title: DCT - Syrus 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del DCT Syrus 4G para Plaspy; incluye ajustes de servidor, script TMF y flujo de trabajo
keywords:
  - configuración DCT Syrus 4G
  - configuración Syrus 4G
  - Syrus 4G Plaspy
  - configuración del rastreador Plaspy
  - script TMF Syrus Desk
  - configuración de rastreador GPS
  - configuración de gateway telemático
  - configuración de rastreo vehicular
  - rastreador para gestión de flotas
  - ajustes de servidor Syrus 4G
---

# DCT - Configuración Syrus 4G

Esta página describe el contexto público de configuración para usar el gateway telemático DCT Syrus 4G con Plaspy. Explica los ajustes compartidos del servidor Plaspy a los que debe apuntar el dispositivo, muestra un ejemplo público de script TMF para Syrus Desk y ofrece un flujo de trabajo práctico para completar una integración estándar.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor que utilice (por ejemplo Syrus Desk). Siempre que exista un ejemplo público de comando o script, se incluye a continuación; verifique los pasos y las opciones concretas en la documentación actual de DCT y en la versión de firmware de su dispositivo.

## Resumen de la configuración

El proceso de configuración prepara una unidad Syrus 4G para reenviar posiciones GNSS y telemetría a Plaspy, de modo que el dispositivo sea visible y gestionable desde la plataforma. El objetivo es ajustar el APN y parámetros de red del equipo, apuntar la dirección del servidor remoto a Plaspy, seleccionar el transporte si corresponde y activar las reglas de reporte que necesite.

- Configure el APN del dispositivo y el nombre de usuario y la contraseña APN si su operador los requiere.
- Ajuste la dirección del servidor AVL remoto hacia Plaspy y especifique el puerto que usa Plaspy.
- Seleccione UDP o TCP en el dispositivo si el firmware solicita elegir el transporte.
- Cargue o aplique un script TMF en Syrus Desk para automatizar múltiples pasos de configuración.
- Guarde y reinicie el dispositivo para que comience a reportar a Plaspy y aparezca en la plataforma.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: the device may be configured to use UDP or TCP on port 8888  
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la configuración

- Un equipo Syrus 4G con alimentación y accesible, con capacidad para ejecutar Syrus Desk o la herramienta de configuración del fabricante.  
- Conexión celular válida en el dispositivo (SIM o eSIM según aplique) y datos del APN proporcionados por el operador móvil.  
- Acceso a Syrus Desk o a la herramienta del proveedor para cargar scripts TMF o introducir comandos de configuración.  
- Una cuenta de Plaspy y un plan configurado para aceptar nuevas conexiones de dispositivos (acceso a la plataforma y registro de dispositivos según su flujo de trabajo).  
- Instalación física y cableado de alimentación seguros para que el dispositivo tenga energía estable durante la configuración.  
- Conocimientos básicos sobre si su instalación requiere selección de transporte UDP o TCP según el firmware del dispositivo.

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el Syrus 4G reenvía los fixes GNSS y la telemetría seleccionada al endpoint compartido de servidor de Plaspy en el puerto de la plataforma. Plaspy recibe el flujo de datos, detecta automáticamente el protocolo del rastreador y procesa los mensajes para que el dispositivo aparezca en paneles y feeds de telemetría.

- El equipo se configura para reportar al endpoint compartido de Plaspy d.plaspy.com (o la IP equivalente).  
- El tráfico se envía al puerto 8888, el puerto común que Plaspy utiliza para todos los dispositivos soportados.  
- Puede configurar UDP o TCP en el dispositivo; Plaspy detectará el protocolo que use el rastreador.  
- El dispositivo envía actualizaciones de posición e informes de eventos según las reglas de señales y eventos configuradas.  
- Una vez que comiencen los reportes, Plaspy procesa y muestra la ubicación, eventos y datos de telemetría para monitoreo y reproducción histórica.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de DCT o al software (por ejemplo Syrus Desk) que permita cargar scripts TMF o enviar comandos de configuración.  
2. Ingrese la dirección del servidor Plaspy usando d.plaspy.com o la IP 54.85.159.138 según lo indique su instalación.  
3. Establezca el puerto remoto en 8888 (Plaspy usa el mismo puerto para todos los dispositivos).  
4. Elija el protocolo de transporte (UDP o TCP) si el firmware de su Syrus lo requiere.  
5. Configure el APN del dispositivo y, si el operador lo solicita, el nombre de usuario y la contraseña del APN.  
6. Aplique o guarde la configuración y, si la herramienta o el firmware lo requieren, reinicie o vuelva a arrancar el equipo.  
7. Valide que el dispositivo reporte a Plaspy y que los mensajes de posición y telemetría sean visibles en la plataforma Plaspy.

## Ejemplo de comandos de configuración

A continuación hay un ejemplo público de script TMF que puede guardarse como archivo de texto con extensión .tmf y cargarse en Syrus Desk. Demuestra una secuencia típica: eliminación opcional de la configuración previa, configuración del APN con marcadores, y la línea de servidor/puerto remoto apuntando a Plaspy. Preserve los marcadores cuando edite el script.

Save as a new text file with a .tmf extension and load it with Syrus Desk.

```
#Syrus SB script
#Getting Started example
#Delete any previous configuration
>SRT;CONFIG<
>SXADP**U<
#configuring the APN
>SRFA[apn]<
>SRFI<
>SRFL[apnu]<
>SRFP[apnp]<
#The remote AVL server address and port
>SXADP0000d.plaspy.com;8888<
#A Destination Address holding the server destination
>SDA4;P00<
#Time-only Time And Distance signal definition
>STD80300<
#Event triggered by T&D signal
>SED37NV4;TD8+<
#Input report event
>SED05NV4;IP3+<
#end
```

Notas sobre el script y los marcadores:
- El bloque inicial marcado como "Delete any previous configuration" (por ejemplo >SRT;CONFIG\< y >SXADP**U\<) borra o reinicia entradas de configuración y debe emplearse como paso inicial cuando corresponda. Trate los comandos de reinicio como opcionales en instalaciones existentes y úselos solo si necesita una configuración limpia.  
- [apn] es un marcador para el APN de su operador móvil. Reemplácelo por la cadena APN proporcionada por el operador.  
- [apnu] es un marcador para el nombre de usuario del APN si su operador lo requiere. Déjelo vacío o elimínelo si no es necesario.  
- [apnp] es un marcador para la contraseña del APN si su operador la solicita. Déjelo vacío o elimínelo si no es necesario.  
- La línea de servidor >SXADP0000d.plaspy.com;8888\< apunta el dispositivo a Plaspy usando el puerto compartido 8888. También puede usar la IP 54.85.159.138 si prefiere no resolver DNS en su red.  
- Después de cargar el script en Syrus Desk, guarde y reinicie el dispositivo si es necesario para empezar a reportar.

## Notas de configuración

- Las variaciones de firmware y las diferentes versiones de Syrus Desk pueden requerir una sintaxis de comandos o procedimientos de carga ligeramente distintos; confirme siempre la sintaxis para su firmware específico.  
- Elija UDP o TCP según los requisitos de su red y del dispositivo; Plaspy detectará el protocolo usado por el rastreador.  
- Si su operador requiere credenciales APN, complete [apnu] y [apnp]; si no, deje esos campos en blanco.  
- Al reutilizar o modificar scripts públicos, haga una copia de seguridad de la configuración del dispositivo antes de aplicar reinicios o comandos de eliminación.  
- Consulte la documentación de producto de DCT para detalles específicos del dispositivo y para cualquier cambio en nombres de comandos u opciones soportadas en scripts TMF.

## Por qué usar Plaspy con esta configuración

Configurar un Syrus 4G para reenviar telemetría a Plaspy ofrece visibilidad centralizada sobre flotas y dispositivos. Para organizaciones que dependen de ubicación en tiempo real, telemetría del bus del vehículo y alertas por eventos, usar Plaspy con un gateway robusto como el Syrus 4G facilita la agregación, el monitoreo y la toma de decisiones operativas.

To learn more about Plaspy and how it handles device integrations visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and configuration methods can change over time, so verify the latest device-specific setup details with DCT at https://www.digitalcomtech.com/ before applying changes to production installations.
