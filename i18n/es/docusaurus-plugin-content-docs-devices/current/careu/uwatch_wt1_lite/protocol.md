---
slug: /careu/uwatch_wt1_lite/protocol
id: uwatch_wt1_lite-protocol
sidebar_label: Protocol
title: CAREU - uWatch WT1 Lite Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar CAREU uWatch WT1 Lite con Plaspy, incluyendo contexto de conexión y compatibilidad
keywords:
  - protocolo CAREU uWatch WT1 Lite
  - protocolo GPS CAREU uWatch WT1 Lite
  - protocolo de comunicación CAREU uWatch WT1 Lite
  - protocolo de rastreo CAREU uWatch WT1 Lite
  - protocolo de rastreador GPS wearable
  - protocolo de rastreo de reloj de salud
  - rastreador compatible con Plaspy
  - protocolo de dispositivo Plaspy
  - rastreador para monitoreo de cuidadores
  - protocolo de geocercas y SOS
---

# CAREU - uWatch WT1 Lite Protocol

Esta página detalla el contexto público y no sensible del protocolo para usar el CAREU uWatch WT1 Lite con Plaspy. Se enfoca en cómo el dispositivo informa ubicación y telemetría de salud a una implementación de Plaspy y en qué ajustes de conexión se usan habitualmente para la integración. El contenido está dirigido a usuarios técnicos que configuran el reporte o solucionan conectividad y no reemplaza la documentación técnica del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta al endpoint de Plaspy. El comportamiento exacto del protocolo y los comandos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es una guía de integración de alto nivel más que una especificación específica de firmware.

## Descripción general del protocolo

El uWatch WT1 Lite envía telemetría e información de eventos desde el wearable hacia un servidor remoto usando su conectividad celular integrada o mediante el reenvío desde una aplicación complementaria. El contexto público del protocolo abarca cómo se entrega esa información a Plaspy para seguimiento en tiempo real, alertas y reproducción histórica sin exponer detalles privados del parser.

- Permite que el reloj informe la ubicación GPS y telemetría de salud como frecuencia cardíaca, presión arterial y SpO2 a un endpoint remoto para monitoreo.
- Entrega notificaciones de eventos como pulsaciones del botón SOS e incumplimientos de geocerca para que Plaspy genere alertas y flujos de escalamiento.
- Transporta actualizaciones de posición regulares e informes de estado que Plaspy utiliza para mapeo, reproducción histórica y correlación temporal con datos de salud.
- Proporciona la información de identificación que el servidor necesita para asociar los reportes entrantes con el dispositivo y la cuenta de usuario correctos.
- Soporta flujos de configuración y gestión remota cuando el dispositivo o la app complementaria están configurados para reportar al endpoint de Plaspy.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes de dispositivos en un único endpoint de red compartido y determina automáticamente el protocolo del rastreador usado por cada dispositivo cuando éste está correctamente configurado para reportar allí. En la mayoría de los casos, el usuario no necesita seleccionar el protocolo manualmente dentro de Plaspy una vez que el dispositivo envía datos a la dirección y puerto correctos.

- El dominio del servidor Plaspy es d.plaspy.com y la IP pública del servidor es 54.85.159.138.
- El servidor escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del equipo y las condiciones del operador.
- Cuando el uWatch WT1 Lite apunta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador y asocia los mensajes entrantes con el dispositivo.
- Una identidad de dispositivo y una configuración correctas garantizan que Plaspy encamine la telemetría y los eventos hacia la cuenta de usuario y los flujos de monitoreo apropiados.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el uWatch WT1 Lite típicamente alcanza los servidores de Plaspy y qué opciones suelen estar soportadas. Esta sección se mantiene en el nivel de transporte y no describe formatos internos de trama ni la lógica de parsing.

- El reloj puede enviar reportes por UDP o TCP dependiendo de su pila de red y configuración.
- Los dispositivos pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy recibe datos en el puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de firewall.
- La selección entre UDP y TCP puede afectar las garantías de entrega y debe coincidir con las capacidades del firmware del dispositivo y el comportamiento de la red del operador.
- Para un monitoreo remoto confiable, verifique que el tráfico saliente hacia d.plaspy.com en el puerto 8888 esté permitido por cualquier firewall intermedio o por la configuración APN del operador.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar qué campos de telemetría se reportan, su cadencia de muestreo o los tipos de eventos disponibles como el comportamiento del SOS y el reporte de sensores de salud.
- Revisiones de hardware o variantes regionales del uWatch WT1 Lite pueden implementar diferentes valores por defecto de transporte o comportamientos de la app complementaria que afectan cómo se apunta el dispositivo a un endpoint de reporte.
- Es posible que se requieran ajustes en el fabricante o en la configuración de la app complementaria para dirigir el dispositivo a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- La elección entre UDP y TCP debe guiarse por el soporte del dispositivo y las consideraciones de fiabilidad de la red en su despliegue.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al puerto compartido, pero la identidad correcta del dispositivo y los intervalos de reporte son necesarios para mapear de forma consistente a las cuentas de usuario.
- Siempre valide la compatibilidad y el comportamiento actual contra la documentación del fabricante para detalles específicos de firmware y notas de versión.

## Por qué es importante entender el protocolo

Comprender cómo el uWatch WT1 Lite se comunica con Plaspy ayuda a garantizar una configuración fluida, alertas confiables y un funcionamiento predecible a largo plazo del wearable en despliegues de cuidado o seguridad.

- Facilita la configuración correcta del dispositivo para que la telemetría y los eventos SOS lleguen a Plaspy sin necesidad de selección manual de protocolo.
- Ayuda a resolver problemas de conectividad relacionados con DNS, enrutamiento IP, reglas de firewall y la selección del transporte hacia el endpoint de Plaspy.
- Permite tomar decisiones informadas sobre intervalos de reporte y compensaciones de energía para despliegues con restricciones de batería.
- Soporta la validación adecuada de la entrega de eventos como activaciones de geocercas, acuses de recibo de SOS y muestreos de telemetría de salud.
- Reduce la ambigüedad al coordinar con el fabricante o el operador sobre cambios de firmware que afecten el reporte.

## Por qué usar Plaspy con este protocolo

Usar el CAREU uWatch WT1 Lite con Plaspy centraliza la ubicación y la telemetría de salud en una única plataforma de monitoreo que soporta alertas en tiempo real, reproducción histórica y flujos de trabajo multiusuario para el cuidado. El modelo de endpoint compartido y la detección automática de protocolo de Plaspy simplifican la integración, permitiendo que las organizaciones se enfoquen en el monitoreo y la respuesta en lugar de la configuración de servidores específicos por dispositivo.

Para obtener más información sobre Plaspy y cómo maneja la integración de dispositivos, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que le recomendamos verificar la información más reciente sobre protocolos específicos del dispositivo y notas de firmware en el sitio del fabricante https://www.systech-iot.com/.
