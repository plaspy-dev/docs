---
slug: /suntech/snt_100/protocol
id: snt_100-protocol
sidebar_label: Protocol
title: Suntech - SNT 100 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para conectar el Suntech SNT 100 y cómo el dispositivo se comunica con Plaspy para rastreo y gestión de flotas
keywords:
  - protocolo Suntech SNT 100
  - protocolo GPS Suntech SNT 100
  - compatibilidad Suntech SNT 100 Plaspy
  - protocolo de rastreo Suntech
  - comunicación SNT 100
  - protocolo de rastreador Suntech
  - rastreo de vehículos Plaspy
  - protocolo GPS para flotas
  - integración de rastreadores Plaspy
  - características SNT 100
---

# Suntech - Protocolo SNT 100

Esta página describe el contexto público del protocolo para usar el terminal de datos Suntech SNT 100 con Plaspy. Explica cómo el dispositivo se comunica con la plataforma Plaspy en términos no sensibles y neutrales en cuanto a implementación, para que los equipos de flota y los técnicos comprendan los requisitos de integración y el comportamiento esperado.

El SNT 100 es un terminal de datos completo que ofrece mensajería bidireccional, bloqueo y desbloqueo remoto del motor, monitoreo de geocercas y análisis de comportamiento del conductor. Plaspy utiliza una configuración de conexión compartida entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque el comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante. Valide el funcionamiento específico del dispositivo con la documentación del fabricante cuando sea necesario.

## Resumen del protocolo

A grandes rasgos, el protocolo SNT 100 define cómo el terminal informa la posición, el estado y los eventos relacionados con el conductor a una plataforma de monitoreo, y cómo recibe comandos o mensajes desde una estación de control. El papel del protocolo con Plaspy es entregar de forma fiable la identidad del dispositivo, los datos telemáticos y los eventos accionables para que la plataforma pueda mostrar y procesar el estado del vehículo y las alertas.

- Transporta telemetría básica como posiciones, marcas de tiempo e indicadores de estado que Plaspy usa para mapas e historial.
- Envía eventos de conductor y vehículo, como cruces de geocercas y resúmenes de comportamiento, para análisis de flota.
- Soporta mensajería bidireccional y comandos de control remoto que permiten la comunicación entre la estación de monitoreo y el conductor a través del terminal.
- Incluye información de identidad del dispositivo y datos de sesión para que Plaspy asocie los mensajes entrantes con el activo y la cuenta correctos.
- Facilita la entrega fiable sobre los transportes de red para que los datos lleguen al extremo de Plaspy para su procesamiento.

## Cómo Plaspy detecta el protocolo

Plaspy está diseñado para aceptar reportes de muchos modelos de rastreadores usando un único punto final de red y determinar automáticamente el protocolo entrante, por lo que los usuarios normalmente no tienen que seleccionar manualmente un protocolo en la plataforma. La configuración adecuada del dispositivo para apuntar al punto final de Plaspy suele ser el único paso necesario del lado del dispositivo.

- Plaspy escucha en un único punto final de servidor y puerto predefinidos para los reportes de dispositivos.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo correctamente configurado reporta al punto final de Plaspy.
- Por lo general no es necesario seleccionar un protocolo dentro de Plaspy si el dispositivo está configurado para reportar al punto final de Plaspy.
- Asegúrese de que el dispositivo envíe la cadena de identificación esperada o el mensaje de registro en la primera conexión para que la detección automática pueda asociar el dispositivo correctamente.
- Si en la flota hay varios dispositivos o revisiones de firmware, verifique que cada unidad reporte con éxito para confirmar que la detección automática funciona como se espera.

## Transporte y contexto de conexión

El contexto de conexión cubre cómo el SNT 100 alcanza los servidores de Plaspy en la red. El dispositivo puede configurarse para usar UDP o TCP como transporte según su capacidad y configuración, y debe apuntar al punto final del servidor de Plaspy para garantizar la entrega.

- El dominio del servidor Plaspy es d.plaspy.com y la IP del servidor es 54.85.159.138 para referencia de red directa.
- El puerto en el que Plaspy escucha las conexiones de dispositivos es 8888 y todos los dispositivos en Plaspy usan el mismo puerto.
- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y la elección del operador.
- Elija el transporte (UDP o TCP) de acuerdo con la fiabilidad de la red y las limitaciones de configuración del dispositivo.
- Confirme que el enrutamiento de red y las reglas de firewall permitan tráfico saliente desde los dispositivos hacia d.plaspy.com o a 54.85.159.138 en el transporte y puerto configurados.

## Notas sobre compatibilidad del protocolo

- Las diferencias de firmware en las unidades SNT 100 pueden cambiar qué mensajes están disponibles o cómo se codifican algunos eventos; consulte siempre las notas de la versión del firmware instalado.
- Las revisiones de hardware y los accesorios opcionales pueden afectar los sensores disponibles y, por tanto, la telemetría que se reporta a Plaspy.
- Los parámetros de configuración del lado del fabricante pueden exponer diferentes opciones de transporte o ajustes de frecuencia de mensajes que afectan la integración.
- La selección del transporte (UDP frente a TCP) puede influir en la fiabilidad y debe coincidir con la configuración del dispositivo.
- Confirme que el endpoint de reporte del dispositivo esté configurado al dominio o IP del servidor Plaspy y que el puerto esté en 8888 para una conectividad consistente.
- Al mezclar dispositivos de distintas familias Suntech, valide cada modelo de forma independiente incluso si parecen similares.

## Por qué es importante entender el protocolo

Comprender el protocolo de comunicación del SNT 100 y el contexto de red ayuda a asegurar una integración fluida con Plaspy, agiliza la resolución de problemas y favorece una operación predecible a largo plazo para los servicios de flota.

- Agiliza la puesta en marcha al aclarar qué debe enviar el dispositivo y a dónde debe enviarlo para alcanzar Plaspy.
- Ayuda a diagnosticar problemas de conectividad al centrar las comprobaciones en transporte, endpoint y comportamiento del firmware.
- Permite decisiones informadas sobre sondeo, frecuencia de reporte y umbrales de eventos que afectan el volumen de datos y el consumo de batería o energía.
- Facilita la identificación consistente de dispositivos para que los eventos y mensajes se asocien con el activo correcto en Plaspy.
- Mejora la fiabilidad operativa al alinear la configuración del dispositivo con las expectativas de red y plataforma de Plaspy.

## Por qué usar Plaspy con este protocolo

Usar el Suntech SNT 100 con Plaspy ofrece a los operadores de flotas un camino sencillo para capturar la ubicación del vehículo, obtener información del comportamiento del conductor, gestionar eventos de geocerca y facilitar la mensajería entre conductor y despacho. La detección automática de protocolo de Plaspy y el uso de un puerto de conexión compartido reducen la carga de configuración al poner dispositivos en línea, y la plataforma procesa la telemetría entrante para visualización, alertas e informes.

Para obtener más información sobre cómo Plaspy gestiona la conectividad de dispositivos y el monitoreo de flotas, visite https://www.plaspy.com. El soporte de protocolos, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que le recomendamos verificar la información específica del protocolo y las notas de firmware más recientes en el sitio oficial de Suntech http://www.suntechint.com/.
