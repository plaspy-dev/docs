---
slug: /itriangle/ts101_basic_ev_can
id: ts101_basic_ev_can
sidebar_label: TS101 Basic EV CAN
sidebar_class_name: menu_item_tracker
---
# iTriangle - TS101 Basic EV CAN

![TS101 Basic EV CAN](./tracker.png)

El TS101 Basic EV CAN es un dispositivo telemático compacto y resistente, diseñado para un seguimiento fiable de vehículos y registro de datos. Diseñado para vehículos eléctricos y flotas convencionales, el TS101 Basic EV CAN es compatible con Plaspy y ofrece seguimiento en tiempo real, telemetría fiable y registro sin conexión para mantener la operación en movimiento incluso en entornos con cobertura débil.

Con una interfaz CAN de un solo canal, múltiples puertos de I/O, BLE 3.0 y GNSS interno que soporta GPS, GLONASS, Galileo y BeiDou, esta unidad está optimizada para gestión de flotas, protección anti-robo y telemetría específica para EV. Su carcasa con grado IP65, su rango amplio de entrada DC de 9–90V y su diseño de bajo consumo hacen del TS101 Basic EV CAN una opción práctica para flotas mixtas que requieren rastreadores duraderos y fáciles de integrar compatibles con Plaspy.

## Aspectos clave

- Seguimiento en tiempo real compatible con Plaspy y GNSS de múltiples constelaciones \(GPS, GLONASS, Galileo, BeiDou\) para una localización precisa.
- Interfaz CAN de un solo canal para telemetría de vehículos eléctricos \(EV\) y de vehículos de combustión interna \(ICE\), habilitando la gestión de flotas y la recopilación de datos de diagnóstico.
- Carcasa compacta con grado IP65 y rango de entrada 9–90V DC para un funcionamiento fiable tanto en EV como en vehículos convencionales.
- BLE 3.0 y antenas internas para conectividad de sensores de corto alcance y una instalación simplificada.
- Capacidad offline robusta con hasta 6,000 registros de datos almacenados localmente para evitar pérdidas de datos en áreas de cobertura limitada.
- Consumo en modo de espera de bajo consumo \(\<15 mA\) y una batería auxiliar interna de 500 mAh para preservar el seguimiento ante interrupciones de energía.
- Múltiples E/S \(1 entrada analógica, 2 entradas digitales, 1 salida digital\) y detección de movimiento basada en acelerómetro para anti-robo y monitoreo de eventos.

## Cómo funciona con Plaspy

El TS101 Basic EV CAN se integra a la perfección con Plaspy para entregar actualizaciones de ubicación continuas, telemetría del vehículo y alertas basadas en eventos. Los datos recopilados por el dispositivo —incluida la ubicación GNSS, telemetría del bus CAN, eventos de E/S y movimiento detectado por el acelerómetro— se transmiten a Plaspy a través de la conexión celular. Cuando la cobertura de red es limitada, el dispositivo acumula hasta 6,000 registros y los carga automáticamente cuando se restablece la conectividad, asegurando que no haya huecos en la gestión de flotas o en los registros anti-robo.

- Actualizaciones de ubicación y telemetría en tiempo real hacia Plaspy para seguimiento en vivo y reproducción de rutas.
- Estado del vehículo y detección de eventos mediante CAN y entradas digitales \(estados de encendido/arranque, puertas y alarma pueden reportarse cuando esté configurado\).
- Registro de telemetría para métricas de EV y diagnósticos de ICE a través de la integración de datos CAN.
- El inmovilizador remoto o acciones de control pueden implementarse mediante la salida digital cuando la integración lo permita.
- Sensores y balizas Bluetooth \(BLE 3.0\) para telemetría de corto alcance, como identificación del conductor, sensores de temperatura o sensores auxiliares.

## Visión técnica

| Modelo | TS101 Basic EV CAN |
| --- | --- |
| Conectividad | Celular \(GSM indicado por antena GSM interna\), BLE 3.0, USB, SMS, TCP/IP |
| GNSS | GPS, GLONASS, Galileo, BeiDou \(antena GNSS interna\) |
| Interfaz CAN | Interfaz CAN de un solo canal |
| Interfaces | 1 entrada analógica, 2 entradas digitales, 1 salida digital, 1 RS232 para depuración |
| Alimentación y batería | Entrada DC amplia de 9–90V; batería auxiliar interna de 500 mAh; modo de sueño \<15 mA |
| Almacenamiento | Hasta 6,000 registros de datos para registro offline |
| Carcasa y durabilidad | Carcasa con clasificación IP65, temperatura de funcionamiento -25°C a +85°C |
| Alertas y sensores | Alertas de manipulación, detección de movimiento basada en acelerómetro |
| Firmware y Configuración | Configuración y actualizaciones vía USB, SMS, TCP/IP, Bluetooth; OTA/FOTA soportados |
| Dimensiones y peso | 96 mm × 84 mm × 31 mm; aproximadamente 145 g |
| Antenas | Antenas internas para GSM, GNSS y BLE |

## Casos de uso

- Gestión de flotas para flotas mixtas de vehículos eléctricos \(EV\) y de combustión interna \(ICE\) — monitorea la ubicación, las rutas y la telemetría obtenida del CAN para obtener información operativa.
- Flujos de anti-robo e inmovilización — alertas de movimiento por acelerómetro, detección de manipulación y soporte de control remoto mediante salida digital para una respuesta rápida.
- Registro de telemetría de EV — captura de métricas del bus CAN y reenvío de datos específicos de EV hacia Plaspy para monitoreo de batería y rendimiento.
- Centros de sensores de corto alcance — la conectividad BLE permite la identificación del conductor, monitoreo de temperatura o datos de sensores auxiliares para asociarlos a los registros del vehículo.
- Operaciones de campo resistentes — la clasificación IP65 y el amplio rango de voltaje hacen que el dispositivo sea adecuado para vehículos comerciales que operan en entornos difíciles.

## Por qué elegir este rastreador con Plaspy

Elegir el TS101 Basic EV CAN para la integración con Plaspy ofrece a las flotas un equilibrio entre hardware robusto y conectividad flexible. Su interfaz CAN proporciona una ruta directa para la telemetría de EV y de vehículos hacia Plaspy, mientras que BLE y E/S amplían las opciones de sensores y control, como la identificación del conductor o flujos de inmovilización remota. El almacenamiento offline del dispositivo, la detección de manipulación y su diseño de bajo consumo reducen la pérdida de datos y aumentan la fiabilidad para la gestión de flotas y aplicaciones anti-robo. Con soporte OTA/FOTA y múltiples canales de configuración \(USB, SMS, TCP/IP, Bluetooth\), el TS101 Basic EV CAN es sencillo de desplegar a escala y mantenerse actualizado a través de las herramientas de gestión de Plaspy.

