---
slug: /gosafe/g6c
id: g6c
sidebar_label: G6C
sidebar_class_name: menu_item_tracker
---
# Gosafe - G6C

![G6C](./tracker.jpg)

El G6C es un rastreador GPS robusto, apto para uso en vehículos, diseñado para proveedores de servicios de rastreo de flotas, integradores de sistemas y clientes corporativos que requieren un rastreo en tiempo real fiable y telemática compatible con Plaspy. Combinando un receptor GNSS de alta sensibilidad de u-blox y GSM/GPRS cuád-band con capacidad opcional UMTS/HSPA y LTE, el G6C ofrece ubicación precisa, datos de comportamiento de manejo y telemetría a bordo que se integran fácilmente con Plaspy para gestión de flotas, protección antirrobo y reportes avanzados.

El dispositivo está diseñado para despliegues a gran escala: hardware compacto, bajo consumo de energía, amplio rango de voltaje para vehículos y gestión remota del dispositivo con actualizaciones de firmware. Su conjunto completo de E/S y su capacidad de expansión permiten implementar monitoreo de encendido, sensado de nivel de combustible, control remoto de inmovilizador y identificación del conductor, al mismo tiempo que alimentan mensajes consistentes y almacenados en búfer en Plaspy para alertas en tiempo real, informes históricos y analítica operativa.

## Aspectos clave

- Compatible con Plaspy para rastreo en tiempo real y cargas de telemetría en búfer, para una gestión y despacho de flotas fiables.
- Receptor GNSS de alta sensibilidad de u-blox \(u-blox 7\) con soporte SBAS para posicionamiento preciso y TTFF rápido.
- Comunicación cuád-banda GSM/GPRS con variantes opcionales UMTS/HSPA y LTE, además de múltiples modos de carga \(TCP/UDP/SMS\).
- Alimentación de grado vehicular: entrada 8–32 V DC, batería de respaldo Li-Po de 750 mAh integrada y corrientes en modo reposo y ahorro de energía bajas para mayor disponibilidad.
- Conjunto completo de E/S y expansión—detección de encendido, entradas analógicas/digitales, salidas open-drain, RS232 y 1‑Wire—para telemetría, monitoreo de combustible y accesorios.
- Sensor de movimiento a bordo \(acelerómetro 3D\) y detección de interferencia GSM para casos de anti-robo y alertas de comportamiento de manejo.
- Despliegues seguros y escalables con gestión OTA de dispositivos y actualizaciones de firmware para flotas y implementaciones empresariales.

## Cómo funciona con Plaspy

Al integrarse con Plaspy, el G6C transmite datos de posición y telemetría a través de la red celular para proporcionar un rastreo en tiempo real continuo compatible con Plaspy, alertas y reportes históricos. Plaspy ingiere coordenadas GNSS, eventos del acelerómetro, estados de entradas digitales/analógicas y mensajes almacenados en búfer procedentes del G6C, lo que permite paneles de flota unificados, alertas basadas en reglas y flujos de trabajo automatizados para operaciones y equipos de seguridad.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por GPRS/EDGE usando transporte TCP, UDP o SMS configurados.
- Eventos de encendido y monitorización de entradas digitales \(puerta, alarma, señales PTO\) reportados a Plaspy para reglas y enrutamiento basados en estado.
- El soporte de entradas analógicas permite el monitoreo de combustible y la integración de telemetría de otros sensores en los informes y alertas de Plaspy.
- La capacidad de inmovilización remota puede implementarse mediante las salidas open-drain junto con accesorios de relé para respuesta ante robo.
- Plaspy puede correlacionar eventos del acelerómetro \(frenadas/aceleración brusca\) y violaciones de geocerca con datos del vehículo y del conductor para informes de seguridad y cumplimiento.

## Resumen técnico

| Conectividad | GSM/GPRS cuád-banda; variantes opcionales UMTS/HSPA y LTE |
| --- | --- |
| Modos de comunicación | GPRS/EDGE; modos de carga TCP, UDP y SMS |
| Alimentación y batería | Voltaje de operación 8–32 V DC \(soporta 12V/24V\); batería de respaldo Li-Po 750 mAh integrada; sleep 1 mA, power-save 12 mA |
| Interfaces | 2 entradas digitales, 1 detección dedicada de encendido, 1 entrada programable \(digital/analógica\), 1 entrada analógica dedicada, 2 salidas digitales open-drain \(máx 300 mA\), puerto RS232, interfaz 1‑Wire |
| GNSS | Chipset u-blox 7 con SBAS, receptor de 50 canales, sensibilidad de seguimiento de −162 dBm, actualización a 1 Hz, TTFF ~27 s \(frío/caliente\), ~1 s \(activo\) |
| Soporte SIM | Soporte para micro SIM y SIM incrustada \(eSIM\) |
| Antenas | Antenas GPS y GSM internas \(a bordo\) |
| Procesador y memoria | CPU ARM Cortex-M3; 8,000 mensajes almacenados en memoria flash con búfer |
| Sensores y detección | Acelerómetro 3D para movimiento y comportamiento del conductor; detección de interferencia GSM |
| Gestión remota | Gestión de dispositivos OTA y actualizaciones de firmware \(FOTA\) |
| Factor de forma | 94 × 47 × 20.5 mm; peso 78 g \(sin batería\); montaje con bridas, Velcro o adhesivo |
| Configuración | Puerto USB para configuración y carga de firmware; admite accesorios \(iButton, relés, sensores de temperatura, RFID, botones de pánico\) |

## Casos de uso

- Gestión de flotas y despacho: rastreo en tiempo real, optimización de rutas y telemetría del comportamiento del conductor para mejorar la eficiencia operativa.
- Antirrobo e inmovilización de flotas: detección de interferencia GSM y inmovilizador remoto a través de salidas y accesorios de relé para la recuperación del vehículo.
- Seguro basado en el uso y puntuación del conductor: captura de eventos por acelerómetro y reportes de encendido alimentan modelos de riesgo en Plaspy.
- Gestión de combustible y telemetría de sensores: entradas analógicas y entradas programables permiten monitorear el nivel de combustible e integrarse a los informes de Plaspy.
- Identificación del conductor y monitoreo especializado: iButton/RFID 1‑Wire y botones de pánico para registros de conductor seguros y flujos de trabajo de seguridad.

## Por qué elegir este rastreador con Plaspy

El G6C está diseñado para flotas empresariales e integradores que requieren un rastreador GPS duradero, compatible con Plaspy, que equilibre precisión, bajo consumo y un amplio conjunto de E/S. Su rendimiento GNSS de u-blox, la versatilidad celular y la gestión OTA facilitan su despliegue a gran escala manteniendo predecibles los costos operativos. Para la gestión de flotas, el G6C suministra la telemetría central—ubicación, encendido, eventos del acelerómetro y datos de sensores analógicos—que Plaspy utiliza para entregar insights en tiempo real, alertas automatizadas e informes completos.

En la práctica, elegir el G6C para una integración con Plaspy implica un almacenamiento fiable de mensajes durante interrupciones de red, monitoreo de combustible sencillo mediante entradas analógicas y medidas anti-robo prácticas que incluyen detección de interferencia y inmovilización remota con accesorios de relé. Combinado con los paneles de control de Plaspy y el soporte para entradas complementarias como ID de conductor y sensores de temperatura, el G6C forma una solución completa de rastreo vehicular para equipos de operaciones que buscan telemática confiable y escalable.

