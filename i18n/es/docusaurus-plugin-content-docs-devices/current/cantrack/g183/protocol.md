---
slug: /cantrack/g183/protocol
id: g183-protocol
sidebar_label: Protocol
title: CanTrack - G183 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CanTrack G183 y su integración con Plaspy, cubriendo conexión y compatibilidad
keywords:
  - Protocolo CanTrack G183
  - Protocolo GPS CanTrack G183
  - Protocolo CanTrack G183 Plaspy
  - Protocolo de rastreo G183
  - Comunicación GPS G183
  - Protocolo OBD GPS CanTrack
  - Protocolo telemático diagnóstico vehicular
  - Compatibilidad dispositivos Plaspy
  - Rastreo de flotas protocolo G183
  - Telemática G183 OBDII
---

# CanTrack - Protocolo G183

Esta página ofrece una visión pública del contexto de comunicación necesario para usar el rastreador CanTrack G183 con Plaspy. Explica las consideraciones clave de conexión e informe que importan al integrar ubicación, diagnósticos OBD y telemetría de eventos en la plataforma Plaspy, sin exponer detalles internos del firmware ni implementaciones privadas.

Plaspy acepta reportes de dispositivos a través de un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando un dispositivo envía datos al endpoint de Plaspy. El comportamiento exacto del protocolo G183 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que estas notas están pensadas para ayudar en la configuración y solución de problemas, acompañadas de la recomendación de verificar la documentación oficial del fabricante.

## Visión general del protocolo

El G183 utiliza un método de telemetría embarcada para enviar posición GNSS, diagnósticos OBD y alarmas de eventos a un servidor. En la práctica esto significa que el dispositivo envía periódica o eventualmente telemetría estructurada desde el vehículo hacia la nube para que Plaspy pueda procesar y mostrar información útil de posición, estado y diagnóstico.

- Permite la entrega en tiempo real y con buffer de posición, kilometraje, consumo de combustible y DTC desde el vehículo a Plaspy
- Permite que el rastreador se identifique y asocie la telemetría con el registro de un activo en Plaspy
- Soporta reporte de eventos como SOS, colisión, remolque y conexión o desconexión de alimentación para activar alertas y flujos de trabajo
- Realiza buffering local de eventos durante pérdidas temporales de conectividad para que Plaspy pueda reconstruir la actividad reciente después de la reconexión
- Integra parámetros a nivel OBD y la carga de códigos de diagnóstico (DTC) compatible con protocolos para flujos de mantenimiento

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto comunes y aplica detección automática de protocolo para identificar el formato de reporte del rastreador. En la mayoría de las implementaciones el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el G183 está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Los dispositivos que reportan al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 en el puerto de Plaspy son procesados por el mismo endpoint
- Cuando el G183 está configurado para reportar al endpoint de Plaspy, por lo general no es necesario seleccionar el protocolo desde la interfaz de Plaspy
- La detección automática se centra en identificar flujos de telemetría entrante para que Plaspy enrute y parse los datos de los dispositivos hacia dashboards y APIs
- La configuración correcta del dispositivo y el uso del endpoint de reporte adecuado son los factores más comunes que determinan el éxito de la detección automática

## Transporte y contexto de conexión

El G183 soporta reporte celular y puede configurarse para usar transporte TCP o UDP según la capacidad del módulo y los ajustes. Para la integración con Plaspy, el dispositivo debe apuntar al endpoint y puerto de Plaspy que usan todos los dispositivos para asegurar una entrega confiable.

- El G183 puede enviarse telemetría por TCP o UDP en el puerto 8888 según la configuración del dispositivo y las opciones del módulo celular
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138, que pueden usarse como destino de reporte
- El puerto 8888 se utiliza para el reporte de dispositivos y es el mismo puerto para todos los dispositivos soportados por Plaspy
- Elija TCP para entrega orientada a conexión o UDP cuando se prefiera menor sobrecarga y el firmware del dispositivo lo soporte
- Verifique que el APN y la provisión de la SIM permitan conexiones salientes al endpoint Plaspy elegido en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los formatos de reporte por defecto, los campos disponibles o el comportamiento de transporte; confirme siempre las notas de la versión del firmware
- Las variantes de hardware y las opciones de módulo celular pueden influir en los modos de transporte soportados y en el rendimiento GNSS
- La cobertura de protocolos OBD por parte del fabricante afecta qué parámetros del vehículo y qué DTCs puede leer y reenviar el rastreador
- La elección de transporte TCP versus UDP puede afectar garantías de entrega y la manera en que Plaspy procesa datos instantáneos frente a datos en buffer
- El reporte por SMS suele estar disponible como transporte alterno para mensajes específicos, pero requiere configuración y manejo por separado
- Valide la compatibilidad frente a la documentación oficial de CanTrack para limitaciones específicas del dispositivo y ajustes recomendados
- Al integrar a gran escala, pruebe un conjunto representativo de marcas de vehículos y niveles de firmware para identificar casos límite tempranamente

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del comportamiento de comunicación del G183 ayuda a asegurar una configuración exitosa, a acelerar la solución de problemas y a garantizar una operación más confiable a largo plazo dentro de Plaspy. Saber cómo reporta el dispositivo, qué transporte usa y cómo espera Plaspy los datos entrantes reduce la fricción en la integración y mejora la visibilidad operativa.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para permitir la detección automática
- Orienta la selección del transporte acorde a las condiciones de red y prioridades operativas para una entrega de telemetría confiable
- Facilita la solución de problemas de datos faltantes o incompletos al aislar diferencias de firmware o configuración
- Permite mejores planes de prueba para flotas mixtas con múltiples revisiones de hardware y versiones de firmware
- Mejora la configuración de alertas y flujos en Plaspy al entender qué eventos puede reportar el G183

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G183 con Plaspy ofrece una vía eficiente para combinar diagnósticos a nivel OBD con monitoreo de ubicación y eventos en tiempo real. Para operadores de flotas y proveedores de servicio, esta integración lleva la salud del vehículo, datos de viaje y eventos de alarma a los dashboards y APIs de Plaspy sin necesidad de ingeniería personalizada pesada.

Plaspy simplifica el onboarding de dispositivos al aceptar reportes en un endpoint y puerto compartidos y detectar automáticamente el protocolo del rastreador, lo que reduce pasos de configuración manual. Para conocer más sobre Plaspy y cómo maneja la conectividad y el análisis de dispositivos visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo del dispositivo y el firmware, verifique siempre la información con el fabricante en https://www.cantrackgps.com/ ya que el comportamiento del firmware y la implementación del dispositivo pueden cambiar con el tiempo.
