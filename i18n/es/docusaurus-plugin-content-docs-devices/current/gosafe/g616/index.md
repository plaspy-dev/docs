---
slug: /gosafe/g616
id: g616
sidebar_label: G616
sidebar_class_name: menu_item_tracker
---
# Gosafe - G616

![G616](./tracker.jpg)

El rastreador GPS G616, resistente, es un dispositivo telemático de grado profesional diseñado para la gestión de flotas empresariales e integraciones compatibles con Plaspy. Diseñado para un seguimiento en tiempo real fiable, reconstrucción de accidentes y telemática para seguros, el G616 combina precisión multi‑GNSS, conectividad LTE Cat‑1 y 2G a nivel mundial, captura de datos de accidentes a alta tasa y un conjunto amplio de I/O de vehículo para satisfacer exigentes requisitos de despacho, recuperación y analítica de flotas.

El G616 es ideal para proveedores de servicios e integradores que necesitan un rastreador GPS compatible con Plaspy que ofrezca telemetría, monitorización de encendido y soporte de sensores extensible \(incluidos sensores Bluetooth y sensores de combustible\). Su diseño eléctrico y mecánico robusto, la capacidad FOTA y las opciones de antena interna facilitan la instalación y la gestión remota a lo largo de grandes flotas de vehículos.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con conectividad LTE Cat‑1 y respaldo GSM/GPRS para una cobertura global fiable y seguimiento en tiempo real.
- Motor multi‑GNSS \(GPS/GLONASS/Galileo/BeiDou\) con precisión SBAS de hasta 2,0 m a cielo abierto para una localización precisa del vehículo y verificación de rutas.
- Captura de datos de choques y conducción de alta frecuencia: hasta 100 Hz de detección de choques, combinada con actualizaciones GPS a 4 Hz para una reconstrucción precisa de accidentes y análisis del comportamiento del conductor.
- Amplias I/O del vehículo — detección de encendido, entradas analógicas y digitales, salidas de drenaje abierto y una salida con retención — que permiten telemetría, implementaciones de inmovilizador e integraciones personalizadas.
- Soporte BLE 4.2 para sensores y accesorios inalámbricos \(temperatura, etiquetas de activos\), además de RS232 y 1‑Wire® para identificación del conductor y conectividad periférica.
- Diseño de bajo consumo para sistemas de vehículo de 12V/24V con opción de batería de respaldo LI‑PO interna y corrientes de espera muy bajas para conservar la batería del vehículo.
- Actualizaciones FOTA \(firmware over‑the‑air\) y almacenamiento a bordo para una gestión remota escalable y mantenimiento de firmware a través de una flota.

## Cómo funciona con Plaspy

Cuando se integra con Plaspy, el G616 transmite ubicación, telemetría y datos de eventos mediante modos de datos TCP/UDP o SMS, lo que permite seguimiento en tiempo real, reproducción histórica y alertas configurables. Plaspy lee telemetría de alta frecuencia y registros de choques para construir perfiles de conductores, activar alertas de geocerca y generar informes de cumplimiento o de seguros. Las I/O flexibles y el soporte BLE del dispositivo permiten a Plaspy ingerir el estado de encendido, datos de sensores y eventos de control remoto para obtener insights accionables de la flota.

- Actualizaciones en tiempo real de ubicación y telemetría a través de LTE Cat‑1 \(con respaldo GSM/GPRS\) hacia Plaspy para seguimiento en mapa en vivo y reproducción de rutas.
- Estado de encendido y monitorización de entradas \(línea de detección de encendido y entradas digitales/analógicas configurables\) para un preciso tiempo de funcionamiento del motor y segmentación de rutas.
- Monitoreo de combustible y telemetría de sensores cuando se empareja con sensores de combustible compatibles; Plaspy muestra tendencias de combustible y alertas ante anomalías de consumo.
- Capacidad de inmovilización remota mediante salidas configurables y una salida con retención, lo que permite a Plaspy emitir comandos de inmovilización/desbloqueo a través del cableado del vehículo.
- Sensores y balizas Bluetooth \(BLE 4.2\) para temperatura, detección de puertas/movimiento o presencia del conductor; Plaspy integra la telemetría BLE en los paneles de control de la flota.

## Resumen técnico

