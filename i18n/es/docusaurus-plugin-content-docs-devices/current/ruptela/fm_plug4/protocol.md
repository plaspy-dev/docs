---
slug: /ruptela/fm_plug4/protocol
id: fm_plug4-protocol
sidebar_label: Protocol
title: Ruptela - FM-Plug4 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Ruptela FM-Plug4 y su comunicación con Plaspy para integración de rastreo vehicular
keywords:
  - protocolo Ruptela FM-Plug4
  - protocolo GPS Ruptela FM-Plug4
  - compatibilidad FM-Plug4 con Plaspy
  - protocolo de rastreador Ruptela
  - comunicación FM-Plug4
  - rastreo vehicular Ruptela
  - rastreador OBD FM-Plug4
  - protocolo Ruptela para Plaspy
  - protocolo de rastreo FM-Plug4
  - protocolo GPS Ruptela
---

# Ruptela - Protocolo FM-Plug4

Esta página explica el contexto público del protocolo utilizado por el rastreador Ruptela FM-Plug4 y cómo se comunica con Plaspy. Se centra en la forma en que el dispositivo reporta ubicación y telemetría a una plataforma de gestión de flotas y en qué esperar al integrar el FM-Plug4 para monitoreo vehicular, alertas por robo, reporte de fallas OBD-II (FM-Plug4+) y funciones relacionadas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de unidades FM-Plug4 pueden comenzar a reportar sin necesidad de una selección manual en la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por ello esta página mantiene un enfoque público y agnóstico en la implementación, y recomienda revisar la documentación del fabricante para detalles específicos de firmware.

## Descripción general del protocolo

El protocolo es el conjunto de reglas que el FM-Plug4 usa para enviar datos como la posición GPS, alertas de movimiento, reportes de errores OBD-II (en FM-Plug4+) y eventos de estado a un servidor remoto. En la integración con Plaspy, el protocolo permite que el dispositivo se identifique, transmita telemetría que Plaspy pueda interpretar y active alertas en las que los administradores de flota confían.

- Transporta posiciones GPS, notificaciones de eventos y diagnósticos básicos desde el dispositivo hacia el servidor.
- Lleva información de identidad y sesión para que Plaspy asocie los mensajes entrantes con el vehículo y el dispositivo correctos.
- Envía tipos de eventos discretos como alertas de robo, extracción del dispositivo, remolque y notificaciones de fallas OBD-II cuando están soportadas.
- Soporta tanto transportes persistentes como sin conexión según la configuración del equipo, lo que permite escenarios de instalación flexibles.
- Proporciona los puntos de datos que Plaspy mapea a los paneles de ubicación del vehículo, estado y comportamiento del conductor.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido e identifica el protocolo del dispositivo a partir de los mensajes que recibe. Dado que Plaspy soporta detección automática de protocolo, normalmente usted no necesita elegir un protocolo en la plataforma cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el FM-Plug4 reporta en la plataforma.
- El mismo endpoint y puerto de Plaspy se usan para todos los dispositivos compatibles, lo que simplifica el despliegue.
- Cuando un dispositivo se configura para enviar datos a Plaspy, la plataforma inspecciona los informes entrantes y los compara con patrones de protocolos soportados.
- Normalmente usted solo necesita establecer la dirección de reporte del dispositivo y el tipo de transporte; Plaspy se encarga de la detección y el parsing en el servidor.
- Para variantes inusuales de firmware o configuraciones personalizadas, se recomienda validar los ajustes de reporte del dispositivo frente a los detalles de conexión de Plaspy.

## Contexto de transporte y conexión

Conectar el FM-Plug4 a Plaspy requiere apuntar el dispositivo al servidor de Plaspy usando los ajustes de red compartidos de la plataforma. Los dispositivos pueden configurarse para usar UDP o TCP en el mismo puerto, y los menús de configuración del equipo suelen aceptar tanto nombres de dominio como direcciones IP.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto para conexiones con Plaspy es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que estandariza los ajustes de conexión entre modelos.
- Elija UDP o TCP según el firmware del dispositivo y las consideraciones de confiabilidad de la red; la configuración del dispositivo determina qué transporte se usa.
- Configure la dirección de reporte del FM-Plug4 hacia d.plaspy.com o hacia 54.85.159.138 según su estrategia de aprovisionamiento y las limitaciones de su red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o cambiar tipos de mensajes y parámetros de configuración; verifique la versión de firmware del FM-Plug4 al solucionar problemas.
- Variantes de hardware como FM-Plug4 y FM-Plug4+ introducen diferencias funcionales para características como batería interna y reporte de errores OBD-II.
- La selección de transporte (UDP frente a TCP) puede afectar el comportamiento de entrega de mensajes y debe elegirse en función de la confiabilidad de la red y las capacidades del dispositivo.
- Opciones de configuración del fabricante como intervalos de reporte, alarmas y ajustes vía SMS pueden alterar lo que el rastreador envía a Plaspy.
- La detección automática de Plaspy cubre comportamientos públicos comunes del protocolo, pero un firmware personalizado o muy modificado puede requerir validación.
- Siempre valide los ajustes de reporte del dispositivo con la documentación oficial de Ruptela y los requisitos de su despliegue antes de realizar implementaciones a gran escala.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el FM-Plug4 ayuda a garantizar una conexión confiable con Plaspy y reduce fricciones durante la configuración, la resolución de problemas y el mantenimiento rutinario.

- Facilita la configuración inicial al alinear los ajustes de reporte del dispositivo con los detalles del endpoint de Plaspy.
- Ayuda a diagnosticar problemas de conectividad o visibilidad de datos más rápidamente al acotar las comprobaciones a transporte, endpoint y firmware.
- Permite interpretar correctamente eventos como alertas de robo, detección de remolque y mensajes de fallas OBD-II donde estén soportados.
- Informa decisiones sobre el uso de UDP o TCP según las características de la red y la criticidad de los mensajes.
- Ayuda a los administradores de flota a planificar actualizaciones de firmware y validar cambios de comportamiento después de las actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-Plug4 con Plaspy ofrece un camino práctico hacia la visibilidad vehicular, alertas e información operativa sin configuraciones complejas por dispositivo. El diseño plug and play del FM-Plug4, su portabilidad entre vehículos y la disponibilidad de diagnóstico OBD-II (en FM-Plug4+) se complementan con el manejo centralizado de datos entrantes de rastreadores de Plaspy y la detección automática de protocolos para reducir los costos y la complejidad del despliegue.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el Ruptela FM-Plug4, visite https://www.plaspy.com. Para comportamiento específico de protocolo según el dispositivo, notas de firmware e instrucciones de configuración más recientes, verifique los detalles en el sitio del fabricante https://ruptela.com/ porque el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
