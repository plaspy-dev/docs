---
slug: /thinkrace/at15/protocol
id: at15-protocol
sidebar_label: Protocol
title: ThinkRace - AT15 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del tracker ThinkRace AT15 y cómo se comunica con Plaspy para reportes y configuración
keywords:
  - protocolo ThinkRace AT15
  - protocolo GPS ThinkRace AT15
  - protocolo ThinkRace AT15 para Plaspy
  - protocolo de comunicación ThinkRace AT15
  - protocolo de rastreo ThinkRace AT15
  - protocolo para rastreador de equipaje
  - compatibilidad de dispositivos Plaspy
  - integración de protocolo de rastreador GPS
  - reporte de dispositivo a Plaspy
  - transporte y conexión del rastreador
---

# ThinkRace - Protocolo AT15

Esta página documenta el contexto público del protocolo para usar el rastreador ThinkRace AT15 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy para el reporte de ubicación y la configuración del equipo en términos generales, sin exponer detalles privados de implementación. El AT15 es un rastreador compacto para equipaje con seguimiento en tiempo real e historial de ubicaciones; esta guía explica cómo ese tipo de dispositivo suele interactuar con un punto de enlace de gestión de flotas como Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento del AT15 puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante; por eso los intervalos de reporte y el contenido de los mensajes dependen del firmware y de cómo se haya configurado el equipo. Plaspy acepta conexiones en el mismo endpoint y puerto para todos los dispositivos y funcionará con unidades AT15 configuradas para reportar al endpoint de Plaspy.

## Descripción general del protocolo

El protocolo de comunicación del AT15 define cómo el rastreador se identifica, envía telemetría y recibe actualizaciones de configuración cuando están disponibles. Para orientación pública, el énfasis está en lo que el protocolo permite en lugar de en el formato interno de paquetes o tramas propietarias. Comprender el papel del protocolo ayuda a garantizar que el dispositivo esté configurado para alcanzar el endpoint de Plaspy de forma fiable.

- Permite que el AT15 envíe actualizaciones de ubicación y telemetría básica a un servidor remoto para seguimiento e historial.
- Transporta información de identificación que permite a Plaspy asociar los reportes entrantes con el registro correcto del dispositivo.
- Proporciona un canal para configuración remota opcional o comandos a distancia si el firmware del rastreador lo soporta.
- Soporta transporte sobre sockets de red estándar, de modo que el dispositivo pueda reportar a un endpoint alojado como Plaspy.
- Influye en la frecuencia de los reportes y en el formato de los datos de posición y sensores para su ingestión.

## Cómo Plaspy detecta el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint de la plataforma. Generalmente usted no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el AT15 apunte al servidor de Plaspy y utilice un transporte compatible. La detección se basa en observar las conexiones entrantes y los datos que envía el rastreador, en lugar de requerir configuración manual.

- Plaspy acepta reportes de dispositivos en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138.
- Plaspy escucha en un único puerto compartido para todos los dispositivos compatibles para simplificar la configuración.
- El puerto usado por Plaspy para el reporte de dispositivos es 8888, y todos los dispositivos en Plaspy usan el mismo puerto.
- El AT15 puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138 según la preferencia del usuario o la configuración de la red.
- Cuando un AT15 envía sus primeros reportes al endpoint de Plaspy, la plataforma asocia el dispositivo y comienza la detección de protocolo automáticamente.

## Transporte y contexto de conexión

El transporte de la conexión y el direccionamiento son importantes para garantizar que el AT15 llegue a Plaspy de forma confiable. El AT15 puede configurarse para usar UDP o TCP según la configuración del dispositivo y las capacidades del firmware, y Plaspy soporta ambos transportes en el puerto estándar. Tenga en cuenta que los entornos de red, el comportamiento de NAT y las políticas de los operadores móviles pueden afectar la facilidad con la que un dispositivo mantiene la conexión con el servidor.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del usuario.
- El servidor objetivo para los reportes a Plaspy es d.plaspy.com o la IP equivalente 54.85.159.138.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos para simplificar la configuración y reglas de firewall.
- Elija UDP para escenarios de reporte liviano o TCP si el rastreador y la red se benefician de una entrega orientada a conexión, cuando esté disponible.
- Verifique que el tráfico saliente hacia d.plaspy.com y el puerto 8888 esté permitido en la red que usa el dispositivo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el formato de los reportes, por lo que el comportamiento observado en una unidad AT15 puede diferir en otra si el firmware es distinto.
- Las revisiones de hardware y las variantes regionales pueden afectar los transportes soportados y las opciones de configuración.
- Las configuraciones del lado del fabricante y las funciones en la nube pueden introducir diferencias en cómo se maneja la configuración remota.
- Seleccionar UDP frente a TCP en el dispositivo influirá en la confiabilidad y en cómo los reportes atraviesan las redes móviles.
- Confirme que el APN y la configuración de red del dispositivo sean compatibles con el envío de datos al endpoint de Plaspy.
- Si tiene dudas, compare el comportamiento del dispositivo con la documentación oficial de ThinkRace para la revisión de firmware específica del AT15.

## Por qué es importante entender el protocolo

Conocer los conceptos básicos del protocolo de comunicación del AT15 ayuda a asegurar una configuración exitosa, reportes fiables a Plaspy y una resolución más ágil de problemas cuando surjan incidencias de conectividad. Un entendimiento práctico reduce el tiempo de puesta en marcha y evita errores comunes de configuración.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy para que los reportes lleguen a la plataforma.
- Facilita el diagnóstico de problemas de conexión causados por restricciones de red, problemas de APN o la selección de transporte.
- Aclara qué esperar de la telemetría del dispositivo para que Plaspy asigne los campos entrantes al modelo de datos correcto.
- Apoya la planificación de intervalos de reporte y el impacto en batería o gestión de energía sobre la visibilidad del activo.
- Ayuda a determinar si es necesario actualizar el firmware o reemplazar el dispositivo para obtener las funcionalidades deseadas.

## Por qué usar Plaspy con este protocolo

Usar el ThinkRace AT15 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar datos de ubicación e historial de pequeños activos en una plataforma única. Para casos de uso en equipaje y activos pequeños, Plaspy puede recibir actualizaciones de ubicación desde dispositivos AT15 y presentarlas junto con otros activos rastreados para mejorar la visibilidad operativa y el análisis histórico.

Si desea obtener más información sobre cómo Plaspy maneja el reporte de dispositivos, visite https://www.plaspy.com para explorar características de la plataforma y opciones de despliegue. Para detalles más actuales y específicos del dispositivo, notas de firmware y orientación de implementación para el AT15, verifique la información con el fabricante en https://www.thinkrace.com/ ya que el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
