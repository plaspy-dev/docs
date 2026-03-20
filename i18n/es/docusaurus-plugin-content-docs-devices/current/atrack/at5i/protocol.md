---
slug: /atrack/at5i/protocol
id: at5i-protocol
sidebar_label: Protocol
title: ATrack - AT5i Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo ATrack AT5i y su comunicación con Plaspy para rastreo y gestión de flotas
keywords:
  - Protocolo ATrack AT5i
  - Rastreador GPS AT5i
  - Protocolo AT5i Plaspy
  - Compatibilidad ATrack Plaspy
  - Protocolo de comunicación AT5i
  - Protocolo de rastreo AT5i
  - Rastreo vehicular AT5i
  - GPS GLONASS AT5i
  - Cifrado AES AT5i
  - Gestión de flotas AT5i
---

# ATrack - Protocolo AT5i

Esta página documenta el contexto público del protocolo del ATrack AT5i cuando se utiliza con Plaspy. Explica, a nivel de protocolo, cómo el AT5i informa posición, estado de movimiento y eventos a un servidor de seguimiento remoto, y cómo Plaspy interpreta esas comunicaciones. El contenido se centra en la conexión y la compatibilidad, no en detalles propietarios o internos de firmware.

Plaspy utiliza un endpoint compartido y ajustes de conexión comunes para los dispositivos soportados, y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El AT5i es un rastreador GNSS GPRS versátil con soporte GPS y GLONASS, múltiples entradas y salidas digitales y analógicas (I/O), cifrado de datos AES 128, eventos configurables y geovallas. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la documentación del fabricante deben considerarse durante la integración.

## Descripción general del protocolo

El protocolo del AT5i define cómo el dispositivo se identifica, reporta posición GNSS y movimiento, comunica estados de I/O y sensores, y entrega mensajes de evento a Plaspy. A grandes rasgos, el protocolo permite la entrega fiable de datos de ubicación y estado para que Plaspy pueda procesar, mostrar y generar alertas sobre la actividad del vehículo sin que el usuario final deba gestionar detalles de transporte a bajo nivel.

- Transporta posición GNSS y estado de movimiento para que las ubicaciones sean visibles en Plaspy
- Transmite eventos y alertas configurables, como entradas/salidas de geovallas y detecciones de manipulación
- Envía estados de entradas/salidas digitales y analógicas y telemetría de sensores para monitoreo del dispositivo
- Soporta características de confidencialidad de datos presentes en el dispositivo, como cifrado AES 128
- Permite que el dispositivo se identifique y asocie mensajes con un registro de rastreador específico en Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de muchos rastreadores en el mismo endpoint de red y detecta automáticamente el protocolo cuando los mensajes llegan al servidor. Como Plaspy utiliza una dirección y puerto compartidos para el reporte de dispositivos, la mayoría de unidades AT5i solo necesitan apuntar al endpoint de Plaspy con la configuración de red correcta para ser reconocidas.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138 y el servidor escucha en el puerto 8888
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota
- Cuando el AT5i envía datos al endpoint de Plaspy, la plataforma determina el protocolo automáticamente
- Normalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy

## Contexto de transporte y conexión

Las opciones de conexión y transporte forman parte de cómo se configura un AT5i para alcanzar un servidor de seguimiento. El dispositivo puede usar el canal de datos GPRS para enviar reportes tanto por UDP como por TCP, y los ajustes del endpoint en el dispositivo determinan si los mensajes se entregan de forma conectada o sin conexión según el transporte elegido.

- El AT5i puede configurarse para apuntar a d.plaspy.com o directamente a 54.85.159.138
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración elegida
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que reduce la variación en la configuración por dispositivo
- Ajustes de red como APN, reglas de firewall y comportamiento NAT pueden afectar la conectividad hacia el endpoint de Plaspy
- Algunas implementaciones prefieren TCP para entrega orientada a sesión, mientras otras usan UDP por menor sobrecarga
- Confirme las preferencias de transporte en la configuración del dispositivo y pruebe la conectividad hacia el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede depender de la versión de firmware; las funciones o campos de mensaje pueden variar entre versiones de firmware
- Las revisiones de hardware y módulos opcionales del AT5i pueden habilitar o modificar la telemetría y los reportes de eventos disponibles
- La configuración por parte del fabricante y los comportamientos de reporte por defecto pueden diferir según la región o la producción
- La selección de transporte entre UDP y TCP puede afectar cómo se transmiten los mensajes y cómo Plaspy los recibe
- Las opciones de cifrado en el dispositivo, como AES 128, pueden requerir configuración o manejo acorde en la plataforma
- Valide el comportamiento esperado comparando la configuración del dispositivo, los registros locales y el tráfico entrante a Plaspy cuando sea posible
- Consulte la documentación oficial de ATrack para notas específicas de firmware y ejemplos de configuración

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una configuración fluida, reportes fiables y una resolución de problemas más rápida al integrar el AT5i con Plaspy. Saber cómo el dispositivo reporta, qué transportes puede usar y cómo se representan los eventos facilita validar que los mensajes llegan y se interpretan correctamente.

- Ayuda a confirmar que el rastreador apunta a d.plaspy.com o a la IP y puerto correctos de Plaspy
- Facilita la resolución de problemas cuando los reportes no aparecen en Plaspy por problemas de red o configuración
- Permite tomar decisiones adecuadas sobre transporte, cifrado y reporte de eventos según las necesidades de la flota
- Mejora los flujos de prueba al clarificar qué esperar de los registros del dispositivo y de los mensajes entrantes a Plaspy
- Favorece la confiabilidad a largo plazo al facilitar el seguimiento de cambios de firmware o configuración que afecten el reporte

## Por qué usar Plaspy con este protocolo

Usar el AT5i con Plaspy ofrece una forma centralizada de monitorear posición GNSS, estado de movimiento, estados de I/O y eventos configurables en toda la flota. El endpoint compartido de Plaspy y la detección automática de protocolos simplifican la incorporación de dispositivos para que las organizaciones puedan concentrarse en los flujos operativos en lugar de en detalles de transporte a bajo nivel.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el ATrack AT5i visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guías de configuración del dispositivo consulte al fabricante en https://www.atrack.com.tw/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse frente a la documentación oficial de ATrack.
