---
slug: /eelink/k9/protocol
id: k9-protocol
sidebar_label: Protocol
title: EElink - K9 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo EElink K9 y cómo se comunica con Plaspy
keywords:
  - Protocolo EElink K9
  - Protocolo GPS EElink K9
  - Protocolo EElink K9 para Plaspy
  - Protocolo de comunicación EElink K9
  - Protocolo de rastreo EElink K9
  - Protocolo de rastreador GPS EElink
  - Compatibilidad EElink K9 con Plaspy
  - Rastreo de vehículos EElink K9
  - Compatibilidad rastreador GPS con Plaspy
  - Documentación protocolo K9
---

# EElink - K9 Protocol — Resumen del protocolo

Esta página ofrece una visión pública y no sensible del contexto de comunicación del rastreador EElink K9 cuando se integra con Plaspy. Describe el rol del reporte del dispositivo, las expectativas básicas de conexión y cómo la telemetría y los eventos de alarma llegan a la plataforma, sin exponer detalles internos de firmware ni formatos de paquete propietarios.

El EElink K9 es un rastreador con muchas funciones: posicionamiento GPS y LBS, reporte por GPRS, voz bidireccional, botón SOS, alarmas de geocerca y velocidad, alertas por batería removible, registro de rutas local con exportación PLT y capacidad de actualización OTA. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del equipo, aunque el comportamiento exacto puede variar según versiones de firmware, revisiones de hardware y la implementación del fabricante.

## Resumen del protocolo

A alto nivel, el protocolo del dispositivo K9 define cómo el rastreador se identifica, reporta datos de ubicación y estado, y remite alarmas y confirmaciones de comandos remotos a un endpoint en la nube. Para la integración con Plaspy, el protocolo se considera el canal que transporta posiciones GPS y LBS, notificaciones de eventos y el intercambio de comandos bidireccionales sobre GPRS.

- Permite subidas periódicas y por eventos de telemetría para que Plaspy disponga de ubicación, velocidad, nivel de batería y estados de alarma.
- Transmite la identidad del dispositivo y el contexto de sesión para que Plaspy asocie los reportes con el registro del rastreador correcto.
- Lleva eventos de alarma y SOS para notificaciones oportunas y reproducción de historial en la plataforma.
- Soporta funciones de monitoreo remoto como señalización de llamada bidireccional y escucha remota, dentro de los límites del firmware del dispositivo.
- Incluye soporte para actualizaciones OTA y exportación de archivos de ruta local, según la implementación del fabricante.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos, y detecta automáticamente el protocolo del rastreador en la mayoría de los casos, evitando que el usuario tenga que seleccionar manualmente el protocolo. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el requisito principal para que la detección automática funcione de forma fiable.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- El puerto es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el modelo y la configuración.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma empareja las sesiones entrantes con protocolos conocidos y enruta los datos al analizador adecuado.
- En instalaciones típicas, los usuarios no necesitan elegir un protocolo dentro de Plaspy una vez que el K9 está correctamente apuntado al endpoint de Plaspy y autenticado según se requiera.

## Transporte y contexto de conexión

El transporte y la conexión son independientes del protocolo de alto nivel. El K9 suele usar GPRS para acceder a Internet y puede enviar sus mensajes de protocolo por UDP o TCP según lo soporte el firmware y la configuración del equipo.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o directamente a 54.85.159.138.
- El dispositivo puede usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo.
- Plaspy escucha en el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y el enrutamiento.
- Asegúrese de que el APN y la configuración del operador permitan conexiones GPRS salientes al endpoint de Plaspy y que cualquier firewall de red permita salidas UDP o TCP por el puerto 8888.
- Para reportes fiables verifique la calidad de señal y la provisión de la SIM, ya que la fiabilidad del transporte depende del enlace celular y del estado de energía del dispositivo.

## Notas sobre compatibilidad del protocolo

- Los detalles del protocolo K9 y los comandos soportados pueden variar entre versiones de firmware y revisiones de hardware.
- Algunas funciones como voz bidireccional, escucha remota o actualizaciones OTA dependen de servicios habilitados por el fabricante y de las capacidades del firmware.
- La selección de transporte entre UDP y TCP puede afectar retransmisiones y persistencia de sesión, pero no cambia el propósito general del protocolo.
- La configuración por parte del fabricante o firmware específico de una región puede introducir pequeñas variaciones en el tiempo de los mensajes o en las alarmas soportadas.
- Verifique los ajustes de APN y que el dispositivo esté apuntando al endpoint de Plaspy al validar la conectividad.
- En caso de duda, consulte la documentación del fabricante y las notas de versión para cambios específicos del firmware.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el K9 ayuda en la configuración inicial, en mantener una operación confiable y en realizar diagnósticos eficientes cuando un dispositivo no aparece en Plaspy como se esperaba. Conocer los límites entre transporte, configuración del dispositivo y comportamiento del protocolo reduce las conjeturas al diagnosticar problemas de conectividad o de reporte.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y que usa el puerto y el transporte requeridos.
- Ayuda a validar que las alarmas y eventos SOS se entregarán y se mapearán correctamente en la plataforma.
- Facilita el diagnóstico de reportes intermitentes al separar factores celulares, de transporte y de protocolo.
- Permite planificar actualizaciones OTA y cambios de funciones que podrían afectar el comportamiento de los reportes.
- Asegura la disponibilidad de reproducción de historial y exportaciones PLT al confirmar que el rastreador sube los datos requeridos.

## Por qué usar Plaspy con este protocolo

Usar el EElink K9 con Plaspy ofrece a las organizaciones una plataforma única para recopilar datos de ubicación, alarma y estado del rastreador y presentarlos en paneles, reproducción de historial y flujos de alertas. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la complejidad de configuración y permiten gestionar flotas diversas con ajustes de red consistentes.

Si desea conocer más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para detalles de protocolo específicos por dispositivo, notas de firmware y procedimientos de actualización consulte la documentación del fabricante en https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con las fuentes oficiales del fabricante.
