---
slug: /topfly/knightx_300
id: knightx_300
sidebar_label: KnightX 300
sidebar_class_name: menu_item_tracker
---
# TopFly - KnightX 300

![KnightX 300](./tracker.png)

El KnightX 300 es un rastreador de activos compacto y recargable, diseñado para despliegues compatibles con Plaspy, donde la larga duración de la batería, un posicionamiento preciso y la monitorización ambiental son esenciales. Construido para instalaciones no permanentes, el KnightX 300 ofrece rastreo en tiempo real, telemetría rica y soporte para sensores BLE en una carcasa ligera con clasificación IP67. Su núcleo LTE Cat‑M1 con respaldo NB‑IoT/GSM y una amplia compatibilidad GNSS lo hacen ideal para visibilidad persistente de activos y monitorización de la cadena de frío sin necesidad de energía con cable.

La integración fluida con Plaspy permite a los equipos de gestión de flotas y a los operadores logísticos incorporar actualizaciones de ubicación frecuentes, registros en búfer y datos ambientales en paneles y flujos de trabajo de alertas ya familiares. Con un botón de pánico integrado, una sonda de temperatura externa opcional y BLE 5.1 para sensores inalámbricos y llaveros de pánico, el KnightX 300 está optimizado para alertas de anti‑robo, protección de equipos no supervisados y seguimiento de carga sensible a la temperatura.

## Aspectos destacados

- Compatible con Plaspy: integra ubicación, telemetría y datos de sensores para seguimiento y reporte en tiempo real.
- Larga duración de la batería: batería recargable de 6400 mAh con intervalos de reporte configurables para equilibrar la frecuencia de actualizaciones y la autonomía.
- GNSS de alta precisión: receptor multi‑constelación \(GPS/GLONASS/BeiDou/Galileo/QZSS\) con precisión CEP inferior a 1.5 m y TTFF muy rápido.
- Listo para cadena de frío: sensor de temperatura interno, además de soporte para una sonda de temperatura externa y sensores BLE de temperatura/humedad.
- Soporte BLE 5.1: empareja sensores inalámbricos, relevadores y llaveros de pánico para ampliar la telemetría y las alertas.
- Registro en búfer y actualizaciones frecuentes: almacena datos sin conexión y los envía cuando la cobertura regresa; informes configurables de hasta cada 3 segundos.
- Formato portátil y no intrusivo: pensado para dejarse con los activos sin instalación permanente; incluye carga USB‑C y LEDs indicativos.

## Cómo funciona con Plaspy

La integración de KnightX 300 con Plaspy incorpora la ubicación, telemetría y eventos de sensores en una única plataforma para la gestión de flotas, flujos de trabajo de anti‑robo y visibilidad de la cadena de frío. El dispositivo se comunica vía LTE Cat‑M1 con respaldo NB‑IoT/GSM y admite protocolos de transporte estándar que Plaspy puede ingerir, lo que permite una entrega de datos fiable y de bajo consumo a lo largo de amplias áreas.

- Actualizaciones de ubicación y telemetría en tiempo real vía TCP, UDP, MQTT o SMS \(protocolos compatibles con el dispositivo para una ingestión flexible en Plaspy\).
- El botón de pánico y eventos del llavero de pánico envían alertas inmediatas a Plaspy para flujos de trabajo de anti‑robo y emergencia.
- Telemetría ambiental: temperatura interna más una sonda de temperatura externa opcional y datos de sensores BLE para el monitoreo de la cadena de frío en los paneles de Plaspy.
- Registro en búfer: el rastreador almacena datos sin conexión y envía los registros a Plaspy cuando la conectividad regresa, preservando trazas históricas y registros de cumplimiento.
- Opciones de transporte seguras: la seguridad de datos MD5/AES puede habilitarse opcionalmente donde Plaspy admita ingestión cifrada.

## Resumen técnico

| Conectividad | LTE Cat‑M1 con respaldo Cat NB2 / GSM |
| --- | --- |
| Bandas | Múltiples bandas globales \(el fabricante detalla una amplia cobertura regional para Cat‑M1/NB2/GSM\) |
| Alimentación y batería | Batería recargable de 6400 mAh / 3.7 V de litio; interfaz USB‑C para carga y datos |
| Interfaces | Botón de pánico; USB‑C \(carga y datos\); sonda de temperatura externa opcional; LEDs indicativos \(conectividad, GNSS, alimentación\) |
| GNSS | GNSS todo en uno: GPS, GLONASS, BeiDou, Galileo, QZSS; precisión horizontal autónoma &lt; 1.5 m CEP; TTFF de arranque en frío &lt; 5 s |
| Bluetooth | BLE 5.1 para sensores inalámbricos, llaveros y accesorios |
| Gestión remota | Soporte FOTA \(firmware over‑the‑air\) |
| Formato y entorno | Compacto: 91.8 × 43.5 × 29.2 mm; 165 g; carcasa IP67 \(observaciones del producto: apta para instalaciones protegidas o expuestas\); rango de funcionamiento -20 °C a 80 °C |
| Datos y seguridad | Soporta TCP, UDP, MQTT, SMS; MD5/AES opcional para seguridad de datos; registro en búfer cuando está fuera de cobertura |
| Ejemplos de informes y autonomía | Intervalos de reporte configurables — hasta cada 3 s. Autonomía de ejemplo: ~247 días con reportes cada 10 minutos \(2 h activos/día\), ~130 días cada 5 minutos, ~44 días cada 1 minuto. |

## Casos de uso

- Seguimiento de activos para equipos o contenedores sin alimentación eléctrica que requieren un rastreador temporal o removible.
- Visibilidad de la cadena de frío: monitorizar temperaturas de la sonda interna y externa para paquetes, envíos médicos y contenedores refrigerados.
- Monitoreo de remolques y contenedores dentro de programas de gestión de flotas para ubicación, eventos de apertura de puertas y telemetría ambiental.
- Protección de paquetes y equipos no supervisados mediante eventos de botón de pánico y alertas de llaveros BLE para respuesta anti‑robo.
- Telemetría de sensores distribuida: empareja sensores BLE de temperatura/humedad para ampliar la monitorización ambiental sin cableado adicional.

## Por qué elegir el KnightX 300 con Plaspy

Elegir el KnightX 300 para despliegues con Plaspy ofrece una solución equilibrada para operadores que requieren seguimiento en tiempo real preciso, además de telemetría ambiental, sin necesidad de instalación permanente. Su batería recargable de 6400 mAh y la conectividad eficiente Cat‑M1 permiten largas duraciones operativas, mientras que GNSS multi‑constelación proporciona precisión de ubicación fiable para la recuperación de activos y el análisis de rutas. El soporte de BLE 5.1 y la compatibilidad con sondas externas facilitan la captura de datos de la cadena de frío y telemetría de sensores junto con la ubicación.

Las características integradas, como el registro en búfer, la capacidad de informes frecuentes y las actualizaciones FOTA, reducen la carga de mantenimiento y aseguran la continuidad de los datos en los paneles de Plaspy. Para la gestión de flotas, flujos de trabajo de anti‑robo y monitoreo de la cadena de frío, el KnightX 300 ofrece seguimiento portátil y compatible con Plaspy, telemetría fiable y emparejamiento sencillo de sensores, ayudando a los equipos a convertir flujos de ubicación y sensores en información accionable sin instalación compleja.

