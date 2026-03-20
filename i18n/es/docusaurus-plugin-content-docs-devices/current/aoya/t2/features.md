---
slug: /aoya/t2/features
id: t2-features
sidebar_label: Features
title: AoYa - T2 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS AoYa T2 y su integración con Plaspy para el seguimiento de vehículos
keywords:
  - AoYa T2
  - características AoYa T2
  - rastreador GPS AoYa T2
  - capacidades AoYa T2
  - AoYa T2 Plaspy
  - mini rastreador GPS AoYa
  - seguimiento de vehículos T2
  - rastreo de flotas AoYa T2
  - rastreador GPS GSM GPRS
  - rastreador GPS UBLOX
---

# AoYa - Características del T2

Esta página ofrece un resumen público y no sensible de las funciones del AoYa T2 y de cómo esas capacidades se usan con Plaspy. Se enfoca en las funciones visibles para el usuario, en las operaciones prácticas y en la forma en que el dispositivo habitualmente reporta ubicación y estado a la plataforma Plaspy para el seguimiento y la visibilidad operativa.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, la variante regional y el método de instalación. El comportamiento del dispositivo, las funciones soportadas y la telemetría pueden cambiar con la configuración del fabricante y las actualizaciones, por lo que es recomendable consultar la documentación del proveedor para obtener detalles específicos antes del despliegue.

## Resumen de funciones

El AoYa T2 es un rastreador GPS compacto para vehículos, diseñado para instalación discreta y para reportar ubicación de forma fiable a través de redes GSM/GPRS. Combina un factor de forma reducido y batería de respaldo con posicionamiento GNSS para soportar seguimiento en tiempo real y monitorización básica del vehículo.

- Factor de forma pequeño y discreto de aproximadamente 72 x 32 x 15 mm para una instalación sencilla en vehículos
- Diseño liviano de alrededor de 56 g que facilita una colocación poco intrusiva
- Conectividad GSM GPRS para reportes continuos y monitorización remota
- Posicionamiento GNSS integrado mediante receptor UBLOX con precisión típica de 5 a 10 metros
- Alta sensibilidad GPS reportada en -169 dBm para mejorar la recepción satelital en condiciones marginales
- Batería de respaldo de emergencia integrada (42 mAh) que permite reportes limitados si se pierde la alimentación principal

## Características principales del AoYa - T2

- Carcasa compacta apta para instalaciones ocultas o en espacios reducidos
- Construcción ligera que facilita múltiples ubicaciones de montaje
- Conectividad celular GSM GPRS para reportes de posición en tiempo real
- Módulo GSM SIMTK6260 como componente de interfaz celular
- Módulo GPS UBLOX para posicionamiento mediante satélite
- Sensibilidad GPS en torno a -169 dBm para mejorar la adquisición de señal
- Precisión posicional típica en el rango de 5 a 10 metros en condiciones normales
- Batería interna de emergencia con 42 mAh para soportar reportes temporales con energía limitada

## Cómo funcionan estas funciones con Plaspy

Cuando el AoYa T2 se usa con Plaspy, sus capacidades básicas de rastreo se reflejan en los flujos de ubicación, las líneas de tiempo de eventos y las vistas de estado del dispositivo. Plaspy detecta automáticamente los protocolos compatibles del rastreador y presenta los datos entrantes en la plataforma para monitorización e informes.

- Las actualizaciones de ubicación en tiempo real aparecen en el mapa de Plaspy, permitiendo que los operadores sigan el movimiento del vehículo
- Los datos de posiciones históricas y las rutas se almacenan para reproducción y revisión de trayectos
- Los cambios de energía o conectividad reportados por el dispositivo pueden mostrarse como eventos en Plaspy
- La precisión GNSS y las posiciones reportadas influyen en la precisión del pin en el mapa y en los informes geoespaciales
- Plaspy detecta el protocolo del dispositivo automáticamente y acepta los reportes entregados mediante los transportes estándar usados por la plataforma
- Metadatos del dispositivo como el nombre del modelo y el último estado conocido están disponibles en los paneles de dispositivo de Plaspy

## Casos de uso típicos

- Rastreo de ubicación y supervisión de rutas para flotas pequeñas y medianas
- Monitorización de seguridad vehicular para mantener conocimiento sobre la ubicación de los vehículos
- Monitoreo de activos cuando se requieren rastreadores discretos o de tamaño compacto
- Instalaciones temporales donde un factor de forma pequeño y una colocación sencilla son importantes
- Escenarios que se benefician de una batería de respaldo corta para preservar el rastreo tras una pérdida de energía

## Notas sobre disponibilidad de funciones

- Las versiones de firmware y las opciones de firmware del fabricante pueden activar o desactivar comportamientos de reporte específicos o tipos de eventos
- Las revisiones de hardware o las variantes regionales pueden diferir en las bandas celulares soportadas o en las aprobaciones regulatorias
- La calidad de la instalación y la ubicación de la antena afectan la precisión GNSS y la conectividad GSM
- La autonomía de la batería de emergencia depende de la configuración del dispositivo y de la frecuencia de reportes
- Para detalles técnicos completos y las especificaciones más recientes consulte la documentación del fabricante

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el AoYa T2 ofrece una forma directa de transformar los datos de ubicación en tiempo real del dispositivo en información operativa. Plaspy centraliza los reportes entrantes del rastreador, visualiza ubicaciones en mapas, almacena rutas históricas y muestra el estado del dispositivo para que los equipos puedan monitorear vehículos, analizar movimientos y responder a eventos desde una única plataforma.

Para obtener más información sobre el despliegue de rastreadores como el AoYa T2 con Plaspy visite https://www.plaspy.com. Para las especificaciones del dispositivo, notas de firmware y detalles del fabricante verifique la información actual en el sitio web de AoYa en http://www.aoyagps.com/. Las funciones del dispositivo y el comportamiento del firmware evolucionan con el tiempo, por lo que confirme las capacidades clave con el fabricante antes de tomar decisiones operativas.
