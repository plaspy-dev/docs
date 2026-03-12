---
slug: /xirgo/xg37
id: xg37
sidebar_label: XG37
sidebar_class_name: menu_item_tracker
---
# Xirgo - XG37

![XG37](./tracker.webp)

El XG37 es un rastreador GPS telemático robusto para vehículos de flota, diseñado para la gestión profesional de flotas y flujos de cumplimiento. Predecesor probado del LX40, el XG37 ofrece telemetría CANBUS completa, notificaciones instantáneas de geocerca y un SDK para escenarios personalizados — todo empaquetado para una integración fluida como rastreador GPS compatible con Plaspy para seguimiento en tiempo real y visibilidad operativa.

Diseñado para flotas que requieren ubicación fiable, datos del vehículo y transmisión segura, el XG37 admite LTE Cat M1 \(con respaldo 2G\) o LTE Cat 1 \(con respaldo 3G UMTS/HSPA y 2G\) según el modelo. Su transferencia de datos basada en MQTT y el soporte de TLS 1.2 facilitan la transmisión en tiempo real de la ubicación y la telemetría CANBUS hacia Plaspy para monitorización en vivo, generación de informes y verificación de cumplimiento.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy: diseñado para alimentar el seguimiento en tiempo real y la telemetría en Plaspy para la gestión de flotas e informes.
- Acceso completo a datos CANBUS: captura de señales del motor, combustible y diagnóstico cuando estén disponibles para telemetría más detallada y monitoreo de combustible.
- Telemetría segura y ligera: transferencia de datos basada en MQTT con TLS 1.2 para comunicaciones cifradas y de baja latencia.
- Descarga remota de tacógrafo: admite la obtención remota de datos de tacógrafo para simplificar las horas de conducción y los flujos de cumplimiento.
- Notificaciones instantáneas de geocerca: alertas configurables para cumplimiento de rutas, entrada/salida en las instalaciones y monitoreo antirrobo.
- Opciones de energía flexibles: baterías opcionales \(1800 mAh, 850 mAh, 210 mAh\) para soportar operación de respaldo o adaptar a diferentes necesidades de instalación.
- SDK y algoritmos personalizados: el SDK integrado permite escenarios únicos y algoritmos en el propio dispositivo para reducir el ruido de datos y soportar lógica en el borde.
- Control de inmovilizador/accesorios donde sea compatible: puede integrarse con interfaces del vehículo para soportar flujos de inmovilización o accesorios externos cuando se desplieguen con el cableado adecuado y el soporte del vehículo.

## Cómo funciona con Plaspy

La integración con Plaspy está optimizada para flotas que requieren seguimiento en tiempo real, telemetría CANBUS y datos de cumplimiento en una única plataforma. El XG37 envía la posición GPS y los datos del vehículo mediante MQTT, y con TLS 1.2 el dispositivo asegura el canal entre rastreador y Plaspy. El SDK del dispositivo te permite adaptar los formatos de mensajes o activar reglas en el propio dispositivo para que Plaspy reciba solo los eventos y la telemetría que necesites.

- Actualización de ubicación y telemetría en tiempo real: la posición GNSS se envía a Plaspy para mapeo y monitorización en vivo.
- Telemetría CANBUS \(motor/encendido/ combustible cuando esté disponible\): datos de diagnóstico del vehículo y monitoreo de combustible pueden enviarse a Plaspy para su análisis.
- Alertas de geocerca y de eventos: las notificaciones instantáneas de geocerca llegan a Plaspy para el cumplimiento de rutas y la consciencia de anti-robo.
- Descargas remotas de tacógrafo: los datos de tacógrafo pueden recogerse y entregarse a Plaspy para cumplimiento e informes.
- Transporte seguro: el protocolo MQTT con TLS 1.2 protege la telemetría en tránsito hacia los servidores de Plaspy.
- Escenarios personalizados mediante el SDK: implemente lógica en el lado del dispositivo \(p. ej., muestreo inteligente, detección de eventos del conductor\) que alimente telemetría adaptada a Plaspy.
- Control de inmovilizador/accesorios cuando esté soportado: puede integrarse con interfaces del vehículo para soportar flujos de inmovilización o accesorios externos cuando se despliegue con el cableado adecuado y el soporte del vehículo.

## Visión técnica

| Conectividad | LTE Cat M1 con respaldo 2G, o LTE Cat 1 con 3G UMTS/HSPA y respaldo 2G GSM \(dependiente del modelo\) |
| --- | --- |
| Bandas | Varía por modelo — consulte al fabricante o la etiqueta del dispositivo para soporte de bandas regionales |
| Alimentación y batería | Configuraciones de batería opcionales: 1800 mAh, 850 mAh o 210 mAh \(según el modelo\) |
| Interfaces | Datos CANBUS completos, numerosas interfaces y E/S del vehículo; descarga remota de datos de tacógrafo soportada; SDK para integraciones personalizadas |
| GNSS | Motor GNSS integrado y antena GNSS para posición y rumbo |
| Bluetooth | No especificado en la descripción del dispositivo disponible — consulte la documentación del producto para soporte de sensores BLE |
| Gestión remota y seguridad | Protocolo de transferencia de datos basado en MQTT; admite TLS 1.2. SDK habilita escenarios y algoritmos en el dispositivo. |
| Factor de forma | Unidad telemática para vehículos diseñada para instalaciones en flotas; predecesora del LX40 |
| Certificaciones | IEC, CE/RED, E-Mark E24, TRA, SASO, ICASA, ANRT, OSTST, ANATEL |

## Casos de uso

- Gestión de flotas y optimización de rutas — seguimiento en tiempo real en Plaspy combinado con telemetría CANBUS para mejorar la utilización y reducir el tiempo de inactividad.
- Conformidad regulatoria y horas de conducción — las descargas remotas de tacógrafo simplifican auditorías y el mantenimiento de los registros de los conductores.
- Antirrobo y aplicación de geocerca — alertas instantáneas de geocerca y datos de posición en vivo en Plaspy ayudan a detectar movimientos no autorizados y a activar respuestas rápidas.
- Mantenimiento impulsado por telemetría y monitoreo de combustible — provea datos CANBUS de combustible y motor a Plaspy para identificar ineficiencias y planificar el servicio preventivo.

## Por qué elegir este rastreador con Plaspy

El XG37 es una opción práctica para operadores que requieren un rastreador GPS compatible con Plaspy que equilibre telemetría completa del vehículo, funciones de cumplimiento y transporte de telemetría seguro. Sus capacidades CANBUS y la descarga remota de tacógrafo reducen la carga administrativa, mientras que la pila MQTT/TLS mantiene la entrega de datos eficiente y segura. El SDK del dispositivo y las opciones de batería opcionales hacen que el XG37 sea flexible para diferentes escenarios de flota, desde camiones de larga distancia hasta vehículos de reparto urbano.

Al combinar el XG37 con Plaspy obtienes seguimiento en tiempo real fiable, telemetría enriquecida \(motor, encendido y combustible cuando esté disponible\) y una plataforma configurable para alertas e informes. Para flotas enfocadas en la visibilidad operativa, el cumplimiento regulatorio y la supervisión anti-robo, el XG37 ofrece una base telemática madura que se integra de forma limpia en tus flujos de trabajo de Plaspy.

