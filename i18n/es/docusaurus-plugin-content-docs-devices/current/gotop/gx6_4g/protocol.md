---
slug: /gotop/gx6_4g/protocol
id: gx6_4g-protocol
sidebar_label: Protocol
title: GOTOP - GX6-4G Protocol
sidebar_class_name: menu_item_tracker
description: Descripción pública del protocolo del GOTOP GX6-4G y cómo el rastreador comunica datos a Plaspy para seguimiento y telemetría de flotas
keywords:
  - protocolo GOTOP GX6-4G
  - protocolo GPS GOTOP GX6-4G
  - compatibilidad GX6-4G Plaspy
  - protocolo de rastreo GOTOP
  - protocolo de comunicación GX6-4G
  - protocolo de rastreador de flota GOTOP
  - protocolo de telemetría GX6-4G
  - protocolo de dispositivo Plaspy
  - protocolo de rastreador GPS vehicular
  - compatibilidad GX6-4G con Plaspy
---

# GOTOP - Protocolo GX6-4G

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP GX6-4G con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales y no sensibles, de modo que gestores de flotas, instaladores e integradores puedan comprender las expectativas de conexión y el papel del protocolo de reporte cuando el dispositivo se usa con Plaspy.

Plaspy aplica ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. El GX6-4G es un rastreador vehicular 4G diseñado para este fin, con posicionamiento multimodal y entradas y salidas de grado vehicular; en esta página se explica cómo esos datos a nivel de dispositivo se transmiten a Plaspy sin entrar en detalles privados o específicos de firmware.

## Resumen del protocolo

A alto nivel, el protocolo de comunicación del rastreador define cómo el GX6-4G se identifica ante un servidor, reporta ubicación GNSS y LBS, y entrega telemetría y datos de eventos como el estado de ignición, telemetría CAN y condiciones de alarma. El protocolo sirve de puente entre los sensores a bordo del vehículo y los paneles y alertas de Plaspy.

- Permite reportes periódicos de posición y telemetría para que Plaspy muestre ubicación en tiempo real y recorridos históricos.
- Comunica la identidad y el estado del dispositivo para que Plaspy asocie los mensajes entrantes con el activo y la configuración correctos.
- Transmite el estado de entradas y salidas del vehículo, por ejemplo detección de ACC, eventos de puertas y confirmaciones de controles remotos, para respaldar flujos de trabajo antirrobo.
- Envía notificaciones de alarmas y eventos que disparan alertas, acciones de geocerca e informes en Plaspy.
- Proporciona el mecanismo para comandos remotos opcionales y sus respuestas cuando el firmware del dispositivo y la configuración del instalador lo permiten.

## Cómo Plaspy detecta el protocolo

Plaspy recibe tráfico de dispositivos en un endpoint compartido y detecta automáticamente el protocolo del rastreador, por lo que la mayoría de los equipos no requieren selección manual del protocolo en la plataforma. La configuración correcta del dispositivo para reportar al endpoint de Plaspy es el requisito principal para una detección automática exitosa.

- El dominio del servidor Plaspy es d.plaspy.com y puede usarse como host de reporte del dispositivo.
- La IP del servidor Plaspy es 54.85.159.138 y puede utilizarse donde no haya DNS disponible.
- El puerto es 8888 y los dispositivos pueden configurarse en UDP o TCP sobre el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración en flotas mixtas.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo apunta correctamente al endpoint de Plaspy y envía reportes.

## Transporte y contexto de conexión

El contexto de conexión se enfoca en cómo el GX6-4G alcanza el endpoint de Plaspy a través de la red móvil. El dispositivo soporta transporte celular y usará el modo de transporte configurado según el firmware y la configuración del operador.

- El dispositivo puede configurarse en UDP o TCP sobre el puerto 8888 según lo permita el dispositivo y según la preferencia del instalador.
- Los dispositivos pueden apuntar a d.plaspy.com como dominio de reporte por conveniencia y por enrutamiento basado en DNS.
- Cuando no sea posible usar DNS, el dispositivo puede apuntar directamente a 54.85.159.138.
- El puerto 8888 se comparte para todas las comunicaciones con dispositivos Plaspy, por lo que los instaladores pueden estandarizar los ajustes de conexión.
- La selección de transporte (UDP versus TCP) puede afectar el comportamiento de entrega y debe seguir la guía del fabricante y las condiciones de la red.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware y las revisiones de hardware pueden introducir diferencias en el formato de los mensajes o en los campos incluidos; confirme las notas de la versión del firmware cuando sea posible.
- Los menús de configuración del fabricante pueden exponer opciones para transporte TCP o UDP, latidos (heartbeats) e intervalos de reporte; valide estas configuraciones durante la instalación.
- Algunas funciones, como telemetría CAN, monitoreo de audio o salidas de control remoto, dependen tanto del firmware del dispositivo como de cómo Plaspy mapea esas entradas en la plataforma.
- Factores de red, incluidas restricciones del operador y la configuración del APN, pueden afectar la conectividad del dispositivo; asegúrese de que la SIM y el APN estén correctamente provisionados.
- Siempre valide un dispositivo en un entorno de prueba para confirmar que reporta como se espera a d.plaspy.com o a 54.85.159.138 en el puerto 8888 antes de un despliegue masivo.
- Consulte la documentación del fabricante al planificar integraciones avanzadas o actualizaciones de firmware, ya que el comportamiento puede cambiar entre versiones.

## Por qué es importante entender el protocolo

Conocer el protocolo básico de comunicación que usa el GX6-4G ayuda en la instalación, resolución de problemas y fiabilidad a largo plazo cuando el dispositivo se empareja con Plaspy. Tener expectativas claras sobre cómo reporta el rastreador y qué espera la plataforma reduce el tiempo de configuración y mejora la confianza operativa.

- Asegura que el dispositivo esté configurado para reportar al endpoint y a los ajustes de transporte correctos de Plaspy para la detección automática.
- Facilita el diagnóstico de problemas de conectividad al confirmar si el rastreador llega a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Aclara qué telemetría y señales de E/S serán visibles en Plaspy según las capacidades del firmware y del hardware.
- Permite una mejor planificación de pruebas para alarmas, geocercas y acciones de control remoto antes del uso en producción.
- Mejora la comunicación con el proveedor del dispositivo y con el operador móvil al resolver casos límite relacionados con el transporte o la entrega de paquetes.

## Por qué usar Plaspy con este protocolo

Emparejar el GOTOP GX6-4G con Plaspy ofrece a flotas y operadores una vía estable para entregar GNSS y telemetría a una plataforma centralizada. Plaspy ingiere ubicación, datos CAN y entradas del rastreador para que los equipos puedan monitorear la posición del vehículo, reaccionar ante alarmas y generar informes que optimicen la operación y la seguridad.

Plaspy está diseñado para aceptar tráfico de dispositivos en un único endpoint compartido, lo que simplifica la configuración en flotas mixtas y permite la detección automática de protocolos para rastreadores compatibles. Para obtener más información sobre Plaspy y cómo soporta integraciones de dispositivos visite https://www.plaspy.com. Para detalles específicos de protocolo del dispositivo, notas de firmware y orientación de implementación verifique la información con el fabricante en https://www.gotop.cc/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
