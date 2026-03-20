---
slug: /globalsat/nw_360hr/protocol
id: nw_360hr-protocol
sidebar_label: Protocol
title: GlobalSat - NW-360HR Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador GPS wearable GlobalSat NW-360HR con Plaspy
keywords:
  - Protocolo GlobalSat NW-360HR
  - Protocolo GPS GlobalSat NW-360HR
  - Protocolo de rastreo NW-360HR
  - Compatibilidad NW-360HR Plaspy
  - Protocolo de rastreador Plaspy
  - Protocolo de rastreador GPS wearable
  - Protocolo de rastreador LTE M1 NB IoT
  - Protocolo de rastreo de balizas BLE
  - Protocolo GPS para seguridad personal
  - Protocolo de comunicación de dispositivos
---

# GlobalSat - NW-360HR Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador GPS wearable GlobalSat NW-360HR con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que integradores y administradores comprendan el papel del canal de comunicación y los puntos de configuración comunes necesarios para una ingestión de datos exitosa.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento se mantiene en un nivel práctico y recomienda verificar la documentación del fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo de comunicación del rastreador define cómo el NW-360HR envía posición, telemetría de sensores y notificaciones de eventos a un backend como Plaspy. En la práctica, el protocolo cubre identificadores, periodicidad de los reportes, señales de evento para SOS y detección de caídas, y el empaquetado de datos GNSS, BLE y de sensores fisiológicos en mensajes que el backend puede interpretar.

- Permite cargas regulares de ubicación y telemetría para que Plaspy muestre la posición y el estado de los sensores.
- Transporta notificaciones de eventos como pulsaciones de SOS y avisos de caída para activar alertas.
- Transmite telemetría de sensores como frecuencia cardíaca, temperatura de la piel y eventos del acelerómetro para monitoreo contextual.
- Incluye información de identificación y estado para que el backend asocie los mensajes con el dispositivo y el usuario correctos.
- Soporta modos de reporte periódicos y activados por movimiento, relevantes para la duración de batería y las necesidades operativas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de dispositivos en un endpoint de red compartido y usa esa entrada para determinar automáticamente el protocolo del rastreador sin requerir selección manual en la mayoría de los casos. Si el NW-360HR está configurado para enviar datos a Plaspy, la plataforma emparejará los mensajes entrantes con un dispositivo conocido y analizará el contenido según la interpretación soportada.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben apuntar al endpoint de Plaspy para habilitar la detección y el parsing automático por parte de la plataforma.
- Cuando los reportes del NW-360HR llegan al endpoint de Plaspy, la plataforma asocia la transmisión con una identidad de dispositivo y un esquema de telemetría.
- Normalmente usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.
- Si aparece un comportamiento inusual durante la configuración, confirme los ajustes de envío del dispositivo y la versión de firmware junto con los registros de ingestión de Plaspy.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el NW-360HR entrega datos a Plaspy y son un punto habitual para verificar al aprovisionar dispositivos. El dispositivo puede usar UDP o TCP según el soporte del equipo y la configuración de red, y Plaspy ofrece un endpoint público estable al que los dispositivos pueden dirigirse.

- El dominio del servidor de Plaspy para el reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138 para direccionamiento directo.
- La plataforma usa el puerto 8888 para comunicación con dispositivos y todos los dispositivos configurados para Plaspy utilizan el mismo puerto.
- El NW-360HR puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes de red del dispositivo y las capacidades del operador.
- Use el nombre de dominio d.plaspy.com cuando sea posible para permitir enrutamiento basado en DNS y futuros cambios de infraestructura.
- Valide que cualquier firewall de red o reglas APN del operador permitan tráfico saliente UDP o TCP hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del NW-360HR pueden cambiar tiempos de mensaje, campos de sensores o modos de reporte soportados; siempre confirme la versión de firmware del dispositivo durante las pruebas.
- Las revisiones de hardware o variantes regionales pueden afectar los transportes disponibles o las bandas celulares y, por tanto, influir en cómo el dispositivo alcanza Plaspy.
- La elección de transporte entre UDP y TCP puede afectar la confiabilidad de entrega y el consumo de batería; seleccione el transporte que coincida con la configuración del dispositivo y las condiciones de la red.
- Los menús de configuración del fabricante o la provisión de la SIM pueden requerir establecer el destino en d.plaspy.com o 54.85.159.138 y el puerto 8888 para alcanzar Plaspy.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta al endpoint compartido de Plaspy, pero se requiere una configuración correcta del envío por parte del dispositivo para una detección fluida.
- Valide la compatibilidad con pruebas en el mundo real que incluyan SOS, detección de caídas y reportes de telemetría para asegurar que Plaspy ingiere los eventos como se espera.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del NW-360HR ayuda a los equipos técnicos a configurar los dispositivos correctamente, interpretar comportamientos inesperados y asegurar una entrega confiable a largo plazo hacia Plaspy. Conocer el contexto de conexión y los tipos de mensajes que envía el dispositivo reduce el tiempo de resolución de problemas y mejora la preparación operativa.

- Garantiza que la dirección del servidor y el puerto se aprovisionen correctamente para que los dispositivos lleguen a Plaspy de forma confiable.
- Ayuda a interpretar cuándo faltan reportes debido a problemas de transporte, APN o cambios de firmware.
- Orienta los escenarios de prueba para SOS, detección de caídas y reportes activados por movimiento para validar flujos de extremo a extremo.
- Soporta la planificación de vida de batería al entender los intervalos de reporte y los envíos impulsados por eventos.
- Simplifica el mapeo de los campos de sensores del dispositivo a los paneles y flujos de alertas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el NW-360HR con Plaspy ofrece a las organizaciones visibilidad consolidada de la ubicación y la telemetría fisiológica junto con alertas activadas por eventos como SOS y avisos de caída. Esta combinación respalda flujos de trabajo para cuidadores, monitoreo de trabajadores solos y supervisión operativa donde la ubicación más el contexto de salud mejora la respuesta y la conciencia situacional.

Plaspy provee un único endpoint de ingestión que acepta reportes del NW-360HR cuando está configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888. Dado que Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador, los despliegues suelen ser más rápidos de comisionar y más simples de operar a escala. Para saber más sobre Plaspy visite https://www.plaspy.com. Por favor verifique los detalles más recientes específicos del protocolo y el comportamiento del firmware con el fabricante en https://www.globalsat.com.tw/ ya que el soporte del protocolo y los detalles de implementación pueden cambiar con el tiempo.
