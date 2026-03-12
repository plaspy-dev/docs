---
slug: /atrack/as11
id: as11
sidebar_label: AS11
sidebar_class_name: menu_item_tracker
---
# ATrack - AS11

![AS11](./tracker.jpg)

El AS11 es un rastreador GPS LTE robusto, diseñado para la gestión de activos a largo plazo en entornos adversos y es compatible con Plaspy desde el inicio. Diseñado para contenedores, equipos pesados, remolques y otros activos de alto valor, el AS11 combina protección de grado industrial \(IP68, MIL-STD-810H\) con una larga duración de la batería y opciones de conectividad flexibles para que puedas desplegar seguimiento en tiempo real y telemetría fiables donde el acceso para mantenimiento es limitado.

El AS11 admite variantes celulares 4G LTE Cat.1 y Cat.M1 e incluye antenas GNSS y celulares integradas, con una antena externa GPS/GLONASS opcional para recepciones desafiantes. Con Bluetooth Low Energy a bordo para sensores locales, una amplia E/S para ignición y alarmas, y registro en cola para redes intermitentes, el AS11 proporciona los datos que Plaspy necesita para ubicaciones, telemetría y flujos de trabajo anti-robo precisos.

## Aspectos clave

- Seguimiento de activos compatible con Plaspy — entrega ubicación y telemetría mediante TCP/UDP/SMS para una integración sencilla en paneles y alertas de Plaspy.
- Carcasa robusta con IP68 y cumplimiento MIL-STD-810H — diseñada para agua, polvo, vibración y golpes en despliegues industriales.
- Batería recargable de larga duración — 3.7V Li‑ion 6,400 mAh; hasta 2 meses de operación con intervalos de reporte cada hora para seguimiento de bajo mantenimiento.
- Opciones LTE duales — variantes 4G LTE Cat.1 y Cat.M1 para amplio soporte de operadores y despliegues de área amplia de bajo consumo.
- GNSS de alta sensibilidad con precisión típica CEP de 2.5 m — posicionamiento fiable GPS/GLONASS soportado por SBAS \(WAAS/EGNOS/GAGAN/MSAS\).
- Amplia E/S y soporte de sensores — entrada de ignición, E/S digital, entrada analógica, RS232, acelerómetro y 1‑Wire para sensores iButton/temperatura.
- Bluetooth Low Energy v4.2 para sensores locales — permite sensores de temperatura, proximidad y emparejamiento de accesorios con soporte BLE de largo alcance.
- Registro offline sólido y mensajería en cola — la memoria flash interna almacena grandes volúmenes de registros hasta que haya conectividad.

## Cómo funciona con Plaspy

El AS11 transmite la telemetría que Plaspy necesita para el seguimiento en tiempo real, la gestión de flotas y flujos de trabajo anti-robo. Mediante TCP/UDP o SMS sobre IMS, el rastreador envía fijaciones GNSS, lecturas de sensores y eventos de E/S a los endpoints de Plaspy; cuando la conectividad se interrumpe, el AS11 almacena localmente los registros y los mensajes en cola y los sube automáticamente cuando la red vuelve. Este comportamiento hace que el AS11 sea ideal para activos remotos o con conectividad intermitente que aún requieren información casi en tiempo real.

- Actualizaciones de ubicación y telemetría en tiempo real: fijaciones GPS/GLONASS, velocidad y rumbo para un reporte preciso del rastreador GPS.
- Eventos de ignición y entrada digital: la entrada de ignición configurable y las entradas digitales reportan cambios en el estado del vehículo para gestión de flotas y geocercas.
- Telemetría analógica \(0–40 V\): admite sensores analógicos externos y puede utilizarse para monitoreo de combustible u otras integraciones de telemetría analógica cuando proceda.
- Control remoto vía salidas: salidas digitales configurables \(corriente de drenaje máxima de 500 mA\) pueden emplearse para implementar inmovilizador u otras acciones de control remoto cuando la instalación del vehículo lo permita.
- Sensores Bluetooth: BLE v4.2 permite emparejar sensores de temperatura, proximidad o activos para enriquecer la telemetría en Plaspy.
- Registros en cola y retransmisión: hasta 125,000 registros y 23,000 mensajes en cola almacenados en la memoria flash interna para su carga diferida.

