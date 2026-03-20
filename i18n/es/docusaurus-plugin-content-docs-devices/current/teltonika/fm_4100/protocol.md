---
slug: /teltonika/fm_4100/protocol
id: fm_4100-protocol
sidebar_label: Protocol
title: Teltonika - FM 4100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública para integrar el rastreador Teltonika FM 4100 con Plaspy, cubre conexiones, transporte y compatibilidad
keywords:
  - Protocolo Teltonika FM 4100
  - Protocolo GPS Teltonika FM 4100
  - Protocolo Teltonika FM 4100 para Plaspy
  - Protocolo de comunicación Teltonika FM 4100
  - Protocolo de rastreo Teltonika FM 4100
  - Integración FM 4100 Plaspy
  - Protocolo de rastreo Teltonika
  - Rastreo vehicular Teltonika FM 4100
  - Protocolo tracker GSM FM 4100
  - Compatibilidad Teltonika FM 4100
---

# Teltonika - Protocolo FM 4100

Esta página explica, en términos públicos y no sensibles, el contexto del protocolo para usar el rastreador Teltonika FM 4100 con Plaspy. Se enfoca en cómo comunica el dispositivo con Plaspy a alto nivel y en cuáles ajustes de conexión se usan comúnmente para enviar ubicación, entradas de sensores y datos telemáticos. El objetivo es ofrecer orientación clara que le ayude a planear la integración y la resolución de problemas sin exponer detalles internos de parsers o firmware.

Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo, las funciones disponibles y la cadencia de mensajes pueden variar según la versión de firmware del FM 4100, revisiones de hardware y decisiones del fabricante. Para comandos específicos del dispositivo, formatos de mensaje o notas de firmware más recientes, consulte la documentación del fabricante.

## Resumen del protocolo

El protocolo del FM 4100 es el mecanismo de reporte que permite enviar ubicación, estado y datos de entradas/salidas desde el rastreador hacia un servidor remoto como Plaspy. En la práctica, el equipo recoge coordenadas GNSS, datos de la red GSM y valores de periféricos y los transmite por el canal configurado para que Plaspy los muestre en la plataforma.

- Permite que el FM 4100 envíe reportes de ubicación y telemetría a un servidor backend
- Transporta información de identificación para que Plaspy asocie los reportes con un registro de dispositivo
- Lleva el estado de periféricos como entradas digitales, lecturas analógicas y datos CAN hacia Plaspy
- Funciona sobre los enlaces celulares soportados por el equipo, por ejemplo GPRS o SMS según la configuración
- Permite recibir mensajes periódicos o activados por eventos para seguimiento y monitoreo

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint compartido y detecta automáticamente el protocolo que usa el FM 4100. Esta detección automática significa que, en la mayoría de los casos, no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está configurado para apuntar al endpoint de Plaspy.

- Plaspy escucha en el mismo puerto para todos los trackers soportados y aplica detección automática de protocolo
- Cuando un FM 4100 reporta al endpoint de Plaspy, la plataforma identifica el dispositivo por sus identificadores reportados
- Normalmente solo necesita configurar el dispositivo para enviar reportes a Plaspy; la plataforma gestiona el mapeo de protocolo
- Una configuración correcta del equipo y la compatibilidad de firmware mejoran la precisión de la detección y la integridad de los datos
- Si un dispositivo no aparece, verifique la configuración de reporte y la accesibilidad de red hacia el endpoint de Plaspy

## Transporte y contexto de conexión

El contexto de conexión describe cómo el FM 4100 alcanza a Plaspy a través de la red celular y qué endpoints se usan comúnmente. El FM 4100 puede usar transporte TCP o UDP según la configuración del equipo y el comportamiento del operador, y reporta a Plaspy usando el servidor y puerto compartidos que se describen a continuación.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- El puerto que usa Plaspy para conexiones de dispositivos es 8888 y se comparte entre todos los dispositivos soportados
- El FM 4100 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la configuración
- Los dispositivos deben configurarse para reportar al endpoint de Plaspy usando el transporte elegido y la APN correcta para la tarjeta SIM

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la cadencia de mensajes, campos opcionales o funciones soportadas; consulte las notas de la versión del firmware
- Revisiones de hardware u opciones como CAN o RS232 pueden modificar los datos disponibles que el equipo reporta
- La selección de transporte (UDP versus TCP) puede afectar las características de entrega y debe coincidir con la configuración del operador y del equipo
- El reporte por SMS está disponible en el FM 4100 como portador alternativo pero requiere un flujo de manejo distinto al reporte por IP
- Verifique que el IMEI del dispositivo y los identificadores de reporte estén configurados correctamente para que Plaspy pueda asociar los paquetes entrantes con el activo correcto
- Para integraciones avanzadas que impliquen mapeos de IO personalizados o extracción de datos CAN, consulte los recursos del fabricante antes de desplegar a escala

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del rastreador ayuda a garantizar un despliegue confiable, acelera la resolución de problemas y facilita mapear las capacidades del dispositivo a los requisitos operativos en Plaspy. Saber cómo se envían los datos y qué las influye reduce la fricción en la integración y mejora la fiabilidad a largo plazo.

- Diagnóstico más rápido cuando falta ubicación o telemetría comprobando transporte y cadencia de reportes
- Mejor planificación de las necesidades de datos como canales IO, datos CAN o salida NMEA según las capacidades del equipo
- Decisiones informadas sobre actualizaciones de firmware y cambios de configuración que pueden afectar el contenido de los mensajes
- Expectativas claras sobre el comportamiento en diferentes portadores como GPRS frente a SMS
- Validación más sencilla de la accesibilidad del dispositivo al endpoint de Plaspy usando el dominio o IP conocidos

## Por qué usar Plaspy con este protocolo

Usar el Teltonika FM 4100 con Plaspy ofrece a las organizaciones una vía práctica para recopilar coordenadas GNSS, monitorear entradas digitales y analógicas y aprovechar integraciones CAN para telemetría vehicular. El FM 4100 aporta la capacidad de sensado y reporte, mientras que Plaspy proporciona el backend para recibir, normalizar y visualizar esos datos en flujos de monitoreo y operación.

To learn more about how Plaspy receives and uses data from devices like the FM 4100 visit https://www.plaspy.com. For the most current and detailed device protocol specifications, firmware changes, and hardware notes consult Teltonika documentation at https://www.teltonika-gps.com/ to verify device specific behavior and compatibility.
