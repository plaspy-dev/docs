---
slug: /gotop/g23n
id: g23n
sidebar_label: G23N
sidebar_class_name: menu_item_tracker
---
# GOTOP - G23N

![G23N](./tracker.jpg)

El rastreador G23N NB‑IoT GPS es un rastreador GPS compacto de grado vehicular diseñado para una integración Plaspy compatible de forma fluida. Construido alrededor del módulo Quectel BC26 LTE Cat NB1 y un motor GNSS ZKMicro, el G23N combina posicionamiento GPS + BDS + LBS para entregar seguimiento en tiempo real y telemetría fiables para coches, motocicletas, bicicletas eléctricas y desplegues más amplios de gestión de flotas.

Diseñado para un bajo consumo de energía y una instalación sencilla, el G23N admite una entrada DC amplia \(9V–95V\), detección ACC, salida remota de corte de energía y combustible y múltiples condiciones de alarma útiles para flujos de trabajo anti‑robo. Su factor de forma compacto y las antenas internas simplifican la instalación, mientras que la integración con Plaspy desbloquea ubicación, estado, alarmas y control remoto a través de una única plataforma.

## Aspectos clave

- Compatible con Plaspy para seguimiento en tiempo real y paneles de gestión de flotas.
- Conectividad NB‑IoT \(Quectel BC26\) para telemetría de bajo consumo y amplia cobertura, con mayor vida útil de despliegue.
- Posicionamiento multiconstelación \(GPS + BDS + LBS\) con precisión de ~5 m para informes de ubicación precisos.
- Entradas y salidas de grado vehicular: detección ACC, detección de tensión/DC y una salida de corte remoto de energía y combustible \(control tipo inmovilizador\).
- Carcasa compacta y tolerante a la intemperie \(77 × 28 × 15 mm, ABS\) adecuada para instalaciones discretas en coches, motocicletas y vehículos comerciales ligeros.
- Batería de respaldo opcional \(80 mAh, 3.7V\) y alarmas por pérdida de energía para anti‑robo y operación offline de corta duración.
- Reacceso rápido de GNSS \(arranque en caliente ~1 s\) y alta sensibilidad de seguimiento \(−162 dBm\) para mantener señales en entornos desafiantes.

## Cómo funciona con Plaspy

Cuando se conecta a Plaspy, el G23N transmite datos de posicionamiento y eventos del vehículo a través de NB‑IoT para proporcionar visibilidad operativa continua. Plaspy ingiere mensajes de ubicación, telemetría y alarmas y los presenta como marcadores en vivo, rutas e informes para los gestores de flotas. Las entradas y salidas del dispositivo se asignan directamente a las funciones habituales de Plaspy para acciones anti‑robo, monitorización de ignición y control remoto de corte.

- Actualización de ubicación y telemetría en tiempo real mediante NB‑IoT \(Quectel BC26\) — compatible con los feeds de seguimiento de Plaspy.
- Estado ACC/ignición vía H‑IN para monitorización de encendido y tiempo de funcionamiento y reglas de eventos.
- Detección de energía/pérdida de energía y alarma de apagado para protección de vehículos sin supervisión y alertas automáticas.
- Salida remota de corte de energía/combustible para activar intervenciones al estilo inmovilizador desde Plaspy cuando se autorice.
- Soporte de batería de respaldo para operación de corta duración y alarmas fuera de línea cuando se retira la energía externa — Plaspy marca estos eventos para la respuesta anti‑robo.

## Visión técnica

| Conectividad | NB‑IoT \(Quectel BC26, LTE Cat NB1\) |
| --- | --- |
| Bandas | B1/B2/B3/B4/B5/B8/B12/B13/B17/B18/B19/B20/B25/B26/B28/B66 |
| Alimentación y batería | Entrada DC 9V–95V; Corriente de operación a 12V: 30–60 mA; Corriente en reposo a 12V: 5–15 mA; Batería de respaldo opcional 80 mAh, 3.7V |
| Interfaces | 1 × salida de bajo nivel \(corte de energía/combustible\), 1 × H‑IN \(detección ACC\), 1 × UART‑TTL \(5V\) para configuración e integración |
| GNSS | GPS + BDS + LBS; Módulo GNSS ZKMicro AT6558D; Precisión de posicionamiento ≈ 5 m; Arranque en frío ≈ 32 s; Arranque en caliente ≈ 1 s; Sensibilidad de seguimiento −162 dBm |
| Ambiental | Rango de temperatura de operación −30°C a 75°C; Almacenamiento −30°C a 80°C; Humedad 5%–95% |
| Factor de forma | 77 × 28 × 15 mm; Carcasa de plástico ABS; Peso 32 g |
| Gestión remota | Configuración e integración vía UART‑TTL \(5V\). No se especifica un método de FOTA o gestión en la nube en la descripción del dispositivo. |

## Casos de uso

- Gestión de flotas para parques de vehículos pequeños a medianos — ubicación continua, telemetría y datos de runtime en los paneles de Plaspy.
- Monitoreo de vehículos de alquiler o a crédito — alarmas anti‑robo, notificaciones de corte de energía y capacidad de inmovilización remota a través de la salida de bajo nivel.
- Taxis, coches de pasajeros y motocicletas — instalación compacta, detección ACC y rápida reacquisición de GNSS para operación urbana.
- Camiones ligeros y vehículos de reparto — amplio rango de entrada DC \(9V–95V\) que admite diversos sistemas eléctricos y reduce visitas de mantenimiento.
- Seguridad de activos donde la conectividad NB‑IoT de bajo consumo y el mantenimiento mínimo son prioritarios — ideal para despliegues largos con reportes periódicos.

## Por qué elegir este rastreador con Plaspy

El G23N ofrece una mezcla optimizada de telemetría NB‑IoT de bajo consumo, posicionamiento multiconstelación y E/S vehiculares prácticas que se integran de forma natural con las funciones de seguimiento en tiempo real y gestión de flotas de Plaspy. Para operadores que buscan controles anti‑robo, la salida de corte de energía/petróleo y las alarmas por pérdida de energía permiten acciones remotas decisivas, mientras que la detección ACC proporciona señales claras de encendido y tiempo de funcionamiento para telemetría e informes de comportamiento del conductor.

Elige el G23N con Plaspy cuando necesites un rastreador GPS compacto que enfatice la fiabilidad, una larga vida de despliegue y una integración sencilla. La conectividad NB‑IoT del dispositivo reduce el consumo de energía celular y el costo operativo en muchos despliegues, el rendimiento GNSS ofrece una ubicación precisa para planificación de rutas y flujos de recuperación, y las entradas/salidas físicas soportan controles esenciales del vehículo como monitoreo de encendido y corte al estilo inmovilizador. Tenga en cuenta que el G23N se centra en telemetría NB‑IoT y no incluye sensores Bluetooth; la integración a través del puerto UART‑TTL permite configuración y emparejamiento del sistema cuando sea necesario.

