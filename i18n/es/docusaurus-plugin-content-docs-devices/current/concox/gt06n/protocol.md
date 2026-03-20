---
slug: /concox/gt06n/protocol
id: gt06n-protocol
sidebar_label: Protocol
title: Concox - GT06N Protocol
sidebar_class_name: menu_item_tracker
description: Información pública del protocolo Concox GT06N y cómo se comunica con Plaspy para seguimiento vehicular y telemetría confiables
keywords:
  - protocolo Concox GT06N
  - protocolo GPS Concox GT06N
  - compatibilidad GT06N Plaspy
  - protocolo de rastreo GT06N
  - protocolo rastreador GPS Concox
  - protocolo de seguimiento vehicular
  - protocolo GPS para gestión de flotas
  - rastreadores compatibles con Plaspy
  - comunicación de telemetría GT06N
  - guía del protocolo Concox
---

# Concox - Protocolo GT06N

Esta página ofrece contexto público sobre el protocolo usado por el rastreador Concox GT06N cuando se integra con Plaspy. Describe, a alto nivel, cómo el equipo comunica con el endpoint de ingestión de Plaspy y qué papel tiene el protocolo de reporte del rastreador para entregar ubicaciones, estados y eventos a la plataforma. El contenido se centra en la comunicación y la compatibilidad, no en detalles internos de firmware ni en paquetes propietarios.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí es descriptiva y orientada a la configuración y solución de problemas, sin sustituir la documentación del proveedor.

## Resumen del protocolo

El protocolo del GT06N define cómo la unidad reporta coordenadas GNSS, estados de entradas digitales, alarmas y telemetría a un servidor remoto para que plataformas como Plaspy puedan mostrar, analizar y actuar sobre esos datos. Para la integración con Plaspy, los aspectos públicos del protocolo son la capacidad del dispositivo de apuntar al endpoint de Plaspy y de enviar mensajes periódicos de posición y eventos.

- Permite que el GT06N transmita posición GNSS, estado de ignición y entradas, y eventos de alarma a un servidor remoto.
- Facilita que el dispositivo se identifique para que Plaspy asocie los datos entrantes con un activo registrado.
- Transporta telemetría en tiempo real y periódica que Plaspy utiliza para supervisión en vivo y reproducción histórica.
- Soporta alertas basadas en eventos (SOS, pérdida de alimentación, exceso de velocidad, geocerca, vibración) que alimentan las reglas de notificación de Plaspy.
- Proporciona un canal predecible para comandos remotos y control cuando el dispositivo y la plataforma lo soportan.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para conexiones entrantes de dispositivos y detecta automáticamente el protocolo del rastreador cuando el GT06N reporta a ese endpoint. En la mayoría de los casos, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el rastreador está configurado para reportar al servidor de Plaspy.

- Plaspy server domain for device reporting is d.plaspy.com.
- Plaspy server IP is 54.85.159.138 and the platform accepts device connections on port 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP como capa de transporte al reportar.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración.
- Cuando un GT06N correctamente configurado empieza a reportar, Plaspy detectará el formato y asociará los mensajes con el registro de dispositivo correspondiente.

## Transporte y contexto de conexión

El contexto de conexión describe cómo el GT06N alcanza a Plaspy más que la estructura interna de los paquetes. El GT06N puede configurarse para apuntar a un nombre de host o a una IP y para usar TCP o UDP según lo permita la unidad y su firmware. Asegurar el transporte y el objetivo del servidor correctos es un paso clave para que el rastreador se comunique de forma fiable con Plaspy.

- El GT06N puede configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138.
- Plaspy acepta conexiones UDP y TCP de dispositivos que soporten cualquiera de los dos transportes en el puerto 8888.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que reduce errores de configuración en flotas mixtas.
- Factores de red como NAT del operador, reglas de firewall y conectividad de datos SIM afectan la estabilidad de la conexión y deben verificarse durante la instalación.
- Confirme los intervalos de reporte y la configuración de eventos en el GT06N para que coincidan con sus necesidades operativas de flota y para controlar el uso de datos del SIM.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden alterar el formato de mensajes o los campos presentes; verifique las notas de la versión de firmware para comportamientos específicos del dispositivo.
- Las revisiones de hardware u opciones de accesorios pueden cambiar las entradas, salidas o capacidades de reporte de periféricos disponibles.
- Algunas funciones, como control remoto de relés o monitoreo de voz, dependen tanto del hardware del dispositivo como del soporte del firmware del fabricante.
- La selección del transporte (UDP vs TCP) puede afectar la semántica de entrega; elija el modo que coincida con la configuración del dispositivo y el entorno del operador.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al puerto compartido, pero el objetivo del servidor y el transporte deben estar correctamente configurados en el rastreador.
- Siempre valide la compatibilidad y el comportamiento esperado contra la documentación oficial de Concox para la revisión de dispositivo y firmware exactas.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GT06N ayuda a instaladores y administradores a evitar problemas comunes de configuración, interpretar correctamente los datos entrantes en Plaspy y solucionar eficientemente incidencias de conectividad o reporte. Una comprensión clara del contexto de comunicación reduce el tiempo de inactividad y mejora la calidad de los datos de ubicación y eventos utilizados en las operaciones.

- Asegura que el dispositivo apunte al endpoint y modo de transporte correctos en Plaspy para un reporte fiable.
- Facilita el diagnóstico de problemas de conectividad causados por redes de operador, ajustes de APN o firewalls.
- Permite decisiones informadas sobre intervalos de reporte, gestión de energía y umbrales de eventos para equilibrar frescura de datos y consumo de SIM.
- Aclara qué telemetría y tipos de alertas aparecerán en Plaspy según capacidades de firmware y hardware.
- Apoya una integración más fluida al desplegar flotas mixtas con distintos modelos o revisiones de rastreadores.

## Por qué usar Plaspy con este protocolo

Usar el GT06N con Plaspy ofrece a las organizaciones una vía práctica para obtener visibilidad vehicular en tiempo real, alertas basadas en eventos y supervisión centralizada de la flota. El conjunto de entradas, alarmas y opciones de control remoto del GT06N se alinea con los motores de monitoreo, reporte y reglas de Plaspy para soportar flujos de trabajo comunes de flota como respuesta ante robo, reporte por ignición y registro de incidentes.

Si desea conocer más sobre Plaspy y cómo funciona con dispositivos como el GT06N, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y orientación del fabricante más actual, verifique la información en el sitio de Concox en https://www.iconcox.com/ ya que las implementaciones y el comportamiento del firmware pueden cambiar con el tiempo.
