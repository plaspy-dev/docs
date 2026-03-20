---
slug: /teltonika/fmb003/protocol
id: fmb003-protocol
sidebar_label: Protocol
title: Teltonika - FMB003 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Teltonika FMB003 y cómo el rastreador comunica telemetría OBD y posición a Plaspy
keywords:
  - protocolo Teltonika FMB003
  - protocolo GPS FMB003
  - Teltonika FMB003 Plaspy
  - protocolo de comunicación FMB003
  - protocolo de rastreo FMB003
  - protocolo GPS Teltonika
  - compatibilidad rastreador Plaspy
  - protocolo rastreador OBD II
  - protocolo seguimiento vehicular
  - protocolo telemetría de flotas
---

# Teltonika - Protocolo FMB003

Esta página ofrece una visión pública y no sensible del contexto de comunicación del Teltonika FMB003 cuando se utiliza con Plaspy. Se enfoca en cómo el rastreador transmite la telemetría OEM OBD y los datos de posición a una plataforma de gestión de flotas, y en qué medida el protocolo de reporte del dispositivo permite que esos datos sean utilizables en Plaspy. La información aquí está pensada para ayudar a administradores de flota e integradores a comprender el contexto a nivel de protocolo sin revelar detalles privados de implementación.

Plaspy utiliza una configuración de conexión compartida para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los datos llegan a su endpoint. El dominio del servidor de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138, usando un único puerto para todos los dispositivos: 8888. Los equipos pueden configurarse para usar UDP o TCP en el puerto 8888. El comportamiento exacto del protocolo y la telemetría disponible pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre valide las especificaciones del dispositivo con los recursos del fabricante cuando sea necesario.

## Resumen del protocolo

El FMB003 utiliza su protocolo de reporte para enviar posición, estado del vehículo y parámetros OEM OBD a un servidor remoto, de modo que plataformas como Plaspy puedan ingerir y mostrar telemetría útil. El protocolo define cómo el rastreador se identifica, con qué frecuencia informa y qué elementos de telemetría se transmiten, lo que permite a Plaspy correlacionar los datos entrantes con vehículos, viajes y alertas.

- Permite la entrega segura de posición GPS y telemetría derivada del OBD desde el vehículo hacia Plaspy.
- Transporta la identidad del dispositivo y la información de sesión para que Plaspy asocie los datos con el rastreador y el activo correctos.
- Lleva parámetros OEM como odómetro, nivel de combustible y métricas de batería leídas vía OBD-II, para que Plaspy pueda mostrar kilometraje y reportes de combustible precisos.
- Soporta mensajes de latido y de estado que ayudan a Plaspy a determinar la salud y conectividad del dispositivo.
- Sirve de base para alertas y automatizaciones en Plaspy al entregar datos orientados a eventos como encendido o condiciones de falla cuando estén disponibles.

## Cómo detecta Plaspy el protocolo

Plaspy acepta reportes entrantes de dispositivos en un único endpoint y puerto compartidos y realiza la detección automática para interpretar el flujo de datos entrante. En la mayoría de las implementaciones típicas no es necesario que un operador seleccione manualmente un protocolo dentro de Plaspy mientras el rastreador esté configurado para reportar al endpoint de Plaspy.

- Plaspy escucha en el puerto compartido 8888 para conexiones y datos de dispositivos.
- Los dispositivos deben apuntar al dominio d.plaspy.com o a la IP 54.85.159.138.
- Plaspy interpreta automáticamente el flujo entrante y lo mapea al registro de dispositivo correspondiente cuando el equipo está configurado correctamente.
- La selección manual de protocolo dentro de Plaspy suele ser innecesaria si el rastreador reporta al endpoint configurado.
- Asegurarse de que el dispositivo envíe la identidad y los mensajes de reporte adecuados facilita una detección automática fiable.

## Transporte y contexto de conexión

