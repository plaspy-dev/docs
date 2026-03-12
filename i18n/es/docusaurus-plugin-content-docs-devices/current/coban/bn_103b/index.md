---
slug: /coban/bn_103b
id: bn_103b
sidebar_label: BN-103B
sidebar_class_name: menu_item_tracker
---
# Coban - BN-103B

![BN-103B](./tracker.png)

# BN-103B Rastreador GPS para Vehículos

El BN-103B es un rastreador GPS inteligente montado en vehículo, diseñado para la gestión profesional de flotas, el rastreo en tiempo real y una sólida protección antirrobo. Con soporte para antenas GPS y GSM externas, instalación por cable de 12–24 V y una batería de respaldo recargable, el BN-103B está diseñado para ser compatible con Plaspy mediante informes TCP/UDP/SMS estándar, lo que facilita y garantiza una integración fiable en soluciones de telemetría y gestión de flotas basadas en Plaspy.

Diseñado para logística, vehículos de ingeniería, flotas de alquiler y financiación, y control de vehículos del sector público, el BN-103B combina posicionamiento GNSS de alta sensibilidad, modos de reporte inteligentes y un conjunto de alarmas completo \(SOS, apertura de puerta, golpes, exceso de velocidad, batería baja y desconexión de energía\) para ofrecer una conciencia situacional continua. Al combinarse con Plaspy, las flotas obtienen un rastreador GPS llave en mano que alimenta el rastreo en tiempo real, telemetría y alertas de eventos en una única interfaz de gestión.

## Key Highlights

- Compatibilidad con Plaspy — informes vía TCP/UDP/SMS para una integración sencilla en los paneles de seguimiento en tiempo real de Plaspy.
- Receptor GNSS de alta precisión con sensibilidad GPS de hasta -165 dBm y una precisión típica de alrededor de 5 m para datos de ubicación fiables.
- Operación continua con instalación por cable de 12–24 V en el vehículo, más una batería de respaldo recargable de 3.7V 350mAh para resiliencia ante pérdidas de energía.
- Modos de reporte inteligentes: reporte en tiempo real configurable y un modo de sueño inteligente que ahorra energía mientras permanece sensible a eventos.
- Conjunto completo de alarmas y telemetría — SOS, apertura de puerta, golpe, exceso de velocidad, estado ACC/encendido, batería baja y desconexión de energía externa.
- Escucha de voz remota, inmovilización por relé \(corte de combustible/energía\) y notificación de ACC para respuesta antirrobo.
- Ampliable con accesorios opcionales: sensor de combustible, sensor de choque, sirena y antenas externas para gestión de flotas a medida y monitorización de combustible.

## How It Works with Plaspy

La integración con Plaspy es directa: el BN-103B transmite datos de GPS y estado a través de TCP, UDP o SMS a los endpoints de ingesta de Plaspy. Plaspy analiza los mensajes de protocolo del dispositivo para actualizar las posiciones de los vehículos en los mapas, generar paneles de telemetría y activar alertas basadas en eventos. El comportamiento inteligente en línea/fuera de línea y la persistencia de alarmas del BN-103B aseguran que los eventos críticos permanezcan visibles en Plaspy hasta ser aclarados.

- Actualizaciones de ubicación y telemetría en tiempo real \(coordenadas GNSS, velocidad, rumbo\).
- Informes del estado de encendido/ACC para un seguimiento preciso del motor encendido/apagado y análisis de trayectos.
- Monitoreo de combustible opcional cuando se instala un sensor de combustible externo — Plaspy muestra tendencias de nivel de combustible y alarmas.
- Capacidad de inmovilización remota mediante relé \(corte de combustible/energía\) — control anti‑robo accionable desde los paneles de Plaspy.
- Persistencia de eventos de alarma: SOS, apertura de puerta, impacto e intentos de ignición ilícita se mantienen en línea y se señalan en Plaspy hasta ser reconocidos.
- Escucha de voz remota y llamada/monitorización unidireccional para verificación de emergencia o incidentes \(audio soportado mediante micrófono externo\).
- Plaspy puede correlacionar la telemetría del BN-103B con sensores Bluetooth gestionados por la plataforma y otras fuentes de datos de terceros para una mayor conciencia situacional.

