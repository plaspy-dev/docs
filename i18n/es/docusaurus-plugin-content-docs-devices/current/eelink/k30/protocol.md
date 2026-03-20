---
slug: /eelink/k30/protocol
id: k30-protocol
sidebar_label: Protocol
title: EElink - K30 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo EElink K30 y cómo reporta a Plaspy para seguimiento wearable y monitoreo de seguridad
keywords:
  - Protocolo EElink K30
  - Protocolo GPS EElink K30
  - Protocolo de comunicación EElink K30
  - Protocolo de rastreo EElink K30
  - Compatibilidad EElink K30 Plaspy
  - Protocolo rastreador wearable EElink
  - Protocolo rastreador GPS K30
  - Protocolo seguimiento wearable Plaspy
  - Seguimiento de personal EElink
  - Protocolo SOS K30
---

# EElink - Protocolo K30

Esta página presenta el contexto público del protocolo para usar el rastreador wearable GPS EElink K30 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, qué ajustes de conexión emplea Plaspy y qué verificar al integrar la unidad en flujos de seguimiento. No reproduce detalles internos sensibles de firmware ni parsers del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza orientación práctica y no sensible, y recomienda consultar la documentación oficial de EElink para detalles específicos del equipo.

## Visión general del protocolo

El protocolo de comunicación del K30 regula cómo el dispositivo informa ubicación, estado y eventos a un servidor, y cómo la configuración remota llega de vuelta a la unidad. Para la integración con Plaspy, el protocolo posibilita la identificación, la telemetría y la entrega de eventos para que la plataforma pueda mostrar mapas, alertas e informes históricos.

- Permite que el K30 se identifique y envíe fijaciones de posición periódicas a Plaspy para uso en mapas y alertas.
- Transporta telemetría como estado de batería, activaciones de SOS, estado de movimiento y conteo de pasos para paneles e informes.
- Lleva notificaciones de eventos como entrada/salida de geocerca, batería baja y pulsaciones de SOS para que Plaspy dispare flujos de trabajo.
- Soporta mecanismos de configuración remota usados por plataformas y SMS para ajustar intervalos de reporte y alarmas.
- Permite métodos de posicionamiento alternativos como Wi Fi y LBS para alcanzar el servidor cuando la precisión GNSS es limitada.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar el tráfico de dispositivos en un único endpoint compartido y determinar automáticamente el protocolo correcto para su ingestión. En la mayoría de integraciones con el K30 no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de la plataforma.

- Los dispositivos reportan al endpoint de Plaspy d.plaspy.com, que resuelve a la dirección IP de la plataforma.
- Plaspy acepta conexiones entrantes de dispositivos en el puerto 8888 y usa ajustes de conexión consistentes para todos los dispositivos soportados.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los administradores normalmente no necesitan elegir una opción de protocolo si el dispositivo está configurado para reportar al endpoint de Plaspy.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy y usar el transporte soportado suele ser el único paso requerido para la detección.
- Si un dispositivo no logra conectarse o no es detectado, verificar los ajustes de reporte del dispositivo, la configuración APN y el comportamiento del firmware es la ruta de solución recomendada.

## Transporte y contexto de conexión

El K30 puede configurarse para comunicarse usando transportes IP comunes y debe apuntarse al endpoint de Plaspy para la ingestión en la plataforma. La elección de transporte y la resolución DNS o direccionamiento IP son opciones de configuración en el equipo o mediante las herramientas del fabricante.

- Plaspy acepta tanto conexiones UDP como TCP en el puerto 8888, dependiendo de lo que soporte el dispositivo y cómo esté configurado.
- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la dirección numérica del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración del equipo y de la plataforma.
- La selección de transporte UDP frente a TCP y cualquier comportamiento de keepalive depende de las capacidades del dispositivo y de la configuración del firmware.
- Para un funcionamiento confiable, asegúrese de que el APN del dispositivo y el registro en la red estén operativos y que el dispositivo pueda resolver o alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en la frecuencia de reporte, en los mensajes soportados y en los comandos de configuración remota; confirme siempre las notas de firmware del fabricante.
- Las revisiones de hardware o las variantes regionales pueden alterar las funcionalidades GNSS, Wi Fi o celulares disponibles y afectar cómo el dispositivo reporta ubicación.
- Algunas funciones descritas por EElink, como la voz bidireccional o el manejo de SOS, son tipos de eventos que el protocolo transmite a Plaspy, pero pueden requerir configuración adicional por parte del operador móvil o de la plataforma.
- La preferencia de transporte entre UDP y TCP puede influir en la confiabilidad y el consumo de batería; elija la opción recomendada para su despliegue y condiciones de red.
- Puede ser necesario usar ajustes del fabricante o comandos SMS para apuntar el dispositivo a d.plaspy.com o a la dirección IP de la plataforma.
- Valide la compatibilidad con la documentación de EElink y las notas de la versión cuando despliegue a escala.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a asegurar que el K30 reporte de manera confiable a Plaspy y que las alertas y la telemetría lleguen a tiempo para soportar los flujos de seguridad y monitoreo. Tener una noción práctica del contexto del protocolo reduce la fricción en la integración y acelera la resolución de problemas cuando los dispositivos están fuera de red o no reportan como se espera.

- Ayuda a verificar que el reporte del dispositivo esté configurado al endpoint y transporte correctos de Plaspy.
- Aclara qué telemetría y eventos recibirá la plataforma desde el dispositivo para diseñar alertas e informes.
- Facilita la depuración de problemas básicos de red y configuración antes de escalar al soporte del proveedor.
- Informa decisiones sobre intervalos de reporte y gestión de energía para equilibrar la vida útil de la batería y la frecuencia de actualización.
- Recomienda confirmar el comportamiento del firmware y la disponibilidad de funciones críticas como SOS y voz bidireccional.

## Por qué usar Plaspy con este protocolo

Usar el EElink K30 con Plaspy brinda a las organizaciones seguimiento liviano en wearables junto con alertas y reportes a nivel de plataforma, adecuado para seguridad infantil, cuidado de personas mayores, protección de trabajadores solitarios y monitoreo de personal. La combinación del K30 de posicionamiento por GPS, Wi Fi y LBS junto con eventos de SOS y voz bidireccional entrega la telemetría esencial que Plaspy necesita para presentar datos de ubicación e incidentes accionables.

Para saber más sobre Plaspy y cómo ingiere datos de rastreadores wearables visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; verifique los detalles más recientes del protocolo y del firmware específicos del dispositivo en el sitio del fabricante https://www.eelink.com.cn/.
