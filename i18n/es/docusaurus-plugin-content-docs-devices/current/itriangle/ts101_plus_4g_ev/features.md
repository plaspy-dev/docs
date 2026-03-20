---
slug: /itriangle/ts101_plus_4g_ev/features
id: ts101_plus_4g_ev-features
sidebar_label: Features
title: iTriangle - TS101 PLUS 4G EV Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del iTriangle TS101 PLUS 4G EV y su integración con Plaspy para rastreo de flotas EV
keywords:
  - iTriangle TS101 PLUS 4G EV
  - características TS101 PLUS 4G EV
  - características rastreador GPS iTriangle
  - rastreador TS101 EV Plaspy
  - rastreador de flotas EV iTriangle
  - rastreador GPS multi GNSS
  - rastreador EV bus CAN
  - rastreador BLE 5.0
  - rastreador GPS LTE Cat1
  - telemática vehicular Plaspy
---

# iTriangle - TS101 PLUS 4G EV Características

Esta página ofrece un resumen público de las características del iTriangle TS101 PLUS 4G EV en relación con Plaspy. Describe las capacidades prácticas que puede esperar al usar este rastreador telemático diseñado para vehículos eléctricos junto con Plaspy, incluyendo seguimiento en tiempo real, telemetría vehicular y monitoreo de flotas. El contenido se concentra en información general y no sensible que ayuda a operadores e integradores a entender cómo el dispositivo aporta valor dentro de Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. Las funciones descritas aquí provienen de la documentación pública del fabricante; para detalles específicos como comportamiento de firmware, métodos de configuración y las especificaciones técnicas más recientes, consulte la documentación oficial del fabricante.

## Resumen de funciones

El TS101 PLUS 4G EV está diseñado para ofrecer seguimiento continuo de posición y telemetría para vehículos eléctricos y flotas mixtas. Combina posicionamiento multi GNSS, conectividad celular, acceso al bus del vehículo y sensores locales para enviar datos accionables a Plaspy destinados a monitoreo, alertas e informes.

- Posicionamiento multi GNSS para mayor precisión y trazado de rutas fiable.
- Conectividad LTE Cat 1 con eSIM integrada y fallback para cobertura amplia.
- Telemetría vehicular vía bus CAN y interfaces seriales seleccionables para diagnóstico.
- Sensores de movimiento internos para detectar eventos bruscos y apoyar el monitoreo de conducta del conductor.
- BLE 5.0 incorporado para sensores de proximidad y extensiones de corto alcance sin antenas adicionales.

## Funciones principales del iTriangle - TS101 PLUS 4G EV

- Soporte multi GNSS incluyendo GPS, Galileo, NavIC y BeiDou para posicionamiento robusto.
- Módem LTE Cat 1 con eSIM embebida y fallback a 2G para enlaces celulares resilientes.
- Integración con bus CAN y selección de RS232 o RS485 para datos de diagnóstico vehicular.
- Acelerómetro y giroscopio integrados para detección de movimiento y registro de eventos bruscos.
- BLE 5.0 interno para emparejar sensores Bluetooth y balizas y ampliar el monitoreo.
- Soporte OTA y FOTA para actualizaciones remotas de firmware y configuración.
- Amplio rango de entrada 9–90V DC y carcasa robusta IP65 adecuada para diversas instalaciones en EV.
- Batería de respaldo interna y almacenamiento a bordo para mantener registros durante cortes temporales.

## Cómo funcionan estas características con Plaspy

Al integrarse con Plaspy, el TS101 PLUS 4G EV envía flujo de posición y telemetría del vehículo a la plataforma para que los operadores de flota puedan monitorear en tiempo real y reaccionar a eventos. Plaspy detecta automáticamente protocolos de rastreadores compatibles e ingiere posiciones GNSS, eventos de sensores y datos del bus vehicular para paneles de control y alertas.

- Actualizaciones de ubicación en tiempo real y reproducción histórica de rutas basadas en fijaciones multi GNSS.
- Informes de movimiento y eventos bruscos desde el acelerómetro y giroscopio para análisis de conducta de conductores.
- Telemetría del bus CAN disponible en Plaspy para diagnóstico, monitoreo de disponibilidad y generación de reportes de rendimiento.
- Datos de sensores BLE y balizas que pueden ampliar la visibilidad en Plaspy hacia accesorios locales y casos de uso de proximidad.
- Plaspy puede recibir reportes del dispositivo mediante conexiones estándar y detectará el protocolo del rastreador para facilitar la incorporación.

## Casos de uso típicos

- Gestión de flotas EV con seguimiento continuo, análisis de rutas y diagnóstico remoto.
- Integración OEM o posventa en EV donde la telemetría del bus CAN es necesaria para conocer el estado del vehículo.
- Implementaciones en micromovilidad y flotas de motocicletas que requieren hardware resistente y amplia tolerancia de voltaje.
- Programas de seguridad y conducta de conducción que usan telemetría de eventos de movimiento para reducir incidentes.
- Programas de mantenimiento remoto que emplean actualizaciones OTA y telemetría continua para un servicio proactivo.

## Notas sobre disponibilidad de funciones

- La versión de firmware y las variantes regionales de hardware pueden habilitar o limitar funciones específicas, como canales CAN o soporte de bandas de radio.
- El cableado instalado y las configuraciones OEM del vehículo determinan qué señales del vehículo están disponibles a través del bus CAN y las entradas digitales.
- Las capacidades de BLE, OTA y eSIM embebida dependen de las funciones habilitadas en firmware y de la provisión por parte del operador.
- La capacidad de la batería interna y el consumo en modo de reposo están sujetos a la gestión de energía del firmware y al esquema de cableado de la instalación.
- Consulte las notas de lanzamiento del fabricante para cambios en el comportamiento de los sensores y adiciones de funciones en actualizaciones de firmware.

## Por qué usar Plaspy con estas características

Combinar el TS101 PLUS 4G EV con Plaspy ofrece a los operadores una vía práctica desde la telemetría sin procesar hasta la inteligencia operativa. El dispositivo aporta posiciones multi GNSS, eventos de movimiento y datos del bus vehicular, mientras que Plaspy convierte esas entradas en monitoreo en vivo, alertas e informes consolidados que apoyan la eficiencia de la flota, la seguridad y la planificación de mantenimiento.

Para saber más sobre Plaspy y cómo la plataforma funciona con rastreadores como el iTriangle TS101 PLUS 4G EV visite https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, notas de firmware y detalles del fabricante verifique la información actual en el sitio de iTriangle https://www.itriangle.net/.