## Technical Overview

| Connectivity | 2G GSM/GPRS |
| --- | --- |
| Bands | 850 / 900 / 1800 / 1900 MHz \(GSM/GPRS\) |
| Data Transport | TCP, UDP, SMS |
| Power & Battery | Instalación por cable del vehículo a 12–24 V; batería de respaldo recargable de 3.7V 350mAh de ion de litio |
| Interfaces | Puertos de antena GPS y GSM externos; salida de relé \(para corte de combustible/energía\); micrófono externo; cable de extensión con SOS; control remoto; entradas digitales para alarmas de ACC/puerta/impacto |
| GNSS | Receptor de alta sensibilidad \(sensibilidad GPS hasta -165 dBm\); precisión típica ~5 m; arranque en frío ~45 s, tibio ~35 s, caliente ~1 s |
| Reporting Modes | Reporte en tiempo real en línea, modo de sueño inteligente \(se activa ante eventos o movimiento\); permanece en línea después de una alarma hasta ser aclarada |
| Accessories \(Included/Optional\) | Incluidos: relé, antena GPS externa, antena GSM externa, micrófono externo, cable de extensión con SOS, control remoto. Opcionales: sirena, sensor de combustible, sensor de choque |
| Form Factor | Montaje en vehículo; dimensiones 83 × 54 × 26 mm; peso aproximado ~120 g |
| Environmental | Temperatura de operación -20°C a +45°C; almacenamiento -40°C a +85°C; humedad 5%–95% sin condensación |
| Remote Management | Configuración basada en protocolo via SMS y comandos de la plataforma; el protocolo admite configuración remota \(ver manual de usuario\) |
| Bluetooth | No especificado / N/A |

## Use Cases

- Gestión de flotas: rastreo en tiempo real continuo, alertas de exceso de velocidad y reportes de trayectos para flotas de logística y transporte.
- Antirrobo e inmovilización: corte remoto de combustible/energía y persistencia de alarmas para reducir el riesgo de robo de vehículos y facilitar la recuperación.
- Control de vehículos de alquiler y financiación: monitorización de encendido, cumplimiento de geocerca y monitorización remota para la protección del activo.
- Vehículos de ingeniería y servicios públicos: especificaciones ambientales robustas y antenas externas para operación y gestión fiables en campo.
- Monitoreo de combustible y gestión de riesgo automotriz: integración opcional de sensor de combustible y telemetría para detectar robo de combustible y mejorar la generación de informes de consumo.

## Why Choose This Tracker with Plaspy

El BN-103B es un rastreador GPS práctico y compatible con Plaspy que equilibra telemetría de nivel profesional con una integración de plataforma sencilla. Su reporting estándar vía TCP/UDP/SMS facilita la incorporación rápida en despliegues impulsados por Plaspy, mientras que los modos de sueño inteligentes y una batería de respaldo preservan la disponibilidad y reducen el tiempo de inactividad. Para operadores de flotas que buscan un rastreo en tiempo real confiable, características antirrobo como inmovilización por relé y detección de ACC, además de soporte para sensores de combustible opcionales y periféricos de eventos, el BN-103B ofrece una solución rentable y escalable.

Combinado con las capacidades de mapeo, alertas e informes de Plaspy, el BN-103B proporciona telemetría procesable — desde la ubicación y velocidad basadas en GPS hasta el estado de encendido y eventos de alarma — que permite tomar decisiones operativas más informadas, mejorar la seguridad de los vehículos y obtener mejoras medibles en el rendimiento de la flota.

