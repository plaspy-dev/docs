---
slug: /queclink/gv65_plus/protocol
id: gv65_plus-protocol
sidebar_label: Protocol
title: QuecLink - GV65 Plus Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del QuecLink GV65 Plus para comunicarse con el servidor Plaspy en seguimiento y telemetría
keywords:
  - Protocolo QuecLink GV65 Plus
  - Compatibilidad GV65 Plus Plaspy
  - Protocolo GPS QuecLink
  - Comunicación GV65 Plus
  - Protocolo rastreador GPS Plaspy
  - Protocolo rastreo de vehículos
  - Protocolo GPS gestión de flotas
  - Protocolo seguimiento GV65 Plus
  - Compatibilidad protocolo QuecLink
  - Protocolo dispositivo Plaspy
---

# QuecLink - Protocolo GV65 Plus

Esta página describe el contexto público del protocolo para usar el rastreador QuecLink GV65 Plus con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, de modo que integradores y gestores de flota comprendan las expectativas de conexión, las opciones de transporte y por qué el contexto del protocolo es clave para un despliegue exitoso.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en el GV65 Plus puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se mantiene a un nivel general y enlaza los hechos de conexión clave de Plaspy usados para la configuración del dispositivo.

## Resumen del protocolo

El protocolo de comunicación del GV65 Plus define cómo el equipo envía información de posición, telemetría y eventos a un servidor remoto y cómo se pueden aplicar comandos remotos o control de salidas cuando está soportado. Al integrarse con Plaspy, el protocolo permite que el rastreador entregue de forma fiable fijaciones de posición utilizables y señales del vehículo que se reflejan en los paneles y alertas de Plaspy.

- Permite el envío periódico y por eventos de la posición GPS, estado del dispositivo y eventos de E/S a una plataforma remota.
- Proporciona identificación y contexto de sesión para que Plaspy pueda asociar los mensajes entrantes con el vehículo o activo correcto.
- Transporta elementos de telemetría como estado de encendido, entradas digitales, lecturas analógicas, eventos del acelerómetro y mensajes en búfer para conectividad intermitente.
- Soporta múltiples transportes y modos de reporte para que el dispositivo pueda configurarse según las condiciones de la red y los requisitos del backend.
- Permite la gestión remota y el control de salidas cuando el dispositivo y la política de despliegue permiten comandos remotos.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes de dispositivos en un endpoint compartido y utiliza detección automática para emparejar el tráfico entrante con un protocolo de rastreador soportado. En la mayoría de los despliegues no es necesario seleccionar manualmente un protocolo dentro de Plaspy si el GV65 Plus está configurado para reportar al endpoint de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy usada para endpoints de dispositivos es 54.85.159.138
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y tráfico de control
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta al endpoint de Plaspy
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos

## Transporte y contexto de conexión

Las decisiones de conexión son una parte práctica para que el GV65 Plus funcione de forma fiable con Plaspy. El GV65 Plus soporta opciones de transporte comunes y puede configurarse para apuntar al endpoint de Plaspy usando el dominio del servidor o la IP numérica, según su red y flujo de aprovisionamiento.

- El dispositivo puede configurarse para usar UDP o TCP para enviar reportes a Plaspy en el puerto 8888
- Los equipos pueden apuntar al endpoint de Plaspy usando el nombre de dominio d.plaspy.com o la IP del servidor 54.85.159.138
- El puerto 8888 es el puerto común usado por todos los dispositivos en Plaspy, lo que reduce la variación de configuración entre modelos
- Elija TCP o UDP según las necesidades de su despliegue en cuanto a fiabilidad, latencia y comportamiento de la red del operador
- Confirme que el APN del operador y las reglas de firewall permitan tráfico saliente hacia el endpoint de Plaspy en el puerto 8888

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el contenido de los mensajes y las funciones disponibles, por lo que verifique el nivel de firmware antes de asumir comportamientos
- Las revisiones de hardware y módulos accesorios, como adaptadores CAN, pueden afectar la telemetría disponible y el mapeo de E/S
- Algunos modos de reporte pueden depender de SMS u otros transportes además de TCP o UDP, según la configuración del dispositivo
- La configuración por parte del fabricante o versiones regionales de firmware pueden introducir diferencias en campos o comandos disponibles
- Use el endpoint compartido de Plaspy y la detección automática para simplificar la puesta en marcha, pero valide que el dispositivo realmente esté enviando reportes tras la configuración
- Al integrar entradas avanzadas como CAN o sensores personalizados, confirme los mapeos con la documentación oficial de QuecLink

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación del GV65 Plus ayuda en la configuración inicial, la resolución de problemas y a garantizar la calidad de datos a largo plazo para las operaciones de flota. Conocer las expectativas de conexión y qué envía el rastreador facilita la verificación de una integración exitosa con Plaspy y el diagnóstico de problemas cuando se presentan.

- Acelera la configuración al alinear el modo de reporte del dispositivo con las expectativas de conexión de Plaspy
- Ayuda a identificar problemas de transporte como puertos bloqueados o configuraciones APN incorrectas
- Aclara qué telemetría y eventos puede o no puede enviar el dispositivo según el firmware
- Facilita la validación del comportamiento de mensajes en búfer para casos de conectividad intermitente
- Reduce la ambigüedad al confirmar la identidad del dispositivo y la asociación de mensajes en Plaspy

## Por qué usar Plaspy con este protocolo

Usar el GV65 Plus con Plaspy ofrece beneficios prácticos para organizaciones que requieren visibilidad persistente, alertas y telemetría vehicular. El diseño compacto del rastreador, su batería interna de respaldo y E/S flexibles lo convierten en una buena opción para antirobo, monitoreo de conductores y telemetría basada en combustible o CAN, mientras que Plaspy provee el backend necesario para ingerir y actuar sobre esos datos.

Plaspy centraliza los reportes entrantes de dispositivos configurados para usar el endpoint de Plaspy y detecta automáticamente el protocolo del rastreador para que los equipos puedan enfocarse en los casos de uso operativos en lugar de seleccionar el protocolo por dispositivo. Para saber más sobre Plaspy y cómo gestiona la conectividad de dispositivos, visite https://www.plaspy.com. Verifique siempre los detalles específicos del protocolo del dispositivo, el comportamiento del firmware y la documentación del fabricante en el sitio de QuecLink https://www.queclink.com/ ya que el soporte de protocolo y las implementaciones pueden cambiar con el tiempo.
