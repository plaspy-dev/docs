---
slug: /autofon/omega/protocol
id: omega-protocol
sidebar_label: Protocol
title: AutoFon - Омега Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo para integrar el AutoFon Омега con Plaspy usando ajustes comunes y detección automática
keywords:
  - AutoFon Омега
  - protocolo AutoFon Omega
  - rastreador GPS Омега
  - protocolo Омега Plaspy
  - protocolo GPS AutoFon
  - rastreo de vehículos AutoFon
  - protocolo de rastreo AutoFon
  - rastreadores compatibles con Plaspy
  - protocolo de rastreador GPS
  - seguimiento de activos AutoFon
---

# AutoFon - Protocolo Омега

Esta página describe el contexto público del protocolo para utilizar el rastreador AutoFon Омега con la plataforma Plaspy. Aquí se explica, a alto nivel, cómo se comunica el dispositivo, qué ajustes de conexión espera Plaspy y qué comportamientos del equipo son relevantes para una integración exitosa, sin revelar detalles privados de implementación.

El AutoFon Омега es un rastreador GPS compacto que envía ubicación, eventos del acelerómetro, presencia por BLE y estado por GPRS 2G o SMS. Plaspy utiliza ajustes de conexión compartidos para los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto del protocolo puede variar según la revisión de firmware, versión de hardware e implementación del fabricante. Revise la documentación oficial del fabricante y las notas de firmware para conocer los detalles más recientes del dispositivo.

## Visión general del protocolo

El protocolo de comunicación del Омега hace de puente entre el hardware del rastreador y Plaspy, permitiendo que la posición, los eventos de movimiento y el estado del dispositivo se entreguen de forma fiable a una plataforma de monitoreo. Define cómo el dispositivo se identifica, cómo empaqueta la telemetría para su transmisión y qué eventos se priorizan para reporte inmediato frente a almacenamiento en buffer.

- Permite reportes periódicos y por eventos de coordenadas GPS y GNSS a un endpoint remoto para visibilidad en tiempo real.
- Integra eventos basados en el acelerómetro como movimiento, impacto e inclinación para que Plaspy genere alertas y notificaciones contextuales.
- Soporta entrega por GPRS con SMS como canal de respaldo, garantizando que los datos lleguen al servidor cuando no hay conectividad IP.
- Permite reportar telemetría de estado del dispositivo, como batería y temperatura, para planificación de mantenimiento.
- Proporciona mecanismos para incluir datos de detección de presencia local por BLE en la transmisión de telemetría para casos de uso de proximidad.

## Cómo detecta Plaspy el protocolo

Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo está configurado para reportar al endpoint de Plaspy. Generalmente usted no necesita seleccionar un protocolo manualmente en Plaspy, siempre que el dispositivo apunte al servidor y puerto correctos y use un transporte soportado. La detección automática simplifica la incorporación de dispositivos como el Омега a través de distintas versiones de firmware.

- El endpoint público del servidor de Plaspy es d.plaspy.com y su IP pública es 54.85.159.138 para conexión directa.
- Plaspy escucha en el puerto 8888 para reportes de dispositivos y todos los dispositivos soportados por Plaspy usan el mismo puerto.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el firmware del equipo y la preferencia del administrador.
- Cuando el Омега reporta al endpoint de Plaspy en el puerto correcto, Plaspy intentará identificar e interpretar automáticamente los datos entrantes del dispositivo.
- Una configuración adecuada de APN y GPRS en el dispositivo, junto con números de respaldo para SMS, ayuda a asegurar una entrega consistente para la detección del protocolo.

## Transporte y contexto de conexión

El contexto de conexión abarca cómo el Омега entrega la telemetría a un servidor y qué rutas de red acepta Plaspy. El Омега soporta GPRS como transporte principal y SMS como respaldo; desde la perspectiva de la plataforma, es esencial que el rastreador apunte al endpoint de Plaspy y use el modo de transporte correcto.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para el reporte por GPRS.
- Plaspy acepta conexiones a d.plaspy.com y a la IP directa 54.85.159.138 en el puerto 8888.
- Todos los dispositivos soportados por Plaspy comparten el mismo número de puerto, lo que simplifica la configuración del servidor.
- GPRS es la vía preferida para telemetría en tiempo real, mientras que SMS es útil en escenarios de emergencia o con conectividad limitada.
- Verifique que el APN y el registro en la red del dispositivo sean correctos para que el Омега pueda establecer una sesión GPRS con el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar el contenido de los mensajes, los intervalos y los eventos soportados; siempre confirme la versión de firmware del dispositivo al diagnosticar compatibilidad.
- Las revisiones de hardware u módulos opcionales como BLE pueden afectar qué campos de telemetría aparecen en los mensajes reportados.
- La configuración por parte del fabricante y las variantes regionales de firmware pueden alterar la selección de transporte por defecto o los intervalos de reporte.
- Las diferencias en transporte importan; configure el Омега para UDP o TCP según lo requiera su despliegue y verifique que reporte al puerto 8888.
- Los comportamientos de respaldo por SMS y el almacenamiento en caja negra varían según el firmware y deben validarse durante la puesta en marcha.
- Consulte los recursos oficiales del fabricante para confirmar funciones como soporte de actualizaciones de servidor y cualquier limitación específica por región.

## Por qué es importante entender el protocolo

Comprender el protocolo del rastreador ayuda a asegurar una configuración ágil, una resolución de problemas eficaz y un funcionamiento confiable a largo plazo con Plaspy. Incluso cuando Plaspy detecta el protocolo automáticamente, conocer qué reporta el dispositivo y cómo se conecta le permite optimizar la configuración y los flujos de respuesta.

- Ayuda a diagnosticar por qué un dispositivo puede no aparecer en línea o por qué faltan ciertos eventos en Plaspy.
- Informa las compensaciones entre consumo de batería y perfil de reportes para balancear frecuencia de actualización y vida útil del dispositivo.
- Aclara cómo se presentarán en Plaspy los eventos del acelerómetro y BLE para ajustar las reglas de alerta.
- Facilita la validación de la entrega por SMS y del retransmisor de la caja negra en situaciones de conectividad intermitente.
- Apoya la planificación de actualizaciones remotas de firmware y determina cuándo un equipo en campo puede requerir intervención local.

## Por qué usar Plaspy con este protocolo

Usar el AutoFon Омега con Plaspy ofrece a las organizaciones una opción compacta y de bajo mantenimiento para seguimiento en tiempo real, alertas antirrobo y flujos de trabajo conscientes de la presencia. Plaspy consume la transmisión de ubicación, los eventos de movimiento y la telemetría de estado del Омега para llenar paneles, activar geocercas y proporcionar reproducción histórica para investigaciones e informes operativos.

Si desea saber más sobre cómo trabaja Plaspy con dispositivos como el AutoFon Омега y cómo configurar el reporte al servidor de Plaspy, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y la guía de implementación más reciente, verifique la información vigente en el sitio del fabricante https://www.autofon.ru/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
