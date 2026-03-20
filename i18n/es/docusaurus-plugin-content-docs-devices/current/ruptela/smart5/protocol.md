---
slug: /ruptela/smart5/protocol
id: smart5-protocol
sidebar_label: Protocol
title: Ruptela - Smart5 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Ruptela Smart5 y cómo se comunica con Plaspy para rastreo de flotas y telemetría
keywords:
  - protocolo Ruptela Smart5
  - Ruptela Smart5 GPS
  - compatibilidad Smart5 Plaspy
  - comunicación Ruptela Smart5
  - protocolo de rastreo Smart5
  - compatibilidad de dispositivos Plaspy
  - telemetría CANbus OBD
  - rastreo de flotas Plaspy
  - GNSS u-blox Smart5
  - integración de sensores Bluetooth LE
---

# Ruptela - Protocolo Smart5

Esta página describe el contexto público del protocolo para utilizar el rastreador Ruptela Smart5 con la plataforma Plaspy. Se centra en cómo se comunica el equipo en términos generales, qué ajustes de conexión emplea Plaspy y qué debe considerar al integrar Smart5 en sus flujos de trabajo de gestión de flotas. Está dirigida a usuarios técnicos y administradores que buscan una visión práctica y concisa, no a detalles de implementación a bajo nivel.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta a la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del protocolo o cambios relacionados con el firmware consulte la documentación del fabricante para obtener la información más actual.

## Resumen del protocolo

El protocolo de comunicación que utiliza un rastreador GPS define cómo el equipo envía posición, telemetría y diagnósticos a un servidor y cómo recibe mensajes de configuración o comandos. En el caso del Smart5, el protocolo transporta posicionamientos GNSS, telemetría CANbus y OBD, eventos del acelerómetro, lecturas de sensores Bluetooth y alertas de seguridad para que Plaspy pueda ofrecer ubicación, diagnósticos y flujos de trabajo basados en eventos.

- Envía reportes de posición periódicos y basados en eventos desde el dispositivo al servidor para mapeo en tiempo real y seguimiento histórico.
- Transporta telemetría del vehículo incluyendo tramas CANbus y OBD que Plaspy mapea a diagnósticos y monitoreo de consumo.
- Codifica la identificación y estado del dispositivo para que el servidor asocie los datos entrantes con el vehículo y la configuración correctos.
- Transmite eventos de sensores y seguridad como disparos del acelerómetro, alertas de jamming y notificaciones por cortes de energía.
- Soporta almacenamiento en buffer y lógica de reenvío para que los registros guardados en el dispositivo se suban cuando se restablece la conectividad.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de rastreadores en un único endpoint y puerto compartidos y está diseñado para identificar el protocolo automáticamente cuando un dispositivo bien configurado reporta. Esto reduce la necesidad de seleccionar manualmente el protocolo en la mayoría de los despliegues y permite que Smart5 se integre con Plaspy usando ajustes de reporte estándar.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor para reportes es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones de red.
- Cuando Smart5 apunta al endpoint de Plaspy y está configurado para reportar, Plaspy detectará y manejará automáticamente el protocolo entrante del rastreador.
- En configuraciones típicas el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy una vez que el dispositivo reporta correctamente al endpoint compartido.

## Transporte y contexto de conexión

Las elecciones de conexión afectan cómo viajan los mensajes desde Smart5 hasta Plaspy, pero no cambian los datos funcionales que Plaspy recibe. Smart5 soporta transportes celulares para reportes de área amplia y puede usar TCP o UDP según la configuración y el comportamiento de la red.

- Los dispositivos Smart5 pueden apuntar a d.plaspy.com o a la IP 54.85.159.138 como endpoint de reporte.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888; Plaspy acepta ambos transportes en el mismo puerto.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor y el aprovisionamiento de equipos.
- La selección de transporte (UDP vs TCP) puede afectar el comportamiento de entrega en condiciones de conectividad pobre, pero no influye en cómo Plaspy identifica el protocolo.
- Asegúrese de que cualquier firewall de red o ajustes APN permitan tráfico saliente hacia d.plaspy.com y el puerto 8888 desde los dispositivos desplegados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar la composición de los mensajes y los campos disponibles; confirme el comportamiento del firmware al validar la integración.
- Las revisiones de hardware y las interfaces opcionales, como CustomCAN o soporte Bluetooth, pueden exponer telemetría adicional o requerir configuración separada.
- La preferencia por UDP o TCP debe elegirse según las necesidades de fiabilidad y las condiciones de red de su flota.
- Las variaciones por parte del fabricante en cómo se reportan las tramas CANbus u OBD pueden afectar el mapeo de campos dentro de Plaspy.
- Valide los ajustes de reporte del dispositivo después de actualizaciones de firmware o al mover dispositivos entre regiones para garantizar un comportamiento consistente.
- Siempre contraste los resultados de detección de Plaspy con los identificadores de dispositivo reportados por Smart5 para confirmar un mapeo correcto.

## Por qué es importante entender el protocolo

Un entendimiento práctico del protocolo del rastreador ayuda a los administradores a configurar los equipos correctamente, interpretar los datos entrantes y resolver problemas de conectividad o mapeo de datos con el mínimo tiempo de inactividad. Saber qué elementos transporta el protocolo facilita una mejor configuración de alertas, reportes e integraciones en Plaspy.

- Ayuda a confirmar que los dispositivos apuntan al endpoint y puerto correctos de Plaspy para que los datos aparezcan en la plataforma.
- Facilita la resolución de problemas cuando la telemetría como CANbus o datos de sensores Bluetooth faltan o son inconsistentes.
- Apoya las decisiones sobre la selección de transporte y las reglas de APN o firewall para una conectividad fiable.
- Contribuye a planificar actualizaciones de firmware y validar que las nuevas versiones preserven los campos de telemetría requeridos.
- Permite el mapeo correcto de identificadores de dispositivo y códigos de diagnóstico en los paneles e informes de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar Ruptela Smart5 con Plaspy ofrece una vía práctica para combinar posicionamiento GNSS preciso con diagnósticos del vehículo, lecturas de sensores y eventos de seguridad para una supervisión integral de la flota. Las capacidades CANbus y OBD de Smart5, el soporte BLE para sensores y el almacenamiento en buffer interno complementan las funciones de mapeo, alertas y reportes de Plaspy para ofrecer visibilidad operativa útil.

Plaspy simplifica la incorporación de dispositivos mediante un endpoint y puerto de servidor compartido y detectando automáticamente el protocolo del rastreador cuando Smart5 se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888. Para obtener más información sobre Plaspy y cómo admite integraciones de dispositivos visite https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos del protocolo del dispositivo y la guía más reciente del fabricante en https://ruptela.com/ antes de finalizar decisiones de despliegue.
