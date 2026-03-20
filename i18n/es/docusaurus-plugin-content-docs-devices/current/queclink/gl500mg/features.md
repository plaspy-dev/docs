---
slug: /queclink/gl500mg/features
id: gl500mg-features
sidebar_label: Features
title: QuecLink - GL500MG Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador QuecLink GL500MG y su compatibilidad práctica con Plaspy
keywords:
  - QuecLink GL500MG características
  - QuecLink GL500MG rastreador GPS
  - GL500MG características Plaspy
  - GL500MG duración de batería
  - GL500MG rastreador IP67
  - GL500MG LTE Cat M1 NB1
  - QuecLink rastreador de activos
  - GL500MG sensor de movimiento
  - GL500MG sensor de temperatura
  - GL500MG búfer de mensajes
---

# QuecLink - GL500MG: Características

Esta página describe el contexto público de funcionalidades del QuecLink GL500MG cuando se utiliza con Plaspy. Resume las capacidades operativas del rastreador, los tipos de telemetría y eventos que el dispositivo genera, y la forma en que esa información aparece dentro de Plaspy para el monitoreo de activos y la gestión de lotes.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión del hardware, la variante regional y el método de instalación. Cuando es útil, esta página hace referencia a las características del fabricante incluidas en la descripción del dispositivo, pero los clientes deben confirmar el comportamiento y las opciones específicas de firmware con la documentación y notas de versión de QuecLink.

## Resumen de la funcionalidad

El GL500MG es un rastreador de activos robusto y de larga duración diseñado para entregar posiciones GNSS periódicas y telemetría de sensores internos para monitoreo en áreas extensas. Prioriza el bajo consumo de energía, la cobertura celular fiable y sensores ambientales y de movimiento básicos para soportar despliegues prolongados con mantenimiento mínimo.

- Modos de batería con duración de varios años, adecuados para reportes infrecuentes y largos intervalos entre mantenimientos.
- Carcasa resistente con clasificación IP67, antenas internas y montaje magnético opcional para activos exteriores e inventario en patios.
- Conectividad celular LTE Cat M1 y NB1 con retroceso a EGPRS para cobertura amplia en redes modernas y antiguas.
- Sensores integrados como temperatura, luz y un acelerómetro de 3 ejes para detección de movimiento y reportes de activación.
- Posicionamiento GNSS mediante un receptor u-blox integrado para telemetría de ubicación precisa y actualizaciones consistentes.
- Gran almacenamiento local de mensajes y soporte interno de geocercas para preservar eventos y posiciones cuando la conectividad es intermitente.

## Funciones principales del QuecLink - GL500MG

- Módem celular LTE Cat M1 y NB1 con retroceso a EGPRS 2G para conectividad en áreas amplias y compatibilidad con redes heredadas.
- Receptor GNSS u-blox integrado que ofrece posicionamiento de alta sensibilidad y precisión práctica para rastreo de activos.
- Sensores internos de temperatura y luz para telemetría ambiental básica.
- Acelerómetro interno de 3 ejes utilizado para detección de movimiento y reportes de activación que ayudan a ahorrar batería.
- Diseño de batería de larga duración con perfiles de espera de varios años según la frecuencia de reportes y la configuración.
- Búfer local de mensajes capaz de almacenar un gran número de reportes para su envío cuando se restablece la conectividad.
- Soporte para regiones de geocercas internas para alertas basadas en eventos e informes según ubicación.
- Compatibilidad con el protocolo QuecLink @Track sobre TCP, UDP y SMS que permite integraciones estándar con plataformas servidoras.

## Cómo funcionan estas funciones con Plaspy

Plaspy ingiere actualizaciones de posición, lecturas de sensores y eventos de movimiento del GL500MG y los presenta en mapas, líneas de tiempo y flujos de trabajo de alertas. Plaspy detecta automáticamente los protocolos compatibles del rastreador y asigna la telemetría entrante a los paneles de dispositivo e informes históricos para que los equipos puedan monitorear activos casi en tiempo real.

- Las posiciones GNSS en tiempo real e históricas son visibles en Plaspy para revisar rutas e historial de ubicaciones.
- Los eventos de movimiento y los reportes de activación del acelerómetro aparecen como indicadores de actividad útiles para la protección contra robos y el monitoreo de desplazamientos.
- Las lecturas de temperatura y luz se integran en Plaspy para monitoreo ambiental y reglas de alerta.
- Los mensajes en búfer y los reportes programados del dispositivo son procesados por Plaspy cuando la conectividad se restablece, preservando la continuidad de los registros.
- La autodetección de protocolos y el soporte de TCP, UDP y SMS en Plaspy simplifican la incorporación de dispositivos y reducen la carga de configuración.
- Plaspy puede correlacionar la telemetría del GL500MG con flujos telemáticos más amplios cuando sistemas integrados suministran contexto adicional de vehículos u operaciones.

## Casos de uso típicos

- Monitoreo de cadena de frío y almacenamiento donde la telemetría interna de temperatura y las alertas ayudan a proteger mercancías sensibles.
- Rastreo de inventario en bodegas y patios que se beneficia de la larga duración de la batería y la carcasa resistente para despliegues de bajo mantenimiento.
- Monitoreo de carga y contenedores a lo largo de rutas extensas usando cobertura LTE M1 NB1 con retroceso a 2G para mantener visibilidad.
- Protección de activos de alto valor y vigilancia antirrobo mediante detección de movimiento, buffering y alertas por geocerca.
- Monitoreo de infraestructura o equipos remotos donde la larga autonomía en espera y la construcción durable reducen las visitas de campo.

## Notas sobre disponibilidad de funciones

- QuecLink ha emitido un aviso de fin de vida para el GL500MG; el GL530MG se indica como la alternativa recomendada para nuevas compras.
- La versión de firmware, la configuración del dispositivo y las variantes regionales de hardware afectan los reportes disponibles, el comportamiento de los sensores y el soporte de bandas celulares.
- La instalación física y las opciones de montaje pueden influir en el rendimiento GNSS y la calidad del enlace celular debido al uso de antenas internas.
- Las certificaciones y aprobaciones por operador varían según la región y la variante del modelo; verifique la documentación del fabricante y del operador para bandas y certificaciones soportadas.
- Los clientes existentes del GL500MG conservan las disposiciones de garantía y soporte indicadas por QuecLink; confirme los detalles de elegibilidad con el fabricante.

## Por qué usar Plaspy con estas funciones

Usar el GL500MG con Plaspy ofrece una manera práctica de convertir posiciones GNSS de larga duración y la telemetría de sensores a bordo en información operativa. Plaspy organiza los datos de ubicación y eventos entrantes en mapas, alertas e informes para que equipos de logística, administradores de patios y propietarios de activos reduzcan la frecuencia de visitas, detecten movimientos no deseados y monitoreen condiciones ambientales básicas sin revisiones manuales constantes.

Para obtener más información sobre Plaspy y cómo se presenta y gestiona la telemetría del GL500MG, visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware, variantes regionales e información oficial de soporte, verifique los detalles con el fabricante en https://www.queclink.com/ ya que las funciones del dispositivo y el comportamiento del firmware pueden cambiar con el tiempo.
