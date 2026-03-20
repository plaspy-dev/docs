---
slug: /suntech/st_300k/protocol
id: st_300k-protocol
sidebar_label: Protocol
title: Suntech - ST 300K Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Suntech ST 300K con Plaspy, con guía de conexión y notas de compatibilidad
keywords:
  - Protocolo Suntech ST 300K
  - Rastreador GPS Suntech
  - Compatibilidad ST 300K Plaspy
  - Protocolo de rastreo Suntech
  - Comunicación de rastreador GPS
  - Protocolo de rastreo vehicular
  - Rastreador para gestión de flotas
  - Integración Suntech CANbus RS232
  - Integración sensor 1-Wire
  - Guía de protocolo de rastreador
---

# Suntech - Protocolo ST 300K

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST 300K con Plaspy. Explica de forma general cómo se comunica el equipo, cómo recibe Plaspy los reportes del dispositivo y qué considerar al configurar el rastreador para monitoreo de flotas. El ST 300K es un dispositivo con múltiples funciones: interfaces RS232 y CANbus, una interfaz 1-Wire para sensores de temperatura o identificación por i-Button, además de entradas y salidas analógicas y digitales configurables que permiten funciones como inmovilización y alertas por eventos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta a la plataforma. El comportamiento exacto del protocolo y los mensajes disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y práctico de compatibilidad en lugar de detalles a nivel de firmware.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de comportamientos de comunicación que usa el ST 300K para enviar posición, estado, entradas de sensores y alertas a un servidor remoto. En Plaspy, el objetivo del protocolo es transmitir de forma fiable la identidad del dispositivo y su telemetría para que la plataforma muestre ubicaciones y genere reportes o reglas.

- Permite que el ST 300K envíe telemetría periódica o por eventos al servidor configurado.
- Transmite la identidad y el estado del equipo para que Plaspy asocie los mensajes con el activo correcto.
- Transporta el estado de sensores e interfaces, como datos CANbus, lecturas de sensores de temperatura y eventos en entradas analógicas y digitales.
- Soporta alertas por eventos como activación del botón de pánico, colisiones u otras entradas configuradas.
- Habilita a Plaspy para interpretar los datos entrantes en perfiles de conducción, disparadores de mantenimiento e informes operativos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes en un endpoint público común y determina automáticamente el protocolo del rastreador que usa cada reporte entrante. En la mayoría de los casos, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el ST 300K está configurado para reportar al endpoint de Plaspy.

- Todos los dispositivos que usan Plaspy se conectan al mismo puerto de escucha para datos de rastreadores, lo que simplifica la configuración.
- Cuando un equipo reporta al endpoint de Plaspy, la plataforma inspecciona las características de la conexión y del mensaje entrante y mapea el tráfico al protocolo soportado de forma automática.
- Configurar correctamente el dispositivo para que apunte al servidor de Plaspy suele ser suficiente para la detección y el onboarding.
- Si el equipo envía la información de identidad y la telemetría esperada, Plaspy asociará los mensajes con el activo adecuado para reportes y reglas.
- En variantes de firmware inusuales o personalizadas, puede ser útil validar adicionalmente contra la documentación del fabricante.

## Contexto de transporte y conexión

El contexto de transporte cubre cómo el ST 300K se conecta al endpoint de Plaspy y qué ajustes de red configurar en el equipo. El ST 300K puede configurarse para reportar usando UDP o TCP según el firmware y la configuración elegida para la instalación y las pruebas.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la IP del servidor 54.85.159.138 para opciones de configuración directa.
- El puerto de red usado por todos los dispositivos conectados a Plaspy es el 8888 y los equipos pueden configurarse para usar TCP o UDP en ese puerto.
- Configure el ST 300K para reportar a d.plaspy.com o a la dirección numérica del servidor si no hay DNS disponible en el entorno de la instalación.
- Elija UDP o TCP en el rastreador según los requisitos de confiabilidad y soporte del dispositivo; ambos transportes son compatibles con Plaspy en el mismo puerto.
- Tenga en cuenta reglas de firewall y NAT para que el rastreador pueda alcanzar el endpoint de Plaspy desde la red del vehículo.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos o eventos envía el equipo, por lo que verifique la versión de firmware del ST 300K al diagnosticar compatibilidad.
- Variantes de hardware o regionales del mismo modelo pueden exponer interfaces u opciones distintas que afectan el comportamiento de reporte.
- Los menús de configuración del fabricante pueden presentar opciones de transporte y reporte que deben apuntar al endpoint y puerto de Plaspy.
- Seleccionar UDP frente a TCP en el equipo puede modificar las características de entrega de mensajes en condiciones de red móvil.
- Confirme que las configuraciones suministradas por el fabricante para la integración CANbus, RS232 y 1-Wire estén habilitadas y mapeadas hacia la telemetría saliente según se requiera.
- Siempre contraste el comportamiento del dispositivo con la documentación de Suntech para notas específicas de firmware y ejemplos de configuración.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el ST 300K ayuda a garantizar una instalación fiable, reportes precisos y un uso efectivo de las funciones de Plaspy. Tener claridad sobre los límites del protocolo reduce tiempos de configuración y agiliza la resolución de problemas cuando los equipos no aparecen en la plataforma como se espera.

- Asegura que el equipo apunte al endpoint y a los ajustes de transporte correctos de Plaspy para un onboarding exitoso.
- Ayuda a interpretar qué entradas de sensores y alertas serán visibles en Plaspy y cómo se mapearán a eventos de la plataforma.
- Facilita el diagnóstico de problemas de conectividad como puertos bloqueados, fallos de DNS o desajustes de transporte.
- Permite a los equipos de flota planificar actualizaciones de firmware y comprender cómo esos cambios pueden modificar los datos reportados.
- Apoya el mapeo de sistemas del vehículo vía RS232 o CANbus en los informes y disparadores de mantenimiento de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 300K con Plaspy ofrece una manera práctica de aprovechar las interfaces avanzadas del equipo para visibilidad de flotas y supervisión operativa. Las capacidades CANbus y RS232 del rastreador, combinadas con entradas de sensores y funciones de reporte, lo hacen útil para flotas que requieren perfiles de conducción detallados, reportes programados y alertas de mantenimiento. Plaspy recibe la telemetría y la presenta en paneles, alertas y reportes exportables que ayudan a reducir tiempos de inactividad y optimizar operaciones.

Para obtener más información sobre Plaspy y cómo funciona con una amplia gama de rastreadores visite https://www.plaspy.com. Tenga en cuenta que el soporte del protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente específica del dispositivo con Suntech en http://www.suntechint.com/.
