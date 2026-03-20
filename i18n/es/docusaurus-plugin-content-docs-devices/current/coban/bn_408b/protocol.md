---
slug: /coban/bn_408b/protocol
id: bn_408b-protocol
sidebar_label: Protocol
title: Coban - BN-408B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Coban BN 408B y cómo comunica ubicación y alarmas a Plaspy
keywords:
  - Coban BN 408B
  - protocolo BN 408B
  - protocolo GPS Coban
  - rastreador GPS BN 408B
  - compatibilidad BN 408B Plaspy
  - protocolo de comunicación BN 408B
  - protocolo de rastreo BN 408B
  - rastreador de activos Coban
  - gestión de flotas BN 408B
  - compatibilidad de dispositivos Plaspy
---

# Coban - Protocolo BN-408B

Esta página ofrece una visión pública del protocolo para utilizar el rastreador Coban BN-408B con Plaspy. Se enfoca en el contexto de comunicación y en orientación práctica para conectar el BN-408B a Plaspy sin entrar en detalles privados de implementación. La intención es ayudar a responsables de flota y activos a comprender cómo el dispositivo informa ubicación, alarmas y estado a Plaspy de forma que facilite una integración confiable.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los dispositivos están correctamente apuntados al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, revisión de hardware e implementación del fabricante, por lo que esta página enfatiza el contexto general de reporte y transporte más que la estructura interna de tramas.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del BN-408B regula cómo el dispositivo se identifica, reporta posición y telemetría, y entrega mensajes de alarma a un servidor como Plaspy. Para la compatibilidad con Plaspy lo relevante en términos públicos es cómo el dispositivo envía sus datos por la red y qué tipos de eventos reporta, más que los detalles internos de las tramas.

- El protocolo permite actualizaciones periódicas de posición y reportes basados en eventos, como movimiento, manipulación, batería baja y alarmas de geocerca, que Plaspy muestra y almacena.
- Provee mecanismos para que el dispositivo incluya información de identidad y estado, de modo que Plaspy pueda asociar los mensajes con el activo correcto y su perfil de telemetría.
- El rastreador puede reportar sobre múltiples transportes soportados por Plaspy, lo que permite despliegues flexibles a través de redes celulares.
- Los mensajes de alarma y estado forman parte del flujo de comunicación para que Plaspy pueda generar alertas, registros de incidentes y reglas de automatización.
- La configuración remota y el reporte por SMS están disponibles en el equipo y pueden complementar el reporte por TCP o UDP según las necesidades del despliegue.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de rastreadores en un endpoint común y determina automáticamente el protocolo del dispositivo cuando este está configurado para reportar a Plaspy. En la mayoría de los casos los usuarios no necesitan seleccionar un protocolo dentro de Plaspy siempre que la configuración de red del dispositivo apunte al endpoint de Plaspy y use el transporte soportado.

- El dominio del servidor Plaspy es d.plaspy.com, que resuelve al endpoint público para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138, que puede usarse en la configuración de red cuando se requiere una dirección numérica.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el envío de datos.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según las opciones del equipo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que típicamente no es necesario seleccionar el protocolo manualmente en la plataforma si el dispositivo apunta correctamente.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el BN-408B alcanza Plaspy a través de la red móvil y qué opciones de transporte se usan comúnmente. Las decisiones de despliegue, como UDP frente a TCP y el uso de SMS como respaldo, afectan la fiabilidad y el consumo de batería; estos parámetros se configuran en el dispositivo o mediante comandos de configuración remota proporcionados por el fabricante.

- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo y según el transporte preferido para el despliegue.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como destino para reporte y configuración.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes para flotas.
- El reporte por SMS es una alternativa soportada para equipos que envían alertas críticas por SMS o cuando los datos por paquete no están disponibles.
- Ajustes a nivel de red, como el APN y la selección de transporte, se configuran en el dispositivo y determinan cómo alcanza el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de los mensajes, los tipos de eventos habilitados y los comandos remotos disponibles; verifique el comportamiento del firmware con las notas del fabricante.
- Las revisiones de hardware y las características específicas del Modelo B pueden agregar alarmas como SOS, desconexión de alimentación externa y inmovilización remota, lo que afecta el conjunto de eventos reportados a Plaspy.
- La selección entre TCP y UDP puede influir en las garantías de entrega de mensajes y en el consumo de batería; elija el transporte que mejor se ajuste a sus requisitos de fiabilidad y energía.
- SMS sigue siendo un respaldo útil para alertas críticas en zonas con servicio de datos inestable, aunque ofrece capacidades de datos diferentes a las del reporte por IP.
- Siempre valide la compatibilidad y las funcionalidades disponibles con la documentación actual de Coban para la variante BN-408B que despliegue.
- Al implementar a gran escala, confirme que las identidades de los dispositivos y los intervalos de reporte estén provisionados para evitar mensajes duplicados o perdidos.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del BN-408B y de las opciones de transporte ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y obtener un comportamiento predecible en Plaspy. Conocer qué reporta el dispositivo y cómo envía los datos reduce el tiempo de integración y apoya la toma de decisiones operativas.

- Una configuración de transporte adecuada previene problemas comunes de conectividad y ayuda a controlar la vida de la batería en despliegues a largo plazo.
- Reconocer qué alarmas y mensajes de estado puede emitir el rastreador reduce falsos positivos y mejora el ajuste de alertas en Plaspy.
- La conciencia sobre variantes de firmware y hardware evita sorpresas cuando una unidad se comporta de manera diferente a otra en la misma flota.
- Entender las diferencias entre reporte por SMS e IP aclara qué datos estarán disponibles al cambiar entre modos de red.
- Un contexto de conexión claro simplifica las reglas de cortafuegos y la provisión de red para instalaciones en distintos sitios o regiones.

## Por qué usar Plaspy con este protocolo

Usar el BN-408B con Plaspy ofrece a las organizaciones un camino directo hacia el rastreo en tiempo real, gestión de alarmas y reproducción histórica para activos móviles. Las características del hardware BN-408B, como larga duración de batería, montaje magnético y un conjunto completo de alarmas, complementan las capacidades de Plaspy para supervisión de flotas, flujos de trabajo anti robo y reportes operativos.

Para obtener más información sobre Plaspy y cómo gestiona el reporte de dispositivos visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que los usuarios deberían verificar la documentación más reciente del BN 408B y las notas de firmware con el fabricante en https://www.coban.net/
