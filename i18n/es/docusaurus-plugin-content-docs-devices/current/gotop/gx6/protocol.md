---
slug: /gotop/gx6/protocol
id: gx6-protocol
sidebar_label: Protocol
title: GOTOP - GX6 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo para usar el rastreador GOTOP GX6 con los servidores Plaspy para seguimiento de flotas y comunicación de dispositivos
keywords:
  - Protocolo GOTOP GX6
  - Protocolo GPS GOTOP GX6
  - Compatibilidad GX6 Plaspy
  - Comunicación rastreador GX6
  - Protocolo rastreador GOTOP
  - Rastreo vehicular GX6
  - GOTOP GX6 4G
  - Protocolo dispositivo Plaspy
  - Protocolo seguimiento flotas
  - Protocolo rastreador GPS
---

# GOTOP - Protocolo GX6

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP GX6 con Plaspy. Se centra en cómo el dispositivo se comunica de manera general y no sensible, y en cómo Plaspy gestiona esas comunicaciones para el seguimiento de flotas y la supervisión de dispositivos. La información aquí busca ayudar a administradores e integradores a comprender consideraciones de conexión e informe, no a detallar internals de bajo nivel del protocolo.

El rastreador 4G GOTOP GX6 es un dispositivo GPS para vehículos diseñado para la gestión de flotas; ofrece posicionamiento GPS y BD, posicionamiento por LBS y una variedad de funciones telemáticas como detección de ACC, control remoto de alimentación, alarmas, monitoreo de audio remoto e interfaces I/O. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos o detalles de firmware consulte la documentación oficial de GOTOP.

## Resumen del protocolo

A grandes rasgos, el protocolo del GX6 es el conjunto de reglas que el dispositivo usa para enviar informes de localización, actualizaciones de estado y notificaciones de eventos a un servidor remoto. Estos mensajes permiten a una plataforma de seguimiento como Plaspy identificar la unidad, interpretar la telemetría y presentar datos de ubicación y sensores útiles a los operadores, sin que sea necesario seleccionar manualmente el protocolo cuando el dispositivo está configurado para reportar a Plaspy.

- El protocolo permite que el rastreador establezca una sesión con un endpoint remoto y entregue datos periódicos de posición y eventos.
- Los campos de identificación y estado en los informes permiten a Plaspy asociar mensajes con un vehículo y mostrar telemetría precisa.
- La telemetría transportada incluye posición, estado de movimiento, señales I/O y de alarma, que Plaspy convierte en eventos de flota.
- El protocolo admite tanto el reporte inmediato de eventos como actualizaciones programadas de posición según la configuración del dispositivo.
- Las versiones de firmware y las revisiones de hardware del fabricante determinan qué funciones y tipos de mensajes están disponibles en cada unidad.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de los rastreadores en un endpoint compartido y detecta automáticamente el protocolo empleado por cada dispositivo. En la mayoría de los casos, un GX6 correctamente configurado solo necesita apuntar su dirección de reporte a Plaspy para que la plataforma reconozca y comience a procesar sus mensajes. Normalmente no es necesaria la selección manual del protocolo dentro de Plaspy cuando el dispositivo envía datos al endpoint correcto.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy server IP for direct configuration is 54.85.159.138
- The port used by Plaspy for all devices is 8888 and Plaspy automatically detects the tracker protocol
- Plaspy supports receiving device reports without requiring users to pick a protocol when the tracker points to the Plaspy endpoint
- Detection covers a variety of common tracker message types so that data from GX6 units is parsed and normalized for the platform

## Transporte y contexto de conexión

Las opciones de conexión forman parte del contexto de despliegue más que de la especificación del protocolo. El GX6 puede configurarse para reportar a Plaspy usando UDP o TCP en el mismo puerto que Plaspy utiliza para todos los dispositivos. La elección entre UDP o TCP depende del firmware del dispositivo y de requisitos de red como confiabilidad, comportamiento NAT y preferencia del operador.

- Devices may be configured to report to the domain d.plaspy.com or the IP address 54.85.159.138
- The transport port for Plaspy device traffic is 8888 and all devices supported by Plaspy use this same port
- The GX6 may be set to use UDP or TCP depending on its firmware and configuration needs
- Network settings on the vehicle SIM and any intermediate firewalls must allow outbound traffic to the Plaspy endpoint
- Reliable delivery and session behavior differ between UDP and TCP so choose transport according to your network and application needs

## Notas sobre compatibilidad de protocolo

- El GX6 es compatible con Plaspy cuando se configura para reportar al endpoint y puerto de Plaspy
- Las versiones de firmware y las revisiones de hardware pueden modificar los tipos de mensajes disponibles y el comportamiento; valide las funciones en cada dispositivo
- Algunas unidades GX6 permiten alternar entre modos de reporte UDP y TCP, lo que puede afectar la entrega de mensajes a Plaspy
- Los ajustes suministrados por el fabricante, como APN, dirección del servidor y elección de transporte, deben configurarse correctamente para un informe fiable
- Confirme siempre que configuraciones OEM personalizadas o integradores terceros no hayan alterado el comportamiento de reporte por defecto
- Verifique la compatibilidad probando una unidad en su entorno de red antes de un despliegue masivo

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GX6 ayuda en la configuración inicial, en la operación confiable y en la resolución de problemas si los informes dejan de llegar o parecen incompletos. Conocer el contexto de conexión y reporte también permite al equipo diseñar permisos de red, planes de SIM y procedimientos de gestión remota que soporten operaciones de flota a largo plazo.

- La configuración correcta de la dirección del servidor y del transporte evita fallos comunes de conectividad
- Saber qué funciones reporta el firmware reduce la confusión sobre telemetría faltante
- Conocer las compensaciones entre UDP y TCP ayuda a seleccionar el mejor transporte para su entorno
- Entender la detección automática por parte de Plaspy agiliza la incorporación y reduce pasos de configuración manual
- Estar al tanto de las revisiones de firmware y hardware facilita el soporte y la planificación del ciclo de vida

## Por qué usar Plaspy con este protocolo

Usar Plaspy para gestionar rastreadores GOTOP GX6 proporciona una plataforma central para la visibilidad de vehículos y activos. Plaspy normaliza la telemetría entrante, aplica reglas y alertas, y ofrece a los operadores una interfaz coherente para monitorear posicionamiento, alarmas y eventos I/O que provienen de los dispositivos GX6. Esto resulta útil para operaciones de flota que requieren precisión en la ubicación, monitoreo de eventos y capacidades de control remoto que ofrece el GX6.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles más recientes del protocolo y las notas de firmware del fabricante en https://www.gotop.cc/ antes de desplegar a gran escala.
