---
slug: /thinkrace/vt06/protocol
id: vt06-protocol
sidebar_label: Protocol
title: ThinkRace - VT06 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo ThinkRace VT06 para usar el rastreador con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - protocolo ThinkRace VT06
  - protocolo GPS ThinkRace VT06
  - protocolo de comunicación ThinkRace VT06
  - protocolo de rastreo ThinkRace VT06
  - compatibilidad ThinkRace VT06 Plaspy
  - Plaspy ThinkRace VT06
  - protocolo de rastreo de vehículos
  - protocolo de rastreador GPS
  - rastreo de flotas VT06
  - integración VT06
---

# ThinkRace - Protocolo VT06

Esta página describe el contexto público del protocolo para usar el rastreador ThinkRace VT06 con Plaspy. Explica cómo se comunica el VT06 en términos generales, cuál es el papel del protocolo de reporte en la integración del dispositivo y qué configuraciones de conexión acepta Plaspy para recibir los datos. El contenido se centra en hechos públicos, no sensibles, y en orientaciones prácticas para la configuración y resolución de problemas.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando recibe datos. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto de conexión y compatibilidad más que los detalles internos del dispositivo.

## Visión general del protocolo

El protocolo del rastreador es el método que utiliza el dispositivo para empaquetar y enviar información de ubicación, estado y alarmas a un servidor. En el caso del VT06, esto incluye reportes de posición periódicos y mensajes impulsados por eventos como alertas de energía, movimiento y geocercas. Comprender el protocolo a un nivel alto ayuda a asegurar que el dispositivo esté configurado correctamente para reportar a Plaspy y que la plataforma pueda interpretar los datos entrantes.

- Permite que el VT06 se identifique y transmita actualizaciones periódicas de ubicación a un servidor remoto.
- Transporta información de eventos y alarmas como corte de energía, batería baja, vibración, desplazamiento, exceso de velocidad y violaciones de geocerca.
- Proporciona marcas de tiempo y contexto necesarios para la reproducción de rastros, generación de informes y estadísticas de datos.
- Permite a Plaspy correlacionar los mensajes entrantes con el vehículo correcto y presentar telemetría utilizable en la plataforma.
- Funciona sobre un transporte por sockets, por lo que la configuración correcta del punto final y el puerto es esencial para un reporte fiable.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador según los datos que envía el dispositivo. En la mayoría de los casos, si el VT06 está apuntando al endpoint de Plaspy y usa un transporte aceptado, la plataforma detectará y comenzará a procesar sus mensajes sin que sea necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador a partir de los datos entrantes.
- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El servidor de Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Cuando un VT06 reporta al endpoint de Plaspy usando el transporte y las credenciales esperadas, por lo general no se requiere selección manual de protocolo.
- Si un dispositivo no aparece en Plaspy, confirme que el dispositivo está apuntando a d.plaspy.com o 54.85.159.138 y reportando en el puerto 8888 usando un transporte permitido.

## Transporte y contexto de conexión

El transporte de conexión y la dirección son fundamentales para que el reporte de dispositivos funcione. El VT06 puede configurarse para enviar sus mensajes sobre un transporte de red al endpoint de Plaspy; escoger el transporte y el hostname o IP correctos es el primer paso en la integración.

- El VT06 puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y la configuración local.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para el reporte.
- Plaspy acepta conexiones en el puerto 8888; el mismo puerto se utiliza para todos los dispositivos que soporta la plataforma.
- Confirme que los cortafuegos de red y las reglas NAT permiten tráfico saliente desde el dispositivo hacia d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si cambia el transporte o el endpoint, permita una ventana breve de pruebas para verificar que la plataforma Plaspy esté recibiendo y detectando automáticamente el dispositivo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware en el VT06 pueden cambiar la cadencia de mensajes, los eventos disponibles o los campos opcionales; verifique las notas de la versión de firmware al solucionar problemas.
- Las revisiones de hardware y las variantes regionales pueden afectar qué transportes u opciones de mensaje están presentes en un dispositivo en particular.
- Las herramientas de configuración del fabricante o los perfiles de la SIM pueden alterar cómo y dónde reporta el dispositivo; asegúrese de que el endpoint de reporte coincida con la configuración de Plaspy.
- La elección entre UDP y TCP puede afectar las características de entrega; seleccione el transporte compatible con el dispositivo y adecuado para su entorno de red.
- Confirme siempre que el APN y la configuración de la SIM del dispositivo permitan datos salientes hacia el endpoint y puerto de Plaspy.
- Valide la compatibilidad contra la documentación oficial de ThinkRace para comportamientos específicos del dispositivo que no estén cubiertos en esta guía pública.

## Por qué es importante entender el protocolo

Tener una comprensión práctica del protocolo de reporte del VT06 y del contexto de conexión acelera la configuración, reduce el tiempo de inactividad y mejora la confiabilidad a largo plazo al integrar con Plaspy. Incluso sin un análisis profundo del protocolo, saber dónde y cómo envía datos el dispositivo ayuda a localizar problemas comunes y a asegurar una implementación exitosa.

- Acelera la configuración inicial al enfocarse primero en endpoint, puerto y transporte.
- Simplifica la resolución de problemas cuando los dispositivos no aparecen en Plaspy al aislar problemas de red y endpoint.
- Ayuda a interpretar qué eventos del dispositivo se deberían ver y dónde buscarlos en la plataforma.
- Informa decisiones sobre actualizaciones de firmware, variantes regionales del dispositivo y selección de transporte.
- Apoya la planificación de la integración para flujos de trabajo de flota, alertas y expectativas de reproducción de rastros.

## Por qué usar Plaspy con este protocolo

Usar el ThinkRace VT06 con Plaspy ofrece una vía directa a la visibilidad del vehículo, monitoreo de eventos y supervisión operativa. Las capacidades de posicionamiento continuo y alarmas del VT06 se integran con la ingestión unificada y la detección automática de protocolos de Plaspy para simplificar la incorporación de dispositivos y el seguimiento diario.

Si desea obtener más información sobre Plaspy, visite https://www.plaspy.com para información sobre la plataforma y opciones de despliegue. El soporte de protocolos, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles más recientes del protocolo específico del dispositivo y las notas de firmware con el fabricante en https://www.thinkrace.com/.
