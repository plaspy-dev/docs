---
slug: /arusnavi/arnavi_6
id: arnavi_6
sidebar_label: ARNAVI 6
sidebar_class_name: menu_item_tracker
---
# Arusnavi - ARNAVI 6

![ARNAVI 6](./tracker.png)

ARNAVI 6 es un controlador de navegación compacto y profesional diseñado para la gestión de flotas y la monitorización remota. Compatible con Plaspy de serie, el ARNAVI 6 ofrece funcionalidad fiable de rastreador GPS con conectividad flexible y telemetría enriquecida para apoyar el rastreo en tiempo real, flujos de trabajo anti‑robo y recopilación avanzada de datos de vehículos. Su diseño celular dual‑SIM, GNSS de múltiples constelaciones y la opción de respaldo Wi‑Fi hacen del ARNAVI 6 una opción ideal para operaciones que requieren visibilidad continua e integración robusta con plataformas de terceros como Plaspy.

Diseñado para flotas mixtas y entornos de telemetría con alto contenido de sensores, ARNAVI 6 combina una huella física reducida con extensas opciones de E/S y de comunicaciones. Ya sea que necesite actualizaciones de ubicación inmediatas para la distribución, monitorización de combustible y análisis del comportamiento del conductor, o instantáneas de eventos seguras desde módulos de cámara compatibles, este dispositivo proporciona las interfaces y las herramientas de gestión remota para mantener su sistema habilitado para Plaspy preciso, seguro y fácil de mantener.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real fiable e integración con la gestión de flotas.
- Conectividad celular Dual‑SIM 2G/4G con opción de canal Wi‑Fi para mejorar la disponibilidad y la resiliencia del roaming.
- GNSS de múltiples constelaciones \(GPS, GLONASS, Galileo, BeiDou, QZSS\) para localización rápida y precisa.
- Soporte Bluetooth 4.0 \(BLE\) para hasta 10 sensores inalámbricos — ideal para monitorización de combustible y telemetría de temperatura.
- Interfaces de vehículo completas: CAN, RS232, RS485, 1‑WIRE, USB y múltiples entradas y salidas digitales/analógicas.
- Entrada de alimentación protegida \(calificada para hasta 500 V\), rango de operación 8–50 V, gestión de energía interna y opciones de batería de respaldo.
- Registro en la caja negra a bordo \(32 MB / hasta 100,000 registros\) para captura de datos sin conexión y carga posterior a Plaspy.
- Configurador web remoto, botón de servicio para actualizaciones en campo y configuración móvil/PC vía USB o Bluetooth.

## Cómo funciona con Plaspy

ARNAVI 6 se integra con Plaspy para ofrecer ubicación continua y telemetría del vehículo. Los datos de GNSS, CAN bus, entradas digitales y sensores Bluetooth se empaquetan y transmiten a través del enlace celular activo \(con Wi‑Fi como respaldo opcional\). Plaspy recibe estas señales para seguimiento en tiempo real, alertas, informes históricos y flujos de trabajo basados en eventos.

- Actualizaciones de ubicación y telemetría en tiempo real: GNSS de múltiples constelaciones combinados con enlace celular para un seguimiento continuo en Plaspy.
- Estado de ignición, puertas y alarma: entradas discretas proporcionan indicadores de eventos que Plaspy puede usar para alertas y segmentación de trayectos.
- Monitoreo de combustible: admite múltiples sensores de combustible \(RS485 y RS232\) y sensores BLE conectados para telemetría de combustible precisa.
- Control remoto estilo inmovilizador: las salidas del dispositivo pueden usarse para control de ignición o inmovilización cuando se configura a través de Plaspy.
- Sensores y balizas Bluetooth: la conectividad BLE permite sondas de temperatura, sensores de combustible inalámbricos y otra telemetría para ser enviada a Plaspy.
- Registro offline y sincronización: la caja negra a bordo almacena los registros cuando se pierde la conectividad y se sincroniza con Plaspy cuando se restablece la conexión.

## Visión general técnica

