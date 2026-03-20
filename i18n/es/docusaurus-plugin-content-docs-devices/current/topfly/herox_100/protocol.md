---
slug: /topfly/herox_100/protocol
id: herox_100-protocol
sidebar_label: Protocol
title: TopFly - HeroX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el TopFly HeroX 100 con Plaspy, con información de conexión y compatibilidad
keywords:
  - Protocolo TopFly HeroX 100
  - Protocolo GPS HeroX 100
  - Protocolo rastreador TopFly
  - Protocolo de comunicación HeroX 100
  - Compatibilidad del rastreador TopFly con Plaspy
  - Protocolo de rastreo HeroX 100
  - Protocolo de rastreo vehicular TopFly
  - Protocolo de telemetría HeroX 100
  - Protocolo de dispositivo Plaspy
  - Protocolo GPS TopFly
---

# TopFly - Protocolo HeroX 100

Esta página describe el contexto público del protocolo para usar el rastreador GPS TopFly HeroX 100 con Plaspy. Se centra en cómo comunica el equipo con Plaspy en términos generales, qué ajustes de conexión se emplean habitualmente y qué debe considerarse al planear una integración o al resolver problemas. El contenido es de alto nivel y evita exponer implementaciones internas privadas del fabricante.

El HeroX 100 es un rastreador cableado compatible con Plaspy, diseñado para despliegues en vehículos y activos. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre confirme detalles específicos del dispositivo con la documentación del fabricante cuando sea necesario.

## Descripción general del protocolo

El protocolo de reporte del dispositivo define cómo el HeroX 100 envía ubicación, telemetría y eventos a un servidor remoto y cómo el servidor puede enviar comandos de vuelta al equipo. En el contexto de Plaspy, el protocolo permite la identificación del dispositivo, la entrega fiable de telemetría y la generación de eventos accionables para flujos de trabajo de flota.

- Traduce fijaciones GNSS, telemetría CAN BUS, eventos de E/S y datos de sensores BLE en mensajes que un backend puede ingerir.
- Proporciona identificación y estado del dispositivo para que Plaspy pueda asignar los datos entrantes al activo y configuración correctos.
- Soporta reportes periódicos y mensajes por eventos para equilibrar la necesidad de seguimiento en tiempo real con el consumo de ancho de banda y energía.
- Permite comandos remotos y configuración desde el servidor cuando el firmware del dispositivo soporta transporte bidireccional.
- Ayuda a preservar el historial durante cortes al definir cómo se envían los puntos en búfer una vez se restablece la conexión.
- Funciona junto a capas de transporte como UDP o TCP para entregar los datos al endpoint de Plaspy de forma fiable.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint público compartido y emplea detección automática para reconocer el formato de reporte del dispositivo. Cuando un HeroX 100 está configurado para reportar a Plaspy, normalmente usted no necesitará seleccionar un protocolo específico dentro de Plaspy siempre que el equipo apunte al endpoint y puerto estándar de Plaspy.

- Plaspy escucha los reportes de dispositivos en el dominio público d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo puerto para reportar, el puerto 8888, lo que simplifica la configuración.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del rastreador y las consideraciones de red.
- Cuando el HeroX 100 apunta al endpoint de Plaspy, la plataforma inspecciona los mensajes entrantes y los asocia con el dispositivo y modelo de datos correctos.
- La configuración adecuada del dispositivo hacia el endpoint de Plaspy normalmente elimina la necesidad de seleccionar manualmente el protocolo en la plataforma.

## Transporte y contexto de conexión

La comunicación exitosa depende del transporte de red y de la configuración correcta del endpoint. El HeroX 100 soporta varios transportes y puede configurarse para alcanzar el servidor de Plaspy mediante el endpoint y puerto habituales.

- Los equipos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la arquitectura de red.
- El HeroX 100 puede usar UDP o TCP en el puerto 8888; seleccione el transporte que mejor se ajuste a su firmware y a las necesidades de fiabilidad de la red.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, garantizando un destino consistente independientemente del modelo.
- Elementos de red como cortafuegos y NAT deben permitir conexiones salientes de los dispositivos hacia el puerto 8888 para asegurar la entrega.
- Si requiere enrutamiento basado en DNS o por IP, tanto el dominio como la IP están públicamente disponibles para su configuración.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de los mensajes, los campos disponibles o los transportes soportados; verifique el nivel de firmware al validar compatibilidad.
- Las revisiones de hardware y los módulos accesorios opcionales pueden modificar qué canales de telemetría están disponibles o el formato de ciertos informes de sensores.
- Los menús o herramientas de configuración del fabricante pueden ofrecer opciones para cambiar entre TCP y UDP o para seleccionar intervalos de reporte que afecten el comportamiento del servidor.
- La elección entre UDP y TCP influye en la semántica de entrega y puede afectar la retransmisión o el comportamiento de respuesta a comandos.
- Siempre pruebe el reporte del dispositivo hacia el endpoint de Plaspy en un entorno controlado antes de un despliegue a gran escala.
- Consulte las notas de la versión del fabricante para cambios específicos de firmware que puedan afectar la integración.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el HeroX 100 ayuda a garantizar un flujo de datos confiable hacia Plaspy, acelera la resolución de problemas y reduce el tiempo de integración. Tener claro el protocolo y el contexto del transporte permite a los equipos de operaciones mantener un seguimiento consistente y reaccionar con rapidez ante problemas de dispositivo o red.

- Asegura la configuración correcta de endpoint y transporte para que los dispositivos reporten correctamente a Plaspy.
- Ayuda a interpretar el comportamiento del dispositivo durante cortes al conocer cómo se manejan los datos en búfer y las reconexiones.
- Facilita la resolución dirigida cuando los mensajes no aparecen en Plaspy o llegan con campos inesperados.
- Orienta las decisiones sobre intervalos de reporte y filtros de eventos para equilibrar la granularidad de datos y el uso de datos móviles.
- Apoya la planificación de capacidades de comando y control remoto, por ejemplo acciones de inmovilización remota cuando el firmware soporta comandos salientes.

## Por qué usar Plaspy con este protocolo

Usar el HeroX 100 con Plaspy ofrece a las organizaciones un camino directo desde la telemetría del dispositivo hasta insights operacionales. El equipo entrega posicionamiento GNSS preciso, telemetría CAN BUS, datos ricos de E/S y sensores BLE que Plaspy puede ingerir para mapas en vivo, alertas, reportes y flujos de trabajo automatizados de flota. Esta combinación resulta útil para seguimiento de flotas, anti robo, monitoreo de combustible, control de cadena fría e identificación de conductores.

Para conocer más sobre Plaspy y cómo ingiere y utiliza datos de rastreadores visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware e instrucciones de configuración, siempre verifique la información con el fabricante en https://www.topflytech.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
