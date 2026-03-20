---
slug: /trackerking/jx01/protocol
id: jx01-protocol
sidebar_label: Protocol
title: TrackerKing - JX01 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo TrackerKing JX01 que explica cómo comunica el dispositivo con Plaspy y recomendaciones de conexión
keywords:
  - protocolo TrackerKing JX01
  - protocolo GPS TrackerKing JX01
  - TrackerKing JX01 con Plaspy
  - protocolo de rastreo JX01
  - protocolo de rastreador GPS personal
  - protocolo de comunicación de rastreadores
  - compatibilidad de dispositivos Plaspy
  - integración de rastreadores GPS
  - protocolo para rastreador anti-pérdida
  - rastreo en tiempo real JX01
---

# TrackerKing - Protocolo JX01

Esta página presenta el contexto público del protocolo para usar el TrackerKing JX01 con Plaspy. Aquí se explica cómo el dispositivo reporta ubicaciones y eventos a Plaspy y qué aspectos de la comunicación son relevantes para una integración correcta, sin exponer detalles propietarios de implementación.

El JX01 es un rastreador GPS personal compacto y recargable, optimizado para casos de uso de anti pérdida y protección personal. Plaspy emplea ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El JX01 transmite posición, alarmas y telemetría básica a un servidor remoto mediante el enlace celular del dispositivo. El contexto público del protocolo cubre el papel de esos mensajes para identificar el dispositivo, reportar ubicación y estado de batería, y activar eventos dentro de Plaspy sin detallar las estructuras propietarias de los paquetes.

- Permite que el dispositivo se identifique para que Plaspy asocie los informes con el activo y la cuenta correctos.
- Envía actualizaciones periódicas de ubicación y alarmas por movimiento o vibración que Plaspy utiliza en mapas y notificaciones.
- Entrega telemetría de batería baja y modos de energía para que los administradores gestionen el tiempo de actividad y las alertas.
- Señala entradas y salidas de geocercas que Plaspy muestra en alertas y reportes.
- Proporciona marcadores de eventos para sesiones de monitoreo de voz y otras alertas de emergencia o situacionales.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un punto de enlace compartido y determina el manejo apropiado para cada mensaje entrante. En la mayoría de despliegues el usuario no necesita seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un único puerto para todos los dispositivos soportados y detecta automáticamente el protocolo usado por los reportes entrantes.
- Los dispositivos configurados para enviar datos a d.plaspy.com o 54.85.159.138 alcanzarán el servidor de Plaspy para la detección automática del protocolo.
- Es necesario que el dispositivo se identifique correctamente (IMEI u otro ID de dispositivo que el rastreador provea) para que Plaspy vincule los reportes con el activo correcto.
- Cuando el rastreador está configurado para usar el endpoint de Plaspy y las credenciales correctas, normalmente no es necesario seleccionar el protocolo dentro de Plaspy.

## Transporte y contexto de conexión

El JX01 puede configurarse para usar transporte UDP o TCP según las opciones del dispositivo y las condiciones de red. Plaspy soporta ambos transportes en el mismo puerto para que el dispositivo use el modo más adecuado según su firmware y despliegue.

- Los dispositivos pueden estar configurados para enviar reportes por UDP o TCP a d.plaspy.com en el puerto 8888.
- La IP del servidor Plaspy 54.85.159.138 es un endpoint alternativo que los dispositivos pueden apuntar cuando DNS no está disponible.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, lo que simplifica el enrutamiento del servidor y la configuración del dispositivo.
- La elección entre UDP o TCP puede afectar la confiabilidad y el consumo de batería; siga las recomendaciones del fabricante para seleccionar el transporte más adecuado.
- Los operadores de red y la configuración del APN deben permitir tráfico saliente hacia el endpoint y puerto configurados.

## Notas sobre compatibilidad del protocolo

- La versión de firmware puede cambiar la cadencia de mensajes, las alarmas disponibles y campos opcionales de telemetría; verifique el comportamiento específico por firmware con los recursos del fabricante.
- Las revisiones de hardware a veces agregan o eliminan funciones como monitoreo de voz o tipos adicionales de alarma; confirme la revisión del dispositivo frente a las funciones esperadas.
- Las herramientas de configuración del fabricante o las apps complementarias pueden controlar qué modos de transporte y reporte están activos; confirme los ajustes en la app del fabricante.
- La selección de transporte (UDP vs TCP) puede verse limitada por condiciones de red o políticas del operador de la SIM; confirme que el rastreador puede alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas funciones requieren configuración adicional (por ejemplo definiciones de geocerca o perfiles de ahorro de energía) y solo aparecerán en Plaspy si están habilitadas en el dispositivo.
- Valide la compatibilidad consultando la documentación oficial de TrackerKing para el modelo y firmware precisos que esté utilizando.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el JX01 ayuda a garantizar reportes confiables, alertas precisas y uso eficiente de la batería cuando el dispositivo se gestiona mediante Plaspy. Un contexto de protocolo claro acelera la resolución de problemas y ayuda a los administradores a elegir ajustes de configuración adecuados.

- Asegura que el dispositivo apunte al endpoint y puerto correctos de Plaspy para que los reportes lleguen de forma fiable.
- Facilita el diagnóstico de actualizaciones de posición faltantes o alarmas demoradas revisando el transporte y la configuración del APN.
- Orienta en decisiones sobre la frecuencia de reporte y el ahorro de energía para balancear vida de batería y frescura de telemetría.
- Aclara por qué ciertos eventos aparecen en Plaspy y cuáles pueden requerir configuración adicional en el dispositivo.
- Apoya la planificación de despliegues mixtos donde rastreadores portátiles conviven con hardware de grado vehicular.

## Por qué usar Plaspy con este protocolo

Usar el TrackerKing JX01 con Plaspy ofrece una forma directa de incorporar rastreo personal y de activos portátiles dentro de una vista operativa más amplia. El factor de forma compacto del JX01, su batería recargable y las funciones de alarma encajan de forma natural con los paneles, alertas y reportes de Plaspy para cuidadores, equipos de seguridad o gestores de activos.

Plaspy centraliza la ubicación y los eventos del JX01 para que los administradores puedan actuar sobre alertas de geocerca, notificaciones de movimiento y vibración, telemetría de batería baja y eventos de monitoreo de voz. Para obtener más información sobre cómo Plaspy gestiona los datos del dispositivo y explorar las funciones de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información más reciente específica del dispositivo y firmware en el sitio de TrackerKing https://trackerking.cn/.
