---
slug: /gosafe/g797/protocol
id: g797-protocol
sidebar_label: Protocol
title: Gosafe - G797 Protocol
sidebar_class_name: menu_item_tracker
description: Contexto público del protocolo para integrar el rastreador OBD2 Gosafe G797 con Plaspy usando ajustes de conexión compartidos
keywords:
  - Protocolo Gosafe G797
  - Protocolo GPS Gosafe G797
  - Compatibilidad Gosafe G797 Plaspy
  - Protocolo rastreador OBD2 G797
  - Integración rastreadores Plaspy
  - Protocolo telemática vehicular
  - Protocolo rastreador OBDII GPS
  - Protocolo comunicaciones seguimiento flotas
  - Protocolo GPRS GPS
  - Telemetría seguro por uso
---

# Gosafe - Protocolo G797

Esta página documenta el contexto público del protocolo para usar el rastreador OBD2 Gosafe G797 con Plaspy. Explica cómo el equipo reporta telemetría GNSS, OBD y eventos a Plaspy, y aclara los ajustes de conexión que Plaspy espera para la ingestión de datos del dispositivo.

El G797 es un dispositivo telemático OBDII plug-and-play que integra un receptor GNSS Ublox 6, acelerometría 3D autocalibrable (con opción de IMU 6D) y diagnósticos OBD/CAN. Plaspy utiliza ajustes de conexión compartidos entre dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, el comportamiento exacto del protocolo puede variar según revisiones de firmware, variantes de hardware y la implementación del fabricante.

## Resumen del protocolo

El protocolo del rastreador define cómo el G797 se identifica ante un servidor, empaqueta posiciones GNSS, valores derivados del OBD y eventos de sensores, y entrega esos mensajes a Plaspy para seguimiento en tiempo real y telemetría histórica. Esta página describe los aspectos públicos e independientes de la implementación de esa comunicación para que los integradores puedan configurar dispositivos para que reporten a Plaspy.

- El protocolo permite que el dispositivo envíe fijaciones de posición GNSS, marcas de tiempo y metadatos básicos de satélites a Plaspy para mapeo y reproducción.
- Los diagnósticos OBD y CAN, como el VIN, entradas del odómetro y los PIDs disponibles, se reportan junto con los datos de posición para facilitar la identificación del vehículo y la telemetría.
- Las señales de acelerómetro y eventos se reportan para habilitar alertas FNOL, detección de choques y análisis de comportamiento del conductor en Plaspy.
- El transporte de mensajes y la lógica de reintentos determinan la fiabilidad de entrega sobre enlaces celulares; el G797 soporta GPRS y EDGE, con variantes opcionales UMTS y LTE.
- El protocolo expone canales de configuración y aprovisionamiento usados durante el despliegue y para actualizaciones remotas cuando el firmware del dispositivo lo soporta.

## Cómo detecta Plaspy el protocolo

Plaspy acepta conexiones entrantes de dispositivos en un punto final compartido y determina automáticamente el protocolo del rastreador cuando un dispositivo bien configurado se conecta. En la mayoría de los casos, un G797 dirigido a Plaspy no requerirá selección manual de protocolo dentro de la plataforma Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor Plaspy es 54.85.159.138. El puerto es 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el modelo y la elección de aprovisionamiento.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el aprovisionamiento en flotas grandes.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que los usuarios normalmente no necesitan seleccionar el protocolo de forma manual cuando el dispositivo está correctamente apuntado al endpoint de Plaspy.
- Si un dispositivo usa SMS u otro transporte alternativo como mecanismo de respaldo, Plaspy puede ingerir esos datos cuando esos canales se configuran conforme al plan de despliegue.

## Contexto de transporte y conexión

El contexto de conexión cubre el endpoint de red y el transporte que el G797 usa para comunicarse con Plaspy. La elección de transporte (TCP frente a UDP) y la variante celular influyen en la latencia, los reintentos y los pasos de configuración durante el aprovisionamiento.

- El G797 soporta reporte por TCP y UDP y, dependiendo de la variante de hardware y del firmware, puede también soportar reportes por SMS.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 para enviar telemetría a Plaspy.
- Los dispositivos pueden apuntar al nombre de host d.plaspy.com o a la IP del servidor Plaspy 54.85.159.138 como destino de reporte.
- Plaspy escucha en un solo puerto para todos los dispositivos, lo que reduce las diferencias de configuración por dispositivo durante el despliegue de la flota.
- Las variantes celulares (GPRS EDGE u opcionales UMTS LTE) determinan el ancho de banda disponible y el comportamiento de roaming, lo que puede afectar la temporización de mensajes y la entrega de actualizaciones de firmware.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar conjuntos de mensajes, intervalos de reporte o comandos de configuración. Valide la versión de firmware en uso durante la integración.
- Las revisiones de hardware y las variantes opcionales (por ejemplo, builds UMTS o LTE) pueden alterar los transportes soportados y los PIDs de diagnóstico disponibles.
- Las herramientas de configuración del fabricante y el aprovisionamiento opcional provisto por Gosafe pueden afectar cómo se apunta el dispositivo a Plaspy y qué canales quedan habilitados.
- La selección de transporte entre TCP y UDP modifica la semántica de entrega; elija el transporte soportado por el firmware del dispositivo y por su flujo de aprovisionamiento.
- Si depende de PIDs OBD específicos o de la acumulación de odómetro desde múltiples fuentes, verifique que el vehículo exponga esos PIDs y que el firmware del G797 los lea.
- Siempre contraste las afirmaciones de compatibilidad con la documentación del fabricante al planear despliegues de flota o integraciones críticas.

## Por qué es importante entender el protocolo

Contar con un entendimiento público y claro del protocolo de comunicación ayuda a asegurar una configuración exitosa, comportamiento predecible y una resolución de problemas más eficiente al usar el G797 con Plaspy.

- Garantiza un aprovisionamiento correcto de los dispositivos para que los mensajes lleguen al endpoint de Plaspy en d.plaspy.com puerto 8888 usando el transporte deseado.
- Facilita la interpretación de diferencias en la telemetría que surjan por variaciones de firmware o hardware durante los despliegues.
- Ayuda a diagnosticar datos faltantes o retrasados al acotar si el problema es de transporte, aprovisionamiento o firmware del dispositivo.
- Permite tomar decisiones informadas sobre qué variante celular y transporte desplegar según requerimientos de cobertura y fiabilidad.
- Mejora la planificación de requisitos funcionales como alertas FNOL, origen del odómetro y uso de PIDs OBD.

## Por qué usar Plaspy con este protocolo

Usar el G797 junto con Plaspy ofrece una solución práctica para organizaciones que requieren ubicación GNSS precisa, diagnósticos dentro del vehículo y telemetría basada en eventos. La integración OBDII del dispositivo aporta VIN y telemetría del vehículo que complementan las posiciones GNSS, permitiendo una identificación vehicular más clara, seguimiento de kilometraje multisensor y reportes operativos más completos dentro de Plaspy.

El enfoque unificado de ingestión de Plaspy reduce la configuración por dispositivo al usar el mismo puerto para todos los equipos compatibles y detectar automáticamente el protocolo del rastreador cuando los dispositivos reportan a d.plaspy.com. Para obtener más información sobre Plaspy y cómo puede apoyar a su flota o necesidades de telemática para seguros visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la documentación específica más reciente del fabricante en https://gosafesystem.com/.
