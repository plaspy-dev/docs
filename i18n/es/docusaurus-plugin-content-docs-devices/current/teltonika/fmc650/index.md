---
slug: /teltonika/fmc650
id: fmc650
sidebar_label: FMC650
sidebar_class_name: menu_item_tracker
---
# Teltonika - FMC650

![FMC650](./tracker.png)

El FMC650 es un rastreador GPS profesional 4G LTE Cat 1, diseñado para despliegues exigentes de telemática vehicular y gestión de flotas. Construido como sucesor del FMC640, el FMC650 ofrece conectividad LTE Cat 1 fiable con respaldo 2G \(GSM\) para una cobertura global amplia, un módulo GNSS separado de doble canal \(L1 + L5\) para mejorar la fiabilidad y precisión de la posición, y un conjunto de E/S robusto adaptado a uso intensivo en flotas, remolques y maquinaria especializada. Como rastreador GPS compatible con Plaspy, el FMC650 aporta seguimiento en tiempo real, telemetría y diagnósticos a tu panel de flotas en Plaspy para operaciones más precisas y toma de decisiones más rápida.

El FMC650 está disponible en variantes regionales y paquetes listos para enviar que incluyen cableado de alimentación del vehículo y antenas externas 4G/GNSS, haciendo la integración sencilla. Con múltiples interfaces CAN \(incluyendo J1939/FMS\), puertos RS232/RS485 para termógrafos y sensores auxiliares, y datos tachográficos en vivo y descarga remota de archivos, el FMC650 está diseñado para alimentar la plataforma Plaspy con los datos de vehículo y remolque que los gestores de flota necesitan para el control de rutas, monitoreo anti‑robos y mantenimiento proactivo.

## Aspectos clave

- Conectividad celular 4G LTE Cat 1 con respaldo 2G \(GSM\) para mantener los dispositivos conectados en áreas de cobertura mixta.
- Módulo GNSS separado, con soporte de doble canal L1 + L5 para mejorar la fijación satelital y la fiabilidad del posicionamiento.
- Múltiples interfaces CAN con soporte J1939/FMS para telemetría detallada del vehículo, parámetros del motor y acceso a DTC.
- 2x RS232 y 1x RS485 para conectar termógrafos, lectores RFID y otros periféricos directamente.
- Datos tachográficos en vivo y descarga remota de archivos tachográficos \(K‑Line, Tacho CAN, FMS\) para cumplimiento y monitorización de las horas de conducción.
- Incluye antenas externas 4G/GSM y GNSS \(3.0 m\) y un cable de alimentación de entrada/salida de 0.9 m en el paquete estándar.
- Variant regionales \(ejemplos: FMC6508TFE01 LATAM, FMC6501TFE01 EMEA\) para adaptar las bandas LTE/2G a los mercados locales.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el FMC650 transmite las correcciones GNSS y la telemetría del vehículo a través de su enlace celular al backend de Plaspy para seguimiento en tiempo real, alertas e informes. Plaspy ingiere datos de ubicación, telemática y tachógrafo para poblar mapas, cronogramas y paneles de mantenimiento. Las interfaces serie y CAN del dispositivo permiten a Plaspy recoger lecturas de sensores y códigos de diagnóstico de fallos \(DTCs\) para la detección remota de fallos y la planificación de la remediación.

- Actualizaciones de ubicación y telemetría en tiempo real a Plaspy a través de LTE Cat 1 con respaldo 2G.
- Datos tachográficos en vivo y descarga remota de archivos \(K‑Line, Tacho CAN, FMS\) para cumplimiento y monitorización de las horas de conducción.
- Diagnóstico remoto: lectura de códigos de diagnóstico \(DTCs\) y telemetría del motor a través de CAN/J1939 para un mantenimiento proactivo.
- Emparejamiento de remolque y camión y gestión avanzada de flotas mediante múltiples canales CAN y flujos de emparejamiento con Plaspy.
- Integración de periféricos seriales \(RS232/RS485\) para termógrafos, lectores RFID y sensores externos que alimentan los informes de Plaspy.
- Permite el monitoreo de combustible y el reporte del estado de ignición cuando el CAN/J1939 del vehículo expone esas señales al rastreador.

