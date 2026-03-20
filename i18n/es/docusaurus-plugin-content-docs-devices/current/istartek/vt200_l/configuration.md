---
slug: /istartek/vt200_l/configuration
id: vt200_l-configuration
sidebar_label: Configuration
title: iStartek - VT200-L Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar iStartek VT200-L con Plaspy, incluye ajustes de servidor y comandos SMS
keywords:
  - configuración iStartek VT200-L
  - instalación iStartek VT200-L
  - configuración servidor iStartek VT200-L
  - configuración Plaspy VT200-L
  - configuración rastreador GPS VT200-L
  - rastreo vehicular VT200-L
  - configuración APN VT200-L
  - comandos SMS VT200-L
  - configuración dispositivo Plaspy
  - compatibilidad rastreadores Plaspy
---

# iStartek - Configuración del VT200-L

Esta página presenta la información pública necesaria para usar el iStartek VT200-L con la plataforma Plaspy. Se centra en los ajustes de servidor prácticos y en los comandos del fabricante más utilizados para apuntar el VT200-L a Plaspy y habilitar el rastreo y la telemetría en tiempo real. Use estas indicaciones junto con el manual del dispositivo y las herramientas del proveedor para una instalación completa.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Los pasos exactos del lado del fabricante pueden variar según la versión de firmware, la variante de hardware, el tipo de instalación y la herramienta de configuración que utilice (SMS, portal web o software del proveedor), por lo que confirme los detalles con la documentación de iStartek cuando sea necesario.

## Resumen de la configuración

Esta configuración prepara el VT200-L para enviar posiciones y datos de telemetría a Plaspy utilizando el endpoint de servidor compartido de la plataforma. El proceso normalmente establece el APN y parámetros de red, apunta el equipo al servidor de Plaspy, configura los intervalos de reporte y verifica que los datos en búfer se reenvíen después de interrupciones.

- Configure el APN del dispositivo y los ajustes de GPRS/SMS para que pueda acceder a los servicios de datos móviles.
- Establezca el servidor del dispositivo a Plaspy usando d.plaspy.com o la IP de servidor proporcionada y el puerto estándar de Plaspy.
- Seleccione el transporte (UDP o TCP) si el VT200-L requiere una selección explícita y ajuste el intervalo de reporte para actualizaciones periódicas.
- Valide la conectividad y confirme que el dispositivo aparece y reporta en Plaspy después de la configuración.
- Aplique los cambios mediante comandos SMS o la herramienta del fabricante según la documentación de iStartek.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: the device may be configured to use UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Requisitos típicos antes de la instalación

- Una tarjeta SIM válida provisionada para datos (GPRS/4G) y con capacidad para enviar/recibir SMS si va a usar configuración por SMS.
- Acceso al método de configuración de iStartek que prefiera, como comandos SMS, software del proveedor o el manual del dispositivo.
- Alimentación al VT200-L y, si está instalado en un vehículo, un montaje y conexionado seguros al sistema eléctrico del vehículo.
- El APN correcto (nombre de punto de acceso) y, si aplica, usuario y contraseña del APN proporcionados por el operador móvil.
- Conocimientos básicos para enviar comandos SMS al dispositivo o acceso a la herramienta de instalador suministrada por iStartek.

## Cómo se conecta este rastreador a Plaspy

El VT200-L se configura para reportar al endpoint y puerto compartido de Plaspy. Una vez aprovisionado, enviará actualizaciones periódicas de posición y mensajes por eventos; los datos en búfer almacenados durante cortes de red se reenvían cuando se restaura la conectividad.

- El rastreador reporta al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- El transporte puede ser TCP o UDP según la configuración del dispositivo; elija el transporte requerido por su instalación.
- La frecuencia de reporte es configurable (por ejemplo mediante una configuración TIMER) para equilibrar la granularidad de las actualizaciones y el uso de datos.
- Alertas de eventos e entradas de estado (como encendido del motor o disparo de alarma) se envían como mensajes al servidor Plaspy para procesamiento inmediato.
- Los datos históricos en búfer en la memoria flash del dispositivo se reenvían a Plaspy tras la reconexión para preservar la continuidad de los eventos.

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial de iStartek o al software correspondiente, o prepárese para enviar comandos SMS según la documentación.
2. Ingrese la dirección del servidor de Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del servidor en 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos compatibles.
4. Seleccione el transporte UDP o TCP si el dispositivo requiere una selección explícita para el transporte de datos.
5. Configure el APN y las credenciales del APN si son necesarias para que el dispositivo use datos móviles.
6. Aplique o guarde la configuración en el dispositivo y reinicie la unidad si las instrucciones del fabricante recomiendan un reinicio.
7. Verifique que el VT200-L reporte a Plaspy y que las actualizaciones de posición y eventos aparezcan en la plataforma.

## Ejemplos de comandos de configuración

El VT200-L puede configurarse mediante comandos SMS. Los siguientes comandos públicos SMS se suministran en la documentación del dispositivo y se presentan aquí en orden. Envíe estos comandos desde un número telefónico autorizado para comandar la unidad o use la herramienta del fabricante según corresponda.

- Optional initial factory reset (use only if you need to restore defaults):
```
FACTORY#
```

- Set the time zone to UTC+0:
```
GMT,E,0#
```

- Set the operator APN. Replace {{apn}} with your SIM card provider APN. If required, include {{apnu}} and {{apnp}} for APN username and password:
```
APN,{{apn}}# 
```
If your operator requires username and password:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy by domain (recommended) and port 8888:
```
SERVER,1,d.plaspy.com,8888#
```

- Or set the GPRS server to Plaspy by IP and port 8888:
```
SERVER,0,54.85.159.138,8888#
```

- Set the periodic update interval to 60 seconds:
```
TIMER,60#
```

- To check current parameter settings on the device:
```
PARAM#
```

Notes on placeholders:
- {{apn}} is the mobile operator access point name required for data connectivity.
- {{apnu}} and {{apnp}} are optional APN username and password fields; include them only if your operator requires credentials.
- When sending SMS commands, ensure you follow iStartek's format and that the sending number is authorized if the device enforces SMS control lists.

## Notas de configuración

- El VT200-L admite la configuración por SMS como se muestra, pero muchas instalaciones prefieren la herramienta del fabricante para aprovisionamiento masivo y gestión de firmware.
- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; verifique la sintaxis contra el manual del usuario del dispositivo para su versión de firmware.
- Elija TCP o UDP según la fiabilidad de la red y sus necesidades de integración; Plaspy aceptará cualquiera de los dos en el puerto 8888 y realizará detección de protocolo en los mensajes entrantes.
- Usar el dominio d.plaspy.com se recomienda por simplicidad; la IP 54.85.159.138 se facilita como alternativa si no hay disponibilidad de DNS.
- Tras la configuración, deje tiempo para que los datos en búfer se carguen después de la reconexión de red y verifique que los datos llegan a Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el VT200-L con Plaspy proporciona visibilidad continua de la ubicación del vehículo, telemetría y alertas de eventos, aprovechando las funciones de búfer y recuperación del rastreador para mantener la continuidad de los datos. Los ajustes de servidor compartidos de Plaspy y la detección automática de protocolo simplifican la incorporación de múltiples modelos de rastreadores, permitiendo que los administradores de flota se enfoquen en las operaciones y las alertas en lugar de las diferencias por dispositivo.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device-specific commands, firmware notes, and detailed installation guidance, verify the VT200-L documentation on the manufacturer website https://istartek.com/ as setup methods and firmware behavior can change over time.
