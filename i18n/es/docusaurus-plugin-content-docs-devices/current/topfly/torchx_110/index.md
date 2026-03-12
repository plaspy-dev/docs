---
slug: /topfly/torchx_110
id: torchx_110
sidebar_label: TorchX 110
sidebar_class_name: menu_item_tracker
---
# TopFly - TorchX 110

![TorchX 110](./tracker.jpg)

El TorchX 110 \(4G Cat-1\) es un rastreador GPS OBDII plug-and-play diseñado para flotas, programas de seguro basado en el uso \(UBI\) y diagnósticos de vehículos. Como rastreador GPS compatible con Plaspy, TorchX 110 combina seguimiento en tiempo real de alta resolución, telemetría de bus CAN y compatibilidad con sensores BLE en un compacto formato OBDII para simplificar la instalación y acelerar el despliegue en flotas de vehículos mixtas.

Construido para cobertura celular global y diseñado para telemática vehicular, TorchX 110 ofrece actualizaciones de posición frecuentes \(tan a menudo como cada 3 segundos\), parámetros de vehículo a nivel CAN \(encendido, VIN, odómetro verdadero, nivel de combustible y DTC\) y almacenamiento a bordo para operación extendida fuera de la red. Integrando GNSS, posicionamiento Wi‑Fi y Bluetooth Low Energy 5.0, la unidad proporciona soluciones de ubicación robustas en cielo abierto y entornos urbanos, al tiempo que habilita telemetría extendida y monitorización de la cadena de frío a través de sensores y accesorios Bluetooth.

## Key Highlights

- Rastreador GPS compatible con Plaspy — conexión OBDII plug-and-play para una rápida integración con plataformas y APIs de Plaspy.
- Seguimiento en tiempo real de alta resolución — actualizaciones de ubicación cada 3 segundos para un análisis de ruta detallado y monitoreo del conductor.
- Telemetría rica del bus CAN — lee el estado de encendido, VIN, odómetro verdadero, nivel de combustible y Códigos de diagnóstico \(DTC\) a través de OBDII/CAN.
- Posicionamiento híbrido — GNSS más posicionamiento por Wi‑Fi y BLE para fijaciones fiables en cañones urbanos y entornos interiores.
- Gran búfer offline — almacena hasta 49,000 puntos de ubicación cuando el dispositivo está fuera de cobertura de red para evitar la pérdida de datos.
- Soporte de sensores BLE 5.0 — se conecta a sensores de temperatura/humedad, sensores de puertas y relés inalámbricos para telemática extendida y casos de uso de cadena de frío.
- Funciones de seguridad del vehículo — detección de accidentes con recopilación de datos, alertas de velocidad, alertas de encendido/desconexión de la alimentación y detección de interferencias de red.
- Mantenimiento remoto — soporte FOTA y puerto USB de depuración para actualizaciones de firmware y gestión remota del dispositivo.

## How It Works with Plaspy

Cuando se integra con Plaspy, TorchX 110 transmite la posición y la telemetría del vehículo a la plataforma Plaspy mediante opciones de transporte estándar y ofrece eventos e informes accionables. Los datos OBDII/CAN del dispositivo se analizan en campos telemáticos detallados \(encendido, VIN, odómetro, nivel de combustible y DTC\) mientras que el posicionamiento GNSS/Wi‑Fi/BLE proporciona un contexto de ubicación preciso. Plaspy lee estas entradas para ofrecer paneles en tiempo real, alertas, reproducción histórica e informes analíticos para la gestión de flotas y casos de UBI.

- Actualizaciones de ubicación y telemetría en tiempo real a través de 4G LTE Cat‑1 \(con respaldo 2G\) usando transporte TCP, UDP, MQTT o SMS.
- Alertas de encendido/apagado y desconexión de la alimentación entregadas de inmediato a Plaspy para antirrobo y monitorización operativa.
- Diagnósticos del vehículo y reenvío de DTC para flujos de mantenimiento, identificación de VIN y verificación de kilometraje.
- Detección de accidentes y recopilación de datos del accidente enviados a Plaspy para reconstrucción e informes de incidentes.
- Integración de sensores Bluetooth y accesorios BLE \(temperatura, puerta, relés inalámbricos\) para monitorización de la cadena de frío y entradas de control auxiliares vinculadas a las reglas y alertas de Plaspy.

