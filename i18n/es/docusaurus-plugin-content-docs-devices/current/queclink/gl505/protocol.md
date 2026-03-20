---
slug: /queclink/gl505/protocol
id: gl505-protocol
sidebar_label: Protocol
title: QuecLink - GL505 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el QuecLink GL505 con Plaspy en rastreo de ganado y activos remotos
keywords:
  - QuecLink GL505
  - Protocolo GL505
  - Protocolo GPS QuecLink GL505
  - Protocolo de rastreo GL505
  - Protocolo de rastreador GPS QuecLink
  - Compatibilidad GL505 Plaspy
  - Rastreador GPS para ganado
  - Rastreo de activos en pasturas
  - Integración QuecLink GL505
  - Protocolo de rastreador GPS Plaspy
---

# QuecLink - Protocolo GL505

Esta página ofrece el contexto público del protocolo para usar el QuecLink GL505 con Plaspy. Resume, a alto nivel, cómo el GL505 transmite telemetría y eventos a la plataforma Plaspy, con énfasis en comportamientos relevantes para la integración en escenarios de rastreo de ganado y activos al aire libre. El GL505 es un rastreador resistente, alimentado por batería y diseñado para despliegues de larga duración; está pensado para reportar ubicación GNSS, alertas por entrada/salida de geo-cercas, notificaciones por inactividad basadas en movimiento y señales de manipulación apropiadas para instalaciones ocultas en collares.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; el tiempo exacto de los mensajes y el comportamiento pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conectar con Plaspy, el dispositivo puede apuntar al endpoint de Plaspy usando d.plaspy.com o la IP 54.85.159.138 en el puerto 8888. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y soporta equipos configurados por UDP o TCP en el puerto 8888.

## Resumen del protocolo

El GL505 transmite información de ubicación y eventos a un endpoint de servidor para que Plaspy pueda ingerir, normalizar y presentar los datos en monitoreo en vivo y reproducción histórica. El contexto público del protocolo aquí descrito se centra en el papel del reporte del dispositivo, la identificación y la entrega de eventos, en lugar de formatos internos de trama o reglas de parseo propietarias.

- El protocolo permite que el dispositivo reporte posiciones GNSS, eventos de movimiento, activaciones de geo-cerca y actualizaciones básicas de estado para su uso en paneles y alertas en Plaspy.
- La información de identificación enviada por el dispositivo permite a Plaspy asociar los mensajes entrantes con un registro de rastreador y un activo específico.
- El reporte de eventos (por ejemplo, violación de una geo-cerca o inactividad) alimenta las reglas de alerta y las notificaciones posteriores en Plaspy.
- El reporte independiente del transporte significa que el mismo protocolo lógico puede utilizarse sobre UDP o TCP según la configuración del dispositivo y las condiciones de red.
- Los temporizadores e intervalos de reporte definidos en el firmware del dispositivo determinan la frecuencia con la que el GL505 envía actualizaciones y, por ende, el ahorro de batería en campo.

## Detección del protocolo por parte de Plaspy

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador, de modo que los usuarios normalmente no necesitan seleccionar el protocolo de forma manual en la plataforma. Si el GL505 está configurado para reportar al endpoint de Plaspy, la plataforma asociará la telemetría entrante con el registro correcto del dispositivo y procesará los mensajes para visualización y alertas.

- Plaspy acepta reportes de dispositivos en un puerto común y detecta automáticamente el protocolo usado por las conexiones entrantes.
- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o a la IP 54.85.159.138.
- El puerto común que usa Plaspy para todos los dispositivos es el 8888; Plaspy emplea este puerto de forma uniforme entre los rastreadores compatibles.
- Cuando el rastreador apunta al endpoint de Plaspy y envía reportes válidos, normalmente no es necesaria la selección manual de protocolo en la plataforma.
- Una identificación de dispositivo adecuada y la consistencia en los intervalos de reporte ayudan a Plaspy a relacionar los datos entrantes con el activo GL505 correcto y a mantener registros históricos limpios.

## Contexto de transporte y conexión

La elección de transporte afecta la confiabilidad, la latencia y el consumo de batería. El GL505 puede configurarse para usar UDP o TCP para llegar al endpoint de Plaspy; la elección dependerá de la configuración del dispositivo, la disponibilidad de red y el escenario de despliegue específico.

- El GL505 puede configurarse para usar UDP en el puerto 8888 cuando se busca menor overhead y un comportamiento de reintento más sencillo.
- El dispositivo también puede configurarse para usar TCP en el puerto 8888 cuando se requiere entrega más fiable y comportamiento orientado a conexión.
- Plaspy acepta conexiones en d.plaspy.com y en la IP 54.85.159.138, por lo que los dispositivos pueden apuntar a un nombre de host o a una dirección IP directa.
- Todos los dispositivos que trabajan con Plaspy usan el mismo puerto 8888, lo que simplifica el aprovisionamiento y la dirección de servidores en despliegues a gran escala.
- Ajustes de red como APN, reglas de roaming y la cobertura celular influyen en qué transporte funciona mejor en entornos remotos o pastoriles.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el tiempo entre mensajes, las funciones disponibles o campos opcionales; verifique las notas de firmware para comportamiento específico del dispositivo.
- Las revisiones de hardware y las variaciones regionales del modelo pueden afectar qué transportes o funciones de telemetría están disponibles en una unidad GL505 concreta.
- Las herramientas de configuración del fabricante o comandos SMS de aprovisionamiento pueden cambiar los endpoints de reporte o la elección de transporte; confirme los ajustes antes del despliegue.
- La selección de transporte (UDP vs TCP) puede depender del presupuesto de energía, la fiabilidad de la red y la necesidad de garantizar la entrega de alertas críticas.
- La detección automática de protocolo de Plaspy reduce la configuración manual, pero el dispositivo debe estar correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre valide la compatibilidad y la disponibilidad de funciones frente a la documentación oficial de QuecLink para el GL505 y el firmware específico instalado.

## Por qué es importante entender el protocolo

Conocer cómo el GL505 se comunica con Plaspy ayuda a garantizar reportes confiables, alertas precisas y una vida de batería predecible en aplicaciones de monitoreo de ganado y activos remotos. Estar al tanto de las opciones de transporte, los intervalos de reporte y los comportamientos dependientes del firmware puede reducir problemas de despliegue y acelerar la resolución de fallas.

- Confirma que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que la telemetría llegue de forma confiable.
- Ayuda a elegir el transporte adecuado (UDP o TCP) según cobertura, latencia y tradeoffs de batería.
- Facilita la interpretación de por qué ciertos eventos esperados (geo-cerca o inactividad) sí o no aparecieron en Plaspy.
- Permite una mejor planificación del manejo de energía al alinear la frecuencia de reporte con las expectativas de vida útil de la batería.
- Favorece la coordinación con equipos de campo e integradores al validar la instalación, la resistencia a manipulaciones y la colocación del collar.

## Ventajas de usar Plaspy con este protocolo

Usar el QuecLink GL505 con Plaspy ofrece una forma práctica de convertir telemetría GNSS de bajo consumo y resistente en visibilidad centralizada para la gestión de hatos, flujos de trabajo anti-robo y monitoreo de activos. Plaspy ingiere datos de ubicación y eventos y los pone a disposición para alertas configurables, reproducción histórica e informes operativos, de modo que los responsables puedan actuar rápido cuando animales se alejan, muestran inactividad o están en riesgo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el GL505, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante, consulte siempre la documentación oficial de QuecLink en https://www.queclink.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda verificar la información actual con el fabricante.
