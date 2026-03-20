---
slug: /gelix/gelix_2/features
id: gelix_2-features
sidebar_label: Features
title: Gelix - Gelix 2 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Gelix 2 y su integración con Plaspy para seguimiento alertas voz y control remoto
keywords:
  - Gelix
  - Gelix 2
  - características Gelix 2
  - rastreador GPS Gelix 2
  - Gelix 2 Plaspy
  - rastreador GPS Gelix
  - seguimiento de vehículos Gelix
  - capacidades Gelix 2
  - funciones Gelix 2
  - seguimiento de flotas Gelix
---

# Gelix - Funciones de Gelix 2

Esta página describe el contexto público de funcionalidades al usar el rastreador Gelix 2 con Plaspy. Resume las capacidades del dispositivo relevantes para la monitorización de flotas y activos, los tipos de eventos y controles que la unidad puede proporcionar, y cómo suelen presentarse esas capacidades al reportar en Plaspy. La información aquí está pensada para planificación general, integración y comprensión operativa.

La disponibilidad exacta de funciones en una unidad Gelix 2 concreta puede variar según la versión de firmware, la revisión de hardware, el cableado e accesorios instalados, las opciones regionales de conectividad celular y las decisiones de implementación del fabricante. Para configuración específica del dispositivo, detalles de configuración y las especificaciones técnicas más recientes, consulte la documentación oficial de Gelix.

## Descripción general de funciones

El Gelix 2 es un rastreador GPS multipropósito diseñado para ofrecer reporte de posición, mensajería de eventos y capacidades de control remoto, además de funciones de escucha y comunicación por voz. Cuando se integra con Plaspy, el Gelix 2 puede proveer conocimiento de ubicación, notificaciones de alarmas y control remoto de salidas para ayudar a los equipos operativos a supervisar y responder ante incidentes.

- Seguimiento activo con reportes periódicos de posición y registro de datos a bordo para revisar rutas e historial.
- Mensajería de alarmas y eventos para condiciones como exceso de velocidad, umbrales de temperatura y entrada en zonas restringidas.
- Funciones de escucha y comunicación por voz para habilitar monitoreo de audio remoto y comunicación bidireccional donde esté permitido.
- Control remoto de salidas y relés vía canales de datos GSM GPRS para accionamiento de dispositivos externos y control por eventos.
- Gestión remota del dispositivo incluyendo configuración y actualización de firmware OTA a través de canales de datos celulares.

## Características principales del Gelix 2

- Rastreo GPS activo y registro de posiciones para historial de ubicaciones y actualizaciones en tiempo real.
- Reporte de alarmas y eventos para condiciones configurables y eventos predefinidos.
- Capacidades de escucha y comunicación por voz para soportar monitoreo de audio remoto y llamadas.
- Control remoto de salidas incluyendo control periódico de relés y conmutación de salidas basada en eventos.
- Gestión del sistema y configuración a través de canales de datos celulares, incluida la posibilidad de actualizar firmware de forma remota.
- Soporte para múltiples métodos de conectividad como GSM, SMS, CSD, GPRS y serial RS232 para mayor flexibilidad de integración.
- Diversos modos de seguimiento y tipos de eventos para ajustar el comportamiento de reporte a las necesidades operativas.
- Mensajería de eventos diseñada para integrarse con plataformas de monitoreo y facilitar notificaciones oportunas.

## Cómo se integran con Plaspy

Cuando una unidad Gelix 2 está conectada a Plaspy, el dispositivo reporta ubicaciones y mensajes de evento a la plataforma, donde se vuelven visibles para los operadores y los procesos automatizados. Plaspy puede aceptar tráfico de rastreo y eventos de dispositivos Gelix 2 y presentar esos datos en mapas, líneas de tiempo y flujos de alertas para uso operativo.

- Los puntos de ubicación en tiempo real e históricos aparecen en los mapas de Plaspy y en las vistas de historial de trayecto para análisis de rutas.
- Los mensajes de alarma y eventos se muestran como notificaciones y entradas en la línea de tiempo para apoyar respuesta rápida y registros de auditoría.
- Desde Plaspy se pueden emitir comandos de control remoto hacia dispositivos que soporten control sobre canales de datos GSM GPRS, permitiendo accionamientos remotos cuando estén configurados.
- Los cambios de gestión y configuración del dispositivo enviados por datos celulares pueden coordinarse a través de Plaspy y registrarse en el historial de ajustes del equipo.
- Plaspy detecta automáticamente protocolos de rastreadores compatibles y acepta conexiones a su dominio de servidor público como d.plaspy.com usando TCP o UDP en el puerto común de la plataforma para simplificar la incorporación de dispositivos.

## Casos de uso típicos

- Seguimiento de ubicación de flotas y revisión de historial de rutas para optimizar logística y despacho.
- Protección de activos con notificaciones de alarma por movimientos no autorizados o ingreso a zonas restringidas.
- Monitoreo remoto y comunicación por voz para verificaciones de seguridad o corroboración de incidentes.
- Control remoto de salidas montadas en vehículos para gestionar equipos auxiliares o responder a eventos.
- Supervisión de vehículos de servicio en campo, incluyendo reportes programados y alertas basadas en eventos.
- Configuración centralizada de dispositivos y gestión de firmware para flotas distribuidas.

## Notas sobre disponibilidad de funciones

- La presencia y el comportamiento de las funciones dependen de la versión de firmware del dispositivo y del conjunto de funciones implementadas por el fabricante.
- Las revisiones de hardware y los accesorios u opciones de cableado pueden afectar la disponibilidad de salidas de relé y funciones de audio.
- El soporte de redes celulares regionales o la configuración de operadores puede limitar ciertos modos de conectividad o funciones de voz.
- Restricciones legales y regulatorias pueden afectar el uso de funciones de escucha y voz en algunas jurisdicciones; siempre verifique la normativa local.
- Para detalles de configuración y conjuntos de comandos exactos, consulte la documentación del fabricante Gelix y las notas de lanzamiento.

## Por qué usar Plaspy con estas funciones

Usar dispositivos Gelix 2 con Plaspy ofrece una vía práctica para centralizar flujos de trabajo de ubicación, eventos y control. Plaspy recopila puntos de rastreo y mensajes de eventos, haciéndolos accionables mediante mapas, alertas y capacidades de envío de comandos a dispositivos, de modo que los equipos operativos mantengan visibilidad y puedan responder con eficiencia.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores como el Gelix 2 visite https://www.plaspy.com. Verifique siempre las funciones de dispositivo más recientes, el comportamiento del firmware y los detalles de implementación con el fabricante en http://www.gelix.com/ ya que las capacidades y el firmware pueden cambiar con el tiempo.
