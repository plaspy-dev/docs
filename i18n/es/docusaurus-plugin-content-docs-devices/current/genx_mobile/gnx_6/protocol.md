---
slug: /genx_mobile/gnx_6/protocol
id: gnx_6-protocol
sidebar_label: Protocol
title: GenX Mobile - GNX-6 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GNX-6 y cómo se comunica con los servidores de Plaspy
keywords:
  - protocolo GenX Mobile GNX 6
  - protocolo GPS GNX 6
  - rastreador GenX Mobile Plaspy
  - compatibilidad GNX 6 Plaspy
  - protocolo de comunicación GenX Mobile
  - protocolo de seguimiento GNX 6
  - protocolo de dispositivo Plaspy
  - protocolo rastreador GPS GenX Mobile
  - seguimiento de flotas GNX 6
  - eventos acelerómetro GNX 6
---

# GenX Mobile - Protocolo GNX-6

Esta página ofrece una visión pública y práctica del contexto del protocolo de comunicación para usar el rastreador GenX Mobile GNX-6 con la plataforma Plaspy. Explica cómo el GNX-6 normalmente reporta ubicaciones y eventos a Plaspy sin revelar lógicas de análisis privadas ni detalles confidenciales del fabricante.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el equipo comienza a reportar a la plataforma. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que la configuración y el funcionamiento pueden diferir entre unidades y lanzamientos de firmware.

## Visión general del protocolo

El protocolo es el mecanismo que utiliza el GNX-6 para intercambiar datos con un servidor y así hacer que la posición, el estado y la información de eventos estén disponibles en una plataforma de gestión de flotas como Plaspy. Esta visión general se centra en aspectos públicos y no sensibles de cómo el protocolo posibilita telemetría útil e identificación del dispositivo, dejando los detalles internos al fabricante.

- Permite que el GNX-6 envíe actualizaciones de posición y telemetría con marca de tiempo a un servidor remoto para seguimiento y monitoreo.
- Transporta identificadores del dispositivo e información de estado que permiten a Plaspy asociar los mensajes entrantes con una unidad GNX-6 específica.
- Lleva reportes de eventos como movimiento, encendido del vehículo o eventos detectados por el acelerómetro para que Plaspy muestre alertas y datos históricos.
- Soporta transporte por UDP o TCP según esté configurado en el dispositivo para adaptarse a requisitos de conectividad y fiabilidad.
- Permite patrones de entrega de comandos y configuración remota cuando el dispositivo lo soporta y el endpoint del servidor lo permite.

## Cómo Plaspy detecta el protocolo

Plaspy recibe el tráfico de los dispositivos en un único endpoint y puerto compartidos e identifica automáticamente el protocolo del dispositivo, por lo que la mayoría de los usuarios no necesitan seleccionar un protocolo manualmente. Si el GNX-6 está apuntando al endpoint de Plaspy y configurado correctamente, la plataforma detectará y procesará los mensajes entrantes con el manejo apropiado.

- Plaspy escucha en un puerto compartido usado por todos los dispositivos soportados, de modo que una sola configuración puede funcionar con muchos modelos de rastreadores.
- Los dispositivos que reportan a d.plaspy.com son enrutados al servicio de ingestión de Plaspy para manejo automático del protocolo.
- Plaspy también acepta conexiones al IP del servidor 54.85.159.138 si se utiliza la IP directa en lugar del nombre de dominio.
- La detección automática reduce pasos de configuración en la plataforma cuando los parámetros de reporte del GNX-6 coinciden con el endpoint y transporte esperados.
- Si un dispositivo no está siendo detectado, confirme que esté configurado para reportar a d.plaspy.com o 54.85.159.138 usando el transporte y puerto correctos.

## Transporte y contexto de conexión

La selección del transporte y del endpoint es importante para establecer comunicación confiable entre el GNX-6 y Plaspy. El GNX-6 puede configurarse para usar UDP o TCP según las capacidades del dispositivo, las condiciones de red y la preferencia administrativa.

- El GNX-6 puede configurarse para enviar datos usando UDP o TCP en el puerto 8888 según soporte y configuración del equipo.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados, por lo que el rastreador puede usar un único puerto de salida.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o al IP 54.85.159.138 si así se prefiere.
- UDP suele emplearse para reportes de menor latencia, mientras que TCP puede escogerse para entrega más fiable cuando el rastreador lo soporta.
- Consideraciones a nivel de red como NAT del operador, reglas de firewall o configuraciones APN pueden afectar la conectividad y deben validarse durante la puesta en marcha.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware pueden cambiar el tiempo exacto de los mensajes, los eventos disponibles y los campos opcionales que expone el GNX-6.
- Revisiones de hardware pueden alterar el comportamiento de sensores o las entradas disponibles que el protocolo puede reportar a Plaspy.
- Los comandos de configuración del lado del fabricante y los parámetros de reporte por defecto pueden diferir entre lotes de producción.
- Elegir UDP frente a TCP afecta la semántica de entrega y puede influir en cómo Plaspy recibe y procesa los reportes.
- Verifique siempre que el GNX-6 esté configurado para enviar a d.plaspy.com o 54.85.159.138 en el puerto 8888 para la detección automática por parte de Plaspy.
- Consulte la documentación de GenX Mobile al solucionar preguntas a nivel de protocolo o comportamientos inesperados del dispositivo.
- Valide los identificadores de dispositivo y los intervalos de reporte antes de desplegar grandes flotas para asegurar una ingestión consistente en Plaspy.

## Por qué es importante entender el protocolo

Tener una comprensión clara y práctica de cómo el GNX-6 se comunica con Plaspy facilita una configuración fiable, una resolución de problemas más eficiente y una operación predecible a largo plazo. Conocer el contexto público del protocolo ahorra tiempo durante los despliegues y ayuda a los equipos a tomar decisiones informadas sobre transporte y configuración.

- Asegura la configuración correcta de la red y del APN para que el GNX-6 alcance d.plaspy.com o 54.85.159.138 de forma fiable.
- Ayuda a identificar si conviene usar UDP o TCP según cobertura, latencia y necesidades de entrega.
- Facilita el diagnóstico de problemas de conectividad confirmando que el dispositivo reporte al puerto 8888 y al endpoint de Plaspy.
- Apoya la planificación ante diferencias de firmware o hardware que podrían cambiar el comportamiento de reporte en una flota.
- Permite coordinar pruebas con Plaspy para confirmar que los eventos del dispositivo y los reportes del acelerómetro se procesen como se espera.

## Por qué usar Plaspy con este protocolo

Usar el GenX Mobile GNX-6 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, monitoreo de eventos e informes a nivel de flota. La plataforma de Plaspy está diseñada para ingerir tráfico compatible de rastreadores y presentarlo mediante paneles y alertas, de modo que las organizaciones puedan supervisar activos, revisar rutas históricas y recibir notificaciones de eventos derivadas de los reportes del dispositivo.

Si desea conocer más sobre cómo Plaspy trabaja con dispositivos como el GNX-6 y explorar las funciones de la plataforma, por favor visite https://www.plaspy.com. El soporte de protocolo, el comportamiento del firmware y los detalles de implementación del dispositivo pueden cambiar con el tiempo, por lo que verifique la información más reciente específica del dispositivo en el sitio del fabricante http://www.genxmobile.com/ antes de despliegues a gran escala.
