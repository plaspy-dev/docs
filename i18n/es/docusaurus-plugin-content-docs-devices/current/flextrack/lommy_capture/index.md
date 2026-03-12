---
slug: /flextrack/lommy_capture
id: lommy_capture
sidebar_label: Lommy Capture
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Capture

![Lommy Capture](./tracker.jpg)

Lommy Capture es un rastreador GPS compacto y fácil de instalar, diseñado para un monitoreo persistente y de bajo mantenimiento de remolques, caravanas y otros activos remolcados. Como dispositivo compatible con Plaspy, Lommy Capture ofrece seguimiento en tiempo real fiable y recuperación de rutas históricas, todo ello cabiendo de forma discreta en una carcasa ligera — un diseño que facilita a gerentes de flota y operadores logísticos mantener una supervisión continua sin visitas de servicio frecuentes.

Diseñado para la gestión de flotas y casos de uso de anti‑hurto, Lommy Capture utiliza la recolección de energía de los circuitos de iluminación del vehículo en lugar de una batería fija. Ese enfoque de suministro de energía, combinado con GNSS de múltiples constelaciones, conmutación a red celular y sensores a bordo, hace de Lommy Capture una opción práctica para operadores que requieren telemetría e información de ubicación que se integre con Plaspy para alertas, geocercas y generación de reportes.

## Aspectos clave

- Compatible con Plaspy: se integra con Plaspy mediante APIs abiertas y protocolos de datos industriales estandarizados para un seguimiento en tiempo real sin interrupciones.
- Operación de recolección de energía: carga supercapacitores desde los circuitos de las luces traseras, luces de freno e indicadores — no se requiere una batería dedicada.
- Informes persistentes: cuando se alimenta por las luces traseras, transmite con intervalos de hasta 2 minutos; informes de respaldo limitados cuando está desconectado.
- GNSS de múltiples constelaciones con SBAS y posicionamiento asistido para fijaciones rápidas y precisas incluso en entornos difíciles.
- Conectividad celular robusta: 4G LTE Cat M1 inteligente con conmutación a 2G cuádruple banda y triangulación celular avanzada si GNSS no está disponible.
- Formato compacto y robusto \(54 × 44 × 19 mm, 42 g\) con clasificación IP65 para operación fiable en campo entre -30 y +60 °C.
- Sensor G de 3 ejes integrado y 2 MB de memoria flash interna para registro local de posición y eventos de movimiento.

## Cómo funciona con Plaspy

Lommy Capture envía mensajes de posición, movimiento y alarma a través de UDP o SMS y puede integrarse con Plaspy mediante APIs abiertas o mediante ingesta por gateway. Una vez registrado en Plaspy, las flotas reciben actualizaciones de ubicación en tiempo real, alarmas configurables y reproducción de rutas históricas para cada remolque o activo remolcado. Plaspy también puede combinar la telemetría de Lommy Capture con otros datos del vehículo para respaldar flujos de gestión de flotas más amplios.

- Actualizaciones de ubicación y telemetría en tiempo real: el dispositivo transmite actualizaciones frecuentes \(tan frecuentes como cada 2 minutos cuando las luces traseras suministran energía\).
- Alertas de desconexión y de energía: el dispositivo continúa con informes limitados en intervalos programados si un remolque se desconecta, lo que permite a Plaspy detectar posibles manipulaciones o robos.
- Recuperación de rutas históricas: la memoria flash integrada admite el almacenamiento y carga posterior de datos de ruta para cumplimiento y análisis.
- Mensajes basados en eventos: movimiento \(sensor G\) y alarmas configurables pueden activar notificaciones inmediatas en Plaspy.
- Formatos de datos listos para la integración: los protocolos UDP y SMS permiten a Plaspy analizar cargas útiles de posición, alarma y telemetría sin pasarelas propietarias.

## Resumen técnico

