---
slug: /calmamp/aut_620/protocol
id: aut_620-protocol
sidebar_label: Protocol
title: CalmAmp - AUT-620 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para la comunicación del CalmAmp AUT-620 y su compatibilidad con Plaspy
keywords:
  - CalmAmp AUT-620 protocolo
  - CalmAmp AUT-620 GPS
  - CalmAmp AUT-620 rastreo
  - Protocolo CalmAmp
  - AUT-620 Plaspy
  - Compatibilidad dispositivos Plaspy
  - Protocolo rastreador de activos
  - Comunicación rastreador GPS
  - Protocolo seguimiento de vehículos
  - CalmAmp motor de alertas PEG
---

# CalmAmp - Protocolo AUT-620

Esta página ofrece contexto público sobre el protocolo para usar el rastreador de activos CalmAmp AUT-620 con Plaspy. Describe, a alto nivel, cómo se comunica el dispositivo, cómo Plaspy recibe los informes del equipo y qué aspectos del protocolo son relevantes al integrar el AUT-620 para monitoreo de activos a largo plazo. La información aquí pretende aclarar conceptos de conexión y compatibilidad, no sustituir manuales técnicos del fabricante.

El AUT-620 es un rastreador de activos a batería diseñado para despliegues prolongados, con antenas celulares y GPS internas, un motor de eventos programable y capacidad de servicio por aire. Plaspy emplea configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y los ajustes del fabricante, por lo que la configuración del equipo y el estado del firmware influyen en la conducta observable del protocolo.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de comportamientos y formatos de mensajes que permiten al AUT-620 identificarse ante un servidor, reportar ubicación e información de eventos, y recibir actualizaciones remotas de configuración. Con Plaspy, el objetivo del protocolo es la entrega fiable de reportes de rastreo y alertas desde el dispositivo hacia el backend de Plaspy para que esos mensajes puedan ser procesados y presentados a los usuarios.

- El protocolo permite que el AUT-620 envíe reportes de posición periódicos o basados en eventos, además de mensajes de estado a un servidor remoto.
- La identificación del dispositivo y los metadatos básicos en los informes permiten a Plaspy asociar los datos entrantes con el perfil de activo correcto.
- El reporte de eventos desde el motor de eventos programable del dispositivo soporta monitoreo por excepciones, como detección de movimiento, geocercas o cambios en entradas digitales.
- Los canales de actualización y configuración por aire son utilizados por CalmAmp para actualizaciones de firmware y provisión de reglas, lo cual puede afectar el comportamiento del dispositivo observado por Plaspy.
- El comportamiento del protocolo visible a nivel de red depende de la configuración y el firmware del equipo, por lo que modelos similares pueden mostrar pequeñas diferencias en la frecuencia de mensajes o en el contenido de los eventos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador que usa cada flujo de datos entrante. Cuando un AUT-620 está configurado para reportar a Plaspy, la plataforma identifica el equipo que envía los reportes y enruta los mensajes al pipeline de procesamiento correcto sin que, en la mayoría de los casos, sea necesario seleccionar el protocolo manualmente.

- Plaspy usa un único endpoint público de servidor para reportes de dispositivos en d.plaspy.com.
- La IP del servidor de Plaspy es 54.85.159.138 y la plataforma escucha en el puerto 8888 para conexiones de dispositivos.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del equipo y del servidor.
- Plaspy detecta automáticamente el protocolo del rastreador cuando se recibe un reporte autenticado o reconocible del dispositivo.
- Normalmente no necesitará seleccionar manualmente un protocolo dentro de Plaspy si el AUT-620 está configurado para reportar al endpoint de Plaspy.

## Transporte y contexto de conexión

La elección del transporte y la configuración del endpoint determinan cómo el AUT-620 se conecta a Plaspy. El dispositivo puede configurarse para usar distintos transportes según el soporte del operador, el firmware y las decisiones del instalador. Comprender el contexto de conexión es importante para reglas de firewall y para garantizar la entrega fiable de reportes del dispositivo.

- El AUT-620 puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y las opciones de configuración.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 para el envío de reportes.
- Plaspy escucha en el mismo puerto para todos los dispositivos compatibles, por lo que se utiliza un único puerto 8888 en toda la flota.
- Usar el nombre de dominio d.plaspy.com puede ofrecer conmutación por error a nivel DNS y facilitar la gestión de nombres de host en dispositivos desplegados.
- Confirme que la configuración del operador y la red permiten el transporte y el destino elegidos para alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las revisiones de firmware y las configuraciones de reglas PEG en el AUT-620 pueden cambiar el conjunto de eventos y la temporización de mensajes que emite el dispositivo.
- Las variantes de hardware y diferencias en el firmware de radio pueden afectar los transportes soportados o el comportamiento en redes celulares.
- La elección entre UDP y TCP puede influir en las características de entrega de mensajes y debería coincidir con la configuración del dispositivo.
- Servicios por aire como CalmAmp PULS pueden modificar la configuración del dispositivo y, por tanto, alterar cómo aparece el equipo ante Plaspy tras una actualización.
- Valide el reporte del dispositivo confirmando que el rastreador está configurado para enviar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre contraste el comportamiento observado con la documentación del fabricante cuando resuelva diferencias entre dispositivos.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación y el contexto de conexión ayuda a asegurar una incorporación exitosa del dispositivo, una resolución de problemas precisa y una operación predecible a largo plazo con Plaspy. Saber qué esperar del AUT-620 a nivel de red reduce el tiempo de integración y facilita aislar problemas de configuración o de red rápidamente.

- Ayuda a confirmar que el dispositivo está reportando al endpoint y puerto correctos de Plaspy.
- Contribuye a diagnosticar por qué eventos o posiciones esperadas no están llegando al backend.
- Informa la configuración de red y firewall necesaria para permitir el tráfico del dispositivo hacia Plaspy.
- Orienta decisiones sobre selección de transporte y gestión de energía que impactan la frecuencia de reportes.
- Facilita la coordinación con los servicios OTA de CalmAmp cuando se actualiza firmware o reglas.

## Por qué usar Plaspy con este protocolo

Usar el CalmAmp AUT-620 con Plaspy ofrece un enfoque práctico para la visibilidad de activos a largo plazo y el monitoreo basado en excepciones. El diseño de bajo consumo del AUT-620, sus antenas internas y su motor de eventos programable lo hacen adecuado para despliegues en los que la vida útil de la batería y la flexibilidad de alertas son críticas. Al configurar el dispositivo para enviar reportes a Plaspy, los activos pueden rastrearse de forma centralizada, las alertas pueden gestionarse y los datos históricos pueden conservarse para análisis operativos.

Si desea obtener más información sobre Plaspy y cómo maneja las comunicaciones de dispositivos, visite https://www.plaspy.com. El comportamiento del protocolo, las funciones de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, así que confirme la información específica más reciente en el sitio del fabricante http://www.calamp.com/ antes de finalizar desplegados.
