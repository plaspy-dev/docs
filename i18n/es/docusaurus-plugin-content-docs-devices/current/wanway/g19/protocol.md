---
slug: /wanway/g19/protocol
id: g19-protocol
sidebar_label: Protocol
title: WanWay - G19 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador WanWay G19 y su comunicación con Plaspy para rastreo y alertas
keywords:
  - protocolo WanWay G19
  - protocolo GPS WanWay G19
  - protocolo de comunicación WanWay G19
  - protocolo de rastreo WanWay G19
  - compatibilidad WanWay G19 Plaspy
  - protocolo rastreador GPS WanWay
  - comunicación rastreador G19
  - rastreo vehicular WanWay G19
  - gestión de flotas G19
  - protocolo de dispositivo Plaspy
---

# WanWay - G19 Protocolo

Esta página resume el contexto público del protocolo para usar el rastreador WanWay G19 con Plaspy. Se centra en cómo el dispositivo se comunica con el endpoint de Plaspy y qué aspectos del reporte del rastreador son relevantes para la integración. El contenido está dirigido a usuarios técnicos, integradores y administradores de flotas que necesiten comprender los conceptos básicos de conexión e informe sin exponer detalles sensibles de implementación.

El WanWay G19 es un rastreador compacto, resistente al agua con clasificación IP67 e incorpora hardware GSM y GPS diseñado para el rastreo de vehículos y activos. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que en la práctica puede haber ligeras diferencias entre unidades y con el tiempo.

## Resumen del protocolo

El protocolo de comunicación del G19 define cómo el rastreador se identifica, reporta ubicación y estado, y recibe comandos o actualizaciones de configuración cuando esto está soportado. Para la integración con Plaspy, la función pública del protocolo es entregar datos de posición y eventos utilizables a un endpoint central para que la plataforma pueda analizarlos, mostrarlos y actuar sobre ellos.

- Permite informes de posición periódicos y basados en eventos que Plaspy procesa para mapas e informes.
- Transporta identidad del dispositivo e información de estado necesaria para asociar mensajes entrantes con un rastreador registrado.
- Transmite alertas y eventos telemáticos como exceso de velocidad u otras alarmas de sensores para monitoreo accionable.
- Permite configuración y comandos remotos cuando el firmware del dispositivo y el fabricante habilitan el control desde servidor.
- Funciona sobre transportes comunes para que el rastreador pueda alcanzar Plaspy incluso en redes móviles con restricciones.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un endpoint de red compartido y determina automáticamente el protocolo del rastreador. En configuraciones típicas, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy recibe tráfico de rastreadores en un único puerto usado por todos los dispositivos soportados.
- Los dispositivos que reportan a Plaspy pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que la selección manual suele ser innecesaria.
- La configuración correcta del dispositivo para reportar a la dirección y puerto de Plaspy es el requisito principal para la detección automática.
- Si un dispositivo no parece reconocerse, verifique la configuración de reporte, el tipo de transporte y el comportamiento del firmware antes de cambiar los ajustes del servidor.

## Transporte y contexto de conexión

El G19 puede configurarse para usar transportes de red estándar para enviar datos de posición y eventos. Plaspy soporta los tipos de conexión más comunes, de modo que usted puede elegir el transporte que mejor se adapte al firmware del dispositivo y a las condiciones de red.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles, por lo que el mismo puerto se usa entre distintos modelos.
- Los rastreadores pueden enviarse al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Seleccionar UDP puede reducir la sobrecarga en redes con pérdida de paquetes, mientras que TCP puede emplearse cuando se prefiere entrega fiable y comportamiento de sesión por parte del dispositivo.
- Asegúrese de que el transporte elegido esté permitido por su operador móvil y sea consistente con la configuración de firmware del equipo.

## Notas de compatibilidad del protocolo

- El WanWay G19 se reporta como compatible con Plaspy, pero el comportamiento puede variar entre versiones de firmware y lotes de hardware.
- Actualizaciones de firmware del fabricante pueden cambiar los formatos de mensajes, las funciones disponibles o la forma en que se maneja la configuración remota.
- Algunas funcionalidades, como comandos remotos o alertas avanzadas, pueden depender de un firmware específico del G19 o de configuraciones opcionales.
- La selección de transporte (UDP vs TCP) puede afectar las características de entrega y debe coincidir con la configuración del dispositivo.
- Siempre valide que el dispositivo reporte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 después de cualquier cambio de firmware o configuración.
- Para preguntas específicas sobre sensores, entradas de alimentación o instalación, consulte la documentación oficial de WanWay.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el G19 ayuda a garantizar un rastreo fiable, acelerar la resolución de problemas y prever un comportamiento predecible a largo plazo en Plaspy. Conocer los límites del reporte del dispositivo y los puntos comunes de fallo reduce el tiempo de inactividad y agiliza la integración.

- Confirma el destino y el transporte correctos para que los mensajes lleguen al endpoint de Plaspy.
- Ayuda a diagnosticar situaciones en las que un dispositivo se ve en la red pero Plaspy no lo parsea.
- Orienta las decisiones y pruebas de actualización de firmware para evitar cambios inesperados en el reporte.
- Facilita la elección del lugar de instalación y del cableado de alimentación para mantener comunicaciones consistentes.
- Permite planificar mejor despliegues a escala de flota anticipando el comportamiento del dispositivo en diferentes condiciones de red.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el WanWay G19 proporciona a las organizaciones una plataforma central para agregar ubicación, alertas y telemática básica desde rastreadores compactos y resistentes al agua. La detección automática de protocolos de Plaspy y su modelo de endpoint unificado reducen la complejidad de configuración y permiten gestionar flotas mixtas con ajustes de red consistentes.

Para saber más sobre Plaspy y cómo puede gestionar rastreadores como el WanWay G19 visite https://www.plaspy.com. Para las especificaciones más recientes del dispositivo, notas de firmware y detalles del protocolo del fabricante, verifique la información en el sitio oficial de WanWay https://www.wanwaytech.net/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante al planificar despliegues o actualizaciones.
