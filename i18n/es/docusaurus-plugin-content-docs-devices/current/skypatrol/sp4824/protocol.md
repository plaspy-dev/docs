---
slug: /skypatrol/sp4824/protocol
id: sp4824-protocol
sidebar_label: Protocol
title: SkyPatrol - SP4824 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SkyPatrol SP4824 y cómo comunica con los servidores de Plaspy
keywords:
  - protocolo SkyPatrol SP4824
  - protocolo GPS SkyPatrol SP4824
  - protocolo de comunicación SP4824
  - compatibilidad SP4824 Plaspy
  - protocolo rastreador GPS SkyPatrol
  - rastreo vehicular SP4824
  - seguimiento de flotas SP4824
  - protocolo de dispositivo Plaspy
  - integración rastreador GPS Plaspy
  - interfaz telemetría SP4824
---

# SkyPatrol - Protocolo SP4824

Esta página describe el contexto público del protocolo para usar el SkyPatrol SP4824 con Plaspy. Explica de forma general cómo el rastreador se comunica con Plaspy, qué papel juega el protocolo de reporte del dispositivo en la integración y qué puntos de conexión y opciones de transporte acepta Plaspy para la ingestión de datos. El SP4824 es un rastreador vehicular moderno con LTE 4G Cat1 y retroceso 2G, receptor GNSS de alta sensibilidad, audio bidireccional, batería interna de respaldo, puerto serial y una interfaz 1-Wire, lo que lo convierte en una opción práctica para telemática de flotas y uso consumidor cuando se integra con Plaspy.

Plaspy utiliza un mismo punto de conexión y puerto compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este reporta correctamente a la plataforma. Plaspy escucha datos de dispositivos en d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888. El SP4824 puede configurarse para enviar datos por UDP o TCP a ese mismo puerto. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los instaladores deben verificar la configuración del equipo con la documentación del fabricante al desplegarlo.

## Resumen del protocolo

El protocolo del rastreador es el método público de comunicación a nivel de dispositivo que permite al SP4824 entregar posiciones GNSS, telemetría, eventos de entradas y salidas y estados a Plaspy. Cubre cómo el dispositivo formatea y envía reportes, cómo señala eventos y cómo la plataforma reconoce e interpreta esos mensajes al recibirlos.

- Permite la entrega de coordenadas GNSS y reportes de ubicación con marca temporal a Plaspy para mapear y mantener historial.
- Transmite estados digitales y analógicos de E/S, como ignición, puertas o entradas de alarma, para alertas en tiempo real y reglas.
- Lleva datos del puerto serial y de la interfaz 1-Wire a Plaspy para telemetría como temperatura o identificación de conductor.
- Señala condiciones de evento y estados de alarma para que Plaspy pueda activar alertas de geocerca, notificaciones de manipulación o flujos de recuperación.
- Proporciona la identificación y el contexto de sesión necesarios para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores en un punto de entrada común y seleccionar automáticamente el manejo del protocolo correspondiente. Cuando el SP4824 se configura para reportar al endpoint de Plaspy, la plataforma examina los datos recibidos y los dirige al flujo de ingestión adecuado sin requerir, en la mayoría de los despliegues, una selección manual de protocolo dentro de Plaspy.

- Plaspy acepta datos de dispositivos en el dominio d.plaspy.com y en la IP 54.85.159.138 en el puerto 8888.
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar a Plaspy.
- Normalmente no es necesario que el usuario elija un protocolo en Plaspy si el SP4824 está apuntando al endpoint de Plaspy y el firmware reporta según lo esperado.
- Una identificación correcta del dispositivo y la configuración de reporte en el SP4824 hacen que la detección automática sea confiable.
- Si un dispositivo parece no reportar, verifique la configuración del servidor en el equipo, la selección del transporte y la versión de firmware además de los registros de Plaspy.

## Transporte y conexión

La configuración de la conexión determina cómo el SP4824 alcanza Plaspy y normalmente se configura en el dispositivo o por el instalador. El SP4824 soporta reportes sobre transportes IP estándar y puede apuntar a Plaspy usando tanto un nombre de dominio como una dirección IP.

- Los equipos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- El SP4824 puede configurarse para usar UDP o TCP para reportar, según la configuración del dispositivo y las condiciones de la red.
- Plaspy utiliza el puerto 8888 para el reporte de dispositivos y todos los dispositivos compatibles con Plaspy usan ese mismo puerto.
- Elija UDP o TCP en el equipo de acuerdo con las necesidades de confiabilidad y las recomendaciones del instalador de SkyPatrol.
- Asegúrese de que el enrutamiento de red y las reglas de firewall permitan tráfico saliente del dispositivo hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, campos opcionales y transportes soportados, lo que afecta cómo un dispositivo reporta a Plaspy.
- Las revisiones de hardware y las variantes regionales pueden ofrecer diferentes opciones de E/S o interfaces de accesorios que cambien el comportamiento de la telemetría.
- Los menús de configuración del fabricante pueden ofrecer entradas de servidor por dominio o por IP; usar el dominio puede simplificar futuros cambios de IP.
- Aunque Plaspy detecta protocolos automáticamente, el dispositivo debe configurarse correctamente para apuntar al endpoint de Plaspy y usar un transporte soportado.
- Algunas funciones, como el audio bidireccional o integraciones seriales específicas, pueden depender del firmware y la configuración del equipo más que del protocolo de reporte principal.
- Siempre valide los campos reportados y el comportamiento de eventos en un piloto pequeño antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del SP4824 ayuda a los instaladores y operadores a configurar los dispositivos correctamente, solucionar problemas de reporte más rápido y mantener una telemetría confiable para las operaciones de flota. Saber dónde y cómo el dispositivo envía datos reduce los tiempos de puesta en marcha y favorece una mayor confiabilidad a largo plazo.

- Confirma que la configuración de servidor, transporte y puerto del dispositivo son correctos para la ingestión en Plaspy.
- Ayuda a interpretar por qué un dispositivo puede no aparecer en la plataforma cuando ocurren cambios de red o firmware.
- Permite una resolución más eficaz de brechas de telemetría, eventos perdidos y reportes de E/S.
- Apoya la planificación de actualizaciones de firmware y determina cuándo es necesaria una revalidación del comportamiento.
- Facilita la integración de datos de sensores personalizados desde interfaces seriales o 1-Wire en los flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el SP4824 con Plaspy ofrece una vía práctica para obtener ubicación en tiempo real, telemetría y conciencia de eventos en flotas vehiculares. Las opciones de conectividad, las interfaces de sensor y la batería de respaldo del SP4824, combinadas con la ingestión y reportes de Plaspy, permiten rastreo en vivo, alertas y reportes históricos para gestión de flotas, flujos de trabajo anti robo y telemetría de valor agregado como registro de temperatura o identificación de conductor.

Para saber más sobre Plaspy y cómo la plataforma funciona con dispositivos como el SP4824 visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo específico del equipo y las notas de firmware con el fabricante en https://www.skypatrol.com/.
