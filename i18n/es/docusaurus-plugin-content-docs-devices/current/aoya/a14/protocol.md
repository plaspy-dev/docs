---
slug: /aoya/a14/protocol
id: a14-protocol
sidebar_label: Protocol
title: AoYa - A14 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador AoYa A14 y cómo se comunica con Plaspy para rastreo y configuración
keywords:
  - AoYa A14
  - Protocolo AoYa A14
  - Rastreador GPS AoYa
  - Protocolo GPS A14
  - Rastreador A14 Plaspy
  - Compatibilidad Plaspy
  - Rastreo de vehículos
  - Integración rastreo de flotas
  - Protocolo de comunicación GPS
  - Configuración de rastreador Plaspy
---

# AoYa - Protocolo A14

Esta página describe el contexto público del protocolo para usar el rastreador GPS AoYa A14 con Plaspy. Explica cómo el dispositivo suele comunicarse con un servidor de rastreo, qué papel cumple el protocolo de comunicación en la entrega de datos de ubicación y estado, y cuáles son los parámetros de conexión de Plaspy relevantes para una integración básica. El objetivo es ofrecer una visión clara y no sensible que facilite la configuración y solución de problemas sin exponer detalles propietarios.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint correcto. El comportamiento exacto del A14 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en conceptos generales de comunicación y en el contexto de conexión con Plaspy más que en detalles internos del dispositivo.

## Visión general del protocolo

El protocolo del A14 describe cómo el rastreador empaqueta y transmite telemetría, identificación e información de estado desde el dispositivo hacia un servidor remoto, y cómo se pueden iniciar intercambios de configuración o comandos. Componentes en red como el receptor GPS, el módem celular y la batería de emergencia permiten que el rastreador produzca telemetría útil incluso en condiciones de baja energía o movilidad transitoria.

- Permite que el rastreador informe datos de posición derivados de GPS, AGPS y fuentes LBS a un servidor remoto.
- Transporta la identidad y el estado del dispositivo para que el servidor pueda asociar los datos entrantes con una unidad A14 concreta.
- Envía telemetría periódica además de mensajes por eventos como movimiento, SOS o cambios de alimentación según lo definido por el fabricante.
- Permite la configuración remota cuando el dispositivo admite ajustes por servidor o mediante SMS, facilitando cambios en el intervalo de reporte y el destino de conexión.
- Soporta entrega confiable de mensajes sobre la red celular usando UDP o TCP según la configuración del equipo.
- Funciona en conjunto con el hardware del rastreador, como el receptor UBLOX y el módem celular, para ofrecer seguimiento continuo y reporte de emergencias.

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos de muchos modelos distintos de rastreadores y determina automáticamente el protocolo entrante cuando un dispositivo está correctamente configurado para reportar al endpoint de Plaspy. En la mayoría de los casos el usuario no necesita seleccionar un protocolo dentro de Plaspy si el dispositivo apunta al servidor de Plaspy y utiliza los ajustes de transporte soportados.

- Plaspy escucha en un endpoint compartido para recibir los reportes de los dispositivos y aplica detección automática de protocolo.
- El endpoint del servidor de Plaspy usado para el reporte de dispositivos es d.plaspy.com.
- Plaspy es accesible en la IP pública 54.85.159.138 para despliegues que usan direccionamiento numérico.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto del servidor para datos entrantes.
- Los dispositivos pueden configurarse para enviar datos por UDP o TCP al endpoint de Plaspy según sus capacidades.
- Si un rastreador está configurado para reportar a d.plaspy.com en el puerto correcto, Plaspy intentará identificar y parsear automáticamente el protocolo entrante.

## Contexto de transporte y conexión

El A14 puede enviar telemetría sobre la red celular usando protocolos de transporte estándar. Plaspy acepta conexiones entrantes en un único puerto para todos los dispositivos y soporta tanto direccionamiento por dominio como numérico, por lo que los rastreadores pueden configurarse de cualquiera de las dos formas.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y comportamiento deseado.
- Plaspy acepta reportes dirigidos al dominio d.plaspy.com así como a la dirección numérica 54.85.159.138.
- El puerto 8888 es el puerto compartido que usa Plaspy para todos los rastreadores soportados.
- Elegir UDP puede reducir la sobrecarga en reportes frecuentes y pequeños, mientras que TCP ofrece entrega orientada a conexión cuando el rastreador lo soporta.
- Asegúrese de que el APN y los ajustes de datos GSM del dispositivo estén correctos para que el rastreador alcance el endpoint de Plaspy vía GPRS o datos celulares.

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware en unidades AoYa A14 pueden cambiar el formato de los mensajes o las funciones disponibles; verifique el comportamiento según su compilación de firmware.
- Revisiones de hardware o variantes regionales pueden afectar el soporte de bandas celulares y los modos de transporte disponibles.
- Algunas opciones de configuración están controladas por valores predeterminados del fabricante y pueden requerir un paso de configuración por SMS o directo para apuntar el dispositivo a d.plaspy.com o a la IP numérica.
- La elección entre UDP y TCP debe coincidir con las capacidades y la configuración recomendada para su unidad en particular.
- La detección automática de Plaspy simplifica la configuración, pero aún es necesario tener el APN y el destino del servidor correctamente configurados en el dispositivo.
- Valide siempre la compatibilidad en un equipo de prueba antes de un despliegue amplio para confirmar intervalos de reporte y comportamiento ante eventos.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación le ayuda a configurar los dispositivos correctamente, interpretar la telemetría entrante y solucionar problemas de conectividad con Plaspy. Aunque Plaspy realiza detección automática de protocolos, conocer los detalles de transporte y configuración reduce el tiempo de puesta en marcha y las sorpresas operativas.

- Asegura que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para que Plaspy pueda recibir e identificar los mensajes.
- Ayuda a diagnosticar problemas de conectividad revisando el modo de transporte, el APN y si el rastreador usa UDP o TCP.
- Orienta sobre la frecuencia de telemetría, el reporte por eventos y cómo el dispositivo se identifica ante el servidor.
- Facilita la planificación de actualizaciones de firmware o cambios de hardware que puedan modificar el comportamiento del dispositivo con el tiempo.
- Permite colaborar de forma más eficiente con el soporte del fabricante cuando surjan preguntas específicas del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el AoYa A14 con Plaspy ofrece una forma práctica de convertir la telemetría cruda del equipo en información de ubicación y estado accionable para operadores de flotas, propietarios de vehículos y equipos de monitoreo. El diseño del A14 con GPS, AGPS y capacidades LBS, su factor de forma compacto y la batería de emergencia lo hacen adecuado para seguimiento automotriz donde se requiere visibilidad continua de la ubicación y resiliencia ocasional sin conexión.

Si está evaluando la integración, Plaspy simplifica la recepción y el parseo de reportes de rastreadores al proporcionar un endpoint único y compartido y detección automática de protocolos. Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo; los usuarios deben verificar la información específica del dispositivo con el fabricante en http://www.aoyagps.com/.
