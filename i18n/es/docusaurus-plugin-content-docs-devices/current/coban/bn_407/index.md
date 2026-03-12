---
slug: /coban/bn_407
id: bn_407
sidebar_label: BN-407
sidebar_class_name: menu_item_tracker
---
# Coban - BN-407

![BN-407](./tracker.png)

El BN-407, rastreador GPS, es un compacto terminal de gestión para bicicletas con 4G, diseñado para instalación oculta dentro del cuadro. Como rastreador GPS compatible con Plaspy, el BN-407 ofrece seguimiento en tiempo real fiable, telemetría de movimiento y alertas configurables de geocerca para bicicletas de montaña, flotas compartidas y bicicletas personales, proporcionando una protección antirrobo discreta y un historial de conducción claro sin modificar la apariencia de la bicicleta.

Diseñado para operación de bajo consumo y uso práctico en campo, el BN-407 admite actualizaciones de ubicación en tiempo real, reproducción de trayectos y reporte de alarmas a través de LTE/GPRS. Su llave magnética inductiva y las estrategias de posicionamiento inteligente lo convierten en una opción ideal para la gestión de flotas, supervisión de trayectos de niños y casos de uso anti‑robo donde la larga duración de la batería, el posicionamiento preciso y la fácil integración con Plaspy son importantes.

## Aspectos clave

- Dispositivo compatible con Plaspy para seguimiento en tiempo real y telemetría adaptados a bicicletas y activos pequeños.
- Soporte de red 4G/LTE y GPRS con variantes de banda regional para despliegue global y conectividad fiable.
- Varias alarmas de movimiento y seguridad: choques, movimiento, exceso de velocidad, batería baja y notificaciones de geocerca.
- Formato oculto, incrustado en el cuadro \(Ø35×160 mm, 50 g\) para instalación antirrobo discreta.
- Batería recargable de 3.7V 700 mAh con carga USB 5V y modos de bajo consumo para ampliar la autonomía.
- Estrategia de posicionamiento inteligente: funciona offline cuando está estacionario y reporta de inmediato ante llamadas, SMS o alarmas para conservar la batería.
- Soporta transporte TCP/UDP/SMS para una integración flexible en Plaspy y otras plataformas de back-end.

## Cómo funciona con Plaspy

El BN-407 se integra con Plaspy para entregar inteligencia de ubicación continua y alertas basadas en eventos. La ubicación y la telemetría se envían a través de LTE/GPRS usando TCP, UDP o SMS; Plaspy procesa esos datos para proporcionar seguimiento en tiempo real, reproducción de historial y notificaciones basadas en reglas. Las salidas de alarma y la detección de movimiento del dispositivo permiten a Plaspy activar flujos de trabajo de anti‑robo e informes de gestión de flotas de forma instantánea.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para seguimiento en vivo y reproducción histórica.
- Reporte de alarmas — batería baja, choque, movimiento, exceso de velocidad y geocerca — mapeado a alertas y flujos de trabajo de Plaspy.
- Comportamiento inteligente offline/online: conserva la batería cuando está estacionario y se activa para llamadas, SMS o alarmas, asegurando reportes a tiempo.
- Activación/desactivación por llave inductiva \(magnética\) reconocida por el dispositivo e reportada a través de Plaspy para un control seguro de encendido/apagado.
- La compatibilidad de transporte TCP/UDP/SMS permite a Plaspy gestionar dispositivos en diferentes entornos de red y regiones.

## Resumen técnico

| Nombre del producto | Rastreador GPS \(BN-407, Modelo 407\) |
| --- | --- |
| Conectividad | GPRS / LTE \(4G\) |
| Bandas | América Latina: B2/B3/B4/B5/B7/B8/B28A/B28B; América del Norte: B2/B4/B5/B7/B12/B13/B66/B28A; Eurasia/África: B1/B3/B5/B7/B8/B20/B28A/B40 |
| Protocolos de transporte | TCP, UDP, SMS |
| Alimentación & Batería | Carga USB 5V; batería recargable de litio 3.7V 700 mAh |
| Interfaces | Llave de armado/desarme inductiva \(magnética\); incluido cable de carga/datos |
| GNSS | Receptor GNSS de alta precisión; sensibilidad GPS -165 dBm; precisión ~5 metros; TTFF — Cold ~45 s, Warm ~35 s, Hot ~1 s |
| Condiciones de operación | Temperatura de operación -20°C a +45°C; Almacenamiento -40°C a +85°C; Humedad 5%–95% sin condensación |
| Factor de forma | Diseño cilíndrico compacto Ø35×160 mm, 50 g — instalación oculta en el cuadro de la bicicleta |
| Gestión remota | Firmware, guías de instalación y manuales disponibles en la página de descargas del fabricante; comandos de configuración por SMS soportados |

## Casos de uso

- Protección y recuperación antirrobo: rastreo GNSS discretamente incrustado y alertas instantáneas de geocerca/choque para ayudar a localizar bicicletas robadas.
- Gestión de flotas para operadores de bicicletas compartidas o de alquiler: informes compatibles con Plaspy y reproducción de rutas para monitoreo de utilización y análisis de rutas.
- Supervisión de paseos de niños y seguridad: los padres reciben ubicación y alertas de movimiento en tiempo real para paseos supervisados.
- Historial de recorridos y revisión de incidentes: trazas GPS precisas \(~5 m\) para reproducción tras eventos o para revisión de desempeño.

## Por qué elegir este rastreador con Plaspy

El BN-407 combina un hardware compacto con la plataforma de Plaspy para ofrecer una solución centrada para el rastreo y la gestión de bicicletas. Su instalación oculta, su bajo peso y sus estrategias inteligentes de consumo reducen la manipulación y maximizan la disponibilidad—beneficios clave para escenarios de anti‑robo y gestión de flotas. Con soporte 4G multi‑band y un rendimiento GNSS robusto, el BN-407 ofrece un rastreo en tiempo real y telemetría confiables hacia Plaspy para alertas inmediatas, reproducción histórica y reportes operativos.

Aunque el BN-407 está optimizado para telemetría de bicicletas en lugar de monitoreo de combustible de vehículos o datos de sensores BLE, es un rastreador GPS compatible con Plaspy eficaz para organizaciones e individuos que necesitan ubicación precisa, reglas de alarma configurables e una integración sencilla. Para implementaciones que requieren telemetría consolidada, incluido monitoreo de combustible o sensores Bluetooth \(BLE\), Plaspy puede ingerir y correlacionar datos de dispositivos complementarios junto a las unidades BN-407 para crear una solución completa de gestión de flotas o activos.

