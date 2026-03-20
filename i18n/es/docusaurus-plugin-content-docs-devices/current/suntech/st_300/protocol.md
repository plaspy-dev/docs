---
slug: /suntech/st_300/protocol
id: st_300-protocol
sidebar_label: Protocol
title: Suntech - ST 300 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Suntech ST 300 y su compatibilidad con Plaspy, con detalles de conexión e integración
keywords:
  - Protocolo Suntech ST 300
  - Protocolo GPS Suntech ST 300
  - Suntech ST 300 Plaspy
  - Protocolo de comunicación ST 300
  - Rastreador ST300 para flotas
  - Rastreador GPRS Suntech
  - Rastreador CAN Bus Suntech
  - Rastreo vehicular Plaspy
  - Protocolo de rastreador GPS Plaspy
  - Compatibilidad ST300
---

# Suntech - Protocolo ST 300

Esta página describe el contexto público del protocolo para usar el rastreador Suntech ST 300 con Plaspy. Explica cómo suele comunicarse el dispositivo a través de redes móviles y los detalles de conexión que necesita conocer para enviar los reportes del ST 300 a Plaspy sin exponer implementaciones sensibles.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo para el ST 300 puede variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y en orientación práctica de compatibilidad.

## Descripción general del protocolo

El protocolo de comunicación del ST 300 regula cómo el rastreador envía información de posición, estado y eventos a un servidor como Plaspy. Para integradores y administradores, comprender el papel del protocolo ayuda a asegurar que el dispositivo esté configurado para alcanzar el endpoint de Plaspy y que los tipos de datos esperados estén disponibles para la supervisión y generación de informes de la flota.

- Permite al ST 300 enviar actualizaciones de ubicación, indicadores de estado y notificaciones de eventos a un servidor remoto
- Incluye la identidad del dispositivo para que Plaspy pueda asociar los informes entrantes con el vehículo o activo correcto
- Transporta telemetría como coordenadas GPS, calidad de la señal GPS, estados de entradas y valores de sensores analógicos que Plaspy presenta a los usuarios
- Soporta múltiples opciones de transporte para que el dispositivo pueda reportar por datos celulares usando los métodos de red que admite el rastreador
- Permite el envío de comandos de configuración y cambios de comportamiento cuando el dispositivo soporta configuración remota por red

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes en un endpoint público compartido y aplica detección automática para determinar el protocolo del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo en Plaspy cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en un puerto único y consistente para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador
- Configure su ST 300 para reportar a d.plaspy.com o a la IP del servidor de Plaspy 54.85.159.138 y use el puerto compartido
- Cuando el dispositivo está apuntando al endpoint de Plaspy, la detección de protocolo ocurre automáticamente en el lado de Plaspy
- Normalmente no es necesaria la selección manual del protocolo dentro de Plaspy si el rastreador apunta correctamente al endpoint de Plaspy
- Si encuentra comportamiento inesperado, verifique la configuración de reporte del dispositivo, la versión de firmware y que el rastreador pueda conectarse al servidor Plaspy desde la red del vehículo

## Transporte y contexto de conexión

El ST 300 soporta transportes por datos celulares y puede configurarse para usar distintos mecanismos de red. Para la integración con Plaspy, los detalles públicos relevantes son la dirección del servidor y el puerto compartido que usan todos los rastreadores.

- El ST 300 puede configurarse para usar UDP o TCP en el puerto 8888 según el modelo y la configuración del equipo
- Los dispositivos pueden apuntar al nombre de host de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138
- El puerto 8888 es el puerto común usado por Plaspy para todos los dispositivos y es el puerto por defecto para reportes del ST 300 a Plaspy
- Elija UDP o TCP según las opciones de configuración del rastreador y el entorno de red; Plaspy acepta ambos transportes en el mismo puerto
- Asegúrese de que la SIM del vehículo y el operador permitan el transporte elegido y de que la configuración APN en el dispositivo sea correcta para datos móviles

## Notas de compatibilidad del protocolo

- El comportamiento del ST 300 y las funciones de reporte disponibles pueden variar entre versiones como ST300V voice, ST300R RS232, ST300B basic, ST300A advanced y otras
- Las revisiones de firmware o las variantes de hardware pueden cambiar qué campos, eventos o valores de sensores reporta el dispositivo
- Las funciones relacionadas con CAN Bus dependen de la opción instalada y de los protocolos de bus soportados, como J1939 u OBDII en la unidad específica
- La selección de transporte (UDP versus TCP) se configura en el dispositivo y debe coincidir con lo que la red y Plaspy esperan
- Valide siempre la compatibilidad de las funciones deseadas contra la configuración del dispositivo y la documentación del fabricante
- En caso de duda, confirme la versión de firmware y las funciones disponibles antes de un despliegue a gran escala

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del ST 300 mejora el éxito en la configuración, reduce el tiempo de resolución de problemas y ayuda a mantener un rastreo confiable durante la vida útil del dispositivo. Saber cómo el rastreador reporta y qué puede enviar facilita mapear las salidas del equipo a las funciones de Plaspy y manejar expectativas sobre la calidad de la telemetría.

- Ayuda a garantizar que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP de Plaspy y al puerto correcto
- Reduce el tiempo invertido en solucionar datos faltantes o problemas de conectividad al acotar fallas a transporte, APN o firmware
- Permite mapear correctamente entradas del dispositivo, valores analógicos y datos de CAN Bus en los paneles de Plaspy
- Facilita la planificación de la gestión de energía y el comportamiento en modo reposo para mantener la cadencia de reportes esperada
- Orienta la decisión sobre actualizar firmware o elegir variantes de hardware según la telemetría que su flota requiera

## Por qué usar Plaspy con este protocolo

Usar el Suntech ST 300 con Plaspy ofrece un camino sencillo para centralizar la ubicación del vehículo, el estado y los datos de sensores en una sola plataforma. La familia ST 300 proporciona conectividad flexible y una variedad de opciones de hardware que cubren muchos casos de uso telemático, y la detección automática de protocolo y los ajustes de conexión compartidos de Plaspy simplifican la integración.

Si desea saber más sobre cómo Plaspy trabaja con dispositivos como el Suntech ST 300, visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y variaciones de hardware, verifique la documentación más reciente del fabricante en http://www.suntechint.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
