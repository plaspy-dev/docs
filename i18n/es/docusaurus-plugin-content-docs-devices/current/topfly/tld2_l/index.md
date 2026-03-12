---
slug: /topfly/tld2_l
id: tld2_l
sidebar_label: TLD2-L
sidebar_class_name: menu_item_tracker
---
# TopFly - TLD2-L

![TLD2-L](./tracker.png)

El TLD2-L 4G LTE es un rastreador GPS OBDII compacto y de instalación plug-and-play, diseñado para un seguimiento de vehículos sencillo, sin mantenimiento y con una rápida integración en Plaspy. Pensado para insertarse directamente en el puerto OBDII del vehículo, el TLD2-L ofrece actualizaciones frecuentes de ubicación en tiempo real, detección de colisiones y conducción agresiva, y compatibilidad con accesorios Bluetooth Low Energy \(BLE\); lo que lo hace ideal para flotas, vehículos ligeros comerciales y programas de activos conectados que requieren telemetría fiable y visibilidad del comportamiento del conductor.

Como rastreador GPS compatible con Plaspy, el TLD2-L ofrece un rendimiento GNSS fiable, conectividad celular LTE-M/NB-IoT con respaldo GSM y almacenamiento en el dispositivo para una operación offline extendida. Su acelerómetro integrado, alertas de encendido/apagado, detección de desconexión con soporte de batería de respaldo y la capacidad FOTA permiten a los gestores de flotas desplegar a gran escala manteniendo el control remoto y la gestión del firmware a través de la plataforma de Plaspy.

## Puntos clave

- Instalación OBDII plug-and-play: sin herramientas ni cableado; instálelo en segundos para un despliegue rápido en campo.
- Seguimiento en tiempo real cada 3 segundos como máximo con amplio almacenamiento offline \(hasta 60,000 puntos\) para telemetría fiable cuando la cobertura se interrumpe.
- Conectividad 4G LTE Cat M1 y Cat NB2 con respaldo GSM/EDGE para una amplia compatibilidad de red.
- Acelerómetro de 6 ejes integrado para aceleración brusca, frenada brusca, giros pronunciados y detección de colisiones.
- BLE \(compatible con 4.0/5.0\) para sensores de temperatura/humedad, sensores de puerta/contacto y relés inalámbricos para habilitar funciones de inmovilizador remoto o control.
- Alertas de encendido/apagado, alarmas de desconexión, avisos de batería baja y un zumbador interno para alertas al conductor o notificaciones de conducción temeraria.
- Soporte FOTA y protocolos de transporte TCP/UDP/MQTT/SMS para gestión remota y entrega robusta de datos a Plaspy.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el TLD2-L proporciona ubicación y telemetría continuas a la plataforma utilizando protocolos de transporte seguros. Plaspy procesa lecturas GNSS, eventos del acelerómetro y datos de sensores BLE para presentar mapas en tiempo real, análisis de comportamiento y alertas accionables para la gestión de flotas, respuesta ante robos y monitoreo de condiciones. El almacenamiento intermedio y la generación de informes programados del dispositivo aseguran la integridad de los datos incluso ante interrupciones de la red.

- Actualizaciones de ubicación y telemetría en tiempo real \(intervalos de informe configurables, hasta cada 3 segundos\).
- Eventos de comportamiento de conducción derivados del acelerómetro de 6 ejes: aceleración brusca, frenada brusca, giros pronunciados y colisiones para el análisis de seguridad de la flota.
- Alertas de encendido/apagado e alarmas de desconexión con soporte de batería de respaldo para anti-robo y detección de manipulación.
- Integración de sensores BLE para temperatura, humedad y estado de puerta/contacto; los relés inalámbricos pueden activarse para acciones de inmovilización remota o control.
- Informes programados por tiempo, ángulo o distancia y transmisión sobre TCP/UDP/MQTT/SMS para una integración flexible y entrega de telemetría a Plaspy.

## Resumen técnico

| Conectividad | LTE FDD Cat M1 y Cat NB2; respaldo GSM/EDGE |
| --- | --- |
| Bandas | Soporta bandas LTE-M y NB‑IoT con respaldo GSM/EDGE heredado \(las listas de bandas varían según la variante regional\) |
| Potencia y batería | Amplio rango de tensión de operación 7–32 V DC; batería interna de respaldo Li‑Polímero de 200 mAh para desconexión y eventos de bajo consumo |
| Interfaces | Conector OBDII, ranura nano SIM, antenas internas LTE/GNSS/Bluetooth, indicadores LED \(red de red/GNSS\), USB para depuración, zumbador interno de eventos |
| GNSS | Receptor de alta ganancia MediaTek que admite GPS+GLONASS o GPS+BeiDou; TTFF rápido y precisión de posición autónoma típicamente &lt;2.5 m CEP |
| Bluetooth | BLE 4.0 / 5.0 compatible para sensores, balizas y relés inalámbricos |
| Gestión remota y protocolos | FOTA \(firmware over the air\); TCP/UDP/MQTT y SMS; control de roaming de datos |
| Formato | Dongle OBDII compacto, 63 × 47 × 20 mm, peso 45 g; rango de temperatura de funcionamiento de −30 °C a +80 °C |

## Casos de uso

- Gestión de flotas y visibilidad en tiempo real del rastreador GPS para optimizar rutas y la planificación de despachos mediante los paneles de Plaspy.
- Monitoreo del comportamiento del conductor y programas de seguridad mediante eventos del acelerómetro y analítica integrada para reducir la conducción arriesgada.
- Monitoreo de cadena de frío o condiciones de la carga mediante sensores BLE de temperatura y humedad; Plaspy registra telemetría junto a la ubicación.
- Alertas anti-robo y detección de manipulación con estado de encendido, detección de desconexión y inmovilización remota vía relés inalámbricos cuando se requiere acción inmediata.
- Seguimiento sencillo de activos para vehículos de alquiler o compartidos donde la instalación plug-and-play OBDII minimiza el tiempo de inactividad y el costo de despliegue.

## Por qué elegir este rastreador con Plaspy

El TLD2-L equilibra simplicidad y capacidad para empresas que buscan un rastreador GPS compatible con Plaspy que se instala en segundos y requiere un mantenimiento mínimo. Su seguimiento en tiempo real frecuente, su amplio búfer offline y su receptor GNSS robusto proporcionan ubicación y telemetría fiables incluso en entornos desafiantes. Los operadores de flotas obtienen telemetría de comportamiento del conductor, eventos basados en el encendido y soporte de sensores BLE para ampliar la telemetría a flujos de trabajo de monitoreo de combustible o de condiciones de la carga cuando estén disponibles los PIDs OBD-II del vehículo o sensores compatibles. Con FOTA, transporte multiprotocolo y soporte para control de inmovilizador remoto, el TLD2-L escala a través de programas de gestión de flotas mientras mantiene centralizados en Plaspy la anti-robo, telemetría e información operativa.

