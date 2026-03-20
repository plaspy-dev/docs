---
slug: /autofon/gl/protocol
id: gl-protocol
sidebar_label: Protocol
title: AutoFon - GL-Маяк Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo AutoFon GL-Маяк para integración con Plaspy que cubre conexión y compatibilidad
keywords:
  - Protocolo AutoFon GL-Маяк
  - Protocolo GPS AutoFon GL-Маяк
  - AutoFon GL-Маяk Plaspy
  - Protocolo de comunicación GL-Маяк
  - Protocolo de rastreo GL-Маяк
  - Compatibilidad de dispositivos Plaspy
  - Guía de protocolo de rastreador GPS
  - Integración AutoFon GL
  - Informes de telemetría GL-Маяк
  - Protocolo para rastreo de activos
---

# AutoFon - Protocolo GL-Маяak

Esta página describe el contexto público del protocolo para utilizar el AutoFon GL-Маяк (GL-Beacon) con la plataforma Plaspy. Se centra en cómo el dispositivo comunica con Plaspy en términos generales y no sensibles, y explica las consideraciones de conexión y compatibilidad que importan al integrar este rastreador compacto con GPS y GLONASS en flotas y monitoreo de activos.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo envía reportes al endpoint de Plaspy. El GL-Маяк puede reportar mediante GPRS estándar y canales SMS; el comportamiento exacto del protocolo y las características disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para el enrutamiento en la red, Plaspy acepta reportes en d.plaspy.com y en la IP conocida 54.85.159.138 en el puerto compartido 8888, y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.

## Visión general del protocolo

El GL-Маяк transmite posición, alarmas y telemetría a un servidor backend usando un protocolo de reporte diseñado para bajo consumo y envíos con buffer. El propósito público del protocolo es permitir que el rastreador se identifique ante Plaspy, entregue datos de posición y eventos, y garantice una entrega fiable incluso con conectividad GPRS intermitente.

- Proporciona identificación del dispositivo y contexto básico de sesión para que Plaspy asocie los reportes con el activo y la cuenta correctos.
- Transporta fijaciones de posición GNSS y telemetría de eventos como movimiento, impacto, vuelco, pulsaciones SOS y estados de canales auxiliares.
- Soporta comportamiento de entrega en búfer para que los paquetes almacenados se reenvíen a Plaspy una vez que se restablece la conectividad.
- Permite comandos de control remoto y configuración vía canales auxiliares y flujos de gestión remota cuando el dispositivo lo soporta.
- Habilita rutas de reporte alternativas como SMS para alertas críticas cuando GPRS no está disponible.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y determina automáticamente el protocolo del dispositivo a partir del patrón de tráfico y los campos de identificación reportados. En la mayoría de los despliegues no es necesario seleccionar un protocolo dentro de Plaspy si el GL-Маяк está configurado para enviar reportes al endpoint de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888 para reportes de dispositivos.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos tipos de transporte.
- La plataforma empareja los identificadores entrantes del dispositivo con las cuentas de clientes y aplica automáticamente las reglas de parseo y manejo apropiadas.
- La configuración correcta del dispositivo en el lado del rastreador es el requisito habitual; una vez que el rastreador reporta al endpoint de Plaspy, la detección y el onboarding suelen ser automáticos.
- Cuando existen múltiples variantes de firmware o de dispositivo, Plaspy usa el contenido del reporte para seleccionar el manejo compatible en lugar de exigir una selección manual de protocolo.

## Transporte y contexto de conexión

Las decisiones de conexión afectan cómo el GL-Маяк alcanza Plaspy y cómo se comporta el dispositivo ante restricciones de red. El GL-Маяк soporta reportes estándar por GPRS y puede usar SMS como canal de respaldo para alarmas críticas; para reportes directos al servidor, los dispositivos apuntan a Plaspy usando una configuración compartida de host y puerto.

- Los equipos pueden apuntar a d.plaspy.com o a la IP 54.85.159.138 para el reporte directo.
- La plataforma Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos soportados usan este mismo puerto para reportes.
- El rastreador puede configurarse para comunicarse mediante UDP o TCP en el puerto 8888 según el firmware del dispositivo y la elección de despliegue.
- El almacenamiento en búfer de paquetes en el GL-Маяк preserva la telemetría para su subida posterior cuando se restablece el servicio GPRS.
- El reporte por SMS puede utilizarse como vía alternativa de alerta para eventos de alta prioridad, como pulsaciones SOS o alarmas de manipulación.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware en la plataforma GL-Маяк pueden cambiar el conjunto de mensajes soportados y el comportamiento exacto de reportes y reintentos.
- Las revisiones de hardware y las variantes de fabricación pueden afectar funciones disponibles como tiempos de control auxiliar o entradas específicas de alarma.
- La selección del transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con la configuración de la SIM y APN del rastreador.
- La disponibilidad y el formato del respaldo por SMS pueden diferir del reporte por paquetes GPRS y deben probarse según sus requisitos de monitoreo.
- Valide la compatibilidad y disponibilidad de funciones contra la documentación del fabricante para el número de serie y la revisión de firmware de su dispositivo.
- Al planificar funciones de control remoto o inmovilizador, confirme el cableado y las consideraciones legales para su región y tipo de vehículo.

## Por qué es importante comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación GL-Маяк ayuda a asegurar una configuración fiable, acelerar la resolución de problemas y lograr un comportamiento predecible a largo plazo cuando el dispositivo se usa con Plaspy. Conocer el papel del transporte, el almacenamiento en búfer y la temporización de reportes reduce errores de configuración y mejora los resultados operativos.

- Ayuda a verificar que el rastreador está apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y usando el transporte previsto.
- Facilita la resolución de retrasos en conexión o entrega al enfocarse en cobertura GPRS, configuración de APN y cargas en búfer.
- Permite tomar decisiones informadas sobre el uso de respaldo por SMS, retención de datos y cómo se entregan las alarmas a Plaspy.
- Respaldar la verificación de capacidades de firmware y el impacto de actualizaciones de firmware en el comportamiento de reporte.
- Mejora la planificación para la gestión de energía y los intervalos de reporte para equilibrar la vida útil de la batería y la frescura de la telemetría.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon GL-Маяк con Plaspy ofrece una opción compacta y eficiente en consumo para rastreo de activos a largo plazo, monitoreo discreto de vehículos y protección de sitios remotos. El almacenamiento en búfer de paquetes del GL-Маяк, su posicionamiento combinado por GPS y GLONASS y sus capacidades de detección de eventos lo hacen una opción práctica para despliegues que requieren telemetría resiliente y flujos de trabajo de alarma en Plaspy.

Para conocer más sobre cómo Plaspy gestiona los reportes de dispositivos y explorar las funciones de la plataforma para seguimiento, alertas y visualización de telemetría visite https://www.plaspy.com. Para los detalles más actuales sobre protocolos específicos del dispositivo, notas de firmware y revisiones de hardware consulte la documentación del fabricante en https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
