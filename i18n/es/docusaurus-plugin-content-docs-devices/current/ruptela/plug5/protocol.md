---
slug: /ruptela/plug5/protocol
id: plug5-protocol
sidebar_label: Protocol
title: Ruptela - Plug5 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Ruptela Plug5 y cómo el rastreador se comunica con Plaspy para telemática de flotas e integración
keywords:
  - Protocolo Ruptela Plug5
  - Protocolo GPS Ruptela Plug5
  - Protocolo de comunicación Plug5
  - Rastreador Plug5 OBD
  - Compatibilidad Ruptela Plaspy
  - Protocolo telemático Plug5
  - Rastreo vehicular Plug5
  - Telemática OBDII Ruptela
  - Integración sensores BLE Plug5
  - Seguimiento de flotas Plug5 Plaspy
---

# Ruptela - Protocolo Plug5

Esta página documenta el contexto público del protocolo para usar el rastreador Ruptela Plug5 con Plaspy. Describe cómo el dispositivo se comunica con la plataforma de flotas Plaspy en términos generales, las opciones de transporte que puede configurar y el papel que desempeña el protocolo de reporte para entregar ubicación y telemetría del vehículo. El contenido se mantiene en un nivel alto y se enfoca en información interoperable y no sensible, útil para integración y resolución de problemas.

Plug5 es un rastreador en factor de forma OBD con posicionamiento GNSS, conectividad LTE‑M y fallback 2G, acceso OBDII y CAN, soporte BLE 5.1, buffer local de datos y comunicaciones seguras. Plaspy utiliza ajustes de conexión compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los dispositivos pueden configurarse para reportar a Plaspy usando UDP o TCP en el puerto 8888 hacia el endpoint d.plaspy.com o la dirección IP del servidor 54.85.159.138. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es necesario verificar los detalles específicos del dispositivo cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte del rastreador es el mecanismo que transporta datos de posición, diagnósticos y eventos desde Plug5 hasta la plataforma Plaspy. En la práctica, el protocolo define cómo el dispositivo se identifica, qué campos de telemetría envía y cómo se transmiten los registros de eventos y los datos en buffer para que Plaspy pueda mostrarlos en paneles, alertas e informes.

- Envía ubicación GNSS y hora para ofrecer actualizaciones continuas de posición en Plaspy.
- Entrega telemetría OBD y CAN, como parámetros de motor y vehículo, que Plaspy mapea en los paneles de flota.
- Codifica identidad del dispositivo y datos de sesión para que Plaspy asocie los mensajes entrantes con el vehículo y el hardware correctos.
- Soporta reporte de eventos como encendido, movimiento, choque, interferencia y desconexión que generan alertas en Plaspy.
- Funciona con opciones de transporte seguro disponibles en el dispositivo, como TLS v1.2, para proteger los datos en tránsito.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint común y detecta automáticamente el protocolo del rastreador utilizado por los dispositivos entrantes. Cuando un Plug5 está configurado para reportar al endpoint de Plaspy, normalmente no se requiere seleccionar manualmente el protocolo dentro de Plaspy; la plataforma identifica el tipo de dispositivo y mapea la telemetría entrante a los campos de la plataforma.

- Plaspy acepta reportes de dispositivos en el endpoint compartido d.plaspy.com y en el puerto común usado por todos los dispositivos soportados.
- Los dispositivos pueden apuntar al servidor Plaspy por dominio o por la dirección IP del servidor para alcanzar el mismo endpoint de ingestión.
- Plaspy detecta el protocolo del rastreador automáticamente, por lo que en general no es necesario que usted seleccione un protocolo en la plataforma cuando el dispositivo envía datos al endpoint correcto.
- Es importante configurar correctamente el tipo de transporte y los ajustes del servidor en el Plug5 para que la detección automática funcione.
- Si los mensajes no llegan como se espera, verifique la configuración de reporte del dispositivo, la conectividad de red y la compatibilidad del firmware.

## Contexto de transporte y conexión

La configuración de transporte define cómo Plug5 establece una sesión para enviar telemetría a Plaspy. Los dispositivos Plug5 soportan conectividad celular con opciones de fallback y pueden usar UDP o TCP para alcanzar el endpoint de ingestión de Plaspy en el puerto compartido.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- El servidor Plaspy puede ser alcanzado por el dominio d.plaspy.com o por la IP 54.85.159.138 para llegar al mismo endpoint de ingestión.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y las reglas de firewall para despliegues de flota.
- La comunicación segura está soportada por el dispositivo mediante TLS v1.2 cuando está disponible, protegiendo la telemetría en tránsito.
- Plug5 almacena datos localmente durante pérdidas de conectividad y sube los registros guardados cuando la red se restablece para preservar la continuidad.

## Notas de compatibilidad del protocolo

- El comportamiento y los campos de telemetría disponibles pueden variar entre versiones de firmware de Plug5; las actualizaciones de firmware pueden agregar o cambiar campos.
- Las revisiones de hardware y las variantes regionales pueden exponer distintas opciones de conectividad o parámetros de diagnóstico.
- Algunos fabricantes de vehículos (OEM) ofrecen parámetros propietarios a través de OBD o CAN que aparecen de manera diferente según la marca y el modelo del vehículo.
- Elija transporte UDP o TCP según la confiabilidad de la red y las necesidades de configuración; ambos son compatibles cuando se orientan a Plaspy.
- Las opciones de transporte seguro como TLS pueden depender del firmware y de la configuración del dispositivo.
- Siempre valide la configuración del dispositivo y las funciones soportadas con la documentación del fabricante al planificar despliegues.

## Por qué importa entender el protocolo

Conocer lo básico del protocolo del dispositivo ayuda a garantizar una configuración fluida, un flujo de datos confiable y una resolución de problemas eficiente al usar Plug5 con Plaspy. Entender qué envía el rastreador y cómo se conecta reduce el tiempo de integración y mejora la visibilidad operativa.

- Confirma ajustes de endpoint y transporte correctos para que el dispositivo pueda comunicarse con Plaspy con éxito.
- Ayuda a interpretar qué campos de telemetría deben aparecer en los paneles y reportes de Plaspy.
- Facilita la resolución de problemas cuando surgen brechas de datos, registros duplicados o eventos inesperados.
- Orienta las decisiones sobre actualizaciones de firmware, gestión remota y habilitación de funciones.
- Apoya revisiones de seguridad y cumplimiento al aclarar capacidades de transporte y cifrado.

## Por qué usar Plaspy con este protocolo

Usar Plug5 con Plaspy ofrece a las flotas acceso centralizado a ubicación, telemetría OBD y CAN, y alertas de eventos que respaldan operaciones, seguridad y mantenimientos. Las características del hardware Plug5, como detección automática del vehículo, soporte de sensores BLE, buffering a bordo y comunicaciones seguras, se combinan con la detección automática de protocolos y el endpoint unificado de ingestión de Plaspy para simplificar los despliegues y reducir la configuración por dispositivo.

Si desea conocer más sobre Plaspy y cómo soporta rastreadores como el Plug5, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente del protocolo y las notas de firmware con la documentación oficial del fabricante en https://ruptela.com/.
