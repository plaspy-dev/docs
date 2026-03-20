---
slug: /v_sun/tlt_1b/protocol
id: tlt_1b-protocol
sidebar_label: Protocol
title: V-SUN - TLT-1B Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo del rastreador GPS V-SUN TLT-1B y cómo se comunica con Plaspy para integración de servidor
keywords:
  - protocolo V SUN TLT 1B
  - protocolo GPS V SUN TLT 1B
  - protocolo de comunicación V SUN TLT 1B
  - protocolo de rastreo V SUN TLT 1B
  - protocolo rastreador GPS V SUN
  - protocolo GPRS TLT 1B
  - protocolo SMS TLT 1B
  - compatibilidad de dispositivos Plaspy
  - integración de rastreadores Plaspy
  - protocolo de seguimiento de vehículos
---

# V-SUN - Protocolo TLT-1B

Esta página describe el contexto público del protocolo para usar el rastreador V-SUN TLT-1B con la plataforma Plaspy. Resume cómo el dispositivo suele reportar posición y alertas, y cómo esos reportes se relacionan con la configuración del servidor Plaspy, sin exponer detalles sensibles de implementación.

Plaspy emplea un endpoint compartido y un puerto común para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en aspectos de alto nivel, no sensibles, y en consideraciones prácticas para la integración.

## Resumen del protocolo

El protocolo de reporte define cómo el TLT-1B envía información de ubicación, alarmas y estado desde el campo a un servidor remoto como Plaspy. En el TLT-1B esto puede incluir reportes por SMS y reportes por GPRS TCP de latitud y longitud, hora y flags de eventos que indican SOS o condiciones relacionadas con la alimentación.

- Transmite posición GNSS y estado básico del equipo a un servidor remoto para seguimiento en tiempo real y trazados históricos.
- Soporta comandos por SMS y reportes por GPRS TCP como transportes comunes para mensajes de ubicación y alarma.
- Permite el envío de eventos como pulsos de SOS e indicadores de corte de energía hacia una plataforma de monitoreo.
- Habilita la identificación del equipo para que el servidor asocie los reportes entrantes con una instancia específica del rastreador.
- Proporciona los elementos de datos que Plaspy necesita para mostrar ubicación, historial y alertas sin exponer el formato interno de los paquetes.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador cuando el dispositivo está configurado para enviar datos a Plaspy. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el equipo apunta correctamente al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para configuración directa por DNS o IP.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles; el puerto configurado es 8888.
- Los dispositivos pueden estar configurados para reportar por TCP o UDP al endpoint de Plaspy y Plaspy maneja ambos transportes.
- Cuando el rastreador reporta usando el endpoint y puerto compartidos, Plaspy detectará y procesará automáticamente el formato de protocolo recibido.
- La dirección del servidor y la selección del transporte adecuados en el dispositivo suelen ser la única configuración necesaria para permitir la detección automática.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el TLT-1B alcanza Plaspy a través de la red celular. El dispositivo soporta SMS para reportes básicos y GPRS TCP para reportes continuos a un servidor remoto. La selección del transporte suele ser una opción de configuración en el rastreador o dentro de los ajustes del operador de la SIM.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 cuando se prefiere IP directa.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a nivel de flota y reduce pasos por unidad.
- GPRS TCP se usa habitualmente para subidas en tiempo real, mientras que SMS sigue siendo útil para consultas simples y notificaciones de emergencia.
- La confiabilidad de la red, la configuración del APN y la provisión de la SIM pueden afectar si el dispositivo usa TCP o UDP con éxito.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar qué eventos se reportan o con qué frecuencia se envían las actualizaciones de ubicación.
- Las revisiones de hardware pueden introducir diferencias en los transportes soportados o en funciones disponibles, como monitoreo de energía y comportamiento del SOS.
- Los comandos de configuración del fabricante y los ajustes por defecto del servidor varían; confirme siempre la configuración del servidor en el dispositivo antes de realizar pruebas.
- La elección entre TCP y UDP puede afectar la semántica de la entrega y estar restringida por redes móviles o limitaciones del APN.
- La detección automática de Plaspy reduce la necesidad de seleccionar el protocolo manualmente, pero es imprescindible configurar correctamente el endpoint y el transporte en el dispositivo.
- Valide la compatibilidad contra la documentación oficial de V-SUN para instrucciones específicas del modelo y notas de firmware.

## Por qué es importante entender el protocolo

Comprender a alto nivel el protocolo de comunicación ayuda a asegurar que el rastreador esté configurado para reportar de forma confiable a Plaspy y facilita la resolución de problemas cuando faltan mensajes o no aparecen eventos como se esperaba.

- Asegura que el equipo esté apuntando a d.plaspy.com o 54.85.159.138 y use el puerto 8888 para que Plaspy reciba los reportes.
- Ayuda a identificar si SMS, GPRS TCP o una selección incorrecta de transporte están causando actualizaciones faltantes.
- Orienta en la selección de firmware y en opciones de configuración que afectan la frecuencia de reporte y el manejo de alarmas.
- Mejora la capacidad para interpretar el comportamiento del dispositivo, como eventos SOS, alertas por corte de energía y reportes de movimiento.
- Reduce el tiempo de integración al enfocarse en la dirección del servidor, el transporte y los detalles del APN en lugar de la estructura interna de los paquetes.

## Por qué usar Plaspy con este protocolo

Usar el V-SUN TLT-1B con Plaspy ofrece a las organizaciones un camino fiable para recopilar datos de posición y alertas de vehículos y activos. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos permiten que las flotas integren dispositivos heterogéneos con una configuración mínima por unidad.

Si desea saber más sobre cómo Plaspy soporta la integración de dispositivos y la gestión de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que verifique la documentación y las notas de firmware más recientes del TLT-1B en el sitio oficial de V-SUN http://www.v-sun.cc/ para obtener la información más actualizada.
