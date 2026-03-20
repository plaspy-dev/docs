---
slug: /bofan/b4/features
id: b4-features
sidebar_label: Features
title: Bofan - B4 Features
sidebar_class_name: menu_item_tracker
description: Resumen de características del rastreador Bofan B4 4G y su compatibilidad con Plaspy para flotas y uso personal
keywords:
  - Bofan B4
  - Características Bofan B4
  - Rastreador GPS Bofan B4
  - Bofan B4 Plaspy
  - Rastreador GPS Bofan
  - Rastreador de vehículo B4
  - Rastreador GPS 4G Bofan
  - Alerta geocerca
  - Corte remoto de motor
  - Seguimiento de flotas Plaspy
---

# Bofan - Características del B4

Esta página describe el contexto público de características del rastreador GPS vehicular Bofan B4 cuando se utiliza con Plaspy. Resume las capacidades prácticas del modelo y explica cómo se reflejan esas funciones en la plataforma Plaspy para ayudar a administradores de flota y propietarios individuales a entender qué pueden esperar del dispositivo en escenarios cotidianos de monitoreo y seguimiento.

La disponibilidad exacta de funciones, su comportamiento y las opciones de configuración pueden variar según la versión de firmware, la revisión de hardware, el método de instalación, las condiciones de red y la implementación del fabricante. Para instrucciones específicas del equipo y detalles técnicos más recientes, consulte la documentación oficial de Bofan y las notas de la versión.

## Resumen de características

El Bofan B4 es un rastreador vehicular 4G básico diseñado para ofrecer reportes de ubicación confiables y capacidades simples de control remoto para el monitoreo de vehículos. Se enfoca en funciones telemáticas esenciales que ayudan a la localización, alertas perimetrales, intervención remota y reducción de reportes cuando el vehículo está estático para ahorrar datos.

- Conectividad 4G para actualizaciones de ubicación puntuales y rastreo en vivo.
- Alerta de geocerca que notifica cuando un vehículo entra o sale de un área definida.
- Capacidad de corte remoto de motor para detener el vehículo en casos de robo o emergencia.
- Monitoreo del tiempo de motor en funcionamiento para registrar horas de uso.
- Reducción de reportes en modo estacionario para ahorrar datos móviles.
- Opciones de reporte dual que incluyen seguimiento por SMS y rastreo en vivo por GPRS.

## Funciones principales del Bofan - B4

- Conectividad celular 4G para reporte de posiciones en tiempo real y envío de comandos remotos.
- Notificaciones de geocerca para generar alertas al ingresar o salir de límites predefinidos.
- Salida para corte remoto de motor que permite detener el motor mediante una salida de control.
- Registro del tiempo que el motor está encendido para analizar uso y productividad.
- Supresión de reportes GPRS en modo estático para reducir consumo de datos cuando el vehículo está estacionado.
- Soporte de rastreo por SMS como método de respaldo para reportes.
- Antenas GSM y GPS internas para una instalación más integrada.
- Entrada ACC y una salida configurable para integración básica con el vehículo.

## Cómo se integran estas funciones en Plaspy

Plaspy presenta los datos del B4 como puntos de ubicación, alertas y estado del dispositivo, de modo que los equipos puedan monitorear el movimiento del vehículo y tomar acciones desde la plataforma. Plaspy detecta automáticamente los protocolos compatibles del rastreador y acepta conexiones de dispositivo en el puerto de entrada estándar, permitiendo que equipos que reportan vía GPRS o SMS aparezcan en la plataforma sin necesidad de seleccionar manualmente el protocolo.

- La ubicación en vivo y el historial de movimiento se muestran en Plaspy como actualizaciones de posición del B4 cuando se usa rastreo GPRS en tiempo real.
- Los eventos de geocerca generados por el B4 aparecen como alertas en Plaspy para que los operadores reciban notificaciones y revisen incidentes en el mapa.
- El corte remoto de motor se representa en Plaspy como un comando remoto hacia la salida del dispositivo, permitiendo flujos de trabajo coordinados desde la plataforma.
- El tiempo de motor encendido reportado por el dispositivo puede utilizarse en los informes de Plaspy para comprender tiempos de operación y utilización.
- Cuando el dispositivo aplica supresión de reportes en modo estático, Plaspy mostrará una frecuencia de actualización reducida mientras el vehículo está detenido, ayudando a controlar los costos de datos.
- Plaspy detecta el protocolo del rastreador automáticamente y soporta conexiones de dispositivos vía UDP o TCP al dominio de la plataforma, facilitando la puesta en servicio.

## Casos de uso típicos

- Seguimiento de ubicación de flotas para supervisión de rutas y coordinación de despachos.
- Monitoreo perimetral con alertas de geocerca para cumplimiento en depósitos o rutas.
- Protocolos de respuesta ante robo que emplean corte remoto de motor para ayudar en la recuperación.
- Análisis de utilización de vehículos mediante el tiempo de motor encendido para control de turnos y uso.
- Rastreo económico donde el modo estático reduce el consumo de datos celulares.
- Reporte por SMS de respaldo en zonas con cobertura GPRS intermitente.

## Notas sobre disponibilidad de funciones

- Las versiones de firmware del fabricante y las revisiones de hardware pueden añadir o modificar el comportamiento; revise las notas de la versión del firmware para conocer las capacidades exactas.
- Algunas funciones dependen del cableado realizado durante la instalación, por ejemplo el uso de la entrada ACC y la conexión de la salida de corte de motor.
- La disponibilidad del rastreo por SMS depende del plan de la SIM y del soporte de la red celular en su región.
- Variantes regionales o modificaciones posteriores a la venta pueden afectar qué funciones están presentes en una unidad específica.
- Para una configuración autorizada del dispositivo, consulte la documentación oficial de Bofan y las guías de configuración del equipo.

## Por qué usar Plaspy con estas funciones

Usar el Bofan B4 con Plaspy ofrece una combinación práctica entre un rastreador 4G pensado en costos y una plataforma orientada a visibilidad y supervisión operativa. Plaspy recopila actualizaciones de ubicación, alertas y estado del dispositivo para que los equipos puedan monitorear el movimiento, recibir notificaciones de geocerca y emitir comandos remotos desde una interfaz unificada. La detección automática de protocolos y el manejo integrado de dispositivos simplifican poner en línea unidades B4 y mantener una supervisión coherente en flotas mixtas.

Para conocer más sobre Plaspy y cómo puede utilizarse con el Bofan B4, visite https://www.plaspy.com. Para detalles específicos de funciones por dispositivo, notas de firmware y orientación del fabricante, verifique la información vigente en el sitio oficial de Bofan https://www.bofancloud.com/.
