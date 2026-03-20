---
slug: /tzone/tz_avl301/protocol
id: tz_avl301-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL301 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador TZone TZ-AVL301 y cómo comunica con Plaspy para seguimiento fiable de flotas
keywords:
  - protocolo TZone TZ-AVL301
  - rastreador GPS TZ-AVL301
  - protocolo GPS TZone
  - protocolo de comunicación TZ-AVL301
  - protocolo de seguimiento TZ-AVL301
  - compatibilidad Plaspy
  - guía de protocolo para rastreador GPS
  - seguimiento de vehículos TZ-AVL301
  - seguimiento de flotas TZone
  - resumen del protocolo TZ-AVL301
---

# TZone - TZ-AVL301 Protocolo

Esta página documenta el contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL301 con Plaspy. Explica a alto nivel cómo se comunica el dispositivo, las opciones de transporte disponibles y el papel del protocolo de reporte de dispositivo al enviar posiciones y estados a la plataforma Plaspy. El contenido aquí se centra en detalles operativos no sensibles necesarios para una integración y resolución de problemas exitosas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando éste reporta al endpoint de Plaspy. El comportamiento preciso del protocolo y las funciones disponibles en el TZ-AVL301 pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El TZ-AVL301 es un rastreador 3G compacto con características como soporte GSM y WCDMA, identificación de conductor por iButton, protección IP67, registro en memoria flash, detección de encendido, cálculo de kilometraje, enlaces de ubicación por SMS y capacidad opcional de inmovilización. Estas capacidades de hardware se exponen mediante el protocolo del dispositivo y pueden influir en qué datos reporta el rastreador a Plaspy.

## Visión general del protocolo

El protocolo que usa el TZ-AVL301 es el método de reporte del dispositivo que transporta posiciones GPS, tiempos, estados y eventos desde el rastreador hasta Plaspy. Es la capa independiente del transporte que permite al equipo identificarse, reportar telemetría como ubicación y estado de encendido, y entregar información de eventos auxiliares como identificación de conductor o notificaciones SOS. Plaspy recibe esos mensajes y los pone a disposición en la plataforma para monitoreo, alertas y reproducción histórica.

- Permite al TZ-AVL301 enviar ubicación, hora y estado de la red móvil a Plaspy para seguimiento en tiempo real e histórico.
- Transmite el estado del dispositivo y eventos como encendido/apagado, identificación de conductor vía iButton y actualizaciones de kilometraje.
- Permite que el rastreador entregue alertas y notificaciones de estado que Plaspy puede presentar como alarmas o registros.
- Transporta información de identificación del dispositivo para que Plaspy pueda correlacionar los reportes entrantes con un rastreador registrado.
- Admite vías de mensajería opcionales como enlaces por SMS para compartir ubicación inmediata junto con el reporte por socket.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de muchos modelos de rastreadores minimizando la configuración manual. Cuando un TZ-AVL301 se configura para reportar al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo adecuado e iniciará el procesamiento de los reportes entrantes. En la mayoría de los despliegues, usted no necesita elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar al servidor de Plaspy.

- Plaspy usa un único endpoint de servidor para el reporte de dispositivos y la detección automática de protocolo.
- Los dispositivos deben configurarse para reportar al endpoint de Plaspy para habilitar la detección automática.
- Cuando un TZ-AVL301 se conecta al servidor de Plaspy, la plataforma inspecciona la sesión entrante y la asocia con el registro de dispositivo correcto.
- Una identificación adecuada del dispositivo en el primer contacto ayuda a Plaspy a asociar los reportes con el vehículo o activo correcto.
- Generalmente usted solo necesita verificar ajustes del dispositivo como la dirección del servidor y el método de transporte para una detección exitosa.

## Contexto de transporte y conexión

El TZ-AVL301 soporta opciones de reporte por socket y puede configurarse para usar UDP o TCP según el firmware y la configuración del equipo. Plaspy expone un endpoint de conexión consistente para todos los rastreadores compatibles, lo que simplifica la configuración en el dispositivo. Mantenga la selección de transporte y la dirección del servidor coherentes con la política de su red y las capacidades del rastreador.

- El dispositivo puede configurarse para usar UDP o TCP para el reporte, según los ajustes disponibles en el firmware.
- Plaspy acepta conexiones de rastreadores en el dominio d.plaspy.com y en la IP de servidor conocida 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración del equipo.
- Configure el TZ-AVL301 para enviar reportes al servidor de Plaspy usando el protocolo de transporte acordado para su despliegue.
- Consideraciones de red como reglas de firewall y el comportamiento de los operadores móviles pueden influir en si UDP o TCP resulta más conveniente.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos o eventos reporta un TZ-AVL301, por lo que el comportamiento puede variar entre versiones.
- Revisiones de hardware y módulos opcionales como iButton o interfaces de inmovilización pueden afectar la telemetría disponible.
- Ajustes del fabricante o compilaciones de firmware regionales pueden alterar las opciones de transporte por defecto o la frecuencia de mensajes.
- Elegir UDP frente a TCP puede afectar la fiabilidad del envío y debe coincidir con la configuración del rastreador y las limitaciones de la red.
- Confirme cómo las funciones basadas en SMS, como los enlaces a Google Maps, interactúan con la plataforma si planea usar SMS junto con reportes por socket.
- Valide la compatibilidad contra la documentación más reciente del fabricante antes de depender de funciones específicas en producción.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de la plataforma.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del TZ-AVL301 mejora la configuración exitosa, simplifica la resolución de problemas y ayuda a asegurar la calidad consistente de los datos en Plaspy. Saber cómo el rastreador reporta posición, eventos e identidad permite a los administradores confirmar que el dispositivo está bien configurado e interpretar correctamente la información que llega a la plataforma.

- Asegura que la dirección del servidor y los ajustes de transporte en el rastreador coincidan con el endpoint de Plaspy para un reporte fiable.
- Ayuda a diagnosticar problemas de datos faltantes confirmando si los reportes llegan a la red o son bloqueados antes de la plataforma.
- Aclara qué funciones del dispositivo se entregan a Plaspy, como estado de encendido, ID de conductor, kilometraje y eventos de inmovilización.
- Orienta decisiones sobre actualizaciones de firmware y la necesidad de validar el comportamiento después de una actualización.
- Mejora las expectativas sobre la batería y el comportamiento de registro cuando el rastreador opera en distintos modos.

## Por qué usar Plaspy con este protocolo

Usar el TZone TZ-AVL301 con Plaspy ofrece una forma práctica de centralizar en una sola plataforma de gestión de flotas la ubicación y los eventos de un rastreador 3G robusto y con muchas funciones. Las organizaciones obtienen visibilidad sobre la posición de los vehículos, eventos de conductores y el estado de la flota, manteniendo la flexibilidad para elegir transporte y frecuencia de reporte adecuados a sus necesidades operativas.

Para saber más sobre cómo Plaspy soporta la integración de dispositivos y flujos de trabajo de flota, visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware y revisiones de hardware, verifique la información en el sitio del fabricante http://www.tzonedigital.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
