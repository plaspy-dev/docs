---
slug: /gotop/vt_380a/features
id: vt_380a-features
sidebar_label: Features
title: GOTOP - VT-380A Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador GPS GOTOP VT-380A y su integración con Plaspy para ubicación de vehículos e identificación de conductores
keywords:
  - GOTOP VT-380A
  - rastreador GOTOP
  - funciones VT-380A
  - rastreador GPS VT-380A
  - seguimiento de identificación del conductor
  - identificación RFID conductor
  - inmovilizador de vehículo
  - micrófono de cabina
  - almacenamiento interno de datos
  - compatibilidad con Plaspy
---

# GOTOP - Funciones del VT-380A

Esta página ofrece una visión pública y orientada a funciones del GOTOP VT-380A y de cómo sus capacidades documentadas se relacionan con el uso en la plataforma Plaspy. Se concentra en las funciones relevantes para el monitoreo de flotas, la identificación de conductores y la seguridad básica del vehículo cuando el dispositivo envía ubicación y eventos a Plaspy.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, accesorios opcionales, método de instalación y la implementación del fabricante. Para detalles técnicos específicos del dispositivo y las notas de firmware más recientes consulte la documentación y los recursos de soporte oficiales de GOTOP.

## Resumen de funciones

El VT-380A es un rastreador de vehículos basado en GPS y GPRS diseñado para proporcionar reporte de ubicación en tiempo real junto con varias funciones prácticas para flotas y seguridad. Combina el reporte de posición con almacenamiento local y un conjunto de accesorios opcionales para soportar identificación de conductores y flujos de trabajo antirrobo.

- Reporte de ubicación GPS en tiempo real a un teléfono móvil o servidor configurado para seguimiento en vivo y historial.
- Transmisión de datos por GPRS para enviar reportes de ubicación y eventos a una plataforma servidor.
- Memoria interna que almacena coordenadas GPS cuando no hay conexión GPRS y las sube posteriormente.
- Micrófono de cabina opcional que puede conectarse y ocultarse dentro del vehículo para fines de monitoreo.
- Solución de identificación de conductor mediante tarjetas inductivas RFID leídas por un lector externo conectado al rastreador.
- Alarma de vehículo y comportamiento de corte automático del motor vinculados a la presencia o ausencia de la tarjeta de identificación del conductor.

## Características principales del GOTOP - VT-380A

- Adquisición de posición por GPS para seguimiento de vehículos y registro de viajes.
- Reporte por GPRS para enviar datos de ubicación y eventos a un servidor o destino móvil.
- Almacenamiento a bordo para guardar coordenadas y eventos cuando se pierde la conectividad celular.
- Soporte para identificación de conductor vía RFID con lector externo conectado al rastreador.
- Registro de eventos de identificación de conductor para que las plataformas puedan anotar qué conductor autorizado opera el vehículo.
- Lógica de alarma antirrobo que puede armarse cuando la tarjeta de identificación del conductor no está presente.
- Comportamiento de corte automático de alimentación y aceite como parte de la solución de alarma cuando está activada.
- Entrada de micrófono opcional para monitoreo de cabina cuando el accesorio está instalado.

## Cómo funcionan estas funciones con Plaspy

Plaspy puede recibir y mostrar actualizaciones de seguimiento y eventos de plataforma enviados por el VT-380A, ofreciendo a los administradores de flotas una vista centralizada de ubicación, actividad de conductores y eventos de alarma. Plaspy detecta automáticamente los protocolos comunes de rastreadores y mapea los datos entrantes de posición y eventos en la plataforma para su monitoreo e informes.

- La ubicación en tiempo real del vehículo y el historial de recorrido aparecen en el mapa de Plaspy cuando el VT-380A envía actualizaciones de posición.
- Los eventos de identificación del conductor desde el lector de tarjetas pueden registrarse en Plaspy para que los administradores vean qué conductor autorizado opera un vehículo.
- Los datos GPS en buffer almacenados durante la pérdida de conectividad se cargan cuando el dispositivo se reconecta y quedan visibles en el historial de viajes de Plaspy.
- Los eventos de alarma e inmovilización reportados por el dispositivo se registran y pueden activar notificaciones en Plaspy según las reglas de la plataforma.
- Los eventos de monitoreo de cabina opcionales (donde estén disponibles y permitidos) pueden reflejarse como entradas de dispositivo o eventos personalizados en Plaspy para flujos de trabajo de seguridad.

## Casos de uso típicos

- Seguimiento de ubicación y despacho en tiempo real para flotas de vehículos pequeñas y medianas.
- Responsabilidad del conductor y registro de turnos usando tarjetas RFID de identificación vinculadas a registros de operarios.
- Monitoreo antirrobo en el que el rastreador arma y inmoviliza el vehículo si la tarjeta del conductor asignado está ausente.
- Registro y recuperación posterior de datos GPS para rutas realizadas en áreas con cobertura celular intermitente.
- Monitoreo de seguridad que combina alarmas y audio de cabina opcional para contexto investigativo.

## Notas sobre disponibilidad de funciones

- El micrófono y el lector de tarjetas conectado por USB son accesorios opcionales y pueden no incluirse con todas las unidades VT-380A.
- Los flujos de trabajo de identificación de conductor requieren la instalación y configuración del lector inductivo externo y las tarjetas RFID.
- El comportamiento de tipo inmovilizador, como el corte de aceite y alimentación, depende del cableado e instalación específica realizada por un instalador y puede variar según el vehículo.
- La carga de datos y las notificaciones de alarma requieren cobertura celular GPRS y la configuración correcta del dispositivo para reportar a su plataforma servidor.
- Las revisiones de firmware y hardware pueden cambiar las funciones disponibles, las configuraciones o los formatos de evento. Confirme la compatibilidad de funciones para su unidad exacta y nivel de firmware.

## Por qué usar Plaspy con estas funciones

Combinar el VT-380A con Plaspy ofrece a las organizaciones una forma sencilla de consolidar ubicación de vehículos, identidad de conductores y eventos de alarma en una única vista operativa. Plaspy convierte los reportes periódicos de posición y eventos del dispositivo en vistas de mapa, registros de eventos y notificaciones configurables que apoyan la supervisión de flotas y los flujos de trabajo de seguridad.

Para obtener más información sobre cómo Plaspy puede aceptar y presentar reportes del VT-380A visite https://www.plaspy.com. Para las descripciones de funciones específicas del dispositivo más actualizadas, el comportamiento de firmware y los detalles de implementación del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ .
