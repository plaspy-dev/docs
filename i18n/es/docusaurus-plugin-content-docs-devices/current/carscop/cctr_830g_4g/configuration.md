---
slug: /carscop/cctr_830g_4g/configuration
id: cctr_830g_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-830G-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Carscop CCTR-830G-4G con Plaspy incluyendo servidor y comandos SMS
keywords:
  - Configuración Carscop CCTR 830G 4G
  - Instalación rastreador Carscop
  - CCTR 830G 4G con Plaspy
  - Configuración Plaspy
  - Rastreador GPS OBD II
  - Configuración rastreo de vehículos
  - Configuración servidor de rastreadores
  - Comandos SMS CCTR 830G 4G
  - Rastreador GPS OBD II
  - Rastreador para gestión de flotas
---

# Carscop - Configuración del CCTR-830G-4G

Esta página documenta el contexto público de configuración para usar el rastreador Carscop CCTR-830G-4G con Plaspy. Aquí encontrará los ajustes prácticos de servidor, los pasos habituales de preparación y los comandos SMS públicos que permiten apuntar el dispositivo a Plaspy para el seguimiento en tiempo real y el diagnóstico. Use esta guía para preparar el equipo para la integración con Plaspy, teniendo en cuenta las instrucciones específicas del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El CCTR-830G-4G soporta configuración por SMS y reportes por GPRS/LTE, por lo que esta página incluye los comandos SMS públicos documentados para configurar el APN y los parámetros del servidor.

## Resumen de la configuración

El proceso de configuración prepara al CCTR-830G-4G para comunicarse de forma fiable con Plaspy, de modo que la ubicación del vehículo, la telemetría derivada del CAN y los datos de diagnóstico aparezcan en la plataforma. Para implementaciones plug-and-play en OBD II, los pasos básicos normalmente incluyen garantizar la conectividad celular, configurar las credenciales APN y apuntar el dispositivo al endpoint y puerto de Plaspy.

- Configure el APN del dispositivo y las credenciales necesarias para que haya datos GPRS o LTE.  
- Establezca la dirección del servidor GPRS para apuntar el dispositivo a Plaspy y subir telemetría.  
- Elija transporte UDP o TCP según corresponda y verifique que el dispositivo use el puerto 8888, el puerto compartido de Plaspy.  
- Valide el reporte en línea para que la ubicación en vivo y los diagnósticos aparezcan en Plaspy.  
- Opcionalmente, restaure la configuración de fábrica o ajuste la zona horaria y el comportamiento de keepalive mediante comandos SMS.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP supported on port 8888  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son el endpoint público de Plaspy que se deben usar al configurar el servidor del rastreador o la lista de IPs.

## Requisitos típicos antes de la configuración

- Batería del vehículo con carga o puerto OBD II con alimentación para que el rastreador pueda arrancar durante la configuración.  
- Una tarjeta SIM activa con datos móviles y SMS habilitados y las credenciales APN del operador.  
- Acceso al método de configuración del fabricante, ya sea mediante comandos SMS o la herramienta oficial de Carscop.  
- Conocimiento de la contraseña del dispositivo si difiere de la predeterminada; la contraseña pública de ejemplo es 123456.  
- Herramientas básicas para comprobar el estado en línea del equipo, como un indicador en el vehículo o la verificación de conexión en la plataforma Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el CCTR-830G-4G envía posiciones GNSS y telemetría del vehículo al endpoint y puerto del servidor Plaspy para su ingestión en la plataforma. Plaspy recopila actualizaciones de ubicación, eventos de diagnóstico e información de estado para que los administradores puedan monitorear las flotas en tiempo real.

- El rastreador se apunta al servidor compartido de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.  
- El dispositivo envía telemetría por el transporte elegido (UDP o TCP) y Plaspy detecta automáticamente el protocolo.  
- Las actualizaciones de posición y la telemetría CAN/DTC se suben en intervalos configurados para que Plaspy muestre ubicación en vivo y trazas históricas.  
- Las configuraciones de keepalive o modo en línea mantienen la conectividad persistente para reportes oportunos.  
- Las alertas y mensajes de diagnóstico se reenvían a Plaspy para su manejo y reporte.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Carscop o prepárese para enviar los comandos SMS que documenta Carscop.  
2. Configure el APN del dispositivo y las credenciales APN para que haya datos celulares GPRS/LTE disponibles.  
3. Ingrese el servidor de Plaspy especificando d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.  
4. Establezca el puerto en 8888, que Plaspy usa para todos los dispositivos soportados.  
5. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte. Plaspy soporta ambos y detectará automáticamente el protocolo del rastreador.  
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo requiere.  
7. Valide que el equipo reporte a Plaspy confirmando el estado en línea y la telemetría entrante en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El CCTR-830G-4G soporta configuración por SMS. A continuación están los comandos SMS públicos documentados para la configuración básica. La configuración de ejemplo usa la contraseña por defecto del dispositivo 123456. Conserve y reemplace los marcadores de posición según corresponda.

- Optional initial factory reset (only use if needed to restore defaults)
```text
RESET*123456
```

- Set the time zone to UTC+0
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace [apn] with your mobile operator APN)
```text
APN*123456*[apn]
```

- Set APN username and password if required (replace [apnu] and [apnp] with APN credentials)
```text
USERNAME*123456*[apnu]*[apnp]
```

- Set the GPRS server to the Plaspy IP and port (this points the device at Plaspy)
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online mode enabled
```text
KEEPONLINE*123456
```

Notas sobre los marcadores:
- [apn] es la cadena APN del operador necesaria para datos móviles.  
- [apnu] y [apnp] son el usuario y la contraseña APN cuando su operador requiere autenticación.  
- Reemplace 123456 por otra contraseña si la unidad fue reconfigurada con una contraseña personalizada.

## Notas de configuración

- La configuración por SMS es compatible y suele usarse en instalaciones de campo donde no hay acceso a herramientas directas; siga la sintaxis SMS exacta de la documentación de Carscop.  
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las opciones disponibles; verifique los comandos contra el manual del dispositivo específico.  
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detecta automáticamente el protocolo del dispositivo, por lo que generalmente no es necesario configurar la detección de protocolo en el servidor.  
- Elija TCP o UDP según la preferencia del instalador o la capacidad del equipo; Plaspy acepta ambos transportes en el puerto 8888.  
- Al cambiar el APN o los ajustes del servidor, permita un breve intervalo para que el dispositivo se registre en la red y establezca una sesión GPRS/LTE antes de validar la conectividad en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Carscop CCTR-830G-4G con Plaspy ofrece una vía sencilla para integrar rastreo OBD II plug-and-play y diagnósticos de vehículos en una plataforma de gestión de flotas. Apuntar el rastreador al endpoint compartido de Plaspy simplifica el despliegue en múltiples unidades, mientras que la plataforma ingiere ubicación y telemetría derivada del CAN para monitoreo en tiempo real, alertas y reportes históricos.

Learn more about Plaspy and how it supports device integrations at https://www.plaspy.com. For device specific setup details, firmware behavior, and the latest SMS command syntax consult the official Carscop documentation at http://www.carscop.com/ to verify current manufacturer instructions.
