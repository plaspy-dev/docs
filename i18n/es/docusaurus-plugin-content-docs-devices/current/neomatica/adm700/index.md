---
slug: /neomatica/adm700
id: adm700
sidebar_label: ADM700
sidebar_class_name: menu_item_tracker
---
# Neomatica - ADM700

![ADM700](./tracker.png)

El ADM700 es un terminal de localización GPS/GLONASS montado en vehículo, diseñado para una gestión de flotas fiable y despliegues compatibles con Plaspy. Como unidad adicional para camiones, furgonetas y equipos pesados, el ADM700 ofrece registro continuo de ubicación, velocidad y dirección con posicionamiento GPS/GLONASS y transmite telemetría por GSM/GPRS para seguimiento en tiempo real, monitorización remota y despacho. Su robusta carcasa IP65 / IK07, el soporte de doble SIM y la batería de respaldo lo convierten en un rastreador GPS fiable para aplicaciones exigentes de transporte y logística.

El ADM700 integra múltiples interfaces de vehículo — entre ellas CAN bus \(FMS/J1939\), RS-232/RS-485 y 1-Wire — además de entradas analógicas y discretas para capturar datos de sensores, telemetría de combustible y estados discretos. Con una amplia memoria interna \(hasta 150,000 registros de ruta\) y expansión opcional microSD, la unidad conserva todo el historial de rutas y eventos cuando está offline y envía los datos a Plaspy tan pronto como haya cobertura GSM. Esa combinación de robustez, profundidad de telemetría y compatibilidad con Plaspy convierte al ADM700 en una opción sólida para antirrobo, diagnóstico y optimización operativa.

## Puntos Clave

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real fiable y una gestión de despacho mediante redes GSM/GPRS.
- GNSS de alta sensibilidad \(GPS/GLONASS, ‑165 dBm, 132 canales\) para una recepción satelital sólida en entornos difíciles.
- Diseño robusto preparado para el campo con protección IP65 frente a polvo/agua y resistencia a impactos IK07, para flotas de construcción y trabajos pesados.
- Interfaces de vehículo extensas: CAN bus \(FMS/J1939\), RS-232/RS-485, 1-Wire, que permiten una telemetría profunda e integración de diagnósticos.
- Entradas/salidas flexibles: seis entradas analógicas/discretas, dos entradas de pulso y cuatro salidas de colector abierto para sensores, monitorización de encendido y control externo.
- Doble SIM con soporte opcional de chip SIM, capacidad de voz y amplia cobertura de bandas GSM \(850/900/1800/1900\) para garantizar conectividad y respaldo.
- Batería interna de respaldo de 1000 mAh Li‑ion \(~6 horas\) y amplia memoria interna con expansión microSD opcional para mantener los registros durante pérdidas de alimentación.

## Funcionamiento con Plaspy

ADM700 envía correcciones de posición, telemetría y registros de eventos a Plaspy utilizando transportes GSM/GPRS estándar. Plaspy ingiere la ubicación y la telemetría del vehículo para proporcionar seguimiento en tiempo real, alertas, reproducción de rutas e informes de flota. Las interfaces del dispositivo permiten capturar datos de motor y combustible basados en CAN, valores de sensores analógicos y entradas discretas para eventos de estado; Plaspy asigna esas entradas a alarmas, paneles de monitorización de combustible e informes personalizados.

