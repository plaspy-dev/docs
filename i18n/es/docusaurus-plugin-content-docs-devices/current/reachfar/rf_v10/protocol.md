---
slug: /reachfar/rf_v10/protocol
id: rf_v10-protocol
sidebar_label: Protocol
title: Reachfar - RF-V10 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Reachfar RF V10 y cómo se comunica con Plaspy para seguimiento en vivo y envío de alertas
keywords:
  - Protocolo Reachfar RF V10
  - Rastreador GPS Reachfar RF V10
  - Protocolo RF V10 Plaspy
  - Comunicación GPS Reachfar
  - Protocolo de rastreo RF V10
  - Protocolo GPS para motocicletas
  - Compatibilidad de dispositivos Plaspy
  - Comunicación de rastreadores GPS
  - Protocolo para rastreadores de motocicleta
  - Reporte de alarmas RF V10
---

# Reachfar - Protocolo RF-V10

Esta página presenta el contexto público del protocolo para usar el rastreador Reachfar RF-V10 con Plaspy. Se concentra en cómo el dispositivo entrega posiciones GPS, eventos de alarma y actualizaciones de estado a través de canales celulares estándar, de modo que los operadores comprendan cómo fluye la información hacia Plaspy sin exponer detalles internos de firmware ni parsers privados.

Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el RF-V10 está correctamente configurado para reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la puesta en marcha y la resolución de problemas prácticas suelen requerir validar el firmware del equipo y la documentación oficial de Reachfar.

## Resumen del protocolo

El RF-V10 emplea GSM GPRS para el reporte en tiempo real de posiciones y también puede enviar alertas por SMS; esos canales públicos de transporte son los mecanismos reales que el protocolo utiliza para entregar telemetría y alarmas a plataformas de monitoreo como Plaspy. El rol del protocolo es convertir eventos en el dispositivo y fijaciones GPS en mensajes que un backend pueda interpretar y mostrar.

- Envía actualizaciones de ubicación GPS y marcas de tiempo para que Plaspy muestre posiciones en vivo y trazas históricas.
- Reenvía eventos de alarma y estado como alarma por vibración, alarma sonora, corte de línea, batería baja y cambios de ignición.
- Usa datos celulares (GPRS) como transporte principal y SMS como canal alterno o complementario para alertas y comandos.
- Incluye identidad del dispositivo e información de estado para que Plaspy pueda correlacionar los mensajes entrantes con la unidad correcta.
- Permite que eventos relacionados con control remoto, por ejemplo cambios en el estado del inmovilizador, se reflejen en la plataforma.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes del RF-V10 en un endpoint compartido de la plataforma e identifica automáticamente el protocolo del dispositivo según el patrón de conexión y mensajes entrantes. En la mayoría de los casos, cuando un rastreador está configurado para reportar a Plaspy, no se requiere seleccionar manualmente el protocolo dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138, que son los endpoints públicos a los que el dispositivo puede apuntar.
- El puerto es 8888 y el dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según la capacidad del equipo y el transporte preferido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración del dispositivo y reduce ajustes por modelo en el servidor.
- Plaspy detecta automáticamente el protocolo del rastreador cuando los mensajes llegan al endpoint compartido, por lo que generalmente no es necesario seleccionar el protocolo manualmente en Plaspy.
- Asegúrese de que el RF-V10 esté configurado con el APN GPRS y los ajustes de servidor correctos para que los mensajes lleguen al endpoint de Plaspy.

## Transporte y contexto de conexión

Comprender el contexto de transporte y conexión ayuda a garantizar que el RF-V10 alcance Plaspy de forma confiable a través de redes celulares. El RF-V10 usa GSM GPRS para el reporte de datos y puede también usar SMS para eventos clave y redundancia.

- El RF-V10 puede emplear UDP o TCP en el puerto 8888 para enviar datos GPRS a Plaspy, dependiendo de la configuración del equipo y el soporte de firmware.
- Los dispositivos pueden apuntar a d.plaspy.com o directamente a 54.85.159.138 como objetivo del servidor usado por Plaspy.
- Plaspy utiliza un puerto consistente para todos los dispositivos compatibles, lo que facilita la configuración del servidor en flotas mixtas.
- El SMS sigue siendo un respaldo útil para la entrega de alarmas o la configuración en unidades donde la conectividad GPRS sea intermitente.
- Verifique el APN, el número maestro y los ajustes de servidor en el RF-V10 para asegurarse de que el rastreador reporte al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la estructura de los mensajes, los campos incluidos y el momento en que se reportan eventos específicos.
- Las revisiones de hardware o variantes regionales del RF-V10 pueden modificar los sensores disponibles o el comportamiento de reporte por defecto.
- Algunos reportes de eventos (por ejemplo confirmaciones de inmovilización remota o sensibilidad de sensores) pueden variar según las configuraciones de firmware del fabricante y deben validarse por dispositivo.
- La selección de transporte entre UDP y TCP es configurable en muchas unidades; asegúrese de que el transporte elegido coincida con la configuración del dispositivo que se envía a Plaspy.
- El formato de los SMS para alertas puede variar y es útil como mecanismo de redundancia, pero puede no contener el mismo nivel de telemetría estructurada que los reportes por GPRS.
- Siempre verifique la unidad instalada en campo frente a la documentación del fabricante para la versión de firmware presente en el equipo.

## Por qué entender el protocolo es importante

Tener una comprensión práctica de cómo se comunica el RF-V10 ayuda a garantizar una configuración fiable, agiliza la resolución de problemas y permite un comportamiento operativo predecible cuando se gestionan dispositivos a escala en Plaspy.

- Asegura los ajustes correctos de APN y servidor para que el dispositivo llegue a Plaspy por datos celulares.
- Facilita mapear los eventos del dispositivo a alertas en la plataforma para que el comportamiento de alarma cumpla con los requisitos operativos.
- Acelera la resolución de problemas al concentrarse en transporte, registro y diferencias de firmware en lugar de en la lógica de parseo de bajo nivel.
- Orienta decisiones sobre redundancia, como habilitar alertas por SMS junto con reportes GPRS en unidades críticas.
- Apoya una gestión informada del firmware al reconocer cuándo una actualización puede cambiar el comportamiento de reporte.

## Por qué usar Plaspy con este protocolo

Usar el RF-V10 con Plaspy integra el dispositivo en un flujo de monitoreo centralizado que consolida GPS en vivo, alarmas y trazas históricas para flotas de motocicletas y vehículos pequeños. La detección automática de protocolos de rastreadores de Plaspy y el uso de un puerto compartido para todos los dispositivos reducen la carga de configuración y permiten que los equipos operativos se concentren en las alertas y la respuesta en lugar de en ajustes de servidor por dispositivo.

Aprenda más sobre Plaspy en https://www.plaspy.com. El soporte de protocolos, el comportamiento de firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar la información específica más reciente en el sitio del fabricante https://www.reachfargps.com/ antes de desplegar a gran escala.
