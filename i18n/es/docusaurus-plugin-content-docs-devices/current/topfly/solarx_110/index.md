---
slug: /topfly/solarx_110
id: solarx_110
sidebar_label: SolarX 110
sidebar_class_name: menu_item_tracker
---
# TopFly - SolarX 110

![SolarX 110](./tracker.png)

El SolarX 110 es un rastreador GPS duradero alimentado por energía solar, diseñado para la monitorización de activos al aire libre a largo plazo y completamente compatible con Plaspy para una gestión de flota y visibilidad de activos sin fisuras. Construido para contenedores, remolques, camiones y otros activos de alto valor, el SolarX 110 incorpora una protección IP67, un eficiente sistema de captación solar y una batería Li‑Polymer recargable de 2500 mAh para proporcionar un mayor tiempo de actividad en despliegues remotos.

Con seguimiento en tiempo real de alta frecuencia \(informes tan rápidos como cada 3 segundos\), GNSS de múltiples constelaciones, compatibilidad BLE 5.3 para sensores complementarios y un robusto almacenamiento de datos en búfer, el SolarX 110 ofrece a los equipos de operaciones telemetría fiable, alertas anti‑robo y trayectorias históricas detalladas a través de la plataforma Plaspy. Su conjunto de características orientado a campo y sus flexibles opciones de transporte de datos lo convierten en una opción práctica para flujos de trabajo basados en telemetría y soluciones de flota con sensores mixtos.

## Principales características

- Rastreador GPS compatible con Plaspy optimizado para despliegues al aire libre alimentados por energía solar.
- Seguimiento en tiempo real con intervalos de reporte de hasta 3 segundos para una visibilidad precisa de las rutas.
- Captación solar y una batería Li‑Polymer recargable de 2500 mAh para una mayor duración en campo.
- GNSS todo en uno \(GPS, BeiDou, Galileo, QZSS\) con una precisión horizontal autónoma &lt;1.5 m CEP.
- LTE Cat 1 con respaldo GSM 2G en bandas globales amplias para soportar la gestión global de flotas.
- BLE 5.3 para sensores Bluetooth \(temperatura, puerta\) y sensor de temperatura incorporado para el monitoreo complementario de la cadena de frío.
- Funciones robustas anti‑manipulación: interruptor de efecto Hall para alertas de extracción, indicadores LED y carcasa IP67.
- Gran búfer offline \(hasta 60,000 puntos\) para conservar los datos históricos cuando no hay cobertura de red.

## Cómo funciona con Plaspy

El SolarX 110 transmite posiciones GNSS, telemetría y datos de sensores a Plaspy mediante métodos de transporte estándar, habilitando seguimiento en tiempo real, alertas configurables e informes históricos. Plaspy ingiere la ubicación y telemetría vía TCP/UDP/MQTT o SMS, y luego visualiza rutas, activa alarmas de geocerca y reenvía notificaciones de eventos a los equipos de operaciones.

- Actualización en tiempo real de ubicación y telemetría \(intervalos configurables de hasta 3 segundos\) para visibilidad en vivo de activos y reproducción de rutas.
- Almacenamiento de ubicaciones en búfer \(hasta 60,000 puntos\) para garantizar un seguimiento histórico continuo incluso durante fallos de red; Plaspy sincroniza cuando la conectividad se restablece.
- Alertas de extracción/antirrobo mediante interruptor de efecto Hall y notificaciones de manipulación integradas en las reglas de alarma de Plaspy.
- Soporte BLE 5.3 para conectar sensores externos \(temperatura, puerta\); Plaspy muestra la telemetría de sensores accesorios junto a los datos GPS.
- Opciones de transmisión seguras \(MD5 y AES128\) y actualizaciones de firmware FOTA para mantener el comportamiento del dispositivo alineado con las integraciones de Plaspy.

## Visión técnica

| Conectividad | LTE FDD / LTE TDD Cat 1 con respaldo GSM 2G |
| --- | --- |
| Bandas | LTE FDD: B1/B2/B3/B4/B5/B7/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66; LTE TDD: B34/B38/B39/B40/B41; GSM: 850/900/1800/1900 MHz |
| Energía y batería | Con energía solar y batería Li‑Polymer recargable de 2500 mAh, y una gestión eficiente de la energía para una operación prolongada en campo |
| Interfaces | Conector Tipo‑C \(configuración/carga\), ranura Nano SIM, antenas internas de red y GNSS, indicadores LED \(red, GNSS, batería\), botón táctil de encendido, interruptor de efecto Hall para alertas de extracción |
| GNSS | GPS / BeiDou / Galileo / QZSS; 24 canales de seguimiento / 64 de adquisición; adquisición -148 dBm; seguimiento -162 dBm; precisión horizontal autónoma &lt;1.5 m CEP |
| Bluetooth | BLE 5.3 para sensores externos y balizas accesorias \(compatibles con el ecosistema TOPFLYtech\) |
| Gestión remota | Soporte FOTA; transmisión de datos vía TCP/UDP/MQTT/SMS; opciones de cifrado MD5 y AES128 |
| Forma y durabilidad | IP67 resistente al agua; dimensiones 88 × 60,4 × 30,7 mm; peso 150 g; rango de temperatura operativo -30°C a +80°C; montaje por imán, tornillo o cinta adhesiva de doble cara |

## Casos de uso

- Seguimiento de contenedores y remolques: operación a largo plazo con energía solar y GNSS de alta precisión que proporcionan un historial continuo de posiciones para la logística intermodal.
- Detección antirrobo y manipulación: alertas de extracción mediante interruptor de efecto Hall y alarmas configurables de Plaspy permiten a las flotas responder rápidamente a movimientos no autorizados.
- Monitoreo auxiliar de la cadena de frío: sensores BLE de temperatura emparejados al SolarX 110 alimentan a Plaspy con telemetría ambiental junto a la ubicación.
- Visibilidad de activos de la flota: rastrear activos no motorizados \(remolques, equipos\) con informes programados y historial en búfer para la planificación operativa.
- Sitios remotos y escenarios sin cobertura: gran búfer a bordo y robusta gestión de energía preservan los datos hasta que la conectividad regrese.

## Por qué elegir este rastreador con Plaspy

El SolarX 110 está diseñado para ofrecer un seguimiento confiable, asistido por energía solar, de activos exteriores mientras se integra sin problemas con Plaspy para seguimiento en tiempo real y gestión de flotas. Su combinación de precisión GNSS de múltiples constelaciones, conectividad global LTE Cat 1, soporte para sensores BLE y un robusto búfer offline reduce la pérdida de datos y los puntos ciegos operativos. Para las organizaciones que requieren insights telemétricos — desde alertas anti‑robo hasta sensorización ambiental — el SolarX 110 proporciona una base de hardware resiliente mientras Plaspy ofrece informes escalables, gestión de alarmas y análisis histórico.

Ya sea que necesite seguimiento GPS preciso, sensores Bluetooth para temperatura o estado de la puerta, o flujos de telemetría seguros para sistemas posteriores, emparejar el SolarX 110 con Plaspy ayuda a los equipos a mantener la visibilidad de los activos y responder más rápido. Para escenarios que requieren monitoreo de combustible, datos de encendido o del inmovilizador, la plataforma de Plaspy puede consolidar múltiples fuentes de telemetría para proporcionar una visión operativa unificada junto con la ubicación y las corrientes de sensores del SolarX 110.

