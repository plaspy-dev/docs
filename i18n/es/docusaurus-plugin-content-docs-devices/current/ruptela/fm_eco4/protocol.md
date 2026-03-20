---
slug: /ruptela/fm_eco4/protocol
id: fm_eco4-protocol
sidebar_label: Protocol
title: Ruptela - FM-Eco4 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GPS Ruptela FM-Eco4 y su comunicación con Plaspy mediante la conexión compartida
keywords:
  - Protocolo Ruptela FM-Eco4
  - Ruptela FM-Eco4 GPS
  - Seguimiento FM-Eco4
  - Ruptela con Plaspy
  - Protocolo de rastreador GPS
  - Protocolo de seguimiento de vehículos
  - Rastreador para gestión de flotas
  - Compatibilidad FM-Eco4
  - Comunicación del rastreador con Plaspy
  - Protocolo GPS Ruptela
---

# Ruptela - Protocolo FM-Eco4

Esta página explica el contexto público del protocolo para usar el rastreador GPS Ruptela FM-Eco4 con Plaspy. Se centra en cómo el dispositivo transmite telemetría y eventos generales a la plataforma Plaspy y qué esperar al integrar el equipo para monitoreo y control de flotas. El contenido está dirigido a usuarios técnicos y administradores de flota que requieren una explicación clara y no sensible sobre el papel del protocolo en una implementación con Plaspy.

Plaspy utiliza un conjunto compartido de ajustes de conexión para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página describe los aspectos públicos de la comunicación y recomienda verificar con la documentación más reciente de Ruptela.

## Resumen del protocolo

A un alto nivel, el protocolo del FM-Eco4 permite que el rastreador envíe posición, estado e información de sensores del vehículo a Plaspy, de modo que la plataforma pueda mostrar datos de ubicación, recorridos y operaciones a los usuarios. El protocolo regula cómo el dispositivo se identifica, reporta telemetría y envía notificaciones de eventos que Plaspy utiliza para mapeo, alertas y análisis.

- Transmite telemetría esencial como ubicación del vehículo, velocidad, historial de rutas, nivel de combustible y lecturas del odómetro al servidor.
- Envía información del conductor y eventos utilizados en funciones como identificación del conductor, puntuación Eco-Drive y estado del encendido.
- Reporta datos de sensores auxiliares cuando están disponibles, por ejemplo temperatura o entradas de alarma, lo que permite a Plaspy soportar casos de uso de monitoreo adicionales.
- Ofrece actualizaciones periódicas y basadas en eventos para que Plaspy mantenga visibilidad casi en tiempo real y registros históricos de las operaciones de la flota.
- Funciona junto con las características de firmware y hardware del dispositivo (carcasa IP67, batería interna opcional en FM-Eco4+) para asegurar reportes confiables en entornos exigentes.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de numerosos modelos de rastreadores y determinar automáticamente el protocolo entrante. Cuando un FM-Eco4 está configurado para reportar a Plaspy, la plataforma usa el endpoint y puerto compartidos para recibir datos y asociar los mensajes entrantes con el dispositivo y el conjunto de funciones correctas.

- Plaspy utiliza un único endpoint compartido accesible en d.plaspy.com y también acepta conexiones hacia la IP pública del servidor 54.85.159.138.
- Todos los dispositivos que se comunican con Plaspy usan el mismo puerto, lo que simplifica la configuración saliente en los equipos.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo reporta al endpoint de Plaspy.
- La configuración adecuada del dispositivo en el lado del rastreador (dirección del servidor y transporte correctos) es el requisito habitual para habilitar la detección y el procesamiento automáticos.
- Si el dispositivo está configurado para presentar información identificativa y telemetría estándar, Plaspy mapeará esos reportes a las capacidades del FM-Eco4 para su visualización y generación de alertas.

## Transporte y contexto de conexión

