---
slug: /sentar/q60/protocol
id: q60-protocol
sidebar_label: Protocol
title: Sentar - Q60 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Sentar Q60 con Plaspy, para rastreo e integración confiables
keywords:
  - Sentar Q60
  - Protocolo Sentar Q60
  - Rastreador GPS Sentar
  - Compatibilidad Q60 Plaspy
  - Integración de dispositivos Plaspy
  - Rastreo de vehículos Sentar
  - Protocolo de comunicación Q60
  - Seguimiento de activos Q60
  - Protocolo de rastreador GPS
  - Plataforma de rastreo Plaspy
---

# Sentar - Protocolo Q60

Esta página describe el contexto público del protocolo para integrar el rastreador GPS Sentar Q60 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica a alto nivel con Plaspy, qué puntos de conexión se utilizan y qué esperar ante variaciones comunes de firmware y hardware. El contenido técnico aquí es deliberadamente general y no sensible, pensado para ayudar a administradores e integradores a planear despliegues y realizar soluciones básicas de problemas.

El Sentar Q60 es un dispositivo compacto basado en el chipset MTK2503 y admite GPS, AGPS y modos LBS para posicionamiento. Plaspy utiliza ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto puede variar según la versión de firmware, revisiones de hardware y decisiones del fabricante. Revise la documentación del fabricante y las notas de firmware para detalles específicos del dispositivo antes del despliegue final.

## Resumen del protocolo

A grandes rasgos, el protocolo del rastreador define cómo el Q60 informa ubicación y estado a un servidor remoto y cómo el servidor envía mensajes de configuración o control de regreso al dispositivo cuando está permitido. El protocolo es el puente entre el hardware del Q60 y los servicios de Plaspy, permitiendo que puntos de ubicación, nivel de batería e información de estado aparezcan en la plataforma.

- Permite que el Q60 envíe actualizaciones periódicas de ubicación usando datos de GPS, AGPS y LBS al endpoint del servidor.
- Transporta la identidad del dispositivo y su estado para que Plaspy asocie los mensajes entrantes con el activo correcto.
- Facilita respuestas desde el servidor cuando el firmware y la configuración del dispositivo permiten comandos remotos o acuses de recibo.
- Proporciona la telemetría utilizable que Plaspy ingiere para mapas, alertas e informes, respetando las capacidades del equipo.
- Puede variar según firmware y revisión de hardware, por lo que un mismo modelo puede comportarse ligeramente distinto entre lotes de producción.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint común y determina automáticamente el protocolo del rastreador para los dispositivos soportados cuando el equipo está configurado correctamente para reportar a la plataforma. En la mayoría de las integraciones, los usuarios no necesitan seleccionar el protocolo manualmente dentro de Plaspy, ya que la plataforma asocia el tráfico entrante con el parser compatible.

- Plaspy acepta conexiones entrantes en el dominio d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos usan el mismo puerto en el lado de Plaspy y la plataforma detecta automáticamente el protocolo del rastreador.
- Si el Q60 está configurado para reportar al endpoint de Plaspy, la plataforma intentará identificar el formato de reporte y registrar el dispositivo.
- La configuración típica requiere actualizar la dirección del servidor de reporte del dispositivo y asegurarse de que esté habilitado el tipo de transporte correcto en el rastreador.

## Transporte y contexto de conexión

El transporte de la conexión y la direccionamiento son elementos clave para que el Q60 reporte con éxito. El rastreador puede configurarse para usar UDP o TCP, según el firmware y los ajustes del equipo. Plaspy soporta ambos transportes en el mismo puerto, por lo que debe elegir el que coincida con el firmware del rastreador y el entorno de red.

- Los dispositivos pueden estar configurados para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy escucha en el puerto 8888 tanto para tráfico TCP como UDP; todos los dispositivos soportados usan ese puerto.
- Asegúrese de que el APN y la configuración GPRS del dispositivo sean correctos para que pueda alcanzar el endpoint de Plaspy a través de redes móviles.
- Firewalls, NAT y restricciones de operadores móviles pueden afectar la conectividad; permita tráfico saliente hacia el dominio y puerto de Plaspy.
- Verifique que el rastreador envíe al tipo de transporte correcto que coincida con su configuración y las capacidades de firmware.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar tiempos de mensaje, el transporte por defecto o la telemetría disponible; revise la versión de firmware al solucionar problemas.
- Revisiones de hardware y variantes regionales pueden alterar características disponibles, como rendimiento de AGPS o LBS.
- Algunos rastreadores ofrecen comandos de configuración que requieren un transporte o tiempos distintos para recibir respuestas de forma fiable.
- Las condiciones de red y la configuración de APN del operador influyen en si UDP o TCP es la opción práctica para el reporte.
- Valide siempre que el dispositivo esté apuntando a d.plaspy.com o a la IP 54.85.159.138 y que use el puerto 8888.
- Verifique el serial del equipo y el reporte de IMEI frente al registro de dispositivos en Plaspy para asegurar la correcta asociación.

## Por qué es importante entender el protocolo

Comprender cómo el Q60 se comunica con Plaspy ayuda en la verificación de la configuración, en la resolución continua de problemas y en la confiabilidad a largo plazo. Aunque Plaspy detecta automáticamente el protocolo en uso, tener una noción básica del transporte y del comportamiento de reporte facilita diagnosticar datos faltantes o conexiones intermitentes.

- Confirma que el dispositivo reporta al endpoint y transporte correctos para que los datos lleguen a la plataforma.
- Ayuda a identificar si las brechas en los datos de ubicación se deben a conectividad, firmware o factores ambientales.
- Permite tomar decisiones informadas sobre usar UDP o TCP según la fiabilidad de la red y la necesidad de respuestas.
- Facilita validar la identidad del dispositivo y asegurar que los mensajes entrantes se asignen al activo correcto en Plaspy.
- Mejora la colaboración con el soporte del fabricante cuando deben resolverse comportamientos relacionados con el firmware.

## Por qué usar Plaspy con este protocolo

Usar el Sentar Q60 con Plaspy ofrece a las organizaciones una vía sencilla para recopilar telemetría de ubicación y estado de dispositivos compactos y confiables. El modelo de endpoint compartido de Plaspy y la detección automática de protocolo reducen los pasos de configuración necesarios en la plataforma, permitiendo que los despliegues se concentren en la colocación de los dispositivos y la preparación de la red.

Si desea obtener más información sobre cómo Plaspy soporta integraciones de dispositivos, visite https://www.plaspy.com. Para detalles específicos y actualizados del protocolo del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de Sentar en http://www.sentarsmart.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
