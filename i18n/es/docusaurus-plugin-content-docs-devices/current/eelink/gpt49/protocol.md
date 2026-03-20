---
slug: /eelink/gpt49/protocol
id: gpt49-protocol
sidebar_label: Protocol
title: EElink - GPT49 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo EElink GPT49 para integrarlo con Plaspy, incluye conexión, transporte y consejos de integración
keywords:
  - protocolo EElink GPT49
  - protocolo GPS EElink GPT49
  - compatibilidad GPT49 Plaspy
  - protocolo rastreador de activos EElink
  - protocolo de seguimiento GPT49
  - integración rastreador GPS EElink
  - protocolo rastreador Plaspy
  - protocolo de comunicación GPT49
  - compatibilidad dispositivo EElink
  - seguimiento de flotas GPT49
---

# EElink - Protocolo GPT49

Esta página describe el contexto público del protocolo para usar el rastreador GPS EElink GPT49 con Plaspy. Se enfoca en las consideraciones de red y reporte que permiten al GPT49 enviar datos de ubicación, estado y eventos a Plaspy sin exponer detalles internos del dispositivo ni el parseo privado. Use esta guía para comprender cómo se comunica el rastreador a un nivel alto y qué verificar al integrar dispositivos GPT49 con Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando un dispositivo informa a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la información aquí debe considerarse orientación de integración y no un sustituto del manual del dispositivo o las notas de la versión del firmware.

## Resumen del protocolo

A alto nivel, el rastreador GPT49 se comunica con un servidor remoto para reportar posiciones GNSS, telemetría y banderas de eventos, de modo que Plaspy pueda mostrar historial de ubicaciones, alertas y datos operativos. El protocolo define cómo el dispositivo se identifica, cómo reporta posiciones periódicas o por evento y qué indicadores de estado o alarma incluye para que Plaspy los procese.

- Permite que el GPT49 envíe fijaciones GNSS y telemetría a Plaspy para visualización en mapas en tiempo real e históricos.
- Transporta marcadores de eventos como detección de movimiento, alertas por manipulación y disparos de geocerca que Plaspy puede convertir en notificaciones.
- Transmite información de estado del dispositivo y de batería para soportar monitoreo remoto a largo plazo y planificación de mantenimiento.
- Permite cambios de configuración remota y actualizaciones de firmware OTA cuando el fabricante lo soporta.
- Estandariza cómo el rastreador se dirige y autentica hacia el endpoint de Plaspy para que la plataforma pueda parsear los reportes entrantes.

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un endpoint y puerto compartidos para reportes entrantes de rastreadores y aplica detección de protocolo, de modo que la mayoría de los dispositivos compatibles comienzan a funcionar una vez que se configuran para reportar a la dirección de Plaspy. Para el GPT49, asegúrese de que el dispositivo esté apuntando al servidor público de Plaspy para que la detección automática pueda realizarse.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy acepta conexiones de dispositivos en el puerto 8888 y la plataforma usa el mismo puerto para todos los dispositivos compatibles.
- Los dispositivos pueden configurarse para usar UDP o TCP para comunicarse con Plaspy; la plataforma soporta ambos tipos de transporte en el puerto compartido.
- Cuando un GPT49 reporta al endpoint de Plaspy, Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesario seleccionar el protocolo manualmente en la plataforma.
- Si un dispositivo no parece conectarse, verifique la dirección de reporte configurada, el ajuste de transporte (UDP vs TCP) y cualquier restricción del operador o firewall que pueda bloquear conexiones salientes.

## Transporte y contexto de conexión

La selección del transporte y la direccionamiento preciso del servidor son esenciales para establecer comunicación fiable entre el GPT49 y Plaspy. La elección entre UDP y TCP puede afectar las características de entrega y debe coincidir con lo que el firmware del dispositivo soporta y lo que permite la red móvil.

- El GPT49 puede configurarse para usar UDP o TCP en el puerto 8888 dependiendo del soporte del dispositivo y las opciones de configuración.
- Los dispositivos pueden apuntarse al servidor Plaspy ya sea por dominio d.plaspy.com o por la IP del servidor 54.85.159.138 cuando se requiere direccionamiento explícito.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración y las plantillas de despliegue a nivel de flota.
- Verifique restricciones del operador móvil y cualquier comportamiento intermedio de NAT o firewall que pueda interferir con el tráfico UDP o TCP hacia el endpoint de Plaspy.
- Para despliegues grandes, use transporte y ajustes de servidor consistentes entre dispositivos para agilizar la detección automática y reducir la resolución de problemas.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar intervalos de reporte, tipos de eventos disponibles o campos opcionales en los reportes del rastreador; siempre consulte las notas de la versión del firmware.
- Las revisiones de hardware o diferencias de SKU pueden habilitar u omitir sensores como activación por vibración o detección de manipulación por sensor de luz, lo que afecta los eventos que Plaspy recibe.
- A veces el fabricante permite la selección entre TCP o UDP; confirme que el transporte configurado coincide con las políticas de la red y las expectativas del endpoint de Plaspy.
- El soporte para configuración remota y FOTA depende de las capacidades del fabricante; confirme que las opciones de gestión remota estén habilitadas si planea actualizar dispositivos en campo.
- Pruebe una muestra pequeña de dispositivos tras la configuración para confirmar conectividad, reporte de eventos y comportamiento de batería antes de escalar a un despliegue completo.
- Valide cualquier intervalo de reporte personalizado o modos de ahorro de energía frente a los requisitos operativos para equilibrar la vida útil de la batería con la visibilidad en tiempo real.
- Consulte siempre la documentación del fabricante para conjuntos de comandos específicos del dispositivo y comportamientos particulares del firmware antes de confiar en funciones avanzadas.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del GPT49 a alto nivel ayuda a administradores e integradores a configurar correctamente los dispositivos, resolver problemas de conectividad y tomar decisiones informadas sobre consumo de energía y compromisos de reporte cuando usan Plaspy.

- Asegura que los dispositivos estén apuntando al endpoint de Plaspy y usen el transporte soportado para reportes fiables.
- Facilita el diagnóstico de por qué un dispositivo podría no aparecer en Plaspy verificando la accesibilidad de red, la selección de transporte y el comportamiento del firmware.
- Permite una mejor planificación de la vida útil de la batería al correlacionar modos de reporte y disparadores de eventos con el consumo energético esperado.
- Favorece un despliegue más fluido de configuración remota y FOTA al saber qué puede reportar y aceptar remotamente el dispositivo.
- Mejora la afinación de alertas en Plaspy al entender qué eventos y campos de telemetría están disponibles desde el GPT49.

## Por qué usar Plaspy con este protocolo

La combinación del GPT49 de conectividad 4G LTE, GNSS multiconstelación y larga duración de batería lo hace adecuado para escenarios de rastreo de activos donde son comunes movimientos infrecuentes, detección de manipulación y despliegues prolongados sin supervisión. Cuando se configura para reportar a Plaspy, el GPT49 proporciona datos de ubicación y eventos que ayudan a las organizaciones a mantener visibilidad, responder a incidentes y reducir ciclos de inspección manual.

Para obtener más información sobre cómo Plaspy gestiona la comunicación de dispositivos y la administración de flotas, visite https://www.plaspy.com. Para detalles específicos de protocolo por dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio de EElink en https://www.eelink.com.cn/. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que siempre confirme los detalles de implementación actuales del dispositivo con el fabricante.
