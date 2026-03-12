---
slug: /ruptela/pro5
id: pro5
sidebar_label: Pro5
sidebar_class_name: menu_item_tracker
---
# Ruptela - Pro5

![Pro5](./tracker.png)

El Pro5 de Ruptela es un rastreador GPS de grado profesional diseñado específicamente para vehículos pesados — camiones, autobuses y maquinaria especializada — y es totalmente compatible con Plaspy para telemática de flotas sin fisuras. Combinando LTE‑M con retroceso a 2G, un módulo GNSS premium de U‑blox y BLE 5.1, el Pro5 ofrece seguimiento en tiempo real fiable, telemetría detallada del vehículo y gestión remota segura necesaria para la gestión de flotas moderna y flujos de anti‑robo.

Diseñado para instalaciones exigentes, el Pro5 integra dos interfaces CAN, múltiples E/S analógicas/digitales, puertos seriales y una batería interna de respaldo en una carcasa compacta sin tornillos. Cuando se empareja con Plaspy, el Pro5 se convierte en una solución llave en mano para la ubicación en vivo del vehículo, monitoreo de combustible, identificación del conductor y detección avanzada de eventos — todo gestionable a escala mediante aprovisionamiento remoto y actualizaciones de firmware.

## Aspectos clave

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real preciso y gestión de flota en vehículos pesados.
- Conectividad LTE‑M con retroceso a 2G para una amplia cobertura celular y entrega fiable de telemetría.
- Dos puertos CAN e interfaces serial para leer datos CAN HCV \(combustible, EBS, tacógrafo y diagnósticos\).
- BLE 5.1 y soporte para accesorios de sensores, identificación del conductor y periféricos inalámbricos.
- Detección de manipulación e interferencia; batería de respaldo de 1050 mAh para mayor resiliencia ante el robo.
- Múltiples E/S \(4 DIN, 4 AIN, 4 DOUT, 1‑wire\) para integrar entradas de puertas, alarmas y sensores, y salidas de control \(integración de inmovilizador cuando el interfaz del vehículo lo permita\).
- Almacenamiento interno \(8 MB\) con ranura para tarjeta SD y comunicaciones seguras \(TLS v1.2\) para telemetría y registro.
- Opciones de firmware/configuración FOTA, SMS y USB; aprovisionamiento centralizado de dispositivos a través de Ruptela Device Center.

## Cómo funciona con Plaspy

Cuando se instala y empareja con Plaspy, el Pro5 transmite la posición GNSS, eventos del acelerómetro y telemetría del vehículo a la plataforma Plaspy para supervisión en tiempo real, geovallas, alertas e informes históricos. Plaspy ingiere datos del Pro5 obtenidos por CAN, diagnósticos por puerto serie y entradas de sensores BLE para proporcionar paneles unificados para los operadores de flota, permitiendo una toma de decisiones rápida y alertas automáticas basadas en reglas.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas por LTE‑M \(con retroceso a 2G\) para un seguimiento consistente.
- Ingesta de datos CAN: monitoreo de combustible, datos de EBS/remolque y parámetros de tacógrafo/diagnóstico transmitidos a Plaspy.
- Eventos del acelerómetro para conducción brusca, detección de accidentes y reconstrucción disponibles en los informes de Plaspy.
- Soporte BLE 5.1 para sensores Bluetooth e identificación del conductor; Plaspy puede mapear los datos de sensores BLE a activos y conductores.
- Alertas de manipulación/interferencia y registro en el dispositivo permiten notificaciones inmediatas de anti‑robo y análisis post‑evento.
- Configuración remota y actualizaciones de firmware mediante Ruptela Device Management Platform y FOTA, integradas en los flujos de aprovisionamiento de Plaspy.

## Resumen técnico

| Conectividad | LTE‑M con retroceso a 2G |
| --- | --- |
| Bandas | Bandas LTE‑M y 2G dependientes del operador \(variante dependiente\) |
| Alimentación y batería | Voltaje de operación 9–32 V DC; batería interna de respaldo de 1050 mAh |
| Interfaces | 2x CAN \(datos HCV\), 4x DIN, 4x AIN, 4x DOUT, 1‑wire, 2x RS232, 1x RS485 |
| GNSS | Módulo GNSS U‑blox; antena interna con soporte opcional para antena GNSS externa |
| Bluetooth | BLE 5.1 para sensores y identificación del conductor |
| Memoria | Memoria interna de 8 MB + ranura para tarjeta SD para registros ampliados |
| Seguridad | Detección de manipulación e interferencia; TLS v1.2 para comunicaciones seguras |
| Firmware y Gestión remota | FOTA \(GPRS\), SMS, USB; aprovisionamiento vía Ruptela Device Center y Device Management Platform |
| Factor de forma y Entorno | Caja compacta de 101 x 74 x 23 mm; rango de temperatura de operación -20 °C a +60 °C |

## Casos de uso

- Antirrobo de flota y recuperación de vehículos robados — detección de manipulación/interferencia, batería de respaldo y alertas remotas a Plaspy.
- Monitoreo de combustible y eficiencia de la flota — datos de combustible y diagnósticos derivados de CAN enviados a Plaspy para análisis de consumo.
- Monitoreo y coaching del comportamiento del conductor — datos del acelerómetro y CAN para eventos bruscos, integrados en informes de coaching.
- Monitoreo de remolques y carga — lectura de datos EBS/remolque y asociación de activos para flotas con múltiples unidades.
- Telemetría de transporte público y maquinaria pesada — tacógrafo, diagnósticos y configuración remota para la planificación de mantenimiento.

## Por qué elegir este rastreador con Plaspy

El Pro5 ofrece una combinación equilibrada de hardware robusto, interfaces de grado vehicular y comunicaciones seguras que lo hacen ideal para operadores que necesitan un rastreo GPS confiable, telemetría y medidas antirrobo integradas con Plaspy. Sus dos puertos CAN y su conjunto de E/S enriquecido permiten acceso directo al estado de ignición, parámetros de combustible y datos de remolque/EBS donde el vehículo lo soporta, habilitando un monitoreo detallado de combustible y diagnósticos sin gateways adicionales. BLE 5.1 y interfaces seriales agregan flexibilidad para sensores Bluetooth, identificación del conductor e integración de accesorios.

Para implementaciones a gran escala, la inclusión de Ruptela Device Center y Device Management Platform simplifica el aprovisionamiento, la configuración remota y las actualizaciones FOTA, reduciendo el tiempo de instalación y los costos de mantenimiento. Combinado con los paneles de Plaspy y sus alertas, el Pro5 ayuda a las flotas a mejorar la disponibilidad, reducir costos de combustible, fortalecer la protección antirrobo y obtener telemetría accionable — todo bajo una capa de comunicaciones TLS v1.2 segura. Si necesita un rastreador GPS compatible con Plaspy diseñado específicamente para vehículos pesados y datos detallados del vehículo, el Pro5 está construido para cumplir esos requisitos de forma fiable y a gran escala.

