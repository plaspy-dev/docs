---
slug: /xirgo/xt_4970/protocol
id: xt_4970-protocol
sidebar_label: Protocol
title: Xirgo - XT-4970 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el Xirgo XT-4970 con Plaspy, con contexto de conexión y notas de compatibilidad
keywords:
  - Protocolo Xirgo XT-4970
  - Protocolo GPS Xirgo XT-4970
  - Compatibilidad XT-4970 con Plaspy
  - Protocolo de rastreo Xirgo
  - Rastreo de remolque XT-4970
  - Rastreador GPS con recolección de energía
  - Protocolo LTE para remolques
  - Gestión de flotas Xirgo XT-4970
  - Comunicación Xirgo XT-4970
  - Compatibilidad de dispositivos Plaspy
---

# Xirgo - Protocolo XT-4970

Esta página ofrece contexto público sobre el protocolo para usar el rastreador Xirgo XT-4970 con Plaspy. Resume cómo se comunica el dispositivo con el endpoint de Plaspy, las opciones de transporte habituales en campo y las consideraciones prácticas de compatibilidad que importan para el despliegue y la resolución de problemas. Está pensada como orientación de alto nivel, no como instrucciones técnicas específicas del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los detalles de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el funcionamiento en campo puede diferir entre unidades XT-4970. El XT-4970 es una solución LTE con recolección de energía diseñada para despliegues prolongados en remolques y contenedores, con antenas integradas, motor GPS de alta precisión, detección de movimiento, Bluetooth y ZigBee opcionales, y carcasa IP67.

## Resumen del protocolo

A alto nivel, el protocolo de reporte del dispositivo define las reglas y formatos de mensajes que el XT-4970 emplea para enviar posición, estado y datos de sensores a un servidor remoto como Plaspy. El protocolo permite que el rastreador se identifique, reporte telemetría y, cuando el dispositivo y el firmware lo soportan, acepte comandos de configuración remota.

- Permite que el XT-4970 reporte posiciones GPS, eventos de movimiento y estado de sensores a Plaspy para monitoreo de ubicación y activos.
- Incluye la identidad y el contexto del dispositivo para que Plaspy asocie los mensajes entrantes con el registro correcto.
- Transmite indicadores de batería y salud del dispositivo, críticos en despliegues de recolección de energía a largo plazo.
- Facilita comandos remotos o configuración cuando el firmware admite mensajes entrantes.
- Puede variar en tiempos, contenido del payload y campos disponibles según la versión de firmware y opciones como Bluetooth o sensores IO.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador para la mayoría de los dispositivos compatibles, incluido el XT-4970. En configuraciones típicas, un dispositivo correctamente configurado simplemente reporta al endpoint de Plaspy y no es necesario seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com, que los dispositivos pueden usar como endpoint de reporte.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse en lugar del dominio cuando no hay DNS disponible.
- El puerto es 8888 y Plaspy usa el mismo puerto para todos los dispositivos compatibles.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que usted normalmente no necesita elegir un protocolo manualmente en la plataforma.
- Si un dispositivo no se detecta automáticamente, confirmar los ajustes de reporte y la versión de firmware es el primer paso para la resolución de problemas.

## Contexto de transporte y conexión

Las opciones de transporte (UDP frente a TCP) y la dirección del endpoint forman parte del contexto de conexión, pero están separadas del contenido del protocolo de nivel superior. El XT-4970 puede configurarse para usar el transporte que soporte su firmware y el despliegue, y Plaspy acepta ambas opciones comunes en su puerto compartido.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según lo permita y configure el equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 al dirigir los reportes a Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la gestión del endpoint en servidores para flotas con hardware mixto.
- La confiabilidad de la red, el comportamiento del operador y NAT pueden influir en si UDP o TCP rinden mejor en un despliegue concreto.
- Confirmar el APN y las reglas de firewall saliente es importante al desplegar en entornos de red restringidos o privados.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar los campos de los mensajes, los intervalos de reporte y los comandos soportados; siempre registre la versión de firmware al validar el comportamiento.
- Revisiones de hardware o módulos opcionales (Bluetooth, ZigBee, 1‑Wire, IO) pueden añadir u omitir campos de telemetría y modificar la forma en que se reportan los datos.
- La elección entre UDP y TCP puede afectar la fiabilidad y latencia de los mensajes; ajuste la configuración del dispositivo a sus necesidades operativas.
- Los parámetros de configuración del fabricante y los ajustes de la dirección del servidor deben apuntar al endpoint de Plaspy para que funcione la detección automática.
- Valide la compatibilidad frente a la documentación oficial de Xirgo para opciones específicas del modelo y notas relacionadas con firmware.
- Al integrar a gran escala, pruebe primero con un pequeño conjunto de dispositivos para confirmar el comportamiento antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el XT-4970 ayuda a garantizar un seguimiento confiable a largo plazo, especialmente en dispositivos con recolección de energía donde la frecuencia de reporte y el consumo son críticos para la vida útil operativa. Tener claro el contexto de comunicación acelera la puesta en marcha y reduce el tiempo de inactividad.

- Permite una puesta en marcha y validación más rápidas para confirmar que los dispositivos reportan correctamente a Plaspy.
- Ayuda a resolver problemas de conectividad que pueden deberse a la selección de transporte, APN o configuración del endpoint.
- Contribuye a interpretar la telemetría relacionada con la gestión de energía y la detección de movimiento en despliegues prolongados sin supervisión.
- Facilita la planificación de actualizaciones de firmware y comprender el impacto de nuevas funciones o cambios.
- Aumenta la confianza al añadir sensores opcionales o integrar el dispositivo en flujos de trabajo más amplios de monitoreo de activos.

## Por qué usar Plaspy con este protocolo

Usar el XT-4970 con Plaspy brinda visibilidad sobre remolques, contenedores y maquinaria pesada mediante una plataforma diseñada para aceptar datos entrantes de una amplia gama de rastreadores. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la carga operativa de gestionar flotas mixtas y simplifican el alta de dispositivos.

Para saber más sobre cómo Plaspy maneja la comunicación de flotas y la compatibilidad de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y del firmware del dispositivo con Xirgo en https://xirgo.com/.
