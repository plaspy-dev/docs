---
slug: /careu/ez2/protocol
id: ez2-protocol
sidebar_label: Protocol
title: CAREU - EZ2 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU EZ2 y su comunicación con Plaspy para telemetría y rastreo de flotas
keywords:
  - protocolo CAREU EZ2
  - protocolo GPS CAREU EZ2
  - compatibilidad CAREU EZ2 Plaspy
  - protocolo de comunicación CAREU EZ2
  - protocolo de rastreo CAREU EZ2
  - protocolo rastreador CAREU
  - protocolo rastreador de vehículos Plaspy
  - rastreo de flotas EZ2
  - telemetría CAN OBD II EZ2
  - protocolo de dispositivo Plaspy
---

# CAREU - Protocolo EZ2

Esta página explica el contexto público del protocolo utilizado por el rastreador GPS CAREU EZ2 cuando se integra con Plaspy. Se centra en cómo el equipo transmite información a alto nivel, qué papel cumple el protocolo de reporte del rastreador para introducir datos de ubicación y telemetría vehicular en Plaspy, y ofrece notas prácticas para la configuración y validación. Los detalles técnicos se presentan de forma general y no sensible, para facilitar la planificación de la integración y la resolución de problemas.

El CAREU EZ2 es un rastreador compacto con 4G LTE y retorno a 2G, equipado con telemetría CAN/OBD II U1Lite+ que envía ubicación y diagnósticos de vehículo a Plaspy. Plaspy utiliza ajustes de conexión compartidos para dispositivos compatibles y detecta automáticamente el protocolo del rastreador. Los puntos de conexión públicos de Plaspy incluyen d.plaspy.com y la IP 54.85.159.138 en el puerto 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888; el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del CAREU EZ2 define cómo el dispositivo empaqueta y transmite posiciones GPS, telemetría CAN/OBD II y datos de eventos a un servidor backend como Plaspy. A alto nivel, el protocolo permite que el equipo se identifique, envíe telemetría con marca temporal y notifique eventos del vehículo para que Plaspy pueda mostrar ubicación en tiempo real, diagnósticos y alertas para operaciones de flota.

- Permite la transmisión de posición GPS y telemetría CAN/OBD II desde el EZ2 al servidor para rastreo en tiempo real e informes históricos.
- Transporta la identificación del dispositivo y la información de sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Codifica estados y eventos como encendido del vehículo, cruces de geocercas y entradas de accesorios para flujos de trabajo orientados a eventos.
- Soporta reportes periódicos y mensajes basados en eventos para que los dispositivos equilibren la frecuencia de reporte con el uso de datos celulares.
- Permite flujos de trabajo de configuración remota y actualizaciones de firmware coordinadas por la plataforma de gestión.

## Cómo detecta Plaspy el protocolo

Plaspy recibe tráfico de rastreadores en un endpoint y puerto compartidos y detecta automáticamente el protocolo empleado por los dispositivos entrantes. Cuando un EZ2 apunta al endpoint de Plaspy y envía sus primeros reportes, los servicios de red de Plaspy emparejan el tráfico con una sesión de dispositivo compatible, por lo que generalmente no es necesario seleccionar el protocolo manualmente en la interfaz.

- Plaspy acepta conexiones en d.plaspy.com y 54.85.159.138 en el puerto 8888 para el reporte de dispositivos.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración entre distintos modelos de rastreadores.
- Plaspy soporta tanto transporte UDP como TCP para mensajes entrantes cuando el equipo está configurado en consecuencia.
- Si un EZ2 está configurado para reportar al endpoint de Plaspy, normalmente no es necesario elegir un protocolo dentro de Plaspy.
- Una identificación correcta del dispositivo y una conectividad de red estable ayudan a que Plaspy asocie la telemetría entrante con el registro del dispositivo correcto.

## Transporte y contexto de conexión

