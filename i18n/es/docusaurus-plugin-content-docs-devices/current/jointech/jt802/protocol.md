---
slug: /jointech/jt802/protocol
id: jt802-protocol
sidebar_label: Protocol
title: Jointech - JT802 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto del protocolo público y compatibilidad con Plaspy para la cerradura esclava de válvula Jointech JT802
keywords:
  - Jointech JT802
  - Protocolo JT802
  - Protocolo GPS Jointech JT802
  - Protocolo de comunicación JT802
  - Protocolo de rastreo JT802
  - Protocolo de cierre de válvula Jointech
  - Compatibilidad con Plaspy
  - Rastreo de flotas
  - Monitoreo de válvulas
  - Telemetría de camiones cisterna
---

# Jointech - Protocolo JT802

Esta página describe el contexto público del protocolo para integrar la cerradura esclava de válvula Jointech JT802 con Plaspy. Se enfoca en cómo el equipo comunica el estado operativo, eventos de alarma y la información temporal hacia una arquitectura de telemetría compatible con Plaspy, sin exponer detalles propietarios o sensibles de implementación. El JT802 está diseñado para operar junto con cerraduras maestras Jointech y terminales portátiles intrínsecamente seguros; sus reportes de eventos y estado complementan los datos de los rastreadores GPS dentro de los flujos de trabajo de gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. En la práctica, esto significa que la configuración y el comportamiento pueden variar según la versión de firmware del JT802, la revisión de hardware y la implementación del fabricante, por lo que el tiempo exacto y el contenido de los mensajes pueden diferir entre modelos y versiones de software. Para detalles de conexión, Plaspy usa d.plaspy.com y la IP pública 54.85.159.138 en el puerto 8888, y acepta UDP o TCP en ese mismo puerto.

## Resumen del protocolo

El protocolo de comunicación JT802 permite al dispositivo reportar el estado del cierre de válvula, eventos de alarma y el contexto temporal que se puede correlacionar con los datos del rastreador GPS y la telemetría de la cerradura maestra. La función del protocolo es exponer de forma fiable los cambios de estado y los eventos auditables a plataformas en la nube como Plaspy, de modo que los operadores puedan supervisar la actividad de las válvulas, responder a alarmas y revisar eventos históricos junto con la información de posición.

- Transmite el estado del dispositivo y notificaciones de eventos que Plaspy puede ingerir y mostrar en dashboards y registros.
- Asocia eventos de la cerradura de válvula con información temporal y el contexto de la cerradura maestra para fines de auditoría.
- Permite el reporte de alarmas y estados para que alertas automatizadas y flujos operativos en Plaspy se disparen cuando corresponda.
- Soporta flujos de control remoto cuando se utiliza junto con una cerradura maestra Jointech compatible y las integraciones de plataforma adecuadas.
- Funciona con flujos de apertura sin conexión basados en Bluetooth, de modo que las operaciones de campo se reconcilian con el historial de eventos sincronizado a la nube.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint compartido y determina automáticamente el protocolo del rastreador utilizado por los equipos que reportan. Cuando el JT802 y su cerradura maestra emparejada están configurados para enviar eventos a Plaspy, la plataforma detectará y mapeará los mensajes entrantes para que los usuarios no necesiten seleccionar el protocolo manualmente en la mayoría de los casos.

- Plaspy escucha en d.plaspy.com y 54.85.159.138 para recibir los reportes de los dispositivos.
- El puerto receptor común para todos los dispositivos en Plaspy es 8888.
- Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888 y serán detectados por Plaspy cuando apunten correctamente al endpoint de la plataforma.
- La selección manual de protocolo dentro de Plaspy generalmente no es necesaria si el dispositivo reporta al endpoint y puerto correctos.
- La detección se centra en identificar de forma segura los tipos de mensaje y mapear los eventos de la válvula en la telemetría de Plaspy sin exponer detalles propietarios del parseo.

## Transporte y contexto de conexión

El contexto de conexión es importante al configurar los dispositivos JT802 para reportar a Plaspy. El JT802 actúa como un dispositivo esclavo de válvula en un sistema que puede reenviar datos de eventos y estado a la nube; la manera en que esos datos llegan a Plaspy depende de la cerradura maestra y de la ruta de red en su despliegue.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según los requisitos de hardware y red.
- Plaspy acepta reportes enviados a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración de la flota y las reglas de firewall.
- Elija el modo de transporte (UDP o TCP) que coincida con la configuración de su cerradura maestra y las expectativas de fiabilidad de la red.
- Asegúrese de que el enrutamiento de red y los firewalls permitan tráfico saliente desde los sistemas del vehículo hacia el endpoint de Plaspy en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- La compatibilidad puede variar entre versiones de firmware y revisiones de hardware del JT802; confirme la versión del firmware al validar el comportamiento.
- Los detalles de implementación del fabricante sobre cómo se empaquetan y reenvían los eventos pueden diferir según el emparejamiento con la cerradura maestra.
- La selección del transporte (UDP vs TCP) puede afectar las características de entrega de mensajes; elija el transporte adecuado para su red y necesidades operativas.
- Los flujos de apertura sin conexión por Bluetooth se gestionan localmente en los terminales portátiles y se reconcilian con Plaspy cuando hay conectividad disponible.
- Siempre valide la compatibilidad y los pasos de configuración contra la documentación oficial de Jointech para su firmware JT802 y el modelo de cerradura maestra específico.
- Plaspy detecta automáticamente el protocolo entrante, pero se requiere la configuración correcta del endpoint y puerto en el lado del dispositivo para una integración exitosa.

## Por qué es importante entender el protocolo

Comprender cómo comunica el JT802 ayuda a los ingenieros de flota y a los operadores a garantizar informes fiables, correlación precisa de eventos y un comportamiento predecible en Plaspy. Conocer la relación entre el dispositivo esclavo de válvula, la cerradura maestra y la plataforma facilita la resolución de problemas y alinea mejor los procesos operativos.

- Garantiza la configuración correcta del endpoint y puerto para que los eventos lleguen a Plaspy sin demora.
- Ayuda a determinar si UDP o TCP es el transporte apropiado para su despliegue y condiciones de red.
- Clarifica cómo las revisiones de firmware y hardware pueden cambiar el contenido o la temporización de los eventos y cuándo actualizar la configuración de los dispositivos.
- Facilita la correlación de eventos de válvula con la posición del rastreador GPS y otra telemetría de la flota para un análisis de incidentes más preciso.
- Apoya la planificación de la reconciliación de aperturas sin conexión y la integridad de la trazabilidad en Plaspy.

## Por qué usar Plaspy con este protocolo

Combinar el Jointech JT802 con Plaspy brinda a los operadores de cisternas una vista unificada del control de acceso a válvulas, eventos de alarma y el historial de rutas junto con las señales GPS del vehículo y otra telemetría. Esta visibilidad consolidada respalda flujos de trabajo antirobo, reportes de cumplimiento y respuestas operativas más rápidas al integrar los eventos de válvula dentro de la misma capa de telemetría utilizada para el rastreo y la gestión de flotas.

Para conocer más sobre las capacidades de la plataforma y cómo Plaspy puede integrar los flujos de eventos del JT802 con los datos de rastreadores GPS, visite https://www.plaspy.com. Verifique el soporte actual del protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo con el fabricante en https://www.jointcontrols.com/ ya que estos elementos pueden cambiar con el tiempo.
