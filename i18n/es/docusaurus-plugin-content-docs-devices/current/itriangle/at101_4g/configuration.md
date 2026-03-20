---
slug: /itriangle/at101_4g/configuration
id: at101_4g-configuration
sidebar_label: Configuration
title: iTriangle - AT101 4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del iTriangle AT101 4G para Plaspy con ajustes de servidor y flujo de trabajo
keywords:
  - configuración iTriangle AT101 4G
  - instalación iTriangle AT101 4G
  - AT101 4G Plaspy
  - configuración de rastreador Plaspy
  - guía de configuración de rastreador GPS
  - configuración de seguimiento de vehículos
  - seguimiento de activos AT101 4G
  - configuración de rastreador GPS LTE
  - ajustes de servidor Plaspy
  - guía de integración de rastreadores
---

# iTriangle - AT101 4G Configuración

Esta página describe el contexto público de configuración para usar el rastreador iTriangle AT101 4G con Plaspy. Resume los ajustes de servidor compartidos que utiliza Plaspy, explica el flujo de trabajo habitual para preparar y registrar el dispositivo, y señala los requisitos típicos y las comprobaciones de verificación con las herramientas del fabricante o interfaces estándar de configuración.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El AT101 4G es un rastreador inalámbrico para activos con batería interna de gran capacidad, montaje magnético, GNSS multiconstelación, conectividad LTE/Cat 1 con fallback GSM, BLE 4.0 y capacidades OTA/FOTA; estas características influyen en las decisiones de instalación pero no cambian el endpoint y puerto compartidos que Plaspy requiere para recepción de reportes.

## Resumen de configuración

Preparar un AT101 4G para Plaspy consiste en configurar el dispositivo para enviar datos de ubicación y eventos a Plaspy y validar que los reportes lleguen correctamente a la plataforma. El proceso se centra en establecer el endpoint del servidor y el transporte, garantizar la conectividad móvil y confirmar que la telemetría se ingresa en Plaspy.

- Configure el dispositivo para reportar a Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 y el puerto 8888.
- Seleccione el protocolo de transporte que soporte el equipo, UDP o TCP; Plaspy aceptará cualquiera ya que detecta automáticamente el protocolo del rastreador.
- Verifique que el AT101 4G tenga conexión celular activa y batería suficiente para completar la configuración y el reporte inicial.
- Utilice el método o software de configuración oficial de iTriangle para aplicar los ajustes y, si es posible, realice actualizaciones OTA/FOTA antes de desplegar el dispositivo.
- Confirme en Plaspy que el rastreador es visible y está enviando la telemetría esperada, como eventos de movimiento, geocercas y alertas de manipulación.

## Ajustes del servidor de Plaspy

- Server domain: d.plaspy.com  
- Server IP: 54.85.159.138  
- Port: 8888  
- Transport: UDP or TCP are both supported by the device and accepted by Plaspy  
- Protocol detection: Plaspy automatically detects the tracker protocol so the same port is used for all devices

## Requisitos típicos antes de la configuración

- Un AT101 4G con batería cargada y suficiente autonomía para la configuración y el reporte inicial
- Una nano SIM activa con servicio de datos y cobertura de red compatible con el dispositivo
- Acceso al método de configuración o herramienta de gestión proporcionada por iTriangle
- Información básica de identidad del dispositivo, como IMEI o número de serie, para registrar o identificar la unidad en Plaspy
- Un lugar con señal celular confiable para la primera conexión y las comprobaciones de actualización OTA
- Acceso de administrador en Plaspy para verificar la visibilidad del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

El AT101 4G envía la ubicación derivada por GNSS y la telemetría de sensores a través de la red celular al endpoint y puerto compartidos de Plaspy. Una vez configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP, Plaspy procesará las actualizaciones de ubicación, eventos de movimiento, activaciones de geocerca, alertas de manipulación y otra telemetría compatible para su visualización y para el procesamiento de reglas.

- El dispositivo apunta a d.plaspy.com o 54.85.159.138 y puerto 8888 para alcanzar Plaspy
- Elija UDP o TCP si la configuración del dispositivo requiere seleccionar transporte
- Plaspy identifica automáticamente el protocolo del equipo y unifica la ingestión entre modelos
- Eventos de ubicación, movimiento, geocerca y manipulación se envían a Plaspy para mapas en tiempo real y alertas
- Los dispositivos con OTA/FOTA pueden recibir actualizaciones de firmware y configuración como parte de los flujos de gestión continuos

## Flujo de trabajo común de configuración

1. Acceda al método o software de configuración oficial de iTriangle proporcionado por el fabricante.
2. Ubique la sección de red o reporte al servidor en los ajustes del dispositivo.
3. Ingrese el servidor de Plaspy como d.plaspy.com o 54.85.159.138 en la dirección del servidor.
4. Configure el puerto del servidor en 8888.
5. Seleccione UDP o TCP si su dispositivo requiere elegir el transporte.
6. Aplique o guarde la configuración usando la herramienta del fabricante o la interfaz del dispositivo.
7. Reinicie el dispositivo si la herramienta o el firmware lo solicita.
8. Valide que el dispositivo reporte a Plaspy y aparezca en su cuenta con la telemetría esperada.

## Ejemplos de comandos de configuración

Los comandos exactos y la interfaz varían según la herramienta del fabricante, el firmware y si emplea SMS, una herramienta USB o una aplicación web/móvil. Muchas utilidades y firmwares de iTriangle solicitarán los mismos valores de Plaspy: servidor d.plaspy.com o 54.85.159.138, puerto 8888 y selección de transporte UDP o TCP. Dado que el firmware y las herramientas difieren por modelo, siga las instrucciones de iTriangle para emitir comandos de configuración o aplicar ajustes mediante su utilidad oficial.

## Notas de configuración

- Las diferencias de firmware y las revisiones de hardware pueden cambiar la ubicación de los ajustes de servidor o exigir pasos de configuración distintos; revise siempre los tooltips y las notas de versión de iTriangle.
- Elija UDP o TCP según la guía del fabricante y las condiciones de red; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Si el dispositivo soporta OTA/FOTA, considere actualizar el firmware antes de un despliegue masivo para asegurar un comportamiento consistente.
- Valide la identidad del dispositivo (IMEI o serie) frente a los registros de Plaspy para evitar entradas duplicadas o unidades mal identificadas.
- Para instalaciones inalámbricas, confirme los niveles de carga de batería y establezca una estrategia de verificaciones periódicas para evitar tiempo de inactividad inesperado.

## Por qué usar Plaspy con esta configuración

Usar el AT101 4G con Plaspy proporciona visibilidad centralizada para el seguimiento de activos, alertas de eventos y análisis histórico de rutas, todo a través de un único endpoint y puerto compartidos. La larga vida de batería del AT101, su GNSS multiconstelación, sensores de movimiento y manipulación, y sus capacidades OTA lo hacen apropiado para despliegues de bajo mantenimiento, donde la telemetría continua y la gestión remota a través de Plaspy reducen visitas de campo y mejoran la supervisión operativa.

Learn more about Plaspy on the main website https://www.plaspy.com. For the most current device-specific setup steps, firmware details, and manufacturer tools, verify the latest information on the official iTriangle website https://www.itriangle.net/.
