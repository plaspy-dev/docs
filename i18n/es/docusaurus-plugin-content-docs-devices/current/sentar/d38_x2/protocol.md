---
slug: /sentar/d38_x2/protocol
id: d38_x2-protocol
sidebar_label: Protocol
title: Sentar - D38-X2 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general del protocolo público del Sentar D38 X2 y cómo comunica ubicación y estado a Plaspy para seguimiento y supervisión parental
keywords:
  - protocolo Sentar D38 X2
  - protocolo GPS Sentar D38 X2
  - protocolo rastreador GPS Sentar
  - compatibilidad D38 X2 con Plaspy
  - comunicación rastreador Sentar
  - protocolo de seguimiento D38 X2
  - compatibilidad de dispositivos Plaspy
  - reloj GPS infantil Sentar
  - reporte de ubicación D38 X2
  - protocolo telemático Sentar
---

# Sentar - Protocolo D38-X2

Esta página describe el contexto del protocolo público para usar el reloj inteligente Sentar D38-X2 con Plaspy. Se enfoca en cómo el dispositivo comunica ubicación y estado a Plaspy y qué esperar de la capa de comunicación sin revelar detalles privados de implementación. La información está pensada para que administradores y cuidadores comprendan el papel del protocolo del rastreador en la supervisión y la configuración cotidiana.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la descripción aquí es general y orientada a la interoperabilidad más que a los detalles internos del dispositivo.

## Descripción general del protocolo

El protocolo de comunicación es el conjunto de reglas que el D38-X2 usa para enviar ubicación, estado y telemetría a un servidor como Plaspy. Para fines de integración, el protocolo define cómo se identifica el reloj, cómo se reportan las posiciones y el estado de conectividad, y cómo el servidor reconoce o registra esos reportes. Esta sección explica esos roles en términos generales para que usted pueda alinear la configuración del dispositivo con la recepción en Plaspy.

- El protocolo permite que el rastreador envíe actualizaciones de ubicación periódicas o por eventos a Plaspy para supervisión en vivo.
- Los campos de identificación en los reportes permiten a Plaspy asociar los mensajes entrantes con el registro de dispositivo correcto.
- Los mensajes de estado y telemetría comunican el estado de conectividad, la condición de la batería y otros indicadores generales de salud del dispositivo.
- Eventos relacionados con mensajería y disponibilidad de llamadas desde el reloj pueden mostrarse en Plaspy como atributos de estado en lugar de contenido de voz o mensajes crudos.
- El protocolo admite tanto fijaciones regulares de ubicación como datos de posicionamiento asistido, como pistas LBS y Wi Fi, para mejorar la precisión en entornos difíciles.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y puede reconocer automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente. Esta detección automática significa que la mayoría de los usuarios no necesitan seleccionar un protocolo específico dentro de Plaspy cuando el dispositivo envía reportes al endpoint y puerto correctos.

- Plaspy escucha en un único puerto para todos los dispositivos, lo que simplifica la configuración para los administradores.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma inspecciona la sesión entrante para determinar el formato del protocolo y el enrutamiento.
- Por lo general, usted solo necesita configurar la dirección del servidor del dispositivo y el transporte para comenzar a enviar reportes a Plaspy.
- Si un rastreador no se detecta automáticamente, lo habitual es verificar primero la configuración de red del dispositivo y la versión de firmware.
- Plaspy detecta automáticamente el protocolo siempre que el dispositivo formatee y envíe sus reportes según las pautas del fabricante.

## Contexto de transporte y conexión

El D38-X2 puede configurarse para enviar datos sobre capas de transporte estándar soportadas por el firmware del dispositivo. En la práctica, esto significa que el reloj puede usar UDP o TCP según la configuración elegida durante el aprovisionamiento, y puede apuntar a Plaspy por nombre de host o por dirección IP si es necesario.

- Los dispositivos pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com para operación normal.
- Como alternativa, los dispositivos pueden apuntar a la IP del servidor de Plaspy 54.85.159.138 cuando la herramienta del dispositivo requiere una IP directa.
- El protocolo de transporte puede ser UDP o TCP según el soporte del dispositivo y la configuración elegida.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que facilita el aprovisionamiento.
- Asegúrese de que la red del dispositivo y la configuración de la SIM permitan conexiones salientes hacia el endpoint de Plaspy y el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el formato de los reportes o los campos incluidos, por lo que verifique el firmware del reloj cuando realice resolución de problemas.
- Las revisiones de hardware o las variantes regionales del mismo modelo pueden implementar pequeñas diferencias de protocolo que afecten la compatibilidad.
- La elección entre UDP y TCP puede influir en las características de entrega; seleccione el transporte compatible con su dispositivo y operador.
- Las opciones de configuración del fabricante, como intervalos de reporte y ajustes de posicionamiento asistido, afectarán los datos que Plaspy reciba.
- Valide siempre la compatibilidad con la documentación y las notas de la versión del fabricante antes de despliegues a gran escala.
- Si surgen problemas de integración, comparar la configuración de un equipo que funciona con la unidad problemática suele revelar diferencias en transporte o ajustes de servidor.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una configuración confiable, una resolución de problemas eficaz y un comportamiento predecible a largo plazo cuando el D38-X2 se integra con Plaspy. Aunque Plaspy maneja la detección automática del protocolo y las tareas comunes de ingestión, conocer lo básico sobre cómo el dispositivo envía datos reduce el tiempo de puesta en marcha y mejora la tasa de éxito en el primer contacto.

- Permite verificar rápidamente que el dispositivo apunta al endpoint y al transporte correctos de Plaspy.
- Ayuda a interpretar qué tipo de datos proporcionará el dispositivo a Plaspy, como posiciones, estado de conectividad y telemetría básica.
- Facilita el diagnóstico de problemas de conectividad entre la red del operador, la configuración del dispositivo y la recepción en Plaspy.
- Orienta decisiones sensatas sobre intervalos de reporte y opciones de posicionamiento asistido según las necesidades del caso de uso.
- Apoya el mantenimiento continuo al indicar cuándo los cambios de firmware podrían afectar la visibilidad de datos en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Sentar D38-X2 con Plaspy ofrece un punto central para ver la ubicación en tiempo real, el estado del dispositivo y las alertas en escenarios de protección infantil. El D38-X2 combina comunicaciones estilo smartphone y posicionamiento asistido con un factor de forma diseñado para niños, mientras que Plaspy integra esas salidas en un entorno unificado de monitoreo y notificaciones.

Si usted está evaluando flujos de trabajo de despliegue o gestión, el enfoque de endpoint único de Plaspy y la detección automática de protocolo reducen la carga de configuración y permiten que los equipos se concentren en políticas operativas y alertas en lugar de análisis específicos del dispositivo. Learn more about Plaspy and how it supports device integration at https://www.plaspy.com. Please verify current protocol support and firmware behavior with the manufacturer at http://www.sentarsmart.com/ since device implementation details and firmware features can change over time.
