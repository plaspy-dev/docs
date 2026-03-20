---
slug: /gotop/q1/protocol
id: q1-protocol
sidebar_label: Protocol
title: GOTOP - Q1 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GOTOP Q1 y cómo se comunica con Plaspy para reportes y compatibilidad
keywords:
  - protocolo GOTOP Q1
  - protocolo GPS GOTOP Q1
  - protocolo de rastreo GOTOP Q1
  - comunicación GOTOP Q1
  - protocolo rastreador GPS GOTOP
  - compatibilidad Q1 Plaspy
  - protocolo de dispositivo Plaspy
  - rastreo vehicular GOTOP Q1
  - protocolo rastreador de activos Q1
  - comunicación dispositivo GPS Plaspy
---

# GOTOP - Protocolo Q1

Esta página ofrece una visión pública y no sensible del contexto de comunicación del rastreador GOTOP Q1 Mini GPS cuando se utiliza con Plaspy. Resume cómo el dispositivo reporta ubicación y eventos a Plaspy, y explica el papel práctico del protocolo de reporte sin exponer detalles internos de firmware o implementaciones privadas. El Q1 es un rastreador compacto con clasificación IPX7, alertas por movimiento, posicionamiento por GPS y LBS, y funciones de gestión de energía que influyen en cuándo y con qué frecuencia transmite datos.

Plaspy usa un endpoint y ajustes de conexión compartidos para todos los rastreadores compatibles y detecta automáticamente el protocolo del dispositivo cuando llegan los datos. El Q1 puede configurarse para reportar a Plaspy mediante UDP o TCP al endpoint d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que los detalles de alto nivel aquí están pensados como una guía general.

## Resumen del protocolo

El protocolo de comunicación del GOTOP Q1 define cómo el dispositivo se identifica, reporta ubicación y eventos de movimiento, y comparte su estado con una plataforma remota como Plaspy. A un nivel público, el protocolo asegura la entrega fiable de telemetría y alertas útiles al servidor para que la plataforma muestre correctamente posición, movimiento y estado de batería.

- Proporciona identificación y reporte del dispositivo para que Plaspy asocie mensajes entrantes con un activo
- Transporta datos de ubicación GPS y LBS junto con alertas de movimiento y estado de batería para monitoreo operativo
- Soporta reportes periódicos y basados en eventos, permitiendo seguimiento en tiempo real y alertas por movimiento
- Funciona con la pila de red del dispositivo y la selección de transporte para alcanzar el endpoint de Plaspy
- Permite a Plaspy mostrar ubicación, alertas y diagnósticos básicos del Q1 dentro de la plataforma

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint y puerto compartidos y aplica detección automática para determinar el protocolo del rastreador y procesar los datos entrantes. Cuando un Q1 correctamente configurado reporta al endpoint de Plaspy, la plataforma reconoce el flujo del dispositivo sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy acepta conexiones y paquetes en d.plaspy.com y en la IP 54.85.159.138
- La plataforma escucha en el puerto 8888 para todos los rastreadores y tipos de dispositivo compatibles
- Los dispositivos pueden configurarse para usar UDP o TCP para enviar datos a Plaspy en el mismo puerto
- Cuando un Q1 apunta al endpoint de Plaspy y envía reportes, la plataforma identificará y procesará el protocolo automáticamente
- Normalmente, usted solo necesita configurar el dispositivo para que reporte al endpoint de Plaspy y confirmar los ajustes de transporte en el rastreador

## Contexto de transporte y conexión

Las elecciones de conexión y transporte afectan cómo el Q1 llega a Plaspy, pero no cambian el papel público del protocolo del rastreador. El Q1 puede enviar datos por UDP o TCP según su configuración, y Plaspy acepta ambos transportes en el puerto común usado por todos los dispositivos.

- Los dispositivos pueden configurarse para enviar datos a d.plaspy.com o a la dirección IP 54.85.159.138
- Plaspy acepta tanto conexiones UDP como TCP en el puerto 8888 para el reporte de dispositivos
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración es consistente entre modelos
- La selección de transporte puede influir en características de entrega como retransmisiones y overhead de paquetes
- Verifique los ajustes del Q1 para confirmar el transporte configurado y el endpoint de reporte

## Notas sobre compatibilidad del protocolo

- Diferencias en versiones de firmware pueden cambiar los mensajes disponibles, los tiempos de reporte y las funciones opcionales que reporta el Q1
- Revisiones de hardware o variantes regionales pueden alterar las redes soportadas o la configuración predeterminada de reporte
- La configuración del fabricante en el dispositivo determina si el Q1 usa UDP o TCP y a qué endpoint reporta
- Los modos de ahorro de energía y el reporte basado en movimiento pueden afectar la frecuencia con que el dispositivo envía ubicación y alertas
- Valide los ajustes requeridos contra la documentación oficial del GOTOP Q1 al configurar el rastreador para Plaspy
- Confirme que el dispositivo apunta a d.plaspy.com o a 54.85.159.138 y que usa el puerto 8888 para una integración predecible

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del Q1 a nivel conceptual ayuda durante la configuración, la validación y la resolución de problemas para que el rastreo de activos funcione de manera confiable y cumpla con las necesidades operativas. Saber cómo el dispositivo reporta ubicación, alertas de movimiento y estado de batería permite resolver problemas más rápido y tomar mejores decisiones de configuración.

- Asegura que el dispositivo esté configurado para reportar al endpoint y transporte correctos de Plaspy
- Ayuda a interpretar por qué un rastreador puede reportar con menor frecuencia debido a ahorro de energía o umbrales de movimiento
- Facilita la resolución de problemas de conectividad entre el rastreador y el servidor de Plaspy
- Guía los pasos de validación cuando actualizaciones de firmware o cambios de hardware alteran el comportamiento de los mensajes
- Apoya decisiones operativas sobre intervalos de reporte, alertas y administración de batería

## Por qué usar Plaspy con este protocolo

Usar el GOTOP Q1 junto con Plaspy ofrece a las organizaciones un rastreo de activos compacto y resistente, además de la comodidad de una plataforma que reconoce automáticamente los protocolos de los dispositivos y consolida la telemetría. El Q1 es adecuado para el seguimiento de activos, vehículos y equipos portátiles donde son importantes las alertas por movimiento, la impermeabilidad y un formato pequeño.

Para obtener más información sobre Plaspy y cómo integra protocolos de dispositivos como el Q1 visite https://www.plaspy.com. Para notas de protocolo específicas del dispositivo, detalles de firmware y orientación del fabricante, verifique la información en el sitio oficial de GOTOP https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
