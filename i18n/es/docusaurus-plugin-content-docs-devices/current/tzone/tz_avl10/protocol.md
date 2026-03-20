---
slug: /tzone/tz_avl10/protocol
id: tz_avl10-protocol
sidebar_label: Protocol
title: TZone - TZ-AVL10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del TZone TZ AVL10 y su comunicación con Plaspy mediante ajustes de servidor compartidos
keywords:
  - Protocolo TZone TZ AVL10
  - Protocolo GPS TZ AVL10
  - Compatibilidad rastreador TZone Plaspy
  - Protocolo de comunicación TZ AVL10
  - Protocolo de rastreo TZ AVL10
  - Protocolo rastreador GPS TZone
  - Integración de dispositivos Plaspy
  - Protocolo de rastreo vehicular TZone
  - TZ AVL10 GPRS TCP UDP
  - Protocolo OTA firmware TZone
---

# TZone - Protocolo TZ-AVL10

Esta página presenta el contexto público del protocolo para usar el rastreador GPS TZone TZ-AVL10 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica de manera general, qué ajustes de conexión se usan para alcanzar Plaspy y qué aspectos del protocolo del equipo son más relevantes para la configuración y el monitoreo. El objetivo es ayudar a usuarios técnicos e integradores a comprender el papel de la comunicación sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y realiza detección automática del protocolo cuando un rastreador reporta a la plataforma. El comportamiento exacto del protocolo para el TZ-AVL10 puede variar según la versión de firmware, revisiones de hardware y la implementación del fabricante. Esta página resume el contexto de comunicación relevante para la integración con Plaspy e invita a los usuarios a confirmar detalles específicos del dispositivo con el fabricante.

## Descripción general del protocolo

El protocolo del TZ-AVL10 regula cómo el rastreador informa posición, alarmas y estado a un servidor remoto, así como la forma en que se aplican comandos remotos o configuraciones. Para la integración con Plaspy, la función del protocolo es empaquetar datos de GPS, alarmas y telemetría y transmitirlos a través de la conexión de red del dispositivo para que la plataforma los interprete y presente como ubicaciones y eventos útiles.

- Permite que el TZ-AVL10 transmita posición GPS, estado de batería y alimentación, eventos de alarma y telemetría básica a Plaspy
- Incluye información de identidad para que Plaspy asocie los mensajes entrantes con el registro de dispositivo correcto
- Soporta reporte sobre datos celulares usando GPRS sobre IP con opciones de transporte por TCP o UDP, y entrega alternativa por SMS cuando está configurado
- Permite la emisión de comandos de configuración remota y actualizaciones de firmware cuando el dispositivo y la red lo soportan
- Proporciona notificaciones de alarmas y estado para eventos como exceso de velocidad, batería baja, geocerca y estado de ignición, que Plaspy presenta para monitoreo y alertas

## Cómo Plaspy identifica el protocolo

Plaspy recibe datos de muchos modelos de rastreadores y determina automáticamente el manejador de protocolo apropiado cuando el dispositivo reporta al endpoint de la plataforma. Esto significa que la mayoría de las unidades TZ-AVL10 solo necesitan estar configuradas para reportar a Plaspy para ser reconocidas y procesadas sin seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy expone un endpoint compartido para el tráfico de dispositivos, por lo que los mensajes entrantes se enrutan a la plataforma para detección automática
- El mismo puerto de la plataforma se usa para todos los dispositivos compatibles con Plaspy, lo que simplifica la configuración y el alta de equipos
- Cuando un TZ-AVL10 se configura para reportar al endpoint de Plaspy, normalmente se detecta y se asigna al perfil de dispositivo correcto de forma automática
- Rara vez es necesaria la selección manual del protocolo dentro de Plaspy si el dispositivo apunta correctamente a la dirección de reporte de Plaspy
- Si un dispositivo no parece registrarse, revisar los ajustes de reporte y la compatibilidad del firmware suele ser el primer paso recomendado

## Transporte y contexto de conexión

El TZ-AVL10 soporta comunicación de datos basada en GPRS y puede usar TCP o UDP para el reporte según la configuración del equipo y las condiciones de la red. Para la integración con Plaspy, el dispositivo debe configurarse para enviar datos al endpoint del servidor de Plaspy para que los mensajes se entreguen de forma fiable a la plataforma.

- Las unidades TZ-AVL10 pueden configurarse para usar UDP o TCP como protocolo de transporte al reportar vía GPRS
- Plaspy acepta conexiones de dispositivos en un único puerto compartido que todos los equipos usan para reportar a la plataforma
- Los dispositivos pueden apuntar al servidor de Plaspy por el dominio d.plaspy.com o por la dirección IP pública 54.85.159.138 cuando DNS no está disponible o para pruebas
- El puerto utilizado para reportar a Plaspy es 8888 y es el mismo puerto para todos los dispositivos soportados por Plaspy
- El TZ-AVL10 soporta SMS como canal alternativo para comandos o reportes limitados cuando GPRS no está disponible
- La actualización de firmware OTA sobre GPRS es compatible con el dispositivo cuando el firmware del fabricante y las condiciones de red lo permiten

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el comportamiento de los mensajes y las funciones soportadas; un firmware más nuevo o más antiguo puede modificar campos o la frecuencia de reporte
- Las revisiones de hardware y accesorios opcionales pueden afectar qué campos de telemetría están disponibles o cómo se informan ciertas alarmas
- Los comandos de configuración del fabricante y los ajustes por defecto pueden variar según la región o la versión del distribuidor; siempre verifique cómo está provisionada su unidad
- Elija TCP o UDP según necesidades de confiabilidad y comportamiento de la red; UDP puede ser preferible para conexiones intermitentes mientras que TCP ofrece fiabilidad de sesión
- Confirme que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para asegurar conectividad con Plaspy
- Valide la compatibilidad y las funciones soportadas contra la documentación oficial de TZone y las notas de las versiones de firmware antes de desplegar instalaciones a gran escala

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del TZ-AVL10 ayuda a garantizar una configuración confiable, una resolución de problemas eficaz y una operación predecible a largo plazo cuando se integra con Plaspy. Saber qué reporta el dispositivo y cómo se conecta permite a los administradores diagnosticar problemas y validar que la plataforma recibe los datos necesarios.

- Ayuda a diagnosticar problemas de conectividad revisando transporte, dirección del servidor y configuración de puerto
- Orienta las decisiones de actualización de firmware cuando nuevas funciones o correcciones afectan el comportamiento de reporte
- Facilita el manejo correcto de eventos de alarma y telemetría para que Plaspy presente alertas e historial precisos
- Permite elegir de manera informada el modo de transporte TCP o UDP según la fiabilidad de la red y las necesidades de entrega de datos
- Apoya la planificación de roaming, uso de datos y métodos de reporte de respaldo como SMS

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el TZone TZ-AVL10 ofrece a las organizaciones una forma unificada de recopilar datos de ubicación y eventos de estos dispositivos, aprovechando la detección automática de protocolo y los ajustes de conexión compartidos de Plaspy. El largo tiempo en espera del TZ-AVL10, sus capacidades de alarma, soporte de roaming y posibilidad de actualización OTA encajan bien con una plataforma que centraliza telemetría y ofrece monitoreo, alertas e informes.

Para conocer más sobre Plaspy y cómo la plataforma funciona con dispositivos como el TZ-AVL10 visite https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del dispositivo, comportamiento de firmware y orientación del fabricante, por favor verifique la información actual en el sitio oficial de TZone http://www.tzonedigital.com/ ya que la implementación del dispositivo y el firmware pueden cambiar con el tiempo.
