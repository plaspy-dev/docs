---
slug: /aplicom/a1_max_rdl/configuration
id: a1_max_rdl-configuration
sidebar_label: Configuration
title: Aplicom - A1 MAX RDL Configuration
sidebar_class_name: menu_item_tracker
description: Configure el rastreador Aplicom A1 MAX RDL para reportar a Plaspy usando servidor compartido y detección automática de protocolo
keywords:
  - Configuración Aplicom A1 MAX RDL
  - Instalación Aplicom A1 MAX RDL
  - Aplicom A1 MAX RDL Plaspy
  - configuración rastreador Aplicom
  - ajustes servidor A1 MAX RDL
  - configuración telemática Aplicom
  - seguimiento de flotas Aplicom
  - configuración seguimiento vehicular
  - configuración Plaspy para rastreador
  - guía configuración rastreador GPS
---

# Aplicom - Configuración A1 MAX RDL

Esta página describe el contexto público de configuración para usar el rastreador Aplicom A1 MAX RDL con Plaspy. Se centra en las configuraciones de servidor compartido y en los pasos generales necesarios para apuntar el equipo a Plaspy, de modo que el rastreador sea visible y reporte datos a la plataforma. La guía aquí emplea los valores de conexión públicos de Plaspy y conceptos de configuración a alto nivel, en lugar de comandos exclusivos del dispositivo.

Plaspy utiliza configuraciones de servidor compartido para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que siempre combine esta guía pública con la documentación y herramientas oficiales de Aplicom.

## Resumen de la configuración

Este proceso prepara el Aplicom A1 MAX RDL para comunicarse con Plaspy y que la telemática y la descarga remota estén disponibles en la plataforma. El enfoque está en actualizar el endpoint del dispositivo al servidor de Plaspy, seleccionar el transporte si es necesario, aplicar los ajustes y confirmar que el rastreador informa correctamente a Plaspy.

- Configure el dispositivo para que reporte al endpoint de servidor de Plaspy y así la telemática y los eventos de descarga remota sean visibles en la plataforma.
- Asegúrese de que el dispositivo use el puerto compartido de Plaspy para que pueda procesarse junto con otros dispositivos soportados.
- Seleccione la opción de transporte adecuada en el equipo si el rastreador requiere elegir entre UDP o TCP.
- Guarde y aplique los nuevos ajustes de endpoint de red y verifique el reporte exitoso.
- Valide que Plaspy detecte automáticamente el protocolo del rastreador y que los datos del dispositivo lleguen a la plataforma.

## Ajustes del servidor Plaspy

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP
- automatic protocol detection in Plaspy

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando este se conecte.

## Requisitos típicos antes de configurar

- Confirme que el Aplicom A1 MAX RDL está energizado y accesible tras la instalación.
- Tenga acceso al método o software de configuración oficial de Aplicom para cambiar los endpoints de reporte.
- Verifique la conectividad de red y cualquier requisito del operador o de la instalación que exija el dispositivo.
- Asegúrese de contar con el identificador del dispositivo o la referencia serial que le permitirá ubicar el equipo en Plaspy cuando comience a reportar.
- Revise la versión de firmware actual y las notas de la versión para entender posibles diferencias en la configuración.

## Cómo se conecta este rastreador a Plaspy

El A1 MAX RDL se configura para reportar su telemática y el estado de descarga remota al endpoint y puerto del servidor Plaspy. Una vez que el dispositivo esté apuntando al endpoint de Plaspy, la plataforma detectará el protocolo e ingesta los mensajes del equipo para que las operaciones de flota y los eventos de descarga remota puedan monitorearse.

- El reporte del dispositivo se dirige al endpoint de Plaspy d.plaspy.com o a la IP equivalente 54.85.159.138.
- El dispositivo envía datos al puerto 8888, que Plaspy usa para todos los dispositivos.
- Cuando el dispositivo llega al servidor, Plaspy detecta automáticamente el protocolo del rastreador y empieza a procesar los mensajes.
- Seleccione UDP o TCP en el dispositivo si el hardware o la herramienta de configuración exige elegir un transporte.
- La conexión exitosa habilita visibilidad en tiempo real, reporte de eventos y monitoreo del estado de descarga remota dentro de Plaspy.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Aplicom o al software recomendado para el A1 MAX RDL.
2. Ingrese el endpoint de servidor de Plaspy usando d.plaspy.com o la IP 54.85.159.138 como host de reporte.
3. Ajuste el puerto de reporte a 8888 para que el dispositivo use el puerto compartido de Plaspy.
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte y guarde esa opción.
5. Guarde o aplique la configuración en el dispositivo y asegúrese de completar cualquier paso de confirmación requerido por el equipo.
6. Valide que el dispositivo reporte a Plaspy y que la plataforma detecte el protocolo y muestre el equipo.

## Notas de configuración

- El firmware del fabricante y las herramientas de configuración pueden variar entre versiones; siempre registre la versión de firmware al configurar dispositivos.
- Las prácticas del instalador y variantes específicas del mercado pueden afectar el método de configuración que utilice para el Aplicom A1 MAX RDL.
- Cuando exista una opción de transporte, TCP y UDP pueden comportarse de manera distinta según la red; elija el transporte que mejor se adapte a su instalación y al entorno del operador.
- Plaspy usa el mismo puerto para todos los dispositivos soportados y realiza detección automática de protocolo, lo que reduce la necesidad de seleccionar el protocolo en la plataforma.
- Consulte la documentación de Aplicom para cualquier paso específico del dispositivo o utilidades requeridas para aplicar cambios en el endpoint de red.

## Por qué usar Plaspy con esta configuración

Usar el Aplicom A1 MAX RDL con Plaspy facilita centralizar el estado de descarga remota del tacógrafo y los datos telemáticos junto con otros equipos de la flota. Las configuraciones de servidor compartido de Plaspy y la detección automática de protocolo simplifican la incorporación y reducen la complejidad por dispositivo, ayudando a los equipos de operaciones a obtener visibilidad oportuna sobre la ubicación del vehículo y los eventos de descarga remota.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos y los datos de la flota, visite https://www.plaspy.com. Para los métodos de configuración específicos más recientes, el comportamiento de firmware y los detalles del fabricante, revise los recursos oficiales de Aplicom en https://www.aplicom.com/ y verifique cualquier paso con la documentación más reciente de Aplicom.
