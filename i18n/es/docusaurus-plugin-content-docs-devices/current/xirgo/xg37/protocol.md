---
slug: /xirgo/xg37/protocol
id: xg37-protocol
sidebar_label: Protocol
title: Xirgo - XG37 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Xirgo XG37 y cómo se comunica con Plaspy mediante ajustes compartidos y detección automática
keywords:
  - protocolo Xirgo XG37
  - protocolo GPS Xirgo XG37
  - compatibilidad XG37 Plaspy
  - protocolo de comunicación Xirgo
  - protocolo de rastreo XG37
  - telemetría CANBUS Xirgo
  - XG37 MQTT TLS
  - compatibilidad de dispositivos Plaspy
  - rastreo de flotas XG37
  - telemática vehicular XG37
---

# Xirgo - Protocolo XG37

Esta página ofrece un resumen público sobre el uso del Xirgo XG37 con Plaspy. Se centra en cómo el dispositivo intercambia telemetría y eventos con Plaspy, cómo se aplican los ajustes de conexión compartidos y qué considerar al integrar un XG37 en una flota en operación. El objetivo es proporcionar una visión práctica y no sensible del comportamiento de comunicación y la compatibilidad, sin detallar información interna del fabricante.

Plaspy emplea ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el XG37 puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante. El XG37 suele usarse con MQTT y TLS 1.2 para telemetría segura, y puede apuntar a Plaspy usando el endpoint y los puertos compartidos que se describen más abajo.

## Resumen del protocolo

El protocolo de comunicación del XG37 define cómo se empaquetan y transmiten posiciones GNSS, telemetría CANBUS, alertas de eventos y datos de cumplimiento hacia un backend. En el caso del XG37, el dispositivo soporta transporte seguro mediante MQTT con TLS 1.2 para entrega cifrada, y el SDK del dispositivo permite filtrado y lógica de eventos en el propio equipo para reducir tráfico innecesario.

- Transmite telemetría como posición GNSS, señales CANBUS y eventos de geocerca a Plaspy para monitoreo en tiempo real.
- Utiliza mecanismos de transporte seguro como MQTT sobre TLS para proteger los datos en tránsito minimizando la latencia.
- Soporta filtrado y reglas en el dispositivo mediante el SDK, de modo que Plaspy reciba eventos relevantes y menos muestras ruidosas.
- Entrega datos relacionados con cumplimiento, como descargas remotas de tacógrafo y alertas de eventos para flujos regulatorios.
- Funciona con los flujos de trabajo de flota en Plaspy proporcionando telemetría estructurada que se mapea a diagnósticos del vehículo y funcionalidades de localización.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para detectar automáticamente el protocolo que usa un dispositivo cuando se conecta al endpoint compartido de Plaspy. En la mayoría de los casos, un XG37 correctamente configurado comenzará a transmitir telemetría a Plaspy sin que el usuario tenga que seleccionar manualmente un protocolo en la plataforma.

- Plaspy expone un endpoint y un puerto compartidos para el reporte de dispositivos y la detección automática de protocolos.
- Los dispositivos apuntados al endpoint de Plaspy son reconocidos por rutinas de detección en el servidor, por lo que la selección manual del protocolo suele ser innecesaria.
- Plaspy acepta conexiones entrantes en el dominio público del servidor d.plaspy.com y en la IP pública 54.85.159.138.
- El puerto compartido de Plaspy para todos los dispositivos es 8888, y Plaspy utiliza este puerto para cada rastreador soportado.
- La detección automática de Plaspy admite dispositivos que usan MQTT cifrado u otros transportes soportados, siempre que el dispositivo envíe datos al endpoint de Plaspy.

## Contexto de transporte y conexión

Los detalles de conexión determinan cómo el XG37 llega a Plaspy y qué transporte emplea el dispositivo. Aunque el XG37 comúnmente usa MQTT con TLS 1.2, puede configurarse para enviar a Plaspy usando los ajustes de conexión compartidos descritos aquí.

- Los dispositivos pueden configurarse para alcanzar Plaspy en d.plaspy.com o en la IP del servidor 54.85.159.138.
- El endpoint de Plaspy escucha en el puerto 8888 y este es el puerto común utilizado por todos los dispositivos en Plaspy.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las decisiones de configuración.
- Al usar MQTT seguro, el dispositivo empleará TLS 1.2 para el transporte cifrado de la telemetría.
- El comportamiento de conexión puede variar según el modelo de XG37 y el firmware, por lo que es importante elegir el transporte que coincida con la configuración del dispositivo y el entorno del operador móvil.

## Notas sobre compatibilidad de protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los campos soportados o las preferencias de transporte; revise siempre las notas de firmware del dispositivo para detectar cambios.
- Las revisiones de hardware y los modelos regionales pueden diferir en bandas celulares e interfaces disponibles, como el mapeo de canales CANBUS.
- Las opciones de configuración del fabricante, incluyendo funciones del SDK habilitadas o el muestreo de telemetría, afectan lo que Plaspy recibe.
- La selección de transporte (UDP frente a TCP o MQTT con TLS) debe coincidir tanto con la capacidad del dispositivo como con las expectativas del backend en términos de confiabilidad y latencia.
- Asegúrese de que la configuración del dispositivo apunte a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para que Plaspy pueda detectar y aceptar la conexión.
- Valide los detalles de integración con la documentación oficial del fabricante cuando se requiera un comportamiento preciso o se incorporen nuevas funciones.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el XG37 ayuda a garantizar una incorporación ágil, telemetría precisa y resolución efectiva de problemas cuando el dispositivo se usa con Plaspy. Conocer las opciones de transporte, los efectos del firmware y las capacidades del dispositivo reduce el tiempo de integración y aumenta la fiabilidad operativa.

- Garantiza configuraciones correctas de endpoint y transporte para que el dispositivo llegue a Plaspy de forma confiable.
- Ayuda a diagnosticar problemas de conectividad que se originan en transporte, operador o ajustes TLS, en lugar de en la configuración de la plataforma.
- Orienta en la decisión de utilizar filtrado del SDK o reglas en el dispositivo para reducir el volumen de datos y mejorar la relevancia de eventos.
- Permite planificar actualizaciones de firmware y revisiones de hardware que puedan cambiar campos o comportamientos soportados.
- Mejora el mapeo de datos CANBUS y de cumplimiento a los flujos de trabajo de Plaspy para reportes y alertas.

## Por qué usar Plaspy con este protocolo

Emparejar el XG37 con Plaspy ofrece a las flotas una plataforma consolidada para localización en tiempo real, telemetría vehicular, alertas de geocerca y flujos de cumplimiento. La detección automática de protocolos de Plaspy y los ajustes de conexión compartidos simplifican la incorporación de dispositivos, mientras que las funciones en el dispositivo como reglas del SDK y MQTT seguro con TLS 1.2 ayudan a asegurar una entrega eficiente y cifrada de datos.

Para más información sobre cómo Plaspy funciona con dispositivos como el XG37, visite https://www.plaspy.com. Verifique siempre el soporte de protocolo específico del dispositivo, comportamiento del firmware y detalles de implementación del fabricante en el sitio oficial de Xirgo https://xirgo.com/ ya que el comportamiento y las funciones soportadas pueden cambiar con el tiempo.
