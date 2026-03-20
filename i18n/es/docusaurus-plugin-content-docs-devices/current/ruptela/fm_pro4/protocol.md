---
slug: /ruptela/fm_pro4/protocol
id: fm_pro4-protocol
sidebar_label: Protocol
title: Ruptela - FM-Pro4 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar Ruptela FM-Pro4 con Plaspy, incluyendo conexión y guía de compatibilidad
keywords:
  - protocolo Ruptela FM Pro4
  - protocolo GPS Ruptela FM Pro4
  - comunicación Ruptela FM Pro4
  - compatibilidad rastreador FM Pro4
  - integración FM Pro4 Plaspy
  - protocolo de rastreo vehicular Ruptela
  - gestión de flotas Ruptela FM Pro4
  - seguimiento de datos CANbus
  - protocolo de rastreadores Plaspy
  - guía de protocolo rastreador GPS
---

# Ruptela - Protocolo FM-Pro4

Esta página explica el contexto público del protocolo para usar el rastreador Ruptela FM-Pro4 con Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel, qué puntos de conexión expone Plaspy y qué debe considerar al apuntar un FM-Pro4 al servicio de Plaspy para reportar datos del vehículo y de sensores.

Plaspy utiliza configuraciones de conexión compartidas para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando este informa al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware del FM-Pro4, la revisión de hardware y la implementación de Ruptela, por lo que esta página ofrece orientación general y no detalles específicos de cada firmware.

## Visión general del protocolo

El protocolo de comunicación del FM-Pro4 es el mecanismo por el cual el rastreador se identifica ante un servidor, transmite ubicación y telemetría del vehículo y reporta métricas derivadas del CANbus y de sensores. Para integrarse con una plataforma como Plaspy, el papel del protocolo es hacer que los datos del dispositivo sean comprensibles y enrutable dentro de los flujos de trabajo de flotas sin exponer detalles de implementación de bajo nivel.

- Permite la transmisión de posición GNSS y datos de movimiento al servidor para seguimiento en tiempo real.
- Transmite telemetría del vehículo y datos del ordenador a bordo, como métricas derivadas del CANbus y parámetros del motor, de forma estructurada.
- Entrega entradas de sensores y estado de accesorios, por ejemplo sensores de combustible, sondas de temperatura y eventos de identificación de conductor.
- Permite al servidor asociar los reportes con una identidad de dispositivo específica para que los datos se atribuyan correctamente en Plaspy.
- Soporta transporte sobre sockets de red estándar para que los dispositivos puedan reportar a Plaspy usando redes IP comunes.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores con la menor configuración manual posible. Cuando un FM-Pro4 se configura para enviar datos a Plaspy, la plataforma aplica detección automática para identificar el protocolo del rastreador y encaminar los datos hacia la canalización de ingestión correcta.

- Plaspy expone un único endpoint público al que los dispositivos deben reportar para manejo automático.
- La plataforma detecta automáticamente el protocolo del rastreador cuando los datos llegan al endpoint de Plaspy.
- En la mayoría de los casos no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado correctamente para reportar a Plaspy.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles para simplificar la configuración e incorporación de dispositivos.
- Si un dispositivo no se detecta de forma automática, revisar la configuración del equipo, la versión de firmware y la documentación del fabricante suele ser el siguiente paso.

## Transporte y contexto de conexión

Las opciones de transporte y la dirección del endpoint forman parte de la configuración del dispositivo más que de los detalles internos del protocolo. El FM-Pro4 puede apuntarse a Plaspy usando los transportes de red estándar que soporta el dispositivo, y Plaspy documenta un único servidor y puerto públicos para el reporte.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según el soporte del equipo y la preferencia administrativa.
- El dominio del servidor de Plaspy usado para reportes es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El puerto usado para que los dispositivos reporten a Plaspy es 8888 y se comparte entre todos los dispositivos soportados por Plaspy.
- Apuntar el FM-Pro4 a d.plaspy.com o a la IP del servidor con el transporte y puerto correctos es el paso de configuración típico.
- Asegúrese de que las rutas de red, la configuración del APN y cualquier firewall intermedio permitan sesiones salientes hacia el endpoint de Plaspy en el transporte y puerto seleccionados.

## Notas de compatibilidad del protocolo

- Las diferencias de firmware entre unidades FM-Pro4 pueden cambiar qué campos de telemetría se envían o cómo se reportan ciertos accesorios.
- Las revisiones de hardware y accesorios opcionales, como sensores adicionales de combustible, dispositivos 1-Wire o periféricos RS232, pueden afectar el conjunto de puntos de datos disponibles.
- Algunas implementaciones prefieren TCP para entrega garantizada, mientras que otras usan UDP por menor sobrecarga; confirme que el firmware del FM-Pro4 admite el transporte elegido.
- Las herramientas de configuración y las versiones de firmware publicadas por Ruptela determinan el comportamiento exacto del dispositivo; siempre verifique con la documentación más reciente de Ruptela.
- Plaspy detecta el protocolo del dispositivo automáticamente, pero una identidad precisa del equipo y una configuración correcta en el rastreador son esenciales para una detección exitosa.
- Valide la compatibilidad en dispositivos representativos antes de desplegar grandes flotas a producción.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación a alto nivel ayuda a técnicos y administradores de flota a configurar los equipos correctamente, diagnosticar problemas de reporte y planificar mantenimientos o actualizaciones sin necesidad de inspeccionar cargas de paquetes.

- Acelera la puesta en marcha al clarificar qué destino y transporte se deben configurar en el rastreador.
- Facilita la resolución de problemas cuando los reportes del dispositivo no aparecen en Plaspy, permitiendo separar problemas de conexión de problemas de protocolo o firmware.
- Ayuda a determinar qué datos de vehículo y sensores se pueden esperar según la combinación de firmware y hardware.
- Soporta la planificación del uso de funciones como lecturas CANbus, agregación de sensores de combustible y monitoreo de temperatura.
- Mejora la confiabilidad a largo plazo al informar decisiones sobre actualizaciones de firmware y reemplazos de dispositivos.

## Por qué usar Plaspy con este protocolo

Usar el Ruptela FM-Pro4 con Plaspy ofrece a las organizaciones una vía práctica para llevar telemetría detallada del vehículo y datos de accesorios a una sola plataforma de gestión de flotas. La capacidad del FM-Pro4 para exponer información del CANbus, múltiples entradas de sensores y eventos de conductor complementa la detección automática de protocolos y el endpoint unificado de ingestión de Plaspy, reduciendo la carga de configuración.

Para obtener más información sobre cómo Plaspy maneja la conectividad de dispositivos y las funcionalidades de flota, visite https://www.plaspy.com. Para detalles de protocolo y firmware más actualizados y específicos del dispositivo, consulte la documentación y actualizaciones de Ruptela en https://ruptela.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
