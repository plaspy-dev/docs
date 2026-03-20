---
slug: /xirgo/lx40/protocol
id: lx40-protocol
sidebar_label: Protocol
title: Xirgo - LX40 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Xirgo LX40 con Plaspy y lograr un rastreo de flotas confiable
keywords:
  - protocolo Xirgo LX40
  - protocolo GPS LX40
  - protocolo GPS Xirgo
  - compatibilidad LX40 Plaspy
  - protocolo de rastreo vehicular
  - telemática LX40
  - protocolo de rastreador Xirgo
  - sensores Bluetooth LX40
  - compatibilidad CANBUS LX40
  - protocolo de dispositivo Plaspy
---

# Xirgo - Protocolo LX40

Esta página ofrece una descripción pública y no sensible del contexto de comunicación para usar el rastreador Xirgo LX40 con Plaspy. Explica cómo el LX40 intercambia información de ubicación y telemetría con la plataforma Plaspy, qué papel desempeña el protocolo de reporte del rastreador en ese intercambio y qué ajustes de conexión se usan habitualmente para apuntar los dispositivos LX40 a Plaspy para rastreo en tiempo real y administración de dispositivos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y las decisiones de implementación del fabricante. La familia LX40 incluye variantes con E/S programables, compatibilidad CANBUS, soporte para sensores BLE y un motor de scripting que puede afectar cuándo y cómo el dispositivo envía datos a un servidor; esas características influyen en lo que Plaspy recibe, pero no cambian el endpoint público ni el puerto usado para el reporte.

## Visión general del protocolo

El protocolo que utiliza el LX40 define cómo el rastreador se identifica ante un servidor, cómo reporta posición y telemetría, y cómo se transmiten eventos auxiliares como identificación de conductor o disparos de geocerca a una plataforma de flotas como Plaspy. Esta página se centra en el contexto público del protocolo más que en los formatos internos de los paquetes.

- Permite la identificación del dispositivo y el envío regular de posición GPS y telemetría a Plaspy.
- Transporta notificaciones de eventos como encendido/apagado, entrada/salida de geocercas y eventos de identificación de conductor hacia la plataforma.
- Lleva telemetría CANBUS y de sensores cuando la variante LX40 recopila esos datos para que Plaspy los normalice y muestre.
- Soporta gestión remota de dispositivos y actualizaciones OTA cuando el rastreador está configurado para reportar al servidor de flotas.
- Funciona sobre transportes de red estándar, por lo que el LX40 puede apuntarse a Plaspy con ajustes comunes de endpoint.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador a partir del reporte que envía el dispositivo. En la mayoría de instalaciones LX40, usted o el instalador configuran el equipo para reportar a Plaspy y la plataforma se encarga de la detección del protocolo sin necesidad de selección manual.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y envía datos.
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto de Plaspy es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- En instalaciones típicas, el instalador apunta el LX40 al endpoint de Plaspy y no se requiere seleccionar el protocolo dentro de Plaspy.
- Una identificación correcta del dispositivo en la primera conexión ayuda a que Plaspy asocie la telemetría entrante con el registro de dispositivo correspondiente.

## Contexto de transporte y conexión

El LX40 puede configurarse para usar protocolos de transporte comunes para comunicarse con un back end. Al integrarse con Plaspy, los dispositivos deben apuntar al endpoint de Plaspy para que la ubicación y la telemetría fluyan hacia la plataforma para su procesamiento y visualización.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el firmware del LX40 y la preferencia del instalador.
- Los dispositivos pueden apuntarse al dominio de servidor Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración y el aprovisionamiento.
- La estabilidad de la red y el comportamiento del operador móvil pueden afectar la entrega de reportes en UDP frente a TCP, por lo que la elección del transporte a veces se guía por las necesidades del despliegue.
- Asegúrese de que las reglas de firewall y la configuración del APN permitan conexiones salientes a d.plaspy.com en el puerto 8888 desde el módem del vehículo.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades LX40 pueden modificar qué campos de telemetría están presentes o con qué frecuencia se envían los reportes; siempre valide el comportamiento según el nivel de firmware del dispositivo.
- Las revisiones de hardware y las variantes opcionales de E/S o CANBUS pueden exponer objetos de telemetría distintos que Plaspy normalizará de forma diferente.
- La elección del transporte, UDP o TCP, puede afectar las garantías de entrega y debe alinearse con las recomendaciones del instalador para el entorno de la flota.
- Los scripts configurables por el fabricante y los parámetros personalizados pueden alterar el comportamiento de reporte y los umbrales de eventos; verifique la configuración al solucionar problemas.
- Apuntar el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888 es la forma estándar de integrarse con Plaspy, pero confirme estos ajustes durante el despliegue.
- Para comportamientos avanzados o cambios, consulte la documentación de Xirgo sobre notas específicas de firmware antes de ajustar flotas en producción.

## Por qué es importante entender el protocolo

Comprender de forma práctica cómo el LX40 se comunica con Plaspy ayuda a asegurar una incorporación fluida, reportes confiables y una resolución más rápida de problemas cuando los dispositivos no se comportan como se espera.

- Agiliza la configuración inicial al asegurar que los dispositivos apunten al endpoint y puerto correctos de Plaspy.
- Facilita el diagnóstico de problemas de conectividad frente a problemas de configuración al separar fallas de transporte de diferencias de protocolo o firmware.
- Aclara qué telemetría y eventos aparecerán en Plaspy según la variante del dispositivo y la versión de firmware.
- Permite tomar decisiones informadas sobre la selección de transporte y los intervalos de reporte para cada caso de uso de la flota.
- Soporta flujos predecibles de actualización OTA y gestión remota cuando Plaspy recibe los reportes esperados del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el LX40 con Plaspy ofrece a los operadores de flotas una combinación flexible de telemática configurable a bordo y una plataforma centralizada para rastreo en tiempo real, alertas e informes. El motor de scripting del LX40, sus entradas programables, las variantes con capacidad CANBUS y el soporte para sensores BLE permiten a los integradores adaptar la recopilación de datos a las necesidades operativas, mientras que Plaspy proporciona el endpoint y las herramientas para consolidar esos datos en información accionable.

To learn more about Plaspy and how it works with compatible trackers visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance consult the manufacturer at https://xirgo.com/. Protocol support and firmware behavior can change over time so verify device behavior against the latest official documentation before deploying at scale.
