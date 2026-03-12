---
slug: /cantrack/g500l
id: g500l
sidebar_label: G500L
sidebar_class_name: menu_item_tracker
---
# CanTrack - G500L

![G500L](./tracker.png)

El G500L es un rastreador GPS OBD global 4G diseñado para una instalación rápida y plug-and-play en cualquier enchufe OBD-II de un vehículo. Construido para gestores de flota y propietarios de vehículos que requieren seguimiento en tiempo real confiable y telemetría a nivel OBD sin cableado complejo, el G500L combina posicionamiento híbrido \(GPS / AGPS / LBS\), conectividad 4G de grado industrial y lectura remota de parámetros del vehículo como consumo de combustible y temperatura.

Compatible con Plaspy desde la caja, el G500L ofrece actualizaciones de ubicación continuas, informes de códigos de diagnóstico \(DTC\) y alertas anti-manipulación directamente al panel de Plaspy. Al instalarse en segundos y soportar todos los protocolos OBD-II comunes, el G500L acelera la implementación para la gestión de flotas, la monitorización anti-robo y los flujos de mantenimiento preventivo.

## Key Highlights

- Instalación OBD-II plug-and-play — no se requieren modificaciones profesionales para implementaciones rápidas.
- Compatible con Plaspy para seguimiento en tiempo real e ingestión fluida de telemetría en los paneles de gestión de flotas.
- Posicionamiento híbrido \(GPS / AGPS / LBS\) para detecciones de posición rápidas y una precisión de ubicación fiable \(~10 m de promedio\).
- Lectura remota de parámetros OBD-II — monitorización de combustible, temperatura y códigos de diagnóstico \(DTC\) para mantenimiento preventivo.
- Conectividad 4G de grado industrial a nivel mundial para amplia cobertura y enlaces de datos confiables.
- Diseño de bajo consumo con corriente de espera ultrabaja y una batería de respaldo integrada de 50mAh para reportar durante interrupciones de energía.
- Alarma anti-manipulación \(demolición violenta\) integrada para detectar e informar intentos de retirada no autorizados.

## How It Works with Plaspy

El G500L envía parámetros estándar de OBD-II del vehículo junto con telemetría GNSS y celular a Plaspy, lo que permite seguimiento en tiempo real, alertas e informes históricos. Una vez conectado al puerto OBD-II del vehículo, el dispositivo lee PIDs compatibles y DTCs, consulta GNSS para obtener la posición y transmite paquetes a través de la conexión 4G del dispositivo. Plaspy ingiere esas secuencias de datos para crear mapas en vivo, paneles de telemetría y alertas automáticas para eventos como intentos de manipulación o fallos diagnósticos.

- Actualizaciones de ubicación y telemetría en tiempo real — datos GNSS + AGPS + LBS transmitidos a Plaspy.
- Parámetros OBD-II del vehículo — consumo de combustible, temperatura y códigos de diagnóstico \(DTC\) disponibles en los informes de Plaspy.
- Detección del estado de encendido \(ACC\) — útil para segmentación de viajes, detección de inactividad y disparadores de eventos en Plaspy.
- Alertas anti-robo / anti-manipulación — alarma de demolición violenta reportada a Plaspy para notificaciones inmediatas.
- Informe de batería de respaldo — el dispositivo puede seguir reportando durante interrupciones breves de energía y Plaspy puede mostrar el estado de la batería de respaldo.

## Technical Overview

| Modelo | G500L |
| --- | --- |
| Factor de forma | Conector OBD-II — módulo compacto \(aprox. 58 × 45 × 20 mm, sin el enchufe\) |
| Conectividad | 4G global \(TDD / FDD\) con posibilidad de fallback a WCDMA / TDSCDMA / GSM |
| Bandas / Redes | TDD / FDD / WCDMA / TDSCDMA / GSM \(versión 4G global\) |
| Posicionamiento \(GNSS\) | Posicionamiento híbrido GPS / AGPS / LBS |
| Precisión de posicionamiento | Tipicamente ~10 metros |
| Alimentación & Batería | Voltaje de funcionamiento DC 9V–36V; batería de polímero litio de respaldo de 50 mAh |
| Consumo de Corriente | Corriente de funcionamiento ~35 mA \(ACC ON\); Corriente en espera ~2.5 mA \(ACC OFF\) |
| Interfaces | Conector OBD-II directo — accede al bus del vehículo y a PIDs/DTCs OBD-II |
| Protocolos OBD-II compatibles | ISO9141-2, ISO9141, KWP2000 \(5BPS & FAST\), ISO14230, CANBUS 11-bit/29-bit \(500K & 250K\), ISO15765 |
| Anti-manipulación | Alarma de demolición violenta integrada |
| Temperatura de operación | -25°C a +75°C |
| Temperatura de almacenamiento | -40°C a +85°C |

## Use Cases

- Gestión de flotas — seguimiento en tiempo real, historial de viajes, monitorización de combustible y telemetría operativa para gerentes que usan los paneles de Plaspy.
- Diagnóstico remoto del vehículo — lectura de DTC y parámetros del vehículo para planificar el mantenimiento preventivo y reducir el tiempo de inactividad.
- Antirrobo y detección de manipulación — monitorización basada en OBD y alarma de demolición violenta para notificaciones rápidas de incidentes.
- Monitoreo de combustible y programas de eficiencia — informes continuos de consumo de combustible para apoyar el control de costos y la formación de conductores.
- Seguimiento de despliegue rápido para alquileres o programas de vehículos temporales — la instalación plug-in permite visibilidad inmediata.

## Why Choose This Tracker with Plaspy

Para organizaciones e individuos que buscan un rastreador GPS fiable y de fácil implementación compatible con Plaspy, el G500L ofrece una combinación enfocada de telemetría a nivel OBD y comunicaciones 4G de grado industrial. Su conexión OBD-II plug-and-play reduce el tiempo de instalación y elimina la necesidad de experiencia en cableado, mientras que el posicionamiento híbrido y el soporte 4G global mantienen la ubicación y la telemetría fluyendo hacia Plaspy para un seguimiento en tiempo real preciso.

Entre sus ventajas prácticas se encuentran una mejor gestión de flotas mediante monitoreo de combustible y visibilidad de DTC; flujos de anti-robo más robustos con alertas de manipulación; y un comportamiento de bajo consumo que preserva la batería del vehículo y la disponibilidad del dispositivo. El G500L es especialmente adecuado para implementaciones que requieren compatibilidad con protocolos OBD, integración sencilla en Plaspy y telemetría confiable para decisiones operativas, sin añadir complejidad en la instalación.

Nota sobre integraciones relacionadas: el G500L reporta el estado de encendido/ACC y datos detallados de OBD-II a Plaspy para reglas basadas en eventos \(p. ej., inicio/parada de viaje, alertas de inactividad\). Aunque el propio dispositivo se centra en la conectividad OBD y no incluye sensores Bluetooth embebidos ni un actuador de inmovilizador, Plaspy puede coordinarse con sistemas del vehículo o gateways externos para implementar controles de inmovilización o agregar datos de sensores inalámbricos cuando sea requerido.

