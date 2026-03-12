---
slug: /queclink/gb100p
id: gb100p
sidebar_label: GB100P
sidebar_class_name: menu_item_tracker
---
# QuecLink - GB100P

![GB100P](./tracker.png)

El Queclink GB100P es un localizador GPS compacto montado en la batería, diseñado para telemática de bajo costo y fiabilidad, y compatible con Plaspy para una integración fluida en programas de seguro basado en el uso \(UBI\) y financiación de automóviles. Con un receptor GNSS All‑in‑One de u‑blox integrado, conectividad GSM/GPRS cuádruple banda y soporte BLE 4.2, el GB100P ofrece telemetría de alta frecuencia, captura de eventos de choque y una instalación compacta que facilita su montaje en el compartimento del motor en implementaciones a gran escala.

Construido para operar en entornos vehiculares adversos, el GB100P combina protección IP65, una batería de respaldo NiMH interna de alta temperatura y un conjunto de sensores inerciales de 6 ejes \(acelerómetro de 3 ejes de muestreo de hasta 1600 Hz y giroscopio MEMS\) para proporcionar datos precisos de impactos y una monitorización avanzada del comportamiento de conducción. Aunque Queclink ha emitido un aviso de fin de vida \(EOL\) para el GB100P \(pedidos cesaron el 15 de noviembre de 2024\), el dispositivo sigue siendo una opción probada para aseguradoras existentes y gestores de flotas que requieren un robusto almacenamiento en búfer de mensajes y telemetría precisa con Plaspy; las sustituciones recomendadas son GB130MG y GB100CG para nuevos proyectos.

## Aspectos destacados

- Localizador GPS compatible con Plaspy: integra datos GPS y de sensores para un seguimiento y telemetría confiables en plataformas de telemática.
- Detección inercial de alta frecuencia: conjunto de 6 ejes con accelerómetro muestreado hasta 1600 Hz y giroscopio MEMS permite capturar con precisión eventos de choque y detección de conducción agresiva.
- Conectividad GSM/GPRS de cuádruple banda \(850/900/1800/1900 MHz\) con reportes TCP/UDP/SMS para informes globales de posición y escenarios de ancho de banda reducido.
- Soporte BLE 4.2 para sensores y balizas Bluetooth, extendiendo la telemetría a identificación del conductor, sensores accesorios o monitorización de cabina mediante la integración con Plaspy.
- Retención de datos robusta: almacenamiento en búfer en el propio dispositivo de hasta 10,000 mensajes y paquetes GPS comprimidos de 1 segundo para preservar los datos ante conectividad intermitente.
- Diseño robusto: carcasa estanca IP65, batería de respaldo NiMH interna de alta temperatura \(200 mAh\) y rendimiento estable en instalaciones dentro del compartimento del motor.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el GB100P transmite la ubicación y telemetría de alta resolución a la nube de Plaspy para seguimiento en tiempo real, alertas de eventos y informes históricos. Plaspy ingiere paquetes GPS comprimidos, paquetes inerciales de choque y datos de accesorios BLE para generar información procesable para la gestión de flotas, puntuación de UBI y análisis post-incidente. El almacenamiento en búfer y la compresión de mensajes aseguran la continuidad de los datos en áreas con cobertura GSM intermitente: los mensajes almacenados en el GB100P se transmiten a Plaspy cuando se restablece la conexión.

- Actualizaciones de ubicación y telemetría en tiempo real a Plaspy mediante TCP, UDP o SMS
- Datos de colisiones y comportamiento de conducción de alta frecuencia \(paquetes previos y posteriores al evento para análisis de incidentes\)
- Geocerca, alarmas de estacionamiento \(hasta 20 regiones\), alertas de velocidad y de conducción agresiva
- Entrega de mensajes en búfer \(hasta 10,000 mensajes\) para telemetría confiable en redes intermitentes
- Soporte para sensores Bluetooth — integración BLE 4.2 para telemetría de accesorios y flujos de trabajo basados en balizas

