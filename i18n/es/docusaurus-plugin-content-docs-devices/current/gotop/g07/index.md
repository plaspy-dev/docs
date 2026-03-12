---
slug: /gotop/g07
id: g07
sidebar_label: G07
sidebar_class_name: menu_item_tracker
---
# GOTOP - G07

![G07](./tracker.jpg)

El G07 es un rastreador GPS de uso intensivo, compatible con Plaspy, diseñado para el seguimiento a largo plazo, de bajo mantenimiento, de vehículos, contenedores y otros activos móviles de alto valor. Con opciones de baterías internas de litio de gran capacidad \(10,000 mAh y 20,000 mAh\), protección IP65 robusta y seis potentes imanes NdFeB para un montaje discreto y no invasivo, el G07 ofrece ubicación fiable y telemetría de eventos para flotas de alquiler, recuperación de carga y supervisión remota de activos. Su posicionamiento híbrido GPS + BeiDou + LBS, combinado con alarmas en el dispositivo y monitoreo de audio remoto, facilita el uso del G07 con Plaspy para un seguimiento persistente y en tiempo real, y flujos de trabajo de anti-robos.

El G07 está diseñado para escenarios donde importan largos tiempos de espera entre mantenimiento y un rendimiento fiable en entornos exteriores. Construido alrededor de un módem GSM 2G MT6261D y de un módulo GNSS ZKMicro AT6558D, reporta ubicaciones con una precisión de aproximadamente 5 metros en buenas condiciones y ofrece una amplia gama de alertas de seguridad \(manipulación/sabotaje, exceso de velocidad, movimiento/vibración y batería baja\) además de grabación de voz remota y grabación activada por sonido. Como rastreador compatible con Plaspy, el G07 integra su ubicación y telemetría en la plataforma de seguimiento, informes y alertas en tiempo real de Plaspy para apoyar la gestión de flotas, la respuesta ante robos y la monitorización a largo plazo de activos.

## Principales características

- Seguimiento de larga duración: opciones de batería interna de litio de gran capacidad \(10,000 mAh o 20,000 mAh\) para una mayor autonomía entre ciclos de mantenimiento.
- Compatible con Plaspy: transmite GNSS, LBS y alarmas del dispositivo a través de GSM para seguimiento en tiempo real, alertas y reproducción histórica en Plaspy.
- Posicionamiento híbrido: GPS + BeiDou + LBS para fijaciones de ubicación fiables con una precisión reportada de ~5 m en condiciones favorables.
- Montaje robusto y discreto: carcasa de ABS con clasificación IP65 y seis imanes NdFeB para sujeción resistente a la intemperie y discreta a vehículos y contenedores.
- Telemetría de seguridad integral: alarmas de manipulación/sabotaje, exceso de velocidad, movimiento/vibración y bajo voltaje que respaldan escenarios de anti-robos y recuperación.
- Capacidades de audio remoto: micrófono interno que admite monitoreo de audio remoto, grabación de voz remota y grabación activada por sonido para la conciencia situacional.
- Modo de espera de bajo consumo: características optimizadas de corriente de reposo adecuadas para activos que reportan de forma poco frecuente pero que deben seguir siendo localizables durante meses.

## Cómo funciona con Plaspy

El G07 utiliza su módem GSM MT6261D integrado y una micro SIM para enviar posiciones GNSS \(GPS + BeiDou\), datos de respaldo LBS y telemetría de eventos al backend de Plaspy. Una vez configurado con intervalos de informe y umbrales de alerta compatibles con Plaspy, las actualizaciones de posición, alarmas y el estado de batería/voltaje del dispositivo aparecen en el panel de control de Plaspy para seguimiento en tiempo real, geocercas y respuesta ante incidentes.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas mediante 2G GSM a Plaspy para mapeo en vivo y reproducción histórica.
- Alarmas de manipulación/sabotaje, exceso de velocidad, movimiento y vibración enviadas a Plaspy como alertas instantáneas para acciones de anti-robos y recuperación.
- Telemetría de bajo voltaje y nivel de batería para ayudar a programar el mantenimiento y preservar la disponibilidad del activo.
- Monitoreo de audio remoto, grabación de voz remota y grabación activada por sonido disponibles a través de Plaspy cuando las funciones de audio están habilitadas.
- Para monitoreo de combustible, control de ignición o inmovilizador y sensores Bluetooth: estas funciones no son nativas del G07; implemente gateways telemáticos externos o hubs de sensores compatibles con Plaspy si se requieren dichas capacidades.

