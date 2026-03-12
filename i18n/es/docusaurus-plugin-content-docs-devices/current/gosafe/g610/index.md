---
slug: /gosafe/g610
id: g610
sidebar_label: G610
sidebar_class_name: menu_item_tracker
---
# Gosafe - G610

![G610](./tracker.jpg)

El G610 es un rastreador GPS de flota compacto y de bajo costo, diseñado para proveedores de servicios, integradores y clientes empresariales que exigen hardware fiable compatible con Plaspy para el seguimiento en tiempo real, la gestión de flotas y la telemática para seguros. Con conectividad LTE Cat‑1, GNSS de múltiples constelaciones y BLE 4.2 para sensores inalámbricos, el G610 ofrece la telemetría y las entradas/salidas anti‑robo necesarias para optimizar la asignación de vehículos, su recuperación y el análisis del comportamiento del conductor cuando se utiliza junto a la plataforma Plaspy.

El dispositivo está diseñado para una fácil integración con Plaspy: admite modos de datos TCP/UDP/SMS, actualizaciones de firmware FOTA y capacidades de geocerca por hardware para que los proveedores puedan desplegar y gestionar grandes flotas. Ya sea que necesite grabación de impactos de alta resolución para la reconstrucción de accidentes, monitoreo de la ignición y entradas/salidas digitales para telemática, o soporte para sensores BLE para telemetría adicional, el G610 es una opción compatible con Plaspy centrada en fiabilidad, bajo consumo y rendimiento probado en vehículos.

## Aspectos destacados

- Rastreador LTE Cat‑1 compatible con Plaspy, con respaldo GSM/3G para un seguimiento en tiempo real fiable y una gestión de flotas eficiente.
- GNSS de múltiples constelaciones \(GPS/GLONASS/Galileo/BeiDou\) con receptor de 56 canales y precisión SBAS de hasta 2,0 m en cielo despejado.
- Grabación de choques a alta resolución de hasta 100 Hz y actualizaciones GNSS de hasta 4 Hz para un análisis preciso del comportamiento de conducción y la reconstrucción de accidentes.
- Conjunto de E/S flexible: detección de ignición, múltiples entradas/digitales, identificador de conductor 1‑Wire y entrada analógica programable para telemetría y flujos de trabajo anti‑robo.
- BLE 4.2 y soporte de ubicación por Wi‑Fi para ampliar la telemetría con sensores inalámbricos y mejorar la precisión de posicionamiento en entornos urbanos.
- Modos de bajo consumo y batería de respaldo Li‑Po interna opcional para garantizar operación continua ante cortes de energía.
- Actualizaciones de firmware FOTA, antenas internas y una ranura SIM 4FF interna para una instalación en campo simple y gestión remota.

## Cómo funciona con Plaspy

El G610 se integra con Plaspy utilizando informes IP/SMS estándar para que puedas ingerir posición, eventos y telemetría en tiempo real. Envía soluciones GNSS, aceleración y datos de choques, cambios de estado de entradas \(ignición, apertura de puertas, pánico\) y lecturas de sensores BLE a los servidores de Plaspy a través de LTE Cat‑1 o respaldo GSM. Plaspy utiliza esos datos para proporcionar mapas en vivo, alertas, informes históricos y flujos de trabajo automatizados para la gestión de flotas y la respuesta anti‑robo.

- Actualizaciones de ubicación y telemetría en tiempo real mediante TCP/UDP/SMS para un seguimiento continuo y la reproducción de rutas.
- Detección de ignición y entradas digitales reportan el estado del vehículo y soportan el monitoreo de eventos del conductor y del motor para telemática.
- Grabación de choques a alta frecuencia \(hasta 100 Hz\) y actualizaciones GNSS de 4 Hz para la reconstrucción precisa de accidentes y el análisis del comportamiento del conductor.
- Telemetría de combustible y analógica a través de la entrada analógica programable puede reenviarse a Plaspy como campos de telemetría personalizados.
- Control remoto del inmovilizador mediante salidas abiertas y con retención configurables \(se pueden usar para operar relés o inmovilizadores cuando se configure a través de los flujos de trabajo de Plaspy\).
- Los sensores BLE y los datos de ubicación por Wi‑Fi complementan GNSS para el monitoreo del estado de activos y una ubicación más precisa en interiores o en zonas urbanas densas.

