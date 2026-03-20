---
slug: /noran/nr024/protocol
id: nr024-protocol
sidebar_label: Protocol
title: Noran - NR024 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Noran NR024 y su comunicación con Plaspy para rastreo de flotas
keywords:
  - protocolo Noran NR024
  - protocolo GPS Noran NR024
  - protocolo de comunicación Noran NR024
  - protocolo del rastreador NR024
  - protocolo rastreador GPS Noran
  - compatibilidad NR024 Plaspy
  - protocolo de seguimiento de vehículos Noran
  - protocolo de rastreo de flotas NR024
  - guía del protocolo Noran
  - protocolo del dispositivo NR024
---

# Noran - Protocolo NR024

Esta página describe el contexto público del protocolo para usar el rastreador GPS Noran NR024 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, y explica el papel del protocolo de reporte del rastreador al integrar dispositivos NR024 en un flujo de trabajo de seguimiento de flotas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta los protocolos de rastreo de forma automática, pero el comportamiento exacto de los mensajes puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El NR024 incluye funciones como subida de imágenes, reporte de curvas de combustible, conectividad GSM/GPRS, cámara a bordo, monitoreo de combustible y audio, control remoto del motor, asistencia A GPS, geocercas, SOS y envíos de ubicación en tiempo real, que influyen en cuándo y cómo envía datos a un servidor de rastreo.

## Resumen del protocolo

El protocolo del dispositivo NR024 define cómo el rastreador formatea y transmite telemetría, eventos y medios opcionales a un servidor remoto para que una plataforma de flotas como Plaspy pueda procesar y mostrar la información. Los siguientes puntos resumen el rol del protocolo sin exponer detalles de la implementación.

- Permite que el NR024 envíe actualizaciones de posición, indicadores de estado y notificaciones de eventos a un servidor backend para seguimiento en vivo y alertas.
- Transporta datos complementarios como métricas de combustible, disparadores de audio y capturas fotográficas para que la plataforma pueda correlacionar medios con eventos del vehículo.
- Proporciona el mecanismo para señales de control remoto, como corte de motor o comandos de configuración, cuando el dispositivo y la plataforma lo soportan y está permitido.
- Define opciones de cadencia de reporte, por ejemplo subidas por tiempo o por distancia, que afectan la frecuencia con la que Plaspy recibe ubicación y datos de sensores.
- Soporta desde telemetría básica hasta cargas útiles extendidas según la configuración del equipo y las capacidades del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante en un endpoint compartido y utiliza el contenido de los mensajes junto con el contexto de conexión del dispositivo para determinar automáticamente el protocolo del rastreador. Usted normalmente no necesita seleccionar un protocolo dentro de Plaspy cuando el NR024 está configurado correctamente para reportar al endpoint de Plaspy.

- Plaspy escucha los reportes de dispositivos en la dirección pública del servidor d.plaspy.com y en la IP pública del servidor 54.85.159.138 en el puerto configurado.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en el equipo y el enrutamiento en el servidor.
- El NR024 puede configurarse para usar UDP o TCP al enviar datos; Plaspy acepta ambos tipos de transporte en el puerto compartido.
- Cuando un NR024 reporta a la dirección de Plaspy, la plataforma empareja los mensajes entrantes con protocolos conocidos y enruta los datos al procesamiento interno.
- Dado que la detección es automática, los ajustes correctos de reporte en el NR024 suelen ser el único paso requerido para la conectividad inicial.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el NR024 establece comunicación con un servidor de seguimiento remoto y qué opciones son comunes para transporte y direccionamiento. Esta información es útil al configurar los parámetros del servidor en la instalación del dispositivo.

- El NR024 admite el envío de datos por UDP o TCP según el firmware del dispositivo y las elecciones de configuración.
- Los equipos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para reportar.
- Plaspy recibe tráfico del NR024 en el puerto 8888 y todos los dispositivos compatibles usan el mismo número de puerto en la plataforma.
- Elija UDP cuando se prefieran menor latencia y menor sobrecarga, y TCP cuando sea necesaria la entrega confiable y el comportamiento de sesión, siempre que el rastreador lo soporte.
- Asegúrese de que el transporte elegido y la resolución DNS a d.plaspy.com estén permitidos en las redes móviles intermedias y en cualquier firewall.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar detalles de los mensajes y las funciones disponibles, como subida de imágenes o reporte de curvas de combustible; siempre registre la revisión de firmware al diagnosticar problemas.
- Las revisiones de hardware u opcionales (cámara, A GPS, entradas y salidas adicionales) pueden modificar qué datos puede incluir el NR024 en sus reportes.
- La selección de transporte entre TCP y UDP puede afectar la fiabilidad y la recepción de cargas más grandes, como fotos; confirme que el rastreador esté configurado para el transporte previsto.
- Los comandos o ajustes de configuración específicos del fabricante pueden diferir entre variantes regionales del NR024; consulte las guías de configuración del dispositivo para opciones específicas del modelo.
- Plaspy detecta automáticamente el protocolo de reporte, pero la detección exitosa depende de que el dispositivo realmente envíe reportes al endpoint de Plaspy y use ajustes de transporte compatibles.
- Valide la compatibilidad verificando el comportamiento del equipo contra la documentación del fabricante y realizando reportes de prueba al endpoint de Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del NR024 ayuda a instaladores y administradores de flotas a lograr un flujo de datos confiable, un uso correcto de las funciones y una resolución de problemas más rápida al integrar dispositivos con Plaspy.

- Garantiza que el equipo esté configurado para reportar a d.plaspy.com o a la IP del servidor de Plaspy usando el transporte y puerto soportados para que los datos lleguen correctamente.
- Facilita el diagnóstico de tipos de datos faltantes, como imágenes o curvas de combustible, al correlacionar las capacidades del firmware con las expectativas de la plataforma.
- Permite planear en función de las limitaciones de red que afectan las subidas de medios y los reportes de alta frecuencia en campo.
- Apoya decisiones informadas sobre activar o desactivar funciones específicas como control remoto del motor o monitoreo de audio según políticas operativas.
- Reduce el tiempo de configuración al clarificar qué ajustes del dispositivo son necesarios para que Plaspy detecte y procese automáticamente los reportes del NR024.

## Por qué usar Plaspy con este protocolo

Usar el Noran NR024 con Plaspy ofrece una combinación práctica entre las capacidades del equipo y el manejo por parte de la plataforma para organizaciones que requieren telemetría vehicular completa, evidencia en medios y controles operacionales. La capacidad del NR024 de entregar ubicación, métricas de combustible, fotografías y señales de evento puede ser aprovechada en Plaspy para supervisión de flotas, verificación de incidentes y flujos de mantenimiento preventivo.

Si desea obtener más información sobre cómo Plaspy maneja dispositivos NR024, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información específica más reciente sobre el protocolo del dispositivo y las notas de firmware en el sitio del fabricante http://www.norantracker.com/ antes de desplegar a gran escala.
