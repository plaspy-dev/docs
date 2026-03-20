---
slug: /coban/bn_311c/protocol
id: bn_311c-protocol
sidebar_label: Protocol
title: Coban - BN-311C Protocol
sidebar_class_name: menu_item_tracker
description: Notas públicas del protocolo para integrar el rastreador Coban BN-311C con Plaspy, con guía de conexión y compatibilidad
keywords:
  - protocolo Coban BN-311C
  - protocolo GPS Coban BN-311C
  - protocolo de rastreo BN-311C
  - protocolo de rastreador GPS Coban
  - compatibilidad BN-311C con Plaspy
  - comunicaciones Coban BN-311C
  - protocolo GPS para motocicletas
  - protocolo de rastreador GSM GPRS
  - documentación de protocolo de rastreador
  - protocolo de dispositivo Plaspy
---

# Coban - BN-311C Protocolo

Esta página describe el contexto público del protocolo para usar el rastreador Coban BN-311C con Plaspy. Se centra en cómo el dispositivo comunica a través de redes celulares y cómo la plataforma Plaspy procesa esas comunicaciones para habilitar seguimiento en tiempo real, alertas y funciones básicas de gestión de flota. La información está pensada para instaladores, gestores de flotas y usuarios técnicos que necesiten comprender el papel de la comunicación sin exponer detalles sensibles de implementación.

Plaspy utiliza un conjunto compartido de ajustes de conexión para los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante; por ello la configuración final y las funciones avanzadas deben validarse con el firmware del dispositivo y la documentación oficial de Coban.

## Resumen del protocolo

El BN-311C emplea GSM/GPRS para enviar posiciones GNSS, actualizaciones de estado, alarmas y telemetría a un servidor remoto. En términos prácticos, el protocolo del dispositivo define cómo el rastreador se identifica, reporta datos de ubicación y eventos, y acepta acciones de control remoto como comandos del inmovilizador. Para la integración con Plaspy, el rol del protocolo es hacer que esos mensajes sean legibles y accionables por la plataforma en la nube.

- Permite reportes periódicos y por eventos de coordenadas GNSS, estado de ignición y eventos de alarma hacia el servidor.
- Transporta telemetría como estado de batería y alimentación para que Plaspy muestre la salud del dispositivo y dispare alertas.
- Transmite tipos de alarma como movimiento, geocerca, impacto, exceso de velocidad y desconexión de alimentación para su gestión inmediata.
- Soporta funciones de control remoto disponibles en el modelo BN-311C tipo C, tales como armado/desarmado remoto y corte de combustible o de alimentación.
- Proporciona una capa de mensajes independiente del transporte que puede enviarse por TCP, UDP o SMS según la configuración del equipo.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes entrantes de los dispositivos en un endpoint y puerto compartidos y aplica detección automática para determinar el protocolo del rastreador en uso. Cuando un BN-311C está configurado para reportar a Plaspy, el sistema normalmente reconoce los mensajes del equipo sin que usted tenga que seleccionar manualmente el protocolo en la plataforma. Esto agiliza la incorporación de modelos comunes de rastreadores y configuraciones estándar de reporte.

- Plaspy escucha en un único endpoint de servicio el tráfico de dispositivos e identifica automáticamente los protocolos compatibles.
- Los dispositivos apuntados a d.plaspy.com o 54.85.159.138 y que usan el puerto de Plaspy serán enrutados al pipeline de ingestión de Plaspy.
- En general usted no necesita seleccionar un protocolo dentro de Plaspy si el rastreador está correctamente configurado para reportar al endpoint de Plaspy.
- La detección automática cubre patrones de reporte comunes en rastreadores para motocicletas y vehículos pequeños, como el BN-311C.
- Si un rastreador no reporta como se espera, usted debe verificar los ajustes de reporte del dispositivo y el comportamiento del firmware según la guía del fabricante.

## Transporte y contexto de conexión

Los BN-311C pueden enviar datos mediante GSM/GPRS con opciones de reporte por TCP, UDP o SMS. Para la integración con Plaspy, los dispositivos deben configurarse para reportar al servidor de Plaspy usando los ajustes compartidos de conexión para que los datos sean aceptados y procesados por la plataforma. La elección del transporte (TCP frente a UDP) depende de las opciones del dispositivo y de las características de la red.

- El dominio servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública es 54.85.159.138.
- El servicio de Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportar.
- El BN-311C puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del dispositivo y la preferencia del instalador.
- SMS sigue siendo un método alternativo para configuración y algunos comandos remotos, pero el reporte por TCP/UDP es preferible para seguimiento en vivo.
- Asegúrese de que el APN y los ajustes GPRS en el dispositivo sean correctos para que el rastreador pueda alcanzar el endpoint de Plaspy sobre datos celulares.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles y el soporte de comandos; confirme la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o variantes regionales pueden alterar los transportes soportados o los tipos de alarma disponibles.
- Los comandos de configuración desde el fabricante enviados por SMS o GPRS pueden habilitar o deshabilitar ciertos tipos de reporte y funciones remotas.
- La elección de transporte (TCP vs UDP) puede afectar las garantías de entrega y debe coincidir con el comportamiento de red esperado para su despliegue.
- Al integrar a escala, valide un dispositivo de muestra antes del despliegue masivo para asegurar que los mensajes se parseen y muestren correctamente en Plaspy.
- Consulte siempre la documentación de Coban para comandos específicos del modelo y para cualquier advertencia relacionada con firmware.

## Por qué es importante comprender el protocolo

Conocer el protocolo del rastreador ayuda a asegurar una incorporación confiable, una visualización precisa de los datos y un comportamiento predecible de los controles remotos al usar el BN-311C con Plaspy. Tener claridad sobre lo que el dispositivo envía y cómo Plaspy lo ingiere reduce el tiempo de configuración y facilita la resolución de problemas de conectividad, brechas de reporte y comportamientos inesperados del equipo.

- Permite confirmar que el dispositivo está reportando los campos necesarios para ubicación, ignición y alarmas.
- Mejora la resolución de problemas cuando un dispositivo está conectado a la red pero no es visible en Plaspy.
- Aclara qué comandos remotos y alarmas soporta el modelo tipo C y cómo aparecen en la plataforma.
- Ayuda a decidir entre reporte por TCP o UDP según la confiabilidad de la red y los requisitos de latencia.
- Facilita la planificación de actualizaciones de firmware y la compatibilidad de funciones futuras en una flota.

## Por qué usar Plaspy con este protocolo

Usar el BN-311C con Plaspy ofrece a las organizaciones visibilidad concisa para motocicletas y vehículos pequeños con lo esencial para seguimiento en tiempo real, manejo de alarmas y supervisión operativa básica. El diseño compacto del BN-311C combinado con el procesamiento por parte de Plaspy de reportes de posición y alarma permite flujos discrecionales de antirobo, acciones de inmovilización remota y monitoreo operativo adecuado para motociclistas, flotas de reparto y operadores de alquiler.

Para saber más sobre Plaspy y cómo maneja integraciones de dispositivos como el BN-311C, visite https://www.plaspy.com. Para obtener los detalles de protocolo a nivel de dispositivo, comportamiento de firmware y las instrucciones del fabricante más recientes, verifique la información oficial en https://www.coban.net/ ya que las implementaciones y el firmware del equipo pueden cambiar con el tiempo.
