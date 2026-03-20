---
slug: /uvi_group/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: UVI Group - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del UVI Group GT02 y su comunicación con Plaspy para seguimiento y monitoreo de vehículos
keywords:
  - protocolo UVI Group GT02
  - protocolo GPS UVI GT02
  - protocolo de rastreo GT02
  - compatibilidad GT02 Plaspy
  - rastreador GPS GT02
  - seguimiento de vehículos GT02
  - protocolo GPRS GPS
  - comunicación UVI GT02
  - protocolo de rastreador Plaspy
  - gestión de flotas GT02
---

# UVI Group - Protocolo GT02

Esta página describe el contexto público del protocolo para usar el rastreador UVI Group GT02 con Plaspy. El GT02 es un dispositivo compacto GPS GSM GPRS pensado para monitoreo vehicular, protección antirrobo y reporte de posición en tiempo real. Utiliza GPS para la localización, GSM GPRS para la transmisión de datos y admite comandos por SMS; esta página se concentra en el papel de comunicación que tiene el dispositivo al reportar hacia la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar a la plataforma. Para Plaspy el endpoint público de reporte es d.plaspy.com (servidor IP 54.85.159.138) en el puerto 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo y los detalles en tiempo de ejecución pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene consultar al fabricante del equipo para comportamientos específicos de firmware.

## Resumen del protocolo

El rastreador GT02 transmite información de posición y estado mediante GSM GPRS a un servidor remoto. El contexto público del protocolo abarca cómo el dispositivo se identifica ante el servidor, cómo se entregan los mensajes de ubicación y estado, y cómo una plataforma de flotas como Plaspy recibe e interpreta esos mensajes para su representación en mapas y monitoreo.

- Permite que el dispositivo reporte posición GPS, velocidad, dirección y estado básico a una plataforma remota.
- Proporciona un mecanismo de identificación para que el servidor receptor asocie mensajes a un equipo específico.
- Soporta la entrega de datos a través de la red móvil para que los reportes lleguen a Plaspy y permitan monitoreo en tiempo real.
- Ofrece opciones de respaldo como SMS para comandos y consultas básicas cuando la transmisión de datos no esté disponible.
- Opera en conjunto con los comportamientos de alimentación y GPS del dispositivo para generar actualizaciones periódicas o por eventos de forma confiable.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido y detecta automáticamente el protocolo entrante del rastreador cuando el equipo reporta a la plataforma. Esto elimina la necesidad de seleccionar manualmente el protocolo dentro de Plaspy para la mayoría de dispositivos correctamente configurados y facilita la incorporación de rastreadores GT02.

- Plaspy recibe el tráfico de dispositivos en d.plaspy.com y en la IP 54.85.159.138.
- Todos los dispositivos soportados usan el mismo puerto en el servicio Plaspy, que es el puerto 8888.
- Los equipos pueden configurarse para enviar datos usando UDP o TCP en el puerto 8888, según lo permita el dispositivo.
- Cuando un GT02 está correctamente apuntado al endpoint de Plaspy, la plataforma detectará automáticamente el protocolo del rastreador y gestionará los reportes entrantes.
- Generalmente usted no necesitará seleccionar un protocolo manualmente en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

Los ajustes de transporte y conexión determinan cómo los reportes del GT02 llegan a Plaspy, pero no cambian el propósito general del protocolo. El GT02 emplea GSM GPRS para entregar datos y permite configurar el host objetivo y el modo de transporte.

- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 para los reportes.
- Plaspy acepta conexiones y mensajes en d.plaspy.com y en 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo número de puerto para todos los dispositivos que soporta, lo que simplifica la configuración.
- La elección entre UDP y TCP puede afectar las características de entrega, pero ambos modos son compatibles en el endpoint de Plaspy para dispositivos GT02.
- Asegúrese de que el APN y la configuración GPRS del equipo sean válidos para que los mensajes puedan atravesar la red móvil hasta el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles o comportamientos opcionales; verifique la versión de firmware del equipo al comprobar compatibilidad.
- Las revisiones de hardware y las variantes regionales pueden alterar las funciones soportadas o los ajustes de reporte por defecto de fábrica.
- Las configuraciones predeterminadas del fabricante podrían usar SMS para algunos comandos y GPRS para el rastreo; confirme qué transporte utilizará en producción.
- La selección de transporte entre UDP y TCP impacta en el comportamiento de red y debe coincidir con la forma en que el dispositivo esté configurado para reportar.
- Siempre valide que el equipo esté reportando al endpoint de Plaspy confirmando que está apuntado a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- En caso de duda, consulte la documentación del fabricante para confirmar qué comandos y ajustes están disponibles en la unidad GT02 específica que posee.

## Por qué es importante conocer el protocolo

Entender cómo se comunica el GT02 facilita una configuración exitosa, un rastreo confiable y una resolución de problemas más eficiente. Saber cómo reporta el equipo, qué transporte utiliza y cómo Plaspy recibe los datos reduce el tiempo de configuración y mejora la fiabilidad operativa.

- Garantiza que el dispositivo esté configurado para apuntar al endpoint y puerto correctos de Plaspy, de modo que los reportes se reciban.
- Ayuda a diagnosticar problemas de conectividad originados en el APN, la red móvil o discrepancias en el transporte.
- Aclara las expectativas sobre la frecuencia de reporte, comportamiento de energía y cómo el dispositivo señala eventos.
- Facilita pruebas y validación durante el despliegue inicial para que los datos fluyan a Plaspy como se espera.
- Mejora la coordinación con el proveedor del dispositivo cuando el comportamiento difiere de la documentación o de lo esperado.

## Por qué usar Plaspy con este protocolo

Usar el UVI Group GT02 con Plaspy ofrece una forma práctica de capturar posición, movimiento y estado de vehículos y visualizar esos datos en un contexto de gestión de flotas. Plaspy gestiona los reportes entrantes en un endpoint y puerto compartidos, detectando automáticamente el protocolo del rastreador para mapear la información del equipo en vistas de ubicación y estado útiles para operaciones y monitoreo de seguridad.

Si desea obtener más información sobre cómo Plaspy soporta el reporte de dispositivos y la visibilidad de flotas, visite https://www.plaspy.com. Para detalles más actuales y específicos por modelo sobre protocolo y firmware, verifique el comportamiento y las recomendaciones de configuración con el fabricante en http://www.uvi-group.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
