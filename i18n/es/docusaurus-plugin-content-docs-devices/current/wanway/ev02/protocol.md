---
slug: /wanway/ev02/protocol
id: ev02-protocol
sidebar_label: Protocol
title: WanWay - EV02 Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo WanWay EV02 para uso con Plaspy, integración y solución de problemas
keywords:
  - Protocolo WanWay EV02
  - Protocolo GPS WanWay EV02
  - Protocolo de seguimiento WanWay EV02
  - Comunicación WanWay EV02
  - WanWay EV02 Plaspy
  - Protocolo EV02 Plaspy
  - Protocolo tracker WanWay
  - Compatibilidad EV02 con Plaspy
  - Protocolo rastreador GPS EV02
  - Protocolo gestión de flotas EV02
---

# WanWay - Protocolo EV02

Esta página describe el contexto público del protocolo para usar el rastreador GPS WanWay EV02 con la plataforma Plaspy. Explica el papel del protocolo de reporte del dispositivo para habilitar actualizaciones en tiempo real de ubicación, eventos y estado hacia Plaspy, sin revelar detalles privados o implementaciones restringidas por el fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el EV02 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello esta página se centra en orientaciones prácticas y no sensibles para integraciones y resolución de problemas.

## Resumen del protocolo

El EV02 comunica posición, telemetría y eventos de alarma a un servidor remoto usando su módem GSM interno y el protocolo de reporte implementado por el fabricante. Ese protocolo define cómo el dispositivo se identifica, reporta coordenadas GPS y registra eventos discretos como estado de ACC, alarmas por vibración y actividad de corte remoto.

- Permite al EV02 enviar actualizaciones de ubicación periódicas e informes de eventos a Plaspy para su visualización en mapas e historial.
- Transporta la identidad y el estado del dispositivo para que Plaspy asocie los mensajes con el activo correcto.
- Transmite eventos de seguridad y telemetría como detección de ACC, alertas por corte de cable, alarmas de vibración y acciones del inmovilizador.
- Soporta tanto transmisión en tiempo real como reportes periódicos según la configuración del equipo y las condiciones de la red.
- Funciona con el endpoint de ingestión de Plaspy para que los datos estén disponibles en paneles, alertas e informes sin selección manual de protocolo.

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un endpoint compartido para todos los rastreadores soportados y detecta automáticamente el protocolo cuando los dispositivos reportan a ese endpoint. En la mayoría de las implementaciones usted solo necesita configurar el rastreador para que apunte al endpoint de Plaspy; la plataforma se encarga de la identificación y el parseo del protocolo en el servidor.

- Los dispositivos deben configurarse para reportar al servidor de Plaspy en d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en un único puerto compartido para simplificar la configuración de los equipos compatibles.
- Cuando llega un mensaje EV02 correctamente dirigido a Plaspy, la plataforma identifica el dispositivo y aplica el parser y las reglas de procesamiento correspondientes.
- Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy si el EV02 está bien configurado para reportar al endpoint de Plaspy.
- Si los mensajes no aparecen, confirme la configuración de reporte del dispositivo, la conectividad de red y que el firmware del equipo soporta el reporte al endpoint especificado por Plaspy.

## Transporte y contexto de conexión

El EV02 puede usar UDP o TCP para entregar reportes según su firmware y configuración. Plaspy acepta conexiones de rastreadores por el mismo puerto independientemente del transporte, por lo que dispositivos configurados con UDP o TCP pueden reportar a Plaspy en ese puerto compartido.

- Los EV02 pueden configurarse para usar UDP o TCP en el puerto 8888.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos, manteniendo un requisito de configuración consistente.
- Los equipos pueden apuntar tanto al nombre DNS d.plaspy.com como a la dirección numérica 54.85.159.138 para el servidor Plaspy.
- Elija UDP cuando prefiera menor sobrecarga y una retransmisión más simple, o TCP cuando el firmware requiere entrega ordenada y mayor fiabilidad de conexión.
- Verifique que el firmware del EV02 soporte el transporte elegido y que el APN y la conectividad GSM del dispositivo funcionen correctamente.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades EV02 pueden cambiar los mensajes disponibles, los nombres de eventos o los intervalos de reporte; siempre verifique el comportamiento después de actualizar firmware.
- Revisiones de hardware u opciones de cableado para inmovilizador y corte remoto pueden afectar qué eventos se reportan a Plaspy.
- La elección entre UDP y TCP es configurable en muchas instalaciones EV02 y puede influir en la rapidez con la que Plaspy recibe mensajes bajo distintas condiciones de red.
- Algunas funciones avanzadas de telemetría requieren cableado o sensores externos presentes y habilitados en el EV02.
- Confirme qué comandos de reporte y tipos de eventos están soportados por el firmware EV02 instalado en sus dispositivos antes de depender de una función específica en producción.
- La documentación del fabricante es la fuente autorizada para detalles del protocolo específicos por firmware y para comandos que afecten el comportamiento del equipo.

## Por qué es importante comprender el protocolo

Tener claridad sobre el protocolo de comunicación del EV02 ayuda a asegurar reportes fiables a Plaspy, agilizar la resolución de problemas cuando faltan mensajes e interpretar correctamente eventos como activaciones del inmovilizador o alertas por manipulación.

- Facilita confirmar que el dispositivo apunta a d.plaspy.com o 54.85.159.138 y usa el transporte y puerto correctos.
- Ayuda a diagnosticar problemas de conectividad al separar fallas de red de errores de configuración del dispositivo o comportamiento del firmware.
- Aumenta la confianza de que la telemetría y las alarmas mostradas en Plaspy reflejan el cableado y la configuración de sensores previstos en el EV02.
- Permite tomar decisiones informadas sobre actualizaciones de firmware y cambios de configuración que puedan alterar la frecuencia o el formato de los mensajes.
- Soporta la asignación precisa de funciones del dispositivo, como detección de ACC, reporte de alarmas por vibración y corte remoto, dentro de las alertas y flujos de trabajo de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el WanWay EV02 con Plaspy ofrece a los operadores de flotas un rastreador compacto y orientado a funciones, integrado en una plataforma que centraliza ubicación, alertas de eventos y estado del vehículo. El tamaño reducido del EV02, su amplio rango de voltaje de operación y sus funciones antirrobo lo hacen apropiado para flotas mixtas e instalaciones discretas donde se requiere reporteo fiable a Plaspy.

El endpoint compartido de Plaspy y la detección automática de protocolo reducen la complejidad de configuración: apunte el EV02 a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando UDP o TCP y la plataforma ingestará los reportes y los mostrará en paneles, alertas e informes. Para conocer más sobre cómo Plaspy puede trabajar con dispositivos WanWay visite https://www.plaspy.com. Para los detalles más recientes del protocolo específico del dispositivo, notas de firmware y guía del fabricante, verifique la información en el sitio oficial de WanWay https://www.wanwaytech.net/.
