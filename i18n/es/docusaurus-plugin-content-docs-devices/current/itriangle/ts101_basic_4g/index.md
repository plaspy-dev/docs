---
slug: /itriangle/ts101_basic_4g
id: ts101_basic_4g
sidebar_label: TS101 Basic 4G
sidebar_class_name: menu_item_tracker
---
# iTriangle - TS101 Basic 4G

![TS101 Basic 4G](./tracker.png)

El TS101 Basic 4G es un rastreador GPS compacto diseñado para telemática de vehículos y monitoreo de activos, ahora completamente compatible con Plaspy. Diseñado para flotas mixtas —vehículos eléctricos y convencionales— el TS101 Basic 4G combina conectividad LTE Cat‑1, posicionamiento GNSS \(GPS/GLONASS/BeiDou\) y almacenamiento en el borde para entregar seguimiento en tiempo real continuo y telemetría confiable para gestores de flotas que necesitan datos robustos e integrados en Plaspy.

Con un rango de entrada DC de 9 a 90 V, batería de respaldo interna de 180 mAh y soporte BLE 5.0 de corto alcance, el TS101 Basic 4G mantiene los vehículos visibles y controlables incluso durante pérdidas de energía o cobertura de red intermitente. Sus I/O configurables, interfaces CAN/RS485 opcionales y su aprovisionamiento OTA/FOTA lo convierten en una opción práctica y compatible con Plaspy para flujos de anti‑robo, monitoreo de combustible, estado de ignición, control del inmovilizador y análisis rutinarios de la flota.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con LTE Cat‑1 para un seguimiento en tiempo real y telemetría confiables.
- Rango de entrada 9–90V DC y batería de respaldo integrada de 180 mAh para seguimiento ininterrumpido ante pérdidas de energía.
- Receptor GNSS múltiple: GPS, GLONASS y BeiDou para una mejor localización en entornos complejos.
- Almacenamiento a bordo de 16 MB \(hasta ~6,000 registros de seguimiento\) para registro fuera de línea.
- I/O configurable y, opcionalmente, interfaces RS485 y CAN para integrar el encendido, relés del inmovilizador, sensores de combustible y datos del bus CAN.
- BLE 5.0 para sensores Bluetooth y aprovisionamiento de corto alcance o conectividad de accesorios.
- Detección de movimiento, análisis de conducción eficiente y geocercas para respaldar la gestión de flotas y el monitoreo del comportamiento del conductor.
- Actualizaciones OTA/FOTA y múltiples canales de configuración \(USB, SMS, TCP/IP, BLE\) para una gestión remota escalable.

## Cómo funciona con Plaspy

Integrar el TS101 Basic 4G con Plaspy proporciona flujos continuos de ubicación, eventos y telemetría a su panel de Plaspy. El dispositivo transmite fijaciones de posición GNSS y telemetría del vehículo mediante LTE Cat‑1 usando TCP/IP, mientras que el BLE local y las I/O permiten a Plaspy correlacionar las entradas de sensores, el estado de encendido y las acciones del inmovilizador con el historial de ubicación y alertas. Los registros fuera de línea almacenados en el dispositivo se cargan automáticamente cuando se restablece la cobertura de la red.

- Actualizaciones de ubicación y telemetría en tiempo real mediante LTE Cat‑1 \(TCP/IP\) y posicionamiento GNSS múltiple.
- Monitoreo del encendido, de puertas o de alarmas utilizando la entrada digital y la salida digital del dispositivo para la señalización de eventos.
- Monitoreo de combustible y adquisición de datos de sensores a través de entrada analógica, interfaz 1‑Wire o integración CAN opcional.
- Soporte remoto para inmovilizador: controle los relés de inmovilización o salidas de pánico a través de la salida digital para flujos de anti‑robo.
- Sensores y balizas Bluetooth: BLE 5.0 habilita telemetría de corto alcance y conexión de accesorios para temperatura, movimiento o identificación del conductor.

## Resumen técnico

| Modelo | TS101 Basic 4G |
| --- | --- |
| Conectividad | LTE Cat‑1 \(4G\) con TCP/IP; SMS; USB; BLE 5.0 |
| Bandas | No especificado — consulte al fabricante o variante regional para las bandas LTE compatibles |
| Alimentación y Batería | Entrada 9–90V DC; batería de respaldo interna de 180 mAh para seguimiento continuo ante pérdida de energía |
| Almacenamiento de datos | Almacenamiento a bordo de 16 MB \(hasta ~6,000 registros de seguimiento\) para registro fuera de línea |
| Interfaces y E/S | 1 entrada digital, 1 salida digital, 1 entrada analógica, interfaz 1‑Wire; interfaces RS485 y CAN opcionales |
| GNSS | GPS, GLONASS, BeiDou |
| Bluetooth | BLE 5.0 para sensores, balizas y configuración |
| Gestión remota | Configurable vía USB, SMS, TCP/IP o BLE; admite actualizaciones OTA / FOTA |
| Temperatura de funcionamiento | −25°C a +85°C |
| Factor de forma | Unidad telemática compacta para instalación en vehículos y activos |

## Casos de uso

- Antirrobo y inmovilización de flotas: use la salida digital para controlar los relés del inmovilizador y alertas de Plaspy para activar flujos de respuesta.
- Gestión de flotas en tiempo real: vigile la ubicación del vehículo, métricas de conducción eficiente y detección de movimiento para la optimización de rutas.
- Monitoreo de combustible y telemetría del motor: capture datos de sensores de combustible o del bus CAN para reducir el consumo y detectar anomalías.
- Integración de sensores Bluetooth: monitorice temperatura, movimiento de la carga o presencia del conductor con accesorios BLE conectados a los informes y alertas de Plaspy.
- Seguimiento de activos con resiliencia fuera de línea: el almacenamiento a bordo guarda hasta 6,000 registros, sincronizándose con Plaspy cuando la cobertura regresa.

## Por qué elegir este rastreador con Plaspy

El TS101 Basic 4G ofrece una combinación equilibrada de conectividad, posicionamiento GNSS probado e I/O flexible que lo convierten en un rastreador GPS eficaz para implementaciones basadas en Plaspy. Su amplio rango de voltaje y la batería de respaldo interna reducen las preocupaciones de instalación en vehículos eléctricos y convencionales, mientras que BLE 5.0 y el soporte opcional CAN/RS485 simplifican la integración de sensores y telemetría del vehículo. Para gestores de flotas que buscan un seguimiento en tiempo real confiable, controles antirrobo como inmovilizador remoto, monitoreo de combustible y telemetría que se transmite a Plaspy, este dispositivo ofrece una solución compacta, gestionable a distancia con resiliencia de datos sin conexión y capacidad de actualización OTA.

