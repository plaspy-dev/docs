---
slug: /ruptela/fm_eco4_light/protocol
id: fm_eco4_light-protocol
sidebar_label: Protocol
title: Ruptela - FM-ECO4 Light Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el Ruptela FM-ECO4 Light con Plaspy, con ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo Ruptela FM-ECO4 Light
  - Protocolo GPS Ruptela FM-ECO4 Light
  - Protocolo Ruptela FM-ECO4 Light para Plaspy
  - Protocolo de comunicación Ruptela FM-ECO4 Light
  - Protocolo de rastreo Ruptela FM-ECO4 Light
  - Compatibilidad rastreador Ruptela con Plaspy
  - Integración FM ECO4 Light
  - Rastreo de vehículos Ruptela
  - Rastreo de flotas Ruptela FM ECO4
  - Protocolo de dispositivo Plaspy
---

# Ruptela - Protocolo FM-ECO4 Light

Esta página explica el contexto público del protocolo para usar el rastreador Ruptela FM-ECO4 Light con Plaspy. Se enfoca en cómo el dispositivo comunica datos con el endpoint de Plaspy y qué aspectos de esa comunicación son relevantes para una integración exitosa, evitando detalles de implementación sensibles.

Plaspy utiliza una configuración de conexión compartida entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El FM-ECO4 Light es un rastreador compacto para vehículos con antenas GNSS y GSM integradas y funcionalidades como reporte de ubicación, monitoreo de velocidad y kilometraje, telemetría de combustible y temperatura, identificación de conductor y salidas remotas; esas capacidades se exponen a una plataforma de flotas mediante el protocolo de reporte del dispositivo y la capa de transporte.

## Resumen del protocolo

El protocolo del FM-ECO4 Light es el mecanismo de comunicación que el rastreador usa para enviar telemetría y estado a un servidor remoto y, cuando está soportado, para recibir comandos remotos o actualizaciones de configuración. En el contexto de Plaspy, el protocolo permite que el dispositivo se identifique, reporte ubicación y datos de sensores, y transmita eventos o cambios de estado útiles para operaciones de flota.

- Permite reportes periódicos y basados en eventos de ubicación GPS, movimiento y sensores básicos del vehículo a un servidor central.
- Transporta telemetría relevante para la gestión de flotas como velocidad, kilometraje, combustible o temperatura, cuando el dispositivo expone esos sensores.
- Incluye mecanismos de identificación del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correspondiente.
- Puede transportar identificación de conductor y el estado de entradas digitales, apoyando funciones de comportamiento del conductor y eco conducción.
- Soporta flujos de configuración y control remoto implementados por el fabricante según las capacidades del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint de red compartido y emplea detección automática para mapear los mensajes entrantes al perfil correcto del rastreador. Cuando un FM-ECO4 Light está configurado para reportar a Plaspy, la plataforma normalmente identificará el tipo de dispositivo e interpretará la telemetría sin que sea necesaria una selección manual de protocolo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las opciones del rastreador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que un dispositivo configurado correctamente suele comenzar a reportar sin pasos adicionales en el panel.
- Si un dispositivo utiliza puertos o endpoints no estándar, lo habitual es ajustar la configuración del equipo para apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Transporte y contexto de la conexión

La elección del transporte afecta cómo el FM-ECO4 Light envía datos a Plaspy y cómo la plataforma los recibe. El dispositivo soporta transporte celular estándar sobre TCP o UDP y debe apuntar al endpoint de Plaspy para asegurar la entrega confiable.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888; seleccione el método de transporte que se ajuste a sus requisitos de despliegue.
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección de servidor al enviar reportes a Plaspy.
- El puerto es 8888 y Plaspy utiliza este mismo puerto en todos los dispositivos soportados para mantener consistencia.
- UDP se usa típicamente para reportes de bajo overhead, mientras que TCP puede elegirse cuando se requiere entrega confiable o comportamiento de sesión, según las capacidades del firmware.
- Verifique el APN y la configuración de red en la SIM para asegurar que el rastreador pueda alcanzar el dominio o la IP de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar las funciones disponibles, los tiempos de mensajes y los transportes soportados; confirme siempre la versión de firmware del dispositivo.
- Las revisiones de hardware y los accesorios opcionales pueden exponer sensores adicionales o entradas que afectan la telemetría disponible en Plaspy.
- Variantes del protocolo por parte del fabricante o modos de configuración pueden alterar cómo el dispositivo se identifica ante el servidor.
- La selección de transporte (UDP versus TCP) puede impactar la semántica de entrega de mensajes y debe elegirse acorde a los requisitos operativos y el soporte del firmware.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para integrarse con Plaspy de forma inmediata.
- Valide cualquier característica avanzada de comandos o configuración con la documentación oficial del fabricante antes de depender de ella en producción.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el FM-ECO4 Light ayuda a asegurar una configuración fluida, un diagnóstico efectivo y una operación estable a largo plazo en Plaspy. Conocer qué transporte y comportamientos de reporte esperar reduce el tiempo de integración y permite que los equipos de flota utilicen las funciones del rastreador de forma confiable.

- Reduce el tiempo de incorporación al ajustar la configuración de reporte del dispositivo a los requisitos del endpoint y puerto de Plaspy.
- Facilita el diagnóstico de problemas de conectividad al confirmar transporte, APN y configuración de la dirección del servidor.
- Permite interpretar correctamente la telemetría disponible como combustible, temperatura, kilometraje o identificación de conductor según capacidades del dispositivo.
- Orienta la provisión de red y SIM para optimizar el uso de datos y la confiabilidad.
- Aclara qué comportamientos dependen del firmware para que actualizaciones y cambios puedan planificarse y probarse.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-ECO4 Light con Plaspy ofrece una vía práctica hacia la visibilidad y supervisión operativa de su flota. La combinación de un rastreador compacto y rico en funciones con una plataforma que detecta automáticamente protocolos simplifica el reporte de ubicación, la telemetría de sensores y los eventos relacionados con el conductor, de modo que los equipos puedan concentrarse en rutas, eficiencia de combustible y cumplimiento normativo.

Si desea obtener más información sobre Plaspy y cómo maneja la conectividad de dispositivos y los datos de flota, visite https://www.plaspy.com. Para firmware más reciente, detalles de protocolo y notas de implementación del fabricante, verifique la información en https://ruptela.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
