---
slug: /gotop/g11b/protocol
id: g11b-protocol
sidebar_label: Protocol
title: GOTOP - G11B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para GOTOP G11B y su comunicación con Plaspy para seguimiento animal confiable
keywords:
  - protocolo GOTOP G11B
  - protocolo GPS GOTOP G11B
  - compatibilidad GOTOP G11B con Plaspy
  - protocolo de rastreo GOTOP
  - protocolo de comunicación GOTOP
  - protocolo rastreador mascota G11B
  - protocolo rastreador animal G11B
  - protocolo rastreador GPS 4G
  - protocolo de dispositivo Plaspy
  - compatibilidad rastreador Plaspy
---

# GOTOP - Protocolo G11B

Esta página resume el contexto público del protocolo para usar el rastreador GOTOP G11B con Plaspy. Se enfoca en cómo el dispositivo se comunica con la plataforma Plaspy en términos generales y no sensibles, de modo que instaladores, integradores y responsables de flotas puedan comprender el papel del protocolo de comunicación al integrar el G11B en flujos de trabajo centralizados de rastreo.

El GOTOP G11B es un rastreador GPS 4G compacto diseñado para colocarse en collares de mascotas y animales de granja. Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto de cualquier protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación a alto nivel en lugar de detalles de comandos específicos de firmware.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el G11B empaqueta y envía posiciones GPS, actualizaciones de estado y eventos de alarma para que esos mensajes puedan ser recogidos y mostrados por Plaspy. El protocolo permite que el dispositivo se identifique, reporte telemetría como posición GPS y estado de batería, y notifique alarmas como geocercas o eventos de movimiento.

- Permite la transmisión periódica y basada en eventos de posiciones GPS y estado del dispositivo al servidor
- Incluye identificadores que permiten a Plaspy asociar los informes con un dispositivo G11B específico
- Transporta información de alarmas y telemetría utilizada por los paneles y reglas de alerta de Plaspy
- Soporta canales de configuración remota provistos por el fabricante como vías alternativas de configuración
- Sienta la base para el registro histórico y la reconstrucción de rutas dentro de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recolecta el tráfico entrante de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador para los dispositivos compatibles. En la mayoría de las implementaciones, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el G11B está configurado para reportar a la dirección y puerto correctos del servidor Plaspy.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy
- El dominio del servidor Plaspy es d.plaspy.com que resuelve a la IP pública 54.85.159.138
- Plaspy utiliza un único puerto para todos los dispositivos compatibles, lo que simplifica la configuración del equipo
- Cuando un G11B está configurado para enviar reportes al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo en la interfaz de Plaspy
- Si un dispositivo no aparece, verifique la configuración de reporte del equipo, el acceso de red y la compatibilidad de firmware antes de forzar la selección de un protocolo

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el dispositivo entrega los mensajes del protocolo a Plaspy sin describir el formato interno de los paquetes. El G11B puede configurarse para usar distintas capas de transporte según su firmware y los mecanismos de configuración que ofrezca el fabricante.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138; ambos pueden usarse como destino de reporte del dispositivo
- Plaspy escucha en el puerto 8888 y ese mismo puerto se emplea para todos los dispositivos de la plataforma
- UDP suele usarse para telemetría ligera, mientras que TCP se puede seleccionar cuando se prefiera entrega fiable o semánticas de sesión
- Asegúrese de que los firewalls de red permitan conexiones salientes al endpoint y puerto de Plaspy para permitir el reporte del dispositivo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el ritmo de envío de mensajes, los campos soportados y los conjuntos de comandos de configuración
- Reversiones de hardware o variantes de producto pueden implementar valores por defecto de transporte distintos, como UDP frente a TCP
- Las vías de configuración del fabricante, como SMS, aplicaciones web o ajustes en la SIM, pueden afectar cómo el dispositivo apunta a Plaspy
- La elección del transporte importa; confirme si su dispositivo está configurado en UDP o TCP en el puerto 8888 antes de iniciar la resolución de problemas
- Plaspy detectará automáticamente el protocolo cuando el dispositivo reporte al endpoint, pero los parámetros del dispositivo deben estar correctamente configurados
- Valide el comportamiento del dispositivo con la documentación oficial del fabricante para la versión de firmware específica instalada
- Pruebe un equipo en un entorno controlado antes de un despliegue a gran escala para confirmar la frecuencia de reporte y el comportamiento de las alarmas

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, telemetría confiable y una resolución de problemas eficaz al integrar dispositivos G11B en Plaspy. Tener claro el contexto de conexión y la variabilidad común reduce el tiempo de respuesta ante problemas de conectividad y reporte.

- Ayuda a confirmar que el dispositivo está configurado para reportar al endpoint y puerto correctos de Plaspy
- Orienta los pasos de diagnóstico cuando faltan actualizaciones de ubicación, alarmas o telemetría
- Aclara si la elección del transporte está afectando la entrega o la latencia de eventos críticos
- Permite establecer expectativas razonables sobre la disponibilidad de funciones según la revisión de firmware y hardware
- Apoya la planificación del consumo de batería y los compromisos entre frecuencia de reporte y continuidad de la telemetría

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP G11B con Plaspy integra el rastreo de animales montados en collar en un entorno de monitoreo central apto para recuperación de mascotas, supervisión de ganado y despliegues mixtos de activos. Plaspy recoge la telemetría del G11B y presenta ubicación, movimiento, estado de batería y eventos de alarma en mapas, reproducción histórica y canales de alerta, de modo que pequeñas flotas de animales puedan ser monitoreadas junto con otros activos.

Si desea obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos, visite https://www.plaspy.com. Para las notas más actuales sobre protocolos específicos de dispositivos, detalles de firmware y orientación del fabricante, verifique la información más reciente en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo.
