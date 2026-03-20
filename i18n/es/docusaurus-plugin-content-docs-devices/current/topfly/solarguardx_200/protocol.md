---
slug: /topfly/solarguardx_200/protocol
id: solarguardx_200-protocol
sidebar_label: Protocol
title: TopFly - SolarGuardX 200 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar TopFly SolarGuardX 200 con Plaspy y obtener seguimiento GPS confiable y notificación de manipulación
keywords:
  - Protocolo TopFly SolarGuardX 200
  - Protocolo GPS TopFly SolarGuardX 200
  - Protocolo de comunicación TopFly SolarGuardX 200
  - Protocolo de rastreo SolarGuardX 200
  - Compatibilidad SolarGuardX 200 con Plaspy
  - Protocolo de rastreador GPS TopFly
  - Protocolo de GPS para candado solar
  - Protocolo de rastreador de contenedores
  - Protocolo de rastreador para gestión de flotas
  - Protocolo de rastreo de activos Plaspy
---

# TopFly - Protocolo SolarGuardX 200

Esta página explica el contexto público del protocolo para usar el TopFly SolarGuardX 200 con la plataforma Plaspy. Describe de forma general cómo se comunica el equipo, qué papel tiene el protocolo de reporte en la integración y qué puede esperar al configurar el dispositivo para reenviar ubicaciones, eventos de manipulación y lecturas de sensores a Plaspy. El SolarGuardX 200 es un rastreador GPS para carga y candado solar resistente, diseñado para larga autonomía y detección de manipulación; este documento explica cómo suele interactuar esta clase de equipos con Plaspy sin entrar en detalles de firmware.

Plaspy usa ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que aunque el SolarGuardX 200 es compatible con Plaspy desde fábrica, las diferencias en frecuencia de reporte, transportes soportados, opciones de cifrado y conjuntos de comandos pueden depender del SKU y del estado del firmware de la unidad.

## Resumen del protocolo

A grandes rasgos, el protocolo de reporte del rastreador define cómo el SolarGuardX 200 envía posiciones GNSS, eventos de manipulación y desbloqueo, lecturas de sensores y mensajes de latido a un servidor remoto. El protocolo conecta los subsistemas GNSS y de sensores del dispositivo con Plaspy para que ubicaciones y eventos se conviertan en telemetría utilizable en paneles, alertas e informes.

- Permite que el SolarGuardX 200 entregue posiciones GNSS y telemetría a Plaspy para seguimiento en tiempo real y registro histórico.
- Comunica eventos de candado y manipulación, como corte de cuerda, extracción de cubierta de la SIM y notificaciones de apertura del candado, a los flujos de eventos de Plaspy.
- Transporta estado del dispositivo, nivel de batería y datos de sensores para que Plaspy pueda activar alertas, reglas y flujos de trabajo automatizados.
- Soporta métodos de transporte comunes anunciados por la familia de dispositivos para que los datos se enruten a Plaspy de forma fiable.
- Permite la coordinación de comandos remotos y gestión de firmware a través de Plaspy cuando el dispositivo soporta control OTA o por SMS.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar informes entrantes de dispositivos en un único endpoint compartido e identificar automáticamente el formato de reporte. Si el SolarGuardX 200 está configurado para reportar al endpoint de Plaspy, la plataforma detectará el protocolo entrante y procesará los mensajes de posición y eventos sin que el usuario tenga que seleccionar manualmente el protocolo.

- Plaspy acepta reportes de dispositivos en el endpoint compartido d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración y el alta de equipos.
- El SolarGuardX 200 puede apuntar al endpoint de Plaspy para que la plataforma reconozca y analice automáticamente los reportes compatibles.
- Cuando está configurado correctamente, por lo general usted no necesita elegir un protocolo dentro de Plaspy; solo apunte el dispositivo al endpoint de Plaspy y permita la detección automática.
- Si el dispositivo soporta múltiples transportes, Plaspy puede recibir reportes independientemente del transporte preferido que use su firmware.

