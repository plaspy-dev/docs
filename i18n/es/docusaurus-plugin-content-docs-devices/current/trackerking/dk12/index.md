---
slug: /trackerking/dk12
id: dk12
sidebar_label: DK12
sidebar_class_name: menu_item_tracker
---
# TrackerKing - DK12

![DK12](./tracker.jpg)

El DK12 es un rastreador GPS robusto y multifunción diseñado para despliegues compatibles con Plaspy donde se requieren seguimiento en tiempo real fiable y medidas anti-robo robustas. Construido alrededor del módulo SIMCOM7670SA, el DK12 admite 4G Cat1 con conmutación automática a 2G y variantes opcionales Cat-M / NB‑IoT, lo que lo convierte en una opción práctica para gestión de flotas, monitoreo de vehículos de alquiler, logística y seguridad general de activos en entornos con cobertura mixta.

La construcción impermeable del dispositivo y su amplio rango de entrada de 9–90V lo hacen apto para una amplia gama de instalaciones en vehículos y activos. Con funciones orientadas al vehículo, como detección de encendido ACC, soporte de encendido virtual, corte remoto del motor y del combustible, y un informe completo de alarmas, el DK12 se integra en sistemas basados en Plaspy para ofrecer telemetría fiable, historial de rutas y mitigación de robos sin necesidad de trabajos de personalización complejos.

## Aspectos destacados

- Rastreador GPS compatible con Plaspy con conectividad 4G Cat1 y con conmutación automática a 2G para un seguimiento en tiempo real ininterrumpido.
- Funciones anti-robo orientadas a vehículos, incluido el corte remoto del motor y del combustible \(inmovilizador\) y soporte de encendido virtual.
- Amplio rango operativo \(9–90V\) y construcción impermeable para una instalación flexible en automóviles, camiones y activos móviles.
- Alarmas integrales: alarma de vibración, geocerca, avisos por exceso de velocidad y retransmisión en zonas ciegas para mejorar la fiabilidad de la cobertura.
- Reproducción de rutas históricas y estadísticas de kilometraje/cálculo del odómetro para la gestión de flotas y la generación de informes de cumplimiento.
- Compatible con protocolos de rastreador comunes \(GT06, JT808, Tianqin\) para simplificar la integración con servidores Plaspy y plataformas de terceros.
- Detección de voltaje de batería externa y telemetría para monitoreo remoto del estado eléctrico del vehículo.

## Cómo funciona con Plaspy

Cuando está conectado a Plaspy, el DK12 envía continuamente datos de ubicación y telemetría usando protocolos de rastreador estándar, lo que permite el seguimiento en tiempo real, alertas y reproducción de rutas históricas dentro del panel de Plaspy. La ingestión flexible de Plaspy admite mensajes GT06, JT808 y Tianqin, de modo que el DK12 puede transmitir fijaciones de posición, eventos de alarma y kilometraje directamente en sus flujos de trabajo de Plaspy con una configuración mínima.

- Actualizaciones de ubicación y telemetría en tiempo real para el monitoreo en vivo de la flota y la gestión de despachos.
- Informe del estado de encendido \(detección ACC y encendido virtual\) para activar alertas de Plaspy y registros de sesiones del conductor.
- Capacidad de inmovilización remota \(corte del motor y del combustible\) para respuestas anti-robo coordinadas desde Plaspy.
- Eventos de alarma \(vibración, geocerca, exceso de velocidad\) enviados a Plaspy para notificaciones inmediatas y acciones basadas en reglas.
- Telemetría de kilometraje/odómetro y voltaje de batería externa para mantenimiento preventivo y análisis de monitoreo de combustible.

## Resumen técnico

| Connectivity | 4G Cat1 con conmutación automática a 2G; Cat‑M y NB‑IoT disponibles como variantes opcionales |
| --- | --- |
| Bands | Bandas/regiones no especificadas; el dispositivo recurre a 2G cuando 4G no está disponible |
| Power & Battery | Rango de voltaje de entrada amplio 9–90V; detección de voltaje de batería externa \(no especificada batería de respaldo\) |
| Interfaces | Entrada de encendido ACC, soporte de encendido virtual, corte remoto de motor y combustible \(inmovilizador\), entradas de alarma digitales |
| GNSS | Posicionamiento GPS con ubicación en tiempo real precisa, reproducción de rutas históricas y retransmisión en zonas ciegas |
| Bluetooth | Los sensores Bluetooth no se describen para este modelo \(el uso de sensores Bluetooth depende de la configuración del sistema\) |
| Remote Management | Compatible con protocolos de rastreador comunes \(GT06, JT808, Tianqin\) para la integración de plataformas; FOTA/actualización remota no especificada |
| Form Factor | Imprimable, montaje en vehículo/activo adecuado para aplicaciones de flota y logística |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, reproducción de rutas, informes de kilometraje y alertas por exceso de velocidad para optimizar operaciones y el comportamiento del conductor.
- Anti-robo de vehículos: inmovilización mediante corte remoto del motor y del combustible, combinado con alarmas de vibración y geocerca para una respuesta rápida ante incidentes.
- Monitoreo de coches de alquiler y logística: informe de encendido, reproducción de historial y retransmisión de zonas ciegas mantienen la visibilidad en áreas con cobertura variable.
- Seguridad de activos: diseño impermeable y tolerancia de voltaje amplia permiten la instalación en remolques, equipos móviles y activos no alimentados con monitoreo de energía externo.
- Cumplimiento y mantenimiento: estadísticas de odómetro/kilometraje y telemetría de voltaje de batería soportan el mantenimiento programado y reducen el tiempo de inactividad.

## Por qué elegir este rastreador con Plaspy

El DK12 es un rastreador GPS compatible con Plaspy eficaz para organizaciones que necesitan telemetría fiable y consciente del vehículo, así como controles anti-robo. Su conectividad 4G + 2G basada en SIMCOM7670SA garantiza amplia cobertura de red y comportamiento de retroceso automático, minimizando lagunas de datos para el seguimiento en tiempo real. La detección de encendido integrada, el soporte de encendido virtual y las capacidades de inmovilizador remoto proporcionan a los equipos de operaciones un control directo para la mitigación de robos y la gestión de sesiones del conductor. La compatibilidad de protocolos con GT06, JT808 y Tianqin reduce el tiempo de integración, permitiendo incorporar dispositivos a Plaspy rápidamente sin parsers de protocolo personalizados.

Para flotas y gestores de activos centrados en la resiliencia operativa, el amplio rango de voltaje y la construcción impermeable del DK12 reducen las restricciones de instalación. Cuando se combina con las herramientas de alerta, mapeo e informes de Plaspy, el DK12 ofrece un equilibrio práctico entre telemetría, funcionalidades anti-robo y facilidad de integración. Si su despliegue requiere sensores Bluetooth, Plaspy también puede aceptar datos de sensores complementarios dentro de la arquitectura general de su solución.

