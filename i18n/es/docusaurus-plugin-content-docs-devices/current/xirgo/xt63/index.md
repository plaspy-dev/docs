---
slug: /xirgo/xt63
id: xt63
sidebar_label: XT63
sidebar_class_name: menu_item_tracker
---
# Xirgo - XT63

![XT63](./tracker.webp)

# XT63

El XT63 es un localizador GPS de telemática para vehículos compatible con Plaspy, diseñado para gerentes de flota que requieren rastreo en tiempo real fiable e integración de telemetría flexible. Construido para automóviles de pasajeros, camiones ligeros a pesados y equipos comerciales, el XT63 combina antenas celulares y GPS integradas con opción de Bluetooth para reducir la complejidad de instalación y acelerar el despliegue en plataformas de monitoreo y gestión de flotas impulsadas por Plaspy.

Con soporte para los protocolos OBD y JBUS y una pila de comunicaciones configurable, el XT63 ofrece notificaciones instantáneas de geocerca, datos detallados del vehículo y paquetes de datos personalizables para adaptarse a las necesidades comerciales en evolución. El dispositivo está diseñado para una personalización rápida, transporte de datos seguro y E/S práctico para encendido, eventos de puertas/alarma y control de actuadores, lo que lo convierte en un localizador GPS ideal para soluciones compatibles con Plaspy centradas en anti-robo, telemetría y eficiencia operativa.

## Aspectos clave

- Localizador GPS compatible con Plaspy que ofrece rastreo en tiempo real e integración de gestión de flotas de serie.
- Conectividad multi-red: LTE Cat 1 con caídas a 3G/2G \(según modelo\) para amplia cobertura y roaming.
- Soporte opcional OBD y JBUS para capturar parámetros del motor, monitoreo de combustible y datos de encendido donde esté disponible.
- Notificaciones instantáneas de geocerca y acelerómetro de 3 ejes para alertas basadas en movimiento y monitoreo anti-robos.
- Antenas celular y GPS integradas con antenas Bluetooth opcionales para simplificar la instalación y habilitar sensores Bluetooth.
- Entrada/salida robusta: 5 entradas digitales, 1 entrada analógica, 3 salidas, 2 puertos de bus 1-wire y 2 puertos RS232 para integraciones con el vehículo.
- Opciones de transporte seguras que incluyen AWS MQTT con TLS 1.2, MQTT, HTTPS, UDP y SMS para una entrega de telemetría flexible a Plaspy.

## Cómo funciona con Plaspy

Integrar el XT63 con Plaspy permite un flujo de datos continuo y confiable desde el vehículo hasta el panel. El dispositivo transmite ubicación y telemetría utilizando protocolos industriales soportados por Plaspy, permitiendo que los gestores de flotas reciban rastreo en vivo, alertas automáticas e informes estructurados sin necesidad de middleware complejo.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas vía MQTT/HTTPS/UDP/SMS a los endpoints de Plaspy.
- Encendido, estado de puertas y alarmas mediante las entradas digitales para alertas basadas en eventos y reporte de estado.
- Monitoreo de combustible y telemetría del motor cuando la unidad está conectada a interfaces OBD o JBUS, permitiendo datos de consumo y diagnóstico en Plaspy.
- Control remoto de actuadores \(por ejemplo, integración de corte de arranque o inmovilizador\) usando las salidas del dispositivo donde el cableado del vehículo y las políticas lo permitan.
- Sensores y beacons Bluetooth compatibles mediante antena Bluetooth opcional para añadir telemetría de temperatura, presencia de carga o proximidad a los tableros de Plaspy.

## Visión técnica

| Conectividad | LTE Cat 1; 3G UMTS/HSPA; 2G GSM \(disponibilidad varía según modelo de dispositivo\) |
| --- | --- |
| Bandas | Soporte de generación de red listado arriba \(variantes de bandas regionales dependen del modelo\) |
| Potencia y batería | Funcionamiento alimentado por el vehículo con batería de respaldo recargable opcional de 250 mAh \(opcional\) |
| Interfaces | 5 entradas digitales, 1 entrada analógica, 3 salidas, 2 puertos de bus 1-wire, 2 puertos RS232; soporte opcional de OBD y protocolo JBUS |
| GNSS | GPS embebido con antena integrada |
| Bluetooth | Antenna Bluetooth opcional para soportar sensores y beacons Bluetooth |
| Gestión remota y protocolos | SMS, UDP, MQTT, AWS MQTT con TLS 1.2, HTTPS; paquetes de datos personalizables y personalización a nivel de plataforma |
| Certificaciones | FCC, AT&T, Verizon, CE\(RED\) |
| Factor de forma | Módulo telemático compacto para vehículos, apto para instalaciones en vehículos de pasajeros, comerciales y de servicio pesado |

## Casos de uso

- Gestión de flotas: rastreo en tiempo real, adherencia a ruta y telemetría de conductor integrada en Plaspy para optimización de operaciones.
- Anti-robos y recuperación: detección de movimiento, violaciones de geocerca y alertas por evento permiten una respuesta rápida ante movimientos no autorizados.
- Monitoreo de combustible y diagnósticos: cuando se conecta vía OBD o JBUS, capturar nivel de combustible, tendencias de consumo y códigos de fallo del motor para control de costos.
- Control remoto y seguridad: usar salidas digitales para interactuar con inmovilizadores o sistemas de corte de arranque donde esté permitido para evitar uso no autorizado.
- Cadena de frío y monitoreo de activos: añadir sensores Bluetooth para temperatura o detección de apertura de puertas en carga refrigerada o sensible, alimentando datos directamente a Plaspy.

## Por qué elegir este localizador con Plaspy

El XT63 ofrece una combinación equilibrada de conectividad, opciones de interfaz con el vehículo y protocolos de telemetría seguros que lo convierten en un localizador GPS eficaz para despliegues compatibles con Plaspy. Su integración opcional OBD/JBUS y su extenso I/O permiten capturar los datos específicos de encendido, combustible y eventos que requieren la gestión de flotas y aplicaciones anti-robos. Con múltiples protocolos de transporte, incluido AWS MQTT con TLS 1.2 y paquetes de datos personalizables, el XT63 se integra de forma fluida en Plaspy para seguimiento en tiempo real escalable, telemetría robusta y alertas sensibles.

Para flotas y propietarios de equipos que buscan un localizador GPS confiable y flexible, el XT63 ofrece certificaciones probadas \(FCC, AT&T, Verizon, CE\(RED\)\), antenas integradas para simplificar instalaciones y una plataforma diseñada para una personalización rápida, ayudando a desplegar soluciones de rastreo compatibles con Plaspy más rápido y con la fidelidad de telemetría necesaria para mejorar la eficiencia y la seguridad.

