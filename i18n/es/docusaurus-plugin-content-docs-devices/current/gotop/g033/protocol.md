---
slug: /gotop/g033/protocol
id: g033-protocol
sidebar_label: Protocol
title: GOTOP - G033 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar GOTOP G033 con Plaspy, incluyendo ajustes de servidor y contexto de comunicación
keywords:
  - protocolo GOTOP G033
  - protocolo GPS GOTOP G033
  - protocolo de comunicación GOTOP G033
  - protocolo de rastreo GOTOP G033
  - compatibilidad GOTOP G033 Plaspy
  - protocolo rastreador GPS GOTOP
  - protocolo de dispositivo Plaspy
  - rastreador GPS GPRS
  - rastreador GPS personal
  - protocolo de rastreo de activos
---

# GOTOP - Protocolo G033

Esta página ofrece el contexto público del protocolo para usar el rastreador Name Card GOTOP G033 con Plaspy. Describe de forma general cómo se comunica el dispositivo con el backend de Plaspy, qué ajustes de conexión se emplean y cómo el comportamiento del protocolo afecta el uso cotidiano e integración. El objetivo es ayudar a operadores, integradores y usuarios técnicos a comprender el rol del protocolo del dispositivo sin revelar detalles privados de implementación.

El G033 es un rastreador tipo tarjeta ultra compacto que soporta GSM cuatribanda, posicionamiento multimodo, monitoreo de voz y múltiples métodos de reporte incluyendo GPRS y SMS. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público de comunicación necesario para una integración confiable con Plaspy.

## Resumen del protocolo

El protocolo del G033 define cómo el dispositivo informa ubicación, telemetría y notificaciones de eventos a un servidor remoto como Plaspy. En la práctica, el protocolo es el conjunto de reglas que el equipo sigue para identificarse, transmitir actualizaciones de posición y enviar alertas que Plaspy puede mostrar a los usuarios. Esta visión general mantiene la discusión en un nivel de uso en lugar de describir formatos internos de paquetes.

- Permite transmisiones periódicas y por evento de datos de ubicación y estado desde el dispositivo hacia el servidor.
- Proporciona información de identificador y sesión para que el backend de Plaspy pueda asociar los reportes con el registro de dispositivo correcto.
- Soporta rutas de reporte alternativas usadas por el equipo, como enlaces por SMS para compartir ubicación rápidamente cuando no hay GPRS.
- Trabaja junto con el posicionamiento multimodo (GPS, LBS, WiFi, AGPS) para elegir la fuente de ubicación más adecuada en cada reporte.
- Permite que el dispositivo envíe alertas y actualizaciones diagnósticas que Plaspy presenta como notificaciones o eventos en el mapa.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores y determinar automáticamente qué protocolo usa un dispositivo una vez que se conecta al endpoint compartido de Plaspy. Esta detección simplifica la configuración para la mayoría de los usuarios: si el G033 está configurado para reportar a Plaspy, normalmente no se requiere seleccionar el protocolo manualmente dentro de la plataforma.

- Plaspy acepta conexiones de dispositivos en el dominio d.plaspy.com y en la dirección pública 54.85.159.138.
- Todos los dispositivos de Plaspy usan el mismo puerto de red, el puerto 8888, lo que facilita la configuración entre distintos modelos.
- Los equipos pueden configurarse para comunicarse por UDP o TCP al puerto 8888 según la capacidad y ajustes del dispositivo.
- Cuando el G033 reporta al endpoint de Plaspy con los ajustes de conexión correctos, Plaspy detectará automáticamente el protocolo y asociará los mensajes entrantes con el dispositivo.
- El flujo típico de usuario es establecer el endpoint de reporte del G033 a Plaspy y confirmar conectividad; Plaspy se encarga entonces de la interpretación y mapeo de los mensajes.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el dispositivo llega a Plaspy en la red y qué opciones de capa de transporte están disponibles. Entender estas opciones ayuda a garantizar que el G033 entregue actualizaciones a Plaspy de forma confiable en diferentes condiciones de cobertura.

