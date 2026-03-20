---
slug: /topten/lt02/protocol
id: lt02-protocol
sidebar_label: Protocol
title: TopTen - LT02 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar TopTen LT02 con el servidor Plaspy y ajustes de conexión compartidos
keywords:
  - Protocolo TopTen LT02
  - Protocolo GPS TopTen LT02
  - TopTen LT02 en Plaspy
  - Protocolo de rastreo LT02
  - Comunicación LT02
  - Compatibilidad de dispositivos Plaspy
  - Protocolo de rastreador GPS
  - Rastreo de vehículos LT02
  - Seguimiento de flotas Plaspy
  - Protocolo de reporte de rastreador
---

# TopTen - Protocolo LT02

Esta página describe el contexto público del protocolo para usar el rastreador GPS TopTen LT02 con la plataforma Plaspy. Se concentra en cómo se comunica el dispositivo en términos generales, en los ajustes de conexión que Plaspy espera y en las consideraciones prácticas importantes al apuntar un LT02 al servidor de Plaspy para reportes y monitoreo.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto de los mensajes, los comandos disponibles y algunos detalles operativos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel público y general mientras describe cómo se integra el rastreador con Plaspy.

## Resumen del protocolo

El protocolo del LT02 define cómo el rastreador envía posición, estado y alertas a un servidor remoto, y cómo se pueden emitir comandos remotos si están soportados. En la integración con Plaspy, el protocolo es el mecanismo mediante el cual el dispositivo se identifica ante la plataforma y entrega telemetría y eventos útiles para el monitoreo de ubicación y alarmas.

- Permite que el LT02 reporte ubicación GPS, movimiento y notificaciones de eventos a un servidor backend.
- Incluye identidad del dispositivo y metadatos de estado para que Plaspy pueda asociar los reportes entrantes con el rastreador correcto.
- Traduce eventos como exceso de velocidad, alarma por movimiento, encendido o apagado del motor y alertas de voltaje en mensajes que Plaspy puede mostrar.
- Permite la entrega de waypoints almacenados y el contenido del datalogger durante sesiones o bajo petición, sujeto al comportamiento del firmware del dispositivo.
- Proporciona un canal para configuración remota o armado de alarmas cuando el rastreador y el firmware soportan comandos remotos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador basándose en los datos que el dispositivo envía. Cuando usted configura un LT02 para reportar al endpoint de Plaspy, normalmente no es necesario seleccionar un protocolo dentro de Plaspy de forma manual.

- Plaspy usa un único endpoint de servidor para datos entrantes y detecta automáticamente el protocolo utilizado por el rastreador.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para dispositivos que se configuran usando una dirección IP directamente.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del equipo.
- Si el LT02 está correctamente configurado para reportar al endpoint de Plaspy, Plaspy identificará y procesará los reportes entrantes sin que usted tenga que seleccionar el protocolo manualmente.
- La detección automática reduce los pasos de configuración para gerentes de flota y técnicos cuando se usan múltiples modelos de rastreadores.

## Transporte y contexto de conexión

La elección de transporte, como UDP o TCP, afecta la fiabilidad y la forma en que los dispositivos envían la telemetría. El LT02 puede configurarse para apuntar a Plaspy mediante cualquiera de los dos transportes, según las opciones de configuración del equipo y el modo de firmware seleccionado por el instalador.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la preferencia del instalador.
- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de cortafuegos.
- La elección entre TCP o UDP puede depender de la estabilidad de la red, el tamaño de los mensajes y si el firmware del dispositivo espera confirmaciones o persistencia de conexión.
- Verifique que cualquier firewall de red o reglas NAT permitan conexiones salientes hacia el servidor Plaspy en el puerto compartido.

## Notas sobre compatibilidad del protocolo

- El LT02 es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy, pero las diferencias de firmware pueden cambiar los mensajes y comportamientos disponibles.
- Las revisiones de hardware o las variantes regionales del LT02 pueden implementar semánticas de reporte ligeramente distintas; revise la etiqueta del dispositivo y la revisión de firmware al diagnosticar problemas.
- La selección de transporte entre UDP y TCP puede afectar las características de entrega de mensajes y podría necesitar coincidir con la configuración del lado del rastreador.
- Los manuales y guías de configuración proporcionados por el fabricante siguen siendo la referencia autorizada para la sintaxis de comandos del dispositivo y las secuencias SMS de configuración.
- Al integrar un gran volumen de dispositivos, valide una unidad representativa antes del despliegue masivo para confirmar el comportamiento de reporte esperado con Plaspy.
- Si se requieren comandos remotos, confirme que el firmware del LT02 soporte esos comandos y que la integración de Plaspy pueda exponer las funciones relacionadas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del LT02 ayuda a garantizar una instalación confiable, agiliza la resolución de problemas y ofrece operación a largo plazo más predecible cuando el rastreador reporta a Plaspy. Saber cómo se identifica el dispositivo y qué eventos envía mejora la precisión de la configuración y reduce el tiempo destinado a diagnosticar problemas de conectividad o interpretación de datos.

- Acelera el aprovisionamiento inicial asegurando que se apliquen correctamente servidor, transporte y puerto.
- Ayuda a interpretar el estado del dispositivo cuando Plaspy muestra telemetría inesperada o eventos faltantes.
- Orienta la decisión entre TCP y UDP cuando las condiciones de red o la fiabilidad de mensajes son críticas.
- Informa sobre las elecciones de actualización de firmware y qué esperar respecto a tipos de mensajes nuevos o modificados.
- Reduce tiempos de inactividad al clarificar qué datos está diseñado para reportar el rastreador y cómo Plaspy consumirá esos reportes.

## Por qué usar Plaspy con este protocolo

Usar el TopTen LT02 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar la recolección de datos de ubicación, estado y alarmas desde un rastreador compacto. La detección automática de protocolo y los ajustes de conexión compartidos de Plaspy simplifican la incorporación de flotas y permiten que los equipos se concentren en la supervisión y los flujos operativos en lugar de en la selección de protocolos.

Si desea conocer más sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo; verifique los detalles del modelo y del firmware más recientes con el fabricante en http://www.t10.cn.
