---
slug: /meitrack/md600
id: md600
sidebar_label: MD600
sidebar_class_name: menu_item_tracker
---
# Meitrack - MD600

![MD600](./tracker.png)

El MD600, grabadora de vídeo móvil de un fabricante líder en telemática, ofrece una solución de telemática de vídeo compatible con Plaspy para flotas que requieren evidencia de alta resolución, funciones de seguridad del conductor y telemetría integrada del vehículo. Diseñado para entornos de vehículos, el MD600 combina captura de vídeo AHD de seis canales, compresión configurable H.264/H.265, audio multicanal y un amplio conjunto de interfaces I/O y sensores para desplegar rastreo en tiempo real, medidas antirrobo y asistencia avanzada al conductor junto con las herramientas de gestión de flotas de Plaspy.

Diseñado para la gestión de flotas, el transporte público y las aplicaciones de vehículos comerciales, el MD600 combina un posicionamiento GNSS sólido y conectividad celular \(4G LTE Cat 4, 3G, 2G\) con Wi‑Fi de banda dual, Bluetooth y Ethernet para transmitir vídeo, telemetría y eventos a Plaspy. Su almacenamiento flexible, certificaciones ambientales y soporte de periféricos \(RFID, beacons BLE, sensores de combustible, relés y más\) lo convierten en una plataforma práctica para telemetría, monitorización de combustible, registro de eventos de encendido y flujos de inmovilización automatizados cuando se integra con Plaspy.

## Aspectos destacados

- Grabación de video AHD de seis canales hasta 6×1080P@15fps con compresión configurable H.264/H.265 para un almacenamiento eficiente y evidencia de alta calidad.
- Conectividad compatible con Plaspy: 4G LTE Cat 4, respaldo 3G/2G, Wi‑Fi de banda dual y Ethernet para un rastreo en tiempo real y subida de telemetría confiables.
- Amplio soporte de I/O y sensores—hasta 8 DI/8 DO, entradas analógicas, CAN, RS232/RS485 y entrada ACC—que habilita registro de encendido/eventos e integración de control remoto.
- Almacenamiento escalable con SSD NVMe M.2 \(2280, PCIe x2/x4\) más dos tarjetas SD \(hasta 2 TB + 2×512 GB\) para la retención a largo plazo de vídeos y registros de telemetría.
- GNSS integrado \(GPS/BEIDOU/GLONASS\) con precisión de 2,5 m y sensibilidad de -162 dBm para alimentar las funciones de mapeo y geovallado de Plaspy con datos de ubicación precisos.
- Amplia compatibilidad periférica \(RFID, iButton, relés, micrófonos, beacons BLE, sensores de combustible\) para anti‑robo de flotas, identificación del conductor y flujos de monitorización de combustible.
- Diseño robusto de grado vehicular: certificado CE, opera de -20°C a 70°C \(sin batería\) y cumple con perfiles ambientales ISO/IEC para uso en vehículos.

## Cómo funciona con Plaspy

El MD600 transmite y registra telemetría y vídeo con eventos a Plaspy utilizando protocolos estándar de telemática y transporte de medios. Cuando se integra, Plaspy utiliza el GNSS, las entradas digitales y los datos CAN del MD600 para ofrecer rastreo en tiempo real, alertas y reproducción histórica en un tablero único que combina vídeo y telemetría para una revisión precisa de incidentes y una visión operativa.

- Actualizaciones de ubicación y telemetría en tiempo real — la posición GNSS, la velocidad y el rumbo alimentan los mapas y las funciones de rastreo en vivo de Plaspy.
- Encendido y registro de eventos digitales — la entrada ACC y las entradas digitales capturan eventos de encendido, puertas y alarmas para alertas inmediatas en Plaspy.
- Monitorización de combustible — conecte sensores de combustible ultrasónicos o capacitivos para reportar el nivel de combustible y anomalías en los módulos de monitorización de combustible de Plaspy.
- Inmovilización/control remoto — use salidas digitales y relés para implementar flujos de inmovilización o control remoto del vehículo a través de Plaspy \(cuando sea configurado por el operador de flota\).
- Sensores y beacons Bluetooth — periféricos BLE como sensores de temperatura o beacons de identificación del conductor pueden emparejarse y sus datos se transmiten a Plaspy para enriquecer la telemetría.

## Resumen técnico

