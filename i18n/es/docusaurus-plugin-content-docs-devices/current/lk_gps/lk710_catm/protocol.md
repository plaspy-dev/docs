---
slug: /lk_gps/lk710_catm/protocol
id: lk710_catm-protocol
sidebar_label: Protocol
title: LK-GPS - LK710-CatM Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del LK710-CatM y cómo se comunica con los servidores y endpoints de Plaspy
keywords:
  - LK-GPS LK710-CatM protocolo
  - protocolo GPS LK710-CatM
  - protocolo de rastreo LK-GPS
  - compatibilidad LK710-CatM Plaspy
  - protocolo de rastreador Plaspy
  - rastreo de vehículos LK710-CatM
  - rastreador GPS CatM Plaspy
  - protocolo de comunicación LK-GPS
  - integración de inmovilizador LK710-CatM
  - conexión de dispositivo Plaspy
---

# LK-GPS - Protocolo LK710-CatM

Esta página resume el contexto público del protocolo para usar el rastreador LK-GPS LK710-CatM con Plaspy. Está pensada para ayudar a usuarios técnicos e implementadores a comprender cómo se comunica el dispositivo con Plaspy y qué verificar al configurar rastreadores para flotas, alquileres o despliegues anti‑robo. El contenido se centra en el comportamiento de conexión y protocolo a alto nivel sin exponer detalles propietarios o sensibles de implementación.

El LK710-CatM es un rastreador compacto IP68 con conectividad Cat‑M, antena GPS y GSM integrada, controles remotos de inmovilizador, configuración por SMS e informe de batería. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre debe validar el comportamiento específico del equipo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo del rastreador es el método interno para empaquetar y enviar datos de posición, estado y eventos desde el LK710-CatM hacia un servidor. Con Plaspy, el protocolo permite que el dispositivo se identifique, informe coordenadas GPS y telemetría como estado de batería, y entregue eventos y comandos de inmovilizador para su visualización en el panel y para flujos de trabajo.

- Permite la transmisión en tiempo real de ubicación y telemetría a Plaspy para visualización y alertas
- Transporta la identificación del dispositivo y el estado, lo que permite a Plaspy asociar los datos con el activo correcto
- Transmite mensajes de control y eventos, como cambios de estado del inmovilizador y acuses de configuración
- Soporta reportes periódicos y consultas de ubicación bajo demanda según la configuración del dispositivo
- Opera sobre el enlace celular e independiente de la capa de presentación en los paneles de Plaspy

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y emplea lógica de detección para identificar automáticamente el protocolo del dispositivo. Dado que Plaspy administra un endpoint común de ingestión, por lo general no es necesario seleccionar manualmente un protocolo en la plataforma cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy acepta tráfico de dispositivos en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador
- Cuando el LK710-CatM apunta al endpoint de Plaspy, la plataforma asocia la conexión entrante con la cuenta y la identidad del dispositivo
- Una configuración correcta de la SIM y del APN, más los ajustes de reporte del dispositivo, ayudan a garantizar que la detección automática tenga éxito
- Si un dispositivo no se detecta automáticamente, revisar el destino de reporte y el modo de transporte del dispositivo es el primer paso de solución de problemas

## Contexto de transporte y conexión

Los detalles de conexión determinan cómo el LK710-CatM alcanza Plaspy y qué modo de transporte utiliza el rastreador. El dispositivo puede configurarse para usar UDP o TCP según sus capacidades y los requisitos del despliegue. Plaspy consume datos en un puerto único y consistente para todos los dispositivos compatibles con el fin de simplificar la configuración.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP 54.85.159.138 como destino de reporte
- Plaspy utiliza el puerto 8888 para todos los dispositivos, proporcionando un endpoint común entre familias de dispositivos
- La elección entre UDP o TCP afecta la semántica de entrega y el comportamiento de reintentos en la capa de transporte, pero no la detección del protocolo por parte de Plaspy
- Verifique APN, plan de datos de la SIM y conectividad radio cuando los dispositivos no lleguen al endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de mensajes, campos opcionales y comandos soportados; confirme las notas de la versión del firmware para el comportamiento específico del LK710-CatM
- Revisiones de hardware o variantes regionales pueden cambiar las bandas celulares soportadas o la configuración de radio, lo que afecta la conectividad
- Las opciones de configuración del fabricante, como intervalos de reporte, configuración por SMS y selección de transporte, influirán en cómo aparecen los datos en Plaspy
- Use UDP para reportes con menor sobrecarga cuando el dispositivo lo soporte y TCP cuando el entorno requiera mayor confiabilidad de conexión, según las necesidades del despliegue
- Plaspy detecta automáticamente el protocolo del rastreador, pero se requieren los ajustes de destino y transporte correctos en el dispositivo para una detección exitosa
- Siempre valide la compatibilidad contra la documentación oficial de LK-GPS para obtener los detalles más precisos y específicos del modelo

## Por qué es importante entender el protocolo

Comprender el protocolo del dispositivo y el contexto de conexión ayuda a agilizar la puesta en marcha, reducir errores comunes de configuración y asegurar un funcionamiento fiable a largo plazo al integrar rastreadores LK710-CatM con Plaspy. Tener conocimiento del protocolo también acelera la resolución de problemas cuando aparecen incidencias de conectividad o mapeo de datos.

- Garantiza que los ajustes de reporte del dispositivo apunten al endpoint y transporte correctos de Plaspy para la detección automática
- Ayuda a identificar si la ausencia de datos se debe a un problema de conectividad o a una configuración de firmware
- Orienta las decisiones sobre intervalos de reporte y cargas de telemetría para equilibrar la duración de batería y la fidelidad del rastreo
- Guía la elección entre UDP y TCP según las condiciones de red y las necesidades de fiabilidad
- Facilita la comunicación con el soporte de LK-GPS cuando el comportamiento del firmware o hardware requiere asistencia del proveedor

## Por qué usar Plaspy con este protocolo

Usar el LK710-CatM con Plaspy ofrece a las organizaciones una vía sencilla para obtener visibilidad en tiempo real de ubicación, telemetría y eventos de inmovilizador en interfaces móviles y web. El diseño compacto e impermeable del rastreador y la conectividad Cat‑M lo hacen adecuado para flotas mixtas, servicios de alquiler y despliegues de micromovilidad donde la instalación discreta y los reportes fiables son importantes.

El endpoint común de ingestión de Plaspy simplifica la incorporación de dispositivos al usar el mismo puerto para todos los equipos compatibles y la detección automática del protocolo. Una vez que el LK710-CatM esté configurado para reportar a d.plaspy.com en el puerto 8888 (UDP o TCP), Plaspy ingestará ubicación, batería y eventos de control para uso operativo. Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de LK-GPS en https://www.lk-gps.com.
