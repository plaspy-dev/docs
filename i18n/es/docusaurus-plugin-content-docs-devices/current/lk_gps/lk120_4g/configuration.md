---
slug: /lk_gps/lk120_4g/configuration
id: lk120_4g-configuration
sidebar_label: Configuration
title: LK-GPS - LK120-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del LK GPS LK120 4G con ajustes de servidor Plaspy y pasos prácticos
keywords:
  - configuración LK GPS LK120 4G
  - instalación LK GPS LK120 4G
  - integración LK120 4G con Plaspy
  - configuración servidor Plaspy
  - configuración rastreador GPS Plaspy
  - configuración rastreador LK GPS
  - guía configuración rastreador GPS
  - rastreador para mascotas LK120 4G
  - configuración seguimiento en tiempo real
  - configuración geocerca y SOS
---

# LK-GPS - Configuración del LK120-4G

Esta página describe la configuración pública necesaria para usar el rastreador LK-GPS LK120-4G con Plaspy. Resume los ajustes prácticos y el flujo de trabajo para apuntar el dispositivo al servidor de Plaspy, de modo que el rastreador entregue datos de ubicación, SOS y telemetría a la plataforma. La información aquí se basa en hechos de integración públicos y la descripción del dispositivo, incluyendo asistencia GPS, actualizaciones frecuentes de posición y parámetros configurables por SMS.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, de modo que los dispositivos pueden reportar sin selección manual del protocolo en el servidor. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use esta guía para aplicar los ajustes públicos de Plaspy y consulte la documentación oficial de LK GPS para comandos o formatos SMS específicos del dispositivo.

## Resumen de la configuración

Preparar el LK120-4G para funcionar con Plaspy se centra en configurar el dispositivo para que reporte al endpoint compartido de Plaspy y confirmar la conectividad para que el dispositivo sea visible en la plataforma. El objetivo es un camino de reporte sencillo desde el rastreador hacia Plaspy para que la visualización en el mapa en tiempo real, las alertas de geocerca y los eventos SOS lleguen a su cuenta.

- Ingrese el endpoint o IP del servidor Plaspy en el rastreador usando el método de configuración del fabricante.
- Verifique que el dispositivo use el puerto de Plaspy para que los reportes lleguen al puerto receptor correcto en la plataforma.
- Elija UDP o TCP en el rastreador si el dispositivo requiere seleccionar el tipo de transporte.
- Confirme la conectividad de la SIM y la red para que el LK120-4G pueda enviar mensajes de ubicación y eventos.
- Valide que el dispositivo aparezca en Plaspy y que las actualizaciones de posición, SOS y telemetría se reciban correctamente.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de servidor Plaspy al configurar el LK120-4G. Estos valores son el endpoint compartido que Plaspy utiliza para todos los dispositivos compatibles y son necesarios para que el reporte funcione correctamente.

- servidor dominio d.plaspy.com
- servidor IP 54.85.159.138
- puerto 8888
- transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y todos los dispositivos usan el mismo puerto

## Requisitos típicos antes de la configuración

- Una unidad LK120-4G cargada, encendida y accesible para configuración.
- Una tarjeta SIM activa con datos y SMS habilitados si el dispositivo usa conectividad GSM/LTE.
- Acceso al método oficial de configuración de LK GPS, como la app del proveedor, la herramienta web o la interfaz de comandos por SMS.
- El IMEI del dispositivo y cualquier dato de registro requerido para su cuenta Plaspy.
- Cobertura celular confiable en el lugar de instalación para una correcta conectividad GPS y GSM.
- Una cuenta Plaspy donde pueda verificar el dispositivo una vez que empiece a reportar al servidor.

## Cómo se conecta este rastreador a Plaspy

Al configurar el equipo, el LK120-4G envía su ubicación y telemetría de eventos a Plaspy usando el endpoint y puerto compartidos. Plaspy recibe esos mensajes, aplica detección automática de protocolo y muestra la posición en vivo, alertas SOS e historial en la plataforma.

- El dispositivo se configura para reportar al endpoint d.plaspy.com o a la IP 54.85.159.138.
- Todos los reportes se envían al puerto 8888, que Plaspy utiliza para los dispositivos compatibles.
- El transporte puede ser UDP o TCP según la opción de configuración del rastreador; Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no se requiere una selección especial en el servidor.
- Las actualizaciones de posición, eventos SOS y telemetría llegan a Plaspy y están disponibles para visualización en el mapa, alertas y registro de historial.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de LK GPS suministrado por el fabricante (app, herramienta web o comandos SMS).
2. Ingrese el endpoint de Plaspy por dominio d.plaspy.com o por IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para que el tráfico llegue al puerto receptor de Plaspy.
4. Seleccione UDP o TCP si el dispositivo requiere elegir el tipo de transporte durante la configuración.
5. Aplique o guarde la configuración usando la herramienta del fabricante o enviando el comando SMS correspondiente.
6. Reinicie el dispositivo si las instrucciones del fabricante indican que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy comprobando su visibilidad y las actualizaciones en vivo en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El LK120-4G admite métodos de configuración por SMS y por el software del proveedor, pero los comandos públicos exactos varían según el firmware y la SKU regional. Dado que la sintaxis de los comandos y las herramientas de los fabricantes difieren, no se reproducen aquí las cadenas SMS precisas ni los campos de la interfaz web. Use la documentación oficial de LK GPS o la app del proveedor para aplicar el dominio o la IP del servidor, establecer el puerto 8888 y seleccionar UDP o TCP según sea necesario.

Si dispone de comandos SMS proporcionados por el fabricante o de una herramienta de configuración, aplique los pasos del Flujo de trabajo común y verifique que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888. Para plantillas SMS y marcadores específicos del dispositivo, consulte la documentación de LK GPS.

## Notas de configuración

- El comportamiento puede variar entre versiones de firmware y revisiones de hardware; confirme siempre la sintaxis SMS correcta o los ajustes en la aplicación con la documentación actual de LK GPS.
- Elija UDP o TCP según lo requiera la interfaz del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- El endpoint d.plaspy.com y la IP 54.85.159.138 con puerto 8888 son los ajustes compartidos usados para todos los dispositivos compatibles.
- Asegúrese de que el APN de la SIM y los ajustes del operador sean correctos para que el rastreador pueda establecer una conexión de datos antes de intentar enviar reportes.
- Registre o identifique el IMEI del dispositivo en su cuenta Plaspy si su flujo de incorporación lo requiere, de modo que los reportes entrantes se asocien con el dispositivo correcto.

## Por qué usar Plaspy con esta configuración

Usar el LK120-4G con Plaspy ofrece una forma práctica de centralizar la ubicación en vivo, alertas SOS, geocercas e historial de rutas para seguimiento de mascotas y personas. Los ajustes de servidor compartidos de Plaspy simplifican la integración: el rastreador solo necesita apuntar al endpoint y puerto estandarizados, y Plaspy detectará el protocolo automáticamente y procesará la telemetría entrante.

Para saber más sobre Plaspy y cómo presenta el seguimiento en vivo, alertas e historial para dispositivos compatibles visite https://www.plaspy.com. Para métodos de configuración específicos por dispositivo, notas de firmware y formatos de comandos SMS consulte la documentación oficial de LK GPS en https://www.lk-gps.com para asegurarse de aplicar los comandos y procedimientos correctos.
