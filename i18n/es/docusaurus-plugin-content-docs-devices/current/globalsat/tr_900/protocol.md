---
slug: /globalsat/tr_900/protocol
id: tr_900-protocol
sidebar_label: Protocol
title: GlobalSat - TR-900 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar GlobalSat TR-900 con Plaspy y guía de conexión
keywords:
  - Protocolo GlobalSat TR-900
  - Protocolo GPS GlobalSat TR-900
  - Protocolo TR-900 OBDII
  - Protocolo de seguimiento TR-900
  - Compatibilidad GlobalSat Plaspy
  - Protocolo de comunicación TR-900
  - Rastreador de vehículo TR-900
  - Protocolo rastreador GPS Plaspy
  - Rastreador de datos OBDII
  - Seguimiento de flota GlobalSat
---

# GlobalSat - Protocolo TR-900

Esta página ofrece contexto público sobre el protocolo para utilizar el rastreador GlobalSat TR-900 con Plaspy. Describe cómo el comportamiento de reporte del TR-900 y sus eventos basados en datos OBDII se relacionan con una plataforma de gestión de flotas como Plaspy, sin exponer detalles privados de implementación. El TR-900 es un dongle OBDII plug and play con conectividad 3G que envía posición GPS y datos de diagnóstico del vehículo; esta guía se centra en el contexto de comunicación necesario para una integración exitosa.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta guía debe usarse junto con la documentación del fabricante para confirmar ajustes específicos del dispositivo y detalles de firmware.

## Visión general del protocolo

El TR-900 emplea un enfoque de reportes configurable y basado en eventos para combinar la telemetría GPS con valores de diagnóstico OBDII. A grandes rasgos, el protocolo del dispositivo define cómo el rastreador se identifica, cuándo envía eventos y de qué manera entrega la posición y los diagnósticos del vehículo a un servidor remoto.

- Permite que el rastreador se identifique y entregue un flujo de telemetría GPS y OBDII a una plataforma backend.
- Codifica disparadores de eventos como exceso de velocidad, frenadas bruscas detectadas por el sensor G, o códigos de diagnóstico (DTC) para su procesamiento en servidor.
- Transporta información de estado del vehículo que Plaspy puede mapear a campos útiles como acumulado de kilometraje, alertas de RPM y alertas de temperatura del refrigerante.
- Soporta intervalos de reporte configurables y mensajes desencadenados por eventos para balancear detalle y uso de datos.
- Permite combinar ubicación y datos OBDII en informes únicos para que los sistemas aguas abajo reciban telemetría contextualizada.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de los rastreadores en un endpoint y puerto compartidos y utiliza ese tráfico para determinar cómo interpretar los mensajes entrantes. Plaspy detecta el protocolo del dispositivo de forma automática, por lo que la mayoría de los usuarios no necesita seleccionar un protocolo manualmente si el dispositivo está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para la configuración de destino directo.
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos compatibles.
- Que todos los dispositivos usen el mismo puerto simplifica la configuración del dispositivo y el enrutamiento en el servidor.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente dirigido al endpoint de Plaspy.
- Si un dispositivo está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy procesará la telemetría y mapeará los campos comunes automáticamente.

## Transporte y contexto de conexión

El transporte y la dirección del servidor determinan cómo el TR-900 entrega sus informes a Plaspy. El TR-900 soporta transporte por red celular y puede configurarse para enviar datos sobre transportes IP comunes según el firmware y los ajustes.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección de servidor al ajustar el parámetro correspondiente.
- El puerto es 8888 y es el único puerto en el que Plaspy escucha tráfico de rastreadores.
- Usar el transporte y la dirección de servidor correctos en el dispositivo es el primer paso para asegurar que Plaspy reciba e identifique los mensajes del protocolo.
- Problemas a nivel de red, como ajustes de APN, restricciones del operador o conectividad 3G intermitente, pueden afectar la entrega de mensajes incluso cuando el protocolo y la configuración del servidor son correctos.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué eventos se reportan por defecto y qué PIDs OBDII se incluyen en la telemetría.
- Revisiones de hardware o variantes regionales de firmware pueden alterar las opciones de reporte disponibles o los valores por defecto de transporte.
- Las herramientas de configuración del fabricante o los comandos por SMS pueden ser necesarios para apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Algunas implementaciones prefieren UDP por su menor sobrecarga mientras que otras usan TCP por su entrega fiable; confirme que el dispositivo soporte el transporte elegido.
- En el TR-900 son posibles combinaciones de eventos personalizadas, por lo que conviene verificar qué reglas de evento están activas tras actualizaciones de firmware.
- Siempre valide la compatibilidad contra la documentación oficial más reciente del GlobalSat TR-900 cuando se requiera un comportamiento preciso.

## Por qué es importante comprender el protocolo

Saber cómo se comunica el TR-900 y qué envía ayuda a garantizar una integración fiable con Plaspy y facilita la resolución de problemas cuando faltan datos o aparecen inconsistencias. Una comprensión práctica reduce el tiempo de configuración y mejora la calidad de la ubicación y los diagnósticos del vehículo disponibles para los gestores de flota.

- Confirma que el dispositivo está apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888 para que Plaspy pueda recibir los mensajes.
- Ayuda a identificar si una discordancia de transporte, como TCP frente a UDP, está impidiendo la entrega de datos.
- Aclara qué valores OBDII y qué eventos se esperan de una versión de firmware concreta para un mapeo de campos preciso.
- Facilita la interpretación de alertas como reportes de impacto, estado MIL o temperatura del refrigerante cuando se conoce la lógica de eventos.
- Favorece la fiabilidad a largo plazo al asegurar que las actualizaciones de firmware y cambios de configuración mantengan el comportamiento de reporte requerido.

## Por qué usar Plaspy con este protocolo

Usar el GlobalSat TR-900 con Plaspy proporciona a las organizaciones una forma centralizada de recopilar posición del vehículo y datos de diagnóstico OBDII de manera conjunta. El reporte basado en eventos y la captura OBDII del TR-900 son adecuados para casos de uso de monitoreo de flota como análisis de comportamiento del conductor, disparadores de mantenimiento preventivo y seguimiento de kilometraje; Plaspy ofrece las herramientas a nivel de plataforma para ingerir y presentar esos datos.

Para conocer más sobre Plaspy y cómo se integra con protocolos de dispositivos como el TR-900 visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware e instrucciones de configuración actualizadas, verifique la información con el fabricante en https://www.globalsat.com.tw/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que consultar la documentación oficial de GlobalSat asegura precisión para su despliegue.
