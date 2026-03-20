---
slug: /concox/ll303_pro/protocol
id: ll303_pro-protocol
sidebar_label: Protocol
title: Concox - LL303 Pro Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador Concox LL303 Pro y cómo se comunica con Plaspy para seguimiento confiable de activos
keywords:
  - protocolo Concox LL303 Pro
  - protocolo GPS Concox LL303 Pro
  - protocolo de comunicación Concox LL303 Pro
  - compatibilidad LL303 Pro Plaspy
  - protocolo rastreador GPS Concox
  - protocolo rastreador de activos
  - protocolo rastreo de vehículos
  - dispositivos compatibles con Plaspy
  - protocolo rastreador GPS solar
  - protocolo rastreador GNSS
---

# Concox - Protocolo LL303 Pro

Esta página explica el contexto público del protocolo para usar el Concox LL303 Pro con Plaspy. Se centra en cómo el equipo se comunica con Plaspy en términos generales, qué ajustes de conexión se emplean y qué debe considerarse al integrar el LL303 Pro en flotas gestionadas desde Plaspy. El LL303 Pro es un rastreador GNSS 4G con asistencia solar diseñado para despliegues prolongados en maquinaria pesada, equipo de construcción y embarcaciones; aquí se describe cómo su comportamiento de reporte se mapea a Plaspy sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos admitidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. Los puntos de conexión públicos de Plaspy son d.plaspy.com y 54.85.159.138 en el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP para reportar al puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el comportamiento observado en campo está sujeto a esas variables.

## Resumen del protocolo

El protocolo del rastreador define las reglas que el LL303 Pro utiliza para enviar posiciones GNSS, telemetría y notificaciones de eventos a un servidor remoto. Para la compatibilidad con Plaspy, el protocolo permite que el dispositivo se identifique, transmita datos de posición y sensores, y envíe disparadores de eventos de manera que Plaspy pueda interpretarlos sin requerir la exposición de internals del equipo.

- El protocolo determina cómo se empaquetan y transmiten las correcciones de ubicación y la telemetría de sensores para su mapeo e historial en Plaspy.
- La información de identificación y de sesión permite a Plaspy asociar los datos entrantes con el registro de activo correcto.
- El reporte de eventos cubre alertas como manipulación, vibración, batería baja y otros avisos que alimentan los flujos de trabajo y notificaciones en Plaspy.
- Los modos de reporte, por ejemplo reportes periódicos, reporte inteligente y ahorro de energía, determinan la frecuencia de actualizaciones y el impacto en la batería.
- La independencia de transporte permite que el mismo protocolo opere sobre UDP o TCP según la configuración y las condiciones de red.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para reconocer automáticamente el tráfico del rastreador cuando un LL303 Pro reporta al endpoint compartido de Plaspy. Usted generalmente no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta correctamente al servidor y al puerto de Plaspy.

- Plaspy acepta conexiones entrantes en d.plaspy.com y 54.85.159.138 en el puerto 8888.
- La plataforma recibe los reportes de dispositivos en el mismo puerto para todos los equipos soportados, lo que simplifica la configuración.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma coincide campos de identificación y patrones de mensaje para mapear los datos.
- La configuración correcta del dispositivo para apuntar al servidor Plaspy suele ser suficiente para la detección automática.
- Si un dispositivo no aparece, verificar los ajustes de transporte, el APN y la versión de firmware es un buen paso siguiente.

## Transporte y contexto de conexión

Los ajustes de conexión y transporte determinan cómo el LL303 Pro llega a Plaspy, pero no cambian el rol público del protocolo descrito aquí. El LL303 Pro soporta reportes celulares y puede usar UDP o TCP según la variante del modelo y la configuración; Plaspy recibe ambos en el mismo servidor y puerto.

- Los dispositivos pueden configurarse para enviar reportes a d.plaspy.com o a 54.85.159.138.
- Plaspy escucha en el puerto 8888 para todo el tráfico de dispositivos, y ese mismo puerto se usa en los rastreadores soportados.
- El LL303 Pro puede usar UDP o TCP en el puerto 8888 según la configuración de red del dispositivo y las capacidades del firmware.
- La selección de la red celular y los ajustes de APN deben ser correctos para que el dispositivo establezca conexión con Plaspy.
- La elección del transporte puede afectar el comportamiento de entrega en redes poco fiables; verifique que el transporte seleccionado se ajuste a sus necesidades operativas.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, campos opcionales o los modos de reporte soportados; siempre anote la versión de firmware del equipo.
- Las revisiones de hardware o las variantes regionales (para diferentes bandas LTE) pueden alterar los transportes soportados u opciones de telemetría.
- Las implementaciones del fabricante a veces ofrecen enmarcados o formatos de reporte configurables que afectan la compatibilidad.
- El comportamiento de sensores BLE y la telemetría de accesorios pueden requerir configuración adicional en el dispositivo para aparecer en Plaspy.
- Seleccionar UDP frente a TCP en el equipo puede influir en la retransmisión, pero ambos transportes son aceptados por Plaspy en el puerto 8888.
- Valide los ajustes del dispositivo y las notas de la versión del fabricante cuando despliegue a gran escala para evitar sorpresas.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo del rastreador facilita la puesta en marcha, reduce el tiempo de resolución de problemas y mejora la confiabilidad a largo plazo al usar el LL303 Pro con Plaspy. Saber qué envía el dispositivo, cómo se identifica y qué ajustes de conexión utiliza hace que la integración sea más fluida.

- Asegura el registro correcto del dispositivo y su mapeo dentro de Plaspy para una asociación precisa del activo.
- Ayuda a diagnosticar problemas de conectividad revisando transporte, APN y configuración del servidor.
- Orienta las decisiones de gestión de energía al alinear los modos de reporte con la batería y la recarga solar.
- Permite un manejo predecible de eventos al confirmar qué alertas reportará el dispositivo a Plaspy.
- Reduce el tiempo de despliegue al centrar la resolución de problemas en transporte y diferencias de firmware en lugar de la configuración de la plataforma.

## Por qué usar Plaspy con este protocolo

Usar el LL303 Pro con Plaspy ofrece una solución práctica para organizaciones que requieren visibilidad persistente de activos fuera de la red. La carga solar del rastreador, su gran capacidad de batería, la carcasa IP67 resistente y el rendimiento GNSS se combinan con el manejo de datos de Plaspy para entregar mapas en tiempo real, reproducción histórica y flujos de trabajo basados en eventos para flotas y activos de alto valor.

Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos como el LL303 Pro, visite https://www.plaspy.com. Para detalles específicos de protocolo más actuales, notas de firmware y orientación del fabricante, verifique la información en el sitio de Concox https://www.iconcox.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que revisar la documentación del fabricante garantiza la información más precisa para el despliegue.
