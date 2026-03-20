---
slug: /haicom/hi_604x/protocol
id: hi_604x-protocol
sidebar_label: Protocol
title: Haicom - HI-604X Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Haicom HI-604X y cómo se comunica con Plaspy para supervisión GPS confiable
keywords:
  - Protocolo Haicom HI-604X
  - Protocolo GPS Haicom HI-604X
  - Protocolo de rastreador Haicom
  - Comunicación HI-604X
  - Protocolo de rastreo HI-604X
  - Compatibilidad Plaspy
  - Integración de rastreador GPS
  - Comunicación GPRS para rastreadores
  - Protocolo de rastreo de vehículos
  - Configuración remota de rastreadores
---

# Haicom - Protocolo HI-604X

Esta página ofrece un contexto público del protocolo para usar el rastreador GPS Haicom HI-604X con Plaspy. Resume cómo se comunica el dispositivo en términos generales, qué esperar de las opciones de transporte habituales y cómo Plaspy recibe y procesa los informes del rastreador. El objetivo es ayudar a integradores y gestores de flotas a comprender la capa de comunicación sin exponer detalles sensibles de implementación.

Plaspy emplea ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente los protocolos reportados a su endpoint. Los equipos compatibles con Plaspy pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888. El dispositivo puede usar UDP o TCP en el puerto 8888 y Plaspy usa el mismo puerto para todos los dispositivos. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre valide la configuración del equipo con la documentación vigente.

## Resumen del protocolo

A grandes rasgos, el protocolo de comunicación del HI-604X permite que el dispositivo se identifique ante un servidor remoto, reporte ubicación y estado, y reciba configuraciones remotas o actualizaciones de firmware cuando estén soportadas. El protocolo transforma las lecturas de GPS y sensores en mensajes que Plaspy puede almacenar y mostrar.

- Transporta posición GPS, hora y estado del dispositivo desde el rastreador hacia el servidor remoto para que Plaspy genere registros de ubicación útiles.
- Permite flujos de trabajo de configuración remota y actualización de firmware por aire cuando tanto el rastreador como la plataforma lo soportan.
- Soporta múltiples transportes que expone el equipo, como reportes GPRS sobre TCP o UDP y canales opcionales de control por SMS o HTTP.
- Permite usar almacenamiento a bordo como registrador y reenviar trayectos guardados cuando se restablece la conexión de red.
- Ayuda a mapear estados del dispositivo, como actividad del sensor de movimiento y batería baja, en eventos accionables dentro de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar informes entrantes de rastreadores en un endpoint público consistente y determinar automáticamente el protocolo correcto para un dispositivo compatible. Esto significa que la mayoría de los usuarios no necesita seleccionar manualmente un protocolo dentro de Plaspy siempre que el rastreador esté configurado para reportar al endpoint de Plaspy.

- Los informes entrantes son aceptados en el endpoint de Plaspy d.plaspy.com y en la dirección numérica 54.85.159.138 en el puerto 8888.
- Todos los dispositivos configurados para Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo.
- Plaspy soporta tanto reportes TCP como UDP en el puerto 8888, por lo que los equipos pueden usar el transporte que soporten o el que mejor se adapte al despliegue.
- Si el rastreador apunta al endpoint de Plaspy y tiene acceso a la red, Plaspy intentará emparejar automáticamente los datos entrantes con el protocolo del dispositivo soportado.
- Normalmente, usted solo necesita configurar el rastreador para que reporte a la dirección de Plaspy; Plaspy se encargará de la diferenciación de protocolos en los modelos compatibles.

## Contexto de transporte y conexión

La elección del transporte y la configuración de conexión son fundamentales para un reporte fiable. El HI-604X soporta reportes basados en GPRS y ofrece flexibilidad en cómo se envían los mensajes a una plataforma de backend como Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requerimientos del sitio.
- Los rastreadores pueden apuntar al dominio d.plaspy.com o a la IP del servidor 54.85.159.138 como alternativa.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados, lo que reduce la carga de configuración en una flota mixta.
- UDP puede ser útil por su menor latencia y menor sobrecarga, mientras que TCP aporta entrega orientada a conexión cuando está disponible.
- Asegúrese de que el APN y los ajustes GPRS del rastreador estén correctos para que el dispositivo alcance el endpoint de Plaspy a través de la red celular.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el tiempo de envío de mensajes, campos opcionales y comandos remotos disponibles. Verifique la versión de firmware al diagnosticar diferencias.
- Revisiones de hardware o variantes regionales del HI-604X pueden exponer distintas opciones de configuración o soporte de transportes.
- Algunas funciones descritas por el fabricante, como control por SMS, reportes HTTP o actualización de firmware por aire, existen además de los reportes por TCP o UDP y pueden emplearse en flujos específicos.
- La elección entre UDP y TCP puede afectar las características de entrega y debe seleccionarse según cobertura, políticas de firewall y necesidades de confiabilidad.
- Valide siempre los ajustes de reporte del dispositivo contra la documentación más reciente de Haicom y cualquier nota de versión que publique el fabricante.
- En caso de duda, pruebe un equipo apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 y confirme que Plaspy está recibiendo informes.

## Por qué importa conocer el protocolo

Comprender cómo el HI-604X se comunica con una plataforma como Plaspy ayuda a garantizar una instalación exitosa, facilitar la resolución de problemas y lograr una operación confiable a largo plazo. Tener una visión clara de la capa de comunicación reduce el tiempo de integración y ayuda a los equipos a elegir el transporte y las estrategias de energía adecuadas.

- Configuración más rápida al apuntar el rastreador al endpoint y ajustes de transporte correctos desde el inicio.
- Resolución de problemas más sencilla cuando se sabe si el equipo está usando UDP o TCP y a dónde está configurado para reportar.
- Mejor planificación de consumo de energía y datos usando funciones de registrador y sensor de movimiento para optimizar la cadencia de reportes.
- Expectativas claras sobre funciones como configuración remota y actualizaciones de firmware que dependen del soporte de red y protocolo.
- Mayor fiabilidad de la flota al alinear capacidades del equipo y comportamiento del firmware con los requisitos operativos.

## Por qué usar Plaspy con este protocolo

Usar el Haicom HI-604X con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, monitoreo de eventos y configuración remota de vehículos y activos. Las capacidades del HI-604X, como registro a bordo, detección de movimiento y múltiples canales de reporte, encajan bien con una plataforma que maneja detección automática de protocolos y gestión centralizada de dispositivos.

Si desea saber más sobre Plaspy y cómo funciona con rastreadores soportados visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la documentación de protocolo específica del dispositivo con el fabricante en http://www.haicom.com.tw/.
