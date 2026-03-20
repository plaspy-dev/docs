---
slug: /gotop/d22/protocol
id: d22-protocol
sidebar_label: Protocol
title: GOTOP - D22 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar GOTOP D22 con Plaspy, con orientación sobre conexión y compatibilidad
keywords:
  - GOTOP D22
  - protocolo GOTOP D22
  - rastreador GPS GOTOP D22
  - compatibilidad GOTOP D22
  - GOTOP D22 con Plaspy
  - protocolo de rastreo de vehículos
  - rastreador para gestión de flotas
  - comunicación de rastreador GPS
  - protocolo de dispositivo Plaspy
  - integración de rastreo GPS
---

# GOTOP - Protocolo D22

Esta página resume el contexto público del protocolo para usar el rastreador GPS GOTOP D22 con Plaspy. Se centra en cómo el dispositivo comunica con el endpoint de Plaspy y qué aspectos de los reportes del equipo son relevantes para una integración, monitoreo y resolución de problemas efectivos en la plataforma.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar a Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general, no sensible, y consideraciones prácticas para conectar el D22 a Plaspy.

## Resumen del protocolo

El protocolo de comunicación del D22 regula cómo el dispositivo envía posición, estado, alarmas y telemetría a un servidor remoto, y cómo el servidor puede enviar comandos o confirmaciones al equipo. Para la integración con Plaspy, la función principal del protocolo es transmitir información legible, con marca temporal, sobre ubicación y eventos que la plataforma pueda interpretar.

- Permite que el D22 envíe actualizaciones periódicas de ubicación y datos de fijación satelital a un endpoint remoto.
- Transmite la identificación y el estado del dispositivo para que Plaspy pueda asociar los mensajes con el activo correcto.
- Incluye eventos de alarma y sensores como exceso de velocidad, movimiento, SOS, estado de puertas y alertas de energía hacia la plataforma.
- Soporta comportamientos de respaldo, como almacenamiento sin conexión y cargas complementarias cuando el dispositivo recupera cobertura.
- Permite interacciones bidireccionales cuando el equipo lo soporta, por ejemplo control remoto o mensajes de confirmación.

## Detección automática del protocolo por Plaspy

Plaspy acepta reportes de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador en las conexiones entrantes. Cuando el D22 apunta a Plaspy, la plataforma examina el tráfico entrante a nivel de conexión para ajustarlo a uno de los tipos de rastreadores soportados, sin que el usuario necesite seleccionar manualmente el protocolo.

- Plaspy recibe tráfico de dispositivos en el endpoint público d.plaspy.com y en la dirección IP 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto de servidor, lo que simplifica la configuración del equipo.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan mensajes para su análisis y enrutamiento.
- En la mayoría de los casos no es necesario elegir un protocolo dentro de Plaspy si el D22 está configurado correctamente para reportar al endpoint de Plaspy.
- Si un dispositivo utiliza una variante de firmware poco común o ajustes no estándar, confirmar la configuración de reporte del equipo puede ayudar a asegurar que la detección automática tenga éxito.

## Transporte y contexto de conexión

El D22 puede comunicarse mediante datos móviles y soporta transportes de red estándar para enviar telemetría a un servidor. Para la integración con Plaspy, los puntos clave de transporte son consistentes entre dispositivos y están pensados para ser sencillos de configurar en el lado del rastreador.

- El dispositivo puede configurarse para usar UDP o TCP según el soporte del equipo y las preferencias de configuración.
- Plaspy escucha conexiones de dispositivos en el puerto 8888 para todos los dispositivos soportados.
- Los equipos pueden configurarse para apuntar al dominio Plaspy d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 para llegar a la plataforma.
- Usar el tipo de transporte correcto y la dirección del servidor en los ajustes del D22 es necesario para la entrega oportuna de mensajes de ubicación y alarma.
- La confiabilidad de la red, el comportamiento del operador y los ajustes de APN pueden influir en si UDP o TCP es preferible para un despliegue determinado.

## Notas sobre compatibilidad del protocolo

- La compatibilidad del GOTOP D22 con Plaspy ha sido verificada, pero la disponibilidad de funciones exactas puede variar según la versión de firmware y la revisión de hardware.
- Las actualizaciones de firmware del fabricante pueden cambiar el contenido de los mensajes del protocolo o las funciones opcionales; siempre revise las notas de firmware antes de un despliegue masivo.
- Las variantes de hardware o las versiones específicas para mercados pueden implementar opciones de reporte ligeramente distintas o conexiones diferentes para accesorios externos.
- Seleccionar TCP frente a UDP en el dispositivo puede afectar la fiabilidad y la latencia de los mensajes según el entorno de red.
- Asegúrese de que el host y el puerto de reporte del dispositivo estén configurados al endpoint y puerto de Plaspy para un enrutamiento correcto hacia la plataforma.
- En caso de duda, compare el menú de configuración del equipo y la documentación del fabricante con los ajustes de conexión esperados por Plaspy.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del D22 ayuda a administradores e integradores a configurar equipos de manera fiable, interpretar el comportamiento en campo y resolver problemas de conectividad o de reportes con Plaspy.

- Configuración más rápida al saber qué campos y modos de reporte usa el dispositivo para identificarse ante la plataforma.
- Mejora en la resolución de problemas cuando los mensajes no llegan o las alarmas no se reciben, revisando transporte, APN y ajustes del endpoint.
- Mejor planificación de las actualizaciones de firmware y de cómo pueden afectar la telemetría o funciones opcionales.
- Operaciones de flota más fiables al emparejar la selección de transporte del equipo y el intervalo de reporte con las necesidades operativas.
- Expectativas claras sobre qué eventos y sensores el rastreador enviará a Plaspy según la configuración del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D22 con Plaspy ofrece a las organizaciones una forma de centralizar la ubicación de vehículos, estado y reportes de alarma dentro de una plataforma de gestión de flotas. La capacidad de posicionamiento GPS/BDS del D22, su conjunto de alarmas, almacenamiento sin conexión y entradas externas opcionales lo hacen adecuado para diversos flujos de trabajo de monitoreo y seguridad que Plaspy puede recopilar y presentar.

Si desea obtener más información sobre Plaspy y cómo acepta y gestiona los datos de dispositivos, visite https://www.plaspy.com. Para los detalles de protocolo específicos del equipo más actuales, notas de firmware y orientación de implementación del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
