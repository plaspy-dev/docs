---
slug: /cityeasy/302/protocol
id: 302-protocol
sidebar_label: Protocol
title: Cityeasy - 302 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Cityeasy 302 y cómo se comunica con Plaspy para rastreo y alertas de vehículos
keywords:
  - Protocolo Cityeasy 302
  - Protocolo GPS Cityeasy 302
  - Protocolo de comunicación Cityeasy 302
  - Protocolo de rastreo Cityeasy 302
  - Rastreador Cityeasy Plaspy
  - Compatibilidad de dispositivos Plaspy
  - Protocolo GPS para vehículos
  - Protocolo para rastreador de automóvil
  - Rastreo LBS GPS
  - Rastreador GPS IP67
---

# Cityeasy - Protocolo 302

Esta página explica, a nivel público, el contexto del protocolo para usar el rastreador GPS Cityeasy 302 con Plaspy. Se centra en cómo el dispositivo se comunica en términos generales, en los ajustes de conexión que Plaspy espera y en consideraciones prácticas para lograr que el equipo reporte de forma confiable sin exponer detalles sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el rastreador está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso la información aquí es una guía de alto nivel para integración y resolución de problemas.

## Visión general del protocolo

El Cityeasy 302 transmite información de ubicación, estado y eventos a un servidor remoto usando el protocolo de reporte integrado en el dispositivo. A grandes rasgos, el protocolo define cómo el rastreador se identifica, cómo envía posiciones y alertas, y cómo el servidor confirma o registra esos reportes para que una plataforma como Plaspy presente datos de rastreo útiles.

- Permite que el equipo envíe actualizaciones de posición basadas en LBS y GPS para monitoreo en tiempo real
- Transmite alertas del dispositivo como corte de energía, exceso de velocidad, vibración, geocerca y desplazamiento
- Proporciona reportes históricos de rutas para que viajes pasados puedan ser reenviados a la plataforma
- Incluye la identificación del equipo para que Plaspy pueda asociar los reportes entrantes con el activo correcto
- Utiliza un transporte de red que el dispositivo puede configurarse para enviar a Plaspy y garantizar una ingestión consistente

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos y emplea detección automática de protocolo para identificar rastreadores compatibles. En la mayoría de los casos usted no necesita seleccionar un protocolo específico en Plaspy si el Cityeasy 302 está configurado para reportar a la dirección y puerto del servidor de Plaspy.

- El dominio del servidor Plaspy para reporte de rastreadores es d.plaspy.com
- La IP pública del servidor Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para los reportes de dispositivos
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos
- Si el rastreador apunta correctamente al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente en la plataforma

## Transporte y contexto de conexión

Los ajustes de conexión determinan cómo el Cityeasy 302 alcanza a Plaspy. El dispositivo puede enviar reportes sobre transportes de internet estándar y puede configurarse para alcanzar el endpoint de Plaspy por nombre de dominio o por dirección IP, según la configuración de la red y la preferencia del instalador.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y su configuración
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como destino de reporte
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del servidor en despliegues grandes
- Elegir UDP frente a TCP es una opción a nivel de equipo y puede afectar las características de entrega según la red móvil
- Confirme que el dispositivo esté configurado para reportar al endpoint de Plaspy para que la detección automática y la ingestión de datos puedan proceder

## Notas sobre compatibilidad del protocolo

- Variaciones de firmware pueden cambiar el formato o la frecuencia de los reportes; revise las notas de versiones de firmware al solucionar problemas
- Revisiones de hardware o versiones regionales pueden modificar las opciones de transporte soportadas o el comportamiento de reporte por defecto
- Las herramientas y ajustes del fabricante pueden diferir; siempre valide el destino de reporte y el transporte configurado en el equipo
- Algunos comportamientos del dispositivo, como umbrales de alerta o intervalos de reporte, pueden ser configurables y afectan lo que Plaspy recibe
- Aunque Plaspy detecta el protocolo automáticamente, es esencial que el dispositivo esté correctamente configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para una conectividad fiable
- En caso de duda, consulte la documentación del equipo y los recursos del distribuidor para confirmar detalles de compatibilidad

## Por qué es importante entender el protocolo

Conocer el protocolo de reporte del rastreador ayuda a asegurar una instalación fluida, a acelerar la resolución de problemas y a mantener una operación confiable a largo plazo con Plaspy. Entender qué partes de la comunicación son configurables o susceptibles de variar entre unidades reduce el tiempo de integración y previene problemas comunes de reporte.

- Ayuda a verificar que el rastreador apunta al servidor y puerto correctos para la ingestión en Plaspy
- Facilita interpretar alertas del dispositivo como corte de energía, exceso de velocidad, vibración, geocerca y desplazamiento
- Apoya en el diagnóstico de problemas de conectividad que se originan por la selección del transporte o por condiciones de la red
- Permite planear mantenimientos como actualizaciones de firmware que puedan cambiar el comportamiento de reporte
- Aumenta la confianza al validar la retransmisión de rutas históricas y la precisión de eventos en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Cityeasy 302 con Plaspy ofrece una forma práctica de convertir las señales del rastreador en información accionable para flotas y activos. Plaspy ingiere posiciones y eventos de dispositivos que reportan al endpoint compartido de Plaspy y presenta esa información en la plataforma para soportar monitoreo, alertas y análisis de rutas históricas.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos, el reporte y el monitoreo de flotas visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información específica más reciente en el sitio oficial del fabricante.
