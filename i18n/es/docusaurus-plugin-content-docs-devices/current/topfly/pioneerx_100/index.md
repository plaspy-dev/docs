---
slug: /topfly/pioneerx_100
id: pioneerx_100
sidebar_label: PioneerX 100
sidebar_class_name: menu_item_tracker
---
# TopFly - PioneerX 100

![PioneerX 100](./tracker.png)

# PioneerX 100

El PioneerX 100 es un rastreador GPS compacto y cableado, diseñado para una gestión de flota y seguimiento de activos confiable. Compatible con Plaspy desde el inicio, el PioneerX 100 ofrece posicionamiento GNSS de alta sensibilidad, conectividad 4G CAT-1 global con respaldo 2G y entradas/salidas configurables para detección de encendido, inmovilizador y control de accesorios, lo que lo convierte en una opción práctica para seguimiento en tiempo real, flujos de trabajo antirrobo y la integración de telemetría.

Diseñado para operación continua en entornos exigentes, el PioneerX 100 combina posicionamiento preciso \(GPS + BeiDou + Galileo + QZSS\) con soporte BLE 4.2 para sensores Bluetooth y una robusta batería de respaldo para conservar datos críticos. Cuando se integra con Plaspy, ofrece actualizaciones de ubicación frecuentes, alertas de eventos y telemetría histórica de la que dependen los operadores de flotas y los proveedores de servicios para la visibilidad y la seguridad.

## Puntos clave

- Rastreador GPS compatible con Plaspy, con 4G CAT-1 y respaldo 2G para una cobertura celular amplia y un seguimiento en tiempo real confiable.
- GNSS de alto rendimiento \(HD8120\) con recepción multi-constelación y precisión de posicionamiento autónomo por debajo de 1,5 m CEP.
- Actualizaciones en tiempo real tan frecuentes como cada 3 segundos y almacenamiento en caché sin conexión de hasta 49,000 puntos de ubicación para recopilación de datos continua en zonas remotas.
- Múltiples I/O digitales y analógicos para detección de encendido, control de relé, zumbador e integración SOS — apto para aplicaciones de inmovilizador y antirrobo.
- Soporte BLE 4.2 para emparejar sensores Bluetooth TOPFLYtech \(temperatura, humedad, sensores de puerta\) para monitoreo de la cadena de frío y alertas basadas en condiciones.
- Batería de respaldo Li-Polymer integrada de 200 mAh para conservar mensajes y estado críticos durante una pérdida de energía.
- Soporte FOTA, puerto de configuración Type-C y LED indicadores para el estado de red y GNSS — simplificando la gestión remota e instalación.
- Rango operativo resistente \(-30°C a +80°C\) y carcasa impermeable IP67 opcional para instalaciones expuestas o al aire libre.

## Cómo funciona con Plaspy

El PioneerX 100 se integra con Plaspy utilizando protocolos de transporte estándar y canales de telemetría seguros para que puedas recibir ubicación en tiempo real, eventos y datos de sensores en tus paneles e informes de Plaspy. Configura el dispositivo a través de USB Type-C o de forma remota vía FOTA, y luego dirige sus informes hacia tu servidor de Plaspy utilizando TCP, UDP, MQTT o SMS. Plaspy ingiere los mensajes del dispositivo para habilitar seguimiento en mapa en tiempo real, alertas y reproducción histórica.

- Actualizaciones de ubicación y telemetría en tiempo real \(configurables, hasta intervalos de 3 segundos\) entregadas a Plaspy.
- Estado de ignición, activaciones de puerta y SOS y eventos de alarma reportados a través de I/O digitales para flujos de trabajo antirrobo e inmovilizador.
- La monitorización de combustible y otra telemetría analógica pueden integrarse a través de las entradas analógicas del dispositivo o sensores Bluetooth emparejados para informes basados en condiciones.
- Control remoto del inmovilizador y de relés mediante salidas digitales para detener el vehículo de forma segura desde Plaspy.
- Sensores BLE \(temperatura, humedad, contactos de puerta, relés inalámbricos\) compatibles para monitoreo de la cadena de frío y alertas ambientales dentro de Plaspy.
- Las posiciones almacenadas en caché \(hasta 49,000 puntos\) se transmiten automáticamente a Plaspy cuando se restablece la conectividad celular para conservar las trazas históricas de los periodos sin conexión.

