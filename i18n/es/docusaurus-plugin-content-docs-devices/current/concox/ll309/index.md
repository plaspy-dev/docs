---
slug: /concox/ll309
id: ll309
sidebar_label: LL309
sidebar_class_name: menu_item_tracker
---
# Concox - LL309

![LL309](./tracker.png)

El LL309 es un rastreador GPS compacto, compatible con Plaspy, diseñado para carga refrigerada, entrega de paquetes y protección de activos sensibles donde el monitoreo ambiental continuo es crucial. Combinando posicionamiento de múltiples fuentes \(GPS + BDS + LBS\) con un sensor integrado de temperatura y humedad, el LL309 ofrece ubicación precisa y telemetría ambiental a través de LTE Cat.1 para un seguimiento en tiempo real y alertas confiables a lo largo de la cadena de frío y la logística de alto valor.

El dispositivo está optimizado para entornos logísticos exigentes: protección IP67, antenas GNSS y Bluetooth internas, gestión de energía en múltiples modos y retención de datos robusta para periodos sin conectividad. La integración con Plaspy permite que los equipos de operaciones alimenten ubicación, temperatura/humedad, manipulación y estado de la batería en paneles de gestión de flotas y flujos de trabajo anti‑robo, mientras que la configuración local por BLE y la exportación vía Type‑C simplifican la implementación y el análisis posterior al viaje.

## Aspectos clave

- Rastreador GPS compatible con Plaspy que ofrece seguimiento en tiempo real y telemetría ambiental para la cadena de frío y la logística de paquetes.
- Sensor integrado de temperatura y humedad que proporciona monitoreo continuo de las condiciones y alertas de excepción para proteger productos perecederos.
- Enlace celular LTE Cat.1 para transmisiones de datos puntuales; almacena en caché hasta 20,000 registros cuando no hay cobertura y exporta vía USB Type‑C.
- Carcasa robusta con IP67 y amplio rango de temperaturas de operación \(–20°C a +70°C\) adecuada para carga refrigerada y activos exteriores.
- Batería Li‑Po recargable de 2,500 mAh; hasta 30 días con 1 actualización por hora; modos Timing, Intelligent y Power‑saving.
- Configuración local por BLE 5.1 y antenas internas reducen la complejidad de instalación y aceleran la integración con Plaspy.
- Capacidad multi‑alarma: excepciones de temperatura/humedad, detección de manipulación \(sensor de luz\), alerta de vibración y notificaciones de batería baja para acción inmediata.

## Cómo funciona con Plaspy

Al desplegarse, el LL309 transmite la ubicación y la telemetría ambiental a Plaspy a través de LTE Cat.1 para seguimiento en tiempo real y alertas automatizadas. Plaspy recibe las coordenadas derivadas del GNSS y las lecturas de los sensores, y aplica conjuntos de reglas configurables y notificaciones para la gestión de flotas, la monitorización de la cadena de frío y respuestas ante robos. Si se interrumpe la cobertura celular, el LL309 almacena localmente las lecturas y las sube automáticamente cuando la conectividad se restablece o permite una exportación masiva mediante la interfaz Type‑C para análisis forense.

- Actualizaciones en tiempo real de ubicación y telemetría a Plaspy vía LTE Cat.1 para visibilidad continua.
- Alertas de excepción de temperatura y humedad enviadas de inmediato a las reglas y canales de notificación de Plaspy.
- Detección de manipulación \(sensor de luz\), vibración y batería baja enviados como eventos para flujos de trabajo de antirrobo y mantenimiento.
- Caché offline de hasta 20,000 registros más 5,000 entradas de búfer GPS; exportación masiva vía Type‑C para recuperación de datos posterior al viaje e informes de cumplimiento.
- Configuración local por BLE 5.1 usando la app Jimi IoT Lab, Tracksolid Pro, SMS o herramientas de PC para una rápida puesta en marcha con ajustes de integración de Plaspy.

## Resumen técnico

| Posicionamiento | GPS, BDS, LBS; precisión &lt;2.5 m CEP; sensibilidad de seguimiento -148 dBm; sensibilidad de adquisición -168 dBm; TTFF arranque en caliente ~1 s, arranque en frío ≤32 s |
| --- | --- |
| Conectividad celular | LTE Cat.1 \(bandas FDD B2/B4/B5/B7/B12/B14/B17/B25/B26/B66; TDD B41\) |
| Alimentación y batería | Batería Li‑Po recargable de 2500 mAh; hasta 30 días con 1 actualización por hora; modos Timing, Intelligent y Power‑saving |
| Memoria y almacenamiento | Hasta 20,000 entradas de datos exportables; 5,000 entradas de búfer GPS para caché sin señal |
| Interfaces y sensores | USB Type‑C, ranura Nano‑SIM, antenas GNSS y Bluetooth internas, sensor de luz, sensor de temperatura y humedad integrado, BLE 5.1 para configuración local |
| Rendimiento GNSS | Posicionamiento multifuente \(GPS + BDS + LBS\), seguimiento de alta sensibilidad y TTFF rápido para una ubicación fiable en entornos logísticos |
| Bluetooth | BLE 5.1 para configuración local \(aplicación Jimi IoT Lab\) y posible integración de sensores Bluetooth |
| Indicadores | Estado LED: GNSS \(Azul\), Batería \(Blanco\), Celular \(Verde\) |
| Aspectos mecánicos y ambientales | Dimensiones 100 × 60 × 15 mm; peso 108 g; rango de temperatura de operación –20°C a +70°C; humedad de operación 0–100%; con clasificación IP67 |

## Casos de uso

- Protección de carga en cadena de frío: telemetría continua de temperatura y humedad con alertas de Plaspy ante desviaciones durante el tránsito.
- Entrega de productos perecederos: monitorización ambiental a nivel de paquete para alimentos, productos farmacéuticos y biológicos.
- Seguimiento de activos de alto valor: ubicación, detección de manipulación y vibración alimentan flujos de trabajo antirrobo de Plaspy para una respuesta rápida.
- Logística con cobertura intermitente: retención de datos confiable y exportación vía Type‑C para cumplimiento y trazabilidad cuando se restablece la conectividad.
- Envíos de última milla y multi‑modalidad: tamaño compacto para colocar fácilmente dentro de paquetes, contenedores o compartimentos refrigerados.

## Por qué elegir este rastreador con Plaspy

El LL309 es un rastreador GPS de uso específico compatible con Plaspy, dirigido a equipos logísticos que requieren tanto ubicación como telemetría ambiental en una unidad compacta. Su enlace LTE Cat.1 soporta seguimiento en tiempo real, mientras que la caché offline robusta y la exportación vía Type‑C mantienen la continuidad de datos para auditorías y análisis. Con robustez IP67, antenas internas y BLE 5.1 para una configuración local simple, el LL309 facilita la instalación y mantiene la carga sensible visible y protegida. Las alarmas integradas —excepciones de temperatura/humedad, manipulación, vibración y batería baja— permiten alertas accionables de Plaspy que mejoran el cumplimiento de la cadena de frío y la respuesta ante robo.

Aunque el LL309 se centra en la telemetría ambiental, la plataforma de Plaspy también admite características más amplias de gestión de flotas, como flujos de trabajo basados en el encendido, monitoreo de combustible y control del inmovilizador cuando se combina con rastreadores de grado vehicular. Para operaciones que requieren monitoreo continuo de condiciones junto con un rastreo GPS preciso y una retención de datos confiable, el LL309 ofrece una opción centrada y fiable para integrarse en su gestión de flotas de Plaspy y en el ecosistema de antirrobo de Plaspy.

