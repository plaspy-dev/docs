---
slug: /coban/bn_401a
id: bn_401a
sidebar_label: BN-401A
sidebar_class_name: menu_item_tracker
---
# Coban - BN-401A

![BN-401A](./tracker.png)

BN-401A

El BN-401A es un terminal de gestión para motocicletas compacto LTE \(4G\) diseñado para una instalación sencilla y un seguimiento en tiempo real fiable compatible con Plaspy. Pensado para scooters, motocicletas y otros vehículos pequeños con un sistema eléctrico de 12–24 V, el BN-401A ofrece funcionalidad continua de rastreador GPS, alarmas antirrobo y fundamentos de gestión de flota en un formato de perfil bajo. Su conectividad 4G con respaldo GSM/GPRS y opciones de transporte TCP/UDP/SMS facilita su integración con Plaspy para ubicación en vivo, alertas y telemetría básica.

Compatible con Plaspy de serie, el BN-401A ofrece las señales y los datos de eventos que esperan los operadores de flota: ubicación, estado ACC/encendido, movimiento y alarmas por golpes, SOS, eventos de geocerca y inmovilización remota \(corte de energía/combustible\). Bluetooth está incluido para una configuración rápida en sitio, y el dispositivo admite estrategias de reporte configurables para minimizar el uso de datos cuando está detenido, manteniendo disponibles para transmisión inmediata a Plaspy las alarmas y eventos críticos.

## Aspectos Clave

- Rastreador GPS compatible con Plaspy optimizado para motocicletas y vehículos ligeros — fácil de instalar y de ocultar.
- Seguimiento en tiempo real sobre LTE \(4G\) con respaldo GSM/GPRS y transporte TCP/UDP/SMS para una conectividad resiliente.
- Alarmas antirrobo y de gestión de flotas: SOS, detección de movimiento/golpes, velocidad excesiva, encendido ACC y avisos de batería baja.
- Capacidad de inmovilización remota \(corte de combustible y de energía\) para respaldar políticas de inmovilización seguras del vehículo.
- Modos de reporte inteligentes para ahorrar ancho de banda: actualizaciones frecuentes en movimiento, menor reporte cuando está inmóvil, y alarmas que fuerzan el reporte en línea.
- Bluetooth para configuración local y despliegue rápido sin cableado complejo ni herramientas de programación externa.
- Formato compacto y ligero diseñado para montaje discreto en vehículos de dos ruedas.

## Cómo Funciona con Plaspy

El BN-401A transmite la posición GNSS y telemetría de eventos a Plaspy utilizando métodos de transporte estándar \(TCP, UDP o SMS\). Una vez añadido a una flota de Plaspy, el dispositivo envía actualizaciones de ubicación en tiempo real, cambios de estado y eventos de alarma que Plaspy utiliza para mapas en vivo, alertas, informes y reproducción de historial. Los intervalos de reporte configurables y un modo offline inteligente permiten equilibrar la frecuencia de actualizaciones y el uso de datos, manteniendo las alertas de seguridad y anti‑robo inmediatas.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para seguimiento en vivo y reproducción de trayectos.
- Estado ACC/encendido, notificaciones de funcionamiento del ACC y alarmas de encendido para una visión operativa de la flota.
- Alarma de batería baja y alarma de desconexión de alimentación externa para detectar manipulaciones o problemas de energía de forma temprana.
- Soporte de inmovilizador remoto \(corte remoto de combustible y de la alimentación\) para desactivar un vehículo cuando sea necesario.
- Alarma de emergencia/SOS, alarma de movimiento, alarma de velocidad excesiva y detección de golpes enviadas como alertas de Plaspy.
- Bluetooth disponible para configuración local; el dispositivo admite comandos de configuración por SMS e integración de protocolos para el onboarding en Plaspy.

## Resumen Técnico

| Conectividad | LTE \(4G\) con respaldo GSM/GPRS; admite protocolos de transporte TCP, UDP y SMS |
| --- | --- |
| Bandas | Conjuntos de bandas LTE regionales: América Latina B2/B3/B4/B5/B7/B8/B28A/B28B; Norteamérica B2/B4/B5/B7/B12/B13/B66/B28A; Eurasia/África B1/B3/B5/B7/B8/B20/B28A/B40 |
| Energía & Batería | Alimentación del vehículo 12–24V; batería interna de respaldo recargable de 3.7V 90 mAh |
| Condiciones de Funcionamiento | Operación -20°C a +45°C; almacenamiento -40°C a +85°C; humedad 5%–95% sin condensación |
| Interfaces | Entrada de detección de estado ACC; arnés externo para control de relé y accesorios \(sirena, botón SOS, arnés de extensión\); admite corte remoto de combustible/energía |
| GNSS | Receptor GNSS de alta precisión; sensibilidad GPS -165 dBm; precisión de posicionamiento ≈5 m; arranque en frío ≈45 s, tibio ≈35 s, caliente ≈1 s |
| Bluetooth | Bluetooth integrado para configuración local \(no se indica como un hub general de sensores BLE\) |
| Gestión Remota | Comandos de configuración por SMS compatibles; protocolo completo y configuración documentados en manuales descargables y videos de instalación |
| Formato | Unidad compacta de 6.78 x 4.1 x 2.15 cm; peso 58 g — diseñada para montaje en motocicletas o scooters |

## Casos de Uso

- Gestión de flotas para mensajeros en motocicleta y scooters de reparto — seguimiento en tiempo real, reproducción de rutas y monitorización de velocidad excesiva.
- Protección antirrobo para vehículos de dos ruedas personales y comerciales — detección de movimiento/golpes, alarma SOS y inmovilizador remoto.
- Telemetría operativa para flotas de vehículos pequeños — notificaciones de encendido \(ACC\), alertas de batería baja y corte de energía para reducir el tiempo de inactividad.
- Instalaciones de despliegue rápido donde un perfil bajo y una configuración sencilla son importantes — configuración asistida por Bluetooth y conexiones simples del arnés para relés y botones SOS.
- Uso en implementaciones regionales mixtas — variantes de bandas LTE múltiples para soportar la compatibilidad regional de la red.

## Por qué Elegir Este Rastreador con Plaspy

Cuando se necesita un rastreador GPS compatible con Plaspy, diseñado para motocicletas y vehículos pequeños, el BN-401A ofrece un equilibrio pragmático entre fiabilidad, tamaño y las funciones clave de anti‑robo/gestión de flota. Su conectividad LTE con respaldo GSM y soporte para TCP/UDP/SMS garantiza una entrega de datos sólida a Plaspy para seguimiento en tiempo real, alertas y telemetría. La batería de respaldo integrada y los modos de reporte configurables ayudan a mantener la continuidad y optimizar el uso de datos, mientras que las entradas para ACC y control externo de relé permiten una monitorización basada en el encendido y acciones de inmovilización remota como el corte de combustible o energía.

Para gestores de flota y proveedores de servicios, el BN-401A simplifica la configuración en sitio vía configuración por Bluetooth y protocolos de comandos por SMS documentados, reduciendo el tiempo de instalación y la carga de soporte. Úselo con Plaspy para centralizar los datos del rastreador GPS, crear tableros en vivo, automatizar respuestas ante robos y gestionar flotas de vehículos pequeños con telemetría y control fiables y de coste contenido.

