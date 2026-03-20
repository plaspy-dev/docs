---
slug: /aoya/t8gps/protocol
id: t8gps-protocol
sidebar_label: Protocol
title: AoYa - T8GPS Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador AoYa T8GPS y su comunicación con Plaspy para reporte de ubicación de vehículos y flotas
keywords:
  - Protocolo AoYa T8GPS
  - Protocolo GPS AoYa T8GPS
  - AoYa T8GPS Plaspy
  - Protocolo rastreador GPS AoYa
  - Protocolo de comunicación T8GPS
  - Protocolo de rastreo T8GPS
  - Compatibilidad de dispositivos Plaspy
  - Rastreo GPS de vehículos
  - Rastreador para gestión de flotas
  - Guía de protocolo para rastreadores GPS
---

# AoYa - Protocolo T8GPS

Esta página documenta el contexto público del protocolo del rastreador GPS AoYa T8GPS y la forma en que se comunica con la plataforma Plaspy. Se centra en el comportamiento observable de conexión y reporte necesario para integrar el dispositivo con Plaspy, sin exponer detalles internos del firmware ni información sensible de implementación. El T8GPS es un rastreador compacto para uso automotriz, diseñado para autos, camiones y embarcaciones, con protección IP67 y capacidades GPS, LBS y AGPS integradas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página enfatiza consideraciones de conexión y compatibilidad más que detalles internos del dispositivo. Las notas de hardware del T8GPS, como el amplio rango de tensión de entrada, el módem GSM GPRS y el receptor GPS UBLOX, son contexto útil para despliegue y pruebas.

## Visión general del protocolo

El protocolo de reporte del rastreador determina cómo el equipo envía datos de ubicación, estado y eventos a un servidor remoto, y cómo se aplican mensajes de configuración o control cuando están soportados. Para el T8GPS esto implica usar su enlace GSM GPRS para transmitir ubicaciones asistidas por GPS, LBS y AGPS a un endpoint alcanzable para que Plaspy pueda ingerir y presentar la información.

- El protocolo define cómo el dispositivo empaqueta marcas de tiempo de ubicación, coordenadas e información básica de estado para su transporte a Plaspy.
- Los reportes suelen incluir fijaciones de posición complementadas por ubicación basada en celular cuando no hay datos satelitales disponibles.
- Un canal de transporte compatible permite que el rastreador alcance Plaspy de forma fiable incluso en condiciones de red móvil.
- La identidad del dispositivo y los metadatos de sesión en cada mensaje permiten a Plaspy atribuir los datos entrantes al activo correcto.
- Los mensajes de configuración y control que el fabricante soporte habilitan cambios remotos de configuración cuando el dispositivo lo permite.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de dispositivos en un endpoint compartido y utiliza detección automática para determinar el protocolo del rastreador en conexiones entrantes. Cuando el T8GPS está configurado para reportar al endpoint de Plaspy, normalmente no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la plataforma es accesible en la dirección pública 54.85.159.138.
- El puerto de conexión estándar para todos los dispositivos en Plaspy es 8888; Plaspy utiliza el mismo puerto para todos los rastreadores compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos de la red.
- Cuando un dispositivo correctamente configurado transmite al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia la fuente de datos con el dispositivo.
- Normalmente, los usuarios solo deben asegurarse de que el equipo apunte a d.plaspy.com o a 54.85.159.138 y que reporte en el puerto 8888 para que Plaspy procese los datos entrantes.

## Transporte y contexto de conexión

La selección del transporte y la correcta dirección son los puntos de integración más importantes para una conexión exitosa entre el T8GPS y Plaspy. El módem GSM GPRS del dispositivo es el canal de datos utilizado para alcanzar Plaspy a través de la red móvil.

- El T8GPS puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del usuario.
- Apuntar el equipo al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 son ambas formas válidas de alcanzar Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración y la resolución de problemas a nivel de flota.
- Las condiciones de la red móvil y el comportamiento NAT del operador pueden afectar la fiabilidad de la sesión, por lo que es recomendable monitorizar la conectividad inicial durante el despliegue.
- Asegúrese de que los ajustes APN, SMS y de datos del equipo sean válidos para que el rastreador pueda establecer una sesión IP y alcanzar Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la temporización de los mensajes, los campos disponibles y los modos de transporte soportados, por lo que siempre debe probarse con la versión exacta de firmware en uso.
- Las revisiones de hardware u opcionales pueden cambiar cómo se reportan entradas auxiliares o sensores a través del protocolo.
- Las opciones de configuración del fabricante pueden permitir cambiar entre UDP y TCP o modificar los intervalos de reporte, lo que influye en el comportamiento en Plaspy.
- Restricciones de los operadores de red, como APN limitados o bloqueo de puertos salientes, pueden impedir que el dispositivo alcance Plaspy en el puerto 8888.
- Confirme si el dispositivo requiere algún SMS de activación o configuraciones de servidor específicas del fabricante antes de intentar el reporte directo.
- Valide la compatibilidad combinando una configuración de dispositivo funcional con una prueba controlada y corta para confirmar que Plaspy recibe e interpreta el feed del dispositivo.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador a nivel de protocolo ayuda en la configuración inicial, la resolución de problemas continua y en garantizar una operación fiable a largo plazo cuando se integra con Plaspy. Tener expectativas claras sobre la dirección del transporte y el comportamiento reduce el tiempo de despliegue y las sorpresas operativas.

- Resolución de problemas más rápida cuando los dispositivos dejan de reportar, porque puede verificar DNS, IP y ajustes de puerto frente a los requisitos de Plaspy.
- Mejor planificación del despliegue al seleccionar UDP o TCP según la fiabilidad de la red y los patrones de mensajes esperados.
- Gestión de firmware y configuración más eficaz al comprender el alcance de las diferencias entre versiones de dispositivo.
- Inventario e identificación de dispositivos más precisos en Plaspy cuando se conocen los campos de identidad del dispositivo y la cadencia de reporte.
- Menos fricción en el soporte al confirmar que el equipo apunta a d.plaspy.com o 54.85.159.138 y reporta al puerto 8888.

## Por qué usar Plaspy con este protocolo

Usar el AoYa T8GPS con Plaspy ofrece a las organizaciones visibilidad clara del posicionamiento y movimiento de vehículos aprovechando las capacidades de reporte del dispositivo sobre redes celulares. El enfoque de endpoint compartido de Plaspy y la detección automática de protocolos reducen pasos de configuración manual en la plataforma, permitiendo que los equipos se concentren en el despliegue y la monitorización operacional.

Para saber más sobre cómo Plaspy gestiona la conectividad de dispositivos visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que por favor verifique los últimos detalles específicos del protocolo y las notas de firmware en el sitio del fabricante http://www.aoyagps.com/ antes de realizar despliegues a gran escala.
