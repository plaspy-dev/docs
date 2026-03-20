---
slug: /istartek/pt21/configuration
id: pt21-configuration
sidebar_label: Configuration
title: iStartek - PT21 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar el iStartek PT21 con Plaspy, incluye ajustes de servidor, comandos SMS y pasos prácticos
keywords:
  - configuración iStartek PT21
  - configuración PT21 Plaspy
  - configuración servidor iStartek PT21
  - configuración rastreador GPS PT21
  - configuración SMS PT21
  - integración rastreador Plaspy
  - configuración rastreador GPS Plaspy
  - configuración GPRS PT21
  - comandos dispositivo PT21
  - configuración plataforma seguimiento PT21
---

# iStartek - Configuración del PT21

Esta página recopila la información pública necesaria para usar el rastreador iStartek PT21 con Plaspy. Incluye los valores de servidor habituales, los comandos SMS y la guía práctica que se emplea normalmente para apuntar un PT21 a Plaspy y que el dispositivo reporte posiciones y eventos a la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El PT21 admite configuración por TCP, UDP y SMS; esta guía se centra en los valores públicos y comandos SMS más comunes para integrarlo con Plaspy.

## Resumen de la configuración

El objetivo de este proceso es preparar el PT21 para que se comunique de forma fiable con Plaspy y usted pueda ver posiciones en tiempo real, alertas e historial de rutas. Los pasos que siguen explican el propósito práctico de configurar servidor, APN y parámetros de reporte.

- Configurar el dispositivo para que envíe reportes GPRS a Plaspy usando el endpoint compartido del servidor.
- Establecer el APN y la conexión GPRS para que el dispositivo acceda a Internet y al servidor de Plaspy.
- Elegir un protocolo de transporte (UDP o TCP) y poner el puerto estándar de Plaspy para que los reportes lleguen correctamente.
- Verificar los reportes y parámetros con el comando de verificación del dispositivo para que salga en Plaspy.
- Opcionalmente, restaurar a valores de fábrica antes del aprovisionamiento cuando se prepara un equipo nuevo o devuelto.

## Ajustes públicos de Plaspy

Use estos valores públicos de Plaspy al configurar el PT21. Plaspy requiere el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar un protocolo manualmente dentro de la plataforma

## Requisitos típicos antes de comenzar

- Un PT21 con batería cargada y alimentación habilitada.
- Una tarjeta SIM activa con datos (GPRS) habilitados y SMS si va a usar comandos SMS para la configuración.
- Un teléfono móvil o una pasarela SMS capaz de enviar mensajes de configuración al PT21 si usa configuración por SMS.
- Acceso al método oficial de configuración del fabricante o documentación de iStartek para comandos específicos según el firmware.
- Conocimiento básico del IMEI del dispositivo y de la contraseña de administrador del dispositivo si su proveedor la exige.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo para Plaspy, el PT21 envía reportes de ubicación y eventos por GPRS al endpoint y puerto compartidos de Plaspy para que la plataforma muestre posiciones y alertas en tiempo real.

- El rastreador reporta al servidor de Plaspy usando el transporte configurado (UDP o TCP) en el puerto 8888.
- Plaspy procesa esos reportes y los asigna al registro del dispositivo para su visualización en tiempo real y reproducción histórica.
- Alertas como SOS o batería baja se transmiten a Plaspy y aparecen como eventos accionables en la plataforma.
- Los reportes periódicos programados (por ejemplo, ajustes TIMER) controlan la frecuencia con la que el PT21 envía actualizaciones de posición a Plaspy.
- El puerto compartido de Plaspy y la detección automática de protocolo simplifican el aprovisionamiento entre muchos tipos de dispositivos.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración del PT21 provisto por iStartek (comandos SMS, herramienta del fabricante o app de aprovisionamiento).
2. Introduzca la dirección del servidor Plaspy como d.plaspy.com o la IP 54.85.159.138 según permita el método de configuración del equipo.
3. Establezca el puerto del servidor en 8888, que es el puerto único que usa Plaspy para todos los dispositivos.
4. Elija UDP o TCP en la configuración del equipo si el PT21 requiere seleccionar explícitamente el transporte.
5. Configure el APN del dispositivo y las credenciales necesarias si su operador las exige para establecer la conexión GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si el fabricante lo recomienda.
7. Valide que el dispositivo está reportando a Plaspy revisando su estado en la plataforma y usando el comando de verificación del dispositivo cuando esté disponible.

## Ejemplos de comandos de configuración

El PT21 puede configurarse mediante comandos SMS. A continuación se muestran los comandos SMS públicos más comúnmente usados y el orden típico de aplicación. Use un teléfono administrador o una herramienta de aprovisionamiento para enviar estos SMS al número del dispositivo.

1. Reinicio a valores de fábrica opcional (útil al aprovisionar por primera vez o para borrar configuraciones previas):
```
FACTORY#
```

2. Ajustar la zona horaria a UTC+0:
```
GMT,E,0#
```

3. Establecer el APN del operador. Reemplace los marcadores por los valores de su operador:
- Obligatorio: {{apn}}
- Usuario opcional: {{apnu}}
- Contraseña opcional: {{apnp}}

Variantes comunes:
```
APN,{{apn}}#
```
o con usuario y contraseña:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```

4. Configurar el servidor GPRS a Plaspy por dominio (recomendado para facilitar cambios DNS):
```
SERVER,1,d.plaspy.com,8888#
```
O configurar el servidor GPRS usando la IP de Plaspy:
```
SERVER,0,54.85.159.138,8888#
```
Ambos comandos apuntan el dispositivo a Plaspy usando el puerto 8888. Elija dominio o IP según su preferencia de aprovisionamiento.

5. Establecer el intervalo de actualización de posición a 60 segundos:
```
TIMER,60#
```

6. Verificar los parámetros actuales del dispositivo:
```
PARAM#
```

Notas sobre los marcadores: mantenga los marcadores {{apn}}, {{apnu}} y {{apnp}} tal como aparecen y sustitúyalos por el APN, usuario y contraseña de su operador móvil cuando sea necesario. El usuario y la contraseña del APN son opcionales y solo se requieren si el operador lo exige.

## Observaciones sobre la configuración

- La configuración por SMS está soportada y se muestra aquí; en algunas instalaciones puede preferirse un enfoque OTA o una herramienta del proveedor según el firmware.
- Use el dominio d.plaspy.com cuando sea posible para permitir el enrutamiento por DNS; la IP alternativa 54.85.159.138 se facilita para entornos con restricciones DNS.
- Seleccione UDP o TCP según las condiciones de la red local y el comportamiento del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo del rastreador.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos o las funciones disponibles; siempre verifique con la documentación de iStartek la versión de firmware de su PT21.
- Si realiza un reseteo de fábrica, considérelo opcional y úselo solo al preparar un dispositivo para reprovisionamiento o al solucionar problemas.

## Por qué usar Plaspy con esta configuración

Usar el PT21 con Plaspy ofrece a rastreadores compactos de activos y personales una vía directa y de bajo consumo para reportes de posición en tiempo real, alertas y reproducción de rutas históricas. El tamaño reducido del PT21, su posicionamiento híbrido y su soporte para reportes estándar por TCP/UDP/SMS lo hacen adecuado para añadir visibilidad en tiempo real en casos de uso como mascotas, equipaje o seguridad personal discreta.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details and firmware guidance at the manufacturer site https://istartek.com/. Manufacturer specifications and setup methods can change over time, so always confirm current instructions on the official iStartek site before deploying devices.
