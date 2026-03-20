---
slug: /uvi_group/gt06/protocol
id: gt06-protocol
sidebar_label: Protocol
title: UVI Group - GT06 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo GT06 de UVI Group para compatibilidad e integración con el servidor Plaspy
keywords:
  - Protocolo UVI Group GT06
  - Protocolo GT06 GPS
  - Protocolo de rastreo UVI GT06
  - Protocolo GPRS GT06
  - Compatibilidad GT06 Plaspy
  - Protocolo rastreador UVI
  - Integración rastreador GPS Plaspy
  - Rastreo vehicular GT06
  - Guía protocolo GT06
  - Compatibilidad UVI Group GT06
---

# UVI Group - Protocolo GT06

Esta página ofrece contexto público sobre el protocolo para usar el rastreador UVI Group GT06 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, cómo Plaspy recibe y procesa los reportes entrantes y qué consideraciones de integración son relevantes para una operación confiable. El objetivo es explicar detalles de conexión y compatibilidad sin exponer implementaciones privadas específicas.

El GT06 es un rastreador GPS compacto con conectividad GSM GPRS, comúnmente utilizado en vehículos y motocicletas. Puede reportar su ubicación por SMS o mediante GPRS a un servidor en Internet, y su comportamiento puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto de los mensajes depende del firmware y de la implementación del fabricante.

## Resumen del protocolo

El GT06 transmite ubicación, estado y telemetría enviando mensajes a través de la red celular a un endpoint de servidor configurado. En términos generales, el protocolo define cómo el rastreador se identifica, cómo reporta posiciones GPS y cómo envía actualizaciones de estado para que un servidor como Plaspy pueda convertir esas transmisiones en datos y eventos de seguimiento utilizables.

- Permite al GT06 enviar actualizaciones periódicas de ubicación y notificaciones de eventos a un servidor remoto
- Incluye información de identidad del dispositivo para que Plaspy asocie los reportes entrantes con un rastreador específico
- Transporta coordenadas GNSS, marcas de tiempo y telemetría básica para mapas y alertas
- Soporta tanto reporte por SMS para configuraciones sencillas como reporte por GPRS para monitoreo en tiempo real
- Faculta a plataformas servidor a normalizar los mensajes del proveedor en un formato interno consistente para visualización y alertas

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido y detecta automáticamente los protocolos de los rastreadores cuando un dispositivo reporta a ese endpoint. Para usted, esto significa que si el GT06 está configurado para reportar a Plaspy, por lo general no es necesario seleccionar el protocolo manualmente dentro de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador
- Los dispositivos configurados para reportar a d.plaspy.com o 54.85.159.138 serán procesados por el endpoint de Plaspy
- En la mayoría de los casos, configurar el GT06 para enviar reportes GPRS al endpoint de Plaspy es suficiente para la detección automática
- Si un dispositivo solo envía SMS, esos mensajes se gestionan por separado y pueden requerir pasos distintos para la integración

## Transporte y contexto de conexión

El GT06 puede enviar reportes por GPRS usando TCP o UDP según la configuración de la unidad y el entorno de red. Plaspy soporta ambos modos de transporte en el puerto compartido del servidor, por lo que los dispositivos configurados para TCP o UDP pueden conectarse.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy acepta conexiones entrantes a d.plaspy.com o 54.85.159.138 en el puerto compartido
- El uso de un único puerto en Plaspy simplifica la configuración de dispositivos entre distintos modelos de rastreadores
- Elija TCP para entrega fiable y ordenada si el dispositivo y la red lo soportan, o UDP cuando se prefiera menor sobrecarga y esté soportado
- Asegúrese de que el APN y los ajustes GPRS del GT06 estén correctos para que el rastreador pueda establecer una sesión de datos hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de los mensajes, los campos disponibles y el comportamiento; confirme siempre la versión de firmware del GT06 al solucionar problemas
- Revisiones de hardware o variantes regionales pueden alterar los modos de reporte por defecto o los protocolos de transporte soportados
- Algunas unidades GT06 se configuran comúnmente para enviar SMS en consultas puntuales y GPRS para reporte continuo; confirme la ruta de reporte deseada
- La elección de transporte TCP frente a UDP puede afectar la fiabilidad y la manera en que el servidor recibe los mensajes
- Las opciones de configuración del fabricante o instaladores terceros pueden modificar los ajustes de servidor por defecto; verifique que la dirección y el puerto del servidor apunten a Plaspy si espera detección automática
- Valide la compatibilidad con la documentación oficial de UVI Group para comandos y ajustes específicos del modelo

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GT06 ayuda a garantizar una conexión fiable con Plaspy y facilita la resolución de problemas cuando faltan reportes o se observan comportamientos inesperados. Tener claridad sobre transporte, ajustes de dirección y variaciones de firmware reduce el tiempo de configuración y mejora la estabilidad a largo plazo.

- Confirma que el rastreador apunta a d.plaspy.com o 54.85.159.138 y usa el puerto compartido de Plaspy
- Ayuda a identificar si un dispositivo utiliza TCP o UDP y a ajustar reglas de red o firewall en consecuencia
- Permite detectar si diferencias de firmware o hardware pueden explicar campos faltantes o cambios en la cadencia de mensajes
- Facilita diagnosticar problemas de la red móvil frente a problemas de procesamiento en el servidor
- Reduce la incertidumbre al coordinar ajustes de dispositivos con procedimientos de despliegue de flotas

## Por qué usar Plaspy con este protocolo

Usar el UVI Group GT06 con Plaspy brinda a las organizaciones una vía directa para recopilar datos de ubicación y estado en tiempo real desde vehículos y motocicletas. Plaspy normaliza los reportes de muchos modelos de rastreadores para que los operadores de flotas puedan ver historiales de ubicación coherentes, crear alertas y generar informes operativos sin gestionar múltiples endpoints de servidor personalizados.

Si desea obtener más información sobre Plaspy y cómo maneja los protocolos de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, comportamiento de firmware e instrucciones del fabricante, verifique la información en el sitio de UVI Group en http://www.uvi-group.com/ ya que las capacidades e implementaciones del equipo pueden cambiar con el tiempo.
