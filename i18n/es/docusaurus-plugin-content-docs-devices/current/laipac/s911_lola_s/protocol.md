---
slug: /laipac/s911_lola_s/protocol
id: s911_lola_s-protocol
sidebar_label: Protocol
title: Laipac - S911 LOLA S Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Laipac S911 LOLA S y su conexión con Plaspy para seguimiento de seguridad en tiempo real
keywords:
  - protocolo Laipac S911 LOLA S
  - protocolo GPS Laipac LOLA S
  - protocolo seguimiento Laipac Plaspy
  - integración LOLA S Plaspy
  - comunicación S911 LOLA S
  - protocolo rastreador mPERS GPS
  - protocolo rastreador de emergencia personal
  - compatibilidad dispositivos Plaspy
  - reporte de ubicación en tiempo real
  - protocolo detección de caídas
---

# Laipac - Protocolo S911 LOLA S

Esta página sintetiza el contexto público del protocolo del Laipac S911 LOLA S cuando se integra con Plaspy. Se enfoca en cómo el dispositivo informa ubicación, estado y eventos de emergencia a la plataforma Plaspy sin revelar lógica privada de los parsers ni detalles internos del firmware del fabricante. El S911 LOLA S es un dispositivo mPERS compacto que ofrece reporte de posición GNSS sobre 4G LTE, un botón SOS dedicado, detección automática de caídas, voz bidireccional y alertas de check-in periódicas; esas capacidades se entregan a las plataformas de monitoreo mediante su protocolo de reporte.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que la descripción del protocolo aquí es intencionalmente general y está pensada para ayudar en la planificación de la integración y la resolución de problemas.

## Resumen del protocolo

El protocolo de reporte define cómo el S911 LOLA S transmite coordenadas GNSS, marcas de tiempo, activaciones de SOS, alertas por caída, avisos de check-in y datos de estado a un servidor remoto como Plaspy. El protocolo permite que el dispositivo se identifique, envíe actualizaciones periódicas y por evento, y que un backend traduzca esos reportes en alertas accionables y en historiales de ubicación.

- Permite la entrega de posición GNSS y telemetría con marca de tiempo a un servidor externo para monitoreo en tiempo real.
- Transporta tipos de eventos como pulsaciones del botón SOS, alertas por detección de caídas y check-ins automáticos para que la plataforma genere alarmas y notificaciones.
- Transmite estado del dispositivo y metadatos que ayudan a determinar nivel de batería, conectividad y estado de accesorios para conocimiento operacional.
- Soporta datos de identificación para que Plaspy pueda asociar los reportes entrantes con el registro de dispositivo y la cuenta de cliente correctos.
- Proporciona un flujo de entrada consistente que Plaspy puede mapear a paneles, reglas de alerta e informes históricos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe reportes de dispositivos en un endpoint de red compartido y en un puerto, y reconoce automáticamente el protocolo del S911 LOLA S cuando el dispositivo está correctamente apuntado al destino de Plaspy. En la mayoría de los casos no será necesario seleccionar un protocolo específico dentro de Plaspy si el dispositivo está configurado para reportar al endpoint de Plaspy.

- Plaspy escucha el tráfico entrante de rastreadores en el dominio público d.plaspy.com.
- La IP pública del servidor Plaspy es 54.85.159.138 y la plataforma acepta conexiones en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los dispositivos que usan formatos compatibles se manejan sin selección manual.
- Si un dispositivo está mal configurado o usa una variante de firmware no estándar, revise la configuración del equipo para confirmar que el destino de reporte coincide con Plaspy.
- Cuando esté correctamente apuntado a Plaspy, los eventos y las actualizaciones de posición del S911 LOLA S se asociarán con el dispositivo en el sistema Plaspy.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el S911 LOLA S alcanza el endpoint de Plaspy y qué transportes se usan comúnmente. El dispositivo puede configurarse para usar UDP o TCP y debe poder alcanzar el puerto compartido de Plaspy. Esta sección se centra en consideraciones a nivel de red y transporte más que en los detalles internos del protocolo.

- El S911 LOLA S puede configurarse para reportar usando UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del operador.
- Los dispositivos pueden apuntarse por hostname a d.plaspy.com o por IP a 54.85.159.138 cuando se configura el destino de reporte.
- Todos los dispositivos en Plaspy usan el mismo número de puerto 8888, por lo que las reglas de firewall y NAT pueden estandarizarse en los despliegues.
- Elija UDP o TCP según las indicaciones de configuración del dispositivo y las restricciones de la red, como reglas de firewall o comportamiento de NAT.
- Asegúrese de que el plan de datos móviles y el APN permitan conexiones salientes hacia el endpoint de Plaspy y que cualquier firewall intermedio permita tráfico al puerto 8888.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware y software pueden modificar qué campos de eventos, frecuencias u opciones se reportan desde el S911 LOLA S.
- Las variantes de hardware o los modelos celulares específicos por región pueden cambiar los transportes soportados o el comportamiento de voz; verifique la revisión exacta del modelo al validar compatibilidad.
- La voz bidireccional y el enrutamiento de SOS pueden involucrar configuraciones adicionales del operador o del servicio fuera del simple reporte GNSS; dichas funciones pueden requerir configuraciones complementarias.
- La selección de transporte entre UDP y TCP es configurable en muchos dispositivos y puede afectar el comportamiento de entrega en redes con pérdida de paquetes.
- Confirme siempre los valores de destino de reporte del dispositivo frente a la documentación del fabricante y su configuración en Plaspy para evitar enrutamientos incorrectos.
- En caso de duda, consulte los registros de cambios de firmware publicados y la documentación de Laipac para el comportamiento específico del dispositivo.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del S911 LOLA S ayuda a asegurar una configuración confiable, un alertado preciso y una resolución de problemas más ágil cuando el dispositivo se integra con Plaspy. Tener claridad sobre cómo se entregan eventos y posiciones reduce el tiempo de diagnóstico y respalda procedimientos operacionales sólidos.

- Resolución más rápida de problemas de reporte al confirmar que el dispositivo está apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Mejor mapeo de eventos SOS, de caída y de check-in dentro de las reglas de alerta y los flujos de respuesta de Plaspy.
- Planificación más eficaz de requisitos de red y reglas de firewall dado que todos los dispositivos usan el mismo puerto en Plaspy.
- Validación más sencilla de diferencias de firmware o hardware que afectan campos de telemetría disponibles o la cadencia de reporte.
- Mayor confianza en despliegues a largo plazo al saber qué elementos gestiona el dispositivo y cuáles gestiona Plaspy.

## Por qué usar Plaspy con este protocolo

Utilizar el Laipac S911 LOLA S con Plaspy reúne el reporte de seguridad mPERS con telemetría operativa más amplia, de modo que los equipos puedan monitorear personas y activos desde una única plataforma. Plaspy ingiere actualizaciones GNSS en tiempo real, eventos de emergencia y mensajes de estado para mostrar ubicación en vivo, historial de eventos y alertas configurables que apoyan a cuidadores, despachadores y equipos de seguridad.

Si está evaluando opciones de despliegue, Plaspy reduce la carga de integración al ofrecer un endpoint de escucha compartido y detección automática de protocolo para rastreadores compatibles. Aprenda más sobre Plaspy en https://www.plaspy.com. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que le recomendamos verificar los detalles específicos del dispositivo y las notas de firmware con el fabricante en https://laipac.com/ antes de finalizar decisiones de despliegue.
