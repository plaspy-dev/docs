---
slug: /lk_gps/lk720_2g/protocol
id: lk720_2g-protocol
sidebar_label: Protocol
title: LK-GPS - LK720-2G Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del rastreador LK GPS LK720 2G para uso e integración con Plaspy
keywords:
  - protocolo LK GPS LK720 2G
  - protocolo GPS LK720 2G
  - protocolo LK720 2G Plaspy
  - protocolo de comunicación LK720 2G
  - protocolo de rastreo LK720 2G
  - compatibilidad Plaspy LK720 2G
  - protocolo rastreador LK GPS
  - rastreo vehicular LK720 2G
  - rastreador inmovilizador LK GPS
  - configuración SMS LK720 2G
---

# LK-GPS - Protocolo LK720-2G

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador mini relay LK-GPS LK720-2G con la plataforma Plaspy. Aquí se explica cómo se comunica el dispositivo con Plaspy, qué debe configurar y verificar para asegurar el envío de reportes y los flujos de control remoto.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo en el LK720-2G puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta guía se concentra en lo que suele esperarse en despliegues comunes y qué validar al integrar el dispositivo con Plaspy.

## Visión general del protocolo

El protocolo del LK720-2G define cómo el rastreador envía datos de posición, telemetría, alertas de estado y confirmaciones básicas de comandos a un endpoint en la nube. Para la compatibilidad con Plaspy, la vista pública del protocolo se centra en la entrega fiable de coordenadas GPS, estados de batería y alarmas, notificaciones de choque y movimiento, y en el uso opcional de SMS como respaldo para configuración y consultas.

- Permite que el rastreador reporte ubicación, hora y telemetría diagnóstica al endpoint de Plaspy para seguimiento en vivo e histórico.
- Transmite eventos de alarma y de choque para que Plaspy pueda mostrar alertas y activar flujos de trabajo.
- Transporta señales simples de control remoto y cambios de estado del relé para flujos de inmovilizador cuando el dispositivo y Plaspy lo admiten.
- Soporta la configuración de parámetros y consultas vía SMS como fallback cuando la conectividad de datos es limitada.
- Funciona sobre canales de transporte comunes para que el rastreador pueda alcanzar Plaspy desde redes GSM 2G y mantener telemetría persistente.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un endpoint unificado y determina automáticamente el protocolo del rastreador basándose en los patrones de conexión y de carga útil. En la mayoría de los casos, si el LK720-2G apunta a Plaspy y está configurado correctamente, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor de Plaspy es 54.85.159.138 y está disponible como destino alterno para la configuración del equipo.
- El puerto es 8888 y Plaspy utiliza este mismo puerto para todos los dispositivos compatibles.
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y la configuración del usuario.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de la plataforma.

## Transporte y conexión

Las opciones de conexión afectan la fiabilidad con que el LK720-2G alcanza Plaspy y cómo operan los mecanismos de respaldo. La unidad puede enviar su telemetría por el canal de datos celulares a Plaspy o usar SMS para configuración y consultas limitadas si no hay datos disponibles.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como host de reporte según la preferencia del instalador.
- El equipo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte que mejor se adapte al comportamiento de la red y del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas.
- El fallback por SMS se utiliza comúnmente para la configuración de parámetros y consultas de estado cuando los datos 2G son intermitentes o no están disponibles.
- Verifique la compatibilidad de red para GSM 2G en su región para asegurar la conectividad del dispositivo hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades LK720-2G pueden cambiar los campos disponibles, el comportamiento de las alarmas y los comandos soportados; confirme la versión de firmware del dispositivo al diagnosticar problemas.
- Las revisiones de hardware pueden alterar el comportamiento de periféricos como tiempos de relé o el cableado de entradas; consulte la guía de cableado del dispositivo para detalles de instalación.
- Los conjuntos de parámetros del fabricante y los nombres de comandos SMS pueden variar según firmware y builds regionales; siempre contraste con la documentación del fabricante.
- La elección de transporte entre UDP y TCP puede afectar la semántica de entrega y los reintentos sobre redes celulares.
- La compatibilidad con Plaspy depende de que el dispositivo reporte al host y puerto correctos y de que el rastreador exponga los campos de telemetría esperados.
- Para comandos remotos avanzados o flujos de inmovilizador, confirme que el firmware del dispositivo exponga los controles necesarios y que estas funciones estén permitidas por la normativa local.

## Por qué importa entender el protocolo

Conocer el protocolo de comunicación ayuda a los instaladores y administradores a configurar el LK720-2G para que reporte de forma fiable a Plaspy, a resolver problemas de conectividad y a entender cómo aparecerán la telemetría y las alarmas en el panel. Tener una comprensión básica del protocolo reduce el tiempo de integración y mejora la fiabilidad operativa a largo plazo.

- Asegura que el dispositivo apunte al endpoint y a los ajustes de transporte correctos para que los datos se reciban de forma consistente.
- Facilita la resolución de problemas comunes —por ejemplo telemetría faltante, alarmas ausentes o fallos en el control del relé— al orientar el diagnóstico hacia red, firmware o configuración.
- Aclara el papel del fallback por SMS para configuración y diagnóstico cuando los canales de datos no están disponibles.
- Orienta los pasos de validación de firmware y hardware antes de un despliegue a gran escala.
- Reduce la mala configuración al alinear las expectativas del instalador con lo que Plaspy requiere para la detección automática del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el LK720-2G con Plaspy ofrece una vía sencilla para obtener ubicación en tiempo real, gestión de alarmas y control remoto básico para flotas pequeñas y propietarios particulares. La plataforma de Plaspy ingiere la telemetría del rastreador y presenta seguimiento en vivo, rutas históricas, estado de batería y notificaciones de alarma en interfaces web y móviles, mientras que el fallback por SMS mantiene disponibles las configuraciones y consultas esenciales en escenarios de baja conectividad.

Para saber más sobre Plaspy y cómo soporta los rastreadores LK-GPS, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que verifique la documentación específica y las notas de firmware más recientes en el sitio del fabricante https://www.lk-gps.com.
