---
slug: /megastek/mt_350/protocol
id: mt_350-protocol
sidebar_label: Protocol
title: Megastek - MT-350 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública confiable del protocolo para integrar Megastek MT-350 con la plataforma de rastreo Plaspy
keywords:
  - Protocolo Megastek MT 350
  - Protocolo GPS Megastek MT 350
  - Protocolo de seguimiento MT 350
  - Protocolo de comunicación MT 350
  - Protocolo pulsera Megastek
  - Protocolo de seguimiento interior Plaspy
  - Compatibilidad UWB RTLS Plaspy
  - Protocolo de seguimiento de personal
  - Integración MT 350 Plaspy
  - Compatibilidad protocolo Megastek
---

# Megastek - Protocolo MT-350

Esta página ofrece contexto público sobre el protocolo para usar la pulsera Megastek MT-350 con la plataforma Plaspy. Describe cómo la información de ubicación y estado del dispositivo llega a una implementación de Plaspy sin exponer detalles sensibles de implementación. El énfasis está en el papel del protocolo de reporte del dispositivo para permitir posicionamiento interior confiable y la notificación de alarmas cuando los MT-350 se integran en un entorno Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos están configurados para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento observado en campo puede diferir de las descripciones generales de esta página.

## Resumen del protocolo

El MT-350 se basa en posicionamiento Ultra Wideband (UWB) y en una ruta uplink desde las estaciones base UWB hacia un servidor en red. El contexto público del protocolo que se presenta aquí describe el papel de comunicación que permite a Plaspy recibir en tiempo real ubicaciones, telemetría y eventos de alarma del sistema MT-350. Esto incluye identificadores y datos de estado necesarios para que Plaspy mapee posiciones interiores, muestre eventos SOS y de manipulación, y presente información de salud del dispositivo.

- El protocolo transmite la identidad y el estado del dispositivo para que Plaspy pueda asociar una pulsera a un usuario o activo.
- Actualizaciones de ubicación y telemetría se entregan desde la infraestructura UWB hacia Plaspy para mapeo en tiempo real e historial.
- Mensajes de alarma y eventos, como pulsos de SOS, alertas de manipulación y batería baja, se reenvían a Plaspy para procesos de notificación y respuesta.
- Los intervalos de reporte y la sensibilidad al movimiento configurables en el dispositivo afectan la frecuencia y el contenido de los uplinks que recibe Plaspy.
- Informes de salud del dispositivo y estados remotos permiten mantenimiento y supervisión centralizada dentro de la plataforma Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo o su infraestructura de soporte apunta al endpoint de Plaspy y reporta usando los ajustes de conexión compartidos. En la mayoría de las implementaciones no es necesario elegir un protocolo específico dentro de Plaspy, siempre que el sistema MT-350 esté configurado para enviar sus uplinks al servidor de Plaspy.

- Plaspy escucha en un endpoint y puerto compartidos para el tráfico entrante de rastreadores y emplea esa conexión para identificar protocolos de dispositivo compatibles.
- Cuando la cadena de reporte del MT-350 reenvía mensajes a Plaspy, la plataforma hace coincidir el tráfico entrante con comportamientos conocidos y presenta los datos sin requerir selección manual de protocolo.
- Usualmente se configura la estación base UWB o la pasarela de red para enviar los uplinks de los dispositivos al endpoint y puerto de Plaspy.
- La detección automática simplifica la incorporación de flotas mixtas de dispositivos y pulseras RTLS de interior como el MT-350.
- Si un dispositivo no se detecta automáticamente, el siguiente paso recomendado es validar los ajustes de red y los pasos de configuración del fabricante.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo los uplinks desde la infraestructura UWB llegan a Plaspy, más que los detalles de bajo nivel del protocolo dentro de la pulsera. El sistema MT-350 utiliza estaciones base UWB que reenvían datos de ubicación y eventos hacia la red del sitio, donde esos uplinks se encaminarán hacia Plaspy para su procesamiento centralizado.

- Los dispositivos y las pasarelas de estaciones base pueden configurarse para usar UDP o TCP para enviar uplinks a Plaspy, según el soporte del dispositivo y la configuración local de la pasarela.
- Plaspy acepta tráfico de rastreadores en el dominio público d.plaspy.com y en la IP del servidor 54.85.159.138.
- El puerto estándar de Plaspy para reportes de dispositivo es 8888 y este mismo puerto se utiliza para todos los dispositivos compatibles con Plaspy.
- Al configurar pasarelas o estaciones base, apunte el host de uplink a d.plaspy.com o a 54.85.159.138 y establezca el transporte en UDP o TCP según lo soportado.
- La elección de transporte y las políticas de red locales pueden afectar la confiabilidad y la latencia en la entrega de posiciones y eventos a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware en el MT-350 o en las estaciones base UWB pueden cambiar el tiempo entre mensajes, los campos de telemetría disponibles y los modos de reporte soportados.
- Las revisiones de hardware y los diferentes modelos de estaciones base pueden alterar cómo se reenvían los uplinks hacia la red IP; valide qué pasarela se está usando en su instalación.
- La selección de transporte entre UDP y TCP puede verse limitada por la red local, firewalls o por las capacidades de firmware de la pasarela.
- Plaspy utiliza un puerto de escucha consistente entre dispositivos, lo que simplifica la configuración pero no elimina la necesidad de confirmar los ajustes en el lado del dispositivo.
- Verifique siempre los pasos de configuración del dispositivo con la documentación del fabricante al ajustar intervalos de reporte o habilitar funciones remotas.
- Las pruebas de integración en un entorno controlado ayudan a confirmar cómo eventos como SOS y alertas de manipulación se mapean a las notificaciones en Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a garantizar una configuración correcta, acelerar la resolución de problemas y lograr una operación confiable a largo plazo al integrar las pulseras MT-350 con Plaspy. Saber qué reporta el dispositivo y cómo esos mensajes llegan a Plaspy reduce el tiempo de inactividad y mejora la fidelidad de los eventos.

- Facilita la configuración adecuada de las estaciones base UWB y de las pasarelas de red para apuntar a d.plaspy.com o a 54.85.159.138.
- Ayuda a definir intervalos de reporte y sensibilidad al movimiento para equilibrar la vida útil de la batería y la frecuencia de actualizaciones según su caso de uso.
- Mejora la resolución de problemas cuando faltan eventos o hay demoras, al aislar el comportamiento del transporte y de la pasarela.
- Orienta las prácticas de mantenimiento para actualizaciones de firmware y el monitoreo de salud del dispositivo que alimentan los paneles de Plaspy.
- Apoya decisiones informadas sobre la arquitectura de red, por ejemplo, cuándo preferir TCP frente a UDP en una implementación concreta.

## Por qué usar Plaspy con este protocolo

Usar el MT-350 con Plaspy amplía la visibilidad de Plaspy en espacios interiores donde el GPS no está disponible. La pulsera MT-350, cuando se combina con estaciones base UWB e integra en Plaspy, permite posicionamiento interior preciso, alertas SOS y de manipulación en tiempo real, y monitoreo centralizado de la salud de los dispositivos, lo que en conjunto mejora la conciencia situacional y la respuesta operativa en instalaciones que requieren monitoreo continuo de personal.

Para saber más sobre cómo Plaspy maneja integraciones de dispositivos y obtener orientación adicional de despliegue visite https://www.plaspy.com. Para los detalles más actuales y específicos por dispositivo sobre el protocolo, comportamiento de firmware y notas de implementación, consulte la documentación oficial de Megastek en https://www.megastek.com/ ya que las funciones del fabricante y el firmware pueden cambiar con el tiempo.
