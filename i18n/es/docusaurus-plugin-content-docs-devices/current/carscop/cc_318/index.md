---
slug: /carscop/cc_318
id: cc_318
sidebar_label: CC-318
sidebar_class_name: menu_item_tracker
---
# Carscop - CC-318

![CC-318](./tracker.JPG)

# CC-318 GPS Tracker

El CC-318 es un rastreador GPS compatible con Plaspy, diseñado para entornos de alquiler de coches, car-sharing y gestión de flotas. Este dispositivo de control de coche 2G GSM y rastreo GPS combina seguimiento en tiempo real fiable, capacidad de inmovilización remota y salidas de control del vehículo para ofrecer la conectividad y las características de seguridad que requieren las flotas y los operadores de alquiler. Con posicionamiento GPS/Beidou integrado, asistencia A-GPS y respaldo LBS, el CC-318 mantiene visibles los vehículos ante Plaspy incluso en condiciones de señal desafiantes.

Diseñado para una instalación sencilla y un montaje discreto, el CC-318 incluye una batería de respaldo interna recargable Li‑ion y una alarma de apagado para que los eventos críticos se informen a Plaspy si se corta la alimentación principal. La unidad admite acciones remotas como bloqueo/desbloqueo, activación de luces y bocina, además de control cableado de cerraduras centrales y sirenas —lo que la convierte en una herramienta práctica de anti‑robo y telemetría para operaciones de vehículo y movilidad compartida.

## Aspectos destacados

- Rastreador GPS 2G GSM compatible con Plaspy para un seguimiento en tiempo real fiable y un historial de ubicaciones.
- Funciones de control remoto — bloqueo/desbloqueo, activación de luces y bocina, y corte de motor a demanda \(inmovilizador remoto\) vía Internet o SMS.
- GPS/Beidou integrado con A-GPS para obtención rápida de la posición y respaldo LBS cuando la señal GPS no está disponible.
- Batería de respaldo interna recargable Li‑ion y alarma de apagado para reportar manipulación o pérdida de energía.
- Entradas de alarma para golpes, puerta y ACC para generar alertas de seguridad y comportamiento del conductor en Plaspy.
- Memoria a bordo para grabación de ruta sin conexión, además de registro con G-sensor para el comportamiento de conducción y análisis de telemetría.
- Amplio rango de tensión de funcionamiento \(9–40 V\) apto para vehículos de 12 V y 24 V usados en gestión de flotas, alquiler y car-sharing.
- Actualizaciones opcionales \(Bluetooth, CANbus\) para ampliar el soporte de sensores, acceso a datos del vehículo e integración de telemetría de combustible.

## Cómo funciona con Plaspy

Integrar el CC-318 con Plaspy permite telemetría continua, alertas configurables y control remoto del vehículo desde la plataforma Plaspy o la aplicación móvil. El dispositivo informa ubicación, entradas de seguridad y eventos de sensores a Plaspy mediante TCP/IP y datos GSM, y también puede recurrir a notificaciones por SMS cuando sea necesario. Una API abierta y el modo cliente TCP/IP facilitan enviar datos a servidores privados o ingerir eventos del dispositivo en Plaspy para análisis, geocercas y flujos de trabajo de la flota.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy \(GPS/Beidou + A-GPS, respaldo LBS\).
- Entradas de alarma y reporte de estado: eventos de puerta, choque y ACC se transmiten como alertas.
- Monitoreo de combustible y datos del vehículo mediante la integración CANbus opcional \(cuando está instalado y configurado\).
- Inmovilizador remoto / corte de motor a demanda mediante comando por Internet o SMS para anti‑robo y flujos de alquiler.
- Soporte opcional para sensores/beacons Bluetooth para proximidad, identificación del conductor o telemetría ambiental cuando se usa la actualización Bluetooth.
- Intervalos de subida configurables y registro a bordo para garantizar la continuidad de la trazabilidad, incluso con conectividad intermitente.

## Resumen técnico

| Conectividad | Módulo 2G GSM de 4 bandas \(datos GSM y SMS para comandos y telemetría\) |
| --- | --- |
| GNSS | Posicionamiento GPS y Beidou con asistencia A-GPS; respaldo LBS \(torre celular\) para reporte de ubicación |
| Alimentación y batería | Amplio rango de tensión 9–40 V; batería interna recargable de Li‑ion de respaldo; alarma de apagado |
| Entradas y salidas | Entradas de alarma \(golpe, puerta, ACC\); salidas cableadas para cerraduras centrales, sirenas y otros sistemas del vehículo; soporte para inmovilización remota \(corte de motor\) |
| Memoria a bordo | Memoria interna para grabación de ruta sin conexión cuando la red no está disponible |
| Sensores | Sensor G integrado para registro del comportamiento de conducción; sensores Bluetooth opcionales compatibles mediante actualización |
| Actualizaciones opcionales | Módulo Bluetooth e integración CANbus disponibles para ampliar el telemetría y el acceso a datos del vehículo |
| Gestión remota | Conexión TCP/IP para servidores de clientes privados, API abierta para reenvío de datos, control por Internet y SMS, compatibilidad con la app móvil a través de Plaspy |
| Antenas y formato | Antenas GSM y GPS integradas; unidad compacta diseñada para instalación oculta en el vehículo; incluye arnés de cables y tarjeta de instrucciones |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, telemetría de comportamiento del conductor y grabación de rutas sin conexión para mejorar la eficiencia de rutas y el cumplimiento.
- Alquiler de coches y car-sharing: bloqueo/desbloqueo remoto, inmovilización a demanda y seguimiento de uso integrados con los flujos de trabajo de Plaspy.
- Anti‑robo y recuperación: alertas de manipulación/power-down, alarmas de puerta y de choque, además de inmovilizador remoto para asegurar los vehículos.
- Telemetría y mantenimiento del vehículo: registro con G-sensor y datos CANbus opcionales para monitoreo de combustible y diagnóstico del motor/eventos.
- Configuraciones de monitoreo híbridas: usar sensores Bluetooth para identificación del conductor, monitoreo de carga/ambiental o eventos disparados por proximidad.

## Por qué elegir este rastreador con Plaspy

El CC-318 ofrece una opción práctica y específica para operadores que necesitan un rastreador GPS compatible con Plaspy que combine control del vehículo, características anti‑robo y telemetría. Su confiable conectividad 2G GSM, posicionamiento GNSS con A-GPS y respaldo LBS aseguran una reporte de ubicación continuo para el seguimiento en tiempo real y el análisis histórico. La batería de respaldo integrada y la alarma de apagado aumentan la resiliencia ante manipulaciones, mientras que los intervalos de subida configurables y la memoria a bordo mantienen la continuidad de los datos para los informes de gestión de flotas.

Para plataformas de car-sharing y alquiler, el inmovilizador remoto del CC-318, las salidas de bloqueo/desbloqueo y las entradas de alarma simplifican el control operativo y la seguridad a través de Plaspy. Las mejoras opcionales de Bluetooth y CANbus permiten ampliar el dispositivo para capturar sensores del conductor o ambientales y datos del bus del vehículo \(incluyendo métricas de combustible cuando se utiliza CANbus\). Combinado con TCP/IP, control por SMS y una API abierta, el CC-318 se integra con Plaspy para ofrecer telemetría accionable, protección anti‑robo y operaciones de vehículos más eficientes.

