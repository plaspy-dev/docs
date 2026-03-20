---
slug: /gotop/w10sa/protocol
id: w10sa-protocol
sidebar_label: Protocol
title: GOTOP - W10SA Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo GOTOP W10SA y cómo se comunica con Plaspy usando ajustes compartidos y detección automática
keywords:
  - Protocolo GOTOP W10SA
  - Protocolo GPS GOTOP W10SA
  - Compatibilidad W10SA Plaspy
  - Protocolo de rastreo GOTOP
  - Protocolo de comunicaciones W10SA
  - Protocolo rastreador GPS GOTOP
  - Integración de dispositivo Plaspy
  - Rastreador personal GPS W10SA
  - Telemetría W10SA
  - Integración de seguimiento GOTOP W10SA
---

# GOTOP - Protocolo W10SA

Esta página describe el contexto público del protocolo para usar el rastreador personal GOTOP W10SA con la plataforma Plaspy. Se centra en cómo el dispositivo envía telemetría y notificaciones de alarma a Plaspy en términos generales, de modo que operadores e integradores comprendan las expectativas de conexión y los puntos clave de compatibilidad.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan a la plataforma. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto público del protocolo y recomienda verificar la documentación del fabricante para detalles específicos de firmware.

## Visión general del protocolo

El W10SA soporta protocolos comunes de rastreo y ajustes de servidor configurables que le permiten enviar actualizaciones periódicas de ubicación y señales de alarma a un backend como Plaspy. El protocolo define cómo el dispositivo se identifica, reporta posiciones GPS y telemetría, y transmite eventos de alarma para que Plaspy pueda procesar y mostrar datos de rastreo utilizables.

- Permite la identificación del dispositivo y la asociación de sesión para que la telemetría entrante se asigne al activo correcto en Plaspy
- Envía coordenadas GPS periódicas y telemetría básica como estado de batería y tipos de alarma para vistas en tiempo real e históricas
- Transmite notificaciones de alarma por eventos como pérdida de alimentación, exceso de velocidad, vibración y activaciones de geocerca para que Plaspy genere alertas
- Soporta múltiples protocolos de la industria, incluidos GT06, 808 y Tianqin según lo provisto por el fabricante, lo que facilita la compatibilidad
- Usa configuración de servidor (IP y puerto) editable para apuntar el dispositivo a Plaspy o a un gateway intermedio sin cambiar el firmware

## Cómo Plaspy detecta el protocolo

Plaspy opera un endpoint de ingestión compartido y determina automáticamente el protocolo del rastreador para los dispositivos que reportan a la plataforma. En la mayoría de las implementaciones, al integrador solo le basta configurar el W10SA para enviar telemetría al endpoint de Plaspy y la plataforma se encarga de seleccionar el protocolo para la ingestión.

- Plaspy utiliza un único endpoint público para que los dispositivos apunten al mismo destino de telemetría
- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138
- Plaspy recibe telemetría en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos pueden configurarse para usar UDP o TCP y Plaspy acepta conexiones en el puerto compartido
- Cuando el dispositivo está correctamente apuntado a d.plaspy.com o 54.85.159.138 en el puerto 8888, normalmente no es necesaria la selección manual del protocolo dentro de Plaspy

## Transporte y contexto de conexión

Los detalles de conexión determinan cómo el W10SA llega a Plaspy, pero no cambian el papel público del protocolo en sí. El W10SA admite configuración de IP y puerto del servidor, y los operadores deben asegurarse de que el dispositivo utilice un transporte soportado por su SIM y la red regional.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según soporte del equipo y condiciones de la red
- Apunte el W10SA al endpoint de Plaspy por dominio d.plaspy.com o por la IP 54.85.159.138
- Plaspy acepta telemetría en el puerto 8888 para todos los dispositivos soportados, por lo que una única configuración de puerto es suficiente en una implementación
- La elección del transporte puede afectar la fiabilidad de entrega y la latencia, pero no altera la semántica general del protocolo
- Verifique que los datos móviles y la configuración APN estén correctos para que el rastreador pueda abrir el transporte configurado hacia Plaspy

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden añadir o modificar variantes de protocolo soportadas, incluso si el dispositivo anuncia compatibilidad universal
- Las revisiones de hardware pueden cambiar funciones disponibles, como tipos de alarma o reporte de energía, que el protocolo puede transportar
- El W10SA soporta protocolos estilo GT06, 808 y Tianqin según lo publicado por el fabricante, lo que facilita la integración con Plaspy sin ajustes adicionales
- La elección de transporte entre UDP y TCP es configurable y debe coincidir con la fiabilidad de la red y el comportamiento esperado del servidor
- Confirme que la IP y el puerto del servidor estén correctamente configurados en el dispositivo antes de diagnosticar problemas de mapeo de protocolos
- Siempre valide el soporte de funciones específicas, como tipos particulares de alarma, contra el manual del dispositivo para la versión de firmware instalada
- Si utiliza gateways intermedios o middleware, mantenga la consistencia de transporte y el mapeo de puertos de extremo a extremo con las configuraciones de Plaspy

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar una configuración fluida, un mapeo de datos preciso en Plaspy y una operación confiable a largo plazo. Aunque Plaspy detecta el protocolo automáticamente, conocer lo que el dispositivo puede enviar facilita la configuración y la resolución de problemas.

- Acelera la integración inicial asegurando que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Ayuda a los operadores a verificar que las alarmas y campos de telemetría esperados en Plaspy sean compatibles con el firmware del dispositivo
- Facilita el diagnóstico de problemas de entrega relacionados con transporte, APN o limitaciones de la red
- Asiste en la planificación frente a carencias de funciones, como entradas de sensores adicionales o comandos remotos que podrían no estar disponibles
- Mejora la gestión de cambios cuando se introducen revisiones de firmware o hardware en la flota

## Por qué usar Plaspy con este protocolo

Usar el GOTOP W10SA con Plaspy ofrece una forma directa de capturar ubicaciones en tiempo real, eventos de alarma y reproducción histórica de rutas para personas y activos portátiles. El endpoint de ingestión compartido de Plaspy y la detección automática de protocolo reducen la cantidad de configuración por dispositivo requerida, permitiendo a los equipos de operaciones escalar despliegues con ajustes de servidor predecibles.

Para obtener más información sobre cómo Plaspy maneja la telemetría de dispositivos y evaluar su adecuación a su despliegue, visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware e instrucciones de configuración, consulte siempre la documentación del fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo y deben verificarse con la fuente oficial.
