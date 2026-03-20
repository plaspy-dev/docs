---
slug: /coban/gps310/configuration
id: gps310-configuration
sidebar_label: Configuration
title: Coban - GPS310 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Coban GPS310 con Plaspy incluyendo comandos SMS y ajustes de servidor
keywords:
  - Coban GPS310 configuración
  - Coban GPS310 instalación
  - Configuración servidor GPS310
  - GPS310 configuración Plaspy
  - Configuración rastreador Coban GPS
  - Configuración SMS rastreador GPS
  - Configuración GPRS rastreador
  - Rastreo de vehículo GPS310
  - GPS310 configuración APN
  - Plataforma de rastreo GPS310
---

# Coban - Configuración del GPS310

Esta página describe la configuración pública necesaria para usar el rastreador Coban GPS310 con Plaspy. Reúne los ajustes de servidor que Plaspy requiere y los comandos SMS públicos más comunes utilizados para preparar el dispositivo y que reporte a nuestra plataforma. Utilice esta guía como referencia práctica para apuntar un GPS310 a Plaspy y verificar la conectividad básica.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la versión de hardware, el tipo de instalación y las herramientas del proveedor; los comandos SMS de ejemplo que aparecen a continuación reflejan comandos públicos frecuentemente documentados para el GPS310 y deben validarse contra el firmware del dispositivo que usted esté usando.

## Resumen de la configuración

Este proceso prepara el GPS310 para enviar datos de ubicación y estado a Plaspy definiendo los parámetros de acceso a la red, el endpoint del servidor y la frecuencia de reporte. El objetivo es asegurar que el dispositivo pueda establecer una conexión GPRS y alcanzar de forma confiable el endpoint de Plaspy para que el equipo aparezca en la plataforma.

- Configure el APN del dispositivo y, si aplica, las credenciales del APN para que use la red celular para datos GPRS.
- Defina el endpoint del servidor de Plaspy para que el rastreador envíe la telemetría a la plataforma.
- Ajuste el intervalo de reporte para que las actualizaciones de ubicación cumplan con sus necesidades de monitoreo.
- Seleccione el modo de transporte (UDP o TCP) si es necesario y asegúrese de que el dispositivo esté configurado con el puerto usado por Plaspy.
- Verifique los ajustes de forma remota usando el comando de comprobación del tracker y confirme que el dispositivo reporta en Plaspy.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: UDP or TCP supported on port 8888
- Plaspy automatically detects the tracker protocol when the device connects to the shared port

(Los valores anteriores deben introducirse tal cual en el dispositivo cuando sea necesario.)

## Requisitos típicos antes de configurar

- Un Coban GPS310 cargado y operativo con capacidad para enviar y recibir SMS para configuración
- Una SIM celular válida con datos habilitados y el APN correcto para el operador
- La contraseña por defecto del dispositivo (comúnmente 123456 en ejemplos publicados) o la contraseña establecida por el instalador
- Acceso a la lista de comandos SMS del fabricante o a la herramienta de configuración del GPS310
- Conocimientos básicos sobre si debe usar UDP o TCP para su despliegue y si su SIM/APN permite el transporte elegido

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el GPS310 utiliza la red celular y el servicio GPRS para abrir una sesión de datos y reenviar los mensajes de ubicación y sensores a Plaspy. El dispositivo se apunta al endpoint y puerto compartidos de Plaspy para que la plataforma reciba e interprete automáticamente el protocolo entrante.

