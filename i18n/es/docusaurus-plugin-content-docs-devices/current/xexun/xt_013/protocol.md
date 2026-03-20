---
slug: /xexun/xt_013/protocol
id: xt_013-protocol
sidebar_label: Protocol
title: Xexun - XT-013 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Xexun XT-013 y su comunicación con Plaspy para rastreo confiable
keywords:
  - protocolo Xexun XT-013
  - protocolo GPS Xexun XT-013
  - protocolo de rastreo XT-013
  - protocolo de rastreador Xexun
  - compatibilidad XT-013 Plaspy
  - comunicación GPS Xexun
  - protocolo del dispositivo XT-013
  - rastreo vehicular XT-013
  - rastreador de activos XT-013
  - integración de dispositivos Plaspy
---

# Xexun - Protocolo XT-013

Esta página explica el contexto del protocolo público para usar el rastreador GPS Xexun XT-013 con Plaspy. Se centra en cómo el dispositivo se comunica con un servidor de flotas, qué esperar en términos generales del comportamiento de reporte del equipo y cómo esa información se integra en Plaspy para ubicación en tiempo real, detección de movimiento, geocercas, exceso de velocidad y alertas de batería.

El XT-013 es un rastreador compacto y resistente al agua con antena y batería integradas. Incluye funciones como alertas por movimiento, eventos de geocerca, notificaciones por exceso de velocidad y alertas de batería baja. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación define cómo el XT-013 envía actualizaciones de posición, eventos de estado y alertas a un servidor remoto. En términos generales, el protocolo permite que el rastreador se identifique ante el servidor, transmita ubicación y telemetría, y reporte eventos discretos que las aplicaciones pueden mostrar como alertas o historial.

- Proporciona identificación y reportes periódicos para que el servidor asocie los mensajes con un dispositivo
- Transmite coordenadas de ubicación y telemetría básica como nivel de batería y estado de movimiento
- Envía notificaciones de eventos como alarmas por movimiento, entrada o salida de geocercas y exceso de velocidad
- Permite que el servidor direccione mensajes al rastreador para comandos remotos opcionales y confirmaciones
- Habilita a Plaspy a registrar el historial de ubicaciones y activar las alertas configuradas para monitoreo y operación

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes de los rastreadores en un único punto de entrada compartido y detecta automáticamente el protocolo del dispositivo, por lo que generalmente no es necesario seleccionar el protocolo manualmente. Si el XT-013 está configurado para reportar a Plaspy y utiliza el transporte soportado, Plaspy emparejará los mensajes entrantes con el manejador de protocolo correspondiente.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes para simplificar la configuración
- Plaspy detecta automáticamente el protocolo del rastreador a partir de patrones de tráfico entrante, por lo que los usuarios normalmente no necesitan elegir el protocolo en la plataforma
- La configuración correcta del dispositivo para apuntar los reportes hacia Plaspy es el requisito típico para que la detección tenga éxito
- La detección se centra en identificar mensajes válidos del rastreador y mapearlos a registros de dispositivo, más que en exponer detalles internos del firmware

## Transporte y contexto de conexión

El XT-013 puede configurarse para usar UDP o TCP según la capacidad del equipo y la configuración elegida. Los ajustes de conexión dirigen al rastreador al endpoint compartido de Plaspy para que los mensajes lleguen a la plataforma y se procesen automáticamente.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El rastreador puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, ofreciendo un puerto de reporte único y consistente
- La elección entre UDP o TCP afecta el comportamiento de entrega pero no cambia la semántica de alto nivel de los eventos reportados por el rastreador
- Asegúrese de que el APN y los ajustes de red sean correctos en la SIM para permitir conexiones salientes hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de los mensajes, campos opcionales y el comportamiento de eventos; verifique la versión de firmware al diagnosticar
- Las revisiones de hardware a veces modifican características de radio o energía sin alterar el formato de reporte externo
- Ajustes del fabricante o variaciones OEM pueden cambiar el servidor por defecto o las opciones de transporte; confirme la configuración del equipo antes de asumir compatibilidad
- La selección de transporte (UDP versus TCP) debe coincidir con la configuración del dispositivo y el entorno de red
- Valide umbrales de geocerca, exceso de velocidad y reportes de batería baja con el firmware específico instalado en la unidad
- En caso de dudas, consulte la documentación oficial de Xexun para comandos y procedimientos de configuración específicos del dispositivo

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el XT-013 ayuda a garantizar una configuración fiable, alertas exactas y un comportamiento predecible a largo plazo cuando se usa con Plaspy. Conocer los intervalos de reporte, el transporte y los tipos de eventos acelera la resolución de problemas y la optimización.

- Ayuda a confirmar que el dispositivo está apuntando al endpoint y transporte correctos de Plaspy
- Facilita interpretar por qué ciertos eventos aparecen o no en la plataforma
- Orienta la decisión sobre la frecuencia de reporte para equilibrar la vida útil de la batería y la granularidad de actualizaciones
- Permite diagnosticar rápidamente problemas de conectividad frente a problemas de configuración del equipo
- Contribuye a validar que las alertas de geocerca y exceso de velocidad coinciden con las expectativas operativas

## Por qué usar Plaspy con este protocolo

Usar el Xexun XT-013 con Plaspy ofrece una manera práctica de centralizar los datos de ubicación, recibir alertas oportunas de movimiento y geocercas, y mantener seguimiento histórico para supervisión de flotas y activos. El diseño compacto y resistente al agua del XT-013, junto con su batería integrada y funciones de alerta, lo hacen adecuado para el rastreo discreto de activos y la monitorización vehicular cuando se integra con una plataforma como Plaspy.

Para conocer más sobre Plaspy y cómo maneja la conectividad de dispositivos y la detección de protocolos, visite https://www.plaspy.com. Para detalles más recientes de firmware, comandos de configuración y documentación específica del fabricante para el XT-013, consulte la información en el sitio oficial de Xexun https://www.xexun.com/ ya que el comportamiento del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
