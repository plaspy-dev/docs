---
slug: /ruptela/plug5
id: plug5
sidebar_label: Plug5
sidebar_class_name: menu_item_tracker
---
# Ruptela - Plug5

![Plug5](./tracker.jpg)

Plug5 de Ruptela es un avanzado rastreador GPS tipo dongle OBD/OBDII, diseñado específicamente para telemática de vehículos Plug & Play y gestión de flotas. Como rastreador compatible con Plaspy, Plug5 ofrece una posición GNSS fiable, conectividad LTE‑M con retroceso a 2G y acceso profundo a datos del vehículo \(OBDII, CAN y parámetros propietarios del fabricante\), de modo que las flotas obtengan posicionamiento en tiempo real, telemetría e inteligencia de vehículos accionable sin necesidad de instalaciones complejas.

Pensado para despliegues comerciales, Plug5 combina diagnósticos a bordo, compatibilidad con accesorios BLE 5.1, detección de movimiento y de impactos, y comunicaciones seguras \(TLS v1.2\) para soportar flujos de trabajo anti‑robo, monitoreo de combustible, análisis del comportamiento del conductor y una rápida recuperación de vehículos robados. Su factor de forma OBD y la detección automática del modelo de vehículo simplifican despliegues para leasing, alquiler, entrega y operaciones de flotas mixtas, mientras la integración Plaspy permite monitoreo centralizado, alertas e informes.

## Aspectos clave

- Dongle OBD Plug & Play compatible con Plaspy — instalación rápida y detección automática del modelo de vehículo para implementaciones rápidas de la flota.
- GNSS premium \(U‑blox\) y conectividad LTE‑M con retroceso a 2G para un seguimiento en tiempo real fiable en distintas regiones.
- Lectura de datos completa OBDII y CAN \(FMS, J1708, J1939\) más parámetros propietarios del fabricante para telemetría rica y monitoreo de combustible.
- Soporte Bluetooth \(BLE 5.1\) para sensores Bluetooth e integración de accesorios — expanda la monitorización con sensores de temperatura, identificación o sensores de carga.
- Funciones de seguridad y anti‑robo: acelerómetro de 3 ejes para detección de movimiento y choque, detección de interferencias y desconexión, batería interna de respaldo y memoria búfer de 16 MB.
- Gestión remota del dispositivo \(FOTA/GPRS/SMS/USB\) a través de Ruptela’s Device Center y Device Management Platform para despliegues masivos y actualizaciones.
- Amplio rango de funcionamiento \(9–30 V DC, −20 °C a +60 °C\) y opciones de arnés para vehículos pesados para compatibilidad con flotas mixtas.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, Plug5 se convierte en una fuente robusta de ubicación y telemetría del vehículo. El dispositivo transmite posiciones GNSS y parámetros CAN/OBD a través de LTE‑M \(con retroceso a 2G\) a la plataforma de gestión de flotas de Plaspy, habilitando seguimiento en tiempo real, geocercas, alertas de eventos y paneles de telemática. Plug5 almacena en búfer los datos localmente durante pérdidas de conectividad y sube los registros almacenados cuando se restablece la conexión para conservar la continuidad de los informes y la reconstrucción de incidentes.

- Actualizaciones de ubicación y telemetría en tiempo real \(GNSS + datos CAN/OBD del vehículo\) para visibilidad en tiempo real de la flota.
- Detección avanzada de la ignición y eventos basados en el encendido para segmentar viajes y analizar el comportamiento del conductor.
- Monitoreo de combustible y métricas de consumo derivadas de OBD/CAN para apoyar el control de costos y el mantenimiento preventivo.
- Detección de movimiento y de impactos mediante un acelerómetro de 3 ejes, con envío de eventos para la reconstrucción de accidentes y flujos de trabajo de emergencia.
- Sensores y balizas Bluetooth \(BLE 5.1\) para la identificación del conductor, monitorización de la carga y del entorno, o telemetría de accesorios.
- Señales anti‑robo: detección de interferencias, detección de desconexión, batería interna de respaldo, además de alertas en Plaspy para una respuesta rápida y recuperación de vehículos robados.

