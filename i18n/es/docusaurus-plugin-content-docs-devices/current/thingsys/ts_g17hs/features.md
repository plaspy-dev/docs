---
slug: /thingsys/ts_g17hs/features
id: ts_g17hs-features
sidebar_label: Features
title: ThingSys - TS-G17Hs Features
sidebar_class_name: menu_item_tracker
description: Resumen de funciones del ThingSys TS-G17Hs y su integración con Plaspy para localización, telemetría y almacenamiento en áreas sin cobertura
keywords:
  - ThingSys TS-G17Hs
  - funciones TS-G17Hs
  - rastreador GPS ThingSys
  - TS-G17Hs Plaspy
  - rastreador GPS para vehículos
  - rastreador 4G LTE Cat1
  - almacenamiento en áreas sin cobertura
  - detección de encendido ACC
  - soporte immobilizador por relé
  - rastreador alerta SOS
---

# ThingSys - Características del TS-G17Hs

Esta página ofrece una descripción pública de las funciones del ThingSys TS-G17Hs y de cómo sus capacidades se utilizan con Plaspy. Se concentra en información práctica y no sensible sobre el modelo de rastreador y en qué pueden esperar los usuarios de Plaspy al integrar ubicación y telemetría vehicular en la plataforma.

La disponibilidad y el comportamiento exacto de funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional o el método de instalación. Para configuración del dispositivo, funciones avanzadas y especificaciones técnicas más recientes consulte la documentación del fabricante y las notas de versión de ThingSys.

## Resumen de funciones

El TS-G17Hs es un rastreador vehicular compacto 4G LTE Cat 1 diseñado para seguimiento continuo, telemetría con detección de encendido y almacenamiento en búfer para zonas sin cobertura. Su combinación de conectividad celular, entradas/salidas para vehículo y almacenamiento interno lo hace adecuado para flotas y despliegues antirrobo donde importan el historial continuo de eventos y la instalación discreta.

- Rastreo GPS en tiempo real y envío de telemetría a una plataforma de flotas como Plaspy para ubicación en vivo e historial.
- Entradas/salidas vehiculares incluyendo detección de encendido (ACC), soporte para botón SOS y control de relé para corte/restauración remota cuando se usa con un relé externo.
- Conectividad 4G LTE Cat 1 con retroceso a 2G GSM para mantener reportes en áreas de mayor cobertura.
- Batería de respaldo integrada y amplio rango de tensión de entrada para operación confiable en distintos tipos de vehículos.
- Almacenamiento de mensajes en zonas sin cobertura para guardar eventos durante interrupciones de red y enviarlos cuando la conectividad se restablece.

## Funciones principales del ThingSys - TS-G17Hs

- Informes compatibles con Plaspy para visualización en tiempo real de ubicación y telemetría en la plataforma.
- Módulo celular 4G LTE Cat 1 con fallback a 2G para reportes GPRS estables y configuración por SMS.
- Entradas y salidas para vehículo: detección de encendido (ACC), entrada SOS, control de relé para soluciones de inmovilizador externas y soporte opcional de micrófono.
- GNSS integrado de alta sensibilidad con precisión de posicionamiento orientativa para el usuario (aproximadamente hasta 30 m).
- Batería interna de respaldo para preservar reportes durante cortes de energía y respaldar el almacenamiento en búfer.
- Almacenamiento de datos para zonas sin cobertura con capacidad para varios miles de mensajes, preservando eventos hasta su subida.
- Soporte para protocolos de rastreo comunes como GT06 y CRX3, con opciones de cambio por SMS a otros protocolos regionales cuando se requiera.
- Detección de movimiento y vibraciones mediante un sensor G integrado para reportes basados en eventos.

## Cómo funcionan estas funciones con Plaspy

Plaspy procesa los reportes de ubicación y telemetría del TS-G17Hs y los presenta en una vista unificada de gestión de flotas. Los reportes enviados por datos celulares o SMS son interpretados por Plaspy para mostrar ubicación, estado de encendido y eventos de alarma junto con el historial de posiciones.

- Actualizaciones de ubicación en tiempo real y trayectos históricos son visibles en Plaspy cuando el dispositivo envía reportes GPRS.
- El estado de encendido (ACC) se refleja en los tableros y en los reportes de viaje de Plaspy para segmentar recorridos y determinar eventos de motor encendido/apagado.
- Pulsos del botón SOS y eventos de alarma configurados se presentan como alertas de alta prioridad en Plaspy para atención inmediata.
- Los mensajes almacenados en zonas sin cobertura se suben cuando la conectividad vuelve y se preservan en el historial de Plaspy, de modo que no se pierden eventos ocurridos durante cortes de señal.
- El estado del relé y el control del inmovilizador (cuando se implementa con un relé externo) pueden representarse en Plaspy para supervisión operativa donde el control remoto esté autorizado y configurado.
- Plaspy detecta automáticamente muchos protocolos comunes de rastreadores, lo que permite que la plataforma interprete los mensajes del TS-G17Hs sin necesidad de seleccionar manualmente el protocolo en muchos casos.

## Casos de uso típicos

- Operaciones de flota que requieren ubicación continua, telemetría de encendido y un historial de viajes fiable para autos, camionetas, camiones y autobuses.
- Despliegues antirrobo que combinan alertas SOS, detección de movimiento y bloqueo por relé con notificaciones en Plaspy.
- Monitoreo de entregas y logística donde el reporte en búfer asegura que el historial de rutas y eventos sobreviva a pérdidas temporales de cobertura.
- Flotas mixtas de vehículos que se benefician de un amplio rango de voltaje de operación y un factor de forma compacto para instalaciones discretas.
- Monitoreo basado en eventos donde vibraciones o eventos SOS disparan alertas y acciones de seguimiento mediante los flujos de trabajo de Plaspy.

## Notas sobre disponibilidad de funciones

- Funciones concretas como el micrófono opcional, el comportamiento del relé y el cableado de E/S dependen de la revisión de hardware y de la variante del producto suministrada por ThingSys.
- Las versiones de firmware pueden cambiar formatos de reporte, soporte de protocolos y métodos de configuración; verifique las notas de versión de firmware para detalles sobre el comportamiento del dispositivo.
- Algunas funciones requieren instalación correcta y componentes externos, por ejemplo un relé externo para la funcionalidad de corte/restauración del inmovilizador.
- Las bandas celulares regionales y las variantes regulatorias pueden afectar qué bandas de red son compatibles en un mercado determinado.
- Consulte la documentación del fabricante para la instalación eléctrica, diagramas de cableado y cualquier guía de seguridad o regulación.

## Por qué usar Plaspy con estas funciones

Usar el TS-G17Hs con Plaspy ofrece a las organizaciones una forma práctica de unificar el rastreo vehicular, la telemetría con detección de encendido y el almacenamiento en búfer de eventos en una sola vista de gestión de flotas. Plaspy procesa la ubicación, las alarmas y los datos almacenados del rastreador para que los equipos operativos mantengan visibilidad, actúen sobre alertas y conserven una línea de tiempo fiable de eventos incluso durante interrupciones temporales de conectividad.

Para conocer más sobre Plaspy y cómo trabaja con rastreadores compatibles como el ThingSys TS-G17Hs, visite https://www.plaspy.com. Para las especificaciones más actuales del dispositivo, detalles de firmware y orientación del fabricante confirme la información más reciente en el sitio de ThingSys en https://www.thingsys.com/ ya que las funciones y el comportamiento del firmware pueden cambiar con el tiempo.
