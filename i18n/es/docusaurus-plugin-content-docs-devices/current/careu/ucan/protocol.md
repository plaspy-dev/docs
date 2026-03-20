---
slug: /careu/ucan/protocol
id: ucan-protocol
sidebar_label: Protocol
title: CAREU - UCAN Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador CAREU UCAN y su comunicación con Plaspy para seguimiento de flotas y telemetría
keywords:
  - protocolo CAREU UCAN
  - protocolo GPS CAREU UCAN
  - compatibilidad CAREU UCAN Plaspy
  - protocolo de comunicación CAREU UCAN
  - protocolo de rastreo CAREU UCAN
  - rastreador OBDII CAREU UCAN
  - rastreador GPS compatible con Plaspy
  - rastreo de vehículos UCAN
  - protocolo de telemetría UCAN
  - seguimiento de flotas CAREU
---

# CAREU - Protocolo UCAN

Esta página presenta el contexto público del protocolo para usar el rastreador OBD II CAREU UCAN con Plaspy. Aquí se explica de forma general y sin detalles sensibles cómo el dispositivo se comunica con la plataforma Plaspy, de modo que operadores de flotas e integradores puedan comprender las expectativas de conexión, el comportamiento de reporte y las consideraciones prácticas de compatibilidad.

El CAREU UCAN es un rastreador OBD II plug and play diseñado para proporcionar posición GNSS, estado del motor e ignición, telemetría OBD y eventos del acelerómetro a una plataforma backend. Plaspy utiliza configuraciones de conexión compartidas entre los dispositivos admitidos y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo y los campos disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que variantes del dispositivo y actualizaciones de firmware pueden modificar los detalles de reporte con el tiempo.

## Descripción general del protocolo

El protocolo UCAN regula cómo el rastreador empaqueta y transmite telemetría y eventos desde el vehículo hacia un servidor remoto para que Plaspy pueda mostrar ubicación, diagnósticos y alertas a los usuarios. Esta documentación describe el contexto del protocolo relevante para la integración, más que las estructuras de paquetes a bajo nivel.

- Permite el envío en tiempo real de la posición GNSS y actualizaciones periódicas de ubicación para la visibilidad de la flota.
- Transporta telemetría OBD II como odómetro, RPM, velocidad del vehículo, nivel de combustible y códigos de diagnóstico para flujos de mantenimiento.
- Transmite eventos basados en el acelerómetro, incluyendo aceleraciones bruscas, frenadas fuertes y notificaciones de impacto para análisis de comportamiento del conductor.
- Soporta configuración remota y actualizaciones tipo FOTA a nivel de protocolo para gestionar intervalos de reporte y umbrales de forma centralizada.
- Funciona sobre transportes IP comunes para que el dispositivo alcance el endpoint de Plaspy desde redes celulares con una configuración mínima.

## Detección del protocolo por Plaspy

Plaspy está diseñado para aceptar conexiones entrantes de muchos modelos de rastreadores usando el mismo endpoint y puerto de red, y luego identificar automáticamente el protocolo de reporte. Cuando un dispositivo UCAN se configura para reportar a Plaspy, la plataforma normalmente reconoce el tipo de dispositivo y comienza a procesar la telemetría sin que el usuario deba seleccionar manualmente el protocolo.

- Plaspy acepta el tráfico de dispositivos en un único endpoint y puerto compartido para todos los dispositivos soportados, lo que simplifica el aprovisionamiento.
- El dominio del servidor de Plaspy para reportes de dispositivos es d.plaspy.com y la IP pública conocida es 54.85.159.138.
- Todos los dispositivos de Plaspy reportan en el puerto 8888 y Plaspy utiliza ese mismo puerto en los distintos modelos.
- La plataforma detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan elegir un protocolo dentro de Plaspy cuando UCAN está configurado correctamente.
- La configuración correcta del dispositivo para apuntar al endpoint de reporte de Plaspy es el requisito principal para la detección automática.

## Contexto de transporte y conexión

