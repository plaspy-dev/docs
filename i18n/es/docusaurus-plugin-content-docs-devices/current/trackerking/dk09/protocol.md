---
slug: /trackerking/dk09/protocol
id: dk09-protocol
sidebar_label: Protocol
title: TrackerKing - DK09 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del TrackerKing DK09 y cómo se comunica con Plaspy para seguimiento en tiempo real y monitoreo antirrobo
keywords:
  - protocolo TrackerKing DK09
  - protocolo GPS TrackerKing DK09
  - protocolo de comunicación TrackerKing DK09
  - compatibilidad DK09 Plaspy
  - protocolo de rastreador Plaspy
  - rastreador GPS DK09
  - rastreador GPS tipo relé
  - rastreo vehicular DK09
  - protocolo inmovilizador DK09
  - rastreo de flotas DK09
---

# TrackerKing - Protocolo DK09

Esta página describe el contexto público del protocolo para usar el TrackerKing DK09 con Plaspy. Explica cómo el comportamiento de reporte y la telemetría de eventos del dispositivo se integran con la plataforma Plaspy sin exponer detalles privados de implementación, enfocándose en las consideraciones prácticas de conexión y compatibilidad necesarias para el despliegue y la resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando el DK09 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto de comunicación y las consideraciones operativas más que los detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de reporte del DK09 es el mecanismo mediante el cual el tracker envía posiciones GNSS, actualizaciones de estado, eventos de alarma y telemetría básica a Plaspy para que la ubicación, el historial de ruta y las alarmas estén disponibles para los usuarios. El protocolo permite que el dispositivo se identifique, transmita datos de ubicación y estado utilizables, y genere alertas de evento que Plaspy convierte en notificaciones y registros.

- Permite la transmisión de posiciones y eventos de movimiento o alarma a Plaspy para monitoreo en tiempo real.
- Transporta telemetría como estado de ignición, pérdida de alimentación y estado del inmovilizador para que Plaspy muestre el estado del dispositivo.
- Proporciona reportes identificables para que Plaspy asocie los mensajes entrantes con el vehículo o activo correcto.
- Soporta reportes periódicos y basados en eventos para capturar rutas históricas y alertas inmediatas.
- Actúa como puente entre el hardware DK09 y los servicios de Plaspy sin exponer los internos del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy recibe la telemetría entrante en un único endpoint y puerto compartido y usa esa información para identificar el tipo de tracker e interpretar los mensajes. En la mayoría de las implementaciones el usuario no necesita seleccionar un protocolo dentro de Plaspy siempre que el DK09 esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP pública de Plaspy para reporte es 54.85.159.138 cuando se usa configuración por IP directa.
- El puerto de reporte de Plaspy es 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto para simplificar la configuración.
- Los dispositivos pueden estar configurados para enviar datos por UDP o TCP a Plaspy en el puerto 8888 según capacidades del equipo y requisitos de red.
- Cuando el DK09 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del tracker, por lo que normalmente no es necesario seleccionar el protocolo manualmente.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el DK09 puede alcanzar Plaspy y qué opciones de transporte son las más comunes. Entender el transporte y los ajustes del endpoint es útil al configurar dispositivos o al diagnosticar conectividad con operadores celulares o APN privados.

- El DK09 puede configurarse para usar transporte UDP o TCP hacia Plaspy según el firmware y la preferencia del cliente.
- Plaspy acepta reportes de trackers en d.plaspy.com o en la dirección directa 54.85.159.138 para instalaciones que requieren ajustes basados en IP.
- Todos los dispositivos de Plaspy comparten el mismo puerto de reporte, el puerto 8888, lo que simplifica la puesta en marcha entre distintos modelos de trackers.
- La elección entre UDP y TCP afecta las características de entrega, pero no impide que el DK09 reporte posiciones y eventos a Plaspy.
- Confirme la capacidad de transporte y la configuración del APN en el DK09 antes del despliegue para asegurar que las sesiones celulares permitan conexiones salientes hacia el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y las funciones opcionales; verifique la versión de firmware del DK09 al validar comportamientos.
- Las revisiones de hardware o SKUs regionales pueden alterar las bandas celulares soportadas o los valores predeterminados de transporte; confirme los detalles del modelo físico antes de un despliegue de flota.
- Los comandos de configuración del fabricante y los valores por defecto a veces difieren entre distribuidores; revise siempre las etiquetas del dispositivo DK09 y los ajustes de fábrica.
- En entornos de red restringidos puede ser necesario seleccionar UDP o TCP; elija el transporte que mejor se adapte al comportamiento del operador y del APN.
- Plaspy detecta los protocolos entrantes de forma automática, pero son necesarios los ajustes correctos del endpoint en el dispositivo para una detección y parseo fiables.
- Valide el soporte de funciones como control de inmovilizador, reporte de ACC y entradas de sensores contra la documentación del fabricante para su unidad DK09 específica.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del DK09 ayuda a gerentes de flotas e integradores a garantizar reportes confiables, reducir tiempos de configuración y acelerar la resolución de problemas cuando los dispositivos no funcionan como se espera. Conocer el contexto del protocolo aclara cómo fluye la información desde el tracker hacia Plaspy y qué revisar cuando falta telemetría o no se reciben alarmas.

- Ayuda a identificar si los problemas de conectividad provienen de ajustes de transporte, APN o configuración del equipo.
- Orienta la verificación de compatibilidad de firmware y hardware antes de despliegues a gran escala.
- Informa la decisión sobre usar UDP o TCP según el entorno de red y las necesidades de confiabilidad.
- Facilita pasos de diagnóstico efectivos como confirmar que el DK09 apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Asegura que las funciones de alarma e inmovilizador estén habilitadas e interpretadas correctamente por Plaspy para la respuesta operativa.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing DK09 con Plaspy proporciona a las organizaciones una solución de rastreo discreta y resiliente que integra reporte de posición, alertas por pérdida de energía, estado de ignición y control remoto de inmovilizador en una sola plataforma. Plaspy procesa la telemetría del DK09 para seguimiento en vivo, reproducción de rutas históricas y notificaciones de eventos, haciendo el dispositivo útil para flujos de trabajo anti robo, supervisión de flotas y métricas operativas.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el DK09, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware y guías de instalación vigentes, verifique la información más reciente del fabricante en https://trackerking.cn/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
