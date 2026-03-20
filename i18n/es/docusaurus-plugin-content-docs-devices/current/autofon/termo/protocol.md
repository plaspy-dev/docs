---
slug: /autofon/termo/protocol
id: termo-protocol
sidebar_label: Protocol
title: AutoFon - Термо Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar AutoFon Термо con Plaspy y dispositivos telemáticos compatibles
keywords:
  - protocolo AutoFon Термо
  - protocolo GPS AutoFon Термо
  - comunicación AutoFon Термо
  - protocolo de rastreo AutoFon Термо
  - controlador de calefacción AutoFon para Plaspy
  - compatibilidad AutoFon Термо
  - protocolo de dispositivo Plaspy
  - módulo de calefacción compatible con Plaspy
  - protocolo de rastreo vehicular Plaspy
  - protocolo controlador de calefacción GSM
---

# AutoFon - Термо Protocolo

Esta página ofrece un contexto público del protocolo para usar el controlador de calefacción AutoFon Термо con Plaspy. Describe cómo el dispositivo puede integrarse en los flujos telemáticos gestionados por Plaspy, el papel del protocolo de comunicación en esa integración y consideraciones prácticas para instaladores y administradores de flotas. AutoFon Термо es un módulo de calefacción basado en GSM diseñado para controlar calentadores auxiliares posventa y suele emparejarse con un rastreador GPS compatible con Plaspy para ofrecer una solución completa de telemetría y control.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo se configura para reportar a Plaspy. El endpoint público de Plaspy es accesible en d.plaspy.com y también en la dirección IP 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para enviar datos por UDP o TCP al puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público del protocolo más que en detalles internos del dispositivo.

## Visión general del protocolo

El protocolo de comunicación permite que el AutoFon Термо y los rastreadores GPS complementarios intercambien estados, telemetría y eventos de control con Plaspy, de modo que las acciones del calefactor y la telemetría del vehículo puedan registrarse y gestionarse. Para la unidad Термо en particular, el contexto del protocolo se centra en la señalización GSM para comandos remotos y el reporte de eventos que Plaspy puede asociar con los registros del vehículo cuando se usa junto a un rastreador GPS.

- Permite que el dispositivo reporte estados y eventos del calefactor que Plaspy puede mostrar y almacenar
- Facilita el emparejamiento de eventos de control del calefactor con la telemetría GPS cuando hay un rastreador compatible con Plaspy
- Proporciona un canal consistente para comandos remotos, eventos programados y anulaciones locales que queden registrados en los flujos de trabajo de la flota
- Hace de puente entre el controlador de calefacción basado en GSM y los servicios en la nube de Plaspy sin exponer los detalles internos del firmware
- Soporta visibilidad a nivel de evento, como arranques por temporizador, anulaciones manuales y activaciones remotas cuando el registro de eventos está disponible

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en el endpoint y puerto compartidos y determina el manejo de dispositivo apropiado para cada conexión. En la mayoría de los casos, cuando un dispositivo se configura para enviar datos al endpoint de Plaspy, la plataforma identificará el formato de reporte y procesará los mensajes del dispositivo sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy escucha en un único puerto compartido para todos los dispositivos soportados, lo que simplifica la configuración
- El endpoint público de Plaspy es d.plaspy.com y también está disponible en 54.85.159.138
- Se utiliza el puerto 8888 para el reporte de dispositivos y puede emplearse tanto con UDP como con TCP según las capacidades del equipo
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma asocia automáticamente la telemetría entrante con el tipo de dispositivo correcto siempre que sea posible
- Generalmente, los usuarios solo necesitan configurar su dispositivo para que reporte al endpoint y puerto de Plaspy; no suele requerirse selección manual del protocolo dentro de Plaspy

## Transporte y contexto de conexión

La configuración de la conexión es una consideración práctica para instaladores e integradores. AutoFon Термо es en sí mismo un controlador GSM para calefactores y, por lo general, se comunica vía SMS o llamada para el control, mientras que la telemetría y el reporte de eventos que se integran con Plaspy dependen de un rastreador GPS complementario o de un dispositivo con capacidad de telemetría configurado para enviar datos a Plaspy. El transporte de red hacia Plaspy utiliza las mismas configuraciones públicas para todos los dispositivos para reducir la complejidad de la instalación.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o a la IP 54.85.159.138
- La capa de transporte usa el puerto 8888 para todos los dispositivos soportados por Plaspy y así mantener una configuración uniforme
- El reporte puede usar UDP o TCP en el puerto 8888 según la configuración del rastreador o del dispositivo de telemetría
- Dado que AutoFon Термо utiliza principalmente GSM para el control del calefactor, el emparejamiento con un rastreador GPS compatible con Plaspy permite combinar reportes de GPS y eventos del calefactor
- Tenga en cuenta las reglas de firewall y las políticas del operador móvil para permitir conexiones al endpoint y puerto de Plaspy

## Notas de compatibilidad del protocolo

- AutoFon Термо es principalmente un controlador de calefacción GSM y no un rastreador GNSS autónomo; son habituales las configuraciones combinadas con Plaspy
- Las revisiones de firmware y hardware del fabricante pueden cambiar las funciones disponibles y el comportamiento del reporte
- La elección del transporte entre UDP y TCP puede afectar la semántica de entrega; confirme los transportes soportados por la unidad GPS/telemetría específica en uso
- Algunas implementaciones dependen de dispositivos complementarios que reenvían eventos del calefactor a Plaspy en lugar de que la unidad Термо envíe datos TCP/UDP directamente
- El fabricante AutoFon ha indicado que la unidad está descontinuada y actualmente fuera de stock; confirme la disponibilidad del dispositivo y el firmware con el fabricante
- Siempre valide la compatibilidad y la configuración recomendada según la documentación oficial de AutoFon y las indicaciones del instalador

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a instaladores y administradores de flotas a lograr una integración confiable, reducir el tiempo de puesta en marcha y mejorar la visibilidad operativa. Saber qué espera la plataforma y cómo el dispositivo reporta eventos permite resolver fallas más rápido y obtener un comportamiento predecible en flotas en producción.

- Asegura que los dispositivos apunten al endpoint y puerto correctos de Plaspy para comenzar a reportar
- Reduce el tiempo requerido para diagnosticar por qué los eventos del calefactor o la telemetría no aparecen en Plaspy
- Ayuda a determinar si se requiere un rastreador GPS complementario para asociar eventos del calefactor con ubicación
- Orienta la decisión entre UDP y TCP según el comportamiento del dispositivo y la red
- Fomenta la fiabilidad a largo plazo alineando las elecciones de firmware y hardware con las necesidades de integración con Plaspy

## Por qué usar Plaspy con este protocolo

Usar AutoFon Термо junto con Plaspy ofrece una forma práctica de combinar el control remoto del calefactor y el precalentamiento programado con la telemetría de flota. Para flotas que operan en climas fríos, la combinación de eventos de control del calefactor y telemetría GPS ayuda a garantizar que los vehículos estén calientes y operativos en los momentos adecuados, además de proporcionar visibilidad centralizada sobre el uso y los horarios de los calefactores. El endpoint unificado de Plaspy y la detección automática de protocolo simplifican la configuración cuando los dispositivos se configuran para reportar a la plataforma.

Para saber más sobre cómo Plaspy puede integrar eventos de control del calefactor y telemetría de vehículos, visite https://www.plaspy.com. Para las especificaciones de dispositivo más recientes, notas de firmware y orientación del fabricante sobre AutoFon Термо, verifique los detalles en el sitio oficial de AutoFon https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo.