## Technical Overview

| Conectividad | 4G LTE Cat‑1 con respaldo a 2G; transporte de datos TCP/UDP/MQTT/SMS |
| --- | --- |
| Bandas | 4G LTE Cat‑1 y retrocesos a 2G \(disponibles variantes regionales de bandas\) |
| Power & Battery | Voltaje de operación 7 V a 32 V DC; batería interna de respaldo Li‑Polímero de 100 mAh \(3.7 V\) para alertas de desconexión |
| Interfaces | Conector OBDII estándar que admite ISO 15765, SAE J1939, ISO 14230 \(KWP2000\), ISO9141‑2 y SAE J1708; ranura Nano SIM; puerto USB para depuración/configuración; indicadores LED |
| GNSS | Receptor GNSS todo en uno \(GPS + BeiDou + Galileo + QZSS\); precisión de posición inferior a 2 m CEP en cielo abierto; TTFF rápido |
| Bluetooth | BLE 5.0 para conexión a accesorios y sensores de terceros |
| Remote Management | Soporte FOTA para actualizaciones de firmware y mantenimiento remoto |
| Security | Opciones MD5 y AES128 para integridad y cifrado de datos; controles de roaming |
| Form Factor | Diseño compacto de enchufe OBDII; dimensiones 52.8 × 47.8 × 24.8 mm; peso 70 g |
| Environmental | Temperatura de operación –30°C a +80°C |
| Certifications \(Planned\) | CE, RCM, FCC, TDRA, NBTC, CITC y Anatel \(planes de certificación indicados\) |

## Use Cases

- Gestión de flotas — seguimiento en tiempo real, reproducción de rutas y monitorización del comportamiento de conducción para reducir el consumo de combustible y costos operativos.
- Seguro basado en el uso \(UBI\) — odómetro preciso, VIN y telemetría de eventos de conducción para respaldar la tarificación basada en el riesgo y la validación de pólizas.
- Anti‑robo y seguridad — alertas de encendido, notificaciones de desconexión de la alimentación y detección de accidentes para una respuesta rápida ante incidentes.
- Monitoreo de cadena de frío y activos — sensores BLE de temperatura/humedad y sensores de puerta integrados con Plaspy para cumplimiento y prevención de deterioro.
- Diagnóstico de vehículos y mantenimiento — DTCs, nivel de combustible y odómetro verdadero reportados para activar el mantenimiento preventivo y optimizar los flujos de reparación.

## Why Choose This Tracker with Plaspy

El TorchX 110 está diseñado para ofrecer datos telemáticos confiables e una integración fluida con el ecosistema de Plaspy. Su formato OBDII plug‑and‑play acorta el tiempo de instalación y reduce la complejidad de despliegue en grandes flotas de vehículos, mientras que la conectividad 4G LTE Cat‑1 y el almacenamiento en búfer extenso garantizan una entrega continua de datos y mínimos huecos en el historial de seguimiento. El acceso al bus CAN proporciona telemetría de vehículo validada —encendido, VIN, odómetro, nivel de combustible y DTCs— que Plaspy puede utilizar para la gestión de flotas, puntuación UBI, programación de mantenimientos y flujos de anti‑robo.

Combinado con soporte BLE 5.0 para sensores y accesorios externos, FOTA para la gestión del ciclo de vida y opciones de seguridad configurables \(MD5/AES128\), TorchX 110 ofrece una solución equilibrada para operadores que buscan un rendimiento preciso de rastreo GPS, telemetría integral y una compatibilidad sencilla con Plaspy. Ya sea que necesites seguimiento en tiempo real de alta frecuencia, almacenamiento offline robusto o telemetría ampliada a través de sensores Bluetooth, TorchX 110 ofrece las capacidades clave para escalar tus casos de uso de telemática y gestión de flotas.

