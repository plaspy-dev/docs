---
slug: /sanav/mu201s1/protocol
id: mu201s1-protocol
sidebar_label: Protocol
title: Sanav - MU201S1 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del rastreador Sanav MU201S1 y su comunicación con Plaspy para seguimiento y configuración remota
keywords:
  - protocolo Sanav MU201S1
  - GPS Sanav MU201S1
  - compatibilidad Sanav MU201S1 Plaspy
  - protocolo de comunicación MU201S1
  - protocolo de rastreo MU201S1
  - protocolo rastreador GPS Plaspy
  - rastreador de activos Sanav
  - rastreador para mascotas MU201S1
  - protocolo tracker GPRS
  - guía de protocolo Sanav
---

# Sanav - Protocolo MU201S1

Esta página describe el contexto público del protocolo para usar el rastreador Sanav MU201S1 con Plaspy. Se centra en cómo el dispositivo informa ubicación y eventos a Plaspy, cómo se usan normalmente las rutas de configuración y actualización de firmware por aire, y qué esperar al integrar este modelo en una implementación de Plaspy.

Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que este documento mantiene la explicación a un nivel público y seguro para la implementación mientras detalla cómo el MU201S1 suele interactuar con una plataforma backend como Plaspy.

## Visión general del protocolo

El MU201S1 transmite datos de rastreo y estado a través de enlaces celulares y soporta canales para configuración remota. En la práctica, el rastreador envía reportes de posición periódicos, notificaciones de eventos (como SOS, violaciones de geocerca, batería baja y alertas de movimiento) y puede recibir configuraciones o actualizaciones de firmware por la red.

- Permite reportar ubicaciones en tiempo real o de forma retrospectiva a un servidor usando GPRS y opciones de transporte estándar
- Envía reportes de eventos para SOS, entrada/salida de geocercas, batería baja, exceso de velocidad, encendido/apagado y detección de movimiento
- Acepta configuración remota por SMS y por GPRS para ajustar intervalos de reporte, ajustes de geocerca y alarmas
- Soporta actualizaciones de firmware por GPRS para mantener el dispositivo actualizado sin acceso físico
- Reporta posición según tiempo, distancia o movimiento, lo que ayuda a conservar batería en rastreadores de larga duración

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un único endpoint y puerto compartidos y está diseñado para reconocer automáticamente el protocolo de reporte. Cuando un MU201S1 se configura para enviar datos a Plaspy, la plataforma usa las características de la conexión entrante y la secuencia de datos del dispositivo para seleccionar la rutina de manejo adecuada sin requerir que el usuario elija el protocolo manualmente.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto común 8888
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, por lo que solo es necesario apuntar al endpoint de Plaspy
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos, por lo que normalmente no es necesario seleccionar el protocolo dentro de Plaspy
- La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito habitual para que la detección automática funcione
- Si el dispositivo soporta tanto configuración por SMS como por GPRS, asegúrese de que el reporte por red esté configurado hacia Plaspy para permitir el manejo automático

## Transporte y contexto de conexión

Las opciones de conexión suelen seleccionarse en el dispositivo o a través de la interfaz de configuración del fabricante. El MU201S1 soporta múltiples opciones de interfaz aérea y puede configurarse para usar UDP o TCP para comunicarse con servidores remotos según el firmware y la configuración.

- El MU201S1 puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 al configurar los ajustes de servidor
- Todos los dispositivos en Plaspy se comunican usando el mismo puerto, por lo que una única configuración de puerto saliente es suficiente en muchas implementaciones
- El rastreador también soporta SMS y HTTP para configuración y reporte en escenarios donde GPRS está restringido o no está disponible
- La selección de transporte (UDP vs TCP) afectará las características de entrega, pero no cambia que Plaspy reciba e intente parsear los reportes entrantes

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden modificar la temporización de mensajes, el contenido de los reportes y los eventos disponibles; verifique el comportamiento según la versión de firmware en uso
- Las revisiones de hardware o variantes regionales del producto pueden alterar los transportes soportados o los comandos de configuración disponibles
- El MU201S1 soporta configuración por SMS y GPRS; asegúrese de que el dispositivo esté configurado para reportar por GPRS al endpoint de Plaspy para la detección automática del protocolo
- Diferencias en el comportamiento de las redes de los operadores y en la configuración del APN pueden afectar la conectividad y deben validarse durante la puesta en marcha
- La selección de transporte (UDP vs TCP) debe coincidir con la configuración del dispositivo y con cualquier requisito de red intermedio
- Revise siempre las notas de lanzamiento del fabricante para detectar cambios de funciones que puedan afectar cómo el dispositivo reporta a sistemas backend

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador y el contexto de transporte ayuda a garantizar una configuración fluida, un flujo de datos consistente y un comportamiento predecible en campo. Tener una visión práctica de cómo el MU201S1 informa ubicación y eventos reduce el tiempo de resolución de problemas y favorece decisiones operativas más acertadas.

- Ayuda a diagnosticar problemas de conectividad confirmando que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Permite verificar si los reportes deben llegar en tiempo real o ser enviados de forma retrospectiva desde la memoria interna
- Orienta la selección de transporte y la configuración del APN para una entrega fiable
- Mejora el manejo de reportes de eventos como SOS, alertas de geocerca o batería baja, de modo que las alertas se muestren correctamente en Plaspy
- Facilita la planificación de actualizaciones de firmware por GPRS y la comprensión del impacto en el comportamiento de reporte

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el Sanav MU201S1 ofrece a las organizaciones una vía práctica para incorporar un rastreador de activos y mascotas de larga duración de batería en un sistema de monitoreo centralizado. El enfoque de endpoint compartido de Plaspy simplifica la incorporación: configure el MU201S1 para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 (UDP o TCP según lo soporte) y Plaspy se encargará de la identificación del protocolo y del procesamiento de los mensajes.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información específica del protocolo y del firmware en el sitio del fabricante http://es.sanav.com/ antes de realizar desplegados a gran escala.
