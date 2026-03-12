---
slug: /queclink/gl520mg
id: gl520mg
sidebar_label: GL520MG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GL520MG

![GL520MG](./tracker.png)

El Queclink GL520MG es un rastreador GPS impermeable y de larga duración, diseñado para el monitoreo de activos con bajo mantenimiento y detección ambiental. Compatible con Plaspy desde fábrica, el GL520MG combina una batería de varios años y una protección robusta IP67 con conectividad LTE Cat M1 / NB2 y respaldo a 2G, ofreciendo seguimiento en tiempo real y telemetría confiables para activos estáticos y móviles.

Diseñado para despliegues a gran escala donde las ventanas de mantenimiento son limitadas, el GL520MG ofrece posicionamiento GNSS preciso, sensores a bordo de temperatura y luminosidad para detección de manipulación y un acelerómetro de 3 ejes para alertas de movimiento. Cuando se integra con Plaspy, este rastreador se convierte en una solución llave en mano para la gestión de flotas, logística de cadena de frío, visibilidad de activos en almacenes y monitoreo seguro de activos de alto valor.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy con conectividad LTE Cat M1 y NB2, y respaldo EGPRS \(2G\) para una cobertura amplia.
- Extrema duración de la batería — operación en modo de espera multi‑año \(hasta siete años bajo perfiles de reporte conservadores\).
- Caja impermeable con clasificación IP67 y protección resistente, con carcasa magnética opcional para montaje flexible en superficies metálicas.
- Módulo GNSS interno u‑blox para posicionamiento de alta precisión \(CEP autónomo \< 2.5 m\) y TTFF rápido.
- Sensores integrados: temperatura y luz para monitoreo ambiental y detección de manipulación, además de un acelerómetro de 3 ejes para detección de movimiento.
- Gran búfer de mensajes \(hasta 10,000 mensajes\), LEDs visibles de GNSS/estado y confirmación por vibración para operaciones de campo simples.
- Soporte de protocolo Queclink \(@Track\), transporte TCP/UDP/SMS, compatibilidad con geocerca y generación de informes inteligentes para optimizar el consumo de energía.

## Cómo funciona con Plaspy

Cuando está conectado a Plaspy, el GL520MG transmite determinaciones de posición, telemetría de sensores y eventos de estado a la plataforma a través de canales TCP/UDP y SMS. Plaspy ingiere los mensajes formateados por Queclink del GL520MG, normaliza la telemetría y expone ubicación, temperatura, movimiento y estado del dispositivo en paneles, alertas e informes para los equipos operativos.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy vía TCP/UDP o SMS.
- Alertas de movimiento y manipulación procedentes del acelerómetro de 3 ejes y del sensor de luz activan notificaciones y flujos de trabajo en Plaspy.
- Telemetría de temperatura para la cadena de frío y monitoreo ambiental se envía a Plaspy para alertas por umbral y tendencias históricas.
- Salud del dispositivo y estado de la energía \(alertas de batería baja, informes de activación\) aparecen en el inventario de dispositivos de Plaspy y en las colas de mantenimiento.
- Eventos de geocerca \(hasta 20 regiones admitidas en el dispositivo\) crean disparadores automáticos en Plaspy para gestión de rutas, anti‑robo y flujos de cumplimiento.

## Resumen técnico

| Conectividad | LTE Cat M1 \(eMTC\) y Cat NB2 \(NB-IoT\) con respaldo EGPRS \(2G\) |
| --- | --- |
| Bands | Múltiples bandas LTE-FDD y cobertura regional NB2; EGPRS 850/900/1800/1900 MHz |
| Powers & Battery | Tres baterías de litio CR123A \(total 1,400 mAh\); corriente en espera \< 8 µA; duración estimada en espera: ~5 años con GNSS habilitado \(1 informe/día\), hasta 7 años usando únicamente ID de celda \(1 informe/día\) dependiendo de la red y las condiciones |
| Interfaces | Antenas LTE y GNSS internas; transporte de datos TCP/UDP/SMS; comandos de protocolo Queclink \(@Track\); informes programados; informes de activación y batería baja; soporte de geocerca \(hasta 20 regiones\) |
| GNSS | Módulo GNSS interno u‑blox; precisión autónoma \< 2.5 m CEP; sensibilidad: autónoma −147 dBm, seguimiento −162 dBm; TTFF rápido |
| Bluetooth | No soportado \(no se reporta BLE\) |
| Gestión remota | Configuración y comandos remotos vía protocolo Queclink; informes programados y ajustes inteligentes de frecuencia de informes para conservar la batería |
| Form factor | Rastreador compacto para activos: 87 × 51 × 30 mm \(87 × 51 × 33,5 mm con carcasa magnética\); peso 140 g \(160 g con carcasa magnética\); clasificación IP67 |
| Memoria | Búfer interno de hasta 10,000 mensajes |
| Rango de operación | Temperatura de operación −20°C a +60°C |
| Certificaciones | FCC, Verizon, PTCRB, AT&T, T‑Mobile, CE |

## Casos de uso

- Logística de cadena de frío: monitoreo de temperatura y seguimiento de posición para envíos y pallets refrigerados.
- Protección de activos de alto valor estáticos: larga vida en espera y detección de manipulación para equipos al aire libre, contenedores y activos en sitio.
- Seguimiento de pallets y contenedores: carcasa robusta y carcasa magnética opcional para fijación fácil a activos metálicos.
- Visibilidad de almacén e inventario: informes programados y detección de movimiento para rastrear movimientos de stock sin cambios frecuentes de batería.
- Flotas de activos: rastreo de remolques, equipo y activos no alimentados que requieren operación de batería multi‑anual y telemetría confiable.

## Por qué elegir este rastreador con Plaspy

El GL520MG es un rastreador GPS altamente eficiente que escala para despliegues a gran escala donde la duración de la batería, la robustez y la conectividad celular confiable son importantes. Como rastreador compatible con Plaspy, se integra sin problemas a los flujos de trabajo de seguimiento y telemetría en tiempo real de Plaspy, proporcionando fijaciones GNSS precisas, datos de temperatura y movimiento, al tiempo que minimiza la carga de mantenimiento. Esta combinación respalda la gestión de flotas y la visibilidad de activos, al mismo tiempo que habilita alertas anti‑robo e informes operativos sin necesidad de frecuentes visitas de campo.

Si bien el GL520MG se centra en telemetría de larga duración como temperatura, movimiento y detección de manipulación, Plaspy puede agregar sus datos junto con otros dispositivos que ofrecen capacidades adicionales — por ejemplo, eventos de encendido o inmovilizador, monitoreo de combustible o sensores Bluetooth — proporcionando a los equipos de operaciones una única vista para un control integral de activos. Elija el GL520MG con Plaspy cuando necesite posicionamiento preciso, clasificaciones de carcasa robustas, certificaciones celulares probadas y reportes optimizados para consumo de energía en despliegues multianuales.

