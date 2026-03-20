---
slug: /suntech/st4505/protocol
id: st4505-protocol
sidebar_label: Protocol
title: Suntech - ST4505 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el Suntech ST4505 con Plaspy, con ajustes de conexión y orientación de compatibilidad
keywords:
  - Protocolo Suntech ST4505
  - Protocolo GPS Suntech ST4505
  - Protocolo de comunicación Suntech ST4505
  - Protocolo de rastreo Suntech ST4505
  - Compatibilidad ST4505 Plaspy
  - Rastreador OBD II ST4505
  - Protocolo de rastreador GPS Suntech
  - Telemetría vehicular ST4505
  - Rastreo de flotas ST4505
  - Protocolo de dispositivo Plaspy
---

# Suntech - Protocolo ST4505

Esta página documenta el contexto público del protocolo para usar el rastreador OBD-II Suntech ST4505 con Plaspy. Resume cómo se comunica el dispositivo de forma general, el papel del protocolo de reporte en la entrega de ubicaciones GNSS, telemetría OBD y eventos de sensores, y qué ajustes de conexión de Plaspy se usan para la integración. Esta guía está dirigida a implementadores técnicos y administradores de flota que configuran dispositivos ST4505 para que reporten al backend de Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un ST4505 se configura para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello, la información que sigue se centra en el contexto público no sensible y en notas prácticas de compatibilidad, no en detalles internos del dispositivo.

## Resumen del protocolo

El protocolo de comunicación es el método acordado que el ST4505 utiliza para enviar posiciones GNSS, telemetría OBD-II y eventos de sensores a un servicio backend como Plaspy. Permite que el dispositivo se identifique, reporte la ubicación y datos del vehículo, y envíe notificaciones de eventos que Plaspy traduce en seguimiento en tiempo real, alertas y registros históricos.

- Transporta fijaciones GNSS y eventos de movimiento necesarios para el seguimiento de ubicación y flujos de trabajo de geocercas.
- Transmite telemetría OBD-II e indicadores diagnósticos para que Plaspy muestre el estado del vehículo y dispare avisos de mantenimiento.
- Convey información de identidad y salud del dispositivo para que Plaspy pueda correlacionar las transmisiones con el vehículo y la cuenta correctos.
- Entrega mensajes basados en eventos como colisión, encendido/apagado del motor y eventos duros derivados del acelerómetro para alertas inmediatas.
- Permite intervalos de reporte configurables y umbrales de evento para equilibrar la capacidad de respuesta con el uso de datos celulares.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint público común e identifica automáticamente el protocolo del rastreador usado por una transmisión entrante. Cuando el ST4505 reporta al endpoint de Plaspy con la configuración de red y servidor correcta, por lo general no es necesario seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en la dirección del servidor compartido d.plaspy.com y en la IP pública 54.85.159.138.
- Plaspy acepta conexiones entrantes de dispositivos en el puerto 8888 y usa ese mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP al reportar a Plaspy en el puerto 8888, según el firmware del equipo y la preferencia del operador.
- Si el ST4505 apunta al endpoint de Plaspy y la conectividad celular funciona, Plaspy detectará automáticamente el protocolo y comenzará a procesar los flujos de ubicación y telemetría.
- Los pasos típicos de configuración son ajustar el APN del dispositivo, establecer la dirección del servidor Plaspy y asegurarse de que el modo de transporte del dispositivo coincida con las capacidades de la red.

## Transporte y contexto de conexión

El transporte y el direccionamiento determinan cómo el ST4505 alcanza el backend de Plaspy, pero no cambian el propósito general del protocolo. El dispositivo puede usar UDP o TCP en el puerto compartido de Plaspy, y puede apuntar al dominio de Plaspy o a la IP pública según las necesidades de aprovisionamiento.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la dirección numérica 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según las opciones del firmware y el comportamiento de la red.
- Todos los dispositivos que reportan a Plaspy usan el mismo número de puerto 8888 para reducir la complejidad de configuración.
- El modo celular (por ejemplo LTE Cat M1, NB‑IoT o fallback 2G) puede influir en cómo el dispositivo maneja sesiones y retransmisiones, pero no cambia el endpoint público de conexión.
- Asegúrese de que los cortafuegos de red y las reglas de NAT permitan conexiones salientes al endpoint de Plaspy en el puerto 8888 para el protocolo de transporte elegido.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades ST4505 pueden cambiar qué campos de telemetría se envían y con qué frecuencia, por lo que conviene verificar las notas de la versión de firmware para entender el comportamiento del dispositivo.
- Las revisiones de hardware y variantes opcionales como ST4505T y ST4505DO pueden añadir sensores Bluetooth o detección de interferencias, lo que modifica el conjunto de eventos reportados a Plaspy.
- La selección del transporte (UDP frente a TCP) puede afectar las características de entrega de mensajes en enlaces celulares poco fiables; elija el modo mejor soportado por el firmware del dispositivo y el operador móvil.
- La disponibilidad de PIDs OBD-II depende de la marca y el modelo del vehículo; no todos los campos de telemetría estarán presentes en cada vehículo.
- Siempre contraste los ejemplos de configuración del dispositivo con la documentación actual del fabricante antes de desplegar a gran escala.
- Se recomienda probar un dispositivo de muestra de extremo a extremo con Plaspy antes del despliegue de la flota para validar la telemetría y el comportamiento de eventos esperados.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del ST4505 ayuda a garantizar una configuración fluida, acelera la resolución de problemas y mantiene la calidad de la telemetría una vez que los dispositivos estén desplegados a escala. Entender qué reporta el dispositivo y cómo se conecta a Plaspy reduce el tiempo de diagnóstico cuando faltan mensajes o los eventos se comportan de forma inesperada.

- Acelera la configuración inicial alineando los ajustes del servidor del dispositivo con los requisitos de conexión de Plaspy.
- Facilita el diagnóstico de problemas de conectividad al aclarar si el transporte, DNS o modo celular son la causa raíz.
- Permite ajustar intervalos de reporte y umbrales de evento para equilibrar necesidades en tiempo real y costos de datos.
- Aclara qué métricas OBD-II se pueden esperar según la combinación de vehículo y firmware.
- Soporta una planificación predecible de actualizaciones OTA o mantenimiento al comprender cómo reportan los dispositivos durante las actualizaciones.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST4505 con Plaspy ofrece una vía práctica para combinar un rastreo GNSS preciso, diagnósticos del vehículo a través del puerto OBD-II y eventos basados en sensores en los flujos de trabajo de la flota. La forma OBD-II plug and play y el soporte multinetwork celular hacen del ST4505 una opción conveniente para operadores que buscan instalación rápida y telemetría continua.

El endpoint de conexión compartido de Plaspy y la detección automática de protocolo simplifican la incorporación de dispositivos. Para saber más sobre Plaspy y cómo funciona con dispositivos como el ST4505 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que le rogamos verifique la información más reciente del protocolo específico del dispositivo y las notas de firmware en el sitio oficial del fabricante http://www.suntechint.com/.
