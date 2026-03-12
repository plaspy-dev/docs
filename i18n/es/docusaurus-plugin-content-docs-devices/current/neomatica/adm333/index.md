---
slug: /neomatica/adm333
id: adm333
sidebar_label: ADM333
sidebar_class_name: menu_item_tracker
---
# Neomatica - ADM333

![ADM333](./tracker.png)

El ADM333 v2 es un rastreador GPS ultracompacto, de fabricación rusa, diseñado para vehículos y activos fijos que requieren un seguimiento en tiempo real confiable compatible con Plaspy y telemetría. La revisión modernizada de 2021 combina características de las líneas ADM333 y ADM333BLE, incorporando soporte para sensores Bluetooth Low Energy, un rendimiento GNSS sólido y conectividad celular en múltiples redes en un formato diminuto para la gestión de flotas, protección antirrobo y telemetría de activos.

Diseñado para una integración sencilla con plataformas telemáticas, el ADM333 v2 envía telemetría GPRS a servidores populares \(Wialon, BARS‑GLONASS, Pilot, Navixy y otros\) y utiliza un protocolo abierto para integraciones de terceros — lo que facilita su incorporación a implementaciones compatibles con Plaspy. Su batería integrada, detección de interferencias y amplio soporte periférico \(sensores BLE, RS‑485, 1‑wire, entradas analógicas y un inmovilizador externo\) proporcionan un equilibrio práctico entre seguimiento en tiempo real, monitorización de combustible y control remoto en un formato compacto.

## Aspectos clave

- Seguimiento en tiempo real compatible con Plaspy vía GPRS y protocolo abierto — integración rápida con servidores telemáticos y flujos de trabajo basados en Plaspy.
- Formato ultracompacto \(55 × 49 × 20 mm, 39 g\) con antenas integradas y batería interna de 250 mAh para hasta tres horas de funcionamiento autónomo.
- Telemetría integral: ubicación GNSS, detección de movimiento mediante acelerómetro tri‑axial, identificación del conductor y alertas de detección de interferencias.
- Amplio ecosistema de sensores — Bluetooth Low Energy 4.0 \(hasta 5 sensores BLE\); soporte 1‑wire para DS18B20 + 1 i‑button; RS‑485 \(Modbus/ADM20/CanLog\).
- Módem celular dual nanoSIM \(GSM 850/900/1800/1900\) con GPRS Multi-slot Class 12 para una subida de datos estable y actualizaciones de firmware a distancia vía GPRS o Bluetooth.
- Operación de bajo consumo para instalaciones vehiculares de largo plazo: corriente nominal ~30 mA \(promedio\) con un consumo máximo de hasta 200 mA a 12 V.
- Configuración y gestión flexibles: configurador para Windows/Android, comandos por SMS, actualizaciones vía Bluetooth y configuración remota por servidor.

## Cómo funciona con Plaspy

El ADM333 v2 transmite la posición GNSS y telemetría a través de GPRS usando un protocolo abierto, de modo que Plaspy puede ingerir la ubicación, el estado y los datos de sensores en tiempo real. La integración es simple: el dispositivo puede configurarse para enviar paquetes al endpoint de Plaspy o a un servidor telemático intermediario. Implementaciones compatibles con Plaspy se beneficiarán de actualizaciones de ubicación, alertas basadas en eventos y datos de rutas históricos almacenados en el dispositivo cuando la conectividad sea intermitente.

- Actualizaciones de ubicación y telemetría en tiempo real \(coordenadas GNSS con precisión de hasta 3 m en el 95% del tiempo de operación\).
- Estado de la ignición y de las entradas analógicas para eventos de encendido/apagado del motor y su integración con los flujos de trabajo de la flota.
- Soporte de monitorización de combustible — hasta tres sensores de nivel de combustible cableados o inalámbricos y conectividad RS‑485 para sensores de combustible.
- Control remoto del inmovilizador — compatible con el relé inalámbrico ADM33 para acciones de anti‑robo e inmovilización.
- Sensores y beacons Bluetooth — BLE 4.0 admite sensores de temperatura, humedad, luz, inclinación y de efecto Hall; lectura secuencial de beacons BLE con una cola de 20 etiquetas.
- Alertas de eventos — alarmas de movimiento activadas por el acelerómetro, detección de interferencias y eventos de identificación del conductor que pueden reenviarse a Plaspy para respuestas automatizadas.

