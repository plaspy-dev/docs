---
slug: /gosafe/gtu100
id: gtu100
sidebar_label: GTU100
sidebar_class_name: menu_item_tracker
---
# Gosafe - GTU100

![GTU100](./tracker.jpg)

El GTU100 es un rastreador GPS compacto y de alto rendimiento diseñado para la gestión de flotas ligeras y comerciales, optimizado para implementaciones compatibles con Plaspy. Construido para ofrecer seguimiento confiable en tiempo real y telemetría rica, el GTU100 admite LTE Cat-1 con compatibilidad de respaldo 2G/3G y opciones de doble SIM/eSIM para garantizar conectividad continua en todo el mundo. Su receptor multi-GNSS, su arquitectura de bajo consumo y su amplia E/S lo convierten en un rastreador GPS ideal para operadores de flotas que requieren actualizaciones de ubicación consistentes, detección de accidentes y telemetría de sensores integrada.

Diseñado para una integración rápida con Plaspy, el GTU100 combina procesamiento de eventos a bordo \(Gosafe Event Manager\), gestión del dispositivo \(GICUS\) y actualizaciones de firmware OTA para simplificar despliegues y las operaciones continuas de la flota. Ya sea que necesite seguimiento en tiempo real, telemetría del comportamiento del conductor, medidas antirrobo o sensores Bluetooth para temperatura y monitorización de activos, el GTU100 ofrece un paquete listo para vehículos que escala en flotas mixtas.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy con conectividad LTE Cat-1 y respaldo 2G/3G para comunicaciones globales y resilientes.
- Receptor multi-GNSS de alta sensibilidad \(GPS / GLONASS / Galileo / BeiDou\) con precisión SBAS de hasta 2,0 m en cielo abierto y sensibilidad de seguimiento de -167 dBm.
- Modos de operación de bajo consumo \(suspensión profunda de 400 µA\) y batería de respaldo Li‑ion de 220 mAh a bordo para telemetría ininterrumpida y reporte de accidentes.
- Varios I/O configurables: detección de encendido; entrada digital \(0–30 VDC\); salida digital de colector abierto \(150 mA\); interfaz 1-Wire para sensores de identificación del conductor y temperatura.
- BLE 4.2 para conexión con sensores Bluetooth y periféricos inalámbricos, además de localización asistida por Wi‑Fi para mejorar la posición en entornos urbanos densos o interiores.
- Ajuste robusto para vehículos: amplio rango de voltaje de entrada \(9–40 VDC\) para sistemas de 12V y 24V, formato compacto, resistencia al agua IPX5 y rangos de temperatura extendidos para entornos exigentes.
- Gestión remota llave en mano y procesamiento de eventos con GEM y GICUS, que soporta entrega de datos TCP/UDP/SMS y actualizaciones de firmware OTA para operaciones a escala de flota.

## Cómo funciona con Plaspy

Cuando se despliega con Plaspy, el GTU100 se convierte en un nodo de telemetría completo que transmite ubicación, movimiento y datos de sensores a la plataforma Plaspy para seguimiento en tiempo real, alertas e informes históricos. Los datos se transmiten por redes celulares \(TCP/UDP/SMS\) hacia los endpoints de Plaspy y son procesados localmente por GEM para flujos de trabajo basados en eventos, como capturas de accidentes, eventos de encendido y registro de identificación del conductor.

- Actualizaciones de ubicación y telemetría en tiempo real: posiciones multi-GNSS, GPS asistido y correcciones asistidas por Wi‑Fi alimentan a Plaspy para un seguimiento preciso.
- Eventos de encendido y del conductor: detección de encendido y la identificación de conductor vía 1-Wire permiten a Plaspy correlacionar viajes, tiempos de funcionamiento y comportamiento del conductor.
- Detección de impactos y movimiento: el acelerómetro 3D integrado captura eventos de impacto y estado de movimiento para alertas inmediatas de Plaspy y reporte de accidentes.
- Control remoto y soporte anti‑robos: la salida de colector abierto puede usarse con módulos de relé externos para habilitar flujos de inmovilización y desactivación remota a través de Plaspy cuando sea necesario.
- Sensores Bluetooth: BLE 4.2 conecta sensores de temperatura, de puertas o de carga; Plaspy ingiere telemetría de sensores para monitoreo de flotas refrigeradas o seguimiento del estado de activos.

