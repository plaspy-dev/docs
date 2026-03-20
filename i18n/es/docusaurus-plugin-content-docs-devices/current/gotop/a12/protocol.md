---
slug: /gotop/a12/protocol
id: a12-protocol
sidebar_label: Protocol
title: GOTOP - A12 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP A12 para animales y compatibilidad con Plaspy
keywords:
  - Protocolo GOTOP A12
  - Protocolo GPS GOTOP A12
  - GOTOP A12 Plaspy
  - Comunicación GOTOP A12
  - Protocolo rastreador GPS GOTOP
  - Protocolo rastreador para animales
  - Compatibilidad GOTOP A12
  - Protocolo de rastreo GOTOP
  - Protocolo de dispositivo Plaspy
  - Rastreador para animales GPRS
---

# GOTOP - Protocolo A12

Esta página ofrece un resumen público del contexto del protocolo de comunicación del rastreador para animales GOTOP A12 cuando se utiliza con Plaspy. Se centra en cómo el dispositivo informa ubicación y estado a Plaspy y qué debe considerarse al configurar el rastreador para obtener reportes confiables. El objetivo es explicar conceptos a nivel de protocolo que faciliten la puesta en marcha y la resolución de problemas sin reproducir detalles de implementación que corresponden al fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el rendimiento en campo puede diferir entre lanzamientos de firmware o modelos regionales.

## Resumen del protocolo

El protocolo del GOTOP A12 permite que el dispositivo entregue datos de posicionamiento, estado y eventos desde el collar del animal a un servidor remoto como Plaspy. En la práctica, esto significa que el rastreador envía reportes periódicos o por evento a través del canal de datos celulares para que la plataforma pueda mostrar ubicación en tiempo real, historial de rutas y alertas.

- Transporta telemetría esencial como la ubicación GPS y la localización basada en red cuando el GPS no está disponible.
- Envía información de estado y eventos, por ejemplo alertas de movimiento y notificaciones de batería baja.
- Habilita funciones de monitoreo remoto opcionales que el equipo soporte, como escucha remota o comandos de configuración remota.
- Permite al servidor correlacionar los datos entrantes con una identidad de dispositivo específica para que los reportes aparezcan bajo el rastreador correcto en Plaspy.
- Soporta el envío de rutas históricas para que las ubicaciones pasadas puedan mostrarse en el mapa y usarse en análisis o reproducción.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos del rastreador en un endpoint de servidor compartido y determina automáticamente el manejo apropiado. Cuando un rastreador A12 se configura para reportar a Plaspy, normalmente no es necesario seleccionar manualmente un protocolo dentro de Plaspy mientras el dispositivo apunte al endpoint correcto y use uno de los transportes soportados.

- Configure el rastreador para reportar a Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888; todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes.
- Los dispositivos pueden utilizar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las capacidades del firmware.
- Una vez que comiencen los reportes, Plaspy detectará automáticamente el protocolo del rastreador y asociará los mensajes entrantes con la instancia de dispositivo correcta.
- En la mayoría de los casos, usted solo debe asegurarse de que el dispositivo pueda alcanzar Plaspy y que los identificadores o credenciales del dispositivo estén configurados según lo requiera el rastreador.

## Transporte y contexto de conexión

Las elecciones de conexión afectan la fiabilidad con la que el A12 entrega datos a Plaspy. El GOTOP A12 reporta por GPRS y puede configurarse para conectarse a Plaspy usando UDP o TCP en el mismo puerto que utilizan todos los dispositivos soportados por la plataforma. Tanto el dominio de Plaspy como la dirección numérica del servidor son compatibles para la configuración del dispositivo.

- El dominio del servidor Plaspy para reportes es d.plaspy.com.
- La dirección numérica del servidor Plaspy es 54.85.159.138.
- El puerto compartido de reporte para Plaspy es 8888 y es usado por todos los dispositivos soportados por la plataforma.
- El A12 puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del equipo y las condiciones de red.
- Asegúrese de que el dispositivo tenga servicio de datos GPRS activo y que los ajustes de APN estén configurados de acuerdo con su operador celular y las instrucciones del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades A12 pueden cambiar qué funciones se reportan o qué opciones de transporte están disponibles.
- Revisiones de hardware o modelos regionales pueden tener configuraciones por defecto o características soportadas ligeramente distintas.
- La configuración del lado del fabricante (APN por defecto, comandos SMS o ajustes remotos) puede influir en cómo el dispositivo reporta a plataformas de terceros.
- Elegir UDP frente a TCP afecta las características de entrega; consulte la documentación del dispositivo y pruebe según su caso de uso.
- Valide la compatibilidad y los pasos de configuración con la documentación oficial de GOTOP y las notas de la versión del A12.
- Realice una prueba controlada después de la configuración para confirmar que el rastreador reporta correctamente a Plaspy antes de un despliegue amplio.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GOTOP A12 ayuda a asegurar una configuración confiable, una resolución de problemas precisa y una operación predecible a largo plazo cuando el dispositivo reporta a Plaspy. Tener expectativas claras sobre qué reporta el dispositivo y cómo se conecta reduce el tiempo de despliegue y facilita el diagnóstico de problemas.

- Ayuda a verificar que las alertas de ubicación, movimiento y batería se envían y se muestran como se espera.
- Orienta las decisiones de configuración, como la selección de transporte y la dirección del servidor, para optimizar la fiabilidad.
- Facilita la interpretación de registros e informes del dispositivo durante la puesta en servicio inicial o al investigar brechas de datos.
- Permite planificar la vida útil de la batería y los intervalos de reporte al entender reportes por evento frente a reportes periódicos.
- Recomienda comprobaciones rutinarias tras actualizaciones de firmware para confirmar la compatibilidad continua con Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP A12 con Plaspy ofrece una forma centralizada de monitorear la ubicación de animales, recibir alertas de movimiento y batería baja, y ver rutas históricas mediante las funciones de mapas e informes de la plataforma. La detección automática de protocolo de Plaspy y su endpoint unificado simplifican la integración para que el rastreador pueda comenzar a reportar con una configuración mínima en el lado de la plataforma.

Si desea conocer más sobre cómo Plaspy soporta la integración de dispositivos y flujos de trabajo de rastreo de flotas o activos, visite https://www.plaspy.com. Para los detalles de protocolo específicos del dispositivo más recientes, notas de firmware y comandos de configuración del GOTOP A12, consulte el sitio del fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