## Resumen técnico

| Conectividad | 4G CAT-1 \(LTE FDD/TDD\) con respaldo 2G GSM |
| --- | --- |
| Bandas | Soporte global de bandas LTE FDD/TDD según lo listado por el fabricante; respaldo GSM para cobertura heredada |
| Alimentación y batería | Tensión de operación 5V–32V DC; batería de respaldo Li-Polymer de 200 mAh para conservar mensajes/estado ante pérdida de energía |
| Interfaces | Múltiples I/O digitales y analógicos, entrada de encendido, control de relé, zumbador y soporte de botón SOS \(apto para inmovilizador y antirrobo\) |
| GNSS | Receptor HD8120: GPS + BeiDou + Galileo + QZSS; 24 canales de seguimiento / 66 de adquisición; precisión autónoma \< 1,5 m CEP; TTFF en frío \< 20 s, en caliente \< 2 s |
| Bluetooth | BLE 4.2 \(para sensores BLE TOPFLYtech y accesorios compatibles\) |
| Protocolos y seguridad | TCP / UDP / MQTT / SMS; opciones de seguridad incluyen cifrado MD5 y AES-256 |
| Gestión de datos | Informes en tiempo real a los servidores; caché local de hasta 49,000 puntos de ubicación para operación offline |
| Sensores | Acelerómetro interno de 6 ejes para detección de velocidad/remolque, comportamiento de conducción \(aceleración/freno bruscos/giros\) y captura de impactos; detección de interferencias de red |
| Factor de forma y entorno | Dimensiones 105,7 × 57,6 × 16,8 mm; peso ~55 g; rango operativo -30°C a +80°C; rango de almacenamiento -40°C a +85°C; carcasa IP67 opcional disponible |
| Gestión | Puerto de configuración Type-C y FOTA \(firmware over-the-air\) updates; indicadores LED para estado de GNSS y red |

## Casos de uso

- Gestión de flotas y logística — seguimiento en tiempo real, monitorización del comportamiento del conductor y telemetría hacia Plaspy para optimización de rutas y cumplimiento.
- Antirrobo de vehículos e inmovilización — detección de encendido, control de inmovilizador basado en relés y notificaciones de alarma instantáneas para una respuesta rápida.
- Monitoreo de cadena de frío — emparejar sensores BLE de temperatura y humedad para rastrear mercancías perecederas y generar alertas en Plaspy ante condiciones fuera de rango.
- Seguimiento remoto de activos en áreas con conectividad limitada — caché en el dispositivo de hasta 49,000 puntos para mantener trazas históricas hasta que sea posible la subida.
- Integración OEM/ODM — I/O compactos y configurables y un amplio rango de tensión de entrada hacen que la unidad sea adecuada para instalaciones personalizadas en vehículos y equipos.

## Por qué elegir este rastreador con Plaspy

El PioneerX 100 es un rastreador GPS práctico, compatible con Plaspy, que equilibra rendimiento GNSS preciso, diseño robusto y entradas/salidas flexibles para flujos de trabajo de inmovilizador y telemetría. Sus intervalos de informe frecuentes, su gran caché offline y sus opciones de transporte seguro \(incluyendo MQTT y AES-256\) ofrecen a los operadores de flotas un seguimiento en tiempo real confiable y datos históricos para análisis. El soporte de sensores BLE y las entradas analógicas permiten monitorización de combustible e integración de telemetría de la cadena de frío, mientras FOTA y un puerto USB Type-C simplifican la implementación y el mantenimiento continuo. Elija el PioneerX 100 con Plaspy cuando necesite un rastreador compacto y configurable que soporte flujos de trabajo del inmovilizador, alertas impulsadas por telemetría y gestión de flotas escalable sin comprometer la fiabilidad.

