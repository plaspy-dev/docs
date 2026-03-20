---
slug: /zilogic/fleet_pro/protocol
id: fleet_pro-protocol
sidebar_label: Protocol
title: Zilogic - Fleet Pro Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el rastreador Zilogic Fleet Pro a Plaspy con contexto de transporte y compatibilidad
keywords:
  - protocolo Zilogic Fleet Pro
  - protocolo GPS Zilogic Fleet Pro
  - comunicación Zilogic Fleet Pro
  - rastreador Fleet Pro Plaspy
  - protocolo rastreador GPS Zilogic
  - protocolo telemático Fleet Pro Plaspy
  - seguimiento de vehículos Fleet Pro
  - compatibilidad Fleet Pro OBD II
  - datos acelerómetro Fleet Pro
  - compatibilidad de dispositivos Plaspy
---

# Zilogic - Protocolo de Fleet Pro

Esta página explica, en términos públicos y no sensibles, el contexto del protocolo utilizado por el rastreador Zilogic Fleet Pro con la plataforma Plaspy. Se centra en cómo se comunica el dispositivo para que usted comprenda las opciones de transporte, el comportamiento de reporte y el papel del protocolo del rastreador en una integración exitosa con Plaspy.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando éste informa al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del proveedor, por lo que esta página ofrece una descripción general intencionalmente amplia, mencionando el conjunto de funciones del Fleet Pro como su acelerómetro, la interfaz OBD II opcional, los reportes por GPRS y SMS, intervalos configurables y múltiples opciones de entradas.

## Resumen del protocolo

El protocolo del dispositivo define cómo el Fleet Pro informa ubicación, estado y datos de sensores a un servidor remoto para que Plaspy pueda interpretar y mostrar la información. El protocolo es el puente entre las lecturas crudas del dispositivo y la telemática útil en Plaspy, garantizando que la plataforma reciba información oportuna y coherente para seguimiento y análisis.

- Permite al Fleet Pro enviar actualizaciones de ubicación periódicas o bajo demanda y datos de estado a Plaspy.
- Transporta lecturas de sensores como eventos del acelerómetro, parámetros OBD II opcionales y estados de entradas para monitoreo remoto.
- Permite al rastreador identificarse e incluir metadatos necesarios para que Plaspy asocie los datos con el registro vehicular correcto.
- Controla la cadencia de reporte y la carga de datos para equilibrar visibilidad en tiempo real y uso de datos.
- Proporciona los datos contextuales que Plaspy necesita para traducir mensajes del dispositivo en información de ubicación, viajes y diagnóstico.

## Detección automática del protocolo en Plaspy

Plaspy recibe los reportes de dispositivos en un único endpoint y puerto compartidos, y usa ese tráfico entrante para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, un Fleet Pro configurado correctamente que apunte al endpoint de Plaspy será detectado sin necesidad de seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha en un endpoint de servidor compartido para que múltiples modelos de rastreadores informen sin requerir diferentes puertos.
- Cuando un Fleet Pro informa al endpoint de Plaspy, la plataforma examina la sesión entrante y los metadatos asociados para mapear los mensajes al registro de dispositivo correspondiente.
- Normalmente, los usuarios no necesitan elegir un protocolo en Plaspy si el rastreador está configurado para enviar datos al endpoint de Plaspy.
- La detección automática facilita la incorporación de dispositivos que soportan reportes GPRS estándar.
- Si un dispositivo no aparece, revise la configuración de red del equipo, la APN y que el dispositivo esté apuntando al endpoint correcto de Plaspy.

## Transporte y contexto de conexión

Los dispositivos Fleet Pro pueden usar transporte de datos celulares estándar para llegar a Plaspy. Para la conexión y el enrutamiento, el Fleet Pro puede configurarse para usar UDP o TCP según el firmware y la configuración del dispositivo, y Plaspy acepta ambos transportes en su puerto compartido.

- Plaspy acepta tráfico de dispositivos en el puerto 8888 para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para apuntar al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138.
- Tanto UDP como TCP son compatibles en el puerto 8888, dependiendo de la configuración del rastreador y de las capacidades del firmware.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, lo que simplifica la configuración de dispositivos y las reglas de firewall.
- Asegúrese de que la APN y los ajustes GPRS del dispositivo permitan conexiones salientes al endpoint de Plaspy para garantizar reportes fiables.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden modificar el contenido de los mensajes, los campos de telemetría disponibles y las preferencias de transporte del Fleet Pro.
- Las revisiones de hardware y módulos opcionales, como la interfaz OBD II, pueden exponer campos de datos adicionales que requieren mapeo en su flujo de telemática.
- Algunos fabricantes personalizan el comportamiento del protocolo o añaden extensiones específicas del proveedor que afectan la compatibilidad.
- Elegir UDP frente a TCP puede afectar las características de entrega de mensajes y puede requerir ajustes distintos en el dispositivo.
- Valide el reporte del dispositivo confirmando que los paquetes llegan a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el dispositivo está asignado correctamente en Plaspy.
- Verifique siempre el comportamiento observado en campo con las notas oficiales de producto y las versiones de firmware de Zilogic.

## Por qué es importante entender el protocolo

Tener una comprensión básica del protocolo de comunicación del Fleet Pro facilita la incorporación, la resolución de problemas y la operación a largo plazo con Plaspy. Saber qué se espera que envíe el dispositivo y qué transportes soporta le ayuda a resolver más rápido problemas de conectividad y mapeo de datos.

- Resolución más rápida de problemas cuando los mensajes del dispositivo no llegan o la telemetría está incompleta.
- Mejores decisiones de configuración de intervalos de reporte para equilibrar necesidades en tiempo real con consumo de datos y batería.
- Expectativas claras sobre qué datos OBD II y del acelerómetro estarán disponibles para análisis.
- Decisiones informadas sobre el uso de UDP o TCP según las condiciones de red y los requisitos de confiabilidad.
- Coordinación más efectiva con el soporte de Zilogic cuando una variación de firmware o hardware afecta los reportes.

## Por qué usar Plaspy con este protocolo

Usar el Zilogic Fleet Pro con Plaspy ofrece a las organizaciones visibilidad consistente sobre la ubicación del vehículo, el comportamiento del conductor y la salud del vehículo. Plaspy ingiere la telemetría que el Fleet Pro puede proporcionar, incluidos eventos del acelerómetro y parámetros OBD II opcionales, y la transforma en información accionable para la gestión de flotas, la planificación de mantenimiento y la supervisión operativa.

Si desea conocer más sobre cómo Plaspy funciona con dispositivos como el Fleet Pro y lo que la plataforma ofrece para el rastreo vehicular y la telemática, visite https://www.plaspy.com. Para los detalles más recientes sobre protocolos específicos de dispositivos, notas de firmware y orientación de implementación, confirme siempre la información actual en el sitio del fabricante https://zilogic.com/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
