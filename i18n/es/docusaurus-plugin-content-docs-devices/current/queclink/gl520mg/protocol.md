---
slug: /queclink/gl520mg/protocol
id: gl520mg-protocol
sidebar_label: Protocol
title: QuecLink - GL520MG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador QuecLink GL520MG con el servidor Plaspy
keywords:
  - Protocolo QuecLink GL520MG
  - Protocolo GPS QuecLink GL520MG
  - Protocolo de comunicación GL520MG
  - Protocolo de rastreo GL520MG
  - Compatibilidad rastreador QuecLink Plaspy
  - Integración telemetría GL520MG
  - Protocolo rastreador de activos QuecLink
  - Protocolo GL520MG LTE Cat M1
  - Resumen del protocolo QuecLink
  - Comunicación dispositivo GL520MG
---

# QuecLink - Protocolo GL520MG

Esta página explica, a nivel público y sin entrar en detalles sensibles, el contexto del protocolo para usar el rastreador QuecLink GL520MG con Plaspy. Aquí encontrará cómo el dispositivo informa posición, telemetría de sensores y eventos de estado a Plaspy, y qué aspectos revisar durante la implementación.

El GL520MG es compatible con Plaspy de fábrica y soporta reportes con formato QuecLink además de transportes TCP, UDP y SMS. Plaspy utiliza configuraciones de conexión compartidas para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este está configurado para enviar datos al endpoint de Plaspy. Para la conectividad con Plaspy el dominio del servidor es d.plaspy.com y la IP pública es 54.85.159.138 en el puerto 8888. El GL520MG puede configurarse para usar UDP o TCP en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos y detecta el protocolo automáticamente. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de comunicación del GL520MG define cómo el rastreador empaqueta la posición GNSS, las lecturas de sensores a bordo y los eventos de estado para enviarlos a una plataforma backend como Plaspy. A grandes rasgos, el protocolo permite la transferencia fiable de telemetría, la identificación del dispositivo y el envío de señales para configuración remota sin exponer detalles internos de implementación.

- Identifica el dispositivo y proporciona un identificador único para que Plaspy registre y asocie la telemetría con un activo.
- Transporta fijaciones GNSS junto con telemetría de sensores a bordo, como temperatura, luz y eventos de movimiento detectados por el acelerómetro.
- Señala el estado de salud del dispositivo y la batería para que Plaspy muestre alertas de mantenimiento e información de inventario.
- Soporta reportes de eventos como geocerca, movimiento, manipulación (tamper) y umbrales de temperatura que Plaspy puede transformar en notificaciones y flujos de trabajo.
- Funciona sobre transportes comunes (TCP, UDP y SMS) para que los dispositivos reporten cuando hay conectividad IP o recurran al SMS cuando sea necesario.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un endpoint y puerto compartidos y determina automáticamente el protocolo entrante para normalizar los mensajes. En la mayoría de los casos no es necesario seleccionar manualmente el protocolo dentro de Plaspy cuando el GL520MG está configurado para reportar al servidor de Plaspy.

- Envíe los reportes del dispositivo a d.plaspy.com o a la IP pública 54.85.159.138 en el puerto 8888 para alcanzar Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la red y la preferencia.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y aplica detección automática de protocolo en las conexiones entrantes.
- Asegúrese de que el dispositivo envíe su identificador único para que Plaspy pueda asociar el feed con su cuenta y el inventario de activos.
- Cuando el reporte del dispositivo esté correctamente dirigido al endpoint de Plaspy, la selección manual del protocolo en la plataforma suele ser innecesaria.

## Transporte y contexto de conexión

Las elecciones de conexión afectan la vida útil de la batería, la latencia y la fiabilidad de mensajes para el GL520MG. El dispositivo soporta transportes IP y también dispone de SMS como canal alternativo en zonas con conectividad IP limitada.

- El GL520MG puede configurarse para usar UDP o TCP en el puerto 8888 para reportar datos a Plaspy.
- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888 para los dispositivos soportados.
- UDP suele elegirse por su menor sobrecarga en reportes periódicos, mientras que TCP ofrece un canal orientado a conexión en redes donde se prefiera esa modalidad.
- SMS sigue siendo una opción secundaria de transporte para el GL520MG en escenarios de cobertura limitada y para transmitir alertas críticas.
- Verifique el APN, el modo de red (LTE Cat M1, NB2, fallback a 2G) y la provisión celular para que el dispositivo alcance el endpoint de Plaspy de forma fiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos disponibles, formatos de reporte y conjuntos de comandos soportados; siempre verifique el comportamiento específico por versión.
- Las revisiones de hardware o las SKU regionales pueden diferir en el firmware del módem y en las bandas de radio disponibles; el comportamiento de transporte puede variar en consecuencia.
- El GL520MG soporta reportes con formato QuecLink tal como lo describe el fabricante; Plaspy ingiere y normaliza esos mensajes.
- La selección del transporte (UDP vs TCP vs SMS) afecta la semántica de entrega y los patrones de consumo de batería.
- En despliegues grandes es recomendable validar el buffering, el comportamiento de reintento de mensajes y cómo el dispositivo maneja las caídas de conectividad según su versión de firmware.
- Para despliegues críticos confirme la configuración del dispositivo y el soporte de funciones contra la documentación oficial de Queclink.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación del GL520MG ayuda a garantizar una configuración fiable, optimizar el consumo de batería y acelerar la resolución de problemas al integrar dispositivos con Plaspy. Conocer cómo se entregan e identifican los reportes reduce errores de configuración y facilita operaciones escalables.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando un transporte soportado.
- Ayuda a optimizar los intervalos de reporte y los umbrales de eventos para equilibrar la puntualidad y la duración de la batería.
- Acelera la resolución de problemas al distinguir mismatches de red, APN o transporte frente a problemas de dispositivo o firmware.
- Permite mapear correctamente la telemetría de sensores como temperatura, luz y movimiento en los paneles y alertas de Plaspy.
- Facilita la planificación de actualizaciones de firmware y cambios de hardware en una flota para mantener un comportamiento consistente.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GL520MG con Plaspy proporciona a los equipos visibilidad de activos y telemetría ambiental práctica sin un mantenimiento intensivo. La larga duración de batería del rastreador, su carcasa IP67 y los sensores integrados suministran los datos básicos que Plaspy necesita para ofrecer ubicación, monitoreo ambiental y alertas basadas en eventos a escala. Esta combinación es adecuada para cadena de frío, protección de activos estáticos, seguimiento de pallets y despliegues donde el reporte periódico y la detección de manipulación son prioritarios.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el GL520MG visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guías de implementación más actuales, por favor verifique la información en el sitio del fabricante https://www.queclink.com/ ya que el soporte del protocolo y el comportamiento de firmware pueden cambiar con el tiempo.
