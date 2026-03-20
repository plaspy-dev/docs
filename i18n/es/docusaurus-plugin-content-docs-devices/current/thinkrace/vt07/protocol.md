---
slug: /thinkrace/vt07/protocol
id: vt07-protocol
sidebar_label: Protocol
title: ThinkRace - VT07 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo ThinkRace VT07 y cómo se comunica con Plaspy para rastreo GPS y gestión de flotas
keywords:
- protocolo ThinkRace VT07
- protocolo GPS ThinkRace VT07
- compatibilidad ThinkRace VT07 Plaspy
- protocolo de rastreo ThinkRace VT07
- protocolo del rastreador ThinkRace
- protocolo de comunicación VT07
- protocolo rastreador de vehículos Plaspy
- rastreo de flotas ThinkRace VT07
- compatibilidad de protocolo de rastreo GPS
- protocolo de dispositivo Plaspy
---

# ThinkRace - Protocolo VT07

Esta página describe el contexto público del protocolo para usar el rastreador ThinkRace VT07 con Plaspy. Resume cómo las funciones de reporte del VT07 —incluido el posicionamiento en tres modos, múltiples eventos de alarma y su robusta tolerancia ambiental— se relacionan con la comunicación del dispositivo hacia una plataforma de rastreo. El objetivo es ofrecer a administradores de flotas e integradores técnicos información clara y no sensible sobre cómo el equipo se comunica con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el VT07 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y el estado del firmware influyen en cómo aparecen los mensajes en Plaspy.

## Resumen del protocolo

El protocolo de comunicación del VT07 es el mecanismo por el cual el rastreador envía información de ubicación, alarmas y estado a un servidor remoto, y recibe instrucciones de configuración o control cuando aplica. En términos prácticos, el protocolo define los tipos de reportes y notificaciones de eventos que el dispositivo transmite y los métodos de conexión que utiliza para llegar a Plaspy.

- Permite al VT07 transmitir la posición GPS y el modo de posicionamiento a Plaspy para seguimiento en tiempo real y registro histórico.
- Entrega notificaciones de alarmas y eventos como exceso de velocidad, vibración y pérdida de energía para que Plaspy genere alertas.
- Envía mensajes periódicos de estado y latido (heartbeat) que permiten a Plaspy monitorear la conectividad y salud del dispositivo.
- Soporta flujos generales de configuración remota o comandos cuando el dispositivo y el firmware del fabricante lo permiten.
- Actúa como identificador del equipo para que Plaspy asocie los reportes entrantes con la ficha vehicular correcta.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos del VT07 usando un único endpoint y puerto compartido para todos los dispositivos soportados. Cuando un equipo correctamente configurado reporta al servidor de Plaspy, éste detecta automáticamente qué protocolo de rastreador está usando y enruta los datos al proceso de tratamiento correspondiente. En la mayoría de los casos el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy.

- Los dispositivos reportan al endpoint de Plaspy en d.plaspy.com o directamente al servidor IP 54.85.159.138.
- Plaspy escucha en el mismo puerto para todos los equipos, lo que simplifica la configuración y el onboarding.
- La detección automática del protocolo se basa en las características de la conexión entrante y la carga útil (payload).
- Normalmente, apuntar el dispositivo al endpoint de Plaspy es el único paso necesario para la detección.
- Asegúrese de que los dispositivos estén configurados para reportar al host y puerto correctos para que la detección automática funcione de manera confiable.

## Transporte y contexto de conexión

Los ajustes a nivel de transporte determinan cómo el VT07 establece la sesión con Plaspy. El VT07 puede configurarse para usar UDP o TCP en el puerto 8888, según las capacidades del equipo y las preferencias de configuración. Mantener los detalles de conexión y transporte alineados entre la configuración del dispositivo y Plaspy mejora la fiabilidad.

- El VT07 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar datos a Plaspy.
- Los equipos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 al configurar el host de reporte.
- Plaspy usa el puerto 8888 para todos los dispositivos que soporta, por lo que se emplea el mismo puerto de salida entre distintos modelos.
- Elementos de red como firewalls y NAT deben permitir tráfico saliente hacia el puerto 8888 para un reporte exitoso.
- Algunas implementaciones prefieren UDP por menor latencia, mientras otras usan TCP por su entrega confiable; elija según las capacidades del equipo y el comportamiento de la red.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué eventos y campos transmite el VT07, por lo que conviene verificar la compatibilidad tras actualizar el firmware.
- Las revisiones de hardware u módulos opcionales pueden alterar sensores y alarmas disponibles, afectando los datos reportados.
- Las opciones de configuración del fabricante pueden permitir seleccionar entre TCP o UDP, lo que impacta la forma en que el equipo se conecta a Plaspy.
- Aunque Plaspy detecta protocolos automáticamente, los dispositivos deben estar correctamente configurados para reportar al host y puerto de Plaspy para habilitar esa detección.
- Valide la APN y los ajustes GPRS/3G/4G del dispositivo según las instrucciones de configuración del VT07 para que el rastreador pueda alcanzar el servidor de Plaspy.
- Confirme el mapeo de alarmas y eventos con la documentación del fabricante para asegurar que Plaspy interprete las alarmas según lo esperado.
- Si encuentra comportamiento inesperado, revise las notas de la versión de firmware del fabricante como primera línea de investigación.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del VT07 ayuda a garantizar una instalación fluida, operaciones confiables y una resolución de problemas más rápida al integrar el dispositivo con Plaspy. Conocer cómo reporta el equipo, qué eventos envía y cómo se configura el transporte reduce fricciones en la integración y mejora el tiempo de actividad.

- Permite validar que el VT07 esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 según lo requerido por Plaspy.
- Facilita interpretar el comportamiento de alarmas y eventos en la interfaz de Plaspy y mapear esos eventos a flujos operativos.
- Ayuda en la resolución de problemas cuando los dispositivos no reportan, al enfocar la investigación en transporte, APN o diferencias de firmware.
- Apoya la planificación de actualizaciones de firmware o cambios de hardware al resaltar áreas donde puede variar el comportamiento del protocolo.
- Aumenta la confianza de que los dispositivos seguirán siendo compatibles con Plaspy cuando se desplieguen a gran escala.

## Ventajas de usar Plaspy con este protocolo

Usar el ThinkRace VT07 con Plaspy ofrece a las organizaciones una forma práctica de centralizar la visibilidad de la flota, el manejo de alarmas y la supervisión operativa. La precisión del posicionamiento del VT07 y su capacidad de múltiples alarmas, combinadas con la detección automática de protocolo de Plaspy y su política de puerto uniforme, facilitan agregar equipos a la plataforma y comenzar a recibir datos de rastreo útiles.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el ThinkRace VT07, visite https://www.plaspy.com. Para detalles más actuales y específicos sobre el protocolo, firmware e implementación del dispositivo, consulte al fabricante en https://www.thinkrace.com/ ya que el comportamiento y el soporte del protocolo pueden cambiar con actualizaciones de firmware y hardware.
