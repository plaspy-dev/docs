---
slug: /arknav/rx_12
id: rx_12
sidebar_label: RX-12
sidebar_class_name: menu_item_tracker
---
# ArkNav - RX-12

![RX-12](https://app.plaspy.com/r/Trackers/arknav/rx12/tracker.png)

El RX-12 LTE-M a prueba de agua, rastreador GPS para vehículos, es un dispositivo compacto y robusto diseñado para una implementación fiable compatible con Plaspy en automóviles, furgonetas, camiones, remolques y maquinaria pesada. Con un módulo celular LTE-M/2G integrado, un receptor GNSS de alta sensibilidad u‑blox y antenas integradas en una carcasa IP67 tolerante al calor, el RX-12 ofrece seguimiento y telemetría en tiempo real de forma estable, minimizando la complejidad de la instalación y la exposición a manipulaciones.

Diseñado para la gestión de flotas, la recuperación de vehículos y usos exigentes en campo, el RX-12 admite informes basados en eventos \(velocidad, movimiento, encendido\), actualizaciones OTA de firmware y configuración, y una protección de alimentación reforzada para reducir el mantenimiento y el tiempo de inactividad. Cuando está conectado a Plaspy, el RX-12 se convierte en un punto final sencillo y escalable para flujos de trabajo de antirrobo, telemetría y PAYD.

## Aspectos clave

- Compatible con Plaspy: soporte nativo para la integración de telemetría y seguimiento en tiempo real basado en eventos con paneles de Plaspy y alertas.
- Conectividad confiable: LTE Cat‑M1 \(LTE‑M\) con respaldo 2G EGPRS cuádri‑banda para una amplia cobertura celular y operación de área amplia de bajo consumo.
- Diseño robusto y de perfil bajo: carcasa IP67 a prueba de agua y polvo, tolerante al calor hasta 85 °C, con antenas integradas para una instalación discreta y menor manipulación.
- Disparadores de eventos para informes eficientes: informes configurables sobre velocidad, movimiento y encendido para conservar datos y asegurar actualizaciones oportunas.
- Protección de alimentación robusta: protección ante sobretensiones de hasta 60 V; módulo ISO‑7637 opcional para entornos eléctricos ruidosos.
- Gestión remota: actualizaciones OTA de firmware y configuración para reducir visitas en campo y mantener las unidades actualizadas.
- Flexibilidad de interfaz de vehículo: entradas configurables de activo‑alto/activo‑bajo y dos salidas, con soporte opcional de relé inmovilizador para escenarios de antirrobo y control remoto.

## Cómo funciona con Plaspy

El RX-12 transmite lecturas de posición GNSS y telemetría a través de LTE‑M o 2G hacia la plataforma en la nube de Plaspy, donde la ubicación, el estado y los datos de sensores se procesan en tiempo real. Plaspy ingiere lecturas de posición, eventos del acelerómetro y estados de entradas/salidas para impulsar funciones de gestión de flotas, alertas e informes históricos. Los informes basados en eventos \(velocidad, movimiento o encendido\) aseguran que Plaspy reciba actualizaciones oportunas mientras se minimiza el tráfico de datos innecesario.

- Actualizaciones de ubicación y telemetría en tiempo real entregadas a Plaspy vía LTE‑M / EGPRS.
- Detección de encendido y movimiento para arranques/paradas de viaje inteligentes, registro de eventos del conductor y monitoreo del estado de puertas y alarma cuando están conectadas a las entradas del vehículo.
- Monitoreo de combustible y otra telemetría del vehículo posible cuando los sensores del vehículo están conectados a las entradas del RX‑12 \(soporta configuraciones de activo alto y activo bajo\).
- Control remoto del inmovilizador a través de las salidas del RX‑12 \(relé inmovilizador opcional\), permitiendo a Plaspy apoyar flujos de trabajo de antirrobo.
- Sensores Bluetooth: el RX‑12 no incluye Bluetooth, pero Plaspy puede incorporar datos de sensores Bluetooth de gateways compatibles u otros dispositivos integrados en Plaspy en despliegues mixtos.

## Resumen técnico

| Conectividad | LTE Cat‑M1 \(LTE‑M\) con respaldo 2G EGPRS cuádri‑banda |
| --- | --- |
| Bandas / Red | LTE‑M y EGPRS cuádri‑banda \(soporte de bandas regional específico por variante; consultar hoja de datos\) |
| GNSS | Receptor GNSS u‑blox con asistencia AGPS y alta sensibilidad para fijaciones de posición rápidas |
| Carcasa / Ambiental | IP67 a prueba de agua y polvo; tolerante al calor hasta 85 °C; carcasa compacta de perfil bajo con antenas integradas |
| Alimentación y Protección | Con alimentación del vehículo; protección ante sobretensiones hasta 60 V; módulo de protección ISO‑7637 opcional disponible |
| Interfaces y E/S | Entradas con soporte activo‑alto y activo‑bajo; dos salidas configurables; soporte opcional de relé inmovilizador |
| Sensores y Memoria | Acelerómetro de ±16G \(predeterminado\) para detección de movimiento e impactos; 2 MB de memoria Flash para respaldo de datos local \(~5000 ciclos de escritura/borrado\) |
| SIM y Puertos | Nano SIM \(push‑push\); puerto Micro USB disponible como interfaz RS232 de depuración |
| Bluetooth | No se reporta Bluetooth integrado \(use Plaspy para combinar datos de sensores Bluetooth de gateways compatibles u otros dispositivos integrados en Plaspy\) |
| Gestión remota | Actualizaciones OTA de firmware y configuración compatibles para mantenimiento remoto |
| Forma y Montaje | Rastreador compacto para vehículos adecuado para coches, remolques, maquinaria pesada y montaje oculto para reducir manipulaciones |
| Accesorios | Opcional cable de configuración USB, caja de protección ISO‑7637, relé inmovilizador; hoja de datos del fabricante disponible |

## Casos de uso

- Gestión de flotas para vehículos ligeros y pesados: seguimiento en tiempo real, reproducción de rutas y registro de eventos del conductor a través de Plaspy.
- Seguimiento de remolques y maquinaria pesada: protección IP67 y tolerancia a altas temperaturas para equipos al aire libre y uso off‑road.
- Recuperación de vehículos y antirrobo: montaje de perfil bajo y discreto con control de inmovilizador opcional y alertas de Plaspy.
- Despacho de entregas y coordinación de personal: disparadores de eventos \(encendido/movimiento/velocidad\) simplifican las actualizaciones de ubicación para flujos de trabajo de reparto.
- Seguro PAYD \(pago por uso\) y telemetría basada en el uso: datos precisos de viajes y eventos del acelerómetro para informes de uso cuando se integra con Plaspy.

## Por qué elegir este rastreador con Plaspy

Emparejar el RX‑12 con Plaspy ofrece a operadores de flotas y proveedores de servicios un punto final resistente y de bajo mantenimiento para el seguimiento y telemetría en tiempo real. La carcasa robusta IP67, las antenas integradas y la protección contra sobretensiones del RX‑12 reducen la complejidad de la instalación y las devoluciones de servicio, mientras que LTE‑M con respaldo 2G mejora la cobertura para flotas móviles. Plaspy aprovecha los informes basados en eventos, los eventos del acelerómetro y los estados de E/S del RX‑12 para ofrecer ideas operativas para la gestión de flotas, recuperación antirrobo y seguros basados en uso sin necesidad de frecuentes visitas en campo.

Para implementaciones que requieren protección eléctrica reforzada o control de inmovilizador, los accesorios ISO‑7637 y de relé opcionales amplían la idoneidad del RX‑12 para entornos de alta tensión y flujos de seguridad. El soporte de actualizaciones OTA mantiene las unidades actualizadas y simplifica la resolución de incidencias de forma remota. Junto con Plaspy, el RX‑12 ofrece una solución fiable y escalable para organizaciones que buscan un rendimiento preciso del rastreador GPS, telemetría robusta y monitorización de vehículos optimizada.

