---
slug: /coban/bn_501
id: bn_501
sidebar_label: BN-501
sidebar_class_name: menu_item_tracker
---
# Coban - BN-501

![BN-501](./tracker.png)

El BN-501 es un rastreador GPS compacto, de estilo joya, diseñado para seguridad personal discreta y seguimiento de activos de forma oculta. Compatible con Plaspy desde el momento de su instalación, el BN-501 combina GPS, posicionamiento asistido por WiFi, BLE 5.0 y comunicaciones celulares en múltiples redes \(GSM/GPRS, NB‑IoT y LTE Cat M\) para proporcionar actualizaciones de ubicación confiables, alarmas en el dispositivo y modos de energía configurables para una larga duración de la batería.

El BN-501 es ideal para protección personal, rastreo de mascotas y monitoreo de activos discreto donde la ocultación y la comodidad son importantes. Su alarma de ayuda SOS, alerta de golpes y movimientos y opciones de configuración BLE facilitan la integración con Plaspy para seguimiento en tiempo real, telemetría y alertas sin sacrificar la comodidad o el estilo del usuario.

## Principales características

- Rastreador GPS wearable compatible con Plaspy diseñado para protección personal y de activos de forma discreta.
- Conectividad en múltiples redes: GSM/GPRS, NB‑IoT y LTE Cat M para una cobertura amplia y opciones de bajo consumo.
- Posicionamiento preciso con GPS, asistencia de WiFi y BLE 5.0 para entornos interiores y escenarios de proximidad.
- Perfiles de energía múltiples \(Tiempo real, Inteligente, Ahorro de energía\) para equilibrar el seguimiento en tiempo real y una mayor duración de la batería.
- Alarma de ayuda SOS integrada y múltiples tipos de alarma \(batería baja, golpe, movimiento, geocerca\) para notificaciones inmediatas de incidentes.
- Formato compacto en estilo pulsera/joya \(≈50 g\) para un uso cómodo y alto grado de ocultación.
- Configuración en campo sencilla vía Bluetooth o comandos SMS y transporte de datos TCP/UDP a Plaspy.

## Cómo funciona con Plaspy

Cuando se empareja con Plaspy, el BN-501 transmite datos de posición y telemetría a la plataforma de Plaspy mediante TCP, UDP o SMS. Plaspy procesa las fijaciones GPS con asistencia de WiFi y datos de proximidad derivados de BLE, aplica la lógica de alarmas y ofrece seguimiento en tiempo real, mapeo y alertas a dashboards, apps móviles y APIs. Los modos de funcionamiento configurables del BN-501 permiten a Plaspy optimizar la frecuencia de reporte para cada caso de uso: actualizaciones de alta frecuencia para monitoreo activo o intervalos que ahorran batería para una ocultación a largo plazo.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy vía TCP/UDP o SMS.
- Alarma de ayuda SOS y reenvío inmediato de alertas a Plaspy para flujos de trabajo de emergencia.
- Alertas de movimiento, golpes y geocerca aparecen como eventos en Plaspy para flujos de trabajo anti‑robo y seguridad del personal.
- La configuración por Bluetooth y el soporte BLE 5.0 permiten la configuración del dispositivo y funciones basadas en proximidad a través de apps integradas con Plaspy.
- El nivel de batería y alertas de batería baja alimentan la telemetría de Plaspy para mantenimiento proactivo o programación de reemplazo.

## Visión técnica

| Conectividad | GSM/GPRS, NB‑IoT y LTE Cat M |
| --- | --- |
| Bandas | LTE Cat M / NB‑IoT bandas B1, B3, B5 |
| Alimentación y batería | Batería de litio-ion recargable de 3.8 V, 240 mAh; hasta 375 horas en modo de espera \(condiciones típicas\) |
| Interfaces | Llave de deslizamiento inductiva \(activar/desactivar\), configuración BLE 5.0, soporte de comandos SMS, transporte de datos TCP/UDP |
| GNSS | Posicionamiento GPS; sensibilidad −165 dBm; precisión típica ≈ 5 m; TTFF frío 45 s, cálido 35 s, caliente 1 s |
| Bluetooth | BLE 5.0 para configuración e interacciones de proximidad |
| Gestión remota | Configuración de la app Bluetooth, comandos de configuración por SMS, informes TCP/UDP; manuales descargables y videos de instalación |
| Formato | Terminal compacto tipo pulsera/joya, modelo 501, aprox. 50 g |
| Ambiental | Rango de funcionamiento −20°C a +45°C; Almacenamiento −40°C a +85°C; Humedad 5%–95% sin condensación |

## Casos de uso

- Seguridad personal y cuidado de personas mayores: dispositivo wearable discreto para mayores que envía alertas SOS y de movimiento a Plaspy para supervisión por el cuidador.
- Protección y supervisión de niños: dispositivo en estilo joya que ofrece seguimiento en tiempo real discreto y alertas de geocerca para los tutores a través de Plaspy.
- Rastreo de mascotas y accesorios: se puede colocar en collares o adornos de bolsos para monitorear discretamente mascotas o artículos personales.
- Seguridad del personal de forma discreta: wearable oculto para personal de campo donde los rastreadores visibles son imprácticos, alimentando telemetría a Plaspy para respuesta a incidentes.
- Ocultación de activos en vehículos o equipaje: monitoreo discreto de objetos de valor con alertas de movimiento y geocerca para respuesta anti‑robo.

## Por qué elegir este rastreador con Plaspy

El BN-501 ofrece un equilibrio entre ocultamiento, conectividad y eficiencia de la batería, lo que lo convierte en un rastreador GPS compatible con Plaspy adecuado para escenarios personales y de activos ligeros. Su soporte multi-red \(incluyendo NB‑IoT y LTE Cat M\) y la configuración basada en BLE simplifican el despliegue, mientras que la alarma de ayuda SOS y el conjunto de eventos \(golpe, movimiento, geocerca y batería baja\) proporcionan la telemetría y alertas necesarias para un seguimiento en tiempo real confiable y flujos de trabajo anti‑robo. Para organizaciones que utilizan Plaspy para gestión de flotas o paneles de telemetría, el BN-501 añade una opción wearable donde el factor de forma compacto y la discreción son prioridades.

Nota sobre IO especializado: el BN-501 está diseñado como un wearable personal y no incluye salidas dedicadas de encendido o inmovilizador. Sin embargo, Plaspy puede combinar la telemetría del BN-501 \(ubicación, movimiento, batería\) con otros dispositivos compatibles con Plaspy que proporcionen encendido, inmovilización o monitorización de combustible para soluciones integrales de gestión de flota.

