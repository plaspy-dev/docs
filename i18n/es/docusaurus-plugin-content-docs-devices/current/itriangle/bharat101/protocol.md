---
slug: /itriangle/bharat101/protocol
id: bharat101-protocol
sidebar_label: Protocol
title: iTriangle - Bharat101 Protocol
sidebar_class_name: menu_item_tracker
description: Protocolo público para usar el rastreador iTriangle Bharat101 con Plaspy para geolocalización y telemetría confiable de vehículos
keywords:
  - protocolo iTriangle Bharat101
  - protocolo GPS Bharat101
  - rastreador GPS iTriangle Plaspy
  - protocolo de rastreo Bharat101
  - protocolo de comunicación Bharat101
  - protocolo de rastreador AIS 140
  - protocolo de rastreo NavIC GPS
  - integración Bharat101 Plaspy
  - rastreador GPS flota Bharat101
  - rastreo de vehículos Bharat101
---

# iTriangle - Protocolo Bharat101

Esta página describe el contexto público del protocolo para usar el rastreador GPS iTriangle Bharat101 con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué puntos de conexión puede configurar y qué esperar al integrar unidades Bharat101 en Plaspy para telemetría de flotas y vehículos.

El Bharat101 cumple con AIS 140, incorpora NavIC junto con GPS, tiene eSIM integrada, BLE 4 y protección robusta IP65. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Utilice esta página como vista general del protocolo y consulte la documentación de iTriangle para detalles específicos de firmware del equipo.

## Visión general del protocolo

El protocolo de comunicación del Bharat101 regula cómo el rastreador reporta posiciones GNSS, eventos de movimiento y sensores, y el estado del dispositivo a un servidor remoto como Plaspy. El protocolo permite al equipo identificarse, enviar telemetría en un formato utilizable por sistemas posteriores y soportar configuración remota y actualizaciones de firmware cuando sean compatibles.

- Provee reporte en tiempo real de posición y movimiento para que Plaspy pueda mostrar ubicación, velocidad y estado de eventos.
- Transmite eventos de sensores y E/S, como disparos del acelerómetro, lecturas de sensores analógicos y cambios en entradas digitales para telemetría y alertas.
- Soporta envío a múltiples servidores para que el dispositivo pueda mandar datos a Plaspy junto con otros puntos de destino configurados para redundancia o sistemas locales.
- Permite configuración remota y actualizaciones OTA cuando el firmware del dispositivo lo soporta, manteniendo el comportamiento actualizado.
- Transporta información de estado y diagnóstico que ayuda a Plaspy a mostrar métricas de salud del dispositivo y conectividad.

## Detección del protocolo por Plaspy

Plaspy recibe el tráfico de los dispositivos en un único endpoint y puerto compartidos y utiliza los datos entrantes para identificar qué rastreador está reportando. En la mayoría de despliegues, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el Bharat101 está configurado para reportar al endpoint de Plaspy.

- Plaspy acepta conexiones de rastreadores en d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto para reportar, que es el 8888.
- El Bharat101 puede configurarse para usar UDP o TCP para enviar datos a Plaspy en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para enviar datos al endpoint de Plaspy.
- Normalmente no se requiere selección manual de protocolo en Plaspy si el dispositivo apunta al servidor y puerto de Plaspy.

## Transporte y contexto de conexión

El contexto de conexión abarca las opciones de transporte y direccionamiento que determinan cómo el Bharat101 llega a Plaspy. Estos son detalles de configuración que usted puede ajustar en el dispositivo o mediante herramientas del fabricante para asegurar la entrega fiable de la telemetría.

- El dispositivo puede configurarse para usar UDP o TCP como protocolo de transporte al enviar datos a Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos compatibles para simplificar la configuración y la gestión de endpoints.
- Consideraciones a nivel de red como firewalls del operador, ajustes de APN y provisión de eSIM pueden afectar si TCP o UDP es preferible en una implementación determinada.
- El reporte a múltiples servidores en el Bharat101 permite enviar la misma telemetría a Plaspy y a endpoints secundarios para respaldo o procesamiento local.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes o campos opcionales envía el dispositivo; verifique las notas de la versión del firmware al solucionar problemas de compatibilidad.
- Las revisiones de hardware y las variantes regionales pueden afectar las radios soportadas, los conjuntos de sensores o las opciones de configuración por defecto.
- Los canales de configuración del fabricante como USB, SMS, Bluetooth o un servidor de configuración remota pueden alterar el transporte y el comportamiento de reporte.
- La selección de transporte entre UDP y TCP puede influir en la fiabilidad de entrega y la compatibilidad de la red; pruebe el transporte elegido con su operador y con Plaspy.
- La certificación AIS 140 indica cumplimiento con requisitos regulatorios específicos, pero los detalles de integración pueden variar según el firmware.
- Siempre valide la compatibilidad y las configuraciones recomendadas contra la documentación del fabricante para el lote de dispositivos que usted posee.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del rastreador ayuda a asegurar una configuración fluida, una solución de problemas más rápida y una operación predecible a largo plazo al usar dispositivos Bharat101 con Plaspy. Conocer las opciones de conexión y los tipos de reporte involucrados reduce el tiempo de integración y favorece una telemetría fiable.

- Acelera el despliegue inicial al clarificar qué dirección de servidor y transporte configurar en el dispositivo.
- Ayuda a diagnosticar problemas de conectividad al acotar si el problema está relacionado con transporte, red o configuración del dispositivo.
- Mejora el mapeo de eventos en Plaspy al alinear los tipos de eventos del dispositivo y las señales de E/S con las reglas de alerta de la plataforma.
- Apoya la planificación de estrategias de actualización de firmware y OTA para que los dispositivos sigan siendo compatibles con las funciones de la plataforma.
- Permite decisiones informadas sobre redundancia y reporte a múltiples servidores para cumplir metas de disponibilidad operativa.

## Por qué usar Plaspy con este protocolo

Usar el rastreador Bharat101 con Plaspy ofrece a las organizaciones la posibilidad de combinar hardware de grado AIS 140, posicionamiento NavIC nativo y conectividad celular resiliente con una sola plataforma de gestión de flotas. Plaspy acepta el dispositivo a través de un endpoint compartido, detecta automáticamente el protocolo del rastreador y presenta ubicación, movimiento y eventos de E/S para operaciones, seguridad y flujos de cumplimiento.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Bharat101 y revisar las funcionalidades de la plataforma, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolo específico del dispositivo, comportamiento del firmware e instrucciones de implementación, consulte al fabricante en https://www.itriangle.net/ ya que el soporte de dispositivos y el comportamiento del firmware pueden cambiar con el tiempo.
