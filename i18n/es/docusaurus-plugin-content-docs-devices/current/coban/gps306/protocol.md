---
slug: /coban/gps306/protocol
id: gps306-protocol
sidebar_label: Protocol
title: Coban - GPS306 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Coban GPS306 y cómo comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - protocolo Coban GPS306
  - protocolo GPS Coban GPS306
  - protocolo de comunicación Coban GPS306
  - protocolo de rastreo Coban GPS306
  - compatibilidad Coban GPS306 Plaspy
  - protocolo del rastreador GPS306
  - protocolo rastreador Coban
  - integración rastreador Plaspy
  - rastreo vehicular Coban GPS306
  - gestión de flotas GPS306
---

# Coban - Protocolo GPS306

Esta página ofrece el contexto público del protocolo para utilizar el Coban GPS306 con la plataforma Plaspy. Se centra en cómo el dispositivo se comunica por la red para reportar ubicación y estado, y en los puntos de conexión que Plaspy acepta para recibir datos de este rastreador. Se omiten a propósito detalles técnicos dependientes de la versión de firmware o ajustes privados del fabricante; el documento aborda los aspectos de comunicación públicos y relevantes para la integración con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo del GPS306 puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante, y esas variaciones pueden afectar comandos disponibles, intervalos de reporte y funciones opcionales como respaldo por SMS o alarmas personalizadas.

## Descripción general del protocolo

El GPS306 transmite ubicación y telemetría aprovechando su conexión GSM/GPRS y la posición provista por satélites GPS. En una implementación con Plaspy, el rastreador envía sus reportes al endpoint de Plaspy y la plataforma interpreta los mensajes entrantes para que los datos puedan usarse en mapas, alertas y reproducción histórica.

- El protocolo define cómo el rastreador se identifica y envía coordenadas GPS, hora e información de estado al servidor.
- Permite reportes periódicos y basados en eventos, como alertas por movimiento, disparos de geocercas y alarmas por exceso de velocidad.
- El envío puede realizarse por la conexión de datos del dispositivo para que Plaspy reciba actualizaciones en tiempo real para supervisión y control de flotas.
- Los mensajes del protocolo incluyen los campos necesarios para que Plaspy relacione un dispositivo con una cuenta y muestre su ubicación en un mapa.
- Funciones del fabricante como reporte por SMS o ciertos tipos de alarma forman parte de las capacidades del equipo y afectan la frecuencia y el formato con que los datos llegan a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos y utiliza esa entrada para detectar y procesar automáticamente el protocolo del rastreador. Cuando un GPS306 está configurado para reportar a Plaspy, normalmente no será necesario seleccionar manualmente un protocolo dentro de Plaspy para que el dispositivo sea reconocido y sus mensajes parseados correctamente.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y usa ese mismo puerto para todos los dispositivos compatibles.
- La plataforma detecta el protocolo del rastreador automáticamente cuando un dispositivo bien configurado reporta al endpoint de Plaspy.
- Si un dispositivo envía datos al endpoint de Plaspy con credenciales o identificadores correctos, Plaspy vinculará la información al registro del dispositivo y procesará los mensajes.
- La configuración adecuada del equipo para apuntar a Plaspy es el requisito habitual; una vez conectado, la selección de protocolo dentro de Plaspy generalmente no es necesaria.

## Transporte y contexto de conexión

Las opciones de conexión y transporte son clave para que el GPS306 entregue datos de forma fiable a Plaspy. El GPS306 puede enviar reportes por la conexión a internet vía GSM/GPRS, y en muchas implementaciones el transporte es UDP o TCP según las capacidades y la configuración del dispositivo.

- El GPS306 puede configurarse para usar UDP o TCP en el puerto 8888 para enviar reportes a Plaspy.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP 54.85.159.138 como endpoint de reporte.
- Todos los dispositivos que soporta Plaspy usan el mismo número de puerto 8888 para reportes, lo que simplifica la configuración y las reglas de firewall.
- La elección entre UDP y TCP afecta características de entrega como retransmisión y orden de los paquetes, y se selecciona según el firmware y ajustes del dispositivo.
- Asegúrese de que su red permita tráfico saliente hacia el endpoint de Plaspy en el puerto 8888 para un reporte confiable.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre unidades GPS306 pueden modificar comandos disponibles, intervalos de reporte y campos opcionales en los mensajes.
- Revisiones de hardware o variantes regionales del GPS306 pueden presentar pequeñas diferencias de protocolo; valide el comportamiento al desplegar a escala.
- Seleccionar UDP o TCP es una configuración del dispositivo y debe coincidir con lo que soporta el firmware y lo que su red permite.
- Algunas funciones mencionadas en materiales comerciales, como respaldo por SMS u opciones avanzadas de alarma, dependen de la configuración y la disponibilidad del servicio SIM.
- Plaspy detecta automáticamente el protocolo cuando el dispositivo reporta a su endpoint, pero se requieren identificadores correctos y configuración de reporte adecuada.
- Confirme siempre la compatibilidad y el comportamiento esperado según la documentación del fabricante para la versión de firmware específica instalada en cada unidad.

## Por qué es importante entender el protocolo

Tener claro cómo se comunica el GPS306 facilita la configuración exitosa, la resolución de problemas y el mantenimiento de reportes fiables dentro de Plaspy. Aporta claridad sobre qué datos esperar, cómo configurar el transporte y cómo las opciones del equipo interactúan con la plataforma.

- Reduce el tiempo dedicado a resolver problemas al facilitar la verificación de que los reportes están llegando a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Saber si el dispositivo está configurado en UDP o TCP ayuda a diagnosticar problemas de entrega relacionados con firewalls o políticas de red.
- Conocer las variaciones de firmware y hardware aclara diferencias en telemetría y comportamiento de alarmas entre unidades.
- Expectativas claras sobre el comportamiento del protocolo ayudan a mapear los mensajes del dispositivo al registro correcto dentro de Plaspy.
- Apoya la planificación operativa en despliegues de flotas donde los intervalos de reporte y el manejo de alarmas consistentes son importantes.

## Por qué usar Plaspy con este protocolo

Usar el Coban GPS306 junto con Plaspy ofrece a las organizaciones una forma práctica de convertir los reportes del equipo en vistas de ubicación en tiempo real, alertas y datos históricos para operaciones y seguridad. El soporte del GPS306 para reportes por internet en tiempo real, geocercas, alarmas por movimiento y exceso de velocidad se complementa con las capacidades de ingestión y visualización de Plaspy para ofrecer visibilidad sobre vehículos y activos.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el Coban GPS306 visite https://www.plaspy.com. Para detalles específicos del protocolo, notas de firmware y guías de implementación consulte la documentación del fabricante en https://www.coban.net/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
