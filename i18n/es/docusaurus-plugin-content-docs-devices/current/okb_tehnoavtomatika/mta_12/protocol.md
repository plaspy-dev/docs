---
slug: /okb_tehnoavtomatika/mta_12/protocol
id: mta_12-protocol
sidebar_label: Protocol
title: OKB Tehnoavtomatika - MTA-12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del MTA-12 de OKB Tehnoavtomatika con Plaspy
keywords:
  - OKB Tehnoavtomatika MTA-12
  - rastreador GPS MTA-12
  - protocolo MTA-12
  - seguimiento CAN MTA-12
  - protocolo de seguimiento de vehículos
  - telemetría CAN
  - gestión de flotas Plaspy
  - compatibilidad con Plaspy
  - rastreador GPS GPRS
  - rastreador con notificaciones SMS
---

# OKB Tehnoavtomatika - Protocolo MTA-12

Esta página describe el contexto público del protocolo para usar el rastreador OKB Tehnoavtomatika MTA-12 con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, cómo Plaspy recibe y reconoce los reportes, y qué debe considerar al configurar el rastreador para enviar datos telemétricos y de bus CAN al sistema Plaspy.

Plaspy utiliza una configuración de conexión compartida para los dispositivos soportados y puede detectar automáticamente el protocolo del rastreador cuando el equipo está apuntando al endpoint de Plaspy. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es una guía general y no un manual de comandos específicos del dispositivo.

## Resumen del protocolo

El protocolo del MTA-12 permite al dispositivo transmitir posición, telemetría del bus CAN y notificaciones de estado a un servidor remoto para su procesamiento y visualización. En el MTA-12, los datos CAN enriquecen los reportes de posición GPS con parámetros del vehículo como nivel de combustible y estado de encendido, y el dispositivo admite múltiples canales de reporte incluyendo GPRS y SMS para notificaciones.

- Envía ubicación GPS y marca de tiempo a un servidor remoto para seguimiento y reproducción histórica
- Transmite telemetría derivada del bus CAN para informar sobre combustible, estado de encendido y otros diagnósticos del vehículo
- Soporta reportes periódicos y basados en eventos, adecuados para geocercas, cambios de estado y actualizaciones regulares
- Permite que las notificaciones lleguen vía GPRS a un servidor o se entreguen por SMS a un número configurado
- Funciona junto con las opciones de configuración del equipo para ajustar intervalos de reporte y filtros de eventos según el despliegue

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador a partir de los datos que envía el dispositivo. En la mayoría de configuraciones no es necesario seleccionar manualmente el protocolo dentro de Plaspy si el equipo está correctamente apuntado al servidor Plaspy y usa los parámetros de transporte compatibles.

- El endpoint del servidor Plaspy es d.plaspy.com y la IP directa es 54.85.159.138
- Plaspy escucha en el puerto 8888 para todas las conexiones de dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint
- Normalmente solo debe configurar el dispositivo para que reporte al endpoint de Plaspy y use el transporte soportado
- Si el dispositivo ofrece varios modos de reporte, asegúrese de que el modo activo esté configurado para enviar a d.plaspy.com en el puerto 8888

## Transporte y contexto de conexión

La capa de transporte y el destino del servidor son los detalles de conexión principales para que los reportes del MTA-12 lleguen a Plaspy. El MTA-12 puede reenviar datos sobre canales de datos celulares y también enviar alertas por SMS para eventos específicos; la integración más común con Plaspy utiliza GPRS para dirigir la telemetría al servidor Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para configuraciones con IP directa
- Todos los dispositivos en Plaspy usan el mismo puerto de reporte, lo que simplifica la puesta en marcha
- Elija UDP o TCP en el equipo de acuerdo con las necesidades de estabilidad y fiabilidad de su despliegue
- Verifique que el APN y los ajustes celulares del dispositivo sean correctos para que el MTA-12 pueda alcanzar d.plaspy.com o la IP del servidor

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del MTA-12 pueden cambiar qué campos de telemetría están disponibles y cómo se presentan los datos CAN
- Las variantes de hardware y las series de producción pueden exponer parámetros CAN distintos o comportamientos diferentes en entradas/salidas
- La elección entre UDP y TCP puede afectar las características de entrega y el comportamiento de acuse de recibo en la capa de red
- Los canales de notificación por SMS y GPRS son complementarios pero requieren configuración independiente en el dispositivo
- Valide la configuración y compatibilidad del equipo frente a la documentación oficial del fabricante y las notas de versión de firmware
- En caso de duda, pruebe un dispositivo en un entorno controlado para confirmar que la telemetría y los eventos esperados se entregan a Plaspy

## Por qué es importante entender el protocolo

Comprender cómo se comunica el MTA-12 ayuda a asegurar reportes fiables, una interpretación precisa de la telemetría y a agilizar la resolución cuando los dispositivos no se comportan como se espera. Saber qué datos puede suministrar el equipo y cómo se transportan a Plaspy reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Ayuda a elegir el modo de transporte y los ajustes apropiados según su cobertura y requisitos de fiabilidad
- Permite mapear correctamente las señales del bus CAN a los parámetros del vehículo en la plataforma de seguimiento
- Simplifica el diagnóstico de reportes perdidos o telemetría inconsistente durante despliegues en campo
- Facilita una mejor configuración de filtros de eventos e intervalos de reporte para equilibrar datos y costos
- Proporciona contexto sobre cambios de firmware que pueden afectar campos de datos y comportamiento

## Por qué usar Plaspy con este protocolo

Usar el MTA-12 con Plaspy ofrece una forma sencilla de consolidar ubicación GPS, telemetría de bus CAN y notificaciones de eventos en una única plataforma de gestión de flotas. El enfoque de endpoint compartido de Plaspy reduce la complejidad de configuración por dispositivo y permite que las flotas se concentren en el despliegue y los flujos operativos en lugar de en los detalles de conexión individuales.

Para obtener más información sobre cómo Plaspy maneja las integraciones de dispositivos y explorar las capacidades de la plataforma visite https://www.plaspy.com. Para detalles más actuales y específicos del dispositivo sobre protocolo, firmware e implementación del MTA-12, consulte la documentación oficial de OKB Tehnoavtomatika en http://www.okb-ta.ru/ ya que el comportamiento del fabricante y el soporte de firmware pueden cambiar con el tiempo.
