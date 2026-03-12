---
slug: /gosafe/g602
id: g602
sidebar_label: G602
sidebar_class_name: menu_item_tracker
---
# Gosafe - G602

![G602](./tracker.jpg)

El G602 Easy Install es un rastreador GPS compacto de dos hilos, concebido para un despliegue rápido y telemática de flota robusta. Compatible con Plaspy desde el inicio, el G602 ofrece seguimiento en tiempo real de alta sensibilidad, telemetría de impactos y datos de comportamiento del conductor en un dispositivo que los instaladores pueden montar en menos de 10 minutos. Su núcleo celular LTE Cat-1 con respaldo GSM/GPRS y reportes TCP/UDP/SMS hacen del G602 una fuente de datos fiable para la gestión de flotas, telemática de seguros, despacho y flujos de recuperación.

Diseñado para flotas de vehículos, aseguradoras y proveedores de servicios que requieren telemetría rica sin complejidad de instalación, el G602 combina un motor multi-GNSS de 56 canales, acelerómetro 3D con grabación de impactos de hasta 100 Hz, BLE 4.2 para sensores externos y actualizaciones de firmware over-the-air \(FOTA\) flexibles. Como rastreador GPS compatible con Plaspy, se integra a la perfección con la plataforma de Plaspy para proporcionar datos de ubicación, eventos y sensores para supervisión, alertas y análisis.

## Aspectos destacados

- Instalación rápida de dos hilos, plug-and-play: compatible con la mayoría de vehículos en menos de 10 minutos para escalar implementaciones a gran escala.
- Compatible con Plaspy para seguimiento en tiempo real fiable y entrega de telemetría vía TCP/UDP/SMS.
- Multis GNSS de alta sensibilidad \(GPS/GLONASS/Galileo/BeiDou\) con SBAS, antena interna de parche y precisión ~2 m en cielo despejado.
- Telemetría preparada para impactos: acelerómetro 3D, grabación de datos de impactos a 100 Hz y análisis de comportamiento del conductor.
- Soporte BLE 4.2 para sensores Bluetooth externos \(temperatura, apertura de puertas, humedad\) para ampliar la telemetría más allá del GPS.
- Amplio rango de voltaje de vehículo \(8–40 V DC\) con modos de bajo consumo configurables para una operación fiable en sistemas de 12 V y 24 V.
- Conectividad flexible: LTE Cat-1 mundial con respaldo GPRS Class 10, acceso a SIM interna y múltiples opciones de comunicación \(TCP/UDP/SMS\).

## Cómo funciona con Plaspy

El G602 transmite datos de posición, eventos y sensores directamente a Plaspy mediante transportes TCP/UDP estándar o SMS. Plaspy procesa telemetría de alta frecuencia y eventos de choque para ofrecer seguimiento casi en tiempo real, alertas e informes históricos. La instalación y configuración son simples: la conexión de dos hilos suministra energía y una entrada de ignición virtual, mientras que la plataforma Plaspy mapea los datos entrantes a los registros de vehículos, geocercas y reglas de alerta.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy vía TCP/UDP o SMS.
- Informe de choques y impactos a alta frecuencia \(hasta 100 Hz\) para detección instantánea de incidentes y flujos de trabajo de aseguradoras.
- Detección de ignición virtual para el estado de encendido/apagado del motor sin necesidad de cableado de ignición dedicado.
- Geocercas por hardware \(hasta 200\) con reglas por hora/día/velocidad que activan alertas e informes de Plaspy.
- Sensores BLE 4.2 se conectan al dispositivo y envían lecturas a Plaspy para monitoreo de temperatura, apertura de puertas o humedad.
- La ubicación asistida por Wi‑Fi ayuda a Plaspy a refinar la posición en entornos urbanos o interiores.
- Soporte FOTA permite actualizaciones de firmware de forma remota coordinadas a través de la flota administrada por Plaspy.

## Resumen técnico

| Conectividad | Conectividad LTE Cat-1 mundial con respaldo GSM/GPRS; comunicación TCP/UDP/SMS |
| --- | --- |
| Bandas | Múltiples bandas LTE Cat-1 \(variantes regionales\) con respaldo GPRS Class 10 |
| Alimentación & Batería | Voltaje de operación 8–40 V DC; modos de bajo consumo \(sleep ~3 mA @12 V; ahorro de energía ~60 mA; seguimiento activo ~120 mA\); batería de respaldo Li‑Po interna opcional de 220 mAh |
| Interfaces | Instalación plug-and-play de dos hilos, acceso a SIM interna 4FF, micro-USB para configuración/debug, LEDs de estado \(GPS/celular/energía\) |
| GNSS | 56 canales GPS/GLONASS/Galileo/BeiDou, antenas de parche internas, sensibilidad de −162 dBm, precisión SBAS ~2 m \(cielo despejado\) |
| Aceleración & Sensores | Acelerómetro 3D, grabación de choques de hasta 100 Hz; admite sensores BLE 4.2 \(temperatura, puerta, humedad\) |
| Almacenamiento & CPU | CPU ARM Cortex-M3, 4 Mbit de flash \(~8,000 registros\) |
| Gestión remota | FOTA \(actualización de firmware vía aire\) |
| Ambiente | Rango de operación −40 a +85 °C \(sin batería de respaldo\); cumplimiento de choques y vibraciones de grado vehicular |
| Formato y Montaje | Rastreador compacto de dos hilos para vehículo; montaje mediante bridas, Velcro o adhesivo; accesorios opcionales \(batería de respaldo, cable USB, kit Velcro, fusible, sensores BLE\) |

## Casos de uso

- Gestión de flotas: ubicación en tiempo real de vehículos, verificación de rutas y análisis del comportamiento del conductor para mejorar la eficiencia y reducir riesgos.
- Telemática de seguros: datos de choques de alta frecuencia y métricas de conducción para validación de reclamaciones, reconstrucción de incidentes y programas basados en el comportamiento.
- Antirrobo y recuperación: rastreo continuo y alertas de geocerca para apoyar una recuperación rápida del vehículo y respuesta ante robos.
- Despacho y operaciones: posición y estado en tiempo real para despacho dinámico, actualizaciones de ETA y mejora del servicio al cliente.
- Activos con sensores: sensores BLE para monitoreo de puertas, temperatura o humedad, combinados con paneles de Plaspy para seguimiento del estado de los activos.

## Por qué elegir este rastreador con Plaspy

El G602 Easy Install es un rastreador GPS compatible con Plaspy ideal cuando la velocidad de despliegue, la calidad de datos y la resiliencia operativa son importantes. Su diseño de dos hilos plug-and-play reduce el tiempo y el costo de instalación para implementaciones de flotas, mientras que la precisión multi-GNSS, la telemetría de choques a alta frecuencia y el soporte de sensores BLE ofrecen la telemetría rica que Plaspy necesita para seguimiento en tiempo real, alertas de incidentes y análisis avanzado. La conectividad global LTE Cat-1 con respaldo GPRS y la capacidad FOTA simplifican la gestión del dispositivo y aseguran que su flota permanezca conectada y actualizada.

Opte por el G602 con Plaspy para acelerar las instalaciones, capturar telemetría significativa para flujos de seguridad y de seguros, y obtener un seguimiento en tiempo real fiable para diversos tipos de vehículos y entornos operativos. Su diseño de grado vehicular, su amplio rango de voltaje y su completo reporting de eventos lo convierten en una solución práctica y escalable para flotas comerciales y programas de telemática.