## Visión técnica

| Conectividad | 4G LTE Cat 1 con respaldo 2G \(GSM\) |
| --- | --- |
| Bandas | Múltiples variantes regionales que soportan rangos de LTE FDD/TDD y bandas 2G \(ejemplos: FMC6508TFE01 LATAM, FMC6501TFE01 EMEA\) |
| Alimentación & Batería | Diseñado para alimentación vehicular con soporte extendido de energía de reserva; el paquete estándar incluye cable de alimentación de entrada/salida de 0.9 m \(capacidad de batería no especificada\) |
| Interfaces | 2x RS232, 1x RS485, múltiples interfaces CAN \(J1939/FMS y J1939 crudo\), interfaces tachográficas \(K‑Line, Tacho CAN, FMS\) |
| GNSS | Módulo GNSS separado, doble canal L1 + L5 para mejor rendimiento de posicionamiento |
| Bluetooth | No especificado en la descripción; la integración con dispositivos Bluetooth externos puede requerir gateways o adaptadores de accesorios |
| Gestión remota | Diagnóstico remoto, descarga de archivos tachográficos e integración de back‑end compatible a través de la conectividad de la plataforma; funciones específicas de FOTA/gestión dependen del firmware y herramientas del proveedor |
| Formato | Rastreador de grado vehicular para flotas pesadas, remolques y maquinaria especializada; el paquete estándar incluye antenas externas 4G/GNSS y un embalaje con la marca |

## Casos de uso

- Gestión de flotas y seguimiento en tiempo real para vehículos pesados donde se requiere una conectividad LTE fiable con respaldo 2G.
- Seguimiento de remolques y emparejamiento entre remolques y camiones para operaciones logísticas mediante integración CAN y serial.
- Mantenimiento proactivo y diagnóstico remoto: lectura de códigos de diagnóstico \(DTCs\) y telemetría para reducir tiempos de inactividad y planificar ventanas de servicio.
- Monitoreo de la cadena de frío: conecte termógrafos mediante RS232/RS485 para reportar datos de temperatura en Plaspy para cumplimiento y alertas.
- Integración de video telemática en soluciones de seguridad del conductor cuando se combina con accesorios de video compatibles.

## Por qué elegir este rastreador con Plaspy

El FMC650 está diseñado específicamente para operadores que necesitan un rastreo GPS fiable y compatible con Plaspy, con interfaces de telemática profesionales. Su LTE Cat 1 con respaldo 2G ofrece conectividad continua en áreas de cobertura variadas, mientras que el GNSS de doble canal mejora la precisión de la posición para un seguimiento en tiempo real más preciso. Múltiples canales CAN, puertos serie y soporte tachográfico permiten centralizar la telemetría del vehículo, el monitoreo de combustible y los DTCs en Plaspy, posibilitando decisiones de mantenimiento más rápidas y un mejor rendimiento de la flota.

Elegir el FMC650 para su implementación con Plaspy ofrece una solución escalable para grandes flotas, remolques y maquinaria especializada. El soporte de antena externa y el cableado incluido facilitan la instalación, y las variantes regionales permiten adaptar las bandas celulares a los mercados locales. Para flujos de trabajo de antirrobo, Plaspy puede aprovechar la ubicación y telemetría en tiempo real del FMC650; las acciones de inmovilización u otros controles remotos pueden implementarse donde el CAN/I/O del vehículo exponga las señales necesarias. Contacte a su representante de Plaspy o al proveedor del dispositivo para confirmar la variante FMC650 y el conjunto de accesorios adecuados para su flota y planificar una integración que incluya flujos de telemática, tachógrafo y video.

