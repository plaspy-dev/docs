---
slug: /khd/kg300/protocol
id: kg300-protocol
sidebar_label: Protocol
title: KHD - KG300 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para integrar el rastreador KHD KG300 con Plaspy, detección de transporte y consideraciones de compatibilidad
keywords:
  - protocolo KHD KG300
  - protocolo GPS KG300
  - protocolo de comunicación KHD KG300
  - protocolo de rastreo KG300
  - rastreador KHD Plaspy
  - compatibilidad KG300 Plaspy
  - rastreo de vehículos KG300
  - rastreador GNSS KG300
  - rastreador GSM GPS KG300
  - guía de protocolo KG300
---

# KHD - Protocolo KG300

Esta página describe el contexto público del protocolo para usar el rastreador KHD KG300 con la plataforma Plaspy. Explica cómo el KG300 se comunica a través de redes celulares y cómo esos detalles públicos de comunicación se relacionan con el envío de reportes a Plaspy sin exponer implementaciones privadas del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente apuntado al endpoint de Plaspy. El comportamiento exacto del protocolo y las funcionalidades disponibles pueden variar según la versión de firmware, la revisión de hardware y la configuración del fabricante, por lo que la información aquí es una guía pública general para ayudar en la configuración y resolución de problemas.

## Descripción general del protocolo

El KG300 es un rastreador GNSS que utiliza conectividad celular GSM para reportar ubicación, alertas y eventos a servidores backend. En términos prácticos, el dispositivo envía sus datos de reporte a través de la red móvil para que una plataforma como Plaspy pueda recibir, interpretar y presentar esa información para casos de uso de rastreo y monitoreo.

- El protocolo del rastreador define cómo el dispositivo se identifica ante un backend y cómo se codifican los datos de posición y eventos para su transmisión.
- El comportamiento del protocolo determina qué campos del dispositivo están disponibles para que Plaspy los mapee en ubicación, velocidad, estado de entradas y alertas.
- El KG300 puede informar eventos como cruces de geocerca, alertas de emergencia y reportes programados que la plataforma interpreta para generar notificaciones y registros históricos.
- Las configuraciones a nivel de transporte (dominio o IP, puerto y TCP o UDP) determinan cómo el dispositivo alcanza el endpoint de Plaspy.
- El KG300 dispone de SMS como canal alterno para comandos y alertas simples; el reporte en tiempo real principal suele realizarse vía datos GPRS/GSM.

## Cómo Plaspy detecta el protocolo

Plaspy recibe conexiones entrantes en un endpoint y puerto compartidos y detecta automáticamente qué protocolo está usando el rastreador cuando el dispositivo reporta a ese endpoint. En la mayoría de los casos, si el KG300 está configurado para reportar a Plaspy, no se requiere seleccionar el protocolo manualmente dentro de Plaspy.

- Plaspy escucha en un puerto común para todos los dispositivos soportados, lo que simplifica la configuración del equipo.
- Cuando un dispositivo reporta al endpoint de Plaspy, la plataforma usa el flujo de datos entrante para determinar automáticamente el tipo de protocolo.
- Usted normalmente configura el KG300 para que reporte a la dirección y puerto del servidor Plaspy; una vez configurado, Plaspy reconocerá el tráfico del dispositivo.
- La detección automática reduce la necesidad de que el usuario final elija un parser o perfil de protocolo durante la incorporación inicial.
- Si un dispositivo no parece conectarse, verifique que el rastreador esté usando la dirección de servidor correcta, el transporte adecuado y que los datos móviles estén activos.

## Contexto de transporte y conexión

Los dispositivos KG300 pueden configurarse para usar transporte UDP o TCP para los reportes, según la configuración del equipo y las condiciones de la red. Para Plaspy, el contexto de conexión pública está estandarizado para que los dispositivos apunten a un endpoint conocido de Plaspy.

- El dominio del servidor Plaspy es d.plaspy.com para el reporte de dispositivos.
- La IP del servidor Plaspy es 54.85.159.138 y el puerto de escucha para dispositivos es 8888.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según el soporte del rastreador y el transporte elegido.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración de la dirección y el puerto en el rastreador.
- Si es posible, configure el APN y los ajustes de servidor del KG300 para apuntar a d.plaspy.com o a la IP 54.85.159.138 con el transporte que coincida con la configuración de su dispositivo.
- Use el transporte que mejor soporte su red móvil y el firmware del dispositivo; algunas redes y firmwares funcionan mejor con TCP mientras que otras prefieren UDP.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware pueden cambiar qué campos de reporte están disponibles y con qué frecuencia el KG300 informa ubicación y eventos.
- Las revisiones de hardware o variantes regionales pueden alterar los transportes soportados o el conjunto de funciones.
- El KG300 soporta SMS como canal secundario, útil cuando los datos GPRS no están disponibles.
- Seleccionar TCP frente a UDP en el dispositivo puede afectar la fiabilidad y la latencia según las condiciones de la red y el comportamiento del operador.
- Siempre valide la compatibilidad y la configuración requerida con la documentación suministrada por el fabricante para su dispositivo y firmware específicos.
- Apuntar el dispositivo al endpoint y puerto correctos de Plaspy es la razón más común para una integración exitosa.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del KG300 ayuda a asegurar una configuración confiable, a agilizar la resolución de problemas y a prever el comportamiento a largo plazo cuando el rastreador se usa con Plaspy. Conocer el contexto público del protocolo reduce la incertidumbre durante la incorporación y ayuda a tomar decisiones informadas de configuración.

- Aclara qué transporte (TCP o UDP) seleccionar para lograr el mejor comportamiento en su entorno de red.
- Le ayuda a verificar que el dispositivo esté reportando los campos esperados, como posición, hora y estados de entradas.
- Reduce el tiempo de integración al centrar la atención en la dirección del servidor, el puerto y los ajustes de APN en lugar de formatos internos de paquetes.
- Facilita el diagnóstico de problemas de conectividad al confirmar si los datos llegan al endpoint de Plaspy.
- Apoya la planificación para actualizaciones de firmware y cambios de hardware que puedan afectar la frecuencia de reporte o los eventos disponibles.

## Por qué usar Plaspy con este protocolo

Usar Plaspy con un rastreador KG300 ofrece a las organizaciones visibilidad práctica de la ubicación de vehículos, alertas de estado y movimientos históricos. Dado que Plaspy usa una dirección de servidor y puerto compartidos y detecta automáticamente el protocolo del dispositivo, la incorporación suele ser sencilla una vez que el rastreador apunta al endpoint de Plaspy.

Para pasos de configuración más detallados y la información más reciente sobre disponibilidad de funciones, por favor visite Plaspy en el sitio principal https://www.plaspy.com. El soporte de protocolo, el comportamiento de firmware y los detalles de implementación del fabricante pueden cambiar con el tiempo, por lo que debe verificar la guía de protocolo específica del dispositivo y las notas de firmware en el sitio oficial de KHD http://www.khd.hk.
