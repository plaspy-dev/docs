---
slug: /gosafe/gat1000
id: gat1000
sidebar_label: GAT1000
sidebar_class_name: menu_item_tracker
---
# Gosafe - GAT1000

![GAT1000](./tracker.png)

El GAT1000 Asset Tracker de Gosafe es un rastreador GPS robusto y compatible con Plaspy, diseñado para equipos pesados, remolques y activos exteriores de alto valor. Construido alrededor de una conectividad LTE Cat-1 de banda ancha y un motor GNSS multi‑con canales altamente sensible de 56, el GAT1000 ofrece seguimiento en tiempo real confiable y telemetría rica para la gestión de flotas, protección anti‑robo y monitoreo remoto de activos.

Diseñado para bajo consumo de energía y entornos difíciles, el GAT1000 combina una carcasa resistente al agua IP67, una batería interna de respaldo recargable de 5000mAh y una E/S flexible para monitoreo de combustible, detección de ignición y sensores Bluetooth. Cuando se integra con Plaspy, este rastreador proporciona inteligencia de ubicación escalable, alertas accionables e informes a nivel de flota para impulsar la disponibilidad y la seguridad.

## Key Highlights

- Rastreador GPS compatible con Plaspy con conectividad LTE Cat‑1 para un seguimiento y telemetría global en tiempo real fiables.
- Motor multi‑GNSS \(GPS/GLONASS/Galileo/BeiDou\) con precisión SBAS de hasta 2.0 m \(cielo despejado\) y sensibilidad de seguimiento de -162 dBm para un rendimiento de ubicación sólido.
- Carcasa robusta resistente al agua IP67 y clasificaciones industriales de choque/vibración \(SAE J1455, MIL‑STD‑202G\) para uso en equipos pesados y remolques.
- Batería interna de respaldo Li‑ion de 5000mAh de gran capacidad más entrada DC 8–40V para operación fiable en vehículos y activos de 12V/24V.
- E/S integrales: detección de ignición, entradas digitales, ADC analógicos, salidas de colector abierto y interfaces serial para apoyar monitoreo de combustible, telemetría y control del inmovilizador vía relés externos.
- Soporte BLE 4.2 para sensores y balizas Bluetooth para añadir detección de puerta, temperatura, humedad u otros sensores inalámbricos a los paneles de Plaspy.
- Bajo consumo en modo de reposo \(400 µA\) y rastreo activo eficiente \(120 mA @ 12V\) para extender la vida útil entre interrupciones de energía.

## How It Works with Plaspy

El GAT1000 transmite ubicación y telemetría a Plaspy utilizando canales LTE Cat‑1 o de respaldo GPRS/GSM a través de TCP/UDP o SMS. Plaspy ingiere soluciones GNSS, eventos de I/O y lecturas de sensores para proporcionar seguimiento en tiempo real, alertas configurables e informes históricos. La integración ofrece ideas accionables para la gestión de flotas, respuestas anti‑robo y programas de mantenimiento preventivo.

- Actualizaciones de ubicación y telemetría en tiempo real a través de LTE/GPRS \(TCP/UDP\) y SMS para una conectividad persistente.
- La detección de ignición y las entradas digitales reportan el estado de encendido/apagado del vehículo y eventos de puertas o alarmas a Plaspy en tiempo real.
- El monitoreo de combustible y las entradas de sensores analógicos permiten a Plaspy mostrar niveles de combustible y detectar anomalías para flujos de trabajo de monitoreo de combustible.
- Soporte para funcionalidad de inmovilizador remoto mediante el control de relés externos a través de las salidas de colector abierto del dispositivo cuando se configura con reglas de Plaspy.
- Sensores Bluetooth \(BLE 4.2\) amplían la visibilidad de Plaspy a sensores de temperatura, humedad y puerta para monitoreo de cadena de frío o seguridad.

## Technical Overview

| Conectividad | LTE Cat‑1, GPRS \(TCP/UDP\), SMS; respaldo GSM/3G |
| --- | --- |
| Bandas | LTE Cat‑1 bandas B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28/66 |
| Alimentación y batería | Entrada DC 8–40V \(sistemas 12V/24V\); batería interna recargable Li‑ion de respaldo de 5000mAh; consumo en reposo profundo ~400 µA; rastreo activo ~120 mA @ 12V |
| Interfaces | Conector M12 de 12 pines, detección de ignición, 2 entradas digitales configurables, 2 salidas digitales de colector abierto \(150 mA\), 2 entradas analógicas ADC, interfaz 1‑Wire, interfaz serie \(TTL o RS232\), antenas GPS/celulares internas, doble SIM \(internal 4FF + M2M eSIM\) |
| GNSS | Canal 56 GPS/GLONASS/Galileo/BeiDou con precisión SBAS de hasta 2.0 m \(cielo despejado\); sensibilidad de seguimiento -162 dBm |
| Bluetooth | BLE 4.2 para sensores y balizas inalámbricos |
| Gestión remota | Firmware y configuración de dispositivo completamente programables; configurable vía serial/interfaz. \(FOTA no especificado en esta descripción.\) |
| Forma y entorno | 137 x 85 x 40 mm; 340 g \(458 g con montaje\); carcasa resistente al agua IP67; clasificación ambiental IPX7; rango de operación -30°C a +60°C \(con alimentación principal\); choque/vibración conforme SAE J1455 y MIL‑STD‑202G |

## Casos de uso

- Gestión de flotas para equipos pesados y remolques: supervisar ubicación, estado de ignición y utilización para mejorar la asignación de tareas y reducir el tiempo ocioso.
- Protección y recuperación de activos: rastreo en tiempo real y control remoto de relés ofrecen flujos de trabajo anti‑robo y capacidad de inmovilización mediante relés externos.
- Monitoreo de combustible y telemetría: entradas analógicas y compatibilidad con sensores de combustible permiten reportar niveles y detectar anomalías en Plaspy.
- Monitoreo de cadena de frío o ambiental: sensores BLE de temperatura/humedad informan condiciones para remolques y contenedores en los paneles de Plaspy.
- Protección de activos de alto valor: carcasa IP67, clasificaciones de choque/vibración robustas y una batería de respaldo interna mantienen el rastreo activo en despliegues al aire libre difíciles.

## Por qué elegir este rastreador con Plaspy

El GAT1000 está diseñado para organizaciones que necesitan un rastreador GPS robusto, compatible con Plaspy, con E/S industriales y telemetría integral. Su cobertura mundial LTE Cat‑1 y compatibilidad dual SIM aseguran conectividad persistente, mientras que el receptor multi‑GNSS de 56 canales y la sensibilidad probada ofrecen un seguimiento en tiempo real preciso. Los modos de bajo consumo y la batería de respaldo de 5000mAh minimizan el tiempo de inactividad ante pérdidas de energía, y las duras clasificaciones ambientales lo hacen ideal para la gestión de flotas al aire libre.

Cuando se combina con Plaspy, el GAT1000 se convierte en una solución completa para el seguimiento en tiempo real, flujos de trabajo anti‑robo, monitoreo de combustible y alertas impulsadas por sensores. Las interfaces flexibles del dispositivo simplifican integraciones con relés, sondas de combustible, RFID y sensores BLE, habilitando telemetría escalable y control remoto en flotas mixtas y clases de activos. Elija el GAT1000 para una precisión de ubicación confiable, telemetría accionable y un camino directo para desbloquear la inteligencia de flota en Plaspy.

