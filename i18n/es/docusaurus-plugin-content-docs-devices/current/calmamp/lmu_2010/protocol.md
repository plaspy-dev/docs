---
slug: /calmamp/lmu_2010/protocol
id: lmu_2010-protocol
sidebar_label: Protocol
title: CalmAmp - LMU-2010 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas sobre el protocolo CalmAmp LMU-2010 y cómo se comunica con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - CalmAmp LMU-2010
  - protocolo LMU 2010
  - protocolo CalmAmp Plaspy
  - protocolo GPS LMU 2010
  - rastreo de vehículos LMU 2010
  - rastreador GPS CalmAmp
  - telemática OBD II
  - rastreo Bluetooth de baja energía
  - rastreo para gestión de flotas
  - generador de eventos PEG
---

# CalmAmp - Protocolo LMU-2010

Esta página resume el contexto público del protocolo para usar el rastreador CalmAmp LMU-2010 con Plaspy. Describe cómo el equipo suele reportar telemetría y eventos al servidor de Plaspy y qué aspectos del reporte son relevantes para la integración y la operación diaria. El LMU-2010 es un rastreador compacto para vehículos que integra GPS, una interfaz OBD II, un acelerómetro de tres ejes, puente por Bluetooth de baja energía y un motor de eventos en el dispositivo que en conjunto permiten informar ubicación, eventos de conducción y el estado del vehículo.

Plaspy acepta datos de dispositivos LMU-2010 utilizando ajustes de conexión compartidos entre los rastreadores soportados y detecta automáticamente el protocolo cuando llegan los datos. Los equipos pueden configurarse para reportar por UDP o TCP al endpoint de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que esta página se centra en el contexto público y no en detalles sensibles o específicos de firmware.

## Visión general del protocolo

El LMU-2010 utiliza su protocolo de comunicación para entregar información de posición, métricas derivadas del OBD, eventos detectados por el acelerómetro y alertas programables a un servidor backend. En Plaspy, la función del protocolo es transformar esos mensajes de telemetría y eventos en actualizaciones de ubicación, alertas y señales de entrada que la plataforma pueda usar.

- Transporta datos de ubicación GPS y velocidad para las actualizaciones de posición periódicas.
- Envía valores OBD II y diagnósticos cuando están habilitados y son compatibles con la instalación.
- Reporta eventos basados en el acelerómetro, como frenadas bruscas, curvas pronunciadas y aceleraciones rápidas.
- Usa Bluetooth de baja energía como puente opcional a través de un smartphone para enviar datos por la red celular.
- Entrega eventos y reglas programables generados por el motor de eventos del dispositivo para geocercas, movimiento y condiciones de entrada.
- Soporta cambios de configuración por aire y actualizaciones de firmware gestionadas por el sistema logístico del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido y detecta automáticamente el protocolo del rastreador en función de los datos que envía el dispositivo. En la mayoría de despliegues esto significa que no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el LMU-2010 esté configurado para reportar al endpoint de Plaspy.

- Todos los dispositivos en Plaspy usan el mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Los dispositivos configurados para enviar datos al endpoint de Plaspy serán identificados y asociados en la mayoría de los casos sin elegir el protocolo manualmente.
- La detección automática cubre variantes comunes del protocolo, por lo que los dispositivos aparecen en la plataforma con configuración mínima.
- Si un dispositivo no aparece, validar los ajustes de transporte y la configuración del fabricante es el siguiente paso habitual.

## Transporte y contexto de conexión

Las opciones de transporte afectan cómo el LMU-2010 llega a Plaspy pero no cambian el propósito del protocolo en sí. El dispositivo puede estar configurado para usar UDP o TCP dependiendo del operador, el método de puente por smartphone o la configuración realizada durante la instalación.

- El equipo puede configurarse usando UDP o TCP en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, por lo que el mismo puerto se aplica en toda la plataforma.
- El reporte mediante Bluetooth de baja energía a través de un smartphone normalmente hace que el teléfono reenvíe los datos por TCP o UDP al endpoint configurado.
- La fiabilidad de la red y el comportamiento del celular pueden influir en si UDP o TCP resulta preferible para un despliegue específico.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar intervalos de reporte, campos de telemetría disponibles o el comportamiento de eventos; consulte las notas de la versión de firmware para más detalles.
- Las revisiones de hardware u accesorios opcionales como adaptadores OBD pueden cambiar qué puntos de datos están disponibles en una unidad concreta.
- El puente por smartphone vía Bluetooth de baja energía puede introducir diferencias en cómo y cuándo el dispositivo sube los datos al servidor.
- La elección de transporte entre UDP y TCP puede afectar las características de entrega de mensajes y debe coincidir con la configuración del dispositivo.
- Las herramientas de aprovisionamiento por aire pueden actualizar la configuración del dispositivo después de la instalación y modificar el comportamiento del protocolo.
- Valide los ajustes del dispositivo con la documentación del fabricante y confirme que el equipo apunte al endpoint de Plaspy.

## Por qué es importante entender el protocolo

Conocer el comportamiento general del protocolo de comunicación del LMU-2010 ayuda a asegurar una correcta configuración, reportes fiables y una resolución de problemas más rápida cuando los dispositivos están desplegados en campo. Una comprensión clara reduce el tiempo de integración y mejora la calidad de la telemetría que se refleja en Plaspy.

- Ayuda a identificar si lagunas en la posición son causadas por problemas de transporte, configuraciones de sueño del dispositivo o errores de configuración.
- Aclara cómo se esperan ver en la plataforma los eventos del acelerómetro y las métricas OBD.
- Orienta la decisión entre UDP y TCP al configurar flotas grandes o escenarios de conectividad intermitente.
- Facilita el uso efectivo del motor de eventos a bordo para alertas basadas en reglas y monitoreo de geocercas.
- Reduce el tiempo para resolver desajustes en el reporte al enfocar el diagnóstico en firmware, transporte o configuración del fabricante.

## Ventajas de usar Plaspy con este protocolo

Usar el LMU-2010 con Plaspy ofrece una vía práctica para convertir la telemetría del dispositivo en información accionable para la gestión de flotas. Las organizaciones obtienen visibilidad de ubicación, eventos de conducción y señales derivadas del OBD mientras se benefician del endpoint unificado de Plaspy y la detección automática de protocolos. Esto facilita la incorporación de dispositivos y mantiene un reporte consistente en flotas mixtas.

Learn more about Plaspy at https://www.plaspy.com and consult the device manufacturer for the latest protocol and firmware details at http://www.calamp.com/ . Protocol support, firmware behavior, and device implementation details can change over time, so verify current device specific information on the official manufacturer site.
