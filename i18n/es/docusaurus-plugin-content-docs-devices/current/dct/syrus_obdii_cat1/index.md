---
slug: /dct/syrus_obdii_cat1
id: syrus_obdii_cat1
sidebar_label: SYRUS OBDII-CAT1
sidebar_class_name: menu_item_tracker
---
# DCT - SYRUS OBDII-CAT1

![SYRUS OBDII-CAT1](./tracker.png)

El SYRUS OBDII-CAT1 \(Artículo # SO4G-CAT1-1809\) es un dongle telemático OBDII de instalación plug-and-play de Syrus, diseñado para vehículos de pasajeros y ligeros. Compatible con Plaspy y desarrollado para despliegues rápidos, este rastreador OBDII ofrece seguimiento en tiempo real y diagnósticos del vehículo directamente desde el puerto del vehículo, lo que permite a los gestores de flotas comenzar a recoger información de ubicación, telemetría y eventos de conducción en cuestión de minutos.

Diseñado para uso global, el OBDII-CAT1 combina un motor GPS de alta sensibilidad \(con soporte SBAS y rendimiento de hasta 2 m\) y un acelerómetro de 3 ejes con conectividad celular pentabanda para ofrecer telemática fiable para la gestión de flotas, concienciación antirobo, monitoreo de combustible y mantenimiento preventivo. Su instalación auto-configurable y diseño listo para la nube lo convierten en una opción práctica para implementaciones a escala e integración con Plaspy para visualización centralizada, alertas y flujos de trabajo basados en API.

## Key Highlights

- Instalación OBDII plug-and-play instantánea — no se requiere cableado para despliegues rápidos de flota.
- GPS de alta sensibilidad con SBAS \(WAAS/EGNOS/MSAS/GAGAN\) y rendimiento de hasta 2 metros para un seguimiento en tiempo real de alta precisión.
- Conectividad celular pentabanda \(GSM/GPRS/EDGE/UMTS/HSPA+\) para una amplia cobertura regional y entrega confiable de telemetría.
- Diagnósticos de motor completos desde OBDII: RPM del motor, nivel de combustible, temperatura del aceite y del refrigerante, posición del acelerador y otros parámetros OBD.
- Acelerómetro integrado de 3 ejes para detección de frenadas bruscas, impactos y eventos de conducción para apoyar programas de comportamiento del conductor.
- Gestión de dispositivos preparada para la nube: se autoconfigura con plataformas gateway y puede desplegarse como compatible con Plaspy para paneles y acceso API.
- Optimizado para vehículos de pasajeros y vehículos ligeros — habilita la gestión de flotas, análisis de viajes y mantenimiento preventivo a gran escala.

## Cómo funciona con Plaspy

Cuando se configura como compatible con Plaspy, el SYRUS OBDII-CAT1 transmite telemetría OBD, ubicación GNSS y eventos del acelerómetro a la nube, donde Plaspy ingiere los datos para seguimiento en tiempo real, alertas y reportes históricos. El dispositivo lee PIDs OBD estándar del vehículo, obtiene fijaciones GPS de alta sensibilidad y transmite la telemetría a través de redes celulares a su plataforma telemática. Plaspy puede entonces usar ese flujo para monitoreo de la flota, programación de mantenimiento, notificaciones antirobo e integraciones API en sistemas de back-office.

- Actualizaciones en tiempo real de ubicación y telemetría para una visibilidad continua y monitoreo de rutas.
- Diagnósticos del motor: RPM, nivel de combustible, temperatura del aceite y del refrigerante, posición del acelerador y otros parámetros OBD para monitoreo de combustible y comprobaciones de estado.
- Detección de eventos de conducción y alertas de impactos mediante el acelerómetro de 3 ejes para respaldar programas de comportamiento del conductor.
- Registros de viajes, reproducción de rutas y informes agregados para la gestión de la flota y la optimización de rutas.
- Provisionamiento remoto y diagnósticos del dispositivo a través de la gestión en la nube; se integra con paneles y APIs de Plaspy para alertas y exportación de datos.

## Visión técnica

| Conectividad | GSM / GPRS / EDGE / UMTS / HSPA+ \(pentabanda\) |
| --- | --- |
| Bandas | 850 / 900 / 1800 / 1900 / 2100 MHz \(pentabanda\) |
| Alimentación y batería | Alimentado vía puerto OBDII del vehículo \(no se especifica batería externa\) |
| Interfaces | Interfaz de enchufe OBDII para diagnóstico del vehículo; expone parámetros OBD; acelerómetro de 3 ejes integrado para detección de movimiento |
| GNSS | Motor GPS de alta sensibilidad; rendimiento de hasta 2 m; Sistemas de Mejora Basados en Satélites compatibles \(WAAS, EGNOS, MSAS, GAGAN\) |
| Bluetooth | No especificado en la descripción del fabricante |
| Gestión remota | Se autoconfigura con la plataforma gateway/nube Pegasus \(DCT\) para gestión del dispositivo, visualización de datos y acceso API; puede desplegarse como compatible con Plaspy |
| Formato | Dongle OBDII compacto para automóviles de pasajeros y vehículos ligeros — instalación plug-and-play |

## Casos de uso

- Seguimiento de flotas para automóviles de pasajeros y vehículos ligeros — ubicación en vivo, historial de rutas y análisis de viajes para mejorar la utilización.
- Diagnósticos remotos del motor y planificación de mantenimiento mediante telemetría OBD \(monitoreo de combustible, tendencias de RPM, alertas de temperatura\) para reducir el tiempo de inactividad.
- Monitoreo del comportamiento del conductor y programas de seguridad — detección de frenadas bruscas, aceleraciones rápidas e impactos mediante el acelerómetro para respaldar programas de comportamiento del conductor.
- Despliegues rápidos y de bajo costo donde la instalación OBDII plug-and-play reduce el tiempo de instalación y permite despliegues a gran escala.

## Por qué elegir este tracker con Plaspy

El SYRUS OBDII-CAT1 es un rastreador GPS práctico y fiable para operadores que necesitan seguimiento en tiempo real preciso y telemetría detallada del vehículo sin instalaciones complejas. Su combinación de posicionamiento GNSS preciso, diagnósticos OBD exhaustivos para monitoreo de combustible y salud del motor, y la detección de eventos impulsada por el acelerómetro proporciona datos accionables para la gestión de flotas y flujos de trabajo anti-robo. Cuando se integra con Plaspy, la telemetría del dispositivo pasa a formar parte de un entorno centralizado de monitorización, alertas e informes — permitiendo programación de mantenimiento, optimización de rutas y coaching de conductores desde un único panel.

Como el dispositivo es plug-and-play, las flotas pueden escalar rápidamente manteniendo bajos los costos de instalación. Para escenarios de anti-robo y flujos de trabajo de inmovilización, Plaspy puede orquestar alertas y acciones posteriores cuando se combina con sistemas del vehículo que admiten el encendido o control del inmovilizador. Y cuando se utilizan sensores a bordo adicionales o sensores Bluetooth junto con el OBDII-CAT1, Plaspy puede consolidar esos datos con la telemetría OBD para una monitorización integral de activos y vehículos. Elija el SYRUS OBDII-CAT1 para telemetría fiable, integración con Plaspy sin complicaciones y una ruta rápida hacia una mejor visibilidad de la flota y conocimiento del estado del vehículo.

