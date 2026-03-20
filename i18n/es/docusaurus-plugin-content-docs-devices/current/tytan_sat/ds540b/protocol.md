---
slug: /tytan_sat/ds540b/protocol
id: ds540b-protocol
sidebar_label: Protocol
title: Tytan SAT - DS540B Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del Tytan SAT DS540B y su comunicación con Plaspy para rastreo en tiempo real y telemetría de vehículos
keywords:
  - protocolo Tytan SAT DS540B
  - protocolo GPS Tytan SAT DS540B
  - compatibilidad DS540B Plaspy
  - protocolo de comunicación DS540B
  - protocolo de rastreo DS540B
  - telemática Tytan SAT
  - telemetría vehicular DS540B
  - rastreador GPS CAN bus
  - rastreo de flotas DS540B
  - rastreadores compatibles con Plaspy
---

# Tytan SAT - Protocolo DS540B

Esta página ofrece el contexto público del protocolo para integrar el Tytan SAT DS540B con Plaspy. Aquí se explica de forma general cómo se comunica el dispositivo con Plaspy, qué esperar de la configuración de conexión y transporte, y qué aspectos de la interfaz del rastreador son relevantes al integrar telemetría, datos CAN bus y entradas de sensores en una plataforma de gestión de flotas.

El DS540B es un rastreador de calidad vehicular que entrega posición GNSS junto con telemetría avanzada desde el bus CAN FMS J1939 J1708, entradas analógicas y digitales, sensores de temperatura 1-wire y salidas digitales. Plaspy usa ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del rastreador permite que el DS540B se identifique, envíe ubicación GPS y transporte telemetría del vehículo y eventos de entradas/salidas a Plaspy. Esta sección resume el papel público del protocolo sin exponer detalles de implementación específicos de firmware o analizadores privados.

- Transporta posición GNSS y marca de tiempo para que Plaspy ubique el dispositivo en mapas en vivo y en los registros históricos.
- Envía telemetría del bus vehicular CAN FMS J1939 J1708 para que Plaspy presente consumos, RPM, carga del motor y estados de alarmas OEM.
- Entrega eventos de entradas analógicas y digitales, además de lecturas de sensores de temperatura 1-wire para alertas y flujos de cumplimiento.
- Comunica comandos y cambios de estado de salidas digitales cuando el control remoto es soportado por el dispositivo y el vehículo.
- Proporciona la identidad del dispositivo y el contexto de sesión que Plaspy utiliza para correlacionar mensajes entrantes con un rastreador registrado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint compartido y determina automáticamente el protocolo correcto para las conexiones entrantes. En configuraciones típicas, el usuario no necesita seleccionar un protocolo dentro de Plaspy si el DS540B está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.
- Los dispositivos deben configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Cuando el DS540B envía ubicación y telemetría al endpoint de Plaspy, la plataforma correlaciona la identidad del dispositivo y aplica la lógica de parseo correspondiente.
- La selección manual de protocolo en Plaspy rara vez es necesaria si el dispositivo apunta correctamente al endpoint de Plaspy y usa el transporte soportado.
- La detección exitosa del protocolo depende de que el dispositivo envíe campos de identificación y telemetría reconocibles según lo implementado en su firmware.

## Contexto de transporte y conexión

Las opciones de conexión y transporte influyen en cómo el DS540B alcanza la plataforma Plaspy. El dispositivo puede configurarse para usar UDP o TCP según el soporte de hardware y firmware, y Plaspy soporta ambos transportes en el mismo puerto.

- El DS540B puede configurarse para comunicarse mediante UDP o TCP en el puerto 8888 según la configuración del equipo y los requisitos de red.
- Plaspy acepta tráfico de todos los dispositivos soportados en el puerto 8888, por lo que una configuración de puerto único es suficiente para flotas mixtas.
- Los dispositivos pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138 cuando no hay DNS disponible.
- La elección del transporte puede influir en la entrega bajo redes degradadas; por ejemplo, UDP es ligero mientras que TCP aporta fiabilidad de sesión a nivel de transporte.
- Problemas a nivel de red como NAT del operador, reglas de firewall o configuración de APN pueden afectar la conectividad y deben validarse durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- Versiones de firmware y revisiones de hardware del dispositivo pueden cambiar campos exactos, frecuencias y el comportamiento de los reportes del DS540B.
- Las interfaces de configuración del fabricante a veces muestran nombres o parámetros distintos que afectan cómo el dispositivo se identifica ante un servidor.
- La elección de transporte UDP versus TCP puede ajustarse en el dispositivo y debe alinearse con las necesidades operativas del despliegue.
- El cableado de sensores y las entradas o salidas habilitadas en una unidad instalada determinan qué flujos de telemetría están disponibles en Plaspy.
- Confirme cualquier configuración proporcionada por el fabricante o las notas de la versión de firmware para conocer comportamientos que afecten el intervalo de reporte, la escala de entradas o las unidades de telemetría.
- Valide la compatibilidad contra la documentación oficial y pruebe un dispositivo representativo antes de un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Comprender de forma práctica el protocolo de comunicación del DS540B ayuda a asegurar una configuración confiable, un mapeo de telemetría preciso y una resolución de problemas efectiva cuando el dispositivo se usa con Plaspy. Conocer el comportamiento general del protocolo de reporte reduce el tiempo de integración y mejora los resultados operativos.

- Instalación más rápida y confiable cuando los instaladores configuran correctamente el endpoint del servidor y el transporte en el dispositivo.
- Resolución de problemas más clara ante telemetría faltante al saber qué sensores y parámetros del bus debe reportar el dispositivo.
- Mejores expectativas sobre frecuencia de actualización, reporte de eventos y cómo las entradas se mapean a alertas y paneles en Plaspy.
- Decisiones informadas sobre la selección de transporte y la configuración de red para adecuarse al perfil de conectividad de la flota.
- Validación más sencilla de valores de telemetría en Plaspy cuando entiende qué métricas del bus vehicular y qué entradas soporta el DS540B.

## Por qué usar Plaspy con este protocolo

Usar el DS540B con Plaspy brinda a las flotas una ruta práctica desde señales crudas del vehículo hasta información operativa. La combinación de telemetría CAN bus, entradas analógicas y digitales y soporte de sensores de temperatura permite a los gestores monitorear consumo de combustible, comportamiento del conductor, temperatura de la carga y eventos de alarma desde una sola plataforma.

Plaspy centraliza los datos del DS540B para monitoreo en vivo, reportes históricos, alertas de geocerca y flujos de control remoto cuando se usan salidas digitales. Para comenzar, configure el dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP según lo soporte su hardware, y Plaspy detectará automáticamente el protocolo del rastreador para su ingestión.

Conozca más sobre Plaspy en https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información específica más reciente con el fabricante en http://tytansat.com/ antes de un despliegue a gran escala.
