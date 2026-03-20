---
slug: /queclink/gl500/features
id: gl500-features
sidebar_label: Features
title: QuecLink - GL500 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador GPS QuecLink GL500 y cómo su detección de movimiento y reportes GPRS funcionan con Plaspy
keywords:
  - QuecLink GL500
  - características QuecLink GL500
  - rastreador GPS QuecLink GL500
  - características GL500
  - rastreador GPS GL500
  - rastreador de activos fijos
  - GPS para seguimiento de activos
  - detección de movimiento por acelerómetro
  - rastreador con batería de larga duración
  - compatibilidad QuecLink Plaspy
---

# QuecLink - Características del GL500

Esta página ofrece un resumen público de las características del QuecLink GL500 y de cómo sus capacidades se emplean con Plaspy. Se concentra en detalles prácticos y no sensibles que son relevantes al monitorear activos fijos e integrar el rastreador en Plaspy para conocer la ubicación y visualizar eventos.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación o la configuración del fabricante. Para conocer los límites técnicos específicos del dispositivo y el conjunto de funciones más reciente, consulte la documentación oficial de QuecLink y las notas de la versión.

## Resumen de características

El GL500 es un rastreador GPS para activos fijos diseñado para despliegues de largo plazo donde la duración de la batería y la detección de movimiento son prioritarias. Combina operación de muy bajo consumo con reporte de posición y alertas de movimiento para soportar flujos de monitoreo remoto.

- Operación en espera de muy larga duración, optimizada hasta 1000 días en la configuración descrita, adecuada para monitoreo prolongado de activos.
- Utiliza dos baterías CR123A de litio reemplazables por el usuario para un mantenimiento sencillo en campo.
- Acelerómetro integrado de 3 ejes que detecta movimiento y genera mensajes de alerta cuando se detecta actividad.
- Módem GSM GPRS cuatribanda que permite enviar reportes de posición y alertas vía GPRS o SMS a un backend o a un destinatario móvil.
- Chipset GPS u-blox interno y antenas GSM y GPS integradas que simplifican la instalación y reducen la necesidad de enrutar antenas externas.
- Micrófono interno opcional disponible en algunas configuraciones para capacidad de audio en el dispositivo cuando se requiere.

## Funciones principales del QuecLink - GL500

- Enfoque en rastreo de activos fijos para despliegues de largo plazo y con intervalos de mantenimiento reducidos.
- Dos baterías CR123A de litio reemplazables por el usuario para un cambio de batería sencillo.
- Consumo de energía optimizado que permite escenarios de operación autónoma prolongada.
- Acelerómetro integrado de 3 ejes para la detección de movimiento y generación de alertas.
- Conectividad GPRS GSM cuatribanda para reportes remotos vía GPRS y SMS.
- Posicionamiento GPS u-blox interno para obtener localizaciones fiables.
- Antenas GSM y GPS internas que facilitan el montaje y la ocultación del equipo.
- Micrófono interno opcional presente en unidades seleccionadas para audio bidireccional cuando esté equipado.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los reportes del GL500 y muestra la información de ubicación y eventos para proporcionar visibilidad operativa. Plaspy detecta automáticamente los protocolos de los rastreadores y mapea los reportes más comunes en la plataforma, de modo que los equipos pueden monitorear activos sin necesidad de trabajar a nivel de protocolo.

- Los reportes de ubicación del GL500 aparecen en Plaspy como actualizaciones de posición para el activo asociado.
- Los eventos de movimiento generados por el acelerómetro del GL500 se presentan como alertas o eventos para que los equipos revisen la actividad reciente.
- Los reportes enviados por GPRS o SMS pueden ser enrutados hacia Plaspy para monitoreo en tiempo real y reproducción histórica.
- Plaspy reconoce los protocolos comunes utilizados por el GL500 y aplica análisis estándar, por lo que la configuración suele ser rápida.
- Las funciones opcionales del dispositivo, como el micrófono, o reportes dependientes de la configuración se reflejarán en Plaspy cuando la unidad envíe esas señales y esté configurada para reportarlas.

## Casos de uso típicos

- Monitoreo de activos fijos a largo plazo cuando reemplazar baterías con frecuencia es inviable.
- Detección de robo o manipulación de equipos almacenados mediante alertas de movimiento del acelerómetro.
- Supervisión de contenedores remotos, remolques o maquinaria que se benefician de antenas internas y de una instalación oculta.
- Rastrear equipos en alquiler o desplegados donde se prefiera la autonomía y el uso de baterías reemplazables.
- Despliegues con reportes periódicos que dependen de bajo consumo para prolongar la vida útil del servicio.

## Notas sobre disponibilidad de funciones

- La presencia de una función y su comportamiento exacto dependen de la versión de firmware y de la configuración del fabricante para cada unidad.
- Las revisiones de hardware y componentes opcionales, como el micrófono interno, pueden no estar presentes en todos los dispositivos.
- La cobertura celular regional y el soporte de los operadores pueden influir en la funcionalidad GPRS y SMS a pesar de que el dispositivo sea cuatribanda.
- Las decisiones de instalación y la configuración de reportes afectan la vida de la batería y la frecuencia de las actualizaciones de ubicación.
- Consulte siempre la documentación oficial de QuecLink para conjuntos de comandos precisos y notas de las versiones de firmware.

## Por qué usar Plaspy con estas funciones

Usar el QuecLink GL500 con Plaspy ofrece una forma directa de centralizar la ubicación y la información de movimiento de activos a largo plazo. La detección de dispositivos y el manejo de eventos de Plaspy ayudan a convertir las alertas de movimiento y los reportes de posición del GL500 en paneles de monitoreo accionables y en reproducciones históricas para supervisión operativa.

Learn more about how Plaspy can work with asset trackers and centralize visibility at https://www.plaspy.com. Please verify current device features firmware behavior and manufacturer details directly with QuecLink at https://www.queclink.com/ since features and implementations can change over time.
