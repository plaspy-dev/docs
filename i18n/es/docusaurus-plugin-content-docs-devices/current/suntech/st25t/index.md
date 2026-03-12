---
slug: /suntech/st25t
id: st25t
sidebar_label: ST25T
sidebar_class_name: menu_item_tracker
---
# Suntech - ST25T

![ST25T](./tracker.jpg)

El ST25T es un compacto módulo de interfaz telemática vehicular diseñado para ampliar las soluciones de seguimiento de flotas y telemetría compatibles con Plaspy. Diseñado para reenviar datos de buses y sensores del vehículo a dispositivos pasarela como el ST4305/ST8300, el ST25T posibilita una integración fiable de equipos serial heredados, sensores de combustible y redes vehiculares estándar \(J1939/J1708\) dentro de un flujo de trabajo de seguimiento en tiempo real y gestión de flotas de Plaspy. Su tamaño compacto, su amplio rango de temperatura de operación y su bajo consumo lo hacen adecuado para camiones pesados, autobuses y otros vehículos comerciales que operan en condiciones desafiantes.

Como interfaz compatible con Plaspy, el ST25T se centra en la telemetría robusta y el reenvío de sensores, en lugar de funcionar como un rastreador GPS independiente. Cuando se empareja con una pasarela compatible con Plaspy, el ST25T suministra las señales del vehículo y de los sensores necesarias para el seguimiento en tiempo real, la monitorización de combustible y alertas antirrobo en los paneles de gestión de flotas. El soporte opcional de Bluetooth 4.1 facilita la configuración local y la conectividad de accesorios, mientras que múltiples entradas seriales y ADC proporcionan puntos de integración flexibles para los sistemas del vehículo y sensores de terceros.

## Aspectos clave

- Interfaz de telemetría compatible con Plaspy — reenvía datos del bus del vehículo y sensores hacia dispositivos pasarela \(ST4305/ST8300\) para seguimiento en tiempo real y gestión de flotas.
- Múltiples interfaces seriales — 2 puertos RS232 más un puerto RS485 dedicado \(soporte del protocolo LLS\) para sensores de nivel de combustible y equipos heredados.
- Entradas/salidas flexibles — dos entradas ADC \(o dos entradas digitales\) configurables para detección de encendido, entradas de puerta o alarma y otras señales de telemetría.
- Bluetooth 4.1 opcional — configuración local y opciones de sensores Bluetooth Low Energy \(BLE\) o conectividad para emparejar accesorios durante la instalación.
- Funcionamiento de bajo consumo — alimentado desde la pasarela host a 5V DC, con consumo activo y en reposo optimizados para instalaciones en vehículos.
- Diseño robusto — diseñado para operar de -30°C a +85°C y con certificación FCC para un uso fiable en campo.
- Diseñado para vehículos pesados — soporte directo para J1939 y J1708 facilita la integración con ECUs de camiones y autobuses.

## Cómo funciona con Plaspy

El ST25T está diseñado para operar como una interfaz de datos que conecta las redes y sensores del vehículo a una pasarela compatible con Plaspy. No sustituye al receptor GPS de la pasarela; en su lugar, enriquece el flujo de telemetría de la pasarela al suministrar datos del bus del vehículo, lecturas de combustible y entradas de sensores auxiliares. Plaspy ingiere esos datos combinados para ofrecer seguimiento en tiempo real unificado, alertas e informes a lo largo de las flotas.

- Reenvío de telemetría en tiempo real — mensajes de la ECU del vehículo \(J1939/J1708\) y datos seriales se transmiten a la pasarela para monitoreo en vivo e informes históricos.
- Monitoreo de combustible — el puerto RS485 admite sensores de nivel de combustible compatibles con LLS; las lecturas pueden ser procesadas por Plaspy para consumo y detección de anomalías.
- Encendido y entradas de eventos — entradas ADC o digitales pueden detectar el estado de encendido, eventos de apertura/cierre de puertas y disparos de alarmas para flujos de viaje y periodos de inactividad, así como alertas anti‑robo.
- Sensores Bluetooth — opcional Bluetooth 4.1 permite sensores BLE locales o herramientas de configuración para emparejar con el ST25T durante la instalación o el mantenimiento.
- Integración de equipos heredados — múltiples canales RS232 permiten dispositivos telemáticos antiguos, impresoras de tickets o interfaces de subsistemas, preservando la inversión en los sistemas a bordo.