## Resumen técnico

| Conectividad | GSM/GPRS de cuádruple banda \(TCP, UDP, SMS\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(GPRS de clase multi-slot 10\) |
| Alimentación y batería | Voltaje de operación 8–32 V DC; batería de respaldo NiMH interna de alta temperatura, 200 mAh |
| Interfaces | Antenas internas GSM, GNSS y BLE; indicadores LED para estado de GSM, GPS y alimentación \(salidas externas I/O, como inmovilizador, no especificadas\) |
| GNSS | u‑blox All‑in‑One GNSS; sensibilidad de seguimiento hasta −162 dBm; precisión de posición CEP \< 2.5 m; TTFF ≈ 27 s \(frío/caliente promedio\), ≈ 1 s \(caliente\) |
| Bluetooth | BLE 4.2 para sensores y balizas |
| Sensores inerciales | Conjunto de 6 ejes: acelerómetro de 3 ejes \(muestreo hasta 1600 Hz\) y giroscopio MEMS; paquetes de choque capturan hasta 15 s antes y después de un evento |
| Manejo de datos | Paquetes GPS comprimidos de 1 segundo mientras está en movimiento; capacidad de búfer de mensajes de hasta 10,000; alarmas de geocerca y estacionamiento \(hasta 20 regiones\) |
| Ambiental | Dimensiones 91.5 × 51.5 × 11 mm; peso 75 g; rango de operación −20 °C a +70 °C; humedad 0–95% sin condensación; carcasa IP65 |
| Estado del producto | Aviso de fin de vida \(EOL\) de Queclink: los pedidos cesaron el 15 de noviembre de 2024. Queclink proporcionó fechas de producción, corrección de errores y soporte; las sustituciones recomendadas son GB130MG y GB100CG. |

## Casos de uso

- Seguro basado en el uso \(UBI\): acelerómetro de alta tasa y paquetes de choque soportan la reconstrucción de eventos y la puntuación de riesgo para programas de telemática de seguros.
- Financiación de automóviles y recuperación de activos: formato montado en batería y reportes en búfer ayudan a localizar vehículos financiados y gestionar recuperaciones.
- Gestión de flotas en áreas con cobertura intermitente: gran búfer de mensajes y reportes comprimidos mantienen la telemetría del vehículo intacta hasta que Plaspy recibe los datos.
- Programas de comportamiento del conductor y seguridad: detección de conducción agresiva, alarmas de velocidad y telemetría inercial de alta frecuencia alimentan los paneles de Plaspy para coaching y cumplimiento.
- Flujos de trabajo con sensores Bluetooth: balizas BLE y accesorios para identificación del conductor, estado de accesorios o automatización basada en proximidad cuando se integra a través de Plaspy.

## Por qué elegir este rastreador con Plaspy

El GB100P ofrece una combinación equilibrada de GPS preciso, detección inercial de alta frecuencia y extensibilidad BLE que lo convierten en una opción sólida para despliegues de telemetría basados en Plaspy con énfasis en la detección de colisiones, análisis de UBI y una retención de datos robusta. Su diseño compacto, a prueba de agua y su batería interna de alta temperatura permiten una instalación discreta en el compartimento del motor y un rendimiento estable bajo condiciones desafiantes. Para flotas y aseguradoras que requieren telemetría continua y un almacenamiento confiable de mensajes en redes con cobertura intermitente, emparejar el GB100P con Plaspy proporciona seguimiento en tiempo real, telemetría y análisis posterior al incidente.

Nota sobre capacidades: el GB100P está optimizado para GPS/telemetría, datos de choques y accesorios BLE. Si necesita monitoreo de combustible integrado, salidas dedicadas de ignición o inmovilizador, revise las opciones de integración de Plaspy y los modelos de reemplazo recomendados \(GB130MG, GB100CG\) que Queclink sugiere para compras futuras y conjuntos ampliados de E/S.

