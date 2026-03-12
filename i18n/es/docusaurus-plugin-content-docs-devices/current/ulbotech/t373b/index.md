---
slug: /ulbotech/t373b
id: t373b
sidebar_label: T373B
sidebar_class_name: menu_item_tracker
---
# Ulbotech - T373B

![T373B](./tracker.jpg)

El T373B es un rastreador GPS OBD II compatible con Plaspy diseñado para monitorización de vehículos plug-and-play. Construido alrededor de un módem celular Telit xE910 y un módulo GNSS u-blox MAX-7, el T373B ofrece seguimiento en tiempo real, telemetría y datos de comportamiento del conductor fiables a través de redes GSM/WCDMA, además de Bluetooth 4.0 LE para extensión y configuración local del dispositivo.

El compacto T373B se conecta directamente al puerto OBD II del vehículo para ofrecer gestión de flotas, antirrobo y monitorización de combustible sin instalaciones complejas. Con diagnósticos integrados \(OBDII, SAE J1939, J1708/J1587\), alertas DTC, una salida digital de inmovilizador y soporte para actualizaciones de firmware por aire, este rastreador compatible con Plaspy está preparado para despliegues que requieren posicionamiento preciso, tiempo de adquisición rápida y telemetría vehicular enriquecida.

## Aspectos Clave

- Rastreador GPS OBD II plug-and-play compatible con Plaspy para un despliegue rápido de la gestión de flotas.
- Seguimiento en tiempo real mediante u-blox MAX-7 \(GPS + GLONASS\) con AssistNow A-GPS para un TTFF rápido incluso en instalaciones ocultas.
- Módem celular Telit xE910 que soporta amplias bandas GSM/WCDMA/4G compatibles para una conectividad fiable.
- Telemetría integral del vehículo: RPM, velocidad, ECT, nivel de combustible y consumo de combustible mediante OBDII y CANBUS.
- Acelerómetro interno de 3 ejes y ocho eventos de comportamiento de la conducción para análisis del comportamiento del conductor y monitorización del combustible.
- Inmovilizador antirrobo \(corte de motor\) con salida digital, más monitorización DTC en tiempo real y alarmas.
- Bluetooth 4.0 LE para emparejamiento de dispositivos móviles, extensión de funciones y configuración local sencilla.
- Soporte FOTA vía GPRS/WCDMA y micro USB para gestión remota y segura del firmware.

## Cómo Funciona con Plaspy

Cuando se integra con Plaspy, el T373B transmite la ubicación del vehículo, los diagnósticos a bordo y alertas basadas en eventos, de modo que los gestores de flotas y operadores reciben telemetría usable y seguimiento en tiempo real. Plaspy aprovecha las posiciones GPS/GLONASS del rastreador, los perfiles de viaje, el estado de DTC y el control del inmovilizador para ofrecer una experiencia completa de gestión de flotas: visibilidad, seguridad y control remoto desde un único tablero.

- Actualizaciones en tiempo real de ubicación y telemetría \(posición GPS/GLONASS, velocidad, rumbo\) para un seguimiento continuo del vehículo.
- Diagnóstico a bordo e informes DTC \(RPM, ECT, nivel de combustible, consumo\) para respaldar el monitoreo de combustible y alertas de mantenimiento.
- Corte de encendido y motor \(inmovilizador\) mediante salida digital para acciones anti-robo y inmovilización remota.
- Eventos de comportamiento del conductor \(frenadas bruscas, aceleración, toma de curvas, etc.\) transmitidos a Plaspy para puntuación y coaching del conductor.
- Conexiones Bluetooth 4.0 LE para configuración desde móvil, emparejamiento de sensores y extensiones de funciones locales.

## Vista Técnica

