---
slug: /itriangle/ts101_basic_ev_can/features
id: ts101_basic_ev_can-features
sidebar_label: Features
title: iTriangle - TS101 Basic EV CAN Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador iTriangle TS101 Basic EV CAN y su integración con Plaspy para rastreo y telemetría de flotas
keywords:
  - iTriangle TS101 Basic EV CAN
  - funciones TS101 Basic EV CAN
  - rastreador iTriangle TS101
  - rastreador GPS TS101 EV CAN
  - funciones rastreador GPS iTriangle
  - rastreador compatible Plaspy
  - rastreo de flotas TS101
  - telemetría vehicular TS101
  - rastreador TS101 BLE CAN
  - rastreador GPS resistente iTriangle
---

# iTriangle - TS101 Basic EV CAN: Características

Esta página ofrece una visión pública y no sensible de las capacidades del iTriangle TS101 Basic EV CAN y explica cómo el dispositivo puede integrarse con Plaspy para el rastreo de flotas, la recolección de telemetría y la monitorización de eventos. Está diseñada para describir las capacidades prácticas y el valor operativo típico cuando el TS101 Basic EV CAN se utiliza junto con la plataforma Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según el firmware del dispositivo, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Para detalles técnicos específicos y actualizados consulte la documentación oficial y las notas de versión de iTriangle.

## Resumen de características

El TS101 Basic EV CAN es una unidad telemática compacta y resistente, diseñada para ofrecer rastreo y registro de datos fiables en flotas mixtas de vehículos eléctricos y convencionales. Combina posicionamiento GNSS multi-constelación, una interfaz CAN de un solo canal, conectividad BLE y almacenamiento local para mantener la continuidad de los registros ante condiciones de red débiles.

- Soporte GNSS multi-constelación para posicionamiento preciso con GPS, GLONASS, Galileo y BeiDou.
- Interfaz CAN de un solo canal para capturar telemetría del vehículo y datos EV cuando estén disponibles.
- BLE 3.0 para conectividad de sensores y accesorios de corto alcance.
- Registro local sin conexión con capacidad para miles de registros que evita huecos en los datos.
- Carcasa robusta con clasificación IP65 y amplio rango de entrada de voltaje para adaptarse a distintas instalaciones vehiculares.

## Características principales del iTriangle - TS101 Basic EV CAN

- GNSS interno con soporte para GPS, GLONASS, Galileo y BeiDou para mayor precisión de ubicación.
- Interfaz CAN de un solo canal para la recolección de telemetría de vehículos y datos EV.
- BLE 3.0 para integrar sensores inalámbricos y accesorios de corto alcance.
- Búfer de datos offline con aproximadamente 6,000 registros de almacenamiento para proteger contra pérdidas de cobertura.
- Varios puertos I/O, incluyendo una entrada analógica, dos entradas digitales y una salida digital para monitorización de eventos y control.
- Batería de respaldo interna y comportamiento de bajo consumo para mantener el registro durante interrupciones de energía.
- Carcasa con grado de protección IP65 y amplio rango de entrada de 9–90V DC para despliegues en flotas exigentes.
- Detección de movimiento basada en acelerómetro y alertas de manipulación para mayor protección antirrobo.

## Cómo funcionan estas funciones con Plaspy

Cuando se utiliza con Plaspy, el TS101 Basic EV CAN puede enviar actualizaciones de ubicación, telemetría y registros de eventos para proporcionar a los operadores visibilidad en tiempo real y contexto histórico. Plaspy recibe los datos del dispositivo y los presenta en mapas, reportes y líneas de tiempo de eventos para apoyar la toma de decisiones operativas.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas dentro de Plaspy.
- Telemetría y estado del vehículo provenientes del CAN visibles en los paneles de Plaspy cuando los datos CAN están disponibles y mapeados.
- Registros de eventos de las entradas digitales, detección por acelerómetro y alertas de manipulación presentados como incidentes o notificaciones.
- Registros almacenados offline que se suben a Plaspy una vez restaurada la conectividad, preservando la continuidad del rastreo y los registros.
- Eventos de sensores BLE y datos de accesorios de corto alcance asociados a los registros del vehículo para ofrecer contexto adicional.

## Casos de uso típicos

- Rastreo de flotas mixtas que combina vehículos eléctricos y convencionales con visibilidad compartida.
- Recolección de telemetría EV para integrar métricas provenientes del CAN en las operaciones de flota.
- Monitorización antirrobo mediante detección de movimiento, alertas de manipulación y registro de eventos.
- Asociación de sensores de corto alcance para identificación del conductor, sondas de temperatura u otros sensores mediante BLE.
- Despliegues robustos para vehículos comerciales que operan en entornos difíciles o remotos.

## Notas sobre la disponibilidad de funciones

- Algunas funciones dependen del firmware y pueden variar entre versiones o actualizaciones del dispositivo.
- Revisiones de hardware y variantes regionales pueden cambiar las interfaces disponibles o las bandas y sensores soportados.
- El cableado de instalación y las decisiones de integración afectan qué señales I/O y CAN están presentes y reportadas.
- El soporte de sensores BLE y la forma en que se exponen sus datos pueden depender del firmware y la configuración.
- Verifique el conjunto exacto de capacidades y comandos soportados en la documentación oficial de iTriangle para la revisión de su dispositivo.

## Por qué usar Plaspy con estas funciones

Emparejar el TS101 Basic EV CAN con Plaspy ofrece a flotas y operadores una plataforma consolidada para monitorizar ubicación, telemetría y eventos generados por el dispositivo. Las herramientas de gestión de flotas de Plaspy traducen datos GNSS, CAN, I/O y de sensores en información accionable para enrutamiento, mantenimiento y procesos de seguridad, además de conservar registros históricos para análisis.

Para saber más sobre cómo Plaspy puede usar el TS101 Basic EV CAN en sus operaciones visite https://www.plaspy.com. Para especificaciones finales del dispositivo, notas de versión de firmware y orientación del fabricante verifique los detalles en el sitio oficial de iTriangle https://www.itriangle.net/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
