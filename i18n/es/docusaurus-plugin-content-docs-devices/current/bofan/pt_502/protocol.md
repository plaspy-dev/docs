---
slug: /bofan/pt_502/protocol
id: pt_502-protocol
sidebar_label: Protocol
title: Bofan - PT-502 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador GPS Bofan PT-502 y su comunicación con Plaspy para integración y monitoreo
keywords:
  - Protocolo Bofan PT-502
  - Protocolo GPS Bofan PT-502
  - Compatibilidad PT-502 Plaspy
  - Protocolo rastreador GPS Bofan
  - Protocolo de seguimiento PT-502
  - Comunicación rastreador GPS
  - Protocolo de dispositivo Plaspy
  - Rastreo vehicular PT-502
  - Rastreo de flotas Bofan PT-502
  - Documentación protocolo PT 502
---

# Bofan - Protocolo PT-502

Esta página ofrece un contexto público del protocolo para usar el rastreador GPS para autos Bofan PT-502 con Plaspy. Se centra en cómo el dispositivo comunica con el endpoint de ingestión de Plaspy y qué esperar durante la integración, sin revelar detalles de implementación privados. El PT-502 es un equipo versátil con funciones como reporte por GPRS, control por SMS, posicionamiento GPS y GLONASS, corte de motor, alertas SOS y geocerca, y registro de posiciones.

Plaspy utiliza una configuración de conexión compartida entre los dispositivos compatibles y detecta automáticamente el protocolo cuando el dispositivo envía datos al endpoint de Plaspy. El comportamiento exacto y los mensajes pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; por ello, usted debe verificar el comportamiento específico del equipo contra la documentación del fabricante cuando sea necesario.

## Visión general del protocolo

El protocolo de reporte del PT-502 define la forma en que el rastreador envía ubicación, estado y alarmas a un servidor remoto para que plataformas como Plaspy puedan parsear y mostrar la información. A alto nivel, el protocolo permite que el equipo se identifique, transmita telemetría y entregue notificaciones de eventos que soportan flujos de trabajo de seguimiento y gestión de flotas.

- Transporta telemetría periódica y por eventos, como coordenadas GPS, hora y banderas de estado para su uso en los paneles de Plaspy
- Permite que el dispositivo incluya identificación para que la plataforma asocie los mensajes entrantes con el activo correcto
- Soporta eventos de alarma y control como SOS, activación de geocerca, alertas por batería baja y señales opcionales de corte remoto de motor
- Funciona sobre canales estándar de datos móviles para entregar reportes en tiempo real o casi en tiempo real a un endpoint de servidor
- Habilita funciones de registro de posiciones que se pueden subir a la plataforma para reproducción histórica e informes

## Cómo detecta Plaspy el protocolo

Plaspy escucha en un único endpoint compartido para los reportes de dispositivos y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. Para la mayoría de los usuarios esto significa que no es necesario seleccionar manualmente un protocolo dentro de Plaspy siempre que el PT-502 esté configurado para reportar al endpoint de Plaspy.

- Plaspy usa el mismo puerto para todos los dispositivos compatibles, lo que simplifica la configuración
- Los dispositivos que reportan correctamente al endpoint de Plaspy son detectados automáticamente por la plataforma
- Usted típicamente configura el PT-502 para enviar datos al dominio o IP del servidor de Plaspy y elige el transporte adecuado
- La detección del protocolo se basa en los mensajes entrantes del dispositivo y no en una selección manual
- Si un dispositivo no es detectado, las comprobaciones más comunes incluyen verificar la dirección del servidor, el tipo de transporte y la conectividad de datos de la SIM

## Contexto de transporte y conexión

El PT-502 puede usar UDP o TCP para enviar datos según la configuración del equipo y las condiciones de red. Al integrar con Plaspy, configure el rastreador para usar el endpoint compartido de Plaspy y el puerto designado para que los reportes lleguen a la plataforma de forma fiable.

- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com
- Plaspy también acepta conexiones dirigidas a la IP pública 54.85.159.138
- El puerto de transporte designado para todos los dispositivos Plaspy es 8888
- El PT-502 puede configurarse para usar UDP o TCP en el puerto 8888 según su firmware y ajuste
- Asegúrese de que el APN y la configuración de datos móviles del dispositivo sean correctos para que el reporte por GPRS llegue al endpoint de Plaspy

## Notas de compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware del PT-502 pueden cambiar el comportamiento de los mensajes y las funciones disponibles; verifique la compatibilidad para su unidad específica
- El dispositivo soporta reportes por GPRS y SMS; al usar Plaspy, el camino típico de integración es el reporte por GPRS al endpoint de Plaspy
- La selección del transporte (UDP vs TCP) puede afectar la confiabilidad y la entrega; elija el transporte que coincida con la configuración del equipo y el entorno de red
- Las opciones configurables por el fabricante, como intervalos de reporte, umbrales de alarma y comportamiento de registro, pueden influir en la frecuencia de llegada de datos a Plaspy
- Confirme siempre que el dispositivo esté apuntando a d.plaspy.com o a 54.85.159.138 en el puerto 8888 para la detección automática por parte de Plaspy
- Si usted depende de funciones avanzadas como el corte remoto de motor, asegúrese de que esos controles estén soportados y permitidos en su despliegue y por el firmware del equipo

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación usado por el PT-502 facilita una configuración fiable, una resolución de problemas efectiva y una operación consistente a largo plazo cuando el dispositivo reporta a Plaspy. Conocer el protocolo reduce el tiempo de integración y mejora las probabilidades de un despliegue sin contratiempos.

- Facilita confirmar que el dispositivo está llegando a Plaspy al revisar transporte, dirección del servidor e intervalos de reporte
- Ayuda a diagnosticar problemas comunes como telemetría faltante, marcas de tiempo incorrectas de posición o alarmas no reportadas
- Informa decisiones sobre elección de transporte, frecuencia de reporte y gestión de energía para instalaciones sensibles a batería
- Aclara cómo las funciones del dispositivo como SOS, geocerca y corte de motor se representan en los eventos de la plataforma
- Apoya la planificación de actualizaciones de firmware, reemplazos de hardware o cambios en la configuración del equipo

## Por qué usar Plaspy con este protocolo

Usar el Bofan PT-502 con Plaspy ofrece a las organizaciones una forma de recolectar y visualizar datos de ubicación y eventos del rastreador en una plataforma centralizada. La detección automática de protocolo y la configuración de conexión compartida de Plaspy simplifican la incorporación, permitiendo que flotas y propietarios de vehículos se concentren en la supervisión operativa en lugar de en integraciones de bajo nivel.

Para obtener más información sobre cómo Plaspy trabaja con dispositivos como el PT-502, visite https://www.plaspy.com. Tenga en cuenta que el comportamiento del protocolo, las funciones de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que siempre deberá verificar las especificaciones y las instrucciones de configuración más recientes del PT-502 en el sitio del fabricante https://www.bofancloud.com/ antes de tomar decisiones de despliegue.
