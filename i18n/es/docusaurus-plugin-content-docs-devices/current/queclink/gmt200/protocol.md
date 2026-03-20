---
slug: /queclink/gmt200/protocol
id: gmt200-protocol
sidebar_label: Protocol
title: QuecLink - GMT200 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el QuecLink GMT200 con Plaspy y ajustes de conexión compartida para la integración
keywords:
  - Protocolo QuecLink GMT200
  - Protocolo GPS QuecLink GMT200
  - Protocolo de comunicación GMT200
  - Compatibilidad GMT200 Plaspy
  - Protocolo rastreador GPS QuecLink
  - Protocolo rastreador motocicleta GMT200
  - Protocolo de rastreo GMT200
  - Protocolo de dispositivo Plaspy
  - Protocolo seguimiento de vehículos
  - Rastreo de flotas GMT200
---

# QuecLink - Protocolo GMT200

Esta página ofrece contexto público sobre el protocolo para usar el rastreador QuecLink GMT200 con Plaspy. Se centra en cómo el dispositivo se comunica con la plataforma Plaspy, qué puntos de conexión se utilizan y qué papel desempeña el protocolo de reporte del rastreador para lograr una integración y supervisión confiables.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y las decisiones de implementación del fabricante. El GMT200 es un rastreador GPS orientado a motocicletas, diseñado para instalaciones discretas, conectividad estable y alertas por eventos; este documento explica el contexto del protocolo necesario para su operación fiable sin exponer detalles internos de implementación.

## Resumen del protocolo

El protocolo de reporte del GMT200 es el mecanismo que permite al dispositivo identificarse, enviar telemetría de ubicación y eventos, y activar alarmas que Plaspy puede recibir y procesar. Esta sección describe el rol público del protocolo más que los formatos de paquete de bajo nivel.

- Permite telemetría periódica y por eventos, como actualizaciones de ubicación, detección de movimiento y eventos de encendido/apagado de la ignición.
- Transporta información identificadora que permite a Plaspy atribuir mensajes entrantes a un dispositivo y cuenta específicos.
- Envía eventos de alarma y estado para que la plataforma pueda disparar flujos de trabajo de geocercas, recuperación y notificaciones.
- Soporta la entrega de datos sobre transportes de red estándar para que las plataformas de monitoreo reciban reportes en tiempo real.
- Funciona conjuntamente con la configuración del dispositivo (servidor, transporte e intervalos de reporte) para determinar la frecuencia de actualizaciones y la capacidad de respuesta ante alarmas.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint compartido y utiliza el contenido de las conexiones entrantes para determinar cómo interpretar los mensajes de cada equipo. Cuando un GMT200 está apuntando al endpoint de Plaspy y envía reportes, Plaspy asociará el dispositivo al manejador interno correspondiente de forma automática.

- Plaspy recibe el tráfico de rastreadores en el nombre de dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y las reglas de red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita seleccionar un protocolo manualmente dentro de Plaspy cuando el dispositivo está configurado correctamente para reportar a Plaspy.
- La identificación correcta del dispositivo depende de que el rastreador envíe los campos identificadores y eventos esperados; el comportamiento del firmware puede modificar qué campos están presentes.
- Si un dispositivo no aparece, el primer paso de solución de problemas es confirmar que el rastreador está configurado para usar el endpoint de Plaspy y el transporte correcto.

## Transporte y contexto de conexión

El GMT200 puede configurarse para usar transportes de red estándar para enviar reportes a Plaspy. Los ajustes de conexión son una pieza crítica de la integración y deben coincidir con la dirección de red configurada en el rastreador y con cualquier política del operador o firewall vigente.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 para la entrega de telemetría.
- Plaspy usa un único puerto (8888) para todos los dispositivos compatibles, reduciendo la necesidad de cambios por dispositivo en los firewalls.
- La elección entre UDP o TCP puede afectar el comportamiento de entrega en redes inestables; confirme el transporte preferido con su instalador o la documentación del fabricante.
- La configuración de red y APN en el rastreador debe permitir tráfico saliente hacia el endpoint de Plaspy para asegurar que los reportes lleguen a la plataforma.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de dispositivos o entre versiones pueden cambiar qué campos se reportan y cuándo se generan los eventos.
- Revisiones de hardware o variantes regionales pueden exponer diferentes opciones de E/S o comportamientos para la detección de ignición y movimiento.
- El GMT200 soporta los eventos descritos en materiales públicos, pero el nombre exacto de las alarmas o el contenido de las cargas útiles pueden variar según el firmware.
- La selección del transporte (UDP vs TCP) es una opción de configuración del dispositivo; asegúrese de que el transporte elegido esté permitido por los operadores móviles y las pasarelas de red.
- Se recomienda realizar pruebas de integración con un dispositivo de muestra antes de un despliegue masivo para validar el mapeo de eventos dentro de Plaspy.
- Consulte siempre la documentación de Queclink o el material del distribuidor para confirmar capacidades del equipo y notas de cambios de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a garantizar una configuración sin contratiempos, un manejo preciso de alarmas y una operación confiable a largo plazo cuando se usa el GMT200 con Plaspy. Conocer el contexto del protocolo facilita la resolución de problemas y el mapeo correcto de eventos del dispositivo en los flujos de trabajo de la plataforma.

- Reduce el tiempo para diagnosticar telemetría faltante o mal atribuida al aclarar qué datos debe enviar el dispositivo.
- Ayuda a verificar que la detección de movimiento y los eventos de ignición se traduzcan en las alarmas correctas de Plaspy.
- Facilita la planificación de reglas de red y aperturas de firewall, ya que Plaspy utiliza un único dominio y puerto para la ingesta.
- Orienta las decisiones sobre firmware y configuración para alinear el comportamiento del dispositivo con los requisitos operativos.
- Apoya una integración consistente en una flota al documentar los intervalos de reporte esperados y los tipos de eventos.

## Por qué usar Plaspy con este protocolo

Combinar el QuecLink GMT200 con Plaspy proporciona visibilidad centralizada para flotas de motocicletas y programas de seguridad. La forma discreta del rastreador y su reporte basado en eventos, junto con la ingestión de telemetría y alarmas por parte de Plaspy, permiten respuestas oportunas ante robos, reproducción de rutas para investigaciones de recuperación y monitoreo continuo de la flota.

El modelo de conexión compartida de Plaspy simplifica la configuración del dispositivo al usar el mismo puerto para todos los equipos y la detección automática de protocolo, reduciendo la complejidad de la puesta en marcha para instaladores y administradores. Para saber más sobre Plaspy y cómo usarlo con el GMT200, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, comportamiento de firmware y guías de instalación más actuales, verifique la información en el sitio del fabricante https://www.queclink.com/. El soporte de protocolo y la implementación del firmware pueden evolucionar con el tiempo, por lo que se recomienda confirmar la documentación más reciente del fabricante.
