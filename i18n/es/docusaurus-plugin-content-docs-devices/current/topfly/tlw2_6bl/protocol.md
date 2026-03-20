---
slug: /topfly/tlw2_6bl/protocol
id: tlw2_6bl-protocol
sidebar_label: Protocol
title: TopFly - TLW2-6bl Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el rastreador TopFly TLW2-6BL con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo TopFly TLW2-6BL
  - protocolo GPS TopFly TLW2-6BL
  - compatibilidad TLW2-6BL Plaspy
  - protocolo de comunicación TLW2-6BL
  - protocolo de rastreo TLW2-6BL
  - protocolo de rastreador vehicular TopFly
  - integración de rastreadores Plaspy
  - protocolo GPS de flotas TopFly
  - protocolo para cadena de frío
  - telemetría de sensores BLE TopFly
---

# TopFly - Protocolo TLW2-6BL

Esta página presenta el contexto público del protocolo para usar el rastreador TopFly TLW2-6BL con Plaspy. Explica cómo el dispositivo comunica telemetría común, posición GNSS, puntos en búfer y datos de sensores al plataforma Plaspy usando los ajustes de conexión compartidos que Plaspy provee. La información aquí se enfoca en aspectos públicos y no sensibles de la comunicación del dispositivo y está destinada a ayudar a gestores de flotas, integradores e implementadores a comprender cómo el rastreador reporta datos a Plaspy.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto general del protocolo en lugar de tramas específicas de firmware o detalles privados del parser.

## Descripción general del protocolo

El protocolo de comunicación del TLW2-6BL permite al rastreador entregar ubicación, telemetría y datos de alarma a Plaspy para que la plataforma muestre localización en tiempo real, historial y alertas. A grandes rasgos, el protocolo regula cómo el dispositivo se identifica, reporta fijaciones GNSS, sube puntos almacenados tras cortes de cobertura y envía telemetría desde entradas/salidas y sensores BLE.

- Permite reportes de posición periódicos y por eventos para que Plaspy muestre seguimiento en vivo y reproducción de rutas.
- Transporta telemetría del vehículo como estado de ignición, entradas digitales, telemetría analógica y eventos del acelerómetro para comportamiento de conducción y alarmas.
- Sube puntos en búfer tras una interrupción de conectividad para preservar el historial continuo y registros de cumplimiento.
- Transmite telemetría de sensores BLE emparejados para casos de uso como monitoreo de temperatura o estado de puertas en flujos de cadena de frío.
- Soporta comandos de control remoto y salidas para inmovilizadores, relevos o sirenas cuando la implementación y la configuración lo permiten.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en su endpoint público y detecta automáticamente qué protocolo está usando el rastreador, por lo que en la mayoría de los casos los usuarios no necesitan seleccionar el protocolo manualmente dentro de Plaspy. La configuración correcta del dispositivo para reportar a Plaspy es el paso principal requerido para la detección automática y la ingestión.

- Los dispositivos deben estar configurados para reportar al dominio o dirección IP del servidor Plaspy para que el tráfico llegue al endpoint de Plaspy.
- Plaspy acepta reportes de dispositivos en un único puerto compartido para todos los dispositivos soportados y determina automáticamente el protocolo usado por la conexión entrante.
- Cuando un TLW2-6BL apunta al endpoint de Plaspy y usa un transporte permitido, Plaspy ingerirá su telemetría sin necesidad de seleccionar el protocolo manualmente.
- Si un dispositivo no aparece en Plaspy, verifique que esté configurado para reportar al endpoint correcto de Plaspy y que el transporte seleccionado sea compatible.
- La detección automática simplifica la incorporación para integradores y operadores de flota al reducir la configuración por dispositivo dentro de la plataforma.

## Transporte y contexto de conexión

El TLW2-6BL puede configurarse para usar UDP o TCP según el soporte del dispositivo y las necesidades del despliegue, y debe apuntar al endpoint de red de Plaspy para la entrega de telemetría. Plaspy expone un único endpoint compartido para conexiones de dispositivos con el fin de agilizar la incorporación y la detección de protocolos.

- Dominio del servidor Plaspy: d.plaspy.com.
- IP del servidor Plaspy: 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El TLW2-6BL puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo de la configuración del dispositivo y capacidades del firmware.
- Elija UDP para menor overhead y patrones típicos de reporte de posición, o TCP cuando se prefiera entrega fiable y comportamiento de sesión, según las capacidades del dispositivo y las condiciones de red.
- Asegúrese de que el APN y la configuración celular del dispositivo permitan conexiones salientes al endpoint de Plaspy para evitar bloqueos o problemas de NAT.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo de mensajes, campos de telemetría disponibles y el comportamiento de almacenamiento en búfer; siempre anote la versión de firmware del dispositivo al validar compatibilidad.
- Revisiones de hardware o variantes regionales del modelo pueden alterar las bandas soportadas, capacidades BLE o comportamiento de E/S que afectan qué datos se reportan a Plaspy.
- El modo de transporte (UDP vs TCP) es configurable y debe coincidir con la configuración del dispositivo; verifique qué transporte usan sus dispositivos.
- Los comandos de configuración del lado del fabricante y los endpoints de reporte por defecto pueden variar por lote o programación del integrador; confirme la configuración del dispositivo antes del despliegue.
- El comportamiento de carga de datos en búfer y la capacidad máxima de almacenamiento offline dependen del firmware del dispositivo y deben validarse según su frecuencia de reporte y necesidades de retención.
- En caso de duda, realice una prueba de campo limitada para confirmar la cadencia de reportes, la entrega de alarmas y la integración de sensores BLE con su tenant de Plaspy.

## Por qué es importante entender el protocolo

Conocer cómo el TLW2-6BL se comunica con Plaspy ayuda a asegurar una incorporación confiable, reportes de ubicación precisos y un comportamiento de alarmas predecible en toda la flota. Una comprensión clara del protocolo reduce el tiempo de integración y facilita la resolución de problemas de conectividad, almacenamiento en búfer y telemetría.

- Acelera la configuración inicial al asegurar que los dispositivos apunten al endpoint y transporte correctos de Plaspy.
- Ayuda a diagnosticar reportes faltantes o retrasados comprobando transporte, APN y comportamiento del firmware frente a los flujos de protocolo esperados.
- Apoya la planificación de la capacidad de búfer y la frecuencia de reporte para cumplir requisitos de cumplimiento o reconstrucción de rutas.
- Permite el uso confiable de la telemetría de sensores BLE y la telemetría basada en E/S como combustible o ignición cuando estas entradas son relevantes para la operación.
- Reduce falsas alarmas y mejora la respuesta al entender cómo el dispositivo señala alarmas y transiciones de estado.

## Por qué usar Plaspy con este protocolo

Usar el TLW2-6BL con Plaspy brinda a los operadores de flota una forma práctica de combinar GNSS de alta precisión, conectividad celular resiliente y E/S de grado vehicular en un flujo operativo único. La plataforma de Plaspy ingiere la posición del dispositivo, el historial en búfer y la telemetría para que los equipos puedan monitorear vehículos en tiempo real, reconstruir rutas tras cortes y actuar ante alarmas como pérdida de energía, cambios de ignición o intentos de manipulación.

El modelo de conexión compartida de Plaspy y la detección automática de protocolos simplifican los despliegues a nivel de flota al reducir la configuración por dispositivo dentro de la plataforma. Para saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos más recientes sobre el protocolo del dispositivo, notas de firmware y revisiones de hardware del TLW2-6BL, consulte la documentación del fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
