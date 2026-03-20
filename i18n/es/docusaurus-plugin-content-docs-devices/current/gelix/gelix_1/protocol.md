---
slug: /gelix/gelix_1/protocol
id: gelix_1-protocol
sidebar_label: Protocol
title: Gelix - Gelix 1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el registrador GPS Gelix 1 y guía para su configuración e integración con Plaspy
keywords:
  - protocolo Gelix Gelix 1
  - protocolo GPS Gelix 1
  - compatibilidad rastreador Gelix Plaspy
  - protocolo de seguimiento Gelix
  - registrador GPS Gelix
  - compatibilidad seguimiento de flotas Gelix
  - protocolo de comunicación Gelix 1
  - protocolo de dispositivo Plaspy
  - monitoreo de flotas Gelix
  - integración rastreador Gelix
---

# Gelix - Protocolo Gelix 1

Esta página documenta el contexto público del protocolo para usar el registrador GPS Gelix 1 con Plaspy. Resume cómo se comunica el dispositivo y cómo Plaspy recibe los datos, enfocándose en información de conexión y compatibilidad a alto nivel en lugar de detalles propietarios o internos específicos de firmware. Úselo como referencia al planear la integración, el despliegue o la resolución de problemas con Plaspy.

El Gelix 1 es principalmente un registrador GPS de monitoreo pasivo que almacena datos de navegación y eventos durante el movimiento del vehículo o cuando se activa por un evento externo. La recuperación de datos puede realizarse automáticamente mediante un punto de acceso radio local como Bluetooth o RF cuando el vehículo regresa al taller, o de forma manual por cable, IrDA, Bluetooth con PDA, o retirando la unidad para transferirla a un PC. Plaspy utiliza configuraciones de conexión compartidas entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

A grandes rasgos, el protocolo del dispositivo describe cómo el Gelix 1 se identifica, reporta datos de navegación y eventos grabados o en vivo, y comunica su estado a un servidor remoto. El protocolo es el acuerdo entre dispositivo y servidor que permite que los puntos GPS y los registros de eventos sean aprovechables por Plaspy para almacenamiento y análisis.

- Permite que el Gelix 1 presente datos de navegación y eventos registrados a un endpoint remoto para su recuperación y procesamiento
- Define cómo el dispositivo identifica su ID de unidad y el estado básico para que el servidor asocie los registros con el vehículo correcto
- Regula las cargas periódicas o por evento para que las rutas y eventos almacenados lleguen a Plaspy de forma confiable
- Proporciona el marco para respuestas o acuses de recibo a comandos remotos cuando el dispositivo lo soporta
- Permite a Plaspy interpretar los mensajes entrantes del dispositivo en registros de posición, marca temporal y eventos para informes e historial

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint público compartido y usa esa conexión para determinar qué protocolo usa cada rastreador. Debido a la detección automática de protocolos de Plaspy, los usuarios normalmente no necesitan especificar un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy es 8888 y todos los dispositivos en Plaspy utilizan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según la capacidad y ajustes del equipo
- Cuando un Gelix 1 configurado correctamente reporta al endpoint de Plaspy, la plataforma detecta el protocolo automáticamente
- La selección manual de protocolo dentro de Plaspy rara vez es necesaria si el dispositivo apunta al endpoint correcto y usa el transporte soportado

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el Gelix 1 alcanza el servidor de Plaspy y las opciones de transporte típicamente disponibles. Esta sección describe elecciones a nivel de red sin detallar cargas propietarias.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 dependiendo del firmware del Gelix 1 y la configuración local
- Los dispositivos pueden apuntar al servidor Plaspy por nombre de dominio d.plaspy.com o directamente a la IP 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de red y firewall para flotas
- Las opciones de recuperación local, como Bluetooth o RF para recolección en depósito, son independientes del transporte de subida remoto
- Confirme el modo de transporte del dispositivo (UDP o TCP) en los ajustes del Gelix 1 si las cargas no aparecen en Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar el comportamiento del protocolo o las funciones soportadas; verifique el nivel de firmware al evaluar la compatibilidad
- Las decisiones de implementación del fabricante pueden variar entre lotes de producción, lo que puede afectar campos opcionales o el manejo de eventos
- La selección de transporte (UDP frente a TCP) debe coincidir con la configuración del dispositivo y con las reglas de red o firewall en su entorno
- Los modos de recuperación en depósito o local no reemplazan la configuración correcta de subida remota si desea informes automáticos a Plaspy
- Valide los identificadores del dispositivo y los intervalos de reporte para asegurar que los registros se atribuyan correctamente en Plaspy
- En caso de duda, consulte la documentación de Gelix para notas específicas de firmware y cambios de versión

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación y el contexto de conexión ayuda a garantizar la recolección confiable de datos, agilizar la resolución de problemas y obtener un comportamiento predecible a largo plazo en despliegues de flotas. Saber cómo el Gelix 1 reporta y cómo Plaspy acepta esos datos reduce el tiempo de configuración y las sorpresas operativas.

- Acelera la puesta en marcha al confirmar que el endpoint, el transporte y el modo de reporte son correctos
- Ayuda a aislar problemas entre métodos de recuperación local y cargas remotas a Plaspy
- Apoya decisiones informadas sobre actualizaciones de firmware al destacar cambios de protocolo que afectan la compatibilidad con el servidor
- Facilita la resolución cuando faltan registros o las marcas temporales y eventos parecen inconsistentes
- Permite planear reglas de red y firewall ya que Plaspy usa un único puerto estandarizado para todos los dispositivos

## Por qué usar Plaspy con este protocolo

Usar dispositivos Gelix 1 con Plaspy ofrece visibilidad centralizada de la navegación y los eventos registrados para flotas que dependen del monitoreo pasivo y la recuperación periódica de datos. La detección automática de protocolos de Plaspy y el uso de un único puerto facilitan la recopilación de datos de dispositivos heterogéneos a la vez que mantienen sencilla la configuración de red.

Si administra vehículos que regresan a un depósito central para recolección automática por radio o necesita opciones de recuperación manual mediante PDA o PC, integrar los dispositivos Gelix 1 con Plaspy proporciona una forma práctica de consolidar rutas históricas y registros de eventos en una plataforma única. Learn more about Plaspy at https://www.plaspy.com and verify the latest Gelix device specific protocol and firmware details on the manufacturer site http://www.gelix.com/. Note that protocol support, firmware behavior, and device implementation details can change over time so confirming current documentation with the manufacturer is recommended.
