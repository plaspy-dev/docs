---
slug: /okb_tehnoavtomatika/mta_glonass_ver_12m
id: mta_glonass_ver_12m
sidebar_label: MTA-Glonass (ver. 12M)
sidebar_class_name: menu_item_tracker
---
# OKB Tehnoavtomatika - MTA-Glonass (ver. 12M)

![MTA-Glonass (ver. 12M)](./tracker.jpg)

El MTA-Glonass \(ver. 12M\) es un rastreador GPS compacto, compatible con Plaspy, diseñado para un monitoreo de vehículos y telemetría confiables. Pensado para gestión de flotas y aplicaciones anti‑robo, este terminal combina un receptor GPS de alta sensibilidad de 50 canales con un módulo de comunicaciones GSM 900/1800 para ofrecer seguimiento en tiempo real, registro de eventos y intercambio de datos bidireccional a través de los canales DATA, GPRS y SMS.

Su amplio rango de voltaje de entrada \(9–68 V\), batería recargable integrada y una extensa E/S hacen del MTA-Glonass \(ver. 12M\) un terminal ideal para instalación en vehículos automotrices e industriales donde se requieren telemetría ininterrumpida, monitoreo de combustible y control remoto del inmovilizador. Al ser un dispositivo compatible con Plaspy, se integra con la plataforma de Plaspy para actualizaciones de posición en tiempo real, informes de telemetría y alertas configurables.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real fiable y una integración de telemetría.
- Receptor GPS de alta sensibilidad de 50 canales para fijaciones de coordenadas precisas y posicionamiento estable.
- Conectividad GSM 900/1800 con canales DATA, GPRS y SMS para comunicación bidireccional y alertas remotas.
- Entrada DC amplia \(9–68 V\) y batería recargable interna de 600 mAh que proporciona ≥6 horas en modo de espera ante una pérdida de suministro.
- Amplias E/S para monitoreo de combustible, detección de ignición, registro de horas de motor y control remoto del inmovilizador.
- Bajo consumo de energía y carcasa compacta IP30 \(≤90 × 65 × 30 mm; masa ≤200 g\) adecuada para instalación discreta en vehículos.
- Amplio almacenamiento de eventos no volátil \(16,000–125,000 registros, según la memoria configurada\) para registro fuera de línea y carga posterior a Plaspy.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el MTA-Glonass \(ver. 12M\) se convierte en un activo completamente gestionado para la gestión de flotas, protección anti‑robo y reporte de telemetría. El dispositivo transmite coordenadas GPS y telemetría de eventos a través de GPRS/DATA o SMS a los servidores de Plaspy, donde los datos se procesan para mapas en tiempo real, geocercas, alertas e informes históricos. La configuración y los umbrales de alerta pueden establecerse en Plaspy para aprovechar las entradas y salidas a bordo del terminal.

- Actualizaciones de ubicación y telemetría en tiempo real vía GPRS/DATA \(con respaldo por SMS\) para una visibilidad continua de la flota.
- La entrada de ignición se usa para el control de reposo y el cómputo preciso de las horas de motor, reportadas a Plaspy para la programación de mantenimiento.
- Monitoreo de combustible mediante entrada ADC \(nivel directo del tanque\) y entradas de frecuencia/pulsos para caudalímetros o interfaces con la unidad de medición de nivel de combustible.
- Inmovilizador remoto o conmutación mediante la salida de colector abierto opcional \(hasta 50 V, 1.5 A\) para apoyar acciones anti‑robo desde Plaspy.
- Soporte de sensores de temperatura 1‑Wire \(opcional\) para telemetría de temperatura integrada en alertas y registros de Plaspy \(donde esté instalado\).

## Resumen técnico

| Conectividad | Módulo GSM con canales DATA, GPRS y SMS para comunicación bidireccional |
| --- | --- |
| Bandas | GSM 900 / 1800 |
| Alimentación y batería | Entrada DC amplia 9–68 V; batería recargable ≈600 mAh. Operación en modo de espera ≥6 horas; disponibilidad operativa \<1 minuto. Consumo de energía a 12 V: activo ≤110 mA, inactivo ≤35 mA, sleep ≤20 mA. |
| Interfaces | Entradas de contacto seco múltiples \(una con disparo negativo, una configurable negativo/positivo, entrada de ignición, disparo positivo para desconexión de batería a tierra, dos disparos negativos para sensores de frecuencia/pulsos de combustible\), una entrada analógica ADC \(≤12 V\), entrada 1‑Wire opcional, salida de colector abierto opcional \(≤50 V, ≤1.5 A\). |
| GNSS | Receptor GPS de alta sensibilidad de 50 canales \(detección precisa de coordenadas\). |
| Bluetooth | No especificado en la documentación del dispositivo \(sensores Bluetooth no incluidos en las especificaciones confirmadas\). |
| Gestión remota | Intercambio de datos bidireccional vía DATA/GPRS/SMS para telemetría remota, configuración y carga de eventos \(no se especifica FOTA/gestión web\). |
| Formato | Carcasa compacta IP30; dimensiones ≤90 × 65 × 30 mm; masa ≤200 g |

## Casos de uso

- Gestión de flotas y monitoreo de rutas: integre la ubicación GPS en tiempo real, ignición y horas de motor en Plaspy para optimizar la asignación de recursos y el mantenimiento.
- Monitoreo de combustible y prevención de fraude: combine lecturas de nivel de tanque con ADC y entradas de frecuencia/pulsos para detectar pérdidas de combustible y generar alertas en Plaspy.
- Anti‑robo e inmovilización remota: recibir alarmas de robo y accionar la salida de colector abierto desde Plaspy para inmovilizar el vehículo.
- Registro de eventos y cumplimiento: almacenar grandes volúmenes de registros de eventos en el dispositivo y cargarlos a Plaspy para trazabilidad y reportes regulatorios.
- Monitoreo de carga sensible a la temperatura: use la entrada opcional de temperatura 1‑Wire para telemetría de cadena de frío reportada a Plaspy \(donde esté instalado\).

## Por qué elegir este rastreador con Plaspy

Combinar el MTA-Glonass \(ver. 12M\) con Plaspy ofrece a los operadores de flotas un rastreador GPS robusto y de bajo consumo, con I/O de telemetría probadas y comunicaciones GSM confiables. Su amplio rango de voltaje y la batería de respaldo permiten mantener el seguimiento durante interrupciones de energía, mientras que las múltiples entradas permiten a Plaspy obtener telemetría relevante: estado de ignición para horas de motor, datos de combustible analógicos y de pulso para el monitoreo de combustible, y control por colector abierto para la inmovilización. El amplio almacenamiento a bordo garantiza que no se pierda información cuando la conectividad se interrumpe.

Para operaciones que requieren hardware compacto, posicionamiento satelital confiable e integración simple con GPRS/SMS, este rastreador GPS compatible con Plaspy ofrece beneficios prácticos de gestión de flotas sin complejidad innecesaria. Es especialmente adecuado para organizaciones que necesitan un registro sólido de eventos, control de combustible y control remoto de vehículos, combinado con las capacidades de análisis y alertas disponibles en la plataforma Plaspy.

