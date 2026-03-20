---
slug: /jointech/gp_4000/configuration
id: gp_4000-configuration
sidebar_label: Configuration
title: Jointech - GP 4000 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el Jointech GP 4000 con Plaspy, incluye ajustes de servidor y comandos SMS de ejemplo
keywords:
  - configuración Jointech GP 4000
  - instalación Jointech GP 4000
  - GP 4000 Plaspy
  - configuración servidor GP 4000
  - configuración rastreador GPS
  - configuración seguimiento de vehículos
  - rastreador gestión de flotas
  - instalación rastreador Jointech
  - configuración GPRS GP 4000
  - integración rastreador Plaspy
---

# Jointech - Configuración GP 4000

Esta página describe el contexto público de configuración para usar el Jointech GP 4000 con la plataforma Plaspy. Resume los ajustes de servidor que Plaspy requiere, explica el flujo práctico de configuración y proporciona los comandos SMS públicos que se usan habitualmente para dirigir el GP 4000 a un servidor de rastreo remoto.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El GP 4000 soporta comunicaciones por SMS y GPRS mediante TCP o UDP; los comandos de ejemplo a continuación muestran cómo configurar el servidor GPRS y el APN por SMS según las referencias públicas de configuración.

## Resumen de configuración

El objetivo al configurar el GP 4000 para Plaspy es preparar el equipo para que establezca un enlace de datos estable con el endpoint compartido de Plaspy y asegurar que el dispositivo sea visible y reporte correctamente en la plataforma. La configuración normalmente define el host y puerto del servidor, establece las credenciales APN si son necesarias y valida que las actualizaciones de ubicación y estado lleguen a Plaspy.

- Apuntar el GP 4000 al endpoint de servidor de Plaspy para que envíe los datos de rastreo a la plataforma.
- Configurar el APN y, si aplica, el usuario y la contraseña del APN para habilitar datos GPRS.
- Elegir transporte UDP o TCP en el puerto 8888 según lo admita el dispositivo.
- Guardar o aplicar los ajustes y reiniciar el equipo cuando sea necesario.
- Validar que el dispositivo aparezca y reporte datos en Plaspy.

## Ajustes del servidor Plaspy

Utilice estos ajustes de servidor de Plaspy al configurar el Jointech GP 4000:

- dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- puerto 8888
- transporte compatible UDP o TCP
- detección automática del protocolo en Plaspy, por lo que no es necesario seleccionar el protocolo manualmente para su reconocimiento

Tenga en cuenta que todos los dispositivos en Plaspy usan el mismo puerto 8888 y Plaspy detectará automáticamente el protocolo del rastreador cuando el dispositivo se conecte.

## Requisitos previos típicos

- Una unidad GP 4000 con alimentación y una tarjeta SIM activa con datos si va a usar GPRS
- Acceso al ID del dispositivo que requiere el GP 4000 para aceptar comandos SMS
- Conocimiento del APN de la red y, opcionalmente, del usuario y contraseña del APN para la SIM
- Capacidad para enviar comandos SMS al dispositivo o acceso a la herramienta de configuración del fabricante si está disponible
- Medio para reiniciar o cortar la alimentación del dispositivo tras la configuración si se recomienda
- Confirmación de la versión de firmware o revisión de hardware por si el formato de comandos difiere

## Cómo se conecta este rastreador a Plaspy

El GP 4000 se configura para enviar datos de ubicación y del dispositivo por GPRS al endpoint compartido de Plaspy y al puerto correspondiente. Una vez definidos el host del servidor, el puerto y el APN, el rastreador establece una sesión TCP o UDP con Plaspy y transmite periódicamente posiciones y eventos para su monitoreo en la plataforma.

- El dispositivo usa GPRS TCP o UDP para abrir una conexión a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al puerto compartido
- Actualizaciones de ubicación, alarmas y mensajes de estado se reenvían a Plaspy para su visualización
- El reporte de eventos permite a los administradores de flota monitorear la actividad de los vehículos en Plaspy
- Si se requieren credenciales APN, deben configurarse para que el dispositivo pueda usar datos móviles

