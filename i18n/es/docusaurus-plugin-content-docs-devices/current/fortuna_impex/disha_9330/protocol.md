---
slug: /fortuna_impex/disha_9330/protocol
id: disha_9330-protocol
sidebar_label: Protocol
title: Fortuna Impex - Disha 9330 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Fortuna Impex Disha 9330 y su comunicación con Plaspy para rastreo de flotas
keywords:
  - protocolo Fortuna Impex Disha 9330
  - protocolo rastreador GPS Fortuna Impex
  - compatibilidad Disha 9330 Plaspy
  - protocolo de comunicación Disha 9330
  - protocolo de rastreo Fortuna Impex
  - protocolo GPS Disha 9330
  - protocolo rastreador Plaspy
  - rastreo de vehículos Disha 9330
  - notas de firmware Disha 9330
  - rastreo de flotas Plaspy
---

# Fortuna Impex - Protocolo Disha 9330

Esta página ofrece una visión pública del contexto de comunicación para usar el rastreador Fortuna Impex Disha 9330 con la plataforma Plaspy. Se centra en cómo el dispositivo envía información de ubicación y eventos a Plaspy y qué configuración general de conexión se requiere para una integración exitosa. El contenido está pensado para usuarios técnicos, administradores de flota e integradores que necesitan comprender el protocolo sin exponer detalles sensibles de implementación.

El Disha 9330 es un dispositivo inteligente para rastreo vehicular diseñado para flotas de servicio, reparto y transporte. Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para conjuntos de comandos específicos y el comportamiento según firmware, siempre consulte la documentación oficial de Fortuna Impex.

## Resumen del protocolo

El protocolo de comunicación del Disha 9330 define cómo el rastreador envía telemetría, eventos e identificación a un servidor remoto para que Plaspy pueda presentar rastreo en tiempo real e histórico, alertas e informes. En la práctica, el protocolo permite que el dispositivo se registre, transmita información útil de ubicación y estado, y soporte respuestas del servidor o configuración cuando el firmware lo permita.

- Transporta identificadores del equipo e información de registro para que Plaspy asocie los reportes entrantes con un activo.
- Envía ubicación basada en GPS, marcas temporales y marcadores de evento que Plaspy utiliza en mapas e historial.
- Comunica alertas y eventos de estado como ignición, movimiento e entradas personalizadas para flujos operativos.
- Permite configuraciones dirigidas por el servidor o acuses de recibo cuando el firmware del rastreador implementa comandos de servidor.
- Funciona en conjunto con la capa de transporte para que los mensajes lleguen de forma fiable al endpoint de Plaspy.

## Detección automática del protocolo por Plaspy

Plaspy escucha en un endpoint compartido y utiliza los reportes entrantes para determinar automáticamente el protocolo del rastreador. En la mayoría de las integraciones, el dispositivo se configura para reportar al endpoint de Plaspy y la detección ocurre sin selección manual de protocolo, lo que reduce los pasos de configuración para los equipos de flota.

- Plaspy detecta automáticamente el protocolo cuando un dispositivo reporta al endpoint de Plaspy.
- Asegúrese de que el rastreador esté configurado para enviar datos a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para que los reportes lleguen a la plataforma.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos en una flota.
- Si el dispositivo está configurado correctamente, normalmente no es necesario elegir un protocolo manualmente dentro de Plaspy.
- Confirme que el dispositivo suministre un identificador único, como IMEI o número de serie, que la plataforma pueda usar para registrar la unidad.

## Transporte y contexto de conexión

El Disha 9330 puede apuntar a un servidor remoto usando UDP o TCP según el soporte y la configuración del dispositivo. Para Plaspy, el punto de conexión público y las opciones de transporte están estandarizadas para facilitar la incorporación de equipos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y este mismo puerto lo usan todos los dispositivos soportados en Plaspy.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la configuración del rastreador y las capacidades del firmware.
- Se recomienda utilizar el nombre de dominio d.plaspy.com por flexibilidad; la IP puede usarse para enrutamiento estático o donde el DNS esté restringido.
- Verifique que la elección de transporte del rastreador (UDP frente a TCP) coincida con la configuración del dispositivo y con requisitos de red como reglas de firewall.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre lotes de producción pueden cambiar qué mensajes o funciones están disponibles; verifique la versión de firmware al validar el comportamiento.
- Revisiones de hardware u accesorios opcionales pueden afectar qué canales de telemetría están presentes o cómo se reportan los eventos.
- Algunas compilaciones de firmware del fabricante exponen comandos de configuración adicionales que pueden alterar intervalos de reporte y filtros de eventos.
- La selección del transporte (UDP frente a TCP) puede afectar la confiabilidad y la semántica de entrega de mensajes; elija el transporte que soporte el dispositivo y su red.
- Valide la compatibilidad confirmando que el dispositivo pueda enviar reportes iniciales a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Si observa reportes inconsistentes, revise tanto la configuración del dispositivo como los elementos intermedios de red, como ajustes del operador de la SIM o firewalls.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación del Disha 9330 ayuda a asegurar una puesta en marcha fluida, reportes confiables y una resolución eficiente de problemas cuando el rastreador se usa con Plaspy. Saber qué aspectos son específicos del dispositivo y cuáles los maneja la plataforma reduce el tiempo de integración y las interrupciones operativas.

- Reduce errores de configuración al garantizar que el dispositivo apunte al endpoint y a las opciones de transporte correctas de Plaspy.
- Simplifica la resolución de problemas cuando los reportes no llegan, al centrar la revisión en el transporte de red y la configuración del dispositivo.
- Ayuda a planificar actualizaciones de firmware que puedan cambiar la frecuencia de mensajes, el reporte de eventos o el soporte de comandos.
- Apoya decisiones operativas como elegir intervalos de reporte que equilibren precisión y uso de datos celulares.
- Mejora la confiabilidad a largo plazo al destacar diferencias de hardware y firmware que afectan el comportamiento de comunicación.

## Por qué usar Plaspy con este protocolo

Usar el Fortuna Impex Disha 9330 con Plaspy ofrece una manera directa de obtener visibilidad de vehículos y alertas basadas en eventos para flotas de servicios, reparto y transporte. La detección automática de protocolos de Plaspy y el puerto de conexión unificado reducen la complejidad de configuración para que los equipos puedan enfocarse en casos de uso operativos como enrutamiento, monitoreo y reportes programados.

Para obtener más información sobre cómo Plaspy soporta el rastreo de flotas e integraciones de dispositivos visite https://www.plaspy.com. Para detalles más actuales específicos del dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio oficial de Fortuna Impex http://fortunaindia.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
