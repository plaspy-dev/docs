---
slug: /sinotrack/st_905l/protocol
id: st_905l-protocol
sidebar_label: Protocol
title: SinoTrack - ST-905L Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para conectar el SinoTrack ST-905L a Plaspy para seguimiento y telemetría en tiempo real
keywords:
  - Protocolo SinoTrack ST 905L
  - Protocolo GPS SinoTrack ST 905L
  - Compatibilidad ST 905L con Plaspy
  - Protocolo de comunicación ST 905L
  - Protocolo de rastreo ST 905L
  - Compatibilidad de dispositivos Plaspy
  - Integración de rastreadores con Plaspy
  - Guía de protocolo para rastreadores GPS
  - Protocolo de rastreo de vehículos
  - Protocolo para rastreadores de activos
---

# SinoTrack - Protocolo ST-905L

Esta página describe el contexto público del protocolo para usar el rastreador SinoTrack ST-905L con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, cómo apuntarlo al servicio de ingestión de Plaspy y qué esperar durante la configuración y verificación. El contenido está dirigido a integradores técnicos y administradores de flota que preparan dispositivos para el seguimiento en tiempo real y la ingestión de telemetría.

El ST-905L es un rastreador para activos y vehículos, resistente y a prueba de agua, con conectividad LTE Cat-1 y 2G GSM y un receptor GNSS de alta sensibilidad u-blox. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto de los paquetes y el soporte de comandos pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; confirme el comportamiento del firmware con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del rastreador es el conjunto de reglas y la semántica de mensajes que el ST-905L emplea para reportar ubicación, telemetría y estado a un servidor remoto. Para la integración con Plaspy, los detalles públicos importantes son cómo el dispositivo direcciona el servidor, el transporte que utiliza y la capacidad de configurarlo para enviar actualizaciones periódicas de posición, telemetría y alertas que Plaspy pueda ingerir y mostrar.

- Permite que el ST-905L informe posición GNSS, estado de batería y alimentación y telemetría básica a un servidor remoto.
- Identifica el dispositivo ante el servidor para que Plaspy asocie los reportes entrantes con el registro correcto de vehículo o activo.
- Transporta actualizaciones periódicas de posición y mensajes de eventos (por ejemplo movimiento o pérdida de energía) que se traducen en paneles, eventos de geocerca e historiales en Plaspy.
- Soporta configuración remota vía SMS para APN y ajustes de servidor, permitiendo que los instaladores reorienten el dispositivo a una plataforma de terceros como Plaspy.
- Permite el enlace celular por LTE Cat-1 o 2G para entregar información de ubicación y estado de forma oportuna.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico entrante en un endpoint de ingestión compartido y determina automáticamente el protocolo del rastreador usado por los dispositivos que reportan. Cuando un ST-905L está configurado para enviar datos a Plaspy, la plataforma empareja los mensajes entrantes con los registros de dispositivo y convierte los campos reportados en objetos de telemetría y posición de Plaspy sin que normalmente sea necesaria la selección manual del protocolo.

- Plaspy expone un único endpoint de ingestión para que los dispositivos lo apunten, por lo que los usuarios configuran los rastreadores hacia d.plaspy.com o la IP de la plataforma directamente.
- El endpoint de ingestión de Plaspy acepta conexiones entrantes en el puerto 8888 y la plataforma detecta automáticamente el protocolo del rastreador.
- Plaspy soporta tanto reportes TCP como UDP desde dispositivos configurados para usar el mismo puerto.
- Cuando el ST-905L está correctamente configurado para reportar a Plaspy, por lo general no es necesario seleccionar manualmente un protocolo dentro de la plataforma.
- Una identificación adecuada del dispositivo, como IMEI o ID del equipo en los mensajes reportados, ayuda a Plaspy a asociar los reportes con la cuenta y el registro de dispositivo correctos.

## Contexto de transporte y conexión

Los ajustes de conexión determinan cómo el ST-905L alcanza a Plaspy y cómo la plataforma recibe el flujo de datos. El ST-905L permite apuntar a una dirección de servidor personalizada y puede configurarse por SMS para cambiar el APN y el destino del servidor. En la práctica, los instaladores establecerán el host del servidor y el tipo de transporte para que coincidan con la configuración de ingestión de Plaspy.

- Los dispositivos pueden configurarse para enviar datos usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración de campo.
- Los rastreadores pueden apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP de ingestión de Plaspy 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que los instaladores usan el mismo puerto independientemente de la marca o modelo.
- Elija UDP o TCP en el dispositivo según la fiabilidad de la red local y las opciones de configuración vía SMS del equipo.
- Asegúrese de que el dispositivo tenga una SIM con datos y los ajustes APN correctos para que pueda alcanzar el endpoint de Plaspy a través de las redes celulares.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware del ST-905L pueden modificar qué campos opcionales de telemetría o comandos están soportados.
- Algunas variantes pueden exponer sensores adicionales o E/S que generan telemetría extra; confirme qué funciones soporta su unidad específica antes de depender de ellas en Plaspy.
- Las configuraciones por defecto del fabricante suelen apuntar a la nube del proveedor; utilice el aprovisionamiento por SMS para actualizar el APN y la dirección del servidor a Plaspy cuando esté soportado.
- La selección de transporte entre UDP y TCP es configurable en el dispositivo y puede afectar el comportamiento de entrega en determinadas condiciones de red.
- Valide siempre un pequeño número de dispositivos en su entorno de despliegue antes de escalar, para asegurar que las bandas celulares regionales y las características del firmware satisfacen sus necesidades.
- Consulte la documentación de SinoTrack para comandos SMS específicos del modelo y la sintaxis de configuración al reprovisionar los dispositivos.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el ST-905L ayuda a asegurar una integración fluida con Plaspy, reduce el tiempo de configuración y mejora la confiabilidad y solución de problemas a largo plazo. Tener clara la información de comunicación permite al equipo verificar la accesibilidad de la red, configurar correctamente el APN y el servidor, e interpretar el comportamiento del dispositivo cuando ocurren incidencias.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy para que los datos lleguen donde se esperan.
- Facilita el diagnóstico de problemas de conectividad al revisar la selección de transporte, el APN y la configuración del host del servidor.
- Hace más sencillo verificar que los identificadores del dispositivo en los reportes coinciden con los registros de Plaspy para un historial y alertas precisos.
- Orienta las decisiones sobre intervalos de reporte, perfiles de energía y planes celulares para cumplir los requisitos operativos.
- Reduce el tiempo dedicado al soporte al proporcionar una lista de verificación concisa para los técnicos de campo durante la activación.

## Por qué usar Plaspy con este protocolo

Combinar el SinoTrack ST-905L con Plaspy ofrece a las organizaciones una forma práctica de convertir los reportes de los dispositivos en inteligencia útil para flotas y activos. El diseño robusto del ST-905L, su amplia autonomía y sus capacidades de enlace celular lo hacen adecuado para el rastreo de vehículos y activos de alto valor, mientras que Plaspy ingiere esos reportes para ofrecer visibilidad de ubicación, geocercas, alertas e informes históricos.

Para obtener más información sobre cómo Plaspy funciona con dispositivos como el ST-905L y ver las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, sintaxis de comandos SMS y comportamiento de firmware más actuales, verifique la información con el fabricante en https://www.sinotrackgps.com/ ya que la implementación del dispositivo y el firmware pueden cambiar con el tiempo.
