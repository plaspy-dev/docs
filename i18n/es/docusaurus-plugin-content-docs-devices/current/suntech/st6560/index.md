---
slug: /suntech/st6560
id: st6560
sidebar_label: ST6560
sidebar_class_name: menu_item_tracker
---
# Suntech - ST6560

![ST6560](./tracker.jpg)

El ST6560 es un rastreador GPS OBD-II compacto diseñado para una integración fluida con Plaspy, que ofrece diagnósticos a nivel de vehículo y datos de ubicación confiables para operaciones modernas de flota. Su instalación plug‑and‑play en el conector J1962 de 16 pines del vehículo convierte al ST6560 en una opción eficiente para la gestión de flotas, recuperación ante robo y proyectos telemáticos que requieren hardware compatible con Plaspy y telemetría avanzada del motor.

Construido para la resiliencia en múltiples redes y un amplio soporte de protocolos de vehículo, el ST6560 combina LTE Cat.M1, NB‑IoT y respaldo 2G con GNSS multiconstelación y Dead Reckoning para garantizar un seguimiento continuo y preciso en tiempo real. Con BLE 5.3 para sensores inalámbricos locales, soporte J1939 y FMS para vehículos pesados, y acceso diagnóstico profundo OBD-II, el ST6560 ofrece la telemetría y las señales del vehículo que esperan los gestores de flotas de un rastreador GPS compatible con Plaspy.

## Puntos clave

- Rastreador GPS OBD-II compatible con Plaspy que ofrece diagnósticos de vehículo y reportes de posición para la gestión de flotas.
- Conectividad celular multi-red \(LTE Cat.M1, NB‑IoT + respaldo 2G\) para un seguimiento en tiempo real fiable en distintas zonas de cobertura.
- GNSS multiconstelación \(GPS/GLONASS/Galileo/BeiDou\) con una precisión de ~±2 m CEP y Dead Reckoning para túneles y áreas de señal débil.
- Lee diagnósticos del motor extensos, códigos de diagnóstico de fallos \(DTC\) y identificación del vehículo mediante detección automática de protocolos OBD-II.
- Soporta los protocolos J1939 ELD y FMS—diseñados para vehículos pesados y telemetría de flota comercial.
- BLE 5.3 integrado para sensores y accesorios locales, ampliando la telemetría a bordo como sensores de temperatura o de carga.
- Formato compacto con batería de respaldo, sensor de movimiento \(acelerómetro de 3 ejes + giroscopio de 3 ejes, ICM‑42670\) y capacidades de geocerca \(círculo y polígonos\).

## Cómo funciona con Plaspy

El ST6560 transmite la ubicación del vehículo, diagnósticos y telemetría a la plataforma Plaspy a través de redes celulares. Una vez instalado en el puerto OBD-II del vehículo y activado, el dispositivo detecta automáticamente el protocolo OBD del vehículo, comienza a sondear PIDs compatibles y mensajes J1939/FMS, y transmite telemetría estandarizada a Plaspy para seguimiento en tiempo real, alertas e informes. Los equipos de Plaspy pueden utilizar los datos para monitoreo en vivo, informes programados y alertas automáticas de incidentes.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para paneles de seguimiento en vivo y reproducción histórica.
- Diagnósticos del motor e informes de DTC: Plaspy puede mostrar fallos y disparadores de mantenimiento a partir del flujo de datos OBD-II.
- Soporte de J1939 ELD y FMS para vehículos pesados, entregando horas de motor, PIDs relacionados con combustible y telemetría CAN-bus cuando esté disponible.
- Eventos de geocerca circulares y poligonales para alertas automáticas de entrada/salida y cumplimiento de ruta.
- Acceso a señales relacionadas con el encendido y al estado del vehículo a través de la interfaz estándar J1962; monitoreo de combustible y otra telemetría cuando esté expuesta por los datos OBD/J1939 del vehículo.
- Sensores Bluetooth: empareje dispositivos BLE con el ST6560 para datos locales \(p. ej., temperatura, sensores de puertas\) que se sincronizan con Plaspy.
- Dead Reckoning y GNSS de alta sensibilidad aseguran la continuidad del reporte de posición en túneles o cañones urbanos para una visualización fiable en Plaspy.

