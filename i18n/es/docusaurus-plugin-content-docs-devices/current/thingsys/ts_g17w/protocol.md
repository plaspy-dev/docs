---
slug: /thingsys/ts_g17w/protocol
id: ts_g17w-protocol
sidebar_label: Protocol
title: ThingSys - TS-G17W Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para integrar el tracker ThingSys TS G17W con Plaspy para seguimiento en tiempo real y gestión de flotas
keywords:
  - Protocolo ThingSys TS G17W
  - Protocolo GPS TS G17W
  - Compatibilidad del rastreador ThingSys con Plaspy
  - Protocolo de comunicación TS G17W
  - Protocolo de rastreo TS G17W
  - Protocolo rastreador GPS ThingSys
  - Protocolo de dispositivo Plaspy
  - Rastreo de vehículos TS G17W
  - Rastreo de flotas TS G17W
  - Guía de integración TS G17W
---

# ThingSys - TS-G17W Protocolo

Esta página describe el contexto público del protocolo para utilizar el tracker ThingSys TS-G17W con la plataforma Plaspy. Expone, en términos generales y no sensibles, cómo el dispositivo se comunica con Plaspy para que usted, como integrador o responsable de flota, entienda los requisitos de conexión, el comportamiento esperado y las consideraciones prácticas de compatibilidad.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del tracker cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo en el TS-G17W puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y recomienda verificar la documentación oficial de ThingSys para detalles específicos de firmware.

## Visión general del protocolo

El protocolo de reporte del TS-G17W es el mecanismo mediante el cual el tracker envía datos de ubicación, estado y alarmas a un servidor remoto como Plaspy. En la práctica, el protocolo define cómo se identifica el dispositivo, qué mensajes envía ante distintos eventos y cómo la plataforma procesa esos mensajes para ofrecer seguimiento en vivo y gestionar eventos.

- Permite enviar actualizaciones de ubicación periódicas y basadas en eventos a un servidor backend para mapas e historial.
- Transporta telemetría y datos de alarma, como estado de ignición, alertas por exceso de velocidad y eventos de vibración, para uso en reglas y notificaciones.
- Facilita la identificación del dispositivo para que Plaspy asocie los reportes entrantes al activo y cuenta correctos.
- Proporciona un canal estable para comandos remotos y modos de rastreo cuando el dispositivo y la red lo soportan.
- Soporta reporte en tiempo real vía push y comportamientos de respaldo (por ejemplo SMS u otros modos de reporte) según lo implemente el fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes de distintos tipos de trackers en un endpoint de red compartido y determina automáticamente el protocolo del dispositivo en función de la conexión entrante y la secuencia de mensajes. Esta detección automática facilita la incorporación cuando un TS-G17W se configura para reportar a Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker.
- Los dispositivos que envían datos a Plaspy deben apuntar al endpoint de Plaspy para permitir la detección automática.
- Cuando un TS-G17W está configurado correctamente, normalmente usted no necesita seleccionar manualmente un protocolo dentro de Plaspy.
- Plaspy admite conexiones tanto TCP como UDP para reportes entrantes, según la configuración del equipo.
- Una configuración correcta del identificador del dispositivo asegura que Plaspy pueda asociar los mensajes con los activos y cuentas de usuario adecuados.

## Contexto de transporte y conexión

Los ajustes de conexión son clave para asegurar un reporte confiable. El TS-G17W puede configurarse para usar transporte UDP o TCP hacia Plaspy, y el equipo puede resolver el servidor por nombre de dominio o por dirección IP según las opciones de aprovisionamiento.

- Los dispositivos pueden apuntar al dominio de servidor de Plaspy d.plaspy.com para resolución vía DNS.
- Como alternativa puede usarse la IP del servidor Plaspy 54.85.159.138 cuando se prefiera una configuración directa por IP.
- El puerto de red utilizado para todas las conexiones de dispositivos a Plaspy es el 8888; Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- El TS-G17W puede operar sobre enlaces celulares GPRS o LTE para entregar reportes al endpoint de Plaspy.
- Seleccione TCP o UDP en el dispositivo según la configuración del tracker y las recomendaciones del operador; Plaspy acepta ambos transportes en el puerto compartido.

## Consideraciones de compatibilidad

- Las variaciones de firmware pueden cambiar el contenido de los mensajes o los intervalos de reporte; siempre revise las notas de firmware del equipo para identificar cambios que afecten campos de datos o temporización.
- Las revisiones de hardware o las bandas regionales para LTE y la alternativa 2G pueden afectar el comportamiento de conectividad en distintos países.
- Algunas funciones del equipo, como tipos específicos de alarma o conjuntos de comandos remotos, pueden ser opcionales o requerir compilaciones de firmware concretas.
- La elección del transporte (UDP frente a TCP) se configura en el dispositivo y puede influir en las características de entrega bajo distintas condiciones de red.
- Asegúrese de que el identificador del dispositivo y los ajustes de APN estén correctos para que el tracker alcance el endpoint de Plaspy de forma confiable.
- Valide la compatibilidad y cualquier limitación de funciones contra la documentación oficial de ThingSys para el modelo y firmware exactos que vaya a desplegar.

## Por qué es importante comprender el protocolo

Entender cómo se comunica el TS-G17W facilita la configuración, la resolución de problemas y la fiabilidad a largo plazo al alimentar datos en Plaspy. Tener claridad sobre el protocolo y el contexto de transporte reduce el tiempo de incorporación y hace más ágil y predecible la resolución de incidencias de conectividad o reporte.

- Garantiza que los dispositivos estén configurados para reportar al endpoint y transporte correctos de Plaspy para la detección automática del protocolo.
- Ayuda a identificar si los problemas son de red, transporte o configuración del dispositivo durante la resolución de incidentes.
- Orienta sobre elecciones razonables de intervalos de reporte y configuración de alarmas para equilibrar necesidades de datos y costos celulares.
- Facilita la planificación de actualizaciones de firmware o revisiones de hardware que puedan alterar el comportamiento de los mensajes.
- Permite a los integradores confirmar que los campos de alarma y telemetría requeridos por los flujos de trabajo de la flota están presentes en los reportes del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el TS-G17W con Plaspy consolida los datos de seguimiento vehicular en una única plataforma para visibilidad, alertas y supervisión operativa. El dispositivo entrega información de ubicación y eventos que Plaspy procesa y presenta como posiciones en tiempo real, recorridos históricos y notificaciones basadas en reglas, útiles para gestores de flota, operadores logísticos y equipos de seguridad.

Plaspy acepta los reportes del TS-G17W en el endpoint y puerto compartidos, detecta automáticamente el protocolo del tracker y correlaciona los mensajes entrantes con los activos para mapeo, geocercas y automatizaciones. Para conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo del dispositivo, comportamiento del firmware y notas de implementación en el sitio del fabricante https://www.thingsys.com/ ya que estos elementos pueden cambiar con el tiempo.
