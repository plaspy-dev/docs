---
slug: /sinotrack/st_905l
id: st_905l
sidebar_label: ST-905L
sidebar_class_name: menu_item_tracker
---
# SinoTrack - ST-905L

![ST-905L](./tracker.jpg)

El SinoTrack ST-905L es un rastreador GPS robusto e impermeable, diseñado para un seguimiento fiable de vehículos y activos. Con conectividad LTE Cat-1 y 2G GSM, un receptor GNSS UBLOX UBX-G7020 de alta sensibilidad y una batería Li‑ion recargable de 3.7V, el ST-905L ofrece largos tiempos de espera y actualizaciones de posición consistentes para vehículos, motocicletas y otros activos de alto valor. Este dispositivo es compatible con Plaspy: puede configurarse para apuntar a una dirección de servidor personalizada y enviar seguimiento en tiempo real y telemetría a plataformas de terceros como Plaspy para la gestión de flotas y la monitorización anti-robo.

Diseñado para una instalación fácil, sin herramientas, el ST-905L utiliza una carcasa magnética y resistente a la intemperie para un montaje rápido en superficies metálicas. Se entrega listo para conectarse a redes celulares \(SIM no incluida\) y admite comandos de configuración vía SMS para APN y ajustes del servidor, lo que simplifica la activación al integrarlo con Plaspy u otras plataformas en la nube. El resultado es un rastreador GPS fiable que se adapta a usos de gestión de flotas comerciales y anti-robo personales, al tiempo que admite monitorización escalable basada en web y app.

## Key Highlights

- Compatible con Plaspy: configure la IP del servidor y el APN para enviar ubicación y telemetría a Plaspy para seguimiento en tiempo real e informes.
- Batería de larga duración: batería Li‑ion recargable integrada de 3.7V \(listada como 10000 mAh\) con tiempo de espera de hasta 120 días en modos de bajo consumo.
- Rendimiento GNSS robusto: módulo UBLOX UBX‑G7020 con alta sensibilidad \(~-159 dBm\) y precisión GPS típica de alrededor de 5 m.
- Conectividad celular global: LTE Cat‑1 y 2G GSM \(850/900/1800/1900 MHz\) para una amplia compatibilidad regional donde existan redes.
- Carcasa impermeable y magnética para montaje rápido sin herramientas en vehículos y activos; compacto y ligero para instalaciones discretas.
- Plataforma SinoTrack Pro incluida gratis; puede reconfigurarse para enviar datos a Plaspy para la gestión centralizada de flotas y alertas.
- Provisionamiento sencillo por SMS: la IP del servidor, el puerto y el APN pueden actualizarse mediante comandos SMS — ideal para activación en campo sin herramientas adicionales.

## Cómo funciona con Plaspy

La integración con Plaspy es sencilla porque el ST-905L admite la IP/puerto del servidor y el APN mediante comandos SMS. Para usar el rastreador con Plaspy, inserte una SIM con capacidad de datos, configure el APN del dispositivo y cambie la dirección del servidor del dispositivo al endpoint de ingestión de Plaspy \(reemplazando el servidor predeterminado de SinoTrack\). Una vez dirigido a Plaspy, la unidad envía paquetes de ubicación y telemetría sobre LTE Cat‑1 o 2G, habilitando seguimiento en tiempo real, geocercas, historial de rutas y alertas dentro del panel de Plaspy y la aplicación móvil.

- Actualizaciones de ubicación y telemetría en tiempo real enviadas a Plaspy sobre TCP/UDP \(configure IP y puerto del servidor por SMS\).
- Alertas de batería y pérdida de energía enviadas a Plaspy para flujos de trabajo de anti-robo y monitorización remota.
- Geocercas, historial de rutas e informes por dispositivo visibles en Plaspy una vez configurados los detalles del servidor y el APN.
- Funciona con las funciones estándar de gestión de flotas en Plaspy; campos de telemetría adicionales compatibles con Plaspy \(monitoreo de combustible, ignición, control del inmovilizador, sensores Bluetooth\) pueden utilizarse si una variante de rastreador instalada expone esas interfaces o si hay módulos externos disponibles.
- Los ajustes predeterminados de la plataforma SinoTrack \(45.112.204.242:8090\) pueden reemplazarse con los detalles del servidor de Plaspy utilizando comandos SMS documentados.