Las opciones de conexión y transporte forman parte del contexto público de integración, pero no requieren exponer el enmarcado interno del protocolo. El FM-Eco4 puede configurarse para usar distintos transportes según la configuración del equipo y las condiciones de la red. Plaspy admite esos transportes estándar en el puerto compartido para recibir los datos del rastreador de forma fiable.

- El FM-Eco4 puede configurarse para reportar mediante UDP o TCP en el puerto 8888 según el soporte del dispositivo y las elecciones de configuración local.
- Los equipos pueden apuntar al servidor Plaspy por el hostname d.plaspy.com o por la IP pública del servidor 54.85.159.138.
- Plaspy acepta tráfico UDP y TCP en el puerto 8888 y usa el mismo puerto para todos los rastreadores compatibles.
- Elegir TCP o UDP puede afectar los patrones de entrega y el comportamiento de retransmisión a nivel de transporte, por lo que debe seleccionarse la opción que coincida con la configuración del dispositivo y las necesidades de confiabilidad de la red.
- Asegúrese de que las reglas de red salientes y los firewalls permitan que el dispositivo alcance d.plaspy.com o la IP especificada en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar según las versiones de firmware del dispositivo; verifique las notas de la versión del FM-Eco4 para detectar cambios que afecten el comportamiento de los reportes.
- Las revisiones de hardware o las variantes FM-Eco4+ con batería interna o sensores adicionales pueden exponer campos de telemetría o tipos de eventos distintos.
- Las herramientas de configuración del fabricante (por ejemplo SMS o utilidades de configuración) pueden modificar el transporte o los ajustes del servidor y deben utilizarse conforme a las indicaciones de Ruptela.
- La selección de UDP frente a TCP en el equipo es una elección de configuración que puede afectar la entrega de mensajes y la frecuencia de reporte en determinadas condiciones.
- La detección automática de protocolo de Plaspy reduce la configuración manual en la plataforma, pero sigue siendo esencial configurar correctamente el servidor y el transporte en el dispositivo.
- Siempre valide que el dispositivo esté enviando datos al endpoint de Plaspy y que aparezca en la plataforma luego de realizar cambios de configuración.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el FM-Eco4 ayuda a asegurar una puesta en marcha fluida, operación confiable y una resolución de problemas más rápida al usar el dispositivo con Plaspy. Conocer cómo reporta el rastreador los datos y qué transportes utiliza permite a los equipos de flota diagnosticar brechas de conectividad y datos con mayor eficiencia.

- Confirma que el equipo está configurado para reportar al endpoint y transporte correctos de Plaspy, de modo que el rastreador aparezca en la plataforma.
- Facilita la resolución de problemas de conectividad al aclarar el comportamiento de reporte esperado e identificar si los problemas son de red o del dispositivo.
- Ayuda a planificar actualizaciones de firmware o cambios de hardware que puedan alterar la telemetría disponible o la semántica de los eventos.
- Mejora la integración de funciones del dispositivo como identificación de conductor, métricas Eco-Drive y lecturas de sensores auxiliares en los flujos de trabajo de Plaspy.
- Permite tomar decisiones operativas más informadas sobre selección de transporte, intervalos de reporte y configuración de alertas según las necesidades específicas de la flota.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-Eco4 con Plaspy ofrece a las organizaciones una visibilidad práctica sobre la ubicación del vehículo, el consumo de combustible, el comportamiento del conductor y el rendimiento de rutas. La combinación de un rastreador resistente y una plataforma que detecta automáticamente los protocolos de los dispositivos ayuda a minimizar la carga de configuración y a proveer los datos necesarios para optimizar rutas, controlar combustible y supervisar el cumplimiento normativo.

Si desea conocer más sobre cómo funciona Plaspy con dispositivos como el Ruptela FM-Eco4 o revisar opciones de despliegue, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo, comportamiento de firmware e instrucciones oficiales de configuración consulte al fabricante en https://ruptela.com/ ya que las implementaciones y conjuntos de funciones del dispositivo pueden cambiar con el tiempo.
