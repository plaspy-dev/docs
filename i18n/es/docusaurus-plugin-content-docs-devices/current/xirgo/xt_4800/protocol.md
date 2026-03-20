---
slug: /xirgo/xt_4800/protocol
id: xt_4800-protocol
sidebar_label: Protocol
title: Xirgo - XT-4800 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Xirgo XT-4800 y su comunicación con Plaspy
keywords:
  - protocolo Xirgo XT-4800
  - protocolo GPS Xirgo XT-4800
  - protocolo de rastreo XT-4800
  - compatibilidad rastreador Xirgo con Plaspy
  - protocolo de comunicación XT-4800
  - guía protocolo rastreador GPS
  - rastreo de flotas Xirgo XT-4800
  - rastreo de activos XT-4800
  - protocolo para rastreadores con recolección de energía
  - compatibilidad XT-4800 TCP UDP FTP
---

# Xirgo - Protocolo XT-4800

Esta página ofrece un resumen del contexto del protocolo público para usar el Xirgo XT-4800 con Plaspy. Está orientada a explicar, a alto nivel, cómo el equipo se comunica con la plataforma Plaspy y qué papel tienen las configuraciones de reporte del dispositivo en una integración exitosa. El objetivo es brindar información útil y no sensible para que gestores de flotas e integradores puedan planear implementaciones y resolver problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo reporta a la plataforma. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página describe conceptos generales de comunicación en lugar de detalles internos específicos de firmware. El XT-4800 es un rastreador para activos con aprovechamiento de energía, clasificación IP67, antenas celulares y GPS integradas, y soporta TCP, UDP y FTP para el transporte de datos.

## Descripción general del protocolo

El protocolo de comunicación del XT-4800 define cómo el dispositivo envía ubicación, estado del equipo y telemetría a un servidor backend como Plaspy. A grandes rasgos, el protocolo permite que el rastreador se identifique, entregue datos de ubicación y estado en serie temporal, y reciba mensajes de configuración o control cuando el dispositivo y el fabricante lo soportan.

- Transporta datos de posición y telemetría del XT-4800 al servidor en un formato que el backend puede interpretar.
- Permite que el equipo incluya información identificadora para que Plaspy asocie los reportes entrantes con el activo correcto.
- Admite reportes periódicos o basados en eventos para equilibrar la frecuencia de envío con el consumo de energía en despliegues de larga duración.
- Utiliza opciones de transporte estándar disponibles en el dispositivo, como TCP, UDP o FTP, para mover datos a través de la red celular.
- Provee la base para el procesamiento en el servidor que convierte los mensajes del dispositivo en posiciones en el mapa, alertas y registros históricos.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un endpoint y puerto unificados para conexiones entrantes de dispositivos y detecta automáticamente el protocolo de reporte cuando un equipo envía datos. Esta detección automática implica que, si el dispositivo está apuntando al endpoint de Plaspy con la configuración de conexión correcta, la plataforma intentará reconocer y parsear los mensajes compatibles sin que el usuario tenga que seleccionar manualmente el protocolo.

- El endpoint público de servidor de Plaspy es d.plaspy.com y la dirección IP pública es 54.85.159.138.
- La plataforma utiliza el puerto 8888 para conexiones de dispositivos y todos los equipos en Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según lo que soporte el equipo.
- Si el XT-4800 está configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888, Plaspy recibirá y procesará los reportes entrantes.
- En la mayoría de los casos, el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy.

## Contexto de transporte y conexión

Las opciones de conexión, como elegir TCP frente a UDP y el host de servidor configurado, son ajustes a nivel de transporte que determinan cómo se entregan los mensajes del dispositivo a Plaspy. El XT-4800 soporta opciones de transporte comunes y puede dirigirse al endpoint de Plaspy configurando su dirección de servidor y puerto en la configuración del equipo.

- El XT-4800 puede configurarse para usar UDP o TCP en el puerto 8888 para reportes.
- Los dispositivos pueden apuntar al nombre de host d.plaspy.com o directamente a la dirección IP 54.85.159.138.
- Plaspy utiliza el puerto 8888 de manera uniforme para todos los dispositivos soportados para simplificar la configuración y el onboarding.
- La selección del transporte puede afectar características de entrega como retransmisiones y orden de mensajes, por lo que debe elegirse el modo que el firmware soporte y que se ajuste a sus necesidades de cobertura y latencia.
- Asegúrese de que las reglas del operador móvil o del firewall permitan conexiones salientes desde el dispositivo hacia el endpoint y puerto de Plaspy seleccionados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar campos de mensaje, intervalos de reporte o comportamiento de transporte; confirme los detalles del firmware antes de un despliegue a gran escala.
- Revisiones de hardware e interfaces opcionales como 1-Wire o Zigbee pueden modificar la telemetría disponible o las opciones de reporte.
- Las herramientas de configuración del fabricante pueden usar nombres o diseños de configuración distintos; siempre contraste con la guía de configuración del dispositivo.
- La selección de transporte (TCP vs UDP) debe coincidir con lo que el firmware y su despliegue requieren en términos de confiabilidad y consumo de energía.
- Las diferencias entre soporte FTP y modos de reporte en tiempo real pueden afectar cómo se entrega la telemetría histórica a un backend.
- Valide los ajustes del dispositivo enviando reportes de prueba al endpoint de Plaspy y confirmando que se reciben y parsean como se espera.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el XT-4800 ayuda a garantizar reportes fiables, un uso eficiente de la energía y una resolución de problemas efectiva al integrar dispositivos con Plaspy. Un conocimiento claro de los ajustes de conexión y del comportamiento del protocolo reduce la fricción en la configuración y facilita diagnosticar problemas de entrega o parseo.

- Asegura la correcta configuración del hostname y el puerto del servidor para que los reportes lleguen a Plaspy de forma confiable.
- Ayuda a elegir el modo de transporte apropiado según la confiabilidad deseada y la vida de la batería.
- Orienta los pasos de diagnóstico cuando los reportes no aparecen en Plaspy o los campos de datos se ven incorrectos.
- Apoya la planificación de actualizaciones de firmware o variantes de hardware que puedan cambiar el comportamiento del protocolo.
- Mejora la visibilidad operativa al alinear los intervalos de reporte del dispositivo con los requerimientos de monitoreo.

## Por qué usar Plaspy con este protocolo

Usar el Xirgo XT-4800 con Plaspy brinda a las organizaciones una forma de recopilar ubicación y telemetría de larga duración y alta frecuencia para activos remotos. El endpoint unificado de Plaspy y la detección automática de protocolo reducen la carga de configuración y permiten a la plataforma ingerir reportes de dispositivos que soportan transportes comunes como TCP, UDP y FTP. Para despliegues que requieren rastreadores resistentes, a prueba de clima, con aprovechamiento de energía y conectividad flexible, la combinación del XT-4800 con Plaspy ofrece un camino sencillo hacia la visibilidad de activos.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el XT-4800 visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información de protocolo específica y la guía de configuración más reciente con el fabricante en https://xirgo.com/