| Conectividad | Celular Dual‑SIM con módems 2G y 4G; módulo Wi‑Fi opcional \(puede usarse como canal de datos principal o de respaldo\) |
| --- | --- |
| Antenas | Antenas GNSS y GSM: opciones internas o externas |
| GNSS | GPS, GLONASS, Galileo, BeiDou, QZSS |
| Bluetooth | Bluetooth 4.0 \(BLE\) con soporte para hasta 10 sensores inalámbricos |
| Alimentación y batería | Tensión de operación 8–50 V; entrada de alimentación protegida \(calificada para hasta 500 V\); gestión de energía interna con control de carga basado en temperatura; opciones de batería de respaldo 300–2000 mAh; consumo de corriente típico ≈ 2 mA \(modo reposo\) a ≈ 80 mA \(activo\) |
| Entradas y salidas | Múltiples entradas y salidas digitales y analógicas: 4 entradas negativas, 2 entradas positivas\*, 3 salidas negativas; las salidas positivas suministran 5 V @ 50 mA y 12 V @ 300 mA; acelerómetro para detección de movimiento; botón de servicio para operaciones en campo |
| Interfaces | CAN, RS232, RS485, 1‑WIRE \(soporta hasta 10 sensores 1‑WIRE\), USB para configuración en PC |
| Combustible y sensores | Hasta 8 sensores de combustible vía RS485 y 1 vía RS232; conectividad de sensores BLE; soporte para sondas de temperatura y otros sensores de telemetría |
| Almacenamiento \(Caja negra\) | 32 MB de almacenamiento a bordo \(o hasta ~100,000 registros para registro sin conexión, dependiendo de la configuración\) |
| Software y Protocolos | Configuración remota y actualizaciones de firmware basadas en web \(FOTA vía configurador web\); configuración vía USB en PC; configuración móvil vía Bluetooth o USB; protocolos: INTERNAL, EXTERNAL, USER\_AG, EGTS; integraciones MODBUS y tacógrafo/CAN soportadas |
| Físico | Peso ≈ 100 g; dimensiones 70 × 75 × 22 mm |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, informes EcoDriving y telemetría del vehículo para la optimización de la distribución y análisis del comportamiento del conductor.
- Anti‑robo y seguridad del vehículo: monitorización de puertas e ignición, registro de eventos y salidas de control remoto para acciones de inmovilización cuando se configure.
- Monitorización de combustible y telemetría: soporte para múltiples sensores RS485/RS232 plus sensores de combustible BLE para detectar discrepancias y reducir pérdidas de combustible.
- Seguimiento de activos con sensores: sondas de temperatura, sensores 1‑WIRE y telemetría CAN para transporte refrigerado, equipos de construcción u otros vehículos especializados.
- Captura de eventos y diagnóstico: integración con módulos de cámara compatibles \(ZM, VC0607\) para instantáneas, además de registro a bordo para análisis posterior al incidente.

## Por qué elegir este rastreador con Plaspy

ARNAVI 6 combina el pequeño factor de forma propio de un rastreador GPS moderno con interfaces profesionales y una gestión de energía robusta necesaria para flotas exigentes. Como dispositivo compatible con Plaspy, ofrece la conectividad y los tipos de telemetría en los que Plaspy se apoya: posicionamiento GNSS en tiempo real, datos CAN y serie, flujos de sensores Bluetooth y un registro offline robusto. El configurador web remoto y las capacidades de actualización de firmware reducen la carga de mantenimiento, mientras que Dual‑SIM y Wi‑Fi opcional proporcionan comunicaciones resilientes para una monitorización ininterrumpida.

Para las organizaciones que requieren seguimiento en tiempo real preciso, telemetría integral y flujos de trabajo anti‑robo confiables, ARNAVI 6 ofrece una plataforma flexible que se integra con Plaspy para proporcionar una gestión de flotas escalable, monitoreo eficiente de combustible, seguimiento de eventos de ignición y de puertas, y conocimientos impulsados por sensores. Su extenso conjunto de E/S y soporte de protocolos hacen de este dispositivo una opción práctica cuando la integración profesional y la gestión remota fiable son prioridades.

