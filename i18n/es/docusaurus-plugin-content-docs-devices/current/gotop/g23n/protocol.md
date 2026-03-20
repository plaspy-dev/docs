---
slug: /gotop/g23n/protocol
id: g23n-protocol
sidebar_label: Protocol
title: GOTOP - G23N Protocol
sidebar_class_name: menu_item_tracker
description: Guía del protocolo público del rastreador GOTOP G23N para integrarlo con Plaspy y asegurar reportes confiables
keywords:
  - protocolo GOTOP G23N
  - protocolo GPS GOTOP G23N
  - protocolo de comunicación GOTOP G23N
  - protocolo de rastreo GOTOP G23N
  - protocolo rastreador GOTOP
  - compatibilidad rastreador GOTOP Plaspy
  - G23N NB IoT rastreo
  - protocolo rastreador vehicular G23N
  - rastreador GPS compatible Plaspy
  - rastreo de flotas GOTOP G23N
---

# GOTOP - Protocolo G23N

Esta página describe el contexto público del protocolo para usar el rastreador GOTOP G23N con Plaspy. Se centra en el papel de comunicación del dispositivo al reportar ubicación, telemetría y eventos de alarma a la plataforma Plaspy, y explica las configuraciones de conexión que Plaspy expone para el reporte de dispositivos. El contenido aquí busca ayudar a administradores e integradores a comprender cómo se comunica la G23N a alto nivel sin exponer detalles internos de firmware ni implementaciones privadas.

La G23N es un rastreador vehicular NB‑IoT construido alrededor del Quectel BC26 y un motor GNSS de ZKMicro; soporta posicionamiento GPS, BDS y LBS según la especificación del equipo. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero el comportamiento exacto puede variar según versiones de firmware, revisiones de hardware y decisiones del fabricante. Revise este panorama para alinear la configuración del equipo con las expectativas de Plaspy y consulte al fabricante para detalles específicos de firmware.

## Resumen del protocolo

El protocolo de la G23N define cómo el dispositivo empaqueta y envía mensajes de ubicación, estado y alarma a un servidor remoto para que Plaspy pueda procesarlos y mostrarlos. En el contexto de la integración con Plaspy, el objetivo es garantizar reportes confiables sobre NB‑IoT y mostrar cómo las entradas y salidas del vehículo se traducen en eventos y controles en la plataforma.

- Permite que la G23N reporte posiciones GNSS, ubicación basada en celdas y telemetría del dispositivo a un servidor remoto para su procesamiento.
- Entrega cambios de estado de alarmas e entradas como detección de ACC, pérdida de energía y estado de salidas remotas a Plaspy para su manejo de eventos.
- Proporciona un canal común de telemetría para que Plaspy presente marcadores en vivo, rutas y alarmas en los paneles.
- Permite que la G23N sea dirigida al endpoint de ingestión de Plaspy de modo que la identidad y el estado del dispositivo se asocien al activo correcto.
- Soporta rutas de configuración como ajustes locales por UART y configuración de reporte OTA para apuntar el dispositivo a Plaspy.

## Cómo detecta Plaspy el protocolo

Plaspy recibe las conexiones entrantes de dispositivos en un endpoint compartido y usa esa conexión para determinar el protocolo del rastreador entrante, de modo que la mayoría de los dispositivos pueden procesarse sin seleccionar manualmente el protocolo. Configurar correctamente la G23N para que reporte a Plaspy simplifica la incorporación y reduce la necesidad de configurar el protocolo por dispositivo dentro de Plaspy.

- El dominio del servidor Plaspy para reportes de dispositivo es d.plaspy.com.
- La dirección IP del servidor Plaspy es 54.85.159.138 y la plataforma escucha en un único puerto para el tráfico de dispositivos.
- La plataforma Plaspy detecta automáticamente el protocolo del rastreador una vez que el dispositivo reporta correctamente al endpoint de Plaspy.
- Cuando la G23N está configurada para apuntar al endpoint de Plaspy, normalmente no es necesario seleccionar el protocolo manualmente dentro de Plaspy.
- Un reporte consistente del dispositivo hacia el endpoint de Plaspy ayuda a garantizar la correcta asociación de los mensajes entrantes con los activos.