## Visión general técnica

| Modelo | ST25T |
| --- | --- |
| Conectividad principal | RS232 x2 \(más líneas RS232 adicionales\), RS485 \(soporte del protocolo LLS\), reenvío serial a ST4305/ST8300 vía RS232 |
| Interfaces de vehículo soportadas | CAN/J1939, J1708, RS485, múltiples canales RS232 |
| Bluetooth | Módulo Bluetooth 4.1 opcional \(para configuración local/accesorios\) |
| Alimentación | Suministro DC 5V desde la pasarela ST4305/ST8300; Activo ≈40 mA @5V; Reposo ≈3.2 mA @5V |
| I/O y conectores | Conectores de 6 pines y 8 pines con líneas configurables: RX/TX RS485, canales RX/TX RS232, ADC1/ADC2 o entradas digitales, tierras y líneas de alimentación de sensores \(consulte la hoja de datos para el pinout detallado\) |
| Ambiental | Temperatura de operación -30°C a +85°C; certificación FCC; resistencia a polvo/agua no especificada \(ver hoja de datos\) |
| GNSS / Antena | Tipo de receptor GNSS, precisión y opciones de antena no especificados en la página del producto — consulte ST25T\_Re01\_EN.pdf para detalles |
| Factor de forma | Módulo compacto de interfaz telemática vehicular para conexión en línea a pasarelas y al arnés de cableado del vehículo |

## Casos de uso

- Mejora de telemetría de flotas — reenvía datos del motor CAN/J1939 y del vehículo a Plaspy para combustible, RPM, códigos de fallo y generación de informes operativos.
- Monitoreo de nivel de combustible — conecta sensores de nivel de combustible compatibles con LLS vía RS485 para detectar robo de combustible, tendencias de consumo y discrepancias.
- Integración de dispositivos heredados — conectar dispositivos seriales antiguos, impresoras de tickets o accesorios a bordo mediante múltiples canales RS232 sin necesidad de rediseñar la pasarela.
- Detección de encendido y eventos — usar entradas ADC o digitales para capturar el estado de encendido, eventos de apertura y cierre de puertas y disparos de alarmas para flujos de anti‑robo.
- Configuración local y sensores BLE — los técnicos pueden configurar la unidad o emparejar sensores BLE durante la instalación utilizando el módulo Bluetooth opcional.

## Por qué elegir este tracker con Plaspy

Elegir el ST25T como parte de una solución compatible con Plaspy aporta valor práctico cuando se requieren integración del bus del vehículo, monitorización de combustible y conectividad serial heredada. En lugar de funcionar como un rastreador GPS independiente, el ST25T se centra en la agregación de telemetría y en el reenvío fiable hacia una pasarela de Plaspy, posibilitando una gestión integral de la flota y un seguimiento en tiempo real cuando se combina con una pasarela que proporcione GNSS y conectividad celular. Su bajo consumo, su amplio rango operativo y la certificación FCC lo hacen apto para implementaciones exigentes de vehículos comerciales.

Para flotas que requieren una integración centrada en telemetría — monitorización de combustible, reenvío de diagnósticos y soporte para múltiples dispositivos seriales — el ST25T simplifica la instalación y acelera el tiempo de valor cuando se integra en plataformas gestionadas por Plaspy. Consulte la hoja de datos oficial de ST25T para obtener los pinouts completos de los conectores, dimensiones mecánicas y especificaciones GNSS/inalámbricas, y contacte al proveedor para obtener muestras o personalización que satisfaga requisitos específicos de flota o de sistemas anti‑robo.

