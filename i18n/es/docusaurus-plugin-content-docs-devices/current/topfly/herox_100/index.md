---
slug: /topfly/herox_100
id: herox_100
sidebar_label: HeroX 100
sidebar_class_name: menu_item_tracker
---
# TopFly - HeroX 100

![HeroX 100](./tracker.png)

HeroX 100 es un rastreador GPS cableado compatible con Plaspy, diseñado para implementaciones exigentes de seguimiento de vehículos y activos. Con conectividad 4G CAT-1 \(respaldo 2G\), posicionamiento multi‑GNSS y un CEP autónomo &lt;1.5 m, HeroX 100 ofrece un rastreo GPS preciso y telemetría para seguimiento en tiempo real, gestión de flotas y aplicaciones anti‑robo.

Diseñado para integraciones que requieren entradas/salidas ricas y soporte flexible de sensores, el HeroX 100 combina telemetría CAN BUS \(FMS\) nativa, extensas interfaces digitales/analógicas y conectividad BLE 5.1 de largo alcance con los sensores BLE de TOPFLYtech y de terceros. Cuando se usa con Plaspy, este rastreador se convierte en un dispositivo llave en mano para control remoto de inmovilizador, monitoreo de combustible, identificación del conductor y reporte continuo de posición incluso durante caídas de la red.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con alta precisión multi-GNSS \(GPS + BeiDou + Galileo + QZSS\) y CEP autónomo &lt;1.5 m para rutas y geocercas precisas.
- Conectividad celular 4G CAT-1 con respaldo 2G para amplia cobertura de red y transmisión de telemetría segura.
- Seguimiento en tiempo real con actualizaciones cada 3 segundos y almacenamiento fuera de línea de hasta 49,000 puntos para conservar el historial ante pérdidas de conectividad.
- Amplias I/O y capacidad de expansión: múltiples I/O digitales, dos salidas de relé, entradas analógicas, puertos RS485, soporte 1‑wire iButton/temperatura y CAN BUS \(FMS\).
- Soporte BLE 5.1 de largo alcance para temperatura, humedad, sensores de puerta, relés inalámbricos y etiquetas de identificación del conductor—ideal para cadenas de frío y flujos de identificación del conductor.
- Funciones enfocadas en vehículos: detección de encendido, alertas de desconexión de encendido, entrada SOS, comportamiento de conducción y detección de accidentes mediante accelerómetro de 6 ejes, alarmas de velocidad y de remolque, y detección de interferencia en la red.
- Telemetría y seguridad de nivel empresarial: protocolos TCP/UDP/MQTT/SMS; opciones de cifrado que incluyen MD5 y AES256; actualizaciones de firmware FOTA para mantenimiento remoto.
- Hardware robusto y compacto con amplia entrada de alimentación \(DC 5V–32V\), batería interna de respaldo y amplio rango de temperatura de operación para uso en flotas y activos.

## Cómo funciona con Plaspy

HeroX 100 se integra con Plaspy para proporcionar datos continuos y accionables de vehículos y activos. El dispositivo transmite posiciones GNSS, telemetría CAN BUS, eventos de I/O y lecturas de sensores BLE a Plaspy mediante protocolos de transporte configurables. Plaspy ingiere esos datos para mapas en tiempo real, alertas, informes y flujos de trabajo automatizados utilizados en la gestión de flotas y operaciones anti‑robo.

- Actualizaciones de ubicación y telemetría en tiempo real, configurables hasta cada 3 segundos para un seguimiento de flota y despacho rápidos.
- Alertas de encendido, encendido/apagado y desconexión — Plaspy puede activar flujos de trabajo, notificaciones al conductor o indicadores de mantenimiento a partir de estos eventos.
- Telemetría de combustible y del vehículo a través de CAN BUS \(FMS\) — utilice paneles de Plaspy para monitorear el consumo de combustible, el odómetro, las RPM y otros datos del vehículo cuando estén disponibles.
- Control remoto del inmovilizador y relé — las salidas digitales del dispositivo permiten cortar el motor de forma remota y acciones anti‑robo gestionadas mediante comandos de Plaspy.
- Sensores Bluetooth — lectura de temperatura, humedad, sensores de puerta y ID del conductor desde accesorios BLE son transmitidos a Plaspy para monitoreo de la cadena de frío y auditoría de accesos.
- Detección de colisiones y alertas de seguridad — eventos del acelerómetro interno de 6 ejes y entradas SOS generan alarmas inmediatas en Plaspy para una respuesta rápida.

