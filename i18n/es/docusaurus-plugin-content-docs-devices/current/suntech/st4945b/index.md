---
slug: /suntech/st4945b
id: st4945b
sidebar_label: ST4945B
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4945B

![ST4945B](./tracker.jpg)

El ST4945B es un rastreador GPS de activos robusto para LTE Cat M1 / NB‑IoT, diseñado para monitoreo de bajo consumo a largo plazo e integración fluida con Plaspy. Construido para instalaciones exteriores exigentes, el ST4945B ofrece seguimiento en tiempo real fiable, alternativas de conectividad sólidas y autonomía de batería extendida para gestión de flotas, monitorización de contenedores y remolques, y proyectos de recuperación remota de activos.

Listo para usar con Plaspy; el ST4945B proporciona ubicación en tiempo real, telemetría basada en movimiento y alertas de eventos a la plataforma Plaspy mediante flujos de datos TCP/UDP. Con protección IP67, detección de interferencias, actualizaciones de firmware OTA y una interfaz opcional BLE 4.2, este rastreador está diseñado para respaldar flujos de trabajo anti‑robo, casos de uso de telemetría y despliegues escalables de gestión de flotas.

## Características principales

- Rastreador GPS compatible con Plaspy que proporciona seguimiento en tiempo real y telemetría sobre LTE Cat M1 / NB‑IoT con retroceso a 2G.
- Gran batería de respaldo recargable de Li‑ion de 3.7 V y 18,200 mAh para una autonomía extendida en modos de reposo y reposo profundo.
- Carcasa robusta con certificación IP67 para polvo y agua—ideal para contenedores, remolques y activos exteriores.
- GPS/GLONASS integrado con soporte SBAS y precisión típica de aproximadamente ±3 m CEP en condiciones de buena señal.
- Gestión avanzada de energía con corriente de reposo profundo ultrabaja \(\<10 μA\) para maximizar los intervalos de servicio.
- Detección de interferencias, alertas de batería baja y actualizaciones de firmware OTA para implementaciones seguras gestionadas de forma remota.
- Soporte opcional BLE 4.2 para emparejamiento de sensores locales y mantenimiento, además de un Servidor de Mantenimiento opcional para la gestión de dispositivos.

## Cómo funciona con Plaspy

El ST4945B transmite posiciones GNSS y telemetría a Plaspy mediante TCP/UDP sobre LTE Cat M1, NB‑IoT o EGPRS \(2G\) cuando es necesario. Plaspy ingiere ubicaciones, eventos de movimiento y mensajes de estado del dispositivo para proporcionar una conciencia situacional continua, geocercas, reproducción histórica y alertas automatizadas. La integración es sencilla: el dispositivo transmite paquetes de telemetría estándar que Plaspy puede analizar para paneles en tiempo real, informes y notificaciones basadas en reglas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para seguimiento en vivo y reproducción histórica.
- Detección de movimiento y acelerómetro utilizada para alertas de manipulación, remolque o desplazamiento de carga.
- Notificaciones de batería baja y detección de interferencias remitidas a Plaspy para una respuesta rápida del operador.
- Las I/O digitales e interfaces varían según el modelo; cuando están disponibles pueden reportar ignición, eventos de puerta/alarma o activar controles de inmovilizador externos \(según el modelo\).
- Soporte opcional BLE 4.2 para la integración de sensores locales y balizas Bluetooth utilizadas por Plaspy para telemetría mejorada en sitio.

## Resumen técnico

| Modelo | ST4945B |
| --- | --- |
| Conectividad | LTE Cat M1 / NB‑IoT \(NB2\), EGPRS \(2G\) fallback — TCP/UDP |
| Bandas | LTE Cat M1: B1, B2, B3, B4, B5, B8, B12, B13, B18, B19, B20, B25, B26, B27, B28, B66, B85; NB2: cobertura similar más B71; EGPRS: 850/900/1800/1900 MHz |
| Energía y batería | 3.7V, 18,200 mAh batería de respaldo recargable Li‑ion; carga vía 12 VDC; corriente activa ~40–60 mA; sleep \<3.5 mA; deep sleep \<10 μA |
| Interfaces | Opciones de E/S flexibles \(variable por modelo\); tres LEDs de estado \(red, GPS, carga\); no Wi‑Fi; BLE 4.2 opcional |
| GNSS | GPS + GLONASS con SBAS \(WAAS, EGNOS, MSAS\); ~±3 m CEP \(típico, buenas condiciones\); actualización 1 Hz; cold start \<35 s, warm \<30 s, hot \<1 s; sensibilidad hasta -167 dBm |
| Seguridad y Gestión | Detección de interferencias, alertas de batería baja, actualización de firmware OTA \(FOTA\); servidor de mantenimiento opcional para gestión remota |
| Factor de forma | 125 × 90 × 50 mm; peso 523 g \(700 g con soporte\); carcasa certificada IP67 |

## Casos de uso

- Monitorización de contenedores y remolques: ubicación continua, alertas de movimiento y detección de manipulación e interferencia para activos de larga distancia.
- Gestión de flotas: seguimiento en tiempo real y telemetría para flotas mixtas usando LTE Cat M1/NB‑IoT con retroceso a 2G.
- Recuperación de activos y anti‑robo: alarmas basadas en movimiento, notificaciones de incumplimiento de geocerca y alertas de batería baja para acelerar la recuperación.
- Seguimiento remoto de equipos: larga vida de la batería y protección IP67 para infraestructura exterior y equipos estacionales.
- Telemetría local con sensores Bluetooth: BLE opcional permite sensores de temperatura, apertura de puertas o proximidad para el monitoreo a nivel de sitio al emparejar con Plaspy.

## Por qué elegir este rastreador con Plaspy

Emparejar el ST4945B con Plaspy proporciona una solución práctica y escalable para organizaciones que requieren un rendimiento robusto de rastreo GPS en entornos difíciles. La combinación de cobertura LTE Cat M1 / NB‑IoT, retroceso a EGPRS y una batería de respaldo muy grande minimiza las visitas de mantenimiento y mantiene los activos visibles durante períodos prolongados. La protección IP67 y la detección de interferencias aumentan la confianza en escenarios de anti‑robo y recuperación, mientras que las actualizaciones OTA y un Servidor de Mantenimiento opcional simplifican la gestión del ciclo de vida.

Para despliegues de gestión de flotas y telemetría, el ST4945B ofrece posicionamiento GNSS preciso, informes basados en movimiento y soporte opcional de sensores BLE, todo lo cual alimenta los paneles en tiempo real, alertas e informes de Plaspy. Ya sea que necesite seguimiento en tiempo real, monitorización de combustible o integración de ignición / inmovilizador \(a través de las opciones de I/O disponibles\), este rastreador GPS compatible con Plaspy está diseñado para reducir el tiempo de inactividad, disminuir los costos operativos y mejorar la seguridad de los activos.

