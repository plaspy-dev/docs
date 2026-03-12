---
slug: /queclink/wr100_leu
id: wr100_leu
sidebar_label: WR100 LEU
sidebar_class_name: menu_item_tracker
---
# QuecLink - WR100 LEU

![WR100 LEU](./tracker.png)

# WR100LEU Industrial LTE Router — Plaspy compatible gateway

El WR100LEU es un router industrial compacto LTE Cat 4, diseñado como una robusta puerta de enlace de red para implementaciones de rastreadores GPS compatibles con Plaspy. Construido para IoT y telemática con alto rendimiento de datos, el WR100LEU ofrece conectividad celular resiliente, redundancia de SIM dual y interfaces cableadas/WiFi flexibles para que los datos de rastreadores GPS habilitados para Plaspy lleguen a la nube de forma fiable para seguimiento en tiempo real, gestión de flotas y telemetría remota.

El WR100LEU es ideal cuando es crucial un transporte persistente y seguro de telemetría, ubicación y datos de eventos. Con enrutamiento basado en OpenWrt, VPN de hardware, protecciones de firewall y gestión remota \(Web UI, SSH, SMS, FOTA\), complementa a los rastreadores compatibles con Plaspy al proporcionar backhaul seguro, conmutación automática y protecciones a nivel de paquetes que mantienen activos los alertas de robo, eventos de ignición, telemetría de combustible y comandos del inmovilizador entre vehículos o activos y la plataforma Plaspy.

## Puntos Clave

- Puerta de enlace compatible con Plaspy — backhaul celular/WiFi fiable para telemetría de rastreadores GPS y flujos de seguimiento en tiempo real.
- Rendimiento 4G LTE Cat 4 \(hasta 150 Mbps de bajada, FDD\) con conmutación de respaldo a WCDMA/GSM para una amplia cobertura y velocidad.
- Conmutación por doble SIM y balanceo de carga automático para minimizar las interrupciones del servicio en la gestión de flotas y despliegues remotos.
- Sistema de E/S industriales y soporte serie \(RS485/RS232 bajo demanda\) para transportar ignición, estado de puertas/alarma, monitoreo de combustible y otra telemetría desde dispositivos conectados.
- Seguridad avanzada — OpenVPN/IPsec/GRE, reglas de firewall, protecciones contra DDoS y escaneo de puertos para un transporte de datos de Plaspy seguro.
- Conectividad flexible — WiFi IEEE 802.11 a/b/g/n de 2,4 GHz, dos puertos Ethernet FE \(uno WAN/LAN configurable\), y múltiples conectores de antena para optimizar la señal.
- Diseño compacto y robusto con rango de entrada de voltaje amplio \(8–32 V DC\) y rango de temperatura extendido para instalaciones en vehículos y exteriores.

## Cómo funciona con Plaspy

El WR100LEU actúa como una puerta de enlace de comunicaciones segura y de alta disponibilidad que transporta datos desde rastreadores GPS y dispositivos de telemetría compatibles con Plaspy hacia la plataforma Plaspy. Los rastreadores conectados por celular, serie o WiFi local envían coordenadas GPS, telemetría y mensajes de eventos al router, que los reenvía a través de sus enlaces LTE/WiFi/ Ethernet. La redundancia de doble SIM y la monitorización de enlaces mantienen el seguimiento en tiempo real y las alertas operativas incluso cuando falla una red primaria.

- Actualizaciones de ubicación y telemetría en tiempo real — el router reenvía puntualmente los paquetes de rastreadores GPS para el seguimiento y mapeo en tiempo real de Plaspy.
- Ignición, estado de puertas y alarmas — transporta señales digitales/serie desde rastreadores o equipos conectados para que Plaspy pueda activar reglas y notificaciones.
- Monitoreo de combustible y otras telemetrías — transporta telemetría de sensores y CAN/serie desde dispositivos de campo hacia los paneles y informes de Plaspy.
- Comandos de control seguros — VPN y firewall protegen los comandos de inmovilizador o configuración remota enrutados a través de la puerta de enlace hacia dispositivos gestionados por Plaspy.
- Sensores y beacons Bluetooth — si bien el WR100LEU no incorpora Bluetooth, admite conectividad para rastreadores de Plaspy que transmiten datos de sensores BLE mediante gateways conectados por serie/Ethernet/USB.

