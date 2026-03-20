---
slug: /tzone/tz_bc05/features
id: tz_bc05-features
sidebar_label: Features
title: TZone - TZ-BC05 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador iBeacon TZone TZ-BC05 y cómo sus capacidades Bluetooth pueden usarse con Plaspy para detección de presencia y proximidad
keywords:
  - TZone TZ-BC05
  - características TZ-BC05
  - rastreador TZone
  - rastreador GPS TZ BC05
  - rastreador Bluetooth TZ-BC05
  - rastreador iBeacon
  - rastreador compatible con Plaspy
  - rastreador Bluetooth de bajo consumo
  - rastreador de activos Plaspy
  - capacidades TZ-BC05
---

# TZone - TZ-BC05: Características

Esta página describe el contexto público de características para el uso del TZone TZ-BC05 con Plaspy. Resume las capacidades del dispositivo que son relevantes para los usuarios de Plaspy, con foco en el comportamiento práctico, los atributos del equipo y cómo las transmisiones del TZ-BC05 pueden reflejarse en la plataforma Plaspy cuando el dispositivo está integrado o sus señales son reenviadas al sistema.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la implementación del fabricante. Cuando sea útil, esta página menciona las funciones descritas por el fabricante, pero usted debe verificar los detalles específicos del equipo con la documentación oficial de TZone y las guías locales de integración.

## Resumen de capacidades

El TZ-BC05 es un rastreador iBeacon Bluetooth compacto pensado para casos de uso de presencia y proximidad más que para posicionamiento satelital autónomo. Su tamaño reducido y larga duración de batería lo hacen adecuado para etiquetar objetos personales, equipos u otros activos que se benefician de transmisiones periódicas de beacon. El dispositivo transmite usando el protocolo iBeacon sobre Bluetooth 4.0 y soporta varios ajustes configurables para equilibrar el alcance de detección y la autonomía de la batería.

- Factor de forma pequeño y discreto para una fácil fijación o colocación
- Emplea el protocolo iBeacon (compatible con iPhone) sobre Bluetooth 4.0 para transmisiones de proximidad
- Intervalo de transmisión y potencia emitida ajustables para ajustar alcance frente a vida de batería
- Larga duración de batería con celda CR 2477 y tiempo de trabajo esperado de varios años
- Conexión protegida por contraseña para limitar el acceso a la configuración del dispositivo

## Funciones principales del TZone - TZ-BC05

- Soporte del protocolo iBeacon sobre Bluetooth 4.0 para transmisiones tipo beacon orientadas a presencia
- Dimensiones compactas de aproximadamente 45 x 45 x 21 mm y diseño ligero
- Compatible con teléfonos modernos, incluyendo iOS 7.0 o posterior y Android 4.3 o posterior
- Batería CR 2477 para tiempo de operación prolongado, con estimación de 1.5 a 2.5 años de uso según configuración
- Intervalo de transmisión ajustable entre 0.1 y 3 segundos
- Ajuste de potencia transmitida para influir en la distancia de detección
- Distancia de transmisión reportada en campo abierto entre 50 y 143 metros
- Protección por contraseña para la conexión y evitar cambios no autorizados

## Cómo funcionan estas funciones con Plaspy

Cuando las transmisiones del TZ-BC05 están disponibles para Plaspy mediante una integración compatible, un gateway o un reenviador de datos, Plaspy puede mostrar información de presencia y del activo derivada de esas transmisiones. Plaspy ofrece una vista centralizada donde las emisiones y los metadatos del dispositivo se pueden asociar a activos, lo que permite a los equipos usar datos de beacon junto con otros dispositivos rastreados.

- Mostrar presencia del dispositivo y marcas de tiempo de última detección para cada activo TZ-BC05 en Plaspy
- Registrar eventos de transmisión para que los operadores vean cuándo la plataforma detectó un ítem
- Usar el intervalo de transmisión y la potencia de emisión para ajustar el comportamiento de detección en la monitorización con Plaspy
- Adjuntar metadatos descriptivos como modelo, número de serie y propietario asignado a cada registro de dispositivo
- Agrupar y buscar dispositivos beacon dentro de Plaspy para soportar flujos de trabajo de inventario y proximidad

## Casos de uso típicos

- Etiquetado de objetos personales como mochilas o equipaje para monitoreo de presencia
- Seguimiento de herramientas y equipos pequeños en talleres o sitios de trabajo mediante detecciones de beacon
- Gestión de inventario o pallets dentro de instalaciones donde los beacons de proximidad facilitan la localización de artículos
- Añadir contexto de ubicación basado en beacons a flujos de trabajo más amplios de gestión de activos
- Usar beacons para marcar puntos fijos o zonas que ayuden a otros sistemas a determinar activos cercanos

## Notas sobre disponibilidad de funciones

- Las cifras de alcance de transmisión son estimaciones en campo abierto; el alcance real varía según el entorno y las obstrucciones
- Ajustes configurables como el intervalo de transmisión y la potencia pueden depender del firmware del dispositivo y de la app de configuración complementaria
- Las estimaciones de vida de batería son orientativas y dependen de los ajustes de transmisión elegidos y de factores ambientales
- La compatibilidad con smartphones puede afectar qué utilidades móviles pueden leer o configurar el dispositivo
- Revisiones de hardware del fabricante o actualizaciones de firmware pueden añadir, modificar o eliminar capacidades con el tiempo

## Por qué usar Plaspy con estas funciones

Plaspy proporciona una plataforma única para registrar, buscar y gestionar activos equipados con beacons junto con otros dispositivos rastreados. Para organizaciones que necesitan visibilidad sobre presencia, detecciones recientes y agrupamiento de activos, integrar las transmisiones del TZ-BC05 en Plaspy ayuda a mantener los datos de beacon útiles y accionables dentro de un contexto operativo más amplio. Los ajustes de intervalo y potencia del TZ-BC05 permiten a los equipos optimizar la detección según los flujos de trabajo y los objetivos de duración de batería.

Aprenda más sobre cómo Plaspy puede centralizar datos de presencia y proximidad en https://www.plaspy.com. Las características del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que por favor verifique la información más reciente del dispositivo en el sitio oficial de TZone en http://www.tzonedigital.com/ antes de tomar decisiones de despliegue.
