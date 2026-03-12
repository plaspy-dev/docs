---
slug: /astra_telematics/at502
id: at502
sidebar_label: AT502
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT502

![AT502](./tracker.png)

# Astra Telematics AT502

El AT502 de Astra Telematics es un rastreador GPS compacto alimentado por batería, diseñado para un monitoreo discreto y a largo plazo de los activos sin suministro de energía más pequeños. Construido para la resistencia, el AT502 combina posicionamiento GNSS de constelación múltiple, comunicaciones celulares de bajo consumo \(LTE‑M y NB‑IoT con respaldo GSM\) y configuración Bluetooth LE para ofrecer una solución compatible con Plaspy que simplifica el seguimiento en tiempo real y la telemetría remota de activos.

El AT502 es ideal cuando el tamaño, la duración de la batería y la resistencia ambiental son cruciales: batería LTC interna de 7.8Ah \(7800 mAh\), química de batería LTC reemplazable por el usuario \(3 x AA tamaño LTC\) celdas, protección de entrada IP68 y múltiples opciones de montaje seguras permiten una instalación fácil en contenedores, herramientas, equipos y otros objetos portátiles. Como rastreador GPS compatible con Plaspy, se integra con la gestión de flotas, flujos de trabajo anti‑robos y paneles de informes, manteniendo bajos los costos de instalación y mantenimiento.

## Key Highlights

- Autonomía de batería excepcional — hasta 5 años en modos típicos de reporte de bajo consumo \(24‑hour reporting\), reduciendo las visitas de mantenimiento.
- Factor de forma compacto y discreto con antenas GNSS y GSM internas, y un tamaño de antena GNSS de aproximadamente 15 mm para un posicionamiento fiable en las distintas regiones.
- Conectividad celular a prueba de futuro: LTE‑M y NB‑IoT con respaldo GSM/GPRS \(2G\) para una amplia cobertura de red.
- Soporte GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS, BeiDou\) para datos de ubicación precisos y consistentes.
- BLE \(Bluetooth Low Energy\) para configuración y diagnósticos simples en sitio mediante aplicaciones para smartphones.
- Protección IP68 ambiental robusta y montaje flexible: soporte magnético integrado y fijaciones M4 para una fijación segura.
- Diseño de batería de servicio para el usuario \(3 x celdas LTC de tamaño AA\) y una batería interna de 7800 mAh para facilitar el mantenimiento en campo.
- Garantía del fabricante de 5 años y actualizaciones del sistema de por vida; opciones de hardware e informes se pueden personalizar sin costo adicional.

## How It Works with Plaspy

Cuando se empareja con Plaspy, el AT502 envía posiciones GNSS y telemetría del dispositivo a través de redes celulares a la plataforma Plaspy para seguimiento en tiempo real, reproducción histórica, alertas y exportaciones. Plaspy procesa correcciones de ubicación, eventos de movimiento y datos de salud de la batería/conectividad, para que los operadores gestionen activos, activen alertas anti‑robos y generen informes de gestión de flota. BLE permite configuración y diagnósticos en sitio mediante un teléfono inteligente antes o después de la instalación.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy mediante LTE‑M, NB‑IoT o GSM.
- Detección de movimiento mediante acelerómetro MEMS integrado para alertas de movimiento e informes de actividad.
- BLE para configuración local segura y diagnósticos mediante herramientas para smartphone.
- Estado de la batería y salud de la señal reportados para ayudar a planificar el mantenimiento y reemplazos.
- La compatibilidad con Plaspy permite la gestión de flotas y flujos de trabajo anti‑robos; tenga en cuenta que el encendido, el inmovilizador o la monitorización de combustible requieren un dispositivo con entradas/salidas dedicadas \(el AT502 tiene I/O externo mínimo\).

## Technical Overview

| Connectivity | LTE‑M, NB‑IoT, GSM/GPRS \(2G\) fallback |
| --- | --- |
| Bands | Tecnologías celulares: LTE‑M / NB‑IoT / GSM \(las bandas específicas dependen de la región / variante\) |
| Power & Battery | Interna 7.8Ah \(7800 mAh\) LTC batería; diseño de batería reemplazable por el usuario \(3 x AA tamaño LTC\). Duración de la batería de hasta 5 años en modos típicos de reporte de bajo consumo de 24‑hour |
| Interfaces | I/O externas mínimas; no CANBus, RS232, ADC ni salidas digitales. No hay indicadores LED ni sensor de manipulación. |
| GNSS | GPS, Galileo, GLONASS, BeiDou. Antena GNSS interna \(aprox. 15 mm\). |
| Bluetooth | BLE para configuración y diagnósticos mediante aplicaciones para smartphones. |
| SIM | e‑SIM compatible para provisionamiento simplificado. |
| Ingress Protection | IP68 para entornos adversos. |
| Mounting & Form Factor | Rastreador compacto para activos con soporte magnético integrado y fijaciones roscadas M4 para una fijación segura. |
| Warranty & Updates | 5 años de garantía; actualizaciones del sistema de por vida. Opciones de hardware e informes personalizables. |

## Use Cases

- Seguimiento a largo plazo de activos pequeños sin energía, como herramientas, estuches de instrumentos y equipos portátiles, donde la instalación discreta es importante.
- Monitoreo de contenedores y pallets en operaciones logísticas que se basan en verificaciones periódicas de ubicación y larga vida de la batería, en lugar de telemetría continua.
- Gestión de inventario y equipos en alquiler para gestores de flotas que requieren visibilidad fiable de los activos sin visitas de mantenimiento frecuentes.
- Flujos anti‑robo y recuperación donde la detección de movimiento y las alertas en la nube a través de Plaspy ayudan a localizar rápidamente los activos movidos.

## Why Choose This Tracker with Plaspy

Como rastreador GPS compatible con Plaspy, el AT502 está optimizado para clientes que priorizan una larga vida de la batería, instalación discreta y bajo mantenimiento. Su GNSS de múltiples constelaciones y su pila de conectividad celular en múltiples modos proporcionan informes de ubicación consistentes en distintas regiones, y BLE simplifica la configuración y diagnósticos en campo. Para programas de gestión de flotas y visibilidad de activos, el AT502 reduce los costos operativos al ampliar los intervalos de servicio y proporcionar telemetría fiable a Plaspy para informes, geocerca y alertas anti‑robos.

Tenga en cuenta que, si bien Plaspy admite una amplia gama de telemetría, monitorización de combustible, eventos de encendido y control de inmovilizador para dispositivos con entradas dedicadas, el AT502 está diseñado para un seguimiento pasivo y de larga duración de activos y no proporciona CAN, ADC, RS232, salidas digitales dedicadas ni interfaces de inmovilizador. Si su implementación requiere monitorización de combustible, detección de encendido o inmovilización remota, Plaspy puede combinar los datos del AT502 con otros dispositivos de grado vehicular dentro de la misma consola de gestión.

Para organizaciones que despliegan muchos activos pequeños, el AT502 ofrece una solución rentable, escalable y fácil de mantener para añadir visibilidad persistente a las flotas e inventarios gestionados por Plaspy. Los packs de baterías de repuesto y accesorios están disponibles de Astra Telematics, y los planes de servicio preconfigurados y las cotizaciones en línea simplifican la adquisición y la implementación.

