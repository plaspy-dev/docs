---
slug: /orion/bd_2012/protocol
id: bd_2012-protocol
sidebar_label: Protocol
title: Orion - BD-2012 Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo Orion BD-2012 y cómo el rastreador se comunica con Plaspy para seguimiento de flotas y activos
keywords:
  - protocolo Orion BD-2012
  - GPS Orion BD-2012
  - protocolo de rastreo BD-2012
  - rastreador GPS Orion Plaspy
  - compatibilidad de dispositivos Plaspy
  - seguimiento de vehículos Orion BD-2012
  - comunicación BD-2012
  - seguimiento de activos Orion
  - guía de protocolo de rastreadores GPS
  - compatibilidad de protocolos de rastreo
---

# Orion - Protocolo BD-2012

Esta página presenta una visión pública del protocolo del rastreador GPS Orion BD-2012 y describe cómo el dispositivo se comunica con Plaspy. El contenido se centra en aspectos no sensibles y neutrales respecto a la implementación, pensados para que operadores e integradores comprendan el papel del protocolo de reportes al conectar dispositivos BD-2012 a Plaspy para el monitoreo de flotas y activos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo y la cadencia de mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene en un nivel práctico y público, destacando el contexto de conexión relevante para una integración exitosa.

## Resumen del protocolo

El protocolo de reporte BD-2012 es el mecanismo mediante el cual el rastreador transmite información de ubicación, estado y alertas a un servidor remoto. Para la integración con Plaspy, el propósito del protocolo es entregar telemetría utilizable de forma fiable para que Plaspy pueda mapear, almacenar y presentar el estado del equipo a usuarios y sistemas.

- Permite que el BD-2012 envíe actualizaciones periódicas de ubicación e informes de eventos a un servidor remoto para su monitoreo.
- Proporciona un método para que el dispositivo se identifique y Plaspy pueda asociar los datos entrantes con el activo correcto.
- Transporta información de estado y alertas, como movimiento, eventos de geocerca y señales de emergencia, que pueden activarse en Plaspy.
- Funciona sobre canales de transporte estándar para que el rastreador reporte al endpoint compartido de Plaspy sin necesidad de configurar puertos por dispositivo.
- Permite que Plaspy interprete los reportes entrantes y los presente en paneles, notificaciones y registros.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint compartido y determina automáticamente el protocolo del rastreador a partir del patrón de datos entrantes y los identificadores del dispositivo. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el BD-2012 está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com, por lo que los dispositivos BD-2012 pueden apuntar a ese hostname.
- La IP del servidor Plaspy es 54.85.159.138 y está disponible como destino alternativo en la configuración del dispositivo.
- El puerto es 8888 y es el predeterminado para todos los dispositivos soportados dentro de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan reportes correctamente configurados al endpoint compartido.
- Normalmente el usuario no necesita seleccionar un protocolo en Plaspy si el dispositivo está configurado para reportar a d.plaspy.com en el puerto compartido.

## Transporte y contexto de conexión

Los dispositivos BD-2012 pueden configurarse para usar capas de transporte estándar para alcanzar el endpoint de Plaspy. Elegir la opción de transporte y el destino correctos en la configuración del equipo es el paso práctico que permite enviar reportes a Plaspy de forma fiable.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888, según el soporte del equipo y la preferencia del instalador.
- Los dispositivos pueden apuntar a d.plaspy.com o a 54.85.159.138 como dirección de destino para el reporte.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no hay variación de puerto por dispositivo que gestionar desde Plaspy.
- Verifique que el dispositivo tenga conectividad celular o IP y que los firewalls de red permitan tráfico saliente hacia el endpoint de Plaspy en el transporte elegido.
- Al cambiar modos de transporte o destinos, valide que el firmware del BD-2012 soporte la opción seleccionada.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades BD-2012 pueden afectar la cadencia de mensajes, las funciones soportadas y los campos opcionales.
- Revisiones de hardware o SKUs regionales pueden modificar el comportamiento exacto de algunas funciones de reporte.
- Los comandos de configuración por parte del fabricante o los valores de fábrica pueden variar; verifique la configuración del dispositivo después de actualizaciones de firmware.
- La selección del transporte (UDP vs TCP) puede influir en la fiabilidad y debería elegirse en función de las condiciones de red y del conjunto de funciones del dispositivo.
- La detección automática de Plaspy reduce la configuración manual, pero las opciones de destino y transporte en el dispositivo siguen siendo esenciales.
- Siempre contraste el comportamiento del dispositivo con la documentación del fabricante para la revisión de firmware específica en uso.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación BD-2012 facilita la correcta configuración, la resolución de problemas y el mantenimiento de operaciones fiables en Plaspy. Incluso cuando Plaspy realiza la detección automática del protocolo, conocer qué reporta el equipo y cómo se conecta reduce el tiempo de puesta en marcha y acelera la resolución de problemas comunes.

- Diagnóstico más rápido cuando un equipo no aparece en Plaspy, porque usted puede verificar la configuración de destino y transporte en el dispositivo.
- Mejor planificación para actualizaciones de firmware y despliegue de funciones al saber qué comportamientos dependen del firmware.
- Expectativas claras sobre la frecuencia de mensajes y los compromisos de vida de batería vinculados a la configuración de reportes.
- Mejora en la resolución de problemas con operadores y carriers cuando pueda confirmar si el dispositivo llega a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Validación más sencilla del comportamiento de geocercas, SOS y alertas al comprender qué eventos el dispositivo reportará a Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Orion BD-2012 con Plaspy ofrece a las organizaciones una forma sencilla de centralizar datos de rastreo desde dispositivos compactos y diseñados para propósito específico. El modelo de endpoint compartido y la detección automática de protocolos de Plaspy simplifican la incorporación, de modo que los equipos puedan concentrarse en el monitoreo operativo, las alertas y el análisis en lugar de en la selección de protocolos a bajo nivel.

Si desea más información sobre Plaspy y cómo soporta rastreadores GPS como el Orion BD-2012, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de los dispositivos pueden cambiar con el tiempo, por lo que conviene verificar la información específica de protocolo más reciente en el sitio del fabricante http://www.oriontech.com.tw/.
