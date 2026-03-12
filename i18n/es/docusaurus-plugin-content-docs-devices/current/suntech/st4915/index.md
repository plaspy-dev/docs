---
slug: /suntech/st4915
id: st4915
sidebar_label: ST4915
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4915

![ST4915](./tracker.jpg)

La serie ST4915 de ST es un rastreador GPS robusto y de larga vida diseñado para la monitorización de activos sin supervisión y es compatible con Plaspy desde el inicio. Construido alrededor de una batería primaria Li‑SOCl2 de alta capacidad y radios IoT modernos \(LTE Cat M1 / NB‑IoT con retroceso a 2G\), el ST4915 ofrece operación multianual de bajo mantenimiento para remolques, contenedores, equipos y otros despliegues de activos remotos donde la fiabilidad y la longevidad de la batería son críticas.

Los usuarios de Plaspy pueden añadir el ST4915 a flotas de vehículos y activos para habilitar el seguimiento en tiempo real, recopilación de telemetría y alertas basadas en eventos sin necesidad de frecuentes cambios de batería. Con un receptor GNSS u‑blox de 56 canales, entradas/salidas flexibles \(entrada de encendido, entradas de puerta/pánico\), Bluetooth y asistencia Wi‑Fi opcionales, y actualizaciones de firmware OTA, la familia ST4915 está optimizada para la gestión de flotas, flujos de trabajo anti‑robo y proyectos de telemetría a largo plazo.

## Aspectos clave

- Vida de batería excepcional: hasta 10 años de operación autónoma \(modelo principal, perfil de informe típico\), minimizando el mantenimiento y los ciclos de sustitución.
- Compatible con Plaspy: transmite GNSS y telemetría sobre TCP/UDP para una integración fluida con las herramientas de seguimiento en tiempo real e informes de Plaspy.
- Robusto y confiable: opciones de carcasa IP67 / IP65, cumplimiento SAE‑J1455 frente a golpes y vibraciones, y rango de temperatura industrial para entornos exigentes.
- GNSS de alta precisión: receptor u‑blox de 56 canales con AGPS y precisión de ubicación de ~±2,5 m CEP en condiciones normales.
- Entradas y sensores flexibles: entrada de encendido, entradas de puerta y pánico, acelerómetro de 3 ejes para detección de movimiento, y sensores ambientales opcionales.
- Diseño de bajo consumo: corriente en modo de suspensión ultra baja \(\<10 µA\) y reporte configurable para maximizar la vida de la batería para la gestión de flotas y el rastreo de activos.
- Ayudas de conectividad opcionales: la variante ST4915B añade Bluetooth 5.0 \(BLE\) y Wi‑Fi de 2,4 GHz opcional para mejorar la geolocalización y la integración de sensores Bluetooth.

## Cómo funciona con Plaspy

El ST4915 envía posiciones GNSS y telemetría a Plaspy usando transporte IoT estándar \(TCP/UDP\). Plaspy ingiere la ubicación, el movimiento y los eventos de entrada digital del dispositivo y los pone a disposición en paneles, mapas y flujos de trabajo automatizados. Los intervalos de informe pueden ajustarse tanto en el firmware del dispositivo como en Plaspy para equilibrar la visibilidad en tiempo real y la duración de la batería.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas sobre LTE Cat M1 / NB‑IoT \(con retroceso a 2G\) a los servidores de Plaspy.
- Detección de movimiento y impactos mediante el acelerómetro de 3 ejes integrado para alertas basadas en eventos y monitorización anti‑robo.
- Entradas de encendido y de puerta/pánico reportadas a Plaspy para monitorización del estado del motor y correlación de eventos de seguridad.
- Sensores Bluetooth opcionales \(ST4915B\) y asistencia Wi‑Fi permiten el reenvío de datos de temperatura, presencia y proximidad a Plaspy.
- Los canales de telemetría pueden usarse para monitorizar combustible y otras integraciones con sensores externos cuando se combinan con sensores y cableado adecuados.

## Resumen técnico

