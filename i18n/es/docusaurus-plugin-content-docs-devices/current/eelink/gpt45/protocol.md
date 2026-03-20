---
slug: /eelink/gpt45/protocol
id: gpt45-protocol
sidebar_label: Protocol
title: EElink - GPT45 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para compatibilidad del EElink GPT45 con Plaspy, ajustes de conexión y contexto de integración
keywords:
  - protocolo eelink gpt45
  - protocolo gps eelink gpt45
  - protocolo de comunicación eelink gpt45
  - protocolo de rastreo eelink gpt45
  - compatibilidad eelink gpt45 plaspy
  - integración protocolo rastreador gps
  - seguimiento de flotas gpt45
  - integración telemetría eelink
  - protocolo rastreador de vehículo
  - compatibilidad dispositivos plaspy
---

# EElink - Protocolo GPT45

Esta página ofrece una visión pública del protocolo para usar el rastreador EElink GPT45 con Plaspy. Explica el contexto de comunicación relevante cuando se apunta dispositivos GPT45 a Plaspy, de modo que usted entienda cómo llegan a la plataforma los mensajes de ubicación, la telemetría de sensores y los eventos. El contenido se centra en los roles del protocolo y los ajustes de conexión a alto nivel, no en detalles internos del firmware ni en implementaciones privadas.

El GPT45 es un rastreador recargable con múltiples sensores: GNSS, Wi‑Fi y LBS como respaldo, soporte opcional de gateway Bluetooth, alarmas en el dispositivo y sensores ambientales. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Revise la documentación del fabricante junto con este resumen cuando prepare despliegues masivos.

## Visión general del protocolo

A nivel general, el protocolo del rastreador define cómo el GPT45 informa identidad, posiciones, telemetría de sensores y eventos de alarma a un servicio backend como Plaspy. El protocolo permite el intercambio de la información necesaria para el seguimiento en tiempo real, el registro histórico y las alertas basadas en reglas, sin exponer aquí detalles internos del dispositivo.

- Permite la identificación del dispositivo para que Plaspy asocie los mensajes entrantes con un rastreador registrado y sus metadatos.
- Transporta posiciones GNSS y datos de ubicación de respaldo para que Plaspy muestre la posición en vivo y las rutas históricas.
- Reporta telemetría basada en eventos, como colisiones, vibración, caídas, alarmas por velocidad y valores de sensores ambientales, para activar reglas.
- Soporta configuración remota y coordinación de actualizaciones de firmware mediante comandos de alto nivel o mensajes de configuración.
- Proporciona un flujo de mensajes fiable hacia el backend para que Plaspy procese alertas, almacene telemetría y ejecute automatizaciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de rastreadores en un único endpoint compartido y determina automáticamente el formato del protocolo entrante para los dispositivos compatibles. Esto significa que en la mayoría de despliegues usted no necesita seleccionar manualmente un protocolo dentro de la plataforma Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para el reporte de dispositivos.
- El puerto que utiliza Plaspy para todos los dispositivos es 8888, por lo que los dispositivos deben reportar a ese puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según sus capacidades o requerimientos del sitio.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega un mensaje correctamente formateado al endpoint compartido.
- Debido a que la detección es automática, la tarea común del usuario es asegurarse de que los ajustes de reporte del dispositivo coincidan con el endpoint y el transporte de Plaspy.

## Transporte y contexto de conexión

Comprender el transporte y la dirección que usan los dispositivos GPT45 para comunicarse con Plaspy es importante para la configuración de red y las reglas de firewall. El GPT45 admite el envío de telemetría mediante transportes de red estándar y debe apuntarse al endpoint de Plaspy para la entrega correcta.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el transporte elegido.
- Plaspy acepta tráfico de dispositivos dirigido a d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica las reglas de firewall saliente y el enrutamiento NAT.
- Confirme que los ajustes de reporte del dispositivo incluyan el dominio o la IP correctos y el protocolo de transporte seleccionado antes del despliegue.
- En muchos casos, establecer el servidor en d.plaspy.com y el transporte en UDP o TCP en el puerto 8888 es suficiente para la conectividad inicial.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes y las funciones disponibles; verifique el nivel de firmware del GPT45 al evaluar compatibilidad.
- Las revisiones de hardware o características opcionales, como el modo gateway Bluetooth, pueden influir en qué telemetría se reporta.
- Las opciones de configuración del fabricante o personalizaciones OEM pueden generar pequeñas variaciones del protocolo entre unidades.
- Elegir UDP frente a TCP afecta el comportamiento de entrega y puede ser relevante según las condiciones de red o los requisitos de fiabilidad.
- Siempre valide un dispositivo de muestra con Plaspy antes de poner en servicio flotas grandes para confirmar la telemetría y el mapeo de eventos esperados.
- Use la documentación oficial del fabricante para confirmar los comandos soportados y cualquier paso de configuración específico del dispositivo.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación ayuda a asegurar una incorporación fiable de dispositivos, un mapeo correcto de eventos y una resolución más rápida de problemas cuando surgen incidencias. Saber qué envía el rastreador y cómo lo recibe Plaspy reduce ciclos de configuración y favorece una operación estable a largo plazo.

- Asegura que los dispositivos apunten a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte correcto.
- Ayuda a diagnosticar telemetría o eventos faltantes revisando el transporte y los ajustes de reporte en el dispositivo.
- Orienta decisiones sobre planificación de red, como reglas de firewall, NAT y ajustes APN del operador para conectividad celular.
- Facilita el mapeo de alarmas del dispositivo y datos de sensores en reglas y alertas de Plaspy para monitoreo accionable.
- Apoya tareas de ciclo de vida como actualizaciones de firmware y cambios de configuración al clarificar los flujos de mensajes esperados.

## Por qué usar Plaspy con este protocolo

Usar el GPT45 con Plaspy brinda a las organizaciones un rastreador compacto y recargable que alimenta telemetría rica de ubicación y sensores a un único backend. Esa telemetría puede emplearse para visibilidad en tiempo real, geocercas, alertas e informes históricos, permitiendo a los equipos operar con más seguridad y eficiencia sin gestionar código de integración complejo.

Para saber más sobre Plaspy y cómo funciona con protocolos de dispositivo como el GPT45 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación de dispositivos pueden cambiar con el tiempo, por lo que verifique la información actual específica por dispositivo y las notas de firmware en el sitio del fabricante en https://www.eelink.com.cn/.
