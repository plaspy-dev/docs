---
slug: /meitrack/tc68l/protocol
id: tc68l-protocol
sidebar_label: Protocol
title: Meitrack - TC68L Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del Meitrack TC68L y cómo comunica con Plaspy para rastreo y configuración
keywords:
  - Protocolo Meitrack TC68L
  - Protocolo GPS Meitrack TC68L
  - Compatibilidad TC68L Plaspy
  - Protocolo de comunicación TC68L
  - Protocolo rastreador GPS Meitrack
  - Rastreo vehicular TC68L
  - Protocolo de dispositivo Plaspy
  - Rastreador OBD Meitrack
  - Rastreo SOS TC68L
  - Protocolo rastreador OBD 4G
---

# Meitrack - Protocolo TC68L

Esta página describe el contexto público del protocolo para utilizar el Meitrack TC68L con Plaspy. Explica, en términos no sensibles, cómo el dispositivo comunica con Plaspy para reportar posición, datos OBD y eventos de estado como alertas de desconexión o señales SOS. La información está dirigida a integradores de sistemas, gestores de flotas y usuarios técnicos que necesiten comprender el papel comunicacional del rastreador sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El TC68L es un rastreador OBD II plug and play con 4G, WiFi y batería de respaldo interna, que ofrece funciones como SOS y reporte de datos OBD. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante validar la configuración del dispositivo frente a la documentación actual del fabricante.

## Resumen del protocolo

El protocolo que usa el TC68L define cómo el dispositivo se identifica, reporta posición e información OBD, y señaliza eventos como la extracción del conector OBD o la activación del botón SOS. A alto nivel, el protocolo hace que la telemetría del vehículo sea utilizable por una plataforma como Plaspy mediante el envío de actualizaciones de ubicación periódicas, notificaciones de eventos y datos diagnósticos opcionales.

- Permite al dispositivo reportar posición GPS, movimiento y datos de tiempo al servidor para seguimiento en tiempo real.
- Transporta métricas OBD y de estado del vehículo cuando están habilitadas, de forma que Plaspy pueda mostrar combustible, estado del motor e indicadores diagnósticos.
- Transmite alertas de eventos discretos como desconexión del OBD, pulsaciones del botón SOS o notificaciones de manipulación para activar atención inmediata.
- Permite que el dispositivo se identifique para que Plaspy asocie los datos entrantes con el registro y la configuración correctos.
- Soporta tanto reportes periódicos como mensajes basados en eventos para equilibrar visibilidad en tiempo real y consumo de energía.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos de los dispositivos en un endpoint compartido y determina automáticamente el protocolo de rastreador apropiado cuando la configuración es correcta. Normalmente usted no necesita seleccionar un protocolo manualmente dentro de Plaspy si el dispositivo apunta al servidor de Plaspy y usa el transporte y puerto soportados.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en un único puerto para todos los dispositivos con el fin de simplificar la configuración y el onboarding.
- Los dispositivos configurados para reportar al endpoint de Plaspy serán reconocidos y asociados automáticamente por la plataforma.
- La detección automática reduce la necesidad de selección manual del protocolo cuando el TC68L está configurado para enviar datos a Plaspy.
- Si un dispositivo no aparece, la primera medida de diagnóstico es verificar el endpoint de reporte, el protocolo de transporte y los ajustes de firmware del equipo.

## Transporte y contexto de conexión

El transporte y la elección del endpoint determinan cómo el TC68L llega a Plaspy, pero no cambian el rol público del protocolo en sí. El TC68L puede usar transportes de red estándar de la industria para enviar su telemetría y eventos al servidor de Plaspy.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Los dispositivos pueden apuntar al dominio de reporte de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, 8888, lo que simplifica la configuración en flotas mixtas.
- La elección entre UDP y TCP puede afectar las características de entrega y debe coincidir con el firmware del dispositivo y el entorno de red.
- Para la configuración inicial, asegúrese de que el host de reporte y el transporte coincidan con la configuración del dispositivo para que los mensajes lleguen a Plaspy de forma fiable.

## Notas de compatibilidad del protocolo

- El TC68L es compatible con Plaspy cuando se configura para reportar al endpoint de Plaspy, pero la versión de firmware y las variantes regionales de hardware pueden afectar el comportamiento exacto.
- Los ajustes del fabricante o los servidores de aprovisionamiento pueden cambiar los hosts de reporte por defecto; verifique que el dispositivo esté configurado para usar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas implementaciones pueden requerir seleccionar UDP o TCP en los menús del dispositivo; elija el transporte que soporte su firmware y su red.
- La disponibilidad de datos OBD depende del soporte del ECU del vehículo y de cómo el TC68L mapea los PID OBD en una versión de firmware concreta.
- Revisiones de hardware, firmware de operador o variantes regionales de radio pueden introducir diferencias sutiles; valide con un dispositivo de prueba.
- Consulte siempre la documentación del fabricante para notas específicas de firmware que afecten intervalos de reporte, generación de eventos o mapeo OBD.

## Por qué importa entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar un onboarding confiable del dispositivo, la interpretación correcta de la telemetría y una resolución eficiente de problemas durante el despliegue. Saber cómo el rastreador reporta posición, eventos y datos OBD mejora las decisiones de configuración y los resultados operativos al usar Plaspy.

- Onboarding más rápido confirmando de entrada el host de reporte y el transporte adecuados.
- Diagnóstico más claro cuando los mensajes no aparecen en Plaspy por desajustes de transporte o endpoint.
- Mejor gestión de firmware al reconocer cuándo las diferencias de funcionalidad se deben a firmware o variantes de hardware.
- Mapeo preciso de valores OBD y diagnósticos para que los paneles de flota muestren datos vehiculares significativos.
- Mejora en alertas y respuesta a incidentes al comprender cómo se reportan mensajes de evento como SOS o desconexión.

## Por qué usar Plaspy con este protocolo

Usar el Meitrack TC68L con Plaspy ofrece una vía directa para obtener visibilidad del vehículo y control operativo. El formato OBD II plug and play del TC68L, su batería de respaldo interna para reporte continuo, conectividad 4G y funciones de evento como SOS y alertas de desconexión lo hacen apropiado para seguimiento de flotas y vehículos personales. Cuando el TC68L se configura para reportar a Plaspy, la plataforma puede ingerir datos de ubicación, OBD y eventos y presentar esa información en paneles y alertas que ayudan a gestionar activos de forma más eficiente.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el Meitrack TC68L, visite https://www.plaspy.com. Para obtener detalles más recientes sobre especificaciones del protocolo TC68L, comportamiento de firmware e implementación del dispositivo, por favor verifique la información con el fabricante en https://www.meitrack.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
