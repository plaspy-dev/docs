---
slug: /concox/gt300/protocol
id: gt300-protocol
sidebar_label: Protocol
title: Concox - GT300 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Concox GT300 y cómo se comunica con Plaspy
keywords:
  - protocolo Concox GT300
  - protocolo GPS Concox GT300
  - protocolo de rastreo GT300
  - protocolo rastreador GPS Concox
  - compatibilidad GT300 Plaspy
  - comunicación Concox GT300
  - integración dispositivo GT300
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular GT300
  - rastreo de activos Concox
---

# Concox - Protocolo GT300

Esta página ofrece contexto público sobre el protocolo utilizado por el Concox GT300 con Plaspy. Describe cómo suele comunicarse el rastreador con un servidor Plaspy, qué papel cumple el protocolo de reporte en un rastreo confiable y qué ajustes de conexión se usan habitualmente para la integración. La información está pensada para ayudar a usuarios técnicos e integradores a entender la relación de comunicación entre el GT300 y Plaspy sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo en el GT300 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto general útil públicamente y en consideraciones prácticas de configuración.

## Resumen del protocolo

El protocolo de reporte del GT300 define las reglas que el dispositivo usa para identificarse y enviar actualizaciones de posición y estado a un servidor remoto. Para la integración con Plaspy, el protocolo determina cómo se entregan los reportes de posición, las alarmas y las notificaciones de estado, y cómo el servidor reconoce el dispositivo e interpreta los datos enviados.

- Permite que el GT300 envíe ubicaciones, alarmas y mensajes de estado a un endpoint remoto para su procesamiento.
- Incluye información de identificación para que el servidor Plaspy asocie los datos entrantes con un registro de dispositivo concreto.
- Traduce eventos del equipo como SOS, rompimiento de geocercas y batería baja en mensajes que la plataforma puede manejar.
- Soporta el reporte sobre transportes de red estándar para que el dispositivo funcione a través de redes móviles y en distintas regiones.
- Sienta la base para que Plaspy normalice los datos entrantes en un formato consistente para visualización y alertas.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para las conexiones entrantes de los dispositivos, y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar. En la mayoría de los casos, una vez que el GT300 está configurado para reportar al endpoint de Plaspy, no es necesario seleccionar un protocolo manualmente dentro de la plataforma.

- Plaspy acepta reportes entrantes en la dirección pública d.plaspy.com y en la IP del servidor 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Plaspy soporta reportes de dispositivos vía UDP o TCP en el puerto 8888 según la capacidad y configuración del dispositivo.
- La detección automática del protocolo permite que la identificación correcta del dispositivo ocurra normalmente tan pronto como un GT300 bien configurado empiece a reportar al endpoint de Plaspy.
- Si un dispositivo no aparece, la verificación de los ajustes de red y del destino de reporte del equipo es el primer paso habitual en la resolución de problemas.

## Transporte y contexto de conexión

El tipo de conexión y la dirección son parte de la configuración práctica para el GT300. El rastreador puede configurarse para reportar por UDP o TCP, y puede apuntar a Plaspy por nombre de host o por dirección IP según el comportamiento de la red local o del proveedor de SIM.

- El GT300 puede configurarse para usar UDP o TCP en el puerto 8888, según las capacidades del equipo y la configuración local.
- Los dispositivos pueden apuntar al servidor Plaspy por hostname d.plaspy.com o a la IP 54.85.159.138 cuando el DNS no está disponible o no es fiable.
- El puerto 8888 es el puerto de entrada común usado por Plaspy para todos los dispositivos compatibles, lo que simplifica la configuración entre modelos.
- La selección del transporte puede afectar la entrega en condiciones de red pobres; elija el transporte que mejor se ajuste a las capacidades del equipo y al perfil de la red.
- Asegúrese de que la SIM o el operador de red no bloquee el transporte y puerto elegidos y de que los ajustes APN estén configurados correctamente en el dispositivo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del GT300 pueden cambiar qué mensajes y eventos reporta el dispositivo y cómo se codifican esos mensajes.
- Las revisiones de hardware o variantes regionales pueden introducir diferencias en sensores disponibles, alarmas u opciones de reporte.
- Los valores predeterminados de configuración del fabricante pueden variar, así que confirme que el equipo está configurado para reportar al endpoint y puerto de Plaspy antes de asumir compatibilidad.
- Seleccionar TCP frente a UDP en el dispositivo puede afectar la fiabilidad de los mensajes y debe elegirse según el soporte del equipo y las condiciones de conexión.
- Valide el comportamiento de funciones específicas como SOS, geocercas y notificaciones de batería baja contra la documentación del dispositivo para su versión de firmware.
- En caso de duda, consulte la documentación del fabricante y asegúrese de que el dispositivo tenga la versión de firmware recomendada si está disponible.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GT300 ayuda a garantizar un funcionamiento fiable, agiliza la resolución de problemas y permite un manejo predecible de eventos cuando el dispositivo se usa con Plaspy. Saber dónde y cómo reporta el equipo facilita la configuración y reduce el tiempo para obtener un rastreo preciso.

- Facilita la configuración inicial aclarando a qué dirección y transporte debe apuntar el dispositivo.
- Agiliza la resolución de problemas cuando los reportes no llegan, al acotar las comprobaciones a transporte, destino y diferencias de firmware.
- Ayuda a interpretar el comportamiento de eventos del dispositivo como SOS, alertas de geocerca y notificaciones de batería baja cuando aparecen en Plaspy.
- Contribuye a validar que el dispositivo envía la identificación necesaria para la asociación correcta en la plataforma.
- Apoya la planificación a escala de flota al estandarizar los ajustes de red entre rastreadores similares.

## Por qué usar Plaspy con este protocolo

Usar el Concox GT300 con Plaspy ofrece una forma práctica de capturar la ubicación del dispositivo, alertas y mensajes de estado en una plataforma centralizada diseñada para monitoreo y supervisión operativa. El endpoint compartido de Plaspy y la detección automática del protocolo reducen el trabajo de configuración manual que comúnmente se requiere al agregar rastreadores compatibles a un sistema.

Para comenzar, configure el GT300 para que reporte al endpoint de Plaspy y confirme que el transporte y el puerto coinciden con los ajustes de su dispositivo. Conozca más sobre Plaspy y cómo maneja el reporte de dispositivos en el sitio web de Plaspy en https://www.plaspy.com. Para obtener información de firmware y detalles de protocolo más actualizados específicos del Concox GT300, verifique el comportamiento y la documentación del dispositivo con el fabricante en https://www.iconcox.com/ ya que las implementaciones y versiones de firmware pueden cambiar con el tiempo.
