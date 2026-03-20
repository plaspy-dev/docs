---
slug: /telic/nt910_g1/protocol
id: nt910_g1-protocol
sidebar_label: Protocol
title: Telic - NT910-G1 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar Telic NT910 G1 con Plaspy incluyendo conexiones y notas de compatibilidad
keywords:
  - Protocolo Telic NT910 G1
  - Protocolo GPS Telic NT910 G1
  - Protocolo de comunicación Telic NT910 G1
  - Protocolo de rastreo Telic NT910 G1
  - Protocolo de dispositivo Plaspy
  - Compatibilidad de rastreadores Plaspy
  - NT910 G1 LTE Cat M1 NB2
  - Rastreo de activos IoT
  - Protocolo GPS para gestión de flotas
  - Rastreador GPS de bajo consumo
---

# Telic - NT910-G1: Protocolo

Esta página explica el contexto público del protocolo para usar el terminal Telic NT910-G1 con Plaspy. Se concentra en cómo el dispositivo reporta telemetría y estado a Plaspy, y qué ajustes de conexión se requieren para una integración estándar. La información está dirigida a administradores, integradores y evaluadores técnicos que preparan dispositivos para la ingestión en Plaspy.

El NT910-G1 es un terminal IoT industrial compacto, diseñado para despliegues de muy bajo consumo y uso de datos reducido, y es compatible con Plaspy para una integración ágil. Plaspy emplea ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para comportamientos específicos del dispositivo consulte la documentación del fabricante y las notas del firmware más recientes.

## Resumen del protocolo

A alto nivel, el protocolo del NT910-G1 define cómo el terminal empaqueta telemetría, ubicación, diagnósticos y datos de periféricos para entregarlos a un servicio backend como Plaspy. La función del protocolo es garantizar que el servidor reciba información identificable, con marca de tiempo y decodificable para que Plaspy pueda mostrar ubicación, estado y alertas en sus paneles.

- Permite que el dispositivo se identifique y comunique su cadencia de reporte al backend.
- Codifica telemetría y lecturas de sensores para que Plaspy pueda extraer campos de ubicación, estado y diagnóstico.
- Soporta reportes periódicos y por eventos, adecuados para escenarios de bajo consumo con LTE Cat M1 NB2 y fallback a 2G.
- Habilita flujos de trabajo de gestión del dispositivo, como alertas basadas en telemetría y actualizaciones remotas de firmware cuando se combina con soporte FOTA.
- Proporciona los elementos de datos que Plaspy necesita para mapear un dispositivo a un vehículo, activo o perfil de monitoreo para informes y geocercas.

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador utilizado por el dispositivo que reporta. En la mayoría de las implementaciones no necesita seleccionar un protocolo dentro de Plaspy siempre que el dispositivo esté configurado para reportar al endpoint de Plaspy con los ajustes de red correctos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual normalmente no es necesaria para dispositivos correctamente configurados.
- Los dispositivos que envían telemetría a d.plaspy.com en el puerto configurado serán procesados por las canalizaciones de ingestión de Plaspy.
- Asegúrese de que el dispositivo utilice un APN estable y un perfil de conectividad celular para que los reportes lleguen de forma fiable al endpoint de Plaspy.
- Si surgen problemas de integración, verifique la configuración de reporte del dispositivo y las marcas de tiempo para ayudar a Plaspy a correlacionar los mensajes entrantes.

## Transporte y contexto de conexión

Las opciones de conexión y el comportamiento de transporte dependen de las capacidades del dispositivo y de las opciones de configuración del NT910-G1. El terminal soporta transportes celulares de bajo ancho de banda adecuados para reportes periódicos, y los administradores pueden configurar el protocolo de transporte según las restricciones de red y firewall.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como endpoint de Plaspy para el envío de datos.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para telemetría entrante.
- Elija UDP para minimizar la sobrecarga de sesión cuando lo permitan las políticas de red, o TCP cuando se prefiera entrega fiable y orden de tramas.
- Confirme los ajustes del operador y del APN para garantizar que el NT910-G1 pueda alcanzar d.plaspy.com desde la región de despliegue.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden influir en los campos de reporte, los ítems de telemetría disponibles y el comportamiento de temporización; verifique la versión de firmware del dispositivo durante la integración.
- Las revisiones de hardware o las variantes regionales del módulo pueden alterar las bandas soportadas y las opciones de fallback de red, lo que afecta conectividad y frecuencia de reporte.
- Los parámetros de configuración del fabricante pueden exponer opciones de selección de transporte como UDP versus TCP y ajustes de destino del servidor.
- El soporte FOTA en el NT910-G1 puede cambiar el comportamiento del protocolo tras una actualización; programe validaciones después de cualquier actualización de firmware.
- Valide la compatibilidad probando un dispositivo contra el endpoint de Plaspy en un entorno controlado antes de un despliegue a gran escala.
- Siempre consulte las notas de versión del fabricante para detalles específicos del dispositivo que afecten el comportamiento del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación utilizado por el NT910-G1 mejora el éxito de la configuración, acelera la resolución de problemas y contribuye a mantener un reporte fiable de los dispositivos a lo largo del tiempo. Saber cómo el dispositivo formatea y entrega los datos permite un monitoreo más efectivo y menos eventos perdidos.

- Simplifica la configuración inicial al alinear los ajustes de reporte del dispositivo con las expectativas de Plaspy.
- Acelera el diagnóstico de problemas de conectividad al aislar asuntos de transporte, DNS o APN.
- Ayuda a interpretar reportes intermitentes cuando los dispositivos usan modos de ahorro de energía o intervalos largos de reporte.
- Mejora la planificación de actualizaciones de firmware y mantenimiento de campo cuando el comportamiento del protocolo puede cambiar.
- Facilita las comprobaciones de integridad de datos y el mapeo de campos de telemetría a los paneles de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el NT910-G1 con Plaspy ofrece un enfoque práctico y de bajo ancho de banda para el monitoreo de flotas y activos donde la vida útil de la batería y el costo operativos son críticos. La capacidad LTE Cat M1 y NB2 del dispositivo con fallback 2G, combinada con interfaces RS232 y USB y soporte FOTA, lo convierten en una opción flexible para telemetría, reenvío de sensores y reportes básicos de ubicación cuando se empareja con Plaspy.

Los ajustes de conexión compartidos de Plaspy y la detección automática del protocolo reducen la fricción de integración, de modo que los equipos puedan concentrarse en el despliegue y la operación en lugar de la configuración de servidores personalizados. Para obtener más información sobre Plaspy y cómo puede apoyar despliegues con dispositivos como el NT910-G1 visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, comportamiento de firmware y notas de implementación consulte al fabricante en https://www.telic.de.
