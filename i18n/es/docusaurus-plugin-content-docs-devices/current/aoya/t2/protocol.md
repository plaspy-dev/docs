---
slug: /aoya/t2/protocol
id: t2-protocol
sidebar_label: Protocol
title: AoYa - T2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador AoYa T2, cómo se comunica con Plaspy y qué verificar para compatibilidad
keywords:
  - AoYa T2
  - Protocolo AoYa T2
  - AoYa T2 GPS
  - Compatibilidad AoYa T2
  - AoYa T2 Plaspy
  - Rastreador GPS AoYa
  - Seguimiento de vehículos T2
  - Protocolo de comunicación T2
  - Integración GPS Plaspy
  - Seguimiento de flotas AoYa
---

# AoYa - Protocolo T2

Esta página describe el contexto público del protocolo para usar el rastreador AoYa T2 con Plaspy. Se concentra en cómo el dispositivo se comunica a nivel de conexión e informes, de modo que administradores e integradores sepan qué verificar al registrar y solucionar problemas de unidades T2 en Plaspy. La información aquí es pública y no sensible, y está diseñada para ayudarle a alinear los ajustes del dispositivo con las expectativas de Plaspy.

El AoYa T2 es un rastreador compacto GSM GPRS con batería de emergencia y posicionamiento UBLOX GPS. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante. Use este resumen para comprender el contexto de comunicación y verificar configuraciones con el manual del dispositivo y los recursos del fabricante.

## Resumen del protocolo

El protocolo de comunicación del AoYa T2 define cómo el rastreador informa ubicación, estado y alertas a un servidor remoto y cómo se pueden enviar comandos de configuración de regreso al dispositivo. A alto nivel, el protocolo permite identificación, envío de telemetría y gestión remota para que Plaspy presente seguimiento en vivo y datos históricos.

- Permite que el T2 envíe reportes periódicos de ubicación y mensajes por eventos a Plaspy
- Incluye información de identificación para que Plaspy asocie un mensaje con un dispositivo específico
- Transmite telemetría como fijación GPS, estado de señal celular, condición de batería y alarmas
- Proporciona un canal para configuración y control remoto cuando el dispositivo lo soporta
- Soporta transporte por UDP y TCP según la configuración del dispositivo y las condiciones de la red

## Cómo detecta Plaspy el protocolo

Plaspy recibe mensajes entrantes en un punto de conexión de red compartido y detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar manualmente un protocolo dentro de Plaspy. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito más común para una detección y registro exitosos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- Cuando un T2 reporta al endpoint de Plaspy, la plataforma compara los mensajes entrantes con patrones de protocolo conocidos y asocia el dispositivo automáticamente
- Si un dispositivo no se detecta automáticamente, el primer paso recomendado es verificar los ajustes de reporte del dispositivo y la versión de firmware

## Transporte y contexto de conexión

El contexto de conexión abarca los ajustes a nivel de red que el T2 utiliza para alcanzar Plaspy y las decisiones prácticas que puede tomar al desplegar dispositivos. En muchos despliegues, la elección del transporte y la dirección de destino correcta son los elementos de configuración principales.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración del servidor entre modelos
- Elija UDP para menor sobrecarga y TCP para entrega más fiable cuando el dispositivo y la red lo permitan
- Asegúrese de que la conectividad de datos de la SIM y los ajustes APN sean correctos para que el T2 pueda alcanzar el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- El AoYa T2 es compatible con Plaspy cuando está configurado para reportar al endpoint de Plaspy y utiliza ajustes de transporte soportados
- Las revisiones de firmware y las variantes de hardware del dispositivo pueden cambiar el contenido de los mensajes y las funciones disponibles; siempre verifique las notas de la versión del firmware
- Los comandos de configuración y el comportamiento del fabricante pueden diferir según el lote o el firmware regional; confirme qué opciones de configuración están disponibles en su T2
- La selección de transporte entre UDP y TCP puede afectar el comportamiento de entrega en redes con alta pérdida de paquetes o NAT
- El comportamiento de la batería de emergencia y los reportes de alimentación puede variar y afectar cómo informa el dispositivo cuando se corta la energía del vehículo
- Valide los ajustes del dispositivo confirmando que el servidor de reporte esté establecido en d.plaspy.com o 54.85.159.138 en el puerto 8888

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar que los dispositivos estén configurados correctamente, acelera la resolución de problemas y mejora la fiabilidad a largo plazo cuando se usan con Plaspy. Conocer las expectativas de reporte y el contexto de transporte reduce el tiempo de configuración y previene errores comunes de conectividad.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy y use el transporte esperado
- Ayuda a diagnosticar por qué un dispositivo no aparece en Plaspy o por qué faltan datos
- Aclara cómo los eventos de alimentación y la batería de emergencia impactan los reportes
- Facilita validar la compatibilidad después de actualizaciones de firmware o cambios de hardware
- Permite tomar decisiones informadas sobre la red y los ajustes APN para una conectividad fiable

## Por qué usar Plaspy con este protocolo

Usar el AoYa T2 con Plaspy ofrece a las organizaciones una forma sencilla de recolectar ubicación en vivo, alertas por eventos y telemetría básica para vehículos y activos. El factor de forma compacto del T2 y su batería de emergencia lo hacen adecuado para instalaciones discretas, mientras que Plaspy se encarga de la recepción de mensajes, detección de protocolo y el mapeo para que los equipos puedan enfocarse en la operación.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el AoYa T2 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la documentación específica del protocolo y las notas de firmware más recientes en el sitio del fabricante http://www.aoyagps.com/ antes de un despliegue a gran escala.
