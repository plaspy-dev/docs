---
slug: /queclink/gl501mg
id: gl501mg
sidebar_label: GL501MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GL501MG

![GL501MG](./tracker.png)

El Queclink GL501MG es un rastreador GPS compacto alimentado por batería, diseñado para el monitoreo de activos a largo plazo sin supervisión y es compatible con Plaspy desde el primer momento. Basado en la probada plataforma GL500MG, el GL501MG añade conectividad LTE Cat M1 / NB1 con respaldo 2G, carga inalámbrica Qi y Bluetooth Low Energy \(BLE\) para ofrecer seguimiento en tiempo real confiable y telemetría de bajo consumo para la gestión de lotes, cadena de frío y activos en almacenes.

Diseñado para durabilidad y bajo mantenimiento, el GL501MG combina un receptor GNSS interno u‑blox \(\<2.5 m CEP autónomo\), sellado IP67, sensores internos de temperatura y luz, y una corriente de espera ultrabaja para proporcionar hasta un año de vida en espera con un informe por día. Su carcasa sellada, antenas internas y la funda magnética opcional facilitan su despliegue manteniendo a la vez un flujo de datos seguro, compatible con Plaspy, para gestión de flotas, monitorización antirobo y telemetría ambiental.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con LTE Cat M1 / Cat NB1 y respaldo EGPRS \(2G\) para cobertura global y reportes de bajo consumo.
- Receptor GNSS u‑blox de alta sensibilidad con CEP autónomo \<2.5 m y TTFF rápido para un seguimiento en tiempo real fiable.
- Larga vida de batería gracias a una batería interna Li‑Polymer de 3.7V / 2400mAh y corriente de espera ultrabaja \(\<10 µA\) — hasta un año con 1 informe/día.
- BLE 4.2 incorporado para conectividad de accesorios y configuración, habilitando sensores Bluetooth y flujos de trabajo de proximidad.
- Carcasa impermeable IP67, sensores internos \(temperatura y luz\) y acelerómetro interno de 3 ejes para telemetría y detección de manipulación.
- Carga inalámbrica Qi \(5V/1A\) y motor vibratorio para una operación del usuario más cómoda; montaje opcional con funda magnética para superficies metálicas.
- Transporte de datos listo para Plaspy vía el protocolo @Track sobre TCP, UDP o SMS para soportar informes programados, eventos de activación y alertas.

## Cómo funciona con Plaspy

El GL501MG transmite la ubicación y la telemetría a bordo mediante el protocolo @Track y admite transporte TCP, UDP o SMS, lo que facilita la integración con los endpoints de ingestión de Plaspy. Una vez emparejado en Plaspy, el rastreador ofrece actualizaciones de ubicación frecuentes, señales de movimiento y manipulación, y lecturas de sensores internos, para que puedas monitorear activos en tiempo real y activar flujos de trabajo automatizados.

- Actualizaciones de localización y telemetría en tiempo real a través de LTE Cat M1/NB1 \(con respaldo 2G\) para una conectividad resiliente.
- Estado a bordo: movimiento, alarma de batería baja, manipulación \(sensor de luz + acelerómetro\) y informes de despertar para alertas anti-robos confiables.
- Telemetría del sensor de temperatura interna y del sensor de luz, adecuada para el monitoreo ambiental de cadena de frío o almacenes.
- Soporte BLE 4.2 para sensores Bluetooth y emparejamiento de accesorios para ampliar las capacidades de telemetría \(p. ej., sondas de temperatura o balizas\).
- Informes flexibles: informes programados, ajuste inteligente de la frecuencia de informes y hasta 20 regiones de geocerca internas para alertas de geocercas en Plaspy.

## Resumen técnico

