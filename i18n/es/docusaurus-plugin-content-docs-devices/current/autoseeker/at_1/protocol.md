---
slug: /autoseeker/at_1/protocol
id: at_1-protocol
sidebar_label: Protocol
title: Autoseeker - AT-1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Autoseeker AT-1 y su comunicación con Plaspy para seguimiento GPS fiable y configuración del dispositivo
keywords:
  - protocolo Autoseeker AT-1
  - rastreador GPS Autoseeker
  - protocolo GPS AT-1
  - compatibilidad Autoseeker Plaspy
  - protocolo de comunicación AT-1
  - protocolo rastreador GPS Plaspy
  - protocolo GPS 4G
  - rastreador LTE Plaspy
  - guía protocolo de rastreo
  - protocolo de reporte de dispositivo
---

# Autoseeker - Protocolo AT-1

Esta página describe el contexto público y no sensible del protocolo para usar el rastreador Autoseeker AT-1 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, las opciones de transporte que puede configurar y consideraciones prácticas de compatibilidad que importan durante la configuración y resolución de problemas.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general y comprobaciones prácticas para confirmar la compatibilidad.

## Resumen del protocolo

El protocolo de comunicación es el conjunto de comportamientos y convenciones que un rastreador emplea para enviar ubicación, estado y alertas a un servidor remoto. En el caso del AT-1, el protocolo permite que el dispositivo reporte posiciones GNSS, eventos de geocerca y su estado operativo para que Plaspy pueda mostrar y gestionar los datos del rastreador en monitoreo e historial.

- Transporta la identidad y el estado del dispositivo para que el servidor asocie los mensajes entrantes con el registro correcto.
- Entrega informes de posición y datos relacionados con el movimiento que permiten a Plaspy poblar mapas e historiales.
- Transmite eventos de alerta, como entradas o salidas de geocercas, de forma que Plaspy pueda generar notificaciones.
- Soporta comportamientos de configuración y latidos (heartbeats) que determinan la frecuencia de reporte y la gestión de energía.
- Funciona sobre transportes de red estándar para que el rastreador pueda alcanzar el endpoint de Plaspy desde redes celulares.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para los reportes entrantes y detecta automáticamente el protocolo que usa el rastreador. En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP address is 54.85.159.138
- Plaspy uses port 8888 for device connections
- Devices can be configured to use UDP or TCP on port 8888 depending on device support and network conditions
- All Plaspy devices use the same port making initial configuration simpler for mixed fleets
- When a properly configured AT-1 reports to the Plaspy endpoint, protocol detection is handled automatically by Plaspy

## Transporte y contexto de conexión

Las opciones de conexión y transporte determinan cómo el AT-1 alcanza Plaspy y pueden afectar la fiabilidad, la latencia y el consumo de energía. El AT-1 soporta conectividad 4G moderna, que usa para llegar a Plaspy a través de la conexión a internet que proporciona la red celular.

- El AT-1 puede configurarse para enviar datos por UDP o TCP al puerto 8888
- El rastreador puede apuntar al dominio d.plaspy.com o directamente a 54.85.159.138 según las necesidades de configuración local
- UDP se emplea a menudo para reportes de baja sobrecarga, mientras que TCP puede ofrecer una entrega más fiable según el firmware del dispositivo
- Asegúrese de que la configuración APN de la red móvil permita conexiones salientes al endpoint de Plaspy y de que los firewalls del operador no bloqueen el transporte elegido
- Confirme que los ajustes de firmware del dispositivo coincidan con el transporte y el endpoint seleccionados para que los reportes lleguen a Plaspy de forma consistente

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el tiempo entre mensajes, los tipos de reporte disponibles y los comandos de configuración; confirme siempre la versión de firmware del rastreador al resolver problemas
- Las variantes de hardware o modelos regionales del AT-1 pueden introducir pequeñas diferencias en el soporte de transporte o en las funciones
- Las guías de configuración proporcionadas por el fabricante son la fuente autorizada para la configuración específica del dispositivo y los parámetros de red
- Seleccionar UDP o TCP en el dispositivo puede afectar el comportamiento de reintentos y la fiabilidad percibida en redes celulares
- Los modos de ahorro de batería y los intervalos de reporte del AT-1 influirán en la cadencia de datos que llegan a Plaspy
- Valide que el dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para una integración exitosa

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador y el contexto de conexión ayuda a asegurar una configuración exitosa, reduce el tiempo de resolución de problemas y mejora la fiabilidad a largo plazo cuando se gestionan dispositivos en Plaspy.

- Ayuda a diagnosticar por qué un dispositivo podría no aparecer en Plaspy al configurarlo por primera vez
- Aclara el impacto de las actualizaciones de firmware en la cadencia de reportes y en los eventos disponibles
- Orienta la decisión sobre la selección de transporte según el comportamiento de la red y restricciones de energía
- Guía la validación de APN y ajustes de red necesarios para alcanzar el endpoint de Plaspy
- Apoya la planificación de la vida útil de la batería relacionando los intervalos de reporte con el consumo energético

## Por qué usar Plaspy con este protocolo

Usar un Autoseeker AT-1 con Plaspy proporciona a organizaciones y particulares una forma práctica de combinar un rastreador 4G compacto y de bajo consumo con una plataforma que detecta automáticamente el protocolo e ingesta dispositivos. Esa combinación puede simplificar el despliegue en múltiples unidades y reducir la necesidad de selección manual de protocolo cuando los dispositivos apuntan al endpoint compartido de Plaspy.

Si desea obtener más información sobre Plaspy y cómo funciona con dispositivos como el Autoseeker AT-1 visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo y firmware específicos del dispositivo, verifique la información con el fabricante en https://autoseekergps.com/ ya que el comportamiento del protocolo y las implementaciones de firmware pueden cambiar con el tiempo.
