---
slug: /navigil/pt220/protocol
id: pt220-protocol
sidebar_label: Protocol
title: Navigil - PT220 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del rastreador Navigil PT220 y cómo se comunica con Plaspy para reportar ubicación e integrarse
keywords:
  - Protocolo Navigil PT220
  - Protocolo GPS Navigil PT220
  - Protocolo PT220 Plaspy
  - Protocolo rastreador GPS Navigil
  - Protocolo de comunicación PT220
  - Protocolo de seguimiento PT220
  - Compatibilidad de dispositivos Plaspy
  - Integración de rastreadores GPS
  - Protocolo de rastreador personal
  - Protocolo de reporte de dispositivo
---

# Navigil - Protocolo PT220

Esta página presenta el contexto público del protocolo para usar el rastreador Navigil PT220 con Plaspy. Describe cómo el dispositivo suele reportar ubicación e información de eventos a Plaspy y aclara el papel de los ajustes de conexión y los modos de reporte para facilitar la integración y la solución de problemas.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está configurado correctamente para reportar al endpoint de Plaspy. El comportamiento exacto del PT220 puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se concentra en detalles públicos e independientes de la implementación, en lugar de internals específicos de firmware.

## Visión general del protocolo

El protocolo de reporte del PT220 engloba los comportamientos de comunicación e intercambios de mensajes que el rastreador usa para enviar datos de ubicación y eventos a un servidor como Plaspy. En la práctica, el protocolo permite que el dispositivo se identifique, entregue reportes periódicos o por eventos y soporte modos alternativos de consulta como SMS.

- Permite reportes periódicos de ubicación y reportes por eventos como movimiento o geocercas
- Incluye información de identidad del dispositivo para que Plaspy asocie los mensajes con el rastreador correcto
- Soporta tanto el reporte automático por GPRS como modos de consulta manual vía SMS según las capacidades del firmware del PT220
- Proporciona telemetría útil para monitorear el estado de la batería y la salud básica del dispositivo además de la posición GPS
- Opera sobre canales de datos celulares estándar cuando está en modo GPRS para enviar reportes a un endpoint remoto

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico entrante de dispositivos en un único endpoint compartido e identifica automáticamente el protocolo del rastreador, por lo que normalmente usted no necesita seleccionar un protocolo manualmente dentro de Plaspy. La configuración correcta del dispositivo para apuntar al endpoint de Plaspy es el paso clave para la detección automática y la integración exitosa.

- El dominio del servidor Plaspy para reporte de dispositivos es d.plaspy.com
- La dirección IP del servidor Plaspy es 54.85.159.138
- Plaspy escucha en el puerto 8888 para todo el tráfico soportado de dispositivos
- Los dispositivos pueden configurarse para usar UDP o TCP para llegar a Plaspy según el soporte del equipo
- Cuando un PT220 está configurado para reportar a d.plaspy.com en el puerto de Plaspy, Plaspy detectará automáticamente el protocolo y asociará los mensajes entrantes con el dispositivo

## Transporte y contexto de conexión

Los ajustes de transporte y conexión determinan cómo el PT220 alcanza a Plaspy en la red. El dispositivo se suele desplegar con una SIM y datos celulares habilitados para el modo GPRS, pero también puede usarse en modo de consulta por SMS para búsquedas manuales.

- El PT220 puede configurarse para usar UDP o TCP al enviar reportes a Plaspy
- Plaspy acepta tráfico de dispositivos en d.plaspy.com o en la IP 54.85.159.138 en el puerto compartido 8888
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica el enrutamiento y la detección del lado del servidor
- En modo GPRS, el dispositivo usa el canal de datos celular para enviar reportes periódicos y por eventos al endpoint configurado
- En modo SMS, el dispositivo puede ser consultado por texto o llamada según las opciones del firmware del fabricante

## Notas sobre compatibilidad del protocolo

- Las versiones de firmware pueden cambiar la temporización de mensajes, los campos soportados y los disparadores de eventos; verifique el comportamiento en el dispositivo de prueba
- Las revisiones de hardware pueden introducir diferencias en el radio o en el manejo de energía que afecten la frecuencia de reportes o los disparadores de activación
- Las opciones de configuración del fabricante, como intervalos de reporte y umbrales de eventos, afectan lo que Plaspy recibe
- La elección de transporte TCP frente a UDP puede verse limitada por las condiciones de la red del operador y la configuración del dispositivo
- La detección automática en Plaspy depende de que el dispositivo envíe reportes reconocibles al endpoint compartido de Plaspy
- Siempre valide un dispositivo de muestra en su entorno antes de un despliegue a gran escala

## Por qué es importante entender el protocolo

Comprender cómo se comunica el PT220 ayuda a garantizar reportes fiables, agilizar la resolución de problemas y lograr un funcionamiento predecible a largo plazo cuando se integra con Plaspy. Tener claro el comportamiento del protocolo reduce el tiempo de configuración y ayuda al diagnosticar problemas como reportes faltantes o asociaciones de dispositivo incorrectas.

- Confirma que el dispositivo apunta al endpoint correcto de Plaspy y usa el transporte esperado
- Ayuda a identificar diferencias relacionadas con el firmware que pueden cambiar la frecuencia de reportes o el contenido del payload
- Facilita acotar problemas de conectividad entre el rastreador y Plaspy
- Permite decisiones informadas sobre el modo de transporte y ajustes de gestión de energía para equilibrar la vida útil de la batería
- Aumenta la confianza al validar el comportamiento del dispositivo en distintas condiciones de red o regiones geográficas

## Por qué usar Plaspy con este protocolo

Usar el Navigil PT220 con Plaspy ofrece a organizaciones y cuidadores una manera sencilla de recolectar datos de ubicación y eventos desde un rastreador personal compacto. El modelo de endpoint compartido de Plaspy y la detección automática de protocolos reducen la carga de configuración y facilitan la integración de dispositivos que soportan reporte por GPRS o modos de consulta por SMS.

Si desea saber más sobre cómo Plaspy funciona con dispositivos como el PT220, visite https://www.plaspy.com. Tenga en cuenta que el soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, así que verifique la información más reciente específica del dispositivo con el fabricante en http://www.navigil.com/
