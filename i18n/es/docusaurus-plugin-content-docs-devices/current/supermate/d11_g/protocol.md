---
slug: /supermate/d11_g/protocol
id: d11_g-protocol
sidebar_label: Protocol
title: Supermate - D11-G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Supermate D11 G y cómo se comunica con Plaspy para rastreo y gestión de flotas
keywords:
  - Protocolo Supermate D11 G
  - Protocolo GPS Supermate D11
  - Compatibilidad Supermate D11 G Plaspy
  - Protocolo de comunicación Supermate D11
  - Protocolo de rastreo D11 G
  - Protocolo rastreador GPS Supermate
  - Compatibilidad de dispositivos Plaspy
  - Protocolo GPS Plaspy
  - rastreo de flotas Supermate D11
  - rastreo de activos D11 G
---

# Supermate - Protocolo D11-G

Esta página describe, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador GPS Supermate D11 con Plaspy. El objetivo es que usted, como administrador o integrador, entienda cómo se realizan los reportes, la conectividad y las consideraciones de compatibilidad sin exponer detalles privados de implementación.

El Supermate D11 es un rastreador compacto y portátil pensado para activos, vehículos y protección personal. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte la documentación del fabricante para detalles específicos del modelo cuando sea necesario.

## Visión general del protocolo

El protocolo del dispositivo es el conjunto de reglas que el D11 utiliza para enviar ubicación, estado y alertas a un servidor remoto. Para Plaspy, el protocolo define cómo el rastreador se identifica, cómo reporta posiciones periódicas o por eventos y cómo se representan, a alto nivel, las confirmaciones de comandos o configuraciones.

- Permite al D11 enviar posiciones GPS, estado del equipo y eventos de alerta al endpoint de Plaspy.
- Incluye información identificadora para que Plaspy asocie los datos entrantes con un registro de dispositivo concreto.
- Traduce la telemetría del dispositivo en actualizaciones de ubicación y estado útiles para monitoreo e informes.
- Soporta reportes periódicos y mensajes por eventos como SOS o alertas de geocerca.
- Funciona sobre canales de transporte estándar para que el rastreador pueda alcanzar el servidor de Plaspy desde distintas redes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador a partir del patrón de tráfico y los identificadores del dispositivo. En la mayoría de los casos, cuando un D11 está configurado para reportar a Plaspy no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy escucha en un único puerto común el tráfico de dispositivos de los modelos soportados.
- La plataforma inspecciona la identificación del dispositivo entrante y el patrón de mensajes para mapear los datos al registro correcto.
- Generalmente sólo debe configurar el rastreador para que reporte al endpoint de Plaspy; la detección la realiza Plaspy automáticamente.
- La configuración correcta en el dispositivo (dirección del servidor de red y transporte) es el paso más habitual para lograr una detección exitosa.
- Si un dispositivo usa múltiples modos de reporte, confirme que el rastreador esté en el modo esperado en su configuración.

## Transporte y contexto de conexión

El D11 puede usar UDP o TCP para enviar datos a Plaspy, según la configuración del rastreador y las capacidades del firmware. Plaspy proporciona un endpoint público único al que los dispositivos pueden reportar, y todos los dispositivos compatibles usan el mismo puerto.

- Plaspy server domain is d.plaspy.com for DNS based configuration.
- Plaspy server IP is 54.85.159.138 when a numeric address is required.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de equipos y el enrutamiento en la plataforma.
- Seleccione TCP o UDP en el dispositivo según la cobertura y las necesidades de confiabilidad en su área de despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los eventos disponibles o las opciones de transporte por defecto; siempre verifique la compatibilidad con la versión de firmware en uso.
- Las revisiones de hardware o las variantes del producto pueden implementar opciones de reporte o comportamiento de entradas ligeramente distintos.
- Algunas funciones, como SOS, geocercas o reporte de energía, pueden ser opcionales o requerir configuración específica en el dispositivo.
- La selección del transporte (UDP vs TCP) puede afectar la fiabilidad de entrega y debe ajustarse a las condiciones de red y a la configuración del equipo.
- Las herramientas de configuración del fabricante o las opciones del proveedor de SIM pueden influir en cómo el dispositivo alcanza Plaspy y deben revisarse al solucionar problemas.
- Confirme que los identificadores que reporta el rastreador coincidan con el registro del dispositivo esperado en Plaspy para evitar atribuciones erróneas.

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del D11 ayuda a asegurar una configuración confiable, agilizar la resolución de problemas y predecir el comportamiento operacional al integrar el rastreador con Plaspy. Tener claro qué envía el dispositivo y cómo lo recibe Plaspy reduce el tiempo de puesta en marcha y facilita el mantenimiento a largo plazo.

- Permite verificar que el dispositivo está reportando correctamente a d.plaspy.com o a la dirección numérica del servidor.
- Ayuda a decidir entre TCP o UDP en entornos donde un transporte es más estable.
- Facilita la interpretación del estado del dispositivo y de los mensajes de eventos en Plaspy durante la fase de validación.
- Reduce el tiempo necesario para resolver por qué un rastreador no aparece o por qué falta telemetría.
- Apoya la planificación de actualizaciones de firmware y la comprensión de cómo los cambios pueden afectar los reportes.

## Por qué usar Plaspy con este protocolo

Usar el Supermate D11 con Plaspy ofrece un camino sencillo hacia la visibilidad de activos y la supervisión operativa. El diseño compacto del D11 y funciones como rastreo en tiempo real, geocercas y eventos SOS se transforman en datos accionables cuando se entregan a una plataforma que gestiona la detección de dispositivos y la conectividad unificada.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación de dispositivos y reducen la carga de configuración para los administradores que gestionan flotas mixtas. To learn more about Plaspy and how it supports device connectivity and fleet management, visit https://www.plaspy.com. Please verify the latest device specific protocol details, firmware behavior, and manufacturer guidance on the official Supermate website http://www.gps-summit.com/ as implementations can change over time.
