---
slug: /trackerking/dk27/protocol
id: dk27-protocol
sidebar_label: Protocol
title: TrackerKing - DK27 Protocol
sidebar_class_name: menu_item_tracker
description: Visión pública del protocolo del TrackerKing DK27 y cómo comunica con Plaspy usando ajustes de conexión compartidos
keywords:
  - protocolo TrackerKing DK27
  - protocolo GPS TrackerKing DK27
  - protocolo TrackerKing DK27 para Plaspy
  - protocolo de comunicación TrackerKing DK27
  - protocolo de rastreo TrackerKing DK27
  - integración DK27 Plaspy
  - compatibilidad rastreador DK27
  - rastreador compatible con Plaspy
  - integración de telemetría DK27
  - rastreador portátil TrackerKing
---

# TrackerKing - Protocolo DK27

Esta página presenta una visión pública del protocolo para usar el TrackerKing DK27 con Plaspy. Describe, a alto nivel, el rol de comunicación del dispositivo al reportar ubicación y eventos a la plataforma Plaspy, y detalla los ajustes de conexión y el contexto operativo necesarios para una integración fiable sin exponer implementaciones sensibles.

El DK27 es un rastreador GPS portátil y compacto diseñado para prevención de pérdidas y monitoreo de activos personales. Envía ubicación, movimiento, SOS y otros eventos a través de redes celulares hacia Plaspy. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del dispositivo consulte la documentación de TrackerKing cuando sea necesario.

## Visión general del protocolo

El protocolo de comunicación del DK27 es el mecanismo mediante el cual el dispositivo se identifica, reporta telemetría y entrega notificaciones de eventos a un servidor remoto. Para la integración con Plaspy, este protocolo permite que datos útiles de posición, movimiento y alarmas se integren en mapas, paneles y flujos de alertas.

- Permite que el DK27 envíe actualizaciones de posición, alertas de movimiento y vibración, eventos SOS y estado de batería o alimentación a la plataforma.
- Proporciona identificación del dispositivo y contexto de sesión para que Plaspy asocie los mensajes entrantes con el registro de activo correcto.
- Transporta telemetría que posibilita a Plaspy generar seguimiento en tiempo real, historiales de rutas y registros temporales de eventos.
- Soporta alertas basadas en eventos como violaciones de geocercas, activaciones SOS y notificaciones de batería baja que Plaspy puede mostrar a los usuarios.
- Funciona sobre canales de transporte estándar para que el rastreador reporte al endpoint de Plaspy para su procesamiento centralizado.

## Cómo detecta Plaspy el protocolo

Plaspy recibe telemetría entrante en un endpoint compartido y detecta automáticamente el protocolo del dispositivo, por lo que los usuarios normalmente no necesitan seleccionar el protocolo manualmente dentro de la plataforma. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el paso clave para el manejo automático.

- Plaspy escucha en un endpoint compartido en d.plaspy.com y en la IP pública 54.85.159.138.
- Todos los dispositivos Plaspy usan el mismo puerto, de modo que una sola configuración de endpoint simplifica la puesta en marcha.
- Plaspy detecta automáticamente el protocolo del rastreador para el tráfico correctamente dirigido al endpoint compartido.
- Cuando el DK27 está configurado para reportar al endpoint de Plaspy, los mensajes entrantes se asocian al registro del dispositivo DK27 mediante el identificador reportado.
- Normalmente, los usuarios solo deben configurar el dispositivo para reportar a d.plaspy.com o a 54.85.159.138 en el puerto acordado para habilitar la detección automática.

## Transporte y contexto de conexión

Las opciones de conexión como TCP o UDP y el hostname o IP de destino forman parte del contexto de la capa de transporte que determina cómo el DK27 alcanza Plaspy. El DK27 soporta reporte por celular y puede configurarse para usar UDP o TCP en el puerto compartido de Plaspy según la capacidad del equipo y la preferencia del usuario.

- Los dispositivos pueden configurarse para usar UDP o TCP para comunicarse con Plaspy, según las opciones del DK27 y las condiciones de la red.
- Plaspy acepta conexiones al dominio d.plaspy.com o directamente a la IP pública 54.85.159.138.
- El puerto compartido de Plaspy para todos los dispositivos es 8888 y el DK27 puede usar este puerto tanto para conexiones UDP como TCP.
- Usar el nombre de dominio d.plaspy.com permite enrutamiento basado en DNS y actualizaciones del lado de la plataforma sin reconfigurar los dispositivos si cambia el endpoint.
- Confirme la conectividad de datos de la red móvil y la configuración APN en el DK27 para asegurar que la telemetría llegue de forma confiable al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el DK27 formatea ciertos mensajes o qué eventos reporta, por lo que el comportamiento puede variar entre versiones de firmware.
- Las revisiones de hardware y funciones opcionales como monitoreo de voz o modos de ahorro de energía pueden afectar la telemetría disponible para Plaspy.
- La selección del transporte importa: elija UDP o TCP de acuerdo con la configuración del dispositivo, la confiabilidad de la red y las restricciones del operador.
- Las interfaces de configuración del fabricante o las apps complementarias son las vías recomendadas para apuntar el DK27 a los endpoints de Plaspy.
- Siempre valide que los identificadores de dispositivo reportados por el DK27 coincidan con los registros configurados en Plaspy para evitar atribuciones erróneas.
- Cuando sea posible, consulte las notas de versión o los registros de cambios de TrackerKing para ver modificaciones del protocolo específicas de firmware.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del DK27 ayuda a asegurar una configuración sin contratiempos con Plaspy y reduce el tiempo dedicado a resolver problemas de conectividad o entrega de eventos. Saber qué envía el dispositivo y cómo se identifica permite a los administradores verificar el flujo correcto de telemetría y mantener operaciones de rastreo confiables.

- Acelera el aprovisionamiento inicial al confirmar que el endpoint y el transporte correctos están en uso.
- Ayuda a diagnosticar eventos faltantes o actualizaciones de posición al acotar problemas a red, configuración o firmware.
- Orienta sobre la selección de transporte y ajustes de ahorro de energía para equilibrar la oportunidad de entrega y la duración de la batería.
- Aumenta la confianza de que eventos SOS, de movimiento y de geocerca serán capturados y enviados a los canales de alerta de Plaspy.
- Facilita el mantenimiento continuo al indicar cuándo una actualización de firmware o un cambio de configuración podría afectar la integración.

## Por qué usar Plaspy con este protocolo

Usar el DK27 con Plaspy ofrece a organizaciones e individuos una vía sencilla para consolidar ubicación, alertas e historial de eventos en un único entorno de gestión. El DK27 es adecuado para despliegues rápidos y casos de uso con activos portátiles donde se requiere una solución sin cableado y alimentada por batería; Plaspy toma la telemetría del dispositivo y la transforma en visibilidad operativa para monitoreo y respuesta.

La ingestión centralizada de Plaspy en d.plaspy.com y 54.85.159.138 en el puerto compartido 8888, combinada con la detección automática de protocolo, reduce la complejidad de configuración para flotas y activos que usan el DK27. Para saber más sobre Plaspy y cómo unificar la telemetría y las alertas del DK27 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del DK27 en el sitio de TrackerKing https://trackerking.cn/.
