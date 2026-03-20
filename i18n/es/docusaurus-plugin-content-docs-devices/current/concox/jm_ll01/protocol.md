---
slug: /concox/jm_ll01/protocol
id: jm_ll01-protocol
sidebar_label: Protocol
title: Concox - JM-LL01 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Concox JM-LL01 y cómo se comunica con Plaspy mediante ajustes de conexión compartidos
keywords:
  - protocolo Concox JM-LL01
  - protocolo GPS Concox JM LL01
  - protocolo de rastreo JM-LL01
  - compatibilidad JM-LL01 Plaspy
  - comunicación rastreador GPS Concox
  - protocolo rastreador de activos JM-LL01
  - integración de dispositivos Plaspy
  - protocolo de seguimiento de flotas Concox
  - protocolo de telemetría JM-LL01
  - configuración rastreador Concox Plaspy
---

# Concox - JM-LL01 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Concox JM-LL01 con Plaspy. Explica a alto nivel cómo se comunica el equipo, cuál es el papel del protocolo de reporte en la integración y qué debe considerarse al configurar el dispositivo para que informe a Plaspy. El enfoque técnico es deliberadamente general para no exponer detalles sensibles de parsers o implementaciones.

El JM-LL01 es un rastreador GNSS compacto y robusto, diseñado para despliegues de bajo consumo a largo plazo, y es totalmente compatible con Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del equipo. El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del tracker es el conjunto de convenciones que el JM-LL01 utiliza para enviar posiciones GNSS, telemetría y notificaciones de eventos a una plataforma remota como Plaspy. A grandes rasgos, el protocolo permite que el dispositivo se identifique, entregue datos con sello temporal (ubicación y sensores) y soporte intercambios básicos de comandos o configuración según lo permita el firmware.

- Permite que el JM-LL01 envíe actualizaciones periódicas o por evento a Plaspy para monitoreo en tiempo real.
- Transmite la identidad del dispositivo y telemetría básica para que Plaspy asigne los mensajes entrantes al registro de activo correcto.
- Transporta eventos de sensores como alertas por manipulación, movimiento y estado de batería para que las reglas de la plataforma actúen sobre ellos.
- Soporta la conciliación de registros sin conexión para que las trayectorias históricas almacenadas en el dispositivo se carguen cuando vuelva la conectividad.
- Opera sobre las redes móviles estándar que utiliza el JM-LL01 para entregar datos al punto final de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy recibe las conexiones entrantes de los dispositivos en un punto final y puerto compartidos, y usa detección automática para determinar cómo interpretar los mensajes entrantes de los trackers compatibles. En la mayoría de los casos, un JM-LL01 correctamente configurado comenzará a reportar sin necesidad de seleccionar manualmente el protocolo dentro de Plaspy.

- Los dispositivos deben apuntar al punto final de Plaspy d.plaspy.com o a la dirección IP del servidor 54.85.159.138 para reportes.
- Plaspy escucha en un único puerto para todos los dispositivos e integraciones, simplificando la configuración y el enrutamiento.
- El puerto usado por Plaspy es 8888 y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto.
- Cuando un JM-LL01 está configurado para reportar al punto final de Plaspy, la plataforma detecta automáticamente el protocolo del tracker, por lo que normalmente no es necesaria una selección manual.
- Si un dispositivo no aparece en Plaspy, verifique la dirección del servidor, la selección de transporte y que el firmware del equipo esté configurado para reportar al host y puerto correctos.

## Transporte y contexto de conexión

Las elecciones de conexión y transporte determinan cómo el JM-LL01 envía datos a Plaspy, pero no definen todo el protocolo de aplicación. El tracker soporta múltiples transportes celulares y puede configurarse para usar UDP o TCP para alcanzar el punto final y puerto de Plaspy.

- El dispositivo puede configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos, y el JM-LL01 puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y las condiciones de la red.
- UDP se utiliza con frecuencia para reportes periódicos de bajo overhead, mientras que TCP puede seleccionarse cuando se requiere entrega fiable, según las opciones del firmware.
- El registro en la red (LTE Cat M1, NB-IoT o fallback GSM) y la configuración de la SIM/operador afectan la conectividad pero no la configuración del punto final de Plaspy.
- Asegúrese de que el APN y los ajustes de SIM estén correctos en el equipo para que pueda resolver y alcanzar d.plaspy.com o la IP indicada.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar campos de mensaje, intervalos de reporte y la telemetría incluida; revise siempre las notas de la versión del firmware.
- Las revisiones de hardware y las variantes regionales (bandas de radio) no necesariamente cambian el protocolo de reporte, pero pueden afectar el comportamiento de conectividad.
- Es posible que se requieran herramientas de configuración del fabricante, comandos SMS o configuración local por BLE para apuntar el dispositivo al punto final de Plaspy.
- Elija UDP o TCP según las capacidades del equipo y el comportamiento de la red del operador; algunas redes tratan los datagramas UDP pequeños de forma distinta.
- Confirme que las restricciones del operador o regionales no alteren la conectividad saliente a d.plaspy.com o a la IP del servidor.
- Valide el soporte del dispositivo para las funciones que necesita, como cargas de registros sin conexión o eventos por manipulación, según la documentación del fabricante.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el JM-LL01 con Plaspy ayuda a asegurar una configuración confiable, acelera la resolución de problemas y permite un comportamiento predecible a largo plazo en despliegues de seguimiento de activos. Conocer el contexto de conexión y las limitaciones prácticas reduce la fricción en la integración y mejora el tiempo de actividad operativo.

- Permite determinar la configuración correcta del dispositivo para APN, dirección del servidor y selección de transporte para que los datos lleguen a Plaspy.
- Acelera la resolución de problemas cuando faltan mensajes, enfocándose en la red, el transporte y las diferencias de firmware en lugar de asumir problemas de plataforma.
- Facilita la planificación de la vida útil de la batería y las estrategias de reporte al alinear la frecuencia de telemetría con el modelo de reporte del dispositivo.
- Mejora la confianza al validar el manejo de eventos como alertas por manipulación, disparadores de movimiento y cargas de registros offline.
- Ayuda a los administradores a documentar el inventario de equipos y los niveles de firmware para gestionar la compatibilidad en una flota.

## Por qué usar Plaspy con este protocolo

Usar el Concox JM-LL01 con Plaspy brinda a las organizaciones visibilidad unificada de la ubicación de activos, la telemetría y los eventos en una única plataforma. La larga vida de batería del JM-LL01, su GNSS de múltiples fuentes, la detección de manipulación y el registro offline complementan los dashboards y sistemas de alertas en tiempo real de Plaspy, de modo que los equipos puedan monitorear activos distribuidos con menos verificaciones manuales.

Para conocer más sobre Plaspy y cómo funciona con dispositivos como el JM-LL01 visite https://www.plaspy.com. Para obtener los detalles más recientes sobre protocolos específicos de dispositivos, notas de firmware y variantes de hardware, verifique la documentación del fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
