---
slug: /teltonika/fmc003/protocol
id: fmc003-protocol
sidebar_label: Protocol
title: Teltonika - FMC003 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo Teltonika FMC003 y su comunicación con Plaspy para telemetría de flotas y datos OBD
keywords:
  - protocolo Teltonika FMC003
  - protocolo GPS FMC003
  - protocolo rastreador GPS Teltonika
  - compatibilidad FMC003 Plaspy
  - protocolo OBD-II para rastreadores GPS
  - integración telemetría de vehículos eléctricos
  - protocolo de seguimiento de flotas
  - integración de telemetría Plaspy
  - protocolo de rastreo vehicular
  - FMC003 gestión de flotas
---

# Teltonika - FMC003 Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC003 con Plaspy. Se centra en cómo el dispositivo se comunica de forma general y no sensible, cómo Plaspy recibe la telemetría y qué considerar al integrar datos provenientes del OBD-II, como odómetro, nivel de combustible y métricas de baterías de vehículos eléctricos, dentro de un flujo de trabajo de gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138. El puerto es 8888. El dispositivo puede configurarse usando UDP o TCP en el puerto 8888; Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta el protocolo automáticamente. El comportamiento en tiempo de ejecución puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esos factores influyen en qué reporta el rastreador y cuándo lo hace.

## Visión general del protocolo

El protocolo de comunicación del FMC003 define cómo el dispositivo establece conexión con el backend, se identifica y transmite telemetría y parámetros derivados del OBD para la ingestión en Plaspy. Los reportes del rastreador incluyen posición GNSS y diagnósticos obtenidos vía OBD que Plaspy mapea en vistas y reportes de flota.

- El protocolo permite que el dispositivo abra una sesión de reporte hacia Plaspy y entregue telemetría periódica o por evento.
- Los datos de identificación del dispositivo permiten a Plaspy asociar los mensajes entrantes con el vehículo y el perfil de configuración correctos.
- Métricas derivadas del OBD, como odómetro, nivel de combustible y lecturas de batería de VE, se entregan junto con la ubicación y los eventos para análisis más completos.
- La selección del transporte (UDP o TCP) y la estabilidad de la red afectan la frecuencia y fiabilidad con la que los reportes llegan a Plaspy.
- El protocolo admite flujos de trabajo de gestión remota cuando se combina con las herramientas del fabricante para configuración y actualizaciones de firmware.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos en un endpoint consolidado y determina automáticamente el protocolo del rastreador basándose en la conexión entrante y el comportamiento del dispositivo. En la mayoría de los despliegues, el usuario no necesita seleccionar un protocolo específico dentro de Plaspy si el FMC003 está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com y la IP 54.85.159.138 usando el puerto 8888 para conexiones de rastreadores.
- Los dispositivos pueden usar UDP o TCP en el puerto 8888; Plaspy está preparado para aceptar ambos transportes en el mismo puerto.
- Cuando un dispositivo reporta, Plaspy empata los campos de identificación del equipo con un registro conocido y aplica la lógica de parsing automáticamente.
- Los dispositivos configurados correctamente normalmente se registran y comienzan a enviar datos sin selección manual del protocolo en la plataforma.
- Si un dispositivo no parece reportar, verificar la configuración de transporte, el APN y la versión de firmware suele ser el primer paso práctico.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el FMC003 llega a Plaspy y qué ajustes de red confirmar durante la configuración. El módem celular y la forma OBD-II del dispositivo están optimizados para un despliegue rápido, pero la configuración correcta del endpoint y del transporte sigue siendo esencial para reportes confiables.

- El FMC003 puede configurarse para usar UDP o TCP en el puerto 8888 según los ajustes del equipo y la preferencia del operador.
- Apunte el dispositivo al endpoint de Plaspy usando el dominio d.plaspy.com o la dirección IP 54.85.159.138 según lo proveído por Plaspy.
- Plaspy usa el mismo puerto para todos los dispositivos para simplificar el despliegue y las reglas de firewall; el puerto es 8888.
- Las elecciones de conectividad celular, como LTE Cat 1 con fallback a 2G, influyen en la latencia de entrega y la disponibilidad en ciertas regiones.
- Valide la configuración del APN y los intervalos de reporte del dispositivo cuando esté solucionando problemas de conectividad con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar la cadencia de los mensajes, los parámetros OBD disponibles y los campos de diagnóstico; siempre verifique la versión de firmware instalada.
- Revisiones de hardware o diferencias de SKU pueden afectar las bandas celulares soportadas y el comportamiento regional.
- Herramientas del fabricante como Teltonika Configurator y FOTA WEB son útiles para aplicar configuraciones y actualizaciones de forma consistente en la flota.
- La selección de transporte (UDP vs TCP) puede influir en la fiabilidad bajo pérdida de paquetes o durante handover móvil; elija el transporte acorde a sus necesidades operativas.
- La forma OBD-II del FMC003 proporciona parámetros a nivel OEM, pero la disponibilidad real de parámetros depende de la marca, modelo y la implementación del ECU del vehículo.
- Valide la compatibilidad para métricas de VE según la documentación de Teltonika y las listas de vehículos soportados, así como cualquier firmware o ajuste adicional requerido.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del rastreador ayuda a asegurar una incorporación de dispositivos confiable, una telemetría consistente y una resolución de problemas más rápida cuando surgen incidencias. Saber qué envía el equipo y cómo lo recibe Plaspy reduce el tiempo de integración y mejora la confiabilidad a largo plazo.

- Permite una configuración más rápida al confirmar endpoint, transporte y ajustes de APN correctos antes del despliegue.
- Ayuda a interpretar la telemetría entrante y confirmar la disponibilidad de parámetros OBD para modelos de vehículos específicos.
- Mejora la resolución de problemas al centrar la atención en causas relacionadas con la red, el transporte o el firmware en lugar de la configuración de la plataforma.
- Apoya la planificación de actualizaciones de firmware y la configuración remota para mantener un comportamiento consistente en la flota.
- Asiste en el diseño de reglas de alerta y reportes en Plaspy que estén alineadas con los intervalos de reporte y los tipos de evento del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FMC003 con Plaspy ofrece una vía simplificada para combinar la ubicación GNSS con parámetros OEM del OBD y obtener una visión más completa de la flota. La forma plug-and-play OBD-II reduce el tiempo de instalación mientras entrega odómetro, combustible y métricas de batería de VE que alimentan los tableros de Plaspy para monitoreo en tiempo real, diagnóstico y reportes operativos.

To learn more about Plaspy and how it ingests device telemetry visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior and manufacturer documentation verify information on the Teltonika website https://www.teltonika-gps.com/. Protocol support and device implementation can change over time so checking manufacturer resources ensures you have the most current guidance.
