---
slug: /queclink/gv355ceu/protocol
id: gv355ceu-protocol
sidebar_label: Protocol
title: QuecLink - GV355CEU Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar QuecLink GV355CEU con Plaspy, ajustes de conexión y notas de compatibilidad
keywords:
  - Protocolo QuecLink GV355CEU
  - Protocolo GPS QuecLink GV355CEU
  - Compatibilidad GV355CEU Plaspy
  - Protocolo de rastreo GV355CEU
  - Protocolo de rastreador vehicular QuecLink
  - Protocolo de rastreo de flotas
  - Tacógrafo DDD Plaspy
  - Protocolo de telemetría vehicular
  - Integración de protocolo QuecLink
  - Comunicación GV355CEU con Plaspy
---

# QuecLink - GV355CEU Protocolo

Esta página describe el contexto público del protocolo para utilizar el QuecLink GV355CEU con Plaspy. Se concentra en cómo el dispositivo se comunica con la plataforma Plaspy, qué ajustes de conexión son habituales y consideraciones prácticas de compatibilidad para gestores de flotas e integradores. No se incluyen aquí formatos de paquete técnicos ni detalles internos de firmware; para eso consulte al fabricante.

El GV355CEU es un rastreador LTE de alta precisión diseñado para gestión de flotas, con múltiples interfaces vehiculares y soporte de tacógrafo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para la conectividad Plaspy expone un único endpoint de ingestión para que los dispositivos apunten al dominio o IP del servidor de Plaspy y usen el puerto común empleado por todos los equipos.

## Resumen del Protocolo

El protocolo de reporte del rastreador es el conjunto de reglas y tipos de mensaje que el GV355CEU usa para identificarse ante un servidor y transmitir posiciones GNSS, telemetría del vehículo y datos de eventos. Integrado con Plaspy, el protocolo permite la entrega confiable de ubicación, datos CAN/OBD, archivos DDD de tacógrafo y notificaciones de eventos que Plaspy consume para ofrecer seguimiento, alertas e informes.

- Permite la identificación del dispositivo y el establecimiento de sesión para que Plaspy asocie los mensajes entrantes con el vehículo y la configuración correctos.
- Transporta reportes de posición GNSS, marcas de tiempo y estados de movimiento que Plaspy mapea a la ubicación en tiempo real y al historial.
- Lleva telemetría vehicular como parámetros CAN y OBDII, estados de entradas digitales y analógicas, y solicitudes o notificaciones relacionadas con el tacógrafo.
- Entrega mensajes de eventos para alarmas, activaciones de geocerca, cambios de ignición y otras actualizaciones de estado que usan las reglas y flujos de trabajo de Plaspy.
- Proporciona un mecanismo para comandos remotos y control de salidas iniciados desde Plaspy cuando el firmware del dispositivo lo soporta.

## Cómo Plaspy Detecta el Protocolo

Plaspy escucha en un único endpoint y puerto compartido los reportes de dispositivos y identifica automáticamente el protocolo del rastreador usado por las conexiones entrantes. Eso significa que, en la mayoría de los casos, un GV355CEU configurado correctamente que envíe datos al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy usa un endpoint de servidor compartido para que los dispositivos reporten a la misma dirección y puerto que usan todos los rastreadores compatibles.
- El endpoint de ingestión de Plaspy es accesible como d.plaspy.com y la IP pública es 54.85.159.138 para entornos que prefieran direccionamiento numérico.
- Plaspy acepta conexiones en el puerto 8888 y maneja automáticamente la detección del protocolo para dispositivos compatibles.
- Por lo general, los usuarios no necesitan elegir un protocolo en Plaspy cuando el dispositivo está configurado para reportar al endpoint y puerto de Plaspy.
- La detección automática reduce pasos de configuración al desplegar flotas mixtas con diferentes modelos de rastreadores.

## Transporte y Contexto de Conexión

El transporte y la elección de puerto determinan cómo el GV355CEU se conecta a la plataforma Plaspy. El dispositivo soporta opciones de transporte comunes y puede configurarse para apuntar a Plaspy mediante dominio o IP numérica, según su flujo de aprovisionamiento y las restricciones de la red móvil.

- El GV355CEU puede configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888, según los ajustes del dispositivo y el comportamiento de la red.
- Plaspy acepta reportes de rastreadores en d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto compartido 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de firewall y APN para las flotas.
- La selección de transporte (UDP vs TCP) puede afectar características de entrega como retransmisiones y comportamiento de sesión; elija el transporte que mejor se adapte a sus necesidades operativas y a la fiabilidad de la red.
- Al configurar los dispositivos, apunte el host de reporte del rastreador al endpoint de Plaspy y confirme que el equipo esté usando el puerto 8888 para el método de transporte elegido.

## Notas de Compatibilidad del Protocolo

- El comportamiento del protocolo puede variar entre versiones de firmware y cambiar con las actualizaciones del fabricante; verifique siempre las notas de la versión del firmware para identificar cambios en el protocolo.
- Las revisiones de hardware y los conjuntos de funciones (por ejemplo disponibilidad de distintos canales CAN o interfaces de tacógrafo) pueden afectar qué telemetría se reporta a Plaspy.
- Algunas implementaciones pueden requerir la selección entre transporte TCP o UDP según el comportamiento NAT del operador móvil y las características del APN.
- La recuperación de archivos DDD del tacógrafo y las funciones relacionadas pueden necesitar soporte firmware específico y configuración adicional tanto en el dispositivo como en Plaspy.
- Al actualizar firmware, valide nuevamente que el dispositivo continúe reportando correctamente a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Confirme que las utilidades de configuración del fabricante usadas para el aprovisionamiento no anulen el host de reporte o los ajustes de transporte requeridos para la integración con Plaspy.

## Por qué Es Importante Entender el Protocolo

Conocer los principios generales de cómo se comunica el GV355CEU ayuda a asegurar una integración fluida con Plaspy, reduce el tiempo de resolución de problemas de conectividad y favorece un funcionamiento fiable a largo plazo para servicios de flota y procesos de cumplimiento.

- Ayuda a diagnosticar conectividad verificando que el rastreador reporte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y utilice el transporte esperado.
- Orienta sobre la configuración correcta de APN y firewall en redes celulares para que los reportes lleguen a Plaspy de manera confiable.
- Permite validar que la telemetría requerida, como canales CAN, recuperación DDD del tacógrafo y entradas, esté disponible y mapeada a los reportes de Plaspy.
- Facilita la planificación de ventanas de actualización de firmware y la validación de cambios de comportamiento tras actualizaciones.
- Reduce la fricción en despliegues de flotas mixtas al comprender cómo Plaspy detecta automáticamente el protocolo y mapea los datos entrantes del dispositivo.

## Por qué Usar Plaspy con Este Protocolo

Usar el QuecLink GV355CEU junto con Plaspy proporciona a las flotas visibilidad consolidada de la ubicación del vehículo, horas de conductor mediante archivos DDD del tacógrafo, telemetría del motor y CAN, y alertas basadas en eventos. Esta combinación es adecuada para organizaciones que requieren posicionamiento preciso, flujos de cumplimiento normativo y diagnóstico vehicular detallado en una sola plataforma.

Para saber más sobre Plaspy y cómo se integran los dispositivos GV355CEU con la plataforma, visite https://www.plaspy.com. Para detalles más recientes específicos del dispositivo, notas de firmware e información sobre revisiones de hardware consulte la documentación oficial de QuecLink en https://www.queclink.com/ ya que el comportamiento del fabricante puede cambiar con el tiempo.
