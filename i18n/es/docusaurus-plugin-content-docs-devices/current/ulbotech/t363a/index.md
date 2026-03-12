---
slug: /ulbotech/t363a
id: t363a
sidebar_label: T363A
sidebar_class_name: menu_item_tracker
---
# Ulbotech - T363A

![T363A](./tracker.jpg)

El rastreador OBD GPS T363A es un dispositivo plug-and-play diseñado para la gestión de flotas, protección anti-robo y monitoreo del comportamiento del conductor. Diseñado para conectarse directamente al puerto OBD-II del vehículo, el T363A ofrece seguimiento en tiempo real y telemetría del vehículo a sistemas back-end. Como dispositivo compatible con Plaspy, se integra de forma fluida con la plataforma de seguimiento de Plaspy para proporcionar ubicación, diagnósticos basados en OBD y alertas configurables para flotas, operadores de alquiler y propietarios de vehículos.

El compacto T363A integra un receptor GNSS u-blox, un módem GSM/GPRS de cuatro bandas y Bluetooth a bordo para ofrecer una precisión de posición confiable, TTFF rápido y entrega de datos sin interrupciones. Su salida de inmovilizador interna, la detección de comportamiento del conductor basada en acelerómetro y el soporte para los protocolos OBD estándar hacen de este dispositivo una opción práctica para empresas y proveedores de servicios que utilizan Plaspy para monitoreo en tiempo real, generación de informes y flujos de trabajo automatizados.

## Características clave

- Instalación OBD-II plug-and-play: implementación rápida para la gestión de flotas sin necesidad de cableado.
- Compatible con Plaspy para seguimiento en tiempo real, alertas e informes telemáticos de la flota.
- GNSS u-blox de alta sensibilidad con A-GPS para un TTFF rápido y precisión de posición típica por debajo de 3 m.
- Módem GSM/GPRS de cuatro bandas \(850/900/1800/1900 MHz\) para una transmisión de datos confiable en distintas regiones.
- Bluetooth 2.0 a bordo para emparejar dispositivos o sensores externos cuando sea necesario.
- Salida digital interna para inmovilizador \(corte del motor\) para respaldar flujos de trabajo anti-robo.
- Acelerómetro de 3 ejes y detección de eventos de conducción para frenadas duras, aceleraciones bruscas, giros y monitorización del ralentí.

## Cómo funciona con Plaspy

El T363A alimenta la plataforma Plaspy con las posiciones GNSS, telemetría derivada de OBD y datos de eventos a través de GPRS para seguimiento en tiempo real, alertas e informes históricos. Plaspy procesa el flujo de datos del dispositivo para presentar mapas en vivo, alertas de geocerca, puntuación de comportamiento del conductor e hallazgos diagnósticos. La integración se realiza a través de canales TCP/UDP/GPRS estándar compatibles con Plaspy; la configuración del dispositivo y las actualizaciones FOTA se gestionan de forma remota cuando sea necesario.

- Actualizaciones de ubicación y telemetría en tiempo real: GNSS continuo y PIDs de OBD periódicos para la visibilidad operativa.
- Estado de encendido y diagnóstico vía OBD: Plaspy puede usar el estado de encendido y los códigos OBD para flujos de trabajo de la flota y disparadores de mantenimiento.
- Telemetría relacionada con el combustible: los PIDs de OBD pueden proporcionar datos de combustible y consumo donde el vehículo admita esos parámetros \(según el vehículo\).
- Control remoto del inmovilizador: la salida digital habilita flujos de trabajo de inmovilización impulsados por Plaspy para la respuesta ante robos.
- Conectividad Bluetooth: emparejar sensores o accesorios Bluetooth para telemetría adicional y contexto dentro de Plaspy.
- Alertas de geocerca y eventos: geocercas circulares, rectangulares y poligonales \(hasta 32 puntos\) activan notificaciones e informes en Plaspy.

## Resumen técnico

| Conectividad | Módem GSM/GPRS de cuatro bandas |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Almacenamiento | Memoria interna de 8 Mb \(aprox. 15,000 registros\) |
| Alimentación y batería | Tensión de funcionamiento 8–32 V DC; batería de respaldo Li-Polímero de 3.7V y 180 mAh; consumo de energía ~70 mA en funcionamiento, ~10 mA en reposo, pico &lt;250 mA |
| Interfaces | Conector OBD-II \(J1962\), puerto micro USB para configuración y firmware, salida digital para inmovilizador/corte del motor, indicadores de GSM/GPS/OBD/BLE |
| Sensores e entradas | Acelerómetro de 3 ejes para detección de movimiento y comportamiento del conductor; compatible con monitoreo de voz |
| GNSS | u-blox 6M con A-GPS; sensibilidad de seguimiento hasta -162 dBm; sensibilidad autónoma indicada en -147 dBm; precisión de posición típica &lt;3 m; arranques en caliente rápidos &lt;1 s |
| Bluetooth | Bluetooth 2.0 a bordo para dispositivos o sensores externos |
| Gestión remota | FOTA \(actualizaciones de firmware vía GPRS\); micro USB para configuración local |
| Factor de forma | Diseño compacto de enchufe OBD — dimensiones 62×50×23 mm o 45×50×23 mm \(sin incluir el conector J1962\); peso ~50 g |

## Casos de uso

- Gestión de flotas: ubicación en tiempo real del vehículo, reproducción de rutas y telemetría de comportamiento del conductor para la eficiencia operativa y el cumplimiento.
- Antirrobo e inmovilización: alertas de manipulación/desconexión con batería de respaldo y corte remoto del motor mediante la salida de inmovilizador.
- Seguimiento para alquiler y seguros: monitorización por uso, geocercas y registros de eventos para flotas de alquiler o programas de seguros telemáticos.
- Asistencia en carretera y diagnóstico: soporte de protocolos OBD \(J1850, ISO 9141-2, ISO14230, ISO15765-4, SAE J1939, J1708/J1587\) que permite obtener estado del vehículo y lecturas de diagnóstico básicas para decisiones rápidas de servicio.
- Perfil de conductores jóvenes y del vehículo: eventos basados en acelerómetro \(frenadas bruscas, aceleración rápida, giros\) que ayudan a promover una conducción segura y a generar puntuaciones de conductor.

## Por qué elegir este rastreador con Plaspy

El T363A ofrece un rastreador GPS práctico y compatible con Plaspy para organizaciones que requieren una implementación plug-and-play, seguimiento en tiempo real fiable y telemetría OBD robusta. Su radio GSM/GPRS de cuatro bandas y el GNSS de u-blox proporcionan conectividad constante y posicionamiento preciso, mientras que la salida de inmovilizador interna y la batería de respaldo fortalecen los flujos de trabajo anti-robo. Con Bluetooth a bordo y soporte FOTA, el T363A es flexible para sensores adicionales y mantenimiento remoto, lo que lo convierte en una opción rentable para una gestión de flotas escalable, protección anti-robo y mejora operativa impulsada por telemetría en la plataforma Plaspy.

