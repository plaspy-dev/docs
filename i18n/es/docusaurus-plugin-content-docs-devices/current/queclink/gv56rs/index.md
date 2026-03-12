---
slug: /queclink/gv56rs
id: gv56rs
sidebar_label: GV56RS
sidebar_class_name: menu_item_tracker
---
# QuecLink - GV56RS

![GV56RS](./tracker.png)

El rastreador GV56RS es un dispositivo compacto compatible con Plaspy, diseñado para gestión de flotas, alquiler de vehículos, seguros basados en el uso \(UBI\) y recuperación de vehículos robados. Al combinar comunicación GSM/GPRS de cuádruple banda, un receptor MTK GNSS de alta sensibilidad y Bluetooth Low Energy integrado, el GV56RS ofrece seguimiento en tiempo real fiable, telemetría y control antirrobo desde una carcasa de perfil bajo que se adapta a vehículos ligeros y flotas de alquiler.

El GV56RS amplía la plataforma GV56 con un puerto serie RS485 para una integración extensa de sensores — hasta diez sensores RS485 cableados — además de temperatura 1-wire, identificador de conductor iButton y periféricos BLE. La integración con Plaspy desbloquea datos útiles del vehículo \(ubicación, encendido, niveles de combustible, identificación del conductor y eventos de choque\) para alimentar acciones de inmovilización remota, analítica de flotas y alertas automatizadas, para una gestión eficiente de la flota y flujos de SVR.

## Principales características

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y gestión de flotas con informes vía TCP/UDP/SMS.
- GSM/GPRS de cuádruple banda \(850/900/1800/1900 MHz\) para una amplia cobertura celular y un enlace de datos fiable.
- Puerto RS485 compatible con hasta diez sensores externos para monitorización de combustible, medición de carga y configuraciones multi-tanque.
- BLE integrado \(BLE 3.0 bidireccional para voz y BLE 4.0 para sensores periféricos\) para sensores Bluetooth, llaveros y lectores CAN BLE.
- Detección de encendido, salida digital de colector abierto \(corte de combustible/inmovilizador\) y identificación de conductor vía iButton para flujos de alquiler y UBI.
- GNSS de alta sensibilidad con precisión típica de posición \< 2,5 m CEP y TTFF rápido para un posicionamiento en tiempo real preciso.
- Formato compacto y antenas internas hacen que el GV56RS sea fácil de instalar y discreto para aplicaciones de antirrobo y SVR.

## Cómo funciona con Plaspy

Al combinarse con Plaspy, el GV56RS transmite la ubicación y la telemetría del vehículo a su servidor Plaspy mediante TCP, UDP o SMS. Plaspy lee lecturas GNSS, valores de sensores y estados de entrada/salida para ofrecer mapeo en tiempo real, rutas históricas, identificación del conductor y gestión de alarmas. Informes programables y desencadenadores de eventos en el dispositivo alimentan el motor de reglas de Plaspy para alertas oportunas y acciones automatizadas.

- Actualizaciones de ubicación y telemetría en tiempo real a Plaspy para seguimiento en vivo y reproducción de trayectorias.
- Informe del estado de encendido e identificación del conductor \(iButton\) para registrar viajes, tiempos de uso y facturación basada en eventos.
- Monitorización de combustible mediante hasta diez sensores RS485 y entrada analógica para telemetría precisa de los niveles de combustible.
- Capacidad de inmovilización remota mediante la salida digital de colector abierto \(corte de combustible\) controlada a través de comandos de Plaspy.
- Sensores y balizas Bluetooth \(temperatura, humedad, llaveros y lectores CAN BLE\) integrados en los paneles y alarmas de Plaspy.

## Resumen técnico

| Conectividad | GSM/GPRS de cuádruple banda \(850/900/1800/1900 MHz\); clase multi-slot GPRS 10; clase de estación móvil B |
| --- | --- |
| Bandas / RF | 850/900/1800/1900 MHz; salida RF 33±2 dBm \(GSM850/900\), 30±2 dBm \(GSM1800/1900\) |
| Alimentación y batería | Voltaje de funcionamiento 8–32 V DC; batería interna de respaldo Li‑polímero de 170 mAh para informes ante fallos de alimentación |
| Interfaces | Puerto RS485 \(hasta 10 sensores\), temperatura 1‑wire, iButton identificador de conductor, 1 entrada analógica configurable \(0–30 V\), 1 entrada digital \(encendido\), 1 salida digital de colector abierto \(máx 150 mA\) |
| GNSS | Receptor MTK GNSS; sensibilidad de seguimiento/navegación –165 dBm, autónomo –148 dBm; precisión típica \< 2,5 m CEP; TTFF: arranque en frío ~32 s, arranque en cálido ~30 s, arranque en caliente ~1 s |
| Bluetooth | BLE 3.0 \(soporte bidireccional de voz\) y BLE 4.0 para sensores periféricos y llaveros |
| Remoto y Generación de informes | Protocolos: TCP, UDP, SMS; informes programables \(tiempo, distancia, kilometraje, combinaciones\), alertas geocerca y informes activados por eventos |
| Sensores y Seguridad | Acelerómetro de 3 ejes, monitorización del comportamiento del conductor \(frenadas/aceleraciones bruscas\), detección de interferencias, recopilación de datos de incidentes |
| Formato y Entorno | Dimensiones 79,5 × 44,3 × 11,9 mm; peso 62 g; temperatura de funcionamiento −30 °C a +80 °C; almacenamiento −40 °C a +80 °C; antenas internas GSM, GNSS y Bluetooth; LEDs GSM y GNSS |

## Casos de uso

- Antirrobo de flotas e inmovilización — comandos de Plaspy pueden activar la salida de colector abierto para un corte de combustible controlado y flujos de recuperación de vehículos.
- Alquiler de vehículos e identificación del conductor — identificación del conductor vía iButton, junto con el registro de encendido para facturación segura por uso y responsabilidad del conductor.
- UBI y telemática — fijaciones GNSS precisas y telemetría del comportamiento del conductor \(frenadas/aceleraciones bruscas\) alimentan la puntuación de seguros y los informes de uso.
- Logística y vehículos con múltiples tanques — sensores de combustible y carga conectados vía RS485 proporcionan telemetría continua para camiones con múltiples tanques o carga especializada.
- Cargas sensibles a la temperatura — sensores BLE de temperatura/humedad y sondas 1-wire se integran a Plaspy para monitorización de condiciones ambientales.

## Por qué elegir este rastreador con Plaspy

El GV56RS ofrece una combinación equilibrada de diseño compacto, rendimiento robusto de GNSS/GSM y una amplia conectividad de sensores, que lo convierten en un rastreador GPS eficiente para implementaciones basadas en Plaspy. Su expansión RS485, soporte para accesorios BLE e integración con iButton proporcionan a integradores y proveedores de servicios opciones de telemetría flexibles sin aumentar significativamente el tamaño del hardware. Para gestión de flotas, UBI y recuperación de vehículos robados, el GV56RS ofrece un seguimiento en tiempo real confiable, monitorización de combustible y controles de inmovilización remota mientras alimenta a Plaspy con los datos necesarios para analítica, alertas y automatización operativa.

