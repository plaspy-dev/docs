---
slug: /totemtech/at21_4g
id: at21_4g
sidebar_label: AT21-4G
sidebar_class_name: menu_item_tracker
---
# Totemtech - AT21-4G

![AT21-4G](./tracker.jpg)

# AT21-4G

El AT21-4G es un rastreador GPS 4G robusto alimentado por energía solar, diseñado para el monitoreo remoto a largo plazo de activos y es totalmente compatible con Plaspy. Construido para remolques, contenedores, vagones de ferrocarril, equipos de minería y otros activos estacionarios o remotos, el AT21-4G combina protección IP67 duradera, un gran panel solar integrado y una batería Li‑polímero de 10,000 mAh para ofrecer telemática continua y de bajo mantenimiento donde no hay alimentación DC permanente. Cuando se empareja con Plaspy, el AT21-4G proporciona seguimiento en tiempo real confiable, telemetría y alertas de eventos de las que gestores de flotas y custodios de activos dependen.

Diseñado para una instalación simple y una gestión eficiente de la energía, el AT21-4G admite entrada DC \(9–45 V\) y operación con energía solar exclusiva, con imanes opcionales para montaje en superficies metálicas. El dispositivo transmite datos de ubicación y sensores vía LTE Cat 1 \(con conmutación automática a WCDMA/EDGE/GPRS\) mediante UDP, TCP o SMS, y almacena registros sin conexión en su memoria flash interna. El posicionamiento multi-GNSS integrado y los modos de bajo consumo lo hacen ideal para despliegues a largo plazo que requieren un posicionamiento preciso, monitoreo anti‑robo y estado del inmovilizador o del encendido a través de E/S configurable — todo fácilmente visualizable y gestionable en Plaspy.

## Puntos clave

- Autonomía alimentada por energía solar con panel grande integrado y batería Li‑polímero de 10,000 mAh para despliegues prolongados sin alimentación DC.
- Compatible con Plaspy para seguimiento en tiempo real, telemetría, alertas de eventos y reproducción histórica a través de flujos de datos UDP/TCP/SMS.
- Caja robusta IP67 de PC+ABS con imanes desmontables opcionales para una instalación rápida en techos o superficies expuestas.
- Multi-GNSS \(GPS/BeiDou/GLONASS/Galileo/SBAS/QZSS\) para fijaciones más rápidas y mayor precisión \(~2.0 m CEP; sensibilidad de -167 dBm\).
- MCU de ultra bajo consumo y lógica de sueño en múltiples modos \(normal, reposo, sueño profundo, beacon\) para minimizar el consumo y extender la vida autónoma.
- Soporte flexible de telemetría y sensores: sensor de temperatura 1‑wire \(DS18B20\), TPMS opcional, RFID de largo alcance y E/S analógicas/digitales para control de combustible, encendido o inmovilizador.
- Conectividad celular fiable: LTE Cat 1 con kits de bandas regionales y conmutación automática cuando 4G no está disponible.

## Cómo funciona con Plaspy

El AT21-4G se integra con Plaspy al enviar datos de ubicación, sensores y eventos a los endpoints de ingestión de Plaspy a través de UDP, TCP o SMS. Plaspy analiza los paquetes entrantes y los combina con las funciones de mapeo, alertas e informes de la plataforma para entregar seguimiento en tiempo real e insights de gestión de flotas. Los registros offline internos \(16 MB\) y los intervalos de informe configurables permiten al dispositivo optimizar el consumo de energía mientras aseguran que Plaspy reciba los datos necesarios para la conciencia situacional.

