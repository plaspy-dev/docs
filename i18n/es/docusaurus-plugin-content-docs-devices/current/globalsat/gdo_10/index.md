---
slug: /globalsat/gdo_10
id: gdo_10
sidebar_label: GDO-10
sidebar_class_name: menu_item_tracker
---
# GlobalSat - GDO-10

![GDO-10](./tracker.jpg)

El GDO-10, oscilador disciplinado GNSS basado en OCXO, está diseñado para entregar una referencia de tiempo y frecuencia de grado de laboratorio con sincronización GNSS. Compatible con Plaspy por diseño para monitoreo e integración, el GDO-10 proporciona una salida de 1 pulso por segundo \(1PPS\) de alta precisión y una salida cuadrada de 10 MHz sincronizada por bucle de fase derivada de un OCXO interno y un receptor GNSS sensible que admite GPS, GLONASS y Galileo. La alimentación de antena activa integrada de +5.0 V simplifica la instalación y garantiza una adquisición de señal fiable para tareas críticas de sincronización.

Ideal para entornos que demandan temporización estable y sincronizada por GNSS—tales como estaciones base 5G, comunicaciones por satélite LEO, bancos de pruebas de laboratorio y despliegues de infraestructura a gran escala—el GDO-10 combina hardware de precisión con una interfaz sencilla hacia plataformas de temporización y telemetría como Plaspy. Aunque no es un rastreador GPS para vehículos destinado a la gestión de flotas o al uso anti-robo, el GDO-10 añade una fuente de temporización compatible con Plaspy a cualquier arquitectura de telemetría o monitoreo que requiera sincronización en tiempo real e informes de estado.

## Principales características

- Basado en OCXO para una excelente estabilidad de frecuencia a corto plazo con disciplining GNSS para la precisión a largo plazo.
- Salida de 1PPS de alta precisión para sincronización temporal a nivel de segundo, adecuada para la marcação de tiempo y la sincronización en telecomunicaciones.
- Salida cuadrada de 10 MHz en fase, sincronizada con 1PPS, para referencia de frecuencia en sistemas de prueba y medida.
- Receptor GNSS integrado que admite GPS, GLONASS y Galileo con alimentación de antena activa de +5.0 V integrada para una instalación simple.
- Compatible con Plaspy para integración en paneles de control de telemetría y flujos de trabajo de monitoreo en tiempo real que rastrean la salud de la sincronización.
- Diseñado para laboratorio, medición en líneas de producción y despliegues de infraestructura a gran escala donde la fiabilidad de la temporización es crítica.
- Interfaces eléctricas simples hacen que el GDO-10 sea fácil de integrar con equipos de red, instrumentos de rack y pasarelas de monitoreo.

## Cómo funciona con Plaspy

Cuando se utiliza junto con Plaspy, el GDO-10 se convierte en un punto final de temporización gestionado dentro de su ecosistema de telemetría y monitoreo. Dado que la unidad genera salidas de tiempo y frecuencia bien conocidas \(1PPS y 10 MHz\), Plaspy puede ingerir el estado de sincronización y métricas de salud a través de una pasarela de telemetría o un dispositivo intermedio de telemetría que exponga las señales de estado del GDO-10. Este enfoque permite a los operadores ver en tiempo real la calidad de la temporización, el estado de bloqueo GNSS y la salud de la antena junto con otras telemetrías distribuidas como rastreadores de activos y sensores de flotas.

- Actualizaciones en tiempo real de temporización y telemetría \(a través de una pasarela de telemetría o interfaz de monitoreo que lea las señales del GDO-10\).
- Estado de sincronización 1PPS y calidad de bloqueo para una verificación precisa de la marca temporal.
- Monitoreo de la referencia de frecuencia de 10 MHz para equipos en el dominio de frecuencia y sistemas de prueba.
- Indicadores de constelación GNSS y de potencia/estado de la antena \(GPS, GLONASS, Galileo\).
- Integración de alarmas e informes compatibles con Plaspy cuando se usa con una interfaz de monitoreo compatible o un adaptador de E/S.

