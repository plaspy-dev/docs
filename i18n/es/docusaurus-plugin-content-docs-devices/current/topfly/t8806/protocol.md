---
slug: /topfly/t8806/protocol
id: t8806-protocol
sidebar_label: Protocol
title: TopFly - T8806 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo TopFly T8806 y cómo se comunica con Plaspy para seguimiento y gestión de flotas
keywords:
  - Protocolo TopFly T8806
  - Protocolo GPS TopFly T8806
  - Compatibilidad TopFly T8806 Plaspy
  - Protocolo rastreador TopFly
  - Protocolo de comunicación T8806
  - Rastreo vehicular TopFly T8806
  - Compatibilidad rastreadores Plaspy
  - Rastreo de flotas TopFly T8806
  - Protocolo de seguimiento T8806
  - Guía protocolo TopFly
---

# TopFly - Protocolo T8806

Esta página explica el contexto público del protocolo para usar el rastreador GPS TopFly T8806 con Plaspy. Resume de manera general cómo el dispositivo se comunica con Plaspy y destaca el papel del protocolo de reporte del rastreador en funciones como la ubicación en tiempo real, la carga de waypoints históricos, alarmas y funciones de control remoto descritas por el fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en la guía de conexión y compatibilidad más que en los formatos de paquete específicos del firmware.

## Descripción general del protocolo

El protocolo de reporte del T8806 es el conjunto de reglas que el rastreador usa para enviar datos de ubicación, sensores y alarmas a un servidor remoto y para recibir comandos de control permitidos. A alto nivel, el protocolo permite que el rastreador se identifique, entregue mensajes de telemetría y eventos, y soporte funciones operativas remotas que facilitan la gestión de flotas y los flujos de trabajo de seguridad.

- Permite la transmisión de coordenadas GPS en tiempo real y actualizaciones de estado a un servidor remoto
- Transmite eventos de alarma y sensores como exceso de velocidad, geocerca, remolque, SOS y notificaciones de robo
- Soporta acciones de control remoto sobre el canal de reporte para operaciones como inmovilización
- Transporta datos periódicos e históricos de waypoints para que el historial de ubicación aparezca en Plaspy
- Proporciona un canal para audio bidireccional y estados de entradas auxiliares cuando el dispositivo admite esas funciones

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un único endpoint compartido y utiliza ese flujo para identificar automáticamente el protocolo del dispositivo. En la mayoría de los escenarios de despliegue usted no necesita seleccionar un protocolo dentro de Plaspy si el T8806 está configurado para reportar al endpoint de Plaspy usando las herramientas de configuración del dispositivo.

- El dominio de servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- La IP del servidor de Plaspy es 54.85.159.138
- Plaspy utiliza un único puerto compartido para todos los dispositivos y detecta automáticamente el protocolo del rastreador
- Los dispositivos configurados para reportar al endpoint de Plaspy se identifican y procesan sin selección manual de protocolo
- La configuración correcta del dispositivo en el lado del rastreador es el requisito habitual para que la detección automática funcione

## Transporte y contexto de conexión

El transporte de la conexión es distinto al propio protocolo; el T8806 puede configurarse para usar diferentes modos de transporte según el firmware y la configuración local. Plaspy provee una dirección y puerto consistentes para que los dispositivos puedan apuntar a los mismos ajustes de servidor para el reporte.

- El dispositivo puede configurarse para usar UDP o TCP según las capacidades y configuración del rastreador
- Plaspy acepta conexiones al dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reporte, lo que simplifica la configuración en el rastreador
- Elija UDP o TCP en el dispositivo de acuerdo con su documentación y las condiciones de red
- La estabilidad de la red, el comportamiento de NAT y las políticas del operador móvil pueden influir en si UDP o TCP es preferible

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar con la versión de firmware; dispositivos con firmware antiguo o personalizado pueden comportarse de forma diferente
- Las revisiones de hardware y las versiones específicas por región a veces utilizan comportamientos de reporte modificados que afectan la integración
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo para que el reporte sea exitoso
- La configuración del fabricante o la provisión de la SIM pueden influir en la capacidad del rastreador para alcanzar Plaspy
- Siempre valide que el dispositivo está reportando al endpoint de Plaspy tras la configuración para confirmar la llegada de datos
- Para funciones avanzadas como audio bidireccional o telemetría de sensor de combustible, verifique que el firmware del dispositivo exponga esos eventos en el protocolo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del T8806 ayuda a los operadores a configurar los dispositivos correctamente, diagnosticar problemas de conectividad o reporte y garantizar telemetría confiable para operaciones de flota. Tener claro qué envía el rastreador y cómo Plaspy espera recibirlo reduce el tiempo de integración y favorece un comportamiento predecible en producción.

- Ayuda a confirmar que el dispositivo apunta al servidor y modo de transporte correctos
- Facilita la resolución de problemas cuando la telemetría o las alarmas no aparecen en Plaspy
- Orienta decisiones sobre actualizaciones de firmware y habilitación de funciones en el rastreador
- Permite coordinar con los operadores móviles sobre comportamiento de red y configuración APN
- Mejora la planificación de mantenimiento a largo plazo para las flotas al clarificar las capacidades del dispositivo

## Por qué usar Plaspy con este protocolo

Usar el TopFly T8806 con Plaspy ofrece una forma práctica de centralizar la ubicación, alarmas y datos de sensores de un rastreador GPS capaz en una única plataforma de gestión de flotas. La detección automática de protocolo de Plaspy y el endpoint de conexión compartido reducen los pasos de configuración necesarios para comenzar a recibir telemetría de dispositivos T8806, mientras que funciones comunes como inmovilización, alertas de geocerca y waypoints históricos se integran en los flujos de trabajo de Plaspy.

Para saber más sobre Plaspy y cómo maneja la comunicación con dispositivos, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique los detalles específicos más recientes del protocolo y las notas de firmware con el fabricante en https://www.topflytech.com/
