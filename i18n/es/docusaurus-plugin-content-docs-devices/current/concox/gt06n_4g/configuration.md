---
slug: /concox/gt06n_4g/configuration
id: gt06n_4g-configuration
sidebar_label: Configuration
title: Concox - GT06N 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Concox GT06N 4G con Plaspy; ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración Concox GT06N 4G
  - Configuración GT06N Concox
  - Concox GT06N Plaspy
  - Configuración servidor GT06N 4G
  - Comandos SMS GT06N 4G
  - Ajustes APN GT06N 4G
  - Configurar rastreador GT06N 4G
  - Configuración rastreador GPS Concox
  - Rastreo vehicular GT06N
  - Configuración rastreador Plaspy
---

# Concox - Configuración GT06N 4G

Esta página presenta la guía pública para usar el rastreador Concox GT06N 4G con Plaspy. Explica los valores compartidos del servidor Plaspy que deberá ingresar en el dispositivo, describe el flujo típico de configuración y proporciona los comandos SMS que el proveedor publica y que suelen emplearse para preparar el dispositivo para reportar a Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate las instrucciones a continuación como orientación práctica pública y confirme los detalles específicos del dispositivo con la documentación de Concox cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el GT06N 4G para que se comunique de forma fiable con Plaspy, habilitar el reporte continuo y verificar la visibilidad en la plataforma Plaspy. En este equipo, la configuración común se realiza vía comandos SMS o con la herramienta PC del fabricante y se centra en los ajustes del servidor GPRS, APN y los intervalos de reporte.

- Configure el dispositivo para reportar a Plaspy usando los ajustes de servidor compartidos.
- Defina el APN correcto para que el dispositivo establezca sesión de datos celular.
- Elija el transporte (UDP o TCP) y configure el puerto común que usa Plaspy.
- Establezca el intervalo de reporte y active el envío de datos por GPRS para obtener actualizaciones en tiempo real.
- Verifique los ajustes y la conectividad para que el dispositivo aparezca en los paneles de Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad GT06N 4G alimentada y funcional con acceso a su método de configuración por SMS o PC
- Una tarjeta SIM activa con datos y SMS habilitados y la información del APN disponible
- El dispositivo debe poder acceder a internet público vía datos celulares para el reporte GPRS
- Acceso a los comandos SMS de Concox o a la herramienta oficial de configuración de Concox
- Conocimientos básicos sobre si debe usar UDP o TCP según su red y reglas de firewall

## Cómo se conecta este rastreador a Plaspy

El GT06N 4G se configura para enviar ubicación y eventos de dispositivo al endpoint y puerto compartido de Plaspy. Una vez que el dispositivo tenga una sesión de datos activa y se apliquen los ajustes del servidor, Plaspy recibe la telemetría y la muestra en la plataforma mediante la detección automática del protocolo.

- El dispositivo envía ubicación y telemetría a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy recibe la conexión e identifica automáticamente el protocolo del rastreador
- Las actualizaciones de estado, reportes periódicos de ubicación y mensajes de evento se dirigen a su cuenta de Plaspy
- Usando el transporte elegido (UDP o TCP), el dispositivo transmite datos conforme a los intervalos configurados
- Los operadores pueden monitorear eventos del dispositivo, como SOS o notificaciones de manipulación, en Plaspy una vez que el reporte esté establecido

## Flujo de configuración común

1. Acceda al método oficial de configuración de Concox, como comandos SMS o la herramienta PC de Concox.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o, alternativamente, la IP 54.85.159.138.
3. Establezca el puerto en 8888 para el ajuste del servidor del dispositivo.
4. Elija UDP o TCP si el dispositivo solicita selección de transporte al configurar el servidor.
5. Configure el APN del dispositivo con los valores proporcionados por su operador y active el modo GPRS.
6. Aplique o guarde la configuración y reinicie el equipo si el firmware lo requiere.
7. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta o tablero de Plaspy.

## Ejemplos de comandos de configuración

El GT06N 4G admite configuración por SMS. Los siguientes comandos SMS públicos aparecen en la documentación del proveedor. Conserve los marcadores de posición cuando los reemplace por sus valores.

- Restablecer a ajustes de fábrica (opcional en la configuración inicial)
```text
FACTORY#
```

- Establecer la zona horaria a UTC 0
```text
GMT,E,0#
```

- Definir el APN del operador
```text
APN,{{apn}}#
```
Si su operador requiere usuario y contraseña del APN, incluya estos marcadores de posición:
```text
APN,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: reemplace {{apn}} con el APN de su operador. Si es necesario, sustituya {{apnu}} y {{apnp}} por el usuario y la contraseña del APN.

- Configurar el servidor GPRS usando el dominio de Plaspy (la selección UDP o TCP se gestiona en los ajustes del dispositivo)
```text
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP de Plaspy
```text
SERVER,0,54.85.159.138,8888,0#
```
Notas: Estas dos formas muestran las opciones por dominio e IP. Use la que sea apropiada para su dispositivo y red. El parámetro final puede controlar una bandera de protocolo según el firmware.

- Establecer intervalo de actualización a cada 60 segundos
```text
TIMER,60#
```
O una forma alternativa de intervalo
```text
TIMER,60,60#
```

- Activar modo GPRS
```text
GPRSON,1#
```

- Comprobar parámetros actuales de GPRS y servidor
```text
GPRSSET#
```
Use GPRSSET# para verificar el servidor, APN y valores de temporizador luego de la configuración.

## Notas sobre la configuración

- La configuración por SMS es ampliamente utilizada para la puesta en marcha, aunque también puede emplear las herramientas PC del fabricante cuando estén disponibles.
- Las versiones de firmware y las variantes regionales pueden esperar ordenamientos de parámetros o flags de comando SMS ligeramente distintos. Confirme con la documentación de Concox.
- Elija UDP o TCP según su red y reglas de firewall. Plaspy acepta ambos transportes en el puerto 8888 y detectará automáticamente el protocolo del dispositivo.
- Use el dominio d.plaspy.com cuando sea posible; si DNS no está disponible, puede usar la IP 54.85.159.138 como alternativa.
- Verifique siempre los ajustes con el comando GPRSSET# y confirme que el dispositivo aparece en Plaspy tras un reinicio o después de activar GPRS.

## Por qué usar Plaspy con esta configuración

Usar el GT06N 4G con Plaspy ofrece a las flotas una vía confiable hacia la visibilidad centralizada, el monitoreo de eventos y el reporte operativo. La combinación de las entradas orientadas al vehículo del dispositivo y la aceptación por parte de Plaspy de endpoints por dominio e IP en un puerto compartido facilita el despliegue inicial y la expansión a escala para los operadores de flotas.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific configuration methods and firmware notes on the manufacturer site https://www.iconcox.com/. Manufacturer specifications, setup workflows, and firmware behavior can change over time so confirm the latest details before large scale rollouts.
