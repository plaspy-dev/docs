---
slug: /noran/nr006/protocol
id: nr006-protocol
sidebar_label: Protocol
title: Noran - NR006 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo del rastreador Noran NR006 y su integración con Plaspy para rastreo en tiempo real con bajo uso de datos
keywords:
  - protocolo Noran NR006
  - protocolo GPS Noran NR006
  - Noran NR006 Plaspy
  - comunicación rastreador Noran
  - protocolo seguimiento NR006
  - compatibilidad NR006 Plaspy
  - protocolo rastreador para motocicleta
  - reporte GPS bajo consumo de datos
  - protocolo seguimiento de vehículos Plaspy
  - protocolo GPS con respaldo LBS
---

# Noran - Protocolo NR006

Esta página describe el contexto público del protocolo para usar el Noran NR006 Mini GPS Tracker con Plaspy. Resumimos cómo el NR006 informa ubicación y eventos a Plaspy en términos generales y no sensibles, para que usted comprenda los requisitos de integración sin exponer detalles privados de implementación. El NR006 es un rastreador ultracompacto diseñado para motocicletas y vehículos pequeños que reporta posición y alarmas vía SMS o Internet a una cuenta de Plaspy.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo cuando un dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en los patrones de comunicación observables y en orientación práctica de configuración más que en formatos internos de paquetes.

## Resumen del protocolo

El NR006 transmite datos de ubicación y eventos mediante reportes de posición concisos y mensajes de alarma optimizados para bajo uso de datos. Su comportamiento de reporte está orientado a ofrecer telemetría confiable con consumo mínimo de GPRS y a recurrir a LBS cuando la señal GPS es limitada. El rol del protocolo es hacer que la identidad del dispositivo, la ubicación, el estado y los eventos sean consumibles por un servidor como Plaspy.

- Envía reportes de posición compactos y notificaciones de eventos para reducir el uso de GPRS y preservar la batería.
- Utiliza GPS como método principal de posicionamiento con respaldo LBS para mejorar los reportes en interiores o en cañones urbanos.
- Incluye identidad del dispositivo y campos de estado básicos para que Plaspy asocie los datos con el rastreador y la cuenta correctos.
- Envía indicadores de alarma y eventos como exceso de velocidad, geocerca, corte de alimentación y modo de suspensión para que Plaspy pueda generar alertas y notificaciones.
- Soporta comandos remotos desde una plataforma de gestión para funciones como activar un relé inmovilizador cuando se combina con el hardware adecuado.

## Cómo Plaspy detecta el protocolo

Plaspy recibe datos entrantes en un punto único compartido y determina automáticamente el protocolo del rastreador según el flujo de datos y el comportamiento del dispositivo. En la mayoría de los casos, un NR006 configurado correctamente no requiere selección manual del protocolo dentro de Plaspy; sólo apunte el dispositivo al endpoint de Plaspy y la plataforma asociará los mensajes entrantes con su cuenta y dispositivo.

- Plaspy escucha los reportes de los dispositivos en el endpoint público de ingestión d.plaspy.com y también en su dirección IP pública.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma, por lo que la selección manual del protocolo generalmente no es necesaria.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de equipos.
- Si un dispositivo está configurado para reportar a Plaspy y llegan mensajes, Plaspy asociará la identidad del dispositivo y comenzará a procesar los datos de ubicación y eventos.

## Transporte y contexto de conexión

El NR006 puede enviar actualizaciones de posición por SMS o por conexión de datos celular usando UDP o TCP según la configuración del dispositivo y las capacidades del firmware. El endpoint público de ingestión de Plaspy acepta las conexiones a las que puede apuntar el dispositivo, y se usa el mismo puerto en los dispositivos soportados para simplificar la configuración.

- Los dispositivos pueden configurarse para usar transporte UDP o TCP en el puerto 8888 para enviar reportes GPRS.
- Para reportes por IP, el dispositivo puede apuntar al dominio Plaspy d.plaspy.com o a la IP pública 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 para todos los dispositivos soportados, proporcionando un punto de entrada consistente.
- El reporte por SMS sigue siendo una alternativa en entornos o despliegues donde GPRS no está disponible o no es deseado.
- Elija UDP o TCP según el soporte del dispositivo y las consideraciones de confiabilidad de la red; Plaspy ingerirá los reportes enviados al endpoint compartido.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de mensajes, los eventos soportados y los intervalos de reporte; valide el comportamiento con el firmware en uso.
- Las revisiones de hardware pueden introducir diferencias sutiles en cómo el dispositivo reporta telemetría o maneja el respaldo a LBS.
- El fabricante puede implementar funciones opcionales o conjuntos de comandos disponibles solo en ciertos builds de firmware o variantes del producto.
- La selección de transporte entre UDP y TCP depende del dispositivo; confirme que el firmware del NR006 soporte el transporte elegido al apuntar a Plaspy.
- El reporte por SMS y el reporte por GPRS pueden coexistir en un despliegue, pero el comportamiento de ingestión del servidor difiere entre ambas vías.
- Siempre contraste los detalles de integración con la documentación oficial del fabricante antes de desplegar a gran escala.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el NR006 ayuda a asegurar una configuración confiable, una resolución de problemas precisa y una operación consistente a largo plazo cuando se integra con Plaspy. Conocer el contexto del protocolo permite a los administradores confirmar que los dispositivos reportan como se espera y que Plaspy recibe la identidad, la ubicación y la información de eventos necesarias.

- Facilita la configuración correcta del dispositivo para que los reportes lleguen a d.plaspy.com o a 54.85.159.138 en el puerto adecuado.
- Ayuda a diagnosticar problemas de conectividad al aclarar si el dispositivo está usando UDP, TCP o reporte por SMS.
- Mejora el ajuste de alertas al comprender qué eventos puede generar el dispositivo y con qué frecuencia reporta.
- Respalda la gestión del ciclo de vida al revelar dependencias en el comportamiento del firmware y en las revisiones de hardware.
- Reduce el tiempo de incorporación porque Plaspy utiliza un puerto compartido y detección automática del protocolo para los dispositivos que reportan.

## Por qué usar Plaspy con este protocolo

Usar el Noran NR006 con Plaspy ofrece una solución compacta y de bajo consumo de datos para organizaciones que requieren visibilidad continua y monitoreo de eventos en motocicletas y vehículos pequeños. El formato de reporte conciso del NR006, su GPS con respaldo LBS y el soporte para alarmas y control remoto del inmovilizador lo hacen adecuado para prevención de robo, seguimiento de flotas y escenarios de telemetría ligera cuando se combina con la plataforma de Plaspy.

Si desea conocer más sobre Plaspy y cómo la plataforma puede ingerir y presentar datos del NR006, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles del dispositivo del fabricante pueden cambiar con el tiempo; verifique la información de protocolo y las notas de firmware más recientes en el sitio del fabricante http://www.norantracker.com/ antes de realizar despliegues a gran escala.
