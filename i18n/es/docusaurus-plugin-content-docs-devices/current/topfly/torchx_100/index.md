---
slug: /topfly/torchx_100
id: torchx_100
sidebar_label: TorchX 100
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 100

![TorchX 100](./tracker.png)

El TorchX 100 de TorchX es un rastreador GPS OBDII de instalación plug-and-play, compatible con Plaspy, diseñado para un seguimiento en tiempo real fiable y telemetría profunda del vehículo. Diseñado para vehículos pesados y ligeros, el TorchX 100 ofrece actualizaciones de ubicación frecuentes, lectura completa de datos CAN BUS \(incluyendo estado de ignición, VIN, odómetro real, nivel de combustible y códigos de diagnóstico\), y soporte ELD para cumplimiento de horas de servicio — todo plenamente reportable dentro de Plaspy para la gestión de flotas y operaciones de transporte de pasajeros.

Construido sobre una plataforma global 4G Cat-4 con respaldo automático a 3G/2G, el TorchX 100 está optimizado para la gestión de flotas, monitoreo antirrobo y servicios de valor añadido como WiFi a bordo y sensores Bluetooth. Su compacto formato OBDII facilita la instalación, mientras que sus características de telemetría y seguridad robustas \(detección de comportamiento de conducción, alertas de interferencia de red y un gran almacenamiento local de datos\) aseguran un seguimiento continuo y cumplimiento cuando se utiliza con los paneles de Plaspy y los flujos de trabajo de alertas.

## Aspectos clave

- Rastreador GPS OBDII plug-and-play con lectura completa de CAN BUS para VIN, odómetro real, nivel de combustible, estado de ignición y DTCs — ideal para telemetría y diagnóstico precisos.
- Compatible con Plaspy para seguimiento en tiempo real, informes programados y flujos de trabajo de gestión de flotas; admite actualizaciones de ubicación de hasta cada 3 segundos.
- Conectividad global 4G LTE Cat-4 con respaldo automático a 3G/2G y búfer de hasta 49,000 puntos de ubicación cuando está fuera de la red.
- Hotspot WiFi de doble banda integrado \(5 GHz + 2,4 GHz\) para proporcionar acceso a Internet a los pasajeros y servicios a bordo adicionales.
- Funcionalidad ELD para el cumplimiento RODS/HOS — registro automático de las horas de conducción que se integra en los informes de Plaspy para flujos de cumplimiento normativo.
- GNSS Qualcomm Gen 8C de alta precisión \(GPS/GLONASS/Beidou\) con precisión de posición autónoma inferior a 2 m \(CEP-50\) y rendimiento TTFF rápido.
- Soporte BLE 4.2 para sensores externos Bluetooth y amplias características de seguridad, incluyendo detección de comportamiento de conducción y detección de interferencia de red.

## Cómo funciona con Plaspy

El TorchX 100 transmite la ubicación del vehículo y la telemetría CAN BUS a Plaspy utilizando protocolos estándar \(TCP/UDP/MQTT/SMS\), lo que permite el seguimiento en tiempo real, alertas e informes históricos. Plaspy ingiere puntos de ubicación, registros ELD y datos diagnósticos para presentar paneles de control útiles para gerentes de flota, despachadores y responsables de cumplimiento.

- Actualizaciones de ubicación y telemetría en tiempo real \(configurables, hasta cada 3 segundos\) con almacenamiento en búfer automático de hasta 49,000 puntos cuando no hay cobertura de red.
- Alertas de encendido/apagado, reporte del odómetro real y VIN para una identificación precisa del activo y flujos de trabajo basados en la ignición.
- Monitoreo de combustible y reporte de códigos de diagnóstico \(DTC\) vía CAN BUS para casos de telemetría y mantenimiento basados en consumo de combustible.
- Registros ELD \(dispositivo de registro electrónico\) para cumplimiento RODS/HOS visibles en los informes de Plaspy y el seguimiento de las horas de conductor.
- Integración BLE 4.2 para sensores y beacons Bluetooth; el estado de salud del dispositivo y del hotspot WiFi también se reporta para visibilidad operacional.

## Resumen técnico

