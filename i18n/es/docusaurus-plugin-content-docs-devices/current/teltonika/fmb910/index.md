---
slug: /teltonika/fmb910
id: fmb910
sidebar_label: FMB910
sidebar_class_name: menu_item_tracker
---
# Teltonika - FMB910

![FMB910](./tracker.png)

El Teltonika FMB910 es un rastreador GPS 2G compacto, diseñado para la gestión de flotas orientada a costos y la protección de vehículos, compatible con Plaspy. Diseñado para una implementación sencilla, el FMB910 ofrece seguimiento en tiempo real fiable y datos telemétricos básicos para ayudar a flotas pequeñas y medianas a mejorar la visibilidad de las rutas, apoyar flujos anti-robo y acelerar la recuperación de vehículos robados donde las redes 2G aún están disponibles.

La unidad incluye un acelerómetro configurable de 3 ejes para la detección de impactos, Bluetooth Low Energy \(BLE\) para sensores y balizas externos, y opciones de control remoto basadas en E/S como monitoreo del bloqueo del motor e ignición. Cuando se combina con Plaspy, el FMB910 proporciona las corrientes de ubicación, eventos y sensores necesarias para impulsar alertas, informes y flujos de inmovilización remota, al tiempo que ofrece propiedad de bajo costo y fácil integración.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy para un seguimiento en tiempo real fiable y historial de ubicación.
- Diseño 2G compacto \(B2/B3/B5/B8\) optimizado para implementaciones de flota de bajo costo donde 2G está disponible.
- Acelerómetro de 3 ejes integrado con detección de impactos configurable para alertas de incidentes e investigaciones.
- Control remoto basado en I/O \(bloqueo del motor, entradas de ignición\) para apoyar flujos de anti-robo e inmovilización.
- Soporte Bluetooth Low Energy \(BLE\) para sensores y balizas externos — escenarios de temperatura, humedad, movimiento y detección magnética.
- Soporta telemetría de conducción ecológica para fomentar la eficiencia de combustible y una conducción más segura.
- Gestión remota de firmware y configuración vía Teltonika FOTA WEB \(verifique el estado del ciclo de vida del producto antes de desplegar\).

## Cómo funciona con Plaspy

El FMB910 envía la posición GPS, eventos del acelerómetro, cambios de estado de I/O y datos de sensores BLE a Plaspy en tiempo real. Plaspy asimila esos mensajes para proporcionar vistas de mapa en vivo, alertas, paneles de telemetría e informes históricos. Los integradores pueden usar reglas y flujos de trabajo de Plaspy para traducir eventos del FMB910 en acciones comerciales — por ejemplo, notificar a operaciones ante detecciones de impactos, registrar ciclos de ignición o activar procedimientos de inmovilización cuando el control remoto esté configurado y permitido.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy para supervisión e informes.
- Detección de impactos y eventos del acelerómetro para alertas de incidentes e reconstrucción.
- Estado de ignición y bloqueo del motor vía I/O del dispositivo para flujos de anti-robo e inmovilización.
- Telemetría de conducción ecológica para ayudar a las flotas a reducir el consumo de combustible y mejorar las métricas de seguridad.
- Sensores y balizas Bluetooth para monitoreo extendido de activos y entornos enviados a Plaspy.

## Visión general técnica

| Conectividad | 2G GSM \(datos celulares montados en el vehículo\) |
| --- | --- |
| Bandas | B2 / B3 / B5 / B8 \(2G GSM\) |
| Alimentación y batería | Alimentado por el vehículo; la batería de respaldo no se especifica en la descripción del producto |
| Interfaces | Entradas/salidas digitales, entrada de ignición; admite bloqueo de motor y otras medidas de control remoto basadas en I/O |
| GNSS | GPS — proporciona datos de ubicación precisos e informes de posición \(la precisión no está especificada\) |
| Bluetooth | Bluetooth Low Energy \(BLE\) para emparejarse con sensores y balizas externos |
| Gestión remota | Teltonika FOTA WEB para actualizaciones de firmware y configuración \(gestión remota del dispositivo\) |
| Formato | Rastreador compacto para vehículos destinado al monitoreo básico de flotas y uso anti-robo |
| Pedido / Embalaje | Códigos de pedido estándar y personalizados: FMB91093IN01 \(paquete estándar, Worldwide\) y FMB91093KN01 \(paquete personalizado, Worldwide\). El paquete mayorista estándar se referencia como 20 unidades FMB910 con 20 cables de alimentación I/O \(0,7 m\) y embalaje con la marca Teltonika; el contenido de una unidad puede diferir—consulte al proveedor. |
| Nota de ciclo de vida | Producto listado con marcadores de Fin de Vida \(EOL\) en la página del fabricante—verifique soporte a largo plazo y modelos sucesores recomendados antes de una implementación a gran escala. |

## Casos de uso

- Gestión de flotas para pequeñas y medianas flotas que requieren hardware de rastreador GPS rentable y reporte de ubicación en tiempo real.
- Flujos de anti-robo y recuperación de vehículos robados mediante inmovilización disparada por I/O y seguimiento de ubicación.
- Informes de incidentes y choques con detección basada en acelerómetro para apoyar investigaciones y programas de seguridad del conductor.
- Monitoreo de activos y entorno con sensores Bluetooth — carga sensible a la temperatura, detección de movimiento o alertas de manipulación magnética.
- Telemática y programas de conducción ecológica para monitorizar el comportamiento del conductor y reducir el consumo de combustible mediante telemetría accionable.

## Por qué elegir este rastreador con Plaspy

When paired with Plaspy, the Teltonika FMB910 delivers an economical path to real-time tracking, telemetry and basic remote-control features for fleets operating where 2G remains available. Its compact design, crash detection and BLE sensor support make it a practical choice for anti-theft, stolen vehicle recovery and simple asset-monitoring projects. Plaspy adds value by aggregating FMB910 location and sensor streams into dashboards, alerts and automated workflows so teams can respond faster and run safer, more efficient operations.

Antes de la compra, verifique la disponibilidad regional de la red 2G y el estado del ciclo de vida del FMB910 \(EOL\). Para despliegues que requieran soporte a largo plazo o cobertura 3G/4G, consulte al proveedor o a Teltonika sobre modelos sucesores recomendados y asegúrese de que los planes de integración con Plaspy se alineen con la vida útil del dispositivo y la estrategia de gestión.

