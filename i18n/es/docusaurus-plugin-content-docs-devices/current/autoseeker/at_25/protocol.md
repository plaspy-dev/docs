---
slug: /autoseeker/at_25/protocol
id: at_25-protocol
sidebar_label: Protocol
title: Autoseeker - AT-25 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el rastreador Autoseeker AT-25 con Plaspy usando ajustes de conexión compartidos
keywords:
  - Autoseeker AT-25 protocolo
  - Autoseeker AT-25 protocolo GPS
  - Protocolo Autoseeker AT-25 para Plaspy
  - Protocolo GPS Autoseeker
  - Protocolo de rastreo AT-25
  - rastreo vehicular Plaspy
  - compatibilidad de dispositivos Plaspy
  - comunicación de rastreador GPS
  - rastreador GPS GPRS
  - rastreador GPS 4G
---

# Autoseeker - AT-25 Protocol

Esta página ofrece información pública sobre el protocolo para utilizar el rastreador GPS Autoseeker AT-25 con Plaspy. Describe de forma general cómo se comunica el equipo, qué ajustes de conexión se emplean para enviar datos a Plaspy y qué comportamientos del dispositivo son relevantes para una integración exitosa. El contenido busca ser informativo y no confidencial, ayudando a usuarios técnicos a comprender cómo el AT-25 intercambia información de ubicación y estado con un servidor de flotas.

El AT-25 es compatible con Plaspy y puede enviar informes por SMS y GPRS TCP, además de conectividad de datos 4G. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Use esta página como referencia general y consulte al fabricante para detalles específicos de firmware o protocolos avanzados.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación del AT-25 define cómo la unidad empaqueta y envía actualizaciones de posición, alertas y estado básico del dispositivo a un servidor remoto como Plaspy. El protocolo permite que el rastreador se identifique, reporte telemetría y envíe mensajes basados en eventos que la plataforma convierte en ubicaciones, alertas y registros históricos para los operadores.

- Permite informes periódicos y por evento para que Plaspy pueda mapear y registrar la ubicación del vehículo a lo largo del tiempo.
- Transporta información básica de identidad y estado del dispositivo necesaria para asociar mensajes entrantes con un rastreador específico.
- Transmite alertas y alarmas como exceso de velocidad, eventos de geocerca, batería baja y pérdida de alimentación para que Plaspy pueda activar notificaciones.
- Soporta distintos métodos de reporte, como GPRS sobre datos celulares y respaldo por SMS para comunicación más resiliente.
- Codifica el intervalo de reporte y campos de estado que permiten a la plataforma presentar historial de rastreo utilizable e información operativa.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un punto final compartido y determina automáticamente qué protocolo está usando cada dispositivo. Cuando un AT-25 está configurado para enviar datos al endpoint de Plaspy, la plataforma normalmente detectará e interpretará el formato de reporte sin necesidad de seleccionar el protocolo manualmente en la mayoría de los casos.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Los dispositivos correctamente configurados para reportar a Plaspy no suelen requerir selección manual del protocolo dentro de la plataforma.
- El AT-25 puede configurarse para reportar por GPRS TCP u otros transportes compatibles y Plaspy gestiona la detección en el servidor.
- Una identidad de dispositivo correcta y reportes consistentes ayudan a Plaspy a asociar mensajes con registros y evitar clasificaciones erróneas.
- Si existen variantes inusuales de firmware o configuraciones no estándar, revise la documentación del fabricante para alinear los ajustes de reporte.

## Transporte y contexto de conexión

El AT-25 puede utilizar datos celulares o SMS para entregar reportes. Para reportes por GPRS o 4G hacia Plaspy, el dispositivo puede configurarse para usar UDP o TCP en el puerto común de la plataforma. Plaspy expone un endpoint estable que los dispositivos pueden apuntar para asegurar que los mensajes lleguen al servidor de flotas.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- La plataforma usa el puerto 8888 para conexiones de dispositivos
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y comportamiento del operador
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reglas de firewall

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden introducir diferencias en el contenido de los mensajes, campos disponibles y comportamiento. Anote la versión de firmware al validar la integración.
- Revisiones de hardware o variantes regionales del AT-25 pueden tener capacidades ligeramente diferentes o ajustes por defecto que afectan el reporte.
- La elección del transporte es relevante. Algunas redes prefieren UDP para reportes livianos, mientras que otras usan TCP para entrega confiable; confirme que la configuración del transporte del dispositivo coincide con sus necesidades.
- El reporte por SMS es útil como respaldo, pero ofrece diferente capacidad de datos y puede no incluir el mismo conjunto de campos de telemetría que GPRS.
- Es posible que el APN por defecto o los ajustes de servidor del fabricante deban actualizarse para apuntar al endpoint de Plaspy para reportes en la nube.
- Valide la compatibilidad con el manual de usuario del dispositivo y los boletines técnicos más recientes del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AT-25 ayuda a asegurar una instalación confiable, una interpretación correcta de los datos y una resolución más rápida de problemas cuando un dispositivo no reporta como se espera. La familiaridad con el protocolo y el contexto de conexión reduce el tiempo de configuración y mejora la fiabilidad operativa a largo plazo para los administradores de flota.

- Reduce la fricción en la instalación al alinear los ajustes de servidor y transporte del dispositivo con las expectativas de Plaspy.
- Mejora la resolución de problemas cuando faltan datos o no llegan alertas, al acotar el alcance del problema a transporte, APN o diferencias de firmware.
- Ayuda a optimizar intervalos de reporte y compensaciones de batería para ajustarse a necesidades operativas y limitaciones de energía.
- Permite tomar decisiones informadas sobre habilitar funciones como geocercas, alertas de exceso de velocidad o corte remoto de motor según la capacidad del dispositivo.
- Facilita verificar que los mensajes que llegan a Plaspy se están parseando y almacenando como se pretende.

## Por qué usar Plaspy con este protocolo

Utilizar el Autoseeker AT-25 con Plaspy ofrece a las organizaciones una forma práctica de recopilar datos de ubicación, estado y alertas desde vehículos y presentarlos en una plataforma centralizada para monitoreo y gestión operativa. El conjunto de funciones del AT-25, como reportes programados, respaldo por SMS, corte de motor y diversas alarmas, se complementa bien con un servidor de flotas en la nube para ofrecer visibilidad en tiempo real y reproducción histórica.

Plaspy está diseñado para aceptar reportes de dispositivos enviados a un único endpoint y puerto, reduciendo la complejidad de configuración en flotas mixtas. Para saber más sobre Plaspy y cómo gestiona la comunicación con dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware y orientación de implementación consulte al fabricante en https://autoseekergps.com/ ya que el comportamiento del dispositivo puede cambiar con el tiempo y el fabricante provee la documentación técnica autorizada.
