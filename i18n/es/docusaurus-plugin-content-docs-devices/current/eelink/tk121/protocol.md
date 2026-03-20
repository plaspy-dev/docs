---
slug: /eelink/tk121/protocol
id: tk121-protocol
sidebar_label: Protocol
title: EElink - TK121 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo EElink TK121 y cómo se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo EElink TK121
  - EElink TK121 GPS
  - comunicación EElink TK121
  - EElink TK121 MoveLink
  - compatibilidad TK121 Plaspy
  - protocolo de rastreo TK121
  - protocolo rastreador GPS vehicular
  - integración de rastreadores Plaspy
  - ajustes de conexión rastreador GPS
  - protocolo seguimiento de flotas
---

# EElink - Protocolo TK121

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink TK121 con Plaspy. Se centra en cómo el dispositivo reporta ubicación y eventos a Plaspy, el papel del protocolo de reporte del rastreador en ese intercambio y los ajustes de conexión prácticos que se utilizan para encaminar la telemetría hacia la plataforma Plaspy.

El TK121 es compatible con MoveLink versiones 1.9 y 2.0 según lo reportado, y ofrece GPS con fallback por LBS, soporte AGPS y telemetría en tiempo real. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la revisión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento observado en campo puede diferir entre versiones de firmware y configuraciones.

## Descripción general del protocolo

El protocolo del rastreador define cómo el TK121 codifica y transmite información de posición, estado y alarmas para que Plaspy pueda interpretar y presentar estos datos. A grandes rasgos, el protocolo permite la identificación del dispositivo, uplinks periódicos y por evento, y actualizaciones remotas de parámetros cuando el dispositivo lo permite.

- Transporta reportes de posición GNSS y localización por celular como fallback para visualización en Plaspy.
- Comunica el estado del dispositivo y telemetría como estado de ignición, condición de batería y eventos de alarma.
- Permite actualizaciones remotas de parámetros y configuración cuando el dispositivo y el firmware del fabricante soportan comandos remotos.
- Proporciona una cadencia de reporte predecible y disparadores por evento para que Plaspy procese feeds de posición en vivo y alertas.
- Cuando está disponible, la compatibilidad con MoveLink 1.9 y 2.0 significa que el dispositivo usa la estructura de reporte definida por el fabricante para entregar telemetría a servidores como Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint compartido y determina automáticamente el protocolo del rastreador usado por el flujo de datos entrante. En la mayoría de los casos, un TK121 correctamente configurado que reporte al endpoint de Plaspy será reconocido sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy expone un único endpoint de servidor al que todos los dispositivos reportan telemetría.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del tráfico entrante, por lo que rara vez es necesario elegir el protocolo manualmente.
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para la detección automática.
- Si el dispositivo admite múltiples versiones de protocolo (por ejemplo variantes de MoveLink), Plaspy interpretará los reportes entrantes según el formato observado.
- Si la detección automática no ocurre, usted debe verificar que los reportes del dispositivo estén llegando al endpoint de Plaspy.

## Transporte y contexto de conexión

La configuración de la conexión es un asunto de red separado del enmarcado del protocolo. Los TK121 pueden configurarse para usar transporte UDP o TCP según las capacidades y la configuración del dispositivo, y deben apuntar a la dirección y puerto del servidor Plaspy para que la entrega sea correcta.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y el servicio escucha en el puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las necesidades de despliegue.
- Todos los dispositivos en Plaspy usan el mismo puerto para la telemetría entrante.
- Confirme que el TK121 esté configurado para apuntar a d.plaspy.com o a la IP del servidor y que use el tipo de transporte correcto para su entorno de red.

## Notas sobre compatibilidad del protocolo

- El TK121 se entrega con soporte para MoveLink 1.9 y 2.0 según el fabricante y es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy.
- Las revisiones de firmware pueden cambiar el timing de los mensajes, la disponibilidad de funciones y los comandos de configuración; siempre confirme la versión de firmware si el comportamiento difiere de lo esperado.
- Las revisiones de hardware o conjuntos de características opcionales (por ejemplo relés o IO adicionales) pueden afectar qué campos de telemetría aparecen en los reportes.
- La elección del transporte de red (UDP vs TCP) puede afectar características de entrega como confiabilidad y latencia; seleccione según cobertura y necesidades operativas.
- La configuración de parámetros por parte del fabricante, ajustes por SMS o comandos desde una app móvil pueden ser necesarios para apuntar el dispositivo a Plaspy y habilitar el reporte remoto.
- Valide la compatibilidad con la documentación oficial de EElink cuando se requiera un comportamiento preciso para un despliegue en producción.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el TK121 ayuda a agilizar la puesta en marcha, mejora la resolución de problemas cuando falta telemetría y soporta la confiabilidad operativa a largo plazo cuando los dispositivos se actualizan o reemplazan.

- Garantiza que la configuración del dispositivo apunte al endpoint y transporte correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar si la falta de datos se debe a red, transporte, configuración o firmware del dispositivo.
- Orienta la selección de transporte y las excepciones de red necesarias para una entrega de telemetría confiable.
- Aclara qué eventos y telemetría el dispositivo puede enviar a Plaspy para configurar adecuadamente las funciones y alertas de la plataforma.
- Facilita la planificación de actualizaciones de firmware o reemplazos de hardware al identificar qué campos y funciones dependen del protocolo.

## Por qué usar Plaspy con este protocolo

Usar el TK121 con Plaspy brinda a las organizaciones una forma consistente de centralizar ubicación, estado de ignición y telemetría de alarmas para visibilidad operativa, respuesta a incidentes y flujos de trabajo de gestión de flotas. Plaspy ingiere el stream de reportes del TK121 y presenta posiciones en vivo, alarmas y datos de estado para que los equipos puedan monitorear activos y responder a eventos desde una sola plataforma.

Si desea saber más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware e instrucciones de configuración del fabricante, verifique la información actual en el sitio oficial de EElink https://www.eelink.com.cn/. El soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme la implementación del dispositivo con el fabricante antes de confiar en un comportamiento de firmware específico en producción.
