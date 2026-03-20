---
slug: /autoseeker/at_3/protocol
id: at_3-protocol
sidebar_label: Protocol
title: Autoseeker - AT-3 Protocol
sidebar_class_name: menu_item_tracker
description: Visión general pública del protocolo para integrar el rastreador Autoseeker AT-3 con Plaspy
keywords:
  - protocolo Autoseeker AT-3
  - protocolo GPS Autoseeker AT-3
  - Autoseeker AT-3 con Plaspy
  - protocolo de rastreo AT-3
  - guía de protocolo de rastreadores GPS
  - compatibilidad de dispositivos con Plaspy
  - comunicación de rastreadores para mascotas
  - integración de rastreadores GPS 4G
  - rastreador para mascotas Autoseeker
  - resumen del protocolo del dispositivo
---

# Autoseeker - Protocolo AT-3

Esta página describe el contexto público del protocolo para usar el rastreador Autoseeker AT-3 4G GPS para mascotas con la plataforma Plaspy. Se enfoca en cómo el dispositivo se comunica con Plaspy en términos generales, qué puntos de conexión se utilizan y consideraciones prácticas para una integración exitosa sin exponer detalles privados del proveedor o internos del firmware.

El AT-3 es un rastreador compacto, con certificación IP67, que funciona sobre conectividad celular 4G LTE Cat-1 y es compatible con Plaspy para mapas en tiempo real, alertas e historial. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la documentación aquí pretende ser una referencia pública y no un reemplazo de los materiales del fabricante.

## Resumen del protocolo

El protocolo de comunicación usado por el AT-3 permite al dispositivo reportar posiciones GNSS, telemetría de batería y eventos, así como recibir comandos de recuperación hacia un servidor centralizado para su ingestión por Plaspy. En la práctica, el protocolo define cómo se identifica el rastreador, cuándo envía actualizaciones y qué tipos de eventos de estado se reenvían a la plataforma.

- Envía actualizaciones de ubicación y telemetría como batería, estado de señal y eventos de geocerca a Plaspy.
- Permite acciones remotas como activar el buzzer o los LED mediante comandos enrutados a través de Plaspy.
- Soporta identificación para que Plaspy asocie los datos entrantes con el registro de dispositivo correcto.
- Define el reporte de eventos para alarmas como entrada/salida de geocerca y batería baja, que disparan notificaciones y alertas.
- Habilita el historial y la reproducción de rutas entregando puntos de posición periódicos con sus marcas de tiempo a Plaspy.

## Detección del protocolo por parte de Plaspy

Plaspy acepta conexiones entrantes de dispositivos en un punto compartido y detecta automáticamente el protocolo de reporte de cada equipo. Cuando un AT-3 está configurado para reportar a Plaspy, la plataforma identificará el formato del rastreador sin que el usuario tenga que elegir un protocolo manualmente dentro de Plaspy, siempre que el dispositivo esté apuntando correctamente al endpoint de Plaspy.

- Plaspy recibe el tráfico de los dispositivos en un endpoint y puerto comunes y realiza detección automática del protocolo.
- Por lo general, los usuarios solo necesitan configurar el dispositivo para que apunte al endpoint de Plaspy; la plataforma se encarga del reconocimiento del protocolo.
- Identificadores de dispositivo correctos (IMEI o ID de dispositivo) y ajustes de transporte coherentes mejoran la detección exitosa.
- Si un dispositivo no aparece, verifique la configuración del equipo y asegúrese de que esté informando al endpoint y credenciales correctas de Plaspy.
- La detección automática reduce pasos de configuración manual, pero no sustituye validar el comportamiento del dispositivo contra la guía del fabricante.

## Transporte y contexto de conexión

El AT-3 puede configurarse para usar UDP o TCP para el reporte según el soporte del dispositivo y las opciones de configuración. Plaspy ofrece un endpoint de servidor consistente para ingestión, de modo que los dispositivos pueden apuntar a ese host y puerto para entregar telemetría y recibir comandos de recuperación.

- Los dispositivos pueden configurarse para reportar usando UDP o TCP en el puerto 8888 dependiendo del firmware del modelo y las opciones de configuración.
- El host público de ingestión de Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para entornos donde se requiera una dirección numérica.
- El puerto que usa Plaspy para tráfico de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto para reportes y entrega de comandos.
- Elegir UDP o TCP depende de la configuración del dispositivo y las condiciones de red; Plaspy acepta ambos transportes en el mismo puerto.
- Mantenga el APN y la configuración celular actualizados en el dispositivo para que pueda establecer el transporte elegido al endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, campos opcionales y eventos soportados; verifique la versión de firmware al solucionar problemas.
- Revisiones de hardware o lotes de producción diferentes podrían alterar las opciones de transporte soportadas o los sensores y telemetrías disponibles.
- Las herramientas de configuración del fabricante o los comandos SMS usados para establecer endpoints de reporte deben apuntar a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Use UDP cuando la documentación del dispositivo lo recomiende para reportes de bajo overhead, o TCP si se prefiere y soporta un comportamiento de sesión persistente.
- La detección automática de Plaspy funciona para la mayoría de reportes estándar de dispositivos, pero validar los mensajes entrantes contra la documentación del dispositivo ayuda a resolver casos límite.
- Consulte siempre la documentación del dispositivo para comportamientos específicos de firmware que afecten intervalos de reporte, modos de sueño o generación de eventos.

## Por qué es importante entender el protocolo

Comprender en la práctica el protocolo de comunicación del AT-3 ayuda a asegurar una configuración confiable, acelerar la resolución de problemas y predecir el comportamiento cuando el rastreador se integra con Plaspy. Saber qué se espera que envíe el rastreador y cómo Plaspy lo ingiere reduce el tiempo de inactividad y mejora la precisión de las alertas para la monitorización de mascotas.

- Ayuda a confirmar que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte adecuado en el puerto 8888.
- Permite diagnosticar más rápido actualizaciones faltantes, banderas de evento incorrectas o reportes de batería inesperados.
- Aclara qué eventos del dispositivo se mapearán a alertas en Plaspy y cuáles requieren configuración por parte del fabricante.
- Facilita decisiones informadas sobre intervalos de reporte frente a duración de batería según distintos casos de uso.
- Ayuda a planificar despliegues con múltiples dispositivos anticipando diferencias de firmware y transporte.

## Por qué usar Plaspy con este protocolo

Usar el Autoseeker AT-3 con Plaspy ofrece visibilidad centralizada y práctica para el rastreo de mascotas y la gestión operativa. La combinación de conectividad 4G de bajo consumo, diseño resistente a la intemperie e ingestión por Plaspy permite que cuidadores y organizaciones monitoricen la ubicación en vivo, reciban alertas de geocerca y batería baja, y reproduzcan historial para revisar incidentes.

Si desea conocer más sobre Plaspy e integración de dispositivos soportados, visite https://www.plaspy.com. Para detalles más recientes específicos del dispositivo, notas de firmware e instrucciones del fabricante, verifique la documentación oficial de Autoseeker en https://autoseekergps.com/. El soporte del protocolo y el comportamiento del dispositivo pueden cambiar con actualizaciones de firmware y hardware, por lo que es recomendable confirmar la información actual con el fabricante.
