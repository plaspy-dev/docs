---
slug: /concox/ll705/protocol
id: ll705-protocol
sidebar_label: Protocol
title: Concox - LL705 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox LL705 y cómo se comunica con Plaspy para monitoreo confiable de activos
keywords:
  - protocolo Concox LL705
  - protocolo GPS Concox LL705
  - comunicación LL705
  - compatibilidad LL705 Plaspy
  - protocolo rastreador Concox
  - protocolo rastreador 4G
  - protocolo rastreo LL705
  - rastreador para gestión de flotas
  - protocolo seguimiento de activos
  - telemetría remota LL705
---

# Concox - Protocolo LL705

Esta página describe el contexto público del protocolo para usar el rastreador GPS Concox LL705 con Plaspy. Explica de manera general cómo se comunica el dispositivo, qué función cumple el protocolo de reporte al enviar ubicaciones y eventos, y cómo Plaspy recibe y procesa esos mensajes para el monitoreo de activos y los flujos de trabajo de flota.

El LL705 es un rastreador 4G diseñado para despliegues a largo plazo, con posicionamiento por múltiples fuentes y batería de larga duración. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de conexión y compatibilidad más que en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo del LL705 define cómo el dispositivo informa posición, telemetría básica y notificaciones de eventos a un backend. En términos generales, el protocolo del rastreador garantiza que las fijaciones GNSS, las ubicaciones alternativas basadas en estaciones celulares (LBS), los descubrimientos BLE y las alertas de estado estén codificados y transmitidos para que Plaspy pueda ingerirlos para seguimiento en tiempo real e informes históricos.

- Permite al LL705 enviar posiciones GNSS, ubicaciones LBS como respaldo, indicios de sensores BLE y eventos de estado a Plaspy.
- Transporta la identificación del dispositivo para que Plaspy asocie los mensajes entrantes con un rastreador registrado.
- Codifica telemetría como estado de batería, alertas de manipulación y lecturas básicas de sensores para monitoreo y mantenimiento.
- Soporta mensajes basados en eventos que disparan alertas de geocercas, informes de movimiento y notificaciones de batería baja dentro de Plaspy.
- Facilita interacciones de gestión del dispositivo, por ejemplo, la coordinación de actualizaciones de firmware cuando FOTA está disponible y es compatible.

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes de rastreadores en un endpoint y puerto compartidos y determina automáticamente el procesamiento correcto cuando un dispositivo reporta. Esto significa que la configuración correcta del destino de red en el dispositivo es el paso clave para la integración, y usted normalmente no tendrá que seleccionar un analizador manualmente siempre que el dispositivo envíe datos al endpoint de Plaspy.

- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para el reporte de dispositivos.
- La plataforma escucha en el puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo de rastreador usado por las conexiones entrantes.
- Los dispositivos pueden configurarse para enviar al dominio de Plaspy o a la IP indicada según el despliegue y las preferencias de DNS.
- Si el LL705 está configurado correctamente para reportar a Plaspy, la selección manual del protocolo dentro de Plaspy normalmente no es necesaria.
- La detección automática de protocolo agiliza el onboarding de una amplia gama de modelos de rastreadores compatibles.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el LL705 alcanza a Plaspy en la red. Dependiendo de la pila de red del dispositivo y su configuración, el rastreador puede usar transporte UDP o TCP al enviar mensajes a Plaspy en el puerto compartido.

- El LL705 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de red y cortafuegos para flotas.
- Elija TCP cuando se prefiera un transporte orientado a sesión y confiable, y UDP cuando se priorice mínima sobrecarga y menor consumo de energía, según las capacidades del dispositivo.
- Asegúrese de que la ruta de red desde el dispositivo hasta el endpoint de Plaspy permita tráfico saliente al puerto 8888 en el transporte configurado.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los campos incluidos en los reportes y los tipos de eventos disponibles; verifique la versión de firmware del dispositivo al solucionar problemas.
- Las revisiones de hardware o variantes regionales del LL705 pueden presentar pequeñas diferencias en bandas soportadas u opciones de telemetría que afecten el comportamiento de reporte.
- Las opciones de configuración del fabricante, como modos de trabajo e intervalos de reporte, influirán en la frecuencia de mensajes y la duración de la batería.
- La selección de transporte UDP versus TCP puede verse condicionada por el comportamiento de la red del proveedor de SIM o por ajustes del dispositivo y debe coincidir con la configuración del mismo.
- Algunas funciones como FOTA o el reporte de sensores BLE pueden requerir configuración adicional por parte del fabricante para funcionar con la gestión de dispositivos de Plaspy.
- Siempre valide el comportamiento crítico consultando la documentación del fabricante y pruebe un dispositivo representativo en su red antes de un despliegue a gran escala.

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el LL705 ayuda a asegurar una configuración fiable, un uso eficiente de la batería y una resolución de problemas más efectiva cuando los dispositivos están desplegados. Tener claro el alcance del protocolo y el contexto de transporte reduce el tiempo de integración y mejora la visibilidad operativa.

- Confirma la configuración correcta del destino y del transporte para que los dispositivos lleguen a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a ajustar los intervalos de reporte y los modos de trabajo para equilibrar la frescura de las ubicaciones y la vida de la batería en despliegues a largo plazo.
- Facilita la interpretación de por qué ciertos eventos, como alertas de manipulación o batería baja, aparecen en Plaspy y cómo se generan.
- Simplifica la configuración de red y reglas de cortafuegos ya que todos los dispositivos de Plaspy usan el mismo puerto.
- Proporciona una base para coordinar actualizaciones de firmware y acciones de gestión de dispositivos que dependen de un comportamiento de reporte predecible.

## Por qué usar Plaspy con este protocolo

Usar el LL705 con Plaspy ofrece a las organizaciones visibilidad a largo plazo sobre activos de alto valor y remotos, a la vez que reduce la carga de mantenimiento. La batería de gran capacidad del LL705, su posicionamiento multinorma, la carcasa resistente y los modos de trabajo configurables combinan bien con las capacidades centralizadas de rastreo, alertas e informes de Plaspy para entregar valor operativo práctico.

El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos simplifican el onboarding a gran escala. Para conocer más sobre cómo Plaspy puede trabajar con el LL705 y otros rastreadores de activos visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica actual del dispositivo con el fabricante en https://www.iconcox.com/.
