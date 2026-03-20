---
slug: /concox/ll301/protocol
id: ll301-protocol
sidebar_label: Protocol
title: Concox - LL301 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox LL301 y cómo se comunica con Plaspy para rastreo GPS y telemetría confiables
keywords:
  - protocolo Concox LL301
  - protocolo GPS Concox LL301
  - protocolo de rastreo LL301
  - protocolo del rastreador GPS Concox
  - rastreadores compatibles con Plaspy
  - integración LL301 con Plaspy
  - comunicación de rastreador de activos
  - protocolo GPS gestión de flotillas
  - rastreo de vehículos Concox LL301
  - protocolo de comunicación LL301
---

# Concox - Protocolo LL301

Esta página ofrece una visión pública del protocolo para usar el Concox LL301 con Plaspy. Se centra en cómo el dispositivo reporta posición, telemetría y alertas de eventos a un endpoint de Plaspy, y en cuáles son los aspectos clave de la comunicación para una integración confiable. El LL301 es un rastreador GNSS para activos con 4G LTE Cat 1, diseñado para despliegues prolongados con batería de alta capacidad y carcasa IP65, y es compatible con Plaspy desde su configuración inicial.

Plaspy utiliza configuraciones de conexión compartidas para todos los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y el tiempo de envío pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto general de comunicación y recomienda verificar detalles específicos de firmware con la documentación del proveedor.

## Descripción general del protocolo

El protocolo de comunicación del LL301 define cómo el rastreador envía fijaciones GNSS, telemetría de sensores y alertas de eventos a un servidor remoto para que Plaspy pueda mostrar y procesar esa información. El protocolo permite que el dispositivo se identifique, reporte datos útiles de ubicación y estado, y genere eventos sobre los que los operadores de Plaspy pueden actuar.

- Permite la transmisión de posiciones GNSS y telemetría básica para mapeo y reproducción histórica.
- Envía alertas de eventos como manipulación, retiro de tapa, vibración y batería baja al servidor.
- Proporciona identidad y estado del dispositivo para que Plaspy asocie los datos con el activo correcto.
- Soporta modos de reporte periódicos y basados en eventos para equilibrar la frecuencia de actualización y la vida útil de la batería.
- Permite configuración remota y aprovisionamiento mediante herramientas del proveedor o Bluetooth local cuando aplique.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador a partir de los datos que envía el dispositivo. En la mayoría de los casos, un LL301 correctamente configurado que reporte a Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo en la plataforma.

- Plaspy escucha en un endpoint unificado, por lo que los dispositivos no requieren puertos separados por modelo.
- La plataforma asocia automáticamente los mensajes recibidos con la familia de protocolos correcta cuando llegan los datos.
- Por lo general, usted solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy y asegurarse de que los ajustes de transporte sean correctos.
- Cuando los mensajes incluyen identidad del dispositivo y los campos de telemetría esperados, Plaspy puede validar y asociar la alimentación de datos.
- Si un dispositivo no parece reportar correctamente, verificar el destino de reporte y el transporte es el primer paso de resolución de problemas.

## Transporte y contexto de conexión

El LL301 puede configurarse para enviar datos por UDP o TCP según el firmware y la configuración del equipo. Para la integración con Plaspy, el dispositivo debe apuntar al endpoint del servidor de Plaspy para que las actualizaciones de posición y los eventos se reciban de forma fiable.

- El dominio del servidor Plaspy es d.plaspy.com para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del operador.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en despliegues con modelos mixtos.
- Use las herramientas de aprovisionamiento del dispositivo o la configuración por Bluetooth para establecer el host de reporte y el transporte en el LL301.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los intervalos de reporte, los campos disponibles y los modos de transporte soportados; verifique las notas de firmware para el comportamiento exacto.
- Las variantes de hardware y los modelos celulares regionales pueden mostrar comportamientos de red diferentes o opciones de conmutación que afectan la fiabilidad del reporte.
- Las configuraciones predeterminadas del fabricante pueden apuntar a una nube del proveedor; asegúrese de que el LL301 esté configurado para reportar a d.plaspy.com o a la IP de Plaspy para una integración directa.
- Elegir UDP frente a TCP puede afectar la entrega y la retransmisión de mensajes; seleccione el transporte que se ajuste a sus requisitos de fiabilidad y presupuesto de energía.
- La detección automática de Plaspy reduce la necesidad de seleccionar manualmente el protocolo, pero es requisito que el dispositivo tenga configurados correctamente el host y el transporte.
- Para funciones avanzadas o comandos, consulte la documentación del proveedor del dispositivo para confirmar soporte y dependencias de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LL301 ayuda a operadores e integradores a garantizar una configuración exitosa, un comportamiento de reporte predecible y una resolución de problemas eficiente cuando los dispositivos se despliegan con Plaspy. Saber qué campos y eventos puede enviar el rastreador y cómo se conecta a Plaspy reduce el tiempo de puesta en marcha y mejora la fiabilidad operativa.

- Garantiza la correcta configuración de host, transporte y modo de reporte para la frecuencia de actualización esperada.
- Ayuda a interpretar alertas como manipulación, vibración y batería baja para que los flujos de trabajo en Plaspy se disparen correctamente.
- Orienta los pasos de resolución cuando un dispositivo no aparece en Plaspy o reporta datos incompletos.
- Apoya decisiones de gestión de energía al elegir modos de reporte que extiendan la vida de la batería.
- Facilita la planificación en despliegues con flotas mixtas al aclarar qué variantes de dispositivo soportan la telemetría requerida.

## Por qué usar Plaspy con este protocolo

Usar el Concox LL301 con Plaspy ofrece una solución práctica para organizaciones que requieren larga autonomía de batería, hardware robusto y telemetría confiable para rastreo de activos. Plaspy recibe fijaciones GNSS y alertas de eventos del LL301 para que los operadores puedan monitorear activos en tiempo real, revisar recorridos históricos y recibir notificaciones accionables por manipulación o batería baja.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el LL301 visite https://www.plaspy.com. Para obtener los detalles más recientes sobre el protocolo específico del dispositivo, comportamiento de firmware y notas oficiales de implementación, verifique la información con el fabricante en https://www.iconcox.com/.