## Visión General Técnica

| Conectividad | 4G LTE Cat.1 y Cat.M1 \(variantes disponibles\) |
| --- | --- |
| Bandas / Variantes | Variantes de hardware para NA, Japón/EMEA, Global y Canadá \(el soporte del operador depende de la variante\) |
| Alimentación y batería | Batería recargable integrada de 3.7V Li‑ion, 6,400 mAh; hasta ~2 meses de autonomía con intervalos de reporte cada hora |
| Interfaces | RS232 serial, entrada de ignición digital configurable, hasta 2 entradas digitales configurables, 2 salidas digitales configurables \(corriente de drenaje máxima 500 mA\), 1 entrada analógica configurable \(0–40 V, 12-bit\), 1‑Wire \(iButton/temperatura\), bus de vehículo opcional mediante adaptador externo |
| GNSS | GPS y GLONASS \(motor de seguimiento 99\); soporte SBAS \(WAAS, EGNOS, GAGAN, MSAS\); precisión típica 2.5 m CEP; sensibilidad de seguimiento -167 dBm; adquisición -149 dBm |
| Bluetooth | Bluetooth Low Energy v4.2, Clase 2 con soporte de largo alcance para sensores y balizas |
| Gestión Remota y Protocolos | UDP/IP, TCP/IP, SMS sobre IMS; ADM \(ATrack Device Management\), FOTA, configuración RS232 |
| Memoria | Memoria flash interna de 64 Mbits; hasta 125,000 registros y hasta 23,000 mensajes en cola |
| Ambiental y Certificaciones | Carcasa con clasificación IP68; rango operativo de –20°C a +60°C con batería \(–40°C a +70°C sin batería\); vibración/choque/caída MIL‑STD‑810H; certificaciones de operadores: FCC, IC, PTCRB, TELEC; RoHS compatible |
| Factor de forma | 120 × 80 × 36 mm; ≈250 g; diseñado para montaje en vehículos y activos fijos |

## Casos de uso

- Gestión de flotas para remolques y equipos sin motor — monitorizar ubicación, estado de ignición y movimiento para optimizar su uso.
- Contenedores logísticos y activos remotos — carcasa IP68 y larga vida de la batería permiten despliegues de larga duración con conectividad intermitente.
- Antirrobo y recuperación — seguimiento en tiempo real, eventos del acelerómetro y salidas configurables permiten flujos de alarma y acciones de inmovilización remota.
- Integraciones de telemetría y monitoreo de combustible — entrada analógica y registro en cola permiten sensores externos para telemetría de combustible o de equipo.
- Cadenas de frío o activos sensibles al entorno — sensores de temperatura conectados por BLE a través de 1‑Wire o BLE para monitorizar condiciones.

## Por qué elegir este rastreador con Plaspy

El AS11 ofrece un equilibrio entre robustez, autonomía de batería y E/S flexible que lo convierte en un rastreador GPS eficaz para proyectos exigentes de gestión de activos y flotas. Como dispositivo compatible con Plaspy, suministra de forma fiable los datos de telemetría y eventos que Plaspy necesita—soluciones GNSS, ignición y eventos de entrada, telemetría analógica y datos de sensores BLE—mientras maneja el almacenamiento offline y cargas masivas para despliegues remotos. Certificaciones industriales, variantes de operador y gestión remota vía FOTA y ADM simplifican despliegues a gran escala, reducen la carga de mantenimiento y aumentan la disponibilidad. Elige el AS11 cuando tu implementación con Plaspy requiera hardware duradero, telemetría rica y un rendimiento probado en campo para anti-robo, gestión de flotas y monitoreo de activos a largo plazo.

