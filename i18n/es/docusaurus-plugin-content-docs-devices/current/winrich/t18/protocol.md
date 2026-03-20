---
slug: /winrich/t18/protocol
id: t18-protocol
sidebar_label: Protocol
title: Winrich - T18 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el reloj GPS Winrich T18 con Plaspy para supervisión y alertas en tiempo real
keywords:
  - protocolo Winrich T18
  - rastreador GPS Winrich T18
  - comunicación Winrich T18
  - protocolo de seguimiento T18
  - compatibilidad T18 Plaspy
  - protocolo rastreador GPS Plaspy
  - protocolo rastreador GPS vestible
  - protocolo GPS seguridad infantil
  - rastreo GPS cuidado de personas mayores
  - compatibilidad de dispositivos Plaspy
---

# Winrich - Protocolo T18

Esta página describe el contexto público del protocolo para usar el reloj rastreador GPS Winrich T18 con la plataforma Plaspy. Se centra en cómo el dispositivo comunica datos de ubicación y eventos que Plaspy puede usar, y en qué aspectos debe fijarse al configurar y validar un T18 para supervisión y alertas. El objetivo es ofrecer contexto útil de integración sin incluir detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Plaspy recibe los reportes de dispositivo en el endpoint y puerto compartidos y procesará los mensajes entrantes de trackers compatibles una vez que el equipo apunte al servidor de Plaspy.

## Visión general del protocolo

El protocolo de reporte del T18 permite que el reloj entregue ubicación, eventos de seguridad y telemetría básica desde el wearable hacia una plataforma remota. Para la integración con Plaspy, la función del protocolo es asegurar que el reloj pueda identificarse, transmitir información de posición y enviar alertas y estados que la plataforma pueda interpretar y presentar a cuidadores o administradores.

- Transmite actualizaciones de ubicación por GPS y LBS para que Plaspy muestre la posición en vivo y el historial de rutas.
- Envía alertas SOS de emergencia con coordenadas asociadas para flujos de notificación inmediatos.
- Reporta nivel de batería y estado básico del dispositivo para soportar advertencias por batería baja y monitoreo operacional.
- Entrega disparadores de eventos como entrada o salida de geo cercas que Plaspy puede enrutar como alertas.
- Soporta señalización relacionada con llamadas y comunicación de voz bidireccional a través de la conectividad GSM del dispositivo como parte de la experiencia de servicio.

## Cómo Plaspy detecta el protocolo

Plaspy detecta trackers compatibles de forma automática cuando los dispositivos están configurados para reportar al endpoint de Plaspy. Generalmente no es necesario que usted seleccione un protocolo manualmente dentro de Plaspy si el T18 apunta correctamente a la plataforma y usa los ajustes de transporte compatibles.

- Plaspy escucha en una dirección y puerto compartidos para todo tipo de dispositivos y aplica detección de protocolo automáticamente.
- Los dispositivos deben configurarse para reportar a d.plaspy.com o a la IP equivalente del servidor Plaspy para una entrega confiable.
- Plaspy detecta el protocolo del rastreador automáticamente cuando el dispositivo comienza a enviar reportes al endpoint de la plataforma.
- Si un dispositivo usa TCP o UDP, la plataforma aceptará la conexión entrante en el puerto de Plaspy y aplicará la lógica de detección.
- Una correcta configuración de APN y de la SIM en el dispositivo ayuda a garantizar que los primeros reportes lleguen a Plaspy para su detección.

## Contexto de transporte y conexión

El contexto de conexión describe cómo el T18 alcanza a Plaspy a través de la red móvil y qué ajustes de transporte se suelen emplear. El T18 puede configurarse para usar UDP o TCP para enviar reportes, y los dispositivos pueden apuntar a Plaspy por nombre de host o por IP según los flujos de aprovisionamiento.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 para entornos que requieren una dirección IP.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y las reglas de red.
- Use las herramientas de configuración del dispositivo o los comandos SMS proporcionados por el fabricante para establecer el host de reporte y el transporte.
- Los ajustes de red móvil como el APN deben ser válidos para permitir conexiones salientes desde el T18 hacia Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción pueden cambiar la temporización de mensajes, los campos disponibles o la telemetría opcional.
- Las revisiones de hardware o variantes regionales pueden habilitar o deshabilitar funciones como asistencia LBS o voz bidireccional.
- Los comandos de configuración del fabricante y el transporte predeterminado (UDP vs TCP) pueden variar; confirme los ajustes del dispositivo antes del despliegue.
- El comportamiento del operador de red y el aprovisionamiento de la SIM pueden afectar la rapidez con la que un dispositivo establece conexión con la plataforma.
- Valide siempre la compatibilidad en pruebas controladas antes de incorporar dispositivos a un entorno de monitoreo en producción.
- La documentación del fabricante y las notas de la versión son las fuentes autorizadas para detalles específicos de protocolo por firmware.

## Por qué es importante comprender el protocolo

Comprender cómo el T18 se comunica con Plaspy ayuda a asegurar una configuración fiable, agiliza la resolución de problemas y permite un comportamiento predecible durante eventos críticos. Tener claro el contexto de comunicación reduce el tiempo de resolución cuando los dispositivos no aparecen en la plataforma o cuando faltan eventos esperados.

- Permite identificar un host de reporte o tipo de transporte mal configurado que impida el registro del dispositivo.
- Facilita verificar los ajustes de red y SIM necesarios para un reporte consistente.
- Ayuda a interpretar la telemetría del dispositivo como precisión de ubicación, nivel de batería y eventos SOS.
- Apoya la planificación ante actualizaciones de firmware o reemplazos de dispositivos que puedan alterar el comportamiento.
- Mejora la preparación operativa de los cuidadores al clarificar cómo las alertas y las funciones de voz llegan a los usuarios de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Winrich T18 con Plaspy ofrece una forma directa de centralizar el rastreo de wearables, alertas SOS y telemetría básica para flujos de trabajo de cuidado y seguridad. Plaspy presenta posición en vivo, rutas históricas, alertas por geo cerca y estado del dispositivo en una interfaz consolidada para que escuelas, familias y organizaciones de cuidado mantengan conciencia situacional sin gestionar detalles de protocolo de bajo nivel.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente del protocolo específico del dispositivo en el sitio oficial de Winrich http://www.winrichgroup.com/en/.
