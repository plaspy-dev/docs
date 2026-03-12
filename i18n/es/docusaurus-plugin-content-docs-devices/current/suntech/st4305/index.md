---
slug: /suntech/st4305
id: st4305
sidebar_label: ST4305
sidebar_class_name: menu_item_tracker
---
# Suntech - ST4305

![ST4305](./tracker.jpg)

La serie ST4305 es un rastreador GPS para vehículos robusto, diseñado para gestores de flotas y servicios de recuperación de vehículos que requieren una infraestructura hardware compatible con Plaspy confiable. Construido para cobertura celular multi‑red \(LTE Cat M1, NB‑IoT y 2G\), la familia ST4305 ofrece seguimiento en tiempo real continuo y telemetría rica, adecuada para gestión de flotas, anti‑robo y casos de uso de seguridad.

Disponible en varias variantes \(ST4305, ST4305R y ST4305RE\), este rastreador con cable combina posicionamiento GNSS integrado, un arnés de conexión de 14 pines y reportes configurables para facilitar la integración con Plaspy y obtener información accionable sobre el vehículo, monitoreo del comportamiento del conductor y diagnósticos a distancia.

## Aspectos clave

- Rastreador GPS compatible con Plaspy con conectividad LTE Cat M1, NB‑IoT y 2G para cobertura de gran alcance y transporte de datos rentable.
- Variantes para adaptarse a necesidades de instalación: ST4305 \(I/O básico\), ST4305R \(agrega RS‑232\) y ST4305RE \(RS‑232 más provisión para antena GNSS externa\).
- Funciones telemáticas avanzadas, incluido Análisis de Patrones de Conducción \(DPA\) con Reconstrucción de Accidentes \(CR\) y detección de interferencias opcional para una mayor seguridad y revisión de incidentes.
- Detección de encendido virtual \(basada en tensión y movimiento\) y reportes configurables para respaldar la gestión de flotas, análisis del comportamiento del conductor y informes de cumplimiento.
- Interfaz cableada de 14 pines con múltiples entradas/salidas para integrarse con alarmas, circuitos de puertas/encendido y sistemas de inmovilización o alarmas de terceros.
- Batería de respaldo de 450 mAh que mantiene la telemetría y el reporte de ubicación durante pérdidas de energía para escenarios de recuperación y anti‑robo.
- Soporte para flujos de trabajo del servidor de mantenimiento y archivos/firmware descargables \(ST4305.pdf\) para acelerar la implementación y la gestión continua del dispositivo.

## Cómo funciona con Plaspy

El ST4305 se integra con Plaspy para ofrecer seguimiento en tiempo real, telemetría y generación de eventos. Plaspy recibe la ubicación y la telemetría del dispositivo enviada por el ST4305 y utiliza formatos de informe configurables para generar mapas en vivo, alertas e informes históricos en los que confían los gestores de flota para tomar decisiones operativas.

- Actualizaciones de ubicación y telemetría en tiempo real: las posiciones GNSS y los datos de movimiento se transmiten por LTE Cat M1 / NB‑IoT / 2G a Plaspy para seguimiento en vivo y reproducción de datos.
- Estado de encendido y movimiento: la detección de encendido virtual \(basada en tensión y movimiento\) permite a Plaspy determinar el estado de encendido/apagado del vehículo y activar informes o flujos de trabajo basados en el encendido.
- Alertas de geocerca y seguridad: los eventos de geocercas circulares y poligonales se reportan a Plaspy para notificaciones de infracción de geocerca y cumplimiento de la ruta.
- Eventos de choque y conducción: Análisis de Patrones de Conducción \(DPA\) y Reconstrucción de Accidentes \(CR\) pueden enviarse a Plaspy para análisis de seguridad y generación de informes de incidentes automatizados.
- Detección de interferencias y pérdida de energía: la detección opcional de interferencias y el estado de la batería de respaldo se reportan a Plaspy para supervisión anti‑robo y asistencia en la recuperación.
- Telemetría serial y opciones de antena: las variantes ST4305R/RE ofrecen salida RS‑232 para integrarse con gateways CAN/OBD2 de vehículos o módems de terceros; el modelo RE también admite una antena GNSS externa para una recepción mejorada.

