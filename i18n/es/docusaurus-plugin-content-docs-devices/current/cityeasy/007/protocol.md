---
slug: /cityeasy/007/protocol
id: 007-protocol
sidebar_label: Protocol
title: Cityeasy - 007 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para el rastreador GPS Cityeasy 007 y cómo se comunica con la plataforma Plaspy
keywords:
  - protocolo Cityeasy 007
  - protocolo GPS Cityeasy 007
  - protocolo de rastreo Cityeasy 007
  - compatibilidad del rastreador Cityeasy con Plaspy
  - comunicación del rastreador GPS Cityeasy
  - protocolo de seguimiento vehicular
  - gestión de flotas Plaspy
  - rastreo LBS GPS
  - compatibilidad IP67 rastreador
  - rastreador GPS batería extraíble
---

# Cityeasy - Protocolo 007

Esta página describe el contexto público del protocolo para usar el rastreador GPS Cityeasy 007 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy a alto nivel y en qué considerar al configurar la unidad para su uso en la plataforma. El Cityeasy 007 es un rastreador compacto para vehículos que ofrece ubicación en tiempo real por LBS y GPS, monitoreo a larga distancia, batería extraíble de 5000 mAh y carcasa IP67 para uso en distintos entornos.

Plaspy emplea ajustes de conexión compartidos para todos los dispositivos compatibles y detecta automáticamente el protocolo cuando un equipo reporta a la plataforma. El comportamiento exacto de reporte y los comandos admitidos por una unidad Cityeasy 007 pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por eso esta página evita detalles específicos de firmware y explica el contexto general de comunicación y las consideraciones prácticas de compatibilidad con Plaspy.

## Resumen del protocolo

El protocolo utilizado por el Cityeasy 007 es el método de comunicación que permite al rastreador identificarse, transmitir posiciones LBS y GPS, y enviar telemetría que Plaspy utiliza para mapas, alertas e informes de estado. Esta sección resume el papel del protocolo en términos prácticos sin describir detalles internos propietarios de los paquetes.

- Permite reportes periódicos y basados en eventos para que Plaspy muestre la ubicación y el historial de movimiento.
- Transporta telemetría básica, como estado de la batería y salud del dispositivo, que Plaspy expone en los paneles de monitoreo.
- Provee un mecanismo para que el equipo se identifique y así Plaspy asocie los datos entrantes con el activo de la flota correcto.
- Soporta distintos modos de transporte según la configuración del dispositivo para que el rastreador pueda comunicarse con Plaspy desde redes celulares.
- Actúa como puente entre el comportamiento del firmware del fabricante y las rutinas de ingestión de Plaspy que normalizan los datos para los usuarios.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes de dispositivos en un único endpoint compartido e identifica automáticamente el protocolo del rastreador según los datos que el equipo envía al conectarse o al reportar por primera vez. En la mayoría de los casos, un Cityeasy 007 configurado correctamente para reportar a Plaspy será reconocido sin necesidad de seleccionar el protocolo manualmente en la plataforma.

- Plaspy escucha en el endpoint compartido del servidor y utiliza el flujo de datos entrante para determinar la compatibilidad del protocolo automáticamente.
- Usted normalmente no necesita elegir un protocolo en Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Si el dispositivo envía un ID identificable o datos de handshake inicial, Plaspy asocia esos valores con un registro de dispositivo para su procesamiento continuo.
- La detección automática facilita el soporte de muchos modelos de rastreadores y mantiene la configuración simple para los administradores de flota.
- Si la detección no ocurre, el primer paso recomendado es verificar la configuración de reporte del dispositivo y la versión de firmware.

## Contexto de transporte y conexión

El Cityeasy 007 puede configurarse para enviar datos a Plaspy usando UDP o TCP según el firmware y la configuración del equipo. Plaspy expone un único endpoint público para el reporte de dispositivos y usa el mismo puerto de escucha para todos los dispositivos admitidos, con el fin de simplificar la configuración.

- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com al configurar el rastreador.
- Como alternativa al dominio, los equipos pueden apuntar a la IP del servidor Plaspy 54.85.159.138 si no hay DNS disponible en el entorno del dispositivo.
- Plaspy utiliza el puerto 8888 como puerto único de reporte para reducir la complejidad de la configuración.
- Los rastreadores que soportan UDP y TCP pueden configurarse en el transporte que mejor se adapte a la estabilidad de la red y a las capacidades del firmware.
- Asegúrese de que el APN del dispositivo y los ajustes de red saliente permitan tráfico hacia el endpoint de Plaspy para que los reportes lleguen a la plataforma.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las opciones de configuración del fabricante pueden cambiar el tiempo de mensajes, los campos disponibles y las preferencias de transporte.
- Las revisiones de hardware del Cityeasy 007 pueden introducir pequeñas diferencias en el comportamiento que afectan cómo el equipo reporta a Plaspy.
- Funciones del lado del fabricante, como cifrado opcional o handshakes propietarios, pueden alterar la compatibilidad y deben revisarse en la documentación oficial.
- Seleccionar UDP o TCP en el dispositivo debe corresponder con la capacidad del equipo y el entorno de red; Plaspy acepta ambos en el puerto compartido.
- Verifique que el IMEI del dispositivo y el intervalo de reporte estén configurados correctamente para garantizar que Plaspy pueda detectar y registrar el rastreador.
- Siempre valide la compatibilidad contra la documentación más reciente del fabricante para pasos de configuración específicos del modelo.

## Por qué es importante comprender el protocolo

Comprender a alto nivel el protocolo de comunicación del Cityeasy 007 ayuda a los administradores a configurar los equipos correctamente, resolver problemas comunes de reporte y tomar decisiones informadas sobre actualizaciones de firmware y la escala de despliegue.

- Reduce el tiempo hasta la primera ubicación asegurando que los ajustes de reporte apunten a d.plaspy.com o a la IP del servidor Plaspy y usen el puerto de la plataforma.
- Facilita el diagnóstico de problemas de conectividad al distinguir entre fallas de transporte y problemas de firmware o configuración.
- Orienta las decisiones sobre programación de actualizaciones y pruebas cuando nuevas versiones de firmware pueden cambiar el comportamiento de reporte.
- Mejora la fiabilidad de la flota alineando la energía del dispositivo y los intervalos de reporte con los requerimientos operativos y los patrones de ingestión de Plaspy.
- Favorece un proceso de incorporación de dispositivos seguro y predecible al confirmar la identidad del equipo y los campos de telemetría esperados.

## Por qué usar Plaspy con este protocolo

Usar unidades Cityeasy 007 con Plaspy brinda a las organizaciones visibilidad consolidada de la ubicación de los vehículos, telemetría de batería y estado, y recorridos históricos que apoyan la supervisión operativa y los flujos de trabajo de gestión de flotas. El enfoque de endpoint único de Plaspy y la detección automática de protocolo simplifican despliegues a gran escala y reducen el esfuerzo de configuración por dispositivo.

Para conocer más sobre cómo Plaspy trabaja con protocolos de dispositivos y revisar las características de la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo; verifique la información de protocolo específica del dispositivo en el sitio oficial del fabricante.
