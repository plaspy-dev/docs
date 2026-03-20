---
slug: /suntech/st4305/protocol
id: st4305-protocol
sidebar_label: Protocol
title: Suntech - ST4305 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo Suntech ST4305 para compatibilidad con Plaspy en seguimiento en tiempo real y telemetría
keywords:
  - Protocolo Suntech ST4305
  - Protocolo GPS Suntech ST4305
  - Protocolo de comunicación Suntech ST4305
  - Protocolo de rastreo Suntech ST4305
  - rastreador Suntech Plaspy
  - Compatibilidad ST4305 Plaspy
  - protocolo GPS para vehículos
  - protocolo de seguimiento de flotas
  - comunicación de rastreadores GPS
  - integración de dispositivos Plaspy
---

# Suntech - Protocolo ST4305

Esta página ofrece el contexto público del protocolo para usar la serie Suntech ST4305 con Plaspy. Resume cómo el equipo transmite telemetría general, posición y eventos a la plataforma Plaspy y qué deben considerar los integradores al apuntar dispositivos ST4305 a Plaspy para seguimiento en tiempo real y gestión de flotas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo informa al endpoint de Plaspy. El comportamiento exacto del protocolo y los campos de telemetría disponibles pueden variar según la versión de firmware, la variante de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto público y seguro necesario para una integración confiable.

## Resumen del protocolo

La familia de rastreadores ST4305 envía telemetría del vehículo y datos de posición GNSS a un servidor para que Plaspy pueda ingerir, mostrar y actuar sobre esos eventos. El contexto público del protocolo describe cómo el rastreador se identifica, reporta ubicación y estado, y admite telemetría adicional como entradas digitales, telemetría serial en variantes R/RE y eventos de seguridad opcionales.

- Transmite posiciones GNSS y telemetría de movimiento para seguimiento en tiempo real y reproducción histórica.
- Reporta entradas y salidas digitales, estado virtual de ignición y banderas de eventos que Plaspy utiliza para generar alertas.
- Envía identificación y estado del dispositivo para que Plaspy pueda correlacionar mensajes entrantes con un activo registrado.
- Soporta telemetría serial RS232 en las variantes R y RE para integración con diagnósticos del vehículo y gateways externos.
- Incluye señales opcionales de seguridad y recuperación, como estado de batería secundaria y detección de interferencias, cuando el firmware lo habilita.

## Cómo Plaspy detecta el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y determina automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado envía datos. En la mayoría de los casos, un rastreador apuntado al endpoint de Plaspy será detectado sin que el usuario tenga que seleccionar manualmente el protocolo dentro de la plataforma.

- Plaspy escucha reportes de dispositivos en el endpoint compartido d.plaspy.com y en la dirección IP del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación de dispositivos.
- Cuando un ST4305 reporta al endpoint de Plaspy, la plataforma detecta automáticamente el protocolo del rastreador y asocia los mensajes con el registro del dispositivo.
- Los usuarios normalmente sólo necesitan configurar el dispositivo para que reporte a la dirección y transporte de Plaspy; Plaspy se encarga de la identificación del protocolo para los modelos compatibles.
- Si un dispositivo no aparece, confirmar la configuración de reporte del dispositivo y la compatibilidad de firmware suele ser el primer paso para la resolución de problemas.

## Transporte y contexto de conexión

La familia ST4305 puede utilizar distintos métodos de transporte según la configuración del equipo y el soporte de la red. Para la conectividad con Plaspy, el rastreador puede configurarse para usar UDP o TCP en el puerto compartido que Plaspy emplea para todos los dispositivos.

- Los dispositivos pueden enviarse configurados para usar UDP o TCP en el puerto 8888, según el firmware y las necesidades de instalación.
- Los rastreadores pueden apuntar al nombre de dominio d.plaspy.com o directamente a la IP del servidor 54.85.159.138 al configurar el servidor de destino.
- Plaspy usa el puerto 8888 para todos los dispositivos soportados, lo que reduce la variación de configuración en flotas mixtas.
- La elección entre UDP y TCP puede afectar las características de entrega según las condiciones de la red y la configuración del equipo.
- Asegúrese de que el enrutamiento y las reglas de firewall de la red permitan el tráfico saliente desde el dispositivo hacia el endpoint de Plaspy en el transporte y puerto requeridos.

## Notas de compatibilidad del protocolo

- Las versiones de firmware pueden cambiar el contenido de los mensajes, los nombres de eventos y los campos de telemetría disponibles; revise las notas de firmware al diagnosticar comportamientos inesperados.
- Las variantes de hardware ST4305, ST4305R y ST4305RE exponen distintas capacidades de E/S y serial que afectan qué telemetría está disponible para Plaspy.
- Las configuraciones del fabricante y las funciones opcionales, como la detección de interferencias, pueden activarse o desactivarse según el firmware o las opciones de instalación.
- La selección del transporte entre UDP y TCP es una elección de configuración del dispositivo y puede necesitar concordar con las características de la red y el operador.
- La telemetría serial por RS232 en las variantes R y RE es útil para diagnósticos del vehículo, pero puede requerir pasos de integración adicionales en el lado de Plaspy.
- Siempre valide la compatibilidad y el comportamiento de los mensajes con la documentación oficial de Suntech para el modelo y la revisión de firmware exactos.

## Por qué es importante entender el protocolo

Tener claridad sobre el protocolo de comunicación ST4305 ayuda a garantizar una configuración confiable, telemetría precisa y una solución de problemas eficaz al integrar dispositivos con Plaspy. Saber qué reporta el rastreador y cómo se enlaza con Plaspy reduce el tiempo de incorporación y mejora la fiabilidad operativa de la flota.

- Garantiza que los mensajes del dispositivo incluyan los identificadores y campos de telemetría que Plaspy espera para el mapeo de activos.
- Ayuda a elegir las configuraciones de transporte y de red adecuadas para una entrega estable de mensajes.
- Facilita la resolución de problemas cuando falta telemetría o los eventos no activan los flujos de trabajo esperados.
- Aclara las diferencias entre variantes para que los integradores utilicen el cableado y las conexiones seriales correctas en los modelos R y RE.
- Orienta las decisiones de actualización de firmware y las comprobaciones de compatibilidad antes de despliegues a gran escala.

## Por qué usar Plaspy con este protocolo

Usar la serie Suntech ST4305 con Plaspy ofrece a los operadores de flotas visibilidad a nivel de vehículo combinada con los análisis y alertas de Plaspy. La familia ST4305 proporciona posicionamiento GNSS robusto, múltiples opciones de conectividad para amplia cobertura y capacidades específicas por variante, como RS232, que alimentan los paneles, reglas de geocercas y flujos de incidentes de Plaspy para mejorar la supervisión operativa.

Si necesita más detalles sobre las capacidades de la plataforma Plaspy o la planificación de la integración, conozca más en https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que debe verificar las especificaciones actuales del protocolo ST4305 y del firmware con el fabricante en http://www.suntechint.com/.