## Resumen técnico

| Conectividad | LTE Cat M1 / NB‑IoT / 2G |
| --- | --- |
| Bandas | Las bandas de red no se especifican en la página del producto \(consulte ST4305.pdf hoja de datos\) |
| Energía y batería | Batería de respaldo de 450 mAh para informes ante fallo de energía |
| Interfaces | Conector cableado de 14 pines; LEDs indicativos; interfaces de antena y sensor de movimiento |
| I/O y Serial | ST4305: 4 entradas, 3 salidas, sin RS‑232  \<br>\<br>        ST4305R: 4 entradas, 3 salidas, con RS‑232  \<br>\<br>        ST4305RE: 3 entradas, 2 salidas, con RS‑232 y provisión de antena GNSS externa |
| GNSS | Posicionamiento GNSS integrado \(parámetros de rendimiento no especificados en la página del producto\) |
| Bluetooth | No indicado como integrado; las opciones de I/O e integración permiten su uso con ecosistemas de sensores externos |
| Gestión remota | Soporte de servidor de mantenimiento; firmware e archivos de integración descargables disponibles \(ST4305.pdf\) |
| Formato | Rastreador de vehículos cableado compacto para instalación fija en automóviles, camiones y vehículos de flota |

## Casos de uso

- Gestión de flotas: seguimiento en tiempo real, monitoreo del comportamiento del conductor \(frenadas bruscas, aceleración, giros\) y reportes configurables para optimizar operaciones.
- Recuperación de vehículos y anti‑robo: detección de interferencias, informes de la batería de respaldo y alertas de geocerca para acelerar las labores de recuperación.
- Seguridad e incidentes: Análisis de Patrones de Conducción \(DPA\) y Reconstrucción de Accidentes \(CR\) proporcionan evidencia y contexto para la revisión de incidentes y flujos de trabajo de seguros.
- Diagnóstico y telemetría: las variantes RS‑232 envían telemetría serial a Plaspy para integrarse con feeds de diagnóstico del vehículo y la programación de mantenimiento.
- Flujos de trabajo integrados de alarmas e inmovilizador: las salidas I/O permiten conectarse a alarmas o sistemas de inmovilización para apoyar la inmovilización remota y la disuasión de robos.

## Por qué elegir este rastreador con Plaspy

Elegir la serie ST4305 como rastreador GPS compatible con Plaspy ofrece un equilibrio entre flexibilidad de red, entradas/salidas de grado vehicular y funciones telemáticas avanzadas necesarias para operaciones modernas de flota. Su soporte multicelular \(LTE Cat M1/NB‑IoT/2G\) proporciona conectividad resiliente donde la cobertura y los costos de datos importan, mientras que el arnés cableado de 14 pines y las variantes permiten a los integradores adaptar las necesidades de serial y antena a la instalación.

Para gestores de flota enfocados en seguimiento en tiempo real, telemetría y seguridad, los informes configurables de ST4305, el soporte de eventos DPA/CR y las capacidades de geocerca alimentan los tableros y los motores de alerta de Plaspy con los datos precisos requeridos para la toma de decisiones. La batería de respaldo del dispositivo, la detección opcional de interferencias y la telemetría RS‑232 en las variantes R/RE mejoran los flujos de trabajo de anti‑robo y diagnóstico. Combinado con el firmware del fabricante, recursos de la hoja de datos \(ST4305.pdf\) y accesorios relacionados \(cables, lectores iButton, alarmas sonoras\), la serie ST4305 es una opción práctica compatible con Plaspy para una gestión de flota escalable y soluciones de seguridad de vehículos.

