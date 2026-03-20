---
slug: /lk_gps/lk120_4g/protocol
id: lk120_4g-protocol
sidebar_label: Protocol
title: LK-GPS - LK120-4G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo LK-GPS LK120-4G y cómo comunica ubicación SOS y telemetría con Plaspy
keywords:
  - protocolo LK GPS LK120 4G
  - protocolo GPS LK120 4G
  - protocolo rastreador LK GPS
  - protocolo de comunicación LK120 4G
  - compatibilidad de protocolo Plaspy
  - integración rastreador GPS Plaspy
  - protocolo rastreador de mascotas
  - resumen del protocolo de rastreo
  - detección de protocolo Plaspy
  - comunicación dispositivo a plataforma
---

# LK-GPS - Protocolo LK120-4G

Esta página ofrece un panorama público y no sensible sobre cómo se comunica el LK-GPS LK120-4G cuando se utiliza con Plaspy. Explica cómo el rastreador informa ubicación y telemetría a la plataforma, y cómo esas opciones de comunicación influyen en la configuración y la operación cotidiana. El objetivo es ayudar a propietarios e integradores a comprender el papel del protocolo sin revelar detalles privados de implementación.

Plaspy usa ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo, aunque el comportamiento concreto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El LK120-4G es un rastreador compacto y resistente al agua para mascotas y uso personal, con posiciones asistidas por A-GPS, SOS, audio bidireccional y reportes de posición frecuentes que alimentan Plaspy para mapas en vivo, alertas e historial.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo es el mecanismo que el LK120-4G emplea para identificarse ante un servidor, reportar posición y estado, y comunicar eventos como SOS o activaciones de geocerca. Esta página se mantiene intencionalmente general y se enfoca en el rol de comunicación del protocolo, no en formatos de mensaje propietarios.

- Permite informes periódicos y basados en eventos para que Plaspy muestre ubicación en tiempo real e historial.
- Transmite la identidad del dispositivo y telemetría básica como estado de batería, estado de movimiento y eventos SOS para los flujos de trabajo de la plataforma.
- Soporta notificaciones de eventos usadas por geocercas, alertas SOS y alertas de movimiento que consume Plaspy.
- Proporciona una secuencia transportable que Plaspy ingiere y asocia con un registro de dispositivo para visualización y reglas.
- Permite que el firmware evolucione sin dejar de reportar a Plaspy cuando se usan los ajustes de endpoint comunes.

## Cómo Plaspy detecta el protocolo

Plaspy expone un único endpoint y puerto compartido para el reporte de dispositivos y utiliza un enfoque de detección automatizada, por lo que la mayoría de los dispositivos no requieren selección manual de protocolo en la plataforma. Si un rastreador está configurado para reportar al endpoint de Plaspy, normalmente será identificado y asociado de forma automática.

- Plaspy recibe reportes en un endpoint compartido accesible en d.plaspy.com y en la dirección IP 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que el tráfico converge en un único puerto de escucha.
- Plaspy escucha en el puerto 8888 para conexiones entrantes de dispositivos y usa ese puerto común entre los modelos compatibles.
- Cuando el LK120-4G está configurado para reportar al endpoint de Plaspy, la plataforma detectará y mapeará el protocolo del dispositivo automáticamente.
- En la mayoría de los casos, usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador reporta al endpoint de Plaspy con los ajustes de conexión correctos.

## Transporte y contexto de conexión

Las opciones de transporte afectan cómo el LK120-4G envía sus mensajes de protocolo a Plaspy y qué configuración de red se requiere. Plaspy soporta las opciones de transporte comunes que el dispositivo puede ofrecer; los dispositivos deben apuntar al endpoint y puerto de Plaspy que coincidan con su modo de transporte.

- El LK120-4G puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138 cuando DNS no esté disponible.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que el mismo puerto se aplica independientemente del modelo.
- La selección de transporte (UDP versus TCP) la determina el firmware y los ajustes del dispositivo y debe establecerse para coincidir con sus capacidades.
- Las reglas de red, como el APN del operador y las restricciones de puertos salientes, deben permitir la conexión al endpoint y puerto de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, los campos de telemetría disponibles y funciones opcionales; verifique la versión de firmware al solucionar compatibilidad.
- Revisiones de hardware o SKUs del fabricante pueden alterar los transportes soportados o funciones periféricas como voz o cableado de SOS.
- Opciones configurables por el fabricante, como intervalo de reporte y disparadores de evento, afectan lo que Plaspy recibe y con qué frecuencia.
- La selección entre UDP y TCP puede influir en la fiabilidad de entrega y debe elegirse según la guía del dispositivo y las condiciones de red.
- Plaspy detecta el protocolo automáticamente, pero se requieren ajustes correctos de endpoint y transporte en el dispositivo para que la detección tenga éxito.
- Valide la compatibilidad y los pasos de configuración contra la documentación oficial de LK GPS antes de un despliegue masivo.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el LK120-4G reduce el tiempo de configuración, mejora la resolución de problemas y favorece una operación confiable a largo plazo con Plaspy. Conocer qué ajustes afectan los reportes y qué transporte usar hará más fluida la integración.

- Garantiza que el dispositivo apunte al endpoint y puerto correctos de Plaspy para la detección automática.
- Ayuda a elegir UDP o TCP en el dispositivo según la red y las características del firmware.
- Aclara qué campos de telemetría y eventos recibirá Plaspy para alertas e historial.
- Hace más seguras las decisiones de actualización de firmware al anticipar cambios en el comportamiento de reporte.
- Reduce el tiempo de solución de problemas al correlacionar ajustes del dispositivo con eventos en la plataforma.

## Ventajas de usar Plaspy con este protocolo

Usar el LK120-4G con Plaspy ofrece beneficios prácticos para dueños de mascotas y casos de rastreo personal. El diseño compacto y resistente al agua del rastreador, las posiciones asistidas por A-GPS, la función SOS y las actualizaciones frecuentes de ubicación combinan bien con el mapeo en vivo, las alertas y el historial de rutas de Plaspy para brindar conciencia situacional y flujos de trabajo de recuperación.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el LK120-4G visite https://www.plaspy.com. Para detalles específicos más actuales del protocolo del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de LK GPS en https://www.lk-gps.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante le asegurará tener la orientación más reciente.
