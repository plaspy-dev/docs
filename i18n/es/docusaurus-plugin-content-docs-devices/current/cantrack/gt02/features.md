---
slug: /cantrack/gt02/features
id: gt02-features
sidebar_label: Features
title: CanTrack - GT02 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador CanTrack GT02 y su integración con Plaspy para monitoreo vehicular
keywords:
  - características CanTrack GT02
  - rastreador GPS CanTrack GT02
  - características GT02 Plaspy
  - funciones de rastreador GPS GT02
  - rastreo vehicular GT02
  - rastreo en tiempo real GT02
  - rastreo SMS GPRS GT02
  - administración de flotas GT02
  - capacidades CanTrack GT02
  - monitoreo de voz GT02
---

# CanTrack - GT02 - Características

Esta página ofrece un resumen público de las funciones del CanTrack GT02 y de cómo se aprovechan cuando el equipo se integra con la plataforma Plaspy. Está pensada para ayudar a gerentes de flota, instaladores y evaluadores técnicos a comprender las capacidades del rastreador en un despliegue con Plaspy, sin sustituir la documentación oficial del fabricante ni las guías de instalación.

La disponibilidad y el comportamiento exactos de las funciones en una unidad GT02 concreta pueden variar según la versión de firmware, la revisión de hardware, la variante del dispositivo instalada, el método de instalación elegido y las opciones implementadas por el fabricante. Verifique siempre los detalles de su unidad y firmware con los recursos oficiales del fabricante cuando necesite un comportamiento preciso.

## Resumen de funciones

El CanTrack GT02 es un rastreador vehicular compacto diseñado para ofrecer datos de ubicación y monitoreo a través de redes celulares. Soporta tanto el envío de información vía SMS como la transmisión en tiempo real mediante datos móviles, además de una serie de alarmas y opciones de control configurables, pensadas para seguridad vehicular y supervisión de flotas.

- Informes de ubicación en tiempo real vía GPRS para seguimiento continuo en un servidor o plataforma.
- Envío de ubicación y alertas por SMS a números autorizados para notificaciones inmediatas.
- Función de monitoreo de voz para escuchar el entorno del dispositivo cuando el firmware y la instalación lo permiten.
- Alarmas configurables que incluyen exceso de velocidad, falla de alimentación y alerta antirobo por ACC.
- Opciones de hardware adicionales, como interfaz de relé externo para control de circuitos del vehículo y batería de respaldo incorporada para alertas por corte de energía.

## Funciones principales del CanTrack - GT02

- Compatibilidad GSM quad-band para amplia cobertura celular regional.
- Rastreo en tiempo real mediante datos móviles (GPRS) para monitoreo desde servidor.
- Reportes de ubicación por SMS a números autorizados especificados.
- Función de monitoreo de voz cuando está habilitada por el firmware y la instalación.
- Configuración de alertas por exceso de velocidad para notificar al alcanzar umbrales establecidos.
- Alarma por falla de alimentación con batería de respaldo interna opcional para alertas cuando el dispositivo está fuera de línea.
- Soporte para alarma antirobo por ACC para detectar cambios en la ignición o alimentación de accesorios.
- Capacidad para establecer números telefónicos autorizados y funciones remotas de recuperación de contraseña.

## Cómo funcionan estas funciones con Plaspy

Plaspy detecta automáticamente muchos protocolos comunes de rastreadores y puede mostrar la ubicación y los eventos del GT02 dentro de su interfaz de monitoreo. Cuando un GT02 está configurado para enviar datos a Plaspy, la plataforma presenta puntos de ubicación, actualizaciones de estado y los eventos de alarma compatibles para que los operadores supervisen los dispositivos de forma centralizada.

- Las actualizaciones de ubicación en tiempo real que recibe Plaspy se visualizan en mapas para reproducción de rutas y seguimiento en vivo.
- Eventos de alarma como pérdida de alimentación, exceso de velocidad y cambios de ACC se registran en Plaspy como eventos para atención rápida por parte del operador.
- Las alertas originadas por SMS siguen siendo útiles para notificaciones directas al teléfono, mientras Plaspy agrega los reportes por GPRS para supervisión centralizada.
- Los eventos de monitoreo de voz compatibles con el dispositivo pueden registrarse en Plaspy como eventos o notas, según la configuración local y los permisos.
- El manejo de dispositivos de Plaspy simplifica la incorporación al reconocer el protocolo GT02 y aplicar la lógica de análisis y presentación adecuada.

## Casos de uso típicos

- Gestión de flotas y visibilidad de despacho para vehículos comerciales livianos.
- Monitoreo de vehículos de renta para rastrear ubicación y recibir alertas de manipulación o corte de energía.
- Protección y recuperación de activos donde las actualizaciones de ubicación y las alarmas facilitan la respuesta.
- Supervisión de vehículos del personal para organizaciones que requieren seguimiento del uso de vehículos.
- Monitoreo remoto donde SMS sirve como respaldo de baja ancho de banda para alertas críticas.
- Operaciones logísticas pequeñas que necesitan rastreo en tiempo real económico y notificación de eventos.

## Notas sobre disponibilidad de funciones

- Algunas capacidades, como el monitoreo de voz y el control por relé, pueden depender de la variante de hardware específica del GT02 y de si se instalaron cableados o módulos opcionales.
- La batería de respaldo interna y las funciones de relé externo son opcionales en ciertos modelos GT02 y pueden requerir la variante de cuatro conductores o configuración por parte del instalador.
- El comportamiento entre SMS y GPRS depende de la disponibilidad de datos en la tarjeta SIM y de la cobertura del operador; SMS puede actuar como respaldo cuando la conectividad de datos es limitada.
- Las revisiones de firmware pueden cambiar opciones de menú, formatos de comando y la forma en que se reportan los eventos; las funciones descritas aquí reflejan un comportamiento común del GT02 pero pueden variar.
- Restricciones regionales o regulatorias pueden afectar el uso del monitoreo de voz o ciertas funciones de control remoto en algunas jurisdicciones.

## Por qué usar Plaspy con estas funciones

Integrar el CanTrack GT02 con Plaspy permite centralizar la información de ubicación y eventos de las unidades GT02 en un entorno de monitoreo gestionado. Plaspy recopila los reportes entrantes de ubicación y señales de alarma, los presenta en mapas y líneas de tiempo, y ayuda a los equipos a correlacionar eventos del dispositivo con acciones operativas para una supervisión y respuesta más eficiente.

Para obtener más información sobre Plaspy y cómo puede integrarse con rastreadores como el CanTrack GT02, visite https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y detalles de variantes actualizados y oficiales, consulte al fabricante en https://www.cantrackgps.com/ ya que los conjuntos de funciones y el comportamiento del firmware pueden cambiar con el tiempo.
