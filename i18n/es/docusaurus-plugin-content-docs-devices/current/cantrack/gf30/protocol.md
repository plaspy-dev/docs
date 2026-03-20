---
slug: /cantrack/gf30/protocol
id: gf30-protocol
sidebar_label: Protocol
title: CanTrack - GF30 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del CanTrack GF30 y cómo se comunica con Plaspy para rastreo y alertas en tiempo real
keywords:
  - Protocolo CanTrack GF30
  - Protocolo GPS CanTrack GF30
  - Protocolo CanTrack GF30 para Plaspy
  - Protocolo de comunicación CanTrack GF30
  - Protocolo de rastreo GF30
  - Protocolo de dispositivo Plaspy
  - Compatibilidad rastreador GF30
  - Rastreo de flotas GF30
  - Protocolo rastreador magnético GPS
  - Protocolo serie GF
---

# CanTrack - Protocolo GF30

Esta página ofrece contexto público sobre el protocolo utilizado por el CanTrack GF30 Magnet GPS Tracker y su interacción con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué parámetros de conexión espera Plaspy y consideraciones prácticas de compatibilidad para integración y resolución de problemas. Se proporciona orientación de nivel de implementación, no un manual de firmware ni información confidencial.

Plaspy utiliza un punto de conexión compartido y ajustes consistentes entre los dispositivos compatibles, detectando automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por tanto, esta página debe usarse como contexto de integración y no como referencia técnica exhaustiva del dispositivo.

## Resumen del protocolo

El GF30 envía posición, alarmas y estado a un servidor remoto usando el protocolo de comunicación implementado por CanTrack. Ese protocolo define cómo el rastreador se identifica, cómo se codifica la telemetría y los eventos para su transporte, y cómo el dispositivo indica cambios de estado como batería baja o eventos de movimiento. Con Plaspy, esa información se convierte en posiciones en el mapa en tiempo real, alertas y recorridos históricos.

- Permite que el GF30 envíe telemetría periódica y basada en eventos para actualizaciones de mapa y notificaciones.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los reportes con el registro de activo correcto.
- Transmite eventos de alarma como geocerca, vibración o batería baja para activar notificaciones y flujos de trabajo.
- Soporta comportamiento de almacenamiento y reenvío para que las posiciones recogidas sin conexión se suban cuando se restablece la conectividad.
- Proporciona los campos necesarios para que Plaspy muestre ubicación, hora y estado básico del dispositivo sin exponer detalles internos del firmware.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un punto de acceso compartido y determina automáticamente qué protocolo de rastreador soportado está usando un dispositivo cuando reporta a la plataforma. En la mayoría de los casos, un GF30 correctamente configurado comenzará a enviar telemetría útil a Plaspy sin que sea necesario seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un único puerto para todas las conexiones de dispositivos y utiliza ese punto de acceso para recibir reportes.
- Cuando un GF30 apunta al endpoint de Plaspy y empieza a reportar, Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el dispositivo correcto.
- Normalmente usted no necesitará elegir el protocolo manualmente si el rastreador está configurado para reportar al endpoint de Plaspy.
- Una configuración adecuada de la identidad del dispositivo en el rastreador asegura que Plaspy pueda emparejar los mensajes con el registro de activo correspondiente.
- Si la telemetría no aparece, las comprobaciones comunes incluyen verificar el APN y los ajustes del servidor de reporte en el dispositivo y confirmar la conectividad de red.

## Transporte y contexto de conexión

El GF30 puede configurarse para reportar a un endpoint de red usando métodos de transporte estándar que el dispositivo soporta. Para la integración con Plaspy, la información de conexión relevante es consistente entre los modelos compatibles y debe aplicarse al rastreador según las instrucciones del fabricante.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y Plaspy acepta conexiones de dispositivos entrantes en el puerto 8888.
- El GF30 puede configurarse para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888 dependiendo del soporte del dispositivo y las opciones de configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración al desplegar múltiples modelos de rastreadores.
- Asegúrese de que el APN del dispositivo y la red saliente estén configurados para que el rastreador pueda resolver d.plaspy.com o alcanzar la dirección numérica del servidor.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, la disponibilidad de funciones o campos opcionales; verifique las notas de la versión del firmware para cambios en el protocolo.
- Las revisiones de hardware en la serie GF pueden añadir o quitar sensores o interfaces que afecten la telemetría disponible para Plaspy.
- Los comandos de configuración del fabricante y los intervalos de reporte predeterminados pueden diferir según compilaciones regionales de firmware o modificaciones de distribuidores.
- La selección de transporte entre UDP y TCP puede afectar el comportamiento de entrega; elija el transporte que coincida con las capacidades del dispositivo y las necesidades de confiabilidad de la red.
- Valide siempre la compatibilidad confirmando que el dispositivo puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 y que Plaspy recibe los reportes esperados.
- Consulte la documentación oficial del fabricante para comandos específicos del dispositivo, puertos predeterminados o ejemplos de configuración.

## Por qué es importante comprender el protocolo

Comprender cómo el GF30 se comunica con Plaspy ayuda a garantizar un rastreo confiable, agilizar la resolución de problemas y obtener un comportamiento de alertas más predecible. El conocimiento del contexto de comunicación reduce fricciones en el despliegue y facilita que los equipos operativos interpreten correctamente la telemetría y los eventos.

- Facilita la correcta configuración del APN y del servidor en el rastreador para que los reportes lleguen a Plaspy de forma confiable.
- Orienta los pasos de solución de problemas cuando las actualizaciones de posición, alarmas o reportes almacenados no aparecen en la plataforma.
- Ayuda a establecer expectativas realistas sobre frecuencia de actualización, consumo de energía y comportamiento offline según los patrones de reporte del dispositivo.
- Apoya decisiones sobre la elección de transporte y los requisitos de red para despliegues en distintas geografías.
- Asiste en la planificación de actualizaciones de firmware y despliegues de hardware manteniendo la compatibilidad con Plaspy.

## Por qué usar Plaspy con este protocolo

La carcasa compacta y magnética del GF30, su batería de larga duración y las capacidades de reporte por eventos lo convierten en una opción práctica para escenarios de rastreo de activos donde importa un montaje discreto y monitoreo extendido. Cuando el GF30 está configurado para reportar a Plaspy, sus datos de posición y alarma se integran en paneles centralizados, reglas de alerta y funciones de seguimiento histórico que usan los administradores de flotas y activos para mejorar la visibilidad y los tiempos de respuesta.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el CanTrack GF30, visite https://www.plaspy.com. Para obtener los detalles más recientes del protocolo específico del dispositivo, notas de firmware e instrucciones de configuración, consulte al fabricante en https://www.cantrackgps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación actual con el fabricante.
