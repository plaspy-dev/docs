---
slug: /globalsat/tr_300/protocol
id: tr_300-protocol
sidebar_label: Protocol
title: GlobalSat - TR-300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador GlobalSat TR 300 con Plaspy y habilitar monitoreo remoto confiable
keywords:
  - protocolo GlobalSat TR 300
  - protocolo GPS GlobalSat TR 300
  - protocolo de rastreo TR 300
  - protocolo rastreador GlobalSat
  - compatibilidad TR 300 Plaspy
  - protocolo de dispositivo Plaspy
  - comunicación rastreador GPS
  - integración rastreador personal
  - configuración TR 300
  - protocolo de rastreo en tiempo real
---

# GlobalSat - Protocolo TR-300

Esta página describe el contexto público del protocolo para usar el rastreador personal GlobalSat TR-300 con Plaspy. Explica, en términos generales, cómo se comunica el equipo, qué puntos de conexión utiliza Plaspy y cómo las consideraciones del protocolo afectan la configuración y la operación, sin revelar detalles privados o sensibles de implementación.

El TR-300 es un rastreador personal 3G compacto diseñado para monitoreo de seguridad y comunicación bidireccional; admite configuración remota y ubicación en tiempo real. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público no sensible y en la orientación práctica de compatibilidad.

## Descripción general del protocolo

El TR-300 envía información de ubicación, estado y alertas a un servidor remoto mediante su protocolo de reporte. Ese protocolo define cómo el dispositivo se identifica, transmite datos de posición y eventos, y admite comandos remotos que el sistema de monitoreo puede usar para configuración o alertas.

- El protocolo transporta telemetría esencial como coordenadas GPS, marcas de tiempo, estado de batería y señal, así como eventos SOS para que Plaspy los procese.
- Los campos de identificación en los reportes permiten a Plaspy asociar los mensajes con el registro correcto del dispositivo TR-300.
- El protocolo habilita la configuración remota y el reporte periódico para que el dispositivo pueda gestionarse desde una plataforma de monitoreo.
- Los intervalos de reporte y los disparadores de eventos determinan con qué frecuencia Plaspy recibe actualizaciones del TR-300.
- El protocolo funciona junto con la selección del transporte para que los reportes se entreguen de forma confiable a Plaspy y permitan el monitoreo en tiempo real.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y para asociar automáticamente los mensajes entrantes con el manejador adecuado. Cuando un TR-300 se configura para reportar a Plaspy, la plataforma identifica el tipo de dispositivo a partir de las características de la conexión y de la carga útil, por lo que a menudo no es necesario seleccionar el protocolo manualmente.

- Plaspy escucha en un único endpoint compartido para reportes de dispositivos y utiliza el tráfico entrante para determinar el tipo de rastreador.
- Si el TR-300 apunta al servidor de Plaspy y envía sus reportes estándar, Plaspy detectará automáticamente el protocolo del rastreador.
- Usted normalmente no necesita elegir una opción de protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar a Plaspy.
- La identificación correcta del dispositivo depende de que el equipo envíe sus campos habituales de identificación y cumpla con el comportamiento de firmware al reportar a un servidor.
- Para solucionar problemas, verifique que el dispositivo esté configurado para reportar al endpoint de Plaspy y que cualquier operador o firewall permita el tráfico saliente del dispositivo.

## Transporte y contexto de conexión

El TR-300 puede enviar reportes a través de redes de datos por paquete hacia un endpoint de Plaspy. Plaspy ofrece una dirección de servidor pública y escucha en un solo puerto para todos los dispositivos compatibles; el TR-300 puede configurarse para usar distintos protocolos de transporte según su firmware y ajustes.

- El dominio del servidor Plaspy es d.plaspy.com para configuración basada en DNS.
- La IP del servidor Plaspy es 54.85.159.138 y puede usarse si DNS no está disponible.
- El puerto que usa Plaspy para reportes de dispositivos es 8888; todos los dispositivos en Plaspy utilizan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración del operador.
- Asegúrese de que el APN y el plan de datos del dispositivo permitan conexiones salientes hacia el endpoint de Plaspy y que cualquier traducción de red preserve el transporte saliente del dispositivo.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar cómo el TR-300 codifica identificadores o qué modos de reporte están disponibles, por lo que el comportamiento puede variar entre versiones de firmware.
- Las revisiones de hardware y las variantes regionales a veces modifican el transporte soportado o funciones disponibles, como voz bidireccional o campos de alerta específicos.
- Algunas unidades TR-300 admiten configuración remota vía GPRS o SMS; cuando use reportes por IP, verifique que el dispositivo esté apuntando al endpoint de Plaspy.
- Elegir UDP frente a TCP puede afectar las características de entrega; seleccione el transporte que el firmware del dispositivo soporte y que funcione mejor en su red.
- Valide la compatibilidad confirmando que el dispositivo pueda establecer una sesión con d.plaspy.com o con 54.85.159.138 en el puerto compartido.
- Consulte siempre las notas de lanzamiento del fabricante para cambios de firmware o funciones que puedan afectar el comportamiento de los reportes.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del TR-300 ayuda a garantizar una configuración confiable, acelerar la resolución de problemas y obtener resultados de monitoreo consistentes en Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer el contexto general de comunicación reduce errores de configuración y agiliza la solución de problemas de conectividad.

- Ajustes correctos de transporte y servidor evitan fallas comunes de conectividad durante la puesta en marcha.
- Saber qué eventos reporta el dispositivo facilita la configuración de alertas y geocercas en Plaspy.
- La conciencia de diferencias de firmware y hardware reduce el tiempo dedicado a depurar telemetría inconsistente.
- Entender los intervalos de reporte y los modos de ahorro de energía ayuda a equilibrar la frecuencia de actualizaciones con la duración de la batería.
- Tener expectativas claras sobre la comunicación bidireccional y los reportes SOS contribuye a que los flujos de trabajo de emergencia funcionen según lo previsto.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-300 con Plaspy ofrece una forma práctica de centralizar posición, estado y alertas de emergencia de rastreadores personales en una única plataforma de monitoreo. La detección automática de protocolos de Plaspy y su enfoque de endpoint compartido facilitan recibir reportes del TR-300 una vez que el dispositivo esté apuntando al servidor de Plaspy.

Si necesita más información sobre cómo Plaspy gestiona integraciones de dispositivos, o para confirmar el comportamiento específico en su despliegue, visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y orientación de implementación consulte al fabricante en https://www.globalsat.com.tw/ ya que el comportamiento del dispositivo y las funciones de firmware pueden cambiar con el tiempo.
