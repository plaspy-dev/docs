---
slug: /xexun/x07/protocol
id: x07-protocol
sidebar_label: Protocol
title: Xexun - X07 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Xexun X07 y cómo transmite ubicación y telemetría a Plaspy
keywords:
  - protocolo Xexun X07
  - protocolo GPS Xexun X07
  - Xexun X07 Plaspy
  - protocolo de rastreador portátil Xexun
  - protocolo de comunicación X07
  - protocolo de rastreador GPS Plaspy
  - protocolo rastreador de seguridad personal
  - protocolo GPS para cuidado de adultos mayores
  - protocolo GPS BeiDou
  - compatibilidad de dispositivos Plaspy
---

# Xexun - Protocolo X07

Esta página resume el contexto público del protocolo para usar el rastreador portátil Xexun X07 con Plaspy. Explica cómo el dispositivo informa ubicación y telemetría de salud a Plaspy y qué aspectos de la comunicación del equipo son relevantes al integrar el X07 en un flujo de monitoreo centralizado. El contenido se centra en información de conexión y compatibilidad a alto nivel, no en detalles privados del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Para detalles específicos del equipo y el comportamiento más actual del firmware, consulte la documentación del fabricante en el sitio oficial de Xexun.

## Resumen del protocolo

El protocolo de comunicación es el mecanismo que el X07 utiliza para enviar ubicación, telemetría de signos vitales, estado del dispositivo y alarmas a endpoints de ingestión en la nube como Plaspy. En la práctica, el protocolo define cómo se identifica el reloj, con qué frecuencia reporta y cómo se transmiten alertas y actualizaciones de estado a la plataforma que muestra y actúa sobre los datos.

- Transporta actualizaciones periódicas de posición desde GPS y BeiDou, además de pistas de ubicación complementarias como datos de WiFi y antenas celulares cuando están disponibles.
- Envía telemetría de salud y movimiento, por ejemplo frecuencia cardiaca, indicadores relacionados con la presión arterial y estado de actividad, junto con los reportes de ubicación.
- Informa sobre el estado del dispositivo necesario para el monitoreo, como nivel de batería, conectividad de red y disponibilidad de comunicación de voz bidireccional.
- Permite la entrega de alarmas por geocerca y salidas de zona para que Plaspy pueda activar notificaciones y alertas para cuidadores o equipos operativos.
- Soporta flujos de gestión remota, como control de reportes programados y manejo de firmware por aire a través del servicio del proveedor o mediante reportes directos.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de los dispositivos en un endpoint de ingestión compartido y determina automáticamente el manejo de protocolo apropiado para los datos entrantes del rastreador. En la mayoría de los despliegues, el usuario configura el equipo para que apunte al endpoint de Plaspy y no necesita seleccionar manualmente un protocolo dentro de Plaspy una vez que el reporte está correctamente dirigido.

- Configure la dirección de reporte del dispositivo hacia d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 usando el transporte y puerto soportados.
- Plaspy escucha en un único puerto acordado para todos los dispositivos, por lo que no se requiere configurar puertos por dispositivo dentro de Plaspy.
- Plaspy detecta automáticamente el protocolo del rastreador y normaliza los datos entrantes de ubicación, telemetría y alertas.
- Cuando está configurado correctamente, por lo general no es necesario que usted elija una opción de protocolo en Plaspy para que el X07 aparezca y empiece a enviar datos.
- Si un equipo no aparece o no reporta como se espera, valide la dirección de reporte, el modo de transporte y el comportamiento del firmware conforme a la guía del proveedor.

## Contexto de transporte y conexión

El contexto de conexión abarca cómo el X07 establece una ruta de red hacia Plaspy y qué opciones de transporte puede utilizar. El X07 soporta transportes celulares comunes y puede configurarse para usar UDP o TCP según el firmware y los ajustes del dispositivo.

- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Plaspy acepta tráfico dirigido a d.plaspy.com o a la IP pública del servidor 54.85.159.138 en el puerto compartido.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que la configuración de puertos en la nube es consistente entre modelos.
- La selección de transporte (UDP vs TCP) puede afectar la confiabilidad y la latencia en ciertas redes; elija la opción mejor soportada por el operador y el firmware del dispositivo.
- Asegúrese de que el APN y la configuración de red en el equipo coincidan con los requisitos del operador para que el reloj mantenga la conexión al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden implementar diferencias en el protocolo o campos adicionales; revise las notas de la versión del firmware para cambios que afecten el comportamiento de reporte.
- Las revisiones de hardware y las SKU regionales pueden introducir variaciones en los sensores disponibles y en los transportes soportados.
- El modo de transporte debe coincidir con lo que el dispositivo está configurado para usar; algunas unidades X07 pueden emplear UDP mientras que otras prefieren TCP según el firmware.
- Los puentes en la nube del fabricante o servicios de reenvío de terceros pueden alterar la forma en que los datos llegan a Plaspy; confirme el reporte directo cuando sea posible para facilitar la resolución de problemas.
- Los modos de ahorro de batería o las configuraciones de reporte programado en el reloj modifican la frecuencia de envío y la visibilidad en tiempo real de la telemetría en Plaspy.
- Siempre valide la compatibilidad y las configuraciones recomendadas con la documentación oficial de Xexun para la versión de firmware y la revisión de hardware específica.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el X07 ayuda a asegurar una configuración confiable, telemetría significativa en Plaspy y una resolución de problemas eficaz cuando los datos del dispositivo no aparecen como se esperaba. Tener claro el contexto de comunicación ahorra tiempo durante el despliegue y facilita interpretar si un problema es de estado del dispositivo o de red y configuración.

- La dirección de servidor y el transporte correctos reducen el tiempo de configuración y previenen errores comunes.
- Conocer los intervalos de reporte y los perfiles de batería ayuda a equilibrar la resolución de datos con la duración del equipo.
- Estar al tanto de las diferencias de firmware informa decisiones sobre actualizaciones remotas y habilitación de funciones.
- Entender qué telemetría está disponible apoya la configuración adecuada de alertas y paneles en Plaspy.
- Familiarizarse con las dependencias de red ayuda a diagnosticar problemas de conectividad en campo.

## Por qué usar Plaspy con este protocolo

Usar el Xexun X07 con Plaspy extiende el monitoreo centralizado a escenarios de seguridad personal y cuidado de adultos mayores, manteniendo la gestión de dispositivos y las alertas unificadas con otros activos rastreados. Plaspy normaliza la telemetría de ubicación y salud entrante para que cuidadores y equipos operativos puedan ver posiciones en tiempo real, rutas históricas y eventos de geocerca junto con el estado del dispositivo en una sola plataforma.

Si desea saber más sobre cómo Plaspy maneja rastreadores portátiles, incorporación de dispositivos y alertas centralizadas visite https://www.plaspy.com. Para notas de protocolo específicas del dispositivo, detalles de firmware y orientación de implementación consulte la documentación oficial de Xexun en https://www.xexun.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
