---
slug: /atrack/as500
id: as500
sidebar_label: AS500
sidebar_class_name: menu_item_tracker
---
# ATrack - AS500

![AS500](./tracker.jpg)

El AS500 es un rastreador GPS robusto y de larga duración, diseñado para aplicaciones exigentes de seguimiento de activos y compatible con Plaspy desde el primer uso. Construido para obras de construcción, minería, patios logísticos y otros entornos adversos, el AS500 combina protección mecánica IP67/IP69K, una arquitectura de bajo consumo y conectividad celular LTE Cat-M1 para ofrecer ubicación y telemetría fiables donde la autonomía de la batería y la durabilidad son determinantes.

El AS500 integra GNSS de 99 canales \(GPS + GLONASS\), escaneo de Wi‑Fi y Bluetooth Low Energy 5.1 para posicionamiento mixto interior/exterior y monitoreo remoto de sensores. Con transporte de datos flexible \(UDP, TCP, MQTT\), encolamiento en el propio dispositivo y soporte para Nano SIM o eSIM, el AS500 está diseñado para suministrar a Plaspy datos de ubicación, movimiento y sensores de alta calidad para rastreo en tiempo real, gestión de flotas y flujos de trabajo de anti‑robo.

## Aspectos destacados

- Gran autonomía de la batería: hasta ocho años con tres pilas AA Li‑FeS2 \(3,000 mAh\) y reportes diarios—ideal para activos sin alimentación.
- Compatible con Plaspy: envía telemetría vía UDP/TCP/MQTT para una integración fluida con los paneles y alertas de Plaspy.
- Carcasa robusta: clasificación IP67 e IP69K, además de resistencia MIL‑STD‑810H a vibración, golpes, niebla salina y radiación solar.
- Posicionamiento preciso: GNSS de 99 canales \(GPS y GLONASS\) con una precisión típica de ≈2.5 m CEP para un rastreo GPS fiable.
- Complemento interior/ubicación: escaneo Wi‑Fi y BLE 5.1 de largo alcance para mejorar la detección en interiores y sensores Bluetooth.
- Gestión inteligente de energía: consumo en modo deep sleep \<25 μA y reportes inteligentes para maximizar el tiempo en espera.
- Resiliencia de datos local: 16 Mbit de flash interno \(≈10,000 entradas en cola\) para almacenar eventos durante interrupciones o traslados.

## Cómo funciona con Plaspy

El AS500 transmite y almacena en búfer datos de ubicación y sensores utilizando protocolos estándar para que Plaspy pueda ofrecer seguimiento en tiempo real, alertas de eventos y telemetría histórica. Configure intervalos de reporte, reglas de geovalla y umbrales de eventos en Plaspy mientras el dispositivo prioriza la eficiencia energética y la entrega fiable.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy mediante UDP, TCP o MQTT.
- Eventos de movimiento, manipulación y apertura de puertas reportados para activar alertas de Plaspy en flujos de seguridad y anti‑robo.
- Escaneo de Wi‑Fi y datos de sensores BLE \(BLE 5.1\) para posicionamiento en interiores y monitorización remota a través de los paneles de Plaspy.
- Almacenamiento local en cola \(≈10,000 entradas\) garantiza que no se pierdan datos durante interrupciones de conectividad; Plaspy ingiere los datos en cola cuando se restablece la conexión.
- Soporte ADM \(ATrack Device Management\) y UART permiten configuración remota, actualizaciones de firmware y mantenimiento in situ vinculados a los procesos de provisioning de Plaspy.

## Visión general técnica

| Conectividad | LTE Cat.M1 \(variantes regionales: AS500‑LE para EMEA/APAC, AS500‑MG global, AS500‑MX Norteamérica\); datos vía UDP/IP, TCP/IP o MQTT; Nano SIM y eSIM; antena celular integrada |
| --- | --- |
| Bandas / Variantes | Variantes regionales Cat.M1 disponibles—las bandas específicas dependen de la variante y el mercado \(AS500‑LE, AS500‑MG, AS500‑MX\) |
| Potencia & Batería | Tres baterías AA Li‑FeS2 \(3,000 mAh\), ahorro de energía de alta eficiencia; hasta ocho años con reportes diarios; corriente en deep‑sleep \<25 μA |
| Interfaces | Soporte de detección de manipulación y apertura de puertas; compatibilidad con sensores BLE \(serie BL1 y otros\); UART para configuración/firmware; montaje mediante tornillos/tuercas o imán opcional |
| GNSS | Receptor GNSS de 99 canales \(GPS + GLONASS\); precisión típica de ubicación ≈2.5 m CEP |
| Bluetooth | Bluetooth Low Energy 5.1 \(largo alcance\) para telemetría de sensores y detección de proximidad |
| Almacenamiento local | 16 Mbit de flash interno, aproximadamente 10,000 entradas en cola para buffering fuera de línea |
| Gestión remota | Soporte ATrack Device Management \(ADM\) y cable UART para configuración del dispositivo y actualizaciones de firmware |
| Ambiente & Durabilidad | Carcasa IP67 e IP69K; pruebas MIL‑STD‑810H de vibración, choque, niebla salina, radiación solar y presión baja; operación de −40 °C a 60 °C, 95% HR @50 °C sin condensación |
| Forma | 118 × 65 × 28 mm; ≈171 g con baterías; rastreador compacto para montaje exterior/interno |
| Certificaciones | FCC, IC, PTCRB, CE, RoHS; aprobaciones de operadores comunes \(AT&T, Verizon\) para variantes de Norteamérica |

## Casos de uso

- Seguimiento de contenedores y remolques: gran autonomía y carcasa robusta para activos sin alimentación a largo plazo.
- Monitoreo de activos en construcción y minería: resistente a lavados intensos, vibración y entornos extremos.
- Localización y monitoreo de uso de generadores y equipos: eventos de movimiento y manipulación ayudan a detectar movimientos no autorizados.
- Seguimiento mixto interior/exterior de activos: GNSS en exteriores con escaneo de Wi‑Fi y sensores BLE en interiores para cobertura continua.
- Accesorios para patios logísticos y flotas: telemetría en búfer durante interrupciones de conectividad y reporte a Plaspy cuando esté en línea para obtener insights de gestión de la flota.

## Por qué elegir este rastreador con Plaspy

Combinar el AS500 con Plaspy ofrece una solución fiable de rastreo GPS de bajo mantenimiento para operadores que requieren gran autonomía, hardware robusto y telemetría flexible. La conectividad LTE Cat-M1 del dispositivo y el soporte para UDP/TCP/MQTT permiten a Plaspy ingerir datos de ubicación, movimiento y sensores en tiempo real, mientras el encolamiento local y los modos de sueño profundo aseguran continuidad y una autonomía de espera excepcional. El escaneo BLE y Wi‑Fi amplían la visibilidad de Plaspy en interiores, y los eventos de manipulación/apertura de puertas fortalecen los flujos de seguridad y anti‑robo.

Para programas de gestión de flotas y telemetría que requieren rastreadores escalables compatibles con Plaspy—especialmente cuando los activos están desenergizados o expuestos a condiciones adversas—el AS500 ofrece una opción compacta, certificada y probada en campo. Su soporte de gestión remota \(ADM y UART\), aprobaciones de operadores y variantes regionales simplifican el despliegue y el mantenimiento, y sus integraciones de sensores facilitan la construcción de reglas de monitorización y operativas más ricas en Plaspy \(incluidas flujos complementarios con sistemas de ignición o inmovilizador mediante integraciones de Plaspy cuando sea aplicable\).

