---
slug: /cityeasy/201/protocol
id: 201-protocol
sidebar_label: Protocol
title: Cityeasy - 201 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador Cityeasy 201 y su comunicación con Plaspy para monitoreo vehicular confiable
keywords:
  - Cityeasy 201
  - protocolo Cityeasy 201
  - rastreador GPS Cityeasy 201
  - protocolo de seguimiento Cityeasy 201
  - compatibilidad Cityeasy Plaspy
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS
  - protocolo rastreo vehicular
  - rastreo de flotas Cityeasy
  - conectividad Cityeasy
---

# Cityeasy - Protocolo 201

Esta página resume el contexto público del protocolo para usar el rastreador GPS Cityeasy 201 con Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, para que gerentes de flotas e integradores entiendan el papel del protocolo en el reporte de ubicación, alertas como notificaciones por vibración y datos históricos de ruta.

Plaspy usa una configuración de conexión compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los dispositivos reportan al endpoint de Plaspy. Plaspy escucha en d.plaspy.com y en la IP 54.85.159.138 usando el puerto 8888. Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888, y todos los dispositivos en Plaspy emplean el mismo puerto. El comportamiento exacto del protocolo puede variar según el firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración del dispositivo y la documentación del fabricante siguen siendo importantes.

## Resumen del protocolo

El protocolo de reporte Cityeasy 201 permite que el dispositivo entregue telemetría y eventos útiles a Plaspy para que la plataforma ofrezca ubicación en vivo, alertas y reproducción histórica de rutas. El protocolo define cómo el rastreador se identifica, informa posición y estado, y envía alertas al endpoint del servidor provisto por Plaspy.

- Transporta fuentes de posición como GPS y LBS al servidor de Plaspy para mapeo y monitoreo
- Transmite información de eventos como alertas por vibración y cambios de estado para notificaciones oportunas
- Envía estados periódicos e información de batería para ayudar a monitorear la salud del dispositivo y su tiempo de actividad
- Permite el envío de datos de rutas históricas para que los desplazamientos pasados estén disponibles en Plaspy
- Funciona sobre transportes de red comunes para que el dispositivo pueda reportar desde conexiones de datos móviles

## Cómo Plaspy detecta el protocolo

Plaspy recibe los datos entrantes en el endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador usado por el dispositivo que reporta. En la mayoría de los casos no necesitará seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente configurado para enviar datos al endpoint de Plaspy.

- Plaspy escucha reportes de dispositivos en d.plaspy.com y 54.85.159.138 usando el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración
- Plaspy detecta automáticamente el protocolo del rastreador cuando recibe datos desde un dispositivo configurado
- Si un dispositivo está apuntando al endpoint de Plaspy y la conectividad de red es válida, la selección manual de protocolo dentro de Plaspy normalmente no es necesaria
- Asegúrese de que el servidor de reporte del dispositivo esté configurado hacia el endpoint de Plaspy y que el APN o la configuración de la SIM permitan conexiones salientes

## Transporte y contexto de conexión

El Cityeasy 201 puede configurarse para usar el transporte de red soportado por el dispositivo y la red móvil. Al integrar con Plaspy, normalmente deberá apuntar el rastreador a la dirección y puerto del servidor de Plaspy y seleccionar el transporte que coincida con la configuración del dispositivo.

- Los dispositivos pueden configurarse para reportar vía UDP o TCP en el puerto 8888 según las capacidades y ajustes del equipo
- Plaspy acepta reportes dirigidos a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888
- Usar el nombre DNS d.plaspy.com suele ser preferible, pero apuntar a la IP puede ser necesario en equipos con restricciones
- Confirme que los firewalls del operador y la NAT no bloqueen el tráfico saliente UDP o TCP para la SIM del dispositivo
- El uso consistente del mismo puerto en todos los dispositivos reduce la variación en la configuración y el trabajo con firewalls

## Notas sobre compatibilidad del protocolo

- Las diferencias en versiones de firmware pueden cambiar cómo y cuándo el dispositivo reporta eventos o estados
- Las revisiones de hardware pueden introducir pequeños cambios en el comportamiento o en los transportes soportados
- Las opciones de configuración del fabricante, como transporte por defecto, intervalos de reporte y ajustes de APN, afectan la integración
- Algunos dispositivos pueden requerir configuración explícita para reportar al endpoint de Plaspy en lugar de a la nube del fabricante
- Los modos de ahorro de batería o la gestión de energía pueden alterar la frecuencia de reporte y el comportamiento percibido del protocolo
- Valide las configuraciones del dispositivo con la documentación del fabricante al solucionar problemas de integración

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo de comunicación ayuda a garantizar una conexión confiable entre los dispositivos Cityeasy 201 y Plaspy, acelera la resolución de problemas y mejora la fiabilidad a largo plazo en el reporte de ubicaciones y eventos.

- Garantiza que el rastreador esté configurado para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888 usando el transporte correcto
- Ayuda a diagnosticar problemas de conectividad como puertos bloqueados, configuración APN incorrecta o restricciones del operador
- Aclara cómo alertas como las notificaciones por vibración se entregan a Plaspy para los flujos de trabajo de notificación
- Ayuda a interpretar por qué un dispositivo puede reportar con menor frecuencia debido a firmware o modos de ahorro de energía
- Apoya decisiones informadas al actualizar firmware o desplegar nuevas revisiones de hardware

## Por qué usar Plaspy con este protocolo

Usar el Cityeasy 201 con Plaspy ofrece una forma sencilla de integrar ubicación vehicular confiable, alertas de movimiento y enrutamiento histórico en una sola plataforma de gestión de flotas. El endpoint unificado de Plaspy y la detección automática de protocolos reducen la complejidad de la configuración y permiten que los equipos se enfoquen en el monitoreo y las operaciones en lugar de en la compatibilidad de protocolos.

To learn more about Plaspy and how it can integrate with Cityeasy trackers visit https://www.plaspy.com. Protocol support, firmware behavior, and manufacturer implementation details can change over time, so verify the latest device specific protocol information with the manufacturer on their official website.
