---
slug: /concox/vl808
id: vl808
sidebar_label: VL808
sidebar_class_name: menu_item_tracker
---
# Concox - VL808

![VL808](./tracker.png)

El VL808 es un terminal GNSS para vehículos con LTE cableado, diseñado para un seguimiento fiable de flotas y vehículos en entornos exigentes. Diseñado como un rastreador GPS compatible con Plaspy, el VL808 ofrece seguimiento en tiempo real robusto, precisión multi‑GNSS por debajo de 2,5 m CEP y una construcción industrial que mantiene visibles y seguros a las flotas y activos móviles en la plataforma Plaspy.

El dispositivo combina conectividad LTE Cat 1 con respaldo GSM, soporte para accesorios BLE 5.0, un acelerómetro a bordo para telemetría y eventos de comportamiento de conducción, y un amplio conjunto de E/S para sensores e integración con el vehículo. Con protección IP67, un amplio rango de voltaje de entrada y una batería de respaldo interna, el VL808 es ideal para gestión de flotas, monitoreo antirrobo, telemática de seguros y otras aplicaciones basadas en vehículos donde se requiere una integración fiable con Plaspy.

## Puntos destacados

- Rastreador GPS compatible con Plaspy con LTE Cat 1 y respaldo GSM para una transmisión de datos ubicua y un seguimiento en tiempo real fiable.
- Posicionamiento multi‑GNSS \(GPS, BDS, GLONASS\) con precisión indicada inferior a 2,5 m CEP para informes de ubicación precisos.
- Caja de grado industrial IP67 y rango ampliado de temperatura de operación \(–20 °C a +85 °C\) para entornos exteriores y de vehículos exigentes.
- Integración de sensores flexible: 1‑Wire para sensores de temperatura/iButton, BLE 5.0 para accesorios, E/S analógicas y digitales para monitoreo de combustible, puertas y encendido.
- Acelerómetro a bordo para telemetría y análisis del comportamiento de conducción \(aceleración brusca, frenada brusca y toma de curvas\), detección de colisiones.
- Amplia compatibilidad de alimentación para vehículos \(9–90 VDC\) con batería LiPo interna de respaldo de 270 mAh y protección de batería del vehículo para evitar descarga profunda.
- Capacidad de registro offline: 3.000+ entradas de datos mantiene la continuidad de datos durante interrupciones de red y se sincroniza con Plaspy cuando se restablece la conexión.

## Cómo funciona con Plaspy

Cuando se despliega con Plaspy, el VL808 transmite directamente a la plataforma la ubicación, telemetría y datos de eventos para habilitar el seguimiento en tiempo real, alertas e informes de flotas. Plaspy ingiere posiciones GNSS, eventos del acelerómetro, cambios de estado de E/S y datos de sensores BLE para que puedas monitorear el estado del vehículo, responder a alarmas y realizar análisis del comportamiento de conducción.

- Actualizaciones de ubicación y telemetría en tiempo real: soluciones multi‑GNSS \(GPS/BDS/GLONASS\) y la precisión de la posición alimentan mapas en vivo e historial.
- Estado de encendido y de puertas: detección de ACC/ignición y entradas digitales proporcionan notificaciones de eventos en tiempo real y segmentación de viajes.
- Monitoreo de combustible y telemetría de voltaje: entradas analógicas y detección de voltaje \(0–90 V ±0,3 V\) permiten a Plaspy rastrear entradas de sensores de combustible y la salud de la batería.
- Control remoto y soporte de inmovilización: salidas digitales pueden usarse para inmovilización remota o control de accesorios mediante flujos de trabajo de Plaspy \(la implementación depende del cableado y la configuración del vehículo\).
- Sensores y beacons Bluetooth: BLE 5.0 permite a Plaspy recibir datos de accesorios emparejados \(iBeacon, periféricos BLE\) para monitoreo de temperatura, proximidad o escenarios de identificación de conductor.

## Resumen técnico

