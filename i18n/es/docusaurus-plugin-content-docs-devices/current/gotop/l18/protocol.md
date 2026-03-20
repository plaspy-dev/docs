---
slug: /gotop/l18/protocol
id: l18-protocol
sidebar_label: Protocol
title: GOTOP - L18 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo del rastreador GOTOP L18 y su comunicación con Plaspy para seguimiento y alertas en tiempo real
keywords:
  - protocolo GOTOP L18
  - protocolo GPS GOTOP L18
  - protocolo de comunicación GOTOP L18
  - protocolo de rastreo GOTOP L18
  - compatibilidad GOTOP L18 Plaspy
  - protocolo rastreador smartwatch GOTOP
  - protocolo GPS para wearables
  - protocolo rastreador de personal
  - compatibilidad de dispositivos Plaspy
  - guía de protocolo de rastreador GPS
---

# GOTOP - L18 Protocolo

Esta página describe el contexto público del protocolo para utilizar el rastreador inteligente con GPS GOTOP L18 en Plaspy. Explica de manera general cómo el dispositivo informa ubicación, alertas y telemetría de salud a la plataforma Plaspy, y cuál es el papel del protocolo de reporte en la integración y en la operación cotidiana.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto de los paquetes, la frecuencia de los campos y la disponibilidad de funciones pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que este documento ofrece una perspectiva de integración de alto nivel más que instrucciones específicas por firmware.

## Resumen del protocolo

El L18 se comunica con plataformas telemáticas enviando telemetría periódica y por eventos a través de la conexión de red del dispositivo. El protocolo de comunicación define cómo el reloj se identifica, reporta posición y datos de sensores, y señala eventos de alarma para que Plaspy pueda presentar ubicación en tiempo real, alertas de geocerca, notificaciones SOS y métricas de salud a los usuarios.

- Permite que el L18 entregue posiciones y contexto GNSS a Plaspy para mapas e historial.
- Transmite banderas de SOS y emergencias para activar flujos de trabajo de alarma en Plaspy.
- Envía telemetría de salud periódica como frecuencia cardiaca, SpO2 y lecturas de presión arterial para casos de monitoreo.
- Incluye identidad y estado del dispositivo que Plaspy usa para asociar los datos entrantes con el activo correcto.
- Soporta mensajes por evento como batería baja, movimiento o alertas personalizadas que requieran atención del despachador.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido e intenta determinar automáticamente el protocolo del dispositivo entrante, por lo que generalmente no se requiere seleccionar el protocolo manualmente. Cuando un L18 está configurado para reportar a Plaspy, la plataforma empareja la telemetría recibida con un perfil de dispositivo soportado y comienza a procesar los datos para mapas y alertas.

- Plaspy expone un endpoint compartido en d.plaspy.com y una dirección IP pública asociada que los dispositivos pueden usar.
- Todos los dispositivos compatibles con Plaspy reportan al mismo puerto y la plataforma maneja la detección de protocolo automáticamente.
- Normalmente no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy.
- La configuración adecuada del dispositivo para reportar a Plaspy es el requisito habitual para que la detección automática funcione.
- Si un dispositivo no aparece en Plaspy, revisar la dirección de red y los ajustes de transporte en el dispositivo es un primer paso práctico.

## Transporte y contexto de conexión

El L18 puede configurarse para enviar telemetría por UDP o TCP según la configuración del dispositivo y la disponibilidad de red. Para integrarlo con Plaspy, el equipo debe apuntar al endpoint de Plaspy usando el transporte y el puerto soportados para que los mensajes entrantes lleguen a la plataforma de forma fiable.

- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy acepta conexiones en un único puerto para todos los dispositivos; el mismo puerto se usa entre los modelos soportados.
- El L18 puede usar UDP o TCP en el puerto compartido de Plaspy según el módem y la configuración del dispositivo.
- El reporte celular típicamente usa la conexión de datos 4G o GSM del equipo; el reloj puede soportar subidas asistidas por Wi Fi o BLE para contexto adicional.
- Verifique que el APN y los ajustes de red del dispositivo permitan conexiones salientes al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden introducir diferencias en la temporización de mensajes, campos de telemetría disponibles o transportes soportados.
- Revisiones de hardware y características opcionales como eSIM o módulos BLE pueden afectar los métodos de reporte disponibles.
- Las páginas de configuración del fabricante o las herramientas de aprovisionamiento pueden permitir seleccionar UDP o TCP; elija el transporte que mejor se adapte a su entorno de red.
- Algunas funciones mostradas en marketing, como modelos específicos de sensores o compatibilidad con accesorios, pueden variar por lote o SKU regional.
- La detección automática de Plaspy reduce la necesidad de seleccionar el protocolo manualmente, pero es esencial configurar correctamente el endpoint y el transporte en el dispositivo.
- Siempre contraste las notas de versión del fabricante y la documentación del dispositivo para confirmar la compatibilidad con una versión de firmware determinada.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a instaladores y administradores a garantizar que el L18 entregue de forma confiable los datos que Plaspy necesita para seguimiento, alertas e informes. Conocer el comportamiento del protocolo y del transporte acelera la resolución de problemas y facilita alinear la configuración del equipo con los requisitos operativos.

- Confirma que el equipo apunta al endpoint correcto de Plaspy y utiliza el transporte adecuado.
- Ayuda a diagnosticar telemetría ausente, actualizaciones retrasadas o dispositivos no registrados revisando cómo reporta el dispositivo.
- Permite decidir compensaciones entre frecuencia de reporte y consumo de batería para equilibrar necesidades de telemetría y tiempo de actividad.
- Facilita la planificación de actualizaciones de firmware y la validación de que nuevas versiones mantengan la compatibilidad con Plaspy.
- Mejora la coordinación con el fabricante cuando el dispositivo presenta comportamientos inesperados relacionados con reportes o alarmas.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP L18 con Plaspy brinda a las organizaciones visibilidad centrada en wearables, combinando posición en tiempo real, alertas SOS y telemetría de salud en una vista operativa única. El factor de forma compacto del L18 y su conjunto de sensores lo hacen adecuado para escenarios de cuidado, supervisión de personal en campo y cualquier caso que se beneficie tanto de contexto de ubicación como biométrico.

El enfoque de endpoint compartido y la detección automática de protocolos de Plaspy simplifican el despliegue: configure el L18 para reportar a d.plaspy.com o 54.85.159.138 usando el transporte y puerto soportados, y Plaspy procesará la telemetría entrante junto con otros dispositivos. Para obtener más información sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; confirme la información más reciente del protocolo específico del dispositivo con el fabricante en https://www.gotop.cc/.
