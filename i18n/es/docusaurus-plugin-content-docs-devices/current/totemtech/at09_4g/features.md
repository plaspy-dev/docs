---
slug: /totemtech/at09_4g/features
id: at09_4g-features
sidebar_label: Features
title: Totemtech - AT09-4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Totemtech AT09-4G y su integración con Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - Totemtech AT09-4G
  - funciones AT09-4G
  - rastreador GPS Totemtech
  - AT09-4G Plaspy
  - rastreador 4G
  - telemetría vehicular
  - monitoreo TPMS
  - monitoreo de combustible
  - rastreador LoRa Bluetooth
  - rastreador para gestión de flotas
---

# Totemtech - AT09-4G: Características

Esta página resume el contexto público de funcionalidades para usar el rastreador Totemtech AT09-4G con Plaspy. Se enfoca en información práctica y no sensible sobre las capacidades del dispositivo que resulta relevante al desplegar, supervisar y administrar el AT09-4G mediante la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, los módulos opcionales y las decisiones de instalación. Para especificaciones finales, detalles de configuración y listas de funciones más recientes consulte la documentación y las notas de versión de Totemtech.

## Resumen general

El AT09-4G es un rastreador GPS LTE robusto, pensado para entornos exigentes de vehículos y activos. Combina posicionamiento GNSS multiconstelación con una amplia gama de periféricos y opciones de telemetría para enviar datos continuos de localización y estado del vehículo a plataformas como Plaspy.

- Rastreo en tiempo real confiable gracias a GNSS multiconstelación que mejora el posicionamiento en entornos variados.
- Telemetría vehicular integral, con soporte TPMS y monitorización multicanal de combustible para visibilidad operativa.
- Interfaces y entradas/salidas extensas para integrar sistemas del vehículo y sensores externos.
- Conectividad LoRa y Bluetooth para ampliar redes de sensores y recoger datos IoT locales.
- Soporte opcional para voz y video, y punto de acceso Wi Fi a bordo para conectividad de conductor o pasajeros y sistemas dentro del vehículo.

## Características principales del Totemtech - AT09-4G

- Conectividad 4G LTE con soporte para mecanismos de respaldo habituales como reportes por SMS y GPRS.
- Receptor GNSS multiconstelación compatible con GPS, GLONASS, Galileo y BDS para fijaciones de posición más robustas.
- Telemetría TPMS con capacidad para un gran número de sensores para monitoreo de presión y temperatura de neumáticos.
- Monitorización de combustible multicanal en analógico, compatible con los tipos de sensores más comunes para reporte de nivel de combustible.
- Amplias E/S e interfaces seriales que incluyen múltiples puertos RS232, RS485, CAN, TTL y canales 1-wire para integración de periféricos.
- Soporte LoRa y Bluetooth para conectar sensores externos, balizas o funcionar como parte de una red de sensores LoRa.
- Micrófono y altavoz integrados para comunicación bidireccional y soporte opcional de cámara o video según la variante del equipo.
- Triggers de reporte configurables, geocercas y entradas de alarma para flujos de trabajo de eventos y reportes personalizados.

## Cómo funcionan estas prestaciones con Plaspy

Al conectarse a Plaspy, el AT09-4G transmite ubicación y telemetría para que despachadores y operadores puedan supervisar activos en tiempo real. Plaspy detecta automáticamente los protocolos del rastreador compatibles y mapea los datos entrantes a registros de posición, estado y eventos para que la información del dispositivo sea accionable.

- Actualizaciones de posición en vivo y recorridos históricos mostrados en Plaspy con base en las fijaciones GNSS del rastreador.
- Lecturas de TPMS y sensores de combustible ingresadas en Plaspy para monitorizar la salud de los neumáticos, el consumo y generar alertas.
- Informes de alarmas y eventos como violaciones de geocerca, exceso de velocidad, manipulación y otras entradas digitales que aparecen como alertas en Plaspy.
- Los triggers de reporte configurables en el dispositivo se traducen en frecuencias de actualización ajustables y reportes por eventos dentro de Plaspy, equilibrando precisión y uso de datos.
- Datos de sensores LoRa y Bluetooth reenviados por el dispositivo aparecen en Plaspy como campos de telemetría adicionales cuando el rastreador los transmite.
- Los estados de E/S y periféricos seriales reportados por el equipo están disponibles en Plaspy para paneles de estado y reglas de automatización.

## Casos de uso típicos

- Gestión de flotas y logística que requieren localización continua de vehículos y telemetría para enrutamiento y optimización de activos.
- Workflows de seguridad y antirrobo que combinan geocercas, alertas por manipulación y remolque con comunicaciones con el conductor.
- Flotas de maquinaria pesada y minería donde el hardware resistente y la telemetría extendida ayudan a supervisar uso y seguridad.
- Despliegues de transporte público y rutas escolares que se benefician de integraciones opcionales de Wi Fi a bordo, voz y video.
- Cadena de frío y carga regulada donde datos adicionales de sensores LoRa o Bluetooth permiten monitorear condiciones ambientales.
- Operaciones de flota mixta que necesitan un único dispositivo para consolidar GPS, TPMS, combustible y datos de periféricos en una sola plataforma de gestión.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar entre revisiones de hardware y variantes regionales; módulos opcionales como cámara o paquetes específicos de E/S pueden no estar presentes en todas las unidades.
- La versión de firmware y la configuración del fabricante determinan los campos de telemetría disponibles, los triggers de reporte y el comportamiento del protocolo.
- Algunas capacidades requieren sensores o periféricos externos instalados y cableados correctamente durante la instalación.
- Las funciones relacionadas con la red y las bandas LTE soportadas dependen del modelo regional del dispositivo; consulte la hoja de datos para compatibilidad con operadores.
- Verifique siempre las listas exactas de funciones y las guías de instalación en la documentación oficial del fabricante antes de comprar o desplegar.

## Por qué usar Plaspy con estas prestaciones

Integrar el Totemtech AT09-4G con Plaspy ofrece a las organizaciones una forma práctica de centralizar la ubicación de vehículos y la telemetría avanzada en un único flujo de gestión de flotas. La detección de dispositivos y el mapeo de datos de Plaspy permiten convertir posiciones GNSS, lecturas de combustible y TPMS, alarmas y estados de E/S en informes de visibilidad en tiempo real, alertas y análisis históricos que respaldan la toma de decisiones operativas.

Para obtener más información sobre Plaspy y cómo el AT09-4G puede emplearse en sus operaciones de flota visite https://www.plaspy.com. Para las especificaciones de dispositivo, el comportamiento de firmware y los detalles de configuración del fabricante más recientes verifique la información en el sitio oficial de Totemtech http://www.totemtek.com/.
