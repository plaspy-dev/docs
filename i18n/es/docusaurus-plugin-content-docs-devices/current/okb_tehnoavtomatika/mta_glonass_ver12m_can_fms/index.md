---
slug: /okb_tehnoavtomatika/mta_glonass_ver12m_can_fms
id: mta_glonass_ver12m_can_fms
sidebar_label: MTA-Glonass (ver.12M-CAN FMS)
sidebar_class_name: menu_item_tracker
---
# OKB Tehnoavtomatika - MTA-Glonass (ver.12M-CAN FMS)

![MTA-Glonass (ver.12M-CAN FMS)](./tracker.jpg)

El MTA-Glonass \(ver.12M-CAN FMS\) es un terminal compacto de monitorización de vehículos diseñado para el rastreo de flotas y telemática por satélite. Diseñado para vehículos comerciales, este rastreador GPS compatible con Plaspy aprovecha un receptor GNSS de 50 canales \(GLONASS/GPS\) y comunicaciones GSM para ofrecer un seguimiento en tiempo real y telemetría de gestión de flotas a los paneles y sistemas de alertas de Plaspy.

Con conectividad CAN FMS nativa para camiones pesados, múltiples entradas de combustible, almacenamiento de eventos no volátil y un amplio rango de alimentación DC, el MTA-Glonass \(ver.12M-CAN FMS\) está optimizado para la operación continua del vehículo. Su bajo consumo, batería interna de respaldo y conjunto de interfaces robustas lo convierten en una opción práctica para la integración con Plaspy en flujos de trabajo de antirrobo, monitorización de combustible y diagnósticos remotos.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy: integra la posición GNSS y la telemetría del vehículo para seguimiento en tiempo real e informes.
- Conexión CAN FMS: soporte nativo para CAN FMS de camiones pesados \(DAF, Scania, MAN, etc.\) permite la ingestión de telemetría del motor y del vehículo.
- Detección de combustible integral: entradas de contacto seco y ADC analógico para sensores de frecuencia/pulsos y medición directa del nivel de combustible en el tanque.
- Rendimiento GNSS fiable: receptor de alta sensibilidad de 50 canales GPS/GLONASS; tiempo de puesta en marcha ≤ 1 minuto para un acoplamiento rápido.
- Amplio soporte de alimentación para vehículos y batería de respaldo: funcionamiento de 9–68 V DC con una batería interna recargable \(~600 mAh\) para ≥6 horas en espera.
- Memoria rica en eventos y bajo consumo: almacena miles de registros de eventos no volátiles y funciona de forma eficiente en modos activo/espera/dormido.
- Diseño compacto centrado en el vehículo: huella reducida y masa ligera para una instalación discreta en flotas comerciales.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el MTA-Glonass \(ver.12M-CAN FMS\) envía coordenadas GNSS y telemetría del vehículo a través de GSM \(GPRS, canal de datos, SMS\) a la plataforma Plaspy. Plaspy utiliza estos flujos para proporcionar seguimiento en tiempo real, alertas personalizables e informes históricos para gestores de flotas. La integración se centra en mapear parámetros CAN FMS a campos de telemetría de Plaspy, traducir entradas de sensores de combustible en eventos de consumo y entregar registros de eventos para cumplimiento y auditoría.

- Actualizaciones de ubicación y telemetría en tiempo real a través del canal GPRS/DATA y respaldo por SMS.
- Ingesta de telemetría CAN FMS: horas de motor, RPM, velocidad, consumo de combustible y otros datos del bus cuando estén disponibles.
- Monitoreo de combustible: entradas de pulso y contacto seco, y entradas ADC analógicas alimentan el nivel de combustible y el análisis de consumo en Plaspy.
- Monitoreo de temperatura mediante entrada opcional de sensor 1-Wire \(integrado en los informes de Plaspy cuando se use\).
- Control remoto y flujos de anti-robo: la salida de colector abierto opcional puede usarse para controlar actuadores externos \(por ejemplo, relés de inmovilización\) cuando se coordina mediante las herramientas de comandos de Plaspy.

## Visión técnica

| Conectividad | GSM \(GPRS, canal de datos dedicado, SMS\); GNSS \(GLONASS/GPS\) |
| --- | --- |
| Bandas | GSM 900 / 1800 |
| Alimentación y Batería | Entrada DC 9–68 V; batería interna recargable ≈ 600 mAh que proporciona ≥ 6 horas en espera |
| Interfaces | CAN bus \(CAN FMS\), 1 entrada de contacto seco \(activada a tierra\), 1 entrada ADC analógica \(hasta 12 V\), entrada opcional 1-Wire, salida opcional de colector abierto \(≤50 V, ≤1.5 A\) |
| GNSS | Receptor de alta sensibilidad de 50 canales GPS/GLONASS; tiempo de puesta en marcha ≤ 1 minuto |
| Bluetooth | No incluido / No especificado |
| Consumo de energía | Activo ≤ 110 mA @ 12 V; En espera ≤ 35 mA @ 12 V; Dormido ≤ 20 mA @ 12 V |
| Eventos y memoria | Hasta 64 eventos configurables; almacenamiento no volátil \(capacidad típica ~16,000 a 125,000 registros dependiendo de la configuración\) |
| Protección y formato | Carcasa IP30; dimensiones ≤ 90 × 65 × 30 mm; masa ≤ 200 g |
| Gestión remota | No especificado |

## Casos de uso

- Gestión de flotas para camiones pesados: ingestión de telemetría CAN FMS en Plaspy para la optimización de rutas, puntuación de conductores y planificación de mantenimiento.
- Monitoreo y control del nivel de combustible: combinar entradas analógicas y de pulso para detectar robo de combustible, medir el consumo y reconciliar eventos de abastecimiento.
- Flujos de antirrobo y desactivación remota: usar disparadores de eventos y la salida de colector abierto opcional a través de Plaspy para deshabilitar o alertar ante movimientos no autorizados.
- Cadenas de frío o cargas sensibles a la temperatura: conectar un sensor de temperatura 1-Wire y enviar datos ambientales a Plaspy para cumplimiento y alertas.
- Diagnósticos remotos y telemetría: capturar datos del motor y del bus del vehículo para apoyar el mantenimiento preventivo y reducir el tiempo de inactividad.

## Por qué elegir este rastreador con Plaspy

El MTA-Glonass \(ver.12M-CAN FMS\) ofrece un conjunto de funciones centrado en flotas que requieren posicionamiento fiable GLONASS/GPS, telemetría detallada del vehículo a través de CAN FMS y opciones robustas de detección de combustible. Su amplio rango de voltaje de entrada y la batería de respaldo interna lo hacen adecuado para vehículos comerciales pesados, mientras que su consumo optimizado reduce el impacto en los sistemas eléctricos del vehículo. Cuando se utiliza con Plaspy, este rastreador GPS permite seguimiento en tiempo real, paneles de telemetría avanzados, analítica de monitoreo de combustible y flujos de anti-robo — todo entregado a través de canales GPRS/DATA y SMS estándar para comunicaciones confiables en el campo.

Elija el MTA-Glonass \(ver.12M-CAN FMS\) como una solución compatible con Plaspy que se centra en la fiabilidad operativa, telemetría centrada en el vehículo y E/S práctica para la integración de combustible y sensores. Para flotas que requieren posicionamiento preciso, integración CAN FMS y recopilación de datos rica en eventos para análisis y cumplimiento, este terminal ofrece una plataforma compacta y orientada a la industria para una gestión inteligente de la flota.

