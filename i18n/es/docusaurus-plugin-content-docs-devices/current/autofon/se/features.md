---
slug: /autofon/se/features
id: se-features
sidebar_label: Features
title: AutoFon - SE+ Маяк Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador AutoFon SE+ Маяк y su integración con Plaspy para reporte y monitoreo de ubicación
keywords:
  - características AutoFon SE+ Маяк
  - rastreador GPS AutoFon
  - capacidades SE+ Маяк
  - compatibilidad AutoFon Plaspy
  - rastreador GLONASS GPS
  - reporte de ubicación GPRS
  - botón SOS micro
  - micrófono incorporado
  - detección de movimiento e impactos
  - almacenamiento tipo caja negra
---

# Funciones de AutoFon - SE+ Маяк

Esta página ofrece un resumen público de las funciones del rastreador GPS AutoFon SE+ Маяк y explica cómo sus capacidades documentadas se reflejan en el reporte y monitoreo cuando se usa con Plaspy. Se centra en funciones observables y orientadas al usuario y en usos prácticos, no en detalles privados o de bajo nivel de configuración.

La disponibilidad exacta de las funciones puede variar según la versión de firmware, la revisión de hardware, el método de instalación, la variante regional y la implementación del fabricante. Para comandos específicos del equipo, notas de firmware y los detalles técnicos más recientes consulte la documentación oficial de AutoFon.

## Resumen de funciones

El AutoFon SE+ Маяк es un rastreador compacto diseñado para determinar y transmitir la ubicación usando GLONASS+GPS y para reportar por SMS o GPRS a un servidor de monitoreo seleccionado. Su tamaño reducido y su conjunto ampliado de funciones lo hacen apto para diversos escenarios de seguimiento móviles y estacionarios.

- Navegación combinada GLONASS y GPS para mejorar la determinación de posición y la fiabilidad del posicionamiento.
- Opciones duales de reporte: envío de coordenadas por SMS al propietario o transmisión por GPRS a un servidor de monitoreo.
- Micrófono incorporado para escucha remota del entorno de instalación sujeto a la normativa local y permisos.
- Detección de movimiento, impactos y accidentes con sensibilidad ajustable e intervalos de reactivación para reportes basados en eventos.
- Microbotón SOS para enviar una señal de emergencia con información de coordenadas.
- Caja negra integrada capaz de almacenar un gran número de paquetes GPRS para buffering offline y carga posterior.

## Funciones principales de AutoFon - SE+ Маяк

- Módulo de navegación GLONASS y GPS para obtener fijaciones de posición más precisas en distintas condiciones.
- Reporte por GPRS a un servidor de monitoreo seleccionado o reporte por SMS a números de teléfono designados.
- Sensores de movimiento e impacto con sensibilidad configurable y temporización de reactivación.
- Detección basada en acelerómetro digital para generación de eventos de movimiento e impacto.
- Micrófono incorporado para escucha remota del entorno de instalación.
- Microbotón SOS para alertas manuales de emergencia.
- Almacenamiento tipo caja negra capaz de retener numerosos paquetes GPRS cuando se interrumpe la conectividad.
- Soporte para actualizaciones remotas de firmware vía GPRS para mantener el comportamiento del dispositivo actualizado.

## Cómo funcionan estas funciones con Plaspy

Plaspy recibe informes de ubicación y eventos por GPRS desde dispositivos compatibles y expone la ubicación, el estado y los eventos en la plataforma para monitoreo y uso operativo. Al usar AutoFon SE+ Маяк con Plaspy, los reportes GPRS pueden dirigirse al servidor de monitoreo de Plaspy y serán procesados para su visualización y gestión de eventos.

- Las actualizaciones de ubicación por GPRS desde el dispositivo son recibidas por Plaspy y aparecen como actualizaciones de posición en mapas y líneas de tiempo.
- Los eventos de movimiento, impacto, accidente y SOS reportados por el dispositivo se presentan como eventos en Plaspy para conocimiento del operador y seguimiento.
- Las cargas de paquetes desde la caja negra son útiles para restaurar telemetría perdida tras interrupciones temporales de conectividad y Plaspy las procesa cuando se transmiten.
- El soporte de actualización remota de firmware por GPRS permite flujos de trabajo de mantenimiento mientras el dispositivo se administra a través de la infraestructura de Plaspy.
- Plaspy detecta automáticamente los protocolos de rastreadores compatibles y acepta los reportes enviados al endpoint de monitoreo de Plaspy, lo que facilita la incorporación de dispositivos.

Nota: El AutoFon SE+ Маяк también puede enviar mensajes SMS directamente a los propietarios; los SMS son independientes del reporte a servidor GPRS y se utilizan para notificaciones directas o configuraciones rápidas en muchas instalaciones.

## Casos de uso habituales

- Seguimiento de flotas y activos para autos, motocicletas y vehículos pequeños donde se requiere una instalación discreta.
- Control de carga valiosa o equipos en tránsito con reportes periódicos de posición y detección de impactos.
- Protección remota de objetos como garajes, cabañas, kioscos y otros activos estacionarios.
- Rastreo personal para personas, niños o animales donde el tamaño compacto y el SOS son importantes.
- Investigación de incidentes o reproducción de recorridos usando paquetes de la caja negra para reconstruir rutas tras cortes de conectividad.
- Monitoreo de audio remoto cuando esté permitido, para conciencia situacional en ubicaciones vigiladas.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante pueden habilitar, modificar o desactivar ciertas funciones; confirme los comandos y comportamientos soportados por el firmware de su dispositivo.
- Las revisiones de hardware y los módulos de expansión opcionales pueden cambiar las interfaces disponibles o los canales de control externos.
- El tipo de instalación y el cableado afectan qué funciones del dispositivo están disponibles o cómo se comportan los sensores en la práctica.
- Las diferencias regionales o del operador pueden influir en el comportamiento GPRS, los planes de datos y la entrega de SMS.
- Considere siempre la documentación oficial de AutoFon para limitaciones específicas del dispositivo, diagramas de conexión y actualizaciones de firmware soportadas.

## Por qué usar Plaspy con estas funciones

Usar Plaspy con el AutoFon SE+ Маяк centraliza el reporte de ubicación, la visibilidad de eventos y la gestión de dispositivos a lo largo de una flota o un conjunto de activos monitoreados. Plaspy convierte los reportes GPRS, los paquetes almacenados en la caja negra y las señales de evento del dispositivo en información accionable disponible en mapas, líneas de tiempo y herramientas de reporte para operadores y gestores.

Si desea explorar cómo Plaspy puede integrarse con dispositivos AutoFon y apoyar el monitoreo remoto y la gestión de eventos, conozca más sobre Plaspy en https://www.plaspy.com. Para especificaciones de dispositivo, notas de firmware y orientación del fabricante más actuales y autorizadas verifique los detalles en el sitio oficial de AutoFon https://www.autofon.ru/.
