---
slug: /megastek/mt65plus/configuration
id: mt65plus-configuration
sidebar_label: Configuration
title: Megastek - MT65PLUS Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Megastek MT65PLUS con ajustes de servidor Plaspy y ejemplos de SMS
keywords:
  - Megastek MT65PLUS
  - configuración MT65PLUS
  - configuración rastreador Megastek
  - configuración Plaspy
  - configuración rastreador GPS
  - rastreador tipo tobillo
  - rastreador resistente a manipulación
  - seguimiento en tiempo real
  - configuración servidor GPRS
  - configuración servidor de rastreo
---

# Megastek - Configuración MT65PLUS

Esta página describe el contexto público de configuración para usar el Megastek MT65PLUS con Plaspy. Consolida los ajustes de servidor compartidos que Plaspy requiere, orientaciones prácticas de puesta en marcha y ejemplos de comandos SMS habitualmente usados para preparar el equipo y conectarlo a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Las acciones en el lado del fabricante pueden variar según la revisión de firmware, la versión de hardware, las herramientas del proveedor y la forma en que se instala el dispositivo. Los comandos de ejemplo mostrados en esta página reflejan contenido de configuración pública y deben combinarse con la documentación oficial de Megastek para detalles específicos del equipo.

## Resumen de configuración

El proceso de configuración prepara el MT65PLUS para comunicarse de forma fiable con Plaspy y reportar ubicación y telemetría al endpoint común de la plataforma. Para equipos MT65PLUS, los pasos básicos suelen incluir identificar el dispositivo, configurar el APN del operador, ajustar el servidor GPRS y habilitar el modo de datos para que Plaspy reciba actualizaciones periódicas.

- Asegúrese de que el dispositivo esté identificado en la plataforma para que Plaspy pueda mostrarlo en la lista de la flota y en los mapas.
- Configure el APN del operador y, si aplica, las credenciales para que el dispositivo establezca una conexión de datos móviles.
- Apunte el equipo al endpoint del servidor Plaspy para que ubicación y eventos se reenvíen a la plataforma.
- Establezca el intervalo de reporte según las necesidades de monitoreo y las consideraciones de ancho de banda.
- Valide la conectividad y el reporte de telemetría en Plaspy después de aplicar la configuración.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com como el hostname canónico para ingestión en Plaspy.
- IP del servidor 54.85.159.138 como la dirección pública para configuración directa del dispositivo.
- Puerto 8888 que es el puerto único usado por Plaspy para todos los dispositivos compatibles.
- Soporte de transporte por UDP o TCP según la opción de configuración del dispositivo.
- Detección automática del protocolo en Plaspy: la plataforma detectará el protocolo del rastreador una vez que lleguen mensajes al puerto compartido.

## Requisitos típicos antes de la configuración

- Una unidad MT65PLUS con batería cargada y el IMEI del dispositivo disponible para identificación.
- Una tarjeta SIM activa insertada y capaz de GPRS o datos móviles según requiera el equipo.
- Un teléfono o gateway SMS capaz de enviar mensajes de configuración si va a usar provisión por SMS.
- Acceso al método de configuración oficial de Megastek o al software del proveedor y al manual del dispositivo como referencia.
- La contraseña por defecto del equipo si se requiere para comandos SMS de configuración inicial, tal como se muestra en los ejemplos.
- Una cuenta en Plaspy y cualquier dato de registro en la plataforma que usted utilice habitualmente para incorporar nuevos dispositivos.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el MT65PLUS envía datos de ubicación y eventos a Plaspy usando el endpoint y puerto compartido de la plataforma. Plaspy determina automáticamente el protocolo del dispositivo a partir de los mensajes entrantes, por lo que a menudo no es necesario seleccionar un protocolo específico en el equipo más allá del tipo de transporte.

- El rastreador se configura para reenviar datos GPRS al endpoint de Plaspy en 54.85.159.138 puerto 8888.
- Plaspy acepta transporte UDP o TCP y detecta automáticamente el protocolo de los mensajes.
- Actualizaciones de ubicación, eventos de manipulación y SOS, y telemetría disponible se entregan a Plaspy para monitoreo en tiempo real.
- Debe habilitarse el intervalo de reporte y el modo GPRS para que el dispositivo inicie sesiones de datos hacia Plaspy.
- Una vez que el dispositivo comience a enviar, Plaspy mostrará el equipo en línea y registrará eventos para reproducción histórica.

