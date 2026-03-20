---
slug: /tk_star/tk970/protocol
id: tk970-protocol
sidebar_label: Protocol
title: TK-Star - TK970 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TK-Star TK970 y cómo se comunica con Plaspy usando ajustes compartidos para seguimiento confiable de flotas
keywords:
  - Protocolo TK-Star TK970
  - Protocolo GPS TK970
  - Protocolo de comunicación TK970
  - Protocolo de seguimiento TK970
  - Rastreador compatible con Plaspy
  - Seguimiento de flotas TK970
  - Telemática TK970
  - Rastreador GPS para vehículos TK970
  - Protocolo TK970 Plaspy
  - Integración de dispositivo TK970
---

# TK-Star - Protocolo TK970

Esta página describe el contexto público del protocolo para usar el rastreador TK-Star TK970 con Plaspy. Se centra en cómo el dispositivo transmite datos útiles de posición y eventos a la plataforma Plaspy sin exponer detalles privados de implementación. El contenido está pensado para integradores, instaladores y operadores técnicos que necesiten comprender el papel del protocolo de comunicación al conectar unidades TK970 a Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al servidor. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que utilice esta página como una guía general de integración y no como un manual específico de firmware.

## Resumen del protocolo

El protocolo de comunicación del TK970 regula cómo el equipo informa coordenadas GNSS, posicionamiento alternativo (LBS y Wi‑Fi) y eventos telemáticos a un servidor remoto. En la práctica, el protocolo asegura que el rastreador pueda identificarse ante el servidor, transmitir actualizaciones periódicas y basadas en eventos, y permitir que plataformas servidoras como Plaspy interpreten y presenten esa información para seguimiento y alertas.

- Permite que el TK970 entregue informes de posición, eventos de movimiento y vibración, señales SOS y cambios en el estado de relés a Plaspy.
- Proporciona una forma consistente para que el dispositivo se identifique y Plaspy asocie los datos entrantes al registro correcto del activo.
- Transporta telemetría que Plaspy usa para mapeo en tiempo real, alertas por geocercas, almacenamiento de rutas históricas y acciones de control remoto.
- Funciona con métodos de respaldo celular como LBS y datos Wi‑Fi para mejorar la cobertura en interiores o en cañones urbanos.
- Está influenciado por el firmware y la configuración del dispositivo, que determinan intervalos de reporte, umbrales de eventos y qué campos telemáticos se incluyen.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador cuando un equipo configurado correctamente se conecta y envía datos. Esto significa que la mayoría de los instaladores no necesitan seleccionar manualmente un protocolo en Plaspy si el rastreador está apuntando al endpoint y puerto correctos de Plaspy.

- El endpoint público de Plaspy es accesible en d.plaspy.com y en la dirección IP 54.85.159.138 para enrutamiento directo.
- Todos los dispositivos en Plaspy usan el mismo puerto de servidor, lo que simplifica la configuración entre distintos modelos.
- Plaspy escucha en el puerto 8888 y acepta conexiones de dispositivos sobre el modo de transporte soportado.
- Cuando un TK970 está configurado para reportar al endpoint de Plaspy, la plataforma detectará y mapeará los datos entrantes al dispositivo de forma automática.
- Si un equipo no aparece en línea, confirme los ajustes de red, la configuración del APN y que el dispositivo esté reportando a d.plaspy.com o a la IP indicada.

## Contexto de transporte y conexión

El contexto de conexión se refiere al transporte de red y al destino que usa el TK970 para enviar sus reportes. El TK970 puede configurarse para distintos modos celulares y puede transmitir por UDP o TCP según el firmware del dispositivo y las opciones del instalador.

- El TK970 puede configurarse para usar UDP o TCP y enviar datos a Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar al servidor Plaspy mediante el dominio d.plaspy.com o directamente a la IP 54.85.159.138 cuando el entorno de red lo requiera.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que reduce la complejidad de configuración en flotas mixtas.
- Elija UDP para una transmisión más simple y de menor sobrecarga cuando el dispositivo y la red sean estables; TCP puede usarse cuando se prefiera la confiabilidad de sesión, siempre que el dispositivo lo soporte.
- Asegúrese de que el APN y los ajustes celulares del TK970 sean correctos para que la unidad pueda establecer conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Se reporta que el TK970 es compatible con Plaspy, pero las funciones y campos de datos disponibles dependen del build de firmware instalado y de la variante regional de hardware.
- Las revisiones de hardware y las variantes regionales celulares (por ejemplo, diferencias en bandas LTE) pueden afectar qué transporte o comportamientos de reporte están disponibles.
- Algunas versiones de firmware pueden modificar los intervalos de reporte por defecto, prioridades de eventos o habilitar campos telemáticos adicionales; confirme siempre el comportamiento después de una actualización OTA o manual de firmware.
- Al integrar múltiples dispositivos, utilice los ajustes consistentes del endpoint de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888) para minimizar errores de configuración.
- La documentación del fabricante y las notas de la versión son la mejor fuente para comandos específicos del dispositivo e historial de cambios de firmware.
- Si un dispositivo no se comporta como se espera, verifique tanto la conectividad de red como que el equipo esté configurado para enviar datos a Plaspy usando el transporte y endpoint correctos.

## Por qué es importante entender el protocolo

Tener un conocimiento práctico del protocolo de comunicación del TK970 ayuda a asegurar instalaciones exitosas, reportes confiables y una resolución de problemas efectiva en la plataforma Plaspy. Saber qué envía el dispositivo y cómo lo recibe Plaspy reduce el tiempo de puesta en marcha y mejora la confiabilidad operativa en despliegues de flota.

- Ayuda a los instaladores a confirmar servidor, transporte y ajustes de APN correctos para poner los equipos en línea rápidamente.
- Facilita el diagnóstico de telemetría faltante o huecos en los reportes al verificar si los informes llegan a d.plaspy.com en el puerto 8888.
- Permite tomar decisiones informadas sobre cuándo usar UDP frente a TCP según las condiciones de red y las necesidades de confiabilidad.
- Apoya la planificación de actualizaciones de firmware y la validación de que nuevos builds mantienen el comportamiento de reporte requerido por Plaspy.
- Permite a los operadores de flota mapear eventos del dispositivo como SOS, estado de relés y alarmas por vibración a las reglas de alerta de Plaspy de manera efectiva.

## Por qué usar Plaspy con este protocolo

Usar el TK-Star TK970 con Plaspy ofrece una vía práctica para consolidar datos de posición y eventos en una única plataforma de gestión de flotas. El factor de forma compacto del TK970, su posicionamiento multinodo y sus funciones de seguridad se complementan naturalmente con el seguimiento en tiempo real, las alertas y los informes históricos de Plaspy para soportar anticipo de robo, gestión de alquileres y operaciones de flotas mixtas.

Para conocer más sobre Plaspy y cómo soporta la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos y actuales sobre protocolo y firmware del dispositivo, consulte la documentación del fabricante en https://www.tk-star.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con las fuentes oficiales.
