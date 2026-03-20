---
slug: /ulbotech/t356/protocol
id: t356-protocol
sidebar_label: Protocol
title: Ulbotech - T356 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador Ulbotech T356 con Plaspy usando ajustes de conexión compartidos y detección automática
keywords:
  - protocolo Ulbotech T356
  - protocolo GPS Ulbotech T356
  - rastreo Ulbotech T356
  - compatibilidad T356 Plaspy
  - protocolo de rastreador GPS Ulbotech
  - rastreo vehicular T356
  - rastreo de flotas T356
  - rastreador T356 Wi Fi
  - protocolo de dispositivo Plaspy
  - protocolo de telemetría vehicular
---

# Ulbotech - T356 — Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Ulbotech T356 con Plaspy. Se enfoca en cómo el equipo se comunica con Plaspy mediante ajustes de conexión compartidos, cuál es su rol en la comunicación y qué aspectos verificar al integrar el T356 en una implementación de Plaspy. El contenido es de alto nivel y evita detalles de firmware o información propietaria que no estén públicamente documentados por el fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y la disponibilidad de funciones pueden variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que las indicaciones a continuación buscan explicar el contexto público y las consideraciones de integración para el T356 sin entrar en detalles sensibles.

## Resumen del protocolo

El protocolo usado por el T356 regula cómo el dispositivo se identifica, reporta posiciones GNSS y telemetría del vehículo, y entrega registros almacenados al servidor de Plaspy cuando hay conectividad de red. En el caso del T356, el dispositivo está diseñado para realizar cargas casi en tiempo real por Wi Fi y descargar registros almacenados cuando se conecta a redes configuradas, además de reportar datos OBD y de sensores integrados al bus del vehículo y sensores a bordo.

- Permite identificar el dispositivo y la sesión para que Plaspy pueda asociar la telemetría con el activo correcto.
- Transporta actualizaciones de ubicación, telemetría OBD y J1939, estados de ignición y entradas, y registros de eventos al servidor.
- Soporta reportes periódicos en vivo y la descarga masiva de registros almacenados cuando hay conectividad.
- Proporciona un mecanismo para reportar eventos y alertas como acciones del inmovilizador, entradas SOS y eventos de acelerómetro.
- Asegura que los datos sean utilizables por Plaspy para mapeo, alertas y telemetría de flota sin exponer detalles internos del dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para dispositivos que estén configurados correctamente para reportar al servidor de Plaspy. En la mayoría de las integraciones con el T356, no es necesario seleccionar manualmente un parser dentro de Plaspy siempre que el equipo apunte al endpoint de Plaspy y use el transporte compatible.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint compartido.
- Si el T356 está configurado para apuntar al endpoint de Plaspy y utilizar el transporte correcto, la selección manual del protocolo dentro de Plaspy suele ser innecesaria.
- La identificación y configuración adecuada del dispositivo en el rastreador garantizan que Plaspy pueda asociar los datos entrantes con la cuenta y el activo correctos.

## Transporte y contexto de conexión

Las opciones de conexión determinan cómo el T356 envía sus mensajes de protocolo a Plaspy. El T356 está diseñado principalmente para operar por Wi Fi, usando registros almacenados y descarga automática para entregar telemetría a Plaspy cuando el dispositivo se conecta a redes configuradas. Dependiendo de la configuración del equipo y las opciones de firmware del fabricante, el T356 puede usar UDP o TCP en el puerto de Plaspy.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- El T356 puede apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto para conexiones entrantes de dispositivos.
- Los flujos de offload por Wi Fi suelen iniciar cargas masivas cuando el T356 se asocia a un punto de acceso configurado.
- La fiabilidad de la red y la configuración local de Wi Fi influyen en la frecuencia con la que el dispositivo realiza actualizaciones en vivo frente a la descarga de registros almacenados.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden cambiar la forma en que el T356 implementa el comportamiento del protocolo y qué campos de telemetría están disponibles.
- Las opciones de configuración del fabricante pueden permitir seleccionar el transporte UDP o TCP, o ajustar el intervalo de reporte y el comportamiento de offload.
- La disponibilidad de telemetría OBD y para vehículos pesados depende del bus del vehículo y de la capacidad del firmware del T356 para interpretar datos OBD o J1939.
- Cambios en la configuración de Wi Fi, métodos de autenticación de puntos de acceso o listas de perfiles pueden afectar la capacidad del dispositivo para descargar registros almacenados.
- Siempre valide los ajustes de transporte y la configuración del endpoint en el dispositivo para asegurar que reporte de forma confiable a d.plaspy.com en el puerto 8888.
- Al integrar muchas unidades, pruebe un grupo reducido en condiciones de red representativas para confirmar subidas consistentes y el reconocimiento del protocolo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación en términos generales ayuda a asegurar una integración confiable entre el T356 y Plaspy, facilita la resolución de problemas cuando los dispositivos no aparecen o no entregan la telemetría esperada, y apoya decisiones informadas sobre la selección de transporte y las actualizaciones de firmware.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el puerto y transporte soportados.
- Facilita la interpretación de qué campos de telemetría el T356 proporcionará a Plaspy y cuáles dependerán de la exposición del bus del vehículo.
- Apoya la resolución de problemas relacionados con el timing de las subidas, el comportamiento de descarga de registros almacenados y cómo se reportan los registros de eventos.
- Informa decisiones sobre actualizaciones de firmware, gestión de perfiles Wi Fi y prácticas de despliegue para maximizar subidas confiables.
- Reduce el tiempo de integración al clarificar dónde deben ajustarse las configuraciones en el dispositivo frente a las del servidor.

## Por qué usar Plaspy con este protocolo

Usar el Ulbotech T356 con Plaspy ofrece un enfoque de bajo costo operativo para el rastreo vehicular al aprovechar el offload por Wi Fi, el almacenamiento local del dispositivo y la telemetría integrada del vehículo. Para flotas y programas que pueden llevar regularmente los vehículos a cobertura Wi Fi conocida, el almacenamiento del T356 y su soporte OBD permiten entregar datos detallados de ubicación y vehículo a Plaspy sin incurrir en tarifas recurrentes de datos celulares.

El endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación de dispositivos: apunte el T356 a d.plaspy.com o 54.85.159.138 en el puerto 8888, elija el transporte deseado (TCP o UDP) si es configurable, y permita que Plaspy detecte y procese la telemetría entrante. Para obtener más información sobre Plaspy y cómo puede funcionar con el T356, visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información y las notas de firmware más recientes con el fabricante en http://www.ulbotech.com/.
