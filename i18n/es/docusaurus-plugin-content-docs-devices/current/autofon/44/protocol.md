---
slug: /autofon/44/protocol
id: 44-protocol
sidebar_label: Protocol
title: AutoFon - Маяк 4.4 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo AutoFon Маяк 4.4 para integración con Plaspy y orientación sobre transporte y compatibilidad
keywords:
  - protocolo AutoFon Mayak 4.4
  - protocolo GPS AutoFon Маяк 4.4
  - protocolo de comunicación AutoFon Маяк 4.4
  - protocolo del rastreador AutoFon
  - compatibilidad Mayak 4.4 Plaspy
  - protocolo de rastreador GPS Plaspy
  - rastreo vehicular AutoFon
  - seguimiento AutoFon GPRS SMS
  - integración Mayak 4.4
  - soporte de rastreador Plaspy
---

# AutoFon - Protocolo Маяк 4.4

Esta página describe el contexto público del protocolo para usar el rastreador AutoFon Маяк 4.4 con Plaspy. Se centra en cómo el dispositivo comunica posición y telemetría a Plaspy mediante los modos de reporte documentados públicamente, y cómo se procesa esa información en términos generales. La orientación aquí está dirigida a usuarios técnicos e integradores que necesitan comprender la relación de comunicación entre el rastreador y Plaspy sin exponer detalles privados de implementación.

Plaspy utiliza ajustes de conexión compartidos para los dispositivos compatibles y detecta automáticamente el protocolo de reporte cuando la unidad está correctamente configurada para enviar datos al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la configuración del fabricante; confirme los ajustes del equipo con la documentación del fabricante cuando sea necesario. Los detalles públicos de conexión de Plaspy para el reporte son d.plaspy.com o 54.85.159.138 usando el puerto 8888 y los dispositivos pueden configurarse para usar UDP o TCP en ese puerto. Plaspy usa el mismo puerto para todos los dispositivos soportados y gestiona la detección automática del protocolo del rastreador.

## Panorama del protocolo

El Маяк 4.4 transmite datos de posición y eventos a un servidor mediante SMS y paquetes GPRS periódicos como métodos principales de reporte. En el contexto de Plaspy, el rastreador informa ubicación, estado y eventos de alarma para que Plaspy pueda mostrar posiciones en el mapa, generar alertas y soportar flujos básicos de control remoto vía SMS o mensajes de comando.

- Permite al dispositivo enviar actualizaciones de ubicación y estado a Plaspy para mapeo y notificaciones.
- Transporta eventos de alarma y de canales auxiliares para que Plaspy muestre notificaciones críticas y active flujos de trabajo.
- Soporta modos de reporte por SMS y GPRS por intervalos para balancear frecuencia de reporte y duración de batería.
- Permite control remoto mediante mensajes SMS para funciones como activación de canales auxiliares y monitoreo de audio.
- Proporciona señales periódicas de vida y mensajes sobre el estado de la SIM para la monitorización de salud del dispositivo en Plaspy.

## Detección del protocolo por Plaspy

Plaspy determina automáticamente el formato de reporte del rastreador una vez que el dispositivo está configurado para reenviar datos al endpoint de Plaspy. Normalmente usted no necesita seleccionar un protocolo dentro de Plaspy cuando el equipo está apuntando al servidor y puerto proporcionados; la plataforma asociará el flujo de datos entrante con la rutina de parseo compatible.

- Configure la dirección de reporte hacia d.plaspy.com o 54.85.159.138 para que los datos lleguen a Plaspy.
- Use el puerto 8888 para el reporte; Plaspy utiliza el mismo puerto para todos los dispositivos soportados.
- Configure el dispositivo para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y las condiciones de la red.
- Asegúrese de que el dispositivo envíe señales periódicas de vida o reportes GPRS/SMS para que Plaspy pueda detectar y mapear el comportamiento del equipo.
- Tras la llegada de los primeros reportes, Plaspy asociará los datos entrantes con el dispositivo y aplicará el procesamiento adecuado para ubicación y eventos.

## Transporte y contexto de conexión

El Маяк 4.4 soporta reportes basados en GSM mediante SMS y paquetes GPRS por intervalos, y cuando se integra con Plaspy la configuración de transporte y direccionamiento es clave para alcanzar el endpoint de ingestión de Plaspy. El equipo puede configurarse para usar transporte UDP o TCP según su capacidad y la configuración elegida.

- El destino de reporte puede establecerse en d.plaspy.com o directamente en 54.85.159.138.
- El puerto 8888 es el usado por Plaspy para el reporte de dispositivos y es el mismo para todos los rastreadores compatibles.
- El rastreador puede transmitir vía UDP o TCP en el puerto 8888; elija el transporte que coincida con la configuración del dispositivo y las condiciones de red.
- El SMS sigue siendo un canal alternativo o complementario para alertas y comandos remotos cuando el GPRS es intermitente o no está disponible.
- Confirme el APN y los ajustes de red móvil en el rastreador para que los paquetes GPRS lleguen con éxito al endpoint configurado de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo de los mensajes, los comandos disponibles y los campos de reporte; confirme siempre la compilación de firmware del dispositivo.
- Las revisiones de hardware pueden alterar comportamientos como la gestión de energía y la frecuencia de reporte, lo que afecta la periodicidad de las actualizaciones recibidas por Plaspy.
- Las opciones de configuración del lado del fabricante determinan si la unidad reporta principalmente por SMS, por GPRS o utiliza un enfoque híbrido; seleccione el modo que cubra sus necesidades operativas.
- La elección del transporte (UDP versus TCP) puede afectar las características de entrega; decida según la fiabilidad de la red y la capacidad del dispositivo.
- Algunas funciones avanzadas, como la activación remota de audio o el control de canales auxiliares, dependen del soporte de comandos por SMS y de los números autorizados configurados.
- Valide la compatibilidad y los ajustes recomendados contra la documentación oficial de AutoFon y el manual del dispositivo antes de realizar un despliegue a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el Маяк 4.4 ayuda a asegurar una configuración adecuada, reportes confiables y un diagnóstico efectivo al integrar con Plaspy. Conocer la interacción entre el modo de reporte, la selección de transporte y la configuración del endpoint de Plaspy reduce el tiempo de integración y ayuda a mantener la fiabilidad del dispositivo y la duración de la batería a largo plazo.

- Garantiza que el dispositivo esté configurado para enviar reportes a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Ayuda a equilibrar la frecuencia de reporte y la longevidad de la batería seleccionando ajustes de GPRS por intervalo o SMS apropiados.
- Mejora la resolución de problemas al clarificar si un fallo es de transporte, de red o de firmware.
- Soporta flujos correctos de control remoto cuando se requieren comandos por SMS y configuración de números autorizados.
- Facilita la planificación de ventanas de mantenimiento del dispositivo y los intervalos esperados de señales de vida.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Маяк 4.4 con Plaspy ofrece una solución práctica para organizaciones que requieren seguimiento discreto y de larga duración de activos, además de alertas por eventos. Plaspy puede ingerir las actualizaciones SMS y GPRS periódicas del dispositivo, mapear posiciones y mostrar alarmas y telemetría en paneles y reportes que ayudan con la supervisión de flotas, procesos de recuperación y protección remota de activos.

Si desea explorar Plaspy y cómo maneja el reporte de dispositivos y alertas, conozca más en https://www.plaspy.com. Para los detalles más recientes sobre el protocolo específico del equipo, notas de firmware e instrucciones de configuración, verifique la información con el fabricante en https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
