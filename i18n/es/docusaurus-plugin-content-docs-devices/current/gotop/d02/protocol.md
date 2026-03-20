---
slug: /gotop/d02/protocol
id: d02-protocol
sidebar_label: Protocol
title: GOTOP - D02 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GOTOP D02 y su comunicación con Plaspy para reportes de ubicación y alertas fiables
keywords:
  - Protocolo GOTOP D02
  - GOTOP D02 GPS
  - Compatibilidad GOTOP D02 Plaspy
  - Comunicación GOTOP D02
  - Protocolo rastreador GOTOP para mascotas
  - Protocolo de seguimiento GOTOP D02
  - Protocolo GPS rastreador Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Rastreador impermeable GOTOP D02
  - Seguimiento en tiempo real GOTOP D02
---

# GOTOP - Protocolo D02

Esta página ofrece contexto público sobre el protocolo para usar el rastreador para mascotas GOTOP D02 con Plaspy. Describe cómo el dispositivo suele comunicarse con los servidores de Plaspy y qué papel desempeña el protocolo de reporte del rastreador para entregar ubicaciones, alertas e información de estado a la plataforma. El D02 es un rastreador impermeable para mascotas que admite posicionamiento por GPS, WiFi, LBS y BeiDou, y ofrece funciones como seguimiento en tiempo real, enlaces de ubicación por SMS, búsqueda por sonido y luz, y monitoreo de voz remoto.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en contexto de alto nivel, no sensible, y en notas prácticas de integración en lugar de detalles internos de firmware.

## Visión general del protocolo

El protocolo de comunicaciones del GOTOP D02 regula cómo se envían los datos de ubicación, las actualizaciones de estado, las alarmas y comandos remotos sencillos desde el dispositivo hacia un servidor backend como Plaspy. A grandes rasgos, el protocolo garantiza que el rastreador pueda identificarse ante el servidor, reportar periódicamente o por eventos, y transportar pequeños mensajes de control o confirmación cuando el dispositivo y la red lo permiten.

- Permite que el D02 informe fijaciones de posición y el método de posicionamiento al servidor.
- Transporta la identidad del dispositivo y la información de sesión para que Plaspy pueda asociar los reportes con el rastreador correcto.
- Transmite notificaciones de eventos como batería baja, activación de geocercas o alertas SOS para su uso en monitoreo y alertas.
- Permite señalización de control remoto limitada cuando el dispositivo soporta configuración remota o funciones de monitoreo de voz.
- Proporciona una cadencia de reporte predecible para que Plaspy calcule movimiento, geocercas y métricas de actividad.

## Detección del protocolo por parte de Plaspy

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y detectar automáticamente el protocolo cuando llegan datos al endpoint compartido de Plaspy. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está apuntando a la dirección correcta de Plaspy.

- Plaspy escucha en el nombre de dominio compartido d.plaspy.com y en la IP pública 54.85.159.138.
- El puerto de escucha de Plaspy es 8888 y este mismo puerto se usa para todos los dispositivos compatibles.
- Plaspy acepta reportes por TCP o UDP en el puerto 8888 y admitirá conexiones en cualquiera de los dos transportes.
- Cuando el dispositivo envía sus primeros reportes al endpoint de Plaspy, Plaspy compara los datos entrantes con sus patrones de protocolo soportados y asocia el dispositivo.
- La configuración correcta del dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es el requisito habitual para habilitar la detección automática.

## Transporte y contexto de conexión

El D02 puede configurarse para usar transporte UDP o TCP según el firmware del dispositivo y las condiciones de la red. La elección del transporte afecta el comportamiento de entrega, pero no cambia el propósito general del protocolo, que es mover de forma fiable telemetría y eventos desde el rastreador hasta Plaspy.

- Los dispositivos pueden configurarse para reportar al dominio de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Tanto UDP como TCP son compatibles en el puerto 8888; seleccione el transporte que su dispositivo y su red soporten.
- Todos los dispositivos de Plaspy usan el mismo valor de puerto, lo que simplifica la configuración y las reglas de firewall.
- Las configuraciones de red celular en el rastreador deben permitir datos salientes GPRS o LTE hacia el endpoint de Plaspy.
- La resolución DNS para d.plaspy.com o la dirección directa por IP son enfoques válidos según las capacidades del dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los eventos disponibles y las funcionalidades opcionales; revise la versión de firmware del dispositivo al momento de solucionar problemas.
- Las revisiones de hardware o las variantes regionales pueden incluir diferencias menores en los transportes soportados o en las banderas de funciones que impacten el comportamiento del protocolo.
- Algunas funciones, como el monitoreo de voz remoto o la grabación, dependen del firmware del fabricante y pueden ser opcionales en el protocolo.
- La elección del transporte (UDP frente a TCP) puede influir en la fiabilidad en condiciones de red adversas; elija la opción recomendada para el firmware de su dispositivo.
- Siempre valide que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para permitir que Plaspy reciba datos.
- Verifique las notas de la versión del fabricante y las guías de configuración ante comportamientos inesperados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del D02 a nivel general ayuda en la configuración, la resolución de problemas y a asegurar una operación confiable a largo plazo con Plaspy. Conocer el contexto de conexión y qué reporta el rastreador permite una resolución más rápida cuando un dispositivo no aparece en línea o falta cierta telemetría.

- Ayuda a confirmar que el dispositivo está enviando datos al endpoint y puerto correctos de Plaspy.
- Facilita la interpretación de qué eventos y telemetría se espera que reporte el rastreador.
- Orienta la selección de transporte y la configuración del firewall para una entrega fiable.
- Favorece una comunicación efectiva con el soporte del fabricante utilizando términos comunes de protocolo.
- Permite un comportamiento predecible para geocercas, alertas de batería baja e informes de actividad.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP D02 con Plaspy ofrece una ruta sencilla para centralizar el seguimiento de mascotas, alertas y monitoreo de actividad. La detección automática de protocolos de Plaspy y el puerto unificado simplifican la incorporación de dispositivos, de modo que los equipos puedan enfocarse en configurar alertas, geocercas e intervalos de reporte en lugar de integraciones de bajo nivel.

Si desea obtener más información sobre cómo Plaspy funciona con el GOTOP D02 y otros dispositivos, visite https://www.plaspy.com. Para detalles de protocolo más actuales y específicos del dispositivo, notas de firmware e instrucciones de configuración, verifique la información con el fabricante en https://www.gotop.cc/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
