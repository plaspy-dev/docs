---
slug: /arknav/at_9000/protocol
id: at_9000-protocol
sidebar_label: Protocol
title: ArkNav - AT-9000 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ArkNav AT-9000 y compatibilidad con Plaspy, con guía de conexión y notas de integración
keywords:
  - protocolo ArkNav AT-9000
  - protocolo GPS AT-9000
  - compatibilidad AT-9000 Plaspy
  - protocolo tracker ArkNav
  - protocolo de comunicación AT-9000
  - protocolo de rastreo AT-9000
  - integración ArkNav Plaspy
  - protocolo rastreador de contenedores
  - protocolo de rastreo de activos
  - protocolo GPS para gestión de flotas
---

# ArkNav - Protocolo AT-9000

Esta página ofrece un resumen público del protocolo para usar el rastreador ArkNav AT-9000 con Plaspy. Se centra en el contexto de comunicación relevante para la integración, explicando cómo el dispositivo reporta telemetría a Plaspy y qué considerar al configurar los equipos para lograr reportes fiables en despliegues de larga duración.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo informa a la plataforma. El comportamiento exacto y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página pretende explicar el contexto general del protocolo que gobierna la comunicación entre dispositivo y servidor sin exponer detalles internos del firmware.

## Resumen del protocolo

El protocolo de reporte del AT-9000 es el mecanismo por el cual el dispositivo transmite ubicación, eventos de movimiento y estado a un servidor remoto. En términos prácticos, el protocolo determina cómo se identifica el rastreador, cómo se empaqueta la telemetría para su transporte y cómo el servidor interpreta esos datos para mostrarlos, generar alertas y mantener historial.

- Permite que el AT-9000 transmita posiciones A-GPS y derivadas de la red celular a un endpoint remoto para su procesamiento.
- Transporta indicadores de eventos de movimiento y señales de estado que permiten a Plaspy generar alertas y activar reportes del equipo cuando sea necesario.
- Proporciona una estructura para cargas periódicas de telemetría y consultas bajo demanda, como consultas vía SMS.
- Permite que el dispositivo use ubicación basada en celular cuando el GPS no sea fiable, mejorando la disponibilidad en contenedores apilados y recintos metálicos.
- Soporta el almacenamiento temporal de telemetría en memoria local para que las cargas se reanuden cuando regrese la conectividad.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo que usa un dispositivo. En la mayoría de despliegues usted solo necesita configurar el AT-9000 para reportar al endpoint de Plaspy; la plataforma se encargará de identificar el protocolo y encaminar la telemetría al flujo de procesamiento adecuado.

- Los dispositivos deben apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 y utiliza ese mismo puerto para todos los dispositivos soportados.
- El AT-9000 puede configurarse para usar UDP o TCP hacia Plaspy en el puerto 8888, según capacidades del equipo y transporte elegido.
- Cuando el dispositivo reporta activamente al endpoint de Plaspy, la plataforma intenta identificar el protocolo entrante y mapear los campos de telemetría de forma automática.
- En la mayoría de los casos usted no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el AT-9000 alcanza Plaspy a través de la red celular y qué opciones de transporte son las más usadas. La selección adecuada del transporte y la dirección del servidor son esenciales para un reporte estable y un consumo eficiente de batería en despliegues prolongados.

- El AT-9000 puede configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración de puerto es consistente entre modelos y simplifica el aprovisionamiento de flotas.
- La elección entre UDP y TCP puede afectar el consumo de batería, el comportamiento de retransmisión y la forma en que el equipo maneja la conectividad intermitente; seleccione el transporte que soporte el firmware del AT-9000 y que se ajuste a los objetivos del despliegue.
- Asegúrese de que el APN y las configuraciones de la SIM en el AT-9000 permitan conexiones salientes al endpoint de Plaspy para garantizar reportes fiables.

## Notas de compatibilidad del protocolo

- Las funciones del protocolo y la disponibilidad de comandos pueden variar según la versión de firmware del AT-9000; confirme la versión de firmware al validar compatibilidad.
- Las revisiones de hardware y las variantes regionales pueden cambiar el comportamiento de reporte por defecto o los transportes soportados.
- La selección del transporte (UDP frente a TCP) debe coincidir con lo que el firmware del dispositivo soporte y con la configuración del perfil del equipo.
- Algunas capacidades, como la recuperación por SMS o comandos remotos específicos, dependen del firmware del fabricante y de las opciones de configuración.
- El comportamiento de almacenamiento local de datos puede diferir según el firmware y afecta cuánto tiempo se retiene la telemetría durante periodos sin cobertura.
- Siempre valide las configuraciones del dispositivo con la documentación oficial de ArkNav para detalles específicos de firmware antes de realizar un despliegue a gran escala.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el AT-9000 ayuda a asegurar una configuración estable, a diagnosticar problemas con precisión y a lograr una operación predecible a largo plazo cuando se integra con Plaspy. Una comprensión práctica reduce errores de configuración y facilita que los equipos ajusten perfiles de reporte para optimizar la vida útil de la batería y las necesidades operativas.

- Acelera la resolución de problemas al clarificar si los fallos están relacionados con el transporte, la dirección del servidor o la configuración del equipo.
- Ayuda a elegir perfiles de reporte y umbrales de movimiento que equilibren la vida de la batería con las necesidades de visibilidad.
- Reduce el tiempo de integración al alinear la configuración del equipo con los requisitos de conexión y dirección de servidor de Plaspy.
- Mejora la fiabilidad al asegurar que los dispositivos usan el transporte y endpoint correctos para cargas de telemetría ininterrumpidas.
- Permite planificar mejor opciones de recuperación remota como SMS y la gestión de cargas locales después de una interrupción.

## Por qué utilizar Plaspy con este protocolo

Integrar el AT-9000 con Plaspy ofrece visibilidad persistente de activos y supervisión operativa para casos de uso en contenedores, remolques y equipos pesados. La combinación de larga duración de batería, diseño resistente, A-GPS con fallback por celular y las funciones de gestión de flotas de Plaspy convierte al AT-9000 en una opción práctica para despliegues prolongados donde las ventanas de mantenimiento son limitadas.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. Para detalles más actuales sobre el protocolo del dispositivo, comportamiento de firmware y documentación del fabricante del AT-9000, verifique la información en el sitio oficial de ArkNav https://www.arknavgps.com.tw/. El soporte de protocolo y las implementaciones de firmware pueden cambiar con el tiempo, por lo que es recomendable consultar los recursos del fabricante para actualizaciones específicas del dispositivo.
