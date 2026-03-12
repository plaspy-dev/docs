---
slug: /glonasssoft/umka302
id: umka302
sidebar_label: UMKa302
sidebar_class_name: menu_item_tracker
---
# GLONASSsoft - UMKa302

![UMKa302](./tracker.png)

# UMKa302 GPS Tracker \(UMK-302\)

El UMKa302 \(UMK-302\) es un rastreador GPS compatible con Plaspy, diseñado para el monitoreo profesional de vehículos, la gestión de flotas y la protección antirrobo. Como buque insignia de la gama UMKa, el UMKa302 eleva la estabilidad y el rendimiento de procesamiento respecto a su predecesor, lo que facilita un seguimiento en tiempo real fiable, una telemetría más rica y una integración flexible en sistemas basados en Plaspy. Su compatibilidad con CAN bus, sensores inalámbricos BLE, operación de doble SIM y una E/S robusta lo convierten en una opción práctica para operadores que requieren localización precisa, monitoreo de combustible y diagnósticos profundos del vehículo sin añadir múltiples sensores externos.

El dispositivo está diseñado para integrarse directamente con Plaspy: la ubicación GNSS, la telemetría derivada del CAN, los datos de sensores BLE y los registros de eventos se envían a la plataforma para supervisión en tiempo real, alertas e informes históricos. De formato compacto, con protección IP54 y capaz de funcionar con una alimentación de +8…+40 V, el UMKa302 es un rastreador versátil para flotas mixtas, vehículos vocacionales y activos de alto valor donde la disponibilidad, la profundidad de datos y el control remoto seguro son esenciales.

## Puntos clave

- Rastreador GPS compatible con Plaspy que transmite ubicación en tiempo real y telemetría para la gestión de flotas y flujos de trabajo antirrobo.
- Soporte CAN bus \(J1939 + filtro personalizado\) que proporciona decenas de parámetros del vehículo sin sensores adicionales; opción de doble CAN para sistemas complejos.
- Soporte BLE para hasta 8 sensores inalámbricos: nivel de combustible y temperatura de combustible precisos mediante sensores Bluetooth, comparables a los sistemas FLS cableados.
- GSM de doble SIM \(850/900/1800/1900\) con gestión inteligente de la energía para una conectividad celular fiable y con conmutación ante fallos.
- Amplias E/S: 2 entradas analógicas/digitales, 2 entradas de pulso/discretas y 2 salidas \(colector abierto\) para capturar eventos y realizar tareas de control remoto.
- Memoria a bordo y registro tipo "caja negra" \(microSD y capacidad interna\) para hasta millones de entradas, ideal para retención de datos fuera de línea.
- Formato compacto y apto para vehículos con protección IP54 y opciones de antena integrada o externa.

## Cómo funciona con Plaspy

UMKa302 se integra en Plaspy transmitiendo fijaciones de posición GNSS, telemetría derivada del CAN y lecturas de sensores BLE a través de GSM/GPRS. Plaspy recibe estas señales en tiempo real para seguimiento en vivo, geocercas, alertas e informes históricos. la capacidad de registro y el doble SIM del dispositivo aseguran una entrega continua de datos; cuando la conectividad es intermitente, los registros almacenados en microSD y la memoria de la caja negra interna se sincronizan con Plaspy tan pronto como se restablece la conexión.

- Actualizaciones de ubicación y telemetría en tiempo real para el monitoreo de rutas, ETA y visibilidad de activos.
- Monitoreo del estado de encendido y alarmas a través de datos CAN del vehículo o entradas conectadas; útil para la detección de trayectos y generación de informes basados en eventos.
- Monitoreo de combustible y temperatura de combustible mediante sensores BLE inalámbricos, proporcionando telemetría comparable a sistemas FLS cableados.
- Registro de eventos y memoria de caja negra fuera de línea \(microSD e interna\) que se sincroniza con Plaspy tras la reconexión.
- Control remoto y salidas: dos salidas de colector abierto pueden configurarse para acciones remotas cuando lo exijan los flujos de trabajo de la flota.

## Resumen técnico

| Conectividad | GSM \(GPRS\) — 850 / 900 / 1800 / 1900 MHz |
| --- | --- |
| Bandas | GSM 850/900/1800/1900 |
| Alimentación y batería | Tensión de alimentación +8…+40 V; gestión inteligente de la energía; fuente de alimentación adicional opcional |
| Entradas / Salidas | 2 entradas analógicas/digitales; 2 entradas de pulso/discretas; 2 salidas \(colector abierto\) |
| Interfaces | RS-485, RS-232, 1-Wire, CAN, Bluetooth |
| CAN | Soporte J1939 y filtro personalizado; operación opcional con dos buses CAN de forma simultánea |
| GNSS | Canales de seguimiento: 33; Canales de captura: 99 \(GLONASS / GPS\) |
| Bluetooth | Soporte BLE para sensores inalámbricos \(hasta 8 sensores\) |
| Caja negra / Almacenamiento | Caja negra de hasta 120,000 entradas; compatibilidad con microSD de hasta 100 millones de entradas |
| SIM y Control | Dual SIM; control vía USB, SMS, GPRS y Bluetooth |
| Protocolos | Protocolo EGTS soportado |
| Factor de forma | Rastreador compacto para vehículos — dimensiones 90 × 71 × 26 mm; peso ≤ 120 g; IP54 |
| Antenas | Opciones de antena integrada o externa |
| Adicional | Comunicación de voz opcional |

## Casos de uso

- Gestión de flotas: posicionamiento en vivo de los vehículos, telemetría de comportamiento del conductor y analítica de rutas a través de los paneles de Plaspy.
- Seguridad y antirrobo: alertas de ubicación, registros de eventos y control remoto de salidas para limitar el uso no autorizado.
- Monitoreo de combustible: sensores BLE de combustible y datos CAN de combustible combinados en Plaspy para mejorar la estimación del consumo y la detección de robos.
- Diagnóstico de vehículos comerciales: acceso a decenas de parámetros CAN \(J1939 o personalizado\) sin sensores cableados adicionales para el mantenimiento preventivo.
- Cadena de frío o carga sensible: integración de sensores Bluetooth para telemetría de temperatura junto con el seguimiento GNSS.

## Por qué elegir este rastreador con Plaspy

El UMKa302 ofrece telemetría de grado profesional y una conectividad flexible para los usuarios de Plaspy. Su combinación de diagnósticos CAN, soporte para sensores BLE y GSM de doble SIM garantiza un flujo de datos constante y rico para el seguimiento en tiempo real y el análisis histórico. Para los propietarios de flotas que requieren funciones de antirrobo fiables, monitoreo de combustible y telemetría operativa, el UMKa302 reduce la necesidad de hardware adicional al exponer parámetros del vehículo vía J1939 y un filtro CAN personalizado. Los clientes de Plaspy obtienen ubicaciones y señales de sensores de alta resolución, registro fuera de línea resistente y posibilidades prácticas de control remoto a través de las entradas y salidas del dispositivo — todo en una unidad compacta, con IP54 y diseñada para entornos vehiculares.

