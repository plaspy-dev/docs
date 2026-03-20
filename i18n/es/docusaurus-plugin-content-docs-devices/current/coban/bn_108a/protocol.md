---
slug: /coban/bn_108a/protocol
id: bn_108a-protocol
sidebar_label: Protocol
title: Coban - BN-108A Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para usar el rastreador Coban BN-108A con Plaspy para informes de posición y envío de alarmas
keywords:
  - Protocolo Coban BN-108A
  - protocolo GPS Coban BN-108A
  - protocolo de comunicación BN-108A
  - protocolo de rastreo BN-108A
  - compatibilidad rastreador Coban Plaspy
  - documentación protocolo rastreador GPS
  - rastreo de flotas Coban BN-108A
  - guía protocolo para rastreadores de activos
  - conexión de dispositivos Plaspy
  - comunicación para rastreo vehicular
---

# Coban - Protocolo BN-108A

Esta página ofrece un contexto público del protocolo para utilizar el rastreador Coban BN-108A con la plataforma Plaspy. Describe, en términos generales y no sensibles, cómo el dispositivo se comunica y explica las opciones de conexión que Plaspy expone para recibir ubicaciones y eventos desde unidades BN-108A. El BN-108A es un rastreador compacto con batería de gran capacidad, montaje magnético, inducción Bluetooth y múltiples tipos de alarma; estas características influyen en qué información el dispositivo reporta a un servidor.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo en el servidor, aunque el comportamiento exacto puede variar según la versión de firmware, la revisión de hardware o la implementación del fabricante. Esta página se centra en el contexto de comunicación relevante para la integración y la resolución de problemas sin exponer detalles internos del equipo. Para comandos específicos del dispositivo, consulte la documentación del fabricante.

## Visión general del protocolo

El protocolo de reporte del rastreador define cómo el BN-108A se identifica y envía datos útiles de posición, alarmas y telemetría a un backend como Plaspy. En términos de integración, el protocolo determina cómo el dispositivo abre la conexión, qué eventos reporta y qué campos puede ingerir Plaspy para la visualización en vivo y la reproducción histórica.

- Permite que el BN-108A transmita posiciones GNSS y marcas de tiempo a Plaspy para seguimiento en tiempo real e historial de rutas.
- Transporta indicadores de alarma y eventos como batería baja, movimiento, choque, exceso de velocidad y activaciones de geocerca para que Plaspy genere alertas.
- Transmite telemetría como estado de batería y estado de movimiento para que los paneles y reportes de la plataforma sean útiles y accionables.
- Soporta funciones remotas como solicitudes de monitoreo de voz y controles vía SMS cuando esas funciones están habilitadas.
- Opera sobre canales de transporte estándar para que el dispositivo pueda reportar al servidor de Plaspy sin puertos específicos por dispositivo.

## Cómo Plaspy detecta el protocolo

Plaspy acepta tráfico entrante de dispositivos en un endpoint compartido y determina automáticamente qué protocolo de rastreador está en uso, de modo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente. Cuando un BN-108A se configura para reportar al endpoint de Plaspy, la plataforma casará los datos entrantes con un perfil de protocolo conocido y procesará los registros de ubicación y eventos de forma adecuada.

- Plaspy utiliza un único endpoint de servidor para reportes de dispositivos, simplificando la configuración y la gestión.
- Los dispositivos configurados para reportar a d.plaspy.com o a la dirección IP del servidor 54.85.159.138 llegarán al endpoint de ingestión de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que agiliza el aprovisionamiento en flotas heterogéneas.
- La plataforma detecta automáticamente el protocolo del rastreador a partir de las conexiones entrantes cuando el dispositivo apunta al endpoint de Plaspy.
- En la mayoría de los casos, usted solo necesita establecer la dirección del servidor y el tipo de transporte en el dispositivo para comenzar a reportar.

## Transporte y contexto de conexión

El BN-108A puede enviar sus mensajes sobre transportes celulares comunes y puede ser configurado para apuntar al servidor de Plaspy. Para la configuración de conexión, el dispositivo típicamente ofrece opciones de reporte por TCP y UDP, además de control por SMS para el aprovisionamiento inicial o como respaldo.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888, según las opciones de configuración y las necesidades de confiabilidad de la red.
- Los dispositivos pueden apuntar al nombre de host d.plaspy.com o a la dirección numérica del servidor 54.85.159.138 para entregar reportes a Plaspy.
- Plaspy escucha en el puerto 8888 para todos los dispositivos soportados, de modo que se utiliza el mismo puerto en toda la plataforma.
- TCP se emplea comúnmente cuando se requiere entrega confiable y estado de sesión, mientras que UDP puede reducir sobrecarga en reportes cortos y frecuentes según el soporte del dispositivo.
- SMS suele estar disponible para configuración y comandos remotos además del reporte por TCP/UDP cuando los datos celulares no están disponibles.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar intervalos de reporte, tipos de eventos disponibles y conjuntos de comandos; verifique el firmware del dispositivo al validar su comportamiento.
- Las revisiones de hardware y las variantes regionales pueden cambiar los transportes disponibles o el rendimiento GNSS; compruebe el identificador del producto en la unidad.
- La elección entre TCP y UDP afecta las características de entrega, pero no los eventos de alto nivel que el dispositivo reporta a Plaspy.
- El monitoreo de voz remoto y el comportamiento de inducción Bluetooth dependen del firmware del dispositivo y de la configuración de accesorios.
- Los comandos de configuración del fabricante y los ajustes de servidor por defecto están documentados por Coban y deben consultarse para pasos de configuración exactos.
- En caso de duda, valide un dispositivo dirigiéndolo al endpoint de Plaspy y observando su comportamiento de reporte en lugar de asumir características concretas.

## Por qué es importante entender el protocolo

Comprender de forma práctica el protocolo de comunicación del BN-108A ayuda a garantizar una configuración confiable, acelerar la resolución de problemas y mejorar la operación a largo plazo cuando la unidad se integra con Plaspy. Saber qué debe reportar el dispositivo y cómo se conecta reduce la ambigüedad durante la instalación y al diagnosticar datos faltantes.

- Acelera la configuración inicial al aclarar qué transporte y dirección de servidor debe configurar en el equipo.
- Facilita la resolución de problemas de conexión al separar las causas relacionadas con la red, el transporte y la configuración del dispositivo.
- Mejora la afinación de alertas al correlacionar eventos reportados, como movimiento o choque, con las reglas de la plataforma.
- Permite decisiones informadas sobre la cadencia de reporte frente a la duración de la batería al seleccionar modos de funcionamiento.
- Favorece la escalabilidad predecible de la flota mediante el uso del endpoint compartido de Plaspy y la detección automática de protocolos.

## Por qué usar Plaspy con este protocolo

Usar el BN-108A con Plaspy ofrece una forma directa de convertir las corrientes de posición, alarma y telemetría del dispositivo en información operativa. La larga duración de batería de la unidad, su montaje magnético y la inducción Bluetooth la hacen adecuada para instalaciones de activos donde se prioriza el bajo mantenimiento y el montaje discreto, mientras que Plaspy aporta la ingestión centralizada, las alertas y el seguimiento histórico necesarios para la gestión de flotas y activos.

Para conocer más sobre cómo Plaspy maneja las integraciones de dispositivos y revisar las funcionalidades de la plataforma, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que se recomienda verificar la información específica del protocolo y las notas de firmware en el sitio del fabricante https://www.coban.net/.