## Resumen técnico

| Modelo | GDO-10 |
| --- | --- |
| Tecnología | Oscilador disciplinado GNSS basado en OCXO |
| Soporte GNSS | GPS, GLONASS, Galileo |
| Salidas | 1PPS \(alta precisión\), salida cuadrada de 10 MHz \(en fase con 1PPS\) |
| Alimentación de antena | Alimentación de antena activa +5.0 V |
| Alimentación y Batería | Se requiere alimentación externa; batería de respaldo no especificada |
| Interfaces | Salidas estándar de frecuencia/tiempo \(1PPS, 10 MHz\); interfaz de monitoreo/telemetría no especificada |
| Precisión GNSS | Precisión a largo plazo disciplinada por GNSS; estabilidad a corto plazo proporcionada por OCXO |
| Bluetooth | No especificado / no incluido |
| Gestión remota | No especificado — la integración se logra a través de una pasarela externa de telemetría/monitoreo |
| Formato | Unidad de temporización de laboratorio/banco o infraestructura para instalación en entornos de prueba, telecomunicaciones y producción |

## Casos de uso

- Sincronización de estaciones base 5G: proporciona referencias estables de 1PPS y 10 MHz para redes de radio sensibles al tiempo.
- Comunicaciones por satélite LEO: temporización precisa para la coordinación de uplink/downlink y la sincronización de la carga útil.
- Pruebas y medición en laboratorio: funciona como reloj de referencia para instrumentación, marcado de tiempo y tareas de calibración.
- Temporización y sincronización en líneas de producción: garantiza temporización repetible para sistemas de prueba de alto rendimiento y automatización de mediciones.
- Distribución de tiempo a gran escala: actúa como reloj maestro disciplinado por GNSS para sistemas de temporización conectados y hubs de telemetría.

## Por qué elegir este rastreador con Plaspy

El GDO-10 no es un rastreador GPS convencional para la gestión de flotas de vehículos, el control anti-robo o el monitoreo de combustible; es, en cambio, un dispositivo de temporización de precisión disciplinado por GNSS que es compatible con Plaspy para telemetría y gestión de sincronización. Elija el GDO-10 con Plaspy cuando necesite una referencia de tiempo y frecuencia confiable y de alta estabilidad que pueda ser monitorizada y reportada en una plataforma centralizada. La combinación ofrece:

- Fiabilidad: la estabilidad a corto plazo del OCXO más el disciplining GNSS proporcionan un comportamiento de temporización consistente y predecible requerido por sistemas de telecomunicaciones y satelitales.
- Escalabilidad: múltiples unidades GDO-10 pueden integrarse en una red de telemetría gestionada por Plaspy para monitorizar el rendimiento de la temporización entre sitios y dispositivos.
- Información en tiempo real: con una pasarela de monitoreo, Plaspy puede presentar el estado de bloqueo, la calidad de la temporización y alarmas relevantes para los equipos de operaciones.
- Facilidad de integración: salidas estándar 1PPS y 10 MHz y alimentación de antena de +5V simplifican la interfaz con instrumentos existentes y redes de distribución.
- Versatilidad: apto para laboratorios, entornos de producción y grandes proyectos de infraestructura donde la sincronización precisa es un requisito fundamental.

Para organizaciones que confían en una temporización GNSS-sincronizada con precisión—ya sea para telecomunicaciones, operaciones satelitales o mediciones de precisión—el GDO-10 ofrece una solución compatible con Plaspy que prioriza la integridad de la temporización y la visibilidad operativa. Póngase en contacto con su especialista en integración de Plaspy para planificar la pasarela de telemetría o la interfaz que expondrá las métricas de temporización y salud del GDO-10 en sus paneles de control y alertas de Plaspy.

