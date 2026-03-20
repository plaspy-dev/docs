---
slug: /ulbotech/t363b/features
id: t363b-features
sidebar_label: Features
title: Ulbotech - T363B Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador Ulbotech T363B y su integración con Plaspy para seguimiento y telemetría
keywords:
  - Ulbotech T363B
  - Características T363B
  - Rastreador GPS Ulbotech
  - Rastreador GPS OBD
  - telemetría vehicular
  - rastreador compatible con Plaspy
  - telemetría OBD CAN
  - soporte de inmovilizador
  - rastreador vehicular BLE
  - dispositivo de seguimiento de flotas
---

# Ulbotech - Funciones del T363B

Esta página resume las características públicas del Ulbotech T363B y explica cómo se aprovechan estas capacidades desde Plaspy. El enfoque está en las funciones visibles para el usuario, el valor operativo y qué puede esperar su organización al integrar este rastreador OBD plug and play con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para detalles técnicos precisos, notas de firmware y variantes de modelo consulte la documentación oficial de Ulbotech y a su proveedor del dispositivo.

## Visión general de funciones

El T363B es un rastreador compacto que se conecta al puerto OBD para proporcionar posición del vehículo, telemetría OBD y CAN, y controles antirrobo, entregando los datos a Plaspy para visualización e informes. Combina fijaciones GNSS, soporte BLE, detección de movimiento y capacidad de corte remoto de motor para respaldar flotas y flujos de trabajo de activos.

- Instalación OBD plug and play para despliegues rápidos sin modificaciones de cableado permanente
- GNSS de alta sensibilidad para seguimiento preciso y fijaciones rápidas
- Telemetría OBD y SAE J1939 CAN para datos diagnósticos y operativos del vehículo
- Control de inmovilizador integrado para soportar corte remoto del motor como mitigación de robo
- Soporte Bluetooth Low Energy para emparejar identificadores de conductor o accesorios de sensores

## Características principales del Ulbotech - T363B

- Factor de forma plug in OBD II para incorporación rápida e instalación sencilla
- Posicionamiento GNSS de alta sensibilidad u‑blox para reportes de ubicación confiables
- Soporte de protocolos OBD y SAE J1939 CAN para recolección de datos vehiculares
- Acelerómetro interno para detección de movimiento y eventos de comportamiento del conductor
- Salida digital de inmovilizador integrada para control de corte remoto de motor
- Bluetooth 4.0 BLE para emparejamiento de accesorios y flujos de identificación de conductores
- Batería de respaldo interna y memoria a bordo para registro continuado durante breves interrupciones de energía
- Gestión de firmware con capacidad FOTA para actualizaciones remotas cuando está soportado

## Cómo funcionan estas funciones con Plaspy

Cuando se configura, el T363B transmite ubicación, telemetría del vehículo y banderas de eventos a Plaspy, donde la plataforma mapea los datos en vistas en vivo, reproducciones históricas, alertas e informes. Plaspy presenta estas entradas en paneles y puede activar reglas basadas en telemetría para supervisión operativa.

- Ubicación en vivo y reproducción de rutas basadas en los reportes GNSS enviados por el dispositivo
- La telemetría OBD y CAN aparece en Plaspy como estado del vehículo y datos relacionados con el motor para monitoreo y análisis
- Los eventos por movimiento y acelerómetro se traducen en banderas de comportamiento del conductor y marcadores de incidentes en Plaspy
- El soporte de inmovilizador remoto puede integrarse con reglas de alerta o flujos de trabajo en Plaspy para iniciar acciones de corte de motor controladas
- Las entradas BLE de accesorios, como identificador de conductor o presencia de sensores externos, pueden reflejarse como datos suplementarios del dispositivo en Plaspy

## Casos de uso típicos

- Gestión de flotas con seguimiento en vivo, historial de rutas y puntuación de comportamiento del conductor
- Seguro basado en uso y evaluación de riesgo del conductor mediante telemetría e informes de eventos
- Monitoreo de flotas de alquiler con instalación plug and play y opciones de inmovilización remota
- Protección de activos y monitoreo de condiciones de carga usando sensores BLE emparejados con el rastreador
- Flujos de trabajo de seguridad y asistencia en carretera que dependen de la visibilidad de ubicación y estado del vehículo

## Notas sobre disponibilidad de funciones

- El conjunto de funciones exactas depende de la versión de firmware y de la revisión de hardware del dispositivo desplegado
- La disponibilidad de datos OBD y CAN puede variar según la marca, el modelo y los datos del ECU disponibles en cada vehículo
- BLE, inmovilizador y otras funciones opcionales pueden requerir configuración específica del dispositivo o emparejamiento de accesorios
- El soporte regional de redes celulares y las funciones de firmware pueden diferir según el mercado o el distribuidor
- Verifique el modelo de dispositivo y las notas de firmware de Ulbotech para confirmar las funciones antes del despliegue operacional

## Por qué usar Plaspy con estas funciones

Combinar el T363B con Plaspy ofrece a las organizaciones una vía directa para unir ubicación GNSS, telemetría vehicular y control de inmovilizador en un único flujo de supervisión e informes. El factor de forma OBD plug and play reduce el tiempo de instalación, mientras que las entradas BLE y el acelerómetro amplían las formas en que se puede capturar y actuar sobre la identidad del conductor y su comportamiento dentro de Plaspy.

Para saber más sobre cómo Plaspy presenta y actúa sobre los datos del Ulbotech T363B visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware y la orientación del fabricante, revise la documentación oficial de Ulbotech en http://www.ulbotech.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
