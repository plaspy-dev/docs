---
slug: /falcom/fox3_2g/configuration
id: fox3_2g-configuration
sidebar_label: Configuration
title: Falcom - FOX3-2G Configuration
sidebar_class_name: menu_item_tracker
description: Configurar el Falcom FOX3-2G para Plaspy, con ajustes de servidor, transporte y flujo práctico de instalación
keywords:
  - Configuración Falcom FOX3-2G
  - Configuración FOX3-2G para Plaspy
  - Configuración del rastreador Falcom
  - Configuración de FOX3-2G en plataforma GPS
  - Configuración telemática de vehículos
  - Configuración de servidor de rastreador GPS
  - Guía de compatibilidad Plaspy
  - Configuración del dispositivo Falcom
  - Guía de instalación FOX3-2G
  - Configuración de seguimiento de flotas
---

# Falcom - Configuración FOX3-2G

Esta página describe el contexto público de configuración para usar el rastreador Falcom FOX3-2G con la plataforma Plaspy. Se concentra en los ajustes de servidor prácticos y en los pasos generales que deberá realizar en el dispositivo o en las herramientas de Falcom para permitir que el FOX3-2G informe a Plaspy la ubicación y los eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de las tareas de configuración consisten en apuntar el dispositivo al endpoint de Plaspy y seleccionar el tipo de transporte. Los pasos en el lado del fabricante para dispositivos Falcom pueden variar según la firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, así que consulte la documentación de Falcom y las herramientas de su instalador al aplicar las indicaciones a continuación.

## Resumen de la configuración

Este proceso prepara el FOX3-2G para comunicarse de forma fiable con Plaspy, valida la conectividad y habilita la visibilidad y el reporte del dispositivo en la plataforma Plaspy.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que la telemetría y los eventos se enruten a su tenant de Plaspy.
- Seleccionar el protocolo de transporte compatible con el dispositivo y con Plaspy, normalmente UDP o TCP.
- Guardar y aplicar los ajustes en la herramienta de configuración de Falcom o en la interfaz del dispositivo.
- Confirmar que el dispositivo se registra y envía mensajes de posición y estado a Plaspy.
- Validar alertas, eventos de geocerca e informes de estado en Plaspy una vez que el dispositivo esté en línea.

## Ajustes del servidor Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: UDP o TCP
- Detección automática de protocolo en Plaspy

## Requisitos típicos antes de la configuración

- Asegúrese de que el FOX3-2G tenga alimentación y esté correctamente cableado según las indicaciones del instalador.
- SIM 2G activa con un plan de datos adecuado y APN correctamente configurado para el dispositivo.
- Acceso al método de configuración oficial de Falcom o al software que utilice su instalador.
- Conocimiento de la versión de firmware del dispositivo y de las herramientas del proveedor que aplican los ajustes.
- Una cuenta de Plaspy o un proceso de aprovisionamiento listo para que el dispositivo pueda registrarse y validarse en la plataforma.

## Cómo se conecta este rastreador a Plaspy

El FOX3-2G envía sus posiciones GNSS y el estado del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que Plaspy puede mostrar ubicaciones en tiempo real y eventos registrados. Plaspy detecta automáticamente el protocolo del rastreador, por lo que dispositivos que usan protocolos distintos pueden manejarse sin mapas de protocolo por dispositivo.

- Los reportes de posición periódicos se envían a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando UDP o TCP.
- Los reportes de estado y las alertas configuradas se reenvían a la plataforma Plaspy para su monitoreo.
- Los mensajes de geocerca y eventos generados por el rastreador aparecen en Plaspy una vez que el dispositivo esté reportando.
- Plaspy recibe el tráfico en el mismo puerto utilizado por todos los dispositivos soportados y aplica detección automática de protocolo.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Falcom o al software proporcionado por el vendedor o instalador.
2. En los ajustes de servidor del dispositivo, ingrese d.plaspy.com o 54.85.159.138 como servidor de destino.
3. Establezca el puerto del servidor en 8888, tal como requiere Plaspy.
4. Seleccione UDP o TCP si el FOX3-2G solicita elegir el tipo de transporte en la interfaz de configuración.
5. Aplique o guarde la configuración en la herramienta de Falcom y confirme que no aparezcan errores de configuración.
6. Reinicie el dispositivo si el firmware o el equipo lo requieren para que los ajustes de red entren en vigor.
7. Verifique que el FOX3-2G informe a Plaspy y que aparezca en su cuenta o vista de monitoreo en Plaspy.

## Ejemplo de comandos de configuración

El método exacto de configuración para el FOX3-2G depende de la utilidad de Falcom, la versión de firmware y el procedimiento del instalador. Plaspy espera que el dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y aceptará conexiones vía UDP o TCP. Use el software de configuración de Falcom o las instrucciones proporcionadas por el fabricante para establecer estos valores. Si su instalación utiliza comandos por texto o SMS proporcionados por Falcom, siga el conjunto de comandos oficial de Falcom para configurar servidor y puerto.

## Notas de configuración

- Las revisiones de firmware de Falcom y las herramientas de configuración pueden cambiar la forma en que se ingresan los ajustes de servidor y transporte; siempre consulte las notas de la versión de Falcom para la versión de su dispositivo.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que normalmente se usan el mismo puerto y endpoint en las implementaciones.
- Elegir UDP o TCP puede afectar la entrega de mensajes y el comportamiento de reintento; seleccione el transporte admitido por su dispositivo y acorde con sus necesidades operativas.
- El FOX3-2G admite antenas internas y externas; verifique la elección y la colocación de la antena durante la instalación para obtener la mejor recepción GNSS y celular.
- Si extiende la funcionalidad con IOBOX-MINI o IOBOX-CAN, confirme que esos módulos no modifiquen los ajustes de reporte de red requeridos por Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el FOX3-2G con Plaspy ofrece un camino sencillo para capturar datos de ubicación, estado y eventos de dispositivos Falcom y presentarlos en una plataforma central de gestión de flotas. Los ajustes de servidor compartidos y la detección automática de protocolo de Plaspy reducen la complejidad por dispositivo, de modo que los instaladores pueden concentrarse en una instalación de hardware fiable y en la configuración correcta del APN.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores Falcom visite https://www.plaspy.com. Para las instrucciones específicas del dispositivo, notas de firmware y comandos de configuración más recientes, consulte la documentación oficial de Falcom en https://www.falcom.de para verificar los métodos de configuración y los detalles del fabricante.
