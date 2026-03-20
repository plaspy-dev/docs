---
slug: /carscop/cc_318/features
id: cc_318-features
sidebar_label: Features
title: Carscop - CC-318 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de las funciones del rastreador Carscop CC-318 y su integración con Plaspy para flotas y renta de vehículos
keywords:
  - Carscop CC-318
  - Funciones Carscop CC-318
  - Rastreador GPS CC-318
  - Rastreador GPS Carscop
  - Compatibilidad CC-318 con Plaspy
  - Inmovilizador remoto CC-318
  - Batería de respaldo CC-318
  - Entradas de alarma CC-318
  - Bluetooth CANbus opcional CC-318
  - Rastreo vehicular CC-318
---

# Carscop - CC-318 — Características

Esta página describe el contexto público de funciones para el uso del rastreador GPS Carscop CC-318 con Plaspy. Se enfoca en las capacidades del modelo que resultan relevantes para la supervisión, el control remoto y los flujos de seguridad cuando el dispositivo está conectado a la plataforma Plaspy, así como en la manera en que estas capacidades suelen presentarse a operadores de flotas y servicios de alquiler.

La disponibilidad y el comportamiento exacto de las funciones pueden variar según la versión de firmware, la revisión de hardware, el método de instalación y la implementación del fabricante. Para especificaciones precisas del dispositivo, opciones soportadas y notas de firmware consulte la documentación y las notas de lanzamiento oficiales de Carscop.

## Resumen de funciones

El CC-318 es un rastreador vehicular compacto, compatible con Plaspy, diseñado para gestión de flotas, alquiler de vehículos y car sharing. Combina posicionamiento GNSS con conectividad celular y un conjunto de entradas y salidas de alarma destinadas a flujos de trabajo de control remoto y antirrobo.

- Posicionamiento en tiempo real por GPS y Beidou con asistencia A-GPS para fijaciones más rápidas y LBS como alternativa cuando GNSS no está disponible.
- Salidas de control remoto para bloqueo y desbloqueo, activación de luces y claxon, además de corte del motor bajo demanda para inmovilización.
- Batería interna recargable Li-ion de respaldo y alarma por corte de alimentación para reportar manipulación o pérdida de la alimentación principal.
- Entradas de alarma para detección de golpes, estado de puertas y ACC que permiten generar eventos de seguridad y comportamiento del conductor.
- Memoria interna para registro de rutas offline de modo que el historial de ubicaciones se preserve durante interrupciones de conectividad.

## Características principales del Carscop - CC-318

- Conectividad 2G GSM para datos y SMS, usada tanto para reportar telemetría como para recibir comandos remotos.
- Posicionamiento GNSS mediante GPS y Beidou, con asistencia A-GPS y fallback por LBS (torres celulares) para mejorar la cobertura.
- Salidas de acción remota que incluyen bloqueo/desbloqueo, luces intermitentes y activación de claxon, con soporte para comandos de inmovilizador remoto.
- Batería de respaldo recargable Li-ion y alarma por corte de alimentación para notificar a Plaspy cuando se interrumpe la energía principal del vehículo.
- Entradas de alarma dedicadas para detección de golpes, estado de puertas y monitoreo de ACC, que generan alertas y eventos.
- Almacenamiento a bordo para registro de recorridos offline y preservar el historial de movimiento durante cortes de red.
- Sensor G integrado para registrar comportamiento de conducción y captura de eventos.
- Posibles actualizaciones opcionales como módulos Bluetooth y CANbus para ampliar la compatibilidad con sensores y el acceso a datos del vehículo cuando se instalan.

## Cómo funcionan estas funciones con Plaspy

Al integrarse, el CC-318 envía ubicaciones, entradas de seguridad y eventos de sensores a Plaspy para que los equipos puedan monitorear el estado y ejecutar acciones remotas. Plaspy detecta automáticamente los protocolos de rastreo compatibles para simplificar la integración inicial y recibe la telemetría para supervisión en vivo y análisis histórico.

- Actualizaciones de ubicación en tiempo real e historiales de recorrido visibles en Plaspy mediante informes de posición GNSS y datos de fallback LBS.
- Eventos de seguridad y alarmas como apertura de puertas, golpes y cambios en ACC aparecen en Plaspy como alertas o registros de eventos.
- Los eventos de corte de alimentación y batería de respaldo se muestran para ayudar a detectar manipulación o pérdida de la alimentación principal.
- Los comandos de control remoto e inmovilizador pueden enviarse desde la plataforma Plaspy al dispositivo cuando el control por red o SMS está habilitado.
- Los datos opcionales de CANbus y Bluetooth, cuando están presentes y configurados, pueden reenviarse a Plaspy como telemetría adicional para mayor visibilidad del vehículo y sus sensores.

## Casos de uso habituales

- Gestión de flotas con seguimiento continuo de ubicaciones, registro de comportamiento de conducción y continuidad de rutas offline para supervisión operativa.
- Alquiler de vehículos y car sharing que requieren bloqueo/desbloqueo remoto, inmovilización bajo demanda y registro de uso integrado en los flujos de trabajo de Plaspy.
- Despliegues antirrobo y recuperación que combinan alarmas por manipulación y corte de alimentación con la capacidad de inmovilizar a distancia.
- Programas de telemetría y mantenimiento que integran registros del sensor G con datos opcionales de CANbus para diagnóstico operativo.
- Configuraciones híbridas que usan sensores Bluetooth opcionales para proximidad, identificación del conductor o monitoreo ambiental.

## Notas sobre disponibilidad de funciones

- Los conjuntos de funciones pueden variar entre revisiones de firmware y variantes de hardware; consulte al fabricante para conocer las capacidades exactas de su unidad.
- Módulos opcionales como Bluetooth y CANbus requieren la actualización de hardware y la configuración correspondiente para estar disponibles.
- El comportamiento de la conectividad celular depende de la disponibilidad de redes 2G en la región y del soporte del operador en el área de despliegue.
- El cableado instalado y las elecciones de integración pueden afectar qué entradas y salidas de alarma quedan disponibles para su uso.
- El comportamiento del registro a bordo y la retención de eventos dependen de la configuración del dispositivo y de los ajustes de firmware.

## Por qué usar Plaspy con estas funciones

Combinar el CC-318 con Plaspy ofrece una plataforma unificada para la visibilidad de ubicaciones, la detección de eventos y el control remoto del vehículo. Plaspy agrega informes de posición, entradas de alarma y datos opcionales del vehículo para proporcionar a los equipos operativos un único lugar donde monitorear activos, responder alertas y automatizar flujos de trabajo como la inmovilización o el control de accesos.

Si desea explorar cómo el CC-318 encaja en su flota o en sus operaciones de alquiler, conozca más sobre Plaspy en https://www.plaspy.com. Las funciones del dispositivo, el comportamiento del firmware y la implementación del fabricante pueden cambiar con el tiempo, por lo que verifique los detalles más recientes del dispositivo con el fabricante en http://www.carscop.com/ antes de confiar en una capacidad específica.
