---
slug: /thingsys/ts_p4b/protocol
id: ts_p4b-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador ThingSys TS P4B y cómo se comunica con Plaspy para rastreo confiable de flotas y activos
keywords:
  - Protocolo ThingSys TS-P4B
  - Protocolo GPS ThingSys TS-P4B
  - Compatibilidad TS-P4B con Plaspy
  - Protocolo de comunicación TS-P4B
  - Protocolo de rastreo TS-P4B
  - Compatibilidad de dispositivos Plaspy
  - Integración rastreador GPS Plaspy
  - Protocolo rastreador GPS magnético
  - Protocolo rastreador GPS de larga batería
  - Protocolo rastreador GPS 2G
---

# ThingSys - Protocolo TS-P4B

Esta página ofrece una visión pública y no sensible del contexto de comunicación del ThingSys TS-P4B cuando se utiliza con Plaspy. Explica cómo el rastreador informa ubicación y telemetría a Plaspy, los ajustes de conexión compartidos que usa la plataforma y las implicaciones prácticas que importan durante la puesta en marcha y la resolución de problemas.

El TS-P4B es un rastreador magnético con batería de gran capacidad, posicionamiento GNSS por u-blox, detección de movimiento basada en acelerómetro, monitoreo de voz remoto y conectividad celular 2G. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles específicos del dispositivo deben confirmarse con la documentación de ThingSys.

## Resumen del protocolo

El protocolo que utiliza el TS-P4B define cómo el dispositivo envía fijaciones GNSS, estado de movimiento y sensores, telemetría de batería y notificaciones de eventos a un servicio backend. En términos prácticos, el protocolo permite que el rastreador se identifique, transmita datos de ubicación y estado utilizables, y reciba configuración remota o comandos cuando el dispositivo y la red lo permiten.

- Transmite informes de posición GNSS y marcas de tiempo que Plaspy utiliza para seguimiento en vivo y rutas históricas.
- Envía telemetría del dispositivo como nivel de batería, estado de movimiento detectado por el acelerómetro y alertas básicas de sensores.
- Permite que el dispositivo reporte actualizaciones por eventos como inicio de movimiento, manipulación, batería baja y latidos periódicos.
- Soporta entrega por aire de comandos o configuraciones mínimas cuando el firmware del fabricante expone esa capacidad.
- Proporciona los identificadores necesarios para que Plaspy pueda asociar los datos entrantes con el activo y la cuenta de usuario correctos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint compartido y detecta el protocolo del rastreador automáticamente, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente dentro de Plaspy cuando el equipo está configurado correctamente. Los dispositivos correctamente dirigidos serán reconocidos y parseados por Plaspy para que ubicación y eventos aparezcan en la plataforma sin selección de protocolo adicional.

- El dominio del servidor de Plaspy para reportes de dispositivo es d.plaspy.com
- La dirección IP del servidor de Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles
- Los dispositivos pueden configurarse para usar UDP o TCP según la capacidad del equipo
- Cuando un TS-P4B reporta al endpoint de Plaspy, la plataforma intenta identificar y decodificar el protocolo automáticamente
- Por lo general usted solo necesita asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy y que ajustes de red como la APN sean correctos

## Transporte y contexto de conexión

Las elecciones de conexión, como UDP frente a TCP y la configuración correcta del destino, son detalles prácticos clave para el envío de reportes. El TS-P4B soporta conectividad celular 2G y puede configurarse para enviar sus reportes al endpoint de Plaspy usando el transporte soportado en el puerto 8888.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la estabilidad de la red
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto 8888 para reportes
- Asegúrese de que la APN y la configuración de la SIM permitan conexiones salientes al endpoint de Plaspy
- Firewalls y NAT en redes del cliente deben permitir salidas UDP o TCP al puerto 8888 para alcanzar Plaspy
- La selección del transporte puede afectar las garantías de entrega y el impacto en la batería según el comportamiento del firmware

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la frecuencia de mensajes, los campos de telemetría disponibles y el comportamiento de comandos remotos
- Las variantes de hardware o lotes de producción pueden diferir en funciones soportadas como monitoreo de voz o umbrales de sensores
- Los ajustes predeterminados del fabricante para intervalo de reporte y transporte pueden requerir modificación para la integración con Plaspy
- El entorno de red y la cobertura 2G influyen en la fiabilidad de los reportes y el tiempo para obtener fijación GNSS
- Valide siempre que el dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 y use el transporte previsto
- Verifique la compatibilidad de funciones avanzadas como configuración remota con la documentación oficial de ThingSys

## Por qué es importante entender el protocolo

Comprender de forma clara y práctica cómo se comunica el TS-P4B ayuda a asegurar un despliegue fiable con Plaspy y reduce el tiempo dedicado a solucionar problemas de conectividad, duración de batería y comportamiento de eventos. Incluso cuando Plaspy detecta el protocolo automáticamente, saber qué envía el dispositivo y cuándo lo hace permite tomar decisiones operativas más acertadas.

- Confirma que los intervalos de reporte y los disparadores de eventos del dispositivo están alineados con las necesidades operativas
- Ayuda a diagnosticar reportes perdidos revisando transporte, APN y configuración del endpoint
- Orienta las expectativas de duración de batería según la frecuencia de reportes y uso de sensores
- Permite mapear con precisión eventos del dispositivo como movimiento, manipulación y batería baja dentro de los flujos de trabajo de Plaspy
- Simplifica la coordinación con el soporte de ThingSys cuando aparecen diferencias por firmware o comportamiento
- Apoya la planificación de cobertura, horarios de mantenimiento y estrategias de monitoreo remoto

## Por qué usar Plaspy con este protocolo

Usar el TS-P4B con Plaspy brinda a las organizaciones acceso a ubicación en tiempo real consistente, telemetría y alertas sin requerir configuración de puerto por dispositivo. El endpoint compartido de Plaspy y la detección automática de protocolo facilitan la incorporación de rastreadores magnéticos de larga duración como el TS-P4B para visibilidad de flotas y activos, flujos de trabajo anti robo y despliegues a largo plazo que se benefician de menos visitas de servicio.

Para obtener más información sobre la integración de despliegues TS-P4B con Plaspy visite https://www.plaspy.com. Para la información más actual sobre protocolo específica de dispositivo y firmware, verifique los detalles en el sitio del fabricante https://www.thingsys.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
