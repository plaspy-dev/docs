---
slug: /teltonika/fmc125/protocol
id: fmc125-protocol
sidebar_label: Protocol
title: Teltonika - FMC125 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para Teltonika FMC125 y Plaspy con detección de transporte y orientación de compatibilidad para rastreo de flotas
keywords:
  - Protocolo Teltonika FMC125
  - Compatibilidad FMC125 Plaspy
  - Protocolo GPS Teltonika FMC125
  - Protocolo de comunicación FMC125
  - Protocolo rastreador de flota Teltonika
  - Protocolo de rastreo FMC125
  - Protocolo de dispositivo Plaspy
  - Integración Teltonika FMC125
  - Protocolo rastreador GPS Plaspy
  - Compatibilidad de telemetría FMC125
---

# Teltonika - Protocolo FMC125

Esta página describe el contexto público del protocolo para usar el rastreador Teltonika FMC125 con Plaspy. Se enfoca en cómo el equipo comunica posiciones GNSS, telemetría y eventos de sensores a la plataforma Plaspy, y qué esperar al configurar el rastreador para reportar datos a Plaspy. El contenido evita detalles de implementación privados y explica el contexto de transporte y detección necesario para una integración confiable.

Plaspy emplea ajustes de conexión compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en información pública, no sensible, y en orientación práctica para integrar dispositivos FMC125 con Plaspy.

## Visión general del protocolo

El FMC125 implementa un protocolo de reporte que transporta posiciones GNSS, telemetría, eventos de sensores y datos serie desde periféricos del vehículo hacia un servidor backend. Cuando se usa con Plaspy, el protocolo permite que el rastreador se identifique, entregue actualizaciones de posición y telemetría, y transmita entradas como conteos de impulsos y eventos de identificación de conductor para que esos señales se conviertan en mapas, alertas e informes.

- Transporta datos de posición y movimiento para seguimiento en tiempo real y trazas históricas.
- Envía conteos de impulsos y eventos de sensores para monitoreo de combustible e identificación de conductor.
- Transmite telemetría serie desde periféricos conectados por RS232 y RS485 para análisis más detallados.
- Lleva marcadores de cámara o eventos desde unidades de video telemática emparejadas para revisión y evidencias correlacionadas.
- Comunica identidad y estado del dispositivo para que Plaspy asocie los mensajes entrantes con el vehículo y el perfil de telemetría correctos.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones de dispositivos en un endpoint y puerto de ingestión compartidos y determina automáticamente el protocolo adecuado. En la práctica, esto significa que los equipos configurados para reportar al endpoint de Plaspy normalmente no requieren selección manual de protocolo dentro de Plaspy, siempre que el rastreador esté apuntando a la dirección y transporte correctos.

- Plaspy usa un puerto compartido único para todos los dispositivos y realiza detección automática de protocolo sobre el tráfico entrante.
- Los dispositivos configurados para reportar al endpoint de Plaspy suelen detectarse sin intervención manual.
- Una identificación correcta del dispositivo en los primeros mensajes ayuda a que Plaspy asigne la telemetría al registro vehicular adecuado.
- Si un rastreador no se detecta automáticamente, verificar los ajustes de transporte y los campos de identidad del equipo suele resolver el problema.
- Plaspy ingiere posiciones, conteos de impulsos, eventos RFID y 1-wire, así como telemetría serie cuando esas señales están presentes en los reportes del dispositivo.

## Contexto de transporte y conexión

Los ajustes de transporte determinan cómo el FMC125 entrega su telemetría a Plaspy. El FMC125 soporta enlace celular y puede configurarse para usar UDP o TCP según el soporte del dispositivo y los requisitos de la implementación. Para compatibilidad con Plaspy, use el endpoint y puerto compartidos de Plaspy al configurar el rastreador.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138.
- El puerto de servidor usado por Plaspy para el reporte de dispositivos es 8888 y ese mismo puerto se utiliza para todos los dispositivos soportados por Plaspy.
- El FMC125 puede establecerse para usar transporte UDP o TCP en el puerto 8888 según necesidades de red y confiabilidad.
- La funcionalidad Dual SIM y las opciones de módulo regional del FMC125 ayudan a mantener cobertura celular y disponibilidad del enlace de telemetría.
- Confirme el APN y los ajustes celulares en el rastreador para que pueda establecer una sesión de datos y alcanzar el endpoint de Plaspy.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar cómo se reportan campos de telemetría específicos o cómo se manejan periféricos opcionales.
- Las revisiones de hardware y las variantes regionales pueden diferir en interfaces disponibles o soporte de bandas celulares.
- El comportamiento de integración serie para accesorios RS232 y RS485 puede variar según la configuración del fabricante y el firmware del periférico.
- La selección de transporte entre UDP y TCP puede afectar la entrega de mensajes y debe elegirse acorde a los requisitos del despliegue.
- El comportamiento de Dual SIM y las políticas de conmutación por fallo se configuran en el dispositivo y pueden modificar la rapidez con que los datos se reanudan tras un cambio de red.
- Siempre valide las capacidades específicas de la unidad adquirida frente a la documentación del proveedor y las notas de la versión.

## Por qué es importante entender el protocolo

Comprender el protocolo de reporte del FMC125 ayuda a los equipos de flota y TI a configurar correctamente los dispositivos, a interpretar la telemetría entrante y a solucionar problemas de conectividad o mapeo de datos. Una visión clara del contexto de comunicación reduce errores de configuración, mejora la fiabilidad y acelera la recuperación cuando ocurren incidencias.

- Garantiza la configuración correcta de transporte y endpoint para que los dispositivos lleguen a Plaspy de forma confiable.
- Ayuda a mapear conteos de impulsos, eventos RFID y telemetría serie a los campos adecuados en los paneles de Plaspy.
- Facilita la resolución de problemas de conectividad al acotar los posibles fallos a transporte, APN o firmware del dispositivo.
- Apoya la planificación de cobertura celular regional y conmutación por fallo Dual SIM en despliegues de producción.
- Permite un manejo predecible de eventos de estado del vehículo e integración con reglas de automatización en Plaspy.

## Ventajas de usar Plaspy con este protocolo

Usar el Teltonika FMC125 con Plaspy ofrece a los operadores de flotas una ruta práctica desde señales crudas del vehículo hasta información operativa. La conectividad LTE Cat 1 con retroceso a 2G, la resiliencia Dual SIM y las opciones de interfaz serie del FMC125 lo hacen adecuado para recopilar datos de ubicación, combustible, identificación de conductor y eventos de cámara. Plaspy ingiere esa telemetría en mapas, alertas e informes para soportar despacho, análisis de combustible y flujos de trabajo anti robo.

Para obtener más información sobre Plaspy y cómo funciona con dispositivos como el FMC125 visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del equipo pueden cambiar con el tiempo, por lo que debe verificar la información más reciente y las notas de firmware en el sitio del fabricante https://www.teltonika-gps.com/ antes de desplegar a escala.
