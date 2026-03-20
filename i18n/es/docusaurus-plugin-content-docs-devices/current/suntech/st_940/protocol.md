---
slug: /suntech/st_940/protocol
id: st_940-protocol
sidebar_label: Protocol
title: Suntech - ST 940 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Suntech ST 940 y su compatibilidad con servidores Plaspy y ajustes de conexión compartidos
keywords:
  - protocolo Suntech ST 940
  - protocolo GPS Suntech ST 940
  - comunicación ST 940
  - compatibilidad rastreador Suntech Plaspy
  - protocolo de rastreo GPS Suntech
  - guía protocolo ST 940
  - integración Suntech ST 940
  - rastreo vehicular Suntech ST 940
  - rastreador de activos ST 940
  - rastreadores compatibles con Plaspy
---

# Suntech - ST 940 Protocolo

Esta página describe el contexto público del protocolo y ofrece orientación de conexión para usar el rastreador Suntech ST 940 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué esperar al configurarlo para reportar a Plaspy y cómo las capacidades del equipo influyen en la integración con la plataforma. El contenido se centra en información pública y no en detalles confidenciales del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El ST 940 es un dispositivo compacto, de larga duración de batería, resistente al agua y con montaje magnético; esas características influyen en los patrones de reporte y en las decisiones de despliegue, aunque no modifican el punto final y el puerto público que usa Plaspy.

## Resumen del protocolo

El protocolo es el conjunto de reglas que sigue un rastreador para enviar ubicación, estado y telemetría a un servidor, de modo que una plataforma como Plaspy pueda interpretar y mostrar esos datos. En el caso del ST 940, el equipo transmitirá periódica o condicionalmente su posición y estado al endpoint de Plaspy para que la información pueda registrarse y utilizarse en monitoreo y alertas.

- Permite que el rastreador reporte posición, sellos de tiempo e información de estado básica a Plaspy
- Facilita la identificación del dispositivo para que la plataforma asocie los reportes entrantes con el activo correcto
- Soporta patrones de reporte periódicos y disparados por eventos que afectan la duración de la batería y la visibilidad
- Transporta la telemetría utilizada en alertas, geocercas e historial de ubicación
- Está influenciado por la configuración de firmware y por la revisión de hardware, lo cual define la frecuencia de reporte y los campos disponibles

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador sin que en la mayoría de los casos sea necesaria una selección manual. Cuando un ST 940 apunta al endpoint de Plaspy y el dispositivo emplea el comportamiento de reporte esperado, la plataforma identifica los mensajes entrantes y los vincula con el registro de dispositivo correspondiente.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma
- Los usuarios normalmente no necesitan elegir un protocolo dentro de Plaspy si el rastreador está configurado para reportar al endpoint de Plaspy
- La identidad del dispositivo y los reportes regulares permiten a Plaspy asociar las transmisiones con el activo correcto

## Transporte y contexto de conexión

La elección del transporte del rastreador determina cómo se entregan los mensajes a Plaspy, pero no cambia el endpoint de la plataforma. El ST 940 puede configurarse para usar cualquiera de los transportes soportados según las capacidades del dispositivo y la configuración. Comprender las opciones de transporte ayuda al configurar el acceso de red o al solucionar reportes intermitentes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Los equipos pueden apuntar a d.plaspy.com o a 54.85.159.138
- Plaspy utiliza el mismo puerto único para todos los dispositivos soportados, lo que simplifica la configuración de firewall y de la red
- La selección del transporte puede afectar las características de entrega de mensajes y el manejo de retransmisiones a nivel de red
- Confirme el enrutamiento de red y cualquier regla de NAT o firewall que pueda afectar la conectividad del dispositivo al desplegar en gran escala

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware en el ST 940 pueden modificar los campos disponibles y el comportamiento de reporte; siempre revise las notas de firmware del dispositivo al solucionar problemas
- Las revisiones de hardware o las variantes regionales pueden cambiar los modos de transporte soportados o los intervalos de reporte predeterminados
- Las opciones de configuración del fabricante pueden permitir cambiar entre TCP y UDP o modificar la dirección y el puerto de destino
- El endpoint compartido de Plaspy y la detección automática reducen la necesidad de seleccionar el protocolo manualmente, pero no eliminan la necesidad de configurar el dispositivo para que reporte a Plaspy
- Al integrar muchos dispositivos, valide un equipo de muestra de extremo a extremo antes del despliegue masivo
- Para funciones avanzadas o soporte de comandos, consulte la documentación del fabricante sobre el comportamiento específico del firmware

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar reportes confiables, un uso eficiente de la batería y una resolución de problemas más rápida cuando un ST 940 se despliega con Plaspy. Aunque Plaspy gestiona la detección del protocolo, conocer el comportamiento de reporte del equipo permite tomar mejores decisiones de configuración y operativas.

- Ayuda a elegir intervalos de reporte que equilibren visibilidad y duración de batería
- Acelera el diagnóstico de problemas de conectividad relacionados con el transporte o la configuración de red
- Permite confirmar que el dispositivo está enviando la identidad y los campos de telemetría esperados
- Mejora la planificación de geocercas, entrega de alarmas y retención de datos históricos
- Facilita la coordinación de actualizaciones de firmware y estrategias de despliegue en flotas

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 940 con Plaspy ofrece visibilidad clara de la ubicación y del estado básico del dispositivo, aprovechando la detección automática de protocolos y los ajustes de conexión compartidos de la plataforma. El enfoque de endpoint único simplifica la configuración de red, por lo que los dispositivos solo necesitan apuntar al servidor de Plaspy para comenzar a reportar.

Si desea saber más sobre cómo funciona Plaspy con rastreadores como el Suntech ST 940 visite https://www.plaspy.com. Para obtener los detalles de protocolo más recientes, notas de firmware y orientación de implementación específica del dispositivo, consulte la documentación del fabricante en http://www.suntechint.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
