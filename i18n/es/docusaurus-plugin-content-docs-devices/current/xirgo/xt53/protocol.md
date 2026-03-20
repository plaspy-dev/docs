---
slug: /xirgo/xt53/protocol
id: xt53-protocol
sidebar_label: Protocol
title: Xirgo - XT53 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo XT53 de Xirgo y cómo se comunica con Plaspy para el rastreo seguro de activos
keywords:
 - Protocolo Xirgo XT53
 - Protocolo GPS Xirgo XT53
 - Compatibilidad XT53 Plaspy
 - Protocolo rastreador de activos Xirgo
 - Protocolo de comunicación XT53
 - Protocolo de rastreo XT53
 - Rastreador GPS Xirgo Plaspy
 - Compatibilidad rastreo XT53 para flotas
 - Guía de protocolo del dispositivo Xirgo
 - Integración de telemetría XT53
---

# Xirgo - Protocolo XT53

Esta página presenta el contexto público del protocolo para usar el rastreador Xirgo XT53 con Plaspy. Explica cómo el XT53, un rastreador de activos ultra compacto y de larga duración, comunica su ubicación y telemetría básica a través de redes celulares hacia Plaspy sin exponer detalles sensibles de implementación. El objetivo es describir las expectativas de conexión y el contexto de integración para gestores de flotas, integradores y equipos técnicos.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo cuando un XT53 está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que esta página se enfoca en hechos públicos y estables que facilitan una configuración exitosa y una operación continua.

## Visión general del protocolo

El protocolo de comunicación del rastreador es el conjunto de reglas que el XT53 usa para identificarse, reportar posición y estado, y enviar la información mínima de uplink que Plaspy necesita para crear posiciones en el mapa y eventos. En la mayoría de despliegues, el protocolo posibilita reportes confiables con énfasis en la eficiencia de batería y la vida útil prolongada.

- Proporciona identidad del dispositivo y uplinks periódicos para que Plaspy pueda ubicar posiciones y detectar cambios de estado.  
- Transporta datos de ubicación y telemetría básica como nivel de batería o eventos de check in que Plaspy convierte en alertas e historial.  
- Soporta intervalos de reporte configurables para equilibrar visibilidad y operación por años con batería.  
- Funciona sobre transportes de red estándar para que el XT53 entregue reportes desde redes celulares hacia Plaspy.  
- Está orientado a reportes compactos y fiables, adecuados para equipos pequeños, pallets y activos desplegados.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los uplinks del XT53 en un endpoint de servidor compartido y emplea detección automática para identificar el protocolo del dispositivo. En la mayoría de los casos no necesita seleccionar un protocolo manualmente dentro de Plaspy si el XT53 está configurado para reportar al endpoint de Plaspy y los ajustes de red son correctos.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com.  
- La dirección IP del servidor Plaspy es 54.85.159.138.  
- Plaspy escucha el tráfico de rastreadores en el puerto 8888 y todos los dispositivos usan ese mismo puerto para reportes.  
- Plaspy detecta automáticamente el protocolo del rastreador a partir del patrón de uplink entrante cuando un dispositivo reporta al endpoint.  
- Normalmente solo es necesario apuntar el dispositivo al endpoint de Plaspy y seleccionar el tipo de transporte adecuado si el rastreador lo requiere.  

## Contexto de transporte y conexión

El contexto de conexión describe cómo el XT53 llega al endpoint de reporte de Plaspy a través de la red móvil. Para muchos rastreadores de activos esto es un uplink celular simple al endpoint compartido de Plaspy usando protocolos de transporte estándar.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones de aprovisionamiento.  
- Los dispositivos comúnmente apuntan a d.plaspy.com o al endpoint numérico 54.85.159.138 cuando se requiere una dirección de host directa.  
- El puerto 8888 es el único puerto que Plaspy utiliza en los dispositivos compatibles para el reporte.  
- Las reglas de red y firewall deben permitir tráfico saliente desde la conexión celular hacia el endpoint de Plaspy y el protocolo de transporte seleccionado.  
- El APN y el aprovisionamiento de la SIM en el XT53 deben permitir uplinks de datos hacia el endpoint de Plaspy para un reporte fiable.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar qué campos se reportan y cuándo, por lo que debe verificar el comportamiento para el firmware específico instalado en un XT53.  
- Las revisiones de hardware pueden modificar el comportamiento de radio o las características de gestión de energía que afectan la cadencia de reportes y la fiabilidad del uplink.  
- Las opciones de configuración o aprovisionamiento del fabricante pueden alterar cómo el dispositivo estructura sus uplinks o qué transporte prefiere.  
- La selección del transporte entre UDP y TCP puede influir en la semántica de entrega en redes con pérdidas y debe coincidir con la configuración del dispositivo y el entorno de red.  
- Confirme que el perfil de SIM y el APN utilizados permiten conexiones al endpoint de Plaspy y no bloquean el transporte requerido.  
- Valide la compatibilidad consultando la documentación oficial del fabricante para detalles de implementación específicos del dispositivo y las notas de firmware más recientes.

## Por qué es importante comprender el protocolo

Comprender cómo se comunica el XT53 ayuda a los equipos a configurar los dispositivos correctamente, solucionar problemas de conectividad y optimizar los reportes para lograr larga duración de batería y visibilidad de ubicación confiable en Plaspy.

- Garantiza que el dispositivo apunte al endpoint y transporte correctos para que los uplinks lleguen de forma predecible.  
- Facilita el diagnóstico de problemas de entrega revisando la resolución de dominio o la dirección numérica y la selección de transporte.  
- Permite tomar decisiones informadas sobre intervalos de reporte para equilibrar visibilidad y duración de batería por varios años.  
- Aclara cuándo diferencias de firmware o hardware pueden explicar cambios en los campos reportados o en el comportamiento.  
- Favorece una incorporación más fluida en despliegues grandes al alinear el aprovisionamiento de dispositivos con las expectativas de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el XT53 con Plaspy ofrece una solución de rastreo compacta y de bajo mantenimiento para activos que deben permanecer conectados durante años. Plaspy ingiere los uplinks del XT53 y los presenta como posiciones en el mapa, eventos y alertas configurables, de modo que usted pueda monitorear la ubicación del activo, el estado de la batería y los eventos de check in sin intervención excesiva en campo.

Para conocer más sobre cómo Plaspy soporta dispositivos como el XT53 visite https://www.plaspy.com. Para detalles específicos del protocolo por dispositivo, notas de firmware y orientación de implementación, verifique la documentación del fabricante en https://xirgo.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
