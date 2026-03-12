---
slug: /gosafe/g2c_db
id: g2c_db
sidebar_label: G2C-DB
sidebar_class_name: menu_item_tracker
---
# Gosafe - G2C-DB

![G2C-DB](./tracker.png)

El G2C-DB es un rastreador GPS robusto y de larga vida, diseñado para el monitoreo a largo plazo de activos y despliegues compatibles con Plaspy. Diseñado para remolques, contenedores y equipos remotos, el G2C-DB combina posicionamiento multi-constelación y gestión optimizada de la energía para proporcionar años de operación en modo de espera desde un paquete de batería reemplazable de 9000mAh. Como rastreador compatible con Plaspy, ofrece ubicación fiable, telemetría de movimiento y memoria de almacenamiento y reenvío que se integran de forma limpia en Plaspy para la gestión de flotas, monitoreo antirrobo y programas de activos de bajo mantenimiento.

Construido para entornos adversos, el G2C-DB combina sellado IPX7, resiliencia a golpes y vibraciones de grado militar y tolerancia a temperaturas industriales con conectividad celular \(variantes GSM/GPRS cuád-banda y LTE Cat-1\), informes por SMS/TCP y FOTA. Sus modos de reporte flexibles —periódico, basado en movimiento y seguimiento activo configurable— lo hacen apto tanto para un seguimiento pasivo de larga duración como para actualizaciones más frecuentes, casi en tiempo real, cuando lo exijan los flujos de trabajo alimentados por Plaspy.

## Aspectos clave

- Larga duración de batería: paquete de batería reemplazable de 9000mAh \(6 × CR123\) con hasta 10 años de standby \(un informe diario\) para un mantenimiento mínimo.
- Compatible con Plaspy: integra ubicación y telemetría en Plaspy para una gestión y generación de informes consolidadas de la flota.
- GNSS multi-constelación: GPS y Beidou con receptor de 56 canales, SBAS y GPS asistido para una ubicación fiable.
- Robusto y a prueba de intemperie: clasificación IPX7, además de resiliencia a golpes y vibraciones conforme a estándares militares de EE. UU. para despliegues en entornos adversos.
- Informes flexibles: modos periódicos, basados en movimiento y de seguimiento activo para equilibrar las necesidades de seguimiento en tiempo real y la duración de la batería.
- Inteligencia a bordo: CPU ASR1603, acelerómetro 3D y memoria flash local para ~1,000 registros y capacidad de almacenamiento y reenvío.
- Respaldo celular y mensajería: GSM/GPRS cuád-banda, LTE Cat-1 \(variantes EMEA/LatAm\), soporte de datos SMS y TCP para una entrega robusta de telemetría.

## Cómo funciona con Plaspy

El G2C-DB transmite fijaciones de posición y telemetría de movimiento a Plaspy mediante su enlace celular \(TCP o SMS\). Plaspy procesa las coordenadas GNSS, marcas de tiempo, eventos de movimiento del acelerómetro interno y el estado del dispositivo, como el estado de la batería y la salud de la conectividad. Dado que el rastreador admite reporting periódico y basado en movimiento, así como seguimiento activo configurable, los administradores del sistema pueden ajustar los intervalos de reporte en Plaspy para optimizar entre las necesidades de seguimiento en tiempo real y la longevidad de la batería.

- Actualizaciones de ubicación y telemetría en tiempo real \(frecuencia de reporte configurable para seguimiento cercano en tiempo real\)
- Eventos de movimiento y golpes del acelerómetro 3D a bordo para antirrobo y detección de manipulación
- Memoria de almacenamiento y reenvío \(~1,000 registros\) para una entrega de datos resiliente en áreas con cobertura intermitente
- Informe del estado de la batería y operación de larga duración para activos desatendidos
- Soporte FOTA para mantenimiento remoto y actualizaciones de protocolo cuando se integra con Plaspy

## Visión general técnica

| Conectividad | GSM/GPRS cuád-banda; LTE Cat‑1 \(variantes EMEA y LatAm\); SMS y TCP data; ranura nano‑SIM interna; antenas GPS y celulares internas |
| --- | --- |
| Bandas | GSM/GPRS cuád-banda; variantes LTE Cat‑1 para EMEA y LatAm \(conjuntos de bandas regionales específicos por modelo\) |
| Energía y batería | Paquete de batería reemplazable de 9000 mAh \(6 × CR123\). Corriente en modo sleep profundo 3.0 µA @ 3.0 V; seguimiento activo ~70 mA. En espera típico \(TCP\): ~120 meses \(1 msg/día\), ~55 meses \(2 msg/día\), ~20 meses \(4 msg/día\) |
| Interfaces | Acelerómetro 3D a bordo; memoria flash interna \(~1,000 registros\) para almacenamiento y reenvío; nano‑SIM interna; sin conectores externos \(antenas internas\) |
| GNSS | GNSS multi-constelación: GPS y Beidou; receptor de 56 canales con SBAS y GPS asistido. Precisión típica ±2.5 m \(cielo despejado\); sensibilidad -162 dBm; TTFF frío ≈32 s, caliente ≈1 s |
| Bluetooth | No especificado en la descripción del dispositivo |
| Gestión remota | FOTA \(firmware over-the-air\); configuración remota vía canales TCP/SMS |
| Ambiental y mecánico | Clasificación IPX7 a prueba de agua; resistencia a golpes y vibraciones conforme a estándares militares de EE. UU.; rango de temperatura de operación -20 °C a +70 °C |
| Factor de forma | 129 × 49 × 22 mm; 125 g; carcasa sellada para montaje en vehículos y activos |

## Casos de uso

- Seguimiento a largo plazo de remolques y contenedores, donde la intervención mínima y una batería de larga duración son fundamentales para la gestión de la flota.
- Monitoreo de equipos remotos para construcción, agricultura y flotas de alquiler, usando informes basados en movimiento para detectar uso no autorizado o manipulación.
- Flujos de trabajo antirrobo y de seguridad: alertas impulsadas por el acelerómetro más almacenamiento y reenvío aseguran que los eventos queden registrados y se transmitan cuando haya cobertura.
- Inventario de activos y auditorías periódicas de ubicación para activos dispersos en patios logísticos y depósitos, donde verificaciones diarias o semanales son suficientes.

## Por qué elegir este rastreador con Plaspy

Elegir el G2C-DB como rastreador GPS compatible con Plaspy ofrece un equilibrio práctico entre longevidad de la batería, resiliencia ambiental y posicionamiento preciso de múltiples constelaciones. Para la gestión de flotas y operaciones impulsadas por telemetría que priorizan una operación de bajo mantenimiento, el G2C-DB minimiza las visitas al sitio mientras proporciona ubicación fiable, eventos de movimiento y datos de estado del dispositivo en Plaspy. El soporte FOTA y el reporting por TCP/SMS simplifican el mantenimiento remoto e integración, y la memoria de almacenamiento y reenvío del dispositivo preserva la continuidad de eventos en áreas con cobertura intermitente.

Cuando se combina con Plaspy, el G2C-DB se integra en una solución escalable para el seguimiento en tiempo real, la supervisión a largo plazo de activos y el monitoreo antirrobo. Plaspy puede combinar la ubicación y la telemetría del G2C-DB con otras fuentes de datos—como sistemas de monitoreo de combustible, eventos de encendido/inmovilizador o datos de sensores Bluetooth—, donde esas entradas adicionales son proporcionadas por otros dispositivos o integraciones compatibles con Plaspy, lo que permite telemetría e información operativa integral sin comprometer las ventajas de bajo mantenimiento del G2C-DB.

