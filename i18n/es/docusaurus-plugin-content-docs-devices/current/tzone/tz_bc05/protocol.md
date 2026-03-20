---
slug: /tzone/tz_bc05/protocol
id: tz_bc05-protocol
sidebar_label: Protocol
title: TZone - TZ-BC05 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el beacon TZone TZ-BC05 con Plaspy y garantizar comunicación y reporte confiables
keywords:
  - Protocolo TZone TZ-BC05
  - Protocolo GPS TZone TZ-BC05
  - Protocolo de comunicación TZ-BC05
  - Rastreador iBeacon TZ-BC05
  - Protocolo iBeacon TZone
  - Compatibilidad con Plaspy
  - Integración de rastreadores con Plaspy
  - Protocolo de rastreador GPS
  - Integración de beacons Bluetooth
  - Seguimiento de vehículos con Plaspy
---

# TZone - Protocolo TZ-BC05

Esta página describe el contexto público del protocolo para usar el rastreador TZone TZ-BC05 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, cómo Plaspy espera recibir los datos y qué factores afectan el comportamiento del equipo. El TZ-BC05 es un dispositivo compacto iBeacon Bluetooth 4.0 diseñado para difusión y identificación en corto alcance; aquí explicamos cómo esas emisiones interactúan con los flujos habituales de reporte hacia un backend.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan a la plataforma. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en contexto público y no sensible, ofreciendo notas prácticas de integración y recomendando verificar la documentación del fabricante para detalles específicos de firmware.

## Resumen del protocolo

El TZ-BC05 usa publicidad Bluetooth Low Energy compatible con el modelo iBeacon para transmitir un identificador de dispositivo y metadatos opcionales en intervalos y potencias de transmisión configurables. En una implementación con Plaspy, esas emisiones deben ser detectadas y reenviadas a Plaspy para que aparezcan en la plataforma. El rol del protocolo es identificar de forma consistente el dispositivo y proporcionar emisiones periódicas que un receptor o gateway pueda convertir en eventos de seguimiento para el backend.

- Las emisiones entregan un identificador único y datos de intensidad de señal que los sistemas posteriores usan para inferir proximidad e identidad.
- El intervalo de transmisión y la potencia son ajustables, lo que permite equilibrar la vida de batería con la rapidez de detección.
- Opciones de protección por contraseña y emparejamiento controlan quién puede leer o modificar la configuración vía BLE.
- Cuando un gateway o dispositivo conectado a internet reenvía los datos del beacon, los mensajes reenviados deben llegar al endpoint de Plaspy para su procesamiento.
- El protocolo se centra en la publicidad Bluetooth; cualquier transporte IP usado para alcanzar Plaspy es un detalle de implementación del dispositivo intermedio o gateway.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de dispositivos en un único endpoint y puerto común y detecta automáticamente el protocolo entrante, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de la plataforma. Si un rastreador, gateway o cliente de reenvío está configurado para enviar datos a Plaspy, la plataforma intentará identificar el formato y asociar los datos entrantes con el registro de dispositivo adecuado.

- Plaspy escucha en un único puerto para todos los dispositivos y detecta automáticamente el protocolo del rastreador.
- Los dispositivos o gateways deben configurarse para reportar a d.plaspy.com o a la dirección IP del servidor Plaspy para llegar a la plataforma.
- Usualmente no es necesario elegir un protocolo en Plaspy si el dispositivo está reportando correctamente al endpoint de Plaspy.
- Una identificación correcta del dispositivo en el primer reporte ayuda a Plaspy a asociar los mensajes entrantes con el modelo de rastreador y la cuenta correspondiente.
- Si los reportes no llegan o se identifican mal, la primera acción de solución de problemas es revisar la configuración del gateway de reenvío y del dispositivo.

## Contexto de transporte y conexión

El TZ-BC05 en sí es un beacon Bluetooth. Para que sea visible en Plaspy, las emisiones del beacon deben ser observadas y reenviadas por un componente conectado a la red. Plaspy acepta reportes de dispositivos sobre transportes IP estándar y ofrece un endpoint consistente para que los servicios de reenvío puedan usar la misma configuración entre distintos modelos de dispositivo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto usado por Plaspy para todos los dispositivos es 8888 y Plaspy usa el mismo puerto para cada dispositivo soportado.
- Los dispositivos o gateways pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del componente de reenvío.
- El reenvío de emisiones BLE puede realizarlo una app móvil emparejada, un gateway dedicado o cualquier intermediario que convierta datos del beacon en reportes IP.
- Asegúrese de que cualquier cliente o gateway de reenvío apunte al endpoint de Plaspy para que la plataforma reciba los datos del beacon y los procese.

## Notas de compatibilidad del protocolo

- El TZ-BC05 implementa publicidad de estilo iBeacon en BLE; la compatibilidad con Plaspy depende de disponer de una ruta de reenvío de BLE a IP que Plaspy pueda ingerir.
- Las revisiones de firmware y las variantes de hardware pueden cambiar opciones disponibles como intervalo de transmisión, potencia y medidas de seguridad.
- Las herramientas de configuración del fabricante y los valores por defecto varían; confirme siempre la configuración del dispositivo antes del despliegue.
- Elegir UDP frente a TCP para el reenvío puede afectar la fiabilidad de entrega según las condiciones de red y el comportamiento del gateway.
- Los gateways y las apps que reenvían datos de beacon deben respetar la configuración del endpoint de Plaspy para asegurar la recepción correcta.
- Valide la compatibilidad consultando la documentación más reciente del fabricante y las notas de versión del software del gateway que utilice en su implementación.

## Por qué es importante entender el protocolo

Comprender cómo el TZ-BC05 anuncia y cómo esos anuncios llegan a Plaspy ayuda a garantizar una configuración confiable, facilita la resolución de problemas y hace predecible la duración de la batería. Tener claro el camino de comunicación desde el beacon hasta el backend reduce errores de configuración y mejora la disponibilidad operativa.

- Confirma que las emisiones BLE están siendo observadas y reenviadas correctamente a Plaspy.
- Orienta decisiones sensatas sobre intervalo de transmisión y potencia para equilibrar detección y autonomía.
- Facilita el diagnóstico de datos faltantes revisando los registros del gateway y la configuración de reenvío.
- Promueve la verificación de revisiones de firmware y hardware que pueden alterar el comportamiento.
- Favorece despliegues seguros al destacar las opciones de emparejamiento y contraseñas que controlan el acceso a la configuración.

## Por qué usar Plaspy con este protocolo

Usar el TZ-BC05 con Plaspy es una forma práctica de extender la identificación basada en beacons hacia un flujo de trabajo centralizado de seguimiento y monitoreo. Cuando las emisiones del beacon se puentean a Plaspy, las organizaciones obtienen una vista unificada de presencia de dispositivos, eventos de proximidad y visibilidad de activos junto con otros tipos de rastreadores que la plataforma soporta. Esto resulta útil para inventarios, alertas de proximidad y flotas mixtas que combinan beacons BLE con dispositivos GPS.

Para obtener más información sobre Plaspy y cómo puede integrar datos de beacons y rastreadores en una vista operativa única, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifíquelos siempre contra la documentación del fabricante en http://www.tzonedigital.com/ para obtener la información más actualizada sobre el dispositivo.
