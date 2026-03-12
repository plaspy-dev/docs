---
slug: /autofon/dx_mayak_81
id: dx_mayak_81
sidebar_label: DX Mayak 8.1
sidebar_class_name: menu_item_tracker
---
# AutoFon - DX Mayak 8.1

![DX Mayak 8.1](./tracker.png)

El AutoFon DX Mayak 8.1 es un rastreador GPS compacto alimentado por batería, diseñado para protección discreta contra robos y monitoreo de activos a largo plazo. Compatible con Plaspy desde el primer uso, el DX Mayak 8.1 ofrece fijaciones de posición confiables usando GLONASS+GPS, seguimiento por intervalos de bajo consumo para implementaciones de varios años y alertas basadas en eventos \(movimiento, choque, SOS\) para mantener visibles y seguros vehículos, mercancías y equipos portátiles.

Diseñado para una integración sencilla con Plaspy, este rastreador GPS soporta informes estándar por GPRS a servidores de monitoreo y respaldo vía SMS, envía telemetría detallada \(nivel de batería, temperatura, recuento de satélites, señal GSM\) con cada mensaje, y ofrece detección de presencia del propietario y localización a corta distancia mediante una app para smartphone, basada en BLE. Sus opciones de carcasa compacta IP54/IP67 y su larga autonomía en modo de reposo lo hacen ideal para montaje encubierto en gestión de flotas, transporte personal y escenarios de protección de activos de alto valor.

## Aspectos clave

- Compatible con Plaspy — informa la ubicación y la telemetría mediante GPRS a plataformas de servidor y admite control por SMS como redundancia.
- Larga autonomía de la batería — 2 × celdas CR123A, con hasta 3 años en modo de intervalo de bajo consumo y operación online continua de varios días.
- GNSS dual \(GLONASS + GPS\) con AGPS y algoritmos de corrección de posición para mejorar la fiabilidad de la fijación.
- Acelerómetro incorporado para detección de movimiento, inclinación y choque, además de un botón SOS interno para reportes de alarma inmediatos.
- Módulo BLE para detección de presencia del propietario y localización a corta distancia a través de una app para smartphone \(funcionalidad tipo sensores Bluetooth\).
- Comportamiento offline robusto: el almacenamiento no volátil conserva al menos 15,000 paquetes GPRS no enviados y los retransmite cuando se restablece la conexión.
- Montaje flexible: factor de forma compacto en opciones de carcasa IP54 o IP67 hermética para instalaciones al aire libre o encubiertas.

## Cómo funciona con Plaspy

El DX Mayak 8.1 se integra con Plaspy enviando mensajes estructurados por GPRS a los servidores de monitoreo y utilizando SMS como canal secundario. Plaspy recibe actualizaciones de seguimiento en tiempo real, telemetría y eventos de alarma, y los muestra en paneles, mapas y flujos de notificaciones. La retransmisión de paquetes almacenados por el dispositivo garantiza que no se pierda información durante interrupciones de la red: los mensajes en cola se entregan a Plaspy cuando se restablece la conectividad.

- Actualizaciones de ubicación y telemetría en tiempo real \(GLONASS+GPS, fijaciones asistidas por AGPS\).
- Eventos de detección de movimiento, inclinación y choque, además de reportes de alarma SOS para alertas instantáneas.
- Carga de batería, temperatura interna, recuento de satélites y nivel de señal GSM enviados con cada mensaje para una telemetría integral.
- Detección de presencia del propietario y localización a corta distancia basada en BLE reportada a Plaspy mediante la combinación dispositivo/app.
- Fallback a base GSM \(LBS\) cuando la recepción satelital no está disponible \(garajes, estacionamientos subterráneos\).
- Retransmisión automática de mensajes almacenados tras la restauración de la conexión para conservar los registros históricos de eventos en Plaspy.

## Resumen técnico

| Conectividad | Monitoreo GPRS \(GSM 2G\) y control/información por SMS |
| --- | --- |
| Bandas | GSM 2G \(GPRS\) — bandas GSM dependientes de la región |
| Alimentación y batería | 2 × CR123A lithium cells \(total ~1500 mAh\). Hasta 3 años en modo de intervalo de bajo consumo \(un registro al día\); hasta 5 días en modo online continuo \(varía según la actividad de GPS\). |
| Interfaces | Micro-USB para configuración; acelerómetro digital incorporado; botón SOS interno. No hay E/S externa ni monitorización de audio. |
| GNSS | GLONASS + GPS receptor con soporte AGPS y algoritmos de corrección de posición |
| Bluetooth | Bluetooth Low Energy \(BLE\) para detección de presencia del propietario y localización a corta distancia mediante smartphone |
| Gestión remota | Actualizaciones de firmware en el servidor vía GPRS, cuenta online para configuración, comandos SMS y configurador USB para Windows |
| Formato | Compacto. Carcasa IP54: 70 × 50 × 22 mm; opción de carcasa hermética IP67: 79 × 56 × 27 mm |

## Casos de uso

- Gestión de flotas: seguimiento discreto de vehículos y telemetría para vehículos ligeros, remolques y equipos de apoyo.
- Protección antirrobo: instalación encubierta para recuperación de vehículos robados — alertas instantáneas de movimiento, choque y SOS a Plaspy.
- Seguimiento de activos y carga: monitoriza envíos de alto valor, maletines de herramientas y equipo móvil con larga autonomía de batería.
- Supervisión de personas y personal vulnerable: ubicación y alertas de emergencia para niños, adultos mayores o pacientes cuando se requiere rastreo discreto.
- Recuperación de vehículos de dos ruedas y fuera de carretera: diseño compacto apto para motocicletas, quad y bicicletas donde el montaje encubierto es crítico.

## Por qué elegir este rastreador con Plaspy

El AutoFon DX Mayak 8.1 es un rastreador GPS diseñado para integrarse en entornos de monitoreo potenciados por Plaspy. Sus puntos fuertes incluyen telemetría predecible, rendimiento de bajo consumo excepcional para despliegues a largo plazo y una continuidad de datos robusta gracias a un amplio búfer de mensajes no volátil. La presencia basada en BLE y la localización a corta distancia añaden comodidad orientada al propietario sin agotar la energía principal, mientras que la configuración en servidor y las actualizaciones de firmware simplifican las operaciones de gestión de la flota. Para organizaciones e individuos que buscan un rastreador GPS confiable compatible con Plaspy, centrado en anti-robos, rastreo en tiempo real y telemetría detallada, el DX Mayak 8.1 ofrece una solución compacta, configurable y eficiente en energía.

**Notas sobre sensores e interfaces del vehículo:** El DX Mayak 8.1 se especializa en posicionamiento por satélite/GSM, detección de eventos basada en acelerómetro y presencia por BLE. No incluye monitorización de combustible integrada, entradas de ignición dedicadas ni salidas de inmovilizador. Si su despliegue requiere telemetría de combustible o control de ignición/inmovilizador, considere combinar la fiable fuente de ubicación y telemetría del DX Mayak 8.1 con las opciones de integración más amplias de Plaspy o hardware suplementario.

