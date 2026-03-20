---
slug: /queclink/gb100/protocol
id: gb100-protocol
sidebar_label: Protocol
title: QuecLink - GB100 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del QuecLink GB100 y cómo se comunica con Plaspy para seguimiento y telemetría confiables
keywords:
  - QuecLink GB100 protocolo
  - Protocolo GPS QuecLink GB100
  - Compatibilidad QuecLink GB100 Plaspy
  - Protocolo rastreador GB100
  - Rastreo vehicular GB100
  - Comunicación telemática GB100
  - Soporte rastreador Plaspy
  - Rastreo de flotas QuecLink
  - Compatibilidad telemetría GB100
  - Integración GPS rastreador Plaspy
---

# QuecLink - Protocolo GB100

Esta página ofrece una visión pública y de alto nivel del contexto del protocolo de comunicación del QuecLink GB100 cuando se utiliza con Plaspy. Se centra en cómo el equipo reporta telemetría y eventos a Plaspy y en qué papel juega el protocolo del dispositivo para entregar datos de posición y comportamiento útiles para paneles, alertas y análisis. La información está dirigida a administradores, integradores y evaluadores técnicos que desean comprender las consideraciones de conexión y protocolo sin exponer detalles de implementación sensibles.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del GB100, la revisión de hardware y la configuración del fabricante, por lo que se recomienda validar periódicamente contra la configuración del dispositivo y la documentación del fabricante.

## Resumen del protocolo

El GB100 comunica la posición del vehículo, velocidad, eventos del acelerómetro y telemetría de estado a una plataforma back end usando su protocolo de reporte. Ese protocolo define cómo el rastreador se identifica, qué campos de telemetría se entregan y cómo se transportan los mensajes para que Plaspy pueda ingerir y presentar los datos de forma confiable.

- Proporciona identidad del equipo y cargas útiles de telemetría que permiten a Plaspy asociar mensajes con un vehículo y una cuenta de cliente.
- Envía actualizaciones periódicas de posición e informes de eventos como alertas del acelerómetro, estado de energía y disparos de geocerca para el procesamiento en Plaspy.
- Admite reintentos y almacenamiento en buffer local en el dispositivo para preservar mensajes durante cortes temporales de red y entregarlos a Plaspy cuando se restablece la conectividad.
- Permite intervalos de reporte configurables y mensajes impulsados por eventos para que el rastreador equilibre fidelidad de datos y uso de la red según las necesidades del despliegue.
- Funciona sobre transporte IP estándar para que Plaspy reciba datos en casi tiempo real para mapas en vivo, alertas y análisis.

## Cómo detecta Plaspy el protocolo

Plaspy expone un único endpoint y puerto compartido para la conectividad de dispositivos e identifica automáticamente el protocolo del rastreador cuando llega telemetría. Esto elimina la necesidad de que la mayoría de los usuarios seleccionen manualmente un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El endpoint público del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para direccionamiento directo.
- Todos los dispositivos reportan al mismo puerto de Plaspy y Plaspy usa ese puerto común para recibir datos y detectar el protocolo entrante.
- Cuando un GB100 está configurado para apuntar al endpoint de Plaspy y enviar telemetría, Plaspy intentará reconocer el formato del mensaje y asociar el dispositivo automáticamente.
- La integración típica no requiere selección manual de protocolo en Plaspy si la configuración del dispositivo coincide con el endpoint y los ajustes de transporte de Plaspy.
- Si un dispositivo no se detecta automáticamente, revisar la configuración del servidor en el equipo, el modo de transporte y la compatibilidad de firmware es un siguiente paso práctico.

## Contexto de transporte y conexión

El GB100 soporta múltiples métodos de transporte y direccionamiento de servidor flexible para que pueda configurarse y alcanzar Plaspy desde distintos entornos de red. El contexto de conexión se refiere principalmente a cómo el dispositivo envía sus mensajes más que a la estructura interna de los paquetes.

