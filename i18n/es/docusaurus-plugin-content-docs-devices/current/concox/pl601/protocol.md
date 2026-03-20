---
slug: /concox/pl601/protocol
id: pl601-protocol
sidebar_label: Protocol
title: Concox - PL601 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox PL601 y su comunicación con Plaspy para rastreo y alertas en tiempo real
keywords:
  - protocolo Concox PL601
  - protocolo GPS Concox PL601
  - protocolo PL601 Plaspy
  - protocolo de comunicación PL601
  - protocolo de rastreo Concox PL601
  - compatibilidad tracker GPS PL601 Plaspy
  - integración Concox PL601
  - protocolo de telemetría PL601
  - protocolo rastreador Concox
  - protocolo PL601 LTE Cat 1
---

# Concox - Protocolo PL601

Esta página describe el contexto público del protocolo para usar el rastreador Concox PL601 con Plaspy. Se centra en cómo el dispositivo reporta ubicación y telemetría a un servidor Plaspy y en las configuraciones de conexión que suelen emplearse para la integración, sin exponer detalles sensibles de implementación.

El PL601 es un rastreador portátil GNSS compacto con LTE Cat 1, posicionamiento multimodal, asistencia AGPS, audio bidireccional HD, botón SOS, configuración por BLE y sensores opcionales. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante.

## Resumen del protocolo

El protocolo del dispositivo es el conjunto de mensajes y comportamientos de reporte que permiten al PL601 identificarse, enviar datos GNSS y posiciones suplementarias, y transmitir eventos como alertas SOS y telemetría de sensores a un backend como Plaspy. Comprender este enfoque general ayuda a configurar puntos finales de red y a verificar que el rastreador entrega datos útiles.

- Permite que el PL601 informe coordenadas GNSS, posiciones asistidas por Wi Fi y LBS, y eventos de estado a un servidor remoto.
- Transporta la identidad del dispositivo y marcadores de eventos para que Plaspy asocie los mensajes entrantes con el registro correcto del rastreador.
- Envía telemetría como estado de batería, detección de movimiento o lecturas barométricas, además de indicadores de SOS o eventos de audio para el procesamiento de eventos en Plaspy.
- Soporta actualizaciones periódicas de posición y reportes bajo demanda o por eventos, usados para seguimiento en vivo y reproducción histórica.
- Permite flujos de confirmación de configuración cuando el dispositivo se establece localmente vía BLE o se le envían instrucciones de forma remota desde la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy detecta y asigna automáticamente los mensajes entrantes a un protocolo compatible cuando el dispositivo apunta al endpoint de Plaspy. En la mayoría de los casos usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el PL601 está configurado para reportar a la plataforma usando los ajustes de conexión compartidos.

- Plaspy escucha en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador a partir de los reportes entrantes.
- Los usuarios suelen configurar el rastreador para que reporte a d.plaspy.com o a la IP del servidor Plaspy y la plataforma clasifica el dispositivo sin intervención manual.
- La selección manual de protocolo dentro de Plaspy normalmente no es necesaria siempre que el dispositivo esté correctamente configurado para alcanzar el endpoint de Plaspy.
- Ajustes correctos de identidad del dispositivo en el lado del rastreador aseguran que la plataforma asocie los mensajes con el activo y la cuenta de usuario adecuados.
- Si un dispositivo no se registra, verificar la accesibilidad de la red y la configuración de transporte es el primer paso antes de un diagnóstico más detallado.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el PL601 alcanza a Plaspy más que el formato interno de los mensajes. El PL601 puede usar UDP o TCP según el firmware y la configuración, y Plaspy acepta ambos transportes en el puerto compartido usado por todos los dispositivos soportados.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del modelo y la configuración del operador.
- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138 para enrutamiento directo si se requiere.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de cortafuegos.
- Elija el modo de transporte compatible con el firmware de su dispositivo y asegúrese de que su red permita conexiones salientes al endpoint de Plaspy.
- Para rastreadores conectados por celular como el PL601, confirme el APN y la conectividad de la tarjeta SIM antes de validar el reporte del protocolo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las variantes regionales de hardware pueden afectar qué modos de transporte y funciones de reporte están disponibles.
- Las herramientas de configuración del fabricante o el aprovisionamiento por BLE suelen determinar el endpoint de reporte, el modo de transporte y los intervalos de actualización.
- Variaciones en el comportamiento GNSS, Wi Fi o LBS entre revisiones pueden cambiar cómo aparecen los datos de posición en Plaspy, por lo que espere pequeñas diferencias en precisión y sincronización de eventos.
- Si se usan comandos remotos o confirmaciones, confirme que esos conjuntos de comandos están soportados por el firmware específico del PL601 en uso.
- Valide siempre los campos de identidad del dispositivo para que Plaspy pueda asociar de manera fiable los datos entrantes con el registro correcto del equipo.
- En caso de duda, compare el comportamiento con la documentación oficial del fabricante para confirmar la compatibilidad.

## Por qué importa comprender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del PL601 ayuda en la configuración inicial, el diagnóstico de problemas de conectividad y a garantizar reportes fiables a Plaspy a largo plazo. Conocer los comportamientos de reporte esperados y las opciones de transporte reduce tiempos de resolución y mejora el tiempo de actividad del dispositivo.

- Garantiza la correcta configuración de servidor y transporte durante el aprovisionamiento para que los rastreadores lleguen a Plaspy con éxito.
- Ayuda a interpretar la sincronización de eventos, la frecuencia de actualizaciones y el comportamiento de fallback cuando las señales GNSS son débiles.
- Simplifica la configuración de cortafuegos y redes al confirmar el uso de un único puerto y los transportes soportados.
- Orienta decisiones sobre actualizaciones de firmware y variantes regionales que puedan afectar el comportamiento de comunicación.
- Facilita la integración de telemetría opcional como acelerómetro o datos barométricos en las reglas de eventos de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el PL601 con Plaspy ofrece rastreo compacto, alimentado por batería, y funciones de seguridad que una plataforma moderna puede procesar. Plaspy incorpora las posiciones GNSS, Wi Fi y LBS entrantes, alertas SOS, eventos de voz y telemetría opcional de sensores en un tablero unificado para seguimiento en vivo, alertas y reproducción histórica.

Plaspy simplifica la incorporación de dispositivos al usar un único puerto para todos los equipos y detectar automáticamente el protocolo del rastreador cuando el PL601 apunta al endpoint de Plaspy. Para obtener más información sobre Plaspy y cómo la plataforma gestiona la conectividad de dispositivos y eventos visite https://www.plaspy.com. Por favor verifique los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y las notas de implementación con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