## Resumen técnico

| Fabricante y modelo | Ruptela — Plug5 |
| --- | --- |
| Conectividad | LTE‑M con retroceso a 2G |
| Bandas / Variantes | Variantes regionales \(ejemplos: Plug5‑LTM‑EMEA‑BT, Plug5‑LTM‑NA‑BT\); bandas específicas por SKU regional |
| Alimentación y batería | Alimentación 9–30 V DC; batería interna de respaldo para operación ante fallos de energía |
| Interfaces | OBDII, CAN \(FMS, J1708, J1939\), parámetros propietarios del vehículo; USB para acceso local; arneses opcionales para vehículos pesados |
| GNSS | Receptor GNSS U‑blox; antenas GNSS internas |
| Inercial | Acelerómetro de 3‑ejes para detección de movimiento y de impactos |
| Memoria | 16 MB de memoria interna para datos búfer |
| Bluetooth | BLE 5.1 para sensores e integración de accesorios |
| Seguridad y Gestión | Comunicaciones seguras TLS v1.2; gestión de firmware y configuración vía FOTA/GPRS/SMS/USB mediante Ruptela Device Center / Device Management Platform |
| Diagnóstico y Detección | Detección de interferencias, detección de desconexión, detección automática de modelo de vehículo, algoritmos avanzados de detección de encendido |
| Condiciones de operación | Temperatura de operación −20 °C a +60 °C |
| Formato | Dongle OBD/OBDII — compacto, plug & play de grado vehicular |

## Casos de uso

- Gestión de flotas y seguimiento en tiempo real — monitoriza ubicaciones de vehículos, rutas y ETA dentro de los paneles de Plaspy.
- Antirrobo y recuperación de vehículos robados — detectar manipulaciones \(desconexión/interferencia\), usar el último GNSS y datos CAN conocidos para coordinar la recuperación.
- Monitoreo de combustible y telemetría — combinar datos de combustible OBD/CAN con el historial GNSS para reducir el consumo y optimizar rutas.
- Identificación del conductor y análisis de comportamiento — etiquetas o sensores BLE para la identificación del conductor, además de eventos de aceleración e encendido para evaluar el estilo de conducción y la seguridad.
- Detección de accidentes y reconstrucción — captura de eventos de choque \(acelerómetro\) con datos búfer para revisión de incidentes y flujos de trabajo de seguros.

## Por qué elegir este rastreador con Plaspy

Plug5 está diseñado para satisfacer las necesidades de las flotas modernas que requieren un seguimiento GPS fiable, telemetría profunda del vehículo y una implementación simplificada. Como rastreador compatible con Plaspy, simplifica la instalación gracias a su factor de forma OBD y a la detección automática del modelo de vehículo, mientras que BLE 5.1 y el acceso CAN/OBD amplían la telemetría más allá de la GPS básica. La combinación de conectividad LTE‑M con retroceso a 2G, almacenamiento en memoria interna, detección de interferencias y desconexión, y comunicaciones seguras TLS hacen que Plug5 sea una opción fiable para empresas centradas en la disponibilidad, protección anti‑robo y telemetría accionable para la flota.

Operativamente, la configuración remota y FOTA a través de Ruptela’s Device Management Platform se integran con los flujos de trabajo de Plaspy para un control centralizado de dispositivos y actualizaciones masivas — reduciendo el servicio en sitio y acelerando los despliegues. Ya sea que necesites seguimiento en tiempo real, monitoreo de combustible, telemetría para vehículos pesados o analítica avanzada de conductor y seguridad, Plug5 ofrece una base escalable y lista para Plaspy para proyectos de telemática comercial.

