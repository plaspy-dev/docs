---
slug: /flextrack/lommy_pro
id: lommy_pro
sidebar_label: Lommy Pro
sidebar_class_name: menu_item_tracker
---
# Flextrack - Lommy Pro

![Lommy Pro](./tracker.jpg)

Lommy Pro es un rastreador GPS compacto y de bajo consumo diseñado para un seguimiento en tiempo real fiable, compatible con Plaspy, de vehículos, maquinaria, embarcaciones y otros activos móviles. Diseñado para gestión de flotas y aplicaciones antirobo, Lommy Pro combina posicionamiento GNSS de múltiples constelaciones con conectividad LTE Cat M1 y GSM, de modo que tus paneles de control de Plaspy reciban actualizaciones continuas de ubicación, movimiento y telemetría.

Lommy Pro está optimizado para instalaciones mixtas: montajes en vehículo cableado o despliegues autónomos con respaldo de batería. Con detección de movimiento a bordo, modos de reposo configurables y una batería de respaldo Li‑Ion recargable, el equipo preserva la autonomía manteniendo un registro preciso de viajes y odómetros, detección de velocidad excesiva e inactividad, control del inmovilizador y monitorización de la temperatura — todo accesible a través de la API abierta de Plaspy y de los canales de alertas.

## Key Highlights

- Rastreador GPS compatible con Plaspy, con GNSS de múltiples constelaciones para un posicionamiento fiable y seguimiento en tiempo real.
- Conectividad dual: FDD LTE Cat M1 \(Cat M1\) y GSM cuád-band 2G para una cobertura amplia y telemetría.
- Diseño compacto y de bajo consumo con batería Li‑Ion interna de respaldo de 1150 mAh para aproximadamente 8 horas de operación continua y mayor duración en modos de reposo.
- Sensor de movimiento integrado y modos de reposo configurables \(GPS Sleep, Online Deep Sleep, Deep Sleep\) para ampliar instalaciones con respaldo de batería.
- Amplia E/S e interfaces vehiculares: CAN J1939, RS232/RS485, 1-wire, entradas analógicas/digitales y salida digital para encendido, monitorización de combustible y sensores externos.
- Funciones avanzadas de antirrobo, incluyendo soporte de inmovilizador, detección de inicio/parada y alertas de geocercas integradas con las reglas de alarma de Plaspy.
- Expansible con fundas estancas, compatibilidad con baliza RF \(Lommy Tag\) y sensores externos de temperatura/combustible para remolques refrigerados y entornos adversos.

## Cómo Funciona con Plaspy

Lommy Pro envía fijaciones GNSS y telemetría del vehículo a Plaspy utilizando protocolos estándar \(UDP, TCP, FTP, SMS\). Plaspy procesa la posición, telemetría CAN y analógica, y posteriormente normaliza los datos para el seguimiento en tiempo real, rutas históricas y reportes automáticos. Las alertas y acciones configuradas en Plaspy —como comandos de inmovilizador, notificaciones de velocidad excesiva o alarmas de temperatura— se envían de vuelta a los dispositivos a través de comandos GPRS, SMS o llamadas API.

- Actualizaciones de ubicación y telemetría en tiempo real \(GNSS + entradas CAN/análogas\) para mapeo en vivo y reproducción de trayectos.
- Encendido, detección de arranque/parada y control del inmovilizador disponibles para protección anti robo y gestión remota del vehículo.
- Monitoreo de combustible vía entradas analógicas, CAN/FMS o integración del tacógrafo para informes precisos de consumo.
- Eventos de puertas, temperatura y sensores externos para remolques refrigerados y monitorización del estado de los activos.
- Emparejamiento de balizas RF \(Lommy Tag\) y opción RFID de 868 MHz para etiquetado de activos a nivel local; se integra en los flujos de trabajo de Plaspy. Funciona junto a ecosistemas que pueden incluir sensores y balizas Bluetooth mediante la integración de la plataforma.

