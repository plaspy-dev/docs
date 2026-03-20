---
slug: /reachfar/rf_v18/protocol
id: rf_v18-protocol
sidebar_label: Protocol
title: Reachfar - RF-V18 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del Reachfar RF-V18 y cómo se comunica con Plaspy para seguimiento personal fiable
keywords:
  - Protocolo Reachfar RF V18
  - Protocolo GPS Reachfar RF V18
  - Protocolo de comunicación RF V18
  - Protocolo de rastreo RF V18
  - Compatibilidad Reachfar Plaspy
  - Protocolo de dispositivo Plaspy
  - Protocolo de rastreador GPS personal
  - Protocolo de rastreador GPRS
  - Seguimiento SOS RF V18
  - Alertas geocerca RF V18
---

# Reachfar - Protocolo RF-V18

Esta página describe el contexto público del protocolo para usar el rastreador Reachfar RF-V18 con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, qué ajustes de conexión se utilizan y qué papel juega el protocolo de reporte del equipo para entregar ubicación, alertas y telemetría a una plataforma en la nube.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del RF-V18, la revisión de hardware y la implementación del fabricante, por lo que este documento se mantiene en un nivel público e independiente de la implementación, resaltando a la vez los pasos prácticos necesarios para una integración confiable.

## Visión general del protocolo

El protocolo de reporte del RF-V18 es el método de comunicación a nivel de dispositivo que se usa para enviar datos de ubicación, estado y eventos desde el rastreador hasta una plataforma en la nube como Plaspy. En rastreadores personales como el RF-V18, el propósito principal del protocolo es hacer que la información de ubicación y alertas sea utilizable por sistemas de monitoreo y cuidadores sin exponer detalles internos del dispositivo.

- Transporta posiciones y los indicadores del modo de posicionamiento para que Plaspy pueda mostrar ubicaciones en tiempo real y el historial.
- Envía notificaciones de eventos como pulsaciones de SOS, batería baja, entrada/salida de geocerca y activaciones del sensor G para alertas centralizadas.
- Soporta vías alternativas como SMS cuando la conectividad GPRS no está disponible, asegurando que las alertas críticas todavía lleguen a los cuidadores.
- Permite configuración remota básica y parámetros de reporte para que los intervalos de rastreo y los umbrales de alerta puedan gestionarse desde la nube o apps complementarias.
- Ayuda a correlacionar identidad del dispositivo y telemetría para que Plaspy asigne datos a la cuenta correcta y muestre paneles de uso prácticos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint y puerto compartidos y aplica detección automática de protocolo, de modo que la mayoría de los dispositivos correctamente configurados comienzan a reportar sin que el usuario deba seleccionar manualmente el protocolo en la plataforma. Esto reduce la fricción en la configuración para usuarios finales y administradores al incorporar unidades RF-V18 al servicio.

- Los dispositivos deben configurarse para reportar al servidor de Plaspy en d.plaspy.com o a la dirección IP 54.85.159.138.
- Plaspy escucha en un único puerto para todos los dispositivos y protocolos; el puerto usado por Plaspy es 8888.
- Los dispositivos pueden configurarse para usar UDP o TCP hacia el endpoint de Plaspy; Plaspy acepta ambos transportes en el puerto 8888.
- Cuando el RF-V18 envía sus reportes al endpoint de Plaspy, la plataforma identifica automáticamente el formato de reporte y enruta los datos al registro de dispositivo correcto.
- En la mayoría de los casos, los usuarios no necesitan elegir un protocolo dentro de Plaspy si el dispositivo apunta correctamente al endpoint de Plaspy y está configurado para reportar por la red.

## Transporte y contexto de conexión

El RF-V18 reporta principalmente por GPRS TCP/IP y ofrece SMS como respaldo para alertas clave. El transporte y los ajustes de destino determinan cómo llegan los reportes a Plaspy y son una parte importante del aprovisionamiento de cada unidad.

- El RF-V18 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 según el firmware y las opciones de configuración.
- Los dispositivos pueden aprovisionarse con el dominio d.plaspy.com o con la dirección numérica del servidor 54.85.159.138 como destino de reporte.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica el aprovisionamiento y reduce la posibilidad de errores de configuración.
- GPRS TCP/IP es la vía normal de reporte para ubicación en vivo y telemetría, mientras que SMS proporciona una ruta alternativa para alertas cuando no hay datos.
- Asegúrese de que el APN y las credenciales celulares estén correctamente configuradas en cada unidad para que el dispositivo pueda establecer una conexión IP con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades RF-V18 pueden cambiar las funciones de reporte disponibles y las opciones de transporte por defecto; registre siempre la versión de firmware durante la resolución de problemas.
- Las revisiones de hardware o las variantes regionales del producto pueden implementar conjuntos de comandos o reportes ligeramente distintos; verifique el modelo y la revisión exacta del dispositivo al confirmar compatibilidad.
- La elección de transporte (TCP vs UDP) puede afectar el comportamiento de entrega y debe seleccionarse según las características de la red y las recomendaciones del fabricante.
- El comportamiento de respaldo por SMS depende del dispositivo y puede requerir números de teléfono o planes de servicio separados.
- Confirme la configuración del APN y cualquier restricción del operador que pudiera bloquear conexiones GPRS TCP/IP a servidores externos.
- En caso de duda, valide el comportamiento del equipo enviando reportes de prueba al endpoint de Plaspy y revisando la telemetría recibida en la plataforma.

## Por qué es importante comprender el protocolo

Comprender de manera práctica el protocolo de comunicación del RF-V18 ayuda a instaladores y administradores a evitar problemas comunes de configuración, a resolver fallas de conectividad y a garantizar que el dispositivo entregue las alertas y los datos de ubicación esperados a Plaspy.

- Permite una configuración más rápida al asegurar que la dirección del servidor, el tipo de transporte y los valores de APN se aprovisionen correctamente.
- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en Plaspy cuando existen incompatibilidades de red, transporte o firmware.
- Informa decisiones sobre estrategias de actualización, por ejemplo cuándo aplicar firmware que cambie el comportamiento de reporte o los eventos disponibles.
- Apoya la afinación de la batería y de los intervalos de reporte para equilibrar el tiempo de reposo del equipo y la granularidad del rastreo.
- Permite a los administradores verificar que eventos críticos como SOS y violaciones de geocerca están llegando de forma fiable a la nube.

## Por qué usar Plaspy con este protocolo

Usar el RF-V18 con Plaspy brinda a cuidadores y a organizaciones pequeñas visibilidad centralizada de ubicaciones y eventos de seguridad. Plaspy ingiere los reportes de ubicación y eventos del RF-V18 para que los administradores puedan ver posiciones en vivo, recibir alertas de geocerca y batería baja, y revisar el historial reciente para análisis de incidentes. En escenarios de seguridad personal, la combinación de hardware compacto, función SOS, voz bidireccional y reporte en la nube hace del RF-V18 una opción práctica para monitorear usuarios vulnerables.

Si desea obtener más información sobre Plaspy y cómo maneja los reportes de dispositivos, visite https://www.plaspy.com. Para conocer el comportamiento de firmware más actual del RF-V18, las opciones de configuración y la documentación del fabricante, verifique los detalles en el sitio de Reachfar https://www.reachfargps.com/ ya que el soporte del protocolo y las implementaciones de los dispositivos pueden cambiar con el tiempo.
