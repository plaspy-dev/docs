---
slug: /autofon/d_maiak/features
id: d_maiak-features
sidebar_label: Features
title: AutoFon - D-Маяк Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del baliza GPS AutoFon D‑Маяк y su integración con Plaspy para rastreo y alertas
keywords:
  - AutoFon D-Маяк
  - características AutoFon D Beacon
  - rastreador GPS D-Маяк
  - baliza GPS AutoFon
  - compatibilidad D-Маяк Plaspy
  - rastreador oculto para vehículo
  - rastreador GPS de larga duración
  - búfer caja negra
  - rastreador GPS GLONASS
  - reporte GPRS SMS
---

# AutoFon - Características del D‑Маяк

Esta página resume las características públicas del AutoFon D‑Маяк (D‑Beacon) cuando se utiliza con Plaspy. Describe las capacidades prácticas del rastreador, cómo se reflejan en Plaspy y los escenarios típicos donde el dispositivo resulta útil. El contenido se enfoca en detalles no sensibles y orientados al usuario para ayudarle a decidir si este modelo se ajusta a sus necesidades de monitoreo o antirrobo con Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Cuando proceda, confirme las funciones específicas del equipo, el comportamiento del firmware y las opciones de configuración con la documentación de AutoFon antes del despliegue.

## Resumen de funciones

El AutoFon D‑Маяк es un rastreador compacto y de bajo consumo con posicionamiento combinado GLONASS y GPS, diseñado para despliegues discretos y de larga duración. Soporta múltiples modos de reporte y dispone de un buffering robusto en el equipo y detección de eventos para preservar la telemetría durante interrupciones de conectividad.

- Operación autónoma prolongada, adecuada para instalaciones discretas y activos remotos.
- Navegación combinada GLONASS y GPS para mejorar la fiabilidad de la posición.
- Reporte configurable por GPRS con fallback por SMS para mantener la comunicación.
- Detección de eventos a bordo mediante acelerómetro digital e entradas dedicadas para alarmas y SOS.
- Amplio búfer tipo caja negra para almacenar telemetría no enviada durante cortes de red.

## Características principales del AutoFon - D‑Маяк

- Gran autonomía de batería al usar dos pilas CR123A, pensado para operaciones discretas y prolongadas.
- Navegación con doble constelación GLONASS y GPS para obtener soluciones de posición más rápidas y robustas.
- Monitoreo por GPRS con reporte alternativo por SMS configurable.
- Acelerómetro digital con detección de eventos para arranques de movimiento, impactos y otros eventos cinemáticos.
- Microbotón SOS y entrada de alarma externa para alerta inmediata.
- Canal auxiliar universal para soportar acciones de control remoto en instalaciones que lo requieran.
- Búfer interno tipo caja negra capaz de almacenar un gran número de paquetes GPRS no enviados.
- Micrófono integrado y etiqueta RF de presencia del propietario para telemetría situacional adicional.

## Cómo funcionan estas funciones con Plaspy

Cuando se integra con Plaspy, el D‑Маяк informa la posición y la telemetría de eventos a la plataforma de monitoreo para que los operadores puedan ver la ubicación en tiempo real, el historial y las alertas en paneles y líneas de tiempo. Plaspy detecta automáticamente los mensajes compatibles del rastreador y muestra el estado del equipo y los eventos junto con otros activos de la flota.

- Las actualizaciones de ubicación en tiempo real y el historial se muestran en los mapas y líneas de tiempo de Plaspy según los intervalos de reporte configurados del dispositivo.
- Las alarmas, SOS y eventos del acelerómetro se envían a Plaspy como alertas para notificación al operador y flujos de trabajo de incidentes.
- Los paquetes almacenados en el búfer del dispositivo se entregan a Plaspy tras la restauración de la conectividad, preservando la continuidad del historial.
- Donde la configuración del equipo y la instalación lo permitan, se pueden emitir desde Plaspy comandos remotos al canal auxiliar y otras acciones de control.
- El estado de monitorización de audio y la presencia de la etiqueta RF, cuando están habilitados, aparecen en Plaspy como telemetría suplementaria para mayor conciencia situacional.

## Casos de uso típicos

- Instalaciones antirrobo discretas en vehículos que requieren colocación oculta y larga duración de batería para recuperación rápida.
- Protección de carga valiosa y contenedores donde el amplio buffering evita pérdida de datos durante el tránsito.
- Vigilancia de activos remotos en ubicaciones sin alimentación externa fiable.
- Monitoreo discreto de objetos personales o animales cuando se necesita un rastreador compacto.
- Seguimiento complementario a nivel de unidad dentro de soluciones de monitoreo de flotas más amplias que utilicen paneles de Plaspy.

## Notas sobre disponibilidad de funciones

- El conjunto de funciones depende del firmware y la revisión de hardware; las características listadas pueden variar según el lote de producción.
- Algunas funciones requieren cableado específico de instalación o alimentación externa y pueden no estar disponibles en todas las ubicaciones.
- Las diferencias regionales en redes móviles y regulaciones pueden afectar el comportamiento de SMS y GPRS; confirme compatibilidad para su área de servicio.
- Las opciones de configuración del fabricante, como intervalos de reporte, umbrales de alarma y permisos de comando remoto, determinan cómo se comportan las funciones en la práctica.
- Consulte siempre la documentación oficial de AutoFon para obtener los detalles técnicos y de seguridad más recientes.

## Por qué usar Plaspy con estas funciones

Combinar el AutoFon D‑Маяк con Plaspy permite a las organizaciones convertir la telemetría de larga autonomía y con detección de eventos en monitoreo accionable. Plaspy consolida actualizaciones de ubicación, eventos de alarma e historial almacenado en paneles unificados, facilitando la gestión de recuperaciones, la revisión de cronologías de incidentes y la coordinación de respuestas entre equipos.

Para obtener más información sobre cómo se integra este rastreador en flujos de trabajo de monitoreo de flotas y activos, visite el sitio web de Plaspy en https://www.plaspy.com. Para las características específicas más recientes del dispositivo, el comportamiento del firmware y detalles de implementación, verifique la información en el sitio del fabricante https://www.autofon.ru/.
