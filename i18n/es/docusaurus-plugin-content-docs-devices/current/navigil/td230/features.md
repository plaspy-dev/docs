---
slug: /navigil/td230/features
id: td230-features
sidebar_label: Features
title: Navigil - TD230 Features
sidebar_class_name: menu_item_tracker
description: Resumen claro de funciones del Navigil TD230 y cómo trabaja con Plaspy en geocercas reportes y gestión de energía
keywords:
  - Navigil TD230
  - funciones Navigil TD230
  - rastreador GPS Navigil TD230
  - funciones TD230
  - rastreador GPS TD230
  - rastreador GPS Navigil
  - compatibilidad TD230 Plaspy
  - soporte geocercas TD230
  - actualizaciones OTA TD230
  - gestión de energía TD230
---

# Navigil - Características del TD230

Esta página ofrece un resumen público de las funcionalidades disponibles al usar el rastreador Navigil TD230 con Plaspy. Describe las capacidades prácticas del TD230, los tipos de telemetría y comportamientos que el firmware suele soportar, y cómo esas capacidades se traducen en monitorización e informes dentro de la plataforma Plaspy.

La disponibilidad exacta de funciones en una unidad TD230 concreta puede variar según la versión de firmware, la revisión de hardware, el método de instalación o la configuración del fabricante. Cuando procede, esta página destaca las funciones más comunes que ofrece el firmware TG2 estándar y el software de producción del dispositivo, y recomienda verificar siempre la documentación del fabricante.

## Resumen de funciones

El Navigil TD230 se posiciona como un módulo de rastreo OEM con firmware listo para producción, pensado para integraciones rápidas en soluciones de clientes. Combina una membrana física personalizable con un firmware inteligente diseñado para ofrecer posicionamiento, detección de eventos y operación en bajo consumo para despliegues prolongados.

- Diseño orientado a OEM con membrana de interfaz personalizable que admite diferentes distribuciones de botones y LEDs para rebranding.
- Firmware TG2 listo para producción que implementa funciones comunes de rastreo como manejo de geocercas y monitorización del estado del vehículo.
- Actualizaciones por aire (OTA) del firmware y archivos de configuración para mantener los dispositivos actualizados sin acceso físico.
- Gestión inteligente de energía y modos de bajo consumo para extender la vida de la batería manteniendo comunicaciones periódicas con el servidor.
- SDK disponible para personalizar el comportamiento cuando los integradores necesiten adaptar el dispositivo a casos de uso específicos.

## Características principales del Navigil TD230

- Membrana de hardware rebrandable con distribución configurable de botones y LEDs para personalización OEM.
- Firmware estándar TD230 TG2 que ofrece soporte de geocercas para manejo de eventos basados en ubicación.
- Capacidades de monitorización del estado del vehículo proporcionadas por el firmware de producción para conocimiento operativo básico.
- Rutinas de reporte al servidor que envían posiciones y actualizaciones de eventos a un backend.
- Actualizaciones OTA de firmware y configuración para simplificar el mantenimiento y el despliegue de nuevas funciones.
- Modos de sueño de bajo consumo junto con gestión inteligente de energía para prolongar la operación con batería.
- Despertar desde ahorro de energía mediante eventos programados, movimiento mecánico o entradas externas para mantener la capacidad de respuesta.
- SDK para integradores que necesiten implementar comportamientos personalizados más allá de las opciones del firmware estándar.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe y procesa los reportes de rastreo de dispositivos compatibles como el TD230 y muestra esos informes en un contexto de monitoreo de vehículos y activos. Plaspy detecta automáticamente muchos protocolos comunes de trackers y presenta el estado del dispositivo y la información de ubicación de forma consistente para operaciones e informes.

- Los eventos de geocerca reportados por el TD230 aparecen como sucesos basados en ubicación dentro de Plaspy, permitiendo visibilidad de entradas y salidas de zonas.
- La información de estado del vehículo proveniente del dispositivo se muestra en Plaspy para que los operadores comprendan el estado operativo de un vistazo.
- Los reportes al servidor desde unidades TD230 son ingeridos por Plaspy, de modo que las actualizaciones periódicas de posición y los mensajes de evento estén disponibles en la plataforma.
- La capacidad de actualización por aire facilita mantener las unidades desplegadas al día sin recuperación manual; Plaspy puede coexistir con los flujos de trabajo OTA del dispositivo.
- El funcionamiento en bajo consumo y los eventos de despertado programados generan patrones de reporte previsibles que Plaspy puede visualizar y analizar.
- Plaspy detecta automáticamente el protocolo del tracker y acepta reportes estándar del dispositivo, permitiendo añadir unidades TD230 sin selección manual de protocolo.

## Casos de uso típicos

- Seguimiento de flotas con monitoreo de zonas mediante geocercas y reportes de eventos.
- Integraciones OEM donde se requiere una membrana con marca personalizada y un diseño de botones específico para reventa.
- Rastreo remoto o de activos con batería donde se necesita larga duración y reportes periódicos.
- Despliegues que se benefician de actualizaciones OTA de firmware y configuración para mantener paridad de funciones.
- Proyectos de integradores que usan el SDK del TD230 para adaptar la lógica del dispositivo a flujos de trabajo empresariales específicos.
- Situaciones que requieren wake on motion, despertado programado o entrada externa para equilibrar capacidad de respuesta y ahorro energético.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante y las revisiones de hardware influyen en las funciones disponibles en cada dispositivo TD230.
- Los diseños de membrana personalizados y las configuraciones de botones/LED son opciones OEM y pueden no estar presentes en todas las unidades.
- La capacidad de actualización OTA depende de la disponibilidad de red y de la imagen de firmware proporcionada por el fabricante o integrador.
- El cableado de instalación y las conexiones de entrada externas afectan el comportamiento de despertado y cualquier funcionalidad basada en entradas externas.
- Variantes regionales o específicas de operadores pueden modificar comportamientos soportados o la compatibilidad de red.
- Confirme siempre los conjuntos de funciones exactos y los registros de cambios de firmware con el fabricante para las unidades desplegadas.

## Por qué usar Plaspy con estas funciones

Usar el Navigil TD230 junto con Plaspy ofrece a las organizaciones un camino práctico desde las capacidades a nivel de dispositivo hasta la visibilidad operativa. Plaspy ingiere los reportes del dispositivo y presenta geocercas, estado y ubicación en una interfaz unificada para que los equipos puedan monitorear activos, responder a eventos y analizar la actividad histórica.

Si desea saber más sobre cómo Plaspy soporta integraciones de trackers como el TD230 visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el comportamiento del dispositivo, el firmware y la documentación del fabricante verifique la información con Navigil en http://www.navigil.com/
