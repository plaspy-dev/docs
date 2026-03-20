---
slug: /xirgo/xt63/protocol
id: xt63-protocol
sidebar_label: Protocol
title: Xirgo - XT63 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Xirgo XT63 y su comunicación con Plaspy para seguimiento y telemetría de flotas
keywords:
  - protocolo Xirgo XT63
  - protocolo GPS Xirgo XT63
  - compatibilidad XT63 Plaspy
  - protocolo de comunicación XT63
  - protocolo rastreador GPS Xirgo
  - rastreo vehicular XT63
  - compatibilidad telemática XT63
  - OBD JBUS XT63
  - protocolo rastreador Plaspy
  - GPS de flota XT63
---

# Xirgo - Protocolo XT63

Esta página ofrece una visión pública y orientada al protocolo sobre cómo el Xirgo XT63 se comunica con Plaspy para el seguimiento de vehículos y la telemetría. Se centra en los aspectos observables y no sensibles del comportamiento de conexión e informes del dispositivo que son relevantes al integrar el XT63 con sistemas de gestión y monitoreo de flotas potenciado por Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el endpoint de la plataforma. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto práctico del protocolo y consideraciones generales en lugar de detalles a nivel de firmware.

## Resumen del protocolo

El protocolo de reporte del XT63 define cómo el equipo se identifica, envía posición y datos de sensores, y notifica eventos a un servidor remoto. En Plaspy este protocolo permite actualizaciones de ubicación confiables, telemetría vehicular desde OBD y JBUS cuando está disponible, y notificaciones de eventos como encendido, apertura de puertas y detección de movimiento.

- Transporta telemetría esencial como fix GPS, marca de tiempo y entradas básicas del vehículo para que Plaspy pueda asociar los datos del dispositivo con los registros del activo.
- Emite mensajes basados en eventos para violaciones de geocerca, estado de encendido y entradas de alarma, habilitando alertas y automatizaciones.
- Envía telemetría OBD y JBUS opcional cuando el XT63 está conectado al bus del vehículo, permitiendo que valores de motor, combustible y diagnósticos lleguen a los paneles de Plaspy.
- Incluye información de identificación y estado del equipo para que Plaspy pueda relacionar los mensajes entrantes con el activo correcto.
- Soporta intervalos de reporte configurables y disparadores por evento que equilibran la fidelidad de los datos con las limitaciones de red y energía.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un único endpoint compartido y determina automáticamente el protocolo del rastreador que usa cada dispositivo. En la mayoría de las implementaciones usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el XT63 está configurado para reportar al endpoint de Plaspy usando los transportes soportados.

- Plaspy detecta automáticamente el protocolo del rastreador para los dispositivos que reportan al endpoint de la plataforma.
- La plataforma utiliza un único puerto de escucha para todos los dispositivos, lo que simplifica la configuración e incorporación de unidades.
- Si el XT63 está configurado correctamente para reportar al endpoint de Plaspy, por lo general no es necesaria la selección manual del protocolo dentro de la plataforma.
- Ajustes de identificación del dispositivo en el XT63 (IMEI o número de serie) aseguran que los mensajes entrantes se vinculen al registro de vehículo correcto.
- La versión de firmware y las opciones de configuración del fabricante pueden afectar cuándo y cómo reporta la unidad; verifique los ajustes del dispositivo si la detección no se produce.

## Transporte y contexto de conexión

El XT63 puede configurarse para usar los transportes comunes disponibles para alcanzar Plaspy. Para despliegues en Plaspy, el endpoint y el puerto son consistentes entre los rastreadores compatibles, por lo que apuntar el dispositivo al endpoint de Plaspy es el paso principal para la integración.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy para reporte de dispositivos es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para el tráfico de dispositivos y todos los equipos usan el mismo puerto.
- El XT63 puede configurarse para usar UDP o TCP en el puerto 8888, según el soporte del dispositivo y el transporte elegido.
- Elija el transporte que coincida con la configuración del equipo y el entorno de red; ambos UDP y TCP son compatibles en el endpoint de Plaspy.
- Confirme APN, provisión de la SIM y el acceso saliente al puerto con su proveedor móvil para asegurar que el dispositivo pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden modificar las funciones disponibles y el contenido exacto de los mensajes; consulte las notas de la versión del dispositivo al planear la integración.
- Las revisiones de hardware pueden introducir nuevas interfaces o cambiar los transportes soportados y deben validarse con la guía del fabricante.
- Herramientas de configuración del fabricante o servicios de aprovisionamiento pueden alterar los endpoints de reporte y las opciones de transporte; asegúrese de que el equipo esté configurado para reportar al endpoint de Plaspy.
- El soporte de OBD y JBUS es opcional y depende de la variante del XT63 instalada y del cableado del vehículo.
- La elección entre UDP y TCP puede afectar la semántica de entrega y debe alinearse con los requisitos de confiabilidad y latencia de la red.
- Valide la compatibilidad comparando las pantallas de configuración del dispositivo y la documentación del fabricante antes de realizar un despliegue a gran escala.

## Por qué es importante comprender el protocolo

Tener claridad sobre el protocolo de comunicación del XT63 y su contexto de conexión reduce la fricción en la integración, acelera la resolución de problemas y ayuda a mantener un flujo de telemetría confiable hacia Plaspy. Saber qué enviará y qué no el dispositivo facilita mapear entradas y eventos a acciones dentro de un flujo de trabajo de gestión de flota.

- Acelera la configuración inicial al enfocar la atención en endpoint, transporte y ajustes de identificación necesarios para Plaspy.
- Facilita la resolución de problemas comunes de conectividad como puertos bloqueados, APN mal configurado o direcciones de servidor incorrectas.
- Aclara qué señales del vehículo y parámetros del bus estarán disponibles en Plaspy cuando OBD o JBUS estén habilitados.
- Apoya decisiones operativas sobre intervalos de reporte y umbrales de evento para equilibrar uso de datos y consumo de batería o energía.
- Prepara a los equipos para actualizaciones de firmware o cambios de hardware que puedan alterar el comportamiento de reporte del equipo.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT63 con Plaspy ofrece a las organizaciones una vía sencilla para combinar ubicación vehicular confiable, alertas basadas en eventos y telemetría de motor opcional en una única plataforma de monitoreo y gestión. Las opciones de hardware y la flexibilidad de E/S del XT63 lo hacen adecuado para una amplia gama de escenarios de seguimiento de flotas y equipos, mientras que Plaspy aporta visibilidad centralizada y gestión de alertas.

Para conocer más sobre cómo Plaspy trabaja con dispositivos como el XT63 visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación de implementación consulte al fabricante en https://xirgo.com/ ya que el comportamiento del firmware y las implementaciones de protocolo pueden cambiar con el tiempo.
