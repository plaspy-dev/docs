---
slug: /navtelekom/signal_s_2117/protocol
id: signal_s_2117-protocol
sidebar_label: Protocol
title: Navtelekom - СИГНАЛ S-2117 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar Navtelekom СИГНАЛ S-2117 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo Navtelekom СИГНАЛ S-2117
  - protocolo de rastreador GPS Navtelekom
  - compatibilidad СИГНАЛ S-2117 con Plaspy
  - seguimiento de flotas Navtelekom
  - protocolo GNSS GLONASS
  - rastreador con sensor de combustible RS-485
  - rastreador con sensor de temperatura 1-Wire
  - comunicación de telemetría vehicular
  - ajustes de conexión del rastreador
  - detección de protocolo del rastreador
---

# Navtelekom - Protocolo СИГНАЛ S-2117

Esta página describe el contexto público del protocolo para usar el rastreador Navtelekom СИГНАЛ S-2117 con Plaspy. Explica de forma general cómo se comunica el dispositivo, qué ajustes de conexión se utilizan para reportar a Plaspy y qué aspectos del envío de datos son relevantes al integrar el S-2117 en una solución de gestión de flotas. El S-2117 es un dispositivo de localización GNSS con posicionamiento GLONASS, conectividad GSM, soporte para sensor de combustible RS-485, entradas 1-Wire para temperatura e identificación, monitoreo de alarmas y sabotaje, voz bidireccional y salidas de control remoto.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo informa al endpoint de Plaspy. En la práctica esto significa que el rastreador puede configurarse para enviar datos a Plaspy usando el mismo endpoint y puerto que otros dispositivos. El comportamiento exacto del protocolo y los campos reportados pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página proporciona contexto de alto nivel y no instrucciones específicas por firmware.

## Resumen del protocolo

El protocolo del СИГНАЛ S-2117 define cómo el dispositivo envía posiciones, telemetría de sensores y señales de evento a un servidor remoto. En el contexto de Plaspy, el protocolo transporta fijaciones GNSS, eventos de alarma y sabotaje, telemetría de combustible y temperatura, y cualquier acuse o indicador de sesión de voz que el rastreador reenvíe. Esto permite a Plaspy convertir los mensajes del dispositivo en actualizaciones de ubicación en tiempo real, alertas y registros históricos.

- Permite que el rastreador envíe actualizaciones de ubicación periódicas y por evento a Plaspy para seguimiento en vivo y registro de rutas.
- Transmite telemetría desde sensores de combustible RS-485 y sensores de temperatura 1-Wire para que Plaspy muestre niveles de combustible y tendencias de temperatura.
- Envía eventos de alarma, sabotaje y pánico para activar flujos de trabajo de seguridad y notificaciones en Plaspy.
- Soporta mensajes relacionados con control remoto y voz que Plaspy puede presentar como controles accionables o marcadores de evento.
- Identifica el dispositivo y sus canales reportados para que Plaspy asocie los mensajes con el vehículo y la configuración de sensores correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los mensajes entrantes en un endpoint compartido y determina automáticamente el protocolo de rastreador adecuado para la mayoría de los dispositivos compatibles. Si el S-2117 está configurado para reportar al endpoint de Plaspy, la plataforma mapeará los mensajes entrantes al registro del dispositivo correspondiente sin que usted tenga que seleccionar manualmente el protocolo en la mayoría de los casos. Esta detección automática agiliza la puesta en marcha en flotas mixtas.

- Plaspy utiliza un único endpoint de servidor y puerto compartido para simplificar la configuración de los dispositivos.
- Normalmente solo es necesario apuntar el rastreador al endpoint de Plaspy; no suele ser necesario elegir el protocolo manualmente en la interfaz de Plaspy si la configuración de envío es correcta.
- Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el tipo de dispositivo apropiado para su procesamiento.
- El uso consistente del mismo endpoint y puerto reduce errores de configuración al desplegar numerosos dispositivos en una flota.
- Si un dispositivo no es reconocido, revisar la configuración del equipo y los parámetros del fabricante suele resolver los problemas de reporte.

