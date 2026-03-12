---
slug: /queclink/gv300
id: gv300
sidebar_label: GV300
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV300

![GV300](./tracker.png)

El GV300 de Queclink es un rastreador GPS probado, compatible con Plaspy, diseñado para telemática de vehículos de alta exigencia. Como rastreador de vehículos de tercera generación de Queclink y uno de los productos más vendidos, el GV300 ofrece seguimiento en tiempo real, telemetría robusta y opciones de E/S flexibles que lo convierten en una base ideal para la gestión de flotas impulsada por Plaspy, la recuperación de vehículos robados y aplicaciones de cadena de frío.

Construido alrededor de un receptor GNSS de alta sensibilidad de u‑blox y conectividad GSM cuád‑banda, el GV300 combina hardware compacto de grado vehicular, un amplio rango de voltaje de operación y un conjunto completo de interfaces cableadas. Cuando se combina con Plaspy, el GV300 ofrece alarmas configurables, informes programados, captura de datos CAN y analógicos, y capacidades de control remoto que respaldan flujos de trabajo anti‑robo, monitorización de encendido y casos de uso telemáticos avanzados.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy con implementación probada en la gestión de flotas, telemática de seguros y recuperación de vehículos robados.
- Seguimiento en tiempo real e informes programados \(tiempo/distancia/kilometraje\) vía TCP/UDP o SMS para comunicaciones resilientes.
- Amplias E/S cableadas: detección de encendido, múltiples entradas/salidas digitales, entradas analógicas y RS232 para la integración de accesorios y telemetría.
- GNSS de alta sensibilidad \(u‑blox\) con una precisión de posición típica inferior a 2,5 m CEP para datos de ubicación fiables.
- Formato compacto de grado vehicular con rango de voltaje de operación amplio \(8–32 V DC\) y batería interna de respaldo para eventos de pérdida de energía.
- Soporta la captura de datos CAN \(a través de un adaptador CAN\) y sensores de temperatura/humedad compatibles para monitorización de cadena de frío o ambiental.
- Alarmas operativas, incluidas geocerca, remolque, desconexión de antena, detección de colisiones y monitorización del comportamiento de conducción.

## Cómo funciona con Plaspy

El GV300 envía telemetría rica y datos de eventos a la plataforma de Plaspy utilizando protocolos de transmisión estándar y reportes en cola. Plaspy procesa la posición GNSS, cambios de estado digitales/analógicos, marcos CAN \(cuando se utilizan\) y alarmas del dispositivo para alimentar paneles de control, alertas y flujos de trabajo automatizados para gestores de flotas y equipos de seguridad.

- Actualizaciones de ubicación y telemetría en tiempo real mediante transporte TCP/UDP y SMS soportados por el dispositivo.
- Detección de encendido y seguimiento del estado usando la entrada de disparo positiva dedicada para eventos de motor/encendido.
- Monitoreo de combustible y telemetría de otros sensores analógicos posible a través de entradas analógicas o captura de datos CAN para la integración con los informes de Plaspy.
- Flujos de inmovilización remotos o detención habilitados mediante control OTA de salidas digitales \(control remoto de salidas compatible\).
- Integración de sensores de temperatura y humedad a través de accesorios de terceros para monitorización de cadena de frío disponible en los paneles de Plaspy.

## Resumen técnico

| Conectividad | GSM cuád‑banda \(850/900/1800/1900 MHz\), GPRS de clase multi‑slot 12; transporte TCP/UDP/SMS |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz \(GSM/GPRS\) |
| Potencia y Batería | Voltaje de operación 8–32 V DC; batería de respaldo Li‑Polímero interna, 250 mAh |
| Interfaces | 1 entrada digital de disparo positiva \(encendido\), 2 entradas digitales de disparo negativa, 1 entrada configurable \(negativa o analógica 0–16 V\), 1 entrada analógica \(0,3–16 V\), 2 salidas digitales de drenaje abierto \(150 mA\), 1 salida digital con enclavamiento, 1 puerto RS232 serial \(Molex de 16 pines; protocolo GARMIN soportado\), mini‑USB \(firmware/debug\), salida de audio diferencial y entrada de un solo extremo |
| GNSS | Receptor GNSS todo en uno de u‑blox; sensibilidad Autonomous -147 dBm, Hot start -156 dBm, Tracking -162 dBm; precisión de posición típica &lt; 2,5 m CEP |
| Bluetooth | No hay sensores Bluetooth integrados \(el dispositivo se centra en la integración de sensores cableados y CAN\) |
| Gestión remota | Actualización/depuración de firmware vía mini‑USB; control OTA remoto de salidas digitales; informes y alarmas configurables a través de red o SMS |
| Formato y entorno | 80 × 48 × 25 mm, 72 g; rango de temperatura operativo -30 °C a +80 °C; almacenamiento -40 °C a +80 °C; 0–95% de humedad no condensante |

## Casos de uso

- Gestión de flotas: seguimiento de vehículos en tiempo real, informes programados de rutas, monitorización del comportamiento de conducción y alertas de geocerca para supervisión operativa.
- Antirrobo y recuperación de vehículos robados: detección de encendido, alarmas de remolque y desconexión de antena, y control remoto de salidas para apoyar flujos de inmovilización vía Plaspy.
- Logística de cadena de frío: soporte de sensores de temperatura y humedad a través de accesorios de terceros para monitorización de cadena de frío y trazabilidad de envíos.
- Telemática de seguros: detección de colisiones, eventos de frenado/aceleración bruscos y telemetría de trayectos para programas de seguros basados en el uso y reconstrucción de incidentes.
- Telemetría de vehículos y monitoreo de combustible: entradas analógicas y captura CAN permiten telemetría del nivel de combustible, del motor y de sensores auxiliares para alimentar los paneles de Plaspy.

## Por qué elegir este rastreador con Plaspy

El GV300 de Queclink ofrece un equilibrio entre durabilidad, flexibilidad de E/S y un firmware maduro que se integra de manera eficaz con la plataforma de Plaspy para entregar seguimiento y telemetría en tiempo real accionables. Su rendimiento GNSS de grado vehicular y el soporte de sensores cableados \(analógicos/CAN/RS232\) permiten capturar ubicación precisa y datos de sensores enriquecidos sin depender de sensores Bluetooth. Para la gestión de flotas y programas anti‑robo, la entrada de encendido, las alarmas de remolque y de colisión y el control remoto de salidas simplifican las integraciones de inmovilización y seguridad. Combinado con las capacidades de alerta, geocercas e informes de Plaspy, el GV300 es una opción fiable para organizaciones que requieren un seguimiento de vehículos escalable, preciso y telemetría integral en despliegues de producción.

