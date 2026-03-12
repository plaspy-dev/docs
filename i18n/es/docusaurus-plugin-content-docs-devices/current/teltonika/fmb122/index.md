---
slug: /teltonika/fmb122
id: fmb122
sidebar_label: FMB122
sidebar_class_name: menu_item_tracker
---
# Teltonika - FMB122

![FMB122](./tracker.png)

El Teltonika FMB122 es un rastreador GPS 2G compacto, diseñado para la gestión de flotas y la seguridad anti-robo de vehículos. Diseñado para integrarse de forma fluida con Plaspy, el FMB122 ofrece seguimiento en tiempo real y telemetría confiables para despliegues que requieren resiliencia con doble SIM, soporte para sensores Bluetooth Low Energy y identificación 1-Wire. Para flotas, vehículos de servicio y activos de alto valor, este rastreador GPS compatible con Plaspy proporciona datos de ubicación concisos e entradas de sensores que ayudan a los operadores a reaccionar más rápido y gestionar riesgos.

El FMB122 sigue siendo una opción práctica cuando una conectividad GSM simple y fiable es aceptable. Con operación de doble SIM para reducir costos de roaming y una opción de antena GNSS externa para mejorar la recepción satelital en instalaciones difíciles, el dispositivo admite flujos de telemetría, sensores BLE y identificación RFID/iButton. Aunque la página del producto indique fin de vida útil, las características centrales del FMB122 siguen soportando flujos de anti-robo y la integración telemática de flotas con Plaspy para uso operativo continuo.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para seguimiento en tiempo real y telemetría de gestión de flotas.
- Conectividad 2G \(GSM\) con soporte para doble SIM para reducir roaming y mejorar la disponibilidad.
- Bluetooth Low Energy \(BLE\) para integración con balizas y sensores Bluetooth externos.
- Interfaz 1-Wire que admite identificación de conductor mediante RFID/iButton y sensores de temperatura.
- Antena GNSS externa opcional para una mejor recepción satelital en montajes difícil.
- Formato compacto orientado a vehículos con un ecosistema de accesorios \(adaptadores CAN, antenas, cables\).
- Funciona con herramientas de gestión de Teltonika como FOTA WEB y utilidades de configurador para actualizaciones y configuración.

## Cómo funciona con Plaspy

Al conectarse a Plaspy, el FMB122 entrega datos de ubicación y telemetría de sensores a la plataforma mediante su enlace celular 2G. Plaspy procesa datos de posición GNSS, lecturas de sensores BLE y entradas 1-Wire \(IDs RFID/iButton y sensores de temperatura compatibles\) para proporcionar seguimiento en tiempo real, geocercas y alertas. El doble SIM aumenta la fiabilidad de la conexión, y el tablero y las alertas de Plaspy pueden utilizarse para traducir las señales de los dispositivos en acciones operativas para la gestión de flotas y la respuesta ante robos.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas desde el FMB122 a Plaspy a través de la conectividad 2G.
- Identificación de conductor o activo mediante RFID/iButton a través de la interfaz 1-Wire, reportada a Plaspy para registros de conductor.
- Monitoreo de temperatura desde sensores 1-Wire y sensores ambientales BLE cuando se utilizan para cadena de frío o seguimiento del estado de activos.
- Sensores y balizas Bluetooth \(BLE\) para detección de puerta, movimiento, detección de imán o eventos de proximidad integrados en las reglas de Plaspy.
- Conmutación de doble SIM para mantener los flujos de telemetría y alertas en escenarios de roaming o cobertura débil.

## Resumen técnico

| Conectividad | GSM 2G \(telemetría celular\); soporte para doble SIM |
| --- | --- |
| Bandas | B2, B3, B5, B8 \(GSM 2G\) |
| Alimentación y batería | Dispositivo alimentado por el vehículo; provisto con cables de alimentación \(típicamente 0,9 m\); no se especifica batería interna |
| Interfaces | Interfaz 1-Wire \(RFID/iButton, sensores de temperatura 1-Wire\); Micro USB presente en algunas variantes; compatible con adaptadores CAN y cables de E/S suministrados |
| GNSS | Receptor GNSS con antena GNSS externa opcional para mejorar la recepción satelital \(kits de antena externa disponibles\) |
| Bluetooth | Bluetooth Low Energy \(BLE\) para balizas y sensores inalámbricos \(temperatura, humedad, imán, movimiento\) |
| Gestión remota | Soporta herramientas de Teltonika como FOTA WEB y utilidades de configurador para la configuración del dispositivo y actualizaciones de firmware |
| Formato | Rastreador compacto para vehículos destinado a telemática de flotas e instalaciones de anti-robo; variantes suministradas con antena GNSS, cable Micro USB y cables de alimentación |

## Casos de uso

- Gestión de flotas: seguimiento GPS en tiempo real, identificación del conductor y telemetría reportada a Plaspy para el despacho y supervisión de rutas.
- Monitoreo anti-robo: reporte continuo de ubicación y alertas de accesorios BLE/1-Wire para detectar movimientos no autorizados o manipulación.
- Monitoreo de cadena de frío y condición de activos: sensores de temperatura 1-Wire y sensores ambientales BLE alimentan a Plaspy para alertas de temperatura y registros de cumplimiento.
- Datos de combustible e encendido \(vía adaptador CAN\): cuando se empareja con un adaptador CAN, el FMB122 puede suministrar datos del bus del vehículo a Plaspy para monitoreo de combustible y análisis del estado de encendido.
- Identidad del conductor y control de acceso: identificación RFID/iButton para registros de conductor, eventos de acceso e informes de responsabilidad en Plaspy.

## Por qué elegir este rastreador con Plaspy

Elegir el Teltonika FMB122 como rastreador GPS compatible con Plaspy ofrece a los equipos una plataforma compacta y probada para el seguimiento en tiempo real y la telemetría. La arquitectura de doble SIM del dispositivo reduce la exposición a costos de roaming y mejora la fiabilidad de la conectividad, mientras que el soporte para BLE y 1-Wire amplía su utilidad más allá del posicionamiento GPS básico para incluir identificación de conductor, detección de temperatura y flujos de trabajo basados en proximidad. La integración con las herramientas de gestión de Teltonika \(FOTA WEB y configurador\) simplifica actualizaciones y provisión, y el panel de Plaspy convierte las señales del FMB122 en alertas, informes y perspectivas de gestión de la flota. Para operaciones donde se requieren una cobertura GSM fiable, soporte de sensores y flujos de trabajo de anti-robo, el FMB122 sigue siendo una opción práctica y fácil de integrar.

