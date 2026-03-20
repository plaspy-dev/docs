---
slug: /v_sun/tlt_1d/protocol
id: tlt_1d-protocol
sidebar_label: Protocol
title: V-SUN - TLT-1D Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador V-SUN TLT-1D y cómo se comunica con Plaspy para rastreo y gestión de flotas
keywords:
  - Protocolo V-SUN TLT-1D
  - Protocolo rastreador GPS V-SUN
  - Protocolo de comunicación TLT-1D
  - Protocolo de rastreo TLT-1D
  - Compatibilidad V-SUN Plaspy
  - Protocolo de rastreo de vehículos
  - Guía de protocolo de rastreador GPS
  - Configuración GPRS TCP para rastreador
  - Informe de ubicación por SMS
  - Integración de seguimiento de flotas
---

# V-SUN - Protocolo TLT-1D

Esta página describe el contexto público del protocolo para usar el rastreador V-SUN TLT-1D con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué parámetros de conexión se emplean y qué aspectos considerar al integrar el equipo en una implementación de rastreo. La información aquí está dirigida a administradores e integradores que buscan datos claros y no sensibles sobre la comunicación dispositivo-servidor.

El TLT-1D es un rastreador GPS que soporta posicionamiento GPS y conectividad GSM GPRS, y puede reportar posiciones vía SMS o GPRS TCP. Plaspy utiliza ajustes de conexión compartidos entre los equipos compatibles y detecta automáticamente el protocolo del rastreador cuando este comienza a reportar a la plataforma. El comportamiento concreto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene consultar al fabricante para detalles específicos del dispositivo.

## Visión general del protocolo

El propósito del protocolo del TLT-1D es transportar información de ubicación y estado desde el dispositivo hasta un servidor remoto, y aceptar comandos remotos cuando el equipo lo admite. En despliegues típicos, el rastreador envía fijaciones posicionales, banderas de estado y notificaciones de eventos a través de la red celular para que el servidor presente datos en tiempo real e históricos a los usuarios.

- Permite que el dispositivo reporte coordenadas GPS, hora, velocidad y banderas de estado básicas al servidor
- Soporta reporte por SMS y por GPRS TCP según la configuración del usuario y la disponibilidad de la red
- Admite funciones de control remoto cuando el firmware del equipo las expone, por ejemplo SOS o control de relés
- Proporciona reporte basado en eventos para alarmas como movimiento, exceso de velocidad, geocercas y pérdida de alimentación
- Sirve de base para que Plaspy mapee los mensajes entrantes a registros de ubicación y estado sin exponer detalles internos del firmware

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un endpoint compartido y determina automáticamente cómo interpretar los reportes de los rastreadores compatibles. En la mayoría de los casos, un TLT-1D bien configurado comenzará a reportar a Plaspy y la plataforma asociará los mensajes entrantes con el dispositivo sin necesidad de seleccionar manualmente el protocolo.

- Plaspy escucha en un único endpoint público para el reporte de dispositivos y detecta automáticamente el protocolo del rastreador
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP de servidor equivalente serán enrutados al sistema de ingestión de Plaspy
- Dado que Plaspy utiliza el mismo puerto de reporte para todos los dispositivos, raramente será necesario seleccionar un protocolo dentro de Plaspy manualmente
- Si el TLT-1D está configurado para usar GPRS TCP o UDP y apunta al endpoint de Plaspy, la plataforma recibirá y procesará sus reportes
- La detección automática minimiza la configuración, pero se recomienda verificar los ajustes de reporte en el rastreador

## Contexto de transporte y conexión

El TLT-1D puede enviar datos a través de la red celular usando SMS o una conexión de datos por paquetes. Cuando se usa reporte por GPRS, el rastreador puede configurarse para usar transporte UDP o TCP hacia el servidor Plaspy en el puerto compartido. Los siguientes puntos describen los ajustes públicos de Plaspy para el reporte de dispositivos.

- El dominio público de servidor de Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP pública de Plaspy es 54.85.159.138
- Plaspy utiliza el puerto 8888 para las conexiones de dispositivos y todos los equipos soportados comparten este mismo puerto
- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware del dispositivo y la preferencia del usuario
- SMS sigue siendo una opción de respaldo para reportes de ubicación básicos y respuestas a comandos cuando GPRS no está disponible

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar los modos de reporte y los comandos disponibles en el TLT-1D; siempre verifique el firmware instalado
- Revisiones de hardware o módulos opcionales pueden habilitar o deshabilitar funciones como control de relé o entradas de alarma adicionales
- La elección entre UDP y TCP puede afectar el comportamiento de entrega y debe coincidir con la configuración del dispositivo
- Los ajustes de APN y servidor por defecto del fabricante deben configurarse correctamente para que el reporte GPRS llegue a Plaspy
- Plaspy detecta protocolos entrantes automáticamente, pero se requieren ajustes de red correctos en el dispositivo para una comunicación fiable
- Para funciones avanzadas, confirme si el equipo soporta los comandos remotos deseados en el firmware instalado

## Por qué es importante conocer el protocolo

Entender cómo se comunica el TLT-1D ayuda a garantizar un rastreo confiable, una configuración exitosa y una resolución de problemas más rápida cuando surgen incidencias. Conocer claramente el transporte y el comportamiento de reporte reduce errores de configuración y mejora la estabilidad operativa a largo plazo.

- Asegura que se apliquen correctamente el APN y los ajustes de servidor para que el rastreador alcance el endpoint de Plaspy
- Facilita el diagnóstico de problemas de conectividad al distinguir comportamientos de SMS, UDP y TCP
- Orienta las decisiones sobre habilitar alarmas, geocercas y funciones de control remoto compatibles con el dispositivo
- Reduce el tiempo de despliegue alineando el modo de reporte del dispositivo con las expectativas de Plaspy
- Mejora la auditabilidad al validar cargas históricas de datos y registros de eventos

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el V-SUN TLT-1D ofrece a las organizaciones una plataforma consistente para recolectar, visualizar y gestionar datos de ubicación y eventos de este modelo. El enfoque de endpoint compartido de Plaspy simplifica la configuración inicial: configure el rastreador para reportar a d.plaspy.com o a la IP del servidor y la plataforma gestionará la detección del protocolo y la ingestión de datos. Este método permite a los equipos centrarse en la operación en lugar de en la mecánica de protocolos por dispositivo.

Para conocer más sobre Plaspy y cómo se integra con rastreadores GPS como el V-SUN TLT-1D visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que confirme la información más reciente específica del dispositivo en el sitio del fabricante http://www.v-sun.cc/ antes de finalizar los despliegues.
