---
slug: /atrack/as1/protocol
id: as1-protocol
sidebar_label: Protocol
title: ATrack - AS1 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador ATrack AS1 con Plaspy, incluye contexto de conexión y notas de compatibilidad
keywords:
  - Protocolo ATrack AS1
  - Protocolo GPS ATrack AS1
  - Comunicación ATrack AS1
  - Compatibilidad AS1 Plaspy
  - Protocolo de rastreo ATrack AS1
  - Guía de protocolo para rastreadores GPS
  - Compatibilidad de dispositivos Plaspy
  - Rastreo de vehículos ATrack
  - Rastreo de activos AS1
  - Guía de protocolo ATrack
---

# ATrack - Protocolo AS1

Esta página documenta el contexto público del protocolo para usar el rastreador GPS ATrack AS1 con Plaspy. Se centra en cómo el dispositivo se comunica para facilitar la integración con Plaspy y qué aspectos considerar durante la configuración. El AS1 es un rastreador compacto para activos con certificación IP67, posicionamiento GPS, opciones celulares flexibles, larga autonomía de batería primaria, sensor de movimiento integrado y soporte para reportes por SMS, TCP y UDP.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los dispositivos pueden estar configurados para enviar datos a d.plaspy.com o a 54.85.159.138 usando el puerto 8888. La versión de firmware, las revisiones de hardware y las decisiones del fabricante pueden afectar el comportamiento exacto de los mensajes, por lo que las indicaciones aquí son de alto nivel y no sensibles.

## Resumen del protocolo

El protocolo de reporte del AS1 define cómo el rastreador se identifica, envía datos de ubicación y sensores, y comunica eventos para que Plaspy pueda mostrar y procesar la información del activo. En esta sección se describe el rol general del protocolo sin exponer detalles de implementación.

- Permite que el AS1 transmita posición GPS, eventos de movimiento del sensor G de 3 ejes y estados al servidor remoto.
- Incluye identificadores de dispositivo y marcas de tiempo para que Plaspy asocie los reportes con el activo y la línea de tiempo correctos.
- Admite múltiples métodos de transporte para que el dispositivo use la ruta de red más adecuada según el despliegue.
- Autoriza el envío de actualizaciones periódicas de ubicación y mensajes basados en eventos, como movimiento, entrada o salida de geocercas y alertas de batería.
- Permite mecanismos de configuración remota y actualización de firmware por parte del fabricante; esos flujos de control son independientes de la ingesta en Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los datos entrantes del rastreador en un endpoint consistente y utiliza ese tráfico para identificar e interpretar el protocolo del dispositivo, por lo que usted generalmente no necesita seleccionar manualmente un protocolo dentro de la plataforma.

- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el tráfico entrante llega a un puerto consistente para su análisis.
- Plaspy acepta reportes enviados a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Cuando un AS1 está configurado para reportar al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los reportes con el registro de dispositivo correspondiente.
- La configuración correcta del dispositivo en el lado del rastreador suele ser el paso clave; una vez que el dispositivo envía reportes válidos, Plaspy los procesa sin necesidad de configuración adicional por parte del usuario.
- Si los identificadores de dispositivo o los intervalos de reporte varían según el firmware, Plaspy emplea la información de cada reporte entrante para mantener la asociación y la sincronización correctas.

## Transporte y contexto de conexión

El AS1 soporta varias opciones de transporte y puede configurarse para usar la alternativa que mejor se adapte a la disponibilidad de red y a las restricciones del despliegue. Plaspy acepta los transportes estándar que ofrece el dispositivo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según lo permita el hardware y las opciones del fabricante.
- Los dispositivos pueden apuntar su destino de reporte a d.plaspy.com o a 54.85.159.138; ambos endpoints son aceptados por Plaspy.
- Plaspy escucha en el puerto 8888 para reportes de rastreadores y utiliza el mismo puerto para todos los dispositivos compatibles a fin de simplificar la configuración.
- Para despliegues con conectividad intermitente, el AS1 también puede enviar alertas y reportes de respaldo vía SMS cuando el dispositivo lo soporta; la ingesta en Plaspy se centra en flujos de datos IP.
- La calidad de la red, la configuración del APN y el comportamiento del operador pueden influir en si conviene usar TCP o UDP en una instalación concreta.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir diferencias en el contenido de los mensajes, campos disponibles o temporalización; siempre verifique la versión de firmware al validar el comportamiento.
- Las revisiones de hardware o las variantes regionales del AS1 pueden habilitar o deshabilitar funciones específicas, como determinadas bandas de radio o modos de gestión de energía.
- Las opciones de configuración gestionadas por el fabricante pueden cambiar la frecuencia de reporte y qué eventos se envían por defecto.
- La elección entre TCP y UDP en el rastreador puede influir en la fiabilidad de entrega y en el consumo de batería; seleccione el transporte que equilibre confiabilidad y autonomía según su caso de uso.
- Funciones remotas como FOTA las implementa el fabricante y pueden requerir ajustes de servidor o FTP específicos más allá del endpoint básico de reporte.
- Valide la compatibilidad frente a la documentación oficial de ATrack cuando planifique despliegues a gran escala o aprovisionamiento automatizado.

## Por qué es importante entender el protocolo

Comprender cómo el AS1 se comunica con Plaspy ayuda a garantizar una configuración fluida, entrega de datos confiable y una resolución de problemas eficiente cuando surjan incidencias.

- Asegura que el rastreador apunte al endpoint correcto de Plaspy para que los reportes se reciban y asocien correctamente.
- Facilita el diagnóstico de problemas de conectividad al confirmar si el dispositivo está reportando por TCP o UDP al puerto 8888 en d.plaspy.com o 54.85.159.138.
- Orienta las decisiones sobre intervalos de reporte y umbrales de eventos para balancear la vida útil de la batería y la granularidad del rastreo.
- Hace más seguro el manejo de cambios de firmware al resaltar dónde puede variar el comportamiento de los mensajes después de una actualización.
- Ayuda a validar el comportamiento de geocercas y alertas de movimiento al alinear la configuración del dispositivo con las expectativas de manejo de eventos en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AS1 con Plaspy ofrece una forma práctica de obtener visibilidad en tiempo real de activos móviles mediante un único endpoint de ingesta consistente. El soporte de Plaspy para los transportes estándar que utiliza el AS1 y su detección automática de protocolo simplifican la incorporación, de modo que los equipos pueden concentrarse en la operación en lugar de en seleccionar parsers por dispositivo.

Para conocer más sobre cómo Plaspy trabaja con rastreadores como el ATrack AS1 visite https://www.plaspy.com. Para obtener los detalles de protocolo y firmware más actuales y específicos del dispositivo, verifique la información en el sitio del fabricante https://www.atrack.com.tw/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
