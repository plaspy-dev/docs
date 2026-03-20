---
slug: /cantrack/gf200ls/protocol
id: gf200ls-protocol
sidebar_label: Protocol
title: CanTrack - GF200LS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo CanTrack GF200LS y su comunicación con Plaspy para rastreo y telemetría
keywords:
  - Protocolo CanTrack GF200LS
  - GPS CanTrack GF200LS
  - Compatibilidad GF200LS Plaspy
  - Protocolo de comunicación GF200LS
  - Protocolo de rastreo GF200LS
  - Protocolo rastreador GPS CanTrack
  - Protocolo rastreo de activos GF200LS
  - Protocolo de dispositivo Plaspy
  - GF200LS larga autonomía
  - Rastreo de activos GF200LS
---

# CanTrack - Protocolo GF200LS

Esta página resume el contexto público del protocolo para utilizar el CanTrack GF200LS con Plaspy. Se centra en cómo el rastreador reporta posiciones y eventos a Plaspy, los ajustes de conexión que normalmente configura en el equipo y consideraciones generales de compatibilidad. El contenido está dirigido a usuarios técnicos y administradores de flota que desean comprender cómo se comunica el dispositivo con Plaspy sin entrar en detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El GF200LS puede configurarse para reportar por celular GPRS/TCP usando LTE o 2G, y el comportamiento de reporte puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. Plaspy acepta reportes entrantes en d.plaspy.com (54.85.159.138) y utiliza el puerto 8888; los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según lo permita la unidad.

## Visión general del protocolo

El protocolo de comunicación del GF200LS es el mecanismo que el rastreador emplea para enviar datos de ubicación, estado y eventos a un servidor remoto como Plaspy. En la práctica, esto abarca cómo el dispositivo se conecta mediante datos móviles, se identifica ante el servidor y empaqueta la información de posición y alertas para que la plataforma receptora pueda procesarla y mostrarla.

- Permite el envío de posiciones y entrega de eventos desde el dispositivo hacia Plaspy para seguimiento en tiempo real y histórico.
- Transporta la identidad del equipo y metadatos de estado para que Plaspy asocie los reportes con la unidad y cuenta correctas.
- Lleva eventos de manipulación, estado de batería y alimentación, así como indicadores de modo de reporte que se integran con alertas y flujos de trabajo en Plaspy.
- Permite configurar el APN y los ajustes de servidor en el dispositivo para que alcance de forma confiable el endpoint de Plaspy.
- Admite múltiples modos de reporte (tiempo real, intervalo, sincronizado por reloj) que equilibran frecuencia de actualización y vida de batería para despliegues prolongados.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartidos y detecta automáticamente el protocolo que usa un dispositivo cuando se conecta a ese endpoint. Para la mayoría de los casos, configurar correctamente el GF200LS para reportar a Plaspy es suficiente; normalmente no se requiere seleccionar manualmente el protocolo dentro de Plaspy.

- Plaspy acepta reportes en d.plaspy.com y en su IP pública 54.85.159.138 usando el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y el despliegue de los equipos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo comienza a reportar al endpoint compartido.
- Si el GF200LS está apuntando al endpoint de Plaspy y la configuración de red es correcta, el dispositivo será reconocido sin configuración adicional en la plataforma.
- Usted debe asegurarse de que el APN y los ajustes de servidor/puerto en el GF200LS coincidan con la configuración de conexión de Plaspy para permitir la detección automática.

## Contexto de transporte y conexión

La configuración de conexión determina cómo el GF200LS llega a Plaspy pero no cambia el propósito general del protocolo. El dispositivo soporta reporte por datos celulares y puede configurarse para usar UDP o TCP según la preferencia del instalador y las capacidades del firmware.

- El GF200LS puede configurarse para usar UDP o TCP en el puerto 8888, dependiendo del soporte del dispositivo y del comportamiento deseado.
- Los dispositivos pueden apuntarse al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los equipos, lo que facilita el aprovisionamiento en flotas con distintos modelos de rastreadores.
- La elección de transporte (UDP vs TCP) afecta las características de conexión pero no el objetivo general de entregar posiciones y eventos a Plaspy.
- Verifique que el APN, la dirección del servidor y el protocolo de transporte del dispositivo estén correctos para que los reportes lleguen de forma confiable al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar el temporizado de mensajes, los campos incluidos en los reportes y los comandos soportados; verifique la versión de firmware al realizar diagnósticos.
- Las revisiones de hardware o las variantes dentro de la familia GF200LS pueden diferir en modos de reporte disponibles o entradas de periféricos.
- Algunas funciones, como reporte de manipulación o telemetría avanzada, pueden requerir ajustes de firmware específicos o comandos de configuración proporcionados por el fabricante.
- La selección de transporte (UDP versus TCP) y la configuración del APN en el dispositivo afectan cómo el rastreador se comunica con Plaspy y con las redes móviles.
- El puerto compartido y la detección automática de protocolo de Plaspy reducen la configuración por dispositivo, pero aún son necesarios los ajustes correctos de APN y servidor en el equipo.
- Siempre valide el comportamiento en una unidad de prueba o en un entorno controlado antes de desplegar masivamente.

## Por qué es importante entender el protocolo

Comprender los aspectos básicos del protocolo de comunicación del GF200LS ayuda a los instaladores y operadores a configurar los dispositivos correctamente, diagnosticar problemas de conectividad y elegir modos de reporte acordes con las necesidades operativas. Saber cómo se comunica el dispositivo con Plaspy reduce el tiempo de configuración y mejora la confiabilidad en campo.

- Ayuda a asegurarse de que el APN y los ajustes de servidor apunten a d.plaspy.com o 54.85.159.138 con puerto 8888 para que los reportes lleguen a Plaspy.
- Facilita la elección de modos de reporte que equilibren vida de batería y visibilidad según el caso de uso.
- Permite una resolución de problemas más rápida cuando eventos o posiciones esperadas no aparecen en Plaspy.
- Orienta las pruebas de cambios de firmware o revisiones de hardware antes de un despliegue a gran escala.
- Aclara qué eventos reportados por el dispositivo (por ejemplo, manipulación o batería baja) deben activar alertas y respuestas operativas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GF200LS con Plaspy ofrece una solución práctica para organizaciones que necesitan rastreo de activos a largo plazo y con bajo mantenimiento. El diseño de larga espera del GF200LS, combinado con la ingesta centralizada y la visualización de Plaspy, ayuda a los equipos a monitorear activos dispersos o de acceso poco frecuente, recibir alertas de manipulación y revisar movimientos históricos con mínima intervención in situ.

Para obtener más información sobre Plaspy y cómo maneja protocolos de dispositivos y datos de flota, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información específica del protocolo y firmware del dispositivo con el fabricante en https://www.cantrackgps.com/.