## Transporte y contexto de conexión

El contexto de conexión se refiere a cómo el rastreador envía sus tramas al endpoint de Plaspy, más que al contenido interno de los paquetes. El СИГНАЛ S-2117 puede configurarse para utilizar transporte IP estándar para entregar sus reportes a Plaspy. Para una entrega fiable, asegúrese de que los ajustes de servidor y transporte del rastreador coincidan con el endpoint de Plaspy y las opciones de transporte que el dispositivo soporte.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la dirección IP 54.85.159.138.
- El puerto compartido de Plaspy para el reporte de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El equipo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración elegida.
- Use el tipo de transporte que su flota haya probado y soporte; algunas implementaciones prefieren UDP por menor latencia y otras prefieren TCP por sesiones persistentes.
- Verifique los ajustes de servidor, transporte y APN del rastreador para garantizar que los mensajes se entreguen correctamente al endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden cambiar qué campos y eventos reporta el rastreador; confirme siempre la edición de firmware en uso.
- Revisión de hardware u opciones de interfaz del S-2117 pueden habilitar o deshabilitar canales RS-485 o 1-Wire, afectando la disponibilidad de telemetría.
- La selección de transporte (UDP vs TCP) influye en cómo el dispositivo establece y mantiene la conexión con Plaspy; asegúrese de que el transporte elegido sea compatible con el firmware del rastreador.
- Modelos descontinuados pueden seguir siendo compatibles pero quizá no reciban nuevo firmware; valide el comportamiento antes de incorporarlos a nuevos despliegues.
- Las herramientas de configuración del fabricante y los manuales oficiales son la fuente autorizada para ajustes específicos del dispositivo y parámetros de conexión recomendados.
- Al integrar sensores como medidores de combustible o sondas de temperatura, valide el mapeo y la escala de los sensores para asegurar telemetría precisa en Plaspy.

## Por qué importa conocer el protocolo

Tener una comprensión básica del protocolo de comunicación ayuda a garantizar que los dispositivos reporten de forma fiable, que los sensores se mapeen correctamente en Plaspy y que las alertas y los controles funcionen como se espera. Aunque Plaspy gestiona la detección y el análisis del protocolo, conocer las características de transporte y reporte del S-2117 reduce el tiempo de configuración y facilita la resolución de problemas.

- Asegura que se apliquen correctamente los ajustes de servidor, transporte y APN para que los mensajes del dispositivo lleguen a Plaspy.
- Permite confirmar qué canales de telemetría el dispositivo realmente reportará según las opciones de firmware y hardware.
- Simplifica la resolución de problemas por datos faltantes, como lecturas de combustible o registros de temperatura, al acotar las causas a transporte, configuración o cableado de sensores.
- Facilita la planificación de actualizaciones de firmware y despliegues cuando se esperan cambios de comportamiento con nuevas versiones.
- Permite a los integradores documentar los tipos de evento y telemetría esperados para reglas de reporte y alertas en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el СИГНАЛ S-2117 con Plaspy es una forma práctica de centralizar la ubicación de vehículos, la telemetría de combustible, el monitoreo de temperatura y los eventos de seguridad para operaciones de flota. Plaspy traduce los datos GNSS, de sensores y de alarma en paneles operativos, reportes históricos y flujos de alertas que los administradores de flota pueden usar para tomar decisiones.

El modelo de endpoint compartido y la detección automática de protocolos de Plaspy reducen la carga de configuración en flotas mixtas y agilizan la puesta en línea de equipos como el S-2117. Para saber más sobre Plaspy y cómo gestiona el reporte de dispositivos y la visibilidad de la flota, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, comportamiento de firmware y guía de configuración del fabricante, verifique la información vigente en el sitio oficial de Navtelekom en https://www.navtelecom.ru/.