- El G033 puede enviar datos por GPRS a un servidor de rastreo y puede configurarse para transporte UDP o TCP en el puerto 8888.
- Plaspy escucha en el puerto 8888 para todos los dispositivos compatibles, de modo que se usa el mismo puerto independientemente del modelo.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la dirección del servidor 54.85.159.138 según la preferencia del usuario o el comportamiento del DNS.
- Cuando no hay GPRS disponible, el G033 puede proporcionar respuestas de ubicación por SMS, útiles para acceder rápidamente a un enlace de Google Maps o para ubicación de emergencia cuando los datos son limitados.
- Elija TCP o UDP según las opciones de configuración del dispositivo y el comportamiento de la red; Plaspy acepta conexiones por cualquiera de los dos transportes al mismo puerto.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre lotes de producción o actualizaciones posteriores pueden cambiar cómo se comportan ciertos comandos e intervalos de reporte; siempre verifique las notas de lanzamiento del firmware cuando estén disponibles.
- Las revisiones de hardware pueden agregar o eliminar capacidades como sensores adicionales, funciones de voz o modos de posicionamiento que afectan los datos que el dispositivo envía.
- El G033 soporta múltiples modos de posicionamiento; la disponibilidad y prioridad de GPS, LBS y WiFi puede variar según el entorno y la política de firmware.
- La selección de transporte (TCP versus UDP) depende de la configuración del equipo; asegúrese de que el transporte elegido coincida con los ajustes del G033 y el entorno de red.
- El reporte por SMS es un respaldo útil pero no reemplaza la telemetría continua por GPRS para monitoreo en vivo y reproducción histórica en Plaspy.
- Valide cualquier detalle de integración con la plataforma consultando la documentación del fabricante para el número de serie del dispositivo y la versión de firmware específica.

## Por qué es importante entender el protocolo

Conocer los fundamentos del protocolo de comunicación del G033 y el contexto de conexión ayuda a los operadores a configurar los dispositivos correctamente, solucionar problemas de conectividad con rapidez y planificar la fiabilidad a largo plazo. Una comprensión práctica reduce errores de configuración y ayuda a los equipos a decidir cuándo aplicar actualizaciones de firmware o ajustar parámetros de reporte.

- Asegura que el dispositivo apunte al endpoint correcto de Plaspy y use el transporte y puerto adecuados.
- Ayuda a diagnosticar por qué un equipo puede aparecer fuera de línea si solo usa SMS, tiene APN incorrecto o está configurado con el transporte equivocado.
- Orienta sobre decisiones relacionadas con la frecuencia de reporte y los compromisos de vida útil de batería según la periodicidad de las transmisiones a Plaspy.
- Aclara expectativas sobre la precisión de la ubicación y el comportamiento de respaldo cuando no hay GPS y se emplean LBS o WiFi.
- Facilita la coordinación de la solución de problemas con el soporte del fabricante al proporcionar información precisa sobre firmware y ajustes de red.

## Por qué usar Plaspy con este protocolo

Usar el GOTOP G033 con Plaspy ofrece a los equipos una vía práctica para el rastreo discreto de personas y activos con posicionamiento multimodo, monitoreo de voz y reproducción histórica. Plaspy consolida los reportes de ubicación en tiempo real del G033, las alertas y los datos de eventos registrados para que los operadores puedan monitorear personas y activos sensibles con visibilidad y contexto.

El enfoque de endpoint unificado de Plaspy simplifica la configuración del dispositivo porque todos los rastreadores compatibles usan el mismo puerto y la plataforma detecta automáticamente el protocolo del equipo. Si desea conocer más sobre cómo Plaspy gestiona las integraciones de rastreadores GPS y las capacidades de la plataforma, visite https://www.plaspy.com. Para obtener detalles específicos del protocolo del dispositivo, notas de firmware y orientación oficial de implementación, verifique la información en el sitio del fabricante https://www.gotop.cc/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