## Overview Técnica

| Fabricante y Modelo | SinoTrack ST-905L |
| --- | --- |
| Conectividad | LTE Cat‑1 y 2G GSM |
| Bandas | LTE Cat1 \(modelo específico\), GSM 850 / 900 / 1800 / 1900 MHz |
| Alimentación y Batería | Batería Li‑ion recargable de 3.7V \(listada como 10000 mAh\); cargador de pared 110–220V de entrada, 5V/1A de salida |
| Interfaces | Se requiere SIM; configuración vía SMS para APN y servidor. Otras I/O no especificadas en la página del producto. |
| GNSS | UBLOX UBX‑G7020; sensibilidad ~-159 dBm; precisión GPS típica ≈ 5 m |
| TTFF \(Tiempo para la Primera Fija\) | Frío ~45 s; Templado ~35 s; Caliente ~1 s |
| Bluetooth | No especificado |
| Gestión Remota | Comandos de configuración por SMS para APN, IP/puerto del servidor e IMEI donde sea compatible; plataforma SinoTrack Pro incluida \(gratuita\) |
| Forma y Durabilidad | Carcasa magnética, impermeable para montaje en vehículos/activos; dimensiones 100 × 80 × 25 mm; peso ≈ 45 g |
| Ambiental | Temperatura de operación -20°C a +55°C; almacenamiento -40°C a +85°C; humedad 5–95% sin condensación |
| Tiempo de Espera | Hasta 120 días \(según intervalo de reporte y configuración\) |

## Casos de Uso

- Gestión de flotas — visibilidad continua de la ubicación para flotas de vehículos ligeros y motos mediante los paneles y reportes de Plaspy.
- Protección anti-robo — montaje magnético discreto y monitorización remota ayudan a detectar movimientos no autorizados y pérdidas de energía.
- Historial de rutas y cumplimiento — capturar registros de viaje y eventos de geocerca para supervisión del conductor y verificación de rutas.
- Seguimiento de activos para equipos — amplia autonomía de la batería y carcasa impermeable lo hacen adecuado para despliegues estacionales o remotos.
- Instalaciones temporales y alquileres — montaje magnético sin herramientas permite acoplar/desacoplar rápidamente sin modificar el vehículo.

## Por qué elegir este rastreador con Plaspy

El SinoTrack ST-905L ofrece una combinación equilibrada de hardware resistente, larga autonomía y rendimiento GNSS probado que se integra de forma limpia con plataformas de terceros como Plaspy. Su soporte para LTE Cat‑1 garantiza una uplink celular fiable para el seguimiento en tiempo real y telemetría, mientras que la configuración por SMS y un servidor predeterminado documentado facilitan redirigir el dispositivo al endpoint de ingestión de Plaspy. Para la gestión de flotas y despliegues anti-robo donde la instalación discreta, la autonomía extendida y la fiabilidad de la precisión de posicionamiento importan, el ST-905L es una opción práctica de rastreador GPS compatible con Plaspy.

Antes de un despliegue a gran escala, verifique el soporte de redes locales para LTE Cat‑1/2G y confirme cualquier registro de IMEI o requisitos regulatorios en su país \(SinoTrack señala que puede ser necesario el registro en mercados selectos\). También asegúrese de que la cuenta de Plaspy y los detalles de conexión al servidor estén disponibles para que los instaladores configuren el APN del dispositivo y la IP/puerto del servidor durante la activación. Con esas comprobaciones, el ST-905L se integra en Plaspy para proporcionar seguimiento en tiempo real, telemetría e información centrada en la flota sin necesidad de suscripción a la plataforma SinoTrack si elige dirigir los datos a Plaspy.