## Transporte y contexto de conexión

Los dispositivos G23N se conectan a través de radio NB‑IoT y reenvían datos a una dirección de servidor configurada en el equipo. Para la integración con Plaspy, los detalles críticos de transporte y direccionamiento están unificados para que los dispositivos soportados utilicen el mismo puerto y endpoint, permitiendo un reporte sencillo sin importar la marca del equipo.

- Los dispositivos pueden configurarse para reportar usando UDP o TCP en el puerto 8888 dependiendo del firmware y las opciones de configuración.
- Señale el dominio de reporte de Plaspy d.plaspy.com o use la IP del servidor Plaspy 54.85.159.138 cuando DNS no esté disponible.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración y reduce la variación por modelo.
- Elija el método de transporte que soporte su operador y la versión de firmware; algunos entornos de red o builds de firmware prefieren UDP mientras otros usan TCP.
- Verifique que el dispositivo pueda alcanzar el endpoint de Plaspy por el transporte seleccionado cuando esté detrás de firewalls o APN privados.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la temporización de mensajes, los transportes soportados y los campos de telemetría enviados; siempre revise las notas de la versión del firmware del equipo.
- Las revisiones de hardware, como la disposición de la antena o el firmware del módulo GNSS, pueden afectar el rendimiento de posicionamiento pero no cambian el endpoint público de reporte.
- Es posible que se requieran utilidades o comandos de configuración por parte del fabricante para apuntar la G23N al servidor Plaspy o para alternar entre UDP y TCP.
- Algunos operadores o redes NB‑IoT imponen límites en el tamaño del payload o en los tiempos de conexión que pueden afectar el comportamiento de reporte.
- Valide que su dispositivo esté configurado para enviar los eventos esperados de ACC, pérdida de energía y salidas remotas para que Plaspy pueda mapearlos a las funciones de la plataforma.
- En caso de dudas, compare el comportamiento del equipo con los logs de ingestión de Plaspy o los mensajes del dispositivo durante pruebas iniciales para confirmar compatibilidad.

## Por qué es importante comprender el protocolo

Entender el protocolo de comunicación de la G23N y el contexto de conexión con Plaspy ayuda a garantizar una incorporación de dispositivos fiable, un mapeo preciso de eventos y una resolución de problemas más rápida cuando los mensajes no llegan como se espera. Tener claridad sobre lo que envía el equipo y cómo lo recibe Plaspy reduce tiempos de inactividad y mejora la visibilidad de la flota.

- Asegura la configuración correcta del dispositivo para que mensajes de ubicación y alarmas lleguen a Plaspy de forma consistente.
- Ayuda a identificar si problemas de transporte o de red están impidiendo el reporte del dispositivo.
- Permite validar que los eventos de ACC, pérdida de energía y salidas remotas se mapeen correctamente a las reglas de eventos de Plaspy.
- Apoya la planificación de despliegues considerando NB‑IoT, como intervalos de reporte y gestión de energía.
- Aumenta la confianza al realizar actualizaciones de firmware o cambios de hardware que puedan afectar el reporte.

## Ventajas de usar Plaspy con este protocolo

Usar la G23N con Plaspy ofrece una forma unificada de recopilar ubicación GNSS basada en NB‑IoT, telemetría y eventos de entradas vehiculares, y mostrarlos en paneles, alertas e informes. El enfoque de endpoint compartido de Plaspy simplifica la configuración de los dispositivos y ayuda a los operadores a gestionar flotas mixtas con una dirección y puerto de servidor consistentes.

Plaspy está diseñado para aceptar reportes de rastreadores compatibles como la G23N y detectar automáticamente el protocolo del rastreador para que los dispositivos puedan incorporarse sin una selección compleja de protocolo por cada unidad. Para saber más sobre Plaspy y cómo puede utilizarse con dispositivos GOTOP visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente del protocolo y del firmware del fabricante en https://www.gotop.cc/.