- Actualizaciones de ubicación y telemetría en tiempo real transmitidas por GPRS para seguimiento en vivo y alertas de geocerca.
- Integración de CAN bus \(FMS/J1939\) para entregar telemetría del vehículo como parámetros del motor, velocidad y mensajes relacionados con el combustible a Plaspy.
- Entradas analógicas y discretas para sensores y estado de encendido \(configuración cableada\), lo que habilita telemetría y alertas basadas en eventos.
- Entradas de pulso adecuadas para sensores de caudal de combustible o pulsos del odómetro; Plaspy puede procesar pulsos para monitorización de combustible y análisis de kilometraje.
- Salidas de colector abierto que pueden usarse para activar dispositivos externos; al integrarse con los sistemas del vehículo, estas salidas pueden admitir flujos de trabajo de control de inmovilizador a través de Plaspy.
- Registro local en memoria interna \(y microSD opcional\) para una conservación continua de registros; los registros almacenados se cargan a Plaspy cuando se restablece la conectividad.
- Gestión del dispositivo vía USB, SMS o GPRS para configuración remota y actualizaciones de firmware/parámetros mediante herramientas compatibles con Plaspy.

## Resumen Técnico

| Conectividad | GSM/GPRS \(multibanda 850/900/1800/1900\), GPRS Clase de ranuras múltiples 12 |
| --- | --- |
| Bandas | GSM 850 / 900 / 1800 / 1900 |
| GNSS | Receptor GPS / GLONASS, sensibilidad ‑165 dBm, 132 canales |
| Alimentación y Batería | Voltaje de entrada +8.5…+48 V; batería de respaldo Li‑Ion interna de 1000 mAh \(~6 horas de funcionamiento con respaldo\) |
| Entradas y Salidas | 6 entradas analógicas/discretas, 2 entradas de pulso/discretas, 4 salidas de colector abierto |
| Interfaces de Vehículo | CAN bus \(FMS/J1939\), RS-485, RS-232, 1-Wire |
| Memoria y Almacenamiento | Registro interno de hasta 150,000 registros de ruta; ranura microSD opcional \(1 GB puede aumentar los registros hasta ~8,000,000\) |
| SIM y Voz | Funcionalidad de doble SIM con soporte opcional de chip SIM; voz compatible |
| Robustez | Protección IP65 frente a polvo/agua, resistencia a impactos IK07 |
| Gestión del Dispositivo | Configuración y gestión vía USB, SMS y GPRS |
| Factor de Forma | Dimensiones ≤ 147 × 138 × 25 mm; peso hasta 250 g |
| Bluetooth | No especificado / no se reporta Bluetooth incorporado |

## Casos de Uso

- Gestión de flotas: seguimiento en vivo de vehículos, reproducción de rutas y paneles de telemetría para camiones, furgones de reparto y flotas de servicios.
- Monitoreo y recuperación anti‑robo: resiliencia ante manipulación y pérdida de energía con batería de respaldo y registro de eventos para una respuesta oportuna.
- Monitorización de combustible y telemetría: integra mensajes CAN de combustible o sensores de pulso/analógicos a Plaspy para análisis de consumo y detección de pérdidas.
- Diagnóstico y mantenimiento del vehículo: leer datos del motor y diagnósticos mediante CAN para programar mantenimientos y reducir el tiempo de inactividad.
- Seguimiento de equipos pesados y maquinaria de construcción: protección mecánica robusta y amplio rango de tensión de entrada para entornos exigentes.

## Por qué Elegir este Rastreador con Plaspy

Emparejar el ADM700 con Plaspy ofrece un equilibrio práctico entre hardware robusto y telemetría profunda para las operaciones de flota. El receptor GPS/GLONASS de alta sensibilidad y la conectividad GSM multibanda facilitan un seguimiento en tiempo real fiable, incluso en áreas con cobertura difícil. Interfaces de vehículo extensas \(CAN, RS-232/485, 1-Wire\) permiten consolidar datos del motor, del combustible y de sensores en los paneles de Plaspy para obtener insights accionables de gestión de flota. El soporte de doble SIM, la batería interna de respaldo y una amplia capacidad de registro offline aseguran la continuidad de los datos para protección anti‑robo y cumplimiento regulatorio. Para operaciones que requieren un historial de rutas robusto, monitorización de combustible e integración fluida en un entorno compatible con Plaspy, el ADM700 ofrece la conectividad y durabilidad para mantener los vehículos visibles, monitorizados y bajo control.

