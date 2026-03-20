---
slug: /totemtech/at08/configuration
id: at08-configuration
sidebar_label: Configuration
title: Totemtech - AT08 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Totemtech AT08 con ajustes de servidor Plaspy y comandos SMS para puesta en marcha
keywords:
  - Configuración Totemtech AT08
  - Instalación Totemtech AT08
  - Configuración de servidor AT08
  - Configuración AT08 Plaspy
  - Configuración rastreador GPS Totemtech
  - Comandos SMS configuración AT08
  - Configuración servidor GPRS AT08
  - Configuración rastreador Plaspy
  - Configuración plataforma rastreador GPS
  - Seguimiento de activos AT08
---

# Totemtech - AT08 Configuración

Esta página documenta el contexto público de configuración para usar el rastreador magnético Totemtech AT08 con Plaspy. Explica los ajustes compartidos de servidor que Plaspy espera y muestra los comandos SMS públicos más comunes para el AT08, para que pueda preparar un dispositivo y que reporte en la plataforma Plaspy.

Plaspy utiliza el mismo endpoint y puerto compartido entre los dispositivos soportados y detecta automáticamente el protocolo del equipo una vez que llegan los paquetes. Los pasos de configuración del fabricante para el AT08 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor; por ello use los comandos siguientes como orientación pública y confirme cualquier paso específico con la documentación de Totemtech.

## Resumen de la configuración

Este proceso prepara un AT08 para enviar ubicación y telemetría a Plaspy configurando el APN, el endpoint GPRS y los parámetros de reporte. Los comandos SMS públicos para este modelo permiten una provisión rápida si prefiere configurar por SMS o por la SIM.

- Configure el APN celular y las credenciales para que el rastreador pueda abrir una sesión de datos.
- Apunte el rastreador a Plaspy usando el dominio o la IP compartida y el puerto estándar de Plaspy.
- Elija la opción de transporte (UDP o TCP) si el dispositivo requiere selección de transporte.
- Configure intervalos de reporte y el comportamiento de acuse de recibo según sus necesidades operativas.
- Valide la conectividad para confirmar que el dispositivo aparece en Plaspy y reporta ubicación y telemetría.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para reporte de dispositivos y detección de protocolo
- IP de servidor 54.85.159.138 como opción alternativa de endpoint
- Todos los dispositivos usan el puerto 8888 para reportar a Plaspy
- Soporte de transporte: configure el dispositivo para usar UDP o TCP según sus capacidades
- Plaspy detecta automáticamente el protocolo del rastreador cuando los paquetes llegan al servidor

## Requisitos típicos antes de la configuración

- Un AT08 con batería cargada o alimentación disponible y el dispositivo encendido
- Una tarjeta SIM operativa con plan de datos y capacidad SMS y credenciales APN correctas
- Acceso al método oficial de configuración de Totemtech, como provisión por SMS, USB o software del proveedor
- Conocimiento de la contraseña del dispositivo si ha sido cambiada; la contraseña por defecto que aparece en los comandos abajo es 000000
- Un entorno de prueba o un despliegue temporal para confirmar que el dispositivo reporta correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Documentación del fabricante o contacto de soporte del proveedor para instrucciones específicas de firmware

## Cómo se conecta este rastreador a Plaspy

Una vez configurado, el AT08 envía coordenadas GNSS y telemetría del dispositivo a través de la red celular al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos paquetes, identifica automáticamente el protocolo del dispositivo y hace visibles la ubicación y la telemetría en los paneles de la plataforma.

- El rastreador se configura para reportar al endpoint de Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888
- Las actualizaciones de ubicación y la telemetría se envían por TCP o UDP según el transporte seleccionado
- Plaspy detecta automáticamente el protocolo y asocia los paquetes entrantes con el registro del dispositivo
- La telemetría como nivel de batería, estado de señal y eventos de movimiento se reenvía a Plaspy para alertas e informes
- Una configuración exitosa permite visibilidad en tiempo real y seguimiento histórico en Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software para el AT08 (provisión por SMS, herramientas por micro USB o portal del proveedor).
2. Asegúrese de que el dispositivo tenga una SIM activa e ingrese las credenciales APN correctas mediante el método del dispositivo.
3. Ingrese el servidor de Plaspy como d.plaspy.com o use la IP alternativa 54.85.159.138 en el campo de servidor.
4. Configure el puerto 8888 para la comunicación con el servidor.
5. Elija UDP o TCP si el dispositivo requiere selección de transporte durante la provisión.
6. Aplique o guarde la configuración y, si es necesario, reinicie el rastreador para que los ajustes entren en vigor.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad en la plataforma después de que el rastreador se registre con d.plaspy.com en el puerto 8888.

## Comandos de configuración de ejemplo

El AT08 puede configurarse enviando comandos SMS. Los comandos de ejemplo abajo usan la contraseña por defecto del dispositivo 000000. Preserve los marcadores de posición {{apn}}, {{apnu}} y {{apnp}} cuando los reemplace por los valores de su operador.

- Reinicio de fábrica opcional (usar sólo si es necesario como reinicio inicial)
```text
*000000,007#
```

- Configurar el APN del operador y las credenciales
```text
*000000,002,{{apn}},{{apnu}},{{apnp}}#
```
Explicación: reemplace {{apn}} con el APN de su operador, {{apnu}} con el nombre de usuario del APN si se requiere, y {{apnp}} con la contraseña del APN si se requiere. Si su operador no necesita usuario o contraseña, deje los marcadores de posición vacíos según las reglas SMS del dispositivo.

- Establecer el servidor GPRS a Plaspy usando la IP y el puerto de Plaspy
```text
*000000,003,54.85.159.138,8888,1
```
Nota: este comando apunta el dispositivo a la IP y puerto 8888 del servidor Plaspy. También puede configurar d.plaspy.com en equipos que acepten un nombre de dominio en lugar de una IP.

- Activar comportamiento de ACK
```text
*000000,019,1#
```

- Establecer intervalo de actualización de ejemplo a 60 segundos
```text
*000000,60,60,0,60#
```
Preserve el orden de los comandos si su proceso de provisión necesita que el APN se configure antes de habilitar el reporte GPRS a Plaspy.

## Notas de configuración

- Revisión de firmware y hardware puede cambiar la sintaxis de comandos o los parámetros SMS disponibles; confirme el conjunto de comandos exacto con la documentación de Totemtech para la versión de firmware de su dispositivo.
- Tanto la configuración por SMS como la provisión por canal de datos son métodos públicos para este modelo; elija el método que soporte su instalación y operador.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que debe usar el puerto 8888 al configurar el AT08.
- Al elegir transporte, tanto TCP como UDP son compatibles; seleccione el transporte requerido por su despliegue o siga las indicaciones del proveedor.
- Después de la configuración, pruebe el equipo en un entorno controlado para confirmar que se registra con d.plaspy.com o 54.85.159.138 y que es visible en la plataforma Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el Totemtech AT08 con Plaspy ofrece una vía práctica para obtener visibilidad continua de activos y monitorización operativa. La larga duración de batería del AT08 y sus opciones flexibles de provisión lo hacen adecuado para seguimiento de activos de larga duración, mientras Plaspy ingiere la ubicación y telemetría para alertas, geocercas e informes históricos.

Learn more about Plaspy at https://www.plaspy.com. Device specific setup methods and firmware behavior can change over time, so verify the latest configuration details and command syntax with the manufacturer at http://www.totemtek.com/ before large scale deployment.
