---
slug: /eelink/tk419/protocol
id: tk419-protocol
sidebar_label: Protocol
title: EElink - TK419 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del EElink TK419 y su comunicación con las plataformas Plaspy
keywords:
  - protocolo EElink TK419
  - protocolo GPS EElink TK419
  - compatibilidad EElink TK419 Plaspy
  - protocolo de comunicación EElink TK419
  - protocolo de rastreo EElink TK419
  - protocolo de rastreador vehicular EElink
  - seguimiento de flotas TK419
  - rastreador GPS TK419 Plaspy
  - integración protocolo EELINK
  - protocolo de telemática vehicular
---

# EElink - Protocolo TK419

Esta página describe el contexto público del protocolo para utilizar el rastreador EElink TK419 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, cómo esa comunicación se usa para ubicación en tiempo real y alertas, y qué aspectos deben considerar los técnicos al integrar unidades TK419 en una implementación de Plaspy. El TK419 es un rastreador 4G compacto diseñado para seguridad de flotas y activos; reporta posiciones GNSS y telemetría a plataformas compatibles usando el protocolo del fabricante.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Verifique los detalles específicos del dispositivo con el fabricante cuando sea necesario.

## Resumen del protocolo

El TK419 comunica posición, estados de entradas, alarmas y telemetría básica a un servidor remoto usando los mecanismos de reporte de EElink. A alto nivel, el protocolo del dispositivo define cómo el rastreador se identifica, reporta soluciones GNSS y estado, y señala eventos de alarma o E/S para que una plataforma como Plaspy convierta esos mensajes en actualizaciones de mapa, alertas y registros.

- Provee identidad y estado del dispositivo para que Plaspy pueda atribuir mensajes entrantes a un rastreador y activo específicos.
- Transporta la posición GNSS y marcas de tiempo para habilitar la ubicación en tiempo real en los mapas de Plaspy.
- Envía eventos de alarma y E/S como estado de ACC, alertas por choque o vibración, activaciones de geocerca y notificaciones de batería de respaldo.
- Permite opciones de configuración remota a través de la plataforma, la aplicación o mecanismos SMS expuestos por el dispositivo y el fabricante.
- Habilita el control de relés y otras acciones de actuadores iniciadas desde la plataforma cuando el equipo lo soporta.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir del tráfico del dispositivo. Cuando un TK419 apunta al endpoint de ingestión de Plaspy, la plataforma empata los mensajes entrantes con patrones de protocolo conocidos y con los dispositivos registrados, por lo que la selección manual de protocolo típicamente no es necesaria en una unidad configurada correctamente.

- Apunte el rastreador a d.plaspy.com o 54.85.159.138 y use el puerto 8888 para que Plaspy pueda recibir los reportes.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- El mensaje inicial desde un rastreador suele contener un identificador del dispositivo y campos de estado que Plaspy usa para asociar la fuente con un registro de activo.
- Si el dispositivo está configurado correctamente y el identificador es reconocible, Plaspy detecta automáticamente el protocolo del rastreador y mapea los mensajes posteriores.
- En la mayoría de las instalaciones, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el rastreador está correctamente configurado para reportar al endpoint de Plaspy.

## Transporte y configuración de conexión

Las decisiones de transporte y una configuración correcta del endpoint son fundamentales para un reporte fiable. Las unidades TK419 soportan enlaces de datos celulares y pueden configurarse para enviar sus reportes a Plaspy mediante UDP o TCP. Use el endpoint y puerto compartidos de Plaspy descritos arriba para simplificar despliegues a gran escala.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones elegidas.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuraciones directas por IP.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados para agilizar la ingestión.
- Elija TCP para conexiones persistentes cuando el dispositivo y la red lo permitan, o UDP cuando se prefiera menor sobrecarga para reportes breves.
- Asegúrese de que el firewall y la configuración de APN permitan tráfico saliente hacia d.plaspy.com o 54.85.159.138 en el puerto 8888 desde la SIM del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden añadir, cambiar o desaprobar campos de mensaje y el comportamiento de reporte; confirme la versión del firmware del rastreador al diagnosticar diferencias.
- Las revisiones de hardware a veces modifican las opciones de E/S disponibles o el cableado de alarmas, lo que afecta la telemetría reportada a Plaspy.
- Las opciones de configuración del fabricante, como elección de transporte, intervalo de reporte y umbrales de alarma, pueden cambiar la frecuencia y el contenido de los reportes.
- El soporte del dispositivo para comandos remotos o control de relés puede depender de builds de firmware regionales y de restricciones del operador.
- Al integrar a escala, valide un dispositivo de muestra de extremo a extremo con Plaspy antes de un despliegue masivo.
- Si usted depende de configuración por SMS o comandos de reserva, verifique esos mecanismos con la documentación actual del TK419 proporcionada por el fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del TK419 ayuda a asegurar un despliegue confiable, acelera la resolución de problemas y facilita alinear el comportamiento del dispositivo con las necesidades operativas en Plaspy. Saber qué reporta el equipo y cómo indica eventos permite configurar alertas, reglas y paneles que reflejen el comportamiento real.

- Reduce el tiempo para resolver brechas de reporte al clarificar si un problema es de transporte, configuración o firmware.
- Asegura que las alarmas y estados de E/S se mapeen correctamente en las alertas y reportes de Plaspy para un manejo preciso de incidentes.
- Ayuda a elegir el transporte y los intervalos de reporte adecuados para optimizar la vida de batería, el uso de datos y la puntualidad.
- Orienta los pasos de validación para nuevo firmware o revisiones de hardware antes de un despliegue amplio.
- Mejora la confiabilidad de la automatización que depende de ACC, control de relé u otras entradas digitales.

## Por qué usar Plaspy con este protocolo

Usar el TK419 con Plaspy ofrece una vía directa desde los reportes del dispositivo hasta la monitorización y las alertas accionables para flotas. Plaspy ingiere posiciones GNSS, estados de E/S y alarmas para mostrar mapas en vivo, líneas de tiempo de eventos y notificaciones basadas en reglas que los operadores utilizan para prevención de robos, supervisión de conductores y supervisión operativa. El diseño compacto del TK419, su soporte multiconductor GNSS y el relé inmovilizante opcional lo convierten en una elección práctica donde se requiere instalación discreta y reportes fiables.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores como el TK419 visite https://www.plaspy.com. Para los detalles más actuales del protocolo, notas de firmware y documentación del dispositivo, confirme los específicos con el fabricante en https://www.eelink.com.cn/. El soporte de protocolos y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre verifique los detalles específicos del dispositivo con los recursos oficiales del fabricante.