## Resumen técnico

| Conectividad | LTE Cat.M1, NB‑IoT con respaldo 2G |
| --- | --- |
| Bandas | Las bandas celulares varían según la variante \(Cat.M1, NB‑IoT, respaldo 2G\). Consulte ST6560.pdf para detalles regionales de bandas. |
| Alimentación y batería | Alimentación del vehículo DC 8–28 V con protección contra inversión de la alimentación principal; batería de respaldo Li‑ion recargable de 3.7 V, 90 mAh |
| Interfaces | Conector OBD-II J1962 de 16 pines \(incluye J1850, K‑Line, CAN ISO 15765‑4\); admite protocolos J1939 ELD y FMS |
| GNSS | GPS/GLONASS/Galileo/BeiDou multiconstelación; precisión efectiva ~±2 m CEP; TTFF: frío &lt;30s, cálido &lt;25s, caliente &lt;1s; sensibilidad de seguimiento -167 dBm; Dead Reckoning soportado |
| Bluetooth | BLE 5.3 para sensores locales e integración de accesorios |
| Sensores e Indicadores | Antena interna, 2 LEDs de estado \(Conectividad, GPS\), sensor de movimiento \(acelerómetro de 3 ejes + giroscopio de 3 ejes, ICM‑42670\) |
| Consumo de energía | Activo: 120–130 mA @12 V; Reposo \<5 mA @12 V; Sueño profundo \<2 mA @12 V |
| Ambiental y Formato | Dimensiones 51 × 59 × 25 mm; peso 72 g; temperatura de operación -30 °C a +80 °C |
| Certificaciones y accesorios | FCC, IC, PTCRB, CE; accesorios incluyen cables de extensión J1939 y cables Y; hoja de datos completa \(ST6560.pdf\) disponible |

## Casos de uso

- Gestión de flotas: paneles centrales de Plaspy para monitorización de rutas, comportamiento del conductor y planificación de mantenimiento basada en telemetría.
- Cumplimiento de vehículos pesados: recopilación de datos ELD J1939 y FMS para camiones de larga distancia y equipos especializados.
- Antirrobo y recuperación: instalación discreta de OBD-II con geocercas y alertas en tiempo real para detectar movimientos no autorizados.
- Mantenimiento preventivo: DTC y telemetría del motor reenviados a Plaspy para notificaciones de servicio proactivo y reducción del tiempo de inactividad.
- Monitoreo de activos con sensores: sensores BLE para temperatura de la carga, estado de apertura/cierre de puertas o telemetría local del activo conectada al rastreador.

## Por qué elegir este rastreador con Plaspy

El ST6560 combina la conveniencia de OBD-II compacto con telemetría avanzada y compatibilidad con Plaspy para ofrecer una solución equilibrada para flotas y propietarios de vehículos. Su diseño de multi-red \(LTE Cat.M1/NB‑IoT + 2G\), un rendimiento robusto de GNSS con Dead Reckoning y un amplio soporte de protocolos OBD-II/J1939 lo hacen ideal para seguimiento en tiempo real, monitorización de combustible y diagnósticos del motor. BLE 5.3 amplía su uso con sensores Bluetooth, mientras que una pequeña batería de respaldo y modos de bajo consumo ayudan a preservar la conectividad crítica. Certificado a normas internacionales \(FCC, IC, PTCRB, CE\) y compatible con accesorios específicos del vehículo, el ST6560 ofrece una integración fiable en Plaspy para una gestión de flotas escalable, toma de decisiones basada en telemetría y flujos de trabajo de anti‑robo mejorados.