Los dispositivos UCAN transmiten telemetría sobre datos celulares y pueden configurarse para usar UDP o TCP según la variante del dispositivo y las opciones del operador móvil. Comprender qué transporte está activo y cómo el dispositivo está dirigido al endpoint de Plaspy ayuda a asegurar conectividad confiable y el comportamiento de reporte esperado.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y el aprovisionamiento.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o a la IP pública 54.85.159.138 cuando consideraciones de DNS o enrutamiento requieren una dirección IP.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de cortafuegos y redes para las flotas.
- El comportamiento de conmutación de red, como transiciones de 4G a 3G o 2G, lo gestiona el dispositivo y puede afectar la cadencia de reportes durante el traspaso.
- Las opciones de aprovisionamiento celular, incluyendo eSIM opcional en algunas variantes UCAN, influyen en cómo el dispositivo se conecta a la red y alcanza a Plaspy.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware entre versiones UCAN pueden cambiar qué campos de telemetría están disponibles o cómo se reportan los eventos; verifique las notas de firmware para entender el comportamiento del dispositivo.
- Las variantes de hardware, como versiones 4G frente a 3G/2G, pueden diferir en memoria, capacidad de registro y funciones disponibles como Bluetooth o interfaces para accesorios.
- Las configuraciones predeterminadas del fabricante y el firmware regional pueden provocar variaciones sutiles del protocolo incluso para un mismo nombre de modelo.
- La selección del transporte entre UDP y TCP afecta la confiabilidad y las reglas de cortafuegos; confirme que el dispositivo está configurado para usar un transporte permitido en su red.
- Las capacidades de configuración remota y FOTA dependen de los ajustes del servidor del fabricante y del soporte del firmware del dispositivo; confirme estas funciones antes de desplegar en gran escala.
- Siempre valide el comportamiento en condiciones reales probando un pequeño lote de dispositivos para confirmar que Plaspy recibe la telemetría y los eventos esperados.

## Por qué es importante entender el protocolo

Comprender de manera práctica el protocolo de comunicación ayuda a operadores de flotas e integradores a configurar correctamente los dispositivos, diagnosticar problemas de conectividad o mapeo de datos y mantener la confiabilidad a largo plazo en Plaspy. Incluso cuando una plataforma detecta el protocolo automáticamente, conocer qué reporta el rastreador y cómo se conecta evita tiempo de inactividad evitable.

- Asegura que las configuraciones de cortafuegos, NAT y del operador permitan tráfico hacia y desde d.plaspy.com o la IP conocida para que los datos lleguen a Plaspy de forma confiable.
- Ayuda a interpretar los campos de telemetría enviados por el dispositivo y mapearlos a elementos del panel de Plaspy como odómetro, combustible y códigos DTC.
- Facilita la solución de problemas cuando eventos o diagnósticos esperados no aparecen en el panel de Plaspy al acotar la búsqueda a transporte, firmware o configuración del dispositivo.
- Mejora la planificación de actualizaciones de firmware y despliegues de funciones al reconocer qué capacidades de protocolo soporta el firmware actual del dispositivo.
- Permite tomar decisiones informadas sobre la selección de variantes de dispositivo en función de conectividad, capacidad de registro y soporte de accesorios.

## Por qué usar Plaspy con este protocolo

Usar el rastreador CAREU UCAN con Plaspy ofrece a los operadores de flotas una vía sencilla para combinar una instalación OBD II plug and play con visibilidad centralizada. UCAN aporta ubicación del vehículo, telemetría OBD y eventos de acelerómetro que alimentan directamente a Plaspy para monitoreo de rutas, flujos de mantenimiento, programas de comportamiento del conductor y alertas de seguridad.

Para obtener más información sobre Plaspy y cómo los datos UCAN pueden consumirse en la plataforma, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo; verifique la información más reciente sobre el protocolo y firmware específicos del dispositivo en la página del fabricante en https://www.systech-iot.com/ antes de realizar despliegues a gran escala.
