---
slug: /cantrack/g03/protocol
id: g03-protocol
sidebar_label: Protocol
title: CanTrack - G03 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo CanTrack G03 que explica cómo comunica el rastreador con Plaspy y ajustes comunes de conexión
keywords:
  - protocolo CanTrack G03
  - protocolo GPS CanTrack G03
  - compatibilidad CanTrack G03 Plaspy
  - comunicación CanTrack G03
  - protocolo de rastreo CanTrack G03
  - integración de dispositivos Plaspy
  - protocolo rastreador seguridad personal
  - protocolo rastreador activos portátiles
  - integración telemetría GNSS
  - ajustes de conexión rastreador
---

# CanTrack - Protocolo G03

Esta página describe el contexto público del protocolo para usar el rastreador CanTrack G03 con Plaspy. Resume cómo el G03 transmite datos útiles de ubicación y eventos a la plataforma y explica los ajustes de conexión y comportamientos relevantes para la integración, sin exponer detalles privados del fabricante.

El G03 es un rastreador compacto para seguridad personal y activos portátiles que es compatible con Plaspy desde fábrica. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como contexto del protocolo y confirme el comportamiento específico del dispositivo con la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

En este contexto, el protocolo se refiere al método de comunicación público que el G03 emplea para reportar posiciones GNSS, actualizaciones de estado y eventos de emergencia a un servidor remoto como Plaspy. Permite al dispositivo identificarse, transmitir telemetría y registros de eventos, y soportar las funciones de la plataforma de las que dependen cuidadores y operadores.

- Permite transferir posiciones, telemetría de batería y estado, y marcadores de evento como SOS y batería baja a Plaspy.
- Transporta información de identidad y sesión que permite a Plaspy asociar los mensajes entrantes a un dispositivo G03 específico.
- Entrega la semántica de eventos que Plaspy utiliza para generar notificaciones, disparadores de geocercas y trazas de historial sin exponer las estructuras internas de los paquetes.
- Soporta reportes conscientes del consumo de energía para que el dispositivo equilibre la frescura de la ubicación con la duración de la batería en operaciones de larga espera.
- Proporciona la información esencial que necesita Plaspy para mostrar la ubicación en tiempo real, mantener el historial de rutas y generar alertas en la plataforma.

## Detección del protocolo por Plaspy

Plaspy recibe reportes entrantes desde dispositivos en un único endpoint y puerto compartidos, y determina automáticamente el protocolo de rastreador usado por cada dispositivo. Mientras el G03 esté configurado para reportar al endpoint de Plaspy, por lo general no será necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como host de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse cuando DNS no está disponible o no es preferido.
- El puerto es 8888 y Plaspy escucha en este puerto el tráfico de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe reportes de dispositivos en el endpoint compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la incorporación y reduce la variabilidad en la configuración.
- Normalmente solo necesita apuntar el dispositivo al endpoint de Plaspy y confirmar los ajustes de transporte en el equipo.

## Transporte y contexto de conexión

El contexto de conexión define el transporte de red y el destino que el G03 usa para comunicarse con Plaspy. El G03 puede configurarse para usar protocolos de transporte comunes y debe ajustarse para reportar al endpoint y puerto que Plaspy documenta.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, dependiendo del soporte del dispositivo y del comportamiento del operador.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 al configurar el host de reporte.
- Plaspy usa el mismo puerto para todos los dispositivos soportados para simplificar la configuración y el enrutamiento entrante.
- Elija UDP para reportes de baja sobrecarga cuando sea compatible, y TCP cuando una transferencia orientada a conexión sea requerida por la red o el firmware del dispositivo.
- Asegúrese de que el APN del operador móvil y la conectividad de datos estén activos para que el G03 pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias en la versión de firmware pueden cambiar campos disponibles, nombres de eventos y frecuencia de reporte; revise las notas del firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware o variantes regionales del módulo radio pueden afectar el comportamiento del transporte y la disponibilidad de bandas de red.
- La elección entre UDP y TCP en el puerto 8888 puede verse influida por el firmware del dispositivo, las redes del operador o necesidades específicas del despliegue.
- SOS, batería baja y modos de reposo son conceptos funcionales estándar, pero las cargas útiles exactas de los eventos y los umbrales pueden variar según el firmware.
- Plaspy detecta protocolos automáticamente, pero se requieren el host de reporte y los ajustes de transporte correctos en el dispositivo para que la detección tenga éxito.
- Valide cualquier paso de configuración contra la documentación del fabricante para confirmar las funciones soportadas en su compilación de firmware.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una incorporación de dispositivos confiable, alertas predecibles y una resolución de problemas eficaz cuando el G03 se usa con Plaspy. Conocer cómo reporta el dispositivo y cómo Plaspy recibe los datos reduce el tiempo de configuración y ayuda a mantener la fiabilidad operativa a largo plazo.

- Simplifica la configuración inicial al confirmar el host de reporte y el transporte correctos para el dispositivo.
- Acelera la resolución de problemas cuando la telemetría o los eventos no aparecen en Plaspy, al reducir las comprobaciones a las capas de red, transporte y firmware.
- Ayuda a configurar los intervalos de reporte y los modos de reposo para equilibrar la precisión de la ubicación con la duración de la batería.
- Facilita la interpretación de eventos SOS y de batería baja y alinea las notificaciones de la plataforma con los flujos de trabajo de los cuidadores.
- Permite planificar actualizaciones de firmware y revisiones de hardware que puedan cambiar el comportamiento o la telemetría disponible.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack G03 con Plaspy proporciona un camino sencillo hacia la visibilidad en tiempo real y la revisión histórica para la supervisión de seguridad personal y activos portátiles. El G03 entrega posiciones GNSS, eventos SOS y estado de batería que Plaspy convierte en mapas, alertas, acciones de geocerca y trazas de historial: funciones útiles para cuidadores, administradores de instalaciones y organizaciones que requieren rastreo compacto y de bajo consumo.

To learn more about Plaspy visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so please verify the latest device specific protocol information and firmware notes with the manufacturer at https://www.cantrackgps.com/.
