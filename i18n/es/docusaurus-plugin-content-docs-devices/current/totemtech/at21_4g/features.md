---
slug: /totemtech/at21_4g/features
id: at21_4g-features
sidebar_label: Features
title: Totemtech - AT21-4G Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador solar Totemtech AT21-4G y su integración con Plaspy para monitoreo remoto de activos
keywords:
  - Totemtech AT21-4G
  - funciones Totemtech AT21-4G
  - rastreador GPS Totemtech AT21-4G
  - rastreador solar AT21-4G
  - compatibilidad AT21-4G Plaspy
  - rastreadores compatibles con Plaspy
  - rastreador GPS solar
  - rastreador de activos remoto
  - seguimiento de remolques y contenedores
  - rastreador LTE para activos
---

# Totemtech - Características del AT21-4G

Esta página ofrece un resumen público enfocado en las funciones del Totemtech AT21-4G y en cómo sus capacidades se utilizan con Plaspy para el seguimiento remoto de activos y la supervisión de flotas. Destaca las funciones principales que puede esperar cuando un AT21-4G está desplegado y reporta a Plaspy, con énfasis en el valor operativo práctico más que en detalles de configuración a bajo nivel.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales, método de instalación y la implementación del fabricante. Use esta página como una guía general sobre compatibilidad con Plaspy e intención funcional, y consulte la documentación del fabricante para obtener detalles técnicos actualizados y específicos del dispositivo.

## Resumen de funciones

El AT21-4G es un rastreador GPS 4G resistente, con carga solar, diseñado para despliegues prolongados en remolques, contenedores, activos ferroviarios, equipos mineros y otros activos remotos o estacionarios. Combina una carcasa duradera y gran capacidad de batería con opciones de reporte y entradas sensoriales configurables para soportar operación prolongada sin supervisión.

- Panel solar integrado y batería Li-polímero de 10,000 mAh para operación autónoma extendida sin alimentación cableada.
- Posicionamiento multi-GNSS para mejorar tiempos de obtención de posición y precisión, adecuado para rastreo de activos y reproducción histórica.
- Conectividad celular LTE Cat 1 con conmutación automática a modos celulares anteriores y transporte de datos flexible mediante UDP, TCP o SMS.
- Carcasa robusta IP67 con opciones de instalación sencillas y accesorios opcionales como imanes removibles para montaje expuesto al aire libre.
- Entradas y salidas configurables y soporte de sensores, incluyendo sensores de temperatura 1-wire, entrada analógica y E/S digitales para telemetría y monitoreo de eventos.

## Características principales del Totemtech - AT21-4G

- Carga solar más batería interna de gran capacidad para despliegues prolongados donde no hay alimentación DC disponible.
- Soporte multi-GNSS para GPS, BeiDou, GLONASS, Galileo y sistemas de augmentación relacionados para mejorar el posicionamiento.
- Transporte de datos celular sobre LTE Cat 1 con conmutación a WCDMA y EDGE/GPRS según la configuración del fabricante.
- Soporte de múltiples transportes de reporte: UDP, TCP y SMS para mayor flexibilidad de conectividad.
- Registro interno offline para preservar posiciones y datos de sensores cuando la cobertura celular se interrumpe.
- Modos de bajo consumo y intervalos de reporte configurables para reducir la corriente media durante largos periodos de inactividad.
- Flexibilidad de sensores y E/S, incluyendo soporte para sonda de temperatura 1-wire DS18B20, entrada analógica, E/S digitales, TPMS opcional e integración de RFID de largo alcance cuando está equipado.
- Carcasa resistente IP67 en PC+ABS con opciones de fijación que incluyen imanes removibles para superficies metálicas.

## Cómo funcionan estas funciones con Plaspy

El AT21-4G puede reportar ubicación, lecturas de sensores y estados de eventos a Plaspy para que los gestores de flota y custodios de activos monitoricen en tiempo real y revisen actividad histórica. Plaspy ingiere las transmisiones del dispositivo y presenta la combinación de ubicación y telemetría en mapas, alertas e informes para supervisión operativa.

- Actualizaciones de ubicación en tiempo real y reproducción de rutas en Plaspy cuando el dispositivo transmite posiciones.
- Telemetría de sensores, como temperatura, lecturas analógicas y entradas TPMS o RFID visibles junto con los datos de ubicación en paneles y registros de Plaspy.
- Visibilidad de eventos para E/S digitales, por ejemplo cambios de estado de ignición o inmovilizador, que pueden usarse para disparar alertas o flujos de trabajo en Plaspy.
- Conciliación de registros offline: los logs almacenados en el dispositivo se reenvían cuando vuelve la conectividad, permitiendo a Plaspy reconstruir trayectos históricos.
- Los intervalos de reporte y el comportamiento de bajo consumo configurables reducen las transmisiones mientras Plaspy mantiene continuidad mediante las actualizaciones recibidas y los registros enviados.

## Casos de uso típicos

- Seguimiento remoto de remolques y contenedores donde la carga solar y la gran batería reducen las visitas de mantenimiento.
- Supervisión de activos ferroviarios y vagones que requieren carcasas robustas y precisión multi-GNSS para conciencia posicional.
- Monitoreo de equipos mineros fuera de sitio donde la alimentación DC es poco confiable y se requiere retención de telemetría a largo plazo.
- Flujos de trabajo anti-robo e inmovilización que combinan entrada de ignición monitoreada y E/S digitales con alertas y manejo de eventos en Plaspy.
- Cadena de frío o monitoreo ambiental usando sensores de temperatura 1-wire junto con reporte de ubicación.
- Despliegues con sensores mixtos que agregan temperatura, lecturas analógicas, TPMS y datos de etiquetas RFID para una visión consolidada del activo.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones y el comportamiento exacto pueden diferir entre versiones de firmware y revisiones de hardware; verifique la etiqueta del dispositivo y las notas de firmware para detalles.
- Los kits de bandas celulares regionales y la provisión de firmware pueden cambiar las redes disponibles y el comportamiento de conmutación por región.
- Accesorios opcionales como imanes, módulos TPMS o complementos RFID afectan las capacidades instaladas y pueden no estar presentes en todas las unidades.
- Factores de instalación como la exposición solar y la orientación de montaje influyen en el rendimiento de carga solar y la autonomía.
- La documentación y notas de lanzamiento del fabricante son la fuente autorizada para límites de hardware, compatibilidad de sensores y caminos de actualización.

## Por qué usar Plaspy con estas funciones

Usar el AT21-4G con Plaspy ofrece una opción práctica para obtener visibilidad de activos a largo plazo y con bajo mantenimiento. La combinación de carga solar, gran capacidad de batería y modos de bajo consumo reduce el servicio in situ, mientras que Plaspy consolida ubicación y datos de sensores en mapas, alertas e informes históricos que ayudan en la toma de decisiones operativas y en la respuesta a incidentes.

Para obtener más información sobre cómo Plaspy puede integrar datos de dispositivos y ayudar a gestionar activos remotos, visite https://www.plaspy.com. Para las especificaciones técnicas más recientes, detalles de firmware y guía del fabricante, verifique la información con Totemtech en http://www.totemtek.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
