---
slug: /queclink/gv75w/protocol
id: gv75w-protocol
sidebar_label: Protocol
title: QuecLink - GV75W Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para la conectividad del QuecLink GV75W con Plaspy para rastreo y telemetría
keywords:
  - Protocolo QuecLink GV75W
  - Rastreador GPS GV75W
  - QuecLink GV75W Plaspy
  - Protocolo de comunicación GV75W
  - Protocolo de rastreo GV75W
  - Protocolo GPS QuecLink
  - Telemetría GV75W
  - Rastreo de vehículos QuecLink
  - Gestión de flotas GV75W
  - Compatibilidad del rastreador QuecLink
---

# QuecLink - Protocolo GV75W

Esta página documenta el contexto público del protocolo para usar el rastreador QuecLink GV75W con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, de modo que integradores y administradores de flotas comprendan el papel del protocolo de reporte del dispositivo en la configuración y en las operaciones diarias. El GV75W es un rastreador resistente y hermético pensado para motocicletas, embarcaciones y equipos compactos, y es compatible con Plaspy para rastreo en tiempo real y telemetría.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que esta página describe el contexto público de conexión y compatibilidad sin exponer formatos de paquete específicos de firmware ni detalles privados del parser.

## Visión general del protocolo

El protocolo del dispositivo es el conjunto de reglas y flujos de mensajes que un rastreador usa para identificarse y enviar datos útiles de ubicación y eventos a una plataforma backend como Plaspy. En el caso del GV75W, el protocolo transforma las posiciones GNSS, eventos de entradas digitales, alarmas y estados en reportes de red que Plaspy puede procesar para mapas en vivo, alertas y análisis.

- Permitir la entrega confiable de posición GNSS y telemetría del GV75W a la plataforma en la nube.
- Transmitir la identidad del dispositivo y los intervalos de reporte para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Transportar notificaciones de eventos como disparos de geocercas, alarmas de remolque, batería baja y estado de ignición para alertas en Plaspy.
- Soportar comandos remotos y OTA que el rastreador acepte para acciones como control de salidas digitales cuando el dispositivo lo soporte.
- Permitir que Plaspy consuma reportes programados y por evento para historial, geolocalización y análisis de comportamiento del conductor.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de muchos modelos de rastreadores en un único endpoint compartido e identifica el protocolo del dispositivo en función de los datos entrantes y el contexto de la sesión. En la mayoría de los casos, un GV75W correctamente configurado que apunte a Plaspy comenzará a reportar sin necesidad de seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un endpoint servidor común de modo que los dispositivos reportan al mismo destino.
- Plaspy detecta automáticamente el protocolo del rastreador a partir de las sesiones entrantes y los patrones de mensajes.
- Normalmente no es necesario elegir el protocolo manualmente en Plaspy si el GV75W está configurado para reportar al endpoint de Plaspy.
- Campos estándar de identidad del dispositivo y telemetría son usados por Plaspy para asociar mensajes con la instancia correcta del rastreador.
- Si un dispositivo envía múltiples tipos de reporte (periódicos, por evento, alarma), Plaspy agrupa estos en la línea de tiempo del activo automáticamente.

## Transporte y contexto de conexión

El contexto de conexión es la capa de transporte y los ajustes de endpoint que el GV75W utiliza para alcanzar Plaspy. El GV75W puede configurarse para reportar sobre datos móviles estándar usando UDP o TCP en el puerto de Plaspy. Los dispositivos pueden apuntar al dominio de Plaspy o a su dirección IP pública según los métodos de aprovisionamiento.

- Plaspy server domain is d.plaspy.com for hostname based configuration.
- Plaspy server IP is 54.85.159.138 for IP based configuration.
- The port is 8888 and the device may be configured using UDP or TCP on port 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento en flotas mixtas.
- Elija UDP o TCP según la capacidad del dispositivo y las condiciones de red; ambos transportes son compatibles con las opciones de hardware y firmware del GV75W.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de reporte, temporizaciones y funciones opcionales; verifique la versión de firmware del rastreador al solucionar problemas.
- Las revisiones de hardware o el cableado de accesorios (entrada de ignición, salidas digitales) pueden afectar qué eventos reporta el dispositivo a Plaspy.
- La configuración del fabricante (APN, selección de transporte y objetivo del servidor) determina si un dispositivo reporta vía d.plaspy.com o la IP numérica.
- Algunas funciones avanzadas como control OTA o passthrough serial dependen del soporte de firmware y pueden no ser idénticas en todas las unidades GV75W.
- Las condiciones de red y el transporte elegido (UDP vs TCP) influyen en la fiabilidad del mensaje y el comportamiento de reenvío.
- Siempre valide la compatibilidad para un despliegue específico verificando los ajustes del dispositivo y confirmando que los reportes lleguen correctamente a Plaspy.

## Por qué es importante entender el protocolo

Entender el protocolo de comunicación ayuda a asegurar que el GV75W esté configurado para reportar de forma fiable los datos correctos a Plaspy, lo que reduce el tiempo de puesta en marcha y mejora la fiabilidad del servicio a largo plazo. Un conocimiento práctico de cómo reporta el rastreador y qué incluye facilitará la resolución de problemas y la habilitación de funcionalidades.

- Asegura ajustes correctos de servidor y transporte para que el dispositivo pueda alcanzar Plaspy y comenzar a reportar.
- Ayuda a interpretar por qué aparecen determinados eventos o campos en los paneles y registros de Plaspy.
- Facilita aislar problemas entre dispositivo, red y servidor cuando faltan reportes o están malformados.
- Mejora las decisiones sobre intervalos de reporte y gestión de energía para balancear la duración de la batería y la frecuencia de actualizaciones.
- Apoya la planificación para control OTA, salidas digitales e integraciones para inmovilización o control de accesorios.

## Por qué usar Plaspy con este protocolo

Usar el GV75W con Plaspy brinda una combinación práctica para organizaciones que requieren rastreo resistente y de bajo consumo junto con una plataforma en la nube que acepta e interpreta automáticamente los reportes entrantes del rastreador. La carcasa impermeable del GV75W, su comportamiento de bajo consumo y el reporte de eventos responden a necesidades comunes de seguridad para motocicletas, monitoreo de activos y gestión de flotas de equipos ligeros, mientras que Plaspy ofrece la ingestión backend, cartografía, alertas e informes para convertir esos mensajes en visibilidad operativa.

Learn more about how Plaspy works with devices like the GV75W at https://www.plaspy.com. Protocol support and firmware behavior can change over time, so verify the latest device specific protocol and firmware details on the manufacturer site https://www.queclink.com/.
