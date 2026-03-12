---
slug: /concox/vg502
id: vg502
sidebar_label: VG502
sidebar_class_name: menu_item_tracker
---
# Concox - VG502

![VG502](./tracker.png)

El VG502 OBDII GNSS tracker es un rastreador GPS plug-and-play compatible con Plaspy, diseñado para coches de empresa, vehículos particulares y programas de seguro basado en el uso \(UBI\). La instalación en segundos a través del puerto OBD-II del vehículo ofrece seguimiento en tiempo real y telemetría del vehículo de forma fiable sin necesidad de cableado, lo que lo convierte en una opción ideal para equipos de gestión de flotas y aseguradoras que buscan despliegue rápido, diagnósticos detallados e información accionable sobre el comportamiento de conducción.

Construido en torno a GNSS dual \(GPS + BDS\) y conectividad GSM celular, el VG502 combina el diagnóstico a bordo \(kilometraje, códigos de fallo, estado ACC/encendido, consumo de combustible, voltaje de la batería, revoluciones del motor\) con el análisis de comportamiento de conducción \(DBA\) y alertas instantáneas \(colisión, geocerca, retirada del dispositivo, pérdida de energía\). El soporte BLE 4.0 simplifica la configuración local y las actualizaciones de firmware y habilita sensores Bluetooth opcionales, reduciendo los costos de mantenimiento mientras mantiene un monitoreo e informes habilitados por Plaspy rápidos y precisos.

## Aspectos clave

- Rastreador GPS OBD-II compatible con Plaspy para instalación plug-and-play en coches privados y de empresa.
- Posicionamiento GNSS dual \(GPS + BDS\) con precisión reportada mejor que 2.5 m CEP y rendimiento TTFF rápido.
- Telemetría integral: kilometraje, códigos de fallo, estado ACC/encendido, consumo de combustible, voltaje de la batería y velocidad del motor.
- Análisis de comportamiento de conducción \(DBA\) que detecta aceleración brusca, frenado, manejo en curva y colisiones para programas de UBI y seguridad de flotas.
- BLE 4.0 para configuración local, actualizaciones de firmware y conectividad opcional de sensores Bluetooth para ampliar la monitorización \(p. ej., temperatura o balizas de activos\).
- Alertas instantáneas: códigos de fallo, colisión, exceso de velocidad, retirada del dispositivo, entrada/salida de geocerca, desconexión de la alimentación y monitoreo de la batería del vehículo.
- Amplio soporte de protocolos OBD-II \(ISO 9141-2, ISO 14230-4 KWP, ISO 15765-4 CAN y variantes\) para compatibilidad entre marcas de vehículos.

## Cómo funciona con Plaspy

Al emparejarse con Plaspy, el VG502 transmite fijaciones GNSS y telemetría OBD-II a su panel de Plaspy para seguimiento en tiempo real, alertas e informes históricos. Plaspy ingiere la ubicación del dispositivo, diagnósticos e informes de eventos y aplica reglas de geocercas, informes y analítica para que los gestores de flotas y las aseguradoras puedan actuar de inmediato sobre el estado del vehículo, la seguridad del conductor y los patrones de uso.

- Actualizaciones de ubicación y telemetría en tiempo real: las posiciones GNSS y los datos OBD-II se envían a Plaspy para mapas en vivo y reproducción de rutas.
- Estado de encendido/ACC: el estado ACC y los parámetros del motor aparecen en los registros de eventos de Plaspy para respaldar el ralentí, el tiempo de funcionamiento y la segmentación de viajes.
- Monitoreo de combustible y kilometraje: el consumo de combustible derivado de OBD y las lecturas del odómetro alimentan los informes de Plaspy para análisis de costos y eficiencia.
- Alertas de comportamiento de conducción: eventos de aceleración brusca, frenado y giro pueden activar notificaciones y tarjetas de puntuación dentro de Plaspy.
- Sensores Bluetooth: BLE 4.0 permite conectividad local de accesorios; los datos de los sensores pueden mostrarse a través de Plaspy cuando aplique.

## Descripción técnica

| Conectividad | Célular GSM \(Nano-SIM\), interfaz OBD-II |
| --- | --- |
| Bandas | GSM: B2 / B3 / B5 / B8 |
| Alimentación y Batería | Entrada de potencia del vehículo 9–36 VDC; batería de respaldo 50 mAh, 3,7 V |
| Interfaces | Conector OBD-II \(soporta K-Line y CAN Bus; ISO 9141-2, ISO 14230-4 KWP, ISO 15765-4 CAN y variantes\) |
| GNSS | GNSS dual: GPS + BDS; sensibilidad de seguimiento -162 dBm; adquisición -148 dBm \(frío\) / -156 dBm \(caliente\); precisión reportada &lt; 2.5 m CEP |
| Bluetooth | BLE 4.0 para configuración local, actualizaciones de firmware y conectividad opcional de accesorios Bluetooth |
| Almacenamiento de datos | Almacenamiento a bordo de 4 + 4 MB |
| SIM | Ranura Nano-SIM |
| Gestión remota | Actualizaciones de firmware locales vía BLE; configuración mediante herramientas BLE |
| Factor de forma | Enchufe OBD-II; dimensiones 61 × 52 × 26 mm; peso aprox. 55 g |

## Casos de uso

- Gestión de flotas: despliegue rápido en una flota mixta para seguimiento en tiempo real, informes de kilometraje y alertas de mantenimiento.
- Seguros basados en el uso \(UBI\): telemetría de comportamiento de conducción y puntuación DBA para definir primas y análisis de aseguradoras.
- Programas de coches de empresa: monitorizar el estado del vehículo, estado ACC/encendido y uso de combustible para cumplimiento y control de costos.
- Alertas de seguridad y anti-robo: notificaciones de retirada del dispositivo, pérdida de energía y violaciones de geocerca ayudan a proteger los activos.
- Seguimiento y diagnóstico general del vehículo: recuperar códigos de fallo, monitorizar el voltaje de la batería y recoger la velocidad del motor para obtener información operativa.

## Por qué elegir este rastreador con Plaspy

El VG502 ofrece una implementación rápida y de bajo esfuerzo para organizaciones que requieren un rastreador GPS compatible con Plaspy con telemetría significativa. Su factor de forma OBD-II elimina el cableado, acortando el tiempo de instalación y reduciendo el costo total de propiedad, al tiempo que proporciona acceso directo a parámetros OBD confiables—monitoreo de combustible, kilometraje, códigos de fallo y estado ACC/encendido—que importan para la gestión de flotas y UBI.

Emparejado con Plaspy, el VG502 se convierte en un nodo potente dentro de su pila de seguimiento y telemetría en tiempo real: la precisión GNSS y la detección de eventos DBA proporcionan datos precisos de seguridad del conductor y de los viajes; el soporte BLE facilita el mantenimiento y las actualizaciones de firmware; y las alertas robustas reducen el tiempo de respuesta ante robos, colisiones o fallos del vehículo. Para organizaciones que priorizan la fiabilidad, un despliegue rápido y una inteligencia de vehículo accionable, el VG502 ofrece una opción práctica y escalable que se integra a la perfección con los flujos de trabajo de Plaspy.

