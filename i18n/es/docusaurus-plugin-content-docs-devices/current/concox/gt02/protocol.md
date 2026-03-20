---
slug: /concox/gt02/protocol
id: gt02-protocol
sidebar_label: Protocol
title: Concox - GT02 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del Concox GT02 para integración con la plataforma de rastreo Plaspy
keywords:
  - Protocolo Concox GT02
  - Protocolo GPS Concox GT02
  - Protocolo de comunicación GT02
  - Protocolo de rastreo GT02
  - Rastreador Concox Plaspy
  - Compatibilidad GPS Concox
  - Rastreo de vehículos GT02
  - Guía de protocolo de rastreador GPS
  - Gestión de flotas Concox
  - Integración de dispositivo Plaspy
---

# Concox - Protocolo GT02

Esta página ofrece un contexto público sobre el protocolo utilizado por el rastreador Concox GT02 al integrarse con la plataforma Plaspy. Describe, a alto nivel, cómo se comunica el equipo, qué ajustes de conexión espera Plaspy y qué aspectos considerar al integrar o solucionar problemas del rastreador. El objetivo es ayudar a usuarios técnicos e integradores a comprender el papel de comunicación del dispositivo sin exponer detalles privados de implementación.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que el reporte de datos y la disponibilidad de funciones pueden diferir entre unidades. Para comportamientos específicos de firmware, siempre consulte la documentación de Concox mientras usa esta guía como referencia para la integración con Plaspy.

## Resumen del protocolo

El protocolo del rastreador es el conjunto de señales y mensajes que el GT02 utiliza para reportar ubicación, estado y alertas a un servidor remoto. En la práctica, el protocolo permite que el dispositivo se identifique, establezca conectividad básica y envíe telemetría periódica o por eventos que Plaspy pueda interpretar y mostrar a los usuarios.

- Permite que el GT02 informe posición, marcas de tiempo y campos básicos de estado a un endpoint remoto.
- Transporta información de identidad para que Plaspy asocie los datos entrantes con el registro de dispositivo correcto.
- Soporta tanto seguimiento periódico como reportes por eventos, de modo que las actualizaciones de ubicación puedan ajustarse por ahorro de energía o condiciones de alarma.
- Transmite la telemetría a través de un enlace celular para que Plaspy reciba datos en vivo o casi en tiempo real para monitoreo.
- Funciona junto con las opciones de configuración del dispositivo para controlar intervalos de reporte y funcionalidades.

## Cómo Plaspy detecta el protocolo

Plaspy escucha en un único endpoint y puerto compartidos para el tráfico entrante de rastreadores y utiliza características de la conexión y de la carga útil para determinar automáticamente el protocolo del rastreador. En la mayoría de los casos, un GT02 configurado para reportar al endpoint de Plaspy será detectado sin necesidad de selección manual dentro de la plataforma.

- El dominio del servidor Plaspy es d.plaspy.com y puede usarse como destino en la configuración del dispositivo.
- La IP del servidor Plaspy es 54.85.159.138 y puede emplearse en lugar del nombre de dominio si se requiere.
- El puerto es 8888 y todos los dispositivos en Plaspy utilizan el mismo puerto para reportes.
- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la configuración del equipo y la SIM.
- Si el GT02 apunta al endpoint de Plaspy y las condiciones de red lo permiten, Plaspy detectará automáticamente el protocolo del rastreador.

## Transporte y contexto de conexión

Los dispositivos GT02 usan datos celulares para comunicarse con Plaspy. La elección del transporte y la configuración en la SIM y en el equipo determinan si la conexión es UDP o TCP, y el dispositivo puede apuntar directamente a Plaspy usando el dominio o la IP indicados a continuación.

- Los dispositivos pueden configurarse para apuntar a d.plaspy.com como dirección del servidor.
- Alternativamente, pueden configurarse con la dirección numérica 54.85.159.138.
- El dispositivo puede configurarse en UDP o TCP en el puerto 8888.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no se requiere una configuración de puerto por modelo.
- La configuración del operador, el APN y el comportamiento de energía del equipo afectan la confiabilidad del transporte.

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar los campos exactos o el comportamiento del protocolo de reporte del GT02; verifique las notas de firmware al solucionar problemas.
- Las revisiones de hardware y las variantes regionales pueden modificar las funciones disponibles o los modos de reporte por defecto.
- La elección del transporte (UDP vs TCP) es configurable en el dispositivo y puede influir en las características de entrega bajo redes móviles.
- Personalizaciones del fabricante o firmware de revendedores pueden introducir diferencias respecto al comportamiento estándar.
- Siempre valide la compatibilidad confirmando que el dispositivo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que el operador permita el transporte seleccionado.
- En caso de duda, consulte el número de serie del dispositivo y la versión de firmware junto con la documentación del fabricante.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GT02 ayuda a asegurar una configuración confiable, facilita la resolución de problemas y permite un funcionamiento predecible a largo plazo con Plaspy. Entender el contexto del protocolo reduce la incertidumbre cuando faltan reportes o el comportamiento difiere de lo esperado.

- Ayuda a confirmar que el dispositivo está configurado para reportar al endpoint y puerto correctos de Plaspy.
- Facilita la interpretación de mensajes de estado del dispositivo y la validación de que la telemetría llegue a la plataforma.
- Permite realizar verificaciones específicas de APN, tipo de transporte y comportamiento de energía cuando ocurren huecos en el rastreo.
- Reduce el tiempo de soporte al clarificar cuándo el origen del problema es firmware o red.
- Permite establecer expectativas adecuadas sobre frecuencia de reporte, precisión y consideraciones de batería o alimentación.

## Por qué usar Plaspy con este protocolo

Usar el Concox GT02 con Plaspy ofrece a las organizaciones una vía sencilla para capturar ubicación de vehículos y activos, indicadores de estado y reportes de eventos en una plataforma centralizada. Las características del hardware GT02, como GPS combinado con conectividad GSM, soporte quad band, antenas integradas, reinicio automático por watchdog y detección de aceleración, lo hacen adecuado para muchos escenarios de rastreo de flotas y activos donde se requiere visibilidad continua o periódica.

Para saber más sobre cómo Plaspy funciona con dispositivos como el GT02, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre el protocolo específico del dispositivo, notas de firmware y especificaciones oficiales del fabricante, confirme la información en el sitio de Concox https://www.iconcox.com/. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación pueden cambiar con el tiempo, por lo que es recomendable consultar los recursos del fabricante.
