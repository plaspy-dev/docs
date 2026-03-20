---
slug: /megastek/gvt_369/configuration
id: gvt_369-configuration
sidebar_label: Configuration
title: Megastek - GVT-369 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Megastek GVT-369 con Plaspy, incluye ajustes de servidor, comandos SMS y flujo de instalación
keywords:
  - Configuración Megastek GVT-369
  - Configuración GVT-369 Plaspy
  - Configuración rastreador Megastek GPS
  - Configuración servidor GVT-369
  - Configuración SMS GVT-369
  - Configuración rastreador Megastek Plaspy
  - Guía configuración rastreador GPS
  - Rastreo vehicular GVT-369
  - Ajustes APN GVT-369
  - Configuración dispositivo Plaspy
---

# Megastek - GVT-369 Configuración

Esta página presenta el contexto público de configuración para usar el rastreador Megastek GVT-369 con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere, el flujo de trabajo habitual para dejar el dispositivo listo y los comandos SMS de ejemplo publicados para este modelo. La orientación aquí busca ayudarle a que el GVT-369 se comunique con Plaspy y aparezca en su plataforma de rastreo.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente solo requiere que el dispositivo tenga configurados el servidor y el puerto correctos. Los pasos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GVT-369 suele admitir configuración vía SMS como muestran los ejemplos públicos a continuación y en ellos la contraseña de muestra por defecto es 000000.

## Resumen de configuración

El objetivo del proceso de configuración es asegurar que el GVT-369 pueda conectarse a Plaspy y reportar estado y posición de forma fiable. La configuración de ejemplo proporcionada por el fabricante usa comandos SMS para establecer el ID del dispositivo, el APN, el intervalo de reporte y el servidor GPRS apuntando a Plaspy.

- Configure el rastreador para enviar datos a Plaspy usando el endpoint y puerto compartidos
- Establezca el APN correcto y active GPRS o el modo de datos para que el dispositivo tenga conectividad
- Aplique un intervalo de reporte y un índice de servidor para que el dispositivo envíe actualizaciones periódicas a Plaspy
- Valide la conectividad para que el dispositivo sea visible en la plataforma Plaspy
- Use los comandos SMS documentados por el fabricante o las herramientas software para que los cambios sean persistentes

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador
- Todos los dispositivos en Plaspy usan el mismo puerto 8888 para las conexiones al servidor

## Requisitos típicos antes de la configuración

- Un GVT-369 alimentado y accesible con el IMEI conocido
- Una tarjeta SIM activa con datos habilitados y el APN correcto para su operador celular
- Capacidad para enviar mensajes SMS al dispositivo o acceso a la herramienta de configuración Megastek proporcionada por su proveedor
- La contraseña del dispositivo si se ha modificado respecto a la contraseña de fábrica 000000
- Una cuenta en Plaspy o acceso a la plataforma para validar el rastreador después de la configuración
- Documentación del fabricante para la revisión de firmware específica instalada en el dispositivo

## Cómo se conecta este rastreador a Plaspy

El GVT-369 se configura para reportar al endpoint y puerto compartidos de Plaspy para que Plaspy pueda recibir mensajes de ubicación y estado y mostrarlos en la plataforma. Plaspy detectará automáticamente el protocolo usado por el dispositivo, por lo que el enfoque principal es garantizar la dirección del servidor, el transporte y el APN correctos.

