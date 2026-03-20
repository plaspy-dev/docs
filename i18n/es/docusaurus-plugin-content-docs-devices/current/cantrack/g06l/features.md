---
slug: /cantrack/g06l/features
id: g06l-features
sidebar_label: Features
title: CanTrack - G06L Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS CanTrack G06L y su integración con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - características CanTrack G06L
  - rastreador GPS CanTrack G06L
  - compatibilidad G06L con Plaspy
  - rastreador vehicular G06L
  - alertas CanTrack G06L
  - soporte de inmovilizador G06L
  - batería de respaldo G06L
  - almacenamiento sin conexión G06L
  - rastreadores compatibles con Plaspy
  - rastreo vehicular con Plaspy
---

# CanTrack - G06L: Características

Esta página ofrece una descripción pública, orientada a funciones, del CanTrack G06L y de cómo se exponen sus capacidades cuando el dispositivo se utiliza con Plaspy. Está pensada para detallar funcionalidades prácticas no sensibles y los tipos de telemetría y alertas que el rastreador puede enviar a Plaspy para casos de uso en flotas y seguridad vehicular.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión de firmware, la revisión del hardware, el método de instalación y la implementación del fabricante. Siempre que sea posible, esta página refleja el conjunto de funciones del G06L tal como lo publica el fabricante; sin embargo, los detalles finales deben confirmarse con el firmware del equipo y la documentación oficial.

## Resumen de funciones

El CanTrack G06L es un rastreador GPS 4G compacto optimizado para motocicletas, automóviles, scooters y camionetas ligeras. Combina antenas internas discretas, rendimiento GNSS confiable, una pequeña batería de respaldo y reportes de alarmas configurables para que los operadores mantengan conciencia de ubicación continua y reciban alertas basadas en eventos dentro de Plaspy.

- Seguimiento GPS en tiempo real y registro de historial tipo breadcrumb, ideal para despliegues en vehículos.
- Reportes de alarmas y eventos como detección de encendido, SOS, movimiento, exceso de velocidad y corte de alimentación.
- Carcasa con antenas internas para instalaciones discretas en motocicletas y autos.
- Batería de respaldo integrada y buffer de datos sin conexión para preservar la última posición conocida y los puntos en cola cuando se interrumpe la alimentación o conectividad.
- Múltiples canales de configuración y gestión, incluyendo USB para PC, GPRS y SMS, además de actualizaciones de firmware OTA para mantenimiento remoto.

## Funciones principales del CanTrack - G06L

- Conectividad 4G LTE / GSM para envío en vivo de posiciones y telemetría pensada para uso en vehículos móviles.
- Rendimiento GNSS con recepción multicanal y métricas públicas de sensibilidad y precisión para obtener localizaciones fiables.
- Batería de respaldo que soporta alarmas por corte de energía y envíos cortos durante la pérdida de alimentación principal.
- Detección de estado de encendido e entrada digital para visibilidad del inicio/parada de viajes y reportes basados en eventos.
- Salida digital capaz de accionar un relé de corte remoto para habilitar flujos de trabajo tipo inmovilizador cuando está configurado.
- Alarmas y notificaciones incluyendo SOS, movimiento, exceso de velocidad y corte de energía como parte del conjunto de telemetría del dispositivo.
- Buffer de memoria local para registro offline de puntos de posición, de modo que los datos en cola se suban cuando se restablece la conectividad.
- Actualizaciones de firmware OTA y múltiples métodos de configuración (USB para PC, GPRS, SMS) para gestión remota y escalabilidad.

## Cómo funcionan estas funciones con Plaspy

Cuando el G06L está instalado y reportando, Plaspy ingiere coordenadas GPS, señales de telemetría y eventos de alarma para ofrecer seguimiento en vivo, reproducción y alertas. Plaspy muestra el historial de posiciones, clasifica tipos de eventos y permite a los administradores ajustar la frecuencia de reportes y las respuestas según las necesidades operativas.

- La ubicación en vivo y las actualizaciones tipo breadcrumb aparecen en Plaspy para monitoreo de movimientos en tiempo real.
- Los eventos de encendido/apagado y de movimiento se reflejan como eventos accionables para respaldar informes de viajes y flujos de trabajo de flotas.
- Los reportes de corte de alimentación y de batería de respaldo proporcionan a Plaspy la última posición conocida y generan un evento de alarma si se retira la energía principal.
- Los puntos almacenados sin conexión se suben a Plaspy cuando el dispositivo recupera conectividad, manteniendo la continuidad de los datos históricos.
- Donde el dispositivo y la instalación permiten control remoto, Plaspy puede aplicar comandos y cambios de configuración de manera remota.

## Casos de uso típicos

- Gestión de flotas de vehículos livianos donde se requiere instalación discreta y visibilidad continua.
- Protección antirrobo para motocicletas y scooters mediante montaje discreto, alertas SOS y reportes de corte de energía.
- Seguros basados en uso y registro de comportamiento de conducción usando historial de encendido y eventos para reclamos o análisis telemático.
- Flotas de alquiler y talleres de servicio que necesitan alertas de encendido y movimiento, además de reproducción histórica para diagnóstico y resolución de disputas.
- Operaciones de entrega y última milla que requieren ubicación en tiempo real, puntos en cola por falta de conexión y opciones sencillas de control remoto.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar entre revisiones de firmware y variantes de hardware; algunas funciones pueden ser opcionales o depender de la región.
- El inmovilizador opcional o el corte remoto requieren cableado, configuración y cumplimiento local adecuados; su disponibilidad depende de la versión instalada y la configuración del integrador.
- La capacidad de almacenamiento sin conexión es aproximada; el tamaño del buffer puede diferir entre firmware y lotes de producción.
- El comportamiento de las actualizaciones OTA y los canales de configuración remota soportados dependen del firmware del fabricante y de las condiciones de la red del operador.
- Consulte siempre la documentación oficial del fabricante para obtener instrucciones detalladas de instalación, cableado y normativas.

## Por qué usar Plaspy con estas funciones

Combinar el CanTrack G06L con Plaspy ofrece a las organizaciones una vía sencilla hacia la monitorización centralizada de vehículos, visibilidad de eventos y supervisión operativa. El factor de forma compacto del rastreador, su reporte de alarmas y el buffer offline se integran con los paneles y alertas de Plaspy para apoyar la seguridad de flotas, flujos de trabajo antirrobo e informes telemáticos sin necesidad de integraciones complejas.

Para obtener más información sobre Plaspy y cómo soporta dispositivos como el CanTrack G06L visite https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente en el sitio del fabricante https://www.cantrackgps.com/ antes del despliegue.
