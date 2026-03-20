---
slug: /winrich/tk102/protocol
id: tk102-protocol
sidebar_label: Protocol
title: Winrich - TK102 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Winrich TK102 y cómo se comunica con Plaspy para reportes e integración confiables
keywords:
  - protocolo Winrich TK102
  - protocolo GPS Winrich TK102
  - Winrich TK102 Plaspy
  - protocolo rastreador GPS Winrich
  - protocolo de comunicación TK102
  - protocolo de rastreo TK102
  - compatibilidad Winrich TK102
  - integración rastreador GPS Plaspy
  - rastreo vehicular Winrich TK102
  - protocolo GSM GPS TK102
---

# Winrich - Protocolo TK102

Esta página describe el contexto público del protocolo para usar el rastreador GPS Winrich TK102 con Plaspy. Resume cómo la serie TK102 informa posición y estado en términos generales y cómo Plaspy recibe esa información sin revelar detalles propietarios o privados de parseo. El resumen se basa en las capacidades del equipo, como posicionamiento GPS y GSM dual, conmutación automática a GSM cuando el GPS no está disponible, respuestas de direcciones en idioma local, registro en tarjeta TF, eventos del sensor de choque y configuración automática de APN.

Plaspy acepta conexiones de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando los dispositivos comienzan a enviar datos. Para Plaspy, los ajustes públicos de recepción son d.plaspy.com o la IP del servidor 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP hacia ese mismo puerto. Dado que Plaspy utiliza un puerto consistente para todos los dispositivos y realiza detección automática de protocolo, usted normalmente solo necesita asegurarse de que el TK102 esté configurado para reportar al endpoint de Plaspy y que el firmware y la configuración APN sean correctos, teniendo en cuenta que el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación del rastreador define cómo el TK102 envía posición, estado y eventos a un servidor remoto y cómo el servidor puede identificar el dispositivo y procesar sus reportes. El contexto público del protocolo cubre el flujo de mensajes y los usos a alto nivel en lugar de la estructura de paquetes de bajo nivel.

- Permite que el dispositivo envíe actualizaciones periódicas o por eventos para que Plaspy pueda mostrar posiciones en tiempo real o casi en tiempo real.
- Incluye información identificadora para que Plaspy asocie los reportes entrantes con el registro correcto del rastreador.
- Transmite notificaciones de estado y eventos como activaciones del sensor de choque, alertas por movimiento o avisos de conmutación a GSM, que respaldan los flujos de monitoreo.
- Soporta la subida de datos almacenados cuando el equipo recobra conectividad, lo que permite reconstruir el historial de rutas desde la tarjeta TF o la memoria interna.
- Puede incluir respuestas de dirección en el idioma local para ofrecer retroalimentación legible por humanos según la configuración del equipo y las capacidades del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartido y usa las características de cada flujo entrante para identificar automáticamente el dispositivo que reporta y su protocolo. Esto normalmente significa que usted no tiene que seleccionar manualmente el protocolo dentro de Plaspy cuando el rastreador envía datos correctamente.

- El endpoint público de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888.
- Los dispositivos pueden configurarse para reportar por UDP o TCP al mismo puerto 8888 según el soporte del equipo y las condiciones de red.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes.
- Cuando un TK102 correctamente configurado informa al endpoint de Plaspy, la plataforma asocia automáticamente los datos con el registro de dispositivo correspondiente.
- Si un dispositivo no aparece, confirme la configuración de envío del equipo, el APN y si el dispositivo está usando UDP o TCP para comunicarse con d.plaspy.com.

## Transporte y contexto de conexión

Las elecciones de transporte y conexión afectan cómo el rastreador llega a Plaspy, pero no cambian que los datos deben llegar al endpoint compartido de Plaspy en el puerto 8888. Ajustes de red como APN, datos de la SIM y firewalls son determinantes para asegurar una entrega confiable.

- El TK102 puede configurarse para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar su dirección de servidor a d.plaspy.com o directamente a 54.85.159.138.
- Debido a que Plaspy usa el mismo puerto para todos los equipos, las reglas de red pueden simplificarse permitiendo tráfico saliente al puerto 8888.
- Asegúrese de que el APN del dispositivo esté configurado correctamente para que el rastreador establezca una conexión de datos celular con Plaspy.
- En condiciones GSM deficientes, el rastreador puede conservar los datos de ubicación de forma local y subir los puntos almacenados cuando se restablezca la conectividad.

## Notas sobre compatibilidad del protocolo

- La familia TK102 es en términos generales compatible con plataformas de rastreo en red, y se sabe que este modelo funciona con Plaspy cuando está configurado para reportar al endpoint de la plataforma.
- Las diferencias de firmware entre unidades TK102 pueden cambiar el timing de los mensajes, las funciones soportadas y el formato de las respuestas en distintos idiomas.
- Revisiones de hardware o variantes regionales del firmware pueden mostrar leves diferencias en el comportamiento del protocolo que afectan funciones avanzadas o el reporte de eventos.
- La elección de transporte entre UDP y TCP suele ser configurable en el equipo y puede influir en la fiabilidad según el entorno de red.
- Los valores predeterminados del fabricante, como la configuración automática del APN, pueden facilitar la puesta en marcha pero deben validarse para el operador local.
- Siempre compare el comportamiento del equipo en la red con la documentación del fabricante para confirmar los modos de reporte esperados.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el rastreador y qué esperar de su protocolo ayuda a asegurar una configuración fluida y un funcionamiento confiable con Plaspy. Un entendimiento práctico reduce el tiempo de configuración y facilita la resolución de problemas cuando faltan reportes o son incompletos.

- Confirma que el equipo está apuntando al endpoint y puerto correctos de Plaspy para que los datos lleguen a la plataforma.
- Ayuda a diagnosticar problemas de conectividad relacionados con APN, servicio de la SIM o reglas de firewall que bloqueen el puerto 8888.
- Aclara los tipos de eventos esperados, como alertas del sensor de choque o avisos de fallback a GSM, para que las reglas y notificaciones en Plaspy puedan ajustarse.
- Facilita la interpretación de posiciones almacenadas frente a posiciones en vivo cuando el registro en tarjeta TF está activo y las subidas ocurren tras la reconexión.
- Permite una comunicación más eficiente con el soporte del fabricante al centrarse en el firmware y el comportamiento relacionado con el transporte.

## Por qué usar Plaspy con este protocolo

Usar el Winrich TK102 con Plaspy ofrece una manera práctica de obtener visibilidad de ubicación, monitoreo de eventos y reconstrucción de rutas históricas para vehículos y activos móviles. El endpoint compartido de Plaspy y la detección automática de protocolo reducen la carga de configuración y permiten que las organizaciones se concentren en ajustar alertas y flujos de trabajo en lugar de gestionar múltiples configuraciones de puertos.

To learn more about Plaspy and how it can receive and process reports from devices like the Winrich TK102 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time, so verify the latest device specific information and firmware notes with the manufacturer at http://www.winrichgroup.com/en/.
