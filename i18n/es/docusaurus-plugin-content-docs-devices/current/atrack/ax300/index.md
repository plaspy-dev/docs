---
slug: /atrack/ax300
id: ax300
sidebar_label: AX300
sidebar_class_name: menu_item_tracker
---
# ATrack - AX300

![AX300](./tracker.jpg)

# AX300 LTE-M OBD Vehicle Tracker

El AX300 de ATrack es un rastreador GPS compacto, compatible con Plaspy, diseñado para la gestión profesional de flotas y la telemática de vehículos. Diseñado para conectarse al puerto OBD-II, el AX300 ofrece seguimiento en tiempo real, telemetría del motor y datos de diagnóstico a través de LTE-M para que los operadores de flotas puedan monitorizar la ubicación, la velocidad y el estado del vehículo a través de la plataforma de Plaspy.

Construido para despliegues de vehículos exigentes, el AX300 es compatible con datos OEM CAN, admite dos canales CAN, es compatible con adaptadores RP1226 y sensores Bluetooth opcionales — lo que lo hace ideal para flotas de logística, autobuses escolares, alquiler de coches y construcción que requieren telemetría fiable, flujos de antirrobo e insights operativos a través de Plaspy.

## Aspectos clave

- Compatible con Plaspy: integración nativa lista para alimentar la ubicación en tiempo real y la telemetría diagnóstica en Plaspy para paneles, alertas e informes.
- Conectividad LTE-M: variantes regionales Cat.M1 \(AX300‑MX, AX300‑MT, AX300‑MG\) ofrecen comunicación celular de área amplia y bajo consumo para un seguimiento continuo.
- Acceso directo OBD-II: Recupera diagnósticos del motor y del vehículo \(ISO 15765-4, Dual SAE J1939, SAE J1708\) para obtener información más rica de la flota, incluida telemetría relacionada con el combustible cuando esté disponible en el vehículo.
- Doble CAN y detección automática: Soporta doble bus CAN y datos CAN OEM con detección automática de protocolos para una integración fluida con vehículos modernos.
- Rendimiento GNSS robusto: GPS + GLONASS con excelente sensibilidad y una precisión típica CEP de 2.5 m para un seguimiento en tiempo real preciso.
- Durabilidad de grado vehicular: Amplio rango de temperatura de funcionamiento, resistencia a vibraciones y golpes conforme MIL-STD-810G y SAE J1455 para entornos exigentes.
- Sensores opcionales Bluetooth: compatibilidad BLE v5.0 que permite sensores inalámbricos o una app móvil complementaria para telemetría adicional o flujos de trabajo del conductor.

## Cómo funciona con Plaspy

El AX300 transmite la posición GNSS y los diagnósticos del vehículo a Plaspy a través de LTE-M usando transporte UDP/IP, TCP/IP o SMS. Una vez configurado en Plaspy, el rastreador proporciona actualizaciones de ubicación continuas, parámetros obtenidos por CAN y alertas basadas en eventos para gestionar de forma eficiente la flota, monitorizar anti-robo y programas de mantenimiento desde una única consola.

- Actualizaciones de ubicación y telemetría en tiempo real: las correcciones GNSS y los datos del vehículo derivados de OBD llegan a Plaspy para mapas en vivo y trazados históricos.
- Estado del motor e encendido: los canales OBD-II y CAN informan sobre el estado del motor, RPM y estado de encendido para apoyar el análisis del comportamiento del conductor y de las rutas.
- Monitoreo de combustible y diagnósticos: donde OBD-II del vehículo expone parámetros de combustible o consumo, el AX300 transmite esta telemetría a Plaspy para monitoreo y control de costos de combustible.
- Flujos de antirrobo e inmovilización: Plaspy puede usar la información de encendido o diagnósticos para activar alertas; se pueden implementar flujos de inmovilización o corte cuando se empareja con actuadores compatibles y la instalación.
- Sensores y balizas Bluetooth: datos BLE opcionales \(temperatura, sensores de puerta o presencia de la app móvil\) se envían a Plaspy para mejorar la conciencia situacional.

## Resumen técnico

