---
slug: /gotop/l17/protocol
id: l17-protocol
sidebar_label: Protocol
title: GOTOP - L17 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del wearable GOTOP L17 y cómo se comunica con Plaspy para rastreo en tiempo real y alertas
keywords:
  - protocolo GOTOP L17
  - protocolo GPS GOTOP L17
  - protocolo GOTOP L17 para Plaspy
  - protocolo de comunicación GOTOP L17
  - protocolo de rastreo GOTOP L17
  - protocolo de rastreador wearable GOTOP
  - protocolo de rastreador Plaspy
  - compatibilidad de GPS con Plaspy
  - protocolo de telemetría L17
  - rastreador SOS GOTOP L17
---

# GOTOP - Protocolo L17

Esta página documenta el contexto público del protocolo para usar el rastreador GPS wearable GOTOP L17 con Plaspy. Explica de forma general y no sensible cómo el L17 suele comunicar posiciones, eventos SOS y telemetría de sensores a Plaspy, de modo que usted pueda planificar la configuración e integración con la plataforma Plaspy.

El L17 es una pulsera inteligente SOS con GPS y 4G, diseñada para seguridad personal y monitoreo de salud. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación oficial de GOTOP para detalles específicos de firmware antes del despliegue final.

## Descripción general del protocolo

El protocolo del dispositivo es el conjunto de reglas que el L17 emplea para enviar fijaciones de ubicación, telemetría de salud, alertas SOS y actualizaciones de estado a un servidor remoto. Con Plaspy, el papel del protocolo es convertir los eventos en el dispositivo y las mediciones de sensores en mensajes que el servidor pueda procesar para visualización en tiempo real, alarmas y registros históricos.

- El protocolo transporta reportes de posición GNSS y marcas de tiempo para que Plaspy pueda mapear ubicación en vivo e historial.
- La telemetría de sensores, como frecuencia cardiaca, SpO2, presión arterial, temperatura y eventos de actividad, se transmite como mensajes estructurados de telemetría.
- Las pulsaciones del botón SOS y los cambios de estado se envían como mensajes de alerta para que Plaspy active notificaciones y flujos de trabajo.
- Las configuraciones a nivel de transporte indican al dispositivo los endpoints de Plaspy para que los mensajes lleguen a d.plaspy.com y se encaminen hacia los servicios de Plaspy.
- El comportamiento del protocolo puede cambiar entre versiones de firmware, por lo que la frecuencia de mensajes, los campos opcionales y la telemetría disponible pueden variar según el firmware del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente el manejo apropiado para cada tipo de rastreador. En la mayoría de los casos, un dispositivo configurado correctamente empezará a reportar al servidor de Plaspy sin que sea necesaria una selección manual del protocolo dentro de Plaspy.

- Plaspy escucha en un puerto conocido para todos los dispositivos e identifica automáticamente los flujos de datos entrantes.
- Los dispositivos apuntados a d.plaspy.com o a la IP del servidor serán enrutados hacia el procesamiento de Plaspy.
- Cuando el L17 está configurado para reportar a Plaspy, la plataforma empata los datos entrantes con la clase de dispositivo esperada y extrae los campos útiles.
- Normalmente los usuarios no necesitan elegir un protocolo en Plaspy, siempre que el dispositivo esté configurado para enviar al endpoint de Plaspy.
- Si la telemetría no aparece, valide la configuración de red, el perfil de la SIM y la configuración de firmware del dispositivo.

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo el L17 envía sus mensajes de protocolo a Plaspy. El L17 puede configurarse para usar UDP o TCP según el soporte del dispositivo y las condiciones de la red, y los mensajes deben dirigirse al endpoint de Plaspy para ser procesados.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma utiliza el puerto 8888 para conexiones de dispositivos.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y la preferencia de la red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall.
- Asegúrese de que el APN de datos del dispositivo y la SIM estén activos y que el tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 esté permitido por el operador móvil o la red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos de telemetría se reportan y la frecuencia de mensajes, por lo que confirme las notas de la versión del firmware del L17.
- Las variantes de hardware y las versiones regionales pueden diferir en bandas celulares disponibles, conjuntos de sensores o funciones BLE, lo que afecta la disponibilidad de telemetría.
- La selección de transporte entre UDP y TCP puede influir en los patrones de entrega y debe coincidir con lo que el firmware del dispositivo soporta y lo que la red permite.
- Las opciones de configuración por parte del fabricante, como la dirección del servidor y los intervalos de reporte, determinan la rapidez con la que Plaspy recibe eventos y telemetría.
- Plaspy detecta automáticamente el protocolo del dispositivo cuando los mensajes llegan al puerto compartido, pero la configuración de red correcta del dispositivo es necesaria para que esa detección tenga éxito.
- Valide la compatibilidad probando un dispositivo en un entorno controlado antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el L17 ayuda a garantizar una configuración confiable, un diagnóstico más rápido y una operación consistente a largo plazo con Plaspy. Comprender el transporte, la telemetría esperada y las posibles diferencias de firmware reduce el tiempo de integración y mejora la precisión de las alertas.

- Le ayuda a verificar que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888 para que los mensajes lleguen a Plaspy.
- Aclara si el dispositivo debe usar UDP o TCP según las capacidades de la red y del firmware.
- Permite un diagnóstico más rápido cuando no aparecen SOS, ubicación o telemetría de salud en Plaspy.
- Informa las decisiones sobre intervalos de reporte y compensaciones de vida útil de la batería para casos de uso wearable.
- Establece expectativas adecuadas sobre la telemetría disponible, ya que las funciones pueden variar según el firmware y la revisión de hardware.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L17 con Plaspy ofrece a organizaciones y familias una solución wearable compacta que combina rastreo GNSS en vivo, alertas SOS, capacidad de llamadas bidireccionales y telemetría de salud en un único flujo hacia la plataforma Plaspy. Esto facilita monitorear ubicaciones, responder emergencias y conservar un historial de auditoría de eventos dentro de los paneles y reportes de Plaspy.

Learn more about Plaspy on the main website https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time and should be verified against the latest manufacturer documentation available at https://www.gotop.cc/.
