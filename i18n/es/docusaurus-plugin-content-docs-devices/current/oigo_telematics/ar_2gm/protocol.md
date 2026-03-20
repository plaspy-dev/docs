---
slug: /oigo_telematics/ar_2gm/protocol
id: ar_2gm-protocol
sidebar_label: Protocol
title: Oigo Telematics - AR-2GM Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Oigo Telematics AR-2GM y cómo se comunica con Plaspy para rastreo de flotas
keywords:
  - Protocolo Oigo Telematics AR-2GM
  - Protocolo GPS Oigo Telematics AR-2GM
  - Compatibilidad del rastreador AR-2GM con Plaspy
  - Protocolo de rastreadores de la serie AR
  - Protocolo de comunicación AR-2GM
  - Protocolo de rastreador GPS Oigo Telematics
  - Seguimiento AR-2GM para gestión de flotas
  - Integración del protocolo Oigo Telematics
  - Alertas de reporte de eventos AR-2GM
  - Compatibilidad rastreadores GPS Plaspy
---

# Oigo Telematics — Protocolo AR-2GM

Esta página explica, a nivel público, el contexto del protocolo para usar el rastreador Oigo Telematics AR-2GM con la plataforma Plaspy. Se centra en cómo comunica el dispositivo de forma general, cómo Plaspy recibe y procesa los reportes del equipo y qué deberían conocer ingenieros e integradores acerca de compatibilidad y configuración. El AR-2GM es un rastreador discreto de la serie AR pensado para instalaciones ocultas y soporta reportes y alertas basadas en eventos, útiles para la gestión de flotas y la recuperación de vehículos robados.

Plaspy utiliza una configuración de conexión compartida para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por tanto, aunque Plaspy maneja la detección y la compatibilidad básica, instaladores y administradores deben verificar detalles de dispositivo y firmware con el fabricante para funciones avanzadas o comportamientos específicos.

## Resumen del protocolo

El protocolo de comunicación del AR-2GM define cómo el rastreador se identifica, reporta posición y estado, y transmite notificaciones de eventos a un servidor backend. Para integrar con Plaspy, los aspectos públicos importantes son cómo se configura el dispositivo para apuntar al endpoint de Plaspy y qué transporte utiliza para enviar mensajes regulares y basados en eventos.

- Permite que el equipo envíe actualizaciones de ubicación y reportes de eventos a un servidor remoto para seguimiento y monitoreo.
- Incluye información de identificación y estado para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Soporta alertas por eventos como violaciones de geocerca, uso no autorizado y reportes de exceso de velocidad, que resultan relevantes para flujos de trabajo de flotas.
- Opera sobre transportes de red estándar usados por rastreadores con capacidad GSM para que los datos lleguen de forma confiable al endpoint de Plaspy.
- Proporciona la información que Plaspy necesita para mostrar ubicación, hora y eventos configurados sin exponer detalles internos del firmware.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo de los dispositivos soportados. En la mayoría de los casos, un AR-2GM correctamente configurado empezará a reportar y Plaspy identificará el tipo de dispositivo y analizará sus mensajes sin que sea necesario seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en el dominio público d.plaspy.com y en la dirección IP 54.85.159.138 para los reportes de dispositivos.
- La plataforma recibe datos en el puerto 8888 y utiliza ese puerto compartido para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar TCP o UDP para llegar al endpoint de Plaspy según las capacidades del equipo.
- Cuando el AR-2GM reporta al endpoint de Plaspy, la plataforma emplea su detección automática para asociar los mensajes entrantes con un protocolo soportado.
- Normalmente los administradores no necesitan elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar a d.plaspy.com o a la IP proporcionada.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el AR-2GM alcanza Plaspy más que la estructura interna de los paquetes del protocolo. El rastreador usa datos GSM para transmitir mensajes y puede configurarse para entregarlos sobre capas de transporte comunes hacia Plaspy.

- El dispositivo puede configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy acepta tanto UDP como TCP en el puerto 8888; el AR-2GM puede usar cualquiera de los dos transportes según la configuración y el soporte de firmware.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el enrutamiento en el servidor.
- La fiabilidad de la red, la configuración del APN y la cobertura GSM local influyen en la frecuencia de llegada de mensajes y en si es preferible TCP o UDP.
- Use ajustes consistentes de servidor y puerto en el equipo para reducir errores de configuración al integrar con Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de mensajes, los eventos disponibles y los campos opcionales; verifique la versión de firmware del equipo al hacer troubleshooting.
- Revisión de hardware dentro de la serie AR puede introducir diferencias en los eventos reportados o en los transportes soportados.
- Las opciones de configuración del fabricante pueden alterar qué eventos vienen habilitados por defecto o con qué frecuencia se envían las actualizaciones de posición.
- La selección del transporte (UDP vs TCP) puede afectar las garantías de entrega de mensajes y los patrones de uso de batería o red.
- Valide siempre la configuración del equipo contra la documentación oficial de Oigo Telematics para el modelo AR-2GM.
- Si un dispositivo no aparece en Plaspy después de configurarlo, confirme los ajustes de APN, la dirección del servidor y el uso correcto del puerto 8888.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación que usa el AR-2GM ayuda a asegurar una configuración fiable, un manejo preciso de eventos y una operación eficiente a largo plazo dentro de Plaspy. Conocer los límites del protocolo permite a los técnicos ajustar el comportamiento del dispositivo a las expectativas de la plataforma y resolver con mayor rapidez problemas comunes de integración.

- Ayuda a verificar que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 y usando el puerto 8888, como requiere Plaspy.
- Permite elegir correctamente entre UDP y TCP según las condiciones de la red y el soporte del equipo.
- Clarifica la configuración de eventos y alarmas para que las alertas enviadas por el rastreador aparezcan correctamente en Plaspy.
- Facilita el diagnóstico de problemas de conectividad relacionados con el APN, la cobertura GSM o ajustes incorrectos del servidor.
- Recomienda confirmar comportamientos dependientes del firmware antes de desplegar a gran escala.

## Por qué usar Plaspy con este protocolo

Usar el Oigo Telematics AR-2GM con Plaspy ofrece a las organizaciones visibilidad discreta de activos, reportes de eventos configurables y una vía unificada para incorporar los datos del rastreador en los flujos de trabajo de la flota. La detección automática de protocolo y los ajustes de conexión compartidos de Plaspy reducen la carga de configuración, permitiendo a los equipos concentrarse en casos de uso operativos como monitoreo, alertas y recuperación.

Para conocer más sobre cómo funciona Plaspy con rastreadores vehiculares y revisar las funciones de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y las notas de firmware del fabricante en https://www.oigotelematics.com/.
