---
slug: /aoya/a10/protocol
id: a10-protocol
sidebar_label: Protocol
title: AoYa - A10 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del AoYa A10 y cómo comunica con Plaspy para un rastreo vehicular confiable
keywords:
  - protocolo AoYa A10
  - protocolo GPS AoYa A10
  - AoYa A10 para Plaspy
  - compatibilidad rastreador A10
  - protocolo rastreador GPS
  - protocolo de rastreo vehicular
  - detección de protocolo Plaspy
  - conectividad rastreador AoYa
  - rastreo GPS automotriz
  - rastreo de flotas A10
---

# AoYa - Protocolo A10

Esta página ofrece una visión pública y de alto nivel del contexto de comunicación para usar el rastreador GPS AoYa A10 con la plataforma Plaspy. Se centra en el protocolo de informe del dispositivo, las configuraciones de conexión habituales y consideraciones prácticas que ayudan a garantizar que el rastreador pueda enviar ubicación y estado a Plaspy sin entrar en detalles de implementación que corresponden a la documentación del fabricante.

El AoYa A10 es un rastreador compacto para vehículos que utiliza redes GSM GPRS y WiFi, y un chip GPS UBLOX para proporcionar actualizaciones de posición. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esos detalles deben validarse con los recursos oficiales del proveedor.

## Visión general del protocolo

El protocolo de comunicación del dispositivo es el método acordado mediante el cual el AoYa A10 envía información de ubicación, estado y eventos a un servidor remoto como Plaspy. A nivel de documentación pública, el protocolo define cómo el rastreador se identifica, transmite telemetría útil y proporciona los datos que Plaspy necesita para mostrar ubicación y estado en la plataforma.

- Permite informes periódicos y por eventos para que Plaspy pueda ubicar y fechar las posiciones del dispositivo.
- Transporta identificadores del equipo y campos de estado que permiten a Plaspy asociar los datos entrantes con el registro correcto del rastreador.
- Lleva telemetría como la fijación GPS, nivel de batería y señal de red que respaldan la supervisión y las alertas.
- Soporta tanto informes continuos como comportamientos de ahorro de energía que afectan la frecuencia de reporte y la autonomía.
- Permite comandos por aire y configuración remota cuando el fabricante y el firmware del dispositivo soportan esas funciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los rastreadores en un endpoint y puerto compartidos y aplica detección automática de protocolo para que la mayoría de los rastreadores correctamente configurados puedan conectarse sin seleccionar manualmente el protocolo dentro de la plataforma. La detección está diseñada para ser automática para usted, manteniendo la flexibilidad necesaria para soportar varias familias de rastreadores.

- Plaspy escucha en el dominio d.plaspy.com y en la IP pública 54.85.159.138 en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- Los dispositivos pueden configurarse para reportar usando UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma utiliza la detección automática para identificar el protocolo entrante, por lo que normalmente no es necesario seleccionar el protocolo manualmente.
- Si un rastreador no se identifica automáticamente, revisar la dirección de reporte y el transporte del dispositivo es el primer paso para resolver el problema.

## Transporte y contexto de conexión

Las decisiones de transporte y la configuración de red son parte importante para lograr una comunicación exitosa. El A10 puede usar datos celulares o WiFi para alcanzar Plaspy, y la elección entre TCP y UDP puede afectar la fiabilidad y el comportamiento según el firmware del dispositivo y el entorno de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los rastreadores pueden apuntar al servidor de Plaspy en el dominio d.plaspy.com o directamente a la IP 54.85.159.138 en el puerto 8888.
- Dado que Plaspy usa el mismo puerto para todos los dispositivos compatibles, el alta se simplifica y las reglas de firewall pueden consolidarse.
- Asegúrese de que el APN y los ajustes de datos móviles del rastreador sean correctos para el reporte por GSM GPRS y que las credenciales de WiFi sean válidas si se usa conmutación a WiFi.
- Problemas a nivel de red como NAT del operador, bloqueos de firewall o selección incorrecta del transporte pueden impedir que un dispositivo llegue al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- El AoYa A10 cuenta con características conocidas como posicionamiento UBLOX GPS, conectividad GSM GPRS y WiFi, batería de 3.7V 450mAh y micrófono integrado; sin embargo, el comportamiento de los mensajes puede variar según el firmware.
- Las actualizaciones de firmware y las revisiones de hardware del fabricante pueden cambiar el formato, los campos o los modos de reporte disponibles.
- Algunas implementaciones del fabricante permiten seleccionar TCP o UDP para el reporte; elija el transporte que soporte el firmware del dispositivo y su red.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta a d.plaspy.com o a 54.85.159.138 en el puerto 8888, pero se requieren ajustes de reporte correctos en el dispositivo.
- Valide cualquier paso de configuración específico del equipo, comandos del proveedor o funciones opcionales con la documentación oficial de AoYa antes de cambiar ajustes.
- Pruebe cada dispositivo después de la configuración para confirmar que aparece en Plaspy y que la telemetría reportada coincide con lo esperado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación en términos generales ayuda a configurar correctamente los rastreadores, interpretar los datos entrantes y resolver problemas de conectividad o reporte de manera eficiente.

- Mejora la configuración inicial al indicar qué dirección de servidor y transporte debe usar el dispositivo.
- Agiliza la resolución de problemas cuando los dispositivos no aparecen en Plaspy al aclarar si el problema es de red, transporte o firmware.
- Ayuda a interpretar campos de telemetría como precisión de posición, estado de batería y fuerza de señal para tomar decisiones operativas.
- Orienta sobre los intervalos de reporte y la gestión de energía para equilibrar la fidelidad de ubicación con la duración de la batería.
- Apoya la planificación de actualizaciones de firmware o reemplazos de hardware al señalar posibles cambios de comportamiento.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A10 con Plaspy ofrece a las organizaciones una forma sencilla de recibir ubicación de vehículos y telemetría básica a través de una única plataforma. La detección automática de protocolo y el diseño de endpoint unificado de Plaspy reducen la carga de configuración para flotas que emplean múltiples modelos de rastreadores, permitiendo a los administradores concentrarse en la supervisión, las alertas y los flujos operativos.

Para saber más sobre Plaspy y cómo puede integrarse con dispositivos como el AoYa A10 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que por favor verifique la información específica más reciente con el fabricante en http://www.aoyagps.com/.
