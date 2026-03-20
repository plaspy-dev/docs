---
slug: /eelink/tk419/features
id: tk419-features
sidebar_label: Features
title: EElink - TK419 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GPS EElink TK419 y su integración con Plaspy para flotas y seguridad
keywords:
  - EElink TK419
  - funciones TK419
  - rastreador GPS EElink
  - TK419 Plaspy
  - rastreador vehicular 4G
  - rastreador GNSS multiconstelación
  - detección ACC
  - relé inmovilizador
  - rastreador con geocercas
  - alerta batería de respaldo
---

# EElink - TK419: Funcionalidades

Esta página ofrece un resumen público de las funcionalidades del EElink TK419 y explica cómo sus capacidades se integran con Plaspy para seguimiento, alertas y flujos de trabajo de flotas. Está dirigida a gerentes de flota, integradores y evaluadores técnicos que necesitan entender las funciones prácticas del dispositivo cuando se usa con Plaspy.

La disponibilidad exacta de funciones en una unidad TK419 puede variar según la versión de firmware, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante. Le recomendamos confirmar siempre el comportamiento del equipo y las opciones soportadas consultando la documentación oficial de EElink para las unidades que planea desplegar.

## Descripción general de funciones

El TK419 es un rastreador vehicular 4G compacto diseñado para reportes de posición en tiempo real y seguridad básica del vehículo. Integra posicionamiento GNSS multiconstelación, conectividad celular y E/S configurables para proporcionar ubicación en vivo, alarmas y control remoto que se integran directamente con Plaspy.

- Posicionamiento GNSS multiconstelación con GPS, GLONASS, BeiDou y QZSS para obtener fijaciones más rápidas y mayor fiabilidad.
- Telemetría celular mediante GPRS y LTE Cat 1 para reportes continuos de ubicación y estado.
- Detección ACC para identificar encendido/apagado y soportar lógica de viaje.
- Alarmas de choque y vibración, además de alarma de velocidad con corte por exceso de velocidad para seguridad y notificación de incidentes.
- Soporte de geocercas para eventos de entrada/salida por zona y control de cumplimiento.

## Características principales del EElink - TK419

- Compatible con Plaspy desde el primer momento y utiliza el protocolo EELINK para la integración.
- Receptor GNSS multiconstelación que soporta GPS, GLONASS, BeiDou y QZSS.
- Conectividad celular por GPRS y LTE Cat 1 para reportes en tiempo real.
- Detección de encendido ACC para indicar el estado de operación del vehículo y activar la lógica de viajes.
- Funcionalidad opcional de inmovilización mediante relé para desactivar el motor de forma remota.
- Alarmas de choque y vibración que notificarán colisiones o impactos fuertes.
- Eventos de geocerca y alarma de velocidad con corte por exceso de velocidad para alertas operativas.
- Carcasa compacta con clasificación IP65, adecuada para instalaciones discretas en vehículos.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa la telemetría del TK419 y convierte los mensajes del dispositivo en ubicación en vivo, alertas y datos operativos para la supervisión de la flota. La integración aprovecha el protocolo del dispositivo y la ingestión estándar de la plataforma, de modo que puede ver ubicación y eventos sin trabajos de pasarela personalizados.

- Las posiciones GPS en vivo y las trazas de recorrido aparecen en los mapas de Plaspy para seguimiento en tiempo real.
- Las alarmas por choque, vibración y velocidad se propagan a las alertas y notificaciones del panel de control de Plaspy.
- El estado ACC está disponible para detección de viajes, reportes de arranques/paradas y resúmenes de tiempo conducido.
- Los eventos de entrada y salida de geocercas se reportan a Plaspy para activar flujos de trabajo y notificaciones por zona.
- El control remoto de relé para acciones de inmovilización puede reflejarse en los flujos de trabajo de Plaspy cuando está habilitado por el dispositivo y la instalación.
- Las entradas GPIO y la telemetría mapeada desde el dispositivo se presentan como valores de E/S personalizados dentro de Plaspy cuando se conectan sensores externos.

## Casos de uso típicos

- Antirrobo de flota e inmovilización remota usando detección ACC y control de relé opcional.
- Localización y monitoreo de rutas en tiempo real para logística y despacho.
- Supervisión de seguridad con alertas por choque y vibración para agilizar la respuesta a incidentes.
- Control de acceso por geocercas en patios, rutas restringidas y entradas con horarios.
- Extensiones telemétricas básicas mediante GPIO para monitoreo de combustible u otros sensores externos.
- Instalaciones compactas donde se requiere un rastreador pequeño y resistente para montaje discreto.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar según el firmware; algunas alarmas y opciones pueden requerir versiones específicas de firmware.
- Las revisiones de hardware y las variantes regionales pueden afectar las opciones de E/S disponibles y las bandas celulares soportadas.
- Funciones opcionales como el relé inmovilizador o el botón SOS pueden venderse como opciones configurables o como SKUs separados.
- El tipo de instalación influye en algunas capacidades; por ejemplo, la detección ACC requiere un cableado correcto al sistema de encendido del vehículo.
- Consulte la documentación oficial de EElink para diagramas de cableado exactos, comandos de configuración y accesorios opcionales.

## Por qué usar Plaspy con estas funciones

Usar el TK419 con Plaspy ofrece a las organizaciones una vía integrada desde la telemetría de un rastreador compacto hasta la monitorización y alerta centralizada. La combinación de posicionamiento GNSS multiconstelación, reportes celulares, estado ACC y E/S configurable proporciona las señales esenciales que los operadores de flota necesitan para conciencia de ubicación, detección de incidentes y acciones básicas de control remoto.

Para obtener más información sobre cómo Plaspy soporta dispositivos como el TK419 y revisar opciones de despliegue visite https://www.plaspy.com. Para los detalles técnicos específicos del dispositivo, notas de firmware y la guía oficial de instalación, verifique la información con el fabricante en https://www.eelink.com.cn/.