| Conectividad | 4G LTE Cat-4 con respaldo automático a 3G/2G \(plataforma Cat-4 global\) |
| --- | --- |
| Bandas | Extensas bandas LTE FDD/TDD, además de compatibilidad heredada con WCDMA/GSM \(soporte global de bandas\) |
| GNSS | Receptor Qualcomm Gen 8C; GPS, GLONASS, Beidou |
| Precisión & TTFF | Precisión de posición autónoma &lt; 2 m \(CEP-50\); TTFF frío &lt;29s, tibio &lt;27s, caliente &lt;1s |
| OBDII / CAN BUS | Conector OBDII con lectura completa de CAN; admite ISO 15765, SAE J1939, ISO 14230 KWP2000, ISO 9142-2, SAE J1708 |
| Interfaces | Antenas LTE/GNSS/BLE/WiFi internas; ranura Nano SIM; USB para depuración/configuración/FOTA; LEDs indicativos; zumbador interno |
| Bluetooth | BLE 4.2 para sensores/beacons externos |
| WiFi | Hotspot integrado 5 GHz + 2,4 GHz para acceso a Internet de pasajeros |
| Potencia & Batería | Rango de voltaje de operación 7–32 V DC; batería de respaldo Li-Polymer 100 mAh \(soporta operación limitada y reportes de último recurso\) |
| Protocolos y Seguridad | TCP, UDP, MQTT, SMS; seguridad opcional: MD5/AES128 |
| Almacenamiento & Buffering | Buffer local de hasta 49,000 puntos de ubicación cuando no hay cobertura de red |
| Ambiental & Físico | Dimensiones 52.8 x 47.8 x 24.8 mm; peso 73 g; rango de temperatura de operación -30°C a +80°C |
| Características | Soporte ELD para RODS/HOS, detección de comportamiento de conducción \(aceleración/ frenado/ giro bruscos, detección de colisiones\), lectura/borro de DTC, informes programados, detección de interferencia de red, control de roaming de datos |

## Casos de uso

- Gestión de flotas: rastreador GPS en tiempo real y telemetría CAN para monitorizar rutas, consumo de combustible, odómetro y comportamiento del conductor en los paneles de Plaspy.
- Transporte de pasajeros y servicios de traslado: hotspot WiFi a bordo y actualizaciones de ubicación frecuentes mejoran la experiencia del pasajero y la visibilidad operativa.
- Alquiler de coches y movilidad compartida: VIN, odómetro real y encendido reportados facilitan flujos de check-in/check-out y monitoreo antirrobo.
- Cumplimiento regulatorio: funcionalidad ELD proporciona registros RODS/HOS para conductores comerciales e integra con los informes de Plaspy para auditorías.
- Diagnóstico y mantenimiento del vehículo: informes de DTC y monitoreo de combustible ayudan a priorizar reparaciones y controlar costos operativos.

## Por qué elegir este rastreador con Plaspy

El TorchX 100 ofrece un equilibrio atractivo entre seguimiento GPS preciso, telemetría CAN BUS profunda y conectividad de nivel empresarial que se integra de forma fluida con Plaspy para telemática empresarial. Su formato OBDII plug-and-play reduce el tiempo de instalación, mientras que la precisión GNSS de Qualcomm y el rápido TTFF proporcionan un seguimiento en tiempo real fiable para la optimización de rutas y el monitoreo anti-robo. La funcionalidad ELD integrada, el hotspot WiFi y el soporte para sensores BLE amplían el valor del dispositivo más allá de la ubicación básica, permitiendo monitoreo de combustible, cumplimiento de horas de conductor, conectividad para pasajeros y mantenimiento impulsado por telemetría.

Cuando se combina con Plaspy, los gerentes obtienen telemetría escalable y segura \(TCP/UDP/MQTT/SMS con MD5/AES128 opcional\), datos almacenados en búfer fuera de línea para mantener la continuidad, y alertas configurables para encendido, DTCs, batería baja y eventos de interferencia. El resultado es un rastreador GPS confiable que mejora la gestión de flotas, eleva la seguridad y facilita el cumplimiento, al tiempo que ofrece la posibilidad de ampliar con sensores BLE y servicios para pasajeros sin gateways adicionales en el vehículo.

