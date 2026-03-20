---
slug: /coban/bn_403c/features
id: bn_403c-features
sidebar_label: Features
title: Coban - BN-403C Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Coban BN-403C y su integración con Plaspy para seguimiento y alertas
keywords:
  - Funciones Coban BN-403C
  - Rastreador GPS Coban BN-403C
  - BN-403C Plaspy
  - Funciones BN-403C
  - Rastreador GPS vehículo Coban
  - Alarmas Coban BN403C
  - Funciones rastreador GPS Coban
  - Respaldo de batería BN-403C
  - Rastreador LTE 4G BN-403C
  - Seguimiento vehicular Coban
---

# Coban - Características del BN-403C

Esta página ofrece un resumen público de las funcionalidades del Coban BN-403C y de cómo estas capacidades se exponen cuando el equipo se utiliza con Plaspy. Se enfoca en funciones orientadas al usuario, valor operativo y flujos de trabajo prácticos que los gestores de flotas y responsables de vehículos pueden esperar al integrar el BN-403C en Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware del dispositivo, la revisión de hardware, el método de instalación y la implementación del fabricante. Para detalles actuales del equipo consulte la documentación y las notas de versión del fabricante antes de desplegarlo.

## Resumen de características

El BN-403C es un rastreador compacto para vehículos diseñado para instalación oculta y monitorización continua. Su combinación de conectividad celular, rendimiento GNSS y alimentación cableada con batería de respaldo permite reportes de posición y notificaciones de eventos fiables para uso en flotas y antirobo.

- Reporte de ubicación en tiempo real mediante LTE 4G con retroceso a 2G para mantener conectividad en distintas redes.
- Posicionamiento GNSS de alta sensibilidad con precisión típica alrededor de cinco metros, adecuado para seguimiento vehicular práctico.
- Alimentación cableada para 12V–24V y batería recargable de respaldo de 3.7V 300mAh para seguir reportando durante cortes de energía.
- Conjunto de alarmas y entradas de evento: encendido (ACC), apertura de puertas, choque, exceso de velocidad, movimiento, geocerca, SOS y batería baja.
- Opciones de control remoto como inmovilizador y corte remoto de combustible o alimentación mediante relés y accesorios, para respuesta antirobo.
- Bluetooth para configuración local y armado/desarmado automático por inducción que simplifican la puesta en marcha y soportan flujos basados en proximidad.

## Funciones principales del Coban - BN-403C

- Conectividad LTE 4G con retroceso a 2G para mayor cobertura celular y telemetría en tiempo real.
- Receptor GNSS de alta sensibilidad (reportado −165 dBm) con precisión de posición típica cercana a 5 metros.
- Soporte de alimentación vehicular cableada para sistemas 12V–24V con batería interna de respaldo de 3.7V 300mAh.
- Entradas y salidas discretas para alarmas: monitoreo de ACC, detección de puertas abiertas, alarma por choque, entrada SOS y alerta de batería baja.
- Soporte de inmovilizador remoto y corte remoto de combustible o alimentación mediante relé o accesorio de relé para respuesta ante robo.
- Bluetooth integrado para configuración local y flujos automáticos de armado/desarmado por inducción.
- Soporte de transporte TCP, UDP y SMS, lo que permite flexibilidad en la entrega de telemetría hacia plataformas back-end.
- Factor de forma compacto pensado para instalación oculta en vehículos y operación continua en flotas.

## Cómo estas funciones funcionan con Plaspy

Cuando usted conecta el BN-403C a Plaspy, el equipo transmite datos de ubicación y eventos que Plaspy utiliza para construir mapas en vivo, alertas y reproducción histórica. Plaspy ingiere posiciones y eventos discretos para soportar monitoreo, notificaciones y flujos operativos. La configuración del dispositivo puede manejarse localmente por Bluetooth o administrarse de forma central según las decisiones de despliegue.

- Las actualizaciones de posición en vivo aparecen en los mapas de Plaspy para visibilidad y monitorización en tiempo real de los vehículos.
- Eventos de alarma como encendido, apertura de puertas, choque, geocerca y SOS se reportan a Plaspy para generar notificaciones y activar flujos automáticos.
- El reporte de la batería de respaldo mantiene a Plaspy informado durante la pérdida de alimentación del vehículo, de modo que el historial y las alertas se mantengan continuos.
- Acciones de control remoto como inmovilizador o corte de alimentación mediante relé pueden emitirse desde Plaspy cuando la instalación y los accesorios lo permiten.
- Las rutas históricas y las líneas de tiempo de eventos en Plaspy permiten a los operadores revisar movimientos pasados y secuencias de alarmas para investigaciones e informes.

## Casos de uso típicos

- Gestión de flotas con seguimiento continuo, monitoreo de utilización y reproducción de historial de rutas.
- Protección antirobo para vehículos particulares, flotas de alquiler y recuperación financiera con alarmas y control remoto de inmovilizador.
- Visibilidad logística donde el posicionamiento GNSS fiable y el retroceso celular ayudan a mantener conocimiento de ubicación.
- Monitoreo de alquiler y financiación con detección de movimiento y alertas por geocerca para control de activos.
- Respuesta remota a incidentes usando reportes SOS y notificaciones de alarma encaminadas a través de Plaspy.
- Despliegues que requieren instalación oculta y batería de respaldo para mantener reportes durante intentos de manipulación o cortes de energía.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante y las revisiones de hardware pueden cambiar las funciones disponibles o el comportamiento de las alarmas.
- Algunas funciones requieren accesorios opcionales, como relés o sensores externos para monitoreo de combustible o soporte de sirena.
- Las variantes regionales de bandas celulares y la disponibilidad de redes pueden afectar la cobertura LTE y el comportamiento del retroceso a 2G.
- El cableado de instalación y la integración con el vehículo determinan qué entradas y funciones de control remoto estarán disponibles.
- Consulte las notas de versión y la documentación del fabricante para la sintaxis exacta de comandos, compatibilidad de accesorios y pasos de configuración.

## Por qué usar Plaspy con estas funciones

Usar el Coban BN-403C con Plaspy combina la telemetría y el conjunto de alarmas orientadas al vehículo del rastreador con una plataforma centralizada para visibilidad, alertas y análisis histórico. Plaspy presenta ubicación en tiempo real, eventos discretos y recorridos históricos en interfaces web y móviles para que los operadores puedan monitorear flotas, responder a alarmas y ejecutar acciones de control remoto desde un único punto.

Si usted desea conocer más sobre Plaspy y cómo puede gestionar dispositivos BN-403C, visite https://www.plaspy.com. Para detalles más recientes del fabricante, notas de firmware y compatibilidad de accesorios, confirme las especificaciones en el sitio oficial de Coban https://www.coban.net/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