| Modelo | VL808 \(terminal GNSS para vehículos con LTE cableado\) |
| --- | --- |
| Conectividad | LTE Cat 1 \(se admiten variantes FDD/TDD\) con respaldo GSM \(2G\) |
| Bandas | Amplio conjunto de bandas FDD/TDD y GSM \(depende del modelo\) |
| Alimentación y batería | Rango de entrada 9–90 VDC; batería LiPo interna de respaldo de 270 mAh; protección de la batería del vehículo \(desconexión automática ante batería baja\) |
| Interfaces | 1‑Wire \(sensores de temperatura, iButton\), puerto serie TTL, USB Tipo‑C para configuración, 3 salidas digitales, 4 entradas digitales \(una multiplexada con TTL‑RX\), 2 E/S analógicas \(AIN1/AIN2, 0–36 V multiplexadas con E/S digitales\) |
| Detección de voltaje | 0–90 V con precisión de ±0,3 V |
| GNSS | GPS, BDS, GLONASS; precisión &lt;2,5 m CEP; sensibilidad –165 dBm \(tracking\); TTFF de arranque en caliente ≤ 2 s, arranque en frío ≤ 38 s \(cielo abierto\) |
| Bluetooth | BLE 5.0 para emparejamiento de accesorios y soporte de iBeacon/periféricos |
| Sensores | Acelerómetro a bordo para detección de comportamiento de conducción y colisiones/eventos bruscos; compatibilidad con ACC/ignición y SOS, detección de exceso de velocidad y alertas de geocerca |
| Memoria y registro | Capacidad de registro offline: 3.000+ entradas de datos |
| Dimensiones y peso | 109,8 × 43,5 × 24,0 mm; aprox. 76 g |
| Entorno y protección | Carcasa IP67; rango de temperatura de operación –20 °C a +85 °C |
| Configuración y gestión | Configuración mediante herramientas de PC, SMS, plataforma Tracksolid Pro o Jimi IoT Lab |
| Conformidad | CE y E‑mark certificados |
| Formato | Terminal compacto cableado para instalaciones en vehículos y activos móviles |

## Casos de uso

- Gestión de flotas y monitorización de rutas: seguimiento en tiempo real, telemetría de comportamiento del conductor e informes de viajes para flotas comerciales.
- Antirrobo de flota e inmovilización: seguimiento de ubicación y salidas digitales configurables para admitir flujos de trabajo de inmovilización remota a través de Plaspy.
- Monitoreo de combustible y batería: entradas analógicas y detección de voltaje amplio permiten la integración con sensores de combustible y sistemas de protección de la batería del vehículo.
- Sensores BLE para temperatura o proximidad: emparejar periféricos BLE o balizas para monitoreo de temperatura, proximidad o escenarios de identificación de conductor.
- Telemática de seguros y rastreo de motocicletas: formato compacto, eventos basados en acelerómetro y precisión multi‑GNSS para seguros basados en el uso y instalaciones en vehículos pequeños.

## Por qué elegir este rastreador con Plaspy

El VL808 combina hardware robusto y E/S flexibles con la visibilidad en tiempo real y flujos de trabajo basados en reglas disponibles en Plaspy. Su precisión multi‑GNSS, conectividad LTE/GSM y registro offline mantienen los vehículos visibles y los datos fluyendo incluso en condiciones desafiantes. Los operadores de flotas obtienen telemetría accionable — encendido, eventos de acelerómetro, voltaje y entradas de sensores BLE — que alimentan alertas, informes e integraciones de Plaspy para una gestión de flotas más eficiente, respuesta ante antirrobo y análisis operativo.

Elegir el VL808 como rastreador GPS compatible con Plaspy ofrece un equilibrio práctico entre durabilidad, conectividad y extensibilidad. Soporta un amplio conjunto de sistemas de alimentación para vehículos, ofrece las interfaces necesarias para el monitoreo de combustible y el control del inmovilizador, y proporciona a los gestores de flotas la información rápida y fiable que necesitan para proteger activos, reducir el tiempo de inactividad y mejorar la seguridad del conductor.

