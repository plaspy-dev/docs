---
slug: /huabao/hb_a3b/protocol
id: hb_a3b-protocol
sidebar_label: Protocol
title: Huabao - HB-A3B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Huabao HB-A3B y su comunicación con Plaspy para seguimiento y control de velocidad
keywords:
  - Protocolo Huabao HB-A3B
  - Rastreador GPS HB-A3B
  - Protocolo GPS Huabao
  - Compatibilidad con Plaspy
  - Protocolo limitador de velocidad vehicular
  - Comunicación rastreador GPS BDS
  - Reportes de telemetría HB-A3B
  - Protocolo de rastreo de flotas
  - Registro de cumplimiento HB-A3B
  - Integración de rastreadores GPS
---

# Huabao - HB-A3B Protocolo

Esta página ofrece una visión pública del protocolo para usar el limitador de velocidad y gobernador Huabao HB-A3B 00 con la plataforma Plaspy. Se centra en el contexto de comunicación a alto nivel y en cómo el dispositivo entrega posición GNSS, entradas del vehículo, alertas de eventos y telemetría almacenada a Plaspy, sin exponer detalles privados de implementación. El HB-A3B 00 combina posicionamiento GPS/BDS, comunicaciones GSM y salidas de control locales para soportar limitación de velocidad, registro de cumplimiento y trazabilidad de viajes en instalaciones de flota y entornos regulados.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los equipos están configurados para reportar al endpoint de Plaspy. El comportamiento exacto del HB-A3B 00 “on the wire” puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza la orientación de conexión y compatibilidad orientada al usuario en lugar de detalles internos de firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que transporta datos de ubicación, estado, eventos y control entre el HB-A3B 00 y Plaspy. A alto nivel, el protocolo garantiza que el dispositivo pueda identificarse, transmitir telemetría y alarmas, y entregar registros en búfer tras interrupciones de cobertura para que los gestores de flota conserven una traza de auditoría útil para cumplimiento y seguridad.

- Transporta datos de posición GNSS y tiempo junto con señales del vehículo como estado de ACC y velocidad por impulsos hacia Plaspy para seguimiento en tiempo real.
- Reporta tipos de eventos relevantes para cumplimiento y seguridad, como exceso de velocidad, SOS, corte de antena y pérdida de alimentación, para generar alertas en Plaspy.
- Permite la entrega de registros almacenados cuando se restablece la cobertura celular, de modo que Plaspy reciba historiales de viaje y registros de auditoría continuos.
- Soporta la transmisión de telemetría opcional, por ejemplo lecturas de sensor de combustible, cuando ese hardware está instalado en el HB-A3B 00.
- Proporciona el canal de comunicación que utilizan los sistemas de comandos y flujos de trabajo para coordinar procedimientos remotos junto con las salidas de control locales del dispositivo.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los dispositivos en un único endpoint y puerto compartido y usa esa conexión para determinar automáticamente el protocolo del rastreador que llega. En la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy mientras el HB-A3B 00 esté configurado para reportar al endpoint de Plaspy.

- Plaspy acepta reportes de dispositivos en el dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo.
- Plaspy escucha en el puerto 8888 para el tráfico del dispositivo y detecta automáticamente el protocolo desde la conexión entrante.
- Si el HB-A3B 00 apunta al endpoint de Plaspy y utiliza un transporte soportado, Plaspy normalmente detectará el protocolo sin necesidad de selección manual.
- Confirme que el HB-A3B 00 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto configurado para asegurar que la detección automática tenga éxito.

## Transporte y contexto de conexión

Las opciones de transporte y conexión determinan cómo el HB-A3B 00 alcanza Plaspy a través de redes celulares. La unidad puede transmitir telemetría por enlaces celulares estándar y puede configurarse para usar UDP o TCP según los ajustes del dispositivo y las condiciones de la red.

- El HB-A3B 00 puede configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y este mismo puerto se usa para todos los dispositivos del ecosistema Plaspy.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y el comportamiento de la red.
- Asegúrese de que firewalls y la NAT del operador permitan conexiones salientes UDP o TCP al puerto 8888 para que el dispositivo pueda alcanzar el endpoint de Plaspy.
- Las subidas de datos almacenados después de brechas de cobertura suelen reanudarse una vez que el dispositivo restablece la sesión con el servidor de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos exactos, intervalos de reporte u mensajes opcionales que emite el HB-A3B 00; verifique siempre las notas de firmware del dispositivo para detectar cambios.
- Revisiones de hardware o módulos opcionales, como sensor de combustible o impresora, pueden añadir telemetría que requiere validación frente al mapeo de Plaspy.
- La selección de transporte (UDP vs TCP) puede afectar el comportamiento de entrega en ciertas redes; elija el transporte compatible con su despliegue y valide el desempeño.
- Restricciones de red, como limitaciones del operador o la provisión de la SIM, pueden afectar la conectividad hacia d.plaspy.com o la IP del servidor.
- Las herramientas de configuración del fabricante y los ajustes de servidor por defecto determinan si la unidad apunta al endpoint de Plaspy de fábrica.
- Verifique la compatibilidad con la documentación más reciente de Huabao y pruebe los dispositivos en su red para confirmar la cobertura completa de funciones.

## Por qué es importante conocer el protocolo

Comprender el contexto público del protocolo ayuda a garantizar instalaciones fiables, comportamiento predecible y una resolución de problemas eficiente al integrar el HB-A3B 00 con Plaspy. Saber cómo se conecta el dispositivo y qué datos reporta reduce el tiempo de puesta en marcha y favorece la fiabilidad operativa a largo plazo.

- Ayuda a los instaladores a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los datos fluyan de forma fiable.
- Mejora la resolución de problemas de conectividad al clarificar si se eligió UDP o TCP y cómo se comporta el almacenamiento en búfer tras cortes.
- Facilita mapear los campos de telemetría esperados, como GNSS, ACC, velocidad por impulsos y alarmas, hacia los paneles y alertas de Plaspy.
- Respaldan los flujos de trabajo de auditoría y cumplimiento al confirmar cómo y cuándo se suben los registros en búfer a Plaspy.
- Aclara qué sensores opcionales y hardware añaden datos adicionales que pueden requerir validación en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el Huabao HB-A3B 00 con Plaspy ofrece a flotas y operadores regulados visibilidad centralizada sobre ubicación, eventos de exceso de velocidad y estado del dispositivo, a la vez que preserva las capacidades de control local del equipo, como limitación de velocidad basada en relés o corte de combustible. Plaspy ingiere la telemetría del HB-A3B 00 para presentar seguimiento en mapas, reproducción histórica, alertas e informes de cumplimiento que ayudan a aplicar políticas y a supervisar operaciones.

Para obtener más información sobre Plaspy y cómo sus dispositivos HB-A3B 00 pueden configurarse para reportar a la plataforma visite https://www.plaspy.com. Para el comportamiento más actual del protocolo específico del dispositivo, notas de firmware y detalles de implementación, verifique la información con el fabricante en https://www.huabaotelematics.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
