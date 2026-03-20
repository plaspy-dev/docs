---
slug: /sinotrack/st_901al/protocol
id: st_901al-protocol
sidebar_label: Protocol
title: SinoTrack - ST-901AL Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST 901AL y cómo se comunica con Plaspy para seguimiento vehicular confiable
keywords:
  - protocolo SinoTrack ST 901AL
  - protocolo GPS SinoTrack ST 901AL
  - compatibilidad ST 901AL Plaspy
  - protocolo de comunicación ST 901AL
  - protocolo de rastreo ST 901AL
  - protocolo de rastreador GPS Plaspy
  - rastreo de vehículos SinoTrack
  - configuración GPRS SMS para rastreador
  - protocolo rastreador GPS 4G cableado
  - protocolo telemetría ACC encendido
---

# SinoTrack - Protocolo ST-901AL

Esta página describe el contexto público del protocolo para utilizar el SinoTrack ST-901AL con Plaspy. El ST-901AL es un rastreador GPS 4G LTE cableado pensado para instalaciones profesionales en vehículos. Envía ubicación vía GPRS y SMS, cuenta con una entrada ACC para telemetría de encendido y admite control remoto de relé para inmovilización. Este documento explica cómo esos métodos de reporte y las opciones de configuración estándar se mapean a Plaspy sin revelar detalles privados de implementación.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo apunta al endpoint de ingestión de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión del hardware y la implementación del fabricante, por lo que los instaladores deben considerar esta página como una guía de integración de alto nivel y consultar la documentación del dispositivo para comandos y ajustes específicos de firmware.

## Resumen del protocolo

El ST-901AL transmite telemetría y eventos de alarma a un servidor usando canales estándar de GPRS y SMS. El dispositivo permite configurar APN y ajustes de servidor para enviar datos a plataformas de terceros como Plaspy. Comprender este contexto público del protocolo ayuda a los instaladores a configurar el equipo para que entregue datos de posición, encendido y alarmas a Plaspy para monitoreo e informes.

- El dispositivo envía actualizaciones periódicas de ubicación y eventos por datos móviles y puede recurrir a SMS cuando los datos no están disponibles.
- APN y servidor configurables (IP o dominio) permiten dirigir la telemetría a un endpoint de ingestión de terceros como Plaspy.
- El estado de encendido desde la entrada ACC y los eventos de alarma se incluyen en la telemetría que el rastreador reporta al servidor.
- El control remoto de relé se realiza mediante comandos del dispositivo y facilita flujos de trabajo de inmovilización cuando se integra con acciones en Plaspy.
- Los comandos SMS de configuración ofrecen una vía alternativa para ajustar APN o servidor en campo cuando no hay acceso directo por serial.

## Cómo Plaspy detecta el protocolo

Plaspy acepta el tráfico entrante de rastreadores en un endpoint de ingestión compartido y detecta automáticamente el protocolo para enrutar los mensajes a los parseadores correctos. Cuando el ST-901AL se configura para reportar a Plaspy, la plataforma emplea sus mecanismos de detección, por lo que normalmente no es necesario seleccionar un protocolo manualmente dentro de Plaspy.

- Dirija el ST-901AL al dominio del servidor Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138 para entregar datos.
- Plaspy escucha en el puerto 8888 para los rastreadores soportados y utiliza el mismo puerto para todos los dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos en el puerto compartido, lo que simplifica la incorporación.
- Si el rastreador está correctamente configurado para reportar a Plaspy, por lo general no se requiere seleccionar el protocolo manualmente en la interfaz de Plaspy.
- Use los comandos SMS de configuración del equipo cuando estén disponibles para redirigir el servidor y los ajustes de APN si aún no hay conectividad de datos.

## Transporte y contexto de conexión

El ST-901AL soporta el reporte por datos móviles y SMS y puede usarse con UDP o TCP para reporte GPRS según el soporte y la configuración del dispositivo. Al integrar con Plaspy, los instaladores deben configurar el transporte y el destino del servidor para que coincidan con las opciones de conexión de Plaspy y así garantizar la llegada fiable de la telemetría.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del modelo y la elección del instalador.
- Los equipos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o a la IP 54.85.159.138 como endpoint de reporte.
- Plaspy utiliza el puerto 8888 en todos los dispositivos soportados, por lo que un único puerto facilita la configuración de firewalls y NAT.
- SMS sigue siendo una alternativa práctica tanto para configurar APN y servidor en campo como para actuar como canal de respaldo de reporte.
- Verifique los ajustes de APN del operador móvil en la SIM instalada en el dispositivo para asegurar la conectividad GPRS hacia el servidor elegido.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué mensajes envía el dispositivo y qué comandos de configuración están disponibles; revise la versión de firmware antes del despliegue.
- Las revisiones de hardware y las variantes de modelo pueden alterar las bandas de red soportadas u opciones de transporte; confirme las especificaciones de cada unidad.
- La elección entre reporte por UDP o TCP afecta el comportamiento en redes intermitentes; seleccione el transporte que mejor se adapte a su cobertura y requerimientos de fiabilidad.
- Los portales del fabricante y el manual del dispositivo pueden documentar destinos de servidor por defecto; actualice los ajustes de servidor a Plaspy al desplegar en la plataforma.
- Los conjuntos de comandos SMS ofrecen una forma sólida de reconfigurar dispositivos en campo, aunque pueden variar ligeramente según el firmware.
- Valide siempre un equipo de muestra reportando a Plaspy en una prueba controlada antes de desplegar grandes flotas en producción.

## Por qué es importante entender el protocolo

Comprender cómo el ST-901AL reporta datos y cómo Plaspy los recibe acelera la configuración, reduce errores de integración y facilita la resolución de problemas de conectividad durante el despliegue.

- Una correcta configuración de APN y servidor garantiza que el rastreador pueda alcanzar el endpoint de ingestión de Plaspy y entregar actualizaciones en tiempo real.
- Saber qué transporte usar TCP o UDP en el puerto 8888 ayuda a optimizar la fiabilidad según su entorno de red.
- Estar al tanto del comportamiento dependiente de firmware reduce sorpresas cuando los tipos de eventos o las opciones de comando difieren entre unidades.
- Conocer las opciones de fallback por SMS y los comandos de configuración permite actualizaciones rápidas en campo sin desmontar el equipo.
- Tener expectativas claras sobre el reporte de encendido y alarmas posibilita informes y alertas precisas dentro de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack ST-901AL con Plaspy ofrece a las organizaciones visibilidad consistente del vehículo, telemetría con reconocimiento de encendido y soporte para flujos de inmovilización, manteniendo el control sobre la SIM y los ajustes de APN. El soporte del ST-901AL para destinos de servidor configurables y reportes estándar por GPRS y SMS facilita la integración con Plaspy, permitiendo a los gestores de flotas recopilar datos de ubicación, alarma y estado del motor para supervisión operativa.

Para más información sobre Plaspy y configuraciones de dispositivos compatibles visite https://www.plaspy.com. Para los detalles más actuales del protocolo específico del dispositivo, comportamiento de firmware y comandos de configuración consulte la documentación del fabricante en https://www.sinotrackgps.com/ la cual puede actualizarse con el tiempo.
