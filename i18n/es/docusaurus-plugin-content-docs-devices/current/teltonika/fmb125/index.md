---
slug: /teltonika/fmb125
id: fmb125
sidebar_label: FMB125
sidebar_class_name: menu_item_tracker
---
# Teltonika - FMB125

![FMB125](./tracker.png)

# FMB125

El FMB125 es un rastreador GPS compacto y profesional de Teltonika, diseñado para la gestión de flotas y telemetría avanzada. Compatible con Plaspy desde el inicio, el FMB125 ofrece un seguimiento en tiempo real fiable y opciones de integración flexibles, desde la identificación del conductor mediante RFID hasta la telemetría de sensores seriales, lo que lo hace especialmente adecuado para logística, flotas de servicio y gestión de activos, donde son esenciales datos consistentes de ubicación y uso.

El dispositivo combina conectividad celular 2G de doble SIM con interfaces serial RS232/RS485, entrada de impulsos para medidores de combustible, RFID a bordo y soporte para 1‑wire. Para operaciones que requieren cobertura global más allá de las redes celulares, el FMB125 puede funcionar con un módem satelital Iridium Edge® a través del puerto RS232. Tenga en cuenta que el FMB125 figura como fin de vida útil \(EOL\); se recomiendan reemplazos más modernos 4G/LTE-M \(FMC125, FMM125\) para despliegues a largo plazo.

## Características clave

- Compatible con Plaspy: ingestión fluida de ubicaciones GNSS y telemetría para seguimiento en tiempo real e generación de informes.
- Conectividad celular 2G de doble SIM para una conectividad resiliente y costos de roaming reducidos en las regiones compatibles.
- Interfaces serial RS232 y RS485 permiten la integración de dispositivos de terceros y la recopilación avanzada de telemetría.
- Entrada de impulsos para monitoreo preciso de combustible a partir de medidores de caudal y sensores de pulso.
- RFID a bordo y soporte 1‑wire para flujos de trabajo rápidos de identificación de conductores o activos.
- Opción de respaldo satelital vía Iridium Edge® a través de RS232 para cobertura más allá de las redes terrestres.
- Diseño compacto orientado a vehículos, con antena GNSS integrada y opciones de cable de alimentación para una instalación sencilla.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el FMB125 transmite datos de posición GNSS y telemetría a través de enlaces celulares o satelitales hacia la plataforma de Plaspy para seguimiento en tiempo real, alertas e informes históricos. Plaspy puede consumir datos de sensores seriales y entradas de pulso proporcionados por el FMB125, lo que permite a los gestores de flotas combinar la ubicación con métricas operativas como el consumo de combustible y los eventos de identificación de conductores.

- Actualizaciones de ubicación y telemetría en tiempo real a Plaspy para mapeo en vivo y alertas de geocerca.
- Datos de entrada de impulsos \(medidores de caudal de combustible\) transmitidos como telemetría para monitoreo y reporte de combustible.
- Integración de sensores serial RS232/RS485: temperatura, gateways CAN y otros dispositivos de terceros \(los datos se envían a Plaspy\).
- Eventos RFID y 1‑wire para identificación de conductores y activos y registro de accesos en los flujos de trabajo de Plaspy.
- Respaldo satelital vía Iridium Edge® \(conectado por RS232\) para ampliar la cobertura de seguimiento donde no haya cobertura celular.
- Configuración remota y gestión de firmware mediante Teltonika FOTA WEB y Configurator, con la coordinación de ajustes y actualizaciones con los procedimientos de integración de Plaspy.

## Visión técnica

| Conectividad | Celular 2G \(doble SIM\). Conectividad satelital opcional vía módem Iridium Edge® a través de RS232. |
| --- | --- |
| Bandas | 2G \(GSM\) — las bandas de frecuencia específicas dependen de la variante/región del producto. |
| Alimentación y batería | Alimentado por el vehículo. Se entrega con cable de alimentación en los paquetes habituales; no se especifica una batería de respaldo interna en la documentación del producto. |
| Interfaces | Puertos serial RS232 y RS485; entrada de impulsos para medidores de combustible; 1‑wire; lector RFID a bordo. |
| GNSS | Receptor GNSS \(GPS\); antena GNSS externa incluida en algunas variantes. |
| Bluetooth | No especificado para este modelo. |
| Gestión remota | Teltonika FOTA WEB y Teltonika Configurator para actualizaciones de firmware y configuración. Recursos de soporte disponibles en la wiki de Teltonika. |
| Factor de forma | Rastreador compacto para vehículos, diseñado para instalarse en automóviles, furgonetas y camiones. |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real de vehículos, optimización de rutas y reporte de telemetría operativa mediante Plaspy.
- Monitoreo de combustible: conectar medidores de caudal de combustible por impulsos a la entrada de impulsos para reportar consumo y detectar anomalías.
- Identificación de conductores y control de acceso: soporte RFID y 1‑wire para registrar eventos de conductor y vincular viajes a registros de personal.
- Telemetría avanzada: RS232/RS485 permiten la integración con adaptadores CAN, sensores de temperatura u otros dispositivos de telemetría de terceros para obtener datos completos del vehículo.
- Monitoreo remoto de activos más allá de las redes celulares mediante la integración del módem satelital Iridium Edge® cuando se requiere cobertura continua.

## Por qué elegir este rastreador con Plaspy

El FMB125 ofrece una opción compacta y fácil de integrar para flotas que requieren un seguimiento en tiempo real fiable, telemetría y monitoreo de combustible, combinados con la flexibilidad de la conectividad serial. Su diseño de doble SIM ayuda a mantener la disponibilidad de la conectividad celular, mientras que RS232/RS485 y el soporte RFID permiten incorporar una amplia gama de datos de vehículos y sensores en Plaspy para análisis más completos y control operativo. Para operaciones que requieren alcance verdaderamente global, la capacidad del FMB125 para conectarse a un módem satelital Iridium Edge® ofrece una vía práctica para ampliar la cobertura.

Aunque el FMB125 ya está en EOL, su conjunto de funciones probado y su compatibilidad con Plaspy lo convierten en una opción sólida para despliegues existentes. Para nuevos proyectos o cuando se prefiera conectividad 4G/LTE-M, considere la familia FMC125 \(4G\) o FMM125 \(LTE Cat M1/NB‑IoT\) de Teltonika como alternativas actualizadas que simplifican el soporte de red a largo plazo y la escalabilidad futura. En cualquiera de los casos, la integración y la gestión del ciclo de vida se simplifican a través de las herramientas Teltonika FOTA WEB y Configurator, y el soporte de la plataforma de Plaspy para telemetría de rastreadores GPS garantiza una implementación fluida y operación continua.

