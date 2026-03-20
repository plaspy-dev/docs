---
slug: /autoseeker/at_23/features
id: at_23-features
sidebar_label: Features
title: Autoseeker - AT-23 Features
sidebar_class_name: menu_item_tracker
description: Guía pública de funciones del rastreador GPS Autoseeker AT-23 y su uso con Plaspy
keywords:
  - Funciones Autoseeker AT-23
  - Rastreador GPS Autoseeker AT-23
  - Rastreador relay AT-23
  - Compatibilidad AT-23 Plaspy
  - Funciones rastreador GPS Autoseeker
  - Rastreador inmovilizador vehicular
  - Rastreador GPS 2G con relay
  - Seguimiento de flotas AT-23
  - Rastreo de activos Autoseeker
  - Características AT-23 para Plaspy
---

# Autoseeker - Funciones del AT-23

Esta página describe el contexto público de funciones del Autoseeker AT-23 cuando se usa con Plaspy. Resume las capacidades del dispositivo que resultan relevantes para quienes usan Plaspy, explica cómo se presentan esas capacidades en los paneles de Plaspy y destaca usos prácticos para el monitoreo de flotas y activos sin entrar en detalles sensibles de implementación.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. El AT-23, tal como se describe aquí, es un rastreador compacto 2G con posicionamiento GPS y Beidou y un relé integrado para corte remoto de combustible o alimentación; sin embargo, la telemetría específica, los umbrales de eventos y los comandos admitidos dependen del firmware del dispositivo y de cómo esté instalado y configurado.

## Resumen de características

El Autoseeker AT-23 ofrece seguimiento en tiempo real y reportes de eventos que se integran en Plaspy para mapeo en vivo, reproducción de historial y alertas. Está pensado para instalación oculta y permanente en distintos activos móviles e incluye un relé que facilita flujos de trabajo de inmovilización remota.

- Informes de posición GNSS en tiempo real usando GPS y Beidou para actualizaciones de ubicación y registro de rutas.
- Relé integrado para corte remoto y restauración de combustible o alimentación, compatible con flujos de inmovilización antirrobo.
- Generación de eventos por acciones de geocerca, exceso de velocidad, vibración, pérdida de alimentación principal y batería de respaldo baja.
- Factor de forma compacto y rango de alimentación apto para vehículos que facilitan instalaciones discretas en autos, motocicletas, camiones y embarcaciones.
- Conectividad celular 2G con soporte de SIM estándar para reportar ubicación y eventos a Plaspy.

## Funciones principales del Autoseeker - AT-23

- Seguimiento en tiempo real y registro de historial de rutas adecuado para monitoreo de flotas en vivo y reproducción.
- Módulo de relé integrado para corte y restauración remotos de circuitos de combustible o alimentación como parte de estrategias de inmovilizador.
- Posicionamiento GNSS en modo dual con GPS y Beidou para obtener fijaciones de ubicación más fiables.
- Alertas de eventos que incluyen entrada y salida de geocercas, advertencias por exceso de velocidad y detección de manipulación por vibración.
- Funciones de gestión de energía, que incluyen detección de corte de alimentación principal y reporte opcional de batería de respaldo.
- Carcasa compacta de ABS y opciones de montaje discretas para instalaciones ocultas en vehículos y activos pequeños.
- Soporte estándar 2G con ranura para tarjeta SIM regular para la transmisión de datos hacia plataformas de seguimiento.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe los mensajes de posición, estado y eventos del AT-23 para que los operadores puedan ver la ubicación en vivo, revisar el historial y responder a incidentes desde una única interfaz. Plaspy detecta automáticamente los protocolos de rastreador compatibles y acepta los reportes enviados al dominio de la plataforma, lo que facilita integrar el AT-23 en paneles y flujos de trabajo automatizados.

- Las actualizaciones de ubicación en vivo aparecen en los mapas de Plaspy para seguimiento en tiempo real y visibilidad en despacho.
- Los eventos de entrada y salida de geocerca generan alertas y se muestran junto con las rutas históricas para una investigación rápida.
- Los eventos por exceso de velocidad y vibración se registran en las líneas de tiempo de Plaspy y pueden activar notificaciones o reglas de escalamiento.
- Los eventos de corte y restauración del relé quedan registrados para que las acciones de inmovilizador sean visibles en auditorías e informes de incidentes.
- Las alertas por pérdida de alimentación y batería de respaldo baja ayudan a detectar manipulaciones o problemas de energía del vehículo dentro de la interfaz de Plaspy.

## Casos de uso típicos

- Antirrobo e inmovilización de flotas usando el relé para impedir movimiento no autorizado y registrar el evento en Plaspy.
- Operaciones de flota y despacho con ubicación en vivo, historial de rutas y monitoreo de exceso de velocidad para cumplimiento del conductor.
- Protección de motocicletas y vehículos pequeños gracias al tamaño compacto del dispositivo y al perfil de instalación discreto.
- Rastreo de activos como embarcaciones y equipos móviles, combinando ubicación GNSS con alertas de pérdida de energía y manipulación para respuesta rápida.
- Monitoreo centralizado de flotas mixtas donde Plaspy consolida la ubicación y la telemetría de eventos de cada unidad AT-23.

## Notas sobre disponibilidad de funciones

- El soporte de funciones depende del firmware y la revisión de hardware del AT-23, por lo que las alertas y el comportamiento de los comandos pueden variar entre unidades.
- La disponibilidad regional de redes 2G afecta la conectividad y debe considerarse antes del despliegue en zonas donde 2G esté siendo retirado.
- El comportamiento del relé y la efectividad del inmovilizador dependen de cómo esté cableado el dispositivo al vehículo y de los requisitos legales o de seguridad locales.
- La presencia de batería de respaldo opcional y el reporte de su estado dependen de la configuración adquirida y de los ajustes de firmware.
- Revise siempre la configuración del dispositivo y la documentación del fabricante al planear integraciones o el uso de comandos remotos.

## Por qué usar Plaspy con estas funciones

Combinar el AT-23 con Plaspy brinda a las organizaciones una forma práctica e integrada de unir la capacidad de inmovilización basada en relé con visibilidad centralizada de ubicación y gestión de eventos. Plaspy reúne actualizaciones de posición, alertas e historial en una sola vista operativa para que los administradores de flota y propietarios de activos puedan monitorear actividad, investigar incidentes y automatizar notificaciones rutinarias.

Para saber más sobre Plaspy y cómo puede usarse con rastreadores compatibles visite https://www.plaspy.com. Las funciones de los dispositivos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente en el sitio del fabricante https://autoseekergps.com/ antes de confiar en comportamientos particulares.
