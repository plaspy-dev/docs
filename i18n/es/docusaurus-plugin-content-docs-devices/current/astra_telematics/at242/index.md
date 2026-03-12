---
slug: /astra_telematics/at242
id: at242
sidebar_label: AT242
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT242

![AT242](./tracker.jpg)

El AT242 es un rastreador GPS robusto, compatible con Plaspy, diseñado para monitorizar de forma continua vehículos y activos en los entornos más exigentes. Con conectividad 4G LTE Cat 1, GNSS de múltiples constelaciones, sellado IP67 a prueba de agua y un amplio conjunto de E/S, el AT242 ofrece seguimiento en tiempo real confiable, detección de manipulación y telemetría para gestión de flotas, intercambio de vehículos y aplicaciones industriales.

El compacto AT242 combina posicionamiento de alta sensibilidad \(GPS, Galileo, GLONASS, BeiDou\) con soporte opcional para sensores Bluetooth y amplias interfaces de vehículo, posibilitando una rápida integración con Plaspy para ubicación en vivo, telemetría CANBus, identificación del conductor y alertas basadas en eventos. Su batería interna de respaldo, acelerómetro MEMS y sensor de manipulación proporcionan monitoreo continuo de anti-robo y seguridad incluso ante interrupciones de suministro.

## Principales características

- Compatibilidad con Plaspy para rastreo en tiempo real y gestión de flotas con conectividad 4G LTE Cat 1 de baja latencia.
- Carcasa robusta con grado de protección IP67 y antenas internas para un funcionamiento fiable en condiciones de lluvia, polvo y entornos industriales.
- GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS, BeiDou\) con chipset Mediatek y antena de parche cerámica de 25 mm para mejorar la precisión de posicionamiento.
- Amplias E/S para telemetría e integración: múltiples entradas/digitales, ADCs, RS232, puerto 1-Wire y soporte CANBus.
- Sensor de manipulación integrado y acelerómetro MEMS permiten alertas de anti-robo, detección de manejo brusco y eventos de movimiento.
- Batería interna de respaldo de 510 mAh ofrece hasta ~6 días en modos de bajo consumo y reporte de 24 horas para mantener la telemetría ante pérdidas de energía.
- BLE opcional para sensores accesorios y balizas BLE para ampliar la telemetría y los datos de contexto.

## Cómo funciona con Plaspy

El AT242 transmite la posición GPS y la telemetría del vehículo a Plaspy a través de su enlace LTE Cat 1 \(4G\). Plaspy ingiere los datos GNSS del dispositivo, eventos de E/S y tramas CANBus para ofrecer seguimiento en tiempo real, alertas e informes históricos. Dado que el AT242 expone la identificación del conductor, RS232, ADCs y E/S digitales, Plaspy puede presentar paneles telemáticos enriquecidos, alertas configurables y flujos de trabajo automatizados para los operadores de flotas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy vía LTE Cat 1.
- Eventos de manipulación, movimiento y acelerómetro para alertas de anti-robo y golpes.
- Entradas CANBus y ADC permiten monitoreo de combustible, diagnósticos del motor e informes de estado del vehículo.
- Identificación del conductor \(Driver ID\) e integración de accesorios para vincular los desplazamientos con los conductores y capturar eventos relacionados con el conductor.
- Opcional BLE para conectar sensores de temperatura, balizas u otros sensores Bluetooth para ampliar la telemetría.

## Resumen técnico

| Conectividad | LTE Cat 1 \(4G\) |
| --- | --- |
| Bandas | Bandas de operador dependientes de la región \(las variantes del fabricante pueden diferir según el mercado\) |
| Alimentación y batería | Voltaje de funcionamiento: 6,0–50,0 V. Batería interna de respaldo: 510 mAh \(aprox. hasta 6 días en modo de bajo consumo y reporte de 24 horas\) |
| Interfaces | 6 entradas digitales, 5 salidas digitales, 2 entradas ADC, 2 puertos RS232, puerto 1-Wire/Dallas, salida AUX 3.3V, soporte de Driver ID, CANBus |
| GNSS | GPS / Galileo / GLONASS / BeiDou \(con chipset GNSS Mediatek y antena de parche cerámica de 25 mm\) |
| Bluetooth | BLE opcional para integración de accesorios y sensores |
| Gestión remota | Configuración de hardware y comportamiento de informes; actualizaciones de sistema de por vida incluidas \(documentación y guías proporcionadas\) |
| Factor de forma | Carcasa compacta y robusta con antenas internas y sellado IP67 a prueba de agua para instalaciones en vehículos y activos |

## Casos de uso

- Gestión de flotas y plataformas de uso compartido de vehículos que requieren conectividad de rastreador GPS de alto ancho de banda y baja latencia, con asociación de conductores.
- Monitoreo de seguridad y despliegues anti-robo utilizando detección de manipulación, eventos del acelerómetro y respaldo de batería para alertas continuas.
- Seguimiento de activos industriales y logística de planta donde la protección IP67 y la diversidad de E/S permiten conexión a sensores y sistemas de automatización.
- Mantenimiento impulsado por telemetría: capturar datos CANBus y mediciones de ADC para seguir el uso de combustible, señales del motor y telemetría de sensores.
- Monitoreo habilitado por BLE para cadena de frío o equipos que utilicen sensores Bluetooth y balizas combinados con datos de ubicación.

## Por qué elegir este rastreador con Plaspy

Elegir el AT242 para la integración con Plaspy ofrece un equilibrio entre hardware robusto, amplias interfaces de vehículo y conectividad celular confiable. Los operadores obtienen acceso inmediato a rastreo en tiempo real, alertas de anti-robo y telemetría rica sin necesidad de reinventar las integraciones; Plaspy puede consumir datos de posición, marcos CANBus, eventos de E/S digitales y datos de sensores BLE para crear paneles de control accionables y alertas automatizadas.

El AT242 está diseñado para despliegues a largo plazo: comportamiento de informes configurable, documentación completa \(hoja de datos, guía de usuario, guía de instalación, guía de inicio rápido\) y una garantía de cinco años reducen el riesgo de ciclo de vida y el tiempo de instalación. Para flotas y usuarios industriales que buscan un rastreador GPS compatible con Plaspy que admita ignición e señales digitales, datos de combustible y del motor vía CANBus/ADC, y expansión de sensores BLE, el AT242 ofrece una solución compacta y robusta que escala con sus necesidades de telemática.

