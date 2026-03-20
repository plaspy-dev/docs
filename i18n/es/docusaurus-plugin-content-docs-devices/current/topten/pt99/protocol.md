---
slug: /topten/pt99/protocol
id: pt99-protocol
sidebar_label: Protocol
title: TopTen - PT99 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar TopTen PT99 con Plaspy mediante ajustes de conexión compartidos y detección automática
keywords:
  - protocolo TopTen PT99
  - protocolo GPS TopTen PT99
  - compatibilidad PT99 Plaspy
  - protocolo de rastreo PT99
  - protocolo de comunicación PT99
  - protocolo rastreador GPS TopTen
  - integración dispositivo PT99
  - compatibilidad dispositivo Plaspy
  - rastreo vehicular PT99
  - rastreador de activos PT99
---

# TopTen - Protocolo PT99

Esta página documenta el contexto público del protocolo para usar el rastreador GPS personal TopTen PT99 con la plataforma Plaspy. Explica, en términos generales, cómo se comunica el dispositivo, qué puntos de conexión ofrece Plaspy y qué aspectos revisar durante la integración. El objetivo es describir la comunicación del dispositivo sin reproducir detalles propietarios del fabricante.

Plaspy acepta conexiones de los rastreadores soportados mediante ajustes de conexión compartidos y detecta automáticamente el protocolo cuando un dispositivo informa al endpoint de Plaspy. El comportamiento del PT99 puede variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que el comportamiento exacto de comandos y los tiempos de mensaje pueden diferir entre unidades.

## Visión general del protocolo

El protocolo de reporte del PT99 define cómo el dispositivo se identifica y transmite información de ubicación y estado a un servidor remoto. Para efectos de integración, los aspectos públicos más relevantes son cómo establece la conexión, con qué frecuencia reporta y qué opciones de transporte soporta.

- Permite reportes periódicos y bajo demanda de coordenadas GPS y telemetría asociada a un servidor remoto
- Transporta información de identidad y estado para que el servidor pueda asociar los informes a un dispositivo PT99 concreto
- Soporta alarmas e informes de eventos como SOS, vibración y notificaciones de batería baja para activar alertas en la plataforma
- Permite el envío de comandos de configuración al dispositivo a través de los canales remotos que el fabricante implemente
- Funciona con métodos de localización híbridos, incluyendo GPS y ubicación basada en celdas, para mejorar la cobertura en zonas con señal débil

## Cómo Plaspy detecta el protocolo

Plaspy utiliza un endpoint y un puerto unificados para la recepción de informes de dispositivos y realiza la detección automática del protocolo para el tráfico entrante. Esto significa que cuando un PT99 se configura para reportar a Plaspy, la plataforma identifica el protocolo a partir de los mensajes entrantes y enruta los datos al parser y registro de dispositivo correspondientes.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la dirección pública 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que hace que la configuración inicial sea consistente entre modelos
- Los dispositivos pueden estar configurados para usar UDP o TCP en el puerto 8888 para reportar a Plaspy
- Cuando un PT99 informa al endpoint de Plaspy, por lo general no se requiere la selección manual del protocolo en la plataforma
- La configuración correcta en el dispositivo es el requisito habitual para que los informes lleguen a d.plaspy.com en el puerto 8888

## Contexto de transporte y conexión

Entender cómo el PT99 se conecta al servidor ayuda a garantizar reportes fiables e integración exitosa. El PT99 puede usar opciones de transporte comunes y debe apuntar al endpoint de Plaspy para que la detección automática funcione.

- El PT99 puede estar configurado para enviar datos por UDP o TCP según el firmware y la configuración del rastreador
- Apunte el dispositivo a d.plaspy.com o a la dirección del servidor 54.85.159.138 para que los informes lleguen a Plaspy
- Todos los dispositivos Plaspy usan el mismo puerto, por lo que configurar el puerto 8888 en el rastreador se alinea con la plataforma
- La fiabilidad de la red y el comportamiento del operador móvil pueden afectar la rapidez con la que los informes llegan a Plaspy
- Para la configuración remota y las respuestas a comandos, verifique que el rastreador soporte el protocolo de transporte elegido

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden añadir o modificar funciones que afecten el contenido de los mensajes o los eventos disponibles
- Las revisiones de hardware pueden alterar los transportes soportados o el comportamiento de periféricos como sensores y alarmas
- Las opciones de configuración del fabricante determinan qué eventos y modos de reporte están activos por defecto
- Seleccionar UDP frente a TCP en el dispositivo puede cambiar las características de entrega y la política de reintentos
- Siempre valide un dispositivo después de actualizaciones de firmware para confirmar que sigue reportando correctamente a Plaspy
- Consulte la documentación del fabricante para comportamiento específico de firmware que pueda afectar la integración

## Por qué importa entender el protocolo

Comprender cómo el PT99 se comunica con Plaspy facilita la puesta en marcha, la resolución de problemas y la confiabilidad a largo plazo. Un entendimiento claro del comportamiento del protocolo a alto nivel puede reducir el tiempo de integración y aumentar la confianza operativa.

- Asegura los ajustes correctos de servidor y puerto para que el dispositivo alcance d.plaspy.com en el puerto 8888
- Ayuda a interpretar eventos del dispositivo como SOS, alarma por vibración y batería baja en la plataforma
- Orienta la elección del transporte que mejor se adapte a las condiciones de red y a los requisitos de entrega
- Facilita el diagnóstico de informes faltantes o telemetría incorrecta después de cambios de firmware
- Mejora la planificación de modos de ahorro de energía e intervalos de reporte para cumplir los requerimientos operativos

## Por qué usar Plaspy con este protocolo

Usar el TopTen PT99 con Plaspy ofrece a las organizaciones una forma de centralizar reportes de ubicación, alertas y estado de dispositivos para la protección de activos y la visibilidad operativa. El endpoint unificado de Plaspy y la detección automática de protocolo simplifican la configuración, de modo que muchas unidades PT99 pueden ponerse en línea sin tener que seleccionar manualmente el protocolo en la plataforma.

Para conocer más sobre Plaspy y cómo maneja integraciones de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que conviene verificar la información más reciente específica del dispositivo en el sitio del fabricante en http://www.t10.cn.
