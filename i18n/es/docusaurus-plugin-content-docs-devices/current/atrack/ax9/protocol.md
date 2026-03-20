---
slug: /atrack/ax9/protocol
id: ax9-protocol
sidebar_label: Protocol
title: ATrack - AX9 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del ATrack AX9 y cómo se comunica con Plaspy para reportes e integración
keywords:
  - ATrack AX9
  - Protocolo ATrack AX9
  - ATrack AX9 GPS
  - ATrack AX9 Plaspy
  - Protocolo rastreador AX9
  - Protocolo rastreador GPS
  - Seguimiento de vehículos
  - Rastreador OBDII
  - Seguimiento de flotas
  - Compatibilidad AX9
---

# ATrack - Protocolo AX9

Esta página presenta el contexto público del protocolo para usar el rastreador GPS ATrack AX9 con la plataforma Plaspy. Se centra en cómo el equipo se comunica con Plaspy, qué papel desempeña el protocolo de reporte del rastreador en una integración exitosa y los detalles prácticos de conexión que necesitará al apuntar un AX9 a Plaspy. Las características del AX9 —conectividad OBDII, soporte 2G y 3G, modo de bajo consumo con suspensión profunda, alta sensibilidad GPS y un sensor G de 3 ejes integrado— son la base funcional de cómo el equipo reporta datos del vehículo a un servicio en la nube.

Plaspy usa configuraciones de conexión compartidas para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando este comienza a reportar en la plataforma. Plaspy acepta tráfico de dispositivos en el endpoint público d.plaspy.com o en 54.85.159.138 por el puerto 8888. El AX9 puede configurarse para usar UDP o TCP en el puerto 8888 al enviar datos. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que se recomienda realizar pruebas de campo y consultar la documentación oficial del fabricante.

## Visión general del protocolo

El protocolo de comunicación del AX9 es el mecanismo que el rastreador emplea para identificarse, enviar actualizaciones de ubicación y reportar eventos como conducción brusca o diagnósticos OBDII a Plaspy. A alto nivel, el protocolo garantiza que los mensajes de telemetría y eventos lleguen al endpoint de Plaspy de una manera que la plataforma pueda procesar y mostrar para monitoreo y generación de informes de flotas.

- Permite la identificación del dispositivo y el establecimiento de sesión para que Plaspy asocie los reportes con el vehículo correcto
- Transporta posiciones GPS, indicadores de eventos y métricas derivadas de OBDII para reportes posteriores
- Soporta mensajes periódicos y basados en eventos para optimizar la vida útil de la batería y el uso de la red
- Funciona sobre transporte IP estándar para que los equipos lleguen a Plaspy a través de redes celulares
- Permite que Plaspy presente datos de ubicación y comportamiento útiles sin que sea necesario seleccionar el protocolo manualmente

## Cómo detecta Plaspy el protocolo

Plaspy está diseñado para aceptar conexiones entrantes en un único endpoint compartido y reconocer automáticamente los formatos comunes de reporte de rastreadores. Esto reduce los pasos de configuración para los administradores y facilita la incorporación de equipos como el AX9.

- Plaspy escucha en d.plaspy.com y 54.85.159.138 por el puerto 8888 para conexiones entrantes de dispositivos
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que uniforma el transporte entre modelos
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo envía datos al endpoint
- En la mayoría de los casos, usted no necesita elegir manualmente un protocolo dentro de Plaspy si el AX9 está correctamente apuntado al endpoint de Plaspy
- Una identificación adecuada del dispositivo y intervalos de reporte consistentes ayudan a la plataforma a mapear los paquetes entrantes al activo correcto

## Transporte y configuración de conexión

La configuración de transporte determina cómo el AX9 alcanza Plaspy y puede afectar la confiabilidad según las condiciones de la red y el firmware del equipo. El dispositivo puede estar configurado para usar UDP o TCP en el puerto 8888 al enviar datos a Plaspy, por lo que debe revisar las opciones de configuración disponibles en su unidad AX9.

- Los dispositivos pueden configurarse para reportar a d.plaspy.com o directamente a 54.85.159.138
- El equipo puede usar UDP o TCP en el puerto 8888 dependiendo del soporte y la configuración del dispositivo
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración de firewalls y NAT
- Elija UDP para mensajes pequeños con menor latencia o TCP para entrega orientada a conexión si el firmware del equipo lo soporta
- Asegúrese de que el APN celular y las reglas de tráfico saliente permitan conexiones al endpoint de Plaspy para evitar que los reportes queden bloqueados

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, campos opcionales y eventos disponibles; verifique la versión de firmware del AX9 al solucionar problemas
- Las revisiones de hardware y distintos lotes de AX9 pueden mostrar menús de configuración o valores por defecto de transporte distintos
- Diferencias en la generación de red, como 2G versus 3G, pueden afectar la conectividad y el rendimiento de mensajes en unidades AX9
- La disponibilidad de datos OBDII depende del soporte del vehículo y de la configuración del dispositivo, y puede requerir pasos adicionales de configuración
- La selección de transporte entre UDP y TCP debe coincidir con lo que el firmware del dispositivo soporta y con lo que su red permite
- Siempre valide el comportamiento en un entorno controlado antes de implementaciones masivas para confirmar que Plaspy recibe los reportes esperados
- Consulte la documentación oficial del fabricante para notas específicas de firmware y características soportadas

## Por qué es importante entender el protocolo

Comprender cómo se comunica el AX9 ayuda a garantizar una configuración confiable, a agilizar el diagnóstico de problemas y a asegurar la entrega precisa de datos a Plaspy. Saber qué revisar cuando un dispositivo no reporta reduce el tiempo de inactividad y aumenta la confianza en el monitoreo a largo plazo.

- Facilita verificar que el dispositivo esté apuntando a d.plaspy.com o 54.85.159.138 y usando el puerto 8888
- Ayuda a aislar problemas de transporte al confirmar si el equipo está usando UDP o TCP
- Orienta las decisiones de actualización de firmware cuando se requieren nuevos tipos de mensajes o correcciones
- Apoya la configuración correcta del reporte OBDII y los umbrales de eventos para la detección de comportamiento del conductor
- Mejora los pasos de diagnóstico para reportes intermitentes o problemas de estado de energía relacionados con el modo de suspensión profunda

## Por qué usar Plaspy con este protocolo

Utilizar el ATrack AX9 con Plaspy ofrece a las organizaciones un camino directo hacia la visibilidad de vehículos y la monitorización de eventos. Las características de hardware del AX9, como la integración OBDII, el sensor G de 3 ejes para detección de conducción brusca y el modo de bajo consumo con suspensión profunda, lo hacen adecuado para flotas, empresas de alquiler y escenarios de seguros por uso, donde tanto la ubicación como el estado del vehículo son importantes.

Si desea obtener más información sobre Plaspy y cómo la plataforma funciona con equipos como el ATrack AX9, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información más reciente sobre el protocolo específico del dispositivo en el sitio web de ATrack https://www.atrack.com.tw/.
