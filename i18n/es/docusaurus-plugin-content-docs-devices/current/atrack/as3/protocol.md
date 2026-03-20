---
slug: /atrack/as3/protocol
id: as3-protocol
sidebar_label: Protocol
title: ATrack - AS3 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo AS3 de ATrack para integrar rastreadores GPS con Plaspy y orientar la conexión confiable de dispositivos
keywords:
  - Protocolo ATrack AS3
  - Protocolo GPS ATrack AS3
  - ATrack AS3 Plaspy
  - Protocolo de comunicación AS3
  - Protocolo de rastreo AS3
  - Compatibilidad de dispositivos Plaspy
  - Protocolo para rastreadores de vehículos
  - Integración de rastreadores GPS
  - Rastreo de flotas AS3
  - Rastreador de activos AS3
---

# ATrack - Protocolo AS3

Esta página expone el contexto público del protocolo para usar el rastreador GPS ATrack AS3 con Plaspy. Describe a alto nivel cómo se comunica el equipo, qué ajustes de conexión espera Plaspy y qué aspectos del comportamiento del dispositivo son más relevantes al integrar unidades AS3 en flotas o en la gestión de activos. El contenido se centra en información no sensible que ayuda en la configuración y solución de problemas.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo en un AS3 puede variar según la versión de firmware, la revisión del hardware y la configuración del fabricante. Consulte esta visión general para el contexto de conexión específico de Plaspy y revise la documentación de ATrack para detalles de protocolo propios del dispositivo.

## Visión general del protocolo

El protocolo de comunicación es el mecanismo que usa el AS3 para reportar ubicación, estado y eventos a un servidor como Plaspy. Para la integración con Plaspy, el protocolo determina cómo se identifica la unidad, cómo se formatean las posiciones y la telemetría, y cómo se transmiten eventos como movimiento, impactos o cambios de entradas. Esta página mantiene las descripciones en términos generales, enfocándose en el papel práctico del protocolo en la conectividad del dispositivo.

- Transporta posición y telemetría desde el AS3 hacia un endpoint remoto para que Plaspy pueda mostrar ubicación y estado.
- Incluye información de identidad y estado del equipo para que Plaspy asocie los mensajes con el activo correcto.
- Transmite señales de sensores y eventos, como detección de movimiento, cambios de entradas y estado de batería, que habilitan alertas y automatizaciones.
- Soporta flujos de configuración y gestión remota cuando el dispositivo lo permite, por ejemplo actualizaciones de firmware o cambios en el intervalo de reporte.
- Permite el registro y la reproducción de puntos históricos cuando el equipo almacena datos y luego los sube al servidor.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del dispositivo basándose en el tráfico entrante. En la mayoría de implantaciones no es necesario seleccionar un protocolo específico dentro de Plaspy siempre que el AS3 esté configurado para reportar al endpoint de Plaspy y use uno de los transportes soportados.

- Plaspy escucha en una dirección y puerto de servidor compartidos para todos los rastreadores compatibles.
- El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador.
- Cuando un AS3 reporta al endpoint de Plaspy, la plataforma identificará el tipo de dispositivo y procesará los mensajes entrantes en consecuencia.
- La configuración adecuada del dispositivo para apuntar a Plaspy suele ser el paso de configuración requerido por el usuario.

## Transporte y contexto de conexión

El AS3 soporta múltiples métodos de transporte a nivel de dispositivo. Para las conexiones con Plaspy, los factores importantes son qué transporte soporta el firmware del equipo y cómo está configurado para el endpoint de Plaspy. Plaspy acepta reportes de dispositivos a través de los transportes comunes soportados por el AS3 cuando están apuntados a la dirección y puerto de Plaspy.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 al reportar a Plaspy.
- Los equipos pueden apuntar al dominio del servidor de Plaspy d.plaspy.com o a la IP del servidor 54.85.159.138.
- Plaspy utiliza el puerto 8888 para todos los dispositivos soportados, por lo que no necesita puertos separados por modelo.
- Algunas implementaciones de AS3 también usan SMS como canal alternativo de reporte, pero la integración con Plaspy usa transporte de datos IP sobre TCP o UDP.
- Asegúrese de que el APN y la configuración de red del dispositivo permitan conexiones salientes al endpoint de Plaspy para un reporte fiable.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware en unidades AS3 pueden cambiar campos de mensaje, eventos disponibles y transportes soportados; siempre verifique las notas de la versión de firmware.
- Revisiones de hardware u opcionales como GPS más GLONASS o el sensor G de 3 ejes pueden añadir o modificar campos de telemetría.
- La elección entre TCP y UDP afecta la semántica de entrega pero no el endpoint o puerto de Plaspy; seleccione el transporte que corresponda con la configuración del dispositivo y las condiciones de la red.
- Los comandos de configuración del fabricante y el comportamiento de gestión remota pueden variar; confirme los conjuntos de comandos soportados con la documentación oficial de ATrack.
- Una batería de respaldo de gran capacidad y los estados de energía pueden cambiar la cadencia de reporte cuando el dispositivo opera con batería de respaldo.
- Valide la compatibilidad con la documentación de ATrack para funciones avanzadas como FOTA vía FTP o reportes de eventos especializados.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación AS3 y cómo interactúa con Plaspy ayuda a asegurar una incorporación confiable de dispositivos, reportes de ubicación precisos y una resolución de problemas más rápida cuando surgen incidencias. La claridad sobre transporte, identificación y señalización de eventos reduce la fricción de integración para gestores de flotas y activos.

- Un endpoint y transporte correctamente configurados aseguran que el dispositivo se conecte y Plaspy pueda detectar el protocolo automáticamente.
- Saber qué telemetría y campos de evento puede enviar el equipo ayuda a mapear esos puntos de datos en los paneles y alertas de Plaspy.
- Estar al tanto de diferencias de firmware o hardware evita sorpresas al añadir nuevos dispositivos a una flota.
- Entender el comportamiento del transporte facilita el diagnóstico de problemas de conectividad en entornos móviles o de baja cobertura.
- Estar preparado para cambios remotos de firmware o configuración reduce el tiempo de inactividad durante actualizaciones de campo.

## Por qué usar Plaspy con este protocolo

Usar el ATrack AS3 con Plaspy ofrece una vía sencilla para obtener visibilidad de flotas y activos mediante un rastreador diseñado para entornos exigentes y condiciones de energía intermitente. Las características de hardware del AS3, como protección IP67, GPS opcional con GLONASS, batería recargable interna y detección de eventos, complementan las capacidades de Plaspy para visibilidad en tiempo real, alertas y reproducción histórica.

Plaspy centraliza los reportes entrantes de unidades AS3 en un único endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador para simplificar la incorporación y la gestión continua. Para saber más sobre Plaspy y cómo maneja las integraciones de dispositivos visite https://www.plaspy.com. Verifique siempre los detalles más recientes del protocolo específico del dispositivo, el comportamiento del firmware y la información de configuración del fabricante en el sitio oficial de ATrack https://www.atrack.com.tw/ ya que las implementaciones y el firmware pueden cambiar con el tiempo.
