---
slug: /lk_gps/lk980/protocol
id: lk980-protocol
sidebar_label: Protocol
title: LK-GPS - LK980 Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo del LK-GPS LK980 y cómo se comunica con Plaspy para integración y seguimiento fiable
keywords:
  - protocolo LK GPS LK980
  - protocolo rastreador LK980
  - comunicación LK GPS LK980
  - protocolo seguimiento LK980
  - compatibilidad LK980 Plaspy
  - guía protocolo rastreador LK GPS
  - protocolo rastreador 4G LK980
  - protocolo dispositivo Plaspy
  - rastreo de vehículo LK980
  - rastreo de flota LK980
---

# LK-GPS - Protocolo LK980

Esta página describe el contexto público del protocolo para usar el rastreador LK-GPS LK980 con Plaspy. Explica, a alto nivel, cómo se comunica el dispositivo, qué ajustes de conexión se suelen configurar para apuntarlo a Plaspy y qué aspectos del ciclo de reporte son relevantes para una integración exitosa. El objetivo es aclarar la información pública no sensible que ayuda en la configuración y la resolución de problemas, dejando los detalles internos del firmware al fabricante.

El LK980 es un rastreador vehicular 4G compacto con antenas GPS y GSM integradas y funciones como alarma por batería baja, alarma por vibración, alarma por extracción, seguimiento de rutas históricas y alertas por exceso de velocidad. Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador. El comportamiento exacto del protocolo puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que conviene validar el comportamiento del equipo con la documentación más reciente del fabricante.

## Resumen del protocolo

El protocolo de comunicación del LK980 define cómo el dispositivo se identifica, reporta posición y estado, y transmite alarmas y telemetría a un servidor remoto como Plaspy. En términos generales, el protocolo conecta los eventos del hardware del dispositivo con la plataforma en la nube para que la posición, el estado de batería y las condiciones de alarma lleguen como datos utilizables para monitoreo e informes.

- Permite que el rastreador reporte ubicación GPS y eventos de movimiento a un servidor remoto
- Transporta información de estado del dispositivo, como nivel de batería y banderas de alarma, para que Plaspy las interprete
- Permite al servidor recibir datos de rutas históricas y actualizaciones periódicas de estado desde el dispositivo
- Soporta actualizaciones en tiempo real cuando el dispositivo tiene conectividad celular para seguimiento en vivo
- Sirve como base para funciones de la plataforma como alertas, informes de geocercas y reproducción de rutas

## Cómo detecta Plaspy el protocolo

Plaspy recibe el tráfico de rastreadores en un único punto de conexión compartido y utiliza esa entrada para determinar cómo interpretar los datos entrantes. Para los usuarios esto suele significar que se requiere poca configuración manual dentro de Plaspy si el rastreador está correctamente apuntado al endpoint de Plaspy.

- El dominio del servidor de Plaspy es d.plaspy.com y la IP pública para direccionamiento directo es 54.85.159.138
- Plaspy escucha en el puerto 8888 y todos los dispositivos en Plaspy usan el mismo puerto
- Los dispositivos que reportan a Plaspy pueden usar UDP o TCP en el puerto 8888 según el soporte y la configuración del equipo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que normalmente no es necesaria la selección manual del protocolo cuando el dispositivo está bien configurado
- Si un dispositivo muestra un comportamiento distinto por firmware o configuración, la detección puede requerir verificar los ajustes de reporte y la versión de firmware del equipo

## Transporte y contexto de conexión

Las elecciones de transporte y conexión afectan cómo el LK980 alcanza Plaspy, pero no cambian el hecho de que los datos se entregan al mismo endpoint de Plaspy. El dispositivo puede configurarse para enviar su telemetría por UDP o TCP al listener de Plaspy en el puerto 8888.

- El dispositivo puede configurarse para usar UDP o TCP en el puerto 8888
- Los equipos pueden apuntar al nombre DNS d.plaspy.com o al host numérico 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos soportados, lo que simplifica la configuración en flotas mixtas
- La selección de transporte (UDP vs TCP) puede afectar las garantías de entrega y el comportamiento cuando la conectividad celular es intermitente
- Aspectos a nivel de red como APN, plan de datos de la SIM y restricciones del operador son relevantes para la conectividad exitosa, pero se gestionan fuera del propio protocolo

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar la cadencia de mensajes, los campos disponibles o la telemetría opcional que envía el dispositivo
- Las revisiones de hardware u accesorios opcionales pueden añadir o eliminar fuentes de telemetría, como sensores adicionales
- Las opciones de configuración del fabricante pueden alterar la selección de transporte y los formatos de direccionamiento del servidor
- Algunas funciones descritas por el fabricante, como vista de calles o consulta multiplataforma, son características de la plataforma que dependen de un reporte correcto y del parseo en la plataforma
- Verifique la compatibilidad del dispositivo con Plaspy asegurándose de que el equipo apunte a d.plaspy.com o 54.85.159.138 en el puerto 8888 y que utilice un transporte soportado
- Revise siempre la configuración del dispositivo para APN y requisitos de red cuando integre a escala

## Por qué es importante entender el protocolo

Tener un entendimiento práctico del protocolo del rastreador contribuye a garantizar reportes confiables, agilizar la resolución de problemas y lograr una operación predecible a largo plazo con Plaspy. Saber qué se espera que envíe el dispositivo y cómo la plataforma lo recibe reduce la fricción en la integración y mejora la confianza operativa.

- Acelera la configuración inicial confirmando la dirección del servidor y el tipo de transporte correctos
- Ayuda a aislar problemas de conectividad frente a problemas de interpretación en Plaspy
- Facilita la explicación de brechas de datos o telemetría inusual al fabricante del dispositivo
- Apoya la toma de decisiones sobre transporte y ajustes de energía que afectan la vida de la batería y la cadencia de reporte
- Permite despliegues controlados y validación al actualizar firmware o desplegar en una flota

## Por qué usar Plaspy con este protocolo

Usar el LK-GPS LK980 con Plaspy ofrece una vía práctica para obtener visibilidad en tiempo real, manejo de alarmas y reproducción histórica de rutas sin tener que seleccionar el protocolo por cada dispositivo. El endpoint compartido de Plaspy y la detección automática de protocolo reducen pasos manuales en la configuración y permiten que las organizaciones se concentren en los flujos operativos en lugar de los detalles de parseo de bajo nivel.

Si desea obtener más información sobre cómo Plaspy puede gestionar dispositivos LK980 y otros rastreadores, visite https://www.plaspy.com. Para detalles de protocolo específicos del dispositivo, notas de firmware e información de implementación más actualizada, consulte la documentación del fabricante en https://www.lk-gps.com ya que el comportamiento del equipo y el soporte del protocolo pueden cambiar con el tiempo.