| Conectividad | 4G LTE Cat 4, 3G, 2G; Wi‑Fi de banda dual \(2.4G & 5G, STA/AP\); Bluetooth \(maestro/esclavo\); Ethernet; RTMP para transporte de audio/vídeo |
| --- | --- |
| Bandas / Variantes | Variantes celulares específicas por región: Global, E, A, AU, J \(conjuntos de bandas del operador por región\) |
| Vídeo y Audio | Soporta hasta seis cámaras AHD \(mezcla D1/720P/1080P\), grabación de 6×1080P@15fps; compresión H.264/H.265 configurable; 6 entradas MIC para cámaras, intercom, entradas de auriculares; salidas de audio independientes; salidas de vídeo VGA y CVBS |
| Almacenamiento | SSD NVMe M.2 \(2280, PCIe x2/x4\) más dos tarjetas SD; almacenamiento total soportado hasta 2 TB \(SSD\) + 2×512 GB \(SD\) |
| Alimentación y Operación | DC 11,4–36V \(calificado 12V/3A\); consumo ~6 W en arranque \(audio/video activados\) hasta ~37 W según configuración de cámaras/pantallas; rango operativo de temperatura -20°C a 70°C \(sin batería\) |
| Interfaces | Hasta 8 entradas digitales, hasta 8 salidas digitales, hasta 6 entradas analógicas, 2×RS485, 2×RS232, 1×CAN, 1‑wire, entrada de velocidad, entrada ACC, interfaces de alimentación DC separadas |
| GNSS | GPS/BEIDOU/GLONASS; precisión ~2,5 m; sensibilidad -162 dBm |
| Bluetooth | Soporte BLE, modos maestro/esclavo para sensores y beacons |
| Protocolos y Transmisión | JT/T 1078-2016, JT/T 808-2019, protocolo Meitrack CCE; RTMP para transmisión de audio/vídeo |
| Formato y Certificaciones | Grabador móvil montado en vehículo; cumplimiento de perfiles ambientales ISO/IEC; certificado CE |
| Sensores | Acelerómetro de 6 ejes integrado para detección de eventos |

## Casos de uso

- Anti‑robo y inmovilización de flotas — las entradas ACC combinadas con control de relés permiten a los gestores de flota detectar encendidos no autorizados e implementar flujos de inmovilización remota a través de Plaspy.
- Seguridad del conductor y ADAS/DMS — algoritmos de IA integrados para ADAS, DMS y BSD ofrecen alertas basadas en vídeo y evidencias grabadas para evitar colisiones y monitorizar al conductor cuando se transmiten a Plaspy.
- Monitorización de combustible y telemetría — compatible con sensores de combustible ultrasónicos o capacitivos para reportar continuamente el nivel de combustible y detectar fraudes dentro de los paneles de Plaspy.
- Transporte público y evidencia para fuerzas del orden — vídeo sincronizado multicanal con telemetría con marca de tiempo ayuda a reproducir incidentes y soporta informes de cumplimiento.
- Cadena de frío y monitorización ambiental — empareje sensores BLE de temperatura/humedad con vídeo y telemetría GPS para entregas monitorizadas y auditorías de incidentes.

## Por qué elegir este dispositivo con Plaspy

Cuando se combina con Plaspy, el MD600 se convierte en un nodo telemático integral que unifica evidencia de vídeo de alta calidad con telemetría rica para control operativo y gestión de incidentes. Su vídeo multicanal, códecs configurables y amplio almacenamiento local reducen la dependencia de ancho de banda y aseguran la retención a largo plazo. La extensa E/S, CAN y la compatibilidad periférica facilitan la captura de eventos de encendido, niveles de combustible y entradas de sensores—datos que Plaspy utiliza para impulsar la gestión de flotas, medidas anti‑robo y paneles de seguimiento en tiempo real.

Para flotas que requieren rastreo en tiempo real fiable, telemetría y evidencia respaldada por vídeo, el MD600 ofrece una plataforma robusta, compatible con Plaspy, que escala desde vehículos individuales hasta grandes flotas. Aproveche su soporte de sensores BLE, la precisión GNSS y sus amplias opciones de conectividad para mejorar la conciencia situacional, la seguridad del conductor y optimizar las operaciones de la flota con las herramientas de monitoreo y generación de informes disponibles a través de Plaspy.

