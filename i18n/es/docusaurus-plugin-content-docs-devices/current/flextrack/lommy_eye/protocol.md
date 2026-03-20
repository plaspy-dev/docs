---
slug: /flextrack/lommy_eye/protocol
id: lommy_eye-protocol
sidebar_label: Protocol
title: Flextrack - Lommy Eye Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Flextrack Lommy Eye y su comunicación con Plaspy para rastreo confiable de activos
keywords:
  - protocolo Flextrack Lommy Eye
  - protocolo GPS Lommy Eye
  - comunicación Lommy Eye
  - compatibilidad Lommy Eye Plaspy
  - protocolo de rastreo Lommy Eye
  - protocolo de rastreo GPS Flextrack
  - protocolo de seguimiento de activos Flextrack
  - comunicación GNSS Lommy Eye
  - reportes UDP TCP Lommy Eye
  - detección de protocolo de dispositivo Plaspy
---

# Flextrack - Protocolo Lommy Eye

Esta página describe el contexto público del protocolo para usar el Flextrack Lommy Eye con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y qué esperar al integrar Lommy Eye para reportes programados y por eventos. El objetivo es ofrecer orientación práctica para la configuración y solución de problemas manteniendo los detalles de implementación en un nivel público y seguro.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Lommy Eye puede enviar reportes de ubicación programados y actualizaciones por eventos; el comportamiento exacto del protocolo puede variar según el firmware del dispositivo, la revisión de hardware y la implementación del fabricante. Para la integración con Plaspy, el endpoint público del servidor es d.plaspy.com (también accesible en 54.85.159.138) y la plataforma usa el puerto 8888 para el reporte de dispositivos; los equipos pueden configurarse para usar UDP o TCP en ese puerto.

## Resumen del protocolo

El protocolo de comunicación de Lommy Eye permite que el rastreador entregue datos de posición, movimiento y eventos a Plaspy, y reciba configuraciones remotas cuando es compatible. A grandes rasgos, el protocolo transporta identidad, telemetría y estado para que Plaspy pueda mostrar mapas, historial y alertas a los usuarios finales.

- Lleva reportes periódicos de ubicación y actualizaciones por eventos, como reportes activados por movimiento que ayudan a preservar la vida de la batería hasta que se detecta desplazamiento.
- Transmite fixes GNSS, posicionamiento derivado de la red celular y señales asistidas por RF para que Plaspy construya un historial de ubicación consistente.
- Permite configuración remota de intervalos de reporte y umbrales de movimiento cuando el dispositivo y el transporte admiten mensajes de configuración.
- Soporta almacenamiento transitorio y reenvío para que posiciones perdidas se sincronicen con Plaspy cuando se restaura la conectividad.
- Se integra con la canalización de ingestión de Plaspy para que la identidad del dispositivo y la telemetría se asignen al activo correcto en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos y aplica detección automática para identificar el protocolo del dispositivo. En la mayoría de los casos, solo es necesario configurar el equipo para que reporte al endpoint de Plaspy y no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Los dispositivos deben apuntar al endpoint de Plaspy d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy escucha en el puerto 8888 y utiliza el mismo puerto para todos los dispositivos soportados.
- Lommy Eye puede configurarse para reportar vía UDP o TCP a ese mismo puerto según la capacidad del dispositivo.
- Cuando el rastreador está correctamente configurado para reportar al endpoint de Plaspy, la ingestión de Plaspy asocia automáticamente la telemetría entrante con el dispositivo.
- Normalmente los administradores no necesitan establecer un protocolo de dispositivo en Plaspy si el equipo está configurado para enviar datos al endpoint compartido de Plaspy.

## Transporte y contexto de conexión

Los detalles de conexión se mantienen deliberadamente simples para soportar una amplia gama de rastreadores alimentados por batería como Lommy Eye. La elección del transporte —UDP o TCP— depende del firmware y la configuración del rastreador, y el endpoint de Plaspy acepta ambos en el puerto estándar.

- Los dispositivos Lommy Eye pueden configurarse para usar UDP o TCP para reportar a Plaspy en el puerto 8888.
- El host canónico de reporte de Plaspy es d.plaspy.com, que resuelve a 54.85.159.138 para reportes públicos.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto de escucha, lo que simplifica la configuración de equipos en flotas.
- Al usar UDP, los reportes suelen ser ligeros y adecuados para actualizaciones periódicas; TCP puede utilizarse cuando el firmware del dispositivo prefiere una sesión orientada a conexión.
- En algunas variantes de Lommy Eye puede existir configuración remota vía SMS u otros canales fuera de banda, pero estos son independientes del transporte IP usado para enviar telemetría a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles y los comandos de configuración remota; siempre verifique la revisión del firmware al diagnosticar comportamientos.
- Las revisiones de hardware o diferentes factores de forma pueden exponer sensores o campos de telemetría distintos que afectan lo que Plaspy recibe.
- La decisión entre UDP y TCP es un parámetro de configuración del dispositivo y puede afectar el comportamiento de entrega durante problemas de red.
- Ajustes en el lado del fabricante, como el intervalo de reporte por defecto o modos de recuperación, pueden variar según la región o el modelo e influir en la frecuencia con la que Plaspy recibe actualizaciones.
- Los comportamientos de almacenamiento local difieren entre los modelos Lommy Eye M, L y XL; los dispositivos pueden almacenar en búfer reportes durante brechas de cobertura y reenviarlos cuando la conectividad regrese.
- Valide la compatibilidad y disponibilidad de funciones contra la documentación oficial de Flextrack para detalles específicos de modelo y firmware antes de despliegues a gran escala.

## Por qué importa entender el protocolo

Tener una comprensión básica de cómo Lommy Eye reporta datos a Plaspy ayuda a garantizar una configuración confiable, un uso eficiente de la batería y una solución de problemas más efectiva. Saber qué reporta el dispositivo y cómo el transporte y el firmware influyen en el comportamiento reduce la fricción en la integración y favorece operaciones previsibles.

- Ayuda a elegir intervalos de reporte adecuados para equilibrar la duración de la batería y la granularidad posicional.
- Facilita la solución de problemas cuando faltan reportes, se demoran o difieren de los campos esperados.
- Orienta la selección de UDP o TCP según las características de la red y el soporte del firmware del dispositivo.
- Aclara las expectativas sobre la recuperación de datos en búfer después de una pérdida de conectividad.
- Apoya la asignación de activos y el mapeo en Plaspy asegurando que la identidad del dispositivo y la telemetría coincidan con lo esperado por la plataforma.

## Por qué usar Plaspy con este protocolo

Usar Lommy Eye con Plaspy ofrece a las organizaciones visibilidad sobre activos remotos alimentados por batería con modos de reporte flexibles y herramientas de recuperación. Plaspy ingiere ubicación, movimiento y datos de eventos de Lommy Eye para que los operadores puedan monitorear el historial de ubicación del activo, recibir alertas de movimiento y aprovechar la recuperación asistida por RF cuando el GNSS es limitado.

El enfoque de endpoint compartido de Plaspy simplifica la provisión de dispositivos al usar un único host y puerto para todos los equipos y detectar automáticamente el protocolo del rastreador cuando este apunta correctamente al endpoint de Plaspy. To learn more about Plaspy and how it supports devices like Lommy Eye visit https://www.plaspy.com. Please verify current device protocol details, firmware behavior, and manufacturer implementation on the official Flextrack website https://flextrack.dk because protocol support and firmware features may change over time.
