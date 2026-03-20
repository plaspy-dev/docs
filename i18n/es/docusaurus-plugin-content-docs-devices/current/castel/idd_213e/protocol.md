---
slug: /castel/idd_213e/protocol
id: idd_213e-protocol
sidebar_label: Protocol
title: Castel - IDD-213E Protocol
sidebar_class_name: menu_item_tracker
description: Guía pública del protocolo para usar el rastreador Castel IDD-213E con ajustes de servidor y contexto de conexión para Plaspy
keywords:
  - protocolo Castel IDD-213E
  - protocolo GPS Castel IDD-213E
  - Castel IDD-213E Plaspy
  - protocolo rastreador GPS Castel
  - protocolo de rastreo IDD-213E
  - seguimiento de diagnóstico vehicular
  - integración OBD II y GPS
  - seguimiento de flotas Castel IDD-213E
  - protocolo rastreador GPS 3G
  - compatibilidad rastreadores Plaspy
---

# Castel - Protocolo IDD-213E

Esta página describe el contexto público del protocolo para integrar el Castel IDD-213E con Plaspy. Se centra en cómo el dispositivo se comunica con Plaspy en términos generales, los ajustes de conexión que normalmente configurará en el rastreador y las implicaciones prácticas para el seguimiento y la telemática. No divulga detalles de implementación privados ni formatos confidenciales del fabricante.

Plaspy utiliza ajustes de conexión compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo está correctamente configurado para reportar al endpoint de Plaspy. El comportamiento exacto del protocolo para el IDD-213E puede variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que siempre conviene verificar detalles específicos del equipo con Castel cuando sea necesario.

## Resumen del protocolo

El protocolo de comunicación del IDD-213E regula cómo el dispositivo envía la posición GPS, datos de diagnóstico OBD y eventos de alerta a un servidor backend. En Plaspy, el rastreador remite su telemetría a un endpoint común donde la plataforma identifica los datos entrantes y los procesa para mapas, diagnósticos y alertas.

- Permite que el IDD-213E entregue ubicación GPS y parámetros de diagnóstico OBD a un servidor remoto
- Transmite telemetría como velocidad, RPM, combustible y resúmenes de códigos de diagnóstico para análisis de flota
- Soporta el envío de notificaciones de eventos como exceso de velocidad, conducción brusca, inactividad y alarmas por SMS al backend
- Permite identificar el dispositivo en Plaspy para asociar la telemetría con el registro de vehículo correcto
- Facilita el monitoreo en tiempo real o casi en tiempo real cuando se usa sobre la conexión celular del equipo

## Cómo detecta Plaspy el protocolo

Plaspy ofrece un endpoint de servidor compartido y escucha en un único puerto para todos los dispositivos soportados. Cuando un IDD-213E está apuntado al endpoint de Plaspy y envía su telemetría, Plaspy identifica automáticamente el protocolo del rastreador y enruta los datos al pipeline de procesamiento adecuado. En la mayoría de los casos, los usuarios no necesitan seleccionar manualmente un protocolo dentro de Plaspy.

- Plaspy escucha en un único puerto usado por todos los equipos para simplificar la configuración
- Los dispositivos apuntados al endpoint de Plaspy son detectados automáticamente por la plataforma
- La configuración correcta del dispositivo para reportar al servidor Plaspy es el requisito principal para la detección
- La selección manual de protocolo en Plaspy suele ser innecesaria cuando el equipo reporta al endpoint de Plaspy
- La detección cubre telemetría y tipos de eventos comunes sin exponer detalles internos del dispositivo

## Transporte y contexto de conexión

El IDD-213E puede configurarse para enviar sus datos a un endpoint de Plaspy por la red celular usando UDP o TCP, según soporte del equipo y preferencia del usuario. Plaspy acepta conexiones en un dominio e IP compartidos en el puerto de la plataforma, por lo que puede configurar el rastreador para usar el nombre de dominio o la dirección numérica si su proceso de aprovisionamiento lo requiere.

- El dispositivo puede enviarlos datos vía UDP o TCP en el puerto 8888
- El dominio del servidor Plaspy a usar es d.plaspy.com
- La dirección IP del servidor Plaspy disponible para configuración es 54.85.159.138
- Plaspy usa el mismo puerto para todos los dispositivos soportados para mantener consistencia en las configuraciones
- La elección entre UDP o TCP depende de las opciones de firmware del equipo y del balance deseado entre overhead y comportamiento de entrega

## Notas sobre compatibilidad del protocolo

- Las revisiones de firmware pueden cambiar cómo el IDD-213E formatea y agenda la telemetría; revise las notas de lanzamiento del firmware para detectar cambios en el protocolo
- Revisiones de hardware o variantes regionales pueden exponer distintas opciones de configuración o modos de transporte soportados
- Ajustes por parte del fabricante como intervalos de reporte predeterminados y listas de parámetros OBD pueden variar entre unidades
- Cambiar entre UDP y TCP puede afectar la fiabilidad y la latencia según las condiciones de red y la implementación del dispositivo
- Valide siempre que el equipo esté configurado para reportar a d.plaspy.com o a la IP proporcionada para asegurar la entrega correcta
- Para funciones avanzadas de OBD o bus vehicular, confirme que los protocolos de vehículo específicos soportados por el dispositivo coincidan con las necesidades de su flota

## Por qué es importante entender el protocolo

Comprender cómo el IDD-213E se comunica con Plaspy ayuda a asegurar una configuración fluida, un flujo de datos predecible y diagnósticos fiables para la operación de flotas. Conocer las opciones de transporte, el impacto del firmware y los ajustes del fabricante reduce sorpresas en la integración y acelera la resolución de problemas.

- Ayuda a verificar que el dispositivo reporte al endpoint y puerto de Plaspy correctos
- Facilita el diagnóstico de telemetría faltante o conexiones intermitentes al revisar transporte y ajustes de reporte
- Orienta sobre qué parámetros OBD y elementos de diagnóstico estarán disponibles en Plaspy
- Permite tomar decisiones informadas sobre usar UDP o TCP según la fiabilidad de la red y las prioridades de datos
- Reduce el tiempo invertido en validar compatibilidad vehicular al desplegar a gran escala

## Por qué usar Plaspy con este protocolo

Usar el Castel IDD-213E con Plaspy brinda a las flotas visibilidad tanto de la ubicación del vehículo como de los datos de diagnóstico OBD a través de un backend unificado. El diseño plug and play del dispositivo, su soporte para OBD II y estándares para vehículos pesados, y la conectividad celular se combinan con la detección automática de protocolos de Plaspy y su arquitectura de puerto único para simplificar despliegues a gran escala.

Si usted está evaluando opciones para seguimiento, diagnóstico remoto o monitoreo de comportamiento de conductores, configurar los IDD-213E para reportar al endpoint de Plaspy puede reducir la carga de configuración y centralizar la gestión de datos. Para saber más sobre cómo Plaspy maneja la integración de dispositivos y las funciones para flotas, visite https://www.plaspy.com. También verifique los detalles actuales del protocolo y el comportamiento del firmware con el fabricante en http://www.castelecom.com/ ya que el soporte y la implementación del protocolo pueden cambiar con el tiempo.