| Conectividad | LTE Cat M1 \(eMTC\) y Cat NB1 \(NB-IoT\) con respaldo EGPRS \(2G\) |
| --- | --- |
| Bands / Velocidades de datos | Bandas globales Cat M1/Cat NB1 soportadas; DL/UL eMTC hasta 375 Kbps; NB1 opciones de menor tasa; respaldo 2G para cobertura heredada |
| Alimentación y batería | Batería interna Li‑Polymer 3.7V / 2400mAh; corriente de espera ultrabaja \<10 µA; entrada de carga Qi 5V/1A \(utilizar cargadores aprobados\) |
| Interfaces e indicadores | Botón de una única función \(encendido/estado\); indicadores LED GNSS y CEL; motor vibratorio interno para retroalimentación háptica |
| Sensores a bordo | Receptor GNSS u‑blox \(\<2.5 m CEP autónomo\), sensor de temperatura interna, sensor de luz, acelerómetro interno de 3 ejes \(detección de movimiento\) |
| GNSS | u‑blox GNSS, alta sensibilidad, TTFF rápido, CEP \<2.5 m \(autónomo\) |
| Bluetooth | BLE 4.2 para conectividad de accesorios y configuración \(sensores Bluetooth / balizas\) |
| Protocolo de datos y transporte | @Track protocol; transporte TCP, UDP, SMS para telemetría e informes de posición |
| Forma y durabilidad | Dimensiones: 87 × 51 × 30 mm \(estándar\) o 87 × 51 × 33.5 mm \(funda magnética\); Peso ≈150 g \(170 g versión imán\); IP67; rango de operación -20 °C a +60 °C |
| Certificaciones y Soporte | FCC, Verizon, CE, MIC; garantía de 1 año; soporte técnico de por vida de Queclink \(nota EOL a continuación\) |

## Casos de uso

- Gestión de flotas y rastreo de lotes: monitoriza remolques, equipos y vehículos estacionados con larga vida de batería y alertas de geocerca.
- Antirrobo y detección de manipulación: alertas de movimiento, detección de luz y manipulación, y informes de despertar integrados en Plaspy para una respuesta inmediata.
- Monitoreo ambiental de cadena de frío y almacenes: telemetría de temperatura interna e integración de sensores BLE para el seguimiento de las condiciones de la carga.
- Seguimiento de activos en espera remota: despliegues prolongados sin supervisión, donde los informes poco frecuentes preservan la vida de la batería y, al mismo tiempo, entregan ubicación y telemetría oportunas.

## Por qué elegir este rastreador con Plaspy

El GL501MG es un rastreador GPS compatible con Plaspy, orientado a una monitorización de activos de larga duración y bajo consumo con conectividad LTE IoT moderna. Su rendimiento probado del GNSS u‑blox y la alta sensibilidad proporcionan un seguimiento en tiempo real fiable, mientras que sensores internos y BLE amplían las capacidades de telemetría para monitoreo ambiental y detección de manipulación. El diseño sellado IP67, la conveniencia de la carga Qi y el montaje magnético opcional facilitan la instalación para la gestión de flotas y escenarios de lotes.

La conectividad a través de LTE Cat M1/NB1 con respaldo 2G, más el transporte @Track/TCP/UDP/SMS, facilita la integración con Plaspy, permitiendo alertas, eventos de geocerca y reportes programados. Para funciones como monitoreo de combustible, arranque o control remoto del inmovilizador, consulte su plan de integración con Plaspy y las opciones de accesorios; el GL501MG ofrece telemetría fiable y conectividad de sensores Bluetooth como base para esos flujos de trabajo.

Nota: el GL501MG cuenta con un aviso de fin de vida \(EOL\) / descontinuación por parte de Queclink. Queclink ha dejado de aceptar pedidos para este modelo y recomienda el GL521MG como alternativa. Queclink ofrece una garantía de un año y soporte técnico de por vida para los clientes afectados por la descontinuación. Para nuevas implementaciones, confirme disponibilidad y modelos de reemplazo recomendados con su proveedor o con el gerente de cuentas de Plaspy.

