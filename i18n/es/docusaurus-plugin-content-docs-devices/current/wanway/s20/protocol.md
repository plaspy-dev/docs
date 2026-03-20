---
slug: /wanway/s20/protocol
id: s20-protocol
sidebar_label: Protocol
title: WanWay - S20 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador WanWay S20 con Plaspy, detección de conexión y compatibilidad
keywords:
  - protocolo WanWay S20
  - protocolo GPS WanWay S20
  - protocolo de seguimiento WanWay S20
  - protocolo de comunicación WanWay S20
  - compatibilidad S20 con Plaspy
  - protocolo de rastreador de activos WanWay
  - protocolo de rastreador GPS alimentado por batería
  - integración WanWay S20
  - rastreo de activos GPS Plaspy
  - seguimiento de flotas WanWay S20
---

# WanWay - Protocolo S20

Esta página describe el contexto público del protocolo para usar el rastreador GPS de activos WanWay S20 con Plaspy. Explica cómo el S20 informa ubicación y estado a Plaspy y qué consideraciones a nivel de protocolo son relevantes para el despliegue, sin exponer detalles privados de implementación. Úselo como referencia práctica al planear la integración, el despliegue y la resolución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la variante de hardware y la configuración del fabricante. El S20 es un rastreador alimentado por batería con detección de manipulación y montaje magnético, comúnmente desplegado en remolques, contenedores y equipos portátiles; entender el contexto de comunicación ayuda a garantizar reportes y alarmas fiables en Plaspy.

## Resumen del protocolo

El protocolo que usa el S20 regula cómo el dispositivo se identifica, reporta posición y telemetría, y señala alertas como manipulación o movimiento. Para la integración con Plaspy, esto implica que el protocolo debe entregar datos legibles de posición, hora, batería y eventos al endpoint de Plaspy para que la plataforma los pueda parsear y mostrar en la vista de flota.

- Permite que el S20 envíe actualizaciones de posición y telemetría al servidor remoto para que Plaspy muestre ubicaciones en tiempo real e históricas.
- Transmite identidad del dispositivo y banderas de evento que permiten a Plaspy asociar informes con un activo y activar alarmas como desmontaje o batería baja.
- Soporta una capa de transporte sobre la conectividad de red para que los paquetes lleguen a Plaspy de forma fiable según la configuración del dispositivo y las condiciones de señal.
- Equilibra la frecuencia de reporte y el consumo de energía para ofrecer seguimiento de alta frecuencia cuando se requiere y ciclos de baja actividad para mayor vida útil de la batería.
- Proporciona la información que Plaspy necesita para combinar la telemetría del S20 con otras entradas de la flota y ofrecer monitorización y reportes unificados.

## Detección del protocolo por parte de Plaspy

Plaspy recibe los informes en un endpoint y puerto compartidos y identifica automáticamente el protocolo del rastreador para enrutar y parsear los datos entrantes. En despliegues típicos no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el S20 esté configurado para reportar al endpoint correcto de Plaspy.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para direccionamiento directo.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para el reporte.
- Si el dispositivo está configurado para enviar informes a d.plaspy.com o a 54.85.159.138 en el puerto 8888, Plaspy recibirá los datos y realizará la detección del protocolo.
- Los usuarios, por lo general, solo necesitan configurar el endpoint de reporte y el tipo de transporte en el S20; Plaspy se encarga del resto al recibir los datos.

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el S20 alcanza los servidores de Plaspy a través de la red móvil. El dispositivo puede soportar distintas opciones de transporte y debe configurarse de acuerdo con el firmware y las necesidades operativas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Los dispositivos pueden apuntar su dirección de reporte a d.plaspy.com o a 54.85.159.138 si se prefiere direccionamiento por IP directo.
- Usar UDP puede reducir la sobrecarga de conexión y el consumo de batería en algunos modos de reporte, mientras que TCP puede ofrecer entrega más fiable en redes con pérdida, según el comportamiento del firmware del S20.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y el enrutamiento en el servidor.
- Asegúrese de que el APN y los ajustes de la SIM en el S20 sean correctos para que el rastreador pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888 desde la red celular.

## Notas de compatibilidad del protocolo

- Las variaciones de firmware entre unidades S20 pueden cambiar las funciones de reporte disponibles, los transportes soportados y los parámetros de configuración por defecto.
- Revisiones de hardware o distintos SKUs del producto pueden exponer diferentes opciones de sensores o banderas de evento que afectan lo que el protocolo reporta.
- Las herramientas de configuración del fabricante o los comandos SMS pueden usarse para establecer los parámetros de transporte y servidor; confirme los comandos exactos en la documentación oficial de WanWay.
- La selección del transporte (UDP versus TCP) puede afectar las características de entrega y el consumo de batería; elija el modo soportado por su firmware desplegado y las condiciones de la red.
- Plaspy detecta automáticamente el protocolo del rastreador, pero es necesario que el dispositivo esté correctamente configurado apuntando a d.plaspy.com o 54.85.159.138 en el puerto 8888 para una detección sin inconvenientes.
- Valide la compatibilidad contra la documentación más reciente del WanWay S20 y las notas de la versión de firmware antes de realizar despliegues a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comporta el protocolo del rastreador ayuda en la configuración inicial, la resolución de problemas y el mantenimiento de la fiabilidad a largo plazo cuando los dispositivos S20 son gestionados por Plaspy. Un entendimiento práctico reduce el tiempo de resolución para informes perdidos, dispositivos mal identificados y manejo de alarmas.

- Ayuda a verificar que el S20 esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y a seleccionar el transporte apropiado.
- Orienta la resolución de problemas cuando los informes dejan de llegar o las alarmas no se presentan en Plaspy, enfocando los esfuerzos en la red, el transporte y el firmware.
- Permite planificar intervalos de reporte y umbrales de alarma que equilibren visibilidad y vida útil de la batería para casos de uso de rastreo de activos.
- Facilita decisiones informadas al probar actualizaciones de firmware o nuevas revisiones de hardware para asegurar la compatibilidad continua con Plaspy.
- Mejora la comunicación con fabricantes y proveedores de red al diagnosticar problemas de entrega o parseo.

## Por qué usar Plaspy con este protocolo

Usar el WanWay S20 con Plaspy ofrece a las operaciones una vía clara para integrar rastreadores compactos alimentados por batería en una vista única de gestión de flota. Plaspy ingiere la telemetría del S20 y expone ubicación, alertas de manipulación, estado de batería y reproducción histórica para que los equipos puedan responder a incidentes y gestionar activos en logística, construcción y escenarios de flotas temporales.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el WanWay S20 visite https://www.plaspy.com. Verifique por favor los detalles específicos más recientes del protocolo del dispositivo, el comportamiento de firmware soportado y la guía del fabricante en el sitio de WanWay https://www.wanwaytech.net/ ya que el soporte del protocolo y la implementación del dispositivo pueden cambiar con el tiempo.