## Flujo de configuración típico

1. Acceda al método oficial de configuración Jointech para el GP 4000, como el conjunto de comandos SMS del fabricante o la herramienta de configuración del proveedor.
2. Introduzca la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138 como host del servidor.
3. Establezca el puerto en 8888, que es el puerto común de Plaspy para todos los dispositivos compatibles.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Configure el APN de la SIM y, si es necesario, el usuario y la contraseña del APN.
6. Aplique o guarde los ajustes y reinicie o corte la alimentación del dispositivo si lo recomienda el fabricante.
7. Verifique que el dispositivo se conecte correctamente y reporte a Plaspy comprobando el estado del equipo en la plataforma.

Si va a usar comandos SMS para configurar el GP 4000, siga el flujo de trabajo de SMS del fabricante y asegúrese de incluir el ID del dispositivo en cada comando según se requiera.

## Comandos de configuración de ejemplo

Los comandos SMS públicamente documentados para el GP 4000 que configuran el servidor GPRS y el APN se envían normalmente como mensajes SMS al número del dispositivo. Reemplace los marcadores por sus valores específicos del equipo.

1. Establecer el servidor GPRS y el APN
```
({{trackerID}},2,S02,129,1,54.85.159.138,8888,{{apn}})
```
- {{trackerID}} es el ID del dispositivo que el rastreador requiere para aceptar comandos.
- {{apn}} es la cadena APN del operador. Mantenga este marcador y sustitúyalo por el APN de su tarjeta SIM.

2. Opcional o condicional Establecer usuario y contraseña del APN
```
({{trackerID}},2,S24,129,1,{{apnu}},{{apnp}})
```
- {{apnu}} es el usuario APN si su operador lo requiere.
- {{apnp}} es la contraseña APN si su operador la solicita.
- Envíe este comando solo cuando su SIM requiera credenciales APN.

Notas sobre el uso de los comandos
- Estos comandos SMS reflejan el formato público de comandos del GP 4000. Preserve el orden cuando sean necesarios tanto el servidor como los comandos APN.
- Si su instalación lo requiere, envíe primero el comando del servidor y APN, y luego el comando de usuario/contraseña del APN.
- Si el dispositivo soporta configuración mediante una herramienta del proveedor o por USB, utilice ese método siguiendo la guía del fabricante.

## Notas de configuración

- El firmware y la sintaxis de comandos pueden variar entre revisiones de hardware; confirme el formato exacto del SMS para la versión de firmware de su GP 4000 antes de enviar comandos.
- Elija TCP o UDP según el comportamiento del equipo y la fiabilidad de la red; Plaspy acepta cualquiera de los dos transportes en el puerto 8888 y detectará automáticamente el protocolo.
- Los campos de usuario y contraseña del APN son opcionales en muchos operadores; incluya las credenciales del APN solo si su proveedor de SIM las solicita.
- La configuración por SMS está soportada por el GP 4000 según su documentación pública, pero las herramientas del fabricante pueden ofrecer una alternativa gráfica.
- Siempre confirme los ajustes con la documentación oficial de Jointech si está disponible para su revisión del dispositivo.

## Por qué usar Plaspy con esta configuración

Usar el Jointech GP 4000 con Plaspy ofrece una forma sencilla de centralizar la ubicación del vehículo, el estado y el reporte de eventos para el monitoreo de flotas y la supervisión operativa. Con el GP 4000 apuntando al endpoint compartido de Plaspy y configurado con el APN y transporte correctos, las organizaciones obtienen visibilidad en tiempo real y reportes coherentes en una única plataforma.

To learn more about Plaspy and how it works with supported trackers visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance verify current information at the Jointech website https://www.jointcontrols.com/ as setup details can change with firmware and hardware revisions.
