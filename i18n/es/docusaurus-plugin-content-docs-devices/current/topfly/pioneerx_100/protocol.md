---
slug: /topfly/pioneerx_100/protocol
id: pioneerx_100-protocol
sidebar_label: Protocol
title: TopFly - PioneerX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar TopFly PioneerX 100 con Plaspy usando ajustes de servidor compartidos y detección automática
keywords:
  - Protocolo TopFly PioneerX 100
  - Protocolo GPS TopFly PioneerX 100
  - Protocolo de comunicación PioneerX 100
  - Protocolo de rastreo PioneerX 100
  - Compatibilidad rastreador TopFly Plaspy
  - Protocolo de telemetría PioneerX 100
  - Guía protocolo rastreador GPS TopFly
  - Protocolo de seguimiento de flotas PioneerX 100
  - Integración TopFly Plaspy
  - Protocolo del dispositivo PioneerX 100
---

# TopFly - Protocolo PioneerX 100

Esta página explica el contexto público del protocolo para usar el rastreador TopFly PioneerX 100 con Plaspy. Resume, en términos generales y no sensibles, cómo comunica el dispositivo y se enfoca en el comportamiento de conexión e informe relevante para integrar el rastreador con Plaspy para ubicación en tiempo real, eventos y telemetría.

Plaspy emplea ajustes de conexión compartidos entre los equipos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página destaca los patrones generales de comunicación en lugar de los detalles de paquetes específicos de firmware.

## Resumen del protocolo

El PioneerX 100 transmite posición, eventos y telemetría de sensores a servidores backend para que los operadores de flotas puedan monitorear vehículos, generar alertas y reproducir recorridos históricos. El protocolo que viaja sobre el transporte del dispositivo es el responsable de identificar la unidad, reportar datos GNSS y enviar eventos de entradas/salidas y sensores que Plaspy convierte en posiciones en el mapa y registros de telemetría útiles.

- El protocolo transmite fixes GNSS y marcas de tiempo para que Plaspy ubique la unidad en el mapa y archive el historial de posiciones.
- Elementos de telemetría como el estado de encendido, lecturas de sensores analógicos y datos de sensores BLE se reportan como eventos para alertas e informes.
- El rastreador envía posiciones almacenadas en búfer cuando se restablece la conectividad para que los recorridos históricos se mantengan completos en la reproducción de Plaspy.
- El protocolo de comunicación también transporta disparadores de evento como SOS, puertas o alertas de inmovilizador para procesamiento inmediato.
- Opciones de seguridad y cifrado disponibles en el dispositivo pueden negociarse en la configuración e influyen en cómo Plaspy recibe y valida los datos reportados.

## Cómo Plaspy detecta el protocolo

Plaspy inspecciona las conexiones entrantes en el endpoint compartido y determina cómo interpretar los mensajes según los datos que envía el rastreador. Dado que Plaspy usa un enfoque unificado para recibir telemetría, normalmente usted no necesita seleccionar un protocolo en la plataforma cuando el dispositivo está configurado para reportar a Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 con el puerto configurado en 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 y Plaspy acepta ambos transportes.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el registro masivo de equipos.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint de la plataforma.
- Cuando un dispositivo está apuntando correctamente al endpoint de Plaspy, la selección manual de protocolo dentro de la plataforma suele ser innecesaria.

## Transporte y contexto de conexión

La configuración de la conexión es una consideración práctica para lograr reportes fiables. El PioneerX 100 admite transportes celulares modernos y puede configurarse para usar el transporte que mejor se adapte al despliegue y al entorno del operador móvil. Apuntar el dispositivo al endpoint y transporte correctos de Plaspy asegura que los mensajes lleguen a la plataforma de forma confiable.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración de la unidad y las capacidades del firmware.
- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 si no hay resolución DNS disponible.
- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, lo que reduce la complejidad de configuración en despliegues masivos.
- La selección del transporte normalmente se realiza en la herramienta de configuración del dispositivo, por USB o configuración Type‑C, o mediante aprovisionamiento remoto como FOTA cuando está soportado.
- Elegir TCP frente a UDP puede afectar las características de entrega y debe seguir la guía del fabricante y las mejores prácticas del operador.

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las revisiones regionales de hardware pueden alterar campos disponibles, opciones de cifrado y la frecuencia de mensajes. Verifique las funciones según el firmware del dispositivo que tenga en mano.
- Algunos builds de firmware del fabricante soportan transportes adicionales u opciones de seguridad como cifrado AES; confirme qué opciones están activas en su unidad.
- Las revisiones de hardware o las diferencias de SKU pueden cambiar los mapeos de entradas/salidas o el soporte de sensores BLE utilizados por el protocolo.
- La selección del modo de transporte (TCP o UDP) se realiza a nivel de configuración del dispositivo y puede requerir ajustes distintos en la herramienta del instalador o en el perfil de aprovisionamiento.
- El comportamiento de posiciones en caché y los tamaños de búfer pueden variar según el firmware; verifique el comportamiento de almacenamiento offline para la recuperación de recorridos históricos.
- Ante cualquier duda sobre el comportamiento específico de firmware, consulte la documentación oficial y las notas de versión de TopFly.

## Por qué es importante entender el protocolo

Comprender el rol del protocolo del rastreador ayuda a garantizar que los dispositivos estén configurados correctamente, que la telemetría esperada llegue a Plaspy y que los pasos de resolución de problemas sean más eficientes cuando surjan incidencias. Tener claro qué responsabilidades tiene el protocolo reduce la fricción en la integración y mejora la confiabilidad a largo plazo.

- La configuración correcta del endpoint y del transporte asegura que las actualizaciones de telemetría y posición lleguen a Plaspy sin demoras.
- Conocer las funciones dependientes del firmware permite ajustar expectativas realistas sobre reportes de eventos y el comportamiento de cargas en búfer.
- Saber cómo el dispositivo reporta eventos de entradas/salidas y sensores BLE agiliza el mapeo de esas señales a alertas y reglas en Plaspy.
- Entender las opciones de seguridad disponibles en el firmware del dispositivo ayuda a alinear la configuración con las políticas de cifrado de la organización.
- La conciencia sobre el protocolo acorta la resolución de problemas al centrar la investigación en la configuración, el transporte, el firmware o problemas con el operador en lugar de en la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el PioneerX 100 con Plaspy ofrece a las organizaciones visibilidad confiable y supervisión operativa desde un rastreador compacto y cableado. Las capacidades combinadas de actualizaciones frecuentes, caché offline en búfer, entradas/salidas configurables para flujos de inmovilizador y soporte de sensores BLE hacen que esta pareja sea útil para gestores de flotas, operadores logísticos y proveedores de servicio que requieren tanto seguimiento en vivo como análisis históricos.

Conozca más sobre Plaspy en el sitio web principal https://www.plaspy.com y verifique detalles específicos de protocolo y firmware del dispositivo en el sitio del fabricante https://www.topflytech.com/ para asegurarse de contar con la información de implementación más reciente. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación oficial del fabricante para una configuración y capacidades precisas del dispositivo.
