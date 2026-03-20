---
slug: /thinkrace/pt590/protocol
id: pt590-protocol
sidebar_label: Protocol
title: ThinkRace - PT590 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo ThinkRace PT590 para compatibilidad e integración con Plaspy
keywords:
  - Protocolo ThinkRace PT590
  - Protocolo GPS ThinkRace PT590
  - Compatibilidad PT590 Plaspy
  - Protocolo de rastreo PT590
  - Protocolo de rastreador ThinkRace
  - Protocolo GPS para rastreador de mascotas
  - Comunicación de dispositivos Plaspy
  - Integración ThinkRace PT590
  - Protocolo de rastreo de mascotas
  - Guía de protocolo de rastreador
---

# ThinkRace - Protocolo PT590

Esta página explica el contexto público del protocolo para usar el rastreador ThinkRace PT590 con Plaspy. Se centra en cómo el dispositivo comunica con Plaspy, qué ajustes de conexión se usan de forma pública y qué comportamientos del dispositivo son relevantes para una integración exitosa. El PT590 es un rastreador GPS para mascotas con posicionamiento en dos modos, protección IP67 y funciones de monitoreo remoto; esas capacidades definen los tipos de mensajes y eventos que usted puede esperar ver reportados a un servidor como Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este reporta a la plataforma. El comportamiento exacto del protocolo en el PT590 puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante, por lo que esta página mantiene un nivel público y no sensible mientras describe el transporte y el contexto de integración necesario para la configuración y solución de problemas.

## Resumen del protocolo

El protocolo de comunicación del PT590 es el método que el rastreador usa para reportar posición, estado y alertas a un servidor remoto como Plaspy. A grandes rasgos, el protocolo permite que el dispositivo se identifique, envíe periódicamente ubicación y telemetría, y reporte actualizaciones basadas en eventos como cambios de energía o geocercas. Comprender este rol ayuda a garantizar que el rastreador esté configurado para comunicarse con Plaspy y que los datos reportados sean útiles para monitoreo y alertas.

- Permite reportes periódicos y por eventos de posiciones GPS y estados a Plaspy.
- Transporta información de identificación esencial para que Plaspy asocie los mensajes entrantes con un registro de dispositivo.
- Facilita funciones de monitoreo remoto, como actualizaciones de ubicación, alertas de batería baja o manipulación, y cambios de modo.
- Permite aplicar comandos de configuración o parámetros remotos por parte del fabricante o integradores cuando esté soportado.
- Proporciona un flujo consistente de telemetría que Plaspy consume para mostrar seguimiento en tiempo real e históricos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de los rastreadores en un punto compartido y determina automáticamente cuál protocolo compatible está usando el dispositivo. En la mayoría de los casos, cuando un PT590 apunta al endpoint de Plaspy y envía datos, la plataforma identificará el dispositivo y comenzará a procesar mensajes de ubicación y eventos sin que el usuario tenga que seleccionar el protocolo manualmente.

- Plaspy expone un único endpoint público para el reporte de dispositivos: d.plaspy.com.
- La IP del servidor de Plaspy para conexiones de dispositivos es 54.85.159.138.
- Plaspy escucha en un puerto común para todos los dispositivos, que es el 8888.
- La plataforma detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta al endpoint.
- Normalmente los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

## Transporte y configuración de conexión

Los ajustes de transporte y destino determinan si el PT590 puede alcanzar Plaspy correctamente. El rastreador se puede configurar para usar UDP o TCP según las capacidades del dispositivo y la configuración del operador o la SIM. Asegurar el transporte y el destino correctos en el dispositivo es un paso clave para que el PT590 se comunique con Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración.
- El rastreador puede apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los modelos soportados para simplificar la configuración.
- Elija UDP o TCP en el dispositivo de acuerdo con la estabilidad de la red y las recomendaciones del firmware del equipo.
- Confirme el APN y los ajustes de red del dispositivo para que las conexiones salientes al endpoint de Plaspy estén permitidas por la SIM y el operador.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden alterar la frecuencia de mensajes, campos disponibles y comportamiento de eventos; verifique la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o variantes regionales pueden tener diferencias sutiles en los transportes soportados o en la gestión de energía que afecten la frecuencia de reporte.
- Puede ser necesario usar herramientas de configuración del fabricante o comandos SMS para establecer el host de reporte y el transporte en el PT590.
- Algunos servicios u operadores pueden preferir TCP sobre UDP o viceversa; pruebe ambos transportes si encuentra problemas de conectividad.
- La detección automática de Plaspy reduce la configuración manual, pero los ajustes iniciales de red del dispositivo deben apuntar al endpoint de Plaspy para que la detección ocurra.
- Valide siempre comportamientos críticos como SOS, batería baja y reportes de geocerca después de la configuración y tras actualizaciones de firmware.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a asegurar que el PT590 entregue datos de ubicación y eventos confiables a Plaspy, y acelera la resolución de problemas cuando faltan mensajes o hay retrasos. Conocer el rol general del protocolo y el contexto de transporte permite a los administradores tomar decisiones informadas sobre la ubicación del dispositivo, ajustes de red y mantenimiento de firmware.

- Acelera la configuración inicial al enfocar en el transporte, host y configuración del APN correctos.
- Ayuda a aislar problemas de conectividad entre el dispositivo, la red móvil y el endpoint de Plaspy.
- Aclara las expectativas sobre frecuencia de reportes, tipos de eventos y el impacto en batería de las transmisiones.
- Facilita pruebas efectivas tras actualizaciones de firmware o al cambiar variantes de hardware.
- Reduce tiempos de inactividad al guiar comprobaciones prácticas para identificación y entrega de telemetría.

## Por qué usar Plaspy con este protocolo

Usar el PT590 con Plaspy permite a organizaciones y dueños de mascotas centralizar ubicación en tiempo real, alertas de eventos y seguimiento histórico en una sola plataforma. Plaspy procesa los datos entrantes del dispositivo, los presenta para monitoreo e informes, y aplica los mismos ajustes de puerto y endpoint entre modelos soportados para simplificar el alta de dispositivos.

Si desea saber más sobre Plaspy, visite https://www.plaspy.com. Para obtener detalles específicos y actualizados del protocolo, notas de firmware e instrucciones de configuración para el PT590, verifique la información con el fabricante en https://www.thinkrace.com/ ya que los protocolos y el comportamiento del dispositivo pueden cambiar con el tiempo.