## Flujo de configuración habitual

1. Acceda al método oficial de configuración Megastek para MT65PLUS, como la provisión por SMS o la herramienta de configuración del proveedor indicada en el manual del dispositivo.
2. Introduzca la dirección del servidor Plaspy ya sea como d.plaspy.com o la IP 54.85.159.138 en el campo de configuración del servidor.
3. Establezca el puerto del servidor a 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP como transporte si el equipo requiere una selección explícita.
5. Aplique o guarde la configuración y, si utiliza SMS, confirme que el dispositivo aceptó cada comando.
6. Reinicie el dispositivo si el fabricante o el procedimiento empleado lo requieren para que los ajustes entren en vigor.
7. Verifique que el dispositivo reporte a Plaspy comprobando el estado del equipo y los mensajes recientes en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El MT65PLUS puede configurarse mediante comandos SMS. El ejemplo público que sigue respeta los patrones de comando proporcionados por el fabricante. La contraseña SMS por defecto mostrada en la muestra del fabricante es 000000. Reemplace los marcadores según se indica antes de enviar.

Notas sobre los marcadores de posición
- {{imei}} se refiere al número IMEI del dispositivo. Cuando el equipo requiere un identificador de 15 dígitos derivado del IMEI, use los últimos 15 dígitos del IMEI, rellenando si es necesario.
- {{apn}}, {{apnu}} y {{apnp}} son marcadores para el APN del operador, el nombre de usuario del APN y la contraseña del APN, respectivamente. Proporcione solo los campos que requiera su operador móvil.

Set device ID using the device password and a 15 digit device identifier
```
M000000,22,<last15digits_of_IMEI>
```

Set the operator APN. Use only the APN if no username or password is required
```
M000000,23,{{apn}}
```

Or include APN username and password if required by the operator
```
M000000,23,{{apn}},{{apnu}},{{apnp}}
```

Set the update interval to 60 seconds
```
M000000,25,60
```

Set the GPRS server following the manufacturer sample. This example uses the Plaspy IP and port
```
M000000,24,56 54.85.159.138,8888
```

Enable GPRS mode so the device uses cellular data to report
```
M000000,21,2
```

Importante
- Los ejemplos de comandos anteriores siguen el patrón público del fabricante. Verifique si su equipo espera la dirección del servidor como IP, como hostname o en un formato indexado específico antes de enviar comandos.
- El comando de ejemplo que establece el servidor GPRS incluye un valor de índice de servidor mostrado como 56 en la muestra del fabricante. Conserve el índice si la sintaxis del comando del equipo lo requiere.

## Notas de configuración

- La provisión vía SMS se utiliza frecuentemente para la configuración inicial, aunque puede haber herramientas del proveedor o configuración por USB según la versión de firmware y hardware.
- Las versiones de firmware y las variaciones regionales pueden cambiar la sintaxis de los comandos o los parámetros soportados. Confirme siempre con el manual Megastek para la revisión de firmware específica de su equipo.
- Elija UDP o TCP según sus preferencias de despliegue y la guía del fabricante; Plaspy detectará automáticamente el protocolo una vez que lleguen mensajes.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos, por lo que asegúrese de que firewalls y políticas de red permitan tráfico saliente hacia d.plaspy.com o 54.85.159.138 por ese puerto.
- Mantenga la contraseña del dispositivo segura y siga las políticas de su organización al distribuir credenciales de provisión.

## Por qué usar Plaspy con esta configuración

Usar el MT65PLUS con Plaspy ofrece visibilidad consolidad para programas de supervisión. Cuando el equipo se configura para reportar al servidor Plaspy, la ubicación, eventos de manipulación, alertas SOS y la telemetría disponible quedan visibles para supervisores a través de los mapas y los flujos de eventos de Plaspy. Esto ayuda a las organizaciones a mantener conciencia situacional y a actuar rápidamente ante incidentes.

To learn more about Plaspy visit https://www.plaspy.com. For the latest device specific configuration methods, firmware notes, and manufacturer instructions consult Megastek documentation at https://www.megastek.com/ to verify current behavior and the exact commands for your MT65PLUS firmware and region.
