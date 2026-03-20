---
slug: /zilogic/fleet/features
id: fleet-features
sidebar_label: Features
title: Zilogic - Fleet Features
sidebar_class_name: menu_item_tracker
description: Resumen público de funciones del rastreador Zilogic Fleet y su integración con Plaspy para gestión de flotas y control de E/S
keywords:
  - Zilogic Fleet
  - características Zilogic Fleet
  - rastreador GPS Zilogic Fleet
  - capacidades Zilogic Fleet
  - funciones Zilogic Fleet
  - Zilogic Fleet Plaspy
  - rastreador GPS para flotas
  - dispositivo de localización vehicular
  - rastreador GPS RS232
  - rastreador para gestión de flotas
---

# Zilogic - Funciones de Fleet

Esta página describe el contexto público de funcionalidades al usar el rastreador Zilogic BlackKite-Fleet con Plaspy. Se centra en las capacidades funcionales que verá en Plaspy cuando el dispositivo reporte ubicación y estado, y en cómo esas capacidades apoyan la supervisión de flotas y la gestión operativa en la plataforma Plaspy.

La disponibilidad exacta de funciones y su comportamiento pueden variar según la versión del firmware del dispositivo, la revisión de hardware, el método de instalación y la implementación del fabricante. Utilice esta página como una visión práctica y consulte la documentación del dispositivo y las notas de firmware del fabricante para obtener detalles precisos y actualizados.

## Resumen general de funciones

El BlackKite-Fleet está diseñado para la gestión de activos móviles y flotas, ofreciendo posicionamiento preciso e interfaces dedicadas del vehículo que reportan estado y permiten control remoto en configuraciones compatibles. En Plaspy, esos reportes aparecen como historial de ubicaciones, eventos de estado de entradas y controles accionables cuando el dispositivo y la configuración lo permiten.

- Posicionamiento GPS de alta precisión para soporte de ubicación continua del vehículo y registro de rutas.
- Entradas dedicadas para encendido, estado de batería y botón de pánico para destacar eventos clave del vehículo.
- Varias entradas digitales para monitorear señales a bordo como estado de puertas, pulsos de taxímetro u otras condiciones binarias.
- Líneas de salida digital que pueden usarse para controlar electrónica a bordo y, cuando está habilitado, inmovilizar el vehículo en usos no autorizados.
- Entradas analógicas para monitorear parámetros como nivel de combustible, temperatura o carga cuando el dispositivo está cableado a esos sensores.
- Interfaz serie RS232 para conectar dispositivos externos como lectores RFID o sensores de terceros que complementen los flujos de trabajo de la flota.

## Características clave de Zilogic - Fleet

- Receptor GPS integrado de alta precisión para rastreo de ubicación y registro de recorridos confiable.
- Entrada dedicada de encendido para detectar el estado de encendido/apagado del vehículo.
- Interfaz de monitoreo de batería dedicada para reportar el estado de alimentación del vehículo.
- Entrada para botón de pánico para señalización de emergencias cuando está cableado y configurado.
- Tres entradas digitales configurables para monitoreo personalizado de estados on/off.
- Tres salidas digitales para controlar dispositivos o realizar inmovilización en instalaciones compatibles.
- Dos entradas analógicas para leer valores variables de sensores como combustible o temperatura.
- Puerto RS232 para conectividad con dispositivos externos y periféricos de autenticación de operador.

## Cómo funcionan estas funciones con Plaspy

El BlackKite-Fleet reporta ubicación y el estado de entradas/salidas a Plaspy, donde esos mensajes se normalizan en eventos, registros de posición e indicadores de estado del dispositivo. Plaspy detecta automáticamente protocolos de rastreadores compatibles y presenta la información de ubicación y estado en la plataforma para monitoreo e informes.

- Las actualizaciones de ubicación aparecen como posiciones en vivo y recorridos históricos en los mapas e informes de Plaspy.
- Las entradas de encendido, batería y pánico se muestran como eventos discretos o cambios de estado del dispositivo para monitoreo y alertas.
- Los cambios en entradas digitales pueden rastrearse como eventos personalizados en Plaspy, permitiendo visibilidad operativa de puertas, taxímetros u otras condiciones on/off.
- Las lecturas de entradas analógicas reportadas por el rastreador se pueden registrar en Plaspy para análisis de tendencias y supervisión básica de métricas cuando el dispositivo envía esos valores.
- Las salidas digitales controladas por el rastreador pueden reflejarse en Plaspy como acciones de control remoto cuando el firmware y la configuración del dispositivo permiten comandos externos.
- La gestión de dispositivos de Plaspy reconoce el rastreador y muestra la telemetría disponible para que los operadores de flota configuren flujos de trabajo de monitoreo e informes.

## Casos de uso típicos

- Seguimiento de ubicación de vehículos en tiempo real y reproducción de rutas para supervisión de flotas.
- Monitoreo de estado de encendido y batería para detectar patrones de uso del vehículo y problemas de alimentación.
- Registro de eventos de conductor o de taxímetro en operaciones de taxi y transporte de pasajeros.
- Capacidad de deshabilitar remotamente (inmovilización) como medida de seguridad ante robos o usos no autorizados, cuando está soportado y configurado.
- Recolección de datos de sensores analógicos como combustible o temperatura para respaldar la toma de decisiones operativas.
- Integración de flujos de autenticación de operadores usando periféricos conectados por RS232, como lectores RFID.

## Notas sobre disponibilidad de funciones

- El firmware del fabricante y la revisión de hardware pueden cambiar el comportamiento de entradas, salidas y canales analógicos. Verifique el comportamiento en su unidad específica y la compilación de firmware.
- Algunas funciones requieren cableado correcto y configuración por el instalador; las instalaciones automotrices varían según el vehículo y las prácticas del instalador.
- Los periféricos conectados por RS232 requieren dispositivos externos compatibles y la configuración serial adecuada para transmitir datos significativos al rastreador.
- El control remoto de salidas digitales depende del firmware del dispositivo y de la configuración específica en Plaspy; no todas las instalaciones habilitan comandos externos para salidas.
- Plaspy detecta automáticamente el protocolo del rastreador y acepta conexiones TCP o UDP para el envío de reportes cuando el dispositivo está configurado para comunicarse con el servidor Plaspy.

## Por qué usar Plaspy con estas funciones

Combinar el Zilogic BlackKite-Fleet con Plaspy ofrece a las organizaciones una forma práctica de consolidar ubicación, estado de entradas y métricas básicas de sensores en una sola plataforma de flotas. Plaspy traduce las posiciones GPS reportadas y los eventos del dispositivo en mapas, líneas de tiempo y alertas que ayudan a los equipos operativos a mejorar la visibilidad, responder a incidentes y analizar patrones de uso de los vehículos.

Para conocer más sobre cómo Plaspy admite rastreadores de flotas y revisar las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener los detalles más recientes específicos del dispositivo, notas de firmware y documentación técnica, consulte al fabricante en https://zilogic.com/ para verificar la implementación y cualquier cambio reciente.
