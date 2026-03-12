---
slug: /cantrack/c32plus
id: c32plus
sidebar_label: C32Plus
sidebar_class_name: menu_item_tracker
---
# CanTrack - C32Plus

![C32Plus](./tracker.jpg)

# C32Plus

El C32Plus es un rastreador GPS de instalación cableada compacto, diseñado para vehículos de 9–90 V, incluidos e-bikes, motocicletas y automóviles. Pensado para un funcionamiento fiable y de bajo consumo, el C32Plus ofrece seguimiento en tiempo real y telemetría a través de GSM/GPRS cuád-banda y es compatible con Plaspy cuando se configura para apuntar al servidor de Plaspy. Su tamaño reducido y su rango operativo robusto lo hacen ideal para gestión de flotas, antirrobo de scooters y monitoreo de vehículos ligeros.

Construido alrededor de un chipset GNSS MTK de alta sensibilidad, el C32Plus combina una precisión de posicionamiento por debajo de 10 m, un tiempo de adquisición rápido y un almacenamiento offline robusto para mantener los datos del vehículo fluyendo hacia Plaspy incluso ante conexiones intermitentes. Con soporte para el protocolo GT06, actualizaciones de firmware OTA y la opción de corte/reinicio remoto del motor, el C32Plus brinda a los equipos de operaciones los controles que necesitan para la respuesta ante robo, monitoreo de ignición, telemetría e integración con el panel de seguimiento en tiempo real de Plaspy.

## Puntos Clave

- Compatible con Plaspy: se integra con Plaspy usando la configuración GT06/TCP-IP para seguimiento en tiempo real y alertas.
- Rendimiento GNSS fiable: chipset MTK con precisión CEP \<10 m y TTFF rápido para datos de ubicación consistentes.
- Amplia compatibilidad de vehículos: con cableado a sistemas de 9–90 V — apto para e-bikes, motocicletas, scooters y coches.
- Bajo consumo de energía: consumo típico de 5–50 mA reduce la descarga de la batería en vehículos más pequeños.
- Almacenamiento fuera de línea: guarda hasta 1,500 registros de ubicación para su carga posterior si se interrumpe la conexión GPRS.
- Opciones de control remoto: admite corte/reinicio remoto de motor y alarmas estándar \(desconexión de energía, ignición, vibración\).
- Mantenimiento remoto: las actualizaciones de firmware OTA simplifican la gestión del dispositivo a gran escala.

## Cómo Funciona con Plaspy

Conectar el C32Plus a Plaspy es sencillo para instaladores y gestores de flotas. El rastreador utiliza TCP/IP sobre GPRS y admite el protocolo GT06, por lo que puedes apuntar el dispositivo a la dirección del servidor de Plaspy y comenzar a enviar la posición en tiempo real y la telemetría. Una vez conectado, Plaspy recibe actualizaciones frecuentes de ubicación, eventos de alarma y entradas analógicas/digitales para obtener una visión completa del vehículo.

- Actualizaciones en tiempo real de ubicación y telemetría enviadas a Plaspy a través de GSM/GPRS cuád-banda.
- Las alarmas de ignición, desconexión de energía y vibración aparecen en Plaspy como eventos para notificación inmediata.
- Almacenamiento fuera de línea \(1,500 registros\) garantiza que no se pierdan datos durante huecos de cobertura; los registros en búfer se cargan cuando se reanuda GPRS.
- Se admiten comandos remotos opcionales de inmovilización/corte y reinicio del motor cuando están habilitados, integrados con los controles de Plaspy.
- Campos de telemetría como detección de voltaje externo y entradas de estado se mapean a paneles e informes de Plaspy para el monitoreo de la flota.

## Visión Técnica

| Conectividad | GSM/GPRS cuád-banda \(TCP/IP\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 MHz |
| Alimentación y batería | Operación con cableado 9–90 VDC; consumo de energía muy bajo \(típico 5 mA–50 mA\) |
| Interfaces | Detección de voltaje externo; entrada de ignición; admite desconexión de energía, ignición y alarmas por vibración; opcional corte/reinicio del motor \(inmovilizador remoto\) |
| GNSS | Chip MTK de alta sensibilidad; precisión CEP \<10 m; TTFF: frío &lt;35 s, caliente &lt;1 s |
| Bluetooth | No especificado |
| Gestión remota | Actualizaciones de firmware OTA soportadas |
| Memoria | Memoria interna para hasta 1,500 registros de ubicación \(buffer offline\) |
| Formato | Aprox. 74 x 31 x 13 mm; ~35 g; rastreador compacto para vehículos/activos |
| Temperatura de operación | -20 °C a +70 °C |
| Protocolos | Compatible con GT06; transporte TCP/IP GPRS |

## Casos de Uso

- Gestión de flotas: datos continuos del rastreador GPS y telemetría hacia Plaspy para optimización de rutas, monitoreo de conductores e informes de utilización de activos.
- Antirrobo y recuperación: actualizaciones rápidas de ubicación, alarmas por desconexión de energía y vibración combinadas con corte remoto opcional del motor para prevenir el robo o facilitar la recuperación.
- Protección de scooters y motocicletas: instalación cableada compacta con bajo consumo mantiene las e-bikes y scooters monitoreados sin mantenimiento frecuente.
- Monitoreo de e-bikes y vehículos ligeros: detección de voltaje externo y posicionamiento GNSS ofrecen información clara sobre batería y patrones de uso para flotas de vehículos pequeños.
- Buffering fuera de red para conectividad intermitente: almacena hasta 1,500 registros para asegurar rutas históricas y telemetría que se preservan y cargan a Plaspy cuando vuelve la señal.

## Por qué Elegir este Rastreador con Plaspy

El C32Plus es una opción práctica cuando necesitas un rastreador GPS compacto y fiable que se integre sin problemas con Plaspy para seguimiento en tiempo real, telemetría y control remoto. Su conectividad GSM cuád-banda y la compatibilidad GT06 simplifican la integración con el servidor, mientras que el rendimiento GNSS MTK ofrece un posicionamiento fiable bajo condiciones diversas. Para gestores de flota y equipos de seguridad enfocados en anti-robo, monitoreo de ignición y inmovilización remota ocasional, el C32Plus equilibra un formato reducido con características profesionales como actualizaciones OTA y almacenamiento offline.

Elegir el C32Plus con Plaspy le ofrece una solución escalable para la gestión de flotas y la seguridad de vehículos: bajo consumo de energía para despliegues prolongados, entradas de alarma configurables para telemetría accionable, y la opción de habilitar corte/reinicio del motor cuando sea necesario. Para instalaciones en motocicletas, scooters o e-bikes—donde el espacio y las restricciones de cableado importan—el tamaño compacto y el rango de voltaje flexible facilitan una instalación rápida y fiable. Emparejar el C32Plus con Plaspy desbloquea insights en tiempo real, alertas basadas en eventos y reportes de telemetría fiables que respaldan la prevención de robos, estrategias de monitoreo de combustible y operaciones eficientes de la flota.

