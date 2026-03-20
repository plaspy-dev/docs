---
slug: /gotop/gv3/protocol
id: gv3-protocol
sidebar_label: Protocol
title: GOTOP - GV3 Protocol
sidebar_class_name: menu_item_tracker
description: Resumen público del protocolo del GOTOP GV3 y su compatibilidad con Plaspy, con contexto de conexión y notas prácticas de integración
keywords:
  - protocolo GOTOP GV3
  - protocolo GPS GOTOP GV3
  - protocolo de comunicación GOTOP GV3
  - protocolo de rastreo GOTOP GV3
  - compatibilidad GOTOP GV3 Plaspy
  - integración rastreador vehicular GV3
  - guía protocolo rastreador GPS GV3
  - protocolo monitoreo de flotas GOTOP
  - protocolo de dispositivos Plaspy
  - protocolo telemetría vehicular
---

# GOTOP - Protocolo GV3

Esta página presenta el contexto público del protocolo para usar el rastreador GOTOP GV3 con la plataforma Plaspy. Se enfoca en cómo se comunica el dispositivo en términos generales, los ajustes de conexión que Plaspy expone y las implicaciones prácticas para la integración y la solución de problemas. Es un resumen público del protocolo y no sustituye la documentación del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando el dispositivo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo puede variar según la versión de firmware del GV3, la revisión de hardware y la implementación del fabricante, por lo que la configuración final y el comportamiento de comandos avanzados deben validarse con la documentación de GOTOP y las notas de firmware del dispositivo.

## Resumen del protocolo

El GV3 comunica la ubicación del vehículo, alarmas y estados de entrada a un servidor remoto utilizando su módem celular. El protocolo define cómo se identifica el rastreador, cómo reporta datos GPS y de sensores, y cómo señala condiciones de alarma para que Plaspy pueda ingerir y mostrar esa información en tiempo real.

- Permite el envío de posiciones GNSS y telemetría del GV3 a un endpoint remoto para visualización en mapa e historial.
- Transmite mensajes por eventos como cambios de encendido ACC, pulsos de SOS, alarmas por movimiento y cortes de energía.
- Lleva metadatos de estado útiles para los paneles de Plaspy, incluyendo estado de batería y alimentación principal.
- Proporciona la base para acciones remotas mediadas por Plaspy cuando el rastreador las soporta, por ejemplo control autorizado de inmovilizador.
- Opera sobre un transporte de datos estándar que Plaspy recibe y clasifica para su procesamiento posterior.

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de dispositivos en un único endpoint y puerto compartidos y utiliza esa entrada para determinar automáticamente el protocolo del rastreador. En la mayoría de implementaciones típicas no es necesario seleccionar un protocolo dentro de Plaspy, siempre que el GV3 esté configurado para reportar correctamente al endpoint de Plaspy.

- Plaspy escucha conexiones de rastreadores en el dominio d.plaspy.com y en la IP pública del servidor 54.85.159.138.
- Todos los dispositivos soportados por Plaspy usan el mismo puerto, lo que simplifica la configuración y la incorporación.
- Plaspy detecta automáticamente el protocolo del rastreador cuando el GV3 envía telemetría al endpoint de Plaspy.
- Normalmente usted registra el dispositivo y se asegura de que el rastreador esté apuntando al endpoint de Plaspy; rara vez es necesaria la selección manual del protocolo dentro de Plaspy.
- Si surgen problemas de detección, confirme los ajustes de reporte del dispositivo, la conectividad APN y que el firmware del dispositivo envíe mensajes de posición o latidos periódicos.

## Transporte y contexto de conexión

El GV3 soporta reporte de datos por celular y puede configurarse para usar UDP o TCP según los ajustes del dispositivo y las condiciones de la red. Para el uso con Plaspy, el dispositivo debe enviar sus mensajes al endpoint y puerto públicos de Plaspy para que puedan ser recibidos y procesados.

- El GV3 puede configurarse para usar UDP o TCP para conectarse al endpoint de Plaspy en el puerto 8888.
- Los dispositivos pueden apuntar al dominio d.plaspy.com o directamente a la IP del servidor Plaspy 54.85.159.138 si la configuración del equipo lo requiere.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos soportados para simplificar la configuración y centralizar la ingestión.
- La elección entre UDP y TCP puede verse influida por los valores por defecto del firmware, la fiabilidad de la red y las opciones de configuración del fabricante.
- Asegúrese de que el APN del dispositivo y el plan de datos del operador permitan conexiones salientes al endpoint de Plaspy y que cualquier firewall intermedio permita el transporte seleccionado.

## Notas sobre compatibilidad del protocolo

- Las variaciones de firmware entre unidades GV3 pueden cambiar el tiempo entre mensajes, campos opcionales y tipos de alarma soportados; siempre verifique las notas de la versión de firmware para cambios relacionados con el protocolo.
- Revisiones de hardware o variantes regionales pueden alterar las bandas soportadas y el comportamiento del módem, lo que puede afectar la conectividad pero no el concepto general de reporte.
- Algunas funciones descritas en los resúmenes de producto, como control de inmovilizador, SOS o entradas, pueden requerir cableado o configuración específica en el dispositivo para reportarse correctamente.
- La selección de transporte entre UDP y TCP es una preferencia de configuración del dispositivo; asegúrese de que esté configurado para usar el puerto 8888 y el endpoint de Plaspy.
- La detección automática de protocolo de Plaspy reduce la necesidad de selección manual, pero la correcta configuración de reporte y el registro del dispositivo siguen siendo responsabilidad del usuario.
- Al integrar a gran escala, valide primero un conjunto pequeño de dispositivos para confirmar el comportamiento esperado antes de desplegar masivamente.

## Por qué es importante entender el protocolo

Conocer cómo se comunica el GV3 con Plaspy ayuda a garantizar un rastreo confiable y una resolución más rápida de problemas de conectividad o datos. Un entendimiento práctico del contexto de comunicación facilita la configuración correcta del equipo, la solución eficiente de problemas y un comportamiento predecible en producción.

- Acelera la configuración inicial al dejar claro dónde y cómo apuntar los ajustes de reporte del dispositivo.
- Ayuda a diagnosticar la ausencia de actualizaciones de posición revisando transporte, APN y configuración del endpoint.
- Aclara qué alarmas e entradas reportará el rastreador a Plaspy y cómo estas se muestran en paneles y alertas.
- Apoya decisiones de compatibilidad al planear despliegues en flotas mixtas o con múltiples versiones de firmware.
- Permite una mejor coordinación con instaladores y técnicos de campo al centrar las comprobaciones en la red y la configuración en lugar del comportamiento interno del parser.

## Por qué usar Plaspy con este protocolo

Combinar el GOTOP GV3 con Plaspy ofrece a las organizaciones una forma centralizada de recibir la telemetría del GV3, gestionar alarmas y aprovechar flujos de trabajo de flota para monitoreo y respuesta. Plaspy ingiere las posiciones, alarmas y mensajes de estado del GV3 para que casos de uso como despacho, recuperación y análisis puedan ejecutarse desde una sola plataforma.

El endpoint compartido y la detección automática de protocolo de Plaspy simplifican la incorporación y reducen la carga de configuración en comparación con endpoints personalizados por dispositivo. Para obtener más información sobre Plaspy y cómo puede apoyar despliegues GV3, visite https://www.plaspy.com. Para detalles específicos del protocolo GV3, notas de firmware y guía del fabricante, verifique la información actual del dispositivo en https://www.gotop.cc/ ya que el soporte del protocolo y el comportamiento del firmware pueden cambiar con el tiempo.
