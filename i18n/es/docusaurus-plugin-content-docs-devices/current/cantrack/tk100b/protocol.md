---
slug: /cantrack/tk100b/protocol
id: tk100b-protocol
sidebar_label: Protocol
title: CanTrack - TK100B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo y compatibilidad con Plaspy del rastreador CanTrack TK100B
keywords:
  - Protocolo CanTrack TK100B
  - Protocolo GPS CanTrack TK100B
  - CanTrack TK100B Plaspy
  - Protocolo de comunicación TK100B
  - Protocolo de rastreo TK100B
  - Protocolo de rastreador GPS CanTrack
  - Compatibilidad rastreador GPS Plaspy
  - Rastreo vehicular TK100B
  - Gestión de flotas TK100B
  - Telemetría TK100B
---

# CanTrack - Protocolo TK100B

Esta página ofrece una visión general pública del protocolo para usar el CanTrack TK100B Accurate Pro con Plaspy. Se centra en el papel del protocolo de comunicación del dispositivo para transmitir posición, telemetría y controles remotos a Plaspy, manteniendo la explicación en un nivel general y seguro desde el punto de vista de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página destaca el transporte e información de integración sin exponer detalles internos del firmware.

## Resumen del protocolo

El TK100B envía posición y telemetría del vehículo a través de datos GSM GPRS usando transporte TCP IP, lo que permite a Plaspy recibir eventos de posición, estado y alertas para seguimiento, notificaciones y control remoto. El protocolo de comunicación define cómo la unidad se identifica, cómo se codifican la telemetría y las alertas, y cómo se entregan y registran en la plataforma los controles bidireccionales como comandos de relé.

- Permite reportes periódicos y por evento de posición GNSS, estado de ignición, pulsaciones SOS y eventos de geocerca a Plaspy.
- Transporta el estado de accesorios y entradas, como detección ACC, activación de micrófono o sirena externa, y señales de control remoto.
- Soporta flujos de comandos remotos para funciones basadas en relé, como corte y restauración de motor cuando se invocan desde la plataforma.
- Emplea conectividad celular TCP IP para la entrega confiable de telemetría a un endpoint central de Plaspy.
- Proporciona suficientes campos de identificación y telemetría para que una plataforma de gestión de flota correlacione el estado del dispositivo y el historial de seguimiento.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartido para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a ese endpoint. En la mayoría de los despliegues el usuario no necesita seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar correctamente al servidor de Plaspy.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública de la plataforma usada para reportes es 54.85.159.138.
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los dispositivos en Plaspy usan el mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado se conecta al endpoint de Plaspy.
- Cuando el dispositivo está configurado para reportar al endpoint de Plaspy, la plataforma normalmente procesa la telemetría entrante sin que el usuario deba seleccionar el protocolo.
- Asegúrese de que el rastreador esté apuntando al endpoint de Plaspy y que la SIM y la conectividad de la red permitan tráfico TCP o UDP según se requiera.

## Contexto de transporte y conexión

El TK100B utiliza datos celulares para reenviar su telemetría a un servidor remoto y soporta el transporte estándar TCP IP sobre GSM GPRS. Dependiendo de la configuración del dispositivo y las opciones de firmware, la unidad puede usar TCP o UDP para reportar. La selección correcta del transporte y los ajustes del destino son esenciales para una conectividad confiable con Plaspy.

- Los dispositivos pueden configurarse para usar TCP o UDP para enviar telemetría a Plaspy en el puerto 8888.
- El rastreador puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 como destino para la ingestión de la plataforma.
- Plaspy depende de que el dispositivo alcance el puerto y endpoint compartidos para recibir actualizaciones en tiempo real y alertas.
- Consideraciones a nivel de red como los ajustes de APN del operador, el estado del plan de datos y la provisión de comandos por SMS pueden afectar el comportamiento de los reportes.
- Para instalaciones con cableado fijo, asegúrese de que el rastreador tenga alimentación estable y el cableado correcto para la detección de ignición y el control de relés, a fin de permitir el reporte completo de telemetría.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir cambios en el formato de los mensajes o en los campos de telemetría transmitidos; siempre verifique la versión de firmware del dispositivo al validar el comportamiento.
- Las revisiones de hardware o el cableado de accesorios opcionales pueden modificar las entradas o salidas disponibles y, por consiguiente, el conjunto de campos de telemetría enviados a Plaspy.
- Algunos despliegues pueden requerir seleccionar TCP frente a UDP en la configuración del dispositivo para coincidir con la red local o el comportamiento del operador.
- Las opciones de configuración del lado del fabricante y los comandos por SMS pueden afectar cómo el dispositivo apunta al endpoint de Plaspy.
- Valide la compatibilidad y las funciones soportadas contra la documentación del fabricante y las notas de la versión más recientes.
- Un cableado correcto de ACC, ignición y circuitos de relé es necesario para reportes fiables de estado y para que las funciones de inmovilización remota operen adecuadamente.

## Por qué es importante entender el protocolo

Tener un entendimiento básico del protocolo de comunicación y del contexto de transporte ayuda a garantizar una configuración fluida, a acelerar la resolución de problemas y a asegurar una operación predecible a largo plazo dentro de Plaspy. Saber cómo reporta el rastreador, qué transporte emplea y cómo se identifica facilita confirmar la conectividad e interpretar los eventos del dispositivo en la plataforma.

- Ayuda a confirmar que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 y usa el puerto 8888 según lo requiere Plaspy.
- Asiste a los técnicos a elegir TCP o UDP durante la configuración para adaptar la instalación a la red y capacidades del dispositivo.
- Facilita la interpretación de la telemetría entrante para que las alertas y los comandos remotos se apliquen correctamente en Plaspy.
- Agiliza la resolución de problemas cuando los dispositivos están fuera de línea, al aislar cuestiones de transporte, APN y alimentación o cableado.
- Apoya la planificación operativa para funcionalidades de la flota como geocercas, alertas SOS e inmovilización remota.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack TK100B con Plaspy ofrece a las organizaciones una vista consolidada de la ubicación de los vehículos, alertas de eventos y acciones de control remoto. El dispositivo entrega telemetría detallada como estado de ignición, activaciones SOS, violaciones de geocerca e entradas de accesorios que Plaspy puede mostrar en paneles, reglas de alerta y flujos de comandos para respaldar necesidades de seguridad y operación.

Plaspy centraliza la telemetría y el control del TK100B a través del endpoint compartido de reportes en d.plaspy.com en el puerto 8888, permitiendo a los operadores monitorear posiciones en tiempo real, recibir alertas de seguridad y ejecutar comandos remotos de relé cuando el rastreador lo soporta. Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre el soporte de protocolo específico del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
