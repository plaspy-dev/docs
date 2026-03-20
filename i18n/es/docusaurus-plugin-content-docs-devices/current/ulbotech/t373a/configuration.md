---
slug: /ulbotech/t373a/configuration
id: t373a-configuration
sidebar_label: Configuration
title: Ulbotech - T373A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador OBD II Ulbotech T373A a Plaspy con ajustes de servidor y flujo de configuración
keywords:
  - configuración Ulbotech T373A
  - instalación Ulbotech T373A
  - integración T373A Plaspy
  - rastreador OBD II T373A
  - rastreo vehicular T373A
  - gestión de flotas T373A
  - configuración rastreador GPS Ulbotech
  - configuración rastreador Plaspy
  - configuración rastreador OBDII GPS
  - configuración servidor T373A
---

# Ulbotech - T373A Configuración

Esta página describe el contexto de configuración pública para utilizar el rastreador OBD II plug and play Ulbotech T373A con la plataforma Plaspy. Está enfocada en los ajustes prácticos de servidor y el flujo de trabajo común necesario para apuntar el dispositivo a Plaspy, de modo que el rastreador entregue ubicación en tiempo real y telemetría del vehículo a su cuenta Plaspy.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos de configuración por parte del fabricante para el T373A pueden variar según la versión de firmware, la revisión de hardware, el entorno de instalación y las herramientas del proveedor. Use esta guía para preparar y validar el dispositivo para Plaspy y consulte al fabricante cuando necesite instrucciones específicas de firmware.

## Resumen de la configuración

El objetivo del proceso de configuración es garantizar que el T373A informe ubicación y telemetría OBD II de forma confiable al endpoint de Plaspy para que los datos estén disponibles en la plataforma para monitoreo y análisis. Esto implica establecer la dirección del servidor del rastreador, el transporte y el puerto, verificar la conectividad celular y los datos OBD II, y confirmar que el dispositivo sea visible en Plaspy.

- Apuntar el T373A al endpoint y puerto del servidor de Plaspy para que la telemetría se envíe directamente a la plataforma.
- Seleccionar el transporte (UDP o TCP) si el dispositivo exige configurar un tipo de transporte.
- Confirmar la conectividad a la red celular y que haya una SIM válida en el dispositivo durante la configuración.
- Validar que la telemetría OBD II y las soluciones GNSS se estén reportando a la plataforma.
- Guardar y aplicar la configuración en el dispositivo y luego probar el envío de datos a Plaspy.

## Ajustes de servidor de Plaspy

Utilice estos valores públicos de servidor al configurar el T373A para Plaspy. Plaspy emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte compatible UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la instalación

- Acceso físico al puerto OBD II del vehículo para instalación plug and play y alimentación desde el vehículo.
- Una micro SIM USIM válida con plan de datos insertada en el T373A; el T373A soporta redes GSM y WCDMA multibanda.
- Acceso al método oficial de configuración de Ulbotech o al software provisto, como la herramienta de PC del proveedor, la interfaz micro USB de depuración, o comandos SMS aprobados cuando estén disponibles.
- Una cuenta de Plaspy o acceso de administrador para validar que el rastreador aparece y envía datos en la plataforma.
- Verificaciones diagnósticas básicas, como confirmar bloqueo GNSS y campos de datos OBD II (RPM, velocidad, temperatura del refrigerante) en el dispositivo antes del despliegue final.

## Cómo se conecta este rastreador a Plaspy

El T373A transmite datos de posición GNSS y telemetría OBD II enriquecida al endpoint de Plaspy para que la plataforma normalice y visualice el estado del vehículo, fallas y eventos. El dispositivo se comunica a través de la red celular y se configura para enviar datos al endpoint y puerto compartidos de Plaspy.

- El rastreador se configura para enviar paquetes UDP o TCP a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Las coordenadas GNSS y los eventos de movimiento se transmiten a Plaspy para mapas en vivo y alertas.
- Parámetros OBD II como RPM, velocidad, datos de combustible y códigos de diagnóstico se envían a Plaspy para generación de reportes y análisis.
- El envío de eventos del acelerómetro y disparadores de geocerca se reenvía a Plaspy para notificaciones.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, por lo que no es necesaria ninguna selección manual del protocolo en la plataforma.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Ulbotech para el T373A (herramienta de PC del proveedor, interfaz micro USB o canal de configuración aprobado).
2. En los ajustes del servidor del dispositivo ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo en 8888 ya que Plaspy utiliza un puerto uniforme para todos los dispositivos.
4. Si el firmware del dispositivo requiere seleccionar transporte, elija UDP o TCP según su preferencia de instalación.
5. Aplique o guarde la configuración en la herramienta del dispositivo y confirme que el rastreador aceptó los ajustes.
6. Reinicie o haga un ciclo de energía al T373A si las instrucciones del fabricante requieren un reinicio para que los cambios surtan efecto.
7. Valide que el rastreador informa a Plaspy verificando la visibilidad del dispositivo y la telemetría entrante en su cuenta Plaspy.

## Ejemplos de comandos de configuración

El T373A admite múltiples métodos de configuración según el firmware y las herramientas del proveedor. Los comandos exactos varían según el software del fabricante, la versión de firmware y las variantes regionales del dispositivo. Consulte la herramienta de configuración oficial de Ulbotech o la documentación para la sintaxis de comandos y el método correcto para su unidad.

Si utiliza un método de comandos por SMS o serial proporcionado por Ulbotech, siga la guía del fabricante para formatear los parámetros de servidor, puerto y transporte. Tenga en cuenta que Plaspy acepta conexiones dirigidas a d.plaspy.com o 54.85.159.138 en el puerto 8888 y detectará automáticamente el protocolo del rastreador.

## Notas de configuración

- Las diferencias de firmware pueden cambiar la interfaz de usuario de configuración o la sintaxis de comandos; siempre revise las notas de la versión del firmware antes de aplicar cambios.
- Para instalaciones que requieran un transporte específico, TCP puede elegirse para entrega confiable, mientras que UDP se usa habitualmente por su menor sobrecarga; seleccione según las características de la red y del operador.
- El comportamiento del dispositivo, como la detección automática de APN y la disponibilidad de FOTA, depende del firmware instalado y del aprovisionamiento del operador de la SIM.
- Las prácticas de instalación pueden variar por mercado y tipo de vehículo; pruebe un dispositivo de extremo a extremo con Plaspy antes del despliegue masivo.
- Consulte la documentación de Ulbotech para cualquier método específico de configuración por SMS o por micro USB del T373A.

## Por qué usar Plaspy con esta configuración

Configurar el T373A para que informe a Plaspy proporciona visibilidad centralizada de la ubicación del vehículo, telemetría OBD II y comportamiento del conductor en una sola plataforma de gestión de flotas. Para flotas, empresas de alquiler, aseguradoras y servicios de asistencia en carretera, vincular los datos del T373A con Plaspy habilita mapas en vivo, alertas, diagnósticos y analítica para apoyar decisiones operativas y flujos de respuesta rápida.

To learn more about Plaspy and how the platform can work with compatible trackers such as the Ulbotech T373A visit https://www.plaspy.com. Device specific configuration steps, firmware behavior, and manufacturer details can change over time, so verify the latest setup instructions and technical specifications on the official Ulbotech website http://www.ulbotech.com/ before final deployment.