## Resumen técnico

| Modelo | ADM333 v2 |
| --- | --- |
| Fabricante | Fabricado en Rusia \(familia ADM\) |
| Conectividad | GSM/GPRS \(GPRS Multi-slot Class 12\) |
| Bandas | GSM 850 / 900 / 1800 / 1900 |
| SIM | 2 × nanoSIM \(dual‑SIM\) |
| GNSS | Sensibilidad GNSS −167 dBm, 132 canales, ~3 m de precisión \(95% del tiempo de operación\) |
| Interfaz de sensores | Bluetooth Low Energy 4.0 \(hasta 5 sensores BLE\); 1‑wire \(hasta 8 DS18B20 + 1 i‑button\); RS‑485 \(Modbus/ADM20/CanLog\) |
| Entradas Analógicas | 2 entradas analógicas \(incluye ignición\) |
| Alimentación y Batería | Alimentación +8…+45 V; batería integrada de 250 mAh \(~3 horas de autonomía\) |
| Consumo \(12 V\) | Hasta 200 mA \(máximo\), ~30 mA \(promedio\) |
| Memoria | Hasta 63,000 registros de ruta a bordo |
| Acelerómetro | Acelerómetro de 3 ejes para detección de movimiento/eventos |
| Beacons Bluetooth | Lectura secuencial, tamaño de cola 20 etiquetas |
| Firmware y Configuración | Configurador para Windows/Android, comandos por SMS, actualizaciones vía Bluetooth y actualizaciones remotas vía GPRS |
| Interfaces y Periféricos | RS‑485 \(multidispositivo\), 1‑wire, E/S analógicas, soporte para relé inmovilizador ADM33 |
| Dimensiones y Peso | 55 × 49 × 20 mm; 39 g |

## Casos de uso

- Gestión de flotas — rastreador GPS para camiones, furgonetas de reparto y transporte público con monitorización de la ignición, identificación del conductor y memoria de rutas para telemetría fiable.
- Antirrobo e inmovilización — soporte de inmovilizador remoto \(ADM33\) y detección de interferencias para reducir el riesgo de robo y habilitar flujos de trabajo de apagado remoto a través de Plaspy.
- Monitorización de combustible y telemetría — conecte sensores de combustible cableados o inalámbricos \(incluidos dispositivos RS‑485\) para capturar niveles de combustible y reducir pérdidas o robos.
- Cadena de frío y monitorización ambiental — sensores BLE de temperatura o sondas 1‑wire DS18B20 para telemetría de temperatura en remolques refrigerados y activos fijos.
- Rastreo de activos para flotas mixtas — rastreador GPS compacto y de bajo costo para maquinaria agrícola, equipos estacionarios y activos auxiliares que requieren ubicación en tiempo real y alertas de eventos.

## Por qué elegir este rastreador con Plaspy

El ADM333 v2 ofrece una opción compacta y rentable para implementaciones compatibles con Plaspy que requieren un seguimiento en tiempo real robusto, telemetría y flexibilidad de periféricos. Su protocolo abierto y la subida de datos por GPRS facilitan una integración predecible y rápida, mientras que el soporte BLE y RS‑485 amplía las opciones de telemetría para monitorización de combustible, detección de temperatura y dispositivos CAN/Modbus. La batería de respaldo integrada, la detección de interferencias y un amplio buffer de rutas a bordo aseguran la continuidad de los datos incluso durante interrupciones breves de energía o pérdida temporal de cobertura celular.

Para operadores de flotas e integradores, el ADM333 v2 equilibra bajo consumo con abundantes E/S y opciones de sensores, permitiendo flujos de trabajo impulsados por Plaspy para optimización de rutas, inmovilización antirrobo, control de combustible y monitorización de condiciones — todo desde un módulo compacto que es fácil de instalar. Precio minorista listado por el fabricante: 6,900 RUB \(véase la página del fabricante para precios y disponibilidad actuales\).

