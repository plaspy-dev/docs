---
slug: /aplicom/t20
id: t20
sidebar_label: T20
sidebar_class_name: menu_item_tracker
---
# Aplicom - T20

![T20](./tracker.png)

El Aplicom T20 es un rastreador GPS compacto compatible con Plaspy y una pasarela de telemática diseñada para un seguimiento confiable de vehículos y equipos móviles. Con conectividad celular LTE‑M optimizada para IoT y telemática, el T20 se posiciona como una solución a prueba de futuro para integradores y operadores de flotas que requieren un seguimiento continuo en tiempo real, captura telemétrica robusta y gestión segura por aire.

Las interfaces industriales del T20 y sus dos puertos CAN permiten recoger diagnósticos de vehículos y maquinaria directamente desde redes CAN y conectar periféricos como lectores iButton, teclados, lectores RFID y sensores de temperatura. Combinado con el SDK de Aplicom y las herramientas Silver Cloud OTA, el T20 habilita el procesamiento en el borde, reducción del uso de ancho de banda celular y una gestión de dispositivos más eficiente para gestión de flotas, flujos de trabajo anti‑robo y casos de uso de telemetría más amplios.

## Aspectos clave

- Flujo de rastreador GPS compatible con Plaspy: integra la ubicación del vehículo y la telemetría en Plaspy para seguimiento en tiempo real y paneles de gestión de flotas.
- Conectividad celular LTE‑M para comunicaciones de bajo consumo optimizadas para IoT y soporte de red a largo plazo.
- Interfaces CAN de doble puerto capturan diagnósticos de vehículos y maquinaria para telemetría avanzada y monitoreo de combustible mediante datos CAN.
- Múltiples E/S industriales para periféricos: admite lectores iButton, teclados, lectores RFID y sensores de temperatura para ampliar capacidades de anti‑robo y monitoreo de carga.
- El SDK de Aplicom permite desarrollar aplicaciones de borde personalizadas para filtrar y preprocesar datos en el dispositivo, reduciendo costos en la nube y el uso de datos celulares.
- Gestión OTA \(Over‑the‑Air\) a través de Aplicom Silver Cloud para configuración remota, actualizaciones de firmware y despliegue de aplicaciones personalizadas a gran escala.
- Formato compacto para una instalación fácil en vehículos, remolques, maquinaria de construcción y otros activos móviles.

## Cómo funciona con Plaspy

El Aplicom T20 se conecta a Plaspy reenviando datos de telemetría y ubicación procesados a través de LTE‑M. Los integradores pueden usar el SDK a bordo para ejecutar lógica de borde que agregue o filtre entradas crudas de CAN y sensores antes de enviar eventos a Plaspy, lo que permite un seguimiento en tiempo real eficiente y alertas accionables. Plaspy luego consume flujos de ubicación, telemetría y eventos para mapeo, informes y flujos de trabajo automáticos.

- Actualizaciones en tiempo real de ubicación y telemetría a Plaspy para monitoreo en vivo de la flota y análisis de rutas.
- Telemetría y datos diagnósticos directos del bus CAN para el estado del motor, la salud del vehículo y el monitoreo de combustible cuando tales señales están disponibles en la red CAN del vehículo.
- Entradas de sensores periféricos \(iButton, RFID, teclado, sensores de temperatura\) enviadas como eventos a Plaspy para control de acceso, monitoreo de carga y logística sensible a la temperatura.
- Configuración remota y actualizaciones de firmware vía Aplicom Silver Cloud, coordinadas con las tareas de gestión de dispositivos de Plaspy.
- Procesamiento en el borde para reducir el volumen de datos, permitiendo que Plaspy reciba solo los eventos de ubicación y telemetría más relevantes para informes y alertas.
- El control de encendido o inmovilizador impulsado por el integrador y los flujos de trabajo anti‑robo pueden implementarse a través del CAN del vehículo o E/S externa cuando así lo configure el instalador y sea compatible con los sistemas del vehículo.
- El soporte para añadir sensores Bluetooth u otros radios externos mediante periféricos o adaptadores de gateway puede integrarse en los flujos de trabajo de Plaspy cuando dichos sensores estén conectados y gestionados por código de borde personalizado.

## Resumen técnico

| Conectividad | LTE‑M \(celular optimizado para IoT 4G\) |
| --- | --- |
| Bandas | No especificado en la descripción proporcionada \(las variantes pueden diferir por región\) |
| Alimentación y batería | Diseñado para la alimentación de vehículos y activos móviles; la información de la batería de respaldo no está especificada en la descripción proporcionada |
| Interfaces | Múltiples E/S industriales para periféricos \(lectores iButton, teclados, RFID, sensores de temperatura\), 2x interfaces CAN para datos de vehículos y maquinaria |
| GNSS | Detalles de posicionamiento/GNSS no especificados en la descripción proporcionada — confirme capacidades GNSS en la ficha técnica de Aplicom |
| Bluetooth | Soporte de sensores Bluetooth no especificado; los sensores Bluetooth externos pueden integrarse cuando sean compatibles con los periféricos conectados o mediante soluciones personalizadas |
| Gestión remota | Aplicom Silver Cloud: configuración OTA, actualizaciones de firmware y despliegue de aplicaciones personalizadas; SDK de Aplicom para desarrollo de aplicaciones de borde |
| Formato | Gateway telemático compacto para instalaciones en vehículos y maquinaria móvil |

## Casos de uso

- Gestión de flotas y seguimiento en tiempo real para vehículos ligeros y pesados, con telemetría integrada para optimizar rutas y reportar la utilización.
- Telemetría y diagnósticos de maquinaria pesada vía CAN para mantenimiento preventivo y maximización de la disponibilidad.
- Monitoreo de remolques y carga usando RFID, sensores de temperatura y entradas de eventos para proteger las cargas y permitir logística sensible a la temperatura.
- Flujos de trabajo anti‑robo e inmovilización implementados por integradores usando CAN del vehículo o E/S externa junto con alertas de Plaspy y acciones remotas.
- Proyectos de IoT industrial que requieren gestión OTA segura, filtrado de datos en el borde e integración de múltiples sensores periféricos para monitoreo de equipos.

## Por qué elegir este rastreador con Plaspy

Emparejar el Aplicom T20 con Plaspy ofrece a las flotas e integradores una vía práctica hacia telemática escalable y mantenible. La conectividad LTE‑M y las interfaces industriales del T20 garantizan telemetría fiable y un soporte de red orientado al futuro, mientras que las dos interfaces CAN facilitan extraer señales de diagnóstico y relacionadas con el combustible directamente de las redes del vehículo. El SDK de Aplicom y las herramientas OTA de Silver Cloud permiten implementar filtrado en el borde y administración remota, reduciendo costos en la nube y simplificando actualizaciones a nivel de flota. Cuando se integra en Plaspy, el T20 habilita seguimiento en tiempo real, informes de telemetría sólidos y flujos de trabajo personalizables de anti‑robo o inmovilizador implementados por el instalador, proporcionando una solución confiable y configurable para la gestión de flotas y el monitoreo de activos móviles.