## Contexto de transporte y conexión

El contexto de conexión se refiere a cómo se entregan los reportes, no al diseño interno de los mensajes. El SolarGuardX 200 soporta varias opciones de transporte y puede configurarse para usar la que mejor se adapte al despliegue. Los dispositivos pueden apuntar al endpoint de Plaspy por dominio o por IP.

- El rastreador puede configurarse para usar UDP o TCP en el puerto 8888, según soporte del dispositivo y la configuración local.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 para reportes directos.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados para agilizar el alta y reducir errores de configuración.
- Algunas variantes SKU y compilaciones de firmware del SolarGuardX 200 también soportan MQTT y reportes por SMS como transportes alternativos para telemetría y comandos remotos.
- La elección del transporte puede afectar la fiabilidad, la latencia y cómo el dispositivo almacena datos durante cortes de conectividad; seleccione el transporte que se ajuste a sus restricciones de red y operativas.

## Notas sobre compatibilidad del protocolo

- Las unidades SolarGuardX 200 se describen como compatibles con Plaspy desde fábrica, pero las revisiones de firmware pueden cambiar los transportes soportados y las funciones disponibles.
- Diferentes SKUs pueden ofrecer bandas celulares, pilas de modem y opciones de reporte distintas; verifique los detalles del SKU frente a los requisitos de Plaspy.
- Revisiones de hardware o funciones opcionales como cifrado (MD5, AES256) y MQTT pueden estar disponibles en algunas versiones de firmware y no en otras.
- La selección de transporte (UDP vs TCP vs MQTT vs SMS) debe validarse para su despliegue para asegurar el comportamiento deseado en cuanto a almacenamiento en búfer y reintentos.
- Por defecto, la configuración del fabricante puede apuntar a un endpoint en la nube distinto; confirme los ajustes para que el dispositivo reporte al endpoint de Plaspy.
- Compare siempre el firmware y la configuración de la unidad con la documentación oficial del fabricante para confirmar compatibilidad y comportamiento esperado.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a administradores e integradores a asegurar una configuración confiable, una resolución de problemas más rápida y una operación predecible a largo plazo al usar el SolarGuardX 200 con Plaspy. Saber qué transportes y eventos enviará el dispositivo facilita mapear la telemetría en reglas, notificaciones y flujos de trabajo de flota en Plaspy.

- Ayuda a verificar que el dispositivo está correctamente apuntado a d.plaspy.com o a la IP del servidor Plaspy para que los reportes lleguen a la plataforma.
- Contribuye a elegir el transporte más adecuado según su red y requisitos de datos, teniendo en cuenta almacenamiento en búfer y latencia.
- Permite identificar con mayor rapidez problemas como eventos de manipulación faltantes, intervalos de reporte inesperados o funciones de firmware desajustadas.
- Facilita la planificación de actualizaciones OTA de firmware, ajustes de cifrado y canales de comando seguros cuando el dispositivo ofrece esas capacidades.
- Aumenta la confianza al integrar sensores accesorios vía BLE o al enrutar eventos de bloqueo/desbloqueo hacia procesos operativos.

## Por qué usar Plaspy con este protocolo

Combinar el SolarGuardX 200 con Plaspy ofrece a las organizaciones visibilidad continua, alertas de manipulación y telemetría consolidada para seguridad de contenedores, remolques y activos remotos. La larga autonomía del dispositivo, su rendimiento GNSS robusto y la detección de manipulación se integran de forma natural con los flujos de trabajo de Plaspy para geocercas, alertas basadas en eventos y análisis histórico de rutas, ayudando a reducir tiempos de respuesta y mejorar la protección de activos.

Para conocer más sobre cómo Plaspy gestiona integraciones de dispositivos y las capacidades generales de la plataforma, visite https://www.plaspy.com. Para detalles de protocolo específicos por firmware, listas de funciones e instrucciones de configuración del SolarGuardX 200, verifique la información con el fabricante en https://www.topflytech.com/.
