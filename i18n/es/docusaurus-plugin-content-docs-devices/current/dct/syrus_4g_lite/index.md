---
slug: /dct/syrus_4g_lite
id: syrus_4g_lite
sidebar_label: Syrus 4G Lite
sidebar_class_name: menu_item_tracker
---
# DCT - Syrus 4G Lite

![Syrus 4G Lite](./tracker.png)

El Syrus 4G Lite es una pasarela telemática IoT robusta, diseñada para un despliegue fiable compatible con Plaspy en proyectos de gestión de flotas y telemetría industrial. Con antenas celulares y GNSS integradas, una carcasa IP65 resistente al agua y una batería interna de respaldo, este rastreador GPS está concebido para ofrecer seguimiento continuo en tiempo real y diagnóstico remoto para vehículos, remolques y activos en campo en entornos exigentes.

Basada en una plataforma embebida Apex Linux \(Yocto\) y programable con Syruslang, el Syrus 4G Lite combina inteligencia en el borde, captura de incidentes en la caja negra y un amplio soporte celular \(4G Cat‑1, LTE‑M, NB‑IoT\) para facilitar la integración con Plaspy. Los operadores obtienen una localización fiable, telemetría de códigos de fallo del motor y gestión segura por aire para acelerar flujos de mantenimiento y reforzar el anti‑robo y la monitorización operativa a lo largo de sus flotas.

## Aspectos clave

- Localizador GPS compatible con Plaspy para seguimiento en tiempo real y gestión centralizada de la flota.
- Conectividad celular multiformato: 4G Cat‑1 con compatibilidad LTE‑M \(Cat‑M1\) y NB‑IoT \(NB2\) para una amplia cobertura y eficiencia en telemetría.
- GNSS a bordo y grabación en caja negra ofrecen ubicación precisa y registros de incidentes para análisis posteriores.
- Diagnósticos del motor y reporte de códigos de fallo reducen el tiempo de inactividad al habilitar flujos de mantenimiento proactivos.
- Carcasa robusta IP65 y antenas integradas para operación fiable en vehículos y activos exteriores.
- Batería interna de respaldo mantiene la conectividad durante interrupciones de energía y eventos de manipulación.
- Programabilidad en el borde con Syruslang y Apex OS permite lógica personalizada, filtrado local e integración más sencilla con Plaspy.

## Cómo funciona con Plaspy

El Syrus 4G Lite transmite la posición GNSS y telemetría a Plaspy para seguimiento en tiempo real, alertas e informes históricos. Plaspy ingiere la ubicación GPS, métricas de estado del dispositivo, registros de incidentes de la caja negra y códigos de diagnóstico del motor desde la puerta de enlace. Cuando estén disponibles señales del bus del vehículo o entradas periféricas, Plaspy puede correlacionar eventos de ignición, alertas de puertas/alarma, telemetría relacionada con combustible y acciones del inmovilizador con la ubicación y diagnósticos con marca temporal para apoyar flujos de anti‑robo y automatización del mantenimiento.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy para paneles de seguimiento en vivo y reproducción de rutas.
- Códigos de fallo del motor y datos de estado del vehículo para un diagnóstico más rápido y la programación de mantenimiento.
- Registros de la caja negra capturan datos en el momento del incidente para análisis forense e informes para seguros.
- Configuración remota y actualizaciones de firmware por aire coordinadas desde la consola de gestión de dispositivos de Plaspy.
- Monitoreo de encendido, puertas, alarma y combustible, y control remoto del inmovilizador cuando esos señales se suministren a través de la interfaz del vehículo o periféricos compatibles.

## Visión técnica

| Conectividad | 4G Cat‑1 con compatibilidad LTE‑M \(Cat‑M1\) y NB‑IoT \(NB2\) para telemetría y transferencia de datos |
| --- | --- |
| Bandas | Las bandas de radio específicas varían según SKU y modelo regional; admite tecnologías IoT celulares para una amplia cobertura global |
| Alimentación y Batería | Batería de respaldo integrada para continuidad durante pérdidas de energía o manipulación; diseñada para operación continua en instalaciones en vehículos y en campo |
| Interfaces | Monitoreo de diagnóstico del motor y funcionalidad de registro en caja negra; APIs y scripting \(Syruslang\) para interacción con periféricos e integraciones personalizadas |
| GNSS | Receptor GNSS a bordo para ubicación real en tiempo real y registro de rutas |
| Bluetooth | No especificado en esta descripción |
| Gestión remota | Apex OS \(Yocto\) con Syruslang; admite configuración remota, integración en la nube y actualizaciones de firmware por aire |
| Formato | Carcasa robusta IP65 con antenas integradas de celular y GNSS, apta para montaje en vehículos y activos industriales |

## Casos de uso

- Flujos de anti‑robo e inmovilización de flotas — integre alertas de Plaspy con registros de la caja negra del dispositivo y acciones del inmovilizador remoto cuando sean compatibles con las interfaces del vehículo.
- Salud del vehículo y mantenimiento — capture códigos de fallo del motor y telemetría para reparaciones priorizadas y reducción de tiempos de inactividad.
- Seguimiento de remolques y equipos en entornos exigentes — protección IP65 y antenas integradas garantizan rendimiento continuo del rastreador GPS al aire libre.
- Análisis de incidentes y documentación para seguros — grabaciones de la caja negra proporcionan telemetría con marca temporal en el instante del evento.
- Telemetría de IoT industrial — agregue datos de sensores y ubicación para logística, utilización de activos y diagnóstico remoto a través de Plaspy.

## Por qué elegir este rastreador con Plaspy

El Syrus 4G Lite ofrece una combinación equilibrada de hardware robusto, opciones celulares flexibles y software embebido orientado al desarrollador que lo convierten en una opción sólida para implementaciones compatibles con Plaspy. Su soporte para 4G Cat‑1, LTE‑M y NB‑IoT aumenta la resiliencia de la conectividad en distintas regiones, mientras que GNSS a bordo, la funcionalidad de caja negra y el reporte de fallos del motor entregan la telemetría y capacidades de rastreo GPS que los gestores de flotas confían para el seguimiento en tiempo real y el mantenimiento proactivo. La programabilidad en el borde mediante Syruslang y Apex simplifica la lógica personalizada, el filtrado de datos y la integración de periféricos para que Plaspy reciba datos limpios y accionables sin necesidad de una personalización extensa del gateway.

Para gestores de flotas y equipos de operaciones que buscan un seguimiento en tiempo real escalable y telemetría confiable, el Syrus 4G Lite potencia los flujos de gestión de flotas de Plaspy, anti‑robo, monitorización de combustible y diagnóstico remoto. Su diseño robusto y la batería interna de respaldo aseguran operación continua en campo, mientras que la gestión remota y el soporte OTA reducen la carga de servicio y aceleran las implementaciones en grandes flotas de vehículos.