| Conectividad | LTE FDD Cat.M1 \(variantes regionales\). Transporte de datos: UDP/IP, TCP/IP, SMS. |
| --- | --- |
| Bandas / Variantes | Variantes regionales: AX300‑MX \(Norteamérica\), AX300‑MT \(LATAM\), AX300‑MG \(Global\) con soporte de bandas LTE FDD regional apropiadas. |
| Alimentación y batería | Funciona en sistemas de vehículo de 12V/24V; corriente típica ~100 mA a 12V; modo de suspensión profundo ~3.3 mA a 12V. Batería de respaldo de 3.7V y 250 mAh. 16 Mbit de flash interno para almacenamiento local. |
| Interfaces | Conector OBDII SAE J1962 Tipo B; adaptadores opcionales DEUTSCH/6-pin/9-pin y RP1226; zócalo Nano SIM; Micro USB para configuración. Soporta doble bus CAN y acceso a datos CAN OEM. |
| GNSS | GPS + GLONASS. 33 canales de seguimiento / 99 de adquisición. Sensibilidad de adquisición -149 dBm; seguimiento -167 dBm. Precisión típica de ubicación 2.5 m CEP \(50%\). |
| Bluetooth | BLE v5.0 opcional para sensores inalámbricos y conectividad con la app móvil. |
| Gestión remota | Gestión de dispositivos ATrack \(ADM\), comandos SMS, configuración USB y actualizaciones FOTA \(firmware over-the-air\) soportadas. |
| Formato y durabilidad | Dimensiones 66.8 × 50 × 23 mm; peso ≈ 50 g. Alcance operativo -40°C a 60°C \(con alimentación principal\), -20°C a 60°C con batería interna; 95% HR sin condensación. Cumple MIL-STD-810G y SAE J1455 de vibración/choque. |
| Audio / Indicadores | Acelerómetro de 3 ejes ±16g; zumbador >70 dB a 10 cm; tres LEDs de estado \(Power, GPS, Cellular\). |
| Certificaciones y operadores | FCC, IC, PTCRB, RoHS. Operadores listados incluyen AT&T y Verizon para despliegues en Norteamérica. |

## Casos de uso

- Gestión de flotas y logística: seguimiento centralizado en tiempo real, reproducción de rutas y telemetría del motor para una mayor eficiencia operativa.
- Autobuses escolares y flotas de pasajeros: supervisión de seguridad, estado de encendido y visibilidad de la ubicación a través de Plaspy para alertas a padres y operadores.
- Car sharing y alquiler: diagnósticos derivados de OBD y ubicación para el seguimiento de uso, facturación y medidas antirrobo.
- Construcción, minería y vehículos pesados: telemetría robusta con resistencia a vibraciones y rango de temperatura ampliado para emplazamientos severos.
- Taxis y servicios a demanda: despacho en tiempo real, telemetría de comportamiento del conductor y BLE opcional para emparejamiento con la app del conductor.

## Por qué elegir este rastreador con Plaspy

Al combinar el AX300 con Plaspy, obtiene una solución integrada para la gestión de flotas basada en rastreadores GPS que combina una posición GNSS precisa con diagnósticos detallados del vehículo. La conexión OBD-II y el soporte de doble CAN ofrecen telemetría de alto valor, desde la velocidad y parámetros del motor hasta datos de combustible cuando están disponibles, lo que facilita un mantenimiento más inteligente, menos tiempo de inactividad y un mejor control del combustible.

La conectividad LTE-M y el diseño de bajo consumo del AX300 están optimizados para implementaciones escalables, mientras ADM y FOTA facilitan la gestión del ciclo de vida del dispositivo. Para operadores enfocados en flujos de trabajo de anti-robo y control remoto, Plaspy puede actuar sobre las señales de encendido y diagnóstico del AX300 e implementar procedimientos de inmovilización o corte cuando se empareja con hardware compatible. Sensores Bluetooth opcionales amplían aún más las capacidades para monitoreo de temperatura, detección de puertas o integración con la app del conductor.

En conjunto, el AX300 ofrece una plataforma fiable y compatible con Plaspy para rastreo en tiempo real, telemetría y diagnósticos del vehículo, ayudando a las flotas a mejorar la utilización, la seguridad y la eficiencia operativa sin sacrificar robustez ni manejabilidad.

