---
slug: /gosafe/g1c/protocol
id: g1c-protocol
sidebar_label: Protocol
title: Gosafe - G1C Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Gosafe G1C y su comunicación con Plaspy para un rastreo vehicular confiable
keywords:
  - protocolo Gosafe G1C
  - protocolo GPS Gosafe G1C
  - compatibilidad G1C Plaspy
  - protocolo rastreador Gosafe
  - protocolo de rastreo G1C
  - comunicación GPS Gosafe
  - rastreo de flota G1C
  - compatibilidad dispositivos Plaspy
  - protocolo rastreador de vehículos
  - configuración Gosafe G1C
---

# Gosafe - G1C Protocol

Esta página describe el contexto público del protocolo para usar el rastreador Gosafe G1C con la plataforma de flotas Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, las opciones de conexión y transporte habitualmente utilizadas, y consideraciones prácticas de compatibilidad. El G1C es un rastreador GPS compacto diseñado para múltiples aplicaciones automotrices y ofrece conectividad LTE CAT 1 y GPRS, antenas internas para celular y GPS, detección de encendido, registro de datos de choque y otras telemetrías útiles para monitoreo de flotas y activos.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Para dispositivos G1C esto normalmente implica apuntar el rastreador al servidor de Plaspy d.plaspy.com o al IP equivalente 54.85.159.138 y usar el puerto 8888. El G1C puede configurarse para usar UDP o TCP en el puerto 8888 según la configuración del equipo y el entorno de red. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, por lo que conviene validar los detalles específicos del dispositivo con la documentación oficial del fabricante cuando sea necesario.

## Resumen del protocolo

El protocolo de reporte define cómo el Gosafe G1C envía ubicación, estado y datos de eventos a un endpoint en la nube como Plaspy y cómo la plataforma identifica y procesa esos mensajes entrantes. En la práctica, el protocolo permite reportes periódicos de posición, mensajes impulsados por eventos como encendido o choques, y comandos remotos simples cuando están soportados, todo encaminado a Plaspy para su parseo y visualización.

- Permite al G1C entregar posición GPS, marcas de tiempo y telemetría básica a un servidor remoto
- Incluye indicadores de eventos como estado de encendido y entrada de pánico en mensajes que Plaspy consume
- Proporciona la información que Plaspy necesita para correlacionar la identidad del dispositivo con los activos de la flota
- Soporta operación sobre redes celulares usando LTE CAT 1 o GPRS según cobertura y configuración
- Funciona con las antenas internas del dispositivo y su diseño de bajo consumo para instalaciones discretas

## Cómo detecta Plaspy el protocolo

Plaspy recibe datos en un endpoint compartido y utiliza detección automática para determinar el protocolo entrante del rastreador, por lo que en general los usuarios no necesitan seleccionar un protocolo manualmente. Si un G1C está configurado para reportar al endpoint de Plaspy y el dispositivo es accesible en la red, Plaspy intentará parsear los mensajes y asociarlos con el registro de activo correspondiente.

- Plaspy escucha en la dirección de servidor común d.plaspy.com y en la IP pública 54.85.159.138 usando el puerto 8888
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración
- La plataforma detecta automáticamente el protocolo del rastreador cuando el dispositivo envía datos al endpoint de Plaspy
- En la mayoría de implementaciones solo necesita configurar el G1C para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- No suele ser necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo envía datos correctamente al endpoint compartido

## Transporte y conexiones

Las opciones de transporte afectan cómo el G1C transmite datos a Plaspy, pero no cambian el propósito general del protocolo. El G1C soporta conectividad celular y puede configurarse para usar UDP o TCP en el puerto de Plaspy según lo requiera el operador, el firmware o la instalación.

- El G1C puede configurarse para usar UDP o TCP en el puerto 8888 según las opciones del dispositivo
- Los dispositivos deben apuntar al servidor de Plaspy d.plaspy.com o a la IP 54.85.159.138 como destino
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, facilitando la configuración y las reglas de firewall
- La elección entre UDP y TCP puede afectar la confiabilidad y la latencia, pero la determina la configuración del dispositivo y las condiciones de red
- Asegúrese de que firewalls o dispositivos NAT permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las actualizaciones de firmware pueden modificar el comportamiento de los mensajes y las funciones disponibles; verifique la versión de firmware instalada al validar compatibilidad
- Revisiones de hardware o variantes regionales del G1C pueden exponer opciones de configuración distintas o valores por defecto diferentes
- La configuración por defecto del fabricante puede ser UDP o TCP; confirme y ajuste el transporte para que coincida con las políticas de red y las expectativas de Plaspy
- Los datos de choque, comportamiento de conducción y otras telemetrías avanzadas son capacidades del dispositivo y su frecuencia de reporte puede variar según el firmware
- Plaspy intentará detectar automáticamente el protocolo cuando el dispositivo informe a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Siempre consulte la documentación del fabricante para limitaciones específicas del modelo, ajustes recomendados y notas de firmware

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el G1C ayuda a garantizar reportes confiables, correcta identificación del dispositivo y resolución eficaz de problemas al integrarlo con Plaspy. Conocer las opciones de transporte, los eventos esperados y las capacidades del dispositivo reduce errores de configuración y acorta los tiempos de soporte.

- Apuntar correctamente el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888 evita problemas comunes de configuración
- Saber si el dispositivo usa UDP o TCP facilita la configuración de firewalls y redes
- Estar al tanto de las diferencias de firmware ayuda a interpretar comportamientos inesperados o telemetría ausente
- Comprender el reporte de eventos como encendido y datos de choque mejora las reglas de monitoreo y las alertas
- Expectativas claras sobre el protocolo hacen más sencillo validar la salud y conectividad del dispositivo durante despliegues

## Por qué usar Plaspy con este protocolo

Usar el Gosafe G1C con Plaspy ofrece un camino directo para capturar datos de ubicación y eventos desde un rastreador compacto y de bajo consumo hacia una plataforma diseñada para visibilidad de flotas y supervisión operativa. El enfoque de endpoint compartido de Plaspy simplifica la configuración de dispositivos en despliegues grandes y reduce la cantidad de pasos de configuración por dispositivo necesarios para comenzar a recibir telemetría.

Si desea conocer más sobre cómo Plaspy maneja la conectividad de dispositivos y las funcionalidades para flotas, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la guía más reciente del fabricante para el Gosafe G1C, verifique la información en el sitio oficial de Gosafe https://gosafesystem.com/ porque el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
