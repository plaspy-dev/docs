---
slug: /eelink/k6/protocol
id: k6-protocol
sidebar_label: Protocol
title: EElink - K6 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del EElink K6 y cómo se comunica con Plaspy para seguimiento GPS y gestión de flotas
keywords:
  - protocolo EElink K6
  - protocolo GPS EElink K6
  - comunicación EElink K6
  - rastreo EElink K6
  - compatibilidad K6 Plaspy
  - protocolo dispositivo K6
  - protocolo rastreador EElink
  - protocolo rastreador GPS Plaspy
  - rastreo vehicular K6
  - seguimiento de activos EElink K6
---

# EElink - Protocolo K6

Esta página presenta el contexto público del protocolo usado por el rastreador GPS EElink K6 con Plaspy. Resume cómo suele comunicarse el dispositivo con Plaspy, qué papel tiene el protocolo de reporte en la entrega de posiciones y estados, y qué ajustes de conexión de alto nivel se utilizan al integrar el equipo en la plataforma Plaspy.

Plaspy emplea ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo comienza a reportar al endpoint de Plaspy. El comportamiento exacto del protocolo y el contenido de los mensajes pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se enfoca en detalles públicos y consideraciones prácticas en lugar de formatos internos de paquetes.

## Descripción general del protocolo

El protocolo de comunicación del K6 define cómo el rastreador envía posición, estado, alarmas y otra telemetría a un servidor remoto y cómo una plataforma como Plaspy reconoce y procesa esos reportes. En términos prácticos, el protocolo vincula la identidad del equipo, el método de transporte y los conjuntos de mensajes utilizados para seguimiento regular, alertas y actualizaciones de configuración.

- Permite que el K6 envíe actualizaciones de ubicación GPS y LBS y reportes de estado a un servidor remoto.
- Transporta datos de identificación para que Plaspy asocie los reportes entrantes con el registro de dispositivo correcto.
- Lleva notificaciones de alarmas y SOS para que los eventos estén disponibles en monitoreo y alertas en tiempo real.
- Soporta actualizaciones de software o configuración por aire cuando el dispositivo y el fabricante proporcionan capacidad OTA.
- Permite que el mismo equipo opere con múltiples plataformas backend según la configuración y las variantes de protocolo soportadas.

## Cómo Plaspy detecta el protocolo

Plaspy acepta conexiones entrantes en un único endpoint y puerto compartido y usa ese punto de entrada para detectar automáticamente el protocolo del rastreador cuando el dispositivo empieza a reportar. En la mayoría de los despliegues, un K6 correctamente configurado comenzará a enviar sus reportes a Plaspy y no será necesaria la selección manual de protocolo dentro de la plataforma.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com, que resuelve al endpoint de la plataforma.
- La IP del servidor Plaspy es 54.85.159.138, una dirección pública utilizada por la plataforma.
- La plataforma escucha en el puerto 8888 y usa el mismo puerto para todos los dispositivos soportados.
- Los dispositivos pueden configurarse para usar UDP o TCP en el puerto 8888 según el soporte del equipo y los requisitos de la red.
- Cuando un K6 reporta al endpoint de Plaspy, la plataforma identificará el formato entrante y mapeará los datos al dispositivo asociado de forma automática.
- En general, usted no necesita seleccionar manualmente un protocolo dentro de Plaspy si el dispositivo está correctamente apuntado al endpoint de Plaspy.

## Contexto de transporte y conexión

Las opciones de conexión determinan cómo el K6 entrega los mensajes a Plaspy, pero no cambian la naturaleza pública de la descripción del protocolo. El K6 soporta subida GPRS para reportes de posición y estado y puede configurarse para dirigir los reportes a un nombre de host o a una IP.

- El dispositivo puede configurarse usando UDP o TCP en el puerto 8888 según la configuración del rastreador y las condiciones de la red.
- Los dispositivos pueden apuntarse al dominio de Plaspy d.plaspy.com o directamente a la IP del servidor 54.85.159.138.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos, lo que simplifica la configuración del servidor entre modelos.
- La selección de transporte (UDP vs TCP) puede afectar características de entrega como la fiabilidad y el comportamiento de retransmisión; elija el transporte soportado por el firmware específico y la red.
- Asegúrese de que el APN y los ajustes GPRS en el K6 sean correctos para que el rastreador pueda establecer una sesión de datos hacia el endpoint de Plaspy.

## Notas sobre compatibilidad del protocolo

- Las unidades K6 pueden soportar múltiples protocolos de reporte; el firmware del fabricante determina el formato de reporte activo.
- Las actualizaciones de firmware y las mejoras OTA proporcionadas por el fabricante pueden cambiar el comportamiento del protocolo o añadir mejoras de compatibilidad.
- Las revisiones de hardware o variantes regionales pueden introducir diferencias en los transportes soportados o en los conjuntos de mensajes.
- Seleccionar UDP o TCP es una decisión de configuración del dispositivo; verifique qué transporte soporta y prefiere el firmware de su K6 específico.
- La integración tiene más probabilidad de éxito cuando el dispositivo está configurado para apuntar a d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Siempre valide el comportamiento del dispositivo contra la documentación del fabricante y las notas de la versión cuando esté solucionando problemas de compatibilidad.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el K6 ayuda a asegurar reportes confiables hacia Plaspy, acelera la resolución de problemas y facilita el mantenimiento a largo plazo de una flota desplegada. Tener claridad sobre las opciones de transporte, las limitaciones del firmware y el comportamiento de identificación reduce el tiempo de resolución cuando los dispositivos no aparecen o cuando los eventos no se entregan como se espera.

- Ayuda a confirmar que el dispositivo apunta al endpoint y puerto correctos de Plaspy.
- Facilita la interpretación de qué tipos de reportes y alarmas enviará el dispositivo a la plataforma.
- Apoya la resolución de problemas cuando los dispositivos no se registran o cuando parecen faltar mensajes.
- Sirve como base para decisiones sobre selección de transporte, actualizaciones de firmware y cambios de configuración.
- Mejora la confiabilidad al alinear las configuraciones del equipo con las expectativas de Plaspy y las condiciones de la red.

## Por qué usar Plaspy con este protocolo

El EElink K6 ofrece un conjunto de funciones versátil —posicionamiento GPS, fallback por LBS, capacidad de voz bidireccional, alarma SOS y registro local de trayectos— que encaja bien con las capacidades centralizadas de seguimiento y monitoreo de Plaspy. Usar Plaspy como backend para los dispositivos K6 proporciona a las organizaciones un endpoint consistente para recibir datos de ubicación y eventos y un único lugar para gestionar alertas, historial y supervisión operativa.

Para obtener más información sobre Plaspy y cómo se integra con rastreadores GPS como el EElink K6, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware e instrucciones de implementación más recientes, verifique la información en el sitio del fabricante https://www.eelink.com.cn/ ya que el soporte de protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
