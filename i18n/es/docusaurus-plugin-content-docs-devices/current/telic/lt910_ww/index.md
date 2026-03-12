---
slug: /telic/lt910_ww
id: lt910_ww
sidebar_label: LT910-WW
sidebar_class_name: menu_item_tracker
---
# Telic - LT910-WW

![LT910-WW](./tracker.jpg)

# LT910-WW IoT Terminal — Plaspy Compatible

El LT910-WW es un terminal IoT compacto e industrial diseñado para implementaciones globales de LTE con conmutación automática a 3G y 2G. Basado en el módulo Telit LE910C1-WWX, el LT910-WW ofrece soporte de banda ancha y diseño robusto para una conectividad celular fiable en entornos exigentes. Sus interfaces industriales, su amplio rango de alimentación, el portador de SIM bloqueable y su robusto rango de temperatura de operación lo convierten en una opción sólida para integraciones compatibles con Plaspy en la gestión de flotas, telemetría remota y flujos de trabajo antirrobo.

El LT910-WW se integra fácilmente con Plaspy para proporcionar transporte seguro de datos y reenvío de telemetría flexible. Aunque el terminal se centra en una conectividad celular robusta e I/O industriales, puede integrarse con receptores GNSS externos, sensores o sistemas del vehículo a través de RS232 o USB para actuar como un rastreador GPS o una pasarela de telemetría. Esto lo convierte en un dispositivo compatible con Plaspy ideal para clientes que requieren rastreo en tiempo real, conocimientos de gestión de flotas o integración con encendido, inmovilizador y monitoreo de combustible cuando se conectan periféricos adicionales.

## Aspectos destacad

- Conectividad compatible con Plaspy: LTE como enlace principal con respaldo 3G/2G para informes en la nube continuos y rastreo en tiempo real.
- Soporte global de banda ancha a través del módulo Telit LE910C1-WWX — diseñado para implementaciones IoT internacionales.
- Alimentación y rango térmico de grado industrial \(aprox. 5–32 V DC; -30 °C a +80 °C\) para entornos exigentes.
- Interfaces industriales estándar \(RS232 V.24/V.28 en Sub-D, USB\), para integrar receptores GNSS, telemetría de vehículos o sensores externos.
- Porta SIM bloqueable y conector de antena FME para instalaciones en campo fiables y resiliencia antirrobo.
- Modo de bajo consumo para aplicaciones con batería de respaldo o limitaciones de energía y escenarios de seguimiento de activos remotos.
- Carcasa industrial compacta facilita la instalación en vehículos, armarios o activos en campo para gestión de flotas y seguimiento de activos.

## Cómo funciona con Plaspy

El LT910-WW envía telemetría y datos de estado sobre LTE \(con respaldo 3G/2G\) a los puntos finales en la nube de Plaspy usando protocolos TCP/UDP estándar o HTTP\(S\) soportados por su instancia de Plaspy. Plaspy ingiere esos datos para proporcionar paneles, geocercas, alertas e informes históricos. Dado que el terminal expone interfaces RS232 y USB, puede conectar receptores GNSS, adaptadores CAN/OBD u otros módulos de sensores para proporcionar la telemetría posicional y analógica/digital que Plaspy espera para casos de uso de rastreador GPS y gestión de flotas.

- Actualizaciones en tiempo real de ubicación y telemetría — al combinarlo con un receptor GNSS externo o una fuente NMEA vía RS232/USB.
- Estado de encendido, puertas o alarma — alcanzable al integrar interfaces de vehículo o conversores E/S externos que alimenten a Plaspy a través del LT910-WW.
- Monitoreo de combustible y telemetría analógica — compatible cuando se conectan sensores de combustible externos o gateways ADC a las interfaces del terminal.
- Flujos de trabajo con inmovilizador remoto — posibles cuando el LT910-WW se combina con interfaces de control de vehículos y acciones de reglas en Plaspy.
- Sensores Bluetooth — aunque el LT910-WW no indique BLE integrado, Plaspy puede ingerir datos desde gateways BLE conectados vía USB o serie.

## Resumen técnico

| Conectividad | LTE con respaldo a 3G y 2G \(módulo: Telit LE910C1-WWX\) |
| --- | --- |
| Bandas | Soporta un gran número de bandas LTE globales a través del Telit LE910C1-WWX \(variante global de banda ancha\) |
| Potencia y Batería | Tensión de alimentación aprox. 5–32 V DC; modo de bajo consumo soportado. Batería de respaldo no especificada. |
| Interfaces | RS232 \(V.24/V.28\) en Sub-D, USB, portador de SIM bloqueable, conector de antena FME |
| GNSS | GNSS no especificado — se integra con receptores GNSS externos a través de RS232/USB para la funcionalidad de rastreador GPS |
| Bluetooth | No especificado; la integración BLE es posible a través de gateways USB/serie externos |
| Gestión Remota | Las características de gestión remota no están especificadas en el resumen del producto; admite telemetría remota típica a través de enlaces celulares |
| Módulo | Basado en el módulo celular Telit LE910C1-WWX |
| Temperatura de operación y formato | Rango de temperatura de operación -30 °C a +80 °C; carcasa industrial compacta adecuada para instalación en vehículos o activos |

## Casos de uso

- Conectividad global de flotas — ofrece un enlace celular consistente para la gestión de flotas basada en Plaspy, con LTE como enlace principal y respaldo 3G/2G para cobertura de roaming.
- Telemetría de activos remotos — sensores industriales y unidades GNSS de terceros envían telemetría a través de RS232/USB para el monitoreo centralizado en Plaspy.
- Flujos de trabajo antirrobo e inmovilización de vehículos — integre módulos de inmovilizador o relés externos y utilice Plaspy para activar acciones y alertas del inmovilizador.
- Instalaciones temporales o portátiles — el modo de bajo consumo y el amplio rango de tensión de entrada permiten desplegar sitios remotos, flotas temporales o equipos alquilados con facilidad.
- Monitoreo de máquinas industriales — utilice RS232 para recolectar datos de la máquina y luego enviar telemetría serializada a Plaspy para análisis y alertas.

## Por qué elegir este rastreador con Plaspy

El LT910-WW ofrece un equilibrio práctico entre hardware robusto y cobertura celular global, lo que lo convierte en una base confiable para soluciones compatibles con Plaspy. Su amplio rango de tensión de entrada, el portador de SIM bloqueable y su amplio rango de temperatura de operación permiten instalaciones en vehículos, equipos industriales y activos remotos. Para clientes que requieren capacidades de rastreo GPS, flujos de trabajo antirrobo, telemetría, monitoreo de combustible o control de encendido e inmovilizador, el LT910-WW actúa como una pasarela de comunicaciones fiable cuando se integra con unidades GNSS externas, sensores o interfaces de control y se conecta a la plataforma de Plaspy.

Elegir el LT910-WW para Plaspy significa optar por un enfoque modular: transporte celular robusto e interfaces industriales ahora, con la flexibilidad de añadir GNSS, gateways BLE o módulos de control de vehículos para satisfacer requisitos específicos de gestión de flotas o telemetría. El resultado es una solución escalable y compatible con Plaspy que soporta rastreo en tiempo real, operaciones de flota basadas en datos y gestión remota segura en despliegues globales.

