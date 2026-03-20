---
slug: /thingsys/ts_p4d/protocol
id: ts_p4d-protocol
sidebar_label: Protocol
title: ThingSys - TS-P4D Protocol
sidebar_class_name: menu_item_tracker
description: Referencia pública del protocolo ThingSys TS P4D para Plaspy con contexto de conexión y guía de detección
keywords:
  - Protocolo ThingSys TS P4D
  - Protocolo GPS ThingSys TS P4D
  - Protocolo ThingSys TS P4D para Plaspy
  - Protocolo de comunicación ThingSys TS P4D
  - Protocolo de rastreo ThingSys TS P4D
  - Compatibilidad TS P4D Plaspy
  - Guía de protocolo para rastreadores GPS
  - Protocolo de rastreo de flotas ThingSys
  - Detección de protocolo de rastreador Plaspy
  - Rastreo de vehículos ThingSys
---

# ThingSys - Protocolo TS-P4D

Esta página ofrece contexto público sobre el protocolo de reporte del rastreador GPS ThingSys TS-P4D cuando se utiliza con la plataforma Plaspy. Explica el papel del protocolo de reporte en la integración del dispositivo, cómo se comunica el rastreador con Plaspy a alto nivel y consideraciones prácticas para configurar y validar la conectividad sin revelar detalles privados de implementación.

Plaspy utiliza una configuración de conexión compartida para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando un equipo reporta al endpoint de Plaspy. El comportamiento exacto del protocolo y las funciones disponibles pueden variar según la versión de firmware, la revisión de hardware y la implementación del fabricante, por lo que esta página se centra en el contexto general de comunicación y en orientación práctica para una integración exitosa.

## Resumen del protocolo

El protocolo de reporte define cómo el TS-P4D envía posiciones GNSS, telemetría de movimiento y estado, y notificaciones de eventos a un servidor remoto. En la práctica, permite que el dispositivo se identifique, transmita datos de ubicación y alarmas en tiempo oportuno, y facilite que un servicio backend como Plaspy normalice esos datos en mapas, alertas e informes.

- Permite la transmisión de posición GNSS, eventos de movimiento por acelerómetro, estado de batería y banderas de alarma a un servidor remoto.
- Transporta la identidad y el estado del dispositivo para que Plaspy pueda asociar los mensajes entrantes con el registro de activo correcto.
- Soporta reportes periódicos y mensajes por evento para equilibrar la visibilidad en tiempo real y la vida de la batería del TS-P4D.
- Proporciona los datos que Plaspy necesita para generar alertas de geocercas, historial de rutas, notificaciones de batería baja y otras funciones telemáticas.
- Funciona sobre métodos de transporte comunes para que puedan adaptarse operadores y configuraciones celulares regionales.

## Cómo detecta Plaspy el protocolo

Plaspy recibe los reportes de los dispositivos en un endpoint y puerto compartidos y detecta automáticamente el protocolo del rastreador cuando llegan los mensajes. En la mayoría de los casos, si el TS-P4D está configurado para reportar al endpoint de Plaspy, no es necesario seleccionar manualmente el protocolo en Plaspy.

- Plaspy escucha en un único puerto consistente para todos los dispositivos, lo que simplifica la configuración y la incorporación.
- Los dispositivos que reportan a Plaspy se identifican mediante los campos de identidad únicos incluidos en los mensajes salientes.
- La detección automática reduce la necesidad de que usted elija un perfil de protocolo al registrar el rastreador en Plaspy.
- La configuración adecuada del dispositivo para apuntar al endpoint de Plaspy suele ser el paso principal para una detección exitosa.
- Si un dispositivo no aparece, verifique la configuración de reporte, la versión de firmware y que el dispositivo esté autorizado a conectar mediante el transporte configurado.

## Transporte y contexto de conexión

El TS-P4D puede configurarse para usar UDP o TCP para reportar, dependiendo del firmware del dispositivo y de la preferencia del usuario. Plaspy acepta ambos tipos de transporte en su endpoint público para que los instaladores seleccionen el que mejor se ajuste a su red y necesidades de confiabilidad.

- El dominio del servidor Plaspy para el reporte de dispositivos es d.plaspy.com y la plataforma también acepta conexiones directas a la IP del servidor 54.85.159.138.
- El dispositivo puede configurarse para usar UDP o TCP hacia Plaspy en el puerto 8888, según el soporte del equipo y las condiciones de la red.
- Todos los dispositivos en Plaspy usan el mismo puerto, lo que simplifica la configuración a través de flotas y modelos.
- Elegir UDP favorece menor sobrecarga mientras que TCP puede ofrecer garantías adicionales de entrega según el comportamiento de la red celular.
- Verifique que los operadores celulares y los firewalls en su despliegue permitan conexiones salientes al endpoint de Plaspy usando el transporte configurado.

## Notas sobre compatibilidad del protocolo

- Los lanzamientos de firmware pueden cambiar el comportamiento del protocolo y los campos disponibles; compruebe la versión de firmware del dispositivo al validar compatibilidad.
- Las revisiones de hardware o las variantes regionales pueden implementar opciones de reporte o bandas de forma diferente y afectar qué modos de transporte están disponibles.
- Algunas funciones, como comandos remotos por SMS o monitoreo de voz, las provee el firmware del dispositivo y están separadas del protocolo de reporte hacia Plaspy.
- La selección de transporte entre UDP y TCP puede afectar el consumo de batería y las características de entrega de mensajes en campo.
- Confirme que el dispositivo esté configurado para apuntar a d.plaspy.com o a la IP del servidor y que el puerto de reporte esté establecido de forma consistente entre dispositivos.
- Siempre valide el comportamiento del dispositivo con un despliegue piloto pequeño antes de expandir a gran escala.

## Por qué es importante entender el protocolo

Comprender cómo se comunica el TS-P4D ayuda a asegurar una integración confiable con Plaspy, acelera la resolución de problemas e informa decisiones sensatas sobre intervalos de reporte y gestión de energía para los activos desplegados.

- Acelera la configuración al clarificar qué ajustes de reporte deben configurarse en el dispositivo para alcanzar Plaspy.
- Facilita el diagnóstico de problemas de conectividad al limitar las verificaciones a transporte, endpoint y versión de firmware.
- Ayuda a equilibrar la frecuencia de reporte y la duración de la batería al alinear el perfil de reporte del dispositivo con los requisitos operativos.
- Favorece una configuración consistente a nivel de flota, ya que Plaspy acepta el mismo puerto y detecta el protocolo automáticamente.
- Mejora la confiabilidad a largo plazo al destacar los impactos de las actualizaciones de firmware y la necesidad de revalidar ajustes tras las actualizaciones del dispositivo.

## Por qué usar Plaspy con este protocolo

Usar el TS-P4D con Plaspy ofrece a las organizaciones visibilidad consolidada sobre ubicación, movimiento y salud del dispositivo para flotas y activos móviles. La combinación de un formato magnético resistente, opciones de batería de larga duración y la ingesta y alertas centralizadas de Plaspy facilita gestionar activos distribuidos con mínimo cableado y mantenimiento.

Plaspy simplifica la incorporación al proporcionar un único endpoint y puerto para todos los dispositivos y al detectar automáticamente el protocolo del rastreador cuando el TS-P4D se configura para reportar. Para saber más sobre Plaspy y cómo soporta el rastreo de flotas y activos, visite https://www.plaspy.com. Para detalles específicos del protocolo del dispositivo, notas de firmware y guías de implementación consulte la documentación del fabricante en https://www.thingsys.com/ ya que el comportamiento del producto puede evolucionar con el tiempo.
