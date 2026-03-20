---
slug: /appello/obd/protocol
id: obd-protocol
sidebar_label: Protocol
title: Appello - OBD Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Appello OBD y cómo se comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Appello OBD
  - Appello OBD GPS
  - Compatibilidad Appello OBD Plaspy
  - Protocolo de comunicación Appello OBD
  - Protocolo de rastreador OBD
  - Comunicación de rastreador GPS
  - Compatibilidad de dispositivos Plaspy
  - Rastreador MTK GSM
  - Rastreador U‑BLOX 7020
  - Protocolo para seguimiento de flotas
---

# Appello - Protocolo OBD

Esta página explica el contexto público del protocolo para usar el rastreador GPS Appello OBD con la plataforma Plaspy. Describe a alto nivel cómo el dispositivo se comunica con Plaspy, qué ajustes de conexión se utilizan y qué factores prácticos influyen en una integración exitosa. El Appello OBD es un rastreador de factor de forma OBD compacto que emplea un módulo MTK GSM, soporta redes GSM de 4 bandas y reportes TCP, e incorpora un chipset GPS U‑BLOX 7020 para alta sensibilidad en la localización y arranques en caliente rápidos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo en un Appello OBD puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientaciones públicas y no sensibles, recomendando verificar la documentación del fabricante para detalles específicos del firmware.

## Visión general del protocolo

A un nivel general, el protocolo del rastreador es la capa de mensajes que permite al Appello OBD identificarse, reportar datos GPS y del vehículo, y entregar estados y alarmas a Plaspy. El protocolo del dispositivo define qué telemetría se envía y cómo el servidor reconoce e interpreta cada mensaje, mientras que Plaspy proporciona el endpoint de red y la lógica para recibir esos mensajes.

- Permite que el Appello OBD transmita posiciones GPS y telemetría OBD a un servidor remoto
- Transporta identidad del dispositivo e información de sesión para que Plaspy asocie los datos entrantes con el rastreador correcto
- Transmite estados, alarmas y reportes periódicos para posibilitar la visibilidad de la flota y eventos de geocercas
- Funciona sobre el enlace celular del módulo MTK GSM del dispositivo y usa la sincronización GNSS del U‑BLOX 7020
- Está sujeto a las decisiones de firmware del proveedor y puede evolucionar con actualizaciones de firmware o revisiones de hardware

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos e incluye lógica de detección automática de protocolos, por lo que la mayoría de los dispositivos configurados para reportar al endpoint de Plaspy son reconocidos sin seleccionar manualmente un protocolo. Para los Appello OBD esto significa que la configuración correcta del endpoint y del transporte en el dispositivo es el requisito principal.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y todos los dispositivos soportados usan el mismo puerto
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario elegir un protocolo en la plataforma si el dispositivo reporta al endpoint de Plaspy
- La configuración correcta del dispositivo para apuntar a d.plaspy.com (o a la IP numérica) y al puerto de Plaspy es el requisito habitual para permitir la detección automática
- Si un dispositivo no es detectado, las causas comunes son endpoint incorrecto, tipo de transporte equivocado o diferencias de reporte específicas del firmware

## Transporte y contexto de conexión

El Appello OBD utiliza datos celulares para conectarse a los servidores de Plaspy y la capa de transporte (UDP o TCP) puede seleccionarse según el soporte del dispositivo y la configuración. Plaspy acepta tanto UDP como TCP en el puerto compartido, de modo que el equipo puede usar el transporte que mejor coincida con el comportamiento del firmware y las consideraciones de red del operador.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138
- Todos los equipos en Plaspy usan el mismo puerto, lo que simplifica el despliegue y reduce las diferencias de configuración por dispositivo
- El hardware Appello OBD usa un módulo MTK GSM y soporte GSM de 4 bandas para amplia compatibilidad celular
- Ajustes a nivel de red como APN o enrutamiento del operador SIM siguen siendo importantes para la conectividad celular y se gestionan en el lado del dispositivo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos exactos, tiempos o mensajes opcionales que envía el rastreador; confirme la versión de firmware al solucionar problemas
- Las revisiones de hardware o las herramientas de configuración del fabricante pueden introducir diferencias menores en el comportamiento entre unidades
- El Appello OBD está documentado para soportar reportes por TCP; Plaspy también acepta UDP, así que elija el transporte que coincida con el firmware o la utilidad de configuración del dispositivo
- Asegúrese siempre de que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP de Plaspy en el puerto 8888 para permitir la detección automática
- Diferencias en el mapeo de datos OBD o en sensores opcionales pueden requerir validación para confirmar que los valores recibidos por Plaspy cumplen con lo esperado
- Para detalles específicos más recientes del dispositivo consulte la documentación del fabricante

## Por qué es importante comprender el protocolo

Conocer cómo opera el protocolo del rastreador ayuda a los equipos técnicos a configurar correctamente los dispositivos, acelerar la resolución de problemas y garantizar el flujo de datos hacia Plaspy para un monitoreo de flota fiable. Estar al tanto de las expectativas sobre protocolo y transporte reduce la mala configuración y facilita el diagnóstico entre problemas de conectividad y diferencias en el formato de datos.

- Ayuda a confirmar endpoint y ajustes de transporte correctos para que los dispositivos se registren en Plaspy
- Reduce el tiempo de resolución de problemas al aclarar si una falla es de red, transporte o firmware
- Facilita la planificación de actualizaciones de firmware que puedan alterar el comportamiento de reporte
- Aumenta la confianza en el mapeo de datos OBD y en la precisión de la telemetría de vehículos en Plaspy
- Contribuye a la fiabilidad a largo plazo al facilitar la validación de consumo de energía, intervalos de reporte y comportamiento de conectividad

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador Appello OBD ofrece una vía directa para convertir la telemetría GPS y OBD del vehículo en información operativa. El enfoque de endpoint único de Plaspy y la detección automática de protocolos reducen la carga de configuración al desplegar muchos dispositivos, mientras que la plataforma entrega visibilidad de la flota, alertas y datos históricos que las organizaciones necesitan para monitoreo y operación.

Si desea saber más sobre Plaspy y cómo maneja la conectividad de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente del fabricante en http://www.cnjeo.com/.
