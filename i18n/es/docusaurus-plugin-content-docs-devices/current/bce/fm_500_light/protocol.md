---
slug: /bce/fm_500_light/protocol
id: fm_500_light-protocol
sidebar_label: Protocol
title: BCE - FM-500 Light+ Protocol
sidebar_class_name: menu_item_tracker
description: Vista pública del protocolo BCE FM-500 Light Plus y cómo el rastreador se comunica con Plaspy
keywords:
  - protocolo BCE FM 500 Light+
  - protocolo GPS FM 500 Light+
  - protocolo de comunicación FM 500 Light+
  - protocolo de rastreo FM 500 Light+
  - rastreador GPS BCE Plaspy
  - rastreo de vehículos BCE FM 500 Light+
  - protocolo para rastreadores de activos
  - compatibilidad de dispositivos Plaspy
  - integración de rastreadores GPS
  - protocolo de gestión de flotas
---

# BCE - Protocolo FM-500 Light+

Esta página ofrece un resumen público del protocolo del BCE FM-500 Light+ y explica cómo el dispositivo se comunica con Plaspy para el rastreo y la telemetría. El enfoque es el contexto de alto nivel que necesita conocer un usuario o integrador al apuntar el FM-500 Light+ a los servidores de Plaspy, sin revelar detalles privados ni sensibles de implementación. El FM-500 Light+ es un rastreador compacto para objetos con posicionamiento GPS y GLONASS, reporte por GSM, múltiples entradas digitales y analógicas, salidas para control remoto e interfaces como 1-Wire iButton, RS-232 y EIA-485 que amplían sus capacidades de sensores y control.

Plaspy utiliza una configuración de conexión compartida para los dispositivos compatibles y detecta automáticamente los protocolos cuando los equipos reportan a la plataforma. El comportamiento exacto del protocolo en el FM-500 Light+ puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que una integración exitosa depende de configurar correctamente el dispositivo y verificar las opciones específicas del equipo. Las secciones siguientes explican el papel práctico del protocolo y cómo interactúa con Plaspy sin exponer detalles internos del dispositivo.

## Resumen del protocolo

En este contexto, el protocolo es el conjunto de reglas que gobierna cómo el FM-500 Light+ serializa y transmite información de ubicación, sensores y estados de entrada a un servicio backend como Plaspy. A alto nivel, el protocolo garantiza que el rastreador pueda identificarse, enviar telemetría utilizable y recibir configuraciones o comandos dentro de lo permitido por el dispositivo y la red.

- Permite que el FM-500 Light+ transmita coordenadas GPS o GLONASS y telemetría del vehículo a Plaspy
- Transporta los estados de entradas digitales y analógicas, además de eventos de sensores e interfaces conectadas
- Proporciona los medios para que el servidor correlacione los datos entrantes con una identidad de dispositivo específica
- Soporta flujos opcionales de control remoto o configuración que exponga el dispositivo dentro de las capacidades del fabricante
- Actúa como puente entre los sensores en el dispositivo y los sistemas de reporte y almacenamiento de Plaspy

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes de muchos modelos de rastreadores y reconocer automáticamente el formato y comportamiento de los reportes comunes. Cuando un FM-500 Light+ correctamente configurado apunta al endpoint de Plaspy, la plataforma identifica el protocolo del dispositivo y enruta los datos al pipeline de procesamiento adecuado sin necesidad de seleccionar manualmente el protocolo en la mayoría de los casos.

- Plaspy usa un endpoint compartido para que los dispositivos reporten a un único host para parseo e ingestión
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y envía reportes
- Normalmente usted no necesita escoger un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy
- La identificación correcta del dispositivo depende de que éste envíe su información de identidad como parte de sus reportes regulares
- Si la detección automática no coincide con lo esperado, revise la configuración de reporte del dispositivo y los detalles de firmware

## Contexto de transporte y conexión

El contexto de conexión describe cómo el FM-500 Light+ llega a Plaspy a través de la red. El dispositivo puede usar transporte UDP o TCP según su firmware y configuración. Plaspy acepta ambos tipos de transporte en un único puerto compartido, lo que simplifica la configuración de dispositivos entre varios modelos de rastreadores.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según las capacidades del equipo
- Plaspy acepta conexiones en el dominio d.plaspy.com y en la IP pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, que es el 8888 para canales de reporte y comandos
- Elegir UDP o TCP puede afectar la semántica de entrega y el comportamiento según las condiciones de la red y el firmware del dispositivo
- Asegúrese de que el destino de reporte del FM-500 Light+ esté fijado al endpoint de Plaspy para habilitar la detección automática

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el FM-500 Light+ pueden cambiar comandos disponibles, campos de telemetría y opciones de transporte
- Las revisiones de hardware y módulos de interfaz opcionales pueden alterar el conjunto de entradas, salidas y datos de sensores soportados
- Opciones de configuración del fabricante, como intervalos de mensaje y definiciones de eventos, afectan lo que Plaspy recibe
- Puede ser necesario seleccionar UDP versus TCP en el dispositivo para adaptarse a condiciones de red o recomendaciones del operador
- Verifique siempre qué versión de firmware está instalada al resolver problemas de compatibilidad con Plaspy
- Consulte la documentación del fabricante para cualquier extensión propietaria o modos de reporte opcionales

## Por qué es importante entender el protocolo

Entender cómo se comunica el FM-500 Light+ ayuda a lograr una configuración confiable, acelerar la resolución de problemas y asegurar una operación predecible a largo plazo con Plaspy. Conocer el alcance del protocolo y el contexto de transporte reduce la mala configuración y le permite tomar decisiones informadas sobre ajustes del dispositivo y datos esperados.

- Ayuda a validar que el dispositivo está correctamente apuntando a Plaspy y usando el transporte y puerto esperados
- Acelera el diagnóstico cuando los reportes faltan, llegan con retraso o aparecen incompletos en la plataforma
- Guía las pruebas de entradas de sensores, interfaces externas y controles remotos para confirmar la telemetría esperada
- Informa decisiones sobre intervalos de reporte, administración de energía y uso de datos en conexiones GSM
- Apoya la planificación de actualizaciones de firmware, ciclo de vida del dispositivo y cambios de integración a lo largo del tiempo

## Por qué usar Plaspy con este protocolo

Usar el BCE FM-500 Light+ con Plaspy ofrece un camino práctico para integrar telemetría de ubicación, entradas de sensores y capacidades de control remoto en una plataforma única de visibilidad de flotas o activos. Plaspy acepta reportes estándar de los dispositivos, los encamina al procesamiento específico por equipo y presenta datos de ubicación y eventos de formas que apoyan la monitorización operativa y la generación de informes.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el FM-500 Light+, visite https://www.plaspy.com. Por favor verifique los detalles de protocolo específicos del dispositivo, comportamiento de firmware e implementación del fabricante en el sitio oficial de BCE en http://www.bce.en/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
