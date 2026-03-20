---
slug: /bofan/pt_300x/protocol
id: pt_300x-protocol
sidebar_label: Protocol
title: Bofan - PT-300X Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el Bofan PT-300X con Plaspy para rastreo GPS y gestión de flotas
keywords:
  - protocolo Bofan PT-300X
  - protocolo GPS Bofan PT-300X
  - compatibilidad Bofan PT-300X Plaspy
  - protocolo de comunicación PT 300X
  - protocolo de rastreo PT 300X
  - protocolo rastreador GPS Bofan
  - protocolo de dispositivo Plaspy
  - protocolo de rastreo vehicular Bofan
  - seguimiento de flotas PT 300X
  - compatibilidad rastreador GPRS
---

# Bofan - Protocolo PT-300X

Esta página describe el contexto público del protocolo para utilizar el rastreador Bofan PT-300X con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel, qué ajustes de conexión se usan y qué aspectos del comportamiento del rastreador resultan relevantes para la integración. El objetivo es ofrecer orientación clara y no sensible que ayude en la configuración y resolución de problemas, recomendando además la consulta de la documentación del fabricante para detalles específicos de firmware.

El PT-300X puede enviar ubicación y eventos por SMS o por GPRS usando TCP o UDP. Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según versiones de firmware, revisiones de hardware y configuración del fabricante, por lo que algunas funciones y detalles de los mensajes pueden diferir en la práctica.

## Resumen del protocolo

El protocolo de comunicación del PT-300X regula cómo el rastreador se identifica, envía actualizaciones de ubicación e informa eventos como violaciones de geocerca, alertas de exceso de velocidad, baja batería, SOS y el estado de relés remotos. Con Plaspy, el protocolo permite la entrega confiable de posición y telemetría para que los administradores de flota puedan ver y actuar sobre datos en tiempo real e históricos.

- El protocolo transmite actualizaciones periódicas de ubicación y mensajes de evento para que el servidor construya un historial de posiciones y dispare alertas.
- Los campos de identificación en los mensajes del dispositivo permiten a Plaspy asociar los datos entrantes con la cuenta del rastreador correspondiente.
- El reporte de eventos cubre funciones habituales de los rastreadores, como alertas de exceso de velocidad, batería baja, notificaciones SOS y disparadores de geocerca.
- El transporte puede ser TCP o UDP sobre la conexión de datos celulares según la configuración establecida por el usuario o instalador.
- SMS puede servir como respaldo en algunas implementaciones del PT-300X, pero no es la vía principal de integración con Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de los dispositivos en un único endpoint compartido y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el equipo está configurado para reportar a la dirección y puerto del servidor Plaspy.

- Plaspy escucha en el dominio d.plaspy.com y en el servidor de respaldo IP 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo.
- El puerto que usa Plaspy para el reporte de dispositivos es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar, y Plaspy acepta ambos transportes en el mismo puerto.
- Si el rastreador envía informes correctamente formateados al endpoint de Plaspy, la plataforma asociará los mensajes al dispositivo automáticamente sin selección manual de protocolo.

## Transporte y contexto de conexión

La configuración de conexión para el PT-300X consiste principalmente en apuntar el dispositivo para que envíe sus reportes GPRS al endpoint de Plaspy y elegir UDP o TCP según la configuración del rastreador. El transporte de red y la dirección del servidor son las piezas esenciales del contexto de conexión que determinan si Plaspy recibe los datos del equipo.

- El PT-300X puede configurarse para reportar vía GPRS usando UDP o TCP según las opciones del dispositivo y la estabilidad de la red.
- Para integrar con Plaspy, apunte el dispositivo a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138.
- Plaspy acepta conexiones entrantes en el puerto 8888 para todos los dispositivos compatibles.
- Usar TCP puede proporcionar un flujo orientado a conexión, mientras que UDP puede elegirse para reportes con menor sobrecarga, dependiendo de la configuración del rastreador.
- Asegúrese de que el APN y los parámetros GPRS en el equipo estén configurados correctamente para que el rastreador alcance el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar campos de mensaje, intervalos de reporte y tipos de eventos disponibles entre revisiones del dispositivo.
- Revisiones de hardware o accesorios opcionales pueden añadir o eliminar funciones como detección de alimentación externa, relés o entradas adicionales.
- El modo de transporte seleccionado en el dispositivo (UDP versus TCP) afecta la forma en que se entrega la información, pero ambos son aceptados por Plaspy en el mismo puerto.
- Algunas implementaciones usan reportes por SMS para alertas simples o como respaldo, pero el reporte por GPRS a Plaspy es el método principal de integración.
- Siempre valide la configuración del dispositivo con la documentación más reciente del fabricante para su versión de firmware exacta.
- Si encuentra mensajes inesperados o campos faltantes, verifique la revisión del firmware y la configuración del equipo antes de concluir que existe una incompatibilidad de protocolo.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico de cómo se comunica el PT-300X ayuda a asegurar una configuración fiable, acelerar la resolución de problemas y mejorar la operación a largo plazo con Plaspy. Saber qué transporte usar, cómo se incluye la identificación en los reportes y qué eventos puede enviar el dispositivo reduce la fricción en la integración y apoya la supervisión operativa.

- Configurar correctamente el APN y los parámetros GPRS evita fallos de conectividad hacia d.plaspy.com o 54.85.159.138.
- Seleccionar el modo de transporte adecuado para su entorno de red mejora la fiabilidad de entrega.
- Reconocer qué eventos reporta el rastreador ayuda a ajustar las alertas y el comportamiento de geocerca dentro de Plaspy.
- Emparejar las capacidades del firmware con sus necesidades operativas evita sorpresas cuando alguna función falta o cambia tras una actualización.
- Entender la cadencia básica de reporte y los desencadenantes de eventos acelera el análisis de la causa raíz de posiciones faltantes o retrasadas.

## Por qué usar Plaspy con este protocolo

Usar el Bofan PT-300X con Plaspy proporciona a las organizaciones visibilidad centralizada de la ubicación del vehículo, alertas y estado mediante un único endpoint de reporte consistente. La detección automática de protocolos de Plaspy y su estrategia de puerto unificado reducen la complejidad al incorporar varios modelos de rastreadores y permiten concentrarse en los flujos de trabajo de la flota en lugar de los detalles de red por dispositivo.

To learn more about Plaspy and how it handles tracker integrations visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and configuration commands consult the manufacturer site at https://www.bofancloud.com/ to confirm current behavior and options.