## Resumen Técnico

| Conectividad | FDD LTE Cat M1 \(Cat M1\) y GSM cuád-band 2G \(850/900/1800/1900 MHz\); protocolos de datos UDP, TCP, FTP, SMS |
| --- | --- |
| Bandas | LTE B3 / B8 / B20; GSM cuád-band 850/900/1800/1900 MHz |
| Alimentación & Batería | Alimentación 10–60 V DC; carga USB; batería Li‑Ion interna no extraíble de 1150 mAh \(~8 horas de operación continua; meses en modos de intervalo/movimiento según la configuración\) |
| Interfaces | 2 × entradas analógicas/digitales, 1 × salida digital, RS232, RS485, CAN J1939, 1-wire, Mini‑USB 2.0, soporte de lector iButton; memoria interna 128 MB + soporte microSD \(hasta 4 GB utilizables\) |
| GNSS | GPS, GLONASS, GALILEO, BEIDOU, QZSS con SBAS \(WAAS/EGNOS/MSAS/GAGAN\); sensibilidad de seguimiento −166 dBm, 33 canales de seguimiento |
| RF / Etiquetas | Opción RFID integrada de 868 MHz; compatibilidad con baliza RF \(accesorio Lommy Tag\) |
| Gestión Remota | Configuración remota y actualizaciones de firmware por aire \(FOTA\); integración de API abierta con Plaspy y sistemas de terceros |
| Forma & Entorno | Peso 69 g; dimensiones 88 × 57 × 14 mm; rango de temperatura de funcionamiento −20°C a +60°C \(con batería\); protección IP33 |
| Cumplimiento & Seguridad | CE, E5, RoHS, WEEE; seguridad de servidor/datos ISAE3402 certificada \(alineada con ISO 27002\) |

## Casos de Uso

- Gestión de flotas: seguimiento en vivo de vehículos, registro de viajes y odómetros, detección de velocidad excesiva e inactividad para la eficiencia operativa.
- Anti-robo e inmovilización: detección de inicio/parada, alertas de geocercas y comandos de inmovilizador remoto a través de Plaspy.
- Monitoreo de combustible: integración de nivel de combustible analógico o CAN/FMS para análisis de consumo y telemetría.
- Vigilancia de la temperatura: sensores externos de temperatura y monitorización para remolques refrigerados y logística de cadena de frío.
- Seguimiento de activos en condiciones adversas: carcasas a prueba de agua y emparejamiento de balizas RF para remolques, equipos y aplicaciones marinas.

## Por qué Elegir Este Rastreador con Plaspy

Elegir Lommy Pro como rastreador GPS compatible con Plaspy ofrece un equilibrio práctico entre precisión, eficiencia de la batería e interfaces de nivel vehicular. Su GNSS de múltiples constelaciones y conectividad LTE/GPRS aseguran un seguimiento en tiempo real y telemetría remota confiables para la gestión de flotas. Las entradas CAN y analógicas integradas facilitan el monitoreo de combustible y la telemetría del motor sin necesidad de gateways adicionales, mientras que las funciones de inmovilizador y geocerca proporcionan una protección anti robo sencilla.

La integración es simple: Lommy Pro utiliza protocolos estándar \(UDP/TCP/FTP/SMS\) y APIs abiertas para que Plaspy ingiera datos de posición, telemetría y eventos para paneles, informes y alertas automatizadas. Los modos de reposo configurables del dispositivo y su batería de respaldo interna prolongan la vida operativa cuando se interrumpe la alimentación principal, lo que lo hace ideal tanto para instalaciones de vehículos cableados como para el seguimiento de activos con respaldo de batería. Para empresas que buscan un seguimiento en tiempo real escalable, seguro y mantenible con telemetría, Lommy Pro emparejado con Plaspy ofrece una solución sólida para gestión de flotas, anti-robo y monitorización ambiental.

