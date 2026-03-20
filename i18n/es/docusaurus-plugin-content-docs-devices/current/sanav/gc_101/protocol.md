---
slug: /sanav/gc_101/protocol
id: gc_101-protocol
sidebar_label: Protocol
title: Sanav - GC-101 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Sanav GC-101 y cómo se comunica con Plaspy para rastreo confiable de flotas y activos
keywords:
  - protocolo Sanav GC-101
  - protocolo GPS Sanav GC-101
  - protocolo de rastreo Sanav GC-101
  - protocolo de comunicación Sanav GC-101
  - protocolo rastreador GPS Sanav
  - compatibilidad Sanav GC-101 Plaspy
  - protocolo rastreo vehicular Sanav
  - protocolo GPS para gestión de flotas
  - integración tracker GC-101
  - protocolo rastreador GPS Plaspy
---

# Sanav - Protocolo GC-101

Esta página explica el contexto público del protocolo para usar el rastreador SANAV GC-101 con Plaspy. Se centra en cómo el dispositivo envía datos de posición y en la configuración de conexión necesaria para que Plaspy reciba esa información. La intención es aclarar el papel de comunicación del rastreador sin detallar implementaciones privadas.

El GC-101 utiliza GPRS para subir oraciones RMC que contienen latitud, longitud, velocidad y hora a un servidor asignado, y soporta transporte por TCP y UDP. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Consulte siempre al fabricante para obtener detalles específicos y actualizados del dispositivo.

## Resumen del protocolo

El protocolo del GC-101 describe el mecanismo mediante el cual el rastreador envía informes de posición y estado por datos móviles a un servidor remoto. Para Plaspy, esto implica recibir informes en formato RMC y convertirlos en información útil de ubicación, hora y velocidad para la supervisión de flotas y activos.

- El rastreador sube el contenido de oraciones RMC a un servidor configurado para extraer latitud, longitud, velocidad y marca de tiempo.
- Se usa GPRS para entregar los reportes del dispositivo al endpoint de Plaspy.
- El dispositivo puede almacenar datos en memoria interna y usar una batería de respaldo para mantener el rastreo ante una pérdida de energía.
- El transporte se puede configurar por TCP o UDP según las preferencias de la red y el servidor.
- El protocolo permite que el rastreador se identifique y envíe actualizaciones periódicas o por eventos para tareas de gestión de flota y seguridad.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes de rastreadores en un endpoint y puerto compartidos y detecta el protocolo automáticamente cuando el dispositivo está configurado para reportar a Plaspy. En la mayoría de los casos usted no necesita seleccionar un protocolo concreto dentro de la plataforma si el dispositivo apunta correctamente a Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y el puerto de escucha es 8888.
- Todos los dispositivos usan el mismo puerto en Plaspy y la plataforma detecta automáticamente el protocolo del rastreador.
- Los dispositivos que envían oraciones estilo RMC y formatos comunes son reconocidos sin selección manual del protocolo.
- Una configuración correcta del dispositivo para reportar al endpoint de Plaspy simplifica la incorporación y reduce errores de configuración.

## Transporte y configuración de conexión

Los ajustes de conexión son clave para una integración exitosa. El GC-101 soporta reportes por TCP y UDP y puede configurarse para apuntar a Plaspy por nombre de dominio o por dirección IP según las necesidades del usuario o del operador móvil.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para los reportes.
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración.
- Elija UDP para menor overhead o TCP para entrega orientada a conexión según la configuración del rastreador y el comportamiento de la red móvil.
- Verifique el APN y los ajustes de datos móviles en el dispositivo para que las subidas GPRS lleguen al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, los campos reportados y comportamientos opcionales que afectan cómo se entregan los datos a Plaspy.
- Revisiones de hardware o módulos opcionales pueden alterar los transportes soportados o las entradas disponibles, como botones de pánico o entradas digitales.
- Los menús de configuración del fabricante suelen exponer opciones de transporte TCP o UDP y los ajustes del servidor objetivo por dominio o IP.
- Restricciones de red y NAT del operador pueden afectar la entrega, especialmente al usar UDP frente a TCP.
- Confirme la compatibilidad y los ajustes recomendados con la documentación de Sanav para la versión de firmware específica de su GC-101.
- Siempre que sea posible, pruebe un solo dispositivo para validar conectividad e informes antes de un despliegue masivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a asegurar una instalación confiable y un funcionamiento continuo cuando utiliza Plaspy para rastreo de flotas o activos. Saber qué envía el rastreador y cómo se conecta reduce tiempos de resolución de problemas y mejora la fiabilidad de los datos.

- Permite verificar que los informes estilo RMC incluyan campos necesarios como posición, hora y velocidad para que Plaspy muestre ubicaciones precisas.
- La comprensión de la elección de transporte guía la selección entre TCP y UDP según las condiciones de red.
- Estar al tanto de las diferencias de firmware y hardware disminuye el riesgo de comportamientos inesperados tras actualizaciones.
- La configuración correcta del dominio o IP del servidor y del puerto garantiza que el rastreador alcance el endpoint de Plaspy.
- Conocer el comportamiento de buffering y de la batería de respaldo ayuda a planificar ante brechas de cobertura y eventos de energía.

## Por qué usar Plaspy con este protocolo

Utilizar el SANAV GC-101 con Plaspy ofrece una vía sencilla para recopilar reportes GPS basados en RMC sobre GPRS y convertirlos en visibilidad operativa para flotas y activos. Plaspy gestiona los ajustes de conexión comunes y la detección del protocolo para que usted pueda concentrarse en la supervisión operativa en lugar del análisis a bajo nivel.

Aprenda más sobre cómo funciona Plaspy y las opciones de integración soportadas en https://www.plaspy.com. Para los detalles más actuales específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la información con Sanav en http://es.sanav.com/.
