---
slug: /neomatica/adm500/features
id: adm500-features
sidebar_label: Features
title: Neomatica - ADM500 Features
sidebar_class_name: menu_item_tracker
description: Funciones públicas y compatibilidad con Plaspy del rastreador GPS Neomatica ADM500 para telemetría y monitoreo
keywords:
  - Características Neomatica ADM500
  - Compatibilidad ADM500 con Plaspy
  - Rastreador GPS Neomatica ADM500
  - ADM500 GNSS multiconstelación
  - Rastreador ADM500 LTE
  - Sensores BLE ADM500
  - Monitoreo de combustible ADM500
  - Rastreo vehicular ADM500
  - Telemetría ADM500
  - Anti robo ADM500
---

# Neomatica - Características del ADM500

Esta página describe el contexto público de funciones para usar el Neomatica ADM500 con Plaspy. Resalta las capacidades del rastreador que son relevantes al integrar el dispositivo en Plaspy para seguimiento en tiempo real, telemetría y supervisión operativa, sin incluir instrucciones privadas o de gestión del dispositivo.

El ADM500 incorpora posicionamiento GNSS multiconstelación, conectividad celular, soporte de doble SIM, batería de respaldo y una amplia gama de interfaces para sensores cableados e inalámbricos. La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y cómo el fabricante implemente funciones específicas.

## Resumen de funciones

El ADM500 es un rastreador profesional y compacto diseñado para vehículos y activos que requieren precisión de ubicación sostenida y telemetría flexible. Al usarse con Plaspy, el dispositivo envía ubicación, datos de sensores y eventos para apoyar mapas, reportes y flujos operativos.

- GNSS multiconstelación para mejorar la precisión y mantener un seguimiento estable en distintos entornos.
- Conectividad celular con doble ranura SIM para cobertura de red redundante y telemetría continua.
- Amplio soporte de sensores, incluidos sensores de combustible cableados, periféricos BLE, sondas de temperatura 1-Wire y dispositivos RS-485.
- Batería de respaldo y almacenamiento de rutas en el equipo para preservar datos durante cortes de alimentación y mantener el historial de seguimiento.
- Múltiples entradas y salidas digitales y analógicas para detección de ignición, conteo por pulso y salidas de control remoto.

## Características principales del Neomatica - ADM500

- Soporte GNSS multiconstelación para posicionamiento GPS, GLONASS, BDS y Galileo.
- Conectividad LTE y celular heredada con doble ranura nanoSIM para operación redundante.
- Batería de respaldo integrada para operación autónoma durante pérdida de energía y memoria interna para registro extensivo de rutas.
- Interfaces para sensores cableados que incluyen entradas analógicas y de pulso, soporte RS-485 y sondas de temperatura 1-Wire.
- Soporte Bluetooth Low Energy para configuración y reportes desde múltiples sensores BLE y beacons.
- Múltiples canales de E/S, incluyendo entrada de ignición y salidas colectoras abiertas para escenarios de control remoto.
- Funciones de seguridad como acelerómetro triaxial y detección de interferencias de señal para alerta de manipulación y movimiento.
- Opciones de gestión remota que incluyen actualizaciones OTA de firmware, actualizaciones por Bluetooth y configuración vía plataforma o herramientas cuando el dispositivo lo permite.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe paquetes estandarizados de ubicación y telemetría desde el ADM500 para que usted pueda monitorear vehículos y activos en tiempo real y revisar registros históricos. Plaspy detecta automáticamente los protocolos del rastreador y puede aceptar datos del dispositivo por el puerto de reporte habitual usando TCP o UDP según la configuración.

- Coordenadas GPS en vivo y trazos de ruta mostrados en los mapas de Plaspy para visibilidad de ubicación en tiempo real.
- Mensajes impulsados por eventos como encendido/apagado de ignición, alertas de movimiento y notificaciones de manipulación, visibles en paneles y registros de eventos.
- Telemetría de sensores desde entradas analógicas, dispositivos RS-485, sensores BLE y sondas 1-Wire disponible para monitoreo y generación de reportes.
- Reproducción histórica de rutas y registros almacenados para análisis post viaje utilizando la memoria del dispositivo cuando la cobertura celular se interrumpe.
- Flujos de configuración remota y envío de comandos para que Plaspy pueda ayudar a gestionar ajustes del dispositivo, notificaciones y estado de firmware cuando las herramientas y la configuración del dispositivo lo permitan.

## Casos de uso típicos

- Rastreo de flotas para camiones, furgonetas y flotas mixtas que requieren visibilidad continua de posición y operación.
- Monitoreo anti robo y de seguridad usando detección de movimiento, alertas por interferencia y salidas de control remoto.
- Supervisión de transporte con control de temperatura mediante sensores BLE y sondas 1-Wire para asegurar las condiciones de la carga.
- Monitoreo de combustible y análisis de consumo usando sensores de combustible cableados o inalámbricos y dispositivos RS-485.
- Escenarios de larga distancia o cobertura intermitente donde la redundancia de doble SIM y el almacenamiento a bordo preservan la continuidad de datos.
- Monitoreo de activos estacionarios que se benefician de operación con batería de respaldo y entradas de sensores BLE.

## Notas sobre disponibilidad de funciones

- Los campos de telemetría exactos y la cantidad de sensores dependen de la versión de firmware del ADM500 y la revisión de hardware suministrada por el fabricante.
- Algunas interfaces y comportamientos de sensores pueden variar según variantes regionales del producto e instalación eléctrica, lo que afecta lo que Plaspy recibe.
- Las capacidades de gestión remota como las actualizaciones OTA dependen de las condiciones de red, la configuración del dispositivo y el soporte del fabricante.
- Verifique las opciones de protocolo compatibles y la compatibilidad al integrar con Plaspy, ya que cambios en el firmware del dispositivo pueden alterar las funciones disponibles.
- Para detalles eléctricos específicos y de instalación del dispositivo, consulte la documentación oficial e instrucciones de montaje de Neomatica.

## Por qué usar Plaspy con estas funciones

La combinación del ADM500 con Plaspy ofrece a las organizaciones una vista unificada de ubicación, telemetría de sensores e historial de eventos en su flota y activos. Al ingestarse datos estandarizados del rastreador, Plaspy permite a los operadores construir paneles, alertas y reportes que reflejen eventos de ignición, niveles de combustible, lecturas de sensores BLE e historial de rutas para la toma de decisiones operativas.

Para obtener más información sobre Plaspy y cómo la plataforma puede recibir y presentar la telemetría del ADM500, visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles específicos más recientes en el sitio oficial de Neomatica https://neomatica.com/.
