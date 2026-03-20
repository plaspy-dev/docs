---
slug: /neomatica/adm007/features
id: adm007-features
sidebar_label: Features
title: Neomatica - ADM007 Features
sidebar_class_name: menu_item_tracker
description: Características del Neomatica ADM007 BLE, GNSS, sensores BLE, detección de interferencias y compatible con Plaspy
keywords:
  - Neomatica ADM007
  - características ADM007
  - rastreador GPS ADM007
  - ADM007 BLE
  - rastreador GPS Neomatica
  - ADM007 Plaspy
  - rastreador con sensores BLE
  - seguimiento de activos Neomatica
  - rastreador vehicular ADM007
  - rastreador telemetría BLE
---

# Neomatica - ADM007: Características

Esta página describe el contexto público de funcionalidades para usar el rastreador BLE Neomatica ADM007 con Plaspy. Resume las capacidades del dispositivo que resultan relevantes para los usuarios de Plaspy, incluyendo posicionamiento GNSS, telemetría de sensores Bluetooth Low Energy, memoria de rutas y señales de salud del equipo, y cómo estas capacidades suelen integrarse en Plaspy para supervisión y operaciones.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Use esta página como una visión práctica; para especificaciones, opciones de configuración y notas de firmware más actualizadas consulte la documentación del fabricante.

## Resumen de características

El ADM007 BLE es un rastreador GNSS ultracompacto diseñado para aportar posicionamiento discreto y telemetría de sensores BLE a plataformas de gestión de flotas y activos como Plaspy. Su reducido tamaño, soporte para múltiples periféricos BLE y la memoria de rutas en el dispositivo lo hacen adecuado para instalaciones con espacio limitado y donde se busca un bajo consumo de datos.

- Seguimiento GNSS en tiempo real con soporte para GPS y GLONASS que provee actualizaciones continuas de ubicación a Plaspy.
- Soporte Bluetooth Low Energy para hasta ocho sensores externos que capturan telemetría como temperatura, humedad, inclinación y presencia del activo.
- Detección integrada de interferencias (jamming) e informe del estado del dispositivo para revelar posibles interferencias o manipulación.
- Amplio archivo de rutas en el dispositivo que almacena al menos 63,000 registros para reproducción histórica y revisión de incidentes.
- Bajo consumo de datos y factor de forma compacto que facilitan instalaciones discretas en vehículos y monitoreo distribuido de activos.

## Funciones principales del Neomatica - ADM007

- Receptor GNSS de alta sensibilidad con soporte para GPS y GLONASS para obtener fijaciones de posición confiables.
- Bluetooth 4.0 con soporte para hasta ocho sensores BLE, con alcance práctico para despliegues en sitio y en vehículos.
- Conectividad GSM GPRS para reportar posición, telemetría de sensores y estado del dispositivo a plataformas en la nube.
- Detección de jamming para marcar posibles interferencias RF o manipulaciones que requieran seguimiento en Plaspy.
- Amplia memoria interna de rutas capaz de almacenar al menos 63,000 entradas para carga y análisis.
- Entrada analógica única para reportar señales analógicas externas según la instalación y conexionado.
- Opciones de configuración remota vía Bluetooth, SMS y GPRS para gestión en campo.
- Soporte para actualizaciones de firmware FOTA que facilitan mantener el comportamiento del dispositivo actualizado a lo largo del tiempo.

## Cómo estas funciones se integran con Plaspy

Cuando se configura para reportar en Plaspy, el ADM007 BLE envía posiciones GNSS, telemetría de sensores BLE e información de salud del dispositivo a la plataforma para su visualización y alertas. Plaspy ingiere estas fuentes de datos para ofrecer conciencia de ubicación en tiempo real, reproducción histórica y notificaciones operativas.

- La ubicación en vivo y el historial de movimientos aparecen en los paneles de Plaspy para seguimiento y revisión de rutas.
- Las lecturas de sensores BLE emparejados se envían a Plaspy como telemetría para monitoreo de condiciones ambientales o del activo.
- Las alertas de jamming y el estado del dispositivo pueden mostrarse como notificaciones o eventos que desencadenen flujos de trabajo en Plaspy.
- El historial de rutas almacenado en el dispositivo puede subirse a Plaspy para reconstrucción forense e informes.
- La información sobre configuración remota y estado de actualizaciones de firmware reportada por el dispositivo ayuda a los administradores a mantener las instalaciones actualizadas.

## Casos de uso habituales

- Seguimiento discreto de vehículos y monitoreo antirrobo donde se requiere un dispositivo de pequeño tamaño.
- Operaciones de flota que necesitan telemetría BLE para temperatura o presencia junto con la ubicación.
- Monitoreo distribuido de activos en un sitio usando periféricos BLE para sensado ambiental.
- Cadena de frío o monitoreo ambiental donde sensores BLE externos envían lecturas a Plaspy para generar alertas.
- Seguimiento de equipos de alquiler y herramientas de alto valor que se benefician de instalaciones compactas y del historial de rutas.

## Notas sobre disponibilidad de funciones

- El conjunto de funciones y su comportamiento dependen de la versión de firmware instalada y pueden cambiar con actualizaciones.
- Las revisiones de hardware y las variantes regionales pueden afectar las bandas celulares soportadas y las certificaciones.
- El soporte de periféricos BLE y los tipos de sensores disponibles dependen de accesorios Neomatica compatibles y su firmware.
- El cableado de instalación y el uso de la entrada analógica influirán en qué señales externas están disponibles para Plaspy.
- Verifique siempre la disponibilidad de funciones y los procedimientos de configuración recomendados en la documentación oficial de Neomatica.

## Por qué usar Plaspy con estas funciones

Usar el ADM007 BLE con Plaspy ofrece a las organizaciones una opción compacta para combinar posiciones GNSS confiables con telemetría de sensores BLE y señales de salud del dispositivo. Esta combinación permite visibilidad de la ubicación de vehículos y activos junto con datos ambientales o de presencia, y facilita la supervisión operativa mediante reproducción de rutas, alertas y gestión remota de dispositivos.

Para saber más sobre Plaspy y cómo puede ingerir datos del ADM007 para paneles de seguimiento, alertas e informes visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y orientación del fabricante verifique los detalles con Neomatica en https://neomatica.com/
