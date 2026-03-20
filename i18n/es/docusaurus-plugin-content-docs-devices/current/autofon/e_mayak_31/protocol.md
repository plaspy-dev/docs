---
slug: /autofon/e_mayak_31/protocol
id: e_mayak_31-protocol
sidebar_label: Protocol
title: AutoFon - E-Mayak 3.1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AutoFon E-Mayak 3.1 y cómo el rastreador por SMS se comunica con Plaspy para mapeo e informes
keywords:
  - protocolo AutoFon E-Mayak 3.1
  - protocolo GPS AutoFon E-Mayak
  - rastreador SMS E-Mayak 3.1
  - compatibilidad AutoFon Plaspy
  - protocolo de rastreo E-Mayak
  - rastreo vehicular E-Mayak
  - protocolo GPS por SMS
  - rastreador oculto E-Mayak
  - rastreo de flotas AutoFon
  - protocolo de rastreo Plaspy
---

# AutoFon - Protocolo E-Mayak 3.1

Esta página explica el contexto público del protocolo para usar el rastreador AutoFon E-Mayak 3.1 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales y en cómo esos mensajes pueden integrarse en los flujos de trabajo de Plaspy, sin exponer detalles privados ni implementaciones específicas de firmware. El E-Mayak 3.1 es un rastreador orientado a SMS, de bajo consumo y pensado para operación autónoma prolongada y colocación discreta; esta documentación aclara cómo ese modelo basado en SMS encaja con los patrones de integración de Plaspy.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. El comportamiento exacto del protocolo y los formatos SMS disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe el contexto general de comunicación y consideraciones prácticas de compatibilidad en lugar de los detalles internos del equipo.

## Resumen del protocolo

El E-Mayak 3.1 se comunica principalmente por SMS, enviando coordenadas de ubicación, telemetría básica y mensajes de estado que Plaspy puede usar para mapeo e informes. En una implementación con Plaspy, las posiciones y alertas originadas por SMS se traducen a eventos de la plataforma y elementos visuales mediante pasarelas SMS-a-API o procesos de ingestión manual.

- El dispositivo envía coordenadas GPS y, como respaldo, información de ubicación por torre celular vía SMS para el reporte de posición.
- Telemetría como nivel de batería, temperatura, mensajes de latido y alertas de saldo de SIM se transmiten en actualizaciones de estado por SMS.
- Enlaces de mapas por SMS y cadenas de coordenadas incluidas en los mensajes permiten a Plaspy ubicar posiciones sin requerir un flujo GPRS continuo.
- El control por SMS protegido con PIN permite configuración remota y reportes seguros relevantes para los registros en Plaspy.
- Identificadores secuenciales en los SMS y mensajes con marca temporal ayudan a correlacionar los reportes en las líneas de tiempo y logs de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de dispositivos a través de un endpoint compartido e inferir automáticamente el tipo de rastreador cuando los datos llegan a la plataforma. Para rastreadores con prioridad SMS como el E-Mayak 3.1, la integración suele apoyarse en el reenvío del contenido SMS hacia Plaspy o en convertir enlaces de mapas a llamadas API para la ingestión de posiciones, en lugar de mantener una sesión permanente por socket.

- El endpoint público de servidor de Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para datos de dispositivos; este es el mismo puerto usado por todos los dispositivos compatibles con Plaspy.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia de transporte.
- Cuando se apunta correctamente al endpoint de Plaspy, la detección del protocolo es automática y normalmente no se requiere selección manual en Plaspy.
- El reenvío SMS-a-API correctamente formateado o la ingestión manual garantizan que Plaspy pueda mapear el contenido del SMS a la identidad del dispositivo y a los campos de telemetría.

## Contexto de transporte y conexión

Aunque el E-Mayak 3.1 está centrado en SMS, Plaspy soporta un endpoint de red común para todas las comunicaciones de dispositivos y acepta tanto UDP como TCP en el mismo puerto. Comprender la configuración de transporte y endpoint ayuda a asegurar que el dispositivo o la pasarela SMS estén configurados para que Plaspy reciba mensajes utilizables.

- Plaspy acepta conexiones y mensajes en el puerto 8888 para todos los dispositivos soportados.
- Los dispositivos o gateways pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- El E-Mayak 3.1 reporta principalmente vía SMS; la integración con Plaspy normalmente utiliza pasarelas SMS-a-API que reenvían el contenido al endpoint de Plaspy.
- Plaspy soporta tanto UDP como TCP en el puerto 8888, según cómo esté configurado el gateway de reenvío o el propio dispositivo.
- Usar el endpoint compartido de Plaspy asegura una ingestión consistente y el reconocimiento automático del protocolo entre distintos modelos de rastreador.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar la redacción de los mensajes SMS, los campos de telemetría disponibles y el comportamiento de los comandos de control; confirme siempre la versión de firmware del dispositivo desplegado.
- Las revisiones de hardware o las variantes regionales del dispositivo pueden modificar los formatos de mensaje soportados o las funciones de comunicación.
- La elección del transporte (reportes directos por TCP/UDP frente a reenvío SMS-a-API) afecta la forma en que los mensajes llegan a Plaspy; elija el método que coincida con las capacidades del dispositivo y las necesidades operativas.
- Algunos flujos de trabajo requieren reenvío de SMS hacia Plaspy mediante pasarelas o ingestión manual en lugar de reportes IP directos desde el rastreador.
- Valide los enlaces de mapa y los formatos de coordenadas originados por el dispositivo con los requisitos de ingestión de Plaspy para evitar incompatibilidades de parseo.
- Consulte la documentación del fabricante para confirmar qué comandos SMS y mensajes de estado están disponibles según la revisión de su dispositivo.

## Por qué es importante conocer el protocolo

Comprender el comportamiento a alto nivel del protocolo de comunicación del E-Mayak 3.1 ayuda a asegurar una configuración confiable, una ingestión correcta de mensajes y una operación predecible dentro de Plaspy. Saber qué envía el dispositivo y cómo lo recibe Plaspy acelera la resolución de problemas y mejora la fiabilidad a largo plazo de los reportes y alertas.

- Garantiza que el reenvío SMS o la configuración de la pasarela entreguen mensajes correctamente formateados a Plaspy.
- Ayuda a correlacionar posiciones reportadas, mensajes de latido y telemetría con las expectativas de batería y ciclo de vida del dispositivo.
- Facilita el diagnóstico de reportes faltantes causados por saldo de SIM, cobertura de red o comportamiento de sueño profundo.
- Permite planear umbrales de alerta e intervalos de reporte acordes al diseño de bajo consumo del dispositivo.
- Aclara si un caso de uso requiere un flujo de trabajo orientado a SMS o un dispositivo con telemetría GPRS continua.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el AutoFon E-Mayak 3.1 es una opción práctica para organizaciones que necesitan rastreo discreto, de larga duración y consultas de ubicación bajo demanda. Plaspy puede ingerir posiciones y telemetría originadas por SMS a través de pasarelas SMS-a-API comunes o mediante workflows de ingestión manual para ofrecer mapeo, alertas e informes históricos sin exigir telemetría GPRS continua desde el dispositivo.

Si desea saber más sobre cómo Plaspy maneja integraciones de dispositivos y los flujos de trabajo disponibles, visite https://www.plaspy.com. Para obtener los detalles de protocolo específicos más recientes, notas de firmware e instrucciones de configuración, verifique la información con el fabricante en https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