| Modelos | ST4915 \(standard\), ST4915S \(short battery\), ST4915B \(BLE & optional Wi‑Fi\) |
| --- | --- |
| Conectividad | LTE Cat M1 & NB‑IoT con 2G fallback \(transporte TCP/UDP\) |
| Bandas | Conjunto amplio de bandas globales LTE Cat M1 / NB‑IoT; soporte de bandas 4G global \(la lista específica varía según la variante\) |
| Alimentación y batería | Batería primaria Li‑SOCl2 de 3.6V — modelo principal 57 Ah; opción ST4915S ~19 Ah; diseño para vida multianual \(ejemplo: hasta 10 años con una tasa de informes limitada\) |
| Consumo de energía | Activo: ~30–60 mA; Sueño: ~3,5 mA; Sueño profundo: &lt;10 µA |
| GNSS | Receptor u‑blox GNSS de 56 canales con AGPS; precisión ~±2,5 m \(CEP\); TTFF frío &lt;35 s, tibio/caliente &lt;1 s; sensibilidad: seguimiento -167 dBm, reacquisición -160 dBm, adquisición -149 dBm |
| Interfaces | Entrada de encendido, botón de pánico, entradas de sensor de puerta, encendido/apagado con imán, tres LEDs \(red, GPS, power\) |
| Sensores | Acelerómetro de 3 ejes integrado; sensores ambientales opcionales \(temperatura, humedad, luz, presión barométrica\) en variantes selectas |
| Bluetooth & Wi‑Fi | ST4915B: Bluetooth 5.0 \(BLE\) opcional; Wi‑Fi 2.4 GHz opcional \(B/G/N\) para asistencia de geolocalización |
| Gestión remota | Actualizable por aire \(OTA\) |
| Carcasa y durabilidad | IP67 \(sin sensor de humedad\) o IP65 \(con sensor de humedad\); probado SAE‑J1455 frente a golpes y vibraciones; rango de operación -30 °C a +85 °C |
| Factor de forma | Estándar: 62 × 258 × 61 mm; peso ≈ 714 g |

## Casos de uso

- Seguimiento de remolques y contenedores: vida de batería prolongada y carcasa con grado IP permiten reportes de ubicación durante años sin supervisión y alertas anti‑robo.
- Monitoreo de maquinaria y equipos pesados: la entrada de encendido y los datos del acelerómetro respaldan la gestión de flotas y la planificación del mantenimiento.
- Flotas de activos fuera de red: telemetría desplegable para activos fuera de red, donde una operación multianual reduce la carga operativa.
- Cadena de frío o monitoreo ambiental \(ST4915B o variantes con sensores\) — sensores Bluetooth y sensores opcionales de temperatura/humedad reportan telemetría ambiental a Plaspy.
- Flujos de seguridad y anti‑robo — entradas de movimiento, puerta y pánico alimentan alertas de Plaspy y respuestas disparadas por geovallas para una recuperación rápida.

## Por qué elegir este rastreador con Plaspy

La serie ST4915 combina una batería primaria de larga vida con radios IoT modernos para ofrecer un rastreador GPS de bajo mantenimiento que se integra a la perfección con Plaspy para la gestión de flotas y el monitoreo de activos. Su diseño robusto y su rendimiento GNSS probado proporcionan un seguimiento en tiempo real confiable y fijaciones de posición precisas incluso en entornos desafiantes, mientras que los modos de consumo ultrabajo y el reporting configurable mantienen bajos los costos operativos y las visitas de servicio.

Para las organizaciones que usan Plaspy, el ST4915 ofrece una plataforma de telemetría escalable: la entrada de encendido y las entradas digitales proporcionan el estado del motor y de la puerta, los datos del acelerómetro permiten detección de movimiento y manipulación, y los sensores Bluetooth opcionales amplían la funcionalidad para casos de uso basados en temperatura o proximidad. Las actualizaciones de firmware OTA y el transporte TCP/UDP estándar facilitan la implementación y la gestión del ciclo de vida, haciendo del ST4915 una opción práctica para la gestión de flotas a largo plazo, protección anti‑robo, recopilación de telemetría y programas de seguimiento de activos.

