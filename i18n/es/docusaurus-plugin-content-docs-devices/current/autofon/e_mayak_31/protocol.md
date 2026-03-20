---
slug: /autofon/e_mayak_31/protocol
id: e_mayak_31-protocol
sidebar_label: Protocol
title: AutoFon - E-Mayak 3.1 Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas de integración del rastreador AutoFon E-Mayak 3.1 para compatibilidad con Plaspy
keywords:
  - protocolo AutoFon E-Mayak 3.1
  - protocolo GPS AutoFon E-Mayak 3.1
  - protocolo AutoFon compatible Plaspy
  - rastreador SMS E-Mayak 3.1
  - protocolo de rastreo AutoFon
  - dispositivos compatibles con Plaspy
  - integración SMS rastreador GPS
  - rastreo de vehículos AutoFon
  - rastreo de activos E-Mayak
  - guía de protocolo de rastreador
---

# AutoFon - Protocolo E-Mayak 3.1

Esta página ofrece contexto público sobre el protocolo para integrar el rastreador AutoFon E-Mayak 3.1 con la plataforma Plaspy. Se centra en los métodos de comunicación que probablemente encontrará al agregar este modelo a Plaspy y en cómo la plataforma consume y reconoce los reportes del dispositivo en términos prácticos y no sensibles.

El E-Mayak 3.1 es, ante todo, un dispositivo orientado a SMS: reporta ubicación y telemetría mediante mensajes SMS en lugar de transmisión continua por GPRS. Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los equipos están configurados para reportar al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda consultar la documentación oficial del fabricante para detalles específicos del dispositivo.

## Resumen del protocolo

El E-Mayak 3.1 comunica ubicación, estado y telemetría básica mediante mensajes SMS y enlaces de mapa. En el contexto de Plaspy, el propósito del protocolo es proporcionar información identificable y datos de posición o estado que puedan ser reenviados o mapeados en la plataforma para visualización, alertas y registro histórico.

- Envía coordenadas GPS y enlaces de mapa por SMS que pueden ser analizados o reenviados a los flujos de trabajo de Plaspy.
- Reporta telemetría como nivel de batería, temperatura, SMS de latido (heartbeat) y alertas de saldo de SIM para monitoreo básico.
- Utiliza numeración secuencial de SMS y textos de estado que ayudan a correlacionar mensajes en los registros y paneles de Plaspy.
- Soporta comandos por SMS y configuración protegida con PIN para gestión remota del dispositivo.
- Opera en modos de suspensión profunda y reporte bajo demanda para maximizar la vida útil de la batería, lo que influye en la frecuencia y el momento de llegada de los mensajes.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo de reporte del rastreador cuando el dispositivo está configurado para enviar datos al endpoint de Plaspy. Para dispositivos orientados a SMS como el E-Mayak 3.1, la detección suele ocurrir cuando Plaspy recibe el contenido de SMS reenviados o las coordenadas introducidas a través de los canales de entrada soportados.

- El endpoint del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, que son los objetivos públicos de conexión de Plaspy.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan el mismo puerto para reportes en red.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita seleccionar un protocolo manualmente si el dispositivo está reportando al endpoint de Plaspy.
- Para dispositivos basados en SMS, Plaspy acepta texto de SMS reenviados y enlaces de mapa a través de canales de entrada estándar para que la plataforma extraiga coordenadas y telemetría.
- Identificadores de dispositivo correctamente formateados y contenido de mensajes consistente mejoran la detección automática y el mapeo en los registros de dispositivos de Plaspy.

## Contexto de transporte y conexión

Aunque el E-Mayak 3.1 está centrado en SMS y no suele proporcionar telemetría IP continua en configuraciones habituales, Plaspy soporta tanto reportes UDP como TCP en un puerto compartido para los rastreadores que sí usan transporte IP. Comprender las opciones de transporte disponibles ayuda a planificar cómo el dispositivo alimentará datos a Plaspy.

- Plaspy acepta conexiones UDP o TCP en el puerto 8888 según el soporte y la configuración del dispositivo.
- Dispositivos o pasarelas SMS que reenvían mensajes a Plaspy pueden apuntar al dominio d.plaspy.com o a la dirección IP 54.85.159.138 en el puerto 8888.
- El E-Mayak 3.1 normalmente se integra mediante reenvío de SMS o entrada manual de enlaces de mapa porque no usa, por lo general, reportes IP continuos por GPRS.
- Para dispositivos que sí soportan reportes IP, usar el puerto compartido de Plaspy simplifica la configuración entre varios modelos.
- Confirme el método de transporte al configurar una pasarela SMS a API o al evaluar soluciones alternativas de reenvío para dispositivos que solo usan SMS.

## Notas sobre compatibilidad del protocolo

- El E-Mayak 3.1 prioriza SMS y no proporciona telemetría GPRS continua en configuraciones típicas; planifique la integración alrededor del reenvío de SMS o métodos de entrada manual.
- Las revisiones de firmware y las opciones de configuración del fabricante pueden cambiar los formatos de mensaje, la telemetría disponible y los comandos de control con el tiempo.
- Revisiones de hardware o variantes regionales pueden alterar bandas soportadas, contenido de SMS o campos de telemetría; verifique el etiquetado exacto del modelo y los datos de serie al diagnosticar problemas.
- La selección del transporte es importante para dispositivos que soportan reportes IP; Plaspy usa el mismo puerto para todos los dispositivos, lo que reduce la complejidad de configuración por equipo.
- Si usted depende de pasarelas SMS a API, valide que la pasarela preserve el contenido original del SMS y los identificadores necesarios para una coincidencia confiable de dispositivos en Plaspy.
- Siempre contraste los pasos de integración con la documentación oficial del fabricante para el comportamiento específico del modelo.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el E-Mayak 3.1 ayuda a asegurar una configuración confiable, un mapeo preciso en Plaspy y una resolución de problemas eficaz cuando los mensajes se retrasan o faltan. Entender el modelo de comunicación reduce la fricción en la integración y establece expectativas sobre la cadencia de reportes y la disponibilidad de telemetría.

- Ayuda a determinar si el reenvío de SMS, el parseo en pasarela o la entrada manual de enlaces es la mejor vía de integración para su flujo de trabajo.
- Aclara los intervalos de reporte esperados dada la conducta de suspensión profunda del dispositivo y las configuraciones de SMS de latido.
- Facilita la correlación de mensajes entrantes con el dispositivo correcto cuando los mensajes incluyen números secuenciales o identificadores del propietario.
- Ayuda en la resolución de problemas de cobertura al distinguir posicionamiento GPS de reportes por LBS celular como respaldo.
- Apoya decisiones operativas sobre umbrales de alerta y acciones de mantenimiento basadas en telemetría.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con el AutoFon E-Mayak 3.1 es una opción práctica cuando su caso de uso valora larga duración de batería, instalaciones discretas y consultas de ubicación bajo demanda. Plaspy puede ingerir coordenadas y telemetría reenviadas por SMS o recibir entrada mediante integraciones con pasarelas SMS, ofreciendo mapeo, registros históricos y alertas básicas adecuados para recuperación ante robo y monitoreo de bajo mantenimiento.

Si desea conocer más sobre cómo Plaspy maneja integraciones de dispositivos y las funcionalidades disponibles para rastreadores orientados a SMS, visite https://www.plaspy.com. Para notas específicas del protocolo del dispositivo, comportamiento de firmware y detalles de implementación más recientes, verifique la información con el fabricante en https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