| Conectividad | 4G \(FDD LTE Cat M1\) con operación inteligente; conmutación a 2G cuádruple banda |
| --- | --- |
| Bandas | LTE Cat M1: B3 / B8 / B20. 2G: 850 / 900 / 1800 / 1900 MHz. |
| Energía y batería | Obtención de energía de circuitos de iluminación; los supercapacitores almacenan carga. Opera en sistemas de 4 V a 40 V. Cuando se alimenta por las luces traseras, los intervalos de reporte pueden ser tan bajos como cada 2 minutos. Si se desconecta de la energía, puede enviar hasta cinco informes de posición cada 12 horas hasta agotar la energía. |
| Interfaces | Instalación de cuatro cables: negro = masa, marrón = luces traseras, rojo = luces de freno, verde = indicadores. Instale dentro de la carcasa de la luz; las conexiones deben estar protegidas contra agua y humedad. |
| GNSS | GNSS de múltiples constelaciones: GPS, GLONASS, GALILEO, BEIDOU, QZSS. Soporte SBAS \(WAAS, EGNOS, MSAS, GAGAN\). GNSS asistido para fijaciones más rápidas. Sensibilidad de seguimiento de hasta -166 dBm. |
| Bluetooth | No descrito para este modelo \(no se especifican sensores BLE\). |
| Gestión remota | Se integra con plataformas Flextrack \(TrackEye, LommyFleet, soluciones de marca blanca\) o sistemas del cliente a través de APIs abiertas. Soporta protocolos de datos UDP y SMS para ingestión en la nube. |
| Formato | Carcasa compacta 54 × 44 × 19 mm; peso 42 g. Clasificación IP65. Rango de temperatura de operación -30 a +60 °C. Antenas GNSS y LTE/GSM internas. Sensor G de 3 ejes y 2 MB de memoria flash. |

## Casos de uso

- Antirrobo y recuperación de flota: la instalación interna discreta dentro de las carcasas de las luces reduce la visibilidad y dificulta su retirada, mientras que las alertas compatibles con Plaspy permiten una intervención rápida.
- Utilización de remolques y monitoreo de rutas: el seguimiento en tiempo real y las rutas históricas ayudan a optimizar la asignación de remolques y a reducir kilómetros en vacío en la gestión de flotas.
- Programación de mantenimiento basada en uso: telemetría de movimiento y rutas alimenta los informes de Plaspy para activar intervalos de servicio según uso real y no solo por tiempo.
- Geocercas y monitoreo de paradas: configure alertas de geocercas y monitorice paradas en Plaspy para mejorar la logística y las entregas a tiempo.
- Continuidad operativa para activos con suministro intermitente: el diseño de energía obtenida mantiene los activos visibles incluso cuando no hay fuente de energía fija.

## Por qué elegir este rastreador con Plaspy

Lommy Capture ofrece un equilibrio pragmático entre bajo mantenimiento, instalación discreta y posicionamiento sólido que se alinea bien con las capacidades de seguimiento en tiempo real y gestión de flotas de Plaspy. Su arquitectura de energía obtenida elimina los cambios de baterías, reduciendo el tiempo de inactividad y los costos operativos para grandes flotas de remolques. Dado que el dispositivo transmite por LTE Cat M1 con conmutación a 2G y soporta UDP/SMS, integrarlo con Plaspy es sencillo, lo que permite flujos de telemetría y alarmas consistentes en tus paneles, reglas de geocercas y flujos de generación de informes.

Para operaciones que requieren visibilidad extendida sin una retrofit extensa, Lommy Capture es una opción sólida compatible con Plaspy. Aunque la unidad se centra en la precisión de la ubicación, la detección de movimiento y la conectividad resistente, Plaspy puede ampliar esas entradas con datos adicionales del vehículo, como monitorización de combustible, estado de ignición, control del inmovilizador o sensores Bluetooth gestionados por otros sistemas a bordo, para ofrecer una solución telemática integral adaptada a tu flota.

