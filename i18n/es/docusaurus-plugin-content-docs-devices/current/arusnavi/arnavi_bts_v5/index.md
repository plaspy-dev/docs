---
slug: /arusnavi/arnavi_bts_v5
id: arnavi_bts_v5
sidebar_label: Arnavi BTS v.5
sidebar_class_name: menu_item_tracker
---
# Arusnavi - Arnavi BTS v.5

![Arnavi BTS v.5](./tracker.png)

# Arnavi BTS v.5

El Arnavi BTS v.5 es un sensor BLE compacto y de larga vida útil con etiqueta iBeacon, diseñado para el monitoreo de temperatura, la detección de contacto/puerta y la identificación de activos. Compatible con Plaspy cuando se utiliza con un gateway BLE compatible con Plaspy o combinado con rastreadores GPS de Plaspy, el BTS v.5 amplía las capacidades de gestión de flota y telemetría al suministrar datos de temperatura y estado de alta frecuencia procedentes de vehículos, refrigeradores e instalaciones fijas.

Construido para la logística de cadena de frío, monitoreo anti-tamper y seguimiento ligero de activos, el BTS v.5 ofrece informes configurables y una identidad de beacon \(UUID/MAJOR/MINOR\) en un paquete compacto y fácil de montar. Su batería CR2477 reemplazable, junto con el intervalo de transmisión ajustable y la potencia de radio, permiten a los operadores equilibrar la capacidad de respuesta y la duración de la batería para las necesidades reales de monitoreo de flota y activos.

## Key Highlights

- Compatible con Plaspy mediante gateway BLE: reenvía la temperatura y la telemetría del sensor a los paneles de Plaspy y a sus alertas.
- Gran duración de la batería con pila CR2477 reemplazable — hasta unos 1,500 días a temperatura ambiente, dependiendo de la configuración.
- Funcionamiento multi‑modo: sensor de temperatura, iBeacon \(UUID/MAJOR/MINOR\) y detector de estado de contacto/circuito en una sola unidad.
- Intervalo de transmisión configurable y potencia de radio para optimizar la capacidad de respuesta y el consumo de batería.
- Diseño compacto y ligero \(61 × 42 × 13 mm, 30 g\) para montaje discreto en vehículos, equipos o contenedores.
- Instalación y configuración simples mediante aplicaciones configuradoras móviles para iOS y Android.
- Adecuado para el monitoreo de la cadena de frío, detección de anti‑robo y anti‑manipulación de puertas y la identificación de activos en flujos de gestión de flota.

## How It Works with Plaspy

El Arnavi BTS v.5 ofrece paquetes de anuncios BLE y telemetría del sensor que Plaspy puede incorporar cuando el dispositivo se encuentra dentro del alcance de un gateway BLE compatible con Plaspy o de un gateway de vehículo que recopila beacons BLE. Plaspy asigna los datos del BTS v.5 al registro de activo o vehículo correspondiente, habilitando telemetría en tiempo real, alertas de eventos e informes históricos junto a las fuentes de ubicación basadas en GPS de los rastreadores GPS de Plaspy.

- Telemetría en tiempo real: las lecturas de temperatura se envían a Plaspy para su supervisión en tiempo real y para establecer umbrales.
- Identidad del beacon: los valores UUID, MAJOR y MINOR permiten a Plaspy identificar y etiquetar activos o compartimentos específicos.
- Eventos del sensor de contacto/magnético: la apertura/cierre de puertas y cambios de estado del circuito se envían como eventos discretos para alertas de anti‑robo y anti‑manipulación.
- Informes configurables: el intervalo de transmisión y la potencia de radio ajustables permiten controlar la frecuencia de actualizaciones en Plaspy.
- Complementario a los datos de rastreadores GPS: al combinarse con dispositivos o gateways GPS de Plaspy, la temperatura y los estados de los sensores pasan a formar parte de la gestión de flota, el monitoreo de combustible y los flujos de anti‑robo.

## Resumen técnico

| Conectividad | Bluetooth Low Energy 4.2 \(anuncios BLE / iBeacon\) |
| --- | --- |
| Bandas / Frecuencia | Banda ISM de 2,4 GHz \(BLE\) |
| Potencia del transmisor | 3 dBm \(potencia de radio configurable\) |
| Alimentación y batería | Pila de botón CR2477 reemplazable; capacidad nominal ~900–1000 mAh; vida típica de la batería: ~400 días \(congelador -5 °C… -15 °C\), ~700 días \(0 °C… +5 °C\), hasta ~1,500 días \(+15 °C… +25 °C\), dependiendo de la configuración y del intervalo de reporte |
| Interfaces | Entrada de control de circuito; sensor magnético para detección de apertura de puertas; configuración de beacon BLE \(UUID/MAJOR/MINOR\) |
| GNSS | No hay módulo GNSS \(sensor BLE\). Puede asociarse con rastreadores GPS de Plaspy o gateways para proporcionar contexto de ubicación. |
| Bluetooth | BLE 4.2, anuncios compatibles con iBeacon, intervalo y potencia configurables |
| Gestión y configuración remotas | Aplicaciones configuradoras móviles para iOS y Android para ajustar los parámetros del beacon, el intervalo de reporte y la potencia de radio; el fabricante proporciona el manual de usuario y documentos de certificación |
| Factor de forma | Etiqueta compacta: 61 × 42 × 13 mm; peso 30 g; apta para montaje en vehículos, contenedores y equipos |

## Use Cases

- Logística de la cadena de frío: monitorización continua de la temperatura en camiones y contenedores refrigerados, con alertas de Plaspy ante desviaciones.
- Monitoreo de refrigeradores de vehículos: rastrear la telemetría de temperatura de los compartimentos y generar informes de cumplimiento en Plaspy.
- Detección de manipulación y monitoreo de puertas: el sensor magnético detecta aperturas y genera alertas inmediatas en Plaspy para flujos de anti‑robo y anti‑manipulación.
- Identificación de activos e inventario: la identidad del beacon BLE \(UUID/MAJOR/MINOR\) etiqueta pallets, equipos o compartimentos para rastreo por proximidad.
- Control del estado de los equipos: la entrada de circuito supervisa el estado del dispositivo o el funcionamiento de un mecanismo y genera eventos para los paneles y reglas de Plaspy.

## Why Choose This Tracker with Plaspy

El Arnavi BTS v.5 no es un rastreador GPS, pero es un sensor BLE compatible con Plaspy que resulta eficaz para ampliar la gestión de flota y la telemetría en entornos donde importa un formato compacto y una vida útil prolongada de la batería. Úselo junto con rastreadores GPS y gateways de Plaspy para añadir telemetría ambiental y detección de manipulación a su sistema de seguimiento en tiempo real. Su fuente de energía CR2477 de larga duración, informes configurables y compatibilidad con iBeacon facilitan una integración sencilla, ayudando a las flotas a lograr una supervisión fiable de la cadena de frío, una mayor monitorización anti‑robo y una telemetría más rica sin necesidad de mantenimiento frecuente.

Al combinarse con las funciones de la plataforma de Plaspy — que incluyen seguimiento en tiempo real, alertas para el monitoreo de combustible y eventos de arranque/inmovilizador desde las unidades GPS de los vehículos — el BTS v.5 cubre la brecha para la detección de temperatura, contacto y proximidad. Esto lo convierte en una opción práctica para operadores que requieren telemetría precisa, identidad de activos y señales de anti‑robo como parte de una solución de gestión de flotas escalable.