## Resumen técnico

| Conectividad | LTE Cat‑1 con respaldo GSM/GPRS; admite modos de datos TCP/UDP/SMS |
| --- | --- |
| Bandas | LTE Cat‑1 bandas B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28/66; respaldo GSM |
| Alimentación y batería | Funcionamiento 8–40 V DC \(sistemas vehiculares de 12 V/24 V\); modo de reposo ≈3 mA, ahorro de energía ≈60 mA, seguimiento activo ≈120 mA \(12 V\); batería de respaldo Li‑Po interna opcional de 220 mAh |
| Interfaces | Dos entradas digitales, una entrada programable \(disparo negativo o analógica\), detección de ignición dedicada, dos salidas digitales de drenaje abierto \(máx. 300 mA\), una salida digital con retención \(máx. 150 mA\), identificador de conductor 1‑Wire, conector Molex de 10 pines, micro USB para configuración/depuración, ranura SIM 4FF interna |
| GNSS | Multiconstelación GPS/GLONASS/Galileo/BeiDou, receptor de 56 canales, GPS asistido, actualizaciones de posición de hasta 4 Hz, precisión SBAS de aproximadamente 2,0 m \(cielo despejado\) |
| Grabación de choques y sensores | Acelerómetro de 3 ejes, grabación de choques a alta resolución de hasta 100 Hz; útil para el análisis del comportamiento de conducción y la reconstrucción de accidentes |
| Bluetooth y Wi‑Fi | BLE 4.2 para sensores inalámbricos; soporte de ubicación por Wi‑Fi para posicionamiento suplementario |
| Gestión remota | Actualizaciones de firmware FOTA soportadas; configuración TCP/UDP/SMS y diagnósticos remotos |
| Hardware | CPU ARM Cortex‑M3, 4 Mbit de memoria flash \(~8.000 registros\), antenas GPS y celulares internas |
| Forma y entorno ambiental | Aprox. 80 × 52 × 26 mm, ~80 g \(sin batería\); rango de operación −40 a +85 °C \(sin batería de respaldo\); probado contra golpes, vibración, EMC/EMI y RoHS cumplido |

## Casos de uso

- Antirrobo de flota y recuperación rápida: utiliza alertas de Plaspy y el rastreo en tiempo real del G610, junto con la inmovilización controlada por salidas, para asegurar vehículos robados.
- Telemática de vehículos y comportamiento del conductor: registro de GPS y acelerómetro a alta frecuencia para velocidad, frenadas bruscas y informes de reconstrucción de accidentes.
- Optimización de servicio y despacho: ubicación precisa y estado de ignición alimentan las herramientas de despacho de Plaspy para reducir tiempos de respuesta y aumentar la utilización.
- Monitoreo basado en sensores: sensores BLE para temperatura, sensores de puerta u otra telemetría enviados a Plaspy para la gestión de cadena de frío o el estado de los activos.
- Telemática para seguros: la grabación de choques y el historial de conducción permiten a las aseguradoras analizar eventos y respaldar el procesamiento de reclamaciones.

## Por qué elegir este rastreador con Plaspy

El G610 ofrece una combinación práctica, compatible con Plaspy, de conectividad LTE Cat‑1 fiable, GNSS de múltiples constelaciones y E/S flexible que se adapta tanto a pequeñas flotas de servicio como a implementaciones empresariales de gran tamaño. Su bajo consumo en modo de espera y la batería de respaldo opcional reducen el tiempo de inactividad y las brechas de datos, mientras que el soporte FOTA y los modos de reporte estándar \(TCP/UDP/SMS\) facilitan la provisión a gran escala y el mantenimiento remoto. Cuando se integra con Plaspy, el G610 ofrece el seguimiento en tiempo real, telemetría y controles anti‑robo necesarios para mejorar la eficiencia de la gestión de la flota, aumentar la seguridad del conductor y respaldar la telemática para seguros sin añadir complejidad a su integración.

