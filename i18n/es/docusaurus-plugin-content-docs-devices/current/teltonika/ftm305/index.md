---
slug: /teltonika/ftm305
id: ftm305
sidebar_label: FTM305
sidebar_class_name: menu_item_tracker
---
# Teltonika - FTM305

![FTM305](./tracker.png)

El Teltonika FTM305 es un rastreador GPS compacto 4G LTE Cat M1 para movilidad eléctrica, diseñado para un monitoreo exigente de vehículos y equipos, y es compatible con Plaspy para una integración de backend sin fisuras. Diseñado para el transporte electrificado y entornos industriales, el FTM305 combina una robusta protección ambiental \(IP67\) con interfaces de grado vehicular para ofrecer seguimiento en tiempo real y telemetría fiables para bicicletas eléctricas, carretillas elevadoras, vehículos lanzadera, maquinaria de servicio y otro equipo eléctrico.

Con rendimiento GNSS de múltiples constelaciones y adquisición de datos a través del bus CAN, el FTM305 aporta una localización precisa y datos de vehículo útiles a los paneles de gestión de flotas impulsados por Plaspy. Su amplio rango de entrada eléctrica, variantes celulares por región y soporte para herramientas de gestión remota de Teltonika lo convierten en una opción práctica para implementaciones escalables que requieren una ubicación precisa, telemetría y comunicaciones resilientes en sitios urbanos e industriales.

## Puntos clave

- Rastreador GPS compatible con Plaspy: integra coordenadas GNSS y telemetría en Plaspy para rastreo y reporte en tiempo real.
- Carcasa robusta con IP67: a prueba de polvo y resistente al agua para montaje exterior e industrial en activos de movilidad eléctrica.
- Amplio rango de tensión de entrada: soporte 10–97 V permite uso tanto en micro-movilidad de bajo voltaje como en sistemas de vehículos industriales de alto voltaje.
- Conectividad LTE Cat M1 con respaldo NB2 y 2G donde aplique: optimizado para la eficiencia de energía en IoT y amplia cobertura.
- Receptor GNSS mejorado con capacidad de seguimiento de hasta 41 satélites visibles para mayor precisión y fiabilidad.
- Lectura de datos del bus CAN: captura telemetría de vehículo, parámetros del sistema de gestión de batería \(BMS\) y señales CAN personalizadas para mantenimiento predictivo.
- Formato compacto y ligero: montaje flexible en bicicletas eléctricas, carretillas elevadoras, unidades de intercambio de batería y otros espacios reducidos.
- Gestionado con herramientas remotas de Teltonika: configuración remota y monitorización de dispositivos para una gestión de flotas eficiente.

## Cómo funciona con Plaspy

El FTM305 transmite coordenadas GNSS y telemetría derivada del CAN a Plaspy para visualización inmediata, geocercas, alertas e informes históricos. Las rutinas de ingestión de Plaspy pueden analizar actualizaciones de ubicación y cargas útiles de telemetría enviadas por LTE Cat M1 \(o redes de respaldo\), de modo que obtenga seguimiento casi en tiempo real y el estado de los activos. Cuando los datos CAN exponen señales de encendido, estado de la batería o alarmas, Plaspy puede convertir esas entradas en eventos operativos y flujos de trabajo automatizados.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para seguimiento en mapa en vivo y análisis de rutas.
- Telemetría del bus CAN \(batería, voltaje, sensores personalizados\) mapeada en paneles e alertas de Plaspy.
- Estado de encendido/puerta/alarma y otros signos del vehículo disponibles si se proporcionan a través de CAN o interfaces del vehículo—utilizados por Plaspy para activar reglas y notificaciones.
- Flujos de inmovilización remota o anti-robos alcanzables mediante Plaspy cuando los circuitos de control externos o interfaces del vehículo los soporten.
- Variantes regionales celulares aseguran conectividad consistente para telemetría e informes GNSS a través de redes y geografías.

## Resumen técnico

| Modelo | FTM305 |
| --- | --- |
| Fabricante | Teltonika \(compatibilidad de gestión de dispositivos con las herramientas remotas de Teltonika\) |
| Conectividad | LTE Cat M1 \(respaldo NB2 según variante del módulo\); soporte 2G GSM donde aplique |
| Familia de Módulos Celulares | Familia BG95 \(las variantes del módulo reflejan el soporte específico por región\) |
| Bandas / Variantes Regionales | Bandas LTE/2G específicas por región. Códigos de producto de ejemplo: FTM305BPPIL1 \(EU/MEA\), FTM305PBPIL1 \(APAC\), FTM305CPAA01 \(Norteamérica\) |
| Alimentación | Amplio rango de tensión de entrada: 10–97 V DC |
| GNSS | Receptor GNSS mejorado, soporte multi-constelación con hasta 41 satélites visibles para una mayor precisión |
| Interfaces | Adquisición de datos del bus CAN; se suministra con un cable principal de 7 pines para conexiones del vehículo |
| Carcasa | Carcasa compacta con IP67, adecuada para montaje exterior e industrial |
| Gestión remota | Compatible con soluciones de gestión de dispositivos Teltonika para configuración y monitorización |
| Factor de forma | Rastreador compacto y ligero optimizado para movilidad eléctrica y maquinaria industrial |

## Casos de uso

- Teledmetría de flotas para micro-movilidad urbana: rastrea flotas de bicicletas eléctricas y scooters, optimiza rutas y horarios de intercambio de batería con ubicación y telemetría en tiempo real.
- Monitorización del sistema de gestión de batería \(BMS\): lectura de datos del bus CAN para vigilar la salud de la batería, estado de carga y condiciones térmicas en vehículos y equipos eléctricos.
- Logística de intercambio de baterías: gestionar ubicaciones y movimientos de estaciones de intercambio y operaciones para mejorar tiempos de retorno y disponibilidad.
- Seguimiento de activos industriales: montar en carretillas elevadoras, vehículos lanzadera y maquinaria de servicio para monitorizar uso, posición y horas de funcionamiento en almacenes y patios.
- Monitoreo de equipos exteriores: la protección IP67 resistente permite rastrear equipos de campo expuestos a polvo, lluvia y condiciones extremas.

## Por qué elegir este rastreador con Plaspy

Combinar el FTM305 con Plaspy ofrece una solución práctica y resiliente para empresas que requieren datos precisos de GPS junto con telemetría de vehículos detallada. La combinación respalda objetivos de gestión de flotas como una mayor disponibilidad, mantenimiento predictivo y flujos de trabajo para la prevención de robos. Dado que el FTM305 lee parámetros del bus CAN, Plaspy puede aportar insights específicos del vehículo—estado de la batería, tendencias de voltaje y telemetría personalizada—sin necesidad de cableado adicional de sensores cuando el vehículo proporciona esos datos a través de CAN.

Entre los beneficios operativos se incluye un seguimiento en tiempo real consistente a través de redes LTE Cat M1 con respaldos NB2 y 2G, una carcasa duradera IP67 adecuada para uso al aire libre y un amplio rango de entrada que encaja tanto con micro-movilidad de bajo voltaje como con plataformas industriales de mayor voltaje. La gestión remota de dispositivos a través de herramientas de Teltonika simplifica la implementación y el mantenimiento continuo, mientras que las reglas, geocercas e informes de Plaspy transforman las señales crudas de GNSS y CAN en inteligencia de flota accionable. Para equipos centrados en un rastreo fiable, mantenimiento impulsado por telemetría y una gestión de flotas escalable, el FTM305 es un rastreador GPS compatible con Plaspy que equilibra la resiliencia ambiental, la eficiencia de conectividad y la flexibilidad de integración.

