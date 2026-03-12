---
slug: /topfly/pioneerx_101
id: pioneerx_101
sidebar_label: PioneerX 101
sidebar_class_name: menu_item_tracker
---
# TopFly - PioneerX 101

![PioneerX 101](./tracker.png)

El PioneerX 101 es un rastreador GPS compatible con Plaspy, diseñado para un seguimiento en tiempo real fiable, gestión de flotas y proyectos telemáticos robustos. Como dispositivo cableado de nivel de entrada a intermedio, ofrece actualizaciones de posición frecuentes \(tan a menudo como cada 3 segundos\), un amplio búfer offline y un formato compacto con clasificación IP67, lo que lo hace ideal para vehículos, remolques y activos fijos que requieren localización continua, telemetría y capacidades antirrobo.

Diseñado para integradores y operadores de flotas, el PioneerX 101 combina soporte de sensores BLE 5.0, comunicaciones celulares multiprotocolo y entradas/salidas flexibles para habilitar el monitoreo del comportamiento del conductor, control del inmovilizador y telemetría ampliada como datos de combustible o EV/BMS a través de CAN opcional. Su combinación de precisión, reportes seguros y capacidades de gestión remota lo convierten en una opción práctica, compatible con Plaspy, para soluciones escalables de seguimiento de flotas y activos.

## Puntos destacados

- Rastreador GPS compatible con Plaspy que ofrece seguimiento en tiempo real y actualizaciones de posición tan frecuentes como cada 3 segundos.
- Gran búfer interno para resiliencia offline: almacena hasta 40.000 puntos de ubicación cuando no hay cobertura de red.
- Conectividad LTE Cat-1 global con respaldo 2G y reportes TCP/UDP/MQTT/SMS para una integración flexible con los servidores de Plaspy.
- BLE 5.0 para sensores y accesorios Bluetooth \(temperatura, humedad, estado de la puerta, botones de pánico\) para ampliar la telemetría y el monitoreo de la cadena de frío.
- Múltiples I/Os digitales, detección de ignición y control remoto de salidas para apoyar inmovilizador, relés o zumbadores para respuestas antirrobo.
- Detección avanzada de seguridad y comportamiento: acelerómetro de 6 ejes para captura de choques, detección de conducción agresiva, exceso de velocidad y remolque.
- Diseño robusto y compacto \(IP67\) con amplio rango de entrada de potencia \(7–100 V DC\) y batería interna de respaldo para reportar eventos de pérdida de energía.

## Cómo funciona con Plaspy

El PioneerX 101 se integra con Plaspy utilizando protocolos telemáticos comunes y métodos de transporte seguros, para que puedas recibir ubicación en tiempo real, telemetría y alertas en tu panel de Plaspy o en tu backend. Los datos se transmiten a través de LTE Cat-1 con respaldo 2G utilizando TCP, UDP o MQTT, y SMS como canal alternativo. Las opciones de cifrado integradas \(MD5, AES-256\) y las comprobaciones de protocolo mejoran la integridad y la seguridad de los datos durante el reporte a los endpoints de Plaspy.

- Actualizaciones de ubicación y telemetría en tiempo real: fijaciones GPS frecuentes y transmisión en búfer cuando se restablece la conectividad.
- El estado de ignición, eventos de puerta y pánico, y las alertas de alimentación externa se envían a Plaspy para monitoreo en tiempo real y registros históricos.
- La telemetría de combustible y EV/BMS puede mostrarse en Plaspy cuando se utiliza la interfaz CAN opcional para lectura del bus del vehículo.
- Inmovilizador remoto y control de salidas: activar relés o zumbadores desde Plaspy para inmovilizar un vehículo en casos de robo.
- Sensores Bluetooth: eventos de temperatura, humedad, estado de la puerta y botón de pánico de accesorios BLE se envían a Plaspy para monitoreo integrado de activos o de cadena de frío.

## Resumen técnico