- El GB100 puede configurarse para usar UDP o TCP en el puerto 8888 según ajustes del equipo y políticas de red.
- Los dispositivos destinados a Plaspy deben apuntar a d.plaspy.com o a la dirección IP 54.85.159.138 para que la telemetría llegue al endpoint de Plaspy.
- Plaspy recibe datos en un único puerto compartido (8888) para todos los dispositivos soportados, lo que simplifica la provisión de equipos a escala.
- La selección de transporte (UDP vs TCP) afecta las garantías de entrega y el comportamiento durante conectividad deficiente; elija el modo que se ajuste a las limitaciones del despliegue y a las capacidades del firmware del dispositivo.
- El dispositivo puede soportar SMS u otros canales de respaldo para alertas críticas si la conectividad IP no está disponible, pero el transporte IP hacia Plaspy es el canal principal para telemetría en vivo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos de telemetría disponibles, el comportamiento de reporte por defecto y los modos de transporte soportados; verifique la versión de firmware instalada en el GB100.
- Las revisiones de hardware o variantes regionales pueden afectar el rendimiento de la antena, el soporte de bandas GSM y el comportamiento de monitoreo de energía aun cuando el protocolo de alto nivel sea similar.
- Las herramientas de configuración del fabricante y los comandos de aprovisionamiento influyen en lo que el dispositivo reporta y con qué frecuencia; utilice la guía de configuración oficial de QuecLink cuando apunte a Plaspy.
- La elección de transporte (TCP vs UDP) debe validarse tanto en el dispositivo como en entornos de red como las redes de operadores móviles y firewalls.
- El enfoque de puerto compartido de Plaspy simplifica la incorporación, pero se requiere la dirección de servidor correcta (d.plaspy.com o 54.85.159.138) y la configuración de transporte adecuada para la detección automática.
- Confirme el comportamiento de almacenamiento en buffer y reintentos del dispositivo para asegurar que no se pierda telemetría durante brechas de cobertura prolongadas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GB100 ayuda a administradores e integradores a garantizar un flujo de datos confiable, acelerar la resolución de problemas y optimizar la configuración del dispositivo para despliegues a escala de flota. Tener expectativas claras sobre el protocolo reduce el tiempo de integración y mejora la consistencia de la telemetría que llega a Plaspy.

- Le ayuda a validar que el dispositivo está configurado para reportar a d.plaspy.com o a la IP y puerto correctos de Plaspy 54.85.159.138:8888.
- Facilita el diagnóstico de problemas de entrega comprobando el modo de transporte, la conectividad de red y el comportamiento de buffer del dispositivo.
- Orienta las decisiones sobre la frecuencia de reporte y los umbrales de eventos para equilibrar volumen de datos y costos de batería o plan de datos.
- Ayuda a evaluar cómo las actualizaciones de firmware pueden cambiar el contenido o el comportamiento de los mensajes y qué pruebas son necesarias antes de despliegues amplios.
- Apoya la planificación de canales de respaldo como SMS si el despliegue requiere notificaciones garantizadas bajo condiciones de red severas.

## Por qué usar Plaspy con este protocolo

Usar el GB100 con Plaspy proporciona a las organizaciones acceso a ubicación en tiempo real, telemetría de comportamiento de conductores y datos de eventos que son valiosos para operaciones de flotas, programas UBI y monitoreo de activos. La capacidad de Plaspy para detectar automáticamente rastreadores compatibles y recibir telemetría consistente a través de un endpoint compartido reduce la carga de integración en despliegues a gran escala.

Aprenda más sobre cómo Plaspy puede ingerir telemetría del GB100 y soportar paneles, alertas y análisis en https://www.plaspy.com. Para los detalles más actuales específicos del dispositivo, notas de firmware e instrucciones oficiales de configuración verifique la información en el sitio del fabricante https://www.queclink.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
