---
slug: /wanway/gs10g/protocol
id: gs10g-protocol
sidebar_label: Protocol
title: WanWay - GS10G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador WanWay GS10G y cómo se comunica con Plaspy para rastreo y telemetría de flotas
keywords:
  - Protocolo WanWay GS10G
  - Protocolo GPS WanWay GS10G
  - Compatibilidad WanWay GS10G Plaspy
  - Protocolo de comunicación WanWay GS10G
  - Protocolo de rastreo WanWay GS10G
  - Protocolo del rastreador WanWay
  - Rastreador GPS GS10G Plaspy
  - Rastreador vehicular WanWay GS10G
  - Protocolo identificación de conductor GS10G
  - Protocolo de gestión de flotas GS10G
---

# WanWay - Protocolo GS10G

Esta página ofrece contexto público sobre el protocolo para usar el rastreador GPS WanWay GS10G con Plaspy. Resume cómo el dispositivo reporta ubicación y eventos a Plaspy, qué puntos de conexión se usan y qué esperar durante la integración, sin exponer detalles privados de implementación. El objetivo es ayudar a equipos técnicos y a operadores de flota a comprender el contexto de comunicación necesario para que los dispositivos funcionen de forma fiable con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este informa a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en los aspectos públicos y no sensibles de cómo los equipos GS10G se comunican con Plaspy y qué validar durante la puesta en marcha.

## Resumen del protocolo

El GS10G transmite coordenadas GNSS, indicadores de estado y telemetría del vehículo a un servidor remoto donde Plaspy procesa los datos entrantes para seguimiento en tiempo real, alertas e informes. El protocolo permite que el dispositivo se identifique, envíe posiciones y eventos, y facilite que los sistemas del servidor generen información a nivel de conductor y vehículo.

- Transporta ubicación, hora y telemetría básica para que Plaspy muestre posición en vivo y recorridos históricos.
- Incluye banderas de eventos como encendido ACC, alarma por manipulación, exceso de velocidad y acciones del inmovilizador para alertas y reglas.
- Transmite datos de identificación del conductor desde la interfaz 1‑Wire para reportes basados en conductor y funciones de cumplimiento.
- Permite que Plaspy analice y mapee los valores reportados en eventos y telemetría de la plataforma sin requerir configuración específica del dispositivo por parte del usuario.
- Soporta reportes regulares y mensajes activados por eventos para que los equipos operativos reciban actualizaciones oportunas sobre incidentes y mantenimiento.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador a partir de los datos entrantes. En la mayoría de las integraciones con dispositivos configurados correctamente no es necesario seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy escucha en un único puerto para todos los rastreadores soportados y detecta automáticamente el protocolo que utiliza el dispositivo reportante.
- Los dispositivos deben apuntar al endpoint del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 al configurar el reporte.
- Cuando el GS10G envía sus primeros reportes a Plaspy, la plataforma identifica el patrón de datos y enruta los mensajes al canal de procesamiento adecuado.
- Usted normalmente solo debe asegurarse de que el dispositivo esté configurado para reportar al endpoint de Plaspy y que exista conectividad de red.
- La detección automática reduce la complejidad de la configuración y facilita poner los dispositivos en línea sin especificar manualmente un protocolo en la mayoría de los casos.

## Transporte y contexto de conexión

El transporte y el direccionamiento son aspectos de configuración que determinan cómo el GS10G alcanza Plaspy. El GS10G puede configurarse para usar UDP o TCP y debe apuntar al servidor y puerto que usa la plataforma.

- El dispositivo puede configurarse para conectar usando UDP o TCP en el puerto 8888, según el soporte del equipo y las configuraciones locales.
- El endpoint público de Plaspy es d.plaspy.com y la plataforma es accesible en la IP 54.85.159.138 para direccionamiento directo.
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración de firewall y red.
- Elija UDP para un reporte liviano unidireccional cuando esté soportado, o TCP cuando se prefiera una conexión persistente, según las capacidades del dispositivo y el entorno de red.
- Verifique que el APN de datos móviles y las reglas de salida permitan conexiones al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo de mensajes, los campos soportados o el reporte de eventos opcionales; confirme los detalles de firmware antes de desplegar masivamente.
- Las revisiones de hardware o variantes regionales del GS10G pueden habilitar o deshabilitar ciertas interfaces, como identificación de conductor por 1‑Wire o entradas adicionales.
- La selección de transporte (UDP vs TCP) depende del dispositivo; valide que la configuración de la unidad GS10G coincida con el transporte elegido en la red.
- Los comandos de configuración del fabricante y los destinos de reporte por defecto pueden variar; verifique que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP especificada.
- La detección automática de Plaspy maneja variaciones comunes, pero validar los primeros reportes después del despliegue ayuda a detectar desajustes rápidamente.
- Revise las notas de la versión del fabricante si un dispositivo se actualiza a un firmware nuevo para confirmar que no haya cambios que afecten la compatibilidad con Plaspy.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar el éxito desde el primer intento, agilizar la resolución de problemas y garantizar un comportamiento predecible a largo plazo cuando el GS10G se usa con Plaspy. Saber qué transporte y ajustes de reporte emplea el dispositivo reduce fricciones en la configuración y mejora la respuesta ante incidentes.

- Acelera la incorporación de dispositivos al asegurar el objetivo de servidor y el transporte correctos antes del despliegue.
- Reduce falsas alarmas y pérdida de datos al alinear el comportamiento del firmware con las expectativas de procesamiento de Plaspy.
- Mejora la resolución de problemas cuando aparecen cuestiones de conectividad, frecuencia de reporte o entrega de eventos en campo.
- Ayuda a los equipos operativos a planificar reglas de red y firewall, ya que Plaspy utiliza un solo puerto para todos los dispositivos.
- Facilita el control de cambios informado al actualizar firmware o modificar la configuración de dispositivos en una flota.

## Por qué usar Plaspy con este protocolo

Combinar el WanWay GS10G con Plaspy ofrece a los operadores de flota visibilidad en tiempo real de la ubicación del vehículo, la identidad del conductor y telemetría basada en eventos. El posicionamiento satelital del GS10G, la detección ACC, la identificación de conductor y las funciones antirrobo alimentan las capacidades de monitoreo, alertas e informes de Plaspy para apoyar despachos eficientes y flujos de trabajo de seguridad.

Para saber más sobre Plaspy y cómo la plataforma maneja integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y orientación del fabricante verifique la información de implementación en el sitio web de WanWay https://www.wanwaytech.net/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que revisar la documentación del fabricante asegura que cuente con los detalles más recientes de implementación del dispositivo.
