---
slug: /gotop/g01/features
id: g01-features
sidebar_label: Features
title: GOTOP - G01 Features
sidebar_class_name: menu_item_tracker
description: Rastreador GPS compacto para vehículos compatible con Plaspy, con GNSS, entradas de vehículo y salida para control tipo inmovilizador
keywords:
  - GOTOP G01
  - GOTOP G01 características
  - rastreador GPS GOTOP G01
  - compatibilidad G01 Plaspy
  - rastreador vehicular G01
  - GOTOP G01 inmovilizador
  - GOTOP G01 GNSS
  - seguimiento de flotas G01
  - rastreo de vehículos GOTOP
  - telemetría G01
---

# GOTOP - Características del G01

Esta página ofrece el panorama público de las capacidades del rastreador GPS GOTOP G01 cuando se utiliza con Plaspy. Resume las funciones prácticas del modelo, cómo aparecen esas funciones dentro de Plaspy y el valor operativo principal que puede esperar al integrar unidades G01 en una implementación de Plaspy.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware y el método de instalación. Los detalles de implementación del fabricante y las opciones de cableado o accesorios pueden influir en qué funciones están presentes en una unidad concreta, por lo que use esta página como una guía general y no como referencia de configuración del dispositivo.

## Resumen de características

El GOTOP G01 es un rastreador vehicular compacto diseñado para ubicación en tiempo real y telemática básica con Plaspy. Combina posicionamiento GNSS, entradas para el vehículo y una salida de baja potencia para control tipo inmovilizador, entregando estado del vehículo y alertas a una plataforma de gestión de flotas.

- Posicionamiento dual GNSS con GPS y BDS para obtener fijaciones de posición más consistentes en distintos entornos.
- Rango de alimentación compatible tanto con vehículos ligeros como pesados, facilitando despliegues variados en flotas.
- Entradas de vehículo para detección de ACC, alarma SOS y otros eventos de estado que apoyan el registro de viajes y las alertas de incidentes.
- Canal de salida de baja potencia para corte remoto de encendido o combustible y soportar intervenciones tipo inmovilizador cuando sea necesario.
- Entrada para micrófono externo y capacidad de monitoreo de audio remoto para ayudar en la verificación de incidentes y la recuperación.

## Funciones principales del GOTOP - G01

- Posicionamiento GNSS con GPS y BDS para actualizaciones regulares de ubicación y mapeo.
- Conectividad celular GSM 2G para reportar ubicación y estado a plataformas de rastreo.
- Soporte de amplio rango de voltaje de entrada para uso en autos, taxis y vehículos comerciales más pesados.
- Entrada de detección ACC para indicar eventos de encendido o inicio y fin de viaje.
- Entrada SOS dedicada para reportar alarmas de pánico.
- Canal de salida de baja potencia apto para operaciones de control remoto de corte de energía o combustible.
- Entrada para micrófono externo que permite monitoreo de audio remoto cuando está instalado.
- Batería interna de respaldo para reportar pérdidas de alimentación y ayudar en la detección de manipulación.

## Cómo funcionan estas funciones con Plaspy

Cuando un G01 está conectado a Plaspy, el dispositivo reporta actualizaciones de ubicación, estado, entradas y eventos de alarma para que los vehículos aparezcan en el mapa y en los informes de actividad. Plaspy ingiere los eventos que genera el rastreador y los pone a disposición en paneles, alertas y revisiones históricas.

- La ubicación en vivo y las trazas aparecen en los mapas de Plaspy para monitoreo y reproducción.
- Los cambios en la entrada ACC se usan para marcar el inicio y fin de los viajes en los informes de Plaspy.
- Las alarmas SOS y de pérdida de energía generan notificaciones en Plaspy para que los equipos respondan con rapidez.
- Los flujos de trabajo de control de salidas remotas en Plaspy pueden iniciar acciones tipo inmovilizador a través del canal de salida del dispositivo.
- Los eventos relacionados con la batería de respaldo y la manipulación se muestran como indicadores de estado del dispositivo para mejorar la conciencia operativa.

## Casos de uso típicos

- Gestión de flotas con seguimiento en tiempo real, registros de viajes e informes de utilización para flotas mixtas.
- Servicios de renta y movilidad compartida que requieren inmovilización y detección de manipulación para proteger los activos.
- Servicios de taxi y transporte que necesitan monitoreo de ubicación, detección de turnos de conductor y respuesta rápida ante incidentes.
- Implementaciones en vehículos comerciales donde el soporte de amplio voltaje facilita la instalación en distintos tipos de vehículos.
- Escenarios de seguridad y respuesta a emergencias que usan la alarma SOS y el monitoreo de audio para agilizar la recuperación.

## Notas sobre la disponibilidad de funciones

- Conjuntos de funciones como el monitoreo de audio remoto o la función de inmovilizador dependen del cableado del dispositivo y de las opciones de firmware habilitadas.
- Las revisiones de hardware o variantes regionales pueden cambiar las bandas celulares compatibles o la disposición de entradas/salidas.
- La capacidad de la batería de respaldo y su comportamiento ante pérdida de energía pueden variar según el lote de producción y la configuración de firmware.
- Algunas configuraciones y ajustes avanzados se realizan mediante la interfaz serial del dispositivo o herramientas del fabricante y pueden requerir instalación profesional.
- Consulte siempre la documentación oficial del fabricante para la unidad específica que tenga a la mano y confirmar las funciones soportadas.

## Por qué usar Plaspy con estas funciones

Combinar el GOTOP G01 con Plaspy ofrece a las organizaciones una vía sencilla hacia la visibilidad operativa y la respuesta ante incidentes. El G01 aporta la ubicación y las entradas de estado del vehículo que Plaspy utiliza para construir mapas en vivo, alertas, historiales de viajes y flujos básicos de inmovilización, lo que lo convierte en una opción práctica para flotas que necesitan rastreo confiable sin complejidad innecesaria.

Para obtener más información sobre Plaspy y cómo se integran los dispositivos GOTOP con la plataforma visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y guías de instalación consulte al fabricante en https://www.gotop.cc/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
