---
slug: /aoya/a8/protocol
id: a8-protocol
sidebar_label: Protocol
title: AoYa - A8 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del rastreador AoYa A8 y cómo comunica ubicación y alertas a Plaspy usando ajustes de servidor compartido
keywords:
  - AoYa A8
  - protocolo AoYa A8
  - AoYa GPS A8
  - rastreador A8 Plaspy
  - dispositivos compatibles Plaspy
  - protocolo rastreador GPS
  - rastreador GPS personal
  - seguimiento en vivo A8
  - protocolo de comunicación A8
  - protocolo de reporte del rastreador
---

# AoYa - Protocolo A8

Esta página explica el contexto público del protocolo para usar el rastreador personal AoYa A8 con la plataforma Plaspy. Describe el comportamiento general de comunicación y los ajustes de conexión compartidos que permiten al A8 informar ubicación, alertas y telemetría básica a Plaspy sin exponer detalles internos de firmware o implementaciones privadas. El A8 es un rastreador personal compacto con botón SOS y monitoreo de voz, capaz de seguimiento en tiempo real y compatible con múltiples bandas GSM, lo que lo hace adecuado para monitorización en tiempo real y uso en emergencias.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. Para la integración con Plaspy, el endpoint público del servidor es d.plaspy.com y la IP pública del servidor es 54.85.159.138, usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar los detalles específicos del dispositivo cuando sea necesario.

## Visión general del protocolo

El protocolo del A8 describe cómo el dispositivo establece el transporte hacia un servidor remoto, se identifica y transmite datos de ubicación, alertas y estado para que Plaspy los procese y presente. Esta página se centra en los aspectos públicos y no sensibles de ese intercambio y en cómo el protocolo facilita un reporte confiable hacia Plaspy.

- El protocolo permite que el A8 entregue actualizaciones de ubicación, alertas SOS e información básica de estado a un endpoint remoto para su procesamiento.
- La identificación y los reportes periódicos permiten a Plaspy correlacionar los mensajes entrantes con un registro de dispositivo registrado.
- El flujo de comunicación soporta seguimiento en tiempo real para que las ubicaciones en vivo puedan mostrarse en los paneles de Plaspy.
- La elección del transporte y los intervalos de reporte afectan la vida útil de la batería y la granularidad de los reportes del A8.
- El firmware del fabricante determina el tiempo y el contenido exacto de los mensajes, por lo que el comportamiento puede diferir entre versiones de firmware.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo cuando un rastreador está configurado para reportar a la plataforma. En la mayoría de los casos, los usuarios no necesitan elegir manualmente un protocolo en Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy.

- Plaspy ofrece un único endpoint público d.plaspy.com y una IP pública 54.85.159.138 para el reporte de dispositivos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración.
- Los dispositivos pueden configurarse para reportar vía UDP o TCP en el puerto 8888 según lo permita el equipo.
- Cuando el A8 envía sus primeros reportes al endpoint de Plaspy, la plataforma empata y asocia los datos entrantes con un registro de dispositivo.
- Generalmente los usuarios validan el ID del dispositivo y los ajustes de reporte en el propio rastreador en lugar de seleccionar opciones de protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el A8 envía datos a Plaspy a nivel de transporte de red. El A8 puede usar UDP o TCP según la configuración del dispositivo y las capacidades del firmware, y la plataforma acepta ambos transportes hacia el mismo endpoint y puerto de Plaspy.

- Los dispositivos pueden configurarse para enviar reportes a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 tanto tráfico UDP como TCP de todos los dispositivos soportados.
- Elegir UDP puede reducir el overhead y la latencia en reportes frecuentes, mientras que TCP puede preferirse cuando el firmware prioriza la fiabilidad de cada transmisión.
- Verifique que el APN y los ajustes GPRS del rastreador sean válidos para la SIM utilizada, de modo que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Cortafuegos a nivel de red y restricciones de operador pueden afectar la capacidad del dispositivo para alcanzar d.plaspy.com; valide la conectividad al diagnosticar problemas.

## Notas sobre compatibilidad del protocolo

- Las actualizaciones de firmware y software del fabricante pueden cambiar el tiempo de los mensajes, los campos soportados o el comportamiento de reporte.
- Diferentes revisiones de hardware del A8 pueden soportar distintos modos de transporte o funciones como monitoreo de voz y comportamiento del SOS.
- Algunas funciones dependen tanto del soporte del servidor como de la capacidad del dispositivo; confirme que los campos de reporte requeridos estén disponibles para el caso de uso deseado.
- La elección de transporte entre UDP y TCP puede estar limitada por el firmware del dispositivo y el entorno de red.
- Verifique la configuración de APN, dirección del servidor y transporte en el dispositivo para garantizar que reporte al endpoint de Plaspy.
- En caso de duda, consulte la documentación del fabricante para referencias de comandos y comportamiento específico de firmware.

## Por qué es importante entender el protocolo

Comprender en la práctica el protocolo del rastreador facilita la configuración, la puesta en marcha y la resolución de problemas para que el A8 informe de forma confiable a Plaspy y proporcione datos útiles de ubicación y alertas.

- Conocer la dirección de servidor y el puerto requeridos reduce errores de configuración al aprovisionar dispositivos.
- Entender las opciones de transporte ayuda a equilibrar la frecuencia de reportes con la duración de la batería.
- Estar al tanto de las variaciones de firmware y hardware prepara a los administradores para diferencias de comportamiento en despliegues masivos.
- Tener expectativas claras sobre lo que el dispositivo reporta facilita verificar la integración y diagnosticar datos faltantes.
- Documentar los ajustes del dispositivo y las versiones de firmware simplifica el mantenimiento y el soporte continuos.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A8 con Plaspy permite visibilidad y monitorización en tiempo real para casos de uso de seguridad personal y seguimiento de activos. La forma compacta del A8, el botón SOS, el seguimiento en vivo y el monitoreo de voz encajan bien con los casos de uso de Plaspy donde se requieren ubicación en tiempo real, alertas y supervisión remota básica.

Plaspy acepta reportes del A8 en el endpoint compartido d.plaspy.com o en 54.85.159.138 en el puerto 8888 usando UDP o TCP y detecta automáticamente el protocolo del rastreador para que usted pueda concentrarse en el despliegue y la operación. Para obtener más información sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Para detalles más actuales a nivel de dispositivo y comportamiento específico de firmware consulte la documentación del fabricante en http://www.aoyagps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
