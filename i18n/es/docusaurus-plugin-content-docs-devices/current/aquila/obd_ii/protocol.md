---
slug: /aquila/obd_ii/protocol
id: obd_ii-protocol
sidebar_label: Protocol
title: Aquila - OBD II Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Aquila OBD II con Plaspy en conectividad e reporte de datos
keywords:
  - Aquila OBD II
  - protocolo Aquila OBD II
  - protocolo de rastreador GPS Aquila
  - protocolo de seguimiento OBD II
  - rastreador de diagnóstico vehicular
  - rastreador CAN K-Line
  - compatibilidad de dispositivos Plaspy
  - protocolo de rastreador Plaspy
  - gestión de flotas GPS
  - comunicación OBD II GPS
---

# Aquila - Protocolo OBD II

Esta página explica el contexto público del protocolo para usar el rastreador GPS Aquila OBD II con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué puntos de conexión se utilizan y qué aspectos del comportamiento de reporte del dispositivo son importantes al integrar el rastreador en flotas y en procesos de monitoreo vehicular.

Plaspy emplea configuraciones de conexión compartidas para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página pretende explicar el papel del protocolo de rastreo y su relación con Plaspy, en lugar de documentar tramas específicas de firmware o estructuras de paquetes propietarias.

## Visión general del protocolo

El protocolo de comunicación del rastreador Aquila OBD II permite al dispositivo transmitir ubicación GPS, parámetros de diagnóstico del vehículo y datos de sensores a un servidor remoto para su procesamiento. A través de la interfaz OBD-II y con soporte opcional de CAN y K-Line, el rastreador puede reportar señales estándar del vehículo y algunos parámetros específicos del fabricante, junto con datos de ubicación y movimiento.

- Permite al rastreador enviar posiciones GPS y datos de diagnóstico del vehículo a un backend, preservando tiempos y contexto.
- Lleva parámetros obtenidos desde OBD II como métricas del motor y voltaje de batería junto con eventos de movimiento del acelerómetro de 3 ejes.
- Proporciona un mecanismo para que el dispositivo se identifique y declare sus capacidades, de modo que el servidor pueda interpretar y presentar telemetría relevante.
- Soporta configuraciones por aire que optimizan el uso de GPRS sin perder visibilidad en tiempo real.
- Habilita el reporte de eventos como movimiento, encendido, pérdida de alimentación y alertas de diagnóstico que son útiles en flujos de trabajo de monitoreo de flota.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un punto de entrada compartido y utiliza detección automática para identificar el protocolo del rastreador cuando este se conecta y empieza a enviar datos. Esto reduce la necesidad de seleccionar manualmente el protocolo dentro de Plaspy cuando el dispositivo está configurado para enviar al endpoint de la plataforma.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la IP del servidor Plaspy para alcanzar la plataforma.
- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del equipo.
- Generalmente no es necesario elegir un protocolo en Plaspy si el rastreador apunta correctamente al endpoint de Plaspy y usa el transporte compatible.
- La detección automática maneja variaciones comunes del protocolo y ayuda a mapear la telemetría entrante a los modelos de datos de Plaspy.
- Si un dispositivo usa una variante de firmware poco común, verifique que esté configurado para enviar los campos de identificación estándar para que Plaspy pueda reconocer la fuente.

## Contexto de transporte y conexión

Las opciones de conexión y transporte influyen en la forma en que el rastreador Aquila OBD II entrega datos a Plaspy. El dispositivo puede usar transporte UDP o TCP según el soporte y la configuración, y puede apuntar a un nombre DNS o a una dirección IP para llegar al endpoint de ingestión de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y los ajustes.
- Es habitual que los dispositivos apunten al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 para el envío de datos.
- Plaspy utiliza el puerto 8888 como puerto compartido para todos los dispositivos, lo que simplifica la configuración en el lado del dispositivo.
- La elección del transporte influye en la fiabilidad y el comportamiento de retransmisión, pero no cambia los elementos lógicos de telemetría que reporta el rastreador.
- Confirme que el rastreador esté configurado para enviar al endpoint de Plaspy para asegurar la detección automática del protocolo y la correcta ingestión de datos.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir diferencias en qué parámetros OBD se reportan y cómo se codifican los eventos; siempre revise las notas de la versión del firmware.
- Revisiones de hardware u módulos opcionales como Bluetooth pueden modificar la telemetría disponible o los modos de reporte.
- Los parámetros OBD específicos del fabricante accesibles vía CAN o K-Line pueden variar según la marca y modelo del vehículo y pueden requerir mapeo tras la ingestión.
- Seleccionar UDP frente a TCP en el dispositivo afecta las garantías de entrega, pero Plaspy soporta ambos transportes en el puerto común.
- Las configuraciones por aire en el dispositivo pueden cambiar la frecuencia de envío de datos y qué parámetros se incluyen.
- Valide la compatibilidad comparando la documentación del fabricante con los requisitos del despliegue y pruebe reportes en vivo para confirmar nombres de campo y valores.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del rastreador reduce fricciones de integración y ayuda a mantener reportes confiables a lo largo del tiempo. Saber qué puede enviar el dispositivo y cómo se conecta a Plaspy permite optimizar el reporte, resolver problemas y garantizar que la telemetría cumpla con las necesidades operativas.

- Simplifica la configuración inicial al asegurar que los dispositivos apunten al endpoint correcto de Plaspy y usen el transporte soportado.
- Permite diagnosticar reportes perdidos o malformados revisando el firmware del dispositivo y las opciones de transporte.
- Facilita decisiones informadas sobre intervalos de reporte y selección de parámetros para equilibrar necesidades de datos y uso de GPRS.
- Mejora el mapeo de parámetros del vehículo hacia paneles y reglas de alerta en Plaspy.
- Aumenta la confiabilidad a largo plazo al anticipar cómo las actualizaciones de firmware o cambios en los vehículos pueden afectar los datos reportados.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Aquila OBD II con Plaspy ofrece una vía práctica para combinar ubicación del vehículo, diagnóstico OBD y detección de movimiento en una sola vista operativa. El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy reducen la carga de configuración, mientras que el soporte para transportes estándar le permite elegir el comportamiento de conexión que mejor se adapte a sus requisitos de red y fiabilidad.

Para saber más sobre cómo Plaspy puede recibir y procesar telemetría de dispositivos Aquila OBD II, visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, notas de firmware y orientación del fabricante, verifique la información con el fabricante de Aquila en https://www.itriangle.in/.