| Conectividad | LTE Cat‑1 y 2G \(GSM/GPRS\) con modos de datos TCP/UDP/SMS |
| --- | --- |
| Bandas | Soporte de bandas LTE Cat‑1 global \(más respaldo GSM/GPRS\) |
| Alimentación y batería | Tensión de operación 8–40 V DC \(soporta sistemas de 12V y 24V\); corrientes de reposo y de ahorro de energía bajas \(~3 mA en reposo, 60 mA en modo ahorro, 120 mA en activo\); batería de respaldo LI‑PO interna de 220 mAh opcional |
| Interfaces | 2 entradas digitales, 1 detección de encendido, 1 entrada programable \(analógica/ dispara negativo\), 1 entrada analógica, 2 salidas digitales \(open‑drain, 300 mA\), 1 salida latched \(150 mA\), puerto RS232, 1‑Wire® driver ID, LEDs de estado |
| GNSS | Multi‑GNSS \(GPS/GLONASS/Galileo/BeiDou\) con SBAS; seguimiento concurrente de hasta 3 sistemas GNSS; actualizaciones GPS a 4 Hz; sensibilidad de seguimiento −162 dBm; precisión de posición de aproximadamente 2,0 m en cielo abierto |
| Bluetooth | BLE 4.2 para sensores y balizas inalámbricos |
| Gestión remota | Actualizaciones FOTA; memoria flash a bordo \(4 Mbit, capacidad para almacenar alrededor de 8,000 registros\) |
| Sensores y CPU a bordo | Acelerómetro 3D para detección de choques; CPU ARM Cortex‑M3 |
| Resistencia y entorno | Cumple SAE J1455, MIL‑STD de choques y vibraciones, SAE J1113; FCC Part 15B; rango de operación −40 °C a +85 °C \(sin batería de respaldo\) |
| Formato | Compacto: 80 × 52 × 26 mm; antena GPS interna integrada y antena celular interna; montaje mediante bridas, velcro o adhesivo |

## Casos de uso

- Gestión de flotas y despacho: seguimiento en tiempo real, optimización de rutas y flujos de telemetría para grandes flotas de vehículos mediante los paneles de Plaspy.
- Antirrobo y recuperación de vehículos: ubicación en vivo, alertas de geocerca configurables \(hasta 200 geocercas físicas\) y control remoto de inmovilizador vía salidas.
- Telemática para seguros y reconstrucción de accidentes: datos de choques de alta frecuencia \(100 Hz\) con actualizaciones GPS a 4 Hz para líneas de eventos precisas y puntuación del comportamiento del conductor.
- Monitoreo de combustible y mantenimiento preventivo: integrar sensores de combustible y entradas analógicas a Plaspy para monitoreo de consumo y diagnósticos de funcionamiento del motor.
- Identificación del conductor y sensores auxiliares: 1‑Wire® para ID de conductor, sensores BLE y periféricos RS232 para monitorización a nivel de asiento o carga y registros de conductor validados.

## Por qué elegir este rastreador con Plaspy

Para integradores y operadores de flota que eligen un rastreador GPS compatible con Plaspy, el G616 destaca por su equilibrio entre precisión, robustez y flexibilidad de I/O. Su precisión multi‑GNSS y su acelerómetro de grado crash proporcionan la telemetría y los datos de seguridad que aseguradoras y gestores de flotas exigen. La conectividad LTE Cat‑1 con respaldo GSM y un consumo de energía reducido aseguran un seguimiento en tiempo real persistente en vehículos de 12V y 24V. Las entradas/salidas programables del dispositivo, el soporte BLE 4.2 y los accesorios disponibles \(paquetes de batería, micrófonos, botones de pánico, sensores de combustible y kits iButton\) facilitan adaptar soluciones para anti‑robo, telemetría, monitoreo de combustible y flujos de inmovilización dentro de Plaspy.

Combinado con FOTA para la gestión remota del firmware y un almacenamiento a bordo robusto para conectividad intermitente, el G616 ofrece una plataforma confiable para la gestión de flotas escalable, seguimiento en tiempo real y análisis telemático en Plaspy, lo que permite a los equipos de operaciones reducir riesgos, mejorar la utilización y responder con mayor rapidez a los incidentes.