- Actualizaciones de ubicación y telemetría en tiempo real transmitidas a Plaspy para seguimiento en vivo y reproducción de rutas.
- El encendido monitorizado digitalmente y las E/S digitales pueden usarse para eventos de alarma, estado de encendido y control remoto del inmovilizador cuando se configura.
- Monitoreo de combustible y telemetría de sensores analógicos a través de la entrada analógica para soportar informes de nivel de combustible y análisis de consumo.
- El registro sin conexión y la función de almacenar y reenviar en el dispositivo permiten a Plaspy reconstruir trayectorias históricas tras interrupciones de conectividad.
- Integración de sensores: monitorización de temperatura DS18B20 1‑wire, TPMS opcional para telemetría de presión de neumáticos y RFID de largo alcance para identificación de activos por etiqueta — Plaspy agrega estas entradas junto a los datos GPS. Para sensores Bluetooth, Plaspy puede correlacionar datos BLE cuando exista un gateway BLE separado en el despliegue.

## Resumen técnico

| Conectividad | LTE Cat 1 con conmutación automática a WCDMA/EDGE/GPRS; datos vía UDP, TCP o SMS |
| --- | --- |
| Bandas | Varias configuraciones regionales \(p. ej., B1/B3/B8/B28 LTE FDD; B1/B8 WCDMA para EMEA\). Disponibles otros kits de bandas para Norteamérica. |
| Alimentación y batería | Batería Li‑polímero integrada de 10,000 mAh \(dos celdas de 5,000 mAh\); entrada DC 9–45 V; panel solar integrado \(~1000 mA de salida máxima, 310 × 195 mm\); consumo en modo de reposo prolongado \<1 mA, ~14 mA en modo de suspensión, ~25 mA en modo de espera, pico ~50 mA durante la transmisión. |
| Interfaces | Conector Micro SIM, puerto micro USB para firmware/configuración, puerto 1-wire \(sensores de temperatura DS18B20\), una entrada analógica, E/S digitales. Imanes opcionales y hardware de montaje incluidos. |
| GNSS | Multi-GNSS: GPS, BeiDou, GLONASS, Galileo, SBAS, QZSS. Precisión de posición ≈ 2.0 m CEP; sensibilidad de rastreo -167 dBm. |
| Bluetooth | No especificado / no se lista BLE incorporado. Plaspy puede integrar datos de sensores BLE si se usa un gateway BLE separado en el despliegue. |
| Gestión remota | Configuración vía SMS, aprovisionamiento GPRS/3G o software de configuración del proveedor; micro USB para acceso local al firmware/configuración. |
| Formato | Caja robusta IP67 de PC+ABS; tamaño aproximado 30 × 23 × 5 cm; panel solar integrado 310 × 195 mm; imanes inferiores desmontables opcionales para montaje en superficies metálicas. |

## Casos de uso

- Seguimiento de remolques y contenedores donde una larga vida de batería y la carga solar eliminan la necesidad de alimentación por cable.
- Supervisión de vagones y activos ferroviarios que requieren precisión multi-GNSS y protección IP67 duradera contra clima y polvo.
- Monitoreo de equipos mineros y maquinaria remota donde la alimentación DC es intermitente y la telemetría debe continuar ante largos intervalos de desconexión.
- Anti‑robo de flotas e inmovilización: monitorizar el encendido y usar E/S digitales para el control del inmovilizador como parte de flujos de respuesta ante robo activados por Plaspy.
- Monitoreo de cadena de frío o ambiental con sensores de temperatura DS18B20 y TPMS opcional para reportar el estado de los neumáticos del remolque.

## Por qué elegir este rastreador con Plaspy

Elegir el AT21-4G para despliegues con Plaspy ofrece una solución telemática fiable y de bajo mantenimiento para activos remotos. Su carga solar integrada y su alta capacidad de batería reducen las visitas de mantenimiento, mientras que los modos de MCU de ultra bajo consumo prolongan la vida útil en campo. La precisión multi-GNSS y la conectividad LTE Cat 1 aseguran un seguimiento en tiempo real y telemetría consistentes para la gestión de flotas, monitoreo anti‑robo e informes operativos. Las E/S analógicas y digitales configurables, el soporte de sensores 1‑wire y el registro offline hacen que sea versátil para monitorización de combustible, telemetría de temperatura y usos del inmovilizador. Cuando se combina con el mapeo, alertas e informes de Plaspy, el AT21-4G se convierte en un bloque de construcción poderoso para programas de rastreo de activos escalables y resilientes.

