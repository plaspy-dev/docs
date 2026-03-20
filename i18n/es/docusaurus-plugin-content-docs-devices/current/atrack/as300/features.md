---
slug: /atrack/as300/features
id: as300-features
sidebar_label: Features
title: ATrack - AS300 Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del rastreador ATrack AS300 y su integración con Plaspy para activos, logística y cadena de frío
keywords:
  - Funciones ATrack AS300
  - Rastreador GPS AS300
  - AS300 en Plaspy
  - Rastreador de activos ATrack
  - Sensores BLE AS300
  - Rastreador LTE Cat M
  - Posicionamiento GNSS AS300
  - Detección de manipulación AS300
  - Seguimiento de activos para Plaspy
  - Seguimiento cadena de frío AS300
---

# ATrack - Funciones del AS300

Esta página resume el contexto público de funciones del rastreador compacto ATrack AS300 y cómo se integra con Plaspy para la supervisión de flotas y activos. Está orientada a las capacidades prácticas que usted podrá aprovechar con Plaspy, más que a instrucciones detalladas de configuración.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware del dispositivo, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante. Para detalles técnicos específicos del dispositivo consulte la documentación oficial de ATrack y las notas de la versión del firmware.

## Visión general de funciones

El AS300 es un rastreador compacto y resistente diseñado para monitoreo de envíos de corto plazo y activos móviles, compatible con Plaspy para rastreo y telemetría en tiempo real. Combina posicionamiento GNSS, conectividad celular de bajo consumo, integración con sensores BLE, detección de movimiento y almacenamiento local para ofrecer visibilidad en logística y activos portátiles de alto valor.

- Posicionamiento GNSS preciso con GPS y GLONASS y soporte SBAS para mejorar la exactitud de la ubicación.
- Conectividad celular LTE Cat M para reportes eficientes en áreas extensas y bajo consumo de datos.
- Integración Bluetooth Low Energy para emparejar sensores externos de temperatura, humedad, ángulo y eventos de puerta.
- Carcasa resistente con IP67 y diseño anti-impacto apropiado para logística exterior y entornos de cadena de frío.
- Detección de movimiento integrada y almacenamiento en memoria local para preservar datos durante pérdidas temporales de conectividad.

## Funciones principales del ATrack - AS300

- Posicionamiento GNSS usando GPS y GLONASS con soporte SBAS para obtenciones más fiables.
- Radio celular LTE FDD Cat M para conectividad de área amplia y bajo consumo.
- Soporte Bluetooth Low Energy 5.0 para emparejar sensores externos opcionales.
- Acelerómetro de 3 ejes para detección de movimiento y manipulación, además de historial básico de movimiento.
- Carcasa con clasificación IP67, resistente a vibraciones y golpes para despliegues exigentes.
- Memoria flash interna para almacenamiento local de ubicaciones y telemetría cuando la red no está disponible.
- Carga por USB Type‑C y batería recargable integrada para despliegues flexibles.
- Soporte para nano‑SIM y configuraciones eSIM que se adaptan a distintos esquemas celulares.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe posiciones y telemetría de dispositivos AS300 para mostrar vistas en mapa, generar alertas e informes operativos. La plataforma está diseñada para aceptar obtenciones GNSS, lecturas de sensores BLE y eventos de movimiento que reporte el dispositivo, y correlacionar esas señales en contexto operativo útil.

- Las actualizaciones de ubicación en tiempo real y periódicas aparecen en los mapas de Plaspy y en el historial de rutas según las obtenciones GNSS del dispositivo.
- Las lecturas de sensores BLE, como temperatura o eventos de apertura de puertas, se presentan como puntos de telemetría junto a la ubicación en Plaspy.
- Los eventos de movimiento y manipulación reportados por el acelerómetro se muestran como alertas y forman parte del historial de desplazamientos en Plaspy.
- El almacenamiento local del AS300 preserva los datos durante interrupciones para que Plaspy reciba cargas diferidas y mantenga continuidad histórica.
- El AS300 soporta transporte UDP o TCP y Plaspy detecta automáticamente protocolos compatibles de los rastreadores para una ingestión sin fricciones.
- Los flujos de gestión remota basados en ADM pueden utilizarse para mantener firmware y configuración actualizados en los dispositivos desplegados.

## Casos de uso típicos

- Seguimiento de envíos de corto plazo y paquetes de alto valor donde se requiere diseño impermeable y resistente a impactos.
- Monitoreo de cadena de frío utilizando sensores BLE de temperatura y humedad emparejados al rastreador y visualizados en Plaspy.
- Supervisión de equipos en alquiler y activos portátiles con alertas de movimiento y manipulación integradas en los paneles de control.
- Visibilidad en última milla combinada con geocercas e informes de rutas para reducir pérdidas y mejorar la precisión de entregas.
- Protección discreta de equipos y contenedores portátiles mediante detección de movimiento y correlación de eventos de sensores BLE.

## Notas sobre disponibilidad de funciones

- Algunas funciones, como la compatibilidad con sensores BLE, el comportamiento SBAS y el consumo de energía, dependen del firmware del dispositivo y de variantes de radio regionales.
- La autonomía de batería varía considerablemente según el intervalo de reporte, la temperatura y el uso de Bluetooth; las especificaciones del fabricante ofrecen ejemplos típicos.
- Revisiones de hardware o variantes regionales pueden modificar bandas soportadas, disponibilidad de eSIM o certificaciones.
- El método de instalación y el montaje pueden cambiar el comportamiento del sensor de movimiento y la sensibilidad de detección de manipulación.
- Consulte siempre la documentación del fabricante para conocer las capacidades exactas del número de serie del dispositivo y la versión de firmware correspondiente.

## Por qué usar Plaspy con estas funciones

Usar el AS300 con Plaspy ofrece a las organizaciones una vía directa para convertir rastreadores resistentes en información operativa. Plaspy consolida el posicionamiento GNSS, la telemetría de sensores BLE y los eventos de movimiento en mapas, alertas e informes para ayudar a gestionar logística, flujos anti‑hurto y visibilidad de cadena de frío sin requerir trabajo profundo a nivel de protocolo de dispositivo.

Si desea conocer más sobre cómo Plaspy puede usar datos del AS300 en paneles de flota, alertas e informes visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, el comportamiento del firmware y detalles de implementación del fabricante verifique la información en el sitio oficial de ATrack https://www.atrack.com.tw/.
