---
slug: /reachfar/rf_v32/configuration
id: rf_v32-configuration
sidebar_label: Configuration
title: Reachfar - RF-V32 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Reachfar RF-V32 para Plaspy con ajustes de servidor y guía práctica para seguimiento de animales
keywords:
  - Configuración Reachfar RF-V32
  - Instalación Reachfar RF-V32
  - configuración rastreador GPS Reachfar
  - integración Plaspy
  - configuración rastreador mascota
  - configuración rastreador ganado
  - configuración GPRS TCP rastreador
  - compatibilidad RF V32 Plaspy
  - configuración rastreador GPS animal
  - configuración servidor rastreador GPS
---

# Reachfar - RF-V32: Configuración

Esta página documenta el contexto público de configuración para usar el Reachfar RF-V32 con Plaspy. Resume los ajustes prácticos del servidor y los pasos de configuración comúnmente empleados para integrar este rastreador GPS para mascotas y ganado, de modo que pueda enviar ubicaciones y alarmas a la plataforma Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; los pasos exactos en el equipo del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía como la referencia práctica enfocada en Plaspy y consulte la documentación de Reachfar para procedimientos específicos del dispositivo.

## Resumen de la configuración

El objetivo de esta configuración es apuntar el RF-V32 a Plaspy para que el equipo pueda subir datos de ubicación y alarmas de forma fiable mediante GPRS TCP/IP. Plaspy utiliza un único endpoint y puerto compartido para todos los rastreadores soportados y detectará el protocolo del dispositivo automáticamente, por lo que la configuración se centra en ingresar los ajustes correctos de servidor y transporte y validar la conectividad.

- Configure el RF-V32 para que reporte a Plaspy introduciendo la dirección del servidor y los parámetros de transporte de Plaspy.
- Asegúrese de que el dispositivo tenga una SIM operativa y conectividad GPRS para poder abrir una sesión de datos con Plaspy.
- Valide que las ubicaciones y alarmas lleguen a Plaspy después de la configuración.
- Guarde y, si es necesario, reinicie el RF-V32 para que los nuevos ajustes entren en vigor.
- Confirme que las alertas de geocerca, batería baja y cambio de SIM se reenvían a Plaspy según lo esperado.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol

Estos valores son la información pública del endpoint de Plaspy usada para recibir datos del RF-V32. Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del dispositivo una vez que éste apunte al servidor.

## Requisitos habituales antes de configurar

- Un RF-V32 con batería cargada y acceso físico al equipo para realizar la configuración.
- Una tarjeta SIM válida con datos móviles habilitados y GPRS permitido para reportes TCP/IP.
- Acceso al método de configuración Reachfar que utilice su equipo (app del fabricante, comandos SMS o herramienta de PC).
- Una cuenta en Plaspy y conocimiento de cómo visualizar dispositivos entrantes en la plataforma para validar la conexión.
- Un lugar despejado o colocación temporal al aire libre para obtener las primeras fijaciones GPS durante las pruebas.
- Conocimientos básicos para elegir entre UDP o TCP según la interfaz de configuración del dispositivo.

## Cómo se conecta este rastreador a Plaspy

El RF-V32 envía datos de ubicación y alarmas a Plaspy a través de GPRS usando reportes TCP/IP, o por SMS según la configuración. Al apuntarlo a Plaspy, el dispositivo se dirige al endpoint compartido para que la telemetría y los eventos entren en el panel de Plaspy, permitiendo monitoreo en tiempo real y reproducción histórica.

- El equipo abre una sesión GPRS TCP/IP hacia d.plaspy.com en el puerto 8888 y transmite paquetes de posición y alarmas.
- Plaspy reconoce automáticamente el protocolo del rastreador y analiza los datos entrantes para visualizarlos en el mapa.
- Alarmas como ruptura de geocerca, batería baja y cambio de SIM se reenvían a la plataforma Plaspy según la configuración del rastreador.
- Los trazados históricos subidos por el RF-V32 están disponibles en Plaspy para reproducción y análisis.
- El transporte puede configurarse como UDP o TCP en el dispositivo si es necesario; Plaspy acepta ambos.

## Flujo típico de configuración

1. Acceda al método oficial de configuración Reachfar para el RF-V32 (app del fabricante, conjunto de comandos SMS o herramienta de PC).
2. Introduzca el dominio del servidor d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Ajuste el puerto del dispositivo a 8888 como puerto de reporte de datos.
4. Elija UDP o TCP si el dispositivo requiere seleccionar un protocolo de transporte.
5. Aplique o guarde la configuración usando la herramienta o el método de comandos Reachfar.
6. Reinicie el RF-V32 si el dispositivo o las instrucciones indican que es necesario para que los cambios tengan efecto.
7. Valide que el dispositivo reporta a Plaspy comprobando en el panel de Plaspy la primera ubicación del dispositivo o un mensaje de estado inicial.

## Comandos de configuración de ejemplo

El RF-V32 puede configurarse usando comandos SMS publicados por Reachfar, la app móvil o herramientas de configuración para PC, según el firmware y la distribución del vendedor. La sintaxis exacta de los comandos y los parámetros disponibles dependen de la versión de firmware y del conjunto de comandos del proveedor. Al usar un comando SMS Reachfar o la herramienta de configuración, las acciones públicas suelen ser establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, luego elegir UDP o TCP si es necesario y guardar los ajustes.

Si dispone de una referencia de comandos Reachfar por parte de su proveedor, utilícela para ingresar los siguientes valores públicos:
- server: d.plaspy.com (or 54.85.159.138)
- port: 8888
- transport: UDP or TCP

Consulte el manual de usuario Reachfar o las instrucciones del proveedor para la sintaxis exacta de los comandos SMS o del archivo de configuración según la versión de firmware de su RF-V32.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los comandos disponibles y las rutas de menú; confirme el procedimiento correcto para su unidad antes de aplicar ajustes.
- Elija TCP cuando se prefieran conexiones persistentes y confirmación de entrega, o UDP si el dispositivo y las condiciones de red favorecen menor overhead; Plaspy acepta ambos transportes.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica implementaciones con múltiples equipos y reduce errores de configuración.
- Si el RF-V32 admite configuración por SMS, úsela para la puesta a punto inicial o cuando la conectividad de datos aún no esté disponible, y luego cambie a reportes por GPRS apuntando a d.plaspy.com puerto 8888.
- Dado que el RF-V32 está orientado al seguimiento de mascotas y ganado, confirme los tipos de alarma esperados y los intervalos de reporte en la documentación de Reachfar.

## Por qué usar Plaspy con esta configuración

Usar el RF-V32 con Plaspy ofrece una forma práctica de obtener visibilidad casi en tiempo real de mascotas y ganado desde una única plataforma unificada. Apuntar el RF-V32 a Plaspy permite a organizaciones y propietarios recibir actualizaciones de ubicación, alertas de geocerca y reproducción de trazas históricas para reaccionar rápidamente ante escapes, monitorear patrones de pastoreo y rastrear movimientos animales a lo largo del tiempo.

To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the latest device-specific configuration commands, firmware notes, and manufacturer support for the RF-V32, verify current details on the Reachfar website https://www.reachfargps.com/.