El transporte y el direccionamiento son distintos de los detalles del protocolo pero esenciales para una comunicación exitosa. El FMB003 puede configurarse para usar cualquiera de las opciones de transporte comunes en rastreadores celulares, y Plaspy acepta ambas en el puerto compartido.

- Los dispositivos pueden usar UDP o TCP en el puerto 8888 según la configuración y consideraciones de red.
- Los rastreadores pueden configurarse para reportar al dominio d.plaspy.com o directamente a la IP 54.85.159.138.
- Plaspy emplea el mismo puerto para todos los dispositivos compatibles para simplificar el aprovisionamiento y las reglas de firewall.
- La conectividad celular y el comportamiento de la red del operador pueden afectar la fiabilidad del transporte, así que elija UDP o TCP según las garantías de entrega necesarias y las recomendaciones del firmware del dispositivo.
- Confirme el APN y las reglas de puerto saliente con su operador móvil y asegúrese de que las reglas de firewall permitan conexiones salientes hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware del dispositivo pueden cambiar la frecuencia de los mensajes, los parámetros disponibles y los campos de telemetría opcionales; consulte las notas de la versión del firmware para más detalles.
- Las revisiones de hardware o las variantes regionales pueden exponer diferentes conjuntos de parámetros OBD o bandas celulares que afectan los datos reportados.
- La elección entre UDP y TCP puede influir en el comportamiento de entrega en condiciones de red adversas; asegúrese de que el transporte elegido sea compatible y estable en su entorno.
- Algunos modelos y marcas de vehículos pueden no exponer todos los parámetros OEM OBD; la disponibilidad de odómetro o métricas de combustible puede variar según el vehículo.
- Valide siempre la configuración del dispositivo con la documentación más reciente del fabricante para ajustes específicos del modelo y tipos de transporte recomendados.
- Al desplegar a gran escala, pruebe una unidad muestra con su proveedor celular y con el endpoint de Plaspy para confirmar el comportamiento de extremo a extremo antes del despliegue masivo.

## Por qué es importante conocer el protocolo

Comprender el protocolo de comunicación ayuda a los operadores a lograr un aprovisionamiento confiable de dispositivos, una resolución de problemas más rápida y telemetría predecible en Plaspy. Saber qué envía el rastreador y cómo se conecta reduce la ambigüedad al diagnosticar datos faltantes, comportamientos inesperados o limitaciones de funciones.

- Acelera el aprovisionamiento inicial al garantizar que los dispositivos apunten a d.plaspy.com o a 54.85.159.138 en el puerto 8888 usando el transporte previsto.
- Simplifica la resolución de problemas cuando faltan elementos de telemetría como odómetro o nivel de combustible, al aclarar si el problema está en el vehículo, el dispositivo o la red.
- Ayuda a determinar si se requieren actualizaciones de firmware o cambios de configuración para habilitar la telemetría deseada.
- Mejora la confiabilidad operativa al alinear los intervalos de reporte y el comportamiento de latido del dispositivo con las expectativas de Plaspy.
- Facilita la configuración precisa de alertas y automatizaciones en Plaspy al confirmar qué eventos y parámetros proporcionará realmente el dispositivo.

## Por qué usar Plaspy con este protocolo

Combinar el Teltonika FMB003 con Plaspy ofrece una vía práctica para incorporar telemetría OEM OBD y una instalación OBD-II compacta en los flujos de trabajo de la flota. La combinación resulta útil para flotas de alquiler, car sharing, servicios de entrega y monitoreo de vehículos eléctricos donde el kilometraje y las métricas de combustible o batería son importantes para facturación, mantenimiento y operaciones.

El enfoque de endpoint único de Plaspy simplifica el aprovisionamiento porque todos los dispositivos reportan al mismo puerto y Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los datos. Para conocer más sobre Plaspy y cómo maneja las integraciones de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más actuales y específicos por dispositivo sobre protocolo y firmware, verifique la información con el fabricante en https://www.teltonika-gps.com/ ya que el comportamiento del protocolo y las funciones del firmware pueden cambiar con el tiempo.
