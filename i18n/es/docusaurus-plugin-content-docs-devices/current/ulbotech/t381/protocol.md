---
slug: /ulbotech/t381/protocol
id: t381-protocol
sidebar_label: Protocol
title: Ulbotech - T381 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo del localizador OBDII Ulbotech T381 y su comunicación con Plaspy
keywords:
  - Ulbotech T381
  - protocolo Ulbotech T381
  - rastreador GPS T381
  - rastreador OBDII T381
  - compatibilidad T381 Plaspy
  - protocolo de rastreo Ulbotech
  - telemetría vehicular T381
  - protocolo OBDII GPS
  - rastreo de flotas T381
  - inmovilizador T381
---

# Ulbotech - Protocolo T381

Esta página ofrece un contexto público del protocolo utilizado por el localizador OBDII Ulbotech T381 en su integración con la plataforma Plaspy. Se centra en cómo comunica el dispositivo con Plaspy de forma general, qué ajustes de conexión se usan de forma pública y cuál es el papel del protocolo para habilitar ubicación, telemetría y funciones de control que los operadores suelen requerir.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; no obstante, el comportamiento concreto del protocolo puede variar según la versión de firmware, revisiones de hardware y la implementación del fabricante. Este documento describe, a alto nivel y de forma segura, el contexto del protocolo del T381 y explica consideraciones prácticas para la configuración y solución de problemas sin revelar detalles privados de implementación.

## Resumen del protocolo

El protocolo del T381 regula cómo el equipo informa posición GNSS, telemetría OBDII y notificaciones de eventos a un servidor remoto, y cómo se inician desde la plataforma comandos remotos como el control del inmovilizador. Para la integración con Plaspy, la función pública del protocolo es encapsular de forma fiable la identidad del dispositivo y su telemetría para que Plaspy pueda asociar los mensajes entrantes con el registro de dispositivo correcto y presentar datos de ubicación y diagnóstico útiles.

- Permite que el equipo se identifique y asocie la telemetría a un registro único de dispositivo en Plaspy.
- Transporta reportes de posición GNSS y marcas de tiempo que Plaspy utiliza para seguimiento en vivo y trazas históricas.
- Transmite parámetros OBDII y SAE J1939 así como datos de diagnóstico para flotas y procesos de mantenimiento.
- Entrega notificaciones de evento (por ejemplo eventos de movimiento y señales de comportamiento del conductor) que Plaspy convierte en alertas e informes.
- Soporta señalización de control remoto, como comandos de inmovilizador, cuando el dispositivo y el fabricante permiten esas operaciones.

## Cómo Plaspy detecta el protocolo

Plaspy acepta reportes en un único endpoint público y detecta automáticamente el protocolo del rastreador en la mayoría de los dispositivos cuando estos están configurados para reportar a la plataforma. En muchas implementaciones no será necesario seleccionar manualmente el protocolo dentro de Plaspy mientras el rastreador esté apuntando al endpoint de reporte de la plataforma.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP conocida del servidor es 54.85.159.138 en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.
- Cuando un T381 está configurado para enviar datos a d.plaspy.com (o a la IP del servidor) en el puerto 8888, Plaspy recibirá sus reportes y los asociará con el registro del dispositivo correspondiente.
- Los usuarios suelen definir el destino de reporte del dispositivo en el propio rastreador o mediante herramientas de configuración; una vez que el endpoint es correcto, la detección del protocolo la gestiona la plataforma.
- Si un dispositivo no aparece en Plaspy, verificar el endpoint, el tipo de transporte y la configuración de identidad del equipo es un primer paso sensato.

## Transporte y contexto de conexión

