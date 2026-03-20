---
slug: /gotop/g23d/features
id: g23d-features
sidebar_label: Features
title: GOTOP - G23D Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador GOTOP G23D y su integración con Plaspy para seguimiento y visibilidad de vehículos
keywords:
  - GOTOP G23D
  - GOTOP G23D características
  - rastreador GPS GOTOP G23D
  - GOTOP G23D Plaspy
  - capacidades de rastreo G23D
  - GOTOP GPS BDS LBS
  - rastreador CDMA G23D
  - rastreador de vehículos G23D características
  - GOTOP G23D detección ACC
  - GOTOP G23D alarma exceso de velocidad
---

# GOTOP - G23D: Funciones

Esta página ofrece un resumen público de las funciones del rastreador GPS GOTOP G23D y cómo se muestran estas funciones cuando el dispositivo se utiliza con Plaspy. Se centra en capacidades prácticas y no sensibles que usted puede esperar del equipo y en la forma en que Plaspy muestra información de posición y eventos para supervisión operativa.

La disponibilidad exacta y el comportamiento de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, la región de la red celular y la implementación del fabricante. Use esta página como una visión general de compatibilidad y capacidades; consulte siempre con el fabricante para obtener detalles técnicos actualizados y guías de instalación.

## Resumen de capacidades

El GOTOP G23D es un rastreador GPS compacto con conectividad CDMA, pensado para una amplia gama de vehículos. Ofrece posicionamiento multiconstelación y funciones básicas de monitoreo vehicular útiles tanto para flotas como para seguimiento individual.

- Posicionamiento multimodal mediante GPS, BDS y LBS para mayor confiabilidad en la localización.
- Precisión de ubicación indicada alrededor de 5 metros en condiciones normales.
- Amplio rango de tensión de entrada de 9 V a 95 V para adaptarse a distintos tipos de vehículos.
- Monitoreo del estado del vehículo, incluyendo detección de ACC, detección de tensión DC y alarma por corte de energía.
- Controles operativos y alertas como corte remoto de energía o combustible y alarma por exceso de velocidad.

## Características principales del GOTOP - G23D

- Conectividad celular CDMA basada en un módulo ZTE MC8618 compatible con redes CDMA2000 1X 800 MHz.
- Sistema de posicionamiento GPS + BDS + LBS con precisión típica en el orden de 5 metros.
- Rango de entrada de voltaje amplio de 9 V a 95 V, apto para autos, taxis, camiones ligeros, motocicletas y bicicletas eléctricas.
- Funciones de monitoreo vehicular que incluyen detección de ACC y detección de DC para indicar el estado de ignición o alimentación.
- Capacidad de corte remoto de energía o combustible y alarma por apagado para respuesta ante robo o desactivación remota donde el hardware y la instalación lo permitan.
- Alarma por exceso de velocidad para notificar cuando se superan umbrales configurados.
- Ranura para tarjeta Micro SIM y antena interna para comunicación celular.
- Puertos I/O externos que incluyen canales para corte de energía/combustible y detección de ACC, además de una interfaz UART-TTL para integraciones y diagnóstico.

## Cómo funcionan estas funciones con Plaspy

Plaspy agrega datos de ubicación y eventos de rastreadores compatibles como el G23D y los presenta en paneles, mapas y flujos de eventos para uso operativo. Plaspy detecta automáticamente protocolos soportados y procesa los reportes del dispositivo para visualización y alertas.

- Actualizaciones de ubicación en tiempo real y rastros de migas de pan aparecen en los mapas de Plaspy para que usted pueda monitorear movimiento e historial de ubicaciones.
- Eventos de estado del vehículo como ACC encendido/apagado, alarmas por corte de energía y alarmas por exceso de velocidad se representan como eventos en la línea de tiempo y alertas dentro de Plaspy.
- Funciones de control remoto reportadas por el dispositivo, como el estado de corte remoto de energía o combustible, pueden rastrearse desde Plaspy cuando el dispositivo y la instalación admiten la ejecución de comandos.
- Plaspy acepta conexiones de dispositivos mediante métodos de transporte estándar (UDP o TCP) y detecta automáticamente el protocolo del rastreador para una integración sencilla.
- Los datos del G23D se alimentan a los informes y notificaciones de Plaspy para que los encargados de flota puedan filtrar y actuar sobre los eventos de forma consistente.

## Casos de uso típicos

- Rastreo de vehículos de flotas para autos, taxis y camiones ligeros con el fin de mejorar rutas y supervisión.
- Supervisión de vehículos de alquiler o arrendados donde la instalación compacta y la tolerancia de voltaje son ventajosas.
- Seguimiento de motocicletas y bicicletas eléctricas para recuperación de ubicación y monitoreo básico de estado.
- Detección remota del estado de ignición o alimentación del vehículo para auditorías operativas.
- Monitoreo de exceso de velocidad para apoyar programas de comportamiento de conductores y supervisión de seguridad.
- Flujo de trabajo de respuesta ante robo usando alarma por corte de energía y corte remoto de energía o combustible cuando el hardware y la instalación lo permiten.

## Notas sobre disponibilidad de funciones

- La versión de firmware y la revisión de hardware pueden modificar el comportamiento de las funciones; algunas capacidades pueden añadirse o limitarse en actualizaciones posteriores.
- La instalación es clave: la detección de ACC y DC depende del cableado correcto a los circuitos del vehículo y de la configuración adecuada durante la puesta en marcha.
- El soporte regional de redes celulares varía; confirme la disponibilidad de redes CDMA en su área de despliegue.
- La capacidad de corte remoto de energía o combustible depende de cableado compatible, relés o dispositivos de corte externos y del cumplimiento de las normativas locales.
- Consulte siempre la documentación oficial de GOTOP para diagramas de cableado específicos del dispositivo, procedimientos de configuración y notas de versiones de firmware.

## Por qué usar Plaspy con estas funciones

Combinar Plaspy con el GOTOP G23D convierte las señales de posicionamiento y los estados del vehículo en visibilidad operativa útil. Plaspy muestra los datos de ubicación en mapas, correlaciona eventos de estado como ACC y alarmas de energía con el movimiento, y ofrece herramientas centralizadas para alertas e informes históricos. Para organizaciones que gestionan flotas mixtas o vehículos ligeros como motocicletas y bicicletas eléctricas, esta combinación mejora la conciencia situacional y facilita respuestas oportunas ante eventos.

Para más información sobre Plaspy y su compatibilidad con rastreadores, visite https://www.plaspy.com. Para especificaciones del dispositivo, comportamiento de firmware y detalles del fabricante del GOTOP G23D, verifique la información en el sitio oficial del fabricante https://www.gotop.cc/.
