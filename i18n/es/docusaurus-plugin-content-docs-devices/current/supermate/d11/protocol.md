---
slug: /supermate/d11/protocol
id: d11-protocol
sidebar_label: Protocol
title: Supermate - D11 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Supermate D11 y su comunicación con las conexiones compartidas de Plaspy
keywords:
  - Protocolo Supermate D11
  - Protocolo GPS Supermate D11
  - Rastreador D11 Plaspy
  - Protocolo rastreador GPS Supermate
  - Protocolo de comunicación D11
  - Compatibilidad Supermate D11 Plaspy
  - Rastreo de vehículos D11
  - Protocolo rastreador de activos D11
  - Soporte de dispositivos Plaspy
  - Guía protocolo de rastreador GPS
---

# Supermate - Protocolo D11

Esta página ofrece el contexto público del protocolo para usar el rastreador Supermate D11 con Plaspy. Describe a alto nivel cómo el dispositivo se comunica, qué puntos de conexión utiliza Plaspy y qué comportamientos de reporte del equipo son relevantes para la integración. El objetivo es ayudar a técnicos y administradores de flotas a comprender cómo el D11 intercambia datos de ubicación y alertas con una plataforma externa como Plaspy sin exponer detalles privados de implementación.

Plaspy emplea un conjunto de ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en orientación pública y práctica más que en los detalles internos del dispositivo.

## Resumen del protocolo

En este contexto, el protocolo de comunicación es el método que el D11 utiliza para reportar posición, estado e información de alertas a un servidor remoto. Para la compatibilidad con Plaspy, el protocolo permite la entrega confiable de actualizaciones de ubicación, latidos periódicos, notificaciones SOS y datos de eventos, de modo que la plataforma pueda mostrar información precisa y oportuna a usuarios e integraciones.

- Transporta la información de ubicación y temporización necesaria para mapas y geocercas
- Transmite indicadores de eventos como SOS, manipulación, cambios de alimentación y cruce de límites
- Permite al servidor identificar el dispositivo y asociar los reportes a una cuenta
- Soporta reportes periódicos y actualizaciones bajo demanda según la configuración del rastreador
- Proporciona la carga útil que Plaspy ingiere y normaliza para visualización y alertas

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes en un endpoint y puerto compartidos y realiza la detección automática del protocolo cuando el dispositivo se conecta y envía datos. En la mayoría de los casos, un D11 configurado correctamente para reportar a Plaspy no requiere selección manual de protocolo dentro de la plataforma.

- Plaspy acepta conexiones de dispositivos en el dominio público d.plaspy.com
- El servidor de Plaspy también es accesible en la IP pública 54.85.159.138
- Plaspy usa un único puerto para el reporte de dispositivos en todos los rastreadores soportados
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint
- Los usuarios normalmente solo necesitan configurar el rastreador para que reporte al endpoint de Plaspy y asegurarse de seleccionar el transporte correcto en el equipo

## Transporte y contexto de conexión

El D11 puede apuntarse al endpoint de Plaspy usando cualquiera de las opciones de transporte soportadas. Si el dispositivo usa UDP o TCP depende del firmware y de la configuración del rastreador. Plaspy escucha el tráfico entrante de dispositivos en un único puerto, lo que simplifica la configuración entre distintos modelos.

- Los dispositivos pueden configurarse para usar UDP en el puerto 8888 para reportes livianos
- Alternativamente pueden usar TCP en el puerto 8888 si el firmware lo soporta
- Los dispositivos pueden enviar a d.plaspy.com o directamente a 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la configuración por modelo
- Confirme que el modo de transporte elegido coincida con la configuración de firmware del D11 y el entorno de red

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar las opciones de reporte disponibles y la cadencia de mensajes
- Revisión de hardware o variantes regionales pueden habilitar o deshabilitar ciertas señales
- Los comandos de configuración del fabricante y los servidores por defecto varían según el modelo
- Elegir UDP frente a TCP afecta la confiabilidad y el comportamiento en redes móviles variables
- Valide los parámetros de reporte del dispositivo contra la documentación oficial del fabricante
- Las condiciones de red y el perfil de la SIM pueden influir en cómo se entregan los reportes a Plaspy
- Confirme la configuración de gestión de energía para asegurar el comportamiento esperado de latidos y sueño

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación ayuda a garantizar que el D11 reporte de forma confiable a Plaspy y que las alertas y actualizaciones de ubicación se interpreten correctamente. Un entendimiento claro del protocolo reduce el tiempo de configuración y facilita el diagnóstico de problemas de conectividad o de datos cuando ocurren.

- Acelera la puesta en servicio al alinear servidor y ajustes de transporte del dispositivo
- Ayuda a identificar si datos faltantes se deben al equipo, a la SIM o a la red
- Informa decisiones sobre intervalos de reporte y gestión de energía para optimizar la vida útil de la batería
- Mejora la confiabilidad de geocercas y SOS al alinear la configuración de eventos del rastreador con las expectativas del servidor
- Facilita la coordinación de actualizaciones de firmware y verificaciones de compatibilidad con el fabricante

## Ventajas de usar Plaspy con este protocolo

Usar el Supermate D11 con Plaspy ofrece a las organizaciones una vía directa para seguimiento en tiempo real, monitorización de geocercas y gestión de alertas de emergencia dentro de una plataforma única. Los ajustes de conexión compartidos y la detección automática de protocolos de Plaspy reducen la complejidad de configuración, permitiendo que los despliegues escalen con menos pasos específicos por modelo.

Conozca más sobre Plaspy y cómo gestiona la conectividad de dispositivos en https://www.plaspy.com. Para el comportamiento más actual del protocolo específico del dispositivo y detalles de firmware, verifique la información más reciente en el sitio del fabricante en http://www.gps-summit.com/ que puede cambiar con el tiempo.
