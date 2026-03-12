---
slug: /flextrack/lommy_capture_9b16
id: lommy_capture_9b16
sidebar_label: Lommy Capture 9B16
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Capture 9B16

![Lommy Capture 9B16](./tracker.jpg)

Lommy Capture 9B16 es un rastreador GPS compacto y sin batería, diseñado para seguimiento en tiempo real discreto, compatible con Plaspy, de remolques, caravanas y otros activos remolcados. Diseñado para instalarse dentro de las carcasas de iluminación, Lommy Capture utiliza la energía extraída de los circuitos de iluminación del vehículo para proporcionar posiciones GNSS continuas y telemetría de movimiento sin una batería dedicada, lo que lo hace ideal para gestión de flotas a largo plazo y despliegues anti‑robo donde la baja necesidad de mantenimiento y la ocultación importan.

Como rastreador compatible con Plaspy, Lommy Capture 9B16 envía datos de ubicación y actividad en formatos y a través de canales que se integran con plataformas de monitoreo y APIs. Su reporte adaptable, su robusta pila GNSS, la protección IP65 y su compacto formato permiten a los gestores de flotas e integradores añadir visibilidad fiable de remolques y rastreo a prueba de manipulación a sus soluciones impulsadas por Plaspy con un cableado e instalación mínimos.

## Aspectos Clave

- Obtención de energía sin batería a partir de los circuitos de luces traseras, freno e indicadores, para operación a largo plazo y reducción del mantenimiento.
- Seguimiento en tiempo real y telemetría compatibles con Plaspy a través de uplink celular \(LTE Cat M1 + 2G\) utilizando UDP o SMS.
- GNSS robusto de múltiples constelaciones \(GPS, GLONASS, GALILEO, BEIDOU, QZSS\) con soporte SBAS para un posicionamiento rápido y preciso.
- Informes adaptativos: tan frecuentemente como cada 2 minutos cuando se carga desde las luces traseras; informes de menor frecuencia o periódicos cuando la energía es limitada.
- Caja discreta, a prueba de manipulación IP65, diseñada para instalación dentro de alojamientos de iluminación \(54 x 44 x 19 mm, 42 g\).
- Sensor de movimiento de 3 ejes integrado para detectar movimiento y optimizar los informes con el fin de conservar la carga almacenada.
- Almacenamiento flash local \(2 MB\) para almacenamiento en búfer de posición/telemetría.
- Diseñado para rangos amplios de voltaje de vehículo \(4 V a 40 V\) y temperaturas extremas \(-30 °C a +60 °C\).

## Cómo Funciona con Plaspy

Lommy Capture 9B16 se integra en entornos de monitoreo y gestión de flotas basados en Plaspy, transmitiendo fijaciones GNSS, señales de movimiento y telemetría almacenada a través de redes celulares. Los datos se envían mediante UDP o SMS y pueden consumirse por Plaspy a través de una integración estándar de API/sistemas o conectores de plataformas de marca blanca. El resultado es un seguimiento casi en tiempo real de activos remolcados, alarmas automáticas y registro histórico de rutas para análisis y generación de informes de utilización.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a servidores compatibles con Plaspy \(UDP o SMS\).
- Detección de movimiento \(sensor de acelerómetro de 3 ejes\) que activa informes adaptativos para conservar energía y mejorar la capacidad de respuesta ante robos.
- Intervalos de reporte adaptativos: actualizaciones frecuentes mientras se está cargando desde las luces traseras, ráfagas activadas por la actividad cuando hay energía de las luces de freno/indicador, y reportes periódicos de bajo consumo cuando no hay energía externa.
- Almacenamiento en búfer local de 2 MB garantiza que los informes de posición se retengan y envíen cuando la conectividad o las condiciones de energía lo permitan.
- GNSS de múltiples constelaciones + SBAS y soporte de GNSS asistido para fijaciones más rápidas y posicionamiento fiable en entornos desafiantes.

## Resumen Técnico