| Modelo | T373B \(rastreador GPS OBD II\) |
| --- | --- |
| Conectividad Celular | Módem de la familia Telit xE910 — GSM/WCDMA \(bandas 2G/3G/4G amplias compatibles según el módulo\) |
| Bandas | GSM 850/900/1800/1900; WCDMA 800/850/900/1700/1900/2100 MHz \(HSPA/WCDMA velocidades de datos soportadas por el módulo\) |
| GNSS | u-blox MAX-7 \(GPS + GLONASS\), 56 canales; precisión horizontal ~2.0–2.5 m; TTFF Frío ~30 s, Tibio ~28 s, Caliente ~1 s, Asistido ~5 s |
| Antenas | Antena GPS cerámica de alta ganancia interna 25 mm x 25 mm; antena GSM/WCDMA interna; módulo BLE interno |
| Bluetooth | Bluetooth 4.0 Low Energy \(BLE\) para conectividad con dispositivos móviles y soporte de sensores |
| Interfaces | Conector OBD II J1962; ranura micro USIM; puerto Micro USB para configuración/actualización/debug; LEDs indicadores \(GSM/GPS/OBD/Bluetooth\) |
| Entradas / Salidas | Una salida digital para corte de motor \(inmovilizador\); admite reporte de encendido/estado vía OBD II |
| Protocolos de Vehículo | Todos los protocolos OBDII, SAE J1939 CANBUS, SAE J1708/J1587 |
| Alimentación y Batería | Rango de tensión de funcionamiento 8–32V DC; batería de respaldo Li-Polymer interna 3.7V 180mAh; consumo ~70 mA en activo, ~10 mA en reposo, máximo \<250 mA |
| Memoria | 8M a bordo \(~15,000 registros\) |
| Ambiental | Temperatura de operación -30°C a +80°C \(sin batería\); almacenamiento -40°C a +85°C |
| Firmware y Gestión | Actualizaciones FOTA vía GPRS/WCDMA desde servidor FTP; identificación automática de APN y zona horaria |
| Forma y Peso | 50 × 50 × 23 mm \(excluido el conector J1962\); peso ~50 g |
| Accesorios | Estándar: cable Micro USB. Opcional: cable OBD T, cable OBD 1/2, cable OBD Y, módulo externo de inmovilizador |

## Casos de Uso

- Gestión de flota: rastreo GPS continuo, telemetría de conducta del conductor y monitorización de combustible para una mayor eficiencia operativa.
- Antirrobo e inmovilización: corte remoto del motor mediante la salida digital, combinado con alertas en tiempo real para respuesta ante vehículos robados.
- Telemática de alquiler y seguros: monitoreo de DTC, kilometraje y perfil del conductor para respaldar seguros basados en el riesgo y verificaciones de devolución de alquiler.
- Asistencia en carretera y recuperación de activos: ubicación rápida e informe del estado del vehículo para coordinar ayuda y reducir el tiempo de inactividad.
- Coaching y cumplimiento del conductor: detección automática de eventos bruscos y resúmenes de viaje para mejorar la seguridad y reducir el consumo de combustible.

## Por qué Elegir Este Rastreador con Plaspy

El T373B ofrece un equilibrio sólido entre posicionamiento preciso, telemetría del vehículo y controles de anti-robo integrados en un formato OBD II simple que se integra sin problemas con Plaspy. Su GNSS u-blox MAX-7 y AssistNow A-GPS proporcionan un tiempo de adquisición de posición rápido incluso cuando la unidad está instalada en ubicaciones poco visibles, mientras que el módem Telit xE910 admite una amplia cobertura de bandas celulares para uplinks de datos fiables. Para gestores de flotas y proveedores de servicios centrados en el seguimiento en tiempo real, monitorización de combustible, alertas DTC y análisis del comportamiento del conductor, el T373B ofrece la telemetría y las interfaces de control remoto \(salida de inmovilizador, configuración BLE, FOTA\) necesarias para escalar soluciones de forma segura y eficiente.

Elegir el T373B como rastreador compatible con Plaspy significa despliegues más rápidos con instalación plug-and-play vía OBD II, datos vehiculares enriquecidos a partir de los protocolos CAN/OBD y mantenimiento remoto mediante FOTA. La combinación de precisión GNSS, sensores Bluetooth integrados y diagnósticos a bordo lo convierten en una opción práctica para gestión de flotas, telemática de seguros, operaciones de alquiler y protección anti-robo donde el seguimiento en tiempo real fiable y la telemetría accionable son esenciales.

