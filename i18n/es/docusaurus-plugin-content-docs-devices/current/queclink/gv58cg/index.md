---
slug: /queclink/gv58cg
id: gv58cg
sidebar_label: GV58CG
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV58CG

![GV58CG](./tracker.png)

# Queclink GV58CG GNSS Telematics Tracker — Plaspy compatible

El GV58CG es un rastreador GNSS compacto y rentable, diseñado específicamente para la gestión de flotas y la seguridad de vehículos. Diseñado para una fácil integración con Plaspy, el GV58CG ofrece seguimiento en tiempo real, telemetría y funciones de control del vehículo en un formato compacto. Su conectividad LTE Cat 1 con retroceso a 2G y su diseño con múltiples antenas internas proporcionan una transmisión de datos fiable en coberturas de red amplias, lo que lo hace ideal para aplicaciones de gestión de flotas, alquiler de vehículos y recuperación de vehículos robados.

Los integradores y operadores de flotas valorarán las entradas/salidas y el soporte para accesorios prácticos: detección de encendido, control de corte de combustible, una única entrada analógica para combustibles o lecturas de sensores, e identificación del conductor mediante iButton de 1‑wire o Bluetooth Low Energy \(BLE\). BLE 5.2 nativo permite que el GV58CG trabaje con sensores de temperatura, humedad, nivel de combustible e inclinación de Queclink y sus socios, ampliando los casos de uso de telemetría y anti‑robo cuando se utiliza junto con Plaspy para monitorización centralizada e informes.

## Aspectos clave

- Compatible con Plaspy para una integración de seguimiento en tiempo real y gestión de flotas sin fisuras.
- LTE Cat 1 con retroceso EGPRS garantiza conectividad continua y entrega oportuna de telemetría.
- GNSS de alta sensibilidad de u‑blox \(GPS/GLONASS/Galileo/BeiDou\) con precisión de posición CEP &lt; 2.0 m.
- Detección de encendido y control de corte de combustible que habilitan flujos de anti‑robo e inmovilizador.
- BLE 5.2 y soporte 1‑wire para identificación del conductor y monitorización de combustible basada en sensores BLE, junto con lectura de temperatura e inclinación.
- Formato compacto y preparado para ocultación \(86.7 x 46.4 x 18.1 mm\) con batería interna Li‑Polymer de respaldo para reportes ante fallos de energía.
- Alarmas y reportes avanzados \(geocerca, remolque, detección de accidente con logging de datos\) para telemetría de flota proactiva.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el GV58CG transmite la ubicación y la telemetría del vehículo a su panel de Plaspy mediante protocolos telemáticos estándar \(TCP, UDP, SMS\). Plaspy ingiere actualizaciones de posición, eventos de estado y telemetría de sensores, habilitando el seguimiento en tiempo real, alertas, análisis e informes históricos para los gestores de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real mediante LTE Cat 1 \(con retroceso a 2G\) hacia Plaspy para un seguimiento continuo.
- Detección de encendido \(entrada digital positiva\) reportada a Plaspy para eventos de encendido/apagado del motor y registros de turnos de conductor.
- Monitoreo de combustible mediante una única entrada analógica, además de sensores de nivel de combustible BLE opcionales; Plaspy muestra tendencias de combustible y alertas.
- El inmovilizador remoto y el control de corte de combustible pueden ejecutarse mediante comandos de salida digital configurables emitidos desde Plaspy.
- Sensores BLE y identificación del conductor mediante iButton se integran en los flujos de trabajo de Plaspy para el monitoreo del entorno de activos y la atribución del conductor.

## Resumen técnico

| Conectividad | LTE‑FDD \(Cat 1\) con retroceso a EGPRS |
| --- | --- |
| Bandas | LTE B1/B2/B3/B4/B5/B7/B8/B20/B28; EGPRS cuádruple banda 850/900/1800/1900 MHz |
| Alimentación y batería | Funcionamiento 8 V – 32 V DC; batería interna Li‑Polymer de respaldo 190 mAh para alarmas/informes de bajo consumo |
| Interfaces | 1 entrada digital positiva \(encendido\), 2 entradas digitales negativas \(una configurable como analógica\), 1 salida digital de drenaje abierto \(máx. 150 mA\), 1 salida digital con retención \(reservada\), micro USB \(configuración/actualización/debug\), 1‑wire \(iButton, sensores de temperatura 1‑wire\) |
| GNSS | GNSS integrado de u‑blox \(GPS/GLONASS/Galileo/BeiDou\). Sensibilidad: arranque en frío −148 dBm, arranque en caliente −160 dBm, seguimiento −167 dBm. Precisión de posición autónoma &lt; 2.0 m CEP. TTFF: 24 s frío, 1 s caliente \(cielo despejado\) |
| Bluetooth | BLE 5.2 para identificación del conductor y accesorios BLE \(temperatura, humedad, nivel de combustible, sensores de inclinación\) |
| Protocolos y reportes | TCP, UDP, SMS; informes programados \(hora/distancia/kilometraje\), geocerca \(hasta 20 circulares + 20 poligonales\), alarmas especiales, alarma de remolque, detección de colisiones con registro de datos del accidente |
| Ambiente y tamaño | Dimensiones 86.7 x 46.4 x 18.1 mm; peso 80 g; temperatura de operación −30 °C a +70 °C; almacenamiento −40 °C a +80 °C |
| Antenas e indicadores | Antenas internas para celular, GNSS y BLE; LEDs CEL, GNSS y Power |
| Certificaciones | FCC, Anatel |

## Casos de uso

- Antirrobo y inmovilización de flotas — detección de encendido y control de corte de combustible combinados con comandos remotos de Plaspy para detener usos no autorizados.
- Alquiler y leasing de coches — identificación del conductor \(iButton o BLE\) y registro de viajes/eventos para la responsabilidad y facturación del arrendatario.
- Recuperación de vehículos robados y rastreo de vehículos robados — rastreo en tiempo real continuo y notificaciones de remolque/alarma.
- Logística y gestión de rutas — informes programados, alertas de geocerca y telemetría analítica para el cumplimiento de rutas y el monitoreo de entregas.
- Monitoreo de activos y entorno — sensores BLE de temperatura/humedad/combustible para mercancía sensible y monitoreo del nivel de combustible integrados en los paneles de Plaspy.

## Por qué elegir este rastreador con Plaspy

El GV58CG combina hardware práctico con características de telemática probadas para ofrecer un seguimiento en tiempo real y telemetría de vehículos confiables cuando se usa con Plaspy. Su enlace celular LTE Cat 1 con retroceso a 2G garantiza que su flota permanezca conectada en entornos de red variados, mientras que el motor GNSS de u‑blox proporciona datos de ubicación precisos necesarios para una gestión de flotas exacta y recuperación de vehículos robados. El soporte para encendido, entradas analógicas y accesorios BLE significa que puede implementar monitoreo de combustible, telemetría y flujos de trabajo de inmovilizador sin añadir equipo voluminoso.

Para operadores de flotas e integradores, el GV58CG destaca como un rastreador compacto y flexible que simplifica el despliegue. Los usuarios de Plaspy obtienen visibilidad centralizada de ubicación, telemetría y alarmas, lo que permite una gestión de flotas proactiva, menor riesgo de robo y un monitoreo de combustible más inteligente. La batería interna del dispositivo, su rango de operación robusto y las certificaciones de cumplimiento lo hacen apto para despliegues a gran escala y flotas mixtas donde la fiabilidad y la compatibilidad son clave.