Las opciones de conexión afectan la forma en que el EZ2 envía paquetes a Plaspy, pero no cambian el propósito principal del protocolo. El EZ2 opera sobre redes celulares y puede configurarse para usar UDP o TCP según los ajustes del equipo y el comportamiento del operador regional. Apuntar el dispositivo a Plaspy utiliza los mismos ajustes públicos de conexión para todos los dispositivos compatibles.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy escucha el tráfico de dispositivos en el puerto 8888 y este puerto se utiliza en los dispositivos soportados.
- El EZ2 puede usar UDP o TCP en el puerto 8888 según la configuración del equipo y el soporte de firmware.
- La selección de UDP o TCP suele ser una configuración del dispositivo; elija el transporte que mejor se ajuste a la estabilidad del operador y a las recomendaciones del firmware.
- Asegúrese de que el APN y la configuración celular del EZ2 sean correctos para que el dispositivo alcance el endpoint de Plaspy de forma fiable.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar los campos de telemetría disponibles, las opciones de frecuencia de reporte y las definiciones de eventos entre revisiones de dispositivo.
- Las revisiones de hardware y variantes regionales de módulos pueden alterar las bandas celulares soportadas y el comportamiento de fallback, lo que afecta la conectividad pero no el propósito general del protocolo.
- Las interfaces de configuración del fabricante pueden exponer opciones para transporte UDP frente a TCP; confirme que el transporte elegido coincide con las expectativas del endpoint de Plaspy.
- Las configuraciones remotas y las actualizaciones FOTA pueden modificar el comportamiento del protocolo con el tiempo; valide cualquier cambio tras aplicar actualizaciones.
- Siempre pruebe el reporte del dispositivo a Plaspy en un entorno controlado antes de desplegar en producción para confirmar que la telemetría y los eventos esperados se entregan.
- Verifique la configuración del dispositivo y los registros de Plaspy para asegurar una identificación correcta y un mapeo de datos preciso.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el EZ2 ayuda a responsables de flota e integradores a configurar los equipos correctamente, diagnosticar problemas de conectividad y mapeo de datos, y mantener telemetría fiable a lo largo del ciclo de vida del despliegue. Saber cómo reporta el rastreador y qué puede variar entre versiones de firmware reduce el tiempo dedicado a la resolución de problemas y garantiza que los flujos operativos funcionen como se espera.

- Le ayuda a verificar que los campos GPS y CAN/OBD II requeridos por Plaspy están siendo reportados por el dispositivo.
- Permite tomar decisiones informadas sobre usar UDP o TCP según el rendimiento del operador y las necesidades de fiabilidad de mensajes.
- Facilita la resolución cuando los dispositivos no aparecen en Plaspy o la telemetría llega incompleta.
- Apoya la planificación de actualizaciones de firmware, configuración remota y gestión del ciclo de vida de las unidades desplegadas.
- Aclara las expectativas sobre la sincronía de eventos, retención de datos y cómo Plaspy mostrará el estado del dispositivo y las alertas.

## Por qué usar Plaspy con este protocolo

Usar el CAREU EZ2 con Plaspy ofrece una vía práctica para consolidar ubicación en tiempo real, diagnósticos de motor y combustible, y controles orientados por eventos como la inmovilización, en una única interfaz operativa. Para equipos de logística y flotas, la combinación de la telemetría del EZ2 y los paneles de Plaspy puede mejorar la visibilidad, simplificar los informes de cumplimiento y acelerar la respuesta ante incidentes.

Para saber más sobre Plaspy y cómo se integra con rastreadores vehiculares como el CAREU EZ2, visite https://www.plaspy.com. El soporte de protocolos y el comportamiento del dispositivo pueden cambiar cuando los fabricantes liberan nuevo firmware o revisiones de hardware, por lo que confirme los detalles específicos del protocolo y la implementación más recientes en el sitio del fabricante https://www.systech-iot.com/.
