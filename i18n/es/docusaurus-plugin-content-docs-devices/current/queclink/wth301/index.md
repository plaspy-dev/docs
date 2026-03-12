---
slug: /queclink/wth301
id: wth301
sidebar_label: WTH301
sidebar_class_name: menu_item_tracker
---
# QuecLink - WTH301

![WTH301](./tracker.png)

El WTH301 es un sensor compacto de temperatura y humedad con BLE, diseñado para la logística profesional de cadena de frío y el monitoreo del transporte. Compatible con Plaspy cuando se despliega con rastreadores de vehículos o gateways con BLE, el WTH301 añade telemetría ambiental precisa a cualquier solución de rastreo en tiempo real basada en Plaspy —lo que permite una mejor conformidad, alertas proactivas y datos de gestión de flota más completos.

Diseñado para remolques, contenedores refrigerados y monitoreo ambiental a nivel de activo, el WTH301 combina una larga vida de batería, protección IP66 y conectividad BLE 5.1 para ofrecer un monitoreo continuo a largo plazo con instalación simple y de bajo costo. Cuando se empareja con un rastreador GPS compatible con Plaspy, amplía la ubicación estándar y la telemetría del vehículo \(encendido, flujos de trabajo compatibles con inmovilizador, monitoreo de combustible desde el rastreador\) con datos de temperatura y humedad de alta resolución para una visibilidad de extremo a extremo.

## Aspuestos clave

- Sensor BLE compatible con Plaspy: se empareja con rastreadores y gateways compatibles con BLE para alimentar la telemetría ambiental en los paneles y reportes de Plaspy.
- Sensado de temperatura de alta precisión: rango −40°C a +70°C con precisión de ±0.2°C entre 5°C–60°C y resolución de 0.01°C para un monitoreo preciso de la cadena de frío.
- Monitoreo de humedad confiable: 0–100% RH; ±2% RH \(20%–80% RH\), ±3.5% RH fuera del rango; resolución 0.01% RH para rastrear mercancía sensible a la humedad.
- Larga vida operativa: batería LiFe de 1200 mAh; >3 años de autonomía bajo condiciones de reporte típicas, reduciendo visitas de mantenimiento y cambios de batería.
- Construcción robusta y fácil de instalar: carcasa impermeable IP66 y montaje con adhesivo 3M para una implementación rápida en remolques, contenedores y activos.
- Conectividad BLE 5.1 con alcance de hasta 150 m en exteriores, compatible con enlaces robustos a rastreadores de vehículos o gateways fijos.
- Factor de forma compacto \(75 × 38 × 19 mm, 48 g\) que se integra de forma limpia en instalaciones de flota y activos sin añadir volumen.

## Cómo funciona con Plaspy

El WTH301 transmite telemetría ambiental mediante Bluetooth Low Energy \(BLE\). En una implementación habilitada para Plaspy, el flujo típico es: el WTH301 emite valores de temperatura y humedad a intervalos configurables; un gateway BLE compatible con Plaspy o un rastreador GPS con BLE recoge esas transmisiones y las envía a la plataforma de Plaspy junto con la ubicación GPS y la telemetría del vehículo. Plaspy luego correlaciona la ubicación, el estado de encendido/puerta y otros signos del vehículo con los datos ambientales para que los equipos de operaciones obtengan rastreo en tiempo real y alertas accionables.

- Actualizaciones de ubicación y telemetría en tiempo real: las lecturas ambientales llegan junto con los datos GPS para un rastreo contextual y reproducción histórica.
- Encendido, estado de puerta y alarmas: cuando se empareja con un rastreador que reporte eventos de encendido/puerta/alarma, Plaspy puede combinar esos eventos con las lecturas del sensor para alertas más inteligentes e investigaciones.
- Integración de monitoreo de combustible: el monitoreo de combustible a nivel Plaspy desde el rastreador del vehículo sigue disponible, mientras la telemetría ambiental añade contexto de cadena de frío.
- Flujos de trabajo de inmovilizador remoto: las acciones de inmovilizador o anti-robo de Plaspy \(donde sea compatible con el rastreador emparejado\) pueden basarse en la telemetría y la ubicación combinadas para una respuesta a incidentes más rápida.
- Sensores y beacons Bluetooth: el WTH301 funciona como un nodo sensor BLE; Plaspy recibe sus transmisiones de sensor a través de gateways o rastreadores con BLE para enriquecer la telemetría de la flota.

