---
slug: /stl/stl060/protocol
id: stl060-protocol
sidebar_label: Protocol
title: STL - STL060 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del rastreador GPS STL STL060 y cómo se comunica con Plaspy para reportes de ubicación confiables
keywords:
  - protocolo STL STL060
  - rastreador GPS STL060
  - protocolo GPS STL
  - protocolo de comunicación STL060
  - protocolo de rastreo STL060
  - rastreadores compatibles con Plaspy
  - rastreo vehicular STL060
  - guía protocolo rastreador GPS
  - integración rastreador con Plaspy
  - rastreo de flotas STL
---

# STL - Protocolo STL060

Esta página aborda el contexto público del protocolo para usar el rastreador GPS STL STL060 con Plaspy. Explica, a alto nivel, cómo el dispositivo reporta posición y estado para que Plaspy pueda recibir y procesar los datos de rastreo. El STL060 está diseñado para determinar coordenadas precisas con satélites GPS, almacenar posiciones cuando no hay GPRS disponible y responder a solicitudes por SMS, todo lo cual influye en la forma en que el rastreador se comunica con un servidor como Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo del STL060 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que los detalles aquí descritos son una guía pública y de alto nivel, no un manual específico de firmware.

## Resumen del protocolo

El protocolo del STL060 define cómo el rastreador codifica y envía información de posición, tiempo y estado a un servidor remoto, y cómo recibe ciertas solicitudes de configuración o comandos. En la práctica, este protocolo permite que el rastreador se identifique ante Plaspy, entregue telemetría utilizable y soporte flujos de gestión remota como actualizaciones de configuración o consultas de ubicación bajo demanda.

- Permite al rastreador reportar coordenadas GPS y estado básico a un servidor remoto para su procesamiento.
- Transporta información de identidad para que Plaspy asocie los mensajes entrantes a un dispositivo STL060 concreto.
- Permite que los datos de posición guardados durante cortes de GPRS se suban cuando vuelve la conectividad.
- Soporta consultas vía SMS para informes de ubicación bajo demanda si se usa SMS junto con el reporte por datos.
- Proporciona mensajes independientes del transporte que Plaspy recibe y mapea a registros de dispositivo y eventos.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un endpoint compartido y determina automáticamente el protocolo del rastreador usado por cada equipo. Cuando un STL060 está configurado para enviar datos a Plaspy, la plataforma empareja los mensajes entrantes con el registro del dispositivo correspondiente sin que el usuario tenga que seleccionar manualmente un protocolo en la mayoría de los casos. La detección automática simplifica la configuración y reduce errores.

- Plaspy escucha en un endpoint público único para reportes de dispositivos y usa ese mismo endpoint para recibir mensajes de muchos modelos de rastreadores.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, por lo que los mensajes del STL060 llegan al mismo puerto de servicio que otros modelos compatibles.
- Normalmente usted apunta el rastreador al endpoint de Plaspy y no necesita elegir un parser en la interfaz de Plaspy si el dispositivo está enviando datos correctamente.
- La detección automática cubre comportamientos de firmware comunes, pero firmware inusual o muy personalizado puede requerir validación adicional.
- Si un dispositivo no es reconocido automáticamente, se recomienda revisar la configuración del equipo y la documentación del fabricante.

## Transporte y contexto de conexión

El STL060 puede configurarse para usar UDP o TCP según el soporte del equipo y las condiciones de red. Para Plaspy, la dirección pública del servidor y el puerto son los destinos canónicos para los reportes del rastreador, y los dispositivos pueden apuntar al dominio o a la IP del servidor directamente.

- El dominio del servidor Plaspy para reportes es d.plaspy.com.
- La IP pública del servidor Plaspy es 54.85.159.138.
- El puerto de servicio usado para todos los dispositivos es 8888 y el rastreador puede usar UDP o TCP en ese puerto según su configuración.
- Los dispositivos que soportan ambos protocolos pueden ajustarse al transporte más conveniente según la red y el comportamiento del firmware.
- Asegúrese de que el rastreador esté configurado para reportar al dominio o IP de Plaspy y que use el puerto 8888 para que la plataforma pueda recibir y procesar los datos.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo entre mensajes, los campos disponibles o cómo se codifican ciertos eventos; confirme el comportamiento específico del firmware antes de depender de un patrón de mensaje concreto.
- Las revisiones de hardware entre lotes de producción pueden incluir distintos módulos GNSS o módems celulares que afectan la adquisición de señal y el comportamiento de reporte.
- Las opciones de configuración del fabricante, como fallback por SMS o la política de almacenamiento cuando no hay GPRS, influyen en cuándo y cómo los datos llegan a Plaspy.
- La elección del transporte es importante; si configura el STL060 para UDP pero la red bloquea UDP, los reportes no llegarán a Plaspy a menos que se cambie a TCP.
- Los identificadores del dispositivo deben estar correctamente configurados en el rastreador para que Plaspy pueda asociar los mensajes entrantes con el activo correcto.
- Siempre valide la compatibilidad consultando la documentación del fabricante para el número de serie del equipo y el nivel de firmware.

## Por qué es importante comprender el protocolo

Comprender cómo el STL060 se comunica con Plaspy ayuda a asegurar una configuración exitosa, un rastreo confiable y una resolución de problemas más rápida cuando surgen incidencias. Familiarizarse con el contexto de comunicación reduce las conjeturas y permite a los equipos tomar decisiones informadas sobre la configuración.

- Ayuda a verificar que el rastreador esté apuntando al endpoint y al puerto correctos de Plaspy para que los mensajes lleguen de forma confiable.
- Orienta la decisión sobre qué transporte usar entre UDP y TCP según la red y el comportamiento del firmware.
- Facilita la resolución de problemas cuando las subidas de posición se retrasan, faltan o no coinciden con los intervalos esperados.
- Asegura el mapeo correcto de la identidad del dispositivo para que Plaspy registre y muestre los datos del activo previsto.
- Permite planear actualizaciones de firmware, reemplazos de equipo o cambios en la configuración de reporte sin perder continuidad.

## Por qué usar Plaspy con este protocolo

Usar el STL060 con Plaspy ofrece a las organizaciones una forma directa de recopilar, almacenar y actuar sobre datos de ubicación de vehículos, personas y activos. La plataforma de Plaspy recibe los reportes del rastreador enviados al endpoint compartido, los asocia a registros de dispositivo y presenta la información para monitoreo, alertas y flujos operativos. La capacidad del STL060 para almacenar datos cuando no hay GPRS y responder a solicitudes por SMS complementa las capacidades de procesamiento y reporte de Plaspy.

Para obtener más información sobre cómo Plaspy maneja las integraciones de dispositivos y revisar las funciones de la plataforma, visite https://www.plaspy.com. Para detalles específicos más recientes del protocolo del dispositivo, notas de firmware e instrucciones oficiales de configuración para el STL STL060, verifique la información vigente en el sitio del fabricante en http://siliconwireless.in. El soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo, por lo que se recomienda consultar la documentación del fabricante.