| Modelo | PioneerX 101 |
| --- | --- |
| Conectividad | LTE Cat-1 \(global\) con respaldo 2G; TCP, UDP, MQTT, SMS |
| Seguridad y Protocolos | Verificaciones de protocolo; cifrado MD5 y AES‑256; FOTA para actualizaciones remotas de firmware |
| GNSS | GPS + BeiDou + Galileo + QZSS; 24 canales de seguimiento / 66 de adquisición; precisión de posición \< 1.5 m \(CEP\) |
| TTFF | Arranque en frío \< 20 s; Arranque tibio \< 2 s; Arranque en caliente \< 2 s |
| Alimentación y Batería | Entrada externa 7–100 V DC; batería interna de respaldo para alertas de desconexión |
| Entradas / Salidas | Múltiples I/Os digitales; detección de ignición; control remoto de salidas para relés/zumbadores \(inmovilizador\) |
| Sensores | Acelerómetro interno de 6 ejes \(captura de choques, detección de conducción agresiva, remolque, detección de velocidad\) |
| Bluetooth | BLE 5.0 para accesorios TOPFLYtech \(temperatura y humedad, sensor de puerta, relé, botón de pánico\) |
| Expansibilidad | Interfaces RS232 y 1‑wire opcionales; lectura CAN opcional / CAN manual para EV/BMS y sistemas CAN no estándar |
| Wi‑Fi y Configuración | Recepción Wi‑Fi de 2.4 GHz; conector USB Type‑C para configuración |
| Certificaciones y Protección | Protección IP67 |
| Factor de Forma | 102.6 x 42.6 x 13.0 mm; 50 g |
| Buffer de Datos | Buffer interno de hasta 40.000 puntos de ubicación |

## Casos de uso

- Gestión de flotas: seguimiento continuo en tiempo real, telemetría del comportamiento del conductor y reproducción de rutas para la optimización operativa.
- Antirrobo e inmovilización: detección de ignición, control remoto de salidas y alertas de desconexión para proteger vehículos de alto valor.
- Monitoreo de cadena de frío y activos: sensores BLE de temperatura y humedad integrados en Plaspy para rastrear las condiciones por envío.
- Proyectos de diagnóstico de EV y vehículos: lectura CAN opcional para EV/BMS o telemetría de vehículos integrada en los tableros de Plaspy.
- Remolques y activos fuera de la red: gran búfer offline y re-sincronización rápida con Plaspy cuando se restablece la red.

## Por qué elegir este rastreador con Plaspy

Elegir el PioneerX 101 para tu implementación en Plaspy ofrece un equilibrio entre características prácticas, comunicaciones seguras e integración flexible. La conectividad LTE Cat-1 del dispositivo con respaldo 2G, opciones de reporte seguras y soporte MQTT/TCP facilitan canalizar ubicaciones y telemetría de alta frecuencia hacia Plaspy. BLE 5.0 amplía la cobertura de sensores para temperatura, apertura de puertas o eventos de pánico sin necesidad de cableado adicional, mientras que múltiples I/Os digitales y control remoto de salidas permiten implementar flujos de trabajo de inmovilización y medidas anti‑robo directamente desde Plaspy.

Operativamente, el acelerómetro integrado, la detección de conducción agresiva y las alarmas configurables ayudan a las flotas a reducir riesgos y mejorar los programas de entrenamiento de conductores. El recinto robusto IP67, el amplio rango de entrada de potencia y la batería interna de respaldo mejoran la fiabilidad en instalaciones de vehículos. Para proyectos que requieren telemetría extendida, como datos de combustible o batería de EV, las interfaces CAN opcionales ofrecen una vía hacia conjuntos de datos más ricos. En resumen, el PioneerX 101 ofrece un rastreador GPS compacto, compatible con Plaspy, que admite seguimiento en tiempo real, integración de telemetría y control remoto para una gestión fiable de flotas y activos.

