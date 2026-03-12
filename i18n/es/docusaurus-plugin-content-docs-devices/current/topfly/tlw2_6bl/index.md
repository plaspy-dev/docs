---
slug: /topfly/tlw2_6bl
id: tlw2_6bl
sidebar_label: TLW2-6BL
sidebar_class_name: menu_item_tracker
---
# TopFly - TLW2-6BL

![TLW2-6BL](./tracker.png)

El TLW2-6BL es un rastreador GPS para vehículos y activos alimentados por cable, diseñado para la gestión profesional de flotas, logística y operaciones de cadena de frío. Compatible con Plaspy desde el primer momento, ofrece conectividad celular resistente \(CAT-M1 / CAT NB2 con respaldo 2G\), GNSS de alta precisión, E/S configurable y soporte de sensores BLE 5.0 para habilitar seguimiento en tiempo real, telemetría y flujos de trabajo anti-robos sin necesidad de una integración extensa.

Diseñado para integradores y operadores de flotas que requieren telemetría confiable en el vehículo, el TLW2-6BL admite actualizaciones de posición rápidas \(tan frecuentes como cada 3 segundos\) y almacenamiento local en búfer de hasta 49,000 puntos durante los periodos sin cobertura. Detección estricta de ignición, control remoto de salidas para inmovilizador o sirena y detección de movimiento a bordo lo convierten en un rastreador GPS ideal compatible con Plaspy para anti-robo de vehículos, monitorización del comportamiento de conducción y visibilidad de la cadena de frío cuando se empareja con sensores Bluetooth.

## Características clave

- Rastreador GPS compatible con Plaspy con conectividad 4G CAT-M1 y CAT-NB2, además de respaldo 2G para cobertura celular global.
- GNSS MediaTek de alta precisión \(GPS/GLONASS/Galileo/BeiDou\) que ofrece una precisión de posición autónoma superior a 2 m CEP y TTFF rápido.
- Seguimiento y telemetría en tiempo real: informes de posición tan frecuentes como cada 3 segundos y almacenamiento en búfer de hasta 49,000 puntos cuando está offline.
- Integración por Cable con detección de ignición, 2 entradas digitales, 1 salida digital y 1 entrada digital/analógica configurable para telemetría \(p. ej., monitorización de combustible\).
- Acelerómetro de 6 ejes incorporado para detección de remolque, detección de colisiones y alertas de comportamiento de conducción \(aceleración brusca, frenado, curvas, exceso de velocidad\).
- Control remoto y acciones anti-robos mediante salida configurable \(control de inmovilizador/relé, zumbador o sirena\) y alarmas por pérdida de energía y por interferencia de señal.
- BLE 5.0 para accesorios TOPFLYtech y sensores BLE de terceros compatibles para habilitar el monitoreo de temperatura/humedad y del estado de puertas para la cadena de frío y la logística.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el TLW2-6BL transmite la posición GNSS, telemetría del vehículo y datos de sensores a su panel de Plaspy utilizando protocolos telemáticos estándar. Plaspy ingiere las cargas útiles TCP/UDP/MQTT o SMS del dispositivo y presenta la ubicación en tiempo real, alertas e informes históricos. Los puntos almacenados en búfer se cargan cuando se restablece la conectividad, asegurando la reconstrucción continua de rutas y la generación de informes de cumplimiento.

- Actualizaciones de ubicación y telemetría en tiempo real: informes de posición de alta frecuencia para un seguimiento preciso de la flota y la reproducción de rutas.
- Detección y reporte de ignición y estado: la detección de ignición admite eventos de encendido/apagado del motor y análisis de sesiones de conducción.
- Monitoreo de combustible y sensores analógicos: la entrada digital/analógica configurable puede usarse para telemetría como sensores de nivel de combustible u otros sensores analógicos.
- Inmovilizador remoto y control de salidas: use Plaspy para activar la salida del dispositivo para control de relé/inmovilizador, zumbador o sirena para medidas anti-robos.
- Sensores Bluetooth: BLE 5.0 facilita la integración con sensores de temperatura/humedad y de puertas para visibilidad de la cadena de frío directamente dentro de Plaspy.

## Resumen técnico

| Conectividad | 4G CAT-M1, CAT NB2 con respaldo 2G |
| --- | --- |
| Bandas | Cobertura global de bandas para CAT-M1/CAT-NB2 con respaldo 2G \(según modelo\) |
| Potencia & Batería | Voltaje de operación 7 V a 60 V DC; batería interna de respaldo Li-Polymer de 200 mAh para funcionamiento ante pérdida de potencia |
| Interfaces | 2 entradas digitales, 1 salida digital, 1 entrada digital/analógica configurable; detección de ignición; control remoto de salida para relé/zumbador/inmovilizador |
| GNSS | Receptor MediaTek de alta ganancia multiconstelación \(GPS, GLONASS, Galileo, BeiDou\); precisión autónoma &lt; 2 m CEP; TTFF frío &lt;29 s, tibio &lt;27 s, caliente &lt;1 s |
| Bluetooth | BLE 5.0 para accesorios TOPFLYtech y sensores BLE de terceros compatibles |
| Datos y Protocolos | TCP, UDP, MQTT, SMS; FOTA para actualizaciones remotas de firmware |
| Forma y Entorno | Protección IP65; dimensiones 102,5 × 42,5 × 12 mm; peso 55 g; temperatura de operación -30 °C a +80 °C |
| Características Adicionales | Acelerómetro de 6 ejes a bordo, almacenamiento en búfer de hasta 49,000 puntos de ubicación, informes programados por tiempo/ángulo/distancia, alarmas por exceso de velocidad, batería de respaldo baja, pérdida de energía externa y interferencia de la señal de red |

## Casos de uso

- Gestión de flotas: seguimiento continuo en tiempo real, registro de viajes basado en la ignición y monitorización del comportamiento de conducción para mejorar la seguridad y reducir los costos de combustible.
- Anti-robo e inmovilización: control remoto de salidas para inmovilizador o activación de relé remoto, además de alarmas de manipulación y desconexión de energía para la seguridad del vehículo.
- Monitorización de la cadena de frío: emparejar sensores BLE de temperatura/humedad para mantener el cumplimiento y la visibilidad de las cargas refrigeradas durante el tránsito.
- Rastreo de activos con alimentación: rastree equipos de construcción, generadores u otros activos con historial de ubicación en búfer durante caídas de red.
- Logística y reconstrucción de rutas: informes de alta frecuencia y un amplio búfer en el dispositivo permiten una reproducción precisa de rutas y un análisis de prueba de entrega.

## Por qué elegir este rastreador compatible con Plaspy

Elegir el TLW2-6BL como rastreador GPS compatible con Plaspy ofrece una combinación equilibrada de conectividad celular resiliente, GNSS de alta precisión y E/S de grado vehicular que soporta ignición, inmovilizador y telemetría en el mundo real. Su soporte BLE 5.0 y la entrada analógica facilitan la extensión de telemetría para monitorización de temperatura en la cadena de frío o detección de combustible, mientras que el soporte TCP/UDP/MQTT y FOTA simplifica la integración y el mantenimiento remoto. Para operadores de flotas e integradores de sistemas que buscan una monitorización en tiempo real confiable, controles anti-robo y un almacenamiento offline robusto, el TLW2-6BL ofrece una solución compacta y resistente a la intemperie que se integra de forma limpia en los flujos de trabajo de Plaspy y escala entre flotas mixtas.

