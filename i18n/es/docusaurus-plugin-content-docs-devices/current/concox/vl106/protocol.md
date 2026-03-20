---
slug: /concox/vl106/protocol
id: vl106-protocol
sidebar_label: Protocol
title: Concox - VL106 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox VL106 y cómo transmite ubicación y telemetría a Plaspy
keywords:
  - protocolo Concox VL106
  - protocolo GPS Concox VL106
  - Concox VL106 Plaspy
  - protocolo de comunicación Concox VL106
  - protocolo de rastreo VL106
  - protocolo rastreador GPS Concox
  - rastreo vehicular Concox VL106
  - compatibilidad rastreadores Plaspy
  - rastreo de flotas VL106
  - protocolo de telemetría VL106
---

# Concox - Protocolo VL106

Esta página ofrece una descripción pública y no confidencial del contexto de comunicación del Concox VL106 cuando se integra con la plataforma Plaspy. Explica cómo el equipo reporta ubicación, movimiento y otros eventos a Plaspy, y qué papel cumple el protocolo del dispositivo para proporcionar datos útiles en la gestión de flotas, monitoreo de seguridad y flujos de trabajo operativos.

Plaspy usa ajustes de conexión compartidos entre los dispositivos que soporta y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en los puntos de integración observables públicamente más que en la estructura interna de paquetes propietaria.

## Visión general del protocolo

El VL106 emplea un protocolo de reporte para enviar posición GNSS, datos IMU, entradas y alarmas a un servidor backend. En la práctica, el protocolo asegura que el rastreador pueda identificarse de forma fiable ante Plaspy, transmitir telemetría oportuna y señalar eventos como cambios de ignición, pulsos de SOS o capturas por colisión para su procesamiento posterior.

- Permite que el VL106 envíe fijaciones de ubicación y ráfagas de IMU al backend para seguimiento en vivo y reproducción de historial.
- Transporta identidad y estado del dispositivo para que Plaspy asocie los mensajes entrantes con el registro vehicular correcto.
- Reporta eventos y alarmas como ignición, SOS, manipulación y pérdida de alimentación para alertas inmediatas.
- Soporta cargas almacenadas en búfer desde memoria a bordo, de modo que los eventos capturados sin conectividad se entregan cuando se restablece la conexión.
- Permite que el dispositivo use la configuración de transporte definida, por lo que fabricantes e instaladores pueden elegir TCP o UDP según la red y el despliegue.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para recibir telemetría de muchos modelos de rastreadores minimizando la configuración manual para los administradores. Cuando un VL106 correctamente configurado reporta al endpoint de Plaspy, la plataforma asociará automáticamente los datos entrantes con el dispositivo correspondiente e interpretará la carga útil usando la lógica de manejo adecuada.

- Plaspy recibe conexiones de dispositivos en un endpoint compartido y detecta el protocolo del rastreador automáticamente.
- En general, los usuarios no necesitan seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.
- Los mensajes entrantes se emparejan con el registro del dispositivo usando identificadores enviados por el rastreador y metadatos estándar de conexión.
- Plaspy centraliza el manejo de protocolos soportados, por lo que añadir dispositivos normalmente solo requiere apuntar el rastreador a los ajustes de servidor correctos.
- Si un dispositivo utiliza comportamiento de firmware específico del proveedor o personalizado, puede ser necesaria la verificación de identificadores y ajustes de transporte para garantizar la detección correcta.

## Contexto de transporte y conexión

El VL106 puede configurarse para reportar a Plaspy usando transportes IP estándar. Plaspy expone un único puerto de escucha consistente para todos los dispositivos soportados y acepta modos de transporte comunes según la configuración del rastreador y las necesidades de la red móvil.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- El endpoint del servidor Plaspy se puede alcanzar mediante el nombre DNS d.plaspy.com o directamente por IP en 54.85.159.138.
- Plaspy utiliza el mismo puerto para todos los dispositivos que soporta, lo que simplifica la configuración del instalador y las reglas de firewall.
- La elección entre UDP y TCP la determina el firmware del dispositivo, las condiciones de la red y las preferencias del instalador entre mayor fiabilidad o menor sobrecarga.
- Asegúrese de que el APN y las políticas de red móvil permitan conexiones salientes al endpoint de Plaspy en el transporte y puerto requeridos.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar cómo y cuándo un VL106 envía campos específicos o reportes de eventos; confirme los detalles de firmware antes de un despliegue masivo.
- Las revisiones de hardware del fabricante pueden modificar los sensores disponibles o el comportamiento de las E/S que el protocolo reporta.
- Algunas variantes del fabricante o regionales pueden venir por defecto en UDP o TCP; verifique la configuración del dispositivo para que coincida con las expectativas de transporte de Plaspy.
- El comportamiento de almacenamiento en búfer e captura IMU depende del firmware del dispositivo y debe validarse con la documentación del proveedor según el caso de uso previsto.
- Cuando se usan herramientas de configuración personalizadas o de posventa, valide que los identificadores y los ajustes del servidor se escriban correctamente en el equipo.
- Siempre contrastar los ajustes relacionados con el protocolo con la documentación del fabricante para notas específicas del dispositivo y registros de cambios de firmware.

## Por qué es importante comprender el protocolo

Comprender el protocolo de comunicación ayuda a garantizar una configuración confiable, acelerar la resolución de problemas y asegurar un funcionamiento predecible a largo plazo de las unidades VL106 en Plaspy. Reduce el tiempo dedicado a diagnosticar problemas de conectividad, identidad y completitud de datos, y respalda decisiones operativas sobre transporte y gestión de firmware.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el modo de transporte previsto.
- Ayuda a diagnosticar por qué un equipo puede aparecer desconectado o por qué las cargas de eventos se retrasan.
- Apoya decisiones sobre actualizaciones de firmware, ventanas de muestreo IMU y expectativas de almacenamiento en búfer.
- Informa la configuración de firewall y red para que el tráfico móvil pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mejora la planificación de integración para flotas que requieren telemetría de alta fidelidad y reporte consistente de eventos.

## Por qué usar Plaspy con este protocolo

El VL106 combinado con Plaspy ofrece una solución práctica para organizaciones que necesitan visibilidad continua de ubicación, alertas basadas en eventos y análisis ricos en telemetría. El dispositivo proporciona continuidad GNSS apoyada por INS y captura IMU de alta frecuencia, mientras que Plaspy ingiere y visualiza esos datos para ofrecer mapas en vivo, reproducción de historial, análisis de conducta de manejo y flujos de trabajo automatizados para seguridad y operaciones.

Para conocer más sobre cómo Plaspy soporta integraciones de dispositivos y flujos de trabajo de flota, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente sobre el protocolo y el firmware específicos del dispositivo en el sitio del fabricante https://www.iconcox.com/.
