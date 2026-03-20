---
slug: /tk_star/pet_tracker/protocol
id: pet_tracker-protocol
sidebar_label: Protocol
title: TK-Star - Pet Tracker Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Pet Tracker de TK-Star y cómo reporta ubicación y alertas a Plaspy
keywords:
  - Protocolo Pet Tracker TK-Star
  - Protocolo GPS Pet Tracker TK-Star
  - Comunicación Pet Tracker TK-Star
  - Protocolo de seguimiento Pet Tracker TK-Star
  - Protocolo GPS TK-Star
  - Protocolo rastreador de mascotas Plaspy
  - Compatibilidad rastreador TK-Star Plaspy
  - Guía protocolo GPS para mascotas
  - Protocolo de comunicación de rastreadores
  - Protocolo de seguimiento GPS Plaspy
---

# TK-Star - Protocolo del Pet Tracker

Esta página describe el contexto público del protocolo para usar el Pet Tracker de TK-Star con Plaspy. Explica, en términos no sensibles, cómo el rastreador envía datos de ubicación y estado a un servidor remoto y qué considerar al configurar el dispositivo para que funcione con Plaspy. El contenido se centra en el comportamiento de comunicación relevante para la integración, no en detalles propietarios ni internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos envían reportes al endpoint de Plaspy. El comportamiento exacto del protocolo en el Pet Tracker puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el rol general del protocolo y el contexto de conexión más que los formatos de paquete a bajo nivel.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el dispositivo envía actualizaciones periódicas de posición, alertas e información básica de estado a un servidor remoto para que Plaspy pueda interpretar y mostrar los datos. En un rastreador para mascotas, el protocolo normalmente transporta coordenadas GPS, marcas de tiempo, estado de movimiento e indicaciones de eventos como activaciones de geocerca o alertas de batería baja.

- Permite que el dispositivo envíe reportes periódicos de ubicación y actualizaciones de movimiento en tiempo real a un servidor.
- Transporta mensajes de evento como salidas de geocerca, alertas SOS y cambios de estado que la plataforma puede mostrar al usuario.
- Incluye información de identificación o registro del dispositivo para que Plaspy asocie los reportes con la instancia correcta del rastreador.
- Permite que la plataforma correlacione reportes de posición en el tiempo para formar una ruta y presentar recorridos en vivo o históricos.
- Soporta configuraciones simples o respuestas a comandos cuando el rastreador está configurado para aceptar ajustes remotos vía el canal de reportes.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y determina automáticamente qué protocolo de rastreador compatible está usando un dispositivo basándose en los reportes entrantes. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para enviar sus reportes al endpoint de Plaspy.

- Plaspy utiliza un único endpoint de escucha para los dispositivos y detecta automáticamente el protocolo del rastreador.
- Los dispositivos correctamente configurados para reportar al endpoint de Plaspy serán identificados por la plataforma sin una selección manual del protocolo.
- La detección se basa en el contenido observable y el transporte de los reportes entrantes en lugar de la selección del usuario.
- Si un rastreador usa un transporte o dirección de servidor diferente, debe apuntarlo al endpoint de Plaspy para habilitar la detección automática.
- Contactar al soporte de Plaspy es útil cuando un dispositivo no aparece detectado después de confirmar que está reportando al endpoint de Plaspy.

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el Pet Tracker alcanza a Plaspy, pero no cambian el papel general del protocolo. El Pet Tracker puede configurarse para usar transportes IP comunes para reportar posición y eventos a la dirección y puerto del servidor de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración del firmware.
- Plaspy acepta reportes de dispositivos en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP pública 54.85.159.138 para entregar sus reportes.
- Usar el transporte y la dirección de servidor correctos es obligatorio para que Plaspy reciba y detecte automáticamente el protocolo del rastreador.
- Los operadores de red o la configuración de SIM/APN en el rastreador deben permitir tráfico saliente hacia la dirección y el puerto elegidos.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar la cadencia de mensajes, la presencia de campos o el comportamiento de eventos; verifique las notas de la versión del firmware cuando sea posible.
- Las revisiones de hardware a veces modifican los transportes soportados, la gestión de energía o la disponibilidad de sensores, lo que afecta el comportamiento de los reportes.
- Las opciones de configuración del fabricante (por ejemplo comandos SMS o ajustes desde la app) pueden alterar lo que el dispositivo envía a un servidor de reportes.
- Elegir UDP frente a TCP puede afectar la entrega en redes móviles con restricciones; haga coincidir la configuración del dispositivo con el transporte previsto.
- Siempre valide que el dispositivo esté configurado para enviar reportes al endpoint de Plaspy antes de asumir compatibilidad.
- Cuando el comportamiento difiera de lo esperado, revise tanto la configuración del dispositivo como las restricciones de la red del operador como parte de la solución de problemas.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a una correcta configuración, reportes fiables y una solución de problemas eficiente al usar el Pet Tracker de TK-Star con Plaspy. Saber qué se espera que envíe el rastreador y cómo se conecta reduce el tiempo de configuración y mejora la visibilidad operativa.

- Garantiza que el dispositivo esté apuntando al servidor y transporte correctos para que Plaspy reciba los reportes.
- Ayuda a diagnosticar actualizaciones de ubicación faltantes o retrasadas al acotar el problema a red, transporte o ajustes del dispositivo.
- Orienta las decisiones sobre intervalos de reporte y compensaciones de batería al entender el papel del protocolo en las actualizaciones periódicas.
- Permite a los administradores confirmar que los eventos de geocerca y las alertas se generan y reenvían a Plaspy.
- Facilita actualizaciones ordenadas de firmware o configuración al resaltar áreas donde el comportamiento puede cambiar.

## Por qué usar Plaspy con este protocolo

Usar el Pet Tracker de TK-Star con Plaspy ofrece una forma sencilla de recopilar reportes de ubicación y eventos de mascotas y presentarlos mediante una plataforma centralizada de monitoreo de flotas y activos. La detección automática de protocolos de Plaspy y el manejo unificado de puertos simplifican la incorporación, de modo que los dispositivos que reportan al endpoint de Plaspy pueden procesarse sin selección manual de protocolo.

Para saber más sobre Plaspy y cómo gestiona los reportes de dispositivos, por favor visite https://www.plaspy.com. Para los detalles más recientes específicos del protocolo del dispositivo, notas de firmware e instrucciones de configuración del fabricante, consulte el sitio oficial de TK-Star en https://www.tk-star.com/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
