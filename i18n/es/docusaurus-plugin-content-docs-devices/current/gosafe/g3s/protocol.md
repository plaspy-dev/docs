---
slug: /gosafe/g3s/protocol
id: g3s-protocol
sidebar_label: Protocol
title: Gosafe - G3S Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del rastreador Gosafe G3S y cómo comunica datos con Plaspy para seguimiento de flotas
keywords:
  - protocolo Gosafe G3S
  - protocolo GPS Gosafe G3S
  - Gosafe G3S Plaspy
  - protocolo rastreador GPS Gosafe
  - protocolo de seguimiento G3S
  - seguimiento de flotas Gosafe
  - protocolo de comunicación G3S
  - compatibilidad de rastreadores Plaspy
  - protocolo de seguimiento de vehículos
  - integración del dispositivo Gosafe
---

# Gosafe - Protocolo G3S

Esta página ofrece una visión pública y no sensible del contexto de comunicación para utilizar el rastreador Gosafe G3S con Plaspy. Su objetivo es explicar cómo el dispositivo informa la ubicación y el estado a Plaspy, y cuál es el papel del protocolo del rastreador para posibilitar esa comunicación, sin exponer detalles propietarios ni internos del firmware.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos reportan al endpoint de Plaspy. El comportamiento exacto del protocolo en una unidad G3S puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los integradores deben considerar esta información como contexto de alto nivel y no como una especificación definitiva.

## Resumen del protocolo

El protocolo de un rastreador vehicular como el Gosafe G3S es el conjunto de reglas y mensajes que el dispositivo utiliza para identificarse y enviar telemetría a un servidor. Con Plaspy, el protocolo permite que los equipos envíen actualizaciones de posición, indicadores de estado y notificaciones de eventos a una plataforma de flotas centralizada, de modo que esos mensajes puedan usarse para monitoreo y despacho.

- Permite que el dispositivo se identifique y asocie los reportes con un vehículo o unidad específica
- Transmite ubicación y telemetría básica para que Plaspy muestre posición y movimiento
- Envía indicadores de eventos y alarmas usados en geocercas, encendido y otras alertas
- Habilita interacción básica bidireccional cuando está soportada para confirmaciones de comandos o retroalimentación de configuración
- Proporciona el flujo de datos consistente que Plaspy necesita para normalizar los reportes entre distintos modelos de rastreadores

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y usa esos datos entrantes para determinar automáticamente el protocolo del rastreador. En la mayoría de las implementaciones no es necesario seleccionar manualmente un protocolo en Plaspy si el dispositivo está configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy acepta reportes en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador a partir de la conexión entrante y los datos reportados
- Normalmente el usuario configura en el equipo solo la dirección del servidor y el tipo de transporte y Plaspy se encarga de la detección
- Si un dispositivo reporta pero no aparece en Plaspy, revise el endpoint, el transporte y la configuración del equipo según la guía del fabricante

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo los dispositivos G3S entregan sus reportes a Plaspy, aunque no cambian el propósito general del protocolo. El G3S puede configurarse para usar UDP o TCP según la capacidad del dispositivo y las necesidades de despliegue, y debe apuntar al endpoint de Plaspy para que los mensajes lleguen a la plataforma.

- El dispositivo G3S puede configurarse para usar UDP o TCP en el puerto 8888
- Plaspy escucha reportes de rastreadores en el puerto 8888 para todos los dispositivos soportados
- Los equipos pueden apuntar al hostname d.plaspy.com o a la IP del servidor 54.85.159.138
- Usar el hostname permite enrutamiento basado en DNS y facilita las actualizaciones del endpoint si fuera necesario
- La elección entre UDP y TCP puede afectar características de entrega y debe seguir la guía del fabricante

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar qué funcionalidades y tipos de mensajes soporta un G3S
- Algunas configuraciones del fabricante o compilaciones de firmware pueden venir por defecto en UDP o TCP; valide la selección del transporte antes del despliegue
- Plaspy utiliza un único puerto de escucha por simplicidad, pero la configuración del dispositivo debe coincidir con ese puerto para que alcance la plataforma
- La documentación del fabricante puede listar comandos o pasos de configuración específicos del dispositivo que no se cubren en este resumen público
- Valide el reporte del dispositivo probando una unidad antes de un despliegue masivo para confirmar el comportamiento con el firmware actual
- Ante dudas, verifique detalles de compatibilidad con los recursos del proveedor del dispositivo

## Por qué es importante entender el protocolo

Saber cómo se comunica el G3S ayuda a garantizar una configuración sin contratiempos y un funcionamiento confiable con Plaspy. Comprender el endpoint de reporte, el transporte y cómo el dispositivo presenta su identificación facilita el diagnóstico de problemas de conectividad y la confirmación de que los datos de seguimiento fluyen correctamente.

- Ayuda a confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el puerto 8888
- Permite una resolución de problemas más rápida cuando un equipo no aparece en Plaspy
- Orienta la decisión entre UDP o TCP según el entorno de red y el comportamiento del dispositivo
- Evita configuraciones erróneas que bloqueen los reportes antes de que lleguen a Plaspy
- Soporta tareas del ciclo de vida como actualizaciones de firmware y despliegues por etapas con resultados previsibles

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G3S con Plaspy ofrece una forma directa de convertir los reportes del dispositivo en seguimiento de ubicación, monitoreo de eventos e información operativa. Para proveedores de servicio y flotas empresariales, la combinación del compacto rastreador G3S y la visibilidad de Plaspy contribuye a mejorar la eficiencia del despacho, la recuperación de activos y la gestión continua de la flota.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details can change over time; verify the latest device specific protocol information with the manufacturer at https://gosafesystem.com/