## Visión General Técnica

| Modelo | WTH301 |
| --- | --- |
| Conectividad | BLE 5.1 |
| Bandas / Frecuencia | Banda ISM de 2.4 GHz \(Bluetooth Low Energy\) |
| Rango de temperatura y precisión | −40°C a +70°C; ±0.2°C \(5°C–60°C\), ±1.4°C fuera del rango; resolución 0.01°C |
| Rango y precisión de humedad | 0–100% RH; ±2% RH \(20%–80% RH\), ±3.5% RH fuera del rango; resolución 0.01% RH |
| Muestreo y reported | Muestras cada 10 segundos \(típico\) |
| Distancia de transmisión | Hasta 150 m en exteriores \(BLE, sujeto al entorno\) |
| Alimentación y batería | Suministro de 3 V; batería LiFe de 1200 mAh; >3 años de vida útil a +7 dB TX power y 10 s de reporte; corriente estática ~4.5 µA; pico 10 mA; media ~33 µA |
| Interfaces | Indicador LED para estado; no I/O externo especificado; montaje adhesivo \(etiqueta 3M\) |
| GNSS | No aplicable \(sensor es BLE-only\) |
| Bluetooth | BLE 5.1 para sensores y beacons |
| Gestión remota | No especificado \(no se menciona FOTA o gestión remota de dispositivos\) |
| Factor de forma y Protección | 75 × 38 × 19 mm; 48 g; carcasa impermeable IP66 para entornos ásperos |

## Casos de uso

- Logística de cadena de frío: monitoreo continuo de temperatura y humedad para productos farmacéuticos, alimentos y otros cargamentos sensibles durante tránsito y almacenamiento.
- Transporte refrigerado y remolques: montaje discreto dentro de remolques o contenedores para suministrar telemetría ambiental por carga a Plaspy y a los sistemas de gestión de la flota.
- Seguimiento ambiental de contenedores y activos: sensores BLE de larga vida para instalaciones de varios meses donde las visitas de mantenimiento son costosas.
- Informes de cumplimiento y alertas: alertas automáticas de umbral y reportes históricos para cumplimiento normativo y pruebas de condición en la gestión de reclamaciones.

## Por qué elegir este tracker con Plaspy

El WTH301 es un sensor ambiental ideal para emparejar con rastreadores GPS compatibles con Plaspy porque amplía el rastreo en tiempo real con telemetría precisa que es relevante para la cadena de frío y los gestores de flota. Su perfil de bajo mantenimiento — larga vida de la batería, carcasa IP66 robusta y una instalación sencilla con adhesivo 3M — reduce la carga operativa, mientras que la conectividad BLE 5.1 garantiza enlaces confiables a rastreadores y gateways. Cuando se integra en Plaspy, la solución combinada ofrece a los gestores de flota información accionable: telemetría de temperatura y humedad sensible a la ubicación en tiempo real, detección de incidentes más rápida, informes integrados para cumplimiento y la capacidad de correlacionar señales del vehículo como encendido, monitoreo de combustible o eventos de inmovilizador con las condiciones ambientales para un contexto operativo más completo.

Ya sea que necesite escalar la gestión de la flota para activos refrigerados, apoyar flujos de trabajo de anti-robo e inmovilizador mediante rastreadores emparejados, o añadir sensores Bluetooth a una implementación existente de Plaspy, el WTH301 ofrece la sensorización ambiental enfocada y fiable necesaria para aplicaciones profesionales de logística y transporte.

