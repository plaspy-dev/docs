---
slug: /cantrack/gt06/protocol
id: gt06-protocol
sidebar_label: Protocol
title: CanTrack - GT06 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para usar el rastreador GPS CanTrack GT06 con Plaspy y ajustes de conexión comunes
keywords:
  - Protocolo CanTrack GT06
  - Protocolo GPS GT06
  - CanTrack GT06 en Plaspy
  - Protocolo de comunicación GT06
  - Protocolo de rastreador GPS CanTrack
  - Protocolo de seguimiento GT06
  - Integración de dispositivo Plaspy
  - Protocolo de rastreo de vehículos
  - Compatibilidad de rastreadores GPS
  - Protocolo de rastreo GPRS
---

# CanTrack - Protocolo GT06

Esta página resume el contexto público del protocolo para usar el rastreador CanTrack GT06 con Plaspy. Se enfoca en cómo el dispositivo suele reportar posición y estado a través de la red celular y cómo esos reportes son procesados por un endpoint de servidor de Plaspy. El GT06, también comercializado como TK100, utiliza GSM GPRS y GPS para enviar actualizaciones de ubicación, alertas por SMS y funciones opcionales como alarma de exceso de velocidad y SOS, que comúnmente se reenvían a una plataforma de rastreo.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo comienza a reportar en la plataforma. El comportamiento exacto del protocolo y los mensajes soportados pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página ofrece orientación general sobre transporte e integración más que referencias de comandos específicas de firmware.

## Resumen general del protocolo

El protocolo implementado por la familia GT06 es el método de comunicación del dispositivo que permite enviar datos de ubicación, estado y alarmas desde el rastreador hacia un servidor remoto. En la práctica esto significa que el equipo abre una sesión de datos por GPRS y transmite mensajes con formato regular a un endpoint en internet para monitoreo en tiempo real y registro histórico.

- Permite al rastreador transmitir coordenadas GPS y actualizaciones de estado con sello de tiempo a un servidor remoto para mapeo e informes
- Transporta notificaciones de eventos y alarmas como SOS, exceso de velocidad y pérdida de energía para que puedan mostrarse en Plaspy
- Incluye un elemento de identificación para que la plataforma asocie los mensajes entrantes con un dispositivo específico
- Habilita la configuración remota o cambios en el reporte al servidor cuando la unidad y el firmware del fabricante lo soportan
- Soporta tanto reportes periódicos de posición como reportes por demanda o impulsados por eventos según la configuración

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartidos, y aplica detección automática de protocolo para asociar cada dispositivo con el parser y la lógica de almacenamiento correctos. En la mayoría de los casos un GT06 configurado correctamente comenzará a enviar datos al endpoint de Plaspy y la plataforma identificará el tipo de dispositivo sin necesidad de seleccionar manualmente el protocolo.

- El dominio del servidor Plaspy es d.plaspy.com al que los dispositivos pueden apuntar para reportar
- La IP del servidor Plaspy es 54.85.159.138 y se proporciona para dispositivos que requieren una dirección numérica en lugar de un dominio
- El puerto es 8888 y Plaspy utiliza el mismo puerto para todos los dispositivos soportados
- Plaspy detecta automáticamente el protocolo del rastreador por lo que normalmente no es necesario elegir un protocolo dentro de la plataforma
- Si el dispositivo está correctamente configurado para reportar al endpoint de Plaspy, normalmente será reconocido y comenzará a enviar posiciones y eventos

## Contexto de transporte y conexión

Las unidades GT06 envían datos por el enlace celular a un servidor remoto usando sesiones de datos GPRS. Dependiendo del firmware del dispositivo y de la configuración, el rastreador puede abrir una conexión UDP o TCP hacia el endpoint configurado. Estas opciones de transporte afectan el comportamiento de la conexión pero no el propósito general del protocolo, que es entregar datos GPS y de alarma al servidor.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte y configuración del equipo
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la dirección numérica 54.85.159.138
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del endpoint
- GPRS es el portador común para reportes en tiempo real mientras que SMS sigue disponible para alertas o ubicación básica
- La selección de transporte (UDP frente a TCP) puede afectar la fiabilidad y la reensamblación pero es una configuración del lado del dispositivo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los formatos de mensaje o las funciones disponibles, por lo que el comportamiento puede variar entre unidades
- Revisiones de hardware y funciones opcionales como llamada bidireccional o salidas de relé pueden afectar qué eventos se reportan
- La configuración por defecto del fabricante puede apuntar a un servidor distinto; confirme y actualice el endpoint de reporte a d.plaspy.com o 54.85.159.138 si es necesario
- Algunas unidades soportan solo un modo de transporte por defecto mientras que otras pueden alternar entre UDP y TCP
- Valide la configuración y el reporte en un dispositivo de prueba antes de un despliegue a gran escala
- Consulte las notas de versión del fabricante para cambios de firmware que puedan afectar la interoperabilidad

## Por qué es importante entender el protocolo

Comprender cómo se comunica el GT06 ayuda a reducir el tiempo de configuración, facilita la resolución de problemas y asegura un seguimiento confiable a largo plazo. Conocer el flujo básico de reportes y las opciones de transporte facilita confirmar que el dispositivo está llegando a Plaspy y que los eventos esperados son visibles en la plataforma.

- Identificación más rápida de datos dirigidos a un endpoint o IP incorrectos
- Expectativas claras sobre qué alarmas y telemetría enviará una revisión de firmware determinada
- Mejores pasos diagnósticos cuando los dispositivos parecen fuera de línea, como verificar la configuración UDP versus TCP
- Planificación más sólida para actualizaciones de firmware y despliegues de hardware en una flota
- Capacidad para documentar el comportamiento del dispositivo para equipos operativos e integradores

## Por qué usar Plaspy con este protocolo

Usar una plataforma de flotas como Plaspy con la familia CanTrack GT06 proporciona visibilidad centralizada de posición, alertas e historial de eventos en múltiples unidades. El GT06 ofrece funciones estándar de rastreo vehicular mientras Plaspy recoge, almacena y presenta esos datos a operadores y gerentes para monitoreo, informes y toma de decisiones operativas. Dado que Plaspy utiliza un único endpoint compartido y detección automática de protocolos, la integración de dispositivos GT06 suele ser sencilla una vez que el rastreador está configurado para reportar al servidor correcto.

Para saber más sobre Plaspy y cómo maneja la conectividad de dispositivos visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolos, el comportamiento del firmware y los detalles de los dispositivos del fabricante pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware específico con CanTrack en https://www.cantrackgps.com/
