---
slug: /lk_gps/lk770/protocol
id: lk770-protocol
sidebar_label: Protocol
title: LK-GPS - LK770 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo LK-GPS LK770 que explica cómo comunica el rastreador con Plaspy y requisitos de conexión
keywords:
  - Protocolo LK-GPS LK770
  - Protocolo GPS LK-GPS LK770
  - Protocolo LK-GPS LK770 para Plaspy
  - Protocolo de comunicación LK-GPS LK770
  - Protocolo de rastreo LK-GPS LK770
  - Protocolo del rastreador LK-GPS
  - Compatibilidad LK770 con Plaspy
  - Rastreo vehicular LK770
  - Seguimiento de flotas LK770
  - Compatibilidad de rastreadores con Plaspy
---

# LK-GPS - Protocolo LK770

Esta página ofrece una visión pública y orientada al protocolo para usar el rastreador LK-GPS LK770 con Plaspy. Se concentra en el contexto de comunicaciones relevante para el reporte de posiciones, la conectividad y la integración con la plataforma Plaspy, sin exponer detalles propietarios o sensibles de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para enviar datos al endpoint de Plaspy. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página enfatiza el contexto general del protocolo y consideraciones prácticas para la integración y resolución de problemas.

## Resumen del protocolo

El protocolo del LK770 define cómo el rastreador se identifica ante un servidor, transmite posición GNSS y telemetría, y recibe comandos remotos básicos o confirmaciones de configuración según lo permita el dispositivo y su firmware. En el contexto de Plaspy, el protocolo es el puente entre la telemetría del dispositivo y los servicios de la plataforma que registran y presentan la ubicación y el estado.

- Permite que el LK770 envíe reportes de ubicación periódicos y basados en eventos a un servidor remoto
- Transmite identidad y estado del dispositivo para que Plaspy asocie los datos con el activo correcto
- Envía telemetría como coordenadas GPS, alertas por movimiento o vibración y señales de alarma
- Admite vías de configuración y consulta por SMS o por el canal de datos celular según la configuración del equipo
- Opera sobre el enlace celular del dispositivo y depende de la implementación del firmware para tiempos, formatos y mensajes soportados

## Cómo detecta Plaspy el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto comunes y está diseñado para identificar automáticamente los formatos de reporte de los dispositivos. Cuando un LK770 está correctamente configurado para reportar a Plaspy, la plataforma intentará reconocer el protocolo del rastreador y procesar los mensajes entrantes para que el dispositivo aparezca en la cuenta de usuario sin selección manual de protocolo.

- Plaspy usa el endpoint compartido d.plaspy.com y escucha los reportes de los dispositivos
- La IP del servidor de Plaspy para reportes de dispositivos es 54.85.159.138 y el servicio usa el puerto 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que los usuarios no necesitan configurar puertos únicos por equipo
- Si el LK770 apunta al endpoint de Plaspy y el enlace celular está activo, Plaspy detectará el protocolo del rastreador automáticamente
- En general, los usuarios solo deben ajustar la dirección de reporte y el tipo de transporte en el lado del rastreador para que ocurra el descubrimiento

## Transporte y contexto de conexión

El transporte determina cómo el LK770 envía sus reportes a Plaspy. El rastreador puede estar configurado para usar UDP o TCP en el mismo puerto que escucha Plaspy. Comprender las opciones de transporte ayuda a configurar firewalls, anticipar el comportamiento de NAT y garantizar la entrega fiable de mensajes en su despliegue.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- El endpoint de reporte de Plaspy puede establecerse en d.plaspy.com o en la IP del servidor 54.85.159.138
- Plaspy usa el puerto 8888 para todo el reporte de dispositivos, por lo que se emplea el mismo puerto de salida entre distintos modelos de rastreadores
- Seleccione el transporte en función de las capacidades del dispositivo y las características de la red; algunas redes manejan UDP y TCP de modo distinto
- Asegúrese de que el enrutamiento de red y los firewalls permitan conexiones salientes a d.plaspy.com en el puerto 8888 para que el rastreador pueda reportar con éxito

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware del fabricante pueden alterar la temporización de mensajes, las funciones soportadas y los comandos de configuración; confirme siempre la versión de firmware al diagnosticar problemas de compatibilidad
- Revisions de hardware o variantes del modelo pueden implementar comportamientos ligeramente distintos aunque se vendan bajo el mismo nombre de modelo
- La selección de transporte (UDP vs TCP) puede afectar la semántica de entrega y debe coincidir con la configuración del dispositivo y el entorno de red
- Los métodos de configuración por SMS o mediante ajustes locales suelen estar disponibles además del reporte por canal de datos; verifique los flujos de configuración compatibles con el LK770
- Plaspy detecta el protocolo automáticamente cuando el dispositivo reporta al endpoint configurado, pero validar la identidad del equipo y los mensajes iniciales puede acelerar la resolución de problemas
- Consulte la documentación del fabricante para parámetros específicos o funciones opcionales que puedan afectar el reporte

## Por qué es importante comprender el protocolo

Conocer el protocolo de comunicación del LK770 y cómo interactúa con Plaspy contribuye a una configuración confiable, reportes de ubicación precisos y una resolución de problemas más efectiva durante la puesta en marcha y la operación.

- Ayuda a confirmar que el dispositivo apunta al endpoint y al transporte correctos de Plaspy
- Agiliza el diagnóstico de problemas de conectividad como puertos bloqueados o direcciones de servidor incorrectas
- Aclara qué datos enviará el dispositivo y qué registrará Plaspy para monitoreo y alertas
- Orienta decisiones sobre actualizaciones de firmware, configuración de funciones y mantenimiento a largo plazo
- Reduce el tiempo de inactividad al alinear la configuración del dispositivo con las expectativas de la plataforma antes de desplegar a gran escala

## Por qué usar Plaspy con este protocolo

Usar el LK770 con Plaspy ofrece una ruta práctica hacia la visibilidad del vehículo y el control operativo. El diseño compacto del LK770, su conexión GNSS y celular integrada y funciones de seguridad como SOS y alertas por vibración lo hacen adecuado para rastreo de autos y motocicletas. Cuando está configurado para reportar a Plaspy, la telemetría del rastreador puede consolidarse, visualizarse y utilizarse para alertas y reproducción de historial apoyando la gestión de flotas, la protección de activos y la respuesta a incidentes.

Si desea saber más sobre Plaspy y cómo se integra con dispositivos como el LK770, visite https://www.plaspy.com. Para detalles específicos de protocolo, notas de firmware y orientación del fabricante, verifique la información actual en la documentación oficial de LK GPS en https://www.lk-gps.com.
