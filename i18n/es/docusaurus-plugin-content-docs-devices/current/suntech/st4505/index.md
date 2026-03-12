---
slug: /suntech/st4505
id: st4505
sidebar_label: ST4505
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4505

![ST4505](./tracker.jpg)

El ST4505, rastreador GPS LTE Cat M1 OBD-II de un proveedor de telemática probado, es un dispositivo plug-and-play diseñado para la gestión de flotas moderna y la telemática de vehículos. Compatible con Plaspy de fábrica, el ST4505 ofrece seguimiento GPS continuo basado en GNSS, diagnósticos del vehículo a través del puerto J1962 OBD-II y telemetría que admite seguimiento en tiempo real, análisis del comportamiento del conductor y una respuesta rápida ante incidentes.

Con un diseño orientado a una operación fiable en vehículo, el ST4505 admite redes LTE Cat M1, NB‑IoT y 2G de respaldo, incluye GPS+GLONASS con soporte SBAS y una batería de respaldo recargable para mantener la generación de reportes durante la pérdida de alimentación principal. Las variantes disponibles \(ST4505T y ST4505DO\) añaden soporte para sensores Bluetooth y otras funciones opcionales como detección de interferencias para ampliar las capacidades anti-robo y de telemetría cuando se utiliza con Plaspy.

## Aspectos clave

- Instalación OBD-II plug-and-play compatible con Plaspy para implementaciones rápidas de flotas y minimizar el tiempo de inactividad.
- Conectividad multi-red \(LTE Cat M1, NB‑IoT y respaldo 2G\) para cobertura en áreas amplias y transporte de datos rentable.
- GNSS de alta precisión \(GPS + GLONASS\) con soporte SBAS y precisión típica de ubicación de aproximadamente ±3 m CEP para un seguimiento en tiempo real preciso.
- Telemetría integral del vehículo a través del puerto J1962 OBD-II \(J1850, ISO 9141-2, ISO 14230, ISO 15765-4/CAN\) que habilita diagnósticos, reporte de DTC y datos de combustible/motor cuando el vehículo los proporciona.
- Acelerómetro de 3 ejes y giroscopio de 3 ejes \(BMI160\) integrados para reconstrucción de impactos, detección de eventos y puntuación del comportamiento del conductor.
- Batería de respaldo recargable de 3.7 V, 350 mAh para reportes esenciales durante la pérdida de energía principal y mayor resiliencia anti-robo.
- Actualización de firmware OTA \(actualización remota de firmware\) y detección de interferencias opcional y Bluetooth en la variante ST4505T para sensores y balizas Bluetooth.

## Cómo funciona con Plaspy

El ST4505 se integra con Plaspy enviando correcciones GNSS, telemetría OBD-II del vehículo y eventos de sensores a través de redes celulares al backend de Plaspy. Plaspy ingiere flujos de ubicación y diagnóstico para seguimiento en tiempo real, alertas automáticas e informes históricos. Los flujos de datos y las tasas de actualización son configurables dentro de Plaspy para equilibrar la capacidad de respuesta y los costos de datos en aplicaciones de gestión de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas vía LTE Cat M1/NB-IoT o respaldo 2G.
- Detección de choques y eventos severos mediante el acelerómetro y el giroscopio integrados para alertas inmediatas y reconstrucción de incidentes.
- Diagnósticos del vehículo y reporte de DTC desde OBD-II PIDs, que permiten mantenimiento preventivo y telemetría como el monitoreo de combustible cuando el vehículo expone esos datos PID.
- Reportes respaldados por la batería durante la pérdida de energía principal para mantener la conectividad y notificaciones anti-robo.
- Soporte opcional para sensores Bluetooth \(ST4505T\) para sensores de temperatura, sensores de puertas o balizas Bluetooth cuando se utilizan con flujos de trabajo compatibles de Plaspy.

## Visión técnica

| Conectividad | LTE Cat M1, NB‑IoT, respaldo 2G |
| --- | --- |
| Bandas | Bandas específicas del operador/modelo dependientes — las bandas no están especificadas en la descripción proporcionada |
| Alimentación y batería | Entrada DC 8–33 V con protección contra inversión; batería de respaldo recargable de 3.7 V, 350 mAh |
| Consumo de energía | ~120–130 mA activo a 12 V; \<5 mA en reposo; modo sueño profundo \<2 mA |
| Interfaces | Conector OBD-II J1962 de 16 pines que soporta J1850, ISO 9141-2, ISO 14230 \(K-line\), ISO 15765-4 \(CAN\) para diagnósticos del motor/vehículo y DTCs; dos LEDs para estado de red y GPS; antena interna |
| GNSS | GPS + GLONASS con SBAS \(WAAS/EGNOS/MASA\); precisión típica ~±3 m CEP; sensibilidad hasta −167 dBm; TTFF: cold \<35 s, warm \<30 s, hot \<1 s |
| Sensores | Acelerómetro de 3 ejes y giroscopio de 3 ejes \(BMI160\) para detección de movimiento, choques y comportamiento de conducción |
| Bluetooth | Opcional en la variante ST4505T para sensores/beacons Bluetooth |
| Gestión remota | Actualizaciones de firmware OTA \(actualización de firmware remota\) |
| Forma | Módulo OBD-IIPlug-in, dimensiones 74 × 46 × 25 mm; peso ~71 g |
| Entorno operativo | Temperatura de operación −30 °C a +85 °C |
| Certificaciones | FCC, IC, PTCRB |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real continuo, análisis de rutas y telemetría para optimizar operaciones y reducir costos de combustible.
- Antirrobo y recuperación de vehículos: reporte de la batería de respaldo y detección opcional de interferencias combinados con alertas de Plaspy ayudan a detectar robos y facilitar la recuperación.
- Comportamiento del conductor y telemática de seguros: los datos del acelerómetro/giroscopio proporcionan eventos de frenado brusco, aceleración y giro para coaching o seguros basados en el uso.
- Mantenimiento preventivo y reporte de DTC: diagnósticos del vehículo y datos del motor en tiempo real alimentan alertas de Plaspy para servicios programados y reducción de tiempos de inactividad.
- Monitoreo de activos con sensores BLE \(ST4505T\): agregar sensores de temperatura, puertas o carga vía Bluetooth cuando sea necesario para los flujos de trabajo comerciales.

## Por qué elegir este rastreador con Plaspy

Elegir el ST4505 para implementaciones con Plaspy ofrece un rastreador GPS fiable y fácil de instalar que combina posicionamiento preciso, telemetría a nivel de vehículo y datos de sensores robustos. Su interfaz OBD-II habilita diagnósticos y telemetría enriquecidos \(incluidos datos relacionados con el combustible cuando el vehículo los proporciona\), mientras que el acelerómetro y el giroscopio integrados respaldan la reconstrucción de accidentes y la puntuación del conductor. El soporte multi-red celular y una batería de respaldo maximizan la disponibilidad para operaciones críticas de gestión de flotas y flujos de trabajo anti-robo.

Para operadores que buscan telemática escalable, la capacidad OTA del ST4505 y la compatibilidad con Plaspy simplifican el mantenimiento y la configuración remotos. Las funciones opcionales de Bluetooth y detección de interferencias \(en las variantes\) amplían la capacidad a sensores Bluetooth y medidas anti-robo reforzadas cuando se utilizan dentro de los flujos de alertas e inmovilización de Plaspy o con módulos de inmovilización externos. El resultado es un rastreador GPS práctico y rentable para flotas, vehículos de alquiler, telemática de seguros y programas de mantenimiento preventivo que requieren seguimiento y telemetría en tiempo real fiables.

