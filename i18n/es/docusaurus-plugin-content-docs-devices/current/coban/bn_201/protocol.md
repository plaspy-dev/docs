---
slug: /coban/bn_201/protocol
id: bn_201-protocol
sidebar_label: Protocol
title: Coban - BN-201 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Coban BN-201 y su comunicación con Plaspy para rastreo de mascotas en tiempo real
keywords:
  - protocolo Coban BN-201
  - protocolo GPS Coban BN-201
  - protocolo de rastreo Coban BN-201
  - protocolo rastreador mascotas Coban
  - compatibilidad BN-201 Plaspy
  - protocolo Plaspy para rastreadores
  - comunicación rastreador GPS
  - compatibilidad NB-IoT 2G rastreador
  - integración rastreador GPS para mascotas
  - reporte de dispositivo a Plaspy
---

# Coban - BN-201 Protocolo

Esta página describe el contexto público del protocolo para integrar el rastreador de mascotas Coban BN-201 con Plaspy. Se centra en cómo el dispositivo se comunica con el servidor de Plaspy, qué papel tiene esa comunicación en la ubicación en tiempo real, geocercas y monitoreo por voz, y qué considerar al configurar el rastreador para un funcionamiento confiable. Los detalles aquí son de alto nivel y están pensados para ayudar en la configuración, solución de problemas y verificación de compatibilidad con la plataforma.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto en el dispositivo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza consideraciones generales de transporte y compatibilidad más que los detalles internos del dispositivo.

## Resumen del protocolo

El BN-201 usa canales estándar de red y mensajería de texto para reportar ubicación, estado y eventos a un servidor. En el contexto de Plaspy, el protocolo del dispositivo define cómo el rastreador se identifica, envía coordenadas GNSS, reporta alarmas y eventos de geocerca, y expone funciones como el monitoreo de voz remoto.

- Convierte las posiciones GNSS y el estado del dispositivo en mensajes que el servidor puede interpretar para mostrar en el mapa y almacenar el historial.
- Entrega notificaciones de eventos como entrada/salida de geocerca, batería baja o SOS a Plaspy para generar alertas.
- Transporta comandos auxiliares y respuestas que habilitan funciones como la transmisión remota de voz y la escucha.
- Admite múltiples opciones de transporte (basadas en IP y SMS) para que el dispositivo siga siendo alcanzable bajo distintas condiciones de red.
- Proporciona la información esencial que Plaspy necesita para presentar ubicación, telemetría y alertas sin exponer internals binarios o de firmware.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes entrantes de muchos rastreadores comunes y reconocer automáticamente el formato de reporte cuando un dispositivo apunta al endpoint de Plaspy. En la mayoría de despliegues, usted no necesita seleccionar un protocolo dentro de Plaspy siempre que el rastreador esté configurado para enviar datos a la plataforma.

- Plaspy escucha en un endpoint de servidor compartido para que los dispositivos puedan reportar usando un destino consistente.
- Cuando un BN-201 está configurado para reportar al endpoint de Plaspy, la plataforma inspecciona los mensajes entrantes y asocia el dispositivo con la lógica de procesamiento adecuada.
- Generalmente, usted solo necesita establecer la dirección de reporte y el transporte en el rastreador; Plaspy maneja la detección del protocolo automáticamente.
- Esta detección automática simplifica la incorporación de dispositivos como el BN-201 que soportan reportes estándar por TCP, UDP o SMS.
- Si un dispositivo usa SMS para configuración o reporte de respaldo, Plaspy procesa los datos originados por SMS según el comportamiento de reporte publicado por el fabricante.

## Transporte y contexto de conexión

Las elecciones de conexión afectan el consumo de batería, la fiabilidad y la rapidez con la que llegan las actualizaciones de ubicación. El BN-201 soporta transportes IP comunes y SMS, y puede configurarse para enviar reportes a Plaspy usando UDP o TCP en el mismo puerto que Plaspy usa para todos los dispositivos compatibles.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar directamente a Plaspy.
- El dominio público del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la dirección IP asociada es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- UDP suele emplearse para uplinks periódicos donde se desea un overhead mínimo; TCP está disponible cuando se prefiere un transporte orientado a conexión.
- La conectividad NB-IoT y 2G en el BN-201 influye en la frecuencia y fiabilidad con la que se entregan los reportes IP; SMS puede usarse como canal alterno para configuración o reporte de respaldo.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el BN-201 formatea los mensajes o soporta ciertas funciones; siempre anote la versión de firmware al validar el comportamiento.
- Revisiónes de hardware o variantes regionales pueden modificar bandas soportadas, fallbacks de red o comandos disponibles.
- Elegir entre NB-IoT y 2G afectará el costo de datos, la latencia y la duración de la batería; confirme cuál será la red principal del rastreador.
- El comportamiento de configuración y fallback por SMS puede variar según el operador y el firmware del dispositivo; pruebe los flujos SMS durante la puesta en marcha.
- El BN-201 soporta canales de reporte TCP, UDP y SMS; asegúrese de apuntar el dispositivo al endpoint de Plaspy usando el transporte requerido para su implementación.
- Valide cualquier característica avanzada, como monitoreo de voz o soporte de comandos de geocerca, contra la documentación más reciente del fabricante.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del rastreador ayuda a garantizar reportes confiables, historiales de ubicación precisos y un comportamiento predecible de las alertas cuando el BN-201 se utiliza con Plaspy. Tener claridad sobre el canal de reporte y las opciones de configuración acelera la solución de problemas y favorece un uso óptimo de la batería y la red.

- Garantiza que el dispositivo esté correctamente apuntado al endpoint de Plaspy para que los mensajes lleguen sin pérdidas.
- Le ayuda a determinar si UDP o TCP se adapta mejor a su frecuencia de actualizaciones y condiciones de red.
- Facilita el diagnóstico de posiciones faltantes, alertas retrasadas o lagunas de telemetría al correlacionar el comportamiento de la red con los flujos de mensajes esperados.
- Mejora la planificación de la batería al alinear los intervalos de reporte y la selección de transporte con las características de NB-IoT o 2G.
- Aclara cómo se activan y reportan funciones como el monitoreo de voz y las transmisiones remotas para que funcionen según lo esperado en Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Coban BN-201 con Plaspy ofrece una solución práctica para el rastreo y monitoreo de mascotas cuando importan el hardware compacto, la larga autonomía en espera y la integración sencilla. Plaspy ingiere los reportes estándar TCP, UDP y SMS del BN-201 y presenta ubicación en vivo, alertas de geocerca, reproducción de historial y opciones de monitoreo de voz en una plataforma unificada, lo que lo hace adecuado para propietarios, servicios de cuidado de mascotas y pequeñas flotas de rastreadores para animales de compañía.

Plaspy está diseñado para simplificar la incorporación de dispositivos usando un endpoint compartido y un solo puerto para todos los rastreadores compatibles, mientras detecta automáticamente el protocolo de reporte. Para saber más sobre Plaspy y cómo soporta dispositivos como el BN-201 visite https://www.plaspy.com. Para obtener los detalles específicos del protocolo más actuales, notas de firmware y orientación de implementación, verifique la información del fabricante en https://www.coban.net/.
