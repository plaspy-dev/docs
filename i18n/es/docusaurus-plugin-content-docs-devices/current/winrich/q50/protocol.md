---
slug: /winrich/q50/protocol
id: q50-protocol
sidebar_label: Protocol
title: Winrich - Q50 Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo del reloj GPS Winrich Q50 y cómo se comunica con Plaspy para rastreo y alertas
keywords:
  - protocolo Winrich Q50
  - protocolo GPS Winrich Q50
  - protocolo Winrich Q50 para Plaspy
  - protocolo de comunicación Winrich Q50
  - protocolo de rastreo Winrich Q50
  - rastreador Winrich Q50 Plaspy
  - protocolo de reloj GPS
  - protocolo de rastreador personal
  - protocolo de rastreador GSM GPS
  - protocolo modo dual GPS LBS
---

# Winrich - Protocolo Q50

Esta página describe el contexto público del protocolo para usar el reloj GPS Winrich Q50 con la plataforma Plaspy. Se centra en cómo el dispositivo informa ubicación, estado y eventos de alarma a Plaspy, para que integradores y administradores comprendan la relación de comunicación sin exponer detalles privados de implementación. El Q50 es un rastreador personal portátil que combina un receptor GPS MTK3337 con un módem GSM MTK6261 para proporcionar posicionamiento por GPS y por LBS, alarmas SOS, comunicación de voz bidireccional, y reportes de manipulación y batería baja.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador una vez que el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware o la configuración del fabricante, por lo que pueden existir diferencias operativas incluso entre unidades del mismo modelo.

## Visión general del protocolo

El protocolo de comunicación del Q50 define los mensajes que el reloj envía a través de la red celular y los tipos de eventos que Plaspy consume para mostrar seguimiento en vivo, alertas e historial. En la práctica, esto significa que el dispositivo reporta posiciones (GPS o LBS), eventos SOS y de manipulación, indicativos de llamadas de voz y estado de batería, que Plaspy visualiza en mapas y notificaciones.

- Reporta ubicaciones usando GPS cuando está disponible y utiliza datos de estaciones base LBS como alternativa para ofrecer posiciones útiles a Plaspy.
- Envía mensajes de evento para SOS, transiciones de geocerca, manipulación o anti caída, y batería baja, de modo que Plaspy pueda activar notificaciones y flujos de escalamiento.
- Usa el módem GSM para datos y eventos de voz; Plaspy ingiere los mensajes entrantes para correlacionar telemetría y marcas de tiempo.
- Identifica el dispositivo en cada mensaje para que Plaspy pueda asociar los datos entrantes con el registro de activo correcto.
- Proporciona telemetría de estado que permite a Plaspy marcar si una posición fue obtenida por GPS o por LBS y mostrar contexto de señal o nivel de confianza a los operadores.

## Cómo Plaspy detecta el protocolo

Plaspy recibe mensajes entrantes en un endpoint compartido y determina automáticamente qué protocolo de rastreador está usando un dispositivo cuando este reporta al servidor de Plaspy. En la mayoría de las implementaciones el usuario no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está configurado para enviar datos al endpoint correcto.

- El dominio público del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138.
- Plaspy escucha en el puerto 8888 y todos los dispositivos soportados por Plaspy usan este mismo puerto.
- Los dispositivos pueden configurarse para usar transporte UDP o TCP, y Plaspy soporta ambos transportes en el puerto 8888.
- Cuando un Q50 correctamente configurado reporta al endpoint de Plaspy, Plaspy detectará automáticamente el protocolo del rastreador y asociará los mensajes con el registro del dispositivo correspondiente.
- La configuración adecuada del dispositivo para apuntar a d.plaspy.com o a 54.85.159.138 es el requisito típico para que la detección automática tenga éxito.

## Contexto de transporte y conexión

El contexto de conexión cubre cómo el dispositivo alcanza a Plaspy a través de la red celular y qué métodos de transporte son aceptables. El Q50 utiliza su módem GSM para enviar mensajes de reporte y eventos a Plaspy, y la selección del transporte puede afectar la confiabilidad según la red y la configuración de la SIM.

- El Q50 puede configurarse para usar transporte UDP o TCP en el puerto 8888.
- El dominio del servidor de Plaspy es d.plaspy.com y su IP pública es 54.85.159.138; los dispositivos pueden apuntar a cualquiera de estos valores al enviar reportes.
- Plaspy utiliza el mismo puerto, 8888, para todos los dispositivos soportados para simplificar la configuración y la gestión de conectividad.
- Asegúrese de que la SIM del dispositivo y el operador móvil permitan el transporte elegido y el acceso a la IP/dominio para un reporte confiable.
- Problemas a nivel de red como cortafuegos del operador, APN mal configurado o señal deficiente pueden afectar la entrega de mensajes independientemente de la corrección del protocolo.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, el timing o las banderas de evento; verifique el nivel de firmware del Q50 al diagnosticar diferencias en el comportamiento.
- Las revisiones de hardware pueden originar pequeñas diferencias funcionales entre lotes; algunas unidades podrían reportar conjuntos de telemetría ligeramente distintos.
- Las opciones de configuración del fabricante, como intervalos de reporte, comportamiento de geocercas y ajustes de voz, pueden influir en lo que Plaspy recibe.
- Elija el transporte del dispositivo (UDP o TCP) según la confiabilidad y las características de la red móvil en su área de despliegue.
- Confirme que la SIM y los ajustes del operador (APN, datos habilitados) sean correctos para que el Q50 pueda alcanzar d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Valide siempre la compatibilidad y el soporte de funciones contra la documentación actual del fabricante antes de despliegues a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Q50 ayuda en la configuración inicial, en el diagnóstico de reportes faltantes y en asegurar que las alertas sean accionables en Plaspy. Un entendimiento claro reduce tiempos de inactividad, acelera la resolución de problemas y ayuda a los operadores a interpretar la telemetría que Plaspy muestra en mapas y reportes.

- Resolución de problemas más rápida cuando las actualizaciones de ubicación o los eventos SOS no aparecen como se espera.
- Mejores decisiones de configuración para intervalos de reporte y elección de transporte basadas en autonomía de batería y comportamiento de red.
- Expectativas precisas sobre la precisión de la posición al comparar fixes GPS frente a las alternativas LBS.
- Correspondencia clara de eventos del dispositivo, como manipulación o batería baja, con las notificaciones y flujos de escalamiento en Plaspy.
- Planificación mejorada de mantenimiento y actualizaciones de firmware al comprender los posibles cambios de protocolo entre versiones.

## Por qué usar Plaspy con este protocolo

Usar el Winrich Q50 con Plaspy brinda un camino directo hacia la monitorización personal continua, alertas en tiempo real e informes históricos para cuidadores, equipos de seguridad y personal operativo. El Q50 suministra la telemetría esencial —ubicación, SOS, indicadores de voz, manipulación y estado de batería— que Plaspy utiliza para ofrecer visibilidad en mapas, enrutamiento de notificaciones e historial de incidentes.

Para saber más sobre Plaspy y cómo maneja la integración de dispositivos y el rastreo de flotas o personal, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación de dispositivos pueden cambiar con el tiempo, por lo que le recomendamos verificar la información de protocolo específica del dispositivo en el sitio del fabricante en http://www.winrichgroup.com/en/ antes de despliegues a gran escala.
