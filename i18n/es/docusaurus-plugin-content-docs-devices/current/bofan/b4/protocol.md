---
slug: /bofan/b4/protocol
id: b4-protocol
sidebar_label: Protocol
title: Bofan - B4 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador GPS Bofan B4 con Plaspy y asegurar seguimiento fiable de flotas
keywords:
  - protocolo Bofan B4
  - protocolo GPS Bofan B4
  - compatibilidad Bofan B4 Plaspy
  - comunicación Bofan B4
  - rastreo Bofan B4
  - protocolo rastreador GPS Bofan
  - protocolo rastreador vehículo B4
  - protocolo dispositivo Plaspy
  - rastreo de flotas Bofan B4
  - rastreador 4G Bofan B4
---

# Bofan - Protocolo B4

Esta página describe el contexto público del protocolo para usar el rastreador vehicular GPS Bofan B4 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, qué ajustes de conexión se utilizan y qué debe considerar al integrar el rastreador con Plaspy para seguimiento en tiempo real, alertas de geocerca, corte de motor y otras funciones habituales.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el Bofan B4 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página ofrece orientación general y notas prácticas en lugar de detalles específicos de firmware.

## Resumen del protocolo

El protocolo de comunicación del Bofan B4 regula cómo el rastreador informa posición, estado y alarmas a un servidor remoto y cómo se entregan comandos remotos como el corte de motor o las solicitudes de configuración. En el contexto de Plaspy, el protocolo permite al dispositivo identificarse, transmitir geolocalización y eventos de entradas/salidas, y soportar funciones de monitoreo y control remoto.

- Permite reportes periódicos y basados en eventos para que la ubicación y las alertas lleguen al servidor para mapeo y notificaciones.
- Transporta información identificadora para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto.
- Transmite señales de estado usadas en alertas de geocerca, monitoreo de tiempo de motor y acciones remotas de corte de motor.
- Soporta reporte en vivo por GPRS y modos de respaldo como SMS para funciones básicas de comando y rastreo.
- Funciona junto con características de gestión de energía del dispositivo para reducir el uso de GPRS cuando el vehículo está detenido.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint y puerto compartido, y aplica detección automática de protocolo para identificar el formato de rastreador entrante. Cuando un Bofan B4 está configurado para reportar a Plaspy, normalmente no requiere selección manual de protocolo dentro de la plataforma, siempre que el dispositivo apunte al servidor y puerto correctos.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 para conexiones entrantes de rastreadores.
- Todos los dispositivos reportan al mismo puerto en Plaspy, lo que simplifica la configuración y el alta de equipos.
- Plaspy detecta automáticamente patrones de protocolo a partir de los mensajes entrantes, por lo que la selección manual suele ser innecesaria.
- El requisito principal para que la detección automática funcione es la correcta configuración del servidor de reporte en el B4.
- Si la detección o el mapeo no tienen éxito, revisar los ajustes de reporte del dispositivo y la configuración del fabricante es el paso de solución de problemas habitual.

## Transporte y contexto de conexión

Los dispositivos Bofan B4 pueden configurarse para usar transporte UDP o TCP según las capacidades del equipo y la configuración elegida. Para la integración con Plaspy, los detalles clave de transporte a verificar son la dirección del servidor y el puerto compartido que usa la plataforma.

- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- El puerto de transporte que utiliza Plaspy para todos los dispositivos soportados es 8888.
- El B4 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del firmware y la preferencia del instalador.
- Usar el protocolo de transporte correcto y apuntar al endpoint de Plaspy asegura que el dispositivo alcance Plaspy para la detección automática del protocolo.
- Las condiciones de la red, NAT del operador o reglas de firewall pueden afectar el tráfico UDP y TCP de forma distinta; verifique la conectividad si los reportes no llegan.

## Notas sobre compatibilidad del protocolo

- La configuración por defecto del fabricante para el Bofan B4 puede apuntar a la plataforma del proveedor; es posible que deba cambiar el servidor de reporte del dispositivo a Plaspy para habilitar la comunicación.
- Las revisiones de firmware y ajustes de hardware pueden alterar la temporización de mensajes, el transporte soportado o las funciones disponibles; revise las notas de firmware para identificar cambios.
- Algunas funciones, como el corte remoto de motor y entradas avanzadas, pueden requerir configuración específica o soporte de firmware para funcionar a través de una plataforma de terceros.
- La elección de transporte (UDP vs TCP) puede afectar la confiabilidad y debe seleccionarse según las condiciones de la red y el soporte del dispositivo.
- Valide el IMEI del dispositivo y el mapeo de identificadores en Plaspy después de configurar el servidor de reporte para asegurar la asociación correcta del equipo.
- En caso de duda, consulte la documentación del fabricante sobre las opciones de configuración del B4 antes de realizar cambios en la plataforma.

## Por qué es importante comprender el protocolo

Comprender el rol del protocolo de comunicación ayuda a asegurar una configuración fluida, telemetría confiable y un comportamiento predecible en operaciones de flota. Saber qué transporta el protocolo y cómo se conecta el dispositivo acelera la resolución de problemas y ayuda a los administradores a tomar decisiones de configuración informadas.

- Garantiza ajustes de servidor y transporte correctos para que los dispositivos informen de forma constante a Plaspy.
- Ayuda a diagnosticar por qué un dispositivo no aparece en la plataforma o por qué faltan eventos específicos.
- Orienta la decisión sobre el transporte para equilibrar confiabilidad y costos de datos.
- Aclara qué funciones dependen del firmware del dispositivo o de la configuración del fabricante frente a la configuración de la plataforma.
- Facilita la planificación de actualizaciones de firmware, revisiones de hardware y la gestión de dispositivos a largo plazo.

## Por qué usar Plaspy con este protocolo

Usar el Bofan B4 con Plaspy ofrece una forma directa de centralizar la visibilidad vehicular, la gestión de geocercas, las alertas de eventos y las acciones de control remoto desde una única plataforma. La detección automática de protocolos y los ajustes de conexión compartidos de Plaspy simplifican el alta de dispositivos para que usted pueda centrarse en la operación en lugar de seleccionar protocolos por equipo.

Si desea saber más sobre Plaspy y cómo maneja la comunicación con dispositivos, visite https://www.plaspy.com. Para obtener los detalles de protocolo más actuales, notas de firmware e instrucciones de configuración específicas del Bofan B4, verifique la información en el sitio del fabricante https://www.bofancloud.com/ ya que el comportamiento del protocolo y las funciones de firmware pueden cambiar con el tiempo.
