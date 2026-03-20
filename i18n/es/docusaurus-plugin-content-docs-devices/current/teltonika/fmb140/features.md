---
slug: /teltonika/fmb140/features
id: fmb140-features
sidebar_label: Features
title: Teltonika - FMB140 Features
sidebar_class_name: menu_item_tracker
description: Resumen público de características del rastreador Teltonika FMB140 y cómo sus funciones CAN y BLE se integran con Plaspy para telemática de flota
keywords:
- Teltonika FMB140
- características FMB140
- características Teltonika FMB140
- rastreador GPS FMB140
- telemetría CAN FMB140
- Bluetooth FMB140
- Teltonika FMB140 Plaspy
- gestión de flotas FMB140
- accesorios FMB140
- Teltonika FMB140 fin de vida
---

# Teltonika - Características del FMB140

Esta página ofrece un resumen público de las características del Teltonika FMB140 y cómo sus capacidades se relacionan con Plaspy para el rastreo y la telemetría de flotas. Se centra en las funciones prácticas y no sensibles que puede esperar al desplegar el FMB140 con Plaspy y aclara qué información muestra la plataforma cuando el dispositivo reporta.

La disponibilidad y el comportamiento exactos de las funciones pueden variar según la versión de firmware, la referencia del hardware (SKU), la instalación en el vehículo y la implementación del fabricante. Revise la referencia y el firmware de su dispositivo y consulte la documentación de Teltonika para obtener detalles técnicos precisos antes de desplegar a gran escala.

## Resumen de funciones

El Teltonika FMB140 es un rastreador GPS 2G compacto pensado para despliegues en los que los datos del bus CAN y la integración de sensores Bluetooth Low Energy enriquecen el seguimiento de ubicación. Al emparejarse con Plaspy, la unidad puede enviar posición y telemetría derivada del CAN, además de eventos de accesorios, de modo que las flotas obtienen una visión operativa más completa que solo la ubicación.

- Fabricado como rastreador GPS 2G con procesamiento CAN integrado para parámetros a nivel vehículo.
- Soporte Bluetooth Low Energy para emparejar balizas y sensores externos que amplían la telemetría.
- Compatible con accesorios Teltonika como ECAN02, EYE Beacon, EYE Sensor, lectores 1-WIRE RFID e iButton para flujos de trabajo ampliados.
- Diseñado para instalación sencilla en vehículos con cable de alimentación IO estándar; algunas referencias incluyen conectores adicionales.
- Gestión remota de dispositivos y firmware mediante Teltonika FOTA WEB y Teltonika Configurator.
- En la documentación del fabricante el producto figura con estado de fin de vida; confirme disponibilidad y soporte antes de la compra.

## Funciones principales del Teltonika FMB140

- Reporte de posición GPS para rastreo en tiempo real y reproducción histórica cuando está conectado a Plaspy.
- Procesador CAN integrado que, según la referencia (LV-CAN200 o ALL-CAN300), lee parámetros del bus del vehículo.
- Bluetooth Low Energy para emparejar sensores y balizas externas y capturar eventos de ambiente y presencia.
- Compatibilidad con el ecosistema de accesorios de Teltonika, incluidos adaptadores ECAN02, EYE Beacon, EYE Sensor, lectores 1-WIRE RFID e iButton.
- Conectividad celular GSM 2G en bandas comunes heredadas para alcanzar mercados donde aún está soportado.
- Configuración y actualizaciones de firmware remotas a través de Teltonika FOTA WEB y Teltonika Configurator.
- Factor de forma compacto orientado a vehículos ligeros, camiones, autobuses y maquinaria especial.

## Cómo funcionan estas funciones con Plaspy

Cuando el FMB140 reporta a Plaspy, los parámetros GPS y los derivados del CAN se convierten en datos accionables dentro de la plataforma. Plaspy detecta automáticamente los protocolos compatibles del equipo y mapea la telemetría entrante en vistas de panel, flujos de eventos e informes que usted puede usar para monitoreo y análisis operativos.

- Localización en tiempo real e historial cronológico de posiciones disponibles en Plaspy para seguimiento y reproducción.
- Los parámetros del bus CAN decodificados por el dispositivo (según la referencia) se enrutan a Plaspy para análisis de conducta de conductor e informe del estado del vehículo.
- Los eventos de sensores Bluetooth provenientes de balizas y sensores emparejados se reenvían a Plaspy para soportar monitoreo de temperatura, humedad o movimiento donde se utilicen sensores.
- Eventos de accesorios, como lecturas RFID e iButton o presencia de balizas BLE, pueden aparecer en los registros de eventos de Plaspy para flujos de trabajo de check in/out e interacción con activos.
- Los dispositivos pueden configurarse para reportar a Plaspy; la plataforma detectará el protocolo del rastreador automáticamente y mostrará la telemetría en los paneles correspondientes.

## Casos de uso habituales

- Programas de telemetría de flota que combinan posición GPS con métricas eco driving derivadas del CAN para formación y control de costes.
- Operaciones de alquiler y leasing que usan posición más eventos de accesorios para agilizar el check-in, check-out y el seguimiento de uso.
- Logística y transporte refrigerado donde sensores Bluetooth proporcionan telemetría de temperatura y humedad junto con el rastreo del vehículo.
- Monitoreo de maquinaria pesada y equipos especiales en los que las señales CAN informan sobre la utilización y la planificación de mantenimiento.
- Flujos de trabajo de antirobo y control de acceso que aprovechan integraciones CAN y eventos de accesorios para detección de presencia y control.

## Notas sobre disponibilidad de funciones

- La funcionalidad CAN depende de la referencia; algunas variantes incluyen LV-CAN200 y otras ALL-CAN300. Confirme la referencia de su dispositivo para conocer la cobertura CAN exacta.
- El comportamiento de sensores Bluetooth y los tipos de accesorios soportados dependen del firmware y de los accesorios instalados; las capacidades de emparejado y telemetría varían según el modelo de sensor.
- El producto aparece como fin de vida en la documentación del fabricante; la disponibilidad, garantía y condiciones de soporte pueden variar por región y distribuidor.
- La instalación y el cableado del vehículo determinan qué señales CAN están accesibles; no todos los vehículos exponen los mismos parámetros en su bus.
- La versión de firmware afecta la decodificación, la salida de telemetría y las funciones disponibles. Mantenga los dispositivos actualizados y revise las notas de la versión para conocer cambios.

## Por qué usar Plaspy con estas funciones

Usar el Teltonika FMB140 con Plaspy ofrece una vía práctica para combinar rastreo GPS básico con telemetría a nivel CAN y datos de sensores externos. Esta combinación ayuda a las flotas a ir más allá del monitoreo por ubicación y obtener información accionable como tendencias de conducta de conducción, métricas de conducción eficiente y seguimiento de activos consciente de su estado. Los paneles, flujos de eventos y herramientas de informes de Plaspy facilitan la incorporación de estas entradas en los procesos operativos.

Para obtener más información sobre Plaspy y cómo los rastreadores compatibles se integran con la plataforma visite https://www.plaspy.com. Para las especificaciones de dispositivo más actuales, detalles de firmware e información de SKU, verifique características y soporte en el sitio del fabricante https://www.teltonika-gps.com/ ya que las capacidades del producto y el comportamiento del firmware pueden cambiar con el tiempo.