## Resumen técnico

| Conectividad | Módulo MT6261D GSM \(2G\), micro SIM |
| --- | --- |
| Bandas | 2G GSM: 850 / 900 / 1800 / 1900 MHz |
| Potencia y Batería | Opciones de batería interna de litio: 10,000 mAh o 20,000 mAh; voltaje de trabajo DC 3.4–4.5V; corriente de trabajo típica 35–120 mA \(a 4V\); corriente en modo reposo 2–15 mA |
| Interfaces | Entrada de micrófono interna; sensor de luz interno; interfaz serie UART-TTL de 3.3V \(un canal\) |
| GNSS | Posicionamiento híbrido GPS + BeiDou \(BD\); módulo GNSS ZKMicro AT6558D; precisión reportada ~5 m; arranque en frío ~32 s, arranque en caliente ~1 s; sensibilidad de seguimiento −162 dBm |
| Bluetooth | No especificado / no incluido |
| Gestión remota | Informes del dispositivo por aire a Plaspy vía GSM; FOTA / configuración remota no especificados |
| Forma y Durabilidad | Dimensiones 112 × 78 × 27 mm; peso ~300 g; carcasa de ABS; clasificación IP65; seis imanes NdFeB permanentes \(φ18 mm × 2.8 mm\); temperatura de operación −20°C a 70°C; almacenamiento −30°C a 80°C; humedad 5%–95% |

## Casos de uso

- Monitoreo de alquiler de coches y flotas — vida útil de batería prolongada y montaje discreto reducen el mantenimiento y mejoran las tasas de recuperación para alquileres a corto o largo plazo.
- Seguimiento de contenedores y carga — protección IP65 y sujeción magnética fuerte permiten monitorizar envíos expuestos a condiciones al aire libre.
- Recuperación de activos y anti-robos — alarmas de manipulación/sabotaje, detección de movimiento y vibración y alertas de exceso de velocidad permiten una respuesta rápida a través de las notificaciones de Plaspy.
- Ubicaciones remotas o con servicio limitado — standby extendido y posicionamiento híbrido GPS/BD/LBS permiten el seguimiento donde las ventanas de energía y conectividad son limitadas.

## Por qué elegir este rastreador con Plaspy

Combinar el G07 con Plaspy ofrece a las organizaciones una solución práctica y de bajo mantenimiento para el seguimiento en tiempo real y flujos de trabajo de anti-robos. La combinación de baterías internas de gran capacidad, una construcción robusta con IP65 y un montaje magnético seguro minimizan el tiempo de inactividad y el esfuerzo de instalación, mientras que el conjunto de alarmas y las capacidades de audio remoto del dispositivo mejoran la conciencia situacional durante las operaciones de recuperación. Dado que el G07 transmite GNSS, LBS y estado del dispositivo a través de 2G, se integra de forma nítida en las herramientas de mapeo, alertas e informes de Plaspy para ofrecer gestión de flotas, telemetría y características anti-robos sin necesidad de mantenimiento continuo en el sitio. Para despliegues que requieren telemetría adicional \(monitoreo de combustible\), detección de ignición o control del inmovilizador, considere complementar el G07 con sensores externos o gateways telemáticos compatibles con Plaspy para ampliar la funcionalidad, manteniendo al G07 como el nodo de ubicación y seguridad de larga duración.