| Conectividad | LTE Cat M1 FDD y GSM cuád-band 2G \(modo de respaldo\). Transporte de datos vía UDP o SMS. |
| --- | --- |
| Bandas | LTE Cat M1: B3 / B8 / B20. GSM 2G: 850 / 900 / 1800 / 1900 MHz. |
| Alimentación y Batería | Diseño sin batería que utiliza supercapacitores; energía obtenida de los circuitos de luces traseras, freno e indicadores \(opera en sistemas de 4 V a 40 V\). Informe adaptativo basado en la carga obtenida. |
| Interfaces | Cableado recomendado: negro = masa de chasis, marrón = luces traseras, rojo = luces de freno, verde = luces de indicación. Sin batería a bordo dedicada; entrada de movimiento vía acelerómetro incorporado. |
| GNSS | GPS, GLONASS, GALILEO, BEIDOU, QZSS; SBAS \(WAAS, EGNOS, MSAS, GAGAN\); soporte GNSS asistido; sensibilidad de rastreo de -166 dBm; 33 canales de rastreo. |
| Bluetooth | No listado en la descripción del producto \(no se especifican sensores Bluetooth a bordo\). |
| Almacenamiento Local | Memoria flash de 2 MB para almacenamiento en búfer de posición/telemetría. |
| Ambiental y Cumplimiento | Recinto IP65; temperatura de operación -30 °C a +60 °C; cumple CE, RoHS y WEEE. |
| Factor de Forma | Carcasa compacta para instalación en la lámpara — 54 x 44 x 19 mm, 42 g; antenas GNSS y LTE/GSM integradas. |
| Notas de Instalación | Sellado recomendado de las conexiones de cables contra agua y humedad para mantener el funcionamiento a largo plazo y la garantía. |
| Integración de Plataforma | Compatible con LommyFleet y TrackEye; admite soluciones de marca blanca y la integración API/sistemas para implementaciones habilitadas por Plaspy. |

## Casos de uso

- Gestión de flotas para remolques y caravanas: añade visibilidad de rastreador GPS compatible con Plaspy para monitorizar ubicación, utilización e historial de rutas sin necesidad de mantenimiento de batería.
- Protección antirrobo para activos remolcados: instalación oculta dentro de las carcasas de las luces dificulta localizar y desinstalar el dispositivo.
- Planificación de utilización y mantenimiento: los datos históricos de rastreo ayudan a programar servicios y optimizar el uso de activos en toda la flota.
- Geocercas y alarmas personalizadas: activar alertas de Plaspy cuando los remolques ingresen o salgan de zonas definidas o cuando se detecte movimiento fuera de condiciones esperadas.
- Despliegues de bajo mantenimiento donde el acceso físico frecuente para reemplazo de batería es poco práctico: la obtención de energía prolonga los intervalos de servicio.

## Por qué elegir este rastreador con Plaspy

Lommy Capture 9B16 es una opción práctica cuando necesitas un rastreador GPS discreto, compatible con Plaspy, que minimiza el mantenimiento mientras ofrece un seguimiento y telemetría en tiempo real fiables. Su diseño de obtención de energía elimina la necesidad de reemplazo de baterías, reduciendo costos de ciclo de vida y tiempos de inactividad para grandes flotas de remolques o caravanas. El GNSS de múltiples constelaciones, el soporte SBAS y el GNSS asistido proporcionan posicionamiento preciso, mientras que LTE Cat M1 con respaldo 2G garantiza una amplia cobertura celular para la entrega de telemetría en paneles y alertas gestionados por Plaspy.

Para integradores y gestores de flotas que requieren telemetría de vehículos más amplia, como monitorización de combustible, estado de ignición o control del inmovilizador, la posición y los datos de movimiento de Lommy Capture pueden combinarse dentro de Plaspy con otras entradas de sensores o interfaces de vehículo en su ecosistema. Aunque el dispositivo no enumera sensores Bluetooth a bordo, Plaspy puede correlacionar los datos de Lommy Capture con fuentes de telemetría externas BLE o CAN cuando estén disponibles, proporcionando una solución completa de gestión de flotas y anti‑robo.

En resumen, Lommy Capture 9B16 ofrece una opción de perfil bajo y robusta para ampliar el rastreo de activos compatible con Plaspy en equipos remolcados: posicionamiento GNSS fiable, informes adaptativos basados en la energía obtenida, almacenamiento offline y una integración lista para la plataforma para el rastreo en tiempo real, la gestión de flotas y la monitorización anti‑robo.

