---
slug: /carscop/cc_368/features
id: cc_368-features
sidebar_label: Features
title: Carscop - CC-368 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del Carscop CC‑368 4G T‑Box y su integración telemática con plataformas de flotas compatibles con Plaspy
keywords:
  - Carscop CC-368
  - funciones Carscop CC 368
  - rastreador GPS CC-368
  - telemática Carscop
  - compatibilidad CC-368 Plaspy
  - rastreador OBD II CANBUS
  - rastreador para alquiler sin llave
  - 4G T Box rastreador
  - control de acceso BLE NFC
  - inmovilizador remoto de vehículo
---

# Carscop - CC-368 - Funciones

Esta página ofrece un resumen público de las capacidades del Carscop CC‑368 4G T‑Box y explica cómo se aprovechan cuando el dispositivo está conectado a Plaspy. Se centra en contexto práctico y no sensible para ayudar a usted y a su equipo de operaciones o integración a comprender qué ofrece el rastreador y cómo se aplica en los flujos de trabajo de gestión de flotas en Plaspy.

La disponibilidad exacta de funciones puede variar según la versión de firmware, la revisión de hardware, la SKU regional y los detalles específicos de la instalación. Consulte la documentación del fabricante y la configuración del instalador para conocer las opciones del dispositivo y cualquier detalle de modelo que afecte el comportamiento en campo.

## Resumen de funciones

El CC‑368 es una T‑Box telemática diseñada para gestión de flotas, alquiler de vehículos y car sharing. Integra conectividad celular global, posicionamiento GNSS y múltiples interfaces vehículo para ofrecer seguimiento en vivo, telemetría diagnóstica y capacidades de control remoto apropiadas para despliegues compatibles con Plaspy.

- Seguimiento GNSS en tiempo real con A‑GPS y posibilidad de antena GPS externa para actualizaciones de posición más fiables.
- Soporte celular global en redes 2G/3G/4G LTE para amplia cobertura y telemetría en tiempo real.
- Interfaz OBD II CANBUS para lectura de parámetros del vehículo y códigos de diagnóstico cuando estén disponibles.
- Soporte para acceso sin llave mediante NFC, teclado táctil integrado y Bluetooth Low Energy para flujos de alquiler y uso compartido.
- Funciones de control remoto del vehículo, incluyendo inmovilizador y arranque remoto cuando están configuradas.
- Registro interno y fallback LBS para preservar los registros de ubicación durante pérdidas temporales de conectividad celular.

## Funciones principales del Carscop - CC-368

- Diseño T‑Box 4G con soporte multi generación celular para conectividad en redes mixtas.
- Receptor GNSS U‑Blox con A‑GPS y toma para antena GPS externa que mejora la fiabilidad del posicionamiento.
- Lectura y control OBD II CANBUS para telemetría del vehículo y reenvío de DTC cuando el vehículo expone los PIDs correspondientes.
- Soporte Bluetooth Low Energy para acceso por proximidad, integración de sensores y desbloqueo basado en BLE.
- Módulo NFC y teclado táctil para opciones flexibles de entrada sin llave.
- Capacidades de inmovilizador remoto y arranque remoto del motor para soportar flujos de alquiler seguros y anti‑hurto.
- Batería de respaldo interna recargable, alarma por corte de energía y registro de rutas offline para continuidad durante interrupciones de alimentación o red.
- Actualizaciones de firmware por aire y APIs TCP/IP para facilitar la integración y la gestión remota del dispositivo.

## Cómo funcionan estas funciones con Plaspy

Cuando el CC‑368 se integra con Plaspy, la información de ubicación, diagnóstico y eventos queda disponible en la plataforma para supervisión, alertas y control operativo. Plaspy recibe los flujos de telemetría y eventos y puede actuar sobre ellos mediante informes programados, automatizaciones y comandos remotos.

- Posición GNSS en vivo y rutas históricas se muestran en Plaspy para visibilidad de la flota y auditoría.
- Parámetros OBD II CANBUS y eventos DTC reenviados a Plaspy facilitan diagnósticos remotos y flujos de mantenimiento cuando hay datos del vehículo disponibles.
- Eventos discretos como apertura de puertas, ACC, impactos y otros se representan como alertas o disparadores dentro de Plaspy para automatizar operaciones.
- Comandos de inmovilizador remoto y arranque de motor pueden ejecutarse desde las interfaces de Plaspy cuando el dispositivo y la instalación soportan esas funciones.
- El registro offline y el fallback LBS preservan la continuidad de los datos de seguimiento que Plaspy puede reconciliar cuando el dispositivo se reconecta.

## Casos de uso típicos

- Operaciones de alquiler desatendido y car sharing utilizando NFC, teclado táctil o BLE para acceso sin llave gestionado a través de Plaspy.
- Gestión de flotas con seguimiento centralizado de ubicación, recopilación de telemetría y generación de reportes programados para flotas mixtas.
- Flujos de respuesta anti‑robo combinando eventos de alarma, acciones de inmovilizador remoto y seguimiento de ubicación en Plaspy.
- Soporte de diagnóstico remoto y mantenimiento mediante el reenvío de datos OBD II y DTCs a Plaspy para planificación de servicio.
- Despliegues de flotas mixtas que requieren amplio rango de voltaje y conectividad flexible entre redes celulares.

## Notas sobre disponibilidad de funciones

- El conjunto de funciones depende de la versión de firmware y la revisión de hardware; algunas funcionalidades pueden variar entre SKUs o variantes regionales.
- La disponibilidad de datos OBD II CANBUS depende de la marca y el modelo del vehículo y de los PIDs que el vehículo exponga.
- El inmovilizador remoto y el arranque de motor requieren una instalación y cableado correctos y una configuración adecuada en Plaspy para funcionar de forma segura.
- Bluetooth, NFC y el teclado táctil dependen de los accesorios suministrados y de cómo se instale la unidad en el vehículo.
- El registro offline y el fallback LBS ofrecen continuidad, pero el comportamiento y la capacidad de búfer están determinados por el firmware y la configuración.

## Por qué usar Plaspy con estas funciones

Conectar el Carscop CC‑368 a Plaspy ofrece a los operadores visibilidad y control centralizado sobre vehículos y unidades de alquiler. La combinación de posicionamiento GNSS, telemetría OBD II y funciones de control remoto mejora la supervisión operativa, acelera la respuesta ante incidentes y optimiza los flujos de alquiler o uso compartido. Integradores y gestores de flota se benefician de actualizaciones de firmware remotas y acceso a APIs para adaptar el dispositivo a sus sistemas administrativos.

Para obtener más información sobre cómo Plaspy puede trabajar con dispositivos como el CC‑368, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, comportamiento de firmware y detalles del fabricante, verifique la información en el sitio oficial de Carscop http://www.carscop.com/.
