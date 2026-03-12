---
slug: /coban/bn_303f
id: bn_303f
sidebar_label: BN-303F
sidebar_class_name: menu_item_tracker
---
# Coban - BN-303F

![BN-303F](./tracker.png)

El BN-303F \(también listado como el modelo 303FG\) es un rastreador GPS compacto para montaje en vehículo, diseñado para una implementación fiable compatible con Plaspy en escenarios de anti-robo, gestión de flotas y seguimiento en tiempo real. Construido para instalación oculta en automóviles, camiones comerciales y vehículos de alquiler, el BN-303F ofrece una posición GNSS precisa, telemática continua y alarmas configurables para mantener informados y bajo control a los gestores de flotas y a los propietarios de vehículos.

Como rastreador GPS compatible con Plaspy, el BN-303F se integra a la perfección con los flujos de telemetría en la nube y de monitoreo de flotas. Su comunicación 2G GSM/GPRS, modos de reporte basados en eventos y funciones de control remoto permiten la ubicación en tiempo real, gestión de alarmas y desconexión remota de energía/combustible cuando se emplea junto a la plataforma Plaspy, ofreciendo una solución práctica y rentable para la gestión de flotas, la protección antirrobo y la supervisión de activos.

## Aspectos destacados

- Seguimiento en tiempo real compatible con Plaspy: actualizaciones continuas de ubicación sobre 2G para visibilidad en vivo y reproducción de rutas.
- Conjunto completo de alarmas: SOS, movimiento/impacto, geocerca, apertura de puerta, encendido ACC, exceso de velocidad y alertas de batería baja.
- Capacidades de control remoto: corte de combustible/energía \(sensor de combustible opcional\) para inmovilización y respuesta ante robo.
- Diseño de alimentación apto para vehículos: conexión directa de 12–24 V al vehículo con batería interna de respaldo de 3.7 V y 300 mAh para operación limitada durante pérdidas de energía.
- GNSS de alta precisión: precisión típica de posicionamiento GPS de aproximadamente 5 m y recepción GNSS sensible para fijaciones fiables.
- Formato compacto y discreto \(9.6 × 5.3 × 1.6 cm, 70 g\) para instalación discreta en automóviles de pasajeros y vehículos comerciales.
- Transporte de datos flexible: protocolos TCP/UDP y SMS para canales de telemetría y comandos confiables.

## Cómo funciona con Plaspy

El BN-303F reporta la ubicación y los datos de estado a Plaspy a través de 2G GSM/GPRS usando TCP, UDP o SMS. Plaspy ingiere esos flujos de telemetría para proporcionar rastreo en tiempo real, reproducción de trayectos históricos, notificaciones de alarmas y informes a nivel de flota. Cuando está configurado en Plaspy, las reglas de eventos del dispositivo \(por ejemplo, infracciones de geocerca, alarmas SOS o desconexión de energía\) pueden activar alertas inmediatas y mantener la unidad en línea hasta que se aclare el evento, asegurando que los incidentes críticos reciban atención.

- Actualizaciones de ubicación y telemetría en tiempo real a través de 2G GPRS \(TCP/UDP\) y respaldo SMS.
- Estado de ignición \(ACC\), apertura de puerta y golpes/movimiento para monitoreo y alertas basadas en eventos.
- Monitoreo de combustible y corte remoto de combustible/energía cuando se instala y habilita un sensor de combustible opcional o un relé.
- Control remoto de tipo inmovilizador a través de comandos de corte de energía/combustible emitidos desde Plaspy \(requiere cableado y accesorios adecuados\).
- Alarma SOS, llamada unidireccional y escucha de voz remota para respaldar flujos de respuesta ante emergencias.

## Resumen técnico

| Modelo | BN-303F \(listado como 303FG\) |
| --- | --- |
| Conectividad | 2G GSM/GPRS; TCP/UDP y SMS compatibles para transporte de datos |
| Bandas | 850/900/1800/1900 MHz |
| Alimentación y Batería | Suministro 12–24 V; batería de respaldo interna recargable de 3.7 V, 300 mAh de litio para operación limitada durante pérdida de energía externa |
| Interfaces | Micrófono externo, salida de relé, cableado de extensión / SOS; admite sirena opcional y sensor de combustible |
| GNSS | Receptor GNSS de alta precisión; sensibilidad de −165 dBm; precisión de posicionamiento GPS ≈ 5 m; arranque en frío ≈ 45 s, tibio ≈ 35 s, caliente ≈ 1 s |
| Bluetooth | No se reporta Bluetooth integrado \(sensores Bluetooth externos pueden integrarse mediante la plataforma Plaspy cuando sea compatible\) |
| Gestión Remota | Estrategias de reporte configurables \(tiempo real o fuera de línea inteligente\); manuales descargables y vídeos de instalación disponibles del fabricante |
| Formato y Medio Ambiente | Dimensiones 9.6 × 5.3 × 1.6 cm; peso 70 g; rango de temperatura de operación −20 °C a +45 °C; almacenamiento −40 °C a +85 °C; humedad 5–95% sin condensación |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real continuo, reproducción de rutas y alertas de exceso de velocidad para flotas comerciales pequeñas a medianas.
- Antirrobo y recuperación de vehículos: instalación oculta, alarma SOS, escucha de voz remota y corte de combustible/energía para una respuesta rápida ante incidentes.
- Monitoreo de vehículos en alquiler y financiados: alarmas de ignición y de puerta, geocercas y notificaciones de batería baja para proteger activos de alto riesgo.
- Supervisión de logística y transporte: telemetría para validación de viajes, confirmaciones de entrega basadas en geocerca y registro de eventos para cumplimiento.
- Supervisión de vehículos corporativos: datos consolidados en Plaspy para planificación de mantenimiento, revisión del comportamiento del conductor y visibilidad operativa.

## Por qué elegir este rastreador con Plaspy

El BN-303F ofrece un endpoint telemático compacto y fiable que complementa las capacidades en la nube de Plaspy. Su rendimiento probado de GNSS y la conectividad 2G GPRS proporcionan el seguimiento en tiempo real y la telemetría esenciales para la gestión diaria de flotas y la protección antirrobo. Dado que el dispositivo admite reportes basados en eventos, la aplicación de geocercas y el corte remoto de energía/combustible, los usuarios de Plaspy disponen de control operativo inmediato y alertas oportunas para los incidentes que importan.

Para organizaciones que buscan un rastreador GPS compatible con Plaspy práctico, el BN-303F equilibra una instalación vehicular simple, una gama de funciones de alarma y las I/O necesarias para accesorios como sirenas y sensores de combustible. Combinado con el panel de Plaspy, sus herramientas de alerta e informes, el BN-303F ayuda a flotas y propietarios de vehículos a reducir el riesgo de robo, mejorar la supervisión de rutas y añadir monitoreo de combustible y telemetría cuando se requiera.

