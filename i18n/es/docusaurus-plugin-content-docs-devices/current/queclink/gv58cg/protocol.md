---
slug: /queclink/gv58cg/protocol
id: gv58cg-protocol
sidebar_label: Protocol
title: QuecLink - GV58CG Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el QuecLink GV58CG con Plaspy para seguimiento y telemetría de flotas
keywords:
  - Protocolo QuecLink GV58CG
  - Rastreador GPS GV58CG
  - Compatibilidad QuecLink GV58CG Plaspy
  - Protocolo de comunicación GV58CG
  - Protocolo de rastreo GV58CG
  - Protocolo GPS QuecLink
  - Gestión de flotas GV58CG
  - Rastreador vehicular QuecLink
  - Reporte de telemetría GV58CG
  - Rastreador BLE QuecLink
---

# QuecLink - Protocolo GV58CG

Esta página presenta un resumen público del protocolo para integrar el rastreador QuecLink GV58CG con Plaspy. El contenido está orientado a administradores de flota e integradores que necesitan comprender cómo conectar el dispositivo a Plaspy para seguimiento en tiempo real, telemetría y flujos de control remoto. La información es deliberadamente general y no sensible, y explica cómo el rastreador reporta ubicación y estado a la plataforma Plaspy.

El GV58CG es un rastreador telemático GNSS compacto con conectividad LTE Cat 1 y retroceso 2G, antenas internas múltiples, soporte BLE 5.2, entradas de ignición y analógicas, y capacidad de inmovilizador remoto. Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que cualquier comportamiento específico del equipo debe validarse con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación es el mecanismo por el cual el GV58CG se identifica, reporta fijaciones GNSS, transmite el estado de sensores y entradas, y recibe comandos remotos cuando se usa con Plaspy. En Plaspy, el objetivo del protocolo es asegurar la entrega confiable de posiciones, eventos y telemetría de sensores para que la plataforma pueda ofrecer seguimiento, alertas y análisis para operaciones de flota.

- Permite al GV58CG enviar actualizaciones de posición GNSS y datos de eventos con marcas de tiempo a Plaspy para visualización e informes.
- Transporta el estado de sensores y entradas I/O como ignición, lecturas analógicas de combustible, telemetría de sensores BLE y condiciones de alarma hacia la plataforma.
- Permite que señales de control remoto emitidas desde Plaspy alcancen el dispositivo para acciones como control de inmovilizador cuando el equipo lo soporta.
- Proporciona un método consistente de identificación para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Soporta reportes programados, reportes activados por alarmas y telemetría basada en condiciones para equilibrar uso de datos y capacidad de respuesta.

## Cómo Plaspy detecta el protocolo

Plaspy ofrece un único endpoint de ingestión para el tráfico de dispositivos y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy. En la mayoría de los escenarios de integración no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo apunta al endpoint y puerto correctos.

- Los dispositivos deben configurarse para reportar al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y utiliza el mismo puerto para todos los dispositivos soportados.
- El GV58CG puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del dispositivo y las condiciones de la red.
- Cuando el tráfico llega al endpoint de Plaspy, la plataforma empareja la identificación y el ruteo del dispositivo sin requerir la selección manual del protocolo en la mayoría de los casos.
- Si un dispositivo no aparece, confirme que está apuntando a d.plaspy.com o a la dirección IP y que utiliza el puerto 8888 con el transporte seleccionado.

## Transporte y contexto de conexión

La selección de transporte y la configuración del endpoint determinan cómo el dispositivo llega a Plaspy, pero no cambian por sí mismas el propósito general del protocolo. El GV58CG soporta conectividad celular con LTE Cat 1 y retroceso EGPRS, y puede transmitir su telemetría tanto por UDP como por TCP según la configuración del equipo y las opciones de firmware.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los dispositivos pueden apuntar a d.plaspy.com o a la dirección numérica 54.85.159.138 como endpoint de Plaspy.
- Todos los dispositivos gestionados por Plaspy usan el mismo puerto de ingestión 8888, lo que simplifica la configuración en despliegues a gran escala.
- La elección del transporte puede afectar la latencia y las características de entrega, pero Plaspy acepta tanto UDP como TCP en el puerto compartido.
- Verifique el APN y la provisión celular en la tarjeta SIM como parte de la configuración para que el GV58CG pueda alcanzar el endpoint de Plaspy a través de la red móvil.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar los intervalos de reporte, los eventos disponibles y la forma en que los sensores auxiliares se representan en la telemetría.
- Las revisiones de hardware y las variantes regionales pueden incluir cobertura de bandas de radio o cableado de accesorios diferentes, lo que afecta detalles de integración.
- El comportamiento de accesorios BLE y las opciones de identificación de controlador como iButton o BLE pueden depender del soporte de firmware y de los flujos de emparejamiento.
- La selección de transporte entre UDP y TCP puede estar limitada por el firmware del dispositivo o por el comportamiento de la red del operador.
- Los ajustes por defecto del fabricante pueden apuntar los dispositivos a un servidor distinto; actualice la dirección del servidor a d.plaspy.com o 54.85.159.138 y el puerto a 8888 al configurar para Plaspy.
- Siempre valide el soporte de funciones y el comportamiento de los comandos contra la documentación oficial de QuecLink para el GV58CG y la versión de firmware exacta de sus dispositivos.

## Por qué es importante entender el protocolo

Comprender claramente el protocolo de comunicación del dispositivo ayuda a garantizar reportes confiables, acelera la resolución de problemas y promueve un comportamiento predecible en los despliegues de flota. Saber cómo el GV58CG se comunica con Plaspy reduce el tiempo de integración y evita errores comunes de configuración.

- Asegura la correcta configuración del endpoint y del puerto para que los dispositivos puedan alcanzar Plaspy y ser detectados automáticamente por la plataforma.
- Ayuda a interpretar la telemetría y la sincronización de eventos al revisar datos entrantes en los paneles y registros de Plaspy.
- Facilita la resolución de problemas cuando los dispositivos dejan de reportar, aislando causas relacionadas con transporte, APN o firmware.
- Orienta la planificación del uso de datos y la frecuencia de reportes para equilibrar las necesidades de telemetría con los costos celulares.
- Favorece un despliegue más fluido cuando existe una mezcla de revisiones de hardware o niveles de firmware en la flota.

## Por qué usar Plaspy con este protocolo

Usar el QuecLink GV58CG con Plaspy brinda a las organizaciones un rastreador compacto y capaz, combinado con una plataforma que acepta tráfico de dispositivos en un endpoint compartido y fácil de configurar. El GV58CG cubre casos de uso esenciales para flotas con su enlace LTE Cat 1, retroceso 2G, detección de ignición, entrada analógica para monitoreo de combustible, soporte de sensores BLE y batería interna para reportes por pérdida de energía. Plaspy ingiere la telemetría y la presenta como datos de ubicación, alertas y sensores accionables para las operaciones de su flota.

Si usted desea conocer más sobre cómo Plaspy trabaja con dispositivos como el GV58CG y revisar las funcionalidades de la plataforma, por favor visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación del fabricante, verifique la información actual en el sitio de QuecLink https://www.queclink.com/ porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
