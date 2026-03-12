---
slug: /topfly/tld2_d
id: tld2_d
sidebar_label: TLD2-D
sidebar_class_name: menu_item_tracker
---
# TopFly - TLD2-D

![TLD2-D](./tracker.png)

El TLD2-D \(4G LTE\) es un rastreador GPS OBDII plug-and-play diseñado para un despliegue rápido en flotas, coches de empresa y vehículos de alquiler. Compatible con Plaspy desde el primer uso, esta unidad ofrece seguimiento en tiempo real de alta frecuencia y telemetría rica de CAN BUS sin necesidad de instalación — basta con conectar al puerto OBDII del vehículo para desbloquear datos de VIN, odómetro, nivel de combustible, RPM y DTC junto con una ubicación GNSS precisa.

Diseñado para la gestión de flotas y programas de monitorización de vehículos que requieren telemetría inmediata, el TLD2-D se empareja con sensores Bluetooth Low Energy para monitoreo de temperatura, humedad y puertas, y utiliza un acelerómetro interno de 6 ejes junto con un zumbador para el conductor para detectar eventos bruscos y alertar a los conductores. Con conectividad LTE Cat M1 / NB‑IoT, respaldo GSM/EDGE y múltiples transportes de datos \(TCP/UDP/MQTT/SMS\), este rastreador GPS se integra a la perfección con Plaspy para telemática escalable, alertas anti-robo y visibilidad operativa.

## Aspectos Clave

- Instalación OBDII plug-and-play para un despliegue rápido en flotas — no se requieren cableados.
- Seguimiento en tiempo real con intervalos de actualización tan frecuentes como cada 3 segundos para una alta precisión de ubicación.
- Telemetría CAN BUS profunda \(VIN, odómetro, nivel de combustible, RPM y DTC\) para soportar el monitoreo de combustible y diagnósticos del vehículo.
- Soporte BLE 5.0 para sensores Bluetooth \(temperatura, humedad y sensores de puerta\) para ampliar la monitorización ambiental.
- Acelerómetro de 6 ejes con detección de aceleración y frenado bruscos, giros y colisiones, además de un zumbador interno para avisos al conductor.
- Resiliencia celular: LTE FDD Cat M1 y NB‑IoT con respaldo GSM/EDGE y transportes de datos que incluyen MQTT para una entrega fiable de telemetría a Plaspy.
- Batería de respaldo integrada de 200 mAh y detección de interferencias de red para apoyar la respuesta anti-robo y las alertas de desconexión.
- Soporte FOTA, LEDs de diagnóstico y un amplio rango de temperatura para un funcionamiento fiable de la flota en entornos variados.

## Cómo Funciona con Plaspy

Cuando se integra con Plaspy, el TLD2-D transmite la posición GPS, telemetría CAN BUS e entradas de sensores directamente a la plataforma Plaspy utilizando transportes estándar \(TCP/UDP/MQTT/SMS\). Plaspy ingiere los datos del dispositivo para mapeo en tiempo real, geocercas, alertas y informes históricos. Los informes programados e intervalos de actualización configurables permiten a los gestores de flotas equilibrar la frescura de los datos y el uso de la red. Los datos de sensores BLE y los eventos de conducción se entregan junto con la ubicación para enriquecer los flujos de trabajo de seguridad y monitoreo de carga.

- Actualizaciones de ubicación y telemetría en tiempo real \(intervalos configurables, hasta ~3 segundos\).
- Datos de CAN BUS del vehículo: VIN, odómetro, nivel de combustible, RPM y códigos de diagnóstico \(DTC\).
- Alertas de encendido/apagado y notificaciones de desconexión a través de la batería de respaldo para respuesta anti-robo.
- Detección de colisiones y eventos de conducción \(frenado y aceleración bruscos, giros bruscos\) con avisos en el zumbador para el conductor y recopilación de datos de colisiones para análisis.
- Sensores Bluetooth: temperatura, humedad y estado de la puerta entregados a Plaspy cuando están emparejados \(soportado por accesorios TOPFLYtech\).

## Resumen Técnico

| Conectividad | LTE FDD Cat M1 y NB‑IoT; respaldo GSM/EDGE; transportes de datos: TCP, UDP, MQTT, SMS |
| --- | --- |
| Bandas | Cobertura de bandas amplia \(el fabricante proporciona una lista detallada de bandas para variantes regionales\) |
| Alimentación & Batería | Funciona con 7 V a 32 V DC; batería de respaldo interna Li‑Polymer de 200 mAh para alertas de desconexión |
| Interfaces | Conector OBDII, lectura de datos CAN \(ISO 15765‑4\), ranura nano SIM, depuración USB, LEDs indicativos \(red, diagnóstico, GNSS\) |
| GNSS | Receptor de alta ganancia MediaTek; admite GPS + GLONASS o GPS + BEIDOU; precisión de posición autónoma \< 2.5 m; TTFF rápido |
| Bluetooth | BLE 5.0 para TOPFLYtech y otros sensores Bluetooth compatibles \(temperatura, humedad y puerta\) |
| Gestión Remota | Soporte FOTA, informes de diagnóstico y informes programados para configuración y actualizaciones remotas |
| Forma y Entorno | Dispositivo OBDII plug-and-play; rango de temperatura de funcionamiento -30°C a +80°C; antenas internas LTE/GNSS/Bluetooth |

## Casos de Uso

- Gestión de flotas: rastrear la ubicación del vehículo, kilometraje, RPM y nivel de combustible para optimizar rutas, mantenimiento y monitoreo de combustible.
- Anti-robo y seguridad: recibir alertas de desconexión, detección de interferencias de red y estado de ignición para acelerar la recuperación y la respuesta.
- Seguridad del conductor y coaching: monitorizar aceleración y frenado bruscos, y giros bruscos con avisos del zumbador y generación de informes de eventos para entrenamiento de comportamiento.
- Carga sensible a temperatura: combinar sensores BLE de temperatura y humedad \(p. ej., TSTH1-B\) con datos GPS para auditar las condiciones ambientales durante el transporte.
- Monitoreo de puertas y accesos: usar sensores de puerta BLE \(p. ej., TSDT1-B\) para detectar aperturas no autorizadas de puertas y activar alertas en Plaspy.

## Por Qué Elegir este Rastreador con Plaspy

El TLD2-D ofrece una vía práctica y de baja fricción hacia la telemática profesional: su factor de forma OBDII plug-and-play y su telemetría CAN BUS integral lo hacen ideal para programas de gestión de flotas que requieren datos inmediatos y precisos. Como rastreador GPS compatible con Plaspy, ofrece seguimiento en tiempo real, diagnósticos detallados del vehículo e integración de sensores BLE para cubrir el monitoreo de combustible, condiciones de carga y eventos de puertas. La flexibilidad de red \(Cat M1 / NB‑IoT con respaldo GSM\), FOTA y clasificaciones ambientales robustas aseguran fiabilidad a largo plazo. Para operadores que buscan telemetría más rica, actualizaciones de ubicación más rápidas e integración sencilla en los tableros de Plaspy y flujos de trabajo de alertas, el TLD2-D es una opción fiable respaldada por certificaciones industriales y compatibilidad de accesorios para un control y monitoreo extendidos.

