---
slug: /gpsmarker/m130/protocol
id: m130-protocol
sidebar_label: Protocol
title: GPSMarker - M130 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen del protocolo del GPSMarker M130 para compatibilidad con Plaspy, con orientación sobre conexión y solución de problemas
keywords:
  - protocolo GPSMarker M130
  - protocolo GPS GPSMarker M130
  - comunicación GPSMarker M130
  - protocolo de rastreo GPSMarker M130
  - compatibilidad GPSMarker Plaspy
  - protocolo rastreador GPS Plaspy
  - rastreo de vehículos GPSMarker M130
  - conectividad GPSMarker M130
  - protocolo de reporte de rastreador
  - rastreo de flotas M130
---

# GPSMarker - Protocolo M130

Esta página ofrece el contexto público del protocolo para usar el GPSMarker M130 con la plataforma Plaspy. Explica cómo se comunica el rastreador con Plaspy de manera general, destaca los ajustes de conexión que utiliza la plataforma y resume las consideraciones prácticas para lograr que el M130 reporte de forma fiable para fines de seguimiento y monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el M130 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página debe considerarse una guía de implementación general y no un manual específico de firmware.

## Resumen del protocolo

El protocolo de comunicación del M130 es el mecanismo mediante el cual el dispositivo informa ubicación, estado, eventos de sensores e identificación mínima a un servidor remoto. Para su uso con Plaspy, el protocolo permite al rastreador establecer la conexión de transporte, enviar telemetría y alarmas, y permitir que el servidor asocie los mensajes con un registro de activo.

- Transporta información de posición y tiempo para que Plaspy muestre coordenadas precisas e historial de movimiento
- Envía eventos de sensores y alarmas como detección de movimiento, avisos de choque, pulsaciones del botón de pánico y notificaciones de batería baja
- Proporciona identificación del dispositivo para que Plaspy asocie los datos entrantes con el registro correcto del rastreador
- Opera sobre canales de transporte estándar para que el dispositivo alcance Plaspy desde redes móviles
- Admite reportes periódicos e intervalos de reporte configurables para equilibrar telemetría y duración de batería

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint compartido, eliminando en la mayoría de los casos la necesidad de seleccionar el protocolo manualmente. Si el M130 está configurado para enviar datos a Plaspy, la plataforma emparejará los mensajes entrantes con un protocolo compatible y los procesará en telemetría y eventos.

- Plaspy detecta automáticamente el protocolo del rastreador
- El dominio del servidor Plaspy es d.plaspy.com para configuraciones basadas en nombre
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse donde no hay DNS disponible
- El puerto es 8888 y es el puerto compartido para todos los dispositivos soportados
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las capacidades del equipo y la red
- Cuando el dispositivo apunta al endpoint de Plaspy y utiliza el transporte soportado, típicamente no es necesaria la selección manual del protocolo dentro de Plaspy

## Contexto de transporte y conexión

El contexto de conexión se centra en cómo el M130 alcanza a Plaspy más que en la estructura interna de mensajes individuales. El rastreador puede configurarse para usar UDP o TCP y debe apuntar al endpoint de Plaspy en el puerto compartido para que el servidor reciba los reportes de forma fiable.

- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 para la entrega al servidor
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota
- Elija UDP o TCP según la capacidad del dispositivo y la fiabilidad de la red
- Asegúrese de que los firewalls del operador móvil y los ajustes del APN permitan conexiones salientes al endpoint y puerto de Plaspy
- Considere el comportamiento de señal y roaming, ya que el desempeño del transporte afecta la puntualidad de los reportes y el consumo de batería

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las compilaciones del fabricante pueden cambiar el comportamiento de los mensajes y las funcionalidades disponibles
- Las revisiones de hardware u opcionales en el M130 pueden habilitar o deshabilitar sensores o modos de reporte específicos
- Algunas funciones dependen del plan tarifario de la SIM o de los ajustes de APN suministrados con el dispositivo
- La elección del transporte entre UDP y TCP puede afectar la fiabilidad de entrega y debe validarse para su despliegue
- Siempre pruebe un dispositivo de muestra para confirmar que Plaspy detecta y procesa los mensajes según lo esperado antes de una implementación masiva
- Valide el mapeo de eventos de sensores y tipos de alarma con la documentación del fabricante cuando sea posible
- Si el comportamiento difiere de lo esperado, revise las notas de la versión de firmware y las listas de configuración del fabricante

## Por qué es importante entender el protocolo

Comprender cómo se comunica el M130 ayuda a los operadores a configurar correctamente los dispositivos, solucionar problemas de conectividad y reporte, y ajustar parámetros para optimizar la duración de la batería y la fidelidad de los eventos. Un conocimiento práctico del comportamiento del protocolo acorta el tiempo de puesta en marcha y reduce las brechas de datos evitables.

- Acelera la configuración inicial asegurando que los dispositivos apunten al endpoint correcto de Plaspy y usen el puerto soportado
- Simplifica la resolución de problemas cuando los mensajes no aparecen, enfocándose en transporte, SIM y variables de firmware
- Ayuda a seleccionar intervalos de reporte y modos de sensores que equilibren las necesidades de telemetría con una larga vida de batería
- Aclara por qué las actualizaciones de firmware o cambios de hardware pueden modificar el contenido o la frecuencia de los mensajes
- Facilita el mapeo de eventos de sensores del dispositivo a alertas y flujos de trabajo de Plaspy para uso operativo

## Por qué usar Plaspy con este protocolo

Usar el GPSMarker M130 con Plaspy ofrece una plataforma centralizada para procesar datos de ubicación y eventos de dispositivos configurados para reportar a Plaspy. Los ajustes de conexión compartidos y la detección automática de protocolos reducen el esfuerzo de configuración por dispositivo y permiten que las organizaciones se concentren en la monitorización y las operaciones en lugar del parseo a bajo nivel.

Plaspy está diseñado para aceptar reportes en un único endpoint consistente, lo que simplifica el despliegue en flotas con dispositivos y modelos mixtos. Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos y la visibilidad de flotas visite https://www.plaspy.com. Para obtener los detalles más actuales del protocolo específico del dispositivo, notas de firmware y orientaciones de configuración del GPSMarker M130, verifique la información con el fabricante en https://gpsmarker.ru/.
