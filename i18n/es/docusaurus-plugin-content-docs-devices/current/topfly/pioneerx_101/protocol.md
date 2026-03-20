---
slug: /topfly/pioneerx_101/protocol
id: pioneerx_101-protocol
sidebar_label: Protocol
title: TopFly - PioneerX 101 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TopFly PioneerX 101 para integrarlo con servidores Plaspy y parámetros de conexión compartidos
keywords:
  - protocolo TopFly PioneerX 101
  - protocolo GPS TopFly PioneerX 101
  - protocolo de comunicación PioneerX 101
  - protocolo de rastreo PioneerX 101
  - protocolo de rastreador GPS TopFly
  - rastreador compatible con Plaspy
  - protocolo de rastreo de flotas
  - integración de rastreador GPS con Plaspy
  - protocolo de telemática vehicular
  - protocolo de rastreo de activos
---

# TopFly - Protocolo PioneerX 101

Esta página describe el contexto público del protocolo para usar el rastreador GPS TopFly PioneerX 101 con Plaspy. Se concentra en cómo el dispositivo se comunica con los servidores de Plaspy, qué papel tiene el protocolo de reporte para entregar ubicación y telemetría, y cuáles son los ajustes de conexión compartidos que Plaspy utiliza para recibir los datos. El PioneerX 101 es un equipo compatible con Plaspy, diseñado para envíos frecuentes de posición, amplio buffer offline, carcasa resistente IP67, soporte de sensores BLE 5.0, comunicaciones celulares multiprotocolo y telemetría CAN opcional para datos vehiculares más completos.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint correcto. Para instalaciones con PioneerX 101, los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 usando el puerto 8888. El dispositivo puede operar sobre UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y no sensible del protocolo y en pautas prácticas de integración.

## Visión general del protocolo

El protocolo de comunicación del rastreador define cómo el PioneerX 101 se identifica, envía posiciones y telemetría, y reporta alarmas a un backend como Plaspy. En términos públicos, el protocolo es el acuerdo entre el dispositivo y el servidor que convierte las correcciones GNSS y las entradas de sensores en eventos accionables y en el historial almacenado en Plaspy.

- Transmite puntos GPS periódicos y telemetría para que Plaspy pueda mostrar ubicación en tiempo real, historial y eventos.
- Codifica la identidad y el estado del dispositivo para que Plaspy asocie los datos con el activo y la configuración correctos.
- Transporta alarmas y eventos de entradas, como encendido/apagado del vehículo, alertas de manipulación, lecturas de sensores BLE y avisos de pérdida de energía.
- Soporta buffering offline y reenvío masivo para que los puntos en cola almacenados durante cortes de red se sincronicen con Plaspy cuando vuelve la conectividad.
- Puede incluir comprobaciones o cifrado a nivel de transporte según lo provea el fabricante para proteger la integridad de los datos reportados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría de muchos modelos de rastreadores usando un endpoint consistente y determina automáticamente qué protocolo está usando un equipo cuando éste se conecta y envía reportes. Esto significa que la mayoría de los dispositivos PioneerX 101 no requieren selección manual de protocolo dentro de Plaspy si están configurados para reportar al endpoint de Plaspy.

- Usted debe configurar los dispositivos para que reporten a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto; Plaspy escucha en el puerto 8888 para los reportes entrantes.
- El PioneerX 101 puede ajustarse para usar UDP o TCP en el puerto 8888, según soporte del dispositivo y condiciones de la red móvil.
- Cuando un dispositivo correctamente configurado reporta al endpoint compartido, Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos con el tipo de dispositivo correspondiente.
- Generalmente, usted solo necesita asegurar que la configuración de reporte del dispositivo coincida con el endpoint y el transporte elegidos, y mantener el firmware actualizado.

## Transporte y contexto de conexión

Las elecciones de transporte y conexión determinan cómo la telemetría llega del PioneerX 101 a Plaspy. El dispositivo soporta múltiples opciones de transporte y Plaspy ofrece un único endpoint compartido para simplificar la configuración.

- El PioneerX 101 puede usar UDP o TCP en el puerto 8888 para enviar telemetría y actualizaciones de posición a Plaspy.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP numérica 54.85.159.138.
- Plaspy emplea el puerto 8888 para todos los rastreadores soportados, por lo que el mismo puerto aplica a diferentes modelos.
- El rastreador también puede usar canales alternos como MQTT o SMS cuando el dispositivo y la red lo soportan, pero TCP o UDP al endpoint de Plaspy es la vía principal para telemetría en vivo.
- Las redes y la configuración APN en el dispositivo deben permitir conexiones salientes al endpoint de Plaspy sobre el transporte elegido para asegurar reportes confiables.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar funciones disponibles y el comportamiento de los mensajes; confirme la versión de firmware al diagnosticar problemas de compatibilidad.
- Las revisiones de hardware o módulos opcionales, como CAN o accesorios BLE, pueden afectar qué campos de telemetría aparecen en los reportes hacia Plaspy.
- La elección de transporte (UDP vs TCP) puede influir en las características de entrega; elija el transporte que mejor se adapte a sus necesidades de implementación y a la configuración del dispositivo.
- El tamaño del buffer offline y el comportamiento de re-sincronización dependen de la configuración del dispositivo y del firmware; el PioneerX 101 incluye un buffer interno grande que ayuda con cobertura intermitente.
- Las opciones de seguridad y las comprobaciones de protocolo provistas por el fabricante pueden variar según el firmware y deben validarse contra la documentación del dispositivo.
- Siempre valide los ajustes de reporte del dispositivo para que el rastreador apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y utilice el transporte previsto.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a garantizar que los dispositivos reporten de forma confiable, que la telemetría sea interpretada correctamente por Plaspy y que las alertas y los controles remotos funcionen según lo esperado. Tener claro cómo se comunica el PioneerX 101 reduce el tiempo de configuración y mejora los resultados en la resolución de problemas.

- Asegura que la configuración de reporte del dispositivo esté orientada al endpoint y transporte correctos para que los mensajes lleguen al servidor.
- Facilita mapear entradas del dispositivo, sensores BLE y campos CAN opcionales en los paneles y reglas de eventos de Plaspy.
- Mejora la capacidad de diagnosticar reportes faltantes revisando transporte, firmware y conectividad APN.
- Ayuda a planificar actualizaciones de firmware y a entender diferencias de funciones que puedan afectar campos de datos o nombres de eventos.
- Orienta la elección de transporte para rastreo sensible a la latencia frente a opciones más fiables en redes con pérdida de paquetes.

## Por qué usar Plaspy con este protocolo

Usar el PioneerX 101 con Plaspy brinda ventajas prácticas para flotas y operadores de activos que necesitan actualizaciones frecuentes, comportamiento resiliente offline y telemetría ampliada. Plaspy recibe los reportes del dispositivo en un endpoint y puerto compartidos, detecta automáticamente el protocolo del rastreador y presenta ubicación, alarmas y datos de sensores en una plataforma unificada para monitoreo y análisis. El soporte del PioneerX 101 para arreglos de alta frecuencia, gran capacidad de buffer, sensores BLE y telemetría CAN opcional lo hace versátil para seguimiento vehicular, flujos anti robo, monitoreo de cadena de frío y proyectos de telemetría para vehículos eléctricos.

Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información actual del protocolo y del firmware del dispositivo con el fabricante en https://www.topflytech.com/.
