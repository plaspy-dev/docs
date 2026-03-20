---
slug: /concox/x3/protocol
id: x3-protocol
sidebar_label: Protocol
title: Concox - X3 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo Concox X3 y cómo el tracker comunica con Plaspy para rastreo y monitoreo de flotas en tiempo real
keywords:
  - protocolo Concox X3
  - protocolo GPS Concox X3
  - protocolo de comunicación Concox X3
  - protocolo de rastreo Concox X3
  - rastreador GPS Concox
  - protocolo rastreador GPS X3
  - rastreador compatible Plaspy
  - protocolo de rastreo vehicular
  - gestión de flotas seguimiento
  - compatibilidad rastreador Concox
---

# Concox - Protocolo X3

Esta página describe el contexto público del protocolo para usar el rastreador GPS Concox X3 con Plaspy. Se centra en cómo el X3 envía telemetría y eventos a Plaspy, y en qué aspectos de la conexión y el reporte del dispositivo son relevantes para una integración y operación correctas en despliegues de gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo, las funciones disponibles y la frecuencia de envío pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta guía mantiene un enfoque público y neutral y remite a la documentación oficial del fabricante para los detalles más recientes.

## Visión general del protocolo

El protocolo de comunicación define cómo el X3 envía ubicación, estado e información de eventos a un servicio backend como Plaspy, y cómo se reconocen comandos remotos y señales de control cuando están soportados. Entender el papel del protocolo ayuda a los operadores a confirmar que la telemetría, los eventos de comportamiento de conducción y las señales de entradas/salidas llegan en un formato que Plaspy puede ingerir y procesar.

- Transporta posiciones GNSS y telemetría auxiliar como ACC, SOS, entradas y salidas al servidor para visualización en mapas y generación de reportes.
- Transmite eventos de comportamiento de conducción y de sensores que permiten flujos de trabajo de seguridad y alertas dentro de Plaspy.
- Habilita acciones de control remoto, por ejemplo comandos de inmovilizador basados en relé, cuando el dispositivo y la implementación permiten salidas remotas.
- Proporciona identidad y estado del dispositivo para que Plaspy pueda asociar mensajes entrantes con el vehículo y la configuración correctos.
- Suministra eventos con marca temporal que Plaspy utiliza para construir historiales, disparadores y alarmas automáticas por geocercas, movimiento y cambios de alimentación.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un endpoint y puerto compartidos y determina el protocolo del rastreador a partir de las características de la sesión y los mensajes recibidos. En la mayoría de los despliegues, el dispositivo solo necesita apuntar al endpoint de Plaspy y usar el puerto de la plataforma; Plaspy identificará el protocolo de forma automática.

- Plaspy escucha en un único puerto compartido para el tráfico de dispositivos y aplica detección automática de protocolo sobre las conexiones recibidas.
- Normalmente no es necesario seleccionar un protocolo dentro de Plaspy cuando el X3 está configurado para reportar al endpoint de Plaspy.
- La detección se realiza en el servidor usando atributos de conexión observados y patrones de mensaje, en lugar de requerir que el usuario especifique el tipo de protocolo.
- La detección automática agiliza la incorporación de flotas mixtas con distintos modelos de dispositivo que reportan al mismo endpoint de Plaspy.

## Transporte y contexto de conexión

El transporte y el direccionamiento de la conexión determinan cómo el X3 alcanza Plaspy y cuán fiable es la sesión para el reporte en tiempo real. El X3 puede configurarse para usar UDP o TCP para enviar su telemetría a Plaspy, dependiendo de la configuración del equipo y las consideraciones de red.

- Los dispositivos pueden configurarse para reportar al dominio del servidor de Plaspy d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy recibe el tráfico de los dispositivos en el puerto 8888 y el X3 puede configurarse para usar UDP o TCP en ese mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor a nivel de flota y la incorporación.
- La elección entre UDP o TCP puede afectar las características de entrega y el comportamiento de reintentos según las condiciones de la red móvil y las opciones del firmware del dispositivo.
- Asegúrese de que los parámetros APN y la configuración de la SIM en el X3 sean correctos para que el dispositivo pueda establecer sesiones salientes TCP o UDP hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el timing de los mensajes, los tipos de eventos soportados o campos opcionales que afectan cómo Plaspy interpreta los datos.
- Las revisiones de hardware o la configuración de accesorios opcionales pueden agregar o quitar puntos de E/S que aparecen en los reportes.
- Diferencias en la interfaz de configuración del fabricante o en los valores por defecto del servidor pueden requerir ajustar el dispositivo para apuntar a d.plaspy.com o a la IP del servidor.
- Seleccionar UDP frente a TCP en el equipo influye en el comportamiento del transporte y debe coincidir con sus requisitos operativos.
- Valide la compatibilidad de funciones específicas como control remoto de relés, monitoreo de voz o entradas avanzadas de sensores contra las notas de versión del dispositivo.
- Siempre verifique la configuración del X3 después de actualizaciones de firmware para confirmar que la dirección del servidor y el transporte sigan siendo correctos.

## Por qué es importante entender el protocolo

Conocer el comportamiento del protocolo de comunicación facilita la configuración inicial, el diagnóstico de problemas de conectividad y la garantía de operación fiable a largo plazo cuando el X3 se usa con Plaspy. Tener expectativas claras sobre lo que el dispositivo reporta y cómo el servidor espera recibirlo reduce fricciones en la incorporación y mejora la respuesta ante incidentes.

- Acelera la resolución de problemas cuando la telemetría o los eventos no aparecen en Plaspy al enfocar la verificación en transporte y dirección del servidor.
- Ayuda a alinear la configuración del dispositivo, como TCP versus UDP y parámetros APN, con las necesidades operativas.
- Aclara qué entradas y eventos puede enviar el X3 para que los usuarios de Plaspy los mapeen a alertas y flujos de trabajo.
- Facilita la planificación frente a actualizaciones de firmware y cambios de hardware al identificar las funciones que podrían verse afectadas.
- Incrementa la confianza al configurar funciones de control remoto como la activación de relés para flujos de trabajo de inmovilizador.

## Por qué usar Plaspy con este protocolo

Usar el Concox X3 con Plaspy brinda a los operadores de flota visibilidad en tiempo real de la ubicación del vehículo, el comportamiento de conducción y entradas críticas como ACC y SOS. Plaspy ingiere la telemetría y las señales de eventos del X3 para poblar mapas, alarmas e informes históricos, de modo que los equipos puedan actuar ante incidentes, aplicar políticas y realizar análisis operativos a lo largo de la flota.

Para conocer más sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Para detalles específicos de protocolo, firmware e implementación del dispositivo confirme la información más reciente con el fabricante en https://www.iconcox.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