## Resumen técnico

| Conectividad | 4G LTE Cat 4 \(FDD/TDD\) con compatibilidad hacia atrás con WCDMA y GSM; IEEE 802.11 a/b/g/n de 2,4 GHz WiFi; 2x FE Ethernet |
| --- | --- |
| Bandas | LTE Cat 4 FDD/TDD compatible; las bandas de frecuencia específicas varían según el modelo/región \(consulte el folleto del producto\) |
| Alimentación y batería | Conector de alimentación de 4 pines, rango de entrada 8–32 V DC. No se especifica batería de respaldo interna en la descripción del producto. |
| Interfaces | Dual-SIM \(redundancia\); dos puertos Ethernet FE \(uno WAN/LAN configurable\); puerto serie \(RS485 o RS232 a demanda\); múltiples conectores de antena \(2x SMA móvil, 1x RP-SMA WiFi\); LEDs; botón de reinicio |
| GNSS | No se lista un módulo GNSS integrado — el dispositivo es una pasarela celular/WiFi que transporta datos GPS desde rastreadores compatibles con Plaspy conectados o módulos GNSS externos. |
| Bluetooth | No se informa de Bluetooth; el soporte de sensores BLE locales se logra a través de rastreadores conectados o gateways BLE externos. |
| Gestión remota | Interfaz Web basada en OpenWrt, acceso SSH, control por SMS y FOTA para actualizaciones remotas; monitorización de la conexión con reinicio por ping y reinicio programado; configuración automática de equilibrio de carga/enlace de respaldo |
| Factor de forma | Carcasa industrial compacta, 90 × 90 × 24 mm, 200 g, rango de temperatura de operación -30°C a +70°C; certificado CE |
| Memoria y Almacenamiento | 128 MB de RAM DDR2, 16 MB de SPI Flash |

## Casos de Uso

- Gestión de flotas: proporciona un backhaul celular resiliente para rastreadores GPS de Plaspy en autobuses, camiones y vehículos de servicio para habilitar un seguimiento en tiempo real continuo y telemetría de rutas.
- Antirrobo e inmovilización: garantiza un transporte seguro y de baja latencia de alertas de rastreadores y comandos del inmovilizador entre los vehículos y el centro de control de Plaspy.
- Telemetría remota para automatización industrial: retransmite datos de sensores, telemetría serie y señales de estado desde sitios remotos a Plaspy para monitoreo y programación de mantenimiento.
- Instalaciones para ciudades inteligentes y transporte: actúa como una puerta de enlace local para rastreadores en carretera o en vehículo, entregando ubicación, conteo de pasajeros o telemetría ambiental a Plaspy.
- Conectividad para retail y quioscos: mantiene en línea dispositivos rastreadores de POS y rastreadores de activos conectados a Plaspy mediante LTE con respaldo Ethernet/WiFi.

## Por qué elegir este equipo con Plaspy

Aunque el WR100LEU es un router LTE industrial y no un rastreador GPS, es una opción estratégica para cualquier despliegue de Plaspy que requiera conectividad sólida, seguridad avanzada y E/S flexible para telemetría. Al usar el WR100LEU como puerta de enlace de red, los rastreadores y sensores compatibles con Plaspy disponen de enlaces celulares redundantes, túneles protegidos por VPN y conmutación automática, reduciendo el tiempo de inactividad para el seguimiento en tiempo real, la gestión de flotas y los flujos de trabajo antirobo. Las interfaces serie del router facilitan la integración del estado de ignición, el monitoreo de combustible y otra telemetría en los informes de Plaspy, mientras que la gestión remota \(FOTA, Web UI, SSH\) mantiene a las flotas y gateways distribuidos fáciles de mantener a escala.

Para proyectos que requieren una columna vertebral de comunicaciones de grado industrial para rastreadores GPS compatibles con Plaspy — desde telemática instalada en vehículos hasta infraestructuras inteligentes — el WR100LEU ofrece la red, la resiliencia y la seguridad necesarias para mantener el flujo de datos de ubicación y telemetría cuando más se necesita. Consulte el folleto del producto descargable o póngase en contacto con su especialista de integración de Plaspy para obtener detalles de bandas específicas del modelo y directrices de implementación.

