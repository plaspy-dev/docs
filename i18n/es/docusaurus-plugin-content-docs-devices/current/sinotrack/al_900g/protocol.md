---
slug: /sinotrack/al_900g/protocol
id: al_900g-protocol
sidebar_label: Protocol
title: SinoTrack - AL-900G Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del SinoTrack AL-900G y su comunicación con Plaspy para seguimiento de flotas e integración de dispositivos
keywords:
  - protocolo SinoTrack AL-900G
  - rastreador GPS SinoTrack AL-900G
  - compatibilidad AL-900G Plaspy
  - protocolo de rastreo SinoTrack
  - protocolo de comunicación AL-900G
  - protocolo GPS SinoTrack Plaspy
  - rastreo vehicular AL-900G
  - seguimiento de flotas SinoTrack
  - guía del protocolo AL-900G
  - compatibilidad de dispositivos Plaspy
---

# SinoTrack — Protocolo AL-900G

Esta página resume el contexto público del protocolo para usar el SinoTrack AL-900G con Plaspy. Se centra en cómo el dispositivo se comunica con un servidor, el papel del protocolo de reporte en la integración y qué aspectos verificar al configurar el rastreador para su uso con Plaspy. El AL-900G es un rastreador GPS compacto y resistente que incluye, entre otras características, módulo Sirf IV, posicionamiento satelital continuo, modos de seguimiento múltiples, entradas para sensores, batería de respaldo y opciones de almacenamiento local.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. Para Plaspy, el endpoint público es d.plaspy.com, que resuelve a 54.85.159.138, y utiliza el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que es importante validar los ajustes del equipo y la documentación del fabricante al integrar.

## Resumen del protocolo

El protocolo que usa un rastreador define cómo se identifica, cómo reporta ubicación y datos de sensores, y cómo recibe comandos remotos o mensajes de configuración. En el AL-900G, el protocolo de comunicación permite reportes de posición en tiempo oportuno, alarmas y actualizaciones de estado que Plaspy utiliza para mostrar datos en vivo e históricos a los usuarios.

- Permite reportes de ubicación periódicos y también por eventos, enviados desde el equipo al servidor
- Transporta información de identificación para que Plaspy asocie la telemetría entrante con el activo correcto
- Transmite estado de sensores e entradas como ignición, puertas, golpes y niveles de combustible para monitoreo operativo
- Soporta almacenamiento en búfer fuera de línea para que los registros almacenados se suban cuando se restaure la conectividad
- Permite canales de configuración y comandos remotos cuando el firmware del dispositivo lo soporta

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un único endpoint compartido y detecta automáticamente el protocolo del rastreador según los datos que envía el dispositivo. Cuando un AL-900G apunta al endpoint de Plaspy, normalmente no es necesaria la selección manual del protocolo si el equipo está correctamente configurado para reportar a d.plaspy.com en el puerto 8888.

- Plaspy escucha en el dominio compartido d.plaspy.com que resuelve a 54.85.159.138
- Todos los dispositivos conectados a Plaspy reportan al mismo puerto, por lo que no se requieren cambios de puerto por dispositivo
- Plaspy acepta reportes tanto por UDP como por TCP en el puerto 8888 según la configuración del equipo
- La detección automática evita que el usuario deba elegir un protocolo dentro de Plaspy para la mayoría de modelos de rastreador
- Si un rastreador no logra registrarse, verifique primero los ajustes de reporte del dispositivo y la versión de firmware antes de modificar la configuración de la plataforma

## Transporte y contexto de conexión

El transporte y la dirección de conexión determinan cómo el AL-900G llega a Plaspy, pero no cambian el hecho público de que el dispositivo reporta al mismo endpoint y puerto de Plaspy. Según la capacidad y la configuración del equipo, el AL-900G puede emplear una conexión confiable o un modo de datagramas liviano para entregar la telemetría.

- Los dispositivos pueden configurarse para reportar vía UDP en el puerto 8888 para un reporte de menor sobrecarga
- Los dispositivos pueden configurarse para reportar vía TCP en el puerto 8888 cuando se prefiera una sesión persistente
- El equipo puede apuntar al dominio d.plaspy.com o directamente a la dirección 54.85.159.138 como destino
- Es obligatorio usar el APN y los ajustes GSM correctos en el dispositivo para que el reporte por GPRS alcance a Plaspy
- Problemas a nivel de red como NAT del operador o firewalls pueden afectar la entrega y deben validarse durante la puesta en marcha

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden añadir o eliminar funciones y alterar el contenido o la cadencia de los mensajes
- Las revisiones de hardware a veces cambian las entradas disponibles o el comportamiento aun cuando el nombre del modelo sea el mismo
- Los menús de configuración y los conjuntos de comandos proporcionados por el fabricante pueden variar según el mercado y el firmware
- La preferencia de transporte entre UDP y TCP puede afectar el orden y la entrega de mensajes
- Valide siempre que el dispositivo esté configurado para reportar a d.plaspy.com o a 54.85.159.138 en el puerto 8888
- Confirme si comportamientos específicos, como monitoreo de voz o salida a impresora, requieren firmware particular o accesorios adicionales
- Probar un dispositivo en un entorno controlado antes de un despliegue a gran escala ayuda a reducir sorpresas

## Por qué es importante conocer el protocolo

Comprender cómo se comunica el AL-900G ayuda a asegurar una configuración confiable, una resolución de problemas más rápida y un comportamiento predecible en operación a largo plazo. Conocer el rol del protocolo y la capa de transporte reduce la fricción en la integración y facilita que los equipos mantengan datos de rastreo precisos.

- Acelera la configuración inicial y la validación cuando se despliegan los equipos
- Ayuda a diagnosticar problemas de conectividad confirmando transporte y ajustes de endpoint
- Mejora la configuración de alarmas y sensores al mapear entradas del dispositivo a eventos de la plataforma
- Aclara expectativas sobre el almacenamiento en búfer fuera de línea y la subida de datos después de la recuperación GSM
- Orienta las decisiones de actualización de firmware cuando sea necesario cambiar funciones o comportamientos

## Por qué usar Plaspy con este protocolo

Usar el SinoTrack AL-900G con Plaspy ofrece una vía directa hacia la visibilidad de la flota y el control operativo. Las capacidades de posicionamiento del rastreador, combinadas con el endpoint compartido y la detección automática de protocolos de Plaspy, simplifican la integración para que las organizaciones puedan concentrarse en el análisis y la supervisión diaria en lugar de los detalles de conectividad.

Para conocer más sobre Plaspy y las funciones disponibles al conectar dispositivos como el AL-900G visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la documentación específica del dispositivo en https://www.sinotrackgps.com/ antes de tomar decisiones de configuración o despliegue.
