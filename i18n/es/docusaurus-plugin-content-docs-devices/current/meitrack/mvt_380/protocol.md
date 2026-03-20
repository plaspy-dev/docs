---
slug: /meitrack/mvt_380/protocol
id: mvt_380-protocol
sidebar_label: Protocol
title: Meitrack - MVT-380 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Meitrack MVT-380 y su comunicación con Plaspy para rastreo y comandos remotos
keywords:
  - protocolo Meitrack MVT-380
  - protocolo GPS Meitrack MVT-380
  - protocolo MVT-380
  - protocolo de rastreador Meitrack
  - compatibilidad MVT-380 Plaspy
  - rastreo vehicular Meitrack
  - comunicación rastreador GPS Plaspy
  - protocolo de rastreo Meitrack
  - protocolo de rastreo MVT 380
  - protocolo de registro GPS Meitrack
---

# Meitrack - Protocolo MVT-380

Esta página explica, en términos generales, el contexto del protocolo público para usar el rastreador Meitrack MVT-380 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy, los ajustes de conexión que normalmente configurará en el equipo y qué esperar durante la integración. El objetivo es ayudar a gestores de flota e integradores técnicos a comprender el papel de comunicación del rastreador sin detallar internals del dispositivo.

El MVT-380 es compatible con Plaspy y ofrece rastreo en tiempo real, alertas por geocercas, registro GPS, audio bidireccional, un relé opcional para corte de motor, modo de suspensión, reportes por botón SOS, localizaciones asistidas por AGPS y alertas por exceso de velocidad. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la documentación del fabricante deben usarse para completar cualquier paso de instalación.

## Visión general del protocolo

A grandes rasgos, el protocolo del dispositivo define cómo el MVT-380 informa ubicación, eventos y estado a un servidor remoto y cómo los comandos remotos se entregan de vuelta al equipo. El protocolo es el mecanismo que transforma el estado del dispositivo y las lecturas de sensores en mensajes que Plaspy puede procesar y mostrar en la plataforma.

- Permite que el rastreador envíe actualizaciones de ubicación, marcas de tiempo e informes de estado a un servidor remoto
- Transporta notificaciones de eventos como entradas y salidas de geocerca, pulsaciones del botón SOS y alertas por exceso de velocidad
- Permite la entrega de comandos remotos soportados por el dispositivo, como control de motor y activación de audio bidireccional
- Proporciona identificación del dispositivo e información de sesión para que Plaspy asocie los mensajes con el activo correcto
- Soporta opciones de configuración del dispositivo como la selección de transporte y los intervalos de reporte

## Cómo Plaspy detecta el protocolo

Plaspy identifica automáticamente el protocolo del rastreador una vez que el dispositivo está configurado para reportar al endpoint de Plaspy. En la mayoría de los casos no es necesario seleccionar manualmente un protocolo dentro de Plaspy cuando el rastreador apunta correctamente al servidor de Plaspy y usa el puerto compartido.

- Plaspy usa un endpoint público único para reportes de dispositivos en d.plaspy.com
- La IP del servidor de Plaspy para configuración directa es 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto para reportes, lo que simplifica la configuración entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al servidor
- Si el rastreador está correctamente configurado para reportar al endpoint de Plaspy, por lo general no será necesario seleccionar el protocolo manualmente en la plataforma

## Transporte y contexto de conexión

El MVT-380 soporta opciones de transporte de red comúnmente usadas por dispositivos Meitrack. La elección del transporte afecta cómo el equipo abre y mantiene conexiones con Plaspy, y algunas operadoras o condiciones de red pueden influir en qué transporte funciona mejor.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el firmware y la configuración del modelo
- Los equipos pueden apuntar al hostname d.plaspy.com o directamente a la IP 54.85.159.138
- El puerto 8888 es el puerto compartido que Plaspy utiliza para todos los reportes de dispositivos compatibles
- Elija UDP cuando prefiera reportes sin estado o menor sobrecarga, y TCP cuando necesite mayor fiabilidad en la entrega de mensajes individuales
- Verifique la configuración de APN y la SIM en el dispositivo para asegurar la conectividad móvil antes de intentar registrar el equipo en el endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales y comandos soportados, por lo que es importante revisar versiones
- Revisión de hardware y accesorios opcionales, como un relé para corte de motor o módulos de audio bidireccional, pueden modificar los comandos remotos disponibles
- Ajustes del fabricante y builds regionales de firmware a veces introducen pequeñas diferencias de comportamiento entre modelos que por lo demás son idénticos
- La selección de transporte entre UDP y TCP debe coincidir con la configuración del dispositivo y con las limitaciones de la operadora
- Plaspy intentará la detección automática, pero el dispositivo debe estar configurado correctamente para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Valide características clave como geocercas, reportes SOS y comportamiento de registro después de la configuración inicial para confirmar la operación de extremo a extremo

## Por qué es importante entender el protocolo

Conocer el protocolo de comunicación del rastreador ayuda a asegurar una configuración confiable, facilitar la resolución de problemas y mantener una operación consistente a lo largo del tiempo. Comprender cómo se entregan los mensajes y cómo se identifica el dispositivo reduce fricciones en la integración y acelera la resolución de incidencias de conectividad.

- Facilita confirmar si los mensajes llegan al servidor de Plaspy y si se están parseando correctamente
- Ayuda a solucionar datos faltantes, intervalos de actualización irregulares o la ausencia de eventos como disparos de geocerca
- Orienta la decisión sobre selección de transporte e intervalos de reporte para balancear necesidades de datos y vida útil de batería
- Aclara qué comandos remotos están disponibles y cómo interactúan los accesorios del dispositivo con la entrega de comandos
- Apoya la planificación de actualizaciones de firmware o despliegues de hardware en una flota mixta

## Por qué usar Plaspy con este protocolo

Usar el Meitrack MVT-380 con Plaspy ofrece a las organizaciones acceso a rastreo en tiempo real, gestión de eventos y registro GPS detallado en una sola plataforma. El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican el despliegue entre dispositivos y reducen la carga de configuración al implementar rastreadores en una flota.

Para saber más sobre Plaspy y cómo funciona con dispositivos como el MVT-380 visite https://www.plaspy.com. Para obtener detalles específicos del protocolo del dispositivo, comportamiento de firmware y notas de implementación consulte la documentación del fabricante en https://www.meitrack.com/ para verificar la información más reciente.