## Visión Técnica

| Conectividad | LTE Cat-1 con respaldo 2G/3G; soporte dual-SIM y opción de eSIM integrada; datos por TCP/UDP/SMS |
| --- | --- |
| Bandas | Bandas LTE Cat-1 que cubren una amplia huella global \(variantes por región/operador\) |
| Velocidades de datos | Hasta 5 Mbps de subida y 10 Mbps de bajada \(LTE Cat-1\) |
| Potencia y batería | Entrada 9–40 VDC \(sistemas de 12V y 24V\), batería de respaldo Li‑ion de 220 mAh a bordo; modos de operación: suspensión profunda de 400 µA, suspensión de 3 mA, ahorro de energía de 60 mA y seguimiento activo de 120 mA |
| Interfaces | Sensado de encendido; una entrada digital de nivel alto/bajo \(0–30 VDC\); una salida digital de colector abierto \(150 mA\); interfaz 1-Wire; conector de 8 cables; micro USB para configuración/depuración; acceso a SIM para 4FF y eSIM a bordo |
| GNSS | Multi‑GNSS: GPS / GLONASS / Galileo / BeiDou; precisión SBAS hasta 2.0 m en cielo abierto; sensibilidad de seguimiento de -167 dBm; GPS asistido y recepción simultánea de GNSS |
| Bluetooth | BLE 4.2 para conexión con sensores inalámbricos y balizas |
| Sensores | Acelerómetro 3D integrado para detección de movimiento e impactos; capturas de datos de choque compatibles |
| Gestión remota | Gosafe Event Manager \(GEM\) para procesamiento de eventos; gestión de dispositivos GICUS; actualizaciones de firmware OTA |
| Formato y entorno | 92 × 45 × 19,5 mm; 85 g; resistencia al agua IPX5; rango de temperatura de operación: -40 a +85 °C \(sin batería de respaldo\), -10 a +60 °C \(con batería de respaldo\) |
| Certificaciones y accesorios | Certificado CE y E‑Mark; FCC en proceso. Accesorios: montajes magnéticos y para arnés, sensores de temperatura, kits RFID/iButton, módulos de relé externos |

## Casos de Uso

- Gestión de flotas: seguimiento en tiempo real de vehículos ligeros y comerciales con identificación del conductor, registro de viajes y telemetría para la eficiencia operativa.
- Antirrobo e inmovilización: flujos de desactivación remota mediante la salida digital y módulos de relé externos integrados con alertas de Plaspy.
- Reporte de accidentes y comportamiento del conductor: el acelerómetro 3D y los datos de captura de choques permiten alertas de colisión y análisis posterior al evento en Plaspy.
- Monitoreo de activos sensorizado: sensores Bluetooth y sondas de temperatura 1‑Wire para transporte refrigerado, monitoreo del estado de la carga y sensores de activos.
- Despliegues globales de flotas mixtas: LTE Cat-1 con respaldo y opciones de eSIM que proporcionan conectividad fiable a través de redes regionales para telemetría remota.

## Por qué elegir este rastreador con Plaspy

El GTU100 combina robustez técnica con características prácticas para ofrecer un rastreo fiable compatible con Plaspy a gran escala. Su precisión multi-GNSS, sus modos de bajo consumo y su conectividad dual SIM/eSIM reducen el tiempo de inactividad y mejoran la disponibilidad de posicionamiento en entornos desafiantes. Combinado con el procesamiento de eventos de GEM y la gestión remota de GICUS, el GTU100 facilita el rastreo en tiempo real, telemetría y mantenimiento en flotas grandes. Para operadores que buscan añadir controles antifraude, reporte de accidentes e integración de sensores Bluetooth con Plaspy, el GTU100 ofrece una solución compacta, lista para vehículos, que soporta despliegues rápidos y una gestión a largo plazo.

