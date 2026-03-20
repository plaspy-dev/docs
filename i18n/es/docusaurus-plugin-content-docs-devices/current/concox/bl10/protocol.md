---
slug: /concox/bl10/protocol
id: bl10-protocol
sidebar_label: Protocol
title: Concox - BL10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Concox BL10 y su comunicación con Plaspy para rastreo de flotas y telemetría de candados
keywords:
  - Protocolo Concox BL10
  - Protocolo GPS Concox BL10
  - Protocolo de comunicación Concox BL10
  - Protocolo de rastreo Concox BL10
  - Compatibilidad Concox BL10 Plaspy
  - Protocolo de rastreador Concox BL10
  - Candado GNSS Concox BL10
  - Rastreador para candado de bicicleta Concox BL10
  - Protocolo de dispositivo Plaspy
  - Rastreadores compatibles con Plaspy
---

# Concox - Protocolo BL10

Esta página describe el contexto público del protocolo para usar el candado inteligente Concox BL10 con rastreador GPS oculto en la plataforma Plaspy. Explica, a un alto nivel, cómo el BL10 informa posición, eventos y estado del dispositivo para que operadores e integradores comprendan el papel del protocolo del rastreador al dirigir datos hacia Plaspy para la supervisión de flotas y la gestión de candados.

Plaspy utiliza ajustes compartidos de conexión entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El BL10 es compatible con Plaspy desde su configuración estándar, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Esta página se centra en detalles públicos y prácticos de comunicación, no en internals de firmware ni tramas privadas de comandos.

## Resumen del protocolo

El protocolo de comunicación del BL10 permite el envío seguro y continuo de la posición GNSS, estado del candado, eventos de manipulación y telemetría de corto alcance a un servidor remoto de flota. En términos generales, el protocolo define cómo se identifica el dispositivo, cuándo envía actualizaciones y qué tipos de eventos se transmiten para que Plaspy pueda mostrarlos en el panel y activar reglas.

- Permite reportes periódicos y por evento de GPS y posicionamiento auxiliar como LBS y ubicaciones derivadas de BLE para lograr mayor cobertura.
- Transmite información de estado del dispositivo, como estado del candado, nivel de batería, alertas por vibración o manipulación y indicadores de conectividad.
- Proporciona la identidad y metadatos necesarios para que Plaspy asocie los mensajes con el activo correcto en la flota.
- Soporta eventos de corto alcance por BLE, como aperturas o notificaciones de proximidad iBeacon, que se correlacionan con la ubicación y datos de uso.
- Permite que los operadores reciban disparadores de geocercas y notificaciones de manipulación a través de Plaspy para una respuesta rápida.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes de múltiples modelos de rastreadores minimizando la configuración por dispositivo. Cuando un BL10 configurado correctamente reporta al endpoint de Plaspy, la plataforma usa la información del endpoint compartido para identificar el protocolo entrante y enrutar los mensajes a la lógica de procesamiento adecuada.

- Plaspy escucha en un único endpoint compartido, por lo que los dispositivos que reportan a ese punto se detectan automáticamente.
- Los dispositivos configurados para reportar a d.plaspy.com o a la IP del servidor se enrutan a la plataforma para la identificación del protocolo.
- Normalmente, los operadores no necesitan seleccionar manualmente un protocolo dentro de Plaspy cuando el BL10 está apuntando al endpoint de la plataforma.
- La detección automática facilita el despliegue de flotas mixtas al eliminar el paso manual de seleccionar protocolo por dispositivo.
- Si las comunicaciones no llegan a Plaspy, verificar la configuración de reporte del dispositivo y la conectividad de red es el primer paso para la resolución de problemas.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el BL10 alcanza el servidor de Plaspy y qué opciones de transporte se usan comúnmente. El BL10 puede configurarse para usar UDP o TCP según ajustes del dispositivo y requisitos de la red, y Plaspy acepta ambos transportes en el puerto compartido.

- Los dispositivos BL10 pueden configurarse para reportar al dominio d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- Plaspy acepta reportes de dispositivos por UDP o TCP en el puerto 8888, y los dispositivos pueden usar cualquiera de los dos según su configuración.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que permite a los operadores estandarizar las configuraciones de salida para flotas mixtas.
- La elección entre UDP o TCP depende del comportamiento de entrega deseado y de las condiciones de red en los lugares de despliegue.
- Asegúrese de que el APN y la provisión de la SIM permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall del operador móvil permita el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el conjunto exacto de eventos, nombres de campos o la cadencia de reporte que soporta un dispositivo BL10.
- Revisiones de hardware o variantes regionales pueden alterar los transportes soportados, las funciones BLE o el comportamiento de gestión de energía.
- Opciones de configuración del fabricante, como modos de posicionamiento o perfiles de energía, pueden afectar qué reporta el dispositivo y con qué frecuencia.
- La elección de transporte entre UDP y TCP puede influir en las características de entrega y debe validarse en pruebas.
- Siempre valide el comportamiento de posicionamiento esperado y los tipos de eventos en pruebas de campo antes de un despliegue masivo.
- Para los detalles de protocolo más actuales y las notas de versión de firmware, consulte al fabricante del dispositivo.

## Por qué es importante entender el protocolo

Comprender cómo el BL10 se comunica con Plaspy ayuda a los operadores a configurar los dispositivos correctamente, acelerar la resolución de problemas y diseñar flujos de trabajo que dependan de la entrega predecible de eventos y la precisión de la ubicación.

- Garantiza que el dispositivo esté configurado para reportar a d.plaspy.com o a la IP correcta para que Plaspy reciba datos de inmediato.
- Ayuda a diagnosticar problemas de conectividad confirmando la selección de transporte TCP o UDP y verificando las rutas de red hacia el puerto 8888.
- Orienta las expectativas sobre la cadencia de actualizaciones, el tiempo de geocerca y el impacto en la batería de distintos modos de reporte.
- Permite planes de prueba sensatos para actualizaciones de firmware y variantes regionales antes de implementaciones a gran escala.
- Mejora la respuesta ante incidentes al clarificar qué eventos emitirá el BL10 ante manipulaciones, vibraciones o acciones de desbloqueo.

## Por qué usar Plaspy con este protocolo

Usar el BL10 con Plaspy ofrece a los operadores de micromovilidad una forma unificada de recopilar ubicación, estado del candado y telemetría de eventos en toda la flota de bicicletas. El BL10 combina un mecanismo de bloqueo integrado con GNSS y funciones BLE de corto alcance para reducir el robo y facilitar la recuperación, mientras que Plaspy consolida esas señales en mapas en vivo, reglas de geocerca y flujos de alertas útiles para la operación diaria.

Para saber más sobre Plaspy y cómo la plataforma maneja el reporte de dispositivos y la gestión de flotas visite https://www.plaspy.com. Para las notas de firmware más recientes del BL10 y documentación detallada específica del dispositivo, verifique la implementación y el comportamiento del firmware en el sitio del fabricante https://www.iconcox.com/. El soporte del protocolo y el comportamiento del dispositivo pueden cambiar con el tiempo, por lo que consultar la documentación del fabricante asegura que disponga de la información más actual.
