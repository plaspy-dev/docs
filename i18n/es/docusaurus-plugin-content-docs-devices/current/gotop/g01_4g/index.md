---
slug: /gotop/g01_4g
id: g01_4g
sidebar_label: G01-4G
sidebar_class_name: menu_item_tracker
---
# GOTOP - G01-4G

![G01-4G](./tracker.jpg)

El rastreador G01-4G es una solución de seguimiento de vehículos compatible con Plaspy, diseñada para un seguimiento en tiempo real fiable y la gestión de flotas. Pensado para automóviles, taxis, vehículos de alquiler y camiones ligeros, el G01-4G utiliza 4G LTE con respaldo por SMS para ofrecer actualizaciones de posición rápidas, alarmas de geocerca configurables, informes de emergencia SOS y telemetría específica del vehículo, como detección de ACC \(ignición\) y corte remoto del motor. Su carcasa en ABS con clasificación IP67 y su amplio rango de tensión de operación lo hacen adecuado para implementaciones profesionales de flotas y entornos automotrices exigentes.

Cuando se integra con Plaspy, el G01-4G pasa a formar parte de un conjunto centralizado de monitorización y antirrobo: Plaspy ingiere la ubicación del rastreador, los flujos de alarmas y telemetría para ofrecer mapas en tiempo real, notificaciones de geocerca e telemetría del conductor/vehículo. El micrófono de escucha del dispositivo, el soporte para altavoz externo, las alarmas por vibración/movimiento y la detección de corte de alimentación principal alimentan los avisos y los informes históricos de Plaspy, de modo que los equipos pueden responder más rápido ante robos, averías e incidentes de seguridad.

## Puntos clave

- Rastreador GPS 4G compatible con Plaspy para un seguimiento en tiempo real preciso y de baja latencia, y mapeo.
- Carcasa robusta con clasificación IP67 y amplio rango de tensión de operación \(DC 9V–100V\) para uso en vehículos y flotas.
- Telemetría del vehículo incluida: detección ACC \(ignición\), botón SOS, alarmas de vibración/movimiento y de corte de alimentación principal.
- Capacidad de inmovilizador remoto \(corte remoto del motor\) para respaldar flujos de respuesta ante robo en Plaspy.
- Micrófono integrado y soporte para altavoz externo para escenarios de escucha y audio bidireccional.
- Comunicación 4G/LTE con respaldo de SMS mantiene el seguimiento fiable en condiciones celulares.
- Formato compacto con múltiples E/S e interfaces \(UART/RS232/CAN/K-Line\) para sensores externos e integración telemática.

## Cómo funciona con Plaspy

La integración del G01-4G con Plaspy convierte los datos GNSS brutos y los eventos del vehículo en inteligencia operativa. Plaspy procesa las actualizaciones 4G o SMS del rastreador y las transforma en ubicación en tiempo real, notificaciones de geocerca y telemetría del conductor/vehículo. Las alertas del rastreador—presiones del SOS, alarmas de vibración, pérdida de energía y cambios de encendido—se muestran en los paneles de Plaspy y pueden activar flujos de trabajo, notificaciones o informes automatizados.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas mediante 4G/LTE con respaldo por SMS para mantener la continuidad.
- Estado de encendido y puertas/alarma: detección ACC y entradas digitales reportan el estado del vehículo a Plaspy.
- Monitoreo de combustible y telemetría avanzada: se integra con sensores de combustible externos o sistemas mediante las interfaces de E/S y serie del dispositivo \(se requieren periféricos compatibles\).
- Inmovilizador remoto: el control de corte remoto del motor está disponible y puede activarse mediante comandos gestionados por Plaspy para la respuesta ante robo.
- Monitoreo de audio y manejo de emergencias: los eventos del botón SOS y del micrófono de escucha alimentan los flujos de incidentes de Plaspy. \(Los sensores Bluetooth se gestionan por separado por Plaspy; el G01-4G no indica BLE integrado.\)

