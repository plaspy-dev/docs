---
slug: /castel/idd_212b/protocol
id: idd_212b-protocol
sidebar_label: Protocol
title: Castel - IDD-212B Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Castel IDD-212B para conectar con el servidor Plaspy y guía de integración
keywords:
  - protocolo Castel IDD-212B
  - protocolo GPS Castel IDD-212B
  - protocolo de comunicación Castel IDD-212B
  - protocolo de rastreo Castel IDD-212B
  - protocolo rastreador OBD Castel
  - compatibilidad de dispositivos Plaspy
  - detección de protocolo Plaspy
  - protocolo de rastreo de vehículos
  - rastreador OBD Bluetooth
  - compatibilidad seguimiento de flotas
---

# Castel - Protocolo IDD-212B

Esta página presenta el contexto público del protocolo para usar el Castel IDD-212B con Plaspy. Explica cómo la telemetría y los datos diagnósticos que envía el dispositivo se relacionan con un endpoint remoto de rastreo y qué puede esperar al integrar este escáner con Plaspy para la monitorización y el análisis de vehículos. El objetivo es describir el comportamiento de comunicación del equipo sin exponer detalles privados del fabricante.

Plaspy emplea configuraciones compartidas de conexión para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador en el servidor. Para la integración con Plaspy el endpoint público del servidor es d.plaspy.com y la IP del servidor es 54.85.159.138 en el puerto 8888. Los dispositivos que se usan con Plaspy pueden configurarse para enviar datos por UDP o TCP al puerto 8888; Plaspy utiliza el mismo puerto para todos los equipos, y el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Visión general del protocolo

El protocolo del IDD-212B describe cómo se empaquetan y entregan las lecturas de telemetría y diagnóstico del dispositivo a un endpoint remoto para que un sistema como Plaspy pueda interpretarlas y presentarlas. Esto incluye métricas del vehículo provenientes de la ECU, reportes de eventos del sensor G y registros almacenados en la memoria flash del equipo cuando la conectividad es intermitente.

- Traduce datos de la ECU y OBD, como velocidad, RPM, temperatura y códigos de diagnóstico, a mensajes transportables
- Reporta consumo de combustible, kilometraje y eventos agregados de sensores para análisis de flotas o vehículos individuales
- Soporta almacenamiento local en la memoria flash del dispositivo para que los registros se suban cuando se restablezca la conexión
- Permite que el dispositivo se identifique y comunique su estado a un servidor remoto para que Plaspy asocie los mensajes entrantes con el vehículo correcto
- Proporciona reportes de eventos y alarmas por movimientos bruscos o impactos detectados por el sensor G

## Detección del protocolo por parte de Plaspy

La plataforma de Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al endpoint compartido de Plaspy. Dado que Plaspy acepta conexiones en un único puerto y endpoint consistente, normalmente no es necesaria la selección manual del protocolo en la interfaz de Plaspy si el dispositivo está apuntando al servidor de Plaspy.

- Los dispositivos deben configurarse para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Plaspy admite transporte UDP y TCP en el mismo puerto y usa detección automática para los formatos de dispositivo entrantes
- Cuando llegan mensajes al endpoint de Plaspy, la plataforma los asocia con el dispositivo registrado y aplica el manejo correspondiente
- Generalmente usted no necesita elegir un protocolo dentro de Plaspy si el rastreador apunta correctamente al endpoint y puerto de Plaspy
- Una identificación correcta del dispositivo y un transporte estable hacen que la detección automática y el mapeo sean más confiables

## Transporte y contexto de conexión

El transporte de red y la configuración del endpoint definen el contexto de la conexión entre el IDD-212B y Plaspy. El IDD-212B es por diseño un escáner OBD con conectividad Bluetooth, pero cuando se utiliza con plataformas de telemetría remota la ruta de datos hacia Plaspy puede implicar una pasarela de red, un módem celular o una aplicación de integración que reenvía los registros del dispositivo al servidor de Plaspy.

- Plaspy acepta conexiones en el puerto 8888 y el dispositivo puede configurarse para usar UDP o TCP en ese puerto
- Los destinos para reportes pueden especificarse como el dominio d.plaspy.com o la IP del servidor 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración del endpoint
- La conectividad Bluetooth local del IDD-212B con teléfonos o tablets es independiente de la ruta de red usada para enviar registros a Plaspy
- La memoria flash del IDD-212B puede retener registros para que las subidas se realicen cuando haya enlace de red disponible

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, el orden de campos o los campos de telemetría disponibles; verifique los detalles de firmware para conocer el comportamiento exacto
- Revisiones de hardware o diferentes SKUs del IDD-212B pueden ofrecer características variantes, como sensores adicionales o modos de reporte alterados
- La selección del transporte (UDP frente a TCP) afecta la semántica de entrega; elija la opción compatible con la pasarela de reenvío o la ruta de integración
- El comportamiento local por Bluetooth y las integraciones con aplicaciones móviles no implican automáticamente el envío directo al servidor; confirme cómo se reenvían los datos a Plaspy
- La memoria flash y el buffering influyen en cómo aparecen las cargas diferidas en el servidor tras la reconexión
- Siempre valide la configuración del dispositivo frente a la documentación del fabricante al mapear campos del dispositivo a las columnas de datos de Plaspy

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el IDD-212B ayuda a garantizar un flujo de datos fiable, la interpretación correcta de las métricas del vehículo y un diagnóstico más eficiente cuando los registros no aparecen como se espera en Plaspy. Conocer las diferencias de transporte y firmware reduce el tiempo de configuración y evita errores de configuración.

- Garantiza que el dispositivo apunte al endpoint de Plaspy y use el modo de transporte correcto
- Facilita el mapeo de campos OBD y de sensores a las columnas de datos y tipos de evento de Plaspy para reportes precisos
- Ayuda en la resolución de problemas cuando faltan datos, hay retrasos o los eventos no se reportan según lo esperado
- Aclara el papel del buffering en flash para que los registros históricos no se confundan con telemetría en vivo
- Permite planificar actualizaciones de firmware y cambios de hardware que puedan modificar el contenido de los mensajes

## Por qué usar Plaspy con este protocolo

Usar los datos del Castel IDD-212B con Plaspy brinda a las organizaciones visibilidad centralizada sobre diagnósticos del vehículo, consumo de combustible, tendencias de kilometraje y eventos de impacto. Cuando el dispositivo está configurado para reenviar telemetría al endpoint del servidor de Plaspy, los gestores de flotas y los técnicos pueden ver los registros históricos almacenados por la unidad junto con los reportes en vivo para apoyar decisiones de mantenimiento, seguridad y operaciones.

Para obtener más información sobre Plaspy y cómo gestiona las integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica más reciente y las notas de firmware con el fabricante en http://www.castelecom.com/.
