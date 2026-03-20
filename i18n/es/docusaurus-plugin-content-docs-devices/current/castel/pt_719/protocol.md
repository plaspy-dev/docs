---
slug: /castel/pt_719/protocol
id: pt_719-protocol
sidebar_label: Protocol
title: Castel - PT-719 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Castel PT-719 y su conectividad con Plaspy para seguimiento y control de asistencia
keywords:
  - protocolo Castel PT-719
  - protocolo GPS Castel PT-719
  - comunicación Castel PT-719
  - protocolo de rastreo PT-719
  - protocolo rastreador GPS Castel
  - compatibilidad PT-719 Plaspy
  - rastreo vehicular PT-719
  - asistencia RFID PT-719
  - guía protocolo rastreador GPS
  - compatibilidad dispositivos Plaspy
---

# Castel - Protocolo PT-719

Esta página ofrece una descripción pública del protocolo para usar el rastreador GPS Castel PT-719 con la plataforma Plaspy. Resume cómo se comunica el equipo en términos generales, qué esperar al integrarlo con Plaspy y cuáles son las opciones habituales de transporte y direccionamiento. El PT-719 es un rastreador GPS 2G de cuatro bandas, compacto, con reporte de ubicación en tiempo real y función de asistencia por RFID, lo que lo hace apropiado para gestión de personal, control de asistencia escolar y casos logísticos.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado correctamente para reportar al endpoint de Plaspy. Los equipos que reportan a Plaspy pueden configurarse para usar UDP o TCP y enviar datos a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888. Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo de reporte del PT-719 define cómo el rastreador se identifica, comunica la posición GPS y el estado, y transmite eventos de asistencia por RFID a un servidor remoto. Para la integración con Plaspy, este protocolo establece los mensajes y la secuencia necesarios para que las actualizaciones de ubicación y el estado del dispositivo sean utilizables por una plataforma de seguimiento o gestión de flotas sin exponer detalles internos del equipo.

- Permite que el rastreador envíe información de posición, hora y estado a un endpoint remoto para mapeo y alertas.
- Incluye la identificación del dispositivo para que Plaspy asocie los reportes entrantes con el registro de activo correcto.
- Transmite datos de sensores externos o eventos RFID que pueden usarse para control de asistencia o interacción con activos.
- Soporta reportes periódicos y por eventos para que Plaspy reciba actualizaciones oportunas para monitoreo y registros históricos.
- Funciona sobre transportes comunes, de modo que la misma configuración de endpoint en Plaspy puede recibir mensajes de muchos rastreadores.

## Cómo Plaspy detecta el protocolo

Plaspy recibe reportes en un único endpoint y puerto compartidos y determina cómo interpretar los mensajes entrantes para que los usuarios normalmente no tengan que elegir un protocolo manualmente. Cuando el PT-719 está apuntando al endpoint de Plaspy y usa el transporte soportado, los reportes de ese dispositivo son aceptados y asociados con la entrada de dispositivo correspondiente.

- Plaspy escucha en el puerto 8888 para conexiones y reportes de dispositivos.
- Los dispositivos pueden configurarse para conectarse a d.plaspy.com o a la IP 54.85.159.138.
- El equipo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Plaspy detecta automáticamente el protocolo del rastreador para reportes entrantes con el formato adecuado.
- En la mayoría de los despliegues, el usuario final solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy.

## Transporte y conexión

Las opciones de transporte y conexión determinan cómo el PT-719 llega a los servidores de Plaspy, pero no cambian la intención general del reporte. El rastreador puede configurarse para usar UDP o TCP para comunicarse con Plaspy; estas opciones influyen en características de entrega como la confiabilidad y la retransmisión.

- El PT-719 puede usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos pueden apuntar al hostname d.plaspy.com o a la IP 54.85.159.138.
- El puerto 8888 es el único puerto que Plaspy utiliza para toda la conectividad de dispositivos.
- UDP se emplea habitualmente para reportes periódicos ligeros, mientras que TCP puede seleccionarse cuando se prefiere un transporte orientado a conexión, dependiendo del firmware y la configuración del dispositivo.
- Las configuraciones de red y APN en el rastreador deben permitir conexiones salientes al endpoint de Plaspy para que los reportes funcionen correctamente.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de los mensajes y los campos disponibles; verifique los detalles de firmware al diagnosticar discrepancias.
- Las revisiones de hardware o variantes regionales del PT-719 pueden implementar pequeñas diferencias en el protocolo.
- Las páginas de configuración del fabricante o los ajustes de aprovisionamiento suelen controlar la selección de transporte entre UDP y TCP.
- La transmisión de reportes de asistencia por RFID es una función que debe confirmarse con la documentación del dispositivo para conocer el formato y la temporalidad de los eventos.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es la configuración esperada para conectarse a Plaspy.
- Siempre valide la compatibilidad con la documentación más reciente del fabricante antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación ayuda a asegurar que el PT-719 esté configurado correctamente, que Plaspy reciba los datos esperados y que los problemas puedan diagnosticarse de forma eficiente. Una comprensión clara reduce el tiempo de integración y mejora la fiabilidad.

- Garantiza el direccionamiento correcto del dispositivo para que los reportes lleguen al endpoint de Plaspy.
- Ayuda a elegir el modo de transporte adecuado, UDP o TCP, según el despliegue previsto.
- Facilita la resolución de problemas cuando los reportes faltan, llegan con retraso o se identifican incorrectamente en la plataforma.
- Mejora la planificación de batería e intervalos de reporte al entender cómo y cuándo transmite el dispositivo.
- Ayuda a mapear eventos RFID y el estado del dispositivo a las funciones de Plaspy para flujos de trabajo de asistencia y monitoreo.

## Por qué usar Plaspy con este protocolo

Usar el Castel PT-719 con Plaspy ofrece una forma directa de convertir la posición del rastreador, su estado y los eventos RFID en información útil para flotas y registros de asistencia. El enfoque de endpoint compartido de Plaspy y la detección automática del protocolo simplifican la incorporación de dispositivos, de modo que los equipos puedan centrarse en el uso operativo en lugar de en tareas de integración a bajo nivel.

To learn more about Plaspy and how it works with devices like the PT-719 visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; confirm the latest device specific protocol and firmware information on the Castel website http://www.castelecom.com/ before final deployment.
