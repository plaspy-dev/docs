---
slug: /gotop/q10/protocol
id: q10-protocol
sidebar_label: Protocol
title: GOTOP - Q10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP Q10 y su compatibilidad con Plaspy para informes en tiempo real y alertas SOS
keywords:
  - protocolo GOTOP Q10
  - GOTOP Q10 GPS
  - GOTOP Q10 Plaspy
  - comunicación GOTOP Q10
  - seguimiento GOTOP Q10
  - protocolo de rastreadores Plaspy
  - protocolo rastreador personal GPS
  - reportes GPRS Q10
  - rastreador SOS GOTOP Q10
  - compatibilidad GOTOP Q10
---

# GOTOP - Protocolo Q10

Esta página presenta el contexto público del protocolo para usar el rastreador GOTOP Q10 con la plataforma Plaspy. Resume cómo se comunica el equipo en términos generales, las opciones de reporte más comunes y qué ajustes de conexión espera Plaspy para telemetría en tiempo real, alertas SOS y reproducción histórica.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador una vez que el equipo informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del equipo y funciones como respaldo por SMS, monitoreo de voz e interacción BLE pueden diferir entre unidades.

## Visión general del protocolo

El protocolo de comunicación del Q10 define cómo el rastreador reporta ubicación, estado y eventos a una plataforma remota como Plaspy. En términos generales, el protocolo permite que el dispositivo se identifique, transmita telemetría y alertas, y soporte funciones complementarias como notificaciones SOS y consultas remotas.

- Transporta actualizaciones de ubicación periódicas y basadas en eventos para que Plaspy muestre posición en vivo y recorridos históricos.
- Envía alertas de emergencia SOS y metadatos relacionados para que contactos autorizados y la plataforma reciban notificaciones oportunas.
- Comunica el estado del equipo, como nivel de batería, estado de movimiento y eventos de geovalla, para respaldar la supervisión y las alertas.
- Soporta mensajes fuera de banda como respuestas de ubicación por SMS y consultas telefónicas directas cuando no hay datos disponibles.
- Integra datos de vigilancia por voz y llamadas bidireccionales como eventos complementarios, manteniendo separados los informes principales de rastreo.

## Cómo detecta Plaspy el protocolo

Plaspy está diseñada para aceptar reportes de muchos modelos de rastreadores distintos e identificar automáticamente el protocolo entrante cuando un dispositivo está configurado para enviar datos al endpoint de Plaspy. Cuando un Q10 apunta al servidor Plaspy, la plataforma evalúa la conexión entrante y asocia el flujo al parser y al registro de dispositivo correspondiente sin necesitar selección manual del protocolo en la mayoría de los casos.

- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy.
- Usualmente no es necesario elegir un protocolo dentro de Plaspy si el dispositivo está correctamente configurado para reportar a d.plaspy.com o 54.85.159.138.
- El endpoint y el puerto estándar de Plaspy se comparten entre los dispositivos compatibles, lo que simplifica la configuración inicial.
- Si un dispositivo no informa como se espera, verificar los ajustes del servidor en el equipo y el APN es el primer paso de resolución.
- Las funciones de SMS y voz operan fuera del canal principal de reporte y pueden ofrecer respaldos útiles para validar ubicación o confirmaciones SOS.

## Transporte y contexto de conexión

El Q10 soporta reportes por GPRS a un servidor remoto y también puede ofrecer coordenadas por SMS y respuestas a consultas telefónicas directas. Para informes en vivo a Plaspy, el dispositivo puede configurarse para enviar datos vía UDP o TCP al puerto de la plataforma. Al configurar el equipo, apúntelo al dominio o IP del servidor Plaspy y asegúrese de que la selección de transporte coincida con las capacidades del dispositivo.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138.
- El puerto es 8888 y el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica implementaciones con múltiples equipos.
- El reporte de datos por GPRS es el canal principal para actualizaciones del mapa en vivo y telemetría hacia Plaspy.
- Las respuestas de coordenadas por SMS y las consultas telefónicas directas siguen siendo respaldos útiles cuando no hay conexión de datos.
- Valide que los ajustes de APN del operador y las políticas de red locales permitan tráfico saliente TCP o UDP hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden modificar el comportamiento de los mensajes y los comandos disponibles, así que verifique el nivel de firmware del equipo al validar compatibilidad.
- Revisiones de hardware o variantes regionales pueden cambiar bandas soportadas, comportamiento de SMS o funciones disponibles.
- La elección entre UDP y TCP depende del firmware del rastreador y de las opciones de configuración que exponga el menú del dispositivo o los comandos de provisión.
- Algunas funciones, como vigilancia de voz, sensores BLE o llamadas bidireccionales, se gestionan fuera del flujo principal de telemetría y pueden requerir configuración adicional.
- Confirme siempre que el servidor de reporte, el puerto y el valor de transporte en el equipo estén ajustados al endpoint de Plaspy antes de depender de la detección automática.
- Si el comportamiento difiere de lo esperado, revise la guía oficial del fabricante y las notas de versión para identificar comportamientos específicos del firmware.

## Por qué es importante conocer el protocolo

Entender cómo se comunica el Q10 ayuda a asegurar una configuración confiable, alertas predecibles y una resolución de problemas más eficaz con Plaspy. Aunque Plaspy automatiza la detección del protocolo, manejar de forma práctica los modos de reporte y las opciones de transporte del equipo reduce el tiempo de puesta en marcha y mejora la confianza operativa.

- Garantiza que el dispositivo esté apuntando al servidor y transporte correctos para que Plaspy reciba actualizaciones en vivo.
- Ayuda a interpretar comportamientos de respaldo como respuestas de ubicación por SMS cuando no hay GPRS.
- Mejora los pasos de resolución para problemas de conectividad, gestión de energía y entrega de eventos.
- Informa decisiones sobre intervalos de reporte y ahorro de energía por movimiento para equilibrar autonomía y visibilidad.
- Guía las expectativas sobre qué funciones aparecerán en Plaspy y cuáles se gestionan en el equipo o por llamadas telefónicas.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP Q10 con Plaspy ofrece una opción compacta y compatible para rastreo personal que integra ubicación en tiempo real, notificaciones SOS y telemetría de eventos en una plataforma centralizada de monitoreo. El Q10 es adecuado para despliegues de seguridad personal donde el hardware discreto, las alertas de emergencia y las ocasionales interacciones de voz bidireccional son requisitos principales.

Para obtener más información sobre integrar dispositivos como el GOTOP Q10 con Plaspy visite https://www.plaspy.com. Para los detalles más actuales sobre protocolo específico del dispositivo, notas de firmware e instrucciones del fabricante, verifique la información en el sitio oficial de GOTOP en https://www.gotop.cc/ ya que el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo.
