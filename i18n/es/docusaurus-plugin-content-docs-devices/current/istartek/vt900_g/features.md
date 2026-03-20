---
slug: /istartek/vt900_g/features
id: vt900_g-features
sidebar_label: Features
title: iStartek - VT900-G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador iStartek VT900-G y su integración con Plaspy para flotas y seguridad vehicular
keywords:
  - características iStartek VT900-G
  - rastreador GPS iStartek VT900-G
  - compatibilidad VT900-G Plaspy
  - características VT900-G
  - rastreo vehicular
  - rastreador para gestión de flotas
  - rastreador OBD CANBUS
  - monitoreo de combustible GPS
  - rastreador RFID para vehículos
  - rastreo en tiempo real Plaspy
---

# iStartek - VT900-G — Características

Esta página ofrece una visión pública de las funciones del iStartek VT900-G relevantes para su despliegue con Plaspy. Resume las capacidades del dispositivo que importan a gestores de flotas, operadores de alquiler y equipos de seguridad vehicular, y explica cómo esas capacidades se traducen en monitoreo e informes dentro de Plaspy.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, las opciones de periféricos instaladas y la forma en que la unidad esté integrada en el vehículo. Para configuración específica del equipo, detalles de firmware y límites técnicos oficiales, consulte la documentación del fabricante listada al final de esta página.

## Visión general de funciones

El VT900-G es un rastreador GPS de grado vehicular diseñado para ofrecer reportes consistentes de ubicación, telemetría y eventos en flotas y entornos de seguridad. Su combinación de posicionamiento GNSS, conectividad celular, almacenamiento local y múltiples opciones de E/S lo hace adecuado para seguimiento continuo, integración de sensores y procesos de recuperación que requieren reporte fiable en Plaspy.

- Posicionamiento GNSS de alta sensibilidad con soporte multi-constelación para reportes de ubicación precisos en Plaspy.
- Comunicaciones celulares mediante redes 3G/2G para enviar ubicación en tiempo real, telemetría y alertas.
- Memoria flash local para almacenar coordenadas y eventos durante cortes de red y reenviarlos a Plaspy cuando se restablece la conectividad.
- Interfaces integradas que incluyen soporte OBD/CANBUS y RS232 para periféricos externos como lectores RFID.
- Entradas para sensores externos, incluidos sensores de combustible ultrasónicos o capacitivos opcionales y monitoreo de temperatura para carga.

## Funciones principales del iStartek - VT900-G

- Posicionamiento GNSS preciso con soporte para GPS y Beidou que proporciona fijaciones consistentes en entornos variables.
- Conectividad celular UMTS/HSDPA y GSM/GPRS para amplia cobertura de red y reporte.
- Soporte de diagnóstico OBD/CANBUS para capturar telemetría del vehículo cuando esté disponible.
- Múltiples interfaces para sensores y periféricos externos, incluyendo RS232 para integración con lectores RFID o MSR.
- Memoria flash interna para almacenar registros de seguimiento durante pérdida de conectividad y subirlos posteriormente.
- Entradas y salidas digitales y analógicas para detección de eventos, entradas de sensores y acciones de control remoto.
- Conjunto amplio de eventos y alarmas para monitoreo de comportamiento del conductor, alertas de seguridad y vigilancia operativa.

## Integración con Plaspy

Cuando se usa junto con Plaspy, el VT900-G entrega fijaciones de ubicación, telemetría del vehículo y eventos configurados a la plataforma Plaspy para visualización, alertas e informes. Plaspy detecta automáticamente los rastreadores compatibles e ingiere los datos soportados para que las flotas mantengan visibilidad continua.

- Actualizaciones de posición en vivo y reconstrucción histórica de recorridos en los paneles de Plaspy usando las fijaciones GNSS reportadas por el equipo.
- Diagnósticos del vehículo y datos OBD/CANBUS presentados como campos de telemetría o en informes cuando la unidad los proporciona.
- Eventos de sensores y entradas, como estado de puertas o encendido, lecturas de temperatura y registros de acceso RFID, mapeados a alertas y líneas de tiempo de eventos en Plaspy.
- La subida de datos almacenados garantiza que coordenadas y eventos recogidos sin conexión se sincronicen con Plaspy una vez que el dispositivo recupere conectividad.
- Las salidas digitales disponibles en el equipo pueden usarse para activar acciones de control remoto y los eventos correspondientes se registran dentro de Plaspy.

## Casos de uso típicos

- Gestión de flotas y despacho con ubicación en tiempo real, historial de rutas e informes agregados.
- Monitoreo antirrobo y procesos de recuperación aprovechando alertas y salidas de control remoto.
- Monitoreo de combustible y supervisión del consumo mediante OBD/CANBUS y sensores de combustible externos opcionales.
- Seguimiento de cadena de frío y carga sensible a temperatura con entradas externas y alertas.
- Control de acceso e identificación de conductores mediante lectores RFID o MSR conectados por RS232.
- Rastreo de vehículos de alquiler y registros de auditoría para uso e incidentes.

## Notas sobre disponibilidad de funciones

- Algunas funciones requieren versiones específicas de firmware o módulos de hardware opcionales; la disponibilidad depende de la unidad y su configuración exacta.
- Los datos OBD/CANBUS dependen de la compatibilidad del vehículo y de cómo esté conectado el dispositivo al puerto de diagnóstico.
- Los sensores de combustible opcionales y otros periféricos pueden venderse por separado y requieren instalación profesional.
- Las variantes regionales de bandas celulares afectan la cobertura de red; verifique la variante del modelo para su región de despliegue.
- Revise siempre las notas de la versión de firmware instalada para conocer los tipos de eventos y nombres de parámetros que Plaspy mostrará.

## Por qué usar Plaspy con estas funciones

Usar el VT900-G con Plaspy facilita convertir la telemetría y los eventos a nivel de dispositivo en información operativa útil. Plaspy agrega datos de ubicación en vivo, historial almacenado, diagnósticos y eventos de sensores en una vista única para que los operadores puedan monitorear flotas, responder a incidentes de seguridad y generar informes rutinarios sin tener que consolidar manualmente la salida cruda del dispositivo.

Para saber más sobre cómo Plaspy puede trabajar con rastreadores como el VT900-G, visite https://www.plaspy.com. Para obtener las especificaciones más actuales del dispositivo, comportamiento de firmware y la guía del fabricante, confirme los detalles en el sitio oficial de iStartek https://istartek.com/ ya que las funciones y las implementaciones pueden cambiar con el tiempo.
