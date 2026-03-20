---
slug: /calmamp/mdt_7/protocol
id: mdt_7-protocol
sidebar_label: Protocol
title: CalmAmp - MDT-7 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador CalmAmp MDT-7 con Plaspy, con ajustes de conexión y guía de compatibilidad
keywords:
  - Protocolo CalmAmp MDT-7
  - Protocolo GPS CalmAmp MDT-7
  - Compatibilidad MDT-7 Plaspy
  - Protocolo de comunicación MDT-7
  - Protocolo de rastreo MDT-7
  - Integración de rastreadores CalmAmp
  - Gestión de flotas MDT-7
  - Protocolo de rastreador GPS Plaspy
  - Guía del protocolo CalmAmp
  - Rastreo vehicular MDT-7
---

# CalmAmp - Protocolo MDT-7

Esta página describe el contexto público del protocolo para usar el CalmAmp MDT-7 con Plaspy. Se centra en cómo el dispositivo comunica a través de la red para entregar ubicación, telemetría y datos de aplicaciones a un servidor Plaspy, así como en los ajustes de conexión prácticos que debe confirmar al integrar dispositivos MDT-7 en su flota.

El MDT-7 es un terminal móvil de datos basado en Android que funciona con la conectividad LMU de CalAmp para transportar mensajes e información capturada a través de la red celular. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Siempre valide las opciones de envío específicas del dispositivo y las notas de firmware con el proveedor del equipo al preparar una integración.

## Resumen del protocolo

El protocolo de comunicación para despliegues MDT-7 define cómo el terminal y su LMU conectado envían telemetría, ubicación y mensajes de aplicaciones a un servidor remoto. En la práctica, este protocolo permite a la plataforma MDT-7 identificar el dispositivo, reportar posición y estado, y transportar datos de conductor o flujos de trabajo que Plaspy puede consumir para seguimiento y uso operativo.

- Permite que el MDT-7 y su LMU conectado entreguen GPS y telemetría a un endpoint remoto
- Transporta la identidad del dispositivo y la información de sesión que Plaspy usa para asociar reportes con activos de la flota
- Lleva datos de aplicación capturados en el MDT-7, como mensajes, eventos y referencias a medios
- Opera sobre el enlace celular provisto por el LMU conectado para alcanzar los servidores de Plaspy
- Permite que los sistemas posteriores mapeen los reportes del dispositivo a flujos de trabajo y sistemas de despacho de vehículos

## Cómo detecta Plaspy el protocolo

Plaspy proporciona un endpoint y puerto de red compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el dispositivo esté configurado correctamente para reportar a Plaspy. Para la mayoría de las configuraciones MDT-7 no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el dispositivo apunte al endpoint de Plaspy y use un transporte permitido.

- Apunte el dispositivo o su LMU conectado a d.plaspy.com o 54.85.159.138 y use el puerto 8888
- Plaspy acepta reportes en el mismo puerto para todos los dispositivos, lo que simplifica la incorporación
- El dispositivo puede configurarse para usar UDP o TCP según el LMU y la configuración de red
- Cuando el reporte está configurado correctamente, un dispositivo llegará a Plaspy sin selección manual de protocolo
- Verifique los ajustes de reporte del dispositivo y la guía del fabricante si la detección no ocurre

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo los mensajes MDT-7 llegan a Plaspy. La plataforma MDT-7 suele enviar datos de aplicación a través de un LMU CalAmp conectado, que luego transmite por la red celular hacia Plaspy. Plaspy escucha en un puerto compartido para el tráfico de dispositivos y admite ambos métodos de transporte comunes.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888
- El endpoint del servidor Plaspy puede direccionarse como d.plaspy.com o 54.85.159.138
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que reduce la carga de configuración
- Se puede usar direccionamiento por DNS a d.plaspy.com o IP directa, según el comportamiento del dispositivo y del operador
- Asegúrese de que el firewall y la configuración APN del operador permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware en el MDT-7 y en el LMU conectado pueden cambiar el comportamiento de reporte y las funciones disponibles
- Las revisiones de hardware y los módulos opcionales pueden afectar qué campos de datos reporta el dispositivo
- La configuración por parte del fabricante en las aplicaciones del MDT-7 o en el aprovisionamiento del LMU determina el transporte y la dirección del servidor
- Elegir UDP frente a TCP depende del soporte del LMU y de las características de fiabilidad que requieran sus flujos de trabajo
- Verifique siempre que el dispositivo esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Confirme la compatibilidad y los ajustes necesarios consultando la documentación oficial de CalmAmp para su versión de firmware

## Por qué es importante entender el protocolo

Comprender cómo se comunica el MDT-7 ayuda a asegurar una configuración exitosa, una entrega de mensajes predecible y una resolución de problemas más fluida cuando los dispositivos se despliegan en producción. Conocer las expectativas de conexión y reporte reduce la fricción en la integración y le permite alinear la configuración del dispositivo con la ingesta de Plaspy.

- Acelera el despliegue inicial al confirmar la dirección del servidor y los ajustes de transporte con antelación
- Reduce falsas alarmas al alinear intervalos de reporte y filtros de eventos con las necesidades operativas
- Ayuda a acotar problemas de conectividad entre dispositivo, APN del operador y el endpoint de Plaspy
- Facilita la planificación de actualizaciones de firmware y revisiones de hardware que puedan afectar el comportamiento
- Mejora la confiabilidad a largo plazo al documentar el flujo de reporte esperado para los equipos de operaciones

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp MDT-7 junto con Plaspy ofrece a las organizaciones una forma de centralizar los datos de vehículos y conductores desde un terminal Android potente dentro de una plataforma de gestión de flotas. El ecosistema de aplicaciones del MDT-7 y sus funciones de captura de medios, combinadas con la detección automática de protocolo y los ajustes de conexión compartidos de Plaspy, pueden simplificar la visibilidad de la flota y los flujos operativos.

Si desea saber más sobre cómo Plaspy maneja la conectividad de dispositivos y la gestión de flotas, visite https://www.plaspy.com. Para los detalles más recientes del protocolo específico del dispositivo, notas de firmware y guía de implementación, consulte la documentación del fabricante en http://www.calamp.com/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
