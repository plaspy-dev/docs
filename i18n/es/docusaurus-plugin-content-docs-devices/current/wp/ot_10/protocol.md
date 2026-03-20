---
slug: /wp/ot_10/protocol
id: ot_10-protocol
sidebar_label: Protocol
title: WP - OT-10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador WP OT 10 y cómo se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo WP OT 10
  - Rastreador GPS OT 10
  - Comunicación WP OT 10
  - Compatibilidad OT 10 con Plaspy
  - Protocolo de rastreo vehicular
  - Protocolo OBDII para rastreador GPS
  - Protocolo GPS GLONASS
  - Rastreador GPRS UDP TCP
  - Compatibilidad para flotas
  - Protocolo de reporte de dispositivo
---

# WP - OT-10 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador WP OT-10 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, las opciones de transporte que admite y el papel del protocolo de reporte para entregar datos de ubicación, eventos y diagnóstico a Plaspy. El OT-10 es un rastreador tipo OBDII con posicionamiento GPS y GLONASS que soporta CS Data, SMS y reportes GPRS vía UDP o TCP, diseñado para una instalación ágil y uso confiable en flotas.

Plaspy utiliza ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo del OT-10 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página ofrece orientación pública y no sensible, y recomendamos verificar la documentación del fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de reporte del rastreador define cómo el OT-10 transmite identificación, posición, estado e información de eventos desde el vehículo hacia un servidor remoto. Para la integración con Plaspy, el objetivo del protocolo es entregar mensajes en un formato que Plaspy pueda interpretar y relacionar con registros de vehículo, alertas e historial de ubicaciones, sin exponer detalles de bajo nivel de los paquetes.

- Permite que el OT-10 envíe actualizaciones periódicas y por eventos de ubicación a un endpoint de servidor.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Codifica reportes de eventos configurables como violaciones de geocerca, remolque, inactividad, exceso de velocidad y alertas de alimentación.
- Soporta configuración remota y actualizaciones OTA cuando el dispositivo y el firmware del fabricante lo permiten.
- Funciona sobre transportes móviles comunes para que los mensajes lleguen a Plaspy de forma fiable desde redes celulares.

## Cómo detecta Plaspy el protocolo

Plaspy opera un endpoint de reporte unificado que recibe los mensajes de los rastreadores y determina el manejo apropiado según los datos entrantes del dispositivo. En la mayoría de los casos un OT-10 correctamente configurado comenzará a reportar al endpoint de Plaspy y la plataforma detectará el protocolo del rastreador de forma automática, por lo que no suele ser necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy utiliza un único endpoint para el reporte de dispositivos, lo que simplifica la configuración.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP conocida del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce errores de configuración.
- Cuando un OT-10 reporta al endpoint de Plaspy, la plataforma detectará y aplicará automáticamente el manejo de protocolo correcto.
- Generalmente solo debe configurar el dispositivo para que reporte al endpoint de Plaspy y confirmar los ajustes de transporte.

## Transporte y contexto de conexión

El OT-10 puede comunicarse por GPRS usando UDP o TCP según la configuración del dispositivo y el soporte de firmware. Para Plaspy el contexto de conexión es simple y consistente: los dispositivos deben apuntar al endpoint de Plaspy usando el puerto compartido y emplear UDP o TCP según lo admita el equipo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y consideraciones de la red.
- Plaspy acepta reportes del OT-10 dirigidos a d.plaspy.com o a la IP del servidor 54.85.159.138.
- Todos los dispositivos compatibles con Plaspy comparten el mismo puerto, lo que facilita la configuración a nivel de flota.
- Elija UDP para reportes de menor latencia cuando la confiabilidad sea aceptable, o TCP cuando se prefiera entrega garantizada y el rastreador lo soporte.
- Verifique que el firmware del OT-10 y los ajustes APN del operador permitan conectividad GPRS saliente hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los eventos soportados y los comandos de configuración; confirme la versión de firmware del OT-10 antes de asumir un comportamiento.
- Revisiones de hardware u opciones como batería externa o conectividad OBDII pueden modificar la telemetría disponible y las opciones de reporte.
- El dispositivo soporta CS Data, SMS y GPRS UDP/TCP; asegúrese de que el transporte elegido esté activado y probado para su despliegue.
- La configuración remota y las actualizaciones de firmware OTA son soportadas cuando las proporciona el fabricante, pero su disponibilidad depende del firmware y la configuración del servidor.
- La configuración de red y del operador, incluidos APN y disponibilidad de datos, afecta la alcanzabilidad del dispositivo y debe validarse durante la instalación.
- Siempre contraste las notas de versión y las guías de configuración del fabricante para confirmar qué eventos y campos están presentes en su firmware.

## Por qué importa comprender el protocolo

Entender cómo se comunica el OT-10 facilita la configuración exitosa, la operación confiable y la resolución más rápida de problemas cuando los dispositivos no se comportan como se espera. Conocer las capacidades del protocolo y las opciones de transporte también ayuda a planificar mejor cobertura, gestión de batería y requisitos de reporte de eventos.

- Garantiza la configuración correcta del endpoint y del transporte para que los dispositivos lleguen a Plaspy.
- Ayuda a interpretar las opciones de reporte de eventos como geocerca, remolque o pérdida de alimentación durante el despliegue.
- Reduce el tiempo invertido en diagnosticar mensajes faltantes o mal atribuidos al saber qué se espera que envíe el dispositivo.
- Apoya la decisión entre usar UDP o TCP según la fiabilidad de la red y las necesidades de reporte.
- Facilita la planificación de ventanas de actualización de firmware y la validación de que una nueva versión mantiene el comportamiento requerido.

## Por qué usar Plaspy con este protocolo

Usar el WP OT-10 con Plaspy ofrece a las organizaciones una ruta simple para obtener visibilidad del vehículo y monitoreo basado en eventos. El soporte del OT-10 para posicionamiento GPS y GLONASS, eventos configurables y conectividad OBDII lo hace apto para rastreo de flotas, seguridad y supervisión operativa, mientras que Plaspy aporta el endpoint unificado y la detección automática que simplifican la integración entre múltiples modelos de dispositivo.

Para conocer más sobre cómo Plaspy gestiona el reporte de dispositivos y evaluar opciones de integración, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente específica del dispositivo y las guías de firmware con el fabricante en http://www.wondeproud.com/.
