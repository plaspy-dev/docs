---
slug: /tk_star/tk109/protocol
id: tk109-protocol
sidebar_label: Protocol
title: TK-Star - TK109 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TK‑Star TK109, configuración de conexión y notas de integración para compatibilidad con Plaspy y seguimiento GPS fiable
keywords:
  - protocolo TK-Star TK109
  - protocolo GPS TK109
  - compatibilidad TK109 Plaspy
  - protocolo de comunicación TK109
  - protocolo de rastreo TK109
  - integración rastreador TK109
  - compatibilidad dispositivos Plaspy
  - guía protocolo rastreador GPS
  - rastreo de activos TK109
  - rastreador de seguridad personal TK109
---

# TK-Star - Protocolo TK109

Esta página describe el contexto público del protocolo para integrar el rastreador TK-Star TK109 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a un nivel general, las configuraciones de conexión que usa la plataforma y las consideraciones prácticas que importan cuando usted apunta un TK109 a Plaspy para seguimiento en tiempo real, alertas y almacenamiento de historial.

Plaspy utiliza configuraciones de conexión compartidas para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan datos. El comportamiento exacto del TK109 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento ofrece una visión general pública y recomienda validar con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del TK109 define cómo el dispositivo se identifica, envía datos de posición y eventos, y comunica alarmas y estados a un servidor remoto. Cuando se usa con Plaspy, el protocolo permite que el rastreador entregue ubicaciones GPS y fuentes de ubicación complementarias, alarmas SOS y por vibración, además de mensajes periódicos de latido o telemetría para que la plataforma presente información en vivo y histórica.

- Transporta posiciones y datos de posicionamiento multimodal para mostrarlos en Plaspy
- Transmite alertas de eventos como SOS, vibración, geocerca y notificaciones de movimiento
- Proporciona identificación básica del dispositivo e información de estado para integración y mapeo
- Habilita reportes periódicos para el historial de seguimiento y almacenamiento en el servidor
- Funciona sobre canales de datos celulares estándar para que Plaspy ingiera mensajes en tiempo real

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes de dispositivos en un único endpoint y puerto compartido y determina automáticamente el protocolo aplicable del rastreador. En la mayoría de los despliegues, el TK109 no requiere selección manual de protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy y los mensajes incluyan los identificadores que la plataforma utiliza para relacionar el dispositivo.

- Plaspy escucha en un endpoint y puerto de ingestión común para todos los dispositivos soportados
- Normalmente el usuario apunta el rastreador a la dirección de Plaspy y no necesita seleccionar un protocolo manualmente
- Plaspy empata los mensajes entrantes con los registros de dispositivos y los manejadores de protocolo automáticamente
- La detección automática facilita agregar flotas mixtas de dispositivos sin cambiar puertos por equipo
- Si un dispositivo no reporta como se espera, verificar la configuración del equipo y el firmware suele ser el primer paso

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el TK109 envía sus paquetes de reporte a Plaspy más que el formato interno de los paquetes. El TK109 puede configurarse para usar transporte UDP o TCP según el soporte del dispositivo y las opciones elegidas. Plaspy acepta ambos tipos de transporte en el mismo puerto, de modo que el dispositivo puede usar el que mejor se adapte a su configuración y condiciones de red.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138
- El puerto de ingestión de Plaspy es 8888 y todos los dispositivos usan el mismo puerto en la plataforma
- El rastreador puede usar UDP o TCP en el puerto 8888 según el firmware y la configuración del dispositivo
- Se admite usar el nombre de dominio o la IP para que los instaladores elijan la mejor opción para su red
- Verifique el APN del dispositivo, la configuración GPRS y el tipo de transporte elegido al poner en servicio un rastreador

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el comportamiento de reporte o los campos disponibles que envía el rastreador
- Las revisiones de hardware o variantes regionales del TK109 pueden diferir en los transportes o sensores soportados
- Los comandos de configuración del fabricante o los APN por defecto pueden afectar la capacidad del dispositivo para alcanzar Plaspy
- Seleccionar UDP frente a TCP puede modificar las características de entrega, pero Plaspy acepta ambos en el puerto 8888
- Confirme siempre que el dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para la ingestión en Plaspy
- Valide la compatibilidad con la documentación oficial de TK‑Star para el firmware específico y el lote del modelo

## Por qué es importante entender el protocolo

Conocer cómo se comunica el TK109 ayuda a una configuración exitosa, reportes confiables y una resolución eficiente de problemas cuando usa Plaspy. Tener claridad sobre las opciones de transporte, los tipos de eventos esperados y cómo el dispositivo se identifica reduce el tiempo de integración y ayuda a asegurar que las alertas y el historial lleguen como se espera.

- Ayuda a confirmar que la configuración del dispositivo está enviando datos a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Orienta en la elección de UDP o TCP según el comportamiento de la red y el soporte del dispositivo
- Facilita la interpretación del comportamiento del equipo durante la puesta en servicio o al diagnosticar reportes intermitentes
- Apoya la planificación de actualizaciones de firmware o reemplazos cuando el comportamiento cambia entre lotes de dispositivos
- Reduce el tiempo de resolución enfocando las comprobaciones en APN, tipo de transporte y versión de firmware
- Incrementa la certeza de que eventos SOS y alarmas alcanzarán Plaspy y desencadenarán notificaciones

## Por qué usar Plaspy con este protocolo

Usar el TK109 con Plaspy ofrece visibilidad centralizada para organizaciones y personas que necesitan actualizaciones de ubicación confiables, alertas de eventos y revisión histórica de rutas. Las características del hardware TK109 como posicionamiento multimodal, alarmas SOS y por vibración, y diseño compacto con grado IP65, combinadas con Plaspy, entregan una solución práctica para seguridad personal, protección de activos y monitoreo de equipos ligeros.

Para conocer más sobre Plaspy y cómo maneja la integración de dispositivos visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y la guía del fabricante consulte el sitio oficial de TK Star en https://www.tk-star.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con el fabricante.
