---
slug: /goome/gm02g/protocol
id: gm02g-protocol
sidebar_label: Protocol
title: Goome - GM02G Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo para integrar el rastreador Goome GM02G con Plaspy usando ajustes de servidor compartido y detección automática
keywords:
  - Protocolo Goome GM02G
  - Protocolo GPS Goome GM02G
  - Protocolo de comunicación GM02G
  - Protocolo de rastreo GM02G
  - Protocolo Goome Plaspy
  - Compatibilidad GM02G
  - Protocolo de rastreador GPS Goome
  - Rastreo vehicular GM02G
  - Compatibilidad de dispositivo Plaspy
  - Guía de protocolo para rastreadores
---

# Goome - Protocolo GM02G

Esta página describe el contexto público del protocolo para usar el rastreador Goome GM02G con Plaspy. Explica cómo el comportamiento de reporte del dispositivo y su modo de comunicación se relacionan con el endpoint compartido de Plaspy, y destaca las funciones operativas del GM02G como rastreo en tiempo real, geo cercas, detección de ACC, alarmas por vibración y exceso de velocidad, reproducción de trayectos, modo de sueño y tecnología anti espionaje que influyen en cuándo y cómo el dispositivo envía datos.

Plaspy usa ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el equipo reporta al endpoint de Plaspy. Para el GM02G esto significa que el dispositivo puede configurarse para reportar a Plaspy usando el mismo host y puerto que emplean todos los dispositivos, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo de comunicación GM02G define cómo el rastreador se identifica, reporta posición y estado, y entrega alarmas y telemetría a un servidor. Cuando se usa con Plaspy, el rol público del protocolo es permitir que el dispositivo establezca una conexión de transporte con la plataforma y envíe datos de ubicación y eventos procesables que Plaspy pueda recibir y mostrar.

- Permite que el rastreador envíe reportes periódicos o por evento sobre posición y estado a Plaspy
- Transporta datos de alarmas y sensores como estado de ACC, alertas de vibración y notificaciones por exceso de velocidad
- Proporciona la información de identificación que el servidor necesita para asociar los datos entrantes a un dispositivo específico
- Soporta comportamientos de sueño y reporte programado para conservar energía manteniendo la posibilidad de rastreo
- Permite reconstruir la reproducción de trayectos y datos históricos a partir de los reportes de posición recibidos

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un endpoint y puerto compartidos e incluye una capa de detección automática que selecciona el manejo apropiado para muchos protocolos de rastreadores. Para la mayoría de los usuarios esto elimina la necesidad de especificar manualmente un protocolo dentro de Plaspy cuando el dispositivo está correctamente apuntado al servidor de Plaspy.

- Plaspy escucha en el endpoint compartido d.plaspy.com y en la IP del servidor 54.85.159.138
- Todos los dispositivos usan el mismo puerto en Plaspy, por lo que la configuración se centra en el host y el transporte más que en la selección de puerto
- El GM02G puede configurarse para reportar a Plaspy y la plataforma intentará detectar el protocolo automáticamente
- Si el rastreador envía identificación y reportes regulares al endpoint de Plaspy, normalmente no se requiere una selección manual del protocolo
- Las variaciones entre versiones de firmware o ajustes del dispositivo pueden afectar cómo aparecen la identificación y los reportes ante Plaspy

## Transporte y contexto de conexión

El GM02G soporta opciones de transporte de red que determinan cómo entrega los mensajes del protocolo al servidor. Desde la perspectiva de conexión es importante configurar el dispositivo para usar el host y el transporte correctos para que los mensajes lleguen a Plaspy con fiabilidad.

- El dispositivo puede configurarse para usar UDP o TCP para el reporte, según la unidad y su configuración
- Plaspy acepta conexiones en el puerto 8888 y todos los dispositivos soportados usan este mismo puerto para reportar
- Los equipos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138
- Usar el modo de transporte correcto en el rastreador (UDP o TCP) ayuda a asegurar que los mensajes lleguen como se espera
- Condiciones de red como NAT, restricciones del operador o reglas de firewall pueden afectar la conectividad con el endpoint de Plaspy

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el tiempo de los mensajes, los campos reportados o la presencia de funcionalidades opcionales como el reporte en modo sueño
- Revisiones de hardware y variantes de fabricación a veces introducen diferencias menores en el protocolo que afectan el parseo o la disponibilidad de funciones
- Las opciones de configuración por parte del fabricante pueden permitir al dispositivo usar modos de transporte o cronogramas de reporte distintos que influyan en la frecuencia con que Plaspy recibe datos
- La elección entre UDP o TCP en el rastreador afecta la semántica de entrega y puede ser necesaria en ciertos entornos de operador
- Verifique siempre que el dispositivo esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para garantizar compatibilidad con Plaspy
- Al solucionar problemas, confirme que el rastreador esté alimentado, tenga conectividad de red y esté configurado con el host y transporte esperados

## Por qué es importante conocer el protocolo

Tener un entendimiento práctico del protocolo de comunicación GM02G facilita la configuración del dispositivo, asegura operaciones confiables y ayuda a resolver problemas cuando los datos no aparecen en Plaspy. Saber cómo reporta el rastreador y qué tipo de eventos envía facilita confirmar que la plataforma recibe la información correcta y que funciones como alertas de geo cerca y reproducción de trayectos funcionarán según lo previsto.

- Simplifica la configuración inicial asegurando que el rastreador apunte al endpoint y transporte correctos de Plaspy
- Mejora la resolución de problemas al enfocar las comprobaciones en intervalos de reporte, transporte y host cuando no se reciben actualizaciones de posición o alarmas
- Ayuda a interpretar el comportamiento del equipo, como el modo sueño o los reportes activados por movimiento, para definir expectativas de monitoreo adecuadas
- Contribuye a una mejor gestión de batería y conectividad al alinear los horarios de reporte del dispositivo con las necesidades operativas
- Ayuda a confirmar que tipos de eventos como detección de ACC o alarmas por vibración están llegando y se mapean correctamente en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el Goome GM02G con Plaspy ofrece una manera sencilla de recopilar y visualizar la ubicación de vehículos, eventos de alarma y trayectos históricos a través de una plataforma unificada. El endpoint compartido y la detección automática de protocolos de Plaspy reducen la complejidad de configuración en muchas instalaciones y permiten a los operadores de flota concentrarse en la visibilidad operativa en lugar de la configuración a bajo nivel.

Si desea más información sobre Plaspy y cómo maneja la conectividad de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; debe verificar los detalles específicos del protocolo del dispositivo con el fabricante en http://www.goomegpstracker.com.
