---
slug: /astra_telematics/at405
id: at405
sidebar_label: AT405
sidebar_class_name: menu_item_tracker
---
# Astra Telematics - AT405

![AT405](./tracker.jpg)

El AT405 es un rastreador GPS compacto, con clasificación IP65, y una unidad telemática IoT diseñada para moto-compartida y proyectos de vehículos conectados. Compatible con Plaspy de serie, el AT405 combina comunicaciones celulares LTE Cat 1, GNSS de múltiples constelaciones y BLE a bordo para ofrecer seguimiento en tiempo real confiable, telemetría del vehículo e integración de sensores Bluetooth de corto alcance para gestión de flotas y flujos de anti-robos.

El AT405 fue diseñado para una integración vehicular sencilla y una operación de bajo consumo. Con opciones de conectores automotrices, acceso CANBus, entradas y salidas digitales y una batería de respaldo de 510 mAh, el AT405 ofrece un equilibrio práctico entre capacidad y eficiencia, lo que lo convierte en una opción sólida para operadores que requieren hardware compatible con Plaspy que soporte monitorización remota, control de inmovilización y generación de informes personalizable.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy con conectividad celular LTE Cat 1 para seguimiento en tiempo real fiable en las redes soportadas.
- GNSS de múltiples constelaciones \(GPS, Galileo, GLONASS y BeiDou\) con una antena interna de 15 mm para mejorar la precisión de posicionamiento.
- Integración de grado vehicular vía CANBus más dos entradas digitales y dos salidas digitales para monitorización de encendido y funciones de control remoto \(p. ej., control del inmovilizador\).
- Bluetooth Low Energy \(BLE\) para conectividad de corto alcance con sensores y beacons Bluetooth; útil para proximidad, control de acceso o telemetría adicional.
- Diseño robusto de bajo consumo que emplea un microcontrolador STM32L4 y una batería interna de respaldo de 510 mAh; aproximadamente seis días en modo de bajo consumo con informes cada 24 horas en un sistema de 24V.
- Caja con clasificación IP65 y un amplio rango de tensión de funcionamiento \(6.0V a 60.0V\) para una implementación flexible en motos, scooters y flotas de vehículos ligeros.
- Opciones de conectores automotrices y hojas de datos, guías de usuario e instrucciones de instalación descargables para simplificar el despliegue de la flota y las instalaciones de posventa.

## Cómo Funciona con Plaspy

El AT405 se integra con Plaspy para transmitir ubicación, estado y telemetría para monitoreo en tiempo real, alertas e informes históricos. Los datos del GNSS a bordo y de las interfaces del vehículo se envían a través de LTE Cat 1 a los servidores de Plaspy, donde pueden visualizarse, analizarse y tomarse acciones. Las opciones de informes compatibles con Plaspy y las cargas útiles personalizables permiten incluir la telemetría exacta que necesites sin desarrollo de firmware personalizado.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas vía LTE Cat 1 para seguimiento en mapas en vivo y geocercas en Plaspy.
- Monitoreo de encendido y estado del vehículo mediante entradas digitales y mensajes CANBus; compatibles con alertas basadas en eventos y análisis del comportamiento del conductor.
- Telemetría del vehículo \(parámetros del motor, nivel de combustible, datos de diagnóstico\) accesible a través de CANBus donde esos mensajes están expuestos por el vehículo.
- Control remoto del inmovilizador y otras funciones de actuadores utilizando las salidas digitales del dispositivo para flujos antipiratería.
- Integración de sensores Bluetooth para comprobaciones de proximidad, temperatura o sensores accesorios vía BLE; visible junto a datos GPS y CAN en los tableros de Plaspy.

## Resumen técnico

| Conectividad | LTE Cat 1 \(4G\) con micro SIM; antena celular GSM interna |
| --- | --- |
| Bandas | Bandas LTE Cat 1 dependientes de la región \(consulta la hoja de datos del producto para los planes de banda regional admitidos\) |
| Potencia y Batería | Tensión de funcionamiento 6.0V–60.0V; batería de respaldo interna de 510mAh; ~6 días en modo de bajo consumo con informes cada 24 horas \(sistema de 24V\) |
| Interfaces | 2 × entradas digitales, 2 × salidas digitales, interfaz 1-Wire / Dallas, puerto RS232, CANBus |
| GNSS | GNSS de múltiples constelaciones: GPS, Galileo, GLONASS, BeiDou; antena GNSS interna \(15 mm\) |
| Bluetooth | Bluetooth Low Energy \(BLE\) para sensores y beacons de corto alcance |
| Gestión remota | Garantía de cinco años; actualizaciones del sistema en curso; disponible personalización de hardware e informes; hojas de datos y guías de instalación descargables |
| Procesador y Eficiencia | Microcontrolador STM32L4 de bajo consumo para rendimiento equilibrado y duración de la batería |
| Forma y Durabilidad | Carcasa compacta con clasificación IP65 y opciones de conectores automotrices para instalaciones de flota y OEM |

## Casos de uso

- Gestión de flota para scooters y motocicletas: seguimiento en tiempo real, historial de rutas y monitorización del comportamiento del conductor mediante entradas CANBus y acelerómetro.
- Antirrobo e inmovilización: detecta movimiento no autorizado con el acelerómetro MEMS y desactiva de forma remota los vehículos mediante salidas digitales.
- Telemetría y monitorización de combustible: recoger mensajes CAN relacionados con el motor y el combustible cuando estén disponibles y mostrarlos en los tableros de Plaspy para programas de eficiencia.
- Operaciones de última milla y movilidad compartida: verificación de proximidad habilitada por BLE, detección de proximidad e integración de sensores de corto alcance para servicios sin estaciones o basados en estaciones.
- Retrofits de posventa: diseño compacto IP65 y amplio rango de tensión facilitan las instalaciones en el cableado existente utilizando conectores automotrices.

## Por qué elegir este rastreador con Plaspy

Elegir el AT405 para tu integración con Plaspy ofrece un rastreador GPS fiable y compatible con Plaspy que equilibra el seguimiento en tiempo real, la telemetría del vehículo y características de instalación prácticas. La combinación de conectividad LTE Cat 1, GNSS de múltiples constelaciones, acceso CANBus y BLE proporciona los bloques básicos para la gestión de flotas, anti‑robo y servicios de vehículos conectados. Con opciones de conectores automotrices, una garantía sólida, documentación disponible y personalización de informes sin costo, el AT405 reduce la fricción de integración y escala desde pilotos pequeños hasta despliegues de mayor tamaño.

