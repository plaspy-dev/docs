---
slug: /stars_nav/rover_9/protocol
id: rover_9-protocol
sidebar_label: Protocol
title: Stars Nav - Rover 9 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Stars Nav Rover 9 y su comunicación con Plaspy para el seguimiento fiable de flotas
keywords:
  - Protocolo Stars Nav Rover 9
  - Protocolo GPS Rover 9
  - Protocolo rastreador GPS Stars Nav
  - Compatibilidad Rover 9 con Plaspy
  - protocolo rastreo de vehículos
  - seguimiento de flotas Rover 9
  - protocolo de comunicación Rover 9
  - compatibilidad rastreador Plaspy
  - protocolo telemetría Rover 9
  - protocolo rastreador Stars Nav
---

# Stars Nav - Protocolo Rover 9

Esta página describe el contexto público del protocolo para usar el rastreador vehicular Stars Nav Rover 9 con Plaspy. Se centra en cómo se comunica el equipo en términos generales, qué ajustes de conexión espera Plaspy y de qué manera esa comunicación permite el seguimiento en tiempo real y la telemetría dentro de la plataforma Plaspy. La información aquí incluida se limita a aspectos públicos y no sensibles del protocolo y a la integración a nivel de conexión.

El Rover 9 combina un módulo GNSS SiRFstarIII, transporte celular GPRS y capacidad de programación por aire para entregar posición y telemetría a un servicio backend. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Valide siempre los ajustes específicos del equipo con la documentación del fabricante antes del despliegue.

## Visión general del protocolo

El protocolo implementado por el Rover 9 es el método de comunicación del dispositivo que envía fijaciones GPS, alarmas y telemetría analógica a un servidor backend. En la práctica, esto significa que el rastreador empaqueta la posición y los datos de eventos y los envía al endpoint configurado de Plaspy para que Plaspy pueda mostrarlos, almacenarlos y actuar sobre la información.

- Proporciona identificación del equipo para que Plaspy asocie mensajes entrantes con la unidad y el activo correctos
- Transporta datos de posición GPS, velocidad, rumbo y marcas de tiempo para rastreo en vivo e historial
- Transmite alarmas y cambios de estado de entradas como puertas, pánico e inmovilizador para gestión de seguridad
- Envía telemetría analógica como lecturas de combustible o temperatura para monitoreo y reglas
- Soporta actualizaciones de configuración por aire y comandos remotos cuando el firmware del fabricante lo permite

## Cómo detecta Plaspy el protocolo

Plaspy escucha las conexiones de los rastreadores en el endpoint compartido y determina automáticamente el protocolo entrante, de modo que los usuarios rara vez necesitan seleccionar manualmente un protocolo dentro de Plaspy. La principal condición para la detección e ingestión automática es que el dispositivo esté configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138 usando el puerto 8888
- El equipo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la configuración de la red
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la incorporación de equipos
- Plaspy detecta automáticamente el protocolo del rastreador cuando el equipo informa al endpoint de Plaspy
- En configuraciones típicas, el usuario no necesita elegir manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al endpoint mencionado

## Transporte y contexto de conexión

El contexto de conexión se centra en cómo el Rover 9 alcanza el endpoint de Plaspy a través de la red móvil y qué debe configurar el instalador en el equipo. El Rover 9 utiliza transporte celular GPRS en la mayoría de las implementaciones y soporta modos de reposo para reducir consumo de datos y energía.

- Los dispositivos pueden apuntar al dominio del servidor Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138
- El equipo puede configurarse usando UDP o TCP en el puerto 8888; elija el transporte que prefiera el firmware del dispositivo y su red
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, lo que simplifica la configuración y las reglas de firewall
- La conectividad celular GPRS transporta los reportes del rastreador hacia Plaspy y los modos de reposo o bajo consumo afectan la cadencia de envío
- La programación por aire y la configuración remota dependen del transporte fiable hacia el endpoint configurado

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar comportamientos como el transporte por defecto, intervalos de latidos y campos de telemetría disponibles
- Las revisiones de hardware o variantes regionales del Rover 9 pueden implementar ajustes por defecto o entradas soportadas diferentes
- La configuración o el aprovisionamiento realizado por el fabricante pueden modificar las cadenas o los valores de servidor que el dispositivo utiliza para reportar
- Elegir UDP o TCP puede afectar la confiabilidad y la latencia según las condiciones de la red móvil
- Valide el APN del dispositivo, la dirección del servidor y el transporte con la documentación de Stars Nav antes de un despliegue masivo
- Pruebe un equipo en un entorno controlado para confirmar que Plaspy recibe los eventos y la telemetría esperados

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación ayuda a los instaladores y administradores de flotas a garantizar reportes confiables, facilitar la resolución de problemas y prever el comportamiento durante la vida útil del despliegue. Saber qué datos envía el Rover 9 y cómo Plaspy los espera reduce fricciones de integración y mantiene la visibilidad operativa.

- Asegura que se apliquen los ajustes correctos de servidor y transporte para que los equipos alcancen Plaspy de forma consistente
- Ayuda a diagnosticar reportes perdidos al diferenciar problemas de conectividad de errores de configuración del dispositivo
- Orienta sobre la telemetría disponible para Plaspy, como entradas analógicas o eventos de alarma
- Apoya la planificación del consumo de energía y datos cuando los equipos usan modos de reposo o intervalos de reporte bajos
- Aclara el alcance de la configuración remota y las actualizaciones por aire que soporta el rastreador

## Por qué usar Plaspy con este protocolo

Usar el Stars Nav Rover 9 con Plaspy ofrece una vía práctica para convertir fijaciones GPS y telemetría vehicular en información de flota accionable. Plaspy ingiere posición, alarmas y telemetría analógica de dispositivos que reportan a d.plaspy.com y presenta esos datos en paneles, alertas e informes históricos para ayudar a los equipos a monitorear activos, responder a eventos y analizar tendencias operativas.

Si desea saber más sobre Plaspy y cómo funciona con dispositivos como el Rover 9, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente del protocolo y las notas de firmware con el fabricante en http://www.starsnav.com/.
