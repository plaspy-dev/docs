---
slug: /sinotrack/st_902/protocol
id: st_902-protocol
sidebar_label: Protocol
title: SinoTrack - ST-902 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack ST-902 y cómo se comunica con Plaspy para un rastreo de flotas confiable
keywords:
  - Protocolo SinoTrack ST-902
  - Rastreador GPS ST-902 Plaspy
  - Protocolo GPS SinoTrack ST-902
  - Protocolo de comunicación ST-902
  - Protocolo rastreador OBD2 SinoTrack
  - Compatibilidad ST-902 Plaspy
  - Protocolo de seguimiento SinoTrack
  - Protocolo rastreador GPS OBD2
  - Seguimiento de flotas ST-902
  - Integración de telemetría SinoTrack
---

# SinoTrack - Protocolo ST-902

Esta página ofrece una visión pública y no sensible del contexto del protocolo de comunicación del SinoTrack ST-902 cuando se integra con Plaspy. Explica cómo el dispositivo reporta ubicación y eventos de alarma a un colector de Plaspy y qué papel desempeña el protocolo de reporte del rastreador para una integración y monitoreo fiables.

El ST-902 es un rastreador OBD2 plug-and-play que transmite por GSM/GPRS con respaldo por SMS y puede configurarse para enviar datos a un servidor mediante IP y puerto. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de reporte del dispositivo es el método acordado que utiliza el ST-902 para identificarse, enviar actualizaciones periódicas de ubicación y notificar telemetría OBD2 o eventos de alarma a un servidor. Para la integración con Plaspy, el protocolo define qué campos de telemetría están disponibles, cómo se señalan los eventos y cómo el rastreador realiza la configuración remota vía SMS o ajustes del servidor GPRS.

- Permite que el ST-902 envíe coordenadas GPS, marcas de tiempo y eventos de alarma a un colector remoto para que Plaspy los procese.
- Transporta telemetría relacionada con OBD2 cuando el vehículo la expone y la configuración del dispositivo la habilita.
- Soporta reporte principal por GPRS con SMS como canal de respaldo para configuración y reportes de emergencia.
- Permite apuntar el dispositivo a una IP o dominio de servidor para que Plaspy reciba la telemetría entrante y ofrezca paneles en tiempo real.
- Regula cómo se incluyen la identificación (por ejemplo IMEI) y las banderas de evento para que Plaspy pueda mapear los datos al vehículo correcto.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo del rastreador, de modo que la mayoría de los usuarios no necesitan seleccionar manualmente un tipo de protocolo. Cuando usted configura un ST-902 para reportar a Plaspy, la plataforma inspecciona los datos entrantes en el endpoint del colector y los asigna al manejador correspondiente.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La IP del servidor Plaspy es 54.85.159.138 y el listener configurado acepta los reportes de los dispositivos.
- El colector de Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al colector.
- En la mayoría de los casos solo necesita configurar en el ST-902 la IP o dominio del servidor y el puerto; Plaspy se encarga del resto.

## Transporte y contexto de conexión

La elección del transporte y la dirección correcta del servidor son clave para establecer una conectividad fiable entre el ST-902 y Plaspy. El rastreador puede configurarse para usar UDP o TCP según las opciones del dispositivo y el comportamiento de la red, y debe apuntar al endpoint del colector de Plaspy para la ingestión de datos.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar al colector de Plaspy por el dominio d.plaspy.com o directamente a 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento y la configuración de cortafuegos.
- GPRS es el transporte principal para actualizaciones en tiempo real y SMS está disponible para configuración y reporte de respaldo.
- Asegúrese de que el APN de la SIM y los ajustes de red sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- El comportamiento del protocolo puede variar entre versiones de firmware; confirme siempre el nivel de firmware del dispositivo al validar compatibilidad.
- Revisiones de hardware o variantes regionales pueden exponer diferentes PIDs OBD2 o comportamientos en las banderas de alarma.
- El protocolo de transporte (UDP vs TCP) debe seleccionarse para coincidir con la capacidad del dispositivo y el entorno de red.
- El soporte de comandos por SMS es útil para la configuración remota cuando GPRS no está disponible o para equipos que se configuran inicialmente sin acceso directo.
- Las diferencias entre operadores y los ajustes de APN pueden afectar la entrega y la frecuencia de los reportes al colector de Plaspy.
- Valide el registro del IMEI y cualquier requisito regulatorio local antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el ST-902 ayuda a asegurar una conexión fiable con Plaspy, agiliza la resolución de problemas y aclara qué telemetría y alarmas estarán disponibles para los flujos de trabajo de su flota.

- Le ayuda a determinar si los datos OBD2 del vehículo que necesita serán reportados y cómo habilitar los PIDs requeridos.
- Acelera el análisis de causa raíz cuando un dispositivo no aparece en Plaspy revisando transporte, APN y dirección del servidor.
- Orienta la decisión de usar UDP o TCP según la fiabilidad de la red y el comportamiento del operador.
- Aclara cómo los eventos de alarma y la configuración remota se transmiten a Plaspy para que las alertas y automatizaciones funcionen como espera.
- Sirve para planificar actualizaciones de firmware, cambios de configuración y despliegues escalonados en la flota.

## Por qué usar Plaspy con este protocolo

Usar el ST-902 con Plaspy ofrece a las organizaciones una forma centralizada de ver ubicación, alarmas y telemetría del vehículo reportadas desde un rastreador con factor de forma OBD2. Plaspy agrupa la telemetría entrante, normaliza los campos de uso común y proporciona paneles y herramientas de alerta que convierten reportes crudos en visibilidad accionable para los gestores de flota.

Si está evaluando opciones de despliegue, configurar el ST-902 para reportar a Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888 es la vía recomendada para que Plaspy detecte automáticamente el protocolo del rastreador y comience a procesar los datos. Aprenda más sobre Plaspy en https://www.plaspy.com y verifique los detalles más recientes del protocolo y firmware del dispositivo en el sitio del fabricante https://www.sinotrackgps.com/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que es buena práctica confirmar la implementación actual del dispositivo con la documentación oficial del fabricante.
