---
slug: /tzone/tz_bc01/protocol
id: tz_bc01-protocol
sidebar_label: Protocol
title: TZone - TZ-BC01 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para usar el TZone TZ-BC01 con Plaspy, incluyendo ajustes de conexión y compatibilidad
keywords:
  - protocolo TZone TZ-BC01
  - protocolo GPS TZone TZ-BC01
  - TZone TZ-BC01 iBeacon
  - protocolo de rastreo TZone TZ-BC01
  - compatibilidad del rastreador TZone con Plaspy
  - protocolo TZone Plaspy
  - rastreo Bluetooth TZ-BC01
  - rastreo de activos iBeacon
  - gestión de flotas Plaspy
  - guía de integración de rastreadores
---

# TZone - Protocolo TZ-BC01

Esta página describe el contexto público del protocolo para usar el rastreador TZone TZ-BC01 con Plaspy. Se centra en cómo se comunica el dispositivo en términos generales, cómo Plaspy acepta y reconoce los datos entrantes del dispositivo y qué debe considerar al configurar un TZ-BC01 para integrarlo con la plataforma Plaspy.

El TZ-BC01 es un dispositivo compacto tipo baliza Bluetooth que transmite en el formato iBeacon de iPhone sobre Bluetooth Low Energy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto respecto al reporte y las funciones del firmware puede variar según la versión del firmware, la revisión de hardware y la implementación del fabricante, por lo que es recomendable confirmar los detalles específicos del equipo cuando sea necesario.

## Resumen del protocolo

El TZ-BC01 emite datos de proximidad usando el perfil iBeacon sobre Bluetooth Low Energy. Para que Plaspy consuma información de ubicación o presencia de un TZ-BC01, la carga útil de la baliza suele ser recogida por un receptor o gateway compatible y luego reenviada a la plataforma Plaspy a través de la red. La capa de protocolo en este contexto es el conjunto de convenciones de transmisión y reporte que permiten identificar el rastreador, asociarlo con un activo y usarlo en los servicios de monitoreo y ubicación de Plaspy.

- El rastreador usa transmisiones estilo iBeacon Bluetooth 4.0 para anunciar identidad e información de proximidad.
- El intervalo de transmisión y la potencia de salida son configurables en el dispositivo y afectan la frecuencia y la distancia de detección de la baliza.
- Un gateway en red, un puente mediante smartphone o un agregador normalmente reenvía las observaciones de la baliza a Plaspy para que se conviertan en telemetría utilizable.
- El protocolo permite asociar el rastreador a un registro de activo y proporcionar datos de presencia o ubicación aproximada.
- Plaspy se apoya en la identidad de la transmisión junto con metadatos de reenvío para correlacionar las balizas con dispositivos en la plataforma.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar datos de dispositivos desde un único endpoint compartido y para identificar automáticamente el protocolo entrante. Cuando un gateway o dispositivo de reenvío envía datos del rastreador a Plaspy, la plataforma usa las características de la conexión y del mensaje para determinar el tipo de rastreador, de modo que los usuarios por lo general no necesitan seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy recibe reportes de dispositivos en el dominio d.plaspy.com y en la IP de servidor 54.85.159.138 en el puerto compartido 8888.
- Todos los dispositivos compatibles con Plaspy usan el mismo puerto, lo que simplifica la configuración de gateways y las reglas de firewall.
- El dispositivo intermedio puede configurarse para reenviar datos a Plaspy usando UDP o TCP en el puerto 8888, según las capacidades del gateway.
- Cuando el endpoint de reenvío está configurado correctamente, Plaspy detecta automáticamente el protocolo del rastreador y asocia los datos entrantes con el modelo de dispositivo correcto.
- En la mayoría de los casos, usted configura su gateway o cliente de reenvío para apuntar a d.plaspy.com y Plaspy se encarga del resto.

## Contexto de transporte y conexión

Las elecciones de transporte y conexión determinan cómo las observaciones de la baliza llegan a Plaspy desde un dispositivo receptor. El TZ-BC01 en sí es una baliza Bluetooth; el transporte en la red lo realiza un intermediario que envía los datos observados hacia Plaspy. Entender este contexto de conexión ayuda a asegurar la entrega estable de los reportes del rastreador.

- Los dispositivos intermedios pueden reenviar observaciones detectadas a Plaspy usando UDP o TCP en el puerto 8888, según la configuración del reenvío.
- Los valores de endpoint recomendados para los dispositivos de reenvío son d.plaspy.com o 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados para reducir la complejidad de configuración entre distintos tipos de rastreadores.
- Los gateways y agregadores que recopilan balizas BLE necesitarán acceso de red al endpoint de Plaspy y reglas de firewall adecuadas para el puerto 8888.
- Elija UDP cuando prefiera bajo overhead y la red o el gateway lo soporten, o TCP para entrega confiable si el dispositivo de reenvío lo admite.

## Notas sobre compatibilidad del protocolo

- El comportamiento de emisión iBeacon, como UUID, major, minor e intervalo de publicidad, puede variar según el firmware y la configuración; verifique estos campos con el fabricante.
- Las revisiones de hardware o actualizaciones de firmware del TZ-BC01 pueden cambiar el timing de transmisión, las opciones de potencia de señal o características de seguridad como protección por contraseña.
- La forma en que las balizas son recolectadas y reenviadas a Plaspy depende del gateway o puente por smartphone elegido; no todos los reencaminadores soportan los mismos metadatos o opciones de transporte.
- La elección entre UDP o TCP para reenvío debe coincidir con las capacidades del gateway y los requisitos de confiabilidad de la red.
- Siempre valide que el dispositivo de reenvío apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 para garantizar la entrega correcta a Plaspy.
- Confirme cualquier función de seguridad o emparejamiento del TZ-BC01 para que quede contemplada en su configuración de recolección y reenvío.

## Por qué es importante entender el protocolo

Comprender el comportamiento público del protocolo del TZ-BC01 facilita una configuración correcta, operación predecible y una solución de problemas más eficiente al integrar el rastreador con Plaspy. Saber cómo se producen las transmisiones y cómo deben ser reenviadas a la plataforma reduce el tiempo de puesta en marcha y mejora la fiabilidad de los datos.

- Asegura una configuración correcta del gateway para que las observaciones de las balizas lleguen a Plaspy de forma consistente.
- Ayuda a diagnosticar problemas de visibilidad o alcance correlacionando el intervalo de transmisión y la potencia con los resultados observados.
- Facilita la planificación de compensaciones de vida útil de la batería según el intervalo de transmisión y la potencia.
- Reduce el tiempo de integración al alinear los campos de identidad de la baliza con los registros de activos en Plaspy.
- Aclara el papel de las diferencias de firmware y hardware cuando el comportamiento varía entre unidades.

## Por qué usar Plaspy con este protocolo

Usar el TZ-BC01 con Plaspy es conveniente cuando necesita una solución de baliza simple y de bajo consumo combinada con una plataforma en red para visibilidad y supervisión operativa. Plaspy puede tomar las observaciones reenviadas de las balizas e incorporarlas en vistas de seguimiento de activos, alertas y flujos de reporte junto con otros tipos de dispositivos, de modo que los equipos puedan gestionar flotas mixtas y elementos rastreados desde una única plataforma.

Si desea obtener más información sobre cómo Plaspy maneja la integración de dispositivos, visite https://www.plaspy.com para información de plataforma y documentación. Para detalles de protocolo y firmware específicos y actualizados del TZ-BC01, verifique la información con el fabricante en http://www.tzonedigital.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
