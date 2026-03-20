---
slug: /neomatica/adm007/protocol
id: adm007-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Neomatica ADM007 para integrar rastreadores BLE con Plaspy, incluyendo conexión y compatibilidad
keywords:
  - Protocolo Neomatica ADM007
  - Protocolo ADM007 GPS
  - Compatibilidad ADM007 Plaspy
  - Protocolo rastreador GPS Neomatica
  - Seguimiento ADM007 BLE
  - Compatibilidad dispositivos Plaspy
  - Protocolo rastreo vehicular
  - Rastreador para gestión de flotas
  - Telemetría BLE ADM007
  - Protocolo rastreador de activos
---

# Neomatica - Protocolo ADM007

Esta página ofrece un resumen público del protocolo para usar el rastreador BLE Neomatica ADM007 con la plataforma Plaspy. Resume cómo se comunica el dispositivo en términos generales, cómo Plaspy recibe y procesa los datos del rastreador y qué aspectos considerar al integrar unidades ADM007 para el monitoreo de flotas y activos. El objetivo es brindar un contexto de protocolo neutral y público, no detalles propietarios ni sensibles de implementación.

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy. El dominio público del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138; Plaspy acepta conexiones de dispositivos en el puerto 8888. El ADM007 puede configurarse para usar UDP o TCP en ese mismo puerto según las opciones del dispositivo y las condiciones de red. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que debe consultarse la documentación del dispositivo para detalles específicos del firmware.

## Resumen del protocolo

El protocolo de comunicación del ADM007 regula cómo el rastreador informa posiciones GNSS, estado del dispositivo y telemetría BLE a una plataforma remota como Plaspy. A grandes rasgos, el protocolo asegura que el dispositivo pueda identificarse, entregar datos de ubicación y sensores utilizables, y reportar estado para monitoreo y gestión remota.

- Transporta la posición GNSS y la información de tiempo del rastreador al servidor para seguimiento en vivo e historial.
- Lleva la telemetría de sensores BLE de periféricos conectados a la plataforma para que temperatura, humedad, inclinación y presencia de tags se correlacionen con la ubicación.
- Transmite indicadores de salud y estado del dispositivo como batería, alertas de interferencia y estado de conexión para habilitar notificaciones en la plataforma.
- Soporta memoria de rutas y cargas periódicas para que las rutas históricas almacenadas en el dispositivo estén disponibles en Plaspy.
- Permite configuración remota y actualizaciones a través de los canales de control que el fabricante soporta.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido y detecta automáticamente el protocolo que usa un rastreador en cuanto este comienza a enviar datos a la plataforma. En la mayoría de los casos, usted solo necesita asegurarse de que el ADM007 esté configurado para reportar al endpoint de Plaspy y la detección de protocolo se realiza en la recepción.

- Plaspy utiliza el dominio d.plaspy.com y la IP de servidor 54.85.159.138 como endpoints públicos para el reporte de dispositivos.
- Todos los dispositivos de Plaspy usan el mismo puerto de red, por lo que el tráfico entrante de los rastreadores debe dirigirse al puerto 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, según la capacidad del equipo y las preferencias de instalación.
- Cuando un ADM007 reporta al endpoint de Plaspy, Plaspy detecta automáticamente qué protocolo del rastreador se está usando e ingiere los datos en consecuencia.
- Normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy si el dispositivo apunta correctamente al servidor Plaspy.

## Contexto de transporte y conexión

Comprender el contexto de transporte y conexión es importante para garantizar la entrega confiable de datos de posición y telemetría del ADM007 a Plaspy. El ADM007 soporta canales de reporte de datos celulares típicos y también puede usar SMS o Bluetooth para configuración y mecanismos de respaldo.

- El dispositivo puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos en la plataforma usan ese mismo puerto para reportar.
- El ADM007 puede enviar datos por UDP o TCP en el puerto 8888 según cómo esté configurado y las necesidades de fiabilidad de la red.
- Datos celulares vía GPRS son el transporte principal para GNSS en vivo y telemetría BLE desde el ADM007.
- SMS y Bluetooth se usan comúnmente por instaladores para la configuración del equipo y como respaldo mediante SMS cuando el dispositivo lo soporta.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar campos exactos, la cadencia de telemetría y el comportamiento del protocolo de seguimiento en unidades ADM007.
- Revisiones de hardware a veces alteran el soporte de periféricos, como la cantidad o tipo de sensores BLE reconocidos por el dispositivo.
- Personalizaciones del fabricante y firmware específico por región pueden generar diferencias en cómo el rastreador informa mensajes de estado concretos.
- La selección de transporte entre UDP y TCP afecta las características de entrega y debe coincidir con la configuración soportada por el firmware del dispositivo.
- El comportamiento de los sensores BLE y los intervalos de reporte dependen del tipo de periférico emparejado y de la configuración de firmware del ADM007.
- Siempre valide la compatibilidad y el conjunto de funciones esperado contra la documentación del fabricante para la revisión de firmware que vaya a desplegar.

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del rastreador facilita la configuración, solución de problemas y operación a largo plazo al integrar dispositivos ADM007 con Plaspy. Saber qué transporta el protocolo y cómo se conecta el dispositivo reduce tiempos de inactividad y mejora la calidad de los datos para operaciones de flota.

- Asegura que el dispositivo esté apuntando al endpoint correcto de Plaspy para que los datos se reciban y analicen automáticamente.
- Ayuda a diagnosticar problemas comunes como telemetría BLE faltante o cargas de rutas incompletas revisando transporte y comportamiento del firmware.
- Orienta la decisión entre UDP y TCP según la fiabilidad de la red y las necesidades de entrega de mensajes.
- Informa las expectativas de consumo de datos y ayuda a configurar intervalos de reporte que equilibren la duración de batería y la fidelidad del rastreo.
- Facilita la planificación de actualizaciones de firmware y la gestión del ciclo de vida del dispositivo cuando se conocen las características del protocolo requeridas.

## Por qué usar Plaspy con este protocolo

Usar el ADM007 con Plaspy ofrece a las organizaciones un hardware compacto capaz de reportar posición GNSS y telemetría BLE integrado en una única plataforma de gestión de flotas. El bajo consumo de datos del ADM007, el almacenamiento de rutas en el dispositivo y el soporte para múltiples periféricos BLE lo hacen adecuado para instalaciones discretas en vehículos, telemetría de activos distribuidos y logística sensible a la temperatura donde se requiere monitoreo de ubicación y condiciones ambientales.

El modelo de endpoint compartido de Plaspy y la detección automática de protocolo simplifican la integración en despliegues ADM007. Si desea saber más sobre Plaspy y cómo puede trabajar con rastreadores compatibles como el ADM007 visite https://www.plaspy.com. Para comportamiento específico de firmware, instrucciones de configuración del dispositivo y los últimos detalles del fabricante, verifique la documentación actual en https://neomatica.com/ ya que el soporte de protocolo y las implementaciones de los dispositivos pueden cambiar con el tiempo.
