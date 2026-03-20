---
slug: /cantrack/p60l/protocol
id: p60l-protocol
sidebar_label: Protocol
title: CanTrack - P60L Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el CanTrack P60L con Plaspy y lograr rastreo y telemetría en tiempo real confiables
keywords:
  - Protocolo CanTrack P60L
  - Protocolo GPS CanTrack P60L
  - Protocolo CanTrack P60L para Plaspy
  - Protocolo de comunicación CanTrack P60L
  - Protocolo de rastreo CanTrack P60L
  - Integración P60L Plaspy
  - Rastreador compatible con Plaspy
  - Protocolo de rastreador GPS personal
  - Integración de telemetría GNSS
  - Protocolo de SOS y voz para rastreadores
---

# CanTrack - Protocolo P60L

Esta página describe el contexto público del protocolo para usar el rastreador personal CanTrack P60L con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo a alto nivel, qué papel cumple el protocolo de reporte del rastreador para entregar ubicaciones, alertas, eventos de voz y telemetría a Plaspy, y qué revisar al configurar un P60L para operaciones en tiempo real.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y recomienda verificar la documentación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del P60L regula cómo se envían a la plataforma las posiciones GNSS, eventos SOS, información activada por voz, telemetría de temperatura y las cargas de registros almacenados. A alto nivel, el protocolo permite que el rastreador se identifique, reporte telemetría útil en tiempo real o por lotes, y soporte vías de configuración remota que Plaspy puede aprovechar.

- Transporta actualizaciones de ubicación en tiempo real y metadatos posicionales para que Plaspy pueda mapear y sellar con tiempo las fijaciones del dispositivo.
- Transmite notificaciones de eventos como pulsaciones de SOS, alertas de alimentación o movimiento, e indicadores de sesiones de voz.
- Entrega telemetría ambiental, como lecturas de temperatura a bordo, para monitoreo y umbrales de alerta.
- Soporta cargas de bitácora fuera de línea para que el historial de ubicaciones almacenado se transmita cuando se restablece la conectividad.
- Habilita comandos remotos y mecanismos de configuración expuestos por el dispositivo para la gestión operativa.
- Funciona junto con las configuraciones de transporte para que Plaspy reciba datos útiles del dispositivo independientemente de la capa de red subyacente.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartidos el tráfico de los dispositivos y aplica detección automática de protocolo para identificar los mensajes entrantes. Cuando un P60L está configurado para reportar a Plaspy, la plataforma típicamente reconoce el protocolo del dispositivo de forma automática y comienza a procesar datos de ubicación y eventos sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy recibe conexiones de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y el onboarding.
- Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo envía tráfico al endpoint de Plaspy.
- En la mayoría de los casos usted no necesita elegir manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy.
- Una identificación correcta del dispositivo en el primer contacto permite a Plaspy mapear la telemetría entrante al registro de dispositivo correspondiente.

## Transporte y contexto de conexión

El P60L puede enviar su telemetría por IP usando conectividad celular, y el transporte usado para la entrega puede variar según la configuración del dispositivo y las capacidades del firmware. Plaspy soporta tanto UDP como TCP en el puerto compartido para el reporte de dispositivos, así que asegúrese de que el P60L esté configurado para usar uno de esos transportes al apuntar a Plaspy.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o al endpoint numérico 54.85.159.138.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y los ajustes elegidos.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que reduce errores de configuración durante el despliegue.
- Elija el modo de transporte (UDP o TCP) de acuerdo con la confiabilidad de la red y las necesidades de comandos/respuestas del dispositivo.
- Verifique que la tarjeta SIM y la configuración APN del P60L sean correctas para que el dispositivo pueda abrir el transporte seleccionado hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre las versiones del P60L pueden modificar campos de telemetría disponibles, nombres de eventos o la frecuencia de reporte; siempre revise las notas de firmware del dispositivo.
- Revisiones de hardware o características opcionales (por ejemplo variantes con voz o temperatura) pueden añadir u omitir elementos de datos específicos.
- Las configuraciones del fabricante y los comandos SMS de configuración pueden influir en si el dispositivo reporta vía UDP o TCP y qué endpoint utiliza.
- El comportamiento de registro fuera de línea y las cargas por lotes pueden variar según el firmware y las opciones de almacenamiento disponibles.
- Al integrar a gran escala, valide un dispositivo de muestra de extremo a extremo antes de un despliegue masivo para confirmar transporte y manejo de eventos.
- Para listas de comandos específicas, comportamientos FOTA y flags de funciones, consulte la documentación y los registros de cambios de CanTrack.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del P60L es útil para una configuración confiable, un diagnóstico efectivo y para garantizar la calidad de datos a largo plazo en Plaspy. Saber qué enviará el dispositivo, cuándo lo hará y cómo reporta eventos ayuda a administradores e integradores a tomar decisiones informadas de configuración.

- Ayuda a confirmar que SOS, eventos de voz y telemetría de temperatura se entregan y procesan en Plaspy.
- Facilita el diagnóstico de problemas de conectividad al revisar transporte, endpoint y ajustes APN en el dispositivo.
- Permite configurar correctamente el comportamiento de registro fuera de línea y los intervalos de carga para conservar el historial.
- Mejora el ajuste de alertas al entender con qué frecuencia el dispositivo reporta posición y telemetría.
- Favorece despliegues a gran escala más fluidos al informar la provisión de dispositivos y las estrategias de actualización de firmware.

## Por qué usar Plaspy con este protocolo

Usar el CanTrack P60L con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad en tiempo real, respuesta a incidentes y telemetría ambiental en un mismo flujo de trabajo. El P60L combina posicionamiento GNSS preciso, capacidad de voz, señalización de emergencia SOS y sensor de temperatura, y Plaspy ingiere estas corrientes para que los equipos puedan actuar ante alertas, mapear ubicaciones de dispositivos y revisar telemetría histórica.

Para conocer más sobre Plaspy y cómo maneja la integración de dispositivos y los flujos de trabajo de flotas visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante verifique la información en el sitio oficial de CanTrack https://www.cantrackgps.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
