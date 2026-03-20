---
slug: /gotop/g06b/protocol
id: g06b-protocol
sidebar_label: Protocol
title: GOTOP - G06B Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del GPS GOTOP G06B y cómo comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo GOTOP G06B
  - protocolo GPS GOTOP G06B
  - protocolo GOTOP G06B para Plaspy
  - protocolo de comunicación GOTOP G06B
  - protocolo de rastreo GOTOP G06B
  - protocolo de rastreador GPS GOTOP
  - protocolo GOTOP Plaspy
  - protocolo de rastreo de vehículos GOTOP
  - protocolo GPS G06B 4G
  - compatibilidad GOTOP G06B
---

# GOTOP - Protocolo G06B

Esta página ofrece una visión pública del contexto de comunicación del GOTOP G06B cuando se usa con Plaspy. Explica el papel del protocolo de reporte del rastreador para entregar información de ubicación, estado y alarmas a la plataforma Plaspy sin entrar en detalles privados de la implementación. El contenido que sigue está pensado para ayudar a administradores de flota, integradores y evaluadores técnicos a comprender cómo se comunica típicamente el G06B en una implementación con Plaspy.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en el G06B puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página prioriza el contexto de conexión y compatibilidad más que los detalles internos del firmware. El G06B es un rastreador 4G compacto con clasificación IP67 y funciones como detección de ACC, botón SOS, corte remoto de motor y múltiples alarmas que dependen de una correcta comunicación de red para entregar eventos oportunos a Plaspy.

## Visión general del protocolo

El protocolo que utiliza el G06B regula cómo el dispositivo reporta posición, movimiento, estado y alarmas a un servidor remoto para que esos mensajes puedan ser procesados por una plataforma de flotas como Plaspy. A grandes rasgos, el protocolo garantiza que los mensajes del rastreador se enruten, identifiquen e interpreten para que Plaspy presente datos útiles a los usuarios finales.

- Permite reportes regulares de posición y actualizaciones de estado como el estado del encendido (ACC) y nivel de batería
- Transporta notificaciones de alarmas y eventos, incluyendo geocercas, batería baja, vibración y señales SOS
- Asocia la identidad del dispositivo a cada mensaje para que Plaspy pueda vincular los reportes con el vehículo o activo correcto
- Soporta transporte sobre protocolos de red comunes para que los mensajes lleguen de forma confiable al endpoint remoto de Plaspy
- Proporciona el contexto necesario para que la plataforma Plaspy normalice y muestre la telemetría del dispositivo

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes entrantes en un endpoint unificado e identificar automáticamente el protocolo del rastreador cuando el dispositivo envía datos válidos. Para la mayoría de usuarios esto significa que solo necesita configurar el equipo para reportar a Plaspy; por lo general no se requiere una selección explícita de protocolo dentro de la plataforma.

- Plaspy usa un único endpoint de servidor para recibir reportes de dispositivos y aplica detección automática de protocolo
- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding
- Si un rastreador está configurado para reportar al endpoint de Plaspy, la plataforma intentará detectar y analizar sus mensajes automáticamente
- Una identificación correcta del dispositivo y un reporte de red estable hacen que la detección automática sea más fiable para la plataforma

## Contexto de transporte y conexión

Los detalles de conexión determinan cómo el G06B alcanza Plaspy y si los mensajes llegan con fiabilidad. El G06B soporta conectividad 4G y puede configurarse para enviar reportes usando protocolos de transporte estándar hacia el endpoint de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración local
- El endpoint recomendado de Plaspy para reporte es d.plaspy.com o la IP equivalente 54.85.159.138
- Plaspy acepta reportes de dispositivos en el puerto 8888 y ese mismo puerto se usa para todos los dispositivos compatibles
- La elección entre UDP y TCP puede depender de las condiciones de red y de las opciones de firmware del rastreador
- Asegúrese de que el APN y la configuración de red del G06B sean correctos para que el dispositivo pueda alcanzar el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la composición de los mensajes y las funciones disponibles entre versiones
- Las revisiones de hardware pueden afectar las bandas soportadas, la frecuencia de telemetría o las entradas de periféricos como ACC y SOS
- Las opciones de configuración del lado del fabricante pueden cambiar si el dispositivo usa UDP o TCP para reportar
- La selección del transporte influye en las características de entrega y debe coincidir con la configuración del dispositivo
- Valide la compatibilidad contra la documentación y las notas de la versión de su firmware G06B
- En caso de duda, confirme la configuración del servidor y el formato de reporte con el instalador del rastreador o la documentación del fabricante

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el G06B ayuda a asegurar una configuración fluida, una entrega fiable de eventos y una resolución efectiva de problemas al integrarlo con Plaspy. Un conocimiento claro de las expectativas de conexión reduce los intercambios durante el despliegue y facilita el mantenimiento de la visibilidad a lo largo del tiempo.

- Ayuda a verificar que el dispositivo apunta al endpoint y puerto correctos de Plaspy
- Facilita la resolución de problemas de reportes perdidos, entrega de alarmas o conectividad intermitente
- Asiste en la decisión entre UDP o TCP según la confiabilidad de la red y las capacidades del rastreador
- Apoya la gestión del ciclo de vida al planear actualizaciones de firmware o cambios en el comportamiento del dispositivo
- Mejora la confianza al mapear entradas del equipo como ACC o SOS a eventos de la plataforma

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G06B con Plaspy ofrece un camino directo hacia la visibilidad de vehículos y la supervisión operativa. La conectividad 4G del G06B, la detección de encendido, el botón SOS y su conjunto de alarmas generan la telemetría y los eventos que Plaspy ingiere, normaliza y muestra para monitoreo, alertas e informes. Para organizaciones que rastrean vehículos o activos, esta combinación soporta ubicación en tiempo real, conciencia de eventos y controles remotos básicos dentro de una plataforma de flota unificada.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el GOTOP G06B visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos del dispositivo sobre el protocolo, comportamiento del firmware e instrucciones del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/. El soporte e implementación del protocolo pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante asegura una configuración precisa del equipo.