El T381 soporta opciones de transporte TCP y UDP estándar según el firmware y la configuración del dispositivo, y el endpoint público de Plaspy acepta ambos transportes en el puerto compartido. La elección entre TCP o UDP puede afectar las garantías de entrega, pero no altera el hecho de que Plaspy recibe los datos del dispositivo en el mismo puerto para todos los tipos de rastreadores.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 para reportar a Plaspy.
- Los equipos pueden apuntar a d.plaspy.com o a la IP numérica 54.85.159.138 cuando el DNS o las políticas de red locales lo requieran.
- Plaspy escucha en el puerto 8888 las conexiones entrantes de todos los rastreadores compatibles, incluido el T381.
- La elección del transporte (UDP vs TCP) se realiza en el dispositivo o mediante herramientas de instalación y debe coincidir con las capacidades del firmware.
- Asegúrese de que los firewalls de red y la configuración APN del operador móvil permitan conexiones salientes al endpoint de Plaspy en el puerto 8888.

## Notas de compatibilidad del protocolo

- Revisiones de firmware y lotes de producción de hardware pueden introducir pequeñas variaciones en la frecuencia de reporte y en los campos de telemetría disponibles; siempre consulte las notas de la versión del dispositivo.
- Las variantes regionales o por operador del T381 pueden usar firmware de radio distinto, lo que puede afectar el comportamiento de conexión manteniendo el mismo protocolo.
- Algunas funciones, como el control de inmovilizador o PIDs OBDII avanzados, pueden requerir un firmware o configuración específica para exponerse a la plataforma.
- Al cambiar el transporte (UDP vs TCP), confirme que el equipo esté configurado de forma consistente y que las redes intermedias no bloqueen el transporte elegido.
- Las utilidades de configuración del fabricante o los perfiles de aprovisionamiento de la SIM pueden modificar cómo el dispositivo resuelve d.plaspy.com; usar la IP del servidor es una opción de resolución de problemas en entornos con DNS restringido.
- Valide la compatibilidad y las funciones soportadas frente a la documentación oficial de Ulbotech para su compilación de firmware antes de un despliegue a gran escala.

## Por qué es importante entender el protocolo

Tener conocimiento del protocolo de comunicación del rastreador ayuda a asegurar una configuración inicial correcta, acelera la resolución de problemas cuando los dispositivos dejan de reportar y permite prever comportamientos a largo plazo conforme cambien firmware y condiciones de red. Entender el límite práctico entre dispositivo y plataforma reduce tiempos de integración y mejora la confiabilidad operativa.

- Facilita verificar que un dispositivo está llegando a Plaspy confirmando endpoint, transporte y campos de identidad.
- Ayuda a diagnosticar problemas como reportes intermitentes, parámetros OBD faltantes o entrega de eventos, enfocando la investigación en configuración, transporte y firmware.
- Orienta la decisión sobre usar TCP o UDP en un despliegue específico según la fiabilidad requerida y las restricciones de red.
- Soporta la planificación de mantenimiento cuando se dispone de nuevo firmware que pueda modificar la cadencia de reportes o exponer telemetría adicional.
- Mejora la comunicación con los fabricantes al permitir descripciones precisas del comportamiento observado frente a los reportes esperados.

## Por qué usar Plaspy con este protocolo

Integrar el Ulbotech T381 con Plaspy ofrece a las organizaciones una solución OBDII compacta que entrega posición GNSS, telemetría del vehículo y notificaciones basadas en eventos dentro de una única plataforma de gestión de flotas. La combinación de reportes OBDII y GNSS, junto con funciones como punto de acceso Wi‑Fi y salida para inmovilizador remoto, hace al T381 adecuado para monitoreo de flotas, diagnóstico, gestión de combustible y flujos de trabajo de seguridad cuando se integra con Plaspy.

El endpoint compartido de Plaspy simplifica el despliegue: configure el T381 para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888 (usando UDP o TCP según lo soporte el dispositivo) y la plataforma detectará automáticamente el protocolo del rastreador y comenzará a procesar los reportes. Para saber más sobre Plaspy y cómo apoya soluciones de vehículos conectados, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente y específica del dispositivo con Ulbotech en http://www.ulbotech.com/ antes de realizar actualizaciones a nivel de flota.