## Resumen técnico

| Conectividad | 4G CAT-1 con respaldo 2G |
| --- | --- |
| GNSS | GPS + BeiDou + Galileo + QZSS; rápido tiempo para la primera fijación; CEP autónomo &lt;1.5 m; informes con la frecuencia de cada 3 segundos; almacenamiento en búfer de hasta 49,000 puntos |
| Alimentación y batería | Entrada externa DC 5V–32V; batería interna de respaldo Li‑Polímero \(200 mAh\) |
| Interfaces | Múltiples I/O digitales \(entradas positivas y negativas\), dos salidas digitales para control de relé, dos entradas analógicas \(configurables como digitales\), dos puertos RS485, 1‑wire para sensor de temperatura y iButton de identificación de conductor \(hasta 8 canales\), CAN BUS \(FMS\), USB Tipo‑C para configuración |
| Bluetooth | BLE 5.1 de largo alcance; compatible con accesorios BLE de TOPFLYtech y dispositivos BLE de terceros |
| Sensores y seguridad | Acelerómetro interno de 6 ejes para comportamiento de conducción y detección de accidentes; compatibilidad de entrada SOS; detección de interferencia de red; alarmas de velocidad y de remolque |
| Protocolos y seguridad | TCP, UDP, MQTT, SMS; opciones de cifrado incluyendo MD5 y AES256; actualizaciones de firmware FOTA |
| Almacenamiento y extras | MicroSD opcional de hasta 128 GB; antena externa opcional y ranura para tarjeta SD para grabación de video |
| Forma y entorno | Compacto: 84,5 × 69,7 × 21,8 mm; protección IP41; rango de temperatura de operación −30°C a +80°C |

## Casos de uso

- Gestión de flotas y telemetría — ubicación en tiempo real, datos de combustible y del vehículo vía CAN BUS, insights sobre el comportamiento del conductor y generación de informes programados para la optimización de rutas.
- Anti‑robo e inmovilización — salidas de relé y control remoto vía Plaspy permiten flujos de trabajo de inmovilizador, alertas de manipulación y notificaciones de encendido/desconexión.
- Monitoreo de la cadena de frío — empareje sensores BLE de temperatura y humedad para mantener y reportar las condiciones de la carga sensibles a la temperatura a Plaspy.
- Identificación del conductor y control de acceso — iButton 1‑wire y etiquetas BLE de conductor para asignación automatizada de conductores, registro y seguimiento de cumplimiento.
- Activos y equipos especializados — RS485, entradas analógicas y conectividad CAN para telemetría personalizada e integraciones de sensores de terceros para vehículos industriales y remolques.

## Por qué elegir este rastreador con Plaspy

HeroX 100 es un rastreador GPS compacto y rico en funciones, diseñado para transportistas, operadores de flotas e integradores que necesitan hardware fiable compatible con Plaspy, con telemetría profunda y capacidades de I/O. Su rápida posición multi‑GNSS, conectividad 4G CAT‑1 con respaldo 2G, interfaces amplias y soporte para accesorios BLE lo hacen versátil para gestión de flotas, configuraciones de inmovilización anti‑robo, monitoreo de combustible y aplicaciones de cadena de frío. El almacenamiento en búfer integrado garantiza un seguimiento continuo ante lagunas de red, mientras FOTA, transporte cifrado y control remoto de salidas simplifican la implementación y el mantenimiento a gran escala. Cuando se empareja con Plaspy, HeroX 100 transforma datos a nivel de dispositivo en información operativa y flujos de trabajo seguros para una mejor visibilidad, seguridad y control de costos.