## Resumen técnico

| Conectividad | 4G LTE \(módulo QUECTEL EC20\) con respaldo de seguimiento por SMS; SIM estándar; antena interna |
| --- | --- |
| Bandas | Ejemplo de módulo UE: LTE-FDD B1/B3/B5/B7/B8/B20; LTE-TDD B38/B40/B41; WCDMA B1/B5/B8; GSM B3/B8 \(los módulos/frecuencias pueden variar según la región\) |
| Alimentación y batería | Voltaje de operación DC 9V–100V \(algunas configuraciones indican típicamente 9–80V\); batería interna de respaldo opcional de 180mAh \(3.7V\) |
| Consumo de corriente | Corriente de trabajo ~30–60mA @12V; Corriente en modo de reposo ~5–15mA @12V |
| Interfaces | 1 canal de salida baja \(por ejemplo, control de combustible/apagado de energía o bloqueo/desbloqueo\); 1 canal de entrada digital baja \(SOS, etc.\); 1 canal de entrada digital alta \(ACC, detección de puerta o luz\); conectores externos para altavoz y micrófono; salida de 5V para periféricos; interfaz compatible UART/RS232/CAN/K-Line |
| GNSS | Chip ZKMicro AT6558D GPS/BeiDou; arranque en frío ~32 s; arranque en caliente ~1 s; sensibilidad de seguimiento ~-162 dBm; antena GNSS interna |
| Bluetooth | No especificado / no se reporta BLE integrado en la especificación |
| Gestión remota | Comandos remotos compatibles \(p. ej., corte de motor\); FOTA/herramientas de gestión no especificadas |
| Formato | Dimensiones 87 × 64 × 26 mm; carcasa ABS; IP67 a prueba de agua; peso ≈140 g |
| Ambiental | Operación -30°C a 75°C; Almacenamiento -30°C a 80°C; Humedad 5%–95% |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, eventos de encendido y generación de informes centralizados para taxis, vehículos de reparto y flotas de servicios.
- Vehículos en alquiler y financiados: geocerca, inmovilización remota y soporte SOS para reducir el robo y acelerar la recuperación.
- Vehículos de pasajeros y taxis: ubicación en tiempo real, alertas de seguridad del conductor y capacidad de escucha para emergencias o validación de incidentes.
- Protección de activos y anti‑robo: alarmas de vibración/movimiento, detección de corte de la alimentación principal y control de corte del motor integrados en los flujos de trabajo de Plaspy.
- Integraciones telemáticas: conectar sensores externos de combustible, lectores RFID o cámaras a través de UART/RS232/CAN/K-Line para ampliar la telemetría y las capacidades de monitoreo de combustible.

## Por qué elegir este rastreador con Plaspy

El G01-4G, junto con Plaspy, ofrece una solución enfocada y fiable para operadores que requieren un seguimiento GPS preciso, controles robustos de antirrobo y telemetría de vehículos rica. La plataforma de Plaspy convierte las alarmas y los datos de ubicación del rastreador en información accionable mediante paneles centralizados, alertas configurables e informes históricos. La carcasa robusta con IP67, la amplio rango de voltaje y el conjunto de E/S automotrices del dispositivo facilitan la instalación en diversas flotas de vehículos, mientras que características como detección ACC, SOS, escucha y corte remoto del motor proporcionan las funciones de seguridad e inmovilizador en las que confían los gestores de flotas.

Para organizaciones que buscan seguimiento práctico en tiempo real, telemetría e integración de antirrobo, el G01-4G es una opción pragmática compatible con Plaspy: admite actualizaciones rápidas por 4G, entradas críticas del vehículo e interfaces externas flexibles para ampliar la monitorización y la telemetría de combustible o sensores cuando sea necesario. Póngase en contacto con su integrador de Plaspy para confirmar las bandas celulares específicas de la región y planificar integraciones periféricas como sensores de combustible o cámaras.

