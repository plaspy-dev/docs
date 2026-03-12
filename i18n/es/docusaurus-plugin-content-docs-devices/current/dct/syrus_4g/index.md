---
slug: /dct/syrus_4g
id: syrus_4g
sidebar_label: Syrus 4G
sidebar_class_name: menu_item_tracker
---
# DCT - Syrus 4G

![Syrus 4G](./tracker.png)

El Syrus 4G Telematics Gateway de DCT es un rastreador GPS robusto, de nivel empresarial, diseñado para gestión intensiva de flotas e implementaciones de IoT industrial. Como dispositivo compatible con Plaspy, Syrus 4G ofrece GNSS de múltiples constelaciones, módems celulares duales y extensas interfaces de vehículo para habilitar un seguimiento en tiempo real fiable, recopilación de telemetría y procesamiento en el borde — todo ello concebido para entornos de vehículos exigentes y flotas de gran escala.

Diseñado para integradores y operadores de flotas que requieren conectividad segura y de alta disponibilidad, el Syrus 4G admite preprocesamiento de datos local, SDKs para desarrolladores y reenvío a la nube hacia plataformas como Plaspy. Con soporte integrado para sensores Bluetooth, telemetría por bus CAN y respaldo satelital opcional, esta pasarela facilita flujos de trabajo anti-robo, diagnóstico remoto, recopilación de telemetría de combustible y del motor, y una rápida integración en Plaspy para obtener una visibilidad consolidada de la flota.

## Aspectos destacados

- Rastreador GPS de grado empresarial con GNSS de múltiples constelaciones \(GPS/GLONASS\) para un seguimiento en tiempo real preciso a lo largo de distintas regiones.
- Módems celulares duales 2G/3G/4G MIMO, además de un accesorio satelital Iridium opcional y soporte eSIM/backup e-SIM para una cobertura global resiliente.
- Interfaces de E/S del vehículo: dual CAN \(J1939/J1708\), RS232/RS485, Ethernet 10/100 y múltiples conectores Molex para telemetría avanzada e integración de sensores.
- Plataforma de cómputo en el borde \(TI ARM Cortex-A8, 512MB RAM, 4GB de eMMC, microSD ampliable hasta 512GB\) para preprocesamiento local, reduciendo el ancho de banda hacia la nube.
- Bluetooth BLE 4.2 para la integración con sensores Bluetooth, dispositivos del conductor y notificaciones de audio bidireccionales.
- Elemento seguro y diseño resistente a la manipulación para autenticación criptográfica — adecuado para antirrobo y telemetría confiable.
- Gestión remota y OTA vía Syrus Cloud con SDKs y APIs para un desarrollo rápido de aplicaciones e integración con Plaspy.

## Cómo funciona con Plaspy

La integración de Syrus 4G con Plaspy ofrece un flujo de procesamiento robusto para el seguimiento en tiempo real, la visualización de telemetría y alertas de eventos. La pasarela recoge correcciones de posición GNSS, datos del bus del vehículo y entradas de sensores en el borde, los preprocesa o agrega y envía telemetría estructurada a Plaspy mediante protocolos de API/forwarder. Esto reduce la latencia y conserva el ancho de banda de la red, al tiempo que habilita paneles en vivo de la flota, reproducción histórica de rutas y reportes de telemetría detallados en Plaspy.

- Actualizaciones en tiempo real de ubicación y telemetría: soluciones de posicionamiento GNSS y ubicaciones procesadas se transmiten a Plaspy para el seguimiento en vivo.
- Datos del bus del vehículo a través de doble CAN \(J1939/J1708\): diagnósticos del motor, RPM, señales relacionadas con el combustible y códigos de estado pueden mapearse a telemetría en Plaspy.
- Códigos de error del motor y eventos de mantenimiento: Syrus 4G detecta y envía los códigos de diagnóstico de fallos para alertas y flujos de trabajo de mantenimiento preventivo en Plaspy.
- Sensores y dispositivos del conductor: conectividad BLE 4.2 permite que sensores de temperatura, sensores de activos o dispositivos del conductor alimenten a Plaspy a través de la pasarela.
- Diagnósticos remotos y OTA: Syrus Cloud y las herramientas a bordo permiten configuración remota y actualizaciones de software que mantienen las integraciones con Plaspy actualizadas y seguras.

## Resumen técnico

| Conectividad | Módems celulares duales \(2G/3G/4G MIMO\), Wi‑Fi de doble banda \(2.4/5.8 GHz\) MIMO, Bluetooth BLE 4.2, accesorio Iridium Satcom opcional, soporte eSIM y e-SIM de respaldo |
| --- | --- |
| Bandas | Soporta generaciones celulares 2G/3G/4G; las bandas RF específicas dependen del módulo/variante y de la selección regional del modelo |
| Alimentación y batería | Factor de forma de gateway robusto para vehículos/industrial; diseñado para sistemas de alimentación instalados en vehículo. \(No se especifica batería de respaldo interna en la descripción del producto.\) |
| Interfaces | Dual CAN \(J1939/J1708\), RS232, RS485, Ethernet 10/100 \(DHCP\), múltiples conectores Molex, micro USB, LEDs de estado y microcontrolador para control de periféricos |
| GNSS | GNSS multiconstelación: GPS y GLONASS para un posicionamiento fiable y seguimiento en tiempo real |
| Bluetooth | BLE 4.2 \(SBC + A2DP\) para sensores, audio bidireccional y notificaciones al conductor |
| Gestión remota | Gestión remota de dispositivos a través de Syrus Cloud, visualización de gemelo digital, interacciones OTA, configuración remota, diagnósticos y acceso a SDK/APIs |
| Factor de forma | Pasarela telemática robusta de nivel empresarial paraimplementaciones en vehículos e industriales; almacenamiento local mediante 4GB de eMMC y microSD de hasta 512GB |

## Casos de uso

- Gestión de flotas y monitoreo de rutas: datos de rastreo GPS en tiempo real y telemetría derivada de CAN transmitidos a los tableros de Plaspy para una visibilidad operativa.
- Monitoreo anti–robo y detección de manipulación: elemento seguro y hardware resistente a manipulación combinados con seguimiento en vivo para detectar movimientos no autorizados.
- Diagnóstico remoto y mantenimiento: códigos de error del motor y eventos de mantenimiento se reenvían a Plaspy para alertas automatizadas y programación de talleres.
- Telemetría de combustible y motor: recopila señales relacionadas con el combustible y parámetros del motor desde el CAN del vehículo y se alimenta a Plaspy para monitoreo de combustible y programas de eficiencia.
- Activos dotados de sensores y comportamiento del conductor: sensores BLE y un acelerómetro de 3 ejes permiten alertas basadas en eventos, detección de frenadas bruscas y sensado del entorno para cumplimiento y seguridad.

## Por qué elegir este rastreador con Plaspy

El Syrus 4G es una pasarela telemática integral para operadores que requieren más que un simple rastreador GPS. Sus capacidades de cómputo en el borde, la redundancia celular dual, el respaldo satelital opcional y sus ricas interfaces de vehículo la hacen ideal para implementaciones de flotas escalables y telemetría de misión crítica. Cuando se integra con Plaspy, Syrus 4G ofrece un seguimiento en tiempo real fiable, telemetría profunda para mantenimiento predictivo y comunicaciones seguras respaldadas por un elemento seguro resistente a manipulaciones. Para flotas que buscan una pasarela compatible con Plaspy que soporte toolchains de desarrolladores, gestión remota e integración avanzada de sensores, el Syrus 4G ofrece el rendimiento y la flexibilidad requeridos para la gestión moderna de flotas y la monitorización industrial.

