---
slug: /astra_telematics/at202
id: at202
sidebar_label: AT202
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT202

![AT202](./tracker.jpg)

El AT202 es un rastreador GPS compacto y de alta capacidad, diseñado para aplicaciones modernas de IoT y gestión de flotas y totalmente compatible con Plaspy. Al combinar GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS y BeiDou\) con comunicaciones celulares de múltiples redes — GPRS \(2G\), LTE‑M \(4G\) y NB‑IoT —, el AT202 ofrece posicionamiento fiable y amplia cobertura para seguimiento en tiempo real y gestión de flotas. Su robusto diseño eléctrico admite sistemas de vehículos de hasta 65V, lo que lo hace práctico para una amplia gama de coches, camiones y muchos vehículos eléctricos.

Diseñado para integradores y operadores de flotas, el AT202 ofrece un conjunto rico de interfaces I/O y telemáticas — que incluyen CANBus, entradas/salidas digitales, ADC, RS232 y 1‑Wire — para capturar telemetría del vehículo, identificación del conductor y datos de sensores externos. Con una batería interna de respaldo de 900mAh, antenas internas y un acelerómetro MEMS, el AT202 continúa informando en escenarios de bajo consumo o desconectado y se acopla directamente a Plaspy para una ingestión simplificada de ubicación, CANBus y datos de eventos.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy y GNSS de múltiples constelaciones para un posicionamiento preciso y un seguimiento en tiempo real fiable.
- Conectividad celular de múltiples redes \(GPRS, LTE‑M, NB‑IoT\) para una amplia cobertura y comunicaciones preparadas para el futuro.
- Conjunto amplio de E/S \(CANBus, 2 entradas digitales, 2 salidas digitales, 1 entrada ADC, RS232, 1‑Wire\) para capturar telemetría del vehículo y la identificación del conductor.
- Batería interna de respaldo de 900mAh y hasta 30 días de informes en modo de bajo consumo para mantener la telemetría ante pérdidas de energía.
- Tolerancia eléctrica del vehículo hasta 65V y acelerómetro MEMS para detección de movimiento y manipulación — ideal para gestión de flotas y monitoreo anti‑robo.
- Documentación suministrada, variantes de kit y accesorios para una implementación rápida e instalaciones a medida.
- Garantía de cinco años con actualizaciones del sistema de por vida y opciones de personalización de hardware e informes incluidas.

## Cómo funciona con Plaspy

El AT202 se integra con Plaspy para ofrecer ubicación y telemetría continuas a su panel de control de la flota. El dispositivo transmite datos de posición GNSS y datos del vehículo a través de enlaces celulares a Plaspy, donde se procesan para seguimiento en tiempo real, alertas e informes históricos. Plaspy analiza canales CANBus, eventos digitales, valores de ADC y mensajes seriales para convertir las entradas en bruto en KPIs de flota y disparadores.

- Actualizaciones de ubicación y telemetría en tiempo real \(posición GNSS, velocidad, rumbo\).
- Integración de datos CANBus del vehículo para el motor, odómetro y otros canales de telemetría OEM.
- Eventos de entradas digitales \(puerta, encendido\) y salidas digitales utilizables para control remoto o flujos de trabajo de inmovilización.
- Lecturas de ADC para sensores analógicos como el nivel de combustible, cuando hay un sensor conectado, permitiendo la monitorización del combustible al configurarlo.
- Soporte RS232 y 1‑Wire \(Dallas\) para sensores externos e integración de identificación del conductor \(iButton\).
- Eventos de movimiento e impacto basados en el acelerómetro para alertas de manipulación y anti‑robo.
- Informes de estado de la batería de respaldo y de conectividad a Plaspy para alertas fuera de línea/bajo consumo y flujos de recuperación.

## Resumen técnico

| Conectividad | GSM/GPRS \(2G\), LTE‑M \(4G\), NB‑IoT |
| --- | --- |
| Bandas | Soporte de conectividad celular de múltiples redes \(bandas regionales específicas por variante / documentación del proveedor\) |
| Alimentación y batería | Voltaje de operación 6.0V \(mín.\) a 65.0V \(máx.\); batería interna de respaldo de 900mAh; hasta 30 días en modos de bajo consumo \(informes cada 24 horas\) |
| Interfaces | CANBus, 2 entradas digitales, 2 salidas digitales, 1 entrada ADC, puerto RS232, 1‑Wire \(Dallas\) |
| GNSS | GPS, Galileo, GLONASS, BeiDou \(antena GNSS interna\) |
| Bluetooth | No incluido \(utilice RS232/1‑Wire o gateways externos si se requieren sensores Bluetooth\) |
| Indicadores y sensores | Acelerómetro MEMS interno, antenas internas celulares/GNSS, indicadores LED de estado externos |
| SIM | Formato mini SIM |
| Gestión remota | Actualizaciones del sistema de por vida; documentación incluida \(hoja de datos, guía de usuario, inicio rápido, guía de instalación\); personalización de hardware e informes incluida |
| Formato | Unidad de rastreo compacto para vehículos; variantes de kit disponibles \(básico, IP65, estándar, OBD, evaluación\) y accesorios/cables compatibles |

## Casos de uso

- Gestión de flotas: ubicación continua de vehículos, reproducción de rutas y telemetría para la optimización de despachos y la generación de informes de cumplimiento.
- Antirrobo y recuperación: alertas por acelerómetro, monitorización de entradas digitales y flujos de trabajo de inmovilización remota mediante salidas digitales y reglas de Plaspy.
- Telemetría del vehículo y monitorización de combustible: captura de canales CANBus y entradas de sensores ADC para el nivel de combustible, diagnóstico del motor y programación del mantenimiento.
- Identificación del conductor y control de acceso: integración de iButton 1‑Wire o dispositivo serie para identificación del conductor y atribución de eventos.
- Monitoreo de activos en flotas mixtas: el formato compacto y la tolerancia de 65V hacen que el AT202 sea adecuado tanto para vehículos con motor de combustión interna \(ICE\) como para muchas instalaciones de vehículos eléctricos.

## Por qué elegir este rastreador con Plaspy

El AT202 es una opción práctica para empresas que requieren un rastreador GPS compatible con Plaspy, con telemetría robusta y puntos de integración flexibles. Su diseño celular de múltiples redes equilibra amplia cobertura y tecnologías LPWA preparadas para el futuro \(LTE‑M, NB‑IoT\), mientras que el completo conjunto de E/S permite capturar datos CANBus del vehículo, eventos digitales, valores de sensores ADC y flujos de datos de dispositivos seriales sin necesidad de gateways adicionales. La batería interna de respaldo y el acelerómetro MEMS proporcionan resiliencia para escenarios de anti‑robo y para informes sin conexión, y la tolerancia de 65V del dispositivo amplía la compatibilidad a muchas plataformas de vehículos eléctricos.

La documentación suministrada, los kits de accesorios y las opciones de personalización incluidas para hardware e informes reducen el tiempo de integración y el coste total de propiedad. Combinado con las capacidades de ingestión, alertas e informes de Plaspy, el AT202 ofrece un seguimiento en tiempo real fiable, telemetría e información operativa para la gestión de flotas, la logística y programas de protección de activos.