- El dispositivo envía conexiones GPRS al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888
- La telemetría y los mensajes de eventos del rastreador se entregan por UDP o TCP según la configuración de transporte del dispositivo
- Plaspy detecta automáticamente el protocolo y asocia el dispositivo con el parser correspondiente
- Los mensajes de posición regulares (configurados por los comandos de intervalo de actualización) proveen actualizaciones de ubicación en la plataforma
- Comandos de diagnóstico o comprobación pueden usarse para confirmar la configuración y el estado del dispositivo antes de verificar en Plaspy

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración del fabricante para su GPS310 (comandos SMS, herramienta del proveedor o interfaz de instalador).
2. Ingrese d.plaspy.com o la dirección IP 54.85.159.138 como servidor GPRS en el dispositivo.
3. Configure el puerto del servidor en 8888 según lo requerido por Plaspy.
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte.
5. Configure el APN y, si aplica, las credenciales del APN para que el dispositivo pueda establecer servicio GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios entren en vigor.
7. Valide que el dispositivo reporta a Plaspy usando el comando de comprobación del rastreador y confirmando la visibilidad en la plataforma.

## Comandos de configuración de ejemplo

El GPS310 suele configurarse mediante comandos SMS. Los comandos siguientes se toman de ejemplos públicos de configuración del dispositivo. Los comandos de muestra usan la contraseña del dispositivo 123456 tal como se publica. Reemplace los marcadores y valores de contraseña según corresponda para su equipo.

Nota sobre marcadores:
- [apn] = la cadena APN de su operador móvil
- [apnu] = nombre de usuario del APN si lo requiere el operador
- [apnp] = contraseña del APN si lo requiere el operador

1. Reinicio opcional a valores de fábrica (usar solo si necesita restablecer la configuración del equipo):
```
begin123456
```

2. Ajustar la zona horaria a UTC+0:
```
time zone123456 0
```

3. Configurar el APN del operador:
```
apn123456 [apn]
```

4. Configurar usuario y contraseña del APN (si su operador lo requiere):
```
up123456 [apnu] [apnp]
```

5. Establecer el servidor GPRS con la IP y el puerto de Plaspy:
```
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de actualización de ubicación (ejemplo publicado; no modifique sin comprender el formato del comando):
```
fix060s060s***n123456
```

7. Cambiar a modo GPRS y elegir transporte (variantes de ejemplo publicadas):
```
gprs123456,1,1
```
o simplemente:
```
gprs123456
```

8. Consultar la configuración actual de forma remota:
```
check123456
```

9. Habilitar protocolo avanzado o reporte de sensores (ejemplo para sensor de combustible o digitales):
```
protocol123456 18
```

Use el comando check123456 para verificar la configuración después de enviar los mensajes SMS de configuración. Si su dispositivo usa una contraseña distinta a 123456, reemplace 123456 por la contraseña del dispositivo en cada comando.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar la sintaxis exacta de los SMS o los comandos disponibles; confirme el conjunto de comandos para el firmware de su GPS310.
- En ejemplos públicos se muestra que el GPS310 admite configuración por SMS; algunos instaladores pueden preferir el software del fabricante o un cable de configuración cuando esté disponible.
- Elija UDP o TCP según sus preferencias de fiabilidad de red; UDP suele usarse por menor sobrecarga y TCP ofrece garantías de entrega a costa de un mayor overhead de conexión.
- Verifique siempre el APN y las credenciales con el proveedor celular antes de configurar el dispositivo.
- En lo posible, pruebe la configuración con un equipo antes de desplegar a gran escala para confirmar los comandos y el comportamiento en su versión de firmware.

## Por qué usar Plaspy con esta configuración

Configurar el Coban GPS310 para que reporte a Plaspy brinda a las organizaciones un camino sencillo hacia la visibilidad y el monitoreo centralizado. Con el dispositivo apuntando al endpoint y puerto compartidos de Plaspy, las actualizaciones de ubicación y los mensajes de evento estarán disponibles en una única plataforma donde usted podrá visualizar, alertar y analizar el movimiento de vehículos o activos.

To learn more about Plaspy and how the platform handles device integrations, visit https://www.plaspy.com. For the latest device specific details, firmware notes, and full command references for the GPS310, verify the manufacturer documentation at https://www.coban.net/ since setup methods and firmware behavior can change over time.
