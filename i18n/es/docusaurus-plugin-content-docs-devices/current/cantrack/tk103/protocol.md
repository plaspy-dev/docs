---
slug: /cantrack/tk103/protocol
id: tk103-protocol
sidebar_label: Protocol
title: CanTrack - TK103 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CanTrack TK103 y cómo se comunica con Plaspy para rastreo e integración confiables
keywords:
  - protocolo CanTrack TK103
  - protocolo GPS CanTrack TK103
  - CanTrack TK103 para Plaspy
  - protocolo de rastreo TK103
  - protocolo rastreador GPS CanTrack
  - rastreadores compatibles con Plaspy
  - rastreo de vehículos TK103
  - comunicación rastreador GPS
  - gestión de flotas TK103
  - compatibilidad protocolo CanTrack
---

# CanTrack - Protocolo TK103

Esta página explica el contexto público del protocolo para usar el rastreador CanTrack TK103 con Plaspy. Resume cómo se comunica el equipo en términos generales, qué ajustes de conexión espera Plaspy y qué considerar al integrar dispositivos TK103 en una implementación de Plaspy. El objetivo es describir el contexto de comunicación sin exponer detalles internos del firmware del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; el comportamiento exacto puede variar según el firmware, la revisión de hardware y la implementación del fabricante. El CanTrack TK103 es, en esencia, un rastreador basado en GSM GPRS y GPS con funciones como corte remoto, geocercas, alarma por exceso de velocidad y almacenamiento de datos; esas capacidades dependen del dispositivo y el modo de reporte puede variar según la versión del firmware.

## Resumen del protocolo

El protocolo de un rastreador GPS define cómo el equipo informa identidad, posición, telemetría y alarmas a un servidor y cómo éste puede reconocer o responder. En el caso del TK103, el dispositivo envía datos de posición y eventos a través de la red móvil a Plaspy para que la plataforma muestre la ubicación y el estado a los usuarios.

- Permite que el TK103 se identifique y entregue datos de ubicación y alarmas a un servidor remoto.
- Transmite telemetría como coordenadas GPS, eventos de movimiento e indicadores de estado a Plaspy en un formato legible por máquina.
- Permite a la plataforma correlacionar mensajes entrantes con el dispositivo correcto y actualizar el flujo de posiciones en vivo.
- Soporta comandos remotos y cambios de configuración cuando el equipo y la red permiten comunicación bidireccional.
- Proporciona un flujo de datos consistente que Plaspy procesa y normaliza para mapeo, alertas y almacenamiento histórico.

## Detección del protocolo por Plaspy

Plaspy recibe conexiones entrantes en un único endpoint e inspecciona los datos para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, el usuario no necesita seleccionar un protocolo en Plaspy cuando el TK103 está configurado para reportar al endpoint de Plaspy.

- Plaspy server domain es d.plaspy.com y Plaspy server IP es 54.85.159.138 y the port is 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar nada manualmente.
- Cuando el TK103 apunta al endpoint de Plaspy y reporta a través de la red, Plaspy asocia los mensajes entrantes con el registro de dispositivo correspondiente.
- Una identificación de dispositivo correcta (IMEI o ID del equipo) en el reporte del rastreador es esencial para el mapeo automático a un dispositivo en Plaspy.
- Si un dispositivo presenta un comportamiento de firmware poco común, las notas de despliegue o la guía del fabricante pueden ayudar a asegurar que Plaspy reconozca sus mensajes.

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el TK103 alcanza los servidores de Plaspy. El equipo puede usar UDP o TCP según su configuración y capacidades de firmware; los datos públicos importantes para la integración con Plaspy son la dirección del servidor y el puerto utilizado por la plataforma.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y reglas de firewall.
- Elija UDP o TCP en el equipo según su manual y el entorno de red; Plaspy acepta ambos transportes en el puerto compartido.
- Verifique que el plan de datos móviles y la configuración APN del TK103 sean correctos para que pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Revisiones de firmware y actualizaciones del fabricante pueden alterar el contenido de los mensajes o las funciones disponibles; compruebe siempre la versión de firmware al validar el comportamiento.
- Revisiones de hardware o variantes regionales del TK103 pueden cambiar los modos de transporte admitidos o la configuración de reporte por defecto.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega de mensajes; seleccione el modo recomendado en el manual del equipo para su despliegue.
- Los comandos de configuración del fabricante o métodos de aprovisionamiento por SMS pueden modificar cómo el dispositivo reporta a un servidor; confirme los ajustes aplicados.
- Asegúrese de que el dispositivo esté enviando un identificador reconocible como el IMEI para que Plaspy pueda asociar automáticamente los mensajes con el rastreador correcto.
- En caso de dudas, compare los ajustes del dispositivo y el comportamiento observado con la documentación oficial de CanTrack para validar compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TK103 ayuda a garantizar una configuración fluida, un rastreo confiable y una resolución de problemas más rápida cuando surjan incidencias. Saber qué transporte y ajustes de reporte están en uso reduce el tiempo de integración y contribuye a mantener un flujo de datos consistente hacia Plaspy.

- Confirma que el equipo apunta al endpoint de Plaspy y usa el transporte esperado.
- Facilita el diagnóstico de posiciones faltantes, caídas de conectividad o comportamientos de alarma inesperados.
- Permite a los administradores alinear intervalos de reporte, gestión de energía y disparadores de eventos con las necesidades operativas.
- Favorece la confiabilidad a largo plazo al identificar diferencias de firmware o configuración que impactan la calidad de los datos.
- Mejora la coordinación con el soporte del fabricante cuando se requiera aclarar comportamientos específicos del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un CanTrack TK103 ofrece una forma directa de recoger y presentar los datos de ubicación y eventos del equipo para obtener visibilidad operativa. Plaspy centraliza los reportes entrantes, normaliza los mensajes del dispositivo y ofrece funciones de mapeo, historial y alertas que aprovechan las capacidades de rastreo, geocerca y alarma del TK103.

Si despliega TK103 en vehículos o activos, el enfoque de puerto compartido y la detección automática de protocolo de Plaspy simplifican el onboarding y reducen la configuración por dispositivo. Para saber más sobre Plaspy y cómo funciona con una amplia gama de rastreadores visite https://www.plaspy.com. Para detalles de protocolo, comportamiento de firmware y consideraciones de implementación específicos del dispositivo, verifique siempre la documentación del fabricante en https://www.cantrackgps.com/ ya que las implementaciones de los proveedores pueden cambiar con el tiempo.