- El rastreador envía mensajes de ubicación y estado a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según las opciones del equipo y la preferencia del instalador
- Plaspy detecta el protocolo del dispositivo automáticamente para que los paquetes se procesen correctamente en la plataforma
- Los intervalos de reporte periódicos y los eventos permiten el monitoreo operativo en Plaspy
- Una vez configurado, el dispositivo se vuelve visible y reporta eventos al panel de Plaspy

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Megastek para su versión de firmware, ya sea mediante la herramienta del proveedor o por SMS según la documentación de Megastek
2. Ingrese la dirección del servidor Plaspy, ya sea d.plaspy.com o 54.85.159.138 según lo que acepte su dispositivo
3. Establezca el puerto en 8888, que es el puerto compartido de Plaspy para todos los dispositivos
4. Elija UDP o TCP si el dispositivo requiere seleccionar explícitamente el transporte
5. Configure el APN y las credenciales APN necesarias para que el rastreador use datos GPRS
6. Aplique o guarde la configuración y reinicie el dispositivo si el firmware lo requiere
7. Valide que el rastreador reporte a Plaspy y aparezca en su cuenta de Plaspy

## Ejemplos de comandos de configuración

El fabricante proporciona ejemplos de comandos SMS para el GVT-369. La configuración de muestra usa la contraseña del dispositivo 000000 por defecto. Reemplace la contraseña y los marcadores con sus valores reales si son distintos.

- Establecer el ID del dispositivo con los últimos 15 dígitos del IMEI. Reemplace XXXXXXXXXXXXXXX con los últimos 15 dígitos del IMEI del dispositivo y reemplace 000000 si la contraseña del equipo ha sido cambiada.

```
M000000,22,XXXXXXXXXXXXXXX
```

- Establecer el APN del operador. Use la forma básica del APN o incluya usuario y contraseña de APN si su operador lo requiere. Reemplace [apn] [apnu] y [apnp] con valores reales o deje campos opcionales vacíos si no se usan.

```
M000000,23,[apn]
```

```
M000000,23,[apn],[apnu],[apnp]
```

- Establecer el intervalo de actualización a 60 segundos

```
M000000,25,60
```

- Establecer el servidor GPRS a Plaspy. El ejemplo usa un índice de servidor seguido de la IP y el puerto de Plaspy. Este ejemplo configura el servidor con la IP de Plaspy y el puerto 8888. Si su dispositivo acepta un nombre de host puede introducir d.plaspy.com según el soporte de firmware.

```
M000000,24,56 54.85.159.138,8888
```

- Habilitar el modo de datos GPRS

```
M000000,21,2
```

Notas sobre marcadores y contraseña
- [apn] es el APN de su operador móvil. [apnu] y [apnp] son el usuario y la contraseña del APN opcionales si su operador los requiere.
- XXXXXXXXXXXXXXX representa los últimos 15 dígitos del IMEI del dispositivo. Muchos comandos Megastek requieren campos de ID derivados del IMEI.
- Reemplace 000000 con la contraseña real del dispositivo si se ha cambiado respecto a la muestra de fábrica.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la sintaxis de los comandos y los parámetros soportados. Verifique siempre los comandos con la documentación Megastek para su firmware específico.
- Los comandos de ejemplo anteriores usan configuración por SMS, que es un método común para el GVT-369, pero también pueden existir herramientas del proveedor o configuración por puerto serie.
- Elija UDP o TCP según la preferencia del instalador y la capacidad del dispositivo. Plaspy acepta ambos transportes en el puerto 8888 y detecta el protocolo automáticamente.
- Todos los dispositivos en Plaspy usan el mismo puerto 8888, por lo que no necesita números de puerto distintos por dispositivo en el lado del servidor.
- Si cambia la contraseña del dispositivo, actualice sus registros y use la nueva contraseña en los comandos de configuración posteriores.

## Por qué usar Plaspy con esta configuración

Usar el Megastek GVT-369 con Plaspy proporciona una forma práctica de recopilar datos de ubicación y eventos de activos de flota con una configuración de servidor consistente. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad en el lado del servidor, de modo que usted puede concentrarse en la configuración a nivel de dispositivo, la validación de conectividad y el monitoreo operativo.

Learn more about Plaspy and how it works with devices like the GVT-369 at https://www.plaspy.com. For the latest device specific configuration methods firmware behavior and manufacturer details verify current information on the official Megastek site https://www.megastek.com/
