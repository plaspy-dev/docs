---
slug: /queclink/gl53mg/protocol
id: gl53mg-protocol
sidebar_label: Protocol
title: QuecLink - GL53MG Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el QuecLink GL53MG con Plaspy, con ajustes de conexión, transporte y notas de compatibilidad
keywords:
  - QuecLink GL53MG
  - protocolo GL53MG
  - localizador GPS QuecLink
  - GL53MG en Plaspy
  - protocolo para rastreadores de activos
  - rastreador LTE Cat M1
  - protocolo de rastreo GPS
  - rastreador para recuperación de vehículos
  - rastreador para monitoreo de activos
  - rastreador BLE 5.2
---

# QuecLink - Protocolo GL53MG

Esta página describe el contexto público del protocolo para usar el rastreador de activos QuecLink GL53MG con Plaspy. Aquí se explica cómo se comunica el dispositivo con los servidores de Plaspy, qué ajustes de conexión se usan públicamente y qué aspectos de la implementación del equipo pueden afectar la integración y el funcionamiento.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en información de alto nivel y no sensible para facilitar la configuración y la resolución de problemas.

## Descripción general del protocolo

El GL53MG es un micro rastreador de activos con conectividad LTE Cat M1 NB2, pensado para despliegues prolongados y montaje discreto. Su protocolo de comunicación regula cómo el equipo se identifica, envía ubicación y estado, y almacena mensajes hasta entregarlos al servidor. Comprender este contexto público ayuda a garantizar que el dispositivo esté configurado para reportar correctamente a Plaspy y que la plataforma reciba telemetría útil.

- El protocolo permite envíos periódicos y reportes por eventos de posición y estado hacia el servidor.
- Los campos de identificación y registro en los reportes permiten a Plaspy asociar los datos entrantes con el registro de dispositivo correcto.
- El soporte de mensajes en búfer preserva los datos cuando el equipo está fuera de cobertura y entrega mensajes almacenados al restablecerse la conectividad.
- El signalling del protocolo y las marcas de tiempo proporcionan el contexto que Plaspy necesita para mostrar información confiable de ubicación y salud del dispositivo.
- Los subsistemas como BLE pueden incluirse en los reportes para integrar accesorios o sensores sin cambiar el comportamiento central de reporte.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones de muchos modelos de rastreadores usando un único endpoint público documentado y detectar automáticamente el protocolo cuando un equipo se conecta. En la mayoría de los casos no se requiere seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy recibe los reportes de dispositivos en un endpoint de servidor común y determina automáticamente el protocolo del rastreador.
- Los equipos apuntados al endpoint de Plaspy y con los ajustes de conexión correctos serán reconocidos sin selección manual de protocolo.
- La detección automática acelera la incorporación de flotas mixtas con distintos modelos de rastreadores.
- Si un equipo no parece reportar, verifique que esté configurado para el endpoint de Plaspy y que use los parámetros de transporte compatibles.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y las reglas de firewall.

## Transporte y configuración de conexión

El GL53MG puede enviarse datos sobre transportes IP estándar. Para la integración con Plaspy se documentan aquí el endpoint público y las opciones de transporte habituales, de modo que instaladores y administradores puedan configurar el equipo correctamente.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que reduce la complejidad al desplegar muchas unidades.
- Asegúrese de que los firewalls de red y los planes de operador permitan conexiones salientes hacia el endpoint de Plaspy y el protocolo de transporte seleccionado.
- Si utiliza configuración basada en nombres de host, apunte el equipo a d.plaspy.com; puede usarse la dirección IP cuando no se permiten nombres de host.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los campos disponibles o los transportes soportados; revise siempre las notas de la versión del firmware para detectar cambios que afecten al reporte.
- Las revisiones de hardware o las variantes regionales pueden introducir ligeras diferencias en el comportamiento o en el conjunto de funciones que influyan en la compatibilidad.
- Los ajustes predeterminados del fabricante pueden usar un servidor o transporte distinto; confirme que la configuración del servidor del equipo esté actualizada al endpoint de Plaspy para el reporte.
- La selección de transporte entre UDP y TCP puede afectar la entrega en condiciones de red variables; elija el transporte compatible con su despliegue y con el firmware del equipo.
- El comportamiento de BLE, la gestión de energía y el modo de suspensión profunda influyen en la frecuencia de reporte y en el uso del búfer para mensajes almacenados.
- Valide la configuración y el reporte del dispositivo tras la instalación para asegurar que los mensajes llegan a Plaspy y se procesan correctamente.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación facilita una configuración inicial exitosa, una resolución de problemas más rápida y una mayor confiabilidad a largo plazo cuando usa el GL53MG con Plaspy. Saber qué envía el equipo y cómo Plaspy espera recibirlo reduce el tiempo de inactividad y mejora la precisión de la información de ubicación y estado.

- Configurar correctamente el equipo al endpoint de Plaspy evita problemas de incorporación comunes.
- Conocer las diferencias de firmware y hardware ayuda a explicar variaciones en los campos reportados o en la temporización.
- Entender las opciones de transporte ayuda en la planificación de la red y en la configuración de firewalls.
- Saber cómo funcionan el almacenamiento en búfer y los modos de suspensión permite anticipar reportes retrasados y planear para brechas de datos.
- Tener expectativas claras sobre la telemetría disponible mejora la integración con flujos de trabajo de monitoreo y alertas.

## Por qué usar Plaspy con este protocolo

Usar el GL53MG con Plaspy ofrece una solución práctica para monitorear activos y vehículos con un equipo diseñado para larga duración de batería, entornos exigentes y cobertura LTE global. El enfoque de endpoint compartido y la detección automática de protocolo de Plaspy facilitan poner los dispositivos en línea y empezar a recibir telemetría útil para la supervisión operativa.

Si desea obtener más información sobre cómo Plaspy gestiona la conectividad de dispositivos, los reportes y la visibilidad de flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y documentación de hardware, consulte los recursos oficiales de QuecLink en https://www.queclink.com/ ya que el comportamiento del fabricante y el soporte de protocolo pueden cambiar con el tiempo.
