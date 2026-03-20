---
slug: /lk_gps/lk880/protocol
id: lk880-protocol
sidebar_label: Protocol
title: LK-GPS - LK880 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo LK-GPS LK880 para comunicación con Plaspy y detección automática
keywords:
  - protocolo LK-GPS LK880
  - rastreador GPS LK880
  - protocolo LK-GPS Plaspy
  - protocolo de comunicación LK880
  - protocolo de rastreo LK880
  - integración de dispositivos Plaspy
  - protocolo rastreador GPS para mascotas
  - transporte UDP TCP para rastreadores
  - geocercas rastreo Plaspy
  - compatibilidad GPS LBS rastreador
---

# LK-GPS - Protocolo LK880

Esta página describe el contexto público del protocolo para usar el rastreador LK-GPS LK880 con la plataforma Plaspy. Resume cómo el LK880 —un rastreador GPS para mascotas 4G resistente al agua y controlador remoto de adiestramiento con posicionamiento GPS y LBS, soporte de geocercas, reportes de zona ciega, historial de rutas y alertas de seguridad— se comunica con un servidor central de rastreo en despliegues habituales.

Plaspy utiliza una configuración de conexión compartida para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía se enfoca en el contexto público de conexión y compatibilidad más que en detalles internos específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación del LK880 define cómo el dispositivo informa telemetría, posición y eventos a un servidor, y cómo el servidor puede enviar comandos o consultas cuando el equipo lo soporta. A un alto nivel, el protocolo permite la entrega confiable de actualizaciones de posición, reportes de estado y alarmas, y señales de control remoto para funciones como alertas de geocerca y controles de adiestramiento.

- Informa la identidad del dispositivo y telemetría básica para que Plaspy pueda asociar los mensajes con el activo correcto
- Transmite información de ubicación derivada de GPS y LBS para generar puntos de seguimiento utilizables
- Transporta notificaciones de eventos como activaciones de geocerca, alertas de batería baja y reportes de desplazamiento
- Soporta operaciones de control remoto o consultas cuando el hardware y firmware exponen capacidades de comando
- Facilita la recuperación de historial de rutas o la consulta de posicionamiento en modo plataforma si el dispositivo admite esas funciones

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint y puerto compartidos y usa esa transmisión para determinar qué protocolo de rastreador está usando cada equipo. Cuando un LK880 correctamente configurado informa al endpoint de Plaspy, la plataforma identificará el formato y dirigirá los datos a la cadena de procesamiento adecuada sin requerir selección manual por parte del usuario.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para el reporte de dispositivos
- El puerto es 8888 y Plaspy acepta conexiones de dispositivos en este puerto
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del soporte y ajustes del equipo
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está enviando datos al endpoint configurado de Plaspy

## Transporte y contexto de conexión

Comprender las opciones de transporte y conexión es esencial para lograr que el LK880 se comunique de forma fiable con Plaspy. El LK880 puede usar datos celulares para alcanzar Internet y luego enviar sus reportes a la dirección y puerto del servidor configurado; el método empleado (UDP o TCP) depende de la configuración del dispositivo y del firmware.

- Los dispositivos pueden apuntar al endpoint de reporte de Plaspy por dominio usando d.plaspy.com o por IP numérica usando 54.85.159.138
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría y mensajes de eventos
- El puerto 8888 es el puerto compartido que Plaspy utiliza para todos los rastreadores soportados, manteniendo la configuración uniforme
- La fiabilidad de la red, NAT y el comportamiento del operador pueden influir en si UDP o TCP es preferible para una SIM y entorno dados
- Para comandos remotos o interacciones bidireccionales, confirme que el firmware del dispositivo soporte el modo de transporte deseado

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales o el comportamiento de eventos; verifique la versión de firmware del equipo al diagnosticar
- Revisión de hardware o SKU regionales pueden ofrecer conjuntos de funciones ligeramente distintos, como opciones de salida para adiestramiento o sensores diferentes
- Los menús de configuración del fabricante pueden permitir seleccionar UDP o TCP y configurar el servidor de reporte; asegúrese de ingresar d.plaspy.com o 54.85.159.138 y el puerto 8888 según se requiera
- El comportamiento suplementario de geocerca, historial de rutas e informes de zona ciega depende del firmware y de las opciones configuradas en el dispositivo
- Siempre valide que el rastreador esté realmente transmitiendo al endpoint de Plaspy y que la SIM activa tenga conectividad de datos
- En caso de duda, contraste el comportamiento con la documentación del fabricante para confirmar las funciones soportadas en su revisión de dispositivo

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del LK880 ayuda a garantizar una configuración fiable, una resolución de problemas efectiva y una operación predecible a largo plazo cuando el dispositivo se usa con Plaspy. Conocer el papel de los reportes, el transporte y las diferencias de firmware reduce el tiempo empleado en diagnosticar problemas de conectividad y datos.

- Diagnóstico más rápido cuando faltan actualizaciones de ubicación o no se ven alertas de eventos en Plaspy
- Orientación más clara para elegir UDP o TCP según la red y las capacidades del dispositivo
- Mejor entendimiento de por qué algunas funciones como el control remoto de adiestramiento o los reportes de zona ciega se comportan distinto entre versiones de firmware
- Capacidad para confirmar que el dispositivo está enviando al endpoint y puerto correctos de Plaspy durante el onboarding
- Mayor fiabilidad a largo plazo al alinear la configuración del dispositivo con las expectativas de la plataforma

## Por qué usar Plaspy con este protocolo

Usar el LK880 con Plaspy ofrece a organizaciones y dueños de mascotas una forma centralizada de recibir actualizaciones de ubicación, monitorear estado y actividad, y recibir alertas por violaciones de geocercas, batería baja o desplazamientos. El manejo por parte de Plaspy de múltiples protocolos de dispositivos y la configuración unificada de puertos reduce la complejidad de operar flotas mixtas de equipos.

Si desea obtener más información sobre Plaspy y cómo la plataforma se integra con dispositivos como el LK-GPS LK880, visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación más recientes en el sitio del fabricante en https://www.lk-gps.com ya que esos detalles pueden cambiar con el tiempo.
